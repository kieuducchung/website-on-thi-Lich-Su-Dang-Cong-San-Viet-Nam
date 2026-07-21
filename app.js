(() => {
  "use strict";

  const STORAGE_KEYS = {
    theme: "lsd_theme",
    activeTab: "lsd_active_tab",
    studyMarked: "lsd_study_marked",
    studyShown: "lsd_study_shown",
    shortMarked: "lsd_short_marked",
    shortOpen: "lsd_short_open",
    essayMarked: "lsd_essay_marked",
    essayOpen: "lsd_essay_open"
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const readSet = (key) => {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "[]");
      return new Set(Array.isArray(value) ? value.map(Number) : []);
    } catch {
      return new Set();
    }
  };

  const saveSet = (key, set) => localStorage.setItem(key, JSON.stringify([...set]));

  const escapeHTML = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const normalizeText = (value = "") => String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const shuffle = (array) => {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const formatTime = (seconds) => {
    const safe = Math.max(0, Math.floor(seconds));
    const minutes = Math.floor(safe / 60);
    const secs = safe % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const toast = (message) => {
    const element = $("#toast");
    element.textContent = message;
    element.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => element.classList.remove("show"), 2200);
  };

  const scrollToElement = (element) => {
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "center" });
    element.classList.add("highlight");
    setTimeout(() => element.classList.remove("highlight"), 700);
  };

  // ========================
  // GIAO DIỆN CHUNG
  // ========================

  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || "light";
  document.documentElement.dataset.theme = savedTheme;
  updateThemeButton();

  $("#themeToggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem(STORAGE_KEYS.theme, next);
    updateThemeButton();
  });

  function updateThemeButton() {
    const button = $("#themeToggle");
    if (!button) return;
    const dark = document.documentElement.dataset.theme === "dark";
    button.textContent = dark ? "☀️" : "🌙";
    button.title = dark ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối";
  }

  const activateMainTab = (tabName) => {
    $$(".main-tab").forEach((button) => button.classList.toggle("active", button.dataset.tab === tabName));
    $$(".tab-panel").forEach((panel) => panel.classList.remove("active"));
    $(`#${tabName}Tab`)?.classList.add("active");
    localStorage.setItem(STORAGE_KEYS.activeTab, tabName);
  };

  $$(".main-tab").forEach((button) => {
    button.addEventListener("click", () => activateMainTab(button.dataset.tab));
  });

  activateMainTab(localStorage.getItem(STORAGE_KEYS.activeTab) || "quiz");

  $("#studyModeBtn").addEventListener("click", () => setQuizMode("study"));
  $("#examModeBtn").addEventListener("click", () => setQuizMode("exam"));

  function setQuizMode(mode) {
    const study = mode === "study";
    $("#studyModeBtn").classList.toggle("active", study);
    $("#examModeBtn").classList.toggle("active", !study);
    $("#studyMode").classList.toggle("active", study);
    $("#examMode").classList.toggle("active", !study);
  }

  // ========================
  // CHẾ ĐỘ HỌC TRẮC NGHIỆM
  // ========================

  const studyState = {
    marked: readSet(STORAGE_KEYS.studyMarked),
    shown: readSet(STORAGE_KEYS.studyShown),
    search: "",
    filter: "all",
    view: "all",
    current: 0
  };

  function getStudyFiltered() {
    const query = normalizeText(studyState.search.trim());
    return questions.filter((item) => {
      const markedMatch = studyState.filter !== "marked" || studyState.marked.has(item.id);
      const haystack = normalizeText(`${item.question} ${Object.values(item.options).join(" ")}`);
      return markedMatch && (!query || haystack.includes(query));
    });
  }

  function renderStudy() {
    const filtered = getStudyFiltered();
    if (studyState.current >= filtered.length) studyState.current = Math.max(0, filtered.length - 1);

    renderStudyNavigator(filtered);
    const visible = studyState.view === "single" ? filtered.slice(studyState.current, studyState.current + 1) : filtered;
    const list = $("#studyList");

    if (!visible.length) {
      list.innerHTML = '<div class="empty-state">Không tìm thấy câu hỏi phù hợp.</div>';
    } else {
      list.innerHTML = visible.map((item) => renderStudyCard(item)).join("");
    }

    $("#studySingleNav").classList.toggle("hidden", studyState.view !== "single" || !filtered.length);
    $("#studyPosition").textContent = filtered.length ? `${studyState.current + 1} / ${filtered.length}` : "0 / 0";
    $("#studyPrev").disabled = studyState.current <= 0;
    $("#studyNext").disabled = studyState.current >= filtered.length - 1;
  }

  function renderStudyCard(item) {
    const isMarked = studyState.marked.has(item.id);
    const isShown = studyState.shown.has(item.id);
    return `
      <article class="question-card" id="study-card-${item.id}" data-id="${item.id}">
        <div class="question-head">
          <div>
            <span class="question-number">Câu ${item.id}</span>
            <h3 class="question-title">${escapeHTML(item.question)}</h3>
          </div>
          <button class="mark-button study-mark ${isMarked ? "active" : ""}" data-id="${item.id}" type="button" aria-label="Đánh dấu câu ${item.id}">⭐</button>
        </div>
        <div class="options-list">
          ${Object.entries(item.options).map(([key, value]) => `
            <div class="option-row ${isShown && key === item.answer ? "correct" : ""}">
              <span class="option-key">${key}.</span>
              <span>${escapeHTML(value)}</span>
            </div>
          `).join("")}
        </div>
        <div class="answer-actions">
          <button class="secondary-button study-toggle-answer" data-id="${item.id}" type="button">
            ${isShown ? "🙈 Ẩn đáp án" : "👁 Hiện đáp án"}
          </button>
          ${isShown ? `<span class="answer-badge correct">Đáp án đúng: ${item.answer}</span>` : ""}
        </div>
      </article>
    `;
  }

  function renderStudyNavigator(filtered) {
    $("#studyNavigator").innerHTML = filtered.map((item, index) => `
      <button class="nav-number ${studyState.view === "single" && index === studyState.current ? "active" : ""} ${studyState.marked.has(item.id) ? "marked" : ""}"
        type="button" data-study-nav="${index}" title="Câu ${item.id}">${item.id}</button>
    `).join("");
  }

  $("#studySearch").addEventListener("input", (event) => {
    studyState.search = event.target.value;
    studyState.current = 0;
    renderStudy();
  });
  $("#studyFilter").addEventListener("change", (event) => {
    studyState.filter = event.target.value;
    studyState.current = 0;
    renderStudy();
  });
  $("#studyView").addEventListener("change", (event) => {
    studyState.view = event.target.value;
    studyState.current = 0;
    renderStudy();
  });
  $("#showAllStudyAnswers").addEventListener("click", () => {
    getStudyFiltered().forEach((item) => studyState.shown.add(item.id));
    saveSet(STORAGE_KEYS.studyShown, studyState.shown);
    renderStudy();
  });
  $("#hideAllStudyAnswers").addEventListener("click", () => {
    getStudyFiltered().forEach((item) => studyState.shown.delete(item.id));
    saveSet(STORAGE_KEYS.studyShown, studyState.shown);
    renderStudy();
  });
  $("#clearStudyProgress").addEventListener("click", () => {
    if (!confirm("Xóa toàn bộ câu đánh dấu và trạng thái hiện đáp án của chế độ học?")) return;
    studyState.marked.clear();
    studyState.shown.clear();
    saveSet(STORAGE_KEYS.studyMarked, studyState.marked);
    saveSet(STORAGE_KEYS.studyShown, studyState.shown);
    renderStudy();
    toast("Đã xóa trạng thái học");
  });
  $("#studyPrev").addEventListener("click", () => {
    studyState.current = Math.max(0, studyState.current - 1);
    renderStudy();
  });
  $("#studyNext").addEventListener("click", () => {
    const length = getStudyFiltered().length;
    studyState.current = Math.min(length - 1, studyState.current + 1);
    renderStudy();
  });

  $("#studyMode").addEventListener("click", (event) => {
    const markButton = event.target.closest(".study-mark");
    if (markButton) {
      const id = Number(markButton.dataset.id);
      studyState.marked.has(id) ? studyState.marked.delete(id) : studyState.marked.add(id);
      saveSet(STORAGE_KEYS.studyMarked, studyState.marked);
      renderStudy();
      return;
    }

    const answerButton = event.target.closest(".study-toggle-answer");
    if (answerButton) {
      const id = Number(answerButton.dataset.id);
      studyState.shown.has(id) ? studyState.shown.delete(id) : studyState.shown.add(id);
      saveSet(STORAGE_KEYS.studyShown, studyState.shown);
      renderStudy();
      return;
    }

    const navButton = event.target.closest("[data-study-nav]");
    if (navButton) {
      const index = Number(navButton.dataset.studyNav);
      if (studyState.view === "single") {
        studyState.current = index;
        renderStudy();
      } else {
        const item = getStudyFiltered()[index];
        scrollToElement($(`#study-card-${item.id}`));
      }
    }
  });

  // ========================
  // CHẾ ĐỘ THI
  // ========================

  const examState = {
    active: false,
    submitted: false,
    items: [],
    answers: new Map(),
    marked: new Set(),
    locked: new Set(),
    feedbackMode: "immediate",
    view: "single",
    filter: "all",
    search: "",
    current: 0,
    durationSeconds: 45 * 60,
    remainingSeconds: 45 * 60,
    startedAt: null,
    submittedAt: null,
    timerId: null,
    lastConfig: null,
    result: null
  };

  function buildExamItems(sourceQuestions, shuffleAnswersEnabled) {
    return sourceQuestions.map((question) => {
      let options = Object.entries(question.options).map(([sourceKey, text]) => ({ sourceKey, text }));
      if (shuffleAnswersEnabled) options = shuffle(options);
      return { question, options };
    });
  }

  function startExam(sourceOverride = null) {
    const countInput = Number($("#examQuestionCount").value);
    const minutesInput = Number($("#examMinutes").value);
    const count = Math.min(questions.length, Math.max(1, Number.isFinite(countInput) ? countInput : questions.length));
    const minutes = Math.min(300, Math.max(1, Number.isFinite(minutesInput) ? minutesInput : 45));
    const feedbackMode = $("#examFeedbackMode").value;
    const shouldShuffleQuestions = $("#shuffleQuestions").checked;
    const shouldShuffleAnswers = $("#shuffleAnswers").checked;

    let source = sourceOverride ? [...sourceOverride] : [...questions];
    if (!sourceOverride && shouldShuffleQuestions) source = shuffle(source);
    source = source.slice(0, sourceOverride ? source.length : count);

    examState.active = true;
    examState.submitted = false;
    examState.items = buildExamItems(source, shouldShuffleAnswers);
    examState.answers = new Map();
    examState.marked = new Set();
    examState.locked = new Set();
    examState.feedbackMode = feedbackMode;
    examState.view = "single";
    examState.filter = "all";
    examState.search = "";
    examState.current = 0;
    examState.durationSeconds = minutes * 60;
    examState.remainingSeconds = minutes * 60;
    examState.startedAt = Date.now();
    examState.submittedAt = null;
    examState.result = null;
    examState.lastConfig = { count, minutes, feedbackMode, shouldShuffleQuestions, shouldShuffleAnswers };

    $("#examSearch").value = "";
    $("#examFilter").value = "all";
    $("#examView").value = "single";
    $("#examSetup").classList.add("hidden");
    $("#examResult").classList.add("hidden");
    $("#examWorkspace").classList.remove("hidden");
    clearInterval(examState.timerId);
    examState.timerId = setInterval(tickExam, 1000);
    renderExam();
    updateTimerDisplay();
    window.scrollTo({ top: $("#quizTab").offsetTop - 80, behavior: "smooth" });
  }

  function tickExam() {
    if (!examState.active || examState.submitted) return;
    examState.remainingSeconds -= 1;
    updateTimerDisplay();
    if (examState.remainingSeconds <= 0) {
      examState.remainingSeconds = 0;
      submitExam(true);
    }
  }

  function updateTimerDisplay() {
    $("#examTimer").textContent = formatTime(examState.remainingSeconds);
    $("#examTimer").style.color = examState.remainingSeconds <= 300 ? "var(--danger)" : "var(--primary)";
  }

  function getExamFiltered() {
    const query = normalizeText(examState.search.trim());
    return examState.items.map((item, index) => ({ ...item, examIndex: index })).filter(({ item, question, examIndex }) => {
      const q = question || item?.question;
      const answered = examState.answers.has(examIndex);
      let filterMatch = true;
      if (examState.filter === "answered") filterMatch = answered;
      if (examState.filter === "unanswered") filterMatch = !answered;
      if (examState.filter === "marked") filterMatch = examState.marked.has(examIndex);
      const haystack = normalizeText(`${q.question} ${Object.values(q.options).join(" ")}`);
      return filterMatch && (!query || haystack.includes(query));
    });
  }

  function renderExam() {
    const filtered = getExamFiltered();
    if (examState.current >= filtered.length) examState.current = Math.max(0, filtered.length - 1);

    renderExamNavigator();
    updateExamProgress();

    const visible = examState.view === "single" ? filtered.slice(examState.current, examState.current + 1) : filtered;
    const container = $("#examQuestions");
    if (!visible.length) {
      container.innerHTML = '<div class="empty-state">Không có câu nào phù hợp với bộ lọc.</div>';
    } else {
      container.innerHTML = visible.map((entry) => renderExamCard(entry)).join("");
    }

    $("#examSingleNav").classList.toggle("hidden", examState.view !== "single" || !filtered.length);
    $("#examPosition").textContent = filtered.length ? `${examState.current + 1} / ${filtered.length}` : "0 / 0";
    $("#examPrev").disabled = examState.current <= 0;
    $("#examNext").disabled = examState.current >= filtered.length - 1;
  }

  function renderExamCard(entry) {
    const { question, options } = entry;
    const index = entry.examIndex;
    const selected = examState.answers.get(index);
    const marked = examState.marked.has(index);
    const locked = examState.locked.has(index) || examState.submitted;
    const reveal = examState.submitted || (examState.feedbackMode === "immediate" && selected);

    return `
      <article class="question-card" id="exam-card-${index}">
        <div class="question-head">
          <div>
            <span class="question-number">Câu ${index + 1} <small>(câu gốc ${question.id})</small></span>
            <h3 class="question-title">${escapeHTML(question.question)}</h3>
          </div>
          <button class="mark-button exam-mark ${marked ? "active" : ""}" data-index="${index}" type="button">⭐</button>
        </div>
        <div class="options-list">
          ${options.map((option, optionIndex) => {
            const label = String.fromCharCode(65 + optionIndex);
            const isSelected = selected === option.sourceKey;
            const isCorrect = option.sourceKey === question.answer;
            const rowClass = reveal ? (isCorrect ? "correct" : (isSelected ? "incorrect" : "")) : "";
            return `
              <label class="option-row ${rowClass}">
                <input type="radio" name="exam-${index}" value="${option.sourceKey}" data-exam-index="${index}"
                  ${isSelected ? "checked" : ""} ${locked ? "disabled" : ""} />
                <span class="option-key">${label}.</span>
                <span>${escapeHTML(option.text)}</span>
              </label>
            `;
          }).join("")}
        </div>
        <div class="answer-actions">
          ${reveal ? renderExamFeedback(entry, selected) : ""}
        </div>
      </article>
    `;
  }

  function renderExamFeedback(entry, selected) {
    const correctOptionIndex = entry.options.findIndex((option) => option.sourceKey === entry.question.answer);
    const correctLabel = String.fromCharCode(65 + correctOptionIndex);
    if (!selected) return `<span class="answer-badge incorrect">Chưa trả lời · Đáp án đúng: ${correctLabel}</span>`;
    const correct = selected === entry.question.answer;
    return `<span class="answer-badge ${correct ? "correct" : "incorrect"}">${correct ? "✓ Chính xác" : `✗ Chưa đúng · Đáp án đúng: ${correctLabel}`}</span>`;
  }

  function renderExamNavigator() {
    $("#examNavigator").innerHTML = examState.items.map((item, index) => {
      const filtered = getExamFiltered();
      const currentEntry = filtered[examState.current];
      const active = examState.view === "single" && currentEntry?.examIndex === index;
      return `
        <button class="nav-number ${examState.answers.has(index) ? "answered" : ""} ${examState.marked.has(index) ? "marked" : ""} ${active ? "active" : ""}"
          data-exam-nav="${index}" type="button" title="Câu ${index + 1}">${index + 1}</button>
      `;
    }).join("");
  }

  function updateExamProgress() {
    const answered = examState.answers.size;
    const total = examState.items.length;
    const percent = total ? Math.round((answered / total) * 100) : 0;
    $("#examProgressText").textContent = `${answered}/${total} đã trả lời`;
    $("#examPercent").textContent = `${percent}%`;
    $("#examProgressBar").style.width = `${percent}%`;
  }

  function submitExam(auto = false) {
    if (!examState.active || examState.submitted) return;
    const unanswered = examState.items.length - examState.answers.size;
    if (!auto && unanswered > 0 && !confirm(`Bạn còn ${unanswered} câu chưa trả lời. Vẫn nộp bài?`)) return;

    clearInterval(examState.timerId);
    examState.submitted = true;
    examState.active = false;
    examState.submittedAt = Date.now();

    let correct = 0;
    const wrongItems = [];
    examState.items.forEach((entry, index) => {
      const selected = examState.answers.get(index);
      if (selected === entry.question.answer) correct += 1;
      else wrongItems.push(entry.question);
    });

    const total = examState.items.length;
    const wrong = total - correct;
    const percentage = total ? Math.round((correct / total) * 100) : 0;
    const score = total ? (correct / total * 10).toFixed(2) : "0.00";
    const usedSeconds = Math.max(0, Math.round((examState.submittedAt - examState.startedAt) / 1000));

    examState.result = { correct, wrong, total, percentage, score, usedSeconds, wrongItems };
    $("#examWorkspace").classList.add("hidden");
    renderExamResult(auto);
    $("#examResult").classList.remove("hidden");
    window.scrollTo({ top: $("#examResult").offsetTop - 100, behavior: "smooth" });
    if (auto) toast("Hết giờ, bài thi đã được nộp tự động");
  }

  function renderExamResult(auto) {
    const result = examState.result;
    $("#examResult").innerHTML = `
      <div class="result-card">
        <div class="result-header">
          <div class="score-circle" style="--score-angle:${result.percentage * 3.6}deg"><strong>${result.score}</strong></div>
          <div class="score-label">Điểm: ${result.score}/10</div>
          <span class="eyebrow">${auto ? "Hết giờ" : "Đã nộp bài"}</span>
          <h2>Kết quả bài thi</h2>
          <p>${result.percentage >= 80 ? "Kết quả rất tốt!" : result.percentage >= 50 ? "Bạn đã nắm được phần lớn kiến thức." : "Hãy xem lại các câu sai và luyện tập thêm."}</p>
        </div>
        <div class="result-grid">
          <div class="result-stat"><strong>${result.correct}</strong><span>Số câu đúng</span></div>
          <div class="result-stat"><strong>${result.wrong}</strong><span>Số câu sai</span></div>
          <div class="result-stat"><strong>${result.percentage}%</strong><span>Tỉ lệ đúng</span></div>
          <div class="result-stat"><strong>${formatTime(result.usedSeconds)}</strong><span>Thời gian làm</span></div>
        </div>
        <div class="result-actions">
          <button id="retryExam" class="primary-button" type="button">Làm lại</button>
          <button id="retryWrong" class="secondary-button" type="button" ${result.wrongItems.length ? "" : "disabled"}>Làm lại câu sai</button>
          <button id="showExamReview" class="secondary-button" type="button">Xem toàn bộ đáp án</button>
          <button id="backExamSetup" class="ghost-button" type="button">Thiết lập bài mới</button>
        </div>
        <div id="examReviewList" class="review-list hidden"></div>
      </div>
    `;

    $("#retryExam").addEventListener("click", () => startExam());
    $("#retryWrong").addEventListener("click", () => {
      if (!result.wrongItems.length) return;
      startExam(result.wrongItems);
    });
    $("#showExamReview").addEventListener("click", toggleExamReview);
    $("#backExamSetup").addEventListener("click", resetToExamSetup);
  }

  function toggleExamReview() {
    const list = $("#examReviewList");
    const button = $("#showExamReview");
    const willShow = list.classList.contains("hidden");
    if (willShow && !list.innerHTML) {
      list.innerHTML = examState.items.map((entry, index) => renderExamCard({ ...entry, examIndex: index })).join("");
    }
    list.classList.toggle("hidden", !willShow);
    button.textContent = willShow ? "Ẩn toàn bộ đáp án" : "Xem toàn bộ đáp án";
  }

  function resetToExamSetup() {
    clearInterval(examState.timerId);
    examState.active = false;
    examState.submitted = false;
    $("#examResult").classList.add("hidden");
    $("#examWorkspace").classList.add("hidden");
    $("#examSetup").classList.remove("hidden");
  }

  $("#startExam").addEventListener("click", () => startExam());
  $("#submitExam").addEventListener("click", () => submitExam(false));
  $("#editExamTime").addEventListener("click", () => {
    const currentMinutes = Math.max(1, Math.ceil(examState.remainingSeconds / 60));
    const input = prompt("Nhập số phút còn lại:", String(currentMinutes));
    if (input === null) return;
    const minutes = Number(input);
    if (!Number.isFinite(minutes) || minutes < 1 || minutes > 300) {
      toast("Thời gian phải từ 1 đến 300 phút");
      return;
    }
    examState.remainingSeconds = Math.round(minutes * 60);
    examState.durationSeconds = Math.max(examState.durationSeconds, examState.remainingSeconds);
    updateTimerDisplay();
    toast("Đã cập nhật thời gian");
  });
  $("#examSearch").addEventListener("input", (event) => {
    examState.search = event.target.value;
    examState.current = 0;
    renderExam();
  });
  $("#examFilter").addEventListener("change", (event) => {
    examState.filter = event.target.value;
    examState.current = 0;
    renderExam();
  });
  $("#examView").addEventListener("change", (event) => {
    examState.view = event.target.value;
    examState.current = 0;
    renderExam();
  });
  $("#examPrev").addEventListener("click", () => {
    examState.current = Math.max(0, examState.current - 1);
    renderExam();
  });
  $("#examNext").addEventListener("click", () => {
    const filtered = getExamFiltered();
    examState.current = Math.min(filtered.length - 1, examState.current + 1);
    renderExam();
  });

  $("#examMode").addEventListener("change", (event) => {
    const radio = event.target.closest("input[data-exam-index]");
    if (!radio || examState.submitted) return;
    const index = Number(radio.dataset.examIndex);
    if (examState.feedbackMode === "immediate" && examState.locked.has(index)) return;
    examState.answers.set(index, radio.value);
    if (examState.feedbackMode === "immediate") examState.locked.add(index);
    renderExam();
  });

  $("#examMode").addEventListener("click", (event) => {
    const markButton = event.target.closest(".exam-mark");
    if (markButton && !examState.submitted) {
      const index = Number(markButton.dataset.index);
      examState.marked.has(index) ? examState.marked.delete(index) : examState.marked.add(index);
      renderExam();
      return;
    }

    const navButton = event.target.closest("[data-exam-nav]");
    if (navButton && !examState.submitted) {
      const index = Number(navButton.dataset.examNav);
      const filtered = getExamFiltered();
      const filteredIndex = filtered.findIndex((item) => item.examIndex === index);
      if (filteredIndex === -1) {
        examState.filter = "all";
        examState.search = "";
        $("#examFilter").value = "all";
        $("#examSearch").value = "";
        examState.current = index;
      } else {
        examState.current = filteredIndex;
      }
      if (examState.view !== "single") {
        renderExam();
        scrollToElement($(`#exam-card-${index}`));
      } else {
        renderExam();
      }
    }
  });

  // ========================
  // ACCORDION DÙNG CHUNG
  // ========================

  function createAccordionController({
    data,
    prefix,
    listSelector,
    navigatorSelector,
    searchSelector,
    filterSelector,
    viewSelector,
    expandSelector,
    collapseSelector,
    prevSelector,
    nextSelector,
    positionSelector,
    singleNavSelector,
    markedKey,
    openKey
  }) {
    const state = {
      marked: readSet(markedKey),
      open: readSet(openKey),
      search: "",
      filter: "all",
      view: "all",
      current: 0
    };

    const getFiltered = () => {
      const query = normalizeText(state.search.trim());
      return data.filter((item) => {
        const markedMatch = state.filter !== "marked" || state.marked.has(item.id);
        const haystack = normalizeText(`${item.question} ${item.answer} ${item.note || ""}`);
        return markedMatch && (!query || haystack.includes(query));
      });
    };

    const render = () => {
      const filtered = getFiltered();
      if (state.current >= filtered.length) state.current = Math.max(0, filtered.length - 1);
      const visible = state.view === "single" ? filtered.slice(state.current, state.current + 1) : filtered;

      $(navigatorSelector).innerHTML = filtered.map((item, index) => `
        <button class="nav-number ${state.view === "single" && index === state.current ? "active" : ""} ${state.marked.has(item.id) ? "marked" : ""}"
          data-${prefix}-nav="${index}" type="button">${item.id}</button>
      `).join("");

      $(listSelector).innerHTML = visible.length ? visible.map((item) => {
        const opened = state.open.has(item.id);
        const marked = state.marked.has(item.id);
        return `
          <article class="accordion-item ${opened ? "open" : ""}" id="${prefix}-card-${item.id}">
            <div class="question-head">
              <button class="accordion-button ${prefix}-toggle" data-id="${item.id}" type="button" aria-expanded="${opened}">
                <span class="question-number">Câu ${item.id}</span>
                <h3 class="question-title">${escapeHTML(item.question)}</h3>
                <span class="accordion-hint">${opened ? "🙈 Bấm để ẩn đáp án" : "👁 Hiện đáp án"}</span>
              </button>
              <button class="mark-button ${prefix}-mark ${marked ? "active" : ""}" data-id="${item.id}" type="button">⭐</button>
              <span class="chevron" aria-hidden="true">⌄</span>
            </div>
            <div class="accordion-content">
              <div class="answer-block">${escapeHTML(item.answer)}</div>
              ${item.note ? `<div class="note-box"><strong>Lưu ý</strong>${escapeHTML(item.note)}</div>` : ""}
              <div class="action-row">
                <button class="secondary-button ${prefix}-close" data-id="${item.id}" type="button">🙈 Ẩn đáp án</button>
              </div>
            </div>
          </article>
        `;
      }).join("") : '<div class="empty-state">Không tìm thấy câu hỏi phù hợp.</div>';

      $(singleNavSelector).classList.toggle("hidden", state.view !== "single" || !filtered.length);
      $(positionSelector).textContent = filtered.length ? `${state.current + 1} / ${filtered.length}` : "0 / 0";
      $(prevSelector).disabled = state.current <= 0;
      $(nextSelector).disabled = state.current >= filtered.length - 1;
    };

    $(searchSelector).addEventListener("input", (event) => {
      state.search = event.target.value;
      state.current = 0;
      render();
    });
    $(filterSelector).addEventListener("change", (event) => {
      state.filter = event.target.value;
      state.current = 0;
      render();
    });
    $(viewSelector).addEventListener("change", (event) => {
      state.view = event.target.value;
      state.current = 0;
      render();
    });
    $(expandSelector).addEventListener("click", () => {
      getFiltered().forEach((item) => state.open.add(item.id));
      saveSet(openKey, state.open);
      render();
    });
    $(collapseSelector).addEventListener("click", () => {
      getFiltered().forEach((item) => state.open.delete(item.id));
      saveSet(openKey, state.open);
      render();
    });
    $(prevSelector).addEventListener("click", () => {
      state.current = Math.max(0, state.current - 1);
      render();
    });
    $(nextSelector).addEventListener("click", () => {
      state.current = Math.min(getFiltered().length - 1, state.current + 1);
      render();
    });

    const root = $(listSelector).closest(".tab-panel");
    root.addEventListener("click", (event) => {
      const mark = event.target.closest(`.${prefix}-mark`);
      if (mark) {
        const id = Number(mark.dataset.id);
        state.marked.has(id) ? state.marked.delete(id) : state.marked.add(id);
        saveSet(markedKey, state.marked);
        render();
        return;
      }

      const toggle = event.target.closest(`.${prefix}-toggle`);
      if (toggle) {
        const id = Number(toggle.dataset.id);
        state.open.has(id) ? state.open.delete(id) : state.open.add(id);
        saveSet(openKey, state.open);
        render();
        return;
      }

      const close = event.target.closest(`.${prefix}-close`);
      if (close) {
        const id = Number(close.dataset.id);
        state.open.delete(id);
        saveSet(openKey, state.open);
        render();
        return;
      }

      const nav = event.target.closest(`[data-${prefix}-nav]`);
      if (nav) {
        const index = Number(nav.dataset[`${prefix}Nav`]);
        if (state.view === "single") {
          state.current = index;
          render();
        } else {
          const item = getFiltered()[index];
          scrollToElement($(`#${prefix}-card-${item.id}`));
        }
      }
    });

    render();
    return { state, render };
  }

  createAccordionController({
    data: shortAnswer,
    prefix: "short",
    listSelector: "#shortList",
    navigatorSelector: "#shortNavigator",
    searchSelector: "#shortSearch",
    filterSelector: "#shortFilter",
    viewSelector: "#shortView",
    expandSelector: "#expandAllShort",
    collapseSelector: "#collapseAllShort",
    prevSelector: "#shortPrev",
    nextSelector: "#shortNext",
    positionSelector: "#shortPosition",
    singleNavSelector: "#shortSingleNav",
    markedKey: STORAGE_KEYS.shortMarked,
    openKey: STORAGE_KEYS.shortOpen
  });

  createAccordionController({
    data: essayQuestions,
    prefix: "essay",
    listSelector: "#essayList",
    navigatorSelector: "#essayNavigator",
    searchSelector: "#essaySearch",
    filterSelector: "#essayFilter",
    viewSelector: "#essayView",
    expandSelector: "#expandAllEssay",
    collapseSelector: "#collapseAllEssay",
    prevSelector: "#essayPrev",
    nextSelector: "#essayNext",
    positionSelector: "#essayPosition",
    singleNavSelector: "#essaySingleNav",
    markedKey: STORAGE_KEYS.essayMarked,
    openKey: STORAGE_KEYS.essayOpen
  });

  renderStudy();
})();
