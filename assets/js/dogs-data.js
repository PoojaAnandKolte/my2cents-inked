/* ==========================================================================
   Dogs of Pondicherry — data
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to add a dog to the map and gallery.
   The page (dogs-of-pondicherry.html) and its scripts read from here.

   HOW TO ADD A DOG
   1. Put the optimised photograph in  assets/img/dogs/  — a card copy
      (about 1600px on the long edge, JPEG ~82%) and a gallery thumbnail
      (about 720px, JPEG ~80%), e.g. dog-13.jpg and dog-13-thumb.jpg.
      (Or send the originals and ask for them to be prepared.)
   2. Add one object to the DOGS array below, copying an existing entry.
   3. Save, commit and push. The dog appears on the map and in the gallery;
      new neighbourhoods appear in the filter automatically.

   FIELDS (only "id" is required; anything left blank is simply not shown)
     id             unique, lowercase, no spaces, e.g. "dog-13"
     title          editorial title shown as the heading, e.g. "The Yellow Wall"
     name           the dog's real name, if known (shown as a "Name" line)
     photo          main photograph (card copy)
     thumb          smaller copy used in the gallery grid
     photoAlt       alt text: describe what the photograph shows
     photos         optional extra photographs: [{ src, thumb, alt }, ...]
     caption        a line or two, in your own words
     neighbourhood  e.g. "Promenade" — drives the neighbourhood filter
     locationNote   the named place, e.g. "Sacred Heart Basilica"
     lat, lng       approximate coordinates (see notes). Leave as null and the
                    photograph appears in the gallery only, not on the map.
     date           "2026-08-09", "2026-08" or "2026"
     story          optional longer story; a blank line starts a new paragraph

   NOTES
   - Use APPROXIMATE, public-facing locations — a landmark, street or area,
     never a private address. The page also rounds coordinates to 3 decimal
     places (about 100 m) when placing markers; change coordinatePrecision
     below if you ever want that to be different.
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

/* First collection. Titles and captions are provisional, editorial descriptions,
   not the dogs' names. Names and dates are left blank until known.

   Coordinate sources (all approximate, to the named place only):
   - Promenade Beach: OpenStreetMap node 10657324566 ("Promenade", beach).
     Every Promenade photograph shares this one point on purpose; individual
     spots along the seafront are not known.
   - Sacred Heart Basilica: OpenStreetMap way 285876085 (centre of the site).
   - Puducherry Municipality: OpenStreetMap node 3942854933, listed as the
     "Puducherry Municipality Revenue Office" — TO CONFIRM it is the same
     building as the yellow wall.
   - Osudu Lake: centre of the "Oussudu WLS" area, way 681857177 — the lake is
     large, so this is only a lake-level position. TO CONFIRM.
   - Lee Café, Selfie Museum, Airport Road: no reliable match found, so
     coordinates are pending (null) and these appear in the gallery only. */
