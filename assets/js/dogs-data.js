/* ==========================================================================
   Dogs of Pondicherry — data
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to add a dog to the map and gallery.
   The page (dogs-of-pondicherry.html) and its scripts read from here.

   HOW TO ADD A DOG
   1. Put the optimised photograph(s) in  assets/img/dogs/
      (JPEG, about 1400px on the long edge, ~80% quality is plenty).
   2. Add one object to the DOGS array below, using the template that follows.
   3. Save, commit and push. The dog appears on the map and in the gallery;
      new neighbourhoods appear in the filter automatically.

   TEMPLATE (copy, remove the leading "// " and fill in only what you know):

   // {
   //   id: "a-short-unique-slug",          // required, unique, lowercase, no spaces
   //   name: "",                           // optional — leave out if unknown
   //   photo: "assets/img/dogs/slug.jpg",  // main photograph
   //   photoAlt: "",                       // alt text: describe what the photo shows
   //   photos: [                           // optional additional photographs
   //     { src: "assets/img/dogs/slug-2.jpg", alt: "" },
   //   ],
   //   caption: "",                        // one or two lines, your own words
   //   neighbourhood: "",                  // e.g. "White Town" — drives the filter
   //   locationNote: "",                   // approximate, public-facing, e.g. "Near the Promenade"
   //   lat: 0, lng: 0,                     // approximate coordinates (see note below)
   //   date: "",                           // "2026-08-09", "2026-08" or "2026" — optional
   //   story: "",                          // optional longer story; blank line = new paragraph
   // },

   NOTES
   - Every field except id is optional. An entry without coordinates still
     appears in the gallery, just not on the map.
   - Use APPROXIMATE, public-facing locations — a street or area, never a
     private address. The page also rounds coordinates to 3 decimal places
     (about 100 m) when placing markers; change coordinatePrecision below
     if you ever want that to be different.
   - To find coordinates: right-click a spot in Google Maps or
     openstreetmap.org and copy the latitude/longitude.
   ========================================================================== */

window.DOGS_CONFIG = {
  // Where the map is centred before any dogs are added (Pondicherry town).
  mapCenter: [11.9335, 79.829],
  mapZoom: 14,
  minZoom: 11,
  maxZoom: 19,

  // Map tiles. OpenStreetMap's standard tiles need no account or API key and
  // are fine for a small personal site; attribution is required and included.
  // To use another provider later, change url/attribution here only.
  tiles: {
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  },

  // Marker positions are rounded to this many decimal places (3 ≈ 100 m).
  coordinatePrecision: 3,

  // Show the search box once the collection reaches this many dogs.
  searchMinEntries: 8,

  // Optional preferred order for the neighbourhood filter. Neighbourhoods are
  // taken from the entries themselves; any not listed here follow alphabetically.
  neighbourhoodOrder: ["White Town", "Heritage Town", "Promenade", "Lawspet"],
};

window.DOGS = [
  // The collection is growing. Entries will appear here once real photographs
  // and approximate locations have been added.
];
