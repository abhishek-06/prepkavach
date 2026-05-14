(function() {
  const STORAGE_KEY = "ssc-cgl-progress-v1";
  const THEME_KEY = "ssc-cgl-theme";

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  }

  function saveProgress(p) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  }

  let progress = loadProgress();

  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem(THEME_KEY, t);
  }

  applyTheme(localStorage.getItem(THEME_KEY) || "light");

  document.getElementById("themeToggle").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    applyTheme(cur === "dark" ? "light" : "dark");
  });

  document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("hidden");
  });

  // Build sidebar
  function buildSidebar() {
    const nav = document.getElementById("nav");
    nav.innerHTML = "";
    SUBJECTS.forEach(subject => {
      const wrap = document.createElement("div");
      wrap.className = "subject";

      const header = document.createElement("div");
      header.className = "subject-header";
      header.innerHTML = `<span>${subject.name}</span><span class="arrow">&#9654;</span>`;
      header.addEventListener("click", () => wrap.classList.toggle("open"));
      wrap.appendChild(header);

      const list = document.createElement("div");
      list.className = "topics";

      if (!subject.sections || subject.sections.length === 0) {
        const p = document.createElement("div");
        p.className = "placeholder";
        p.textContent = "Coming soon";
        list.appendChild(p);
      } else {
        subject.sections.forEach(section => {
          const sectionLabel = document.createElement("div");
          sectionLabel.className = "subject-header";
          sectionLabel.style.fontSize = "0.9rem";
          sectionLabel.style.paddingLeft = "0.75rem";
          sectionLabel.innerHTML = `<span>${section.name}</span><span class="arrow">&#9654;</span>`;

          const sectionWrap = document.createElement("div");
          sectionWrap.className = "subject";
          sectionWrap.appendChild(sectionLabel);

          const tlist = document.createElement("div");
          tlist.className = "topics";

          if (!section.topics || section.topics.length === 0) {
            const p = document.createElement("div");
            p.className = "placeholder";
            p.textContent = "Topics coming soon";
            tlist.appendChild(p);
          } else {
            // Group topics by `group` field. If a topic has no group, it's flat under the section.
            const hasAnyGroup = section.topics.some(t => t.group);

            const renderTopicLink = (t, parent) => {
              const a = document.createElement("a");
              a.className = "topic-link" + (progress[t.id] ? " read" : "");
              a.href = "#" + t.id;
              a.textContent = t.name;
              a.dataset.topicId = t.id;
              a.addEventListener("click", () => {
                if (window.innerWidth <= 768) {
                  document.getElementById("sidebar").classList.add("hidden");
                }
              });
              parent.appendChild(a);
            };

            if (!hasAnyGroup) {
              // No groups — render topics directly under section
              section.topics.forEach(t => renderTopicLink(t, tlist));
            } else {
              // Mixed/grouped: build groups
              const groups = {};
              const groupOrder = [];
              section.topics.forEach(t => {
                const g = t.group || "__ungrouped__";
                if (!groups[g]) { groups[g] = []; groupOrder.push(g); }
                groups[g].push(t);
              });
              groupOrder.forEach(gName => {
                const topics = groups[gName];
                if (gName === "__ungrouped__") {
                  topics.forEach(t => renderTopicLink(t, tlist));
                  return;
                }
                const groupWrap = document.createElement("div");
                groupWrap.className = "subject group-wrap";
                const groupHeader = document.createElement("div");
                groupHeader.className = "subject-header";
                groupHeader.style.fontSize = "0.85rem";
                groupHeader.style.paddingLeft = "1rem";
                groupHeader.style.color = "var(--accent)";
                groupHeader.style.fontWeight = "600";
                groupHeader.innerHTML = `<span>${gName}</span><span class="arrow">&#9654;</span>`;
                groupHeader.addEventListener("click", (e) => {
                  e.stopPropagation();
                  groupWrap.classList.toggle("open");
                });
                groupWrap.appendChild(groupHeader);

                const groupTopics = document.createElement("div");
                groupTopics.className = "topics";
                topics.forEach(t => renderTopicLink(t, groupTopics));
                groupWrap.appendChild(groupTopics);
                tlist.appendChild(groupWrap);
              });
            }
          }

          sectionLabel.addEventListener("click", () => sectionWrap.classList.toggle("open"));
          sectionWrap.appendChild(tlist);
          list.appendChild(sectionWrap);
        });
      }

      wrap.appendChild(list);
      nav.appendChild(wrap);
    });

    // Auto-open path to current topic (if hash present)
    const currentId = location.hash.replace("#", "");
    if (currentId) {
      const link = nav.querySelector(`[data-topic-id="${currentId}"]`);
      if (link) {
        let p = link.parentElement;
        while (p && p !== nav) {
          if (p.classList.contains("subject")) p.classList.add("open");
          p = p.parentElement;
        }
      }
    }
  }

  function findTopic(id) {
    for (const sub of SUBJECTS) {
      for (const sec of (sub.sections || [])) {
        for (const t of (sec.topics || [])) {
          if (t.id === id) return { topic: t, subject: sub, section: sec };
        }
      }
    }
    return null;
  }

  function flatTopics() {
    const arr = [];
    SUBJECTS.forEach(sub => (sub.sections || []).forEach(sec => (sec.topics || []).forEach(t => arr.push(t))));
    return arr;
  }

  function renderTopic(id) {
    const found = findTopic(id);
    const content = document.getElementById("content");
    if (!found) {
      content.innerHTML = `<section class="welcome"><h2>Topic not found</h2><p>Pick a topic from the sidebar.</p></section>`;
      return;
    }
    const data = TOPICS[id];
    const { topic, subject, section } = found;

    if (!data) {
      content.innerHTML = `
        <h2>${topic.name}</h2>
        <p style="color:var(--muted)">${subject.name} → ${section.name}</p>
        <div class="welcome">
          <p><i>This topic's content is coming soon.</i></p>
        </div>`;
      return;
    }

    const all = flatTopics();
    const idx = all.findIndex(t => t.id === id);
    const prev = idx > 0 ? all[idx - 1] : null;
    const next = idx < all.length - 1 ? all[idx + 1] : null;
    const isRead = !!progress[id];

    content.innerHTML = `
      <h2>${topic.name}</h2>
      <div class="topic-meta">
        <span>${subject.name} → ${section.name}${topic.group ? " → " + topic.group : ""}</span>
        <span style="flex:1"></span>
        <button class="btn ${isRead ? "secondary" : ""}" id="markReadBtn">${isRead ? "✓ Marked read" : "Mark as read"}</button>
      </div>
      <article>${data.body}</article>
      ${data.mcq && data.mcq.length ? renderQuiz(id, data.mcq) : ""}
      <nav class="topic-nav">
        ${prev ? `<a class="btn secondary" href="#${prev.id}">← ${prev.name}</a>` : "<span></span>"}
        ${next ? `<a class="btn" href="#${next.id}">${next.name} →</a>` : "<span></span>"}
      </nav>
    `;

    document.getElementById("markReadBtn").addEventListener("click", () => {
      progress[id] = !progress[id];
      saveProgress(progress);
      buildSidebar();
      highlightActive(id);
      renderTopic(id);
    });

    if (data.mcq && data.mcq.length) bindQuiz(id, data.mcq);

    function doMathRender() {
      if (window.renderMathInElement) {
        window.renderMathInElement(content, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
          ],
          throwOnError: false
        });
      } else {
        // KaTeX not loaded yet — retry shortly
        setTimeout(doMathRender, 100);
      }
    }
    doMathRender();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderQuiz(topicId, mcq) {
    const items = mcq.map((q, i) => `
      <div class="question" data-q="${i}">
        <div class="question-text">${i + 1}. ${q.q}</div>
        <ul class="options">
          ${q.opts.map((o, j) => `<li class="option" data-i="${j}">${String.fromCharCode(65 + j)}. ${o}</li>`).join("")}
        </ul>
        <div class="explanation"><b>Answer:</b> ${String.fromCharCode(65 + q.a)}. ${q.opts[q.a]}<br><b>Explanation:</b> ${q.ex || ""}</div>
      </div>
    `).join("");
    return `
      <div class="quiz">
        <h3>Practice MCQs</h3>
        ${items}
        <button class="btn" id="submitQuiz">Submit Answers</button>
        <button class="btn secondary" id="resetQuiz" style="margin-left:0.5rem">Reset</button>
        <div id="scoreBanner"></div>
      </div>
    `;
  }

  function bindQuiz(topicId, mcq) {
    const selected = {};
    document.querySelectorAll(".question").forEach(qel => {
      const qi = parseInt(qel.dataset.q, 10);
      qel.querySelectorAll(".option").forEach(opt => {
        opt.addEventListener("click", () => {
          if (qel.classList.contains("answered")) return;
          qel.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
          opt.classList.add("selected");
          selected[qi] = parseInt(opt.dataset.i, 10);
        });
      });
    });

    document.getElementById("submitQuiz").addEventListener("click", () => {
      let correct = 0;
      mcq.forEach((q, i) => {
        const qel = document.querySelector(`.question[data-q="${i}"]`);
        qel.classList.add("answered");
        const opts = qel.querySelectorAll(".option");
        const sel = selected[i];
        opts.forEach((o, j) => {
          o.classList.remove("selected");
          if (j === q.a) o.classList.add("correct");
          if (sel === j && sel !== q.a) o.classList.add("wrong");
        });
        qel.querySelector(".explanation").classList.add("show");
        if (sel === q.a) correct++;
      });
      document.getElementById("scoreBanner").innerHTML =
        `<div class="score-banner">You scored <b>${correct}/${mcq.length}</b> ${correct === mcq.length ? "🎯 Perfect!" : correct >= mcq.length * 0.7 ? "👏 Well done!" : "Review and retry."}</div>`;
    });

    document.getElementById("resetQuiz").addEventListener("click", () => {
      renderTopic(topicId);
    });
  }

  function highlightActive(id) {
    document.querySelectorAll(".topic-link").forEach(el => {
      el.classList.toggle("active", el.dataset.topicId === id);
    });
    // Open parent containers
    document.querySelectorAll(".topic-link.active").forEach(el => {
      let p = el.parentElement;
      while (p) {
        if (p.classList && p.classList.contains("subject")) p.classList.add("open");
        p = p.parentElement;
      }
    });
  }

  function route() {
    const id = location.hash.replace(/^#/, "");
    if (!id) {
      document.getElementById("content").innerHTML = `
        <section class="welcome">
          <h2>SSC CGL Study Material</h2>
          <p>Pick a subject from the sidebar to expand its sections, then choose a topic to start reading.</p>
          <p>Your progress is saved automatically — read topics show a ✓ next to them.</p>
          <p><b>Currently available:</b> Modern Indian History (23 topics) under General Awareness → History.</p>
        </section>`;
      return;
    }
    renderTopic(id);
    highlightActive(id);
  }

  buildSidebar();
  window.addEventListener("hashchange", route);
  route();
})();
