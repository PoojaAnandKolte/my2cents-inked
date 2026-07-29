/* My2cents Inked — Editor's Note canonical content.
   Single source of truth for the full page (editors-note.html) and the
   homepage preview (index.html). Edit the note only here — both pages
   render from this file automatically, so they can never drift apart. */

const EDITORS_NOTE = {
  paragraphs: [
    "Medicine has taught me that every diagnosis begins with listening. Literature has taught me that every story deserves to be heard. Somewhere between the two lies the space where we begin to understand not only illness, but also ourselves.",
    "The most meaningful questions rarely ask for quick answers. They ask us to listen more carefully, look more closely, and sometimes be comfortable not knowing everything at once.",
    "My2Cents Inked grew out of a desire to preserve that space.",
    "Perhaps this is what this website hopes to be: a place to think together, ask better questions, and remain curious. Not because every question has an answer, but because some are worth returning to.",
    "Welcome. I am glad you are here.",
  ],
  excerptCount: 3,
};

function renderEditorsNote(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = EDITORS_NOTE.paragraphs.map((p) => `<p>${p}</p>`).join("");
}

function renderEditorsNoteExcerpt(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = EDITORS_NOTE.paragraphs.slice(0, EDITORS_NOTE.excerptCount).map((p) => `<p>${p}</p>`).join("");
}
