/* Dogs of Pondicherry — map, gallery, filters and detail cards.
   Reads window.DOGS and window.DOGS_CONFIG from dogs-data.js.
   No dog data lives in this file. */

(function () {
  "use strict";

  const CFG = window.DOGS_CONFIG || {};
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desktopQuery = window.matchMedia("(min-width: 900px)");

  /* ---------- Elements ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const els = {
    tabs: Array.from(document.querySelectorAll("[data-view-tab]")),
    mapPanel: $("#dogs-panel-map"),
    galleryPanel: $("#dogs-panel-gallery"),
    stage: $("[data-dogs-stage]"),
    map: $("#dog-map"),
    mapEmpty: $("[data-map-empty]"),
    mapEmptyText: $("[data-map-empty-text]"),
    drawer: $("[data-dog-drawer]"),
    drawerBody: $("[data-drawer-body]"),
    gallery: $("[data-dog-gallery]"),
    galleryEmpty: $("[data-gallery-empty]"),
    galleryEmptyText: $("[data-gallery-empty-text]"),
    modal: $("[data-dog-modal]"),
    modalBody: $("[data-modal-body]"),
    filters: $("[data-dogs-filters]"),
    chips: $("[data-dogs-chips]"),
    searchWrap: $("[data-dogs-search]"),
    searchInput: $("[data-dogs-search-input]"),
    status: $("[data-dogs-status]"),
  };

  /* ---------- Helpers ---------- */
  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (c) => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));
  }

  function formatDate(value) {
    if (!value) return "";
    const m = /^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/.exec(String(value).trim());
    if (!m) return esc(value); // free text such as "Spring 2026"
    const [, y, mo, d] = m;
    if (d) return new Date(+y, +mo - 1, +d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    if (mo) return new Date(+y, +mo - 1, 1).toLocaleDateString("en-US", { year: "numeric", month: "long" });
    return y;
  }

  function storyHTML(story) {
    if (!story) return "";
    const parts = Array.isArray(story) ? story : String(story).split(/\n\s*\n/);
    return parts.map((p) => p.trim()).filter(Boolean).map((p) => `<p>${esc(p)}</p>`).join("");
  }

  const precision = Math.min(6, Math.max(0, Number.isInteger(CFG.coordinatePrecision) ? CFG.coordinatePrecision : 3));
  const roundCoord = (v) => Number(v.toFixed(precision));

  /* ---------- Data: validate and normalise ---------- */
  let dogs = [];
  let byId = new Map();

  function normalise(raw) {
    if (!raw || typeof raw !== "object") return null;
    const id = String(raw.id || "").trim();
    if (!id) { console.warn("[dogs] Skipped an entry with no id.", raw); return null; }

    const title = String(raw.title || "").trim();   // editorial title, e.g. "The Yellow Wall"
    const name = String(raw.name || "").trim();     // the dog's actual name, if known
    const neighbourhood = String(raw.neighbourhood || "").trim();
    const locationNote = String(raw.locationNote || "").trim();
    const defaultAlt = (name ? `Photograph of ${name}` : "Photograph of a dog") + (neighbourhood || locationNote ? ` at ${locationNote || neighbourhood}` : "");

    const photos = [];
    const addPhoto = (p, altFallback, thumbFallback) => {
      if (!p) return;
      const o = typeof p === "string" ? { src: p } : p;
      if (!o.src) return;
      photos.push({
        src: String(o.src),
        thumb: String(o.thumb || thumbFallback || "").trim() || String(o.src),
        alt: String(o.alt || altFallback || "").trim() || defaultAlt,
      });
    };
    addPhoto(raw.photo, raw.photoAlt, raw.thumb);
    (Array.isArray(raw.photos) ? raw.photos : []).forEach((p) => addPhoto(p));
    if (!photos.length) console.warn(`[dogs] "${id}" has no photograph.`);

    const hasLat = raw.lat != null && raw.lat !== "", hasLng = raw.lng != null && raw.lng !== "";
    const lat = Number(raw.lat), lng = Number(raw.lng);
    const hasCoords = hasLat && hasLng &&
      Number.isFinite(lat) && Number.isFinite(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180;
    // Coordinates left blank on purpose are fine (gallery only); only complain about bad values.
    if (!hasCoords && (hasLat || hasLng)) console.warn(`[dogs] "${id}" has invalid coordinates, so it will appear in the gallery only.`);

    const caption = String(raw.caption || "").trim();
    return {
      id, title, name, neighbourhood, caption, locationNote,
      date: raw.date ? String(raw.date) : "",
      story: raw.story || "",
      photos,
      hasCoords,
      lat: hasCoords ? roundCoord(lat) : null,
      lng: hasCoords ? roundCoord(lng) : null,
      search: [title, name, caption, neighbourhood, locationNote].join(" ").toLowerCase(),
    };
  }

  function loadDogs(list) {
    dogs = [];
    byId = new Map();
    (Array.isArray(list) ? list : []).forEach((raw) => {
      const dog = normalise(raw);
      if (!dog) return;
      if (byId.has(dog.id)) { console.warn(`[dogs] Duplicate id "${dog.id}" skipped.`); return; }
      byId.set(dog.id, dog);
      dogs.push(dog);
    });
  }

  /* ---------- State ---------- */
  const state = { view: "map", neighbourhood: "all", query: "", selectedId: null };

  function visibleDogs() {
    const q = state.query.trim().toLowerCase();
    return dogs.filter((d) =>
      (state.neighbourhood === "all" || d.neighbourhood === state.neighbourhood) &&
      (!q || d.search.includes(q))
    );
  }

  function neighbourhoods() {
    const set = new Set(dogs.map((d) => d.neighbourhood).filter(Boolean));
    const order = Array.isArray(CFG.neighbourhoodOrder) ? CFG.neighbourhoodOrder : [];
    return Array.from(set).sort((a, b) => {
      const ia = order.indexOf(a), ib = order.indexOf(b);
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
      return a.localeCompare(b);
    });
  }

  /* ---------- Detail card (shared by drawer, bottom sheet and modal) ---------- */
  const PAW_SVG =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<ellipse cx="5.2" cy="11" rx="2" ry="2.6" transform="rotate(-18 5.2 11)"/>' +
    '<ellipse cx="9.4" cy="6.2" rx="2.1" ry="2.8"/>' +
    '<ellipse cx="14.6" cy="6.2" rx="2.1" ry="2.8"/>' +
    '<ellipse cx="18.8" cy="11" rx="2" ry="2.6" transform="rotate(18 18.8 11)"/>' +
    '<path d="M12 12.2c-3 0-5.8 2.7-5.8 5.2 0 1.8 1.4 2.6 3 2.6 1.1 0 1.7-.5 2.8-.5s1.7.5 2.8.5c1.6 0 3-.8 3-2.6 0-2.5-2.8-5.2-5.8-5.2z"/>' +
    "</svg>";

  // The label shown above a title: the specific place named, otherwise the neighbourhood.
  const placeLabel = (dog) => dog.locationNote || dog.neighbourhood;
  // Heading text: the editorial title, or the dog's own name if no title is set.
  const headingText = (dog) => dog.title || dog.name;
  // A plain-language name for screen readers and map markers.
  const accessibleName = (dog) => {
    const head = headingText(dog) || "A dog";
    const place = placeLabel(dog);
    return place ? `${head}, ${place}` : head;
  };

  function cardHTML(dog, context) {
    const main = dog.photos[0];
    const heading = headingText(dog);
    const title = heading
      ? `<h3 class="dog-card__name" id="dog-title-${esc(dog.id)}">${esc(heading)}</h3>`
      : "";

    const thumbs = dog.photos.length > 1
      ? `<div class="dog-card__thumbs" role="group" aria-label="More photographs">` +
        dog.photos.map((p, i) =>
          `<button type="button" class="dog-card__thumb" data-thumb="${i}" aria-pressed="${i === 0}" aria-label="Show photograph ${i + 1} of ${dog.photos.length}">` +
          `<img src="${esc(p.thumb)}" alt="" loading="lazy" decoding="async"></button>`
        ).join("") + `</div>`
      : "";

    // Only show rows that have content. The neighbourhood row is skipped when it would just
    // repeat the place label above the title.
    const rows = [];
    if (dog.name && dog.title) rows.push(`<div><dt>Name</dt><dd>${esc(dog.name)}</dd></div>`);
    if (dog.neighbourhood && dog.locationNote && dog.neighbourhood !== dog.locationNote) rows.push(`<div><dt>Neighbourhood</dt><dd>${esc(dog.neighbourhood)}</dd></div>`);
    if (dog.date) rows.push(`<div><dt>Photographed</dt><dd>${formatDate(dog.date)}</dd></div>`);

    const story = dog.story
      ? `<details class="dog-card__story"><summary>Read the story</summary><div class="dog-card__story-body">${storyHTML(dog.story)}</div></details>`
      : "";

    const locate = context === "gallery" && dog.hasCoords
      ? `<button type="button" class="btn btn-outline dog-card__locate" data-locate="${esc(dog.id)}">Show on the map</button>`
      : "";

    return `
      <article class="dog-card" ${heading ? `aria-labelledby="dog-title-${esc(dog.id)}"` : `aria-label="${esc(accessibleName(dog))}"`}>
        ${main ? `<figure class="dog-card__figure"><img class="dog-card__photo" src="${esc(main.src)}" alt="${esc(main.alt)}" decoding="async"></figure>` : ""}
        ${thumbs}
        <div class="dog-card__body">
          ${placeLabel(dog) ? `<p class="dog-card__place">${esc(placeLabel(dog))}</p>` : ""}
          ${title}
          ${dog.caption ? `<p class="dog-card__caption">${esc(dog.caption)}</p>` : ""}
          ${rows.length ? `<dl class="dog-card__meta">${rows.join("")}</dl>` : ""}
          ${story}
          ${locate}
        </div>
      </article>`;
  }

  function wireCard(container, dog) {
    container.querySelectorAll("[data-thumb]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const photo = dog.photos[Number(btn.dataset.thumb)];
        const img = container.querySelector(".dog-card__photo");
        if (!photo || !img) return;
        img.src = photo.src;
        img.alt = photo.alt;
        container.querySelectorAll("[data-thumb]").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      });
    });
    const locateBtn = container.querySelector("[data-locate]");
    if (locateBtn) locateBtn.addEventListener("click", () => locateOnMap(dog.id));
  }

  /* ---------- Map ---------- */
  let map = null;
  let cluster = null;
  let markers = new Map();
  let mapFailed = false;

  function pawIcon(active) {
    return L.divIcon({
      className: "dog-pin" + (active ? " is-active" : ""),
      html: `<span class="dog-pin__inner">${PAW_SVG}</span>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17],
    });
  }

  function ensureMap() {
    if (map || mapFailed) return map;
    if (typeof L === "undefined" || typeof L.markerClusterGroup !== "function") {
      mapFailed = true;
      els.map.innerHTML = '<p class="dogs-map-fallback">The map could not be loaded just now. Gallery View shows every photograph in the collection.</p>';
      return null;
    }
    const center = Array.isArray(CFG.mapCenter) ? CFG.mapCenter : [11.9335, 79.829];
    const zoom = window.innerWidth < 600 ? (CFG.mapZoom || 14) - 1 : (CFG.mapZoom || 14);
    const tiles = CFG.tiles || {};

    map = L.map(els.map, {
      center, zoom,
      minZoom: CFG.minZoom || 11,
      maxZoom: CFG.maxZoom || 19,
      scrollWheelZoom: false, // enabled after the map is clicked, so the page still scrolls normally
      zoomAnimation: !reduceMotion,
      fadeAnimation: !reduceMotion,
      markerZoomAnimation: !reduceMotion,
    });

    L.tileLayer(tiles.url || "https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: tiles.attribution || '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: tiles.maxZoom || 19,
    }).addTo(map);

    map.on("focus click", () => map.scrollWheelZoom.enable());
    map.on("blur", () => map.scrollWheelZoom.disable());
    els.map.addEventListener("mouseleave", () => map.scrollWheelZoom.disable());

    cluster = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 46,
      spiderfyOnMaxZoom: true,
      zoomToBoundsOnClick: true,
      animate: !reduceMotion,
      iconCreateFunction: (c) => L.divIcon({
        className: "dog-cluster",
        html: `<span class="dog-cluster__inner">${c.getChildCount()}</span>`,
        iconSize: [40, 40],
      }),
    });
    map.addLayer(cluster);
    return map;
  }

  function refreshMarkers(fit) {
    if (!ensureMap()) return;
    cluster.clearLayers();
    const layers = [];
    visibleDogs().forEach((dog) => {
      if (!dog.hasCoords) return;
      let marker = markers.get(dog.id);
      if (!marker) {
        const label = accessibleName(dog);
        marker = L.marker([dog.lat, dog.lng], {
          icon: pawIcon(false),
          title: label,
          keyboard: true,
        });
        marker._dogId = dog.id;
        marker._dogLabel = label;
        marker.on("add", () => decorateMarker(marker));
        marker.on("click", () => openDog(dog.id));
        markers.set(dog.id, marker);
      }
      layers.push(marker);
    });
    cluster.addLayers(layers);
    if (fit && layers.length) {
      map.fitBounds(cluster.getBounds().pad(0.25), { maxZoom: 16, animate: false });
    }
  }

  // Give a marker's icon element an accessible name, and let Space open it as well as Enter.
  // Called whenever the marker is added to the map or its icon is rebuilt.
  function decorateMarker(marker) {
    const icon = marker._icon;
    if (!icon) return;
    icon.setAttribute("aria-label", marker._dogLabel);
    if (icon.dataset.spaceBound) return;
    icon.dataset.spaceBound = "1";
    icon.addEventListener("keydown", (e) => {
      if (e.key === " ") { e.preventDefault(); openDog(marker._dogId); }
    });
  }

  let activeMarkerId = null;
  function highlightMarker(id) {
    const prev = markers.get(activeMarkerId);
    if (prev) { prev.setIcon(pawIcon(false)); decorateMarker(prev); }
    activeMarkerId = id;
    const next = id && markers.get(id);
    if (next) { next.setIcon(pawIcon(true)); decorateMarker(next); }
  }

  /* ---------- Opening and closing details ---------- */
  function setUrlDog(id) {
    try {
      const url = new URL(window.location.href);
      if (id) url.searchParams.set("dog", id); else url.searchParams.delete("dog");
      history.replaceState(null, "", url);
    } catch (e) { /* non-critical */ }
  }

  function openDog(id) {
    const dog = byId.get(id);
    if (!dog) return;
    state.selectedId = id;
    if (state.view === "map") openDrawer(dog); else openModal(dog);
    setUrlDog(id);
  }

  function openDrawer(dog) {
    els.drawerBody.innerHTML = cardHTML(dog, "map");
    wireCard(els.drawerBody, dog);
    els.drawer.scrollTop = 0;
    els.drawer.classList.add("is-open");
    els.drawer.inert = false;
    els.drawer.setAttribute("aria-hidden", "false");
    highlightMarker(dog.id);
    const marker = markers.get(dog.id);
    if (map && marker) {
      const desktop = desktopQuery.matches;
      map.panInside(marker.getLatLng(), {
        paddingTopLeft: [40, 40],
        paddingBottomRight: desktop ? [els.drawer.offsetWidth + 48, 40] : [40, Math.min(els.drawer.offsetHeight, window.innerHeight * 0.8) + 24],
        animate: !reduceMotion,
      });
    }
    els.drawer.focus({ preventScroll: true });
  }

  function closeDrawer(returnFocus) {
    if (!els.drawer.classList.contains("is-open")) return;
    els.drawer.classList.remove("is-open");
    els.drawer.inert = true;
    els.drawer.setAttribute("aria-hidden", "true");
    const id = state.selectedId;
    highlightMarker(null);
    state.selectedId = null;
    setUrlDog(null);
    if (returnFocus && id) {
      const marker = markers.get(id);
      if (marker && marker._icon) marker._icon.focus({ preventScroll: true });
    }
  }

  function openModal(dog) {
    els.modalBody.innerHTML = cardHTML(dog, "gallery");
    wireCard(els.modalBody, dog);
    if (typeof els.modal.showModal === "function") els.modal.showModal(); else els.modal.setAttribute("open", "");
    els.modal.scrollTop = 0;
  }

  function closeModal() {
    if (els.modal.open) els.modal.close();
  }

  function locateOnMap(id) {
    const dog = byId.get(id);
    if (!dog || !dog.hasCoords) return;
    closeModal();
    if (!visibleDogs().some((d) => d.id === id)) {
      state.neighbourhood = "all";
      state.query = "";
      syncControls();
    }
    setView("map");
    if (!ensureMap()) return;
    applyFilters(false);
    map.invalidateSize();
    const marker = markers.get(id);
    if (!marker) return;
    map.setView(marker.getLatLng(), Math.max(map.getZoom(), 16), { animate: false });
    cluster.zoomToShowLayer(marker, () => openDog(id));
    els.stage.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  /* ---------- Gallery ---------- */
  function renderGallery(list) {
    els.gallery.innerHTML = list.map((dog) => {
      const photo = dog.photos[0];
      return `
        <li class="dog-tile">
          <button type="button" class="dog-tile__btn" data-dog="${esc(dog.id)}" aria-label="Open details: ${esc(accessibleName(dog))}">
            ${photo ? `<img class="dog-tile__img" src="${esc(photo.thumb)}" alt="${esc(photo.alt)}" loading="lazy" decoding="async">` : ""}
            <span class="dog-tile__cap">
              ${placeLabel(dog) ? `<span class="dog-tile__place">${esc(placeLabel(dog))}</span>` : ""}
              ${headingText(dog) ? `<span class="dog-tile__name">${esc(headingText(dog))}</span>` : ""}
              ${dog.caption ? `<span class="dog-tile__text">${esc(dog.caption)}</span>` : ""}
            </span>
          </button>
        </li>`;
    }).join("");
  }

  /* ---------- Controls ---------- */
  function buildFilters() {
    const list = neighbourhoods();
    const showChips = list.length >= 2;
    els.chips.innerHTML = showChips
      ? [`<button type="button" class="chip" data-neighbourhood="all" aria-pressed="true">All neighbourhoods</button>`]
          .concat(list.map((n) => `<button type="button" class="chip" data-neighbourhood="${esc(n)}" aria-pressed="false">${esc(n)}</button>`)).join("")
      : "";
    els.chips.hidden = !showChips;
    const showSearch = dogs.length >= (Number.isInteger(CFG.searchMinEntries) ? CFG.searchMinEntries : 8);
    els.searchWrap.hidden = !showSearch;
    els.filters.hidden = !showChips && !showSearch;
    if (state.neighbourhood !== "all" && !list.includes(state.neighbourhood)) state.neighbourhood = "all";
    syncControls();
  }

  function syncControls() {
    els.chips.querySelectorAll("[data-neighbourhood]").forEach((chip) => {
      const on = chip.dataset.neighbourhood === state.neighbourhood;
      chip.classList.toggle("is-active", on);
      chip.setAttribute("aria-pressed", String(on));
    });
    els.searchInput.value = state.query;
  }

  function setView(view) {
    state.view = view;
    els.tabs.forEach((tab) => {
      const on = tab.dataset.viewTab === view;
      tab.setAttribute("aria-selected", String(on));
      tab.tabIndex = on ? 0 : -1;
    });
    els.mapPanel.hidden = view !== "map";
    els.galleryPanel.hidden = view !== "gallery";
    if (view === "map") {
      if (ensureMap()) {
        map.invalidateSize();
        refreshMarkers(true);
      }
    } else {
      closeDrawer(false);
    }
    try {
      const url = new URL(window.location.href);
      url.hash = view === "gallery" ? "gallery" : "";
      history.replaceState(null, "", url);
    } catch (e) { /* non-critical */ }
  }

  function applyFilters(fit = true) {
    const list = visibleDogs();
    renderGallery(list);

    const collectionEmpty = dogs.length === 0;
    const noMatches = !collectionEmpty && list.length === 0;
    const message = collectionEmpty
      ? "The collection is growing. Photographs, small stories and places on the map will appear here as it fills in."
      : "No dogs match that selection yet.";
    els.galleryEmpty.hidden = list.length > 0;
    els.galleryEmptyText.textContent = message;
    els.mapEmpty.hidden = !(collectionEmpty || noMatches);
    els.mapEmptyText.textContent = message;
    els.gallery.hidden = list.length === 0;

    if (state.selectedId && !list.some((d) => d.id === state.selectedId)) closeDrawer(false);
    if (state.view === "map") refreshMarkers(fit);

    els.status.textContent = collectionEmpty
      ? "The collection is growing."
      : `${list.length} ${list.length === 1 ? "dog" : "dogs"} shown.`;
  }

  /* ---------- Events ---------- */
  els.tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => setView(tab.dataset.viewTab));
    tab.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      const next = els.tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + els.tabs.length) % els.tabs.length];
      next.focus();
      setView(next.dataset.viewTab);
    });
  });

  els.chips.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-neighbourhood]");
    if (!chip) return;
    state.neighbourhood = chip.dataset.neighbourhood;
    syncControls();
    applyFilters(true);
  });

  let searchTimer = null;
  els.searchInput.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = els.searchInput.value;
      applyFilters(true);
    }, 150);
  });

  els.gallery.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-dog]");
    if (btn) openDog(btn.dataset.dog);
  });

  document.querySelectorAll("[data-close-drawer]").forEach((b) => b.addEventListener("click", () => closeDrawer(true)));
  document.querySelectorAll("[data-close-modal]").forEach((b) => b.addEventListener("click", closeModal));
  els.modal.addEventListener("click", (e) => { if (e.target === els.modal) closeModal(); });
  els.modal.addEventListener("close", () => { if (state.view === "gallery") { state.selectedId = null; setUrlDog(null); } });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && els.drawer.classList.contains("is-open")) closeDrawer(true);
  });

  /* ---------- Init ---------- */
  function init() {
    buildFilters();
    els.drawer.inert = true;
    const wantsGallery = window.location.hash === "#gallery";
    state.view = wantsGallery ? "gallery" : "map";
    setView(state.view);
    applyFilters(true);

    const wanted = new URLSearchParams(window.location.search).get("dog");
    if (wanted && byId.has(wanted)) {
      const dog = byId.get(wanted);
      if (dog.hasCoords && state.view === "map") openDog(wanted);
      else if (state.view === "gallery") openDog(wanted);
      else { setView("gallery"); openDog(wanted); }
    }
  }

  loadDogs(window.DOGS);
  init();

  // Small public hook (used for testing and for future features such as featured encounters).
  window.DogsMap = {
    setDogs(list) {
      closeDrawer(false);
      closeModal();
      markers = new Map();
      activeMarkerId = null;
      if (cluster) cluster.clearLayers();
      loadDogs(list);
      buildFilters();
      applyFilters(true);
    },
    open: openDog,
  };
})();
