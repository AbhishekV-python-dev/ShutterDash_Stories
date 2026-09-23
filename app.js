/**
 * SHUTTERDASH STORIES — ENGLISH QUOTATION EDITOR
 * A curated library of 26 distinct art directions with template-specific copy,
 * palettes, typography, layouts and demo photography.
 */

const PHOTO_URL = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=84`;
const PHOTO_POOLS = {
  Editorial: [
    'photo-1519741497674-611481863552', 'photo-1511285560929-80b456fea0bc',
    'photo-1583939003579-730e3918a45a', 'photo-1520854221256-17451cc331bf',
    'photo-1519741347686-c1e0aadf4611', 'photo-1509927083803-4bd519298ac4',
    'photo-1537633552985-df8429e8048b', 'photo-1515934751635-c81c6bc9a2d8',
    'photo-1522673607200-164d1b6ce486', 'photo-1532712938310-34cb3982ef74'
  ],
  Hindu: [
    'photo-1591604466107-ec97de577aff', 'photo-1644416004068-4c8ddb5e7d56',
    'photo-1735052712464-9d24b69be5f5', 'photo-1760080903610-8429f0cfd42f',
    'photo-1760080903630-29f853ec761f'
  ],
  Muslim: [
    'photo-1519225421980-715cb0215aed', 'photo-1529636798458-92182e662485',
    'photo-1465495976277-4387d4b0b4c6', 'photo-1492562080023-ab3db95bfbce',
    'photo-1544078751-58fee2d8a03b'
  ],
  Christian: [
    'photo-1769230357956-bc52ceda8c34', 'photo-1715089036251-04eb6c5011eb',
    'photo-1741746720019-093b33ae39c6', 'photo-1655994675022-0750c1f73e42',
    'photo-1655994586789-ac173a44aaa5'
  ]
};

const makeTemplate = (id, name, subtitle, category, layout, colors, fonts, radius, shadow, copy, photoIndex = 0, images = null) => {
  const [bg, cardBg, primary, accent, text, heading, muted, border, borderAccent, badgeBg] = colors;
  const pool = PHOTO_POOLS[category] || PHOTO_POOLS.Editorial;
  const photoAt = offset => PHOTO_URL(pool[(photoIndex + offset) % pool.length]);
  return {
    id, name, subtitle, category, layout, dotColor: primary,
    theme: {
      bg, cardBg, primary, accent, text, heading, muted, border, borderAccent, badgeBg,
      fontHeading: fonts[0], fontBody: fonts[1], cardRadius: radius, cardShadow: shadow
    },
    images: images || { cover: photoAt(0), about: photoAt(1), closing: photoAt(2) },
    copy
  };
};

const TEMPLATES = [
  // ShutterDash signature: art directed from the supplied quotation PDF.
  makeTemplate('shutterdash-signature', 'ShutterDash Signature', 'The original ShutterDash quotation', 'Signature', 'signature',
    ['#F8F6F2','#FFFFFF','#B08B55','#C5A77B','#5C5650','#27231F','#928A80','#E8E1D7','#D4BD99','#F4EEE4'],
    ["'Cormorant Garamond', Georgia, serif", "'Montserrat', sans-serif"], '2px', '0 10px 30px rgba(45,36,24,.06)',
    { about:'A Story Worth Remembering', timeline:'The Celebration', coverage:'Your Event Coverage', deliverables:'Thoughtfully Delivered', gifts:'A Few Lovely Extras', investment:'The Investment', faq:'Helpful Details', testimonials:'Kind Words', closing:'Thank You' }, 0,
    { cover:PHOTO_URL('photo-1606800052052-a08af7148866'), about:PHOTO_URL('photo-1519741347686-c1e0aadf4611'), closing:PHOTO_URL('photo-1492562080023-ab3db95bfbce') }),

  // Ten fresh editorial and contemporary looks.
  makeTemplate('paper-atelier', 'Paper Atelier', 'Warm paper, fine type and quiet detail', 'Editorial', 'paper',
    ['#F5F1E9','#FFFCF6','#8E6D4D','#C4A47D','#5E554A','#29241E','#958A7D','#E6DCCB','#B7966A','#F0E8DB'], ["'Prata', Georgia, serif", "'Lora', Georgia, serif"], '0px', '0 12px 34px rgba(74,58,39,.07)',
    { about:'The Story, Thoughtfully Told', timeline:'The Day at a Glance', coverage:'Your Dedicated Crew', deliverables:'Made to Last', gifts:'Considered Extras', investment:'Your Collection', faq:'Before the Day', testimonials:'Notes from Our Couples', closing:'With Warm Wishes' }, 0),
  makeTemplate('velvet-afterdark', 'Velvet Afterdark', 'A cinematic look for candlelit celebrations', 'Editorial', 'velvet',
    ['#17171D','#22212A','#C7A56C','#E5CB9F','#D0C9C1','#F7F2E9','#8C8590','#3B3843','#BA9860','#302C35'], ["'Bodoni Moda', Georgia, serif", "'Inter', sans-serif"], '3px', '0 16px 42px rgba(0,0,0,.32)',
    { about:'The Feeling Between Frames', timeline:'An Evening in Scenes', coverage:'The Production Team', deliverables:'The Final Cut', gifts:'A Private Preview', investment:'The Collection', faq:'Production Notes', testimonials:'After the Applause', closing:'End Credits' }, 1),
  makeTemplate('desert-modern', 'Desert Modern', 'Sun-warmed terracotta and sculptural forms', 'Editorial', 'desert',
    ['#F7F0E9','#FFFBF6','#B85E42','#D89A75','#5C4A40','#35271F','#9B8679','#E9D8CA','#CB8A67','#F1E2D6'], ["'DM Serif Display', Georgia, serif", "'Jost', sans-serif"], '18px', '0 10px 26px rgba(139,76,51,.09)',
    { about:'A Celebration with Character', timeline:'A Day in Warm Light', coverage:'Your Gathering', deliverables:'Keepsakes and Films', gifts:'Little Added Joys', investment:'The Collection', faq:'Before We Begin', testimonials:'Stories from Our Couples', closing:'With Love, Always' }, 2),
  makeTemplate('quiet-architecture', 'Quiet Architecture', 'Precise spacing and gallery-like restraint', 'Editorial', 'quiet',
    ['#F2F4F3','#FFFFFF','#344B49','#8BA09B','#56615E','#182522','#98A39F','#DCE3E0','#AABBB5','#E8EFEC'], ["'Space Grotesk', sans-serif", "'Inter', sans-serif"], '0px', 'none',
    { about:'A Clear Point of View', timeline:'The Schedule', coverage:'The Crew', deliverables:'The Deliverables', gifts:'Included', investment:'The Fee', faq:'Project Notes', testimonials:'Client Reflections', closing:'Thank You' }, 3),
  makeTemplate('gallery-noir', 'Gallery Noir', 'Black, white and editorial art direction', 'Editorial', 'gallery',
    ['#F5F4F1','#FFFFFF','#1B1B1B','#A8906A','#55514A','#141414','#8A8580','#D9D6D0','#A8906A','#ECE9E3'], ["'Bodoni Moda', Georgia, serif", "'Montserrat', sans-serif"], '0px', '0 8px 20px rgba(0,0,0,.045)',
    { about:'The Art of Looking Closer', timeline:'A Sequence of Moments', coverage:'Creative Direction', deliverables:'The Image Set', gifts:'Selected Prints', investment:'Project Investment', faq:'The Details', testimonials:'In Their Words', closing:'The Final Frame' }, 4),
  makeTemplate('coastal-linen', 'Coastal Linen', 'Salt air, soft blue and natural linen', 'Editorial', 'coastal',
    ['#EFF5F5','#FFFFFF','#326778','#7CA8AC','#4C6062','#1E3D45','#8AA1A3','#D7E6E6','#9DBFC1','#E3F0EF'], ["'Lora', Georgia, serif", "'Outfit', sans-serif"], '20px', '0 9px 28px rgba(39,92,105,.08)',
    { about:'A Little About Our Studio', timeline:'By the Water and Time', coverage:'Your Crew', deliverables:'What We Create', gifts:'Coastal Keepsakes', investment:'The Collection', faq:'Before You Set Sail', testimonials:'Postcards from Our Couples', closing:'See You by the Sea' }, 5),
  makeTemplate('botanical-house', 'Botanical House', 'Garden greens with delicate botanical rules', 'Editorial', 'botanical',
    ['#F1F4EC','#FCFDF8','#536B50','#A5B08A','#515B4D','#283829','#8D9784','#DCE3D4','#9CAC89','#E6ECDF'], ["'Lora', Georgia, serif", "'Jost', sans-serif"], '4px', '0 12px 30px rgba(47,74,50,.08)',
    { about:'A Story Rooted in Feeling', timeline:'The Day in Moments', coverage:'The People Beside You', deliverables:'Made to Keep', gifts:'A Little Extra', investment:'The Collection', faq:'Before the Garden Opens', testimonials:'Their Stories', closing:'With Warm Wishes' }, 6),
  makeTemplate('terracotta-studio', 'Terracotta Studio', 'Bold blocks, warm clay and clean geometry', 'Editorial', 'terracotta',
    ['#F6EEE6','#FFF9F2','#B9573F','#DB805F','#57483F','#38261F','#998378','#E8D6C9','#CB8062','#F0E0D4'], ["'DM Serif Display', Georgia, serif", "'Plus Jakarta Sans', sans-serif"], '6px', '6px 6px 0 #E9D8CB',
    { about:'A Studio with a Point of View', timeline:'The Run of Show', coverage:'Crew and Production', deliverables:'The Final Assets', gifts:'Added with Care', investment:'Project Investment', faq:'Production Notes', testimonials:'Client References', closing:'Until the Last Dance' }, 7),
  makeTemplate('blue-hour', 'Blue Hour', 'Deep blue, soft silver and a modern split cover', 'Editorial', 'blue-hour',
    ['#EDF1F6','#FFFFFF','#34516E','#91A7BC','#4D5967','#1A2A3A','#8795A4','#D9E1EA','#A8BBCB','#E3EAF1'], ["'Playfair Display', Georgia, serif", "'Inter', sans-serif"], '8px', '0 12px 30px rgba(26,52,77,.12)',
    { about:'The Hours Between Daylight', timeline:'A Night in Chapters', coverage:'Your Event Team', deliverables:'The Finished Story', gifts:'A Thoughtful Addition', investment:'The Agreement', faq:'A Few Details', testimonials:'Notes from the Dance Floor', closing:'Until the Lights Go Out' }, 8),
  makeTemplate('heirloom-crest', 'Heirloom Crest', 'A formal keepsake with tailored gold details', 'Editorial', 'heirloom',
    ['#F7F3E9','#FFFDF7','#715A31','#B99B60','#59513F','#302817','#94896F','#E4DAC5','#B69A5E','#F0E8D6'], ["'Cinzel', Georgia, serif", "'Montserrat', sans-serif"], '2px', '0 8px 26px rgba(89,70,31,.08)',
    { about:'A Legacy in Every Frame', timeline:'The Celebration Order', coverage:'Your Wedding Ensemble', deliverables:'Heirlooms to Keep', gifts:'Complimentary Details', investment:'The Investment', faq:'Guest Guidance', testimonials:'Patron Notes', closing:'With Gratitude' }, 9),

  // Hindu wedding collection: English-only copy with ceremony-aware art direction.
  makeTemplate('hindu-sacred-fire', 'Hindu Wedding — Sacred Fire', 'Marigold, vermilion and a ceremonial glow', 'Hindu', 'sacred-fire',
    ['#FBF3E7','#FFFCF6','#B94728','#E3A52B','#654A36','#402819','#9E856C','#EFDDC6','#D6A244','#F7E9D2'], ["'Cinzel', Georgia, serif", "'Jost', sans-serif"], '12px', '0 10px 28px rgba(150,73,33,.11)',
    { about:'A Celebration of Two Families', timeline:'The Ceremony and Celebration', coverage:'Every Ritual, Carefully Covered', deliverables:'Memories for Generations', gifts:'Family Keepsakes', investment:'Your Wedding Collection', faq:'A Few Helpful Details', testimonials:'Blessings from Our Couples', closing:'With Joy and Gratitude' }, 0),
  makeTemplate('hindu-garland-garden', 'Hindu Wedding — Garland Garden', 'Fresh florals, leaf green and warm ivory', 'Hindu', 'garland-garden',
    ['#F2F4EA','#FFFEF8','#567344','#C27B3A','#56604D','#28372C','#929B82','#E0E5D6','#B99863','#E9EDDE'], ["'Lora', Georgia, serif", "'Outfit', sans-serif"], '22px', '0 9px 24px rgba(65,88,48,.08)',
    { about:'A Day Shared with Family', timeline:'From Welcome to Blessings', coverage:'The Ceremony in Every Detail', deliverables:'A Living Family Archive', gifts:'Thoughtful Family Prints', investment:'Your Celebration Collection', faq:'Planning Together', testimonials:'Words from the Families', closing:'A Beautiful Beginning' }, 1),
  makeTemplate('hindu-royal-pavilion', 'Hindu Wedding — Royal Pavilion', 'Ruby, antique gold and palace-inspired framing', 'Hindu', 'royal-pavilion',
    ['#F8F0E8','#FFF9F2','#8F2436','#C69A48','#5A4541','#341A22','#968075','#E7D3C7','#BE9848','#F0E1D5'], ["'Prata', Georgia, serif", "'Montserrat', sans-serif"], '0px', '0 12px 30px rgba(94,32,43,.12)',
    { about:'A Royal Welcome', timeline:'The Celebration Procession', coverage:'The Ceremony Portraits', deliverables:'Treasured Album Chapters', gifts:'Keepsakes for the Family', investment:'The Wedding Commission', faq:'Before the Celebration', testimonials:'Family Memories', closing:'With Every Blessing' }, 2),
  makeTemplate('hindu-saffron-sky', 'Hindu Wedding — Saffron Sky', 'A bright, modern ceremony with saffron accents', 'Hindu', 'saffron-sky',
    ['#FCF4EB','#FFFFFF','#C56A2D','#E3A33E','#5D5147','#372A20','#A08F7E','#EDE0D2','#DEA553','#F7EBDD'], ["'DM Serif Display', Georgia, serif", "'Plus Jakarta Sans', sans-serif"], '8px', '0 8px 24px rgba(177,95,38,.08)',
    { about:'A Modern Family Celebration', timeline:'The Day, Beautifully Timed', coverage:'The Full Ceremony Team', deliverables:'Every Moment, Preserved', gifts:'Small Tokens of Thanks', investment:'The Photography Collection', faq:'What to Expect', testimonials:'Celebrations Remembered', closing:'With Love from Our Studio' }, 3),
  makeTemplate('hindu-vermillion-modern', 'Hindu Wedding — Vermilion Modern', 'Clean ivory layouts with confident red accents', 'Hindu', 'vermillion-modern',
    ['#F8F4EF','#FFFEFC','#A93535','#C98C68','#584B48','#321F1F','#968782','#E9DEDA','#C68D72','#F3E7E3'], ["'Bodoni Moda', Georgia, serif", "'Inter', sans-serif"], '0px', 'none',
    { about:'A Story Made Together', timeline:'The Wedding Schedule', coverage:'Moments Across the Ceremony', deliverables:'The Essential Story', gifts:'Prints for Your Home', investment:'Wedding Photography', faq:'The Practical Details', testimonials:'Notes from the Celebration', closing:'A Lifetime of Stories' }, 4),

  // Muslim wedding collection: English-only copy, refined geometry and crescent-inspired motifs.
  makeTemplate('muslim-ivory-crescent', 'Muslim Wedding — Ivory Crescent', 'Ivory paper, midnight blue and delicate geometry', 'Muslim', 'ivory-crescent',
    ['#F7F5EF','#FFFEFA','#27445D','#B69B64','#53606A','#1A2D3C','#8A969B','#E0E3DF','#B5A16E','#EAECE5'], ["'Prata', Georgia, serif", "'Lora', Georgia, serif"], '6px', '0 9px 26px rgba(32,60,79,.08)',
    { about:'A Promise Shared with Family', timeline:'The Marriage Celebration', coverage:'Every Important Moment', deliverables:'A Story to Keep', gifts:'Family Portraits', investment:'The Wedding Collection', faq:'A Few Helpful Details', testimonials:'Words of Blessing', closing:'With Warm Wishes' }, 0),
  makeTemplate('muslim-emerald-arch', 'Muslim Wedding — Emerald Arch', 'Emerald, parchment and arch-inspired framing', 'Muslim', 'emerald-arch',
    ['#F3F4EE','#FCFCF8','#20584B','#B89A5B','#4F605A','#17372F','#87948B','#DDE4DC','#B89C66','#E5ECE4'], ["'Cinzel', Georgia, serif", "'Montserrat', sans-serif"], '2px', '0 12px 30px rgba(29,78,65,.1)',
    { about:'A Promise for a Lifetime', timeline:'The Celebration in Order', coverage:'The Family and Ceremony', deliverables:'Keepsakes with Meaning', gifts:'A Gift for the Families', investment:'Your Photography Collection', faq:'Planning Notes', testimonials:'Family Reflections', closing:'With Blessings and Joy' }, 1),
  makeTemplate('muslim-garden-gathering', 'Muslim Wedding — Garden Gathering', 'Soft sage and rose for an intimate gathering', 'Muslim', 'garden-gathering',
    ['#F3F5F0','#FFFFFF','#687A5B','#C59682','#596256','#303D31','#939B8B','#E0E5DE','#C3A18D','#EBEFE9'], ["'Cormorant Garamond', Georgia, serif", "'Jost', sans-serif"], '18px', '0 10px 28px rgba(65,82,59,.08)',
    { about:'Together, Surrounded by Family', timeline:'A Gentle Celebration Flow', coverage:'The Gathering and Ceremony', deliverables:'A Complete Keepsake Story', gifts:'Thoughtful Prints', investment:'The Photography Plan', faq:'Before the Gathering', testimonials:'Family Words', closing:'With Gratitude' }, 2),
  makeTemplate('muslim-moonlit-reception', 'Muslim Wedding — Moonlit Reception', 'Ink blue, silver and an atmospheric evening glow', 'Muslim', 'moonlit',
    ['#172536','#202F3E','#A9BFD0','#D8C49B','#BFC9D0','#F4F5F4','#8294A0','#334556','#B5C7D4','#283A49'], ["'Playfair Display', Georgia, serif", "'Inter', sans-serif"], '4px', '0 16px 42px rgba(9,22,36,.28)',
    { about:'A Night to Remember', timeline:'The Evening Unfolds', coverage:'The Celebration Team', deliverables:'The Complete Story', gifts:'A Private Album Preview', investment:'The Collection and Terms', faq:'The Evening Details', testimonials:'Memories in Their Words', closing:'Until the Last Light' }, 3),
  makeTemplate('muslim-modern-contract', 'Muslim Wedding — Modern Contract', 'A clear, contemporary document with warm accents', 'Muslim', 'modern-contract',
    ['#F6F3EF','#FFFFFF','#745B49','#B59373','#59534D','#302922','#90867C','#E3DCD4','#B99B7D','#EEE6DD'], ["'Space Grotesk', sans-serif", "'Inter', sans-serif"], '0px', '0 4px 16px rgba(62,47,34,.04)',
    { about:'The Story Behind the Day', timeline:'The Event Schedule', coverage:'Your Photography Team', deliverables:'What Is Included', gifts:'A Small Thank You', investment:'The Package and Terms', faq:'Clear Answers', testimonials:'Client Notes', closing:'Thank You for Your Trust' }, 4),

  // Christian wedding collection: chapel, garden and stained-glass art direction.
  makeTemplate('christian-chapel-vows', 'Christian Wedding — Chapel Vows', 'Ivory, navy and a chapel-inspired composition', 'Christian', 'chapel-vows',
    ['#F5F3EE','#FFFFFF','#29465C','#B79C71','#535C61','#1B2E3B','#89939A','#DEE1DD','#BCA67B','#EBECE7'], ["'Cormorant Garamond', Georgia, serif", "'Montserrat', sans-serif"], '4px', '0 10px 28px rgba(28,51,66,.08)',
    { about:'A Promise Made Together', timeline:'The Ceremony and Reception', coverage:'The Day from Every Angle', deliverables:'The Vow and Celebration Story', gifts:'A Keepsake for the Family', investment:'Your Wedding Collection', faq:'Helpful Ceremony Details', testimonials:'Words from Our Couples', closing:'With Joy and Gratitude' }, 0),
  makeTemplate('christian-garden-blessing', 'Christian Wedding — Garden Blessing', 'Soft florals, open air and gentle green', 'Christian', 'garden-blessing',
    ['#F4F5EF','#FFFFFC','#607A63','#B39A78','#586258','#2A3D2E','#939B8E','#E0E5DC','#BCA987','#E9EDE5'], ["'Lora', Georgia, serif", "'Jost', sans-serif"], '20px', '0 10px 28px rgba(66,91,66,.08)',
    { about:'A Day Surrounded by Love', timeline:'The Ceremony Day', coverage:'The Vows and Gathering', deliverables:'Memories to Treasure', gifts:'A Little Extra', investment:'Your Collection', faq:'Before the Celebration', testimonials:'Notes from Our Guests', closing:'A Beautiful Beginning' }, 1),
  makeTemplate('christian-stained-glass', 'Christian Wedding — Stained Glass', 'Jewel tones and light-inspired color panels', 'Christian', 'stained-glass',
    ['#F4F2EB','#FFFDF6','#56558B','#B77865','#56545E','#282642','#918B95','#E3DFE3','#B39A9A','#ECE8EF'], ["'Prata', Georgia, serif", "'Outfit', sans-serif"], '0px', '0 10px 26px rgba(71,59,91,.09)',
    { about:'A Story Filled with Light', timeline:'The Service and Celebration', coverage:'The Ceremony Team', deliverables:'The Complete Keepsake', gifts:'Prints to Share', investment:'The Photography Collection', faq:'A Few Details', testimonials:'Words of Love', closing:'With Every Good Wish' }, 2),
  makeTemplate('christian-coastal-ceremony', 'Christian Wedding — Coastal Ceremony', 'Sea glass, pale blue and a breezy ceremony layout', 'Christian', 'coastal-ceremony',
    ['#EFF5F5','#FFFFFF','#356575','#93B7B6','#4D6165','#213F48','#8A9FA0','#D9E7E6','#A8C5C4','#E6F0EF'], ["'Bodoni Moda', Georgia, serif", "'Outfit', sans-serif"], '14px', '0 9px 24px rgba(41,91,103,.08)',
    { about:'A Promise by the Water', timeline:'The Service and Celebration', coverage:'The Ceremony and Guests', deliverables:'The Wedding Story', gifts:'A Thoughtful Print Set', investment:'Your Collection', faq:'Before the Service', testimonials:'Messages from Our Couples', closing:'See You at the Shore' }, 3),
  makeTemplate('christian-modern-chapel', 'Christian Wedding — Modern Chapel', 'Modern vows with white space and refined structure', 'Christian', 'modern-chapel',
    ['#F7F7F5','#FFFFFF','#35414A','#8997A0','#525A60','#20282E','#92999D','#E1E3E2','#A7B1B5','#ECEEEC'], ["'Space Grotesk', sans-serif", "'Inter', sans-serif"], '0px', 'none',
    { about:'A Story Built on Promises', timeline:'The Order of the Day', coverage:'The Ceremony and Reception Team', deliverables:'The Final Collection', gifts:'Family Prints', investment:'The Photography Agreement', faq:'Planning Details', testimonials:'Client Reflections', closing:'Thank You' }, 4)
];

// =============================================================================
// 2. MASTER APPLICATION STATE
// =============================================================================

const AppState = {
  currentTemplateId: 'shutterdash-signature',
  isInlineEdit: false,
  zoom: 1.0,
  activeImageTarget: null,
  addingTextField: false,
  arrangingElements: false,
  draggingElement: null,
  selectedElementKey: null,
  activeTextFieldId: null,
  undoHistory: [],
  undoWasUsed: false,
  data: {
    brand: {
      name: "SHUTTERDASH STORIES",
      tagline: "CAPTURING LOVE BEYOND MOMENTS",
      quote: "“Every wedding is a story. We preserve yours beautifully, frame by frame.”",
      phone: "+91 96335 74917",
      whatsapp: "+91 96335 74917",
      instagram: "@shutterdash.stories"
    },
    about: {
      title: "A Story Worth\nRemembering\nForever",
      p1: "At ShutterDash Stories, we believe weddings are not simply events—they are timeless stories filled with emotions, traditions, laughter, and unforgettable memories.",
      p2: "Our goal is to capture every meaningful moment with elegance and authenticity, creating memories that will be treasured for generations."
    },
    timeline: {
      title: "Photography & Videography",
      subtitle: "COVERAGE TIMELINE",
      events: [
        {
          title: "Save The Date",
          details: ["2 Costume Shoot", "1 Photographer", "1 Videographer"]
        },
        {
          title: "Bachelor's Party",
          details: ["1 Photographer", "1 Videographer"]
        }
      ]
    },
    weddingCoverage: {
      title: "Wedding Coverage",
      subtitle: "DETAILED EVENT BREAKDOWN",
      events: [
        { title: "Bride Side", icon: "bride", crew: ["1 Photographer", "1 Videographer"] },
        { title: "Groom Side", icon: "groom", crew: ["1 Photographer", "1 Videographer"] },
        { title: "Reception", icon: "reception", crew: ["2 Photographers", "2 Videographers"] }
      ]
    },
    deliverables: {
      title: "Deliverables",
      subtitle: "WHAT YOU WILL RECEIVE",
      items: [
        { title: "2 Premium Wedding Albums", subtitle: "50 Leaf (100 Sides) | for extra leaf per leaf ₹500 incurred" },
        { title: "Professionally Color Graded Photos", subtitle: "" },
        { title: "Save The Date Edited Photos", subtitle: "(2 Costumes)" },
        { title: "Bachelor's Party Edited Photos", subtitle: "" },
        { title: "Wedding Highlights & Reels", subtitle: "" },
        { title: "Bachelor's Party Highlight", subtitle: "" },
        { title: "Full Wedding Film", subtitle: "" },
        { title: "Reception Highlights & Reel", subtitle: "" },
        { title: "Reception Full Function Video", subtitle: "" },
        { title: "Save The Date Cinematic Video", subtitle: "" }
      ]
    },
    gifts: {
      title: "Complimentary Gifts",
      subtitle: "SPECIALLY CURATED FOR YOU",
      items: [
        { title: "Save The Date Shoot", description: "One Costume Exclusive Shoot" },
        { title: "Couple Photo Frames", description: "2 Premium Framed Portraits" },
        { title: "Family Photo Frames", description: "2 Elegant Framed Portraits" },
        { title: "Wall Calendars", description: "2 Personalized Yearly Calendars" },
        { title: "Mini Albums", description: "2 Pocket Albums (Same Design as Wedding Album)" }
      ]
    },
    investment: {
      title: "Investment",
      amount: "1,90,000",
      currency: "₹",
      packageLabel: "COMPLETE PHOTOGRAPHY & VIDEOGRAPHY PACKAGE",
      termsTitle: "Payment Terms",
      milestones: [
        { stage: "Advance Booking Confirmation", percentage: "10%" },
        { stage: "Payment During Wedding", percentage: "80%" },
        { stage: "Before Album Printing", percentage: "10%" }
      ],
      disclaimer: "* Travel and accommodation outside local limits will be borne by the client if applicable."
    },
    closing: {
      title: "Thank You",
      message: "Thank you for considering ShutterDash Stories to capture one of the most precious chapters of your life.\n\nWe look forward to creating timeless memories that will be cherished forever."
    },
    // Optional extended sections
    extended: {
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "HELPFUL DETAILS",
        items: [
          { q: "How long until we receive our final album & videos?", a: "Teasers and highlight reels are delivered within 10 days. The complete edited wedding film and hand-bound albums take 4-6 weeks." },
          { q: "Can we customize the hours and crew?", a: "Absolutely! Every package is fully customizable to your wedding events schedule." }
        ]
      },
      testimonials: {
        title: "Client Love",
        subtitle: "WORDS FROM OUR COUPLES",
        items: [
          { quote: "“ShutterDash captured every single intimate smile and dance move. Watching our film brings tears every time!”", author: "Aaditya & Rhea — Kochi" },
          { quote: "“Pure elegance, unobtrusive presence, and breathtaking frames. The best decision of our wedding!”", author: "Dev & Ananya — Bengaluru" }
        ]
      }
    },
    // Active sections list
    activeSections: ['cover', 'about', 'timeline', 'coverage', 'deliverables', 'gifts', 'investment', 'closing']
  }
};

const PROJECT_STORAGE_KEY = 'quotecraft-project-v1';
function persistProject() {
  try {
    localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify({
      templateId: AppState.currentTemplateId, data: AppState.data,
      themes: Object.fromEntries(TEMPLATES.map(t => [t.id, t.theme])),
      images: Object.fromEntries(TEMPLATES.map(t => [t.id, t.images]))
    }));
  } catch (error) { console.warn('This browser could not save the latest changes. Remove large uploaded photos and try again.', error); }
}
function restoreProject() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROJECT_STORAGE_KEY) || 'null');
    if (!saved) return;
    if (saved.data) AppState.data = saved.data;
    if (TEMPLATES.some(t => t.id === saved.templateId)) AppState.currentTemplateId = saved.templateId;
    TEMPLATES.forEach(t => {
      if (saved.themes?.[t.id]) Object.assign(t.theme, saved.themes[t.id]);
      if (saved.images?.[t.id]) Object.assign(t.images, saved.images[t.id]);
    });
  } catch (error) { try { localStorage.removeItem(PROJECT_STORAGE_KEY); } catch (_) {} }
}

function createUndoSnapshot() {
  const clone = value => JSON.parse(JSON.stringify(value));
  return {
    templateId: AppState.currentTemplateId,
    data: clone(AppState.data),
    themes: Object.fromEntries(TEMPLATES.map(t => [t.id, clone(t.theme)])),
    images: Object.fromEntries(TEMPLATES.map(t => [t.id, clone(t.images)]))
  };
}

function recordUndo(label, group = '') {
  const now = Date.now();
  const last = AppState.undoHistory.at(-1);
  if (group && !AppState.undoWasUsed && last?.group === group && now - last.recordedAt < 1600) {
    last.recordedAt = now;
    return;
  }
  AppState.undoHistory.push({ ...createUndoSnapshot(), label, group, recordedAt:now });
  if (AppState.undoHistory.length > 12) AppState.undoHistory.shift();
  AppState.undoWasUsed = false;
  updateUndoButton();
}

function updateUndoButton() {
  const button = document.getElementById('btn-undo');
  if (!button) return;
  const last = AppState.undoHistory[AppState.undoHistory.length - 1];
  button.disabled = !last;
  button.title = last ? `Undo ${last.label} (Ctrl/Cmd+Z)` : 'Nothing to undo yet';
  button.setAttribute('aria-label', last ? `Undo ${last.label}` : 'Nothing to undo');
}

function syncDetailInputsFromState() {
  const values = {
    'detail-client':AppState.data.brand.client,
    'detail-event-date':AppState.data.brand.eventDate,
    'detail-email':AppState.data.brand.email,
    'detail-brand-name':AppState.data.brand.name,
    'detail-tagline':AppState.data.brand.tagline,
    'detail-phone':AppState.data.brand.phone,
    'detail-whatsapp':AppState.data.brand.whatsapp,
    'detail-insta':AppState.data.brand.instagram,
    'detail-amount':AppState.data.investment.amount,
    'detail-package-label':AppState.data.investment.packageLabel
  };
  Object.entries(values).forEach(([id,value]) => { const input=document.getElementById(id); if(input) input.value=value ?? ''; });
  const textareas = document.querySelectorAll('#tab-pane-details textarea');
  if (textareas[0]) textareas[0].value = AppState.data.about.p1 || '';
  if (textareas[1]) textareas[1].value = AppState.data.closing.message || '';
}

function undoLastChange() {
  const snapshot = AppState.undoHistory.pop();
  if (!snapshot) return;
  AppState.undoWasUsed = true;
  AppState.currentTemplateId = snapshot.templateId;
  AppState.data = snapshot.data;
  TEMPLATES.forEach(template => {
    if (snapshot.themes?.[template.id]) Object.assign(template.theme, snapshot.themes[template.id]);
    if (snapshot.images?.[template.id]) Object.assign(template.images, snapshot.images[template.id]);
  });
  AppState.data.positionedTextFields ||= [];
  AppState.data.elementPositions ||= {};
  AppState.data.hiddenElements ||= {};
  if (!AppState.data.positionedTextFields.some(field => field.id === AppState.activeTextFieldId)) AppState.activeTextFieldId = null;
  AppState.selectedElementKey = null;
  syncDetailInputsFromState();
  renderTemplateStrip();
  applyTemplate(AppState.currentTemplateId);
  renderSectionManagerList();
  updateUndoButton();
}

// =============================================================================
// 3. CORE INITIALIZATION & RENDERING
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  restoreProject();
  AppState.data.positionedTextFields ||= [];
  AppState.data.elementPositions ||= {};
  if (window.matchMedia('(max-width: 1220px)').matches) {
    document.getElementById('app-sidebar').classList.add('collapsed');
    document.querySelector('.brand-wrapper > button[onclick="toggleSidebar()"]')?.setAttribute('aria-expanded', 'false');
  }
  AppState.data.hiddenElements ||= {};
  updateSidebarToggle();
  syncDetailInputsFromState();
  renderTemplateStrip();
  applyTemplate(AppState.currentTemplateId);
  setupEventListeners();
  renderSectionManagerList();
  updateUndoButton();
});

let activeTemplateCategory = 'All';

const TEMPLATE_FILTERS = [
  { id: 'All', label: () => `All ${TEMPLATES.length}` },
  { id: 'Editorial', label: count => `Editorial ${count}` },
  { id: 'Hindu', label: count => `Hindu ${count}` },
  { id: 'Muslim', label: count => `Muslim ${count}` },
  { id: 'Christian', label: count => `Christian ${count}` },
  { id: 'Signature', label: count => `Signature ${count}` }
];

// Render the filtered 26-design library and its category controls.
function renderTemplateStrip() {
  const container = document.getElementById('template-chips');
  if (!container) return;
  const categoryTabs = document.getElementById('template-category-tabs');
  const visibleTemplates = activeTemplateCategory === 'All'
    ? TEMPLATES
    : TEMPLATES.filter(template => template.category === activeTemplateCategory);

  if (categoryTabs) {
    categoryTabs.innerHTML = TEMPLATE_FILTERS.map(filter => {
      const count = filter.id === 'All' ? TEMPLATES.length : TEMPLATES.filter(template => template.category === filter.id).length;
      const label = typeof filter.label === 'function' ? filter.label(count) : filter.label;
      return `<button type="button" class="template-category-tab ${filter.id === activeTemplateCategory ? 'active' : ''}" aria-pressed="${filter.id === activeTemplateCategory}" onclick="filterTemplateCategory('${filter.id}')">${label}</button>`;
    }).join('');
  }

  container.innerHTML = visibleTemplates.map(template => `
    <button class="tmpl-chip ${template.id === AppState.currentTemplateId ? 'active' : ''}"
            title="${template.subtitle}" aria-label="${template.name}, ${template.category} design"
            onclick="switchTemplate('${template.id}')">
      <span class="tmpl-preview" style="--template-swatch:${template.dotColor}"><img src="${template.images.cover}" alt="" loading="lazy"></span>
      <span class="tmpl-chip-copy"><strong>${template.name}</strong><small>${template.category} design</small></span>
    </button>
  `).join('');
  const countLabel = document.getElementById('template-results-count');
  if (countLabel) countLabel.textContent = `${visibleTemplates.length} ${visibleTemplates.length === 1 ? 'design' : 'designs'}`;
}

function filterTemplateCategory(category) {
  if (!TEMPLATE_FILTERS.some(filter => filter.id === category)) return;
  activeTemplateCategory = category;
  renderTemplateStrip();
}

// Switch to a new template
function switchTemplate(templateId) {
  const tmpl = TEMPLATES.find(t => t.id === templateId);
  if (!tmpl || templateId === AppState.currentTemplateId) return;

  recordUndo(`Change design to ${tmpl.name}`);
  AppState.currentTemplateId = templateId;
  applyTemplate(templateId);
  renderTemplateStrip();
  persistProject();
}

// Apply CSS variables and re-render document
function applyTemplate(templateId) {
  const tmpl = TEMPLATES.find(t => t.id === templateId);
  if (!tmpl) return;

  const root = document.documentElement;
  root.dataset.template = templateId;
  root.dataset.layout = tmpl.layout;
  const theme = tmpl.theme;

  root.style.setProperty('--tmpl-bg', theme.bg);
  root.style.setProperty('--tmpl-card-bg', theme.cardBg);
  root.style.setProperty('--tmpl-primary', theme.primary);
  root.style.setProperty('--tmpl-accent', theme.accent);
  root.style.setProperty('--tmpl-text', theme.text);
  root.style.setProperty('--tmpl-heading', theme.heading);
  root.style.setProperty('--tmpl-muted', theme.muted);
  root.style.setProperty('--tmpl-border', theme.border);
  root.style.setProperty('--tmpl-border-accent', theme.borderAccent);
  root.style.setProperty('--tmpl-badge-bg', theme.badgeBg);
  root.style.setProperty('--tmpl-font-heading', theme.fontHeading);
  root.style.setProperty('--tmpl-font-body', theme.fontBody);
  root.style.setProperty('--tmpl-card-radius', theme.cardRadius);
  root.style.setProperty('--tmpl-card-shadow', theme.cardShadow);

  // Sync color pickers in sidebar
  syncColorPickers(theme);
  syncFontPickers(theme);

  // Re-render pages
  renderPages();
}

function syncColorPickers(theme) {
  const p = document.getElementById('picker-primary');
  const a = document.getElementById('picker-accent');
  const b = document.getElementById('picker-bg');
  const c = document.getElementById('picker-card');
  const t = document.getElementById('picker-text');

  if (p) p.value = rgbOrHex(theme.primary);
  if (a) a.value = rgbOrHex(theme.accent);
  if (b) b.value = rgbOrHex(theme.bg);
  if (c) c.value = rgbOrHex(theme.cardBg);
  if (t) t.value = rgbOrHex(theme.text);
}

function syncFontPickers(theme) {
  const heading = document.getElementById('font-heading');
  const body = document.getElementById('font-body');
  if (heading) heading.value = theme.fontHeading;
  if (body) body.value = theme.fontBody;
}

function rgbOrHex(val) {
  if (val.startsWith('#')) return val;
  return '#AD8A56'; // fallback
}

function sectionHeading(tmpl, key, fallback) {
  return tmpl?.copy?.[key] || fallback;
}

// =============================================================================
// 4. DYNAMIC DOCUMENT SECTION RENDERER
// =============================================================================

function renderPages() {
  const container = document.getElementById('document-canvas');
  if (!container) return;

  const tmpl = TEMPLATES.find(t => t.id === AppState.currentTemplateId);
  const data = AppState.data;
  let html = '';

  AppState.data.activeSections.forEach((sectionKey, index) => {
    switch (sectionKey) {
      case 'cover':
        html += renderCoverPage(data, tmpl, index + 1);
        break;
      case 'about':
        html += renderAboutPage(data, tmpl, index + 1);
        break;
      case 'timeline':
        html += renderTimelinePage(data, tmpl, index + 1);
        break;
      case 'coverage':
        html += renderCoveragePage(data, tmpl, index + 1);
        break;
      case 'deliverables':
        html += renderDeliverablesPage(data, tmpl, index + 1);
        break;
      case 'gifts':
        html += renderGiftsPage(data, tmpl, index + 1);
        break;
      case 'investment':
        html += renderInvestmentPage(data, tmpl, index + 1);
        break;
      case 'faq':
        html += renderFAQPage(data, tmpl, index + 1);
        break;
      case 'testimonials':
        html += renderTestimonialsPage(data, tmpl, index + 1);
        break;
      default:
        if (String(sectionKey).startsWith('custom-')) html += renderCustomPage(data.customSections?.[sectionKey], index + 1);
        break;
      case 'closing':
        html += renderClosingPage(data, tmpl, index + 1);
        break;
    }
  });

  container.innerHTML = html;

  container.querySelectorAll('.page').forEach((page, index) => {
    page.dataset.pageKey = AppState.data.activeSections[index];
  });
  renderPositionedTextFields();
  applyDesignElementPositions();

  // Apply inline editable state
  setInlineEditable(AppState.isInlineEdit);
  persistProject();
}

function renderPositionedTextFields() {
  const pages = document.querySelectorAll('#document-canvas .page');
  pages.forEach(page => {
    AppState.data.positionedTextFields.filter(field => field.pageKey === page.dataset.pageKey).forEach(field => {
      const box = document.createElement('div');
      box.className = `free-text-field${field.id === AppState.activeTextFieldId ? ' is-selected' : ''}`;
      box.dataset.textFieldId = field.id;
      box.style.left = `${field.x}%`; box.style.top = `${field.y}%`;
      box.style.width = `${field.width || 32}%`;
      box.style.fontSize = `${field.fontSize || 20}px`;
      const activeTheme = TEMPLATES.find(t => t.id === AppState.currentTemplateId)?.theme;
      box.style.fontFamily = field.fontStyle === 'heading' ? activeTheme?.fontHeading : activeTheme?.fontBody;
      box.style.color = field.color || getComputedStyle(document.documentElement).getPropertyValue('--tmpl-heading').trim();
      box.style.textAlign = field.align || 'left';
      box.style.fontWeight = field.bold ? '700' : '400';

      const text = document.createElement('div');
      text.className = 'free-text-content'; text.contentEditable = 'true'; text.setAttribute('role', 'textbox');
      text.setAttribute('aria-label', 'Custom proposal text'); text.textContent = field.text || '';
      box.append(text); page.appendChild(box);
    });
  });
}

function designElementKey(element, page) {
  const path = [];
  let node = element;
  while (node && node !== page) { path.unshift(Array.prototype.indexOf.call(node.parentElement.children, node)); node = node.parentElement; }
  return `${AppState.currentTemplateId}:${page.dataset.pageKey}:${path.join('.')}`;
}

function applyDesignElementPositions() {
  AppState.data.hiddenElements ||= {};
  document.querySelectorAll('#document-canvas .page').forEach(page => {
    page.querySelectorAll('*').forEach(element => {
      const key = designElementKey(element, page);
      element.dataset.designKey = key;
      element.classList.add('design-selectable');
      element.classList.toggle('design-selected', AppState.arrangingElements && key === AppState.selectedElementKey);
      element.hidden = AppState.data.hiddenElements[key] === true;
      if (element.hidden) element.setAttribute('aria-hidden', 'true');
      else element.removeAttribute('aria-hidden');
      const position = AppState.data.elementPositions?.[key];
      element.style.position = '';
      element.style.zIndex = '';
      if (!position) { element.style.translate = ''; element.style.scale = ''; return; }
      element.style.translate = `${(position.x || 0) * page.clientWidth / 100}px ${(position.y || 0) * page.clientHeight / 100}px`;
      element.style.scale = position.scale || 1;
      if (position.layer) {
        if (getComputedStyle(element).position === 'static') element.style.position = 'relative';
        element.style.zIndex = String(position.layer);
      }
    });
  });
  updateSelectedElementTools();
}

function updateSelectedElementTools() {
  const tools = document.getElementById('selected-element-tools');
  const key = AppState.selectedElementKey;
  const node = key ? document.querySelector(`[data-design-key="${CSS.escape(key)}"]`) : null;
  tools.hidden = !AppState.arrangingElements;
  tools.querySelectorAll('button').forEach(button => { button.disabled = !node; });
  document.getElementById('selected-element-label').textContent = node ? `Selected: ${(node.innerText || node.alt || node.tagName).trim().slice(0, 40)}` : 'Tap an item on the page, then drag it.';
  document.getElementById('selected-text-tools').hidden = !AppState.activeTextFieldId;
  const textField = AppState.data.positionedTextFields.find(field => field.id === AppState.activeTextFieldId);
  if (textField) document.getElementById('selected-text-color').value = /^#[0-9a-f]{6}$/i.test(textField.color) ? textField.color : '#333333';
}

function toggleArrangeElements(force) {
  finishDesignDrag();
  AppState.arrangingElements = typeof force === 'boolean' ? force : !AppState.arrangingElements;
  AppState.addingTextField = false;
  AppState.draggingElement = null;
  toggleTextPlacement(false);
  document.body.classList.toggle('arranging-elements', AppState.arrangingElements);
  document.getElementById('btn-arrange-elements').classList.toggle('btn-active', AppState.arrangingElements);
  document.getElementById('btn-arrange-elements').setAttribute('aria-pressed', String(AppState.arrangingElements));
  applyDesignElementPositions();
}

function finishDesignDrag() {
  const drag = AppState.draggingElement;
  if (drag?.moved) persistProject();
  drag?.node?.classList.remove('is-being-dragged');
  document.body.classList.remove('moving-design-element');
  const indicator = document.getElementById('dragging-indicator');
  if (indicator) indicator.hidden = true;
  AppState.draggingElement = null;
  updateSelectedElementTools();
}

function adjustSelectedElement(amount) {
  const key = AppState.selectedElementKey;
  if (!key) return;
  recordUndo(amount < 0 ? 'Shrink element' : 'Enlarge element');
  const item = AppState.data.elementPositions[key] ||= { x:0, y:0, scale:1, layer:0 };
  item.scale = Math.max(.25, Math.min(3, (item.scale || 1) + amount * .1));
  applyDesignElementPositions(); persistProject();
}
function adjustSelectedLayer(amount) {
  const key = AppState.selectedElementKey;
  if (!key) return;
  recordUndo(amount < 0 ? 'Move element backward' : 'Move element forward');
  const item = AppState.data.elementPositions[key] ||= { x:0, y:0, scale:1, layer:0 };
  item.layer = Math.max(-9, Math.min(30, (item.layer || 0) + amount));
  applyDesignElementPositions(); persistProject();
}
function resetSelectedElement() {
  if (!AppState.selectedElementKey) return;
  recordUndo('Reset element position and size');
  delete AppState.data.elementPositions[AppState.selectedElementKey];
  AppState.selectedElementKey = null;
  applyDesignElementPositions(); persistProject();
}

function deleteSelectedElement() {
  const key = AppState.selectedElementKey;
  if (!key) return;
  const node = document.querySelector(`[data-design-key="${CSS.escape(key)}"]`);
  if (!node) return;
  const textField = node.closest('.free-text-field');
  recordUndo('Delete element');
  if (textField) {
    const id = textField.dataset.textFieldId;
    AppState.data.positionedTextFields = AppState.data.positionedTextFields.filter(field => field.id !== id);
    if (AppState.activeTextFieldId === id) AppState.activeTextFieldId = null;
  } else {
    AppState.data.hiddenElements ||= {};
    AppState.data.hiddenElements[key] = true;
  }
  delete AppState.data.elementPositions[key];
  AppState.selectedElementKey = null;
  renderPages();
}

function adjustSelectedText(property, value) {
  const field = AppState.data.positionedTextFields.find(item => item.id === AppState.activeTextFieldId);
  if (!field) return;
  recordUndo('Format custom text');
  if (property === 'fontSize') field.fontSize = Math.max(10, Math.min(60, (field.fontSize || 20) + value));
  if (property === 'width') field.width = Math.max(12, Math.min(96, (field.width || 32) + value));
  if (property === 'color') field.color = value;
  if (property === 'align') field.align = field.align === 'left' ? 'center' : field.align === 'center' ? 'right' : 'left';
  if (property === 'bold') field.bold = !field.bold;
  if (property === 'fontStyle') field.fontStyle = field.fontStyle === 'heading' ? 'body' : 'heading';
  renderPages();
}
function deleteSelectedText() {
  if (!AppState.activeTextFieldId) return;
  recordUndo('Delete custom text');
  AppState.data.positionedTextFields = AppState.data.positionedTextFields.filter(item => item.id !== AppState.activeTextFieldId);
  AppState.activeTextFieldId = null; renderPages();
}

function toggleTextPlacement(force) {
  AppState.addingTextField = typeof force === 'boolean' ? force : !AppState.addingTextField;
  if (AppState.addingTextField) toggleArrangeElements(false);
  const banner = document.getElementById('text-placement-banner');
  const button = document.getElementById('btn-add-text');
  banner.hidden = !AppState.addingTextField;
  button?.classList.toggle('btn-active', AppState.addingTextField);
  button?.setAttribute('aria-pressed', String(AppState.addingTextField));
  document.body.classList.toggle('placing-text', AppState.addingTextField);
}

function addPositionedTextField(page, x, y) {
  const field = { id: globalThis.crypto?.randomUUID?.() || `text-${Date.now()}`, pageKey: page.dataset.pageKey, x, y, width:32, fontSize:20, fontStyle:'body', color:getComputedStyle(document.documentElement).getPropertyValue('--tmpl-heading').trim(), align:'left', bold:false, text:'Type your text here' };
  recordUndo('Add text field');
  AppState.data.positionedTextFields ||= [];
  AppState.data.positionedTextFields.push(field);
  AppState.activeTextFieldId = field.id;
  toggleTextPlacement(false); renderPages();
  const content = document.querySelector(`[data-text-field-id="${field.id}"] .free-text-content`);
  content?.focus();
  if (content) document.getSelection()?.selectAllChildren(content);
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}
function renderCustomPage(section, pageNum) {
  if (!section) return '';
  const bullets = (section.bullets || []).filter(Boolean);
  const photo = section.image ? `<img class="custom-section-image" src="${escapeHtml(section.image)}" alt="${escapeHtml(section.title)}">` : '';
  return `<div class="page page-custom layout-${escapeHtml(section.layout || 'editorial')}" id="page-${pageNum}" data-section="custom"><div class="custom-section-wrap"><div class="section-header"><div class="custom-eyebrow">${escapeHtml(section.eyebrow || '')}</div><h2 class="section-title">${escapeHtml(section.title)}</h2><div class="section-subtitle">${escapeHtml(section.subtitle || '')}</div><div class="header-divider"></div></div><div class="custom-content-grid">${photo}<div class="custom-copy">${section.body ? `<div class="custom-body">${escapeHtml(section.body)}</div>` : ''}${bullets.length ? `<ul class="custom-bullets">${bullets.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul>` : ''}${section.note ? `<aside class="custom-note">${escapeHtml(section.note)}</aside>` : ''}</div></div></div></div>`;
}

// 1. Cover Page
function renderCoverPage(data, tmpl, pageNum) {
  const imgSrc = tmpl.images.cover;
  return `
    <div class="page page-cover" id="page-${pageNum}" data-section="cover">
      <div class="cover-image-container image-clickable" onclick="openImageModal('cover', '${imgSrc}')">
        <img id="img-cover" src="${imgSrc}" alt="Wedding Ceremony Hero">
      </div>
      <div class="cover-content">
        <div class="cover-brand" contenteditable="false" onblur="updateStateText('brand.name', this.innerText)">${data.brand.name}</div>
        ${data.brand.client ? `<div class="cover-client">PREPARED FOR ${escapeHtml(data.brand.client)}</div>` : ''}
        ${data.brand.eventDate ? `<div class="cover-client">${escapeHtml(data.brand.eventDate)}</div>` : ''}
        <div class="cover-tagline" contenteditable="false" onblur="updateStateText('brand.tagline', this.innerText)">${data.brand.tagline}</div>
        <div class="cover-divider"></div>
        <div class="cover-quote" contenteditable="false" onblur="updateStateText('brand.quote', this.innerText)">${data.brand.quote}</div>
      </div>
    </div>
  `;
}

// 2. About Page
function renderAboutPage(data, tmpl, pageNum) {
  const imgSrc = tmpl.images.about;
  return `
    <div class="page page-about" id="page-${pageNum}" data-section="about">
      <div class="about-left">
        <h1 class="about-title" contenteditable="false" onblur="updateStateText('about.title', this.innerText)">${sectionHeading(tmpl, 'about', data.about.title)}</h1>
        <div class="about-divider"></div>
        <p class="about-text" contenteditable="false" onblur="updateStateText('about.p1', this.innerText)">${data.about.p1}</p>
        <p class="about-text" contenteditable="false" onblur="updateStateText('about.p2', this.innerText)">${data.about.p2}</p>
      </div>
      <div class="about-right image-clickable" onclick="openImageModal('about', '${imgSrc}')">
        <div class="about-image-wrapper">
          <img id="img-about" src="${imgSrc}" alt="Editorial Portrait">
        </div>
      </div>
    </div>
  `;
}

// 3. Timeline Page
function renderTimelinePage(data, tmpl, pageNum) {
  const items = data.timeline.events.map((e, ei) => `
    <div class="timeline-item">
      <div class="timeline-dot"><div class="timeline-dot-inner"></div></div>
      <div class="timeline-card">
        <h3 class="timeline-card-title" data-state-path="timeline.events.${ei}.title" contenteditable="false">${e.title}</h3>
        <ul class="timeline-list">
          ${e.details.map((d, di) => `<li data-state-path="timeline.events.${ei}.details.${di}" contenteditable="false">${d}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  return `
    <div class="page page-timeline" id="page-${pageNum}" data-section="timeline">
      <div class="page-center">
        <div class="section-header">
          <h2 class="section-title" contenteditable="false">${sectionHeading(tmpl, 'timeline', data.timeline.title)}</h2>
          <div class="section-subtitle" contenteditable="false">${data.timeline.subtitle}</div>
          <div class="header-divider"></div>
        </div>
        <div class="timeline-container">
          <div class="timeline-line"></div>
          ${items}
        </div>
      </div>
    </div>
  `;
}

// 4. Coverage Breakdown Page
function renderCoveragePage(data, tmpl, pageNum) {
  const items = data.weddingCoverage.events.map((e, idx) => {
    const isFull = (idx === 2 && data.weddingCoverage.events.length === 3);
    const iconSvg = e.icon === 'bride' 
      ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2a4 4 0 0 0-4 4c0 2 2 3 4 5 2-2 4-3 4-5a4 4 0 0 0-4-4z"/><path d="M12 11c-4 0-7 3-7 7v4h14v-4c0-4-3-7-7-7z"/></svg>`
      : e.icon === 'groom'
      ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path d="M10 14l2 2 2-2"/></svg>`
      : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 22h8"/><path d="M12 15v7"/><path d="M5 3l7 8 7-8z"/></svg>`;

    return `
      <div class="breakdown-card ${isFull ? 'full-width' : ''}">
        <div class="breakdown-icon">${iconSvg}</div>
        <h3 class="breakdown-title" data-state-path="weddingCoverage.events.${idx}.title" contenteditable="false">${e.title}</h3>
        <div class="breakdown-crew">
          ${e.crew.map((c, ci) => `<p data-state-path="weddingCoverage.events.${idx}.crew.${ci}" contenteditable="false">${c}</p>`).join('')}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="page page-breakdown" id="page-${pageNum}" data-section="coverage">
      <div class="page-center">
        <div class="section-header">
          <h2 class="section-title" contenteditable="false">${sectionHeading(tmpl, 'coverage', data.weddingCoverage.title)}</h2>
          <div class="section-subtitle" contenteditable="false">${data.weddingCoverage.subtitle}</div>
          <div class="header-divider"></div>
        </div>
        <div class="breakdown-grid">
          ${items}
        </div>
      </div>
    </div>
  `;
}

// 5. Deliverables Page
function renderDeliverablesPage(data, tmpl, pageNum) {
  const items = data.deliverables.items.map((d, di) => `
    <div class="deliverable-card">
      <div class="deliverable-check">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="deliverable-content">
        <div class="deliverable-title" data-state-path="deliverables.items.${di}.title" contenteditable="false">${d.title}</div>
        ${d.subtitle ? `<div class="deliverable-sub" data-state-path="deliverables.items.${di}.subtitle" contenteditable="false">${d.subtitle}</div>` : ''}
      </div>
    </div>
  `).join('');

  return `
    <div class="page page-deliverables" id="page-${pageNum}" data-section="deliverables">
      <div class="page-center">
        <div class="section-header">
          <h2 class="section-title" contenteditable="false">${sectionHeading(tmpl, 'deliverables', data.deliverables.title)}</h2>
          <div class="section-subtitle" contenteditable="false">${data.deliverables.subtitle}</div>
          <div class="header-divider"></div>
        </div>
        <div class="deliverables-grid">
          ${items}
        </div>
      </div>
    </div>
  `;
}

// 6. Complimentary Gifts Page
function renderGiftsPage(data, tmpl, pageNum) {
  const items = data.gifts.items.map((g, idx) => {
    const isCentered = (idx === data.gifts.items.length - 1 && data.gifts.items.length % 2 === 1);
    return `
      <div class="gift-card ${isCentered ? 'centered-card' : ''}">
        <h3 class="gift-card-title" data-state-path="gifts.items.${idx}.title" contenteditable="false">${g.title}</h3>
        <p class="gift-card-desc" data-state-path="gifts.items.${idx}.description" contenteditable="false">${g.description}</p>
      </div>
    `;
  }).join('');

  return `
    <div class="page page-gifts" id="page-${pageNum}" data-section="gifts">
      <div class="page-center">
        <div class="section-header">
          <h2 class="section-title" contenteditable="false">${sectionHeading(tmpl, 'gifts', data.gifts.title)}</h2>
          <div class="section-subtitle" contenteditable="false">${data.gifts.subtitle}</div>
          <div class="header-divider"></div>
        </div>
        <div class="gift-hero-icon">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <polyline points="20 12 20 22 4 22 4 12"/>
            <rect x="2" y="7" width="20" height="5"/>
            <line x1="12" y1="22" x2="12" y2="7"/>
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
          </svg>
        </div>
        <div class="gifts-grid">
          ${items}
        </div>
      </div>
    </div>
  `;
}

// 7. Investment & Terms Page
function renderInvestmentPage(data, tmpl, pageNum) {
  const milestones = data.investment.milestones.map((m, mi) => `
    <div class="payment-item">
      <span class="payment-stage" data-state-path="investment.milestones.${mi}.stage" contenteditable="false">${m.stage}</span>
      <span class="payment-percent" data-state-path="investment.milestones.${mi}.percentage" contenteditable="false">${m.percentage}</span>
    </div>
  `).join('');

  return `
    <div class="page page-investment" id="page-${pageNum}" data-section="investment">
      <div class="page-center">
        <div class="section-header">
          <h2 class="section-title" contenteditable="false">${sectionHeading(tmpl, 'investment', data.investment.title)}</h2>
          <div class="header-divider"></div>
        </div>
        <div class="investment-hero">
          <div class="investment-amount">
            <span class="currency-symbol">${data.investment.currency}</span><span id="amount-text" contenteditable="false" onblur="updateStateText('investment.amount', this.innerText)">${data.investment.amount}</span>
          </div>
          <div class="investment-package-label" contenteditable="false">${data.investment.packageLabel}</div>
        </div>
        <div class="payment-box">
          <h3 class="payment-title" contenteditable="false">${data.investment.termsTitle}</h3>
          ${milestones}
          <div class="payment-note" contenteditable="false">${data.investment.disclaimer}</div>
        </div>
      </div>
    </div>
  `;
}

// 8. FAQ Page (Extended)
function renderFAQPage(data, tmpl, pageNum) {
  const items = data.extended.faq.items.map((f, fi) => `
    <div class="faq-card">
      <div class="faq-q" data-state-path="extended.faq.items.${fi}.q" contenteditable="false">${f.q}</div>
      <div class="faq-a" data-state-path="extended.faq.items.${fi}.a" contenteditable="false">${f.a}</div>
    </div>
  `).join('');

  return `
    <div class="page page-faq" id="page-${pageNum}" data-section="faq">
      <div class="page-center">
        <div class="section-header">
          <h2 class="section-title" contenteditable="false">${sectionHeading(tmpl, 'faq', data.extended.faq.title)}</h2>
          <div class="section-subtitle" contenteditable="false">${data.extended.faq.subtitle}</div>
          <div class="header-divider"></div>
        </div>
        <div class="faq-list">
          ${items}
        </div>
      </div>
    </div>
  `;
}

// 9. Testimonials Page (Extended)
function renderTestimonialsPage(data, tmpl, pageNum) {
  const items = data.extended.testimonials.items.map((t, ti) => `
    <div class="testimonial-card">
      <div class="testimonial-quote" data-state-path="extended.testimonials.items.${ti}.quote" contenteditable="false">${t.quote}</div>
      <div class="testimonial-author" data-state-path="extended.testimonials.items.${ti}.author" contenteditable="false">${t.author}</div>
    </div>
  `).join('');

  return `
    <div class="page page-testimonials" id="page-${pageNum}" data-section="testimonials">
      <div class="page-center">
        <div class="section-header">
          <h2 class="section-title" contenteditable="false">${sectionHeading(tmpl, 'testimonials', data.extended.testimonials.title)}</h2>
          <div class="section-subtitle" contenteditable="false">${data.extended.testimonials.subtitle}</div>
          <div class="header-divider"></div>
        </div>
        <div class="testimonials-grid">
          ${items}
        </div>
      </div>
    </div>
  `;
}

// 10. Closing / Contact Page
function renderClosingPage(data, tmpl, pageNum) {
  const imgSrc = tmpl.images.closing;
  return `
    <div class="page page-thankyou" id="page-${pageNum}" data-section="closing">
      <div class="thankyou-image-container image-clickable" onclick="openImageModal('closing', '${imgSrc}')">
        <img id="img-closing" src="${imgSrc}" alt="Couple Close-up Bouquet">
      </div>
      <div class="thankyou-content">
        <h2 class="thankyou-title" contenteditable="false" onblur="updateStateText('closing.title', this.innerText)">${sectionHeading(tmpl, 'closing', data.closing.title)}</h2>
        <div class="thankyou-divider"></div>
        <div class="thankyou-text" contenteditable="false" onblur="updateStateText('closing.message', this.innerText)">${data.closing.message}</div>
        <div class="thankyou-contact-row">
          <div class="contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span contenteditable="false" onblur="updateStateText('brand.phone', this.innerText)">${data.brand.phone}</span>
          </div>
          <div class="contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            <span contenteditable="false" onblur="updateStateText('brand.whatsapp', this.innerText)">${data.brand.whatsapp || 'WhatsApp'}</span>
          </div>
          <div class="contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            <span contenteditable="false" onblur="updateStateText('brand.instagram', this.innerText)">${data.brand.instagram}</span>
          </div>
          ${data.brand.email ? `<div class="contact-item"><span>${escapeHtml(data.brand.email)}</span></div>` : ''}
        </div>
      </div>
    </div>
  `;
}

// =============================================================================
// 5. INLINE EDITING & TWO-WAY STATE SYNCHRONIZATION
// =============================================================================

function toggleInlineEditing() {
  if (!AppState.isInlineEdit) toggleArrangeElements(false);
  AppState.isInlineEdit = !AppState.isInlineEdit;
  const btn = document.getElementById('btn-inline-edit');
  const label = document.getElementById('edit-btn-label');
  const body = document.body;

  if (AppState.isInlineEdit) {
    btn.classList.add('btn-active');
    label.textContent = 'Editing Mode: ON';
    body.classList.add('inline-editing');
  } else {
    btn.classList.remove('btn-active');
    label.textContent = 'Enable Click-To-Edit';
    body.classList.remove('inline-editing');
  }

  setInlineEditable(AppState.isInlineEdit);
}

function setInlineEditable(enabled) {
  const elements = document.querySelectorAll('#document-canvas [contenteditable]:not(.free-text-content)');
  elements.forEach(el => {
    el.setAttribute('contenteditable', enabled ? 'true' : 'false');
  });
}

function updateStateText(path, val) {
  const parts = path.split('.');
  let obj = AppState.data;
  for (let i = 0; i < parts.length - 1; i++) {
    obj = obj[parts[i]];
  }
  const key = parts[parts.length - 1];
  const next = String(val ?? '').trim();
  if (String(obj[key] ?? '') === next) return;
  recordUndo('Edit text', `field:${path}`);
  obj[key] = next;
  persistProject();
}

// =============================================================================
// 6. DYNAMIC SECTION MANAGEMENT (ADD, REMOVE, REORDER)
// =============================================================================

function renderSectionManagerList() {
  const container = document.getElementById('section-manager-list');
  if (!container) return;

  const names = {
    cover: '1. Cover Hero Page',
    about: '2. About Statement & Photo',
    timeline: '3. Coverage Timeline',
    coverage: '4. Event Breakdown',
    deliverables: '5. Deliverables Checklist',
    gifts: '6. Complimentary Gifts',
    investment: '7. Investment & Terms',
    faq: '8. FAQ Accordion',
    testimonials: '9. Client Testimonials',
    closing: '10. Thank You & Contact'
  };

  container.innerHTML = AppState.data.activeSections.map((s, idx) => `
    <div class="section-item-row">
      <span>${names[s] || escapeHtml(AppState.data.customSections?.[s]?.title || s)}</span>
      <div class="section-actions">
        ${String(s).startsWith('custom-') ? `<button class="icon-btn" title="Edit section" onclick="editCustomSection('${s}')">✎</button>` : ''}
        <button class="icon-btn" title="Move Up" onclick="moveSection(${idx}, -1)">▲</button>
        <button class="icon-btn" title="Move Down" onclick="moveSection(${idx}, 1)">▼</button>
        <button class="icon-btn delete" title="Remove Section" onclick="removeSection(${idx})">✕</button>
      </div>
    </div>
  `).join('');
}

function moveSection(idx, dir) {
  const arr = AppState.data.activeSections;
  const target = idx + dir;
  if (target < 0 || target >= arr.length) return;
  recordUndo('Reorder sections');
  const temp = arr[idx];
  arr[idx] = arr[target];
  arr[target] = temp;
  renderPages();
  renderSectionManagerList();
}

function removeSection(idx) {
  if (AppState.data.activeSections.length <= 1) {
    alert("You must keep at least one section in the quotation!");
    return;
  }
  recordUndo('Remove section');
  AppState.data.activeSections.splice(idx, 1);
  renderPages();
  renderSectionManagerList();
}

function openAddSectionModal() {
  document.getElementById('modal-add-section').classList.add('open');
}

function closeAddSectionModal() {
  document.getElementById('modal-add-section').classList.remove('open');
  document.getElementById('custom-section-form-wrap').hidden = true;
  AppState.editingCustomSection = '';
}

function addSection(sectionKey) {
  if (sectionKey === 'custom') {
    openCustomSectionForm();
    return;
  } else if (['timeline','coverage','deliverables','gifts','investment','faq','testimonials'].includes(sectionKey) && AppState.data.activeSections.includes(sectionKey)) {
    alert('That section is already in your proposal. Add a custom section for additional content.');
    return;
  }
  recordUndo('Add section');
  AppState.data.activeSections.push(sectionKey);
  closeAddSectionModal();
  renderPages();
  renderSectionManagerList();
  // Scroll to bottom
  const container = document.getElementById('canvas-container');
  if (container) container.scrollTop = container.scrollHeight;
}

function addSectionItem(kind) {
  const items = {
    timeline: { page:'timeline', collection:AppState.data.timeline.events, item:{ title:'New event', details:['Add a detail'] } },
    coverage: { page:'coverage', collection:AppState.data.weddingCoverage.events, item:{ title:'New coverage', icon:'reception', crew:['1 Photographer','1 Videographer'] } },
    deliverables: { page:'deliverables', collection:AppState.data.deliverables.items, item:{ title:'New deliverable', subtitle:'Add details' } },
    gifts: { page:'gifts', collection:AppState.data.gifts.items, item:{ title:'New gift', description:'Add details' } },
    milestone: { page:'investment', collection:AppState.data.investment.milestones, item:{ stage:'New payment step', percentage:'0%' } },
    faq: { page:'faq', collection:AppState.data.extended.faq.items, item:{ q:'New question', a:'Add your answer' } },
    testimonial: { page:'testimonials', collection:AppState.data.extended.testimonials.items, item:{ quote:'Add a client quote', author:'Client name' } }
  }[kind];
  if (!items) return;
  recordUndo(`Add ${kind}`);
  items.collection.push(items.item);
  if (!AppState.data.activeSections.includes(items.page)) AppState.data.activeSections.push(items.page);
  renderPages(); renderSectionManagerList();
  const container = document.getElementById('canvas-container');
  container.scrollTop = container.scrollHeight;
  if (window.matchMedia('(max-width: 1220px)').matches && !document.getElementById('app-sidebar').classList.contains('collapsed')) toggleSidebar();
}

function openCustomSectionForm(key = '') {
  AppState.editingCustomSection = key;
  const section = key ? AppState.data.customSections?.[key] || {} : {};
  document.getElementById('custom-section-title').value = section.title || '';
  document.getElementById('custom-section-eyebrow').value = section.eyebrow || '';
  document.getElementById('custom-section-subtitle').value = section.subtitle || '';
  document.getElementById('custom-section-body').value = section.body || '';
  document.getElementById('custom-section-bullets').value = (section.bullets || []).join('\n');
  document.getElementById('custom-section-note').value = section.note || '';
  document.getElementById('custom-section-image').value = section.image || '';
  document.getElementById('custom-section-layout').value = section.layout || 'editorial';
  document.getElementById('custom-section-form-wrap').hidden = false;
  document.getElementById('custom-section-save').textContent = key ? 'Save changes' : 'Add custom section';
  openAddSectionModal();
}

function saveCustomSection() {
  const title = document.getElementById('custom-section-title').value.trim();
  if (!title) { document.getElementById('custom-section-title').focus(); return; }
  recordUndo(AppState.editingCustomSection ? 'Edit custom section' : 'Add custom section');
  AppState.data.customSections ||= {};
  const key = AppState.editingCustomSection || `custom-${Date.now()}`;
  AppState.data.customSections[key] = {
    title, eyebrow: document.getElementById('custom-section-eyebrow').value.trim(),
    subtitle: document.getElementById('custom-section-subtitle').value.trim(),
    body: document.getElementById('custom-section-body').value.trim(),
    bullets: document.getElementById('custom-section-bullets').value.split('\n').map(x => x.trim()).filter(Boolean),
    note: document.getElementById('custom-section-note').value.trim(),
    image: document.getElementById('custom-section-image').value.trim(),
    layout: document.getElementById('custom-section-layout').value
  };
  if (!AppState.editingCustomSection) AppState.data.activeSections.push(key);
  AppState.editingCustomSection = '';
  document.getElementById('custom-section-form-wrap').hidden = true;
  closeAddSectionModal(); renderPages(); renderSectionManagerList();
}

function editCustomSection(key) { openCustomSectionForm(key); }

function handleCustomSectionImageUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const image = new Image();
    image.onload = () => {
      const scale = Math.min(1, 1500 / Math.max(image.width, image.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(image.width * scale); canvas.height = Math.round(image.height * scale);
      canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
      document.getElementById('custom-section-image').value = canvas.toDataURL('image/jpeg', 0.82);
    };
    image.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// =============================================================================
// 7. IMAGE MANAGER & MODAL (PRESETS, LOCAL UPLOAD, URL)
// =============================================================================

function openImageModal(target, currentUrl) {
  AppState.activeImageTarget = target;
  const modal = document.getElementById('modal-image-picker');
  modal.classList.add('open');

  // Populate presets
  const grid = document.getElementById('preset-image-grid');
  const allImages = [
    ...TEMPLATES.flatMap(t => [t.images.cover, t.images.about, t.images.closing]),
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=600&q=80'
  ];

  const seenPhotos = new Set();
  const uniqueImages = allImages.filter(imageUrl => {
    const key = imageUrl.split('?')[0];
    if (seenPhotos.has(key)) return false;
    seenPhotos.add(key);
    return true;
  });

  grid.innerHTML = uniqueImages.map(img => `
    <div class="preset-img-thumb ${img === currentUrl ? 'selected' : ''}" onclick="selectImage('${img}')">
      <img src="${img}" alt="Thumbnail">
    </div>
  `).join('');
}

function closeImageModal() {
  document.getElementById('modal-image-picker').classList.remove('open');
}

function selectImage(url) {
  applyNewImage(url);
  closeImageModal();
}

function handleCustomImageUrl() {
  const url = document.getElementById('custom-img-url').value.trim();
  if (url) {
    applyNewImage(url);
    closeImageModal();
  }
}

function handleImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const source = new Image();
    source.onload = () => {
      const scale = Math.min(1, 1800 / Math.max(source.width, source.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(source.width * scale);
      canvas.height = Math.round(source.height * scale);
      canvas.getContext('2d').drawImage(source, 0, 0, canvas.width, canvas.height);
      applyNewImage(canvas.toDataURL('image/jpeg', 0.84));
      closeImageModal();
    };
    source.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

function applyNewImage(src) {
  const target = AppState.activeImageTarget;
  const tmpl = TEMPLATES.find(t => t.id === AppState.currentTemplateId);
  recordUndo('Replace photo');
  if (tmpl && tmpl.images[target]) {
    tmpl.images[target] = src;
  }
  document.querySelectorAll(`[id="img-${target}"]`).forEach(el => el.src = src);
  persistProject();
}

// =============================================================================
// 8. COLOR THEME OVERRIDES
// =============================================================================

function updateCustomColor(property, value) {
  const tmpl = TEMPLATES.find(t => t.id === AppState.currentTemplateId);
  if (!tmpl) return;
  const themeKey = ({ '--tmpl-primary':'primary', '--tmpl-accent':'accent', '--tmpl-bg':'bg', '--tmpl-card-bg':'cardBg', '--tmpl-text':'text' })[property];
  if (!themeKey || tmpl.theme[themeKey] === value) return;
  recordUndo('Change color', `color:${AppState.currentTemplateId}:${property}`);
  document.documentElement.style.setProperty(property, value);

  if (property === '--tmpl-primary') tmpl.theme.primary = value;
  if (property === '--tmpl-accent') tmpl.theme.accent = value;
  if (property === '--tmpl-bg') tmpl.theme.bg = value;
  if (property === '--tmpl-card-bg') tmpl.theme.cardBg = value;
  if (property === '--tmpl-text') tmpl.theme.text = value;
  persistProject();
}

function updateCustomFont(which, value) {
  const tmpl = TEMPLATES.find(t => t.id === AppState.currentTemplateId);
  if (!tmpl) return;
  const key = which === 'heading' ? 'fontHeading' : 'fontBody';
  if (tmpl.theme[key] === value) return;
  recordUndo('Change typeface', `font:${AppState.currentTemplateId}:${which}`);
  tmpl.theme[key] = value;
  applyTemplate(tmpl.id);
}

// =============================================================================
// 9. PDF EXPORT
// =============================================================================

function printOrDownloadPDF() {
  window.print();
}

// =============================================================================
// 10. ZOOM & CANVAS CONTROLS
// =============================================================================

function adjustZoom(delta) {
  AppState.zoom = Math.min(Math.max(AppState.zoom + delta, 0.4), 1.5);
  applyZoom();
}

function resetZoom() {
  AppState.zoom = 1.0;
  applyZoom();
}

function applyZoom() {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => {
    p.style.transform = `scale(${AppState.zoom})`;
    p.style.transformOrigin = 'top center';
    p.style.marginBottom = `${(AppState.zoom - 1) * 297 * 3.78}px`;
  });
  const indicator = document.getElementById('zoom-level');
  if (indicator) indicator.textContent = `${Math.round(AppState.zoom * 100)}%`;
}

function toggleSidebar() {
  const sidebar = document.getElementById('app-sidebar');
  sidebar.classList.toggle('collapsed');
  updateSidebarToggle();
}

function updateSidebarToggle() {
  const sidebar = document.getElementById('app-sidebar');
  const button = document.getElementById('sidebar-toggle');
  if (!sidebar || !button) return;
  const expanded = !sidebar.classList.contains('collapsed');
  button.setAttribute('aria-expanded', String(expanded));
  button.setAttribute('aria-label', expanded ? 'Hide editing tools' : 'Show editing tools');
  button.title = expanded ? 'Hide editing tools to review' : 'Show editing tools';
}

function setupEventListeners() {
  const canvas = document.getElementById('document-canvas');
  canvas.addEventListener('click', event => {
    if (AppState.addingTextField) {
      const page = event.target.closest('.page');
      if (!page) return;
      event.preventDefault(); event.stopImmediatePropagation();
      const bounds = page.getBoundingClientRect();
      addPositionedTextField(page, Math.max(2, Math.min(68, ((event.clientX - bounds.left) / bounds.width) * 100)), Math.max(5, Math.min(90, ((event.clientY - bounds.top) / bounds.height) * 100)));
      return;
    }
    if (AppState.arrangingElements) {
      const selected = event.target.closest('[data-design-key]');
      if (!selected) return;
      event.preventDefault(); event.stopImmediatePropagation();
      AppState.selectedElementKey = selected.dataset.designKey;
      const field = selected.closest('.free-text-field');
      AppState.activeTextFieldId = field?.dataset.textFieldId || null;
      canvas.querySelectorAll('.design-selectable').forEach(node => node.classList.toggle('design-selected', node === selected));
      updateSelectedElementTools();
      return;
    }
    const box = event.target.closest('.free-text-field');
    if (box) {
      AppState.activeTextFieldId = box.dataset.textFieldId;
      AppState.selectedElementKey = box.dataset.designKey;
      updateSelectedElementTools();
    }
  }, true);
  canvas.addEventListener('input', event => {
    if (event.target.matches('.free-text-content')) {
      const id = event.target.closest('.free-text-field').dataset.textFieldId;
      const field = AppState.data.positionedTextFields.find(item => item.id === id);
      if (field && field.text !== event.target.innerText) {
        recordUndo('Edit custom text', `text:${id}`);
        field.text = event.target.innerText;
        persistProject();
      }
    }
  });
  canvas.addEventListener('focusout', event => {
    const path = event.target.dataset.statePath;
    if (path) updateStateText(path, event.target.innerText);
  });
  canvas.addEventListener('pointerdown', event => {
    if (!AppState.arrangingElements) return;
    const node = event.target.closest('[data-design-key]');
    const page = node?.closest('.page');
    if (!node || !page) return;
    AppState.selectedElementKey = node.dataset.designKey;
    const field = node.closest('.free-text-field');
    AppState.activeTextFieldId = field?.dataset.textFieldId || null;
    canvas.querySelectorAll('.design-selectable').forEach(item => item.classList.toggle('design-selected', item === node));
    const position = AppState.data.elementPositions[node.dataset.designKey] || {};
    event.preventDefault();
    try { node.setPointerCapture(event.pointerId); } catch (_) { /* The element may have been replaced during a fast render. */ }
    AppState.draggingElement = { key:node.dataset.designKey, node, page, startX:event.clientX, startY:event.clientY, x:position.x || 0, y:position.y || 0, moved:false };
    updateSelectedElementTools();
  });
  canvas.addEventListener('pointermove', event => {
    const drag = AppState.draggingElement;
    if (!drag) return;
    const deltaX = event.clientX - drag.startX;
    const deltaY = event.clientY - drag.startY;
    if (!drag.moved && Math.hypot(deltaX, deltaY) < 4) return;
    if (!drag.moved) {
      const label = (drag.node.innerText || drag.node.alt || drag.node.tagName).trim().slice(0, 32);
      recordUndo(`Move ${label || 'element'}`, `move:${drag.key}`);
      drag.moved = true;
      drag.node.classList.add('is-being-dragged');
      document.body.classList.add('moving-design-element');
      const indicator = document.getElementById('dragging-indicator');
      document.getElementById('dragging-indicator-label').textContent = `Moving ${label || 'element'}`;
      indicator.hidden = false;
    }
    const bounds = drag.page.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const position = AppState.data.elementPositions[drag.key] ||= { x:0, y:0, scale:1, layer:0 };
    position.x = Math.max(-45, Math.min(100, drag.x + (deltaX / bounds.width) * 100));
    position.y = Math.max(-45, Math.min(100, drag.y + (deltaY / bounds.height) * 100));
    drag.node.style.translate = `${position.x * drag.page.clientWidth / 100}px ${position.y * drag.page.clientHeight / 100}px`;
  });
  canvas.addEventListener('pointerup', finishDesignDrag);
  canvas.addEventListener('pointercancel', finishDesignDrag);
  window.addEventListener('resize', () => applyDesignElementPositions());
  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z' && !event.shiftKey && !event.target.closest('input,textarea,[contenteditable="true"]')) {
      event.preventDefault(); undoLastChange();
    }
    if (event.key === 'Escape' && AppState.arrangingElements) toggleArrangeElements(false);
  });
}

