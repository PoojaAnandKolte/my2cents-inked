/* My2cents Inked — rendering: post cards, listings, filters, search, single post */

function categorySlug(cat) {
  return cat.toLowerCase().replace(/'/g, "").replace(/\s+/g, "-");
}

function categoryHref(cat) {
  const map = {
    "Women's Health": "womens-health.html",
    Medicine: "medicine.html",
    Essays: "essays.html",
    Stories: "stories.html",
    Poetry: "poetry.html",
    "Books & Chapters": "books.html",
  };
  return map[cat] || "journal.html";
}

function cardHTML(post, variant = "grid") {
  const catHref = categoryHref(post.category);
  const accent = categoryAccentClass(post.category);
  if (variant === "row") {
    return `
      <article class="card card--row ${accent} reveal">
        <div class="ornament ${post.cover}" aria-hidden="true"></div>
        <div class="card__body">
          <h3 class="card__title"><a href="post.html?slug=${post.slug}">${post.title}</a></h3>
          <div class="card__meta">
            <span>${formatDate(post.date)}</span>
            <span class="dot"></span>
            <span>${post.readingTime} min read</span>
          </div>
        </div>
      </article>`;
  }
  if (variant === "featured" || variant === "wide") {
    return `
      <article class="card card--featured ${variant === "wide" ? "card--wide" : ""} ${accent} reveal">
        <div class="ornament ${post.cover} card__cover" aria-hidden="true">
          <a href="${catHref}" class="card__cat">${post.category}</a>
        </div>
        <div class="card__body">
          <div class="card__meta"><span>${formatDate(post.date)}</span><span class="dot"></span><span>${post.readingTime} min read</span></div>
          <h3 class="card__title"><a href="post.html?slug=${post.slug}">${post.title}</a></h3>
          <p class="card__excerpt">${post.excerpt}</p>
          <div class="tag-list">${post.tags.slice(0, 2).map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        </div>
      </article>`;
  }
  return `
    <article class="card ${accent} reveal">
      <div class="ornament ${post.cover} card__cover" aria-hidden="true">
        <a href="${catHref}" class="card__cat">${post.category}</a>
      </div>
      <div class="card__body">
        <h3 class="card__title"><a href="post.html?slug=${post.slug}">${post.title}</a></h3>
        <p class="card__excerpt">${post.excerpt}</p>
        <div class="card__meta">
          <span>${formatDate(post.date)}</span>
          <span class="dot"></span>
          <span>${post.readingTime} min read</span>
        </div>
      </div>
    </article>`;
}

function renderInto(selector, html) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = html;
}

/* ---------------- Home page ---------------- */
function renderHome() {
  const featured = getFeaturedPosts();
  const featuredPost = featured[0];
  const latest = getLatestPosts(6, featuredPost?.slug);
  const mostRecent = getLatestPosts(1)[0];

  const latestLink = document.querySelector("[data-latest-link]");
  if (latestLink && mostRecent) latestLink.href = `post.html?slug=${mostRecent.slug}`;

  renderInto("[data-featured-article]", featuredPost ? cardHTML(featuredPost, "featured") : "");
  renderInto("[data-latest-grid]", latest.map((p, i) => cardHTML(p, i === 0 ? "wide" : "grid")).join(""));
  window.revealNew && window.revealNew(document);
}

/* ---------------- Category / Journal listing ---------------- */
function initListing({ fixedCategory = null } = {}) {
  const grid = document.querySelector("[data-listing-grid]");
  if (!grid) return;

  const searchInput = document.querySelector("[data-search-input]");
  const catChips = document.querySelectorAll("[data-cat-chip]");
  const tagChips = document.querySelectorAll("[data-tag-chip]");
  const resultCount = document.querySelector("[data-result-count]");
  const emptyState = document.querySelector("[data-empty-state]");

  const state = {
    category: fixedCategory,
    tag: null,
    query: "",
  };

  function matches(post) {
    if (state.category && post.category !== state.category) return false;
    if (state.tag && !post.tags.includes(state.tag)) return false;
    if (state.query) {
      const q = state.query.toLowerCase();
      const haystack = (post.title + " " + post.excerpt + " " + post.tags.join(" ") + " " + post.author).toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  }

  function render() {
    const results = POSTS.filter(matches).sort((a, b) => new Date(b.date) - new Date(a.date));
    grid.innerHTML = results.map((p) => cardHTML(p)).join("");
    if (resultCount) {
      resultCount.textContent = `${results.length} ${results.length === 1 ? "piece" : "pieces"}${state.query ? ` for "${state.query}"` : ""}`;
    }
    if (emptyState) emptyState.hidden = results.length !== 0;
    grid.hidden = results.length === 0;
    window.revealNew && window.revealNew(grid);
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.query = searchInput.value.trim();
      render();
    });
  }
  catChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const val = chip.getAttribute("data-cat-chip");
      state.category = val === "all" ? null : val;
      catChips.forEach((c) => c.classList.toggle("is-active", c === chip));
      render();
    });
  });
  tagChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const val = chip.getAttribute("data-tag-chip");
      const isActive = chip.classList.contains("is-active");
      state.tag = isActive ? null : val;
      tagChips.forEach((c) => c.classList.remove("is-active"));
      if (!isActive) chip.classList.add("is-active");
      render();
    });
  });

  render();
}

