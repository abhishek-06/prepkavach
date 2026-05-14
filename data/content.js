// Subject and topic registry. Topic content is loaded from separate files.
window.SUBJECTS = [
  {
    id: "general-awareness",
    name: "General Awareness",
    sections: [
      {
        id: "history",
        name: "History",
        topics: [
          // Ancient History
          { id: "ah-dates-basics", name: "How to Read Dates (BC/AD/CE) — Start Here", group: "Ancient History" },
          { id: "ah-sources", name: "Sources of Ancient Indian History", group: "Ancient History" },
          { id: "ah-stone-age", name: "Prehistoric & Stone Age", group: "Ancient History" },
          { id: "ah-indus", name: "Indus Valley Civilization", group: "Ancient History" },
          { id: "ah-vedic", name: "Vedic Age", group: "Ancient History" },
          { id: "ah-religions", name: "Buddhism & Jainism", group: "Ancient History" },
          { id: "ah-mahajanapadas", name: "Mahajanapadas & Magadha", group: "Ancient History" },
          { id: "ah-mauryas", name: "Mauryan Empire", group: "Ancient History" },
          { id: "ah-postmaurya", name: "Post-Mauryan Period", group: "Ancient History" },
          { id: "ah-guptas", name: "Gupta Empire & Vardhanas", group: "Ancient History" },
          { id: "ah-south", name: "South Indian Kingdoms (Cholas, Pallavas, Chalukyas)", group: "Ancient History" },
          { id: "ah-temple-architecture", name: "Temple Architecture", group: "Ancient History" },

          // Medieval History
          { id: "mdh-sources", name: "Sources of Medieval Indian History", group: "Medieval History" },
          { id: "mdh-early-medieval", name: "Early Medieval India (Rajputs, Palas, Pratiharas)", group: "Medieval History" },
          { id: "mdh-arab-turk", name: "Arab and Turkish Invasions", group: "Medieval History" },
          { id: "mdh-delhi-sultanate", name: "Delhi Sultanate", group: "Medieval History" },
          { id: "mdh-life-sultanate", name: "Life in Delhi Sultanate (Society, Economy, Culture)", group: "Medieval History" },
          { id: "mdh-provincial-kingdoms", name: "Provincial Kingdoms (Jaunpur, Bengal, Gujarat, Malwa, Mewar, Kashmir)", group: "Medieval History" },
          { id: "mdh-vijayanagar", name: "Vijayanagar & Bahmani Kingdoms", group: "Medieval History" },
          { id: "mdh-bhakti-sufi", name: "Bhakti & Sufi Movements", group: "Medieval History" },
          { id: "mdh-mughals-early", name: "Mughal Empire (Babur to Akbar)", group: "Medieval History" },
          { id: "mdh-mughals-late", name: "Later Mughals (Jahangir to Aurangzeb)", group: "Medieval History" },
          { id: "mdh-mughal-admin", name: "Mughal Administration, Society & Architecture", group: "Medieval History" },
          { id: "mdh-marathas", name: "Maratha Empire", group: "Medieval History" },
          { id: "mdh-sikhs", name: "Sikhism & Gurus", group: "Medieval History" },

          // Modern History — populated in history-modern.js
          { id: "mh-advent-europeans", name: "Advent of Europeans in India", group: "Modern History" },
          { id: "mh-plassey-buxar", name: "Battles of Plassey & Buxar", group: "Modern History" },
          { id: "mh-anglo-mysore", name: "Anglo-Mysore Wars", group: "Modern History" },
          { id: "mh-anglo-maratha", name: "Anglo-Maratha Wars", group: "Modern History" },
          { id: "mh-anglo-sikh", name: "Anglo-Sikh Wars", group: "Modern History" },
          { id: "mh-governors", name: "Governor Generals of Bengal & India", group: "Modern History" },
          { id: "mh-viceroys", name: "Viceroys of India (1858–1947)", group: "Modern History" },
          { id: "mh-economic-policies", name: "British Economic Policies & Land Revenue", group: "Modern History" },
          { id: "mh-reform-movements", name: "Socio-Religious Reform Movements", group: "Modern History" },
          { id: "mh-revolt-1857", name: "Revolt of 1857", group: "Modern History" },
          { id: "mh-inc-foundation", name: "Foundation of Indian National Congress", group: "Modern History" },
          { id: "mh-moderates-extremists", name: "Moderates & Extremists", group: "Modern History" },
          { id: "mh-bengal-partition", name: "Partition of Bengal & Swadeshi Movement", group: "Modern History" },
          { id: "mh-revolutionaries", name: "Revolutionary Movements", group: "Modern History" },
          { id: "mh-home-rule", name: "Home Rule Movement", group: "Modern History" },
          { id: "mh-gandhi-early", name: "Gandhi's Early Movements (Champaran, Kheda, Ahmedabad)", group: "Modern History" },
          { id: "mh-rowlatt-jallianwala", name: "Rowlatt Act, Jallianwala Bagh & Khilafat", group: "Modern History" },
          { id: "mh-non-cooperation", name: "Non-Cooperation Movement", group: "Modern History" },
          { id: "mh-civil-disobedience", name: "Civil Disobedience Movement & Dandi March", group: "Modern History" },
          { id: "mh-rtc-goi1935", name: "Round Table Conferences & Govt. of India Act 1935", group: "Modern History" },
          { id: "mh-quit-india", name: "Quit India Movement", group: "Modern History" },
          { id: "mh-ina-bose", name: "INA & Subhash Chandra Bose", group: "Modern History" },
          { id: "mh-independence", name: "Cabinet Mission, Mountbatten Plan & Independence", group: "Modern History" },
          { id: "mh-newspapers", name: "Important Newspapers and Journals", group: "Modern History" },
          { id: "mh-battles", name: "Important Battles in Indian History", group: "Modern History" },

          // World History
          { id: "wh-ancient", name: "Ancient World", group: "World History" },
          { id: "wh-medieval", name: "Medieval World", group: "World History" },
          { id: "wh-modern", name: "Modern World", group: "World History" }
        ]
      },
      {
        id: "geography",
        name: "Geography",
        topics: [
          // World / Physical Geography
          { id: "geo-universe", name: "Universe & Solar System", group: "World Geography" },
          { id: "geo-earth", name: "Earth: Structure & Movements", group: "World Geography" },
          { id: "geo-rocks", name: "Rocks & Minerals", group: "World Geography" },
          { id: "geo-landforms", name: "Landforms (Earthquakes, Volcanoes, Mountains)", group: "World Geography" },
          { id: "geo-atmosphere", name: "Atmosphere, Climate & Winds", group: "World Geography" },
          { id: "geo-hydrosphere", name: "Hydrosphere: Oceans, Currents & Tides", group: "World Geography" },
          { id: "geo-world-continents", name: "World Continents & Major Features", group: "World Geography" },
          { id: "geo-world-rivers", name: "World Rivers, Mountains & Deserts", group: "World Geography" },

          // Indian Geography
          { id: "geo-india-physical", name: "Physical Features of India", group: "Indian Geography" },
          { id: "geo-india-rivers", name: "Indian Rivers & Drainage", group: "Indian Geography" },
          { id: "geo-india-climate", name: "Indian Climate & Monsoon", group: "Indian Geography" },
          { id: "geo-india-soils", name: "Soils & Natural Vegetation of India", group: "Indian Geography" },
          { id: "geo-india-agriculture", name: "Indian Agriculture & Crops", group: "Indian Geography" },
          { id: "geo-india-minerals", name: "Minerals & Mining in India", group: "Indian Geography" },
          { id: "geo-india-industries", name: "Industries of India", group: "Indian Geography" },
          { id: "geo-india-energy", name: "Energy Resources of India", group: "Indian Geography" },
          { id: "geo-india-transport", name: "Transportation in India", group: "Indian Geography" },

          // Environment & Ecology
          { id: "geo-ecology", name: "Ecology & Ecosystems", group: "Environment & Ecology" },
          { id: "geo-pollution", name: "Pollution & Climate Change", group: "Environment & Ecology" },
          { id: "geo-biodiversity", name: "Biodiversity, National Parks & Wildlife", group: "Environment & Ecology" }
        ]
      },
      {
        id: "polity",
        name: "Indian Polity",
        topics: [
          { id: "pol-historical", name: "Historical Background of Constitution", group: "Constitution" },
          { id: "pol-making", name: "Making of the Constitution", group: "Constitution" },
          { id: "pol-features", name: "Salient Features & Preamble", group: "Constitution" },
          { id: "pol-parts-schedules", name: "Parts, Schedules & Sources", group: "Constitution" },
          { id: "pol-citizenship", name: "Citizenship & Fundamental Rights", group: "Rights & Duties" },
          { id: "pol-dpsp", name: "DPSP & Fundamental Duties", group: "Rights & Duties" },
          { id: "pol-president", name: "President & Vice-President", group: "Union Government" },
          { id: "pol-pm-cabinet", name: "Prime Minister & Council of Ministers", group: "Union Government" },
          { id: "pol-parliament", name: "Parliament: Lok Sabha & Rajya Sabha", group: "Union Government" },
          { id: "pol-judiciary", name: "Supreme Court & Judiciary", group: "Union Government" },
          { id: "pol-state-govt", name: "Governor, CM & State Legislature", group: "State Government" },
          { id: "pol-local-govt", name: "Panchayati Raj & Municipalities", group: "Local Government" },
          { id: "pol-emergency", name: "Emergency Provisions", group: "Special Provisions" },
          { id: "pol-amendments", name: "Important Constitutional Amendments", group: "Special Provisions" },
          { id: "pol-bodies", name: "Constitutional & Statutory Bodies", group: "Special Provisions" }
        ]
      },
      {
        id: "economy",
        name: "Economy",
        topics: [
          { id: "eco-intro", name: "Introduction to Economics", group: "Foundations" },
          { id: "eco-planning", name: "Economic Planning in India", group: "Foundations" },
          { id: "eco-national-income", name: "National Income & GDP Aggregates", group: "Foundations" },
          { id: "eco-demography", name: "Demography & Census Basics", group: "Foundations" },
          { id: "eco-poverty-unemployment", name: "Poverty and Unemployment", group: "Development" },
          { id: "eco-agriculture", name: "Agriculture, MSP & Food Security", group: "Sectors" },
          { id: "eco-infrastructure", name: "Infrastructure and Energy", group: "Sectors" },
          { id: "eco-industry", name: "Industry, MSME & Industrial Policy", group: "Sectors" },
          { id: "eco-public-sector", name: "Public Sector Enterprises & Disinvestment", group: "Sectors" },
          { id: "eco-schemes", name: "Major Economic Schemes and Programmes", group: "Development" },
          { id: "eco-banking", name: "Banking System and Financial Inclusion", group: "Money & Banking" },
          { id: "eco-monetary-policy", name: "RBI and Monetary Policy", group: "Money & Banking" },
          { id: "eco-financial-system", name: "Financial System, Markets and Regulators", group: "Money & Banking" },
          { id: "eco-inflation", name: "Inflation, WPI, CPI and Core Concepts", group: "Macroeconomics" },
          { id: "eco-fiscal-system", name: "Indian Fiscal System and Budget", group: "Public Finance" },
          { id: "eco-fiscal-terms", name: "Key Fiscal and Economic Terms", group: "Public Finance" },
          { id: "eco-taxation", name: "Taxation, GST and Cesses", group: "Public Finance" },
          { id: "eco-insurance", name: "Insurance and Social Security", group: "Financial Services" },
          { id: "eco-international-orgs", name: "International Financial Organisations", group: "External Sector" },
          { id: "eco-trade-commerce", name: "Trade, Commerce, BoP and Forex", group: "External Sector" },
          { id: "eco-indices-reports", name: "Indices & Reports (HDI, GHI, EPI, etc.)", group: "Reports & Indices" },
          { id: "eco-digital-economy", name: "Digital Economy (UPI, CBDC, ONDC)", group: "Reports & Indices" },
          { id: "eco-terminology", name: "Economy Terminology Quick Revision", group: "Revision" }
        ]
      },
      {
        id: "science",
        name: "Science",
        topics: [
          { id: "sci-physics-motion", name: "Motion, Force & Laws", group: "Physics" },
          { id: "sci-physics-energy", name: "Work, Energy, Power & Gravitation", group: "Physics" },
          { id: "sci-physics-light", name: "Light, Sound & Heat", group: "Physics" },
          { id: "sci-physics-electricity", name: "Electricity & Magnetism", group: "Physics" },
          { id: "sci-physics-modern", name: "Modern Physics & Units", group: "Physics" },
          { id: "sci-chem-atom", name: "Atomic Structure & Periodic Table", group: "Chemistry" },
          { id: "sci-chem-bonding", name: "Chemical Bonding & Reactions", group: "Chemistry" },
          { id: "sci-chem-acidsbases", name: "Acids, Bases, Salts & Metals", group: "Chemistry" },
          { id: "sci-chem-organic", name: "Organic Chemistry & Daily Life", group: "Chemistry" },
          { id: "sci-bio-cell", name: "Cell, Tissues & Classification", group: "Biology" },
          { id: "sci-bio-plant", name: "Plant Kingdom & Photosynthesis", group: "Biology" },
          { id: "sci-bio-human", name: "Human Body Systems", group: "Biology" },
          { id: "sci-bio-genetics", name: "Genetics & Evolution", group: "Biology" },
          { id: "sci-bio-diseases", name: "Diseases, Vitamins & Nutrition", group: "Biology" },
          { id: "sci-bio-ecology", name: "Ecology & Environment", group: "Biology" }
        ]
      },
      {
        id: "static-gk",
        name: "Static GK",
        topics: [
          { id: "sgk-awards", name: "Awards & Honours", group: "Static GK" },
          { id: "sgk-sports", name: "Sports: Cups, Trophies & Players", group: "Static GK" },
          { id: "sgk-books", name: "Books & Authors", group: "Static GK" },
          { id: "sgk-days", name: "Important Days & Dates", group: "Static GK" },
          { id: "sgk-firstindia", name: "First in India / World", group: "Static GK" },
          { id: "sgk-organisations", name: "Headquarters of Organizations", group: "Static GK" },
          { id: "sgk-art-culture", name: "Indian Art, Dance & Culture", group: "Static GK" }
        ]
      }
    ]
  },
  {
    id: "quant",
    name: "Quantitative Aptitude",
    sections: [
      {
        id: "maths",
        name: "Maths",
        topics: [
          { id: "math-intro", name: "How to Use This Section (KaTeX, Tricks)", group: "Start Here" },
          { id: "math-number-system", name: "Number System", group: "Quant — Arithmetic" },
          { id: "math-simplification", name: "Simplification (BODMAS)", group: "Quant — Arithmetic" },
          { id: "math-fraction-decimal", name: "Fractions & Decimals", group: "Quant — Arithmetic" },
          { id: "math-surds-indices", name: "Surds & Indices", group: "Quant — Arithmetic" },
          { id: "math-square-cube-root", name: "Square Root & Cube Root", group: "Quant — Arithmetic" },
          { id: "math-hcf-lcm", name: "HCF & LCM", group: "Quant — Arithmetic" },
          { id: "math-percentage", name: "Percentage", group: "Quant — Commercial" },
          { id: "math-profit-loss", name: "Profit & Loss", group: "Quant — Commercial" },
          { id: "math-discount", name: "Discount", group: "Quant — Commercial" },
          { id: "math-average", name: "Average", group: "Quant — Commercial" },
          { id: "math-age", name: "Problems on Ages", group: "Quant — Commercial" },
          { id: "math-ratio-proportion", name: "Ratio & Proportion", group: "Quant — Commercial" },
          { id: "math-race", name: "Races", group: "Quant — Commercial" },
          { id: "math-mixture", name: "Mixture & Alligation", group: "Quant — Commercial" },
          { id: "math-partnership", name: "Partnership", group: "Quant — Commercial" },
          { id: "math-si", name: "Simple Interest", group: "Quant — Interest" },
          { id: "math-ci", name: "Compound Interest", group: "Quant — Interest" },
          { id: "math-time-work", name: "Time & Work", group: "Quant — Time" },
          { id: "math-pipe-cistern", name: "Pipes & Cisterns", group: "Quant — Time" },
          { id: "math-time-distance", name: "Time, Speed & Distance", group: "Quant — Time" },
          { id: "math-train", name: "Problems on Trains", group: "Quant — Time" },
          { id: "math-boat-stream", name: "Boats & Streams", group: "Quant — Time" },
          { id: "math-sequence-series", name: "Sequences & Series", group: "Quant — Misc" },
          { id: "math-di", name: "Data Interpretation", group: "Quant — Misc" },
          { id: "math-algebra", name: "Algebra", group: "Advance Maths" },
          { id: "math-trigonometry", name: "Trigonometry", group: "Advance Maths" },
          { id: "math-height-distance", name: "Height & Distance", group: "Advance Maths" },
          { id: "math-mensuration", name: "Mensuration (2D & 3D)", group: "Advance Maths" },
          { id: "math-geometry", name: "Geometry", group: "Advance Maths" },
          { id: "math-coord-geometry", name: "Coordinate Geometry", group: "Advance Maths" },
          { id: "math-permutation-combination", name: "Permutation & Combination", group: "Advance Maths" },
          { id: "math-probability", name: "Probability", group: "Advance Maths" },
          { id: "math-statistics", name: "Statistics", group: "Advance Maths" }
        ]
      }
    ]
  },
  { id: "english", name: "English Language", sections: [] },
  { id: "reasoning", name: "Reasoning", sections: [] }
];

window.TOPICS = window.TOPICS || {};
