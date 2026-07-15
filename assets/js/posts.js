/* My2cents Inked — post data.
   In a production build this would come from a CMS/API;
   here it's a static array so the whole site runs with no backend. */

const POSTS = [
  {
    slug: "the-quiet-authority-of-your-cycle",
    title: "The Quiet Authority of Your Cycle",
    category: "Women's Health",
    tags: ["hormones", "self-knowledge", "cycle-awareness"],
    excerpt: "Long before wearables and apps, women read their bodies like almanacs. What we lost when we started outsourcing that literacy — and how to reclaim it.",
    date: "2026-06-02",
    author: "Dr. Pooja Wadekar",
    featured: true,
    cover: "cover-3",
    content: `
      <p>There is a particular kind of confidence that comes from knowing your own rhythms — not from a chart or an app, but from paying attention. For most of human history, this was ordinary knowledge, passed between women the way recipes were: informally, imperfectly, but reliably.</p>
      <p>The menstrual cycle is often described to patients as a monthly inconvenience to be managed. It is better understood as a vital sign, on par with pulse or blood pressure. Its length, its regularity, the character of its changes over a lifetime — these tell a story about metabolic health, thyroid function, stress load, and reproductive timelines that no single blood test captures as elegantly.</p>
      <blockquote>Your cycle is not a problem to be solved. It is a report you receive every month, if you choose to read it.</blockquote>
      <h2>What the four phases are actually doing</h2>
      <p>The follicular phase is a slow build — estrogen rising, the uterine lining thickening, energy typically climbing. Ovulation is a short, sharp event, a roughly 24-hour window where a mature egg is released, usually accompanied by a small, reliable shift in basal body temperature. The luteal phase that follows is progesterone's turn to lead: calmer, warmer, more inward. Then, if no pregnancy occurs, the lining sheds and the cycle begins again.</p>
      <p>None of this requires memorizing hormone names. It requires noticing: energy, mood, sleep, appetite, skin, and how they shift across roughly four weeks. Three cycles of honest notes will tell you more about your own baseline than a single lab panel.</p>
      <h2>When to stop trusting your own read</h2>
      <p>Self-knowledge is not a substitute for care. Cycles shorter than 21 days or longer than 35, bleeding that soaks through protection hourly, pain that stops you from working or sleeping, or any bleeding after menopause are reasons to see a clinician, not reasons to track harder. The goal of body literacy is to know your own normal well enough to notice, early, when something isn't.</p>
    `,
  },
  {
    slug: "pcos-beyond-the-checklist",
    title: "PCOS, Beyond the Checklist",
    category: "Women's Health",
    tags: ["PCOS", "hormones", "long-read"],
    excerpt: "Polycystic ovary syndrome is diagnosed by a list of criteria. Living with it is nothing like a list. Notes on the gap between the two.",
    date: "2026-05-18",
    author: "Dr. Pooja Wadekar",
    featured: true,
    cover: "cover-5",
    content: `
      <p>Polycystic ovary syndrome affects roughly one in ten women of reproductive age, which makes it one of the most common endocrine conditions in medicine and, somehow, still one of the most poorly explained to the people who have it.</p>
      <p>Diagnosis rests on meeting two of three criteria: irregular ovulation, clinical or biochemical signs of elevated androgens, and a particular ovarian appearance on ultrasound. It is a tidy definition for an untidy condition. Two women can both technically qualify and experience almost nothing in common — one with irregular but painless cycles and clear skin, another with daily hair loss, weight gain that resists every intervention, and a hard time getting a straight answer from anyone.</p>
      <h2>The metabolic piece nobody leads with</h2>
      <p>Insulin resistance sits underneath most presentations of PCOS, even in women who are not overweight. This matters clinically because it reframes the condition: not primarily a reproductive problem with cosmetic side effects, but a metabolic condition with reproductive and cosmetic expressions. Treating the insulin resistance — through nutrition, movement, sometimes medication — often does more for cycle regularity and skin than any hormonal approach aimed at the ovaries directly.</p>
      <h2>What actually helps</h2>
      <ul>
        <li>A clear diagnosis explained in plain language, including which of the three criteria apply to you specifically.</li>
        <li>A metabolic workup, not just a hormone panel — fasting insulin and glucose tell a different part of the story.</li>
        <li>A plan with a horizon longer than three months. PCOS is managed in years, not cycles.</li>
        <li>Permission to prioritize different things at different life stages — fertility, skin, weight, mood — rather than treating all four as one problem with one fix.</li>
      </ul>
      <p>If you take one thing from this: PCOS is not a verdict on your body's failure to behave. It is a pattern, and patterns respond to patient, specific intervention.</p>
    `,
  },
  {
    slug: "the-first-trimester-nobody-warns-you-about",
    title: "The First Trimester Nobody Warns You About",
    category: "Women's Health",
    tags: ["pregnancy", "postpartum", "honest-talk"],
    excerpt: "Not the nausea. The strange, private grief of losing a version of yourself you hadn't finished using.",
    date: "2026-04-30",
    author: "Meera Sane",
    featured: false,
    cover: "cover-1",
    content: `
      <p>Everyone prepares you for the nausea, the exhaustion, the long list of foods suddenly repellent. Almost nobody mentions the quieter disorientation: that becoming pregnant, even joyfully and by choice, can feel like being handed an eviction notice from your own life.</p>
      <p>There is a version of you — the one who could book a flight on a whim, drink wine at a friend's wedding, plan a body around ambition rather than gestation — and she does not get a goodbye. She is simply, gradually, replaced.</p>
      <h2>Ambivalence is not the same as regret</h2>
      <p>Clinically, we spend a great deal of time reassuring patients that physical symptoms are normal. We spend far less time saying the same about ambivalence. Wanting a pregnancy and grieving the life it displaces are not contradictory. They are both true, often in the same afternoon.</p>
      <p>If no one has told you this yet: it is safe to feel two things at once. The clinic can screen for anemia and thyroid function and gestational diabetes. It is much worse, generally, at screening for the ordinary sadness of a threshold being crossed. That part is yours to name for yourself, and worth naming out loud to someone who won't rush to fix it.</p>
    `,
  },
  {
    slug: "menopause-is-not-a-deficiency",
    title: "Menopause Is Not a Deficiency",
    category: "Women's Health",
    tags: ["menopause", "aging", "hormones"],
    excerpt: "Medicine has spent decades describing menopause as estrogen running out, as if the body has failed at something. A reframe.",
    date: "2026-03-14",
    author: "Dr. Pooja Wadekar",
    featured: false,
    cover: "cover-7",
    content: `
      <p>The language around menopause is almost uniformly a language of loss: declining hormones, failing ovaries, a body running out of something essential. It's clinically accurate in the narrowest sense and misleading in almost every broader one.</p>
      <p>Menopause is a transition, not a malfunction — the same category of event as puberty, just facing the other direction. Puberty is not described as a deficiency of childhood. Menopause deserves the same neutrality.</p>
      <h2>What actually changes, and what to do about it</h2>
      <p>Vasomotor symptoms — hot flashes, night sweats — affect the majority of women during the transition and are the most treatable and least treated symptom cluster in medicine, largely due to outdated fears about hormone therapy that newer data has substantially revised. Bone density and cardiovascular risk both shift after the transition in ways worth actively managing, not passively enduring.</p>
      <p>The right question is rarely "how do I get through this," as though menopause were a storm to survive. It's "what does my body need now, at this stage, to keep functioning well for the next third of my life" — which is a much more useful question, and one your clinician should be equipped to answer with you, not just at you.</p>
    `,
  },
  {
    slug: "endometriosis-and-the-decade-it-takes-to-be-believed",
    title: "Endometriosis and the Decade It Takes to Be Believed",
    category: "Women's Health",
    tags: ["endometriosis", "pain", "advocacy"],
    excerpt: "The average diagnostic delay is still measured in years. What's behind it, and what to bring to an appointment when you suspect you're not being heard.",
    date: "2026-02-21",
    author: "Meera Sane",
    featured: false,
    cover: "cover-4",
    content: `
      <p>Endometriosis remains one of the clearest examples in modern medicine of a gap between prevalence and attention: it affects roughly one in ten women, and the average time from first symptom to diagnosis still stretches to nearly a decade in many health systems.</p>
      <p>Part of the delay is genuinely diagnostic — definitive confirmation has historically required laparoscopy, and imaging can miss disease that surgery finds. But part of the delay is cultural: period pain is so normalized that severe pain is repeatedly filed under "just a bad period" rather than investigated as a possible symptom of disease.</p>
      <h2>What to bring to the appointment</h2>
      <ul>
        <li>A pain diary — timing relative to your cycle, intensity, what relieves or worsens it, and how it affects work, sleep, and daily function.</li>
        <li>A specific, direct sentence: "This pain is not manageable with over-the-counter medication and it is affecting my ability to function." Vague framing is easier to defer.</li>
        <li>A willingness to ask for a second opinion if the first response is dismissal rather than investigation.</li>
      </ul>
      <p>You are allowed to advocate for imaging, for referral to a specialist, for a plan — even when the person across the desk seems inclined to wait and see. A decade is too long to wait for anything.</p>
    `,
  },
  {
    slug: "sleeping-with-the-window-open",
    title: "Sleeping With the Window Open",
    category: "Stories",
    tags: ["fiction", "short-story", "grief"],
    excerpt: "A short story about a mother, a hospital corridor, and the small rebellions we keep for ourselves when nothing else is ours to decide.",
    date: "2026-06-08",
    author: "Radhika Furtado",
    featured: true,
    cover: "cover-2",
    content: `
      <p>The corridor smelled the way all hospital corridors smell at 3 a.m. — like antiseptic trying and failing to cover something older, something that had been there before the antiseptic and would be there after. Asha had learned, over eleven days, exactly which vending machine dispensed warm coffee and which dispensed something closer to gray water. She no longer needed to check the label.</p>
      <p>Her mother was three doors down, sleeping in the flat, dreamless way that the medication produced — not rest, exactly, but its convincing impression. The doctors used the word "stable" the way other people used the word "fine": true, and also not the whole truth.</p>
      <p>What Asha remembered, standing in that corridor, was the window. Her mother had always slept with the bedroom window open, every season, every city they'd ever lived in, over her father's mild and constant objection. "The air gets old if you don't let new air in," she used to say, as though air had a shelf life, as though a house could go stale like bread.</p>
      <p>The hospital room had no window that opened. It had a window that looked out, sealed shut, onto a parking structure and, past it, a strip of sky the color of a healing bruise. Asha had asked, on the fourth day, whether there was any way to crack it, just an inch, and the nurse had looked at her with the specific patience reserved for relatives who are coping badly.</p>
      <p>So she did the only rebellious thing available to her. Each night, before she left, she opened the small ventilation grate above the door — the one meant for airflow, not air — just a centimeter, with a pen she kept for exactly this purpose. It let in nothing measurable. It was not medically significant. It was, she told herself, walking to her car past midnight, the only lie she was allowed to keep telling: that somewhere in that sealed room, in some small enough way, the air was still getting in new.</p>
    `,
  },
  {
    slug: "the-last-tenant",
    title: "The Last Tenant",
    category: "Stories",
    tags: ["fiction", "short-story", "family"],
    excerpt: "She inherited the flat, the furniture, and — apparently — the previous tenant's unfinished argument with the landlord.",
    date: "2026-05-25",
    author: "Ishaan Verma",
    featured: false,
    cover: "cover-6",
    content: `
      <p>The lease had transferred cleanly enough — Naina's name replacing her aunt's on a single line of a document neither of them had ever expected to need. What hadn't transferred cleanly was the argument.</p>
      <p>It began the second week, with a note under the door in handwriting she didn't recognize and a subject she understood immediately: the water heater, apparently, had been "promised for October" three Octobers running. She almost laughed. Her aunt had mentioned the water heater exactly once, in passing, the way you'd mention weather — an old complaint worn smooth from handling.</p>
      <p>By the fourth note, Naina had stopped being amused and started being curious. She wrote back, for the first time, not to the landlord but to whoever kept sliding paper under a dead woman's door. <em>She's gone,</em> she wrote. <em>I'm her niece. I don't know about any water heater, but I'm sorry for whatever's been going on.</em></p>
      <p>The reply came two days later, slower this time, gentler. <em>I didn't know. I'm sorry. She used to leave the hallway light on for me when I worked nights — small thing, but it mattered more than the water heater ever did. Tell the landlord it can wait. Some things you keep arguing about because it's easier than admitting you'll miss the person on the other side of the door.</em></p>
      <p>Naina read it twice, then went and turned on the hallway light, though she had no idea, yet, who for.</p>
    `,
  },
  {
    slug: "everything-my-mother-packed",
    title: "Everything My Mother Packed",
    category: "Stories",
    tags: ["personal-essay", "family", "memory"],
    excerpt: "An inventory of a suitcase, and of everything that doesn't fit inside one.",
    date: "2026-04-11",
    author: "Radhika Furtado",
    featured: false,
    cover: "cover-8",
    content: `
      <p>My mother packs a suitcase the way other people write letters — as an act of translation, trying to say something in an object that won't fit comfortably into words. When I moved abroad at twenty-two, she packed jars.</p>
      <p>Not clothes, particularly — I could buy clothes anywhere. Jars: pickled mango, a spice mix ground by hand that had no equivalent name in English, a tin of tea leaves wrapped twice in plastic "in case customs is difficult." Eleven kilos of my allowance, spent almost entirely on things that weighed less as objects than they did as arguments for staying connected to a kitchen I was leaving.</p>
      <p>I used to find this excessive. Now, years and several suitcases later, I recognize it as its own form of literacy — a way of saying <em>I cannot follow you there, so I am sending what I can in your place</em> — and I've started packing the same way for my own daughter, jars and all, and finding, to my mild surprise, that I mean exactly what my mother meant, in exactly the same weight of glass.</p>
    `,
  },
  {
    slug: "the-understudy",
    title: "The Understudy",
    category: "Stories",
    tags: ["fiction", "short-story", "ambition"],
    excerpt: "For six years she has known every line in the play except the one she was hired to say.",
    date: "2026-01-29",
    author: "Ishaan Verma",
    featured: false,
    cover: "cover-1",
    content: `
      <p>Priya had understudied the same role for six seasons, which meant she knew the part better than the woman who played it — knew where Meenal rushed the second act, where she took a breath that wasn't written, where, on a bad night, her voice thinned on the final line.</p>
      <p>She had told herself, for six seasons, that this was patience. That her turn would come the way weather comes, inevitably, if you simply waited it out. It took a stranger at a dinner party, someone who didn't know the theater world and its careful fictions, to ask the obvious question: "Why do you keep understudying someone instead of just being someone?"</p>
      <p>She didn't have an answer that night. She had one three months later, on a Tuesday, in an audition room for a play with no understudy built into the contract at all — a small part, a real one, entirely her own lines, spoken for the first time in a voice that didn't have to fit around anyone else's.</p>
    `,
  },
  {
    slug: "what-the-water-knew",
    title: "What the Water Knew",
    category: "Poetry",
    tags: ["poetry", "nature", "grief"],
    excerpt: "A short collection on rivers, memory, and the things that erode us gently.",
    date: "2026-06-11",
    author: "Radhika Furtado",
    featured: true,
    cover: "cover-6",
    content: `
      <p><em>I.</em></p>
      <p>The river does not remember the stone<br>
      it carried a mile downstream —<br>
      only that it carried, and kept carrying,<br>
      and called that current, not loss.</p>
      <p><em>II.</em></p>
      <p>My grandmother said grief is a river,<br>
      not because it moves on<br>
      but because you cannot step<br>
      into the same sorrow twice —<br>
      it has already become something else<br>
      by the time you reach the bank.</p>
      <p><em>III.</em></p>
      <p>Somewhere a delta is being born<br>
      out of everything a river<br>
      was too tired to keep carrying.<br>
      Even letting go, it turns out,<br>
      builds land.</p>
    `,
  },
  {
    slug: "small-inheritances",
    title: "Small Inheritances",
    category: "Poetry",
    tags: ["poetry", "family", "memory"],
    excerpt: "On the things we're left that were never in any will.",
    date: "2026-05-06",
    author: "Ishaan Verma",
    featured: false,
    cover: "cover-3",
    content: `
      <p>Not the house. Not the ring.<br>
      I mean the way she hummed<br>
      while waiting for the kettle,<br>
      three notes, always the same three,<br>
      a song with no name<br>
      that I now hum<br>
      without noticing I've started.</p>
      <p>I mean the specific silence<br>
      after an argument —<br>
      not sulking, just recalibrating —<br>
      that I learned from him<br>
      and gave, unknowingly,<br>
      to my own children,<br>
      who will give it, unknowingly,<br>
      to theirs.</p>
      <p>This is the estate<br>
      nobody reads aloud<br>
      in a lawyer's office.<br>
      This is the only inheritance<br>
      that never depreciates.</p>
    `,
  },
  {
    slug: "instructions-for-my-daughter-on-turning-thirty",
    title: "Instructions for My Daughter, on Turning Thirty",
    category: "Poetry",
    tags: ["poetry", "motherhood", "advice"],
    excerpt: "A poem in the form of a letter that will not be opened for another decade.",
    date: "2026-03-30",
    author: "Meera Sane",
    featured: false,
    cover: "cover-5",
    content: `
      <p>Keep at least one friend<br>
      who knew you before you were impressive.<br>
      Let your body change its mind<br>
      about what it wants to carry<br>
      and carry it anyway.</p>
      <p>When someone asks if you're settled,<br>
      you are allowed to say<br>
      <em>settling, present tense,</em><br>
      forever, if it comes to that —<br>
      a verb, not a destination.</p>
      <p>Call your mother<br>
      on the ordinary Tuesdays,<br>
      not just the birthdays.<br>
      That's when she'll need it most,<br>
      and so, quietly, will you.</p>
    `,
  },
  {
    slug: "the-arithmetic-of-leaving",
    title: "The Arithmetic of Leaving",
    category: "Poetry",
    tags: ["poetry", "distance", "family"],
    excerpt: "On the specific math of loving people across time zones.",
    date: "2026-02-09",
    author: "Radhika Furtado",
    featured: false,
    cover: "cover-7",
    content: `
      <p>Subtract eleven hours<br>
      and my morning is her midnight,<br>
      my good news arriving<br>
      too late to be anything<br>
      but tomorrow's.</p>
      <p>Multiply one phone call a week<br>
      by the years since I left,<br>
      and you get a mother<br>
      who knows me now<br>
      mostly by report,<br>
      the way historians know a century —<br>
      secondhand, and still certain.</p>
      <p>Divide the distance<br>
      by how often I say I'm fine,<br>
      and the remainder<br>
      is everything I don't.</p>
    `,
  },
  {
    slug: "why-we-still-need-slow-novels",
    title: "Why We Still Need Slow Novels",
    category: "Books & Chapters",
    tags: ["reading", "craft", "essay"],
    excerpt: "In an attention economy built on speed, the slow novel is a quiet act of resistance — and a case for reading one this season.",
    date: "2026-06-05",
    author: "Ishaan Verma",
    featured: true,
    cover: "cover-4",
    content: `
      <p>There is a particular species of novel that modern publishing has learned to fear: the slow one. Four hundred pages in which very little happens by the standard of plot, and almost everything happens by the standard of attention — a character noticing the light change, a marriage revealing itself one dinner at a time, a whole interior life rendered in the space most books spend on a single car chase.</p>
      <p>These novels have fallen out of commercial fashion for an understandable reason: they ask something of the reader that a scroll never does. They ask you to stay.</p>
      <h2>What slowness actually does</h2>
      <p>A slow novel trains a kind of attention that transfers, unexpectedly, into life. Readers of dense, patient fiction report — anecdotally, and increasingly in research on narrative and empathy — a greater tolerance for ambiguity, a slower trigger for judgment, a willingness to sit with a person's contradictions rather than resolve them into a verdict. Fast fiction can entertain you. Slow fiction, done well, can change the grain of how you notice your own life.</p>
      <p>If your reading has thinned to headlines and highlights, the recommendation is not more books. It's one slow one, read without a deadline, this season.</p>
    `,
  },
  {
    slug: "rereading-in-your-thirties",
    title: "Rereading in Your Thirties",
    category: "Books & Chapters",
    tags: ["reading", "memory", "essay"],
    excerpt: "The books you loved at twenty are still on the shelf. You are not the same reader who put them there.",
    date: "2026-04-22",
    author: "Meera Sane",
    featured: false,
    cover: "cover-2",
    content: `
      <p>I reread a novel last winter that I had loved fiercely at twenty-two, certain it was the truest thing I had ever read about love. At thirty-four, it read like a very convincing argument made by someone who had never actually been in a long relationship — persuasive, articulate, and slightly wrong in a way I could now name precisely because I'd lived past the argument.</p>
      <p>This is the strange gift of rereading: the book hasn't changed a single word, but it is, functionally, a different book, because you're a different instrument for measuring it. The plot you remember turns out to have been a container for whatever you needed it to hold at the time — and what you needed at twenty-two is rarely what you need now.</p>
      <p>Rereading, done occasionally and deliberately, is one of the few honest ways to take your own measure over time. Not a diary, which flatters memory. A fixed text, against which your own drift becomes visible.</p>
    `,
  },
  {
    slug: "the-case-for-reading-things-that-dont-comfort-you",
    title: "The Case for Reading Things That Don't Comfort You",
    category: "Books & Chapters",
    tags: ["reading", "craft", "essay"],
    excerpt: "Comfort reading has its place. So does the harder kind — the book that leaves you unsettled on purpose.",
    date: "2026-03-02",
    author: "Ishaan Verma",
    featured: false,
    cover: "cover-8",
    content: `
      <p>There's no argument here against comfort reading — the familiar mystery, the reliable romance, the book you've read four times because you already know it will end well. That kind of reading is rest, and rest is not a lesser use of a book.</p>
      <p>But a reading life made entirely of comfort starts to resemble a diet made entirely of foods you already like: nourishing in the short term, quietly narrowing in the long one. The uncomfortable book — the one that argues a position you don't hold, renders a life you find difficult to sympathize with, or simply refuses to resolve neatly — does something comfort reading structurally cannot. It asks you to sit with dissonance instead of resolving it immediately, which is a skill, and one that atrophies without practice.</p>
      <p>The recommendation isn't to abandon comfort. It's to keep one uncomfortable book in rotation, deliberately, the way you'd keep one hard conversation in rotation with people you love — not because it's pleasant, but because avoiding it entirely costs you something you won't notice until much later.</p>
    `,
  },
  {
    slug: "marginalia-a-defense",
    title: "Marginalia: A Defense",
    category: "Books & Chapters",
    tags: ["reading", "craft"],
    excerpt: "Writing in books is not vandalism. It's a conversation with a text that refuses to end when the book is closed.",
    date: "2026-01-15",
    author: "Meera Sane",
    featured: false,
    cover: "cover-3",
    content: `
      <p>Somewhere in most readers' upbringing, a well-meaning adult taught them that books are to be kept pristine — spines uncracked, pages unmarked, as though a book's highest purpose were to remain unread-looking. This is, respectfully, a misunderstanding of what books are for.</p>
      <p>A margin is where a reader talks back. A question mark next to a claim you don't buy, an underline beneath a sentence that named something you'd felt but never articulated, a date scribbled in a corner marking exactly when this book found you — these are not damage. They're evidence that the book did its job: it provoked a response.</p>
      <p>Years later, a marked-up book becomes something a clean one never can: a record of an earlier reader, one who happened to also be you. Reread it, and you're in conversation with two people at once — the author, and yourself, a decade younger, arguing in the margins.</p>
    `,
  },
  {
    slug: "on-writing-what-you-actually-know",
    title: "On Writing What You Actually Know",
    category: "Essays",
    tags: ["writing", "craft", "essay"],
    excerpt: "The oldest advice in writing is also the most misunderstood. A note on what 'write what you know' should actually mean.",
    date: "2026-06-14",
    author: "Dr. Pooja Wadekar",
    featured: true,
    cover: "cover-5",
    content: `
      <p>"Write what you know" is advice so old it has calcified into cliché, and like most calcified advice, it gets misapplied constantly — usually as an instruction to write only autobiography, only the literal texture of your own life.</p>
      <p>That's not what it means, or at least not only. What you know includes what you have felt precisely, even if the container for that feeling was never your own life directly. You may never have lost a house to a flood, but if you know exactly what it feels like to lose something slowly, while people around you insist on staying practical, you know enough to write that scene truthfully, in any setting.</p>
      <h2>What this means for Essays</h2>
      <p>This section of My2cents Inked holds exactly that kind of writing — pieces that don't always fit neatly into Women's Health or Medicine or Stories, but that come from the same instinct: write toward what you've actually felt, precisely, rather than what sounds impressive in the abstract. Expect essays on craft, on the ordinary week, and on the questions that deserve a longer answer than a reply.</p>
    `,
  },
  {
    slug: "the-ordinary-tuesday",
    title: "The Ordinary Tuesday",
    category: "Essays",
    tags: ["life", "essay", "attention"],
    excerpt: "Nothing happened on the Tuesday I keep thinking about. That was rather the point.",
    date: "2026-05-19",
    author: "Dr. Pooja Wadekar",
    featured: false,
    cover: "cover-8",
    content: `
      <p>If you asked me for the best day of the last decade, I would not be able to give you a date with anything remarkable attached to it. No wedding, no diagnosis, no birth, no departure. Just a Tuesday, mid-autumn, that I remember with a clarity that embarrasses me slightly, given how little happened in it.</p>
      <p>I finished rounds early. The light in the corridor did the thing it does for about eleven minutes in October, turning the linoleum the color of weak tea. I ate lunch sitting down, which at the time felt like an event. Someone's mother, three days post-op, asked me to sit for a minute and tell her, honestly, whether she'd be able to garden again by spring, and I did, and she cried a little, gladly, and I went back to my desk with the particular lightness that comes from having been useful in a small, exact way.</p>
      <h2>The tyranny of the remarkable</h2>
      <p>We are trained, by almost everything — school, résumés, social media, the whole bulk of prestige narratives — to organize a life around its peaks: the accomplishments, the milestones, the days that would make a good toast at a retirement dinner. This is not wrong, exactly, but it quietly devalues the enormous middle of a life, the part actually being lived while we wait for the next peak to arrive.</p>
      <p>The ordinary Tuesday is not a consolation prize for a life without enough remarkable days. It is, on the evidence of my own memory, where most of what I'd actually call happiness has lived. Worth noticing on purpose, before it becomes, retroactively, the good old days.</p>
    `,
  },
  {
    slug: "why-we-dont-run-ads",
    title: "Why This Publication Doesn't Run Ads",
    category: "Essays",
    tags: ["publishing", "essay"],
    excerpt: "A short explanation of the business model of a publication that, on paper, doesn't have one.",
    date: "2026-02-28",
    author: "Dr. Pooja Wadekar",
    featured: false,
    cover: "cover-1",
    content: `
      <p>The most common question I get from other writers is some version of "how are you paying for this," asked with the specific curiosity of people who've watched every other publication solve the same problem by selling attention to advertisers.</p>
      <p>There's no ad on this site for a simple design reason: an ad-supported page is optimized, structurally, for time-on-page and click-through, and those incentives push every editorial decision toward whatever keeps a reader scrolling rather than whatever serves the piece. A four-hundred-word essay with three ad breaks reads differently than the same essay uninterrupted, even if not a single word changes.</p>
      <p>The honest answer is that My2cents Inked is sustained, for now, by the same clinic hours and classroom hours that give me anything worth writing about — and, increasingly, by readers who support it directly through the newsletter. A slower, smaller model, but one that leaves the editorial decisions entirely with the person actually writing the pieces, which was the whole point.</p>
    `,
  },
  {
    slug: "the-case-for-slow-medicine",
    title: "The Case for Slow Medicine",
    category: "Medicine",
    tags: ["practice", "bedside-manner", "essay"],
    excerpt: "The best diagnostic tool in medicine is unhurried attention. We have built a system that makes it the scarcest one.",
    date: "2026-06-09",
    author: "Dr. Pooja Wadekar",
    featured: true,
    cover: "cover-7",
    content: `
      <p>A resident once asked me how I knew, within thirty seconds of walking into a room, that something was wrong beyond what the chart said. I told her the honest answer, which is unglamorous: I had looked at the patient, not the monitor, for slightly longer than the schedule technically allowed.</p>
      <p>Medicine has quietly optimized itself around throughput — a reasonable response to real constraints, more patients than hours, more paperwork than either. But throughput and diagnosis are not the same skill, and the second one degrades, almost invisibly, when it's squeezed for the sake of the first. The best diagnosticians I trained under were not faster than everyone else. They were, if anything, slightly slower, in a way that looked, from the doorway, indistinguishable from doing nothing.</p>
      <h2>What slowness actually buys you</h2>
      <p>A few extra seconds of eye contact before the exam begins, so a patient finishes the sentence they were about to abandon. A pause after "any other symptoms," held a beat longer than comfortable, which is usually when the actual reason for the visit gets mentioned. Time enough, at the end, to explain the plan in a sentence the patient could repeat back, rather than one they simply nodded at.</p>
      <p>None of this shows up on a productivity report. All of it shows up, eventually, in outcomes — in the diagnosis caught a visit earlier than it otherwise would have been, in the patient who actually takes the medication because they understood why. Slow medicine isn't a luxury for clinics that can afford it. It's the part of the job that was never optional, quietly priced out by everything else competing for the same fifteen minutes.</p>
    `,
  },
  {
    slug: "notes-from-teaching-rounds",
    title: "Notes from Teaching Rounds",
    category: "Medicine",
    tags: ["teaching", "residents", "essay"],
    excerpt: "What twenty years of walking junior residents through hard cases has taught the teacher, not just the taught.",
    date: "2026-04-03",
    author: "Dr. Pooja Wadekar",
    featured: false,
    cover: "cover-3",
    content: `
      <p>Teaching rounds are supposed to run one direction: the senior clinician transmits, the resident receives. Twenty years in, I no longer believe that's what actually happens, or what makes the good ones good.</p>
      <p>The best teaching moments I remember were not the ones where I delivered a tidy pearl of wisdom to a nodding room. They were the ones where a resident asked a question so plainly obvious, so entirely un-embarrassed by its own simplicity, that it forced me to actually reconstruct why I believed what I believed, rather than simply recite it from habit. "Why do we wait for that number before intervening?" is a first-year question. It is also, asked sincerely, a genuinely useful audit of a practice pattern that might have calcified past its original reasoning.</p>
      <h2>Teaching as a check on drift</h2>
      <p>Every clinician's judgment drifts, slowly and invisibly, shaped by whichever cases happened to walk through their particular door in a particular year. Teaching is one of the few remaining structures that forces that drift into the open, because explaining a decision to someone who hasn't yet absorbed your shortcuts requires making the reasoning explicit again.</p>
      <p>I tell every new resident some version of the same thing on their first week: ask the obvious question, especially when you suspect it's obvious. Half the time you'll learn something you were missing. The other half, you'll have handed your teacher a small, necessary mirror.</p>
    `,
  },
];

