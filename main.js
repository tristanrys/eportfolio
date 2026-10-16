// ── ICON MAP ──────────────────────────────────────────────────
const ICONS = {
  pdf: { emoji: "📄", cls: "pdf" },
  journal: { emoji: "📰", cls: "journal" },
  code: { emoji: "💻", cls: "code" },
  video: { emoji: "🎬", cls: "video" },
};

// ── ROUTER ────────────────────────────────────────────────────
function navigate(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
  const target = document.getElementById("page-" + pageId);
  if (target) target.classList.add("active");
  const link = document.querySelector(`.nav-links a[data-page="${pageId}"]`);
  if (link) link.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
  // close mobile menu
  document.getElementById("navLinks").classList.remove("open");
}

// ── BUILD NAV ─────────────────────────────────────────────────
function buildNav() {
  const ul = document.getElementById("navLinks");

  const homeItem = document.createElement("li");
  homeItem.innerHTML = `<a href="#" data-page="home">Home</a>`;
  ul.appendChild(homeItem);

  PORTFOLIO.subjects.forEach(sub => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#" data-page="${sub.id}">${sub.title}</a>`;
    ul.appendChild(li);
  });

  if (PORTFOLIO.profile) {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#" data-page="resume">Resume</a>`;
    ul.appendChild(li);
  }

  ul.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      navigate(a.dataset.page);
    });
  });
}

// ── BUILD HOME PAGE ───────────────────────────────────────────
function buildHome() {
  const o = PORTFOLIO.owner;
  const hero = document.getElementById("hero");

  const photoHtml = o.photo
    ? `<img src="${o.photo}" alt="Photo of ${o.name}" class="hero-photo" />`
    : `<div class="hero-photo-placeholder">
        <svg viewBox="0 0 48 48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="24" cy="18" r="9"/>
          <path d="M6 42c0-9.941 8.059-18 18-18s18 8.059 18 18"/>
        </svg>
       </div>
       <p class="photo-hint">Replace with your photo in data.js</p>`;

  const statusBadge = o.status ? `<span class="badge badge-status">${o.status}</span>` : "";

  const actions = PORTFOLIO.profile
    ? `<div class="hero-actions">
        <button class="btn btn-primary" onclick="navigate('resume')">View resume</button>
        ${o.resume ? `<a class="btn btn-ghost" href="${o.resume}" target="_blank" rel="noopener">Download PDF</a>` : ""}
        ${o.email ? `<a class="btn btn-ghost" href="mailto:${o.email}">Email me</a>` : ""}
      </div>`
    : "";

  hero.innerHTML = `
    <div class="hero-inner">
      <div class="hero-photo-wrap">${photoHtml}</div>
      <div class="hero-text">
        <p class="hero-eyebrow">e-Portfolio</p>
        <h1 class="hero-name">${o.name}</h1>
        <p class="hero-program">${o.program} &nbsp;·&nbsp; ${o.school}</p>
        <p class="hero-bio">${o.bio}</p>
        <div class="hero-badges">
          ${statusBadge}
          ${PORTFOLIO.subjects.map(s =>
            `<span class="badge" onclick="navigate('${s.id}')" style="cursor:pointer">
              ${s.code} – ${s.title}
            </span>`
          ).join("")}
        </div>
        ${actions}
      </div>
    </div>`;

  // Subjects grid
  const grid = document.getElementById("subjectsGrid");
  PORTFOLIO.subjects.forEach((sub, i) => {
    const card = document.createElement("a");
    card.className = "subject-card";
    card.href = "#";
    card.innerHTML = `
      <div class="subject-card-num">${String(i + 1).padStart(2, "0")} / ${String(PORTFOLIO.subjects.length).padStart(2, "0")}</div>
      <div class="subject-card-title">${sub.title}</div>
      <div class="subject-card-meta">${sub.code}</div>
      <div class="subject-card-footer">
        <span class="artifact-count">🗂 ${sub.artifacts.length} artifacts</span>
        <span>View →</span>
      </div>`;
    card.addEventListener("click", e => { e.preventDefault(); navigate(sub.id); });
    grid.appendChild(card);
  });

  // Highlights strip (resume summary)
  if (PORTFOLIO.profile) {
    const p = PORTFOLIO.profile;
    const strip = document.getElementById("highlights");
    if (strip) {
      strip.innerHTML = `
        <div class="highlight"><span class="highlight-num">${p.projects.length}</span><span class="highlight-label">Projects</span></div>
        <div class="highlight"><span class="highlight-num">${p.certifications.length}</span><span class="highlight-label">Certifications</span></div>
        <div class="highlight"><span class="highlight-num">${PORTFOLIO.subjects.length}</span><span class="highlight-label">Subjects documented</span></div>
        <div class="highlight"><span class="highlight-num">2027</span><span class="highlight-label">Expected graduation</span></div>`;
    }
  }
}