function renderTagChips(selector, category = null) {
  const el = document.querySelector(selector);
  if (!el) return;
  const source = category ? POSTS.filter((p) => p.category === category) : POSTS;
  const set = new Set();
  source.forEach((p) => p.tags.forEach((t) => set.add(t)));
  const tags = Array.from(set).sort();
  el.innerHTML = tags.map((t) => `<button type="button" class="chip" data-tag-chip="${t}">${t}</button>`).join("");
}

/* ---------------- Single post page ---------------- */
function renderPost() {
  const container = document.querySelector("[data-post-page]");
  if (!container) return;
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");
  const post = getPostBySlug(slug);

  if (!post) {
    container.innerHTML = `
      <div class="wrap 404-hero">
        <p class="eyebrow">Not found</p>
        <h1>This page has wandered off.</h1>
        <p class="lede mx-auto">We couldn't find that piece. It may have been moved or the link is out of date.</p>
        <div class="hero__actions" style="justify-content:center">
          <a class="btn btn-primary" href="journal.html">Back to the Journal</a>
        </div>
      </div>`;
    return;
  }

  document.title = `${post.title} — My2cents Inked`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", post.excerpt);

  const related = getRelatedPosts(post);
  const { newer, older } = getAdjacentPosts(post);
  const accent = categoryAccentClass(post.category);

  container.innerHTML = `
    <div class="reading-progress" data-reading-progress></div>
    <header class="post-header wrap">
      <p class="eyebrow ${accent}">${post.category}</p>
      <h1>${post.title}</h1>
      <p class="lede">${post.excerpt}</p>
      <div class="post-meta">
        <span class="byline-avatar">${initials(post.author)}</span>
        <span><strong style="color:var(--color-ink)">${post.author}</strong></span>
        <span class="dot"></span>
        <span>${formatDate(post.date)}</span>
        <span class="dot"></span>
        <span>${post.readingTime} min read</span>
      </div>
    </header>
    <div class="wrap">
      <div class="ornament ${post.cover} post-cover" aria-hidden="true"></div>
      <article class="prose" data-article>
        ${post.content}
      </article>
      <div class="tag-list mt-4">
        ${post.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
      <div class="post-footer">
        <div class="share-row">
          <a class="btn btn-outline" href="mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(location.href)}">Share by email</a>
          <button type="button" class="btn btn-outline" data-copy-link>Copy link</button>
        </div>
        <a class="link-underline" href="${categoryHref(post.category)}">More in ${post.category} &rarr;</a>
      </div>
      <div class="author-box">
        <span class="byline-avatar">${initials(post.author)}</span>
        <div>
          <h4 style="font-size:var(--step-1)">${post.author}</h4>
          <p>Writing at My2cents Inked on ${post.category.toLowerCase()} and the small, honest details that live around the big ones.</p>
        </div>
      </div>
      <nav class="post-nav" aria-label="More articles">
        ${older ? `
        <a class="post-nav__link post-nav__link--prev" href="post.html?slug=${older.slug}">
          <span class="post-nav__dir">&larr; Previous</span>
          <span class="post-nav__title">${older.title}</span>
        </a>` : "<span></span>"}
        ${newer ? `
        <a class="post-nav__link post-nav__link--next" href="post.html?slug=${newer.slug}">
          <span class="post-nav__dir">Next &rarr;</span>
          <span class="post-nav__title">${newer.title}</span>
        </a>` : ""}
      </nav>
    </div>
    ${related.length ? `
    <section class="section-tight" style="background:var(--color-bg-alt)">
      <div class="wrap">
        <div class="section-head"><h2 style="font-size:var(--step-2)">Related reading</h2></div>
        <div class="grid grid-3">${related.map((p) => cardHTML(p)).join("")}</div>
      </div>
    </section>` : ""}
  `;

  const copyBtn = container.querySelector("[data-copy-link]");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        copyBtn.textContent = "Link copied";
        setTimeout(() => (copyBtn.textContent = "Copy link"), 2000);
      } catch {
        prompt("Copy this link:", location.href);
      }
    });
  }

  window.revealNew && window.revealNew(document);

  const progress = document.querySelector("[data-reading-progress]");
  const article = document.querySelector("[data-article]");
  if (progress && article) {
    window.addEventListener("scroll", () => {
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      progress.style.width = pct + "%";
    }, { passive: true });
  }
}