/* --- Helpers shared across pages --- */

function wordsToReadingTime(html) {
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

POSTS.forEach((p) => {
  p.readingTime = wordsToReadingTime(p.content);
  p.excerptWords = p.excerpt;
});

const CATEGORIES = ["Women's Health", "Medicine", "Essays", "Stories", "Poetry", "Books & Chapters"];

const CATEGORY_ACCENTS = {
  "Women's Health": "accent-womens-health",
  Medicine: "accent-medicine",
  Essays: "accent-essays",
  Stories: "accent-stories",
  Poetry: "accent-poetry",
  "Books & Chapters": "accent-books",
};

function categoryAccentClass(cat) {
  return CATEGORY_ACCENTS[cat] || "";
}

function getAllTags() {
  const set = new Set();
  POSTS.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug);
}

function getPostsByCategory(category) {
  return POSTS.filter((p) => p.category === category).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getFeaturedPosts() {
  return POSTS.filter((p) => p.featured).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getLatestPosts(limit = 6, excludeSlug = null) {
  return POSTS
    .filter((p) => p.slug !== excludeSlug)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

function getRelatedPosts(post, limit = 3) {
  return POSTS
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

function getAdjacentPosts(post) {
  const sorted = [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
  const index = sorted.findIndex((p) => p.slug === post.slug);
  return {
    newer: index > 0 ? sorted[index - 1] : null,
    older: index < sorted.length - 1 ? sorted[index + 1] : null,
  };
}

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function initials(name) {
  const clean = name.replace(/^(Dr|Mr|Mrs|Ms|Prof)\.?\s+/i, "");
  return clean.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}