// ── BUILD ARTIFACT CARD ───────────────────────────────────────
function buildArtifactCard(art, idx) {
  const icon = ICONS[art.type] || ICONS.pdf;

  // File/link row
  let fileHtml = "";
  if (art.webLink) {
    fileHtml = `<div class="artifact-file-row">
      <span class="artifact-file-icon">🌐</span>
      <a href="${art.webLink}" target="_blank" rel="noopener">Open Web Application ↗</a>
    </div>`;
  } else if (art.fileLink) {
    fileHtml = `<div class="artifact-file-row">
      <span class="artifact-file-icon">📎</span>
      <a href="${art.fileLink}" target="_blank" rel="noopener">${art.filename || "Download File"} ↗</a>
    </div>`;
  } else {
    const label = art.filename
      ? `📎 ${art.filename} — <em>upload your file and paste the link in data.js</em>`
      : `🎬 Upload your video to YouTube/Drive and paste the link in data.js`;
    fileHtml = `<div class="artifact-placeholder">${label}</div>`;
  }

  const wo = art.writeup;

  const card = document.createElement("div");
  card.className = "artifact-card";
  card.id = art.id;
  card.innerHTML = `
    <div class="artifact-card-header" onclick="toggleCard(this)">
      <div class="artifact-icon ${icon.cls}">${icon.emoji}</div>
      <div>
        <div class="artifact-label">${art.label}</div>
        <div class="artifact-name">${art.name}</div>
      </div>
      <svg class="artifact-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M5 7.5l5 5 5-5"/>
      </svg>
    </div>
    <div class="artifact-body">
      <div class="artifact-body-inner">
        ${fileHtml}
        <div class="writeup-section">
          <div class="writeup-tabs">
            <button class="writeup-tab active" onclick="switchTab(this,'${art.id}-so')">
              CpE Student Outcomes
            </button>
            <button class="writeup-tab" onclick="switchTab(this,'${art.id}-personal')">
              Personal Goals
            </button>
          </div>
          <div class="writeup-panel active" id="${art.id}-so">
            <div class="writeup-content">
              <p>${wo.cpe_so.text}</p>
              <div class="so-tags">
                ${wo.cpe_so.tags.map(t => `<span class="so-tag">${t}</span>`).join("")}
              </div>
            </div>
          </div>
          <div class="writeup-panel" id="${art.id}-personal">
            <div class="writeup-content">
              <p>${wo.personal.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  return card;
}

// ── BUILD SUBJECT PAGES ───────────────────────────────────────
function buildSubjectPages() {
  const app = document.getElementById("app");

  PORTFOLIO.subjects.forEach(sub => {
    const page = document.createElement("div");
    page.className = "page";
    page.id = "page-" + sub.id;

    const contentId = `content-${sub.id}`;
    page.innerHTML = `
      <div class="subject-header">
        <p class="subject-code">${sub.code}</p>
        <h1 class="subject-title">${sub.title}</h1>
        <p class="subject-desc">${sub.description}</p>
      </div>
      <div class="subject-content">
        <p class="artifacts-intro">📁 ${sub.artifacts.length} Artifacts in this subject</p>
        <div id="${contentId}"></div>
      </div>`;

    app.appendChild(page);

    const container = page.querySelector(`#${contentId}`);
    sub.artifacts.forEach((art, idx) => {
      container.appendChild(buildArtifactCard(art, idx));
    });
  });
}