window.DOGS = [
  {
    id: "dog-01",
    title: "The Doorway Watcher",
    name: "",
    photo: "assets/img/dogs/dog-01.jpg",
    thumb: "assets/img/dogs/dog-01-thumb.jpg",
    photoAlt: "A white dog with small dark spots sits on the step outside an open doorway, seen from behind, looking out at the street.",
    caption: "A quiet observer of the street from a familiar doorway.",
    neighbourhood: "",
    locationNote: "Lee Café",
    lat: null, lng: null, // pending: no reliable match for Lee Café
    date: "",
  },
  {
    id: "dog-02",
    title: "The Seafront Resident",
    name: "",
    photo: "assets/img/dogs/dog-02.jpg",
    thumb: "assets/img/dogs/dog-02-thumb.jpg",
    photoAlt: "A white dog with pink-edged ears sits on a sandy beach looking out to sea, with dark rocks and a long pier in the distance under a stormy sky.",
    caption: "A familiar face by the water.",
    neighbourhood: "Promenade",
    locationNote: "Promenade Beach",
    lat: 11.93217, lng: 79.83606, // Promenade Beach (OSM node 10657324566)
    date: "",
  },
  {
    id: "dog-03",
    title: "The Pavement Observer",
    name: "",
    photo: "assets/img/dogs/dog-03.jpg",
    thumb: "assets/img/dogs/dog-03-thumb.jpg",
    photoAlt: "A white dog with black ears and a black patch around its eyes lies on large grey stone paving, looking towards the camera.",
    caption: "Finding a comfortable place to watch the world go by.",
    neighbourhood: "Promenade",
    locationNote: "Promenade Beach",
    lat: 11.93217, lng: 79.83606, // Promenade Beach (OSM node 10657324566)
    date: "",
  },
  {
    id: "dog-04",
    title: "The Afternoon Nap",
    name: "",
    photo: "assets/img/dogs/dog-04.jpg",
    thumb: "assets/img/dogs/dog-04-thumb.jpg",
    photoAlt: "A light cream-coloured dog sleeps on its side in a sunken patch of dark soil, surrounded by grey granite paving.",
    caption: "Even the pavement has its quiet corners.",
    neighbourhood: "Promenade",
    locationNote: "Promenade Beach",
    lat: 11.93217, lng: 79.83606, // Promenade Beach (OSM node 10657324566)
    date: "",
  },
  {
    id: "dog-05",
    title: "The Neighbourhood Regular",
    name: "",
    photo: "assets/img/dogs/dog-05.jpg",
    thumb: "assets/img/dogs/dog-05-thumb.jpg",
    photoAlt: "A brown dog with a white chest lies on a wooden step in front of a tall wooden double door; part of a yellow Selfie Museum sign is visible at the top left.",
    caption: "A resident outside a familiar doorway.",
    neighbourhood: "",
    locationNote: "Near Selfie Museum",
    lat: null, lng: null, // pending: Selfie Museum not found in OpenStreetMap
    date: "",
  },
  {
    id: "dog-06",
    title: "The Yellow Wall",
    name: "",
    photo: "assets/img/dogs/dog-06.jpg",
    thumb: "assets/img/dogs/dog-06-thumb.jpg",
    photoAlt: "A black dog lies on a tiled pavement in front of a large plain yellow wall, with a black-and-white kerb below.",
    caption: "A little shade against a familiar landmark.",
    neighbourhood: "",
    locationNote: "Puducherry Municipality",
    lat: 11.92746, lng: 79.83328, // Municipality Revenue Office (OSM node 3942854933) — to confirm
    date: "",
  },
  {
    id: "dog-07",
    title: "The Quiet Corner",
    name: "",
    photo: "assets/img/dogs/dog-07.jpg",
    thumb: "assets/img/dogs/dog-07-thumb.jpg",
    photoAlt: "A white dog with a black head and ear is curled up tightly on reddish granite paving; a person's shoe is visible at the edge of the frame.",
    caption: "A small moment of rest on the promenade.",
    neighbourhood: "Promenade",
    locationNote: "Promenade Beach",
    lat: 11.93217, lng: 79.83606, // Promenade Beach (OSM node 10657324566)
    date: "",
  },
  {
    id: "dog-08",
    title: "The Night-time Companion",
    name: "",
    photo: "assets/img/dogs/dog-08.jpg",
    thumb: "assets/img/dogs/dog-08-thumb.jpg",
    photoAlt: "A tan-and-white dog with its tongue out sits upright on paving at night, with sand, rocks and a dark sea behind it.",
    caption: "Keeping company with the seafront after dark.",
    neighbourhood: "Promenade",
    locationNote: "Promenade Beach",
    lat: 11.93217, lng: 79.83606, // Promenade Beach (OSM node 10657324566)
    date: "",
  },
  {
    id: "dog-09",
    // Title and caption left blank for now: the provisional wording ("The Park's Quiet
    // Resident" / "an old tree") was written for Bharathi Park, but this photograph is
    // at the Sacred Heart Basilica. Add wording here once decided.
    title: "",
    name: "",
    photo: "assets/img/dogs/dog-09.jpg",
    thumb: "assets/img/dogs/dog-09-thumb.jpg",
    photoAlt: "A white dog sleeps on a yellowish stone ledge against a pink wall, with a white metal rail across the foreground.",
    caption: "",
    neighbourhood: "",
    locationNote: "Sacred Heart Basilica",
    lat: 11.92618, lng: 79.82707, // Sacred Heart Basilica (OSM way 285876085)
    date: "",
  },
  {
    id: "dog-10",
    title: "The Kolam Guardian",
    name: "",
    photo: "assets/img/dogs/dog-10.jpg",
    thumb: "assets/img/dogs/dog-10-thumb.jpg",
    photoAlt: "A black-and-white dog lies curled on a colourful chalk kolam on the road, with a motorbike at the left.",
    caption: "Some mornings, the kolam has company.",
    neighbourhood: "",
    locationNote: "Airport Road",
    lat: null, lng: null, // pending: Airport Road is too long to place a single approximate point
    date: "",
  },
  {
    // Extra photograph. No title or caption supplied yet.
    id: "dog-11",
    title: "",
    name: "",
    photo: "assets/img/dogs/dog-11.jpg",
    thumb: "assets/img/dogs/dog-11-thumb.jpg",
    photoAlt: "A small tan dog lies on a wide paved promenade at night, with trees and a white building behind it.",
    caption: "",
    neighbourhood: "Promenade",
    locationNote: "Promenade Beach",
    lat: 11.93217, lng: 79.83606, // Promenade Beach (OSM node 10657324566)
    date: "",
  },
  {
    // Extra photograph. No title or caption supplied yet.
    id: "dog-12",
    title: "",
    name: "",
    photo: "assets/img/dogs/dog-12.jpg",
    thumb: "assets/img/dogs/dog-12-thumb.jpg",
    photoAlt: "A tan dog sits on a stone step at the edge of still water dotted with raindrop ripples.",
    caption: "",
    neighbourhood: "",
    locationNote: "Osudu Lake",
    lat: 11.95422, lng: 79.74204, // lake-level position (Oussudu WLS, OSM way 681857177) — to confirm
    date: "",
  },
];