// ── BUILD RESUME PAGE ─────────────────────────────────────────
function buildResumePage() {
  const p = PORTFOLIO.profile;
  if (!p) return;
  const o = PORTFOLIO.owner;
  const app = document.getElementById("app");

  const page = document.createElement("div");
  page.className = "page";
  page.id = "page-resume";

  const subjectTitle = id => {
    const s = PORTFOLIO.subjects.find(x => x.id === id);
    return s ? s.title : "";
  };

  const education = p.education.map(e => `
    <div class="resume-row">
      <div>
        <div class="resume-row-title">${e.degree}</div>
        <div class="resume-row-sub">${e.school}${e.note ? ` &nbsp;|&nbsp; ${e.note}` : ""}</div>
      </div>
      <div class="resume-row-date">${e.date}</div>
    </div>`).join("");

  const projects = p.projects.map(pr => `
    <article class="project-card">
      <header class="project-head">
        <h3 class="project-title">${pr.title}</h3>
        <span class="project-context">${pr.context}</span>
      </header>
      <ul class="project-bullets">
        ${pr.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
      ${pr.tools && pr.tools.length
        ? `<div class="so-tags">${pr.tools.map(t => `<span class="so-tag">${t}</span>`).join("")}</div>`
        : ""}
      ${pr.linkSubject
        ? `<a href="#" class="project-link" data-go="${pr.linkSubject}">See artifacts in ${subjectTitle(pr.linkSubject)} →</a>`
        : ""}
    </article>`).join("");

  const certs = p.certifications.map(c => `
    <div class="cert-card">
      <div class="cert-date">${c.date}</div>
      <div class="cert-name">${c.name}</div>
      <div class="cert-issuer">${c.issuer}${c.hours ? ` · ${c.hours}` : ""}</div>
    </div>`).join("");

  const skills = p.skills.map(g => `
    <div class="skill-group">
      <div class="skill-group-name">${g.group}</div>
      <div class="so-tags">${g.items.map(i => `<span class="so-tag">${i}</span>`).join("")}</div>
    </div>`).join("");

  page.innerHTML = `
    <div class="subject-header">
      <p class="subject-code">Resume</p>
      <h1 class="subject-title">${o.name}</h1>
      <p class="subject-desc">${o.headline || o.program}</p>
      <div class="resume-actions">
        ${o.resume ? `<a class="btn btn-primary" href="${o.resume}" target="_blank" rel="noopener">Download resume (PDF)</a>` : ""}
        ${o.email ? `<a class="btn btn-ghost" href="mailto:${o.email}">${o.email}</a>` : ""}
      </div>
    </div>
    <div class="subject-content resume-content">
      <section class="resume-section">
        <h2 class="resume-heading">Objective</h2>
        <p class="resume-objective">${p.objective}</p>
      </section>

      <section class="resume-section">
        <h2 class="resume-heading">Education</h2>
        ${education}
      </section>

      <section class="resume-section">
        <h2 class="resume-heading">Projects</h2>
        <div class="project-list">${projects}</div>
      </section>

      <section class="resume-section">
        <h2 class="resume-heading">Certifications</h2>
        <div class="cert-grid">${certs}</div>
      </section>

      <section class="resume-section">
        <h2 class="resume-heading">Technical skills</h2>
        <div class="skill-groups">${skills}</div>
      </section>
    </div>`;

  app.appendChild(page);

  page.querySelectorAll("[data-go]").forEach(a => {
    a.addEventListener("click", e => { e.preventDefault(); navigate(a.dataset.go); });
  });
}

// ── TOGGLE HELPERS ────────────────────────────────────────────
function toggleCard(header) {
  const card = header.closest(".artifact-card");
  card.classList.toggle("open");
}

function switchTab(btn, panelId) {
  const section = btn.closest(".writeup-section");
  section.querySelectorAll(".writeup-tab").forEach(t => t.classList.remove("active"));
  section.querySelectorAll(".writeup-panel").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById(panelId).classList.add("active");
}

// ── MOBILE MENU ───────────────────────────────────────────────
function initMobileMenu() {
  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("open");
  });
}

// ── BRAND CLICK ───────────────────────────────────────────────
function initBrand() {
  document.getElementById("navBrand").addEventListener("click", e => {
    e.preventDefault();
    navigate("home");
  });
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  document.title = `${PORTFOLIO.owner.name} | e-Portfolio`;
  document.getElementById("footerName").textContent = PORTFOLIO.owner.name;
  buildNav();
  buildHome();
  buildSubjectPages();
  buildResumePage();
  initMobileMenu();
  initBrand();
  navigate("home");
});
