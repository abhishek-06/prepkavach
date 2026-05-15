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
        name: "General Science",
        topics: [
          // PHYSICS (16)
          { id: "sci-phy-units", name: "Units & Measurement", group: "Physics" },
          { id: "sci-phy-kinematics", name: "Kinematics (Motion)", group: "Physics" },
          { id: "sci-phy-friction", name: "Friction", group: "Physics" },
          { id: "sci-phy-work-energy", name: "Work, Energy & Power", group: "Physics" },
          { id: "sci-phy-gravitation", name: "Gravitation", group: "Physics" },
          { id: "sci-phy-properties", name: "General Properties of Matter", group: "Physics" },
          { id: "sci-phy-density", name: "Density & Relative Density", group: "Physics" },
          { id: "sci-phy-wave-motion", name: "Wave Motion", group: "Physics" },
          { id: "sci-phy-sound", name: "Sound Wave", group: "Physics" },
          { id: "sci-phy-heat", name: "Heat", group: "Physics" },
          { id: "sci-phy-light", name: "Light", group: "Physics" },
          { id: "sci-phy-electricity", name: "Electricity", group: "Physics" },
          { id: "sci-phy-magnets", name: "Magnets", group: "Physics" },
          { id: "sci-phy-atomic", name: "Atomic & Nuclear Physics", group: "Physics" },
          { id: "sci-phy-radioactivity", name: "Radioactivity", group: "Physics" },
          { id: "sci-phy-nano", name: "Nanotechnology", group: "Physics" },

          // CHEMISTRY (14)
          { id: "sci-chem-matter", name: "Matter & Its States", group: "Chemistry" },
          { id: "sci-chem-change-states", name: "Concept of Change in States", group: "Chemistry" },
          { id: "sci-chem-gas-laws", name: "Gas Laws", group: "Chemistry" },
          { id: "sci-chem-atomic-structure", name: "Atomic Structure", group: "Chemistry" },
          { id: "sci-chem-periodic", name: "Periodic Table", group: "Chemistry" },
          { id: "sci-chem-metals", name: "Metals & Non-Metals", group: "Chemistry" },
          { id: "sci-chem-acids-bases", name: "Acids, Bases & Salts", group: "Chemistry" },
          { id: "sci-chem-minerals", name: "Minerals", group: "Chemistry" },
          { id: "sci-chem-electrochemistry", name: "Electrochemistry", group: "Chemistry" },
          { id: "sci-chem-bonding", name: "Chemical Bonding", group: "Chemistry" },
          { id: "sci-chem-reaction", name: "Chemical Reactions", group: "Chemistry" },
          { id: "sci-chem-organic", name: "Organic Chemistry", group: "Chemistry" },
          { id: "sci-chem-fossil-fuels", name: "Fossil Fuels", group: "Chemistry" },
          { id: "sci-chem-everyday", name: "Chemistry in Everyday Life", group: "Chemistry" },

          // BIOLOGY (19)
          { id: "sci-bio-cell", name: "The Cell", group: "Biology" },
          { id: "sci-bio-biomolecules", name: "Biomolecules", group: "Biology" },
          { id: "sci-bio-human-facts", name: "Facts about the Human Body", group: "Biology" },
          { id: "sci-bio-blood", name: "Blood", group: "Biology" },
          { id: "sci-bio-circulatory", name: "Circulatory System", group: "Biology" },
          { id: "sci-bio-digestive", name: "Human Digestive System", group: "Biology" },
          { id: "sci-bio-respiratory", name: "Respiratory System", group: "Biology" },
          { id: "sci-bio-nervous", name: "Nervous System", group: "Biology" },
          { id: "sci-bio-endocrine", name: "Endocrine System", group: "Biology" },
          { id: "sci-bio-skeletal", name: "Skeletal System", group: "Biology" },
          { id: "sci-bio-muscular", name: "Muscular System", group: "Biology" },
          { id: "sci-bio-excretory", name: "Excretory System", group: "Biology" },
          { id: "sci-bio-reproductive", name: "Reproductive System", group: "Biology" },
          { id: "sci-bio-sense", name: "Human Sense Organs", group: "Biology" },
          { id: "sci-bio-health", name: "Health & Diseases", group: "Biology" },
          { id: "sci-bio-genetics", name: "Genetics", group: "Biology" },
          { id: "sci-bio-evolution", name: "Biological Evolution", group: "Biology" },
          { id: "sci-bio-botany", name: "Botany (Plant Biology)", group: "Biology" },
          { id: "sci-bio-biotechnology", name: "Biotechnology", group: "Biology" }
        ]
      },
      {
        id: "static-gk",
        name: "Static GK",
        topics: [
          // World GK
          { id: "sgk-first-world", name: "First in the World", group: "World GK" },
          { id: "sgk-superlatives-world", name: "Smallest, Largest, Longest, Deepest in World", group: "World GK" },
          { id: "sgk-capitals-currencies", name: "Countries: Capitals & Currencies", group: "World GK" },
          { id: "sgk-largest-countries", name: "Largest & Smallest Countries (Areawise)", group: "World GK" },
          { id: "sgk-religions", name: "Religions of the World", group: "World GK" },
          { id: "sgk-monuments", name: "Important World Monuments", group: "World GK" },
          { id: "sgk-seven-wonders", name: "Seven Wonders of the World", group: "World GK" },
          { id: "sgk-parliaments", name: "Parliaments of Countries", group: "World GK" },
          { id: "sgk-intel-agencies", name: "Intelligence Agencies", group: "World GK" },
          { id: "sgk-organisations", name: "Organisations & their Headquarters", group: "World GK" },
          { id: "sgk-newspapers", name: "Famous Newspapers", group: "World GK" },
          { id: "sgk-political-parties", name: "Important Political Parties", group: "World GK" },

          // India GK
          { id: "sgk-first-india", name: "First in India", group: "India GK" },
          { id: "sgk-superlatives-india", name: "Superlatives in India (Largest, Highest, Longest)", group: "India GK" },
          { id: "sgk-unesco-india", name: "UNESCO World Heritage Sites in India", group: "India GK" },
          { id: "sgk-research-centres", name: "Indian Research Centres & Institutes", group: "India GK" },
          { id: "sgk-languages", name: "Principal Languages of India", group: "India GK" },
          { id: "sgk-tourist-places", name: "Famous Tourist Places of India", group: "India GK" },
          { id: "sgk-art-culture", name: "Indian Art, Dance & Culture", group: "India GK" },
          { id: "sgk-defence", name: "Indian Defence Forces", group: "India GK" },
          { id: "sgk-atomic-research", name: "India's Atomic Research", group: "India GK" },
          { id: "sgk-space", name: "Space Programme in India", group: "India GK" },
          { id: "sgk-isro", name: "ISRO Establishments & Missions", group: "India GK" },
          { id: "sgk-national-symbols", name: "National Symbols of India", group: "India GK" },

          // Common / Misc
          { id: "sgk-fathers", name: "Fathers of Various Fields", group: "Awards, People & Misc" },
          { id: "sgk-books-authors", name: "Famous Books & Authors", group: "Awards, People & Misc" },
          { id: "sgk-official-books", name: "Official Books of Countries / Religions", group: "Awards, People & Misc" },
          { id: "sgk-sports", name: "Sports: Cups, Trophies, Players & Stadia", group: "Awards, People & Misc" },
          { id: "sgk-awards", name: "Awards & Honours", group: "Awards, People & Misc" },
          { id: "sgk-days", name: "Important Days & Dates", group: "Awards, People & Misc" },
          { id: "sgk-abbreviations", name: "Important Abbreviations", group: "Awards, People & Misc" },
          { id: "sgk-misc", name: "Miscellaneous GK", group: "Awards, People & Misc" }
        ]
      },
      {
        id: "computer",
        name: "Computer",
        topics: [
          { id: "comp-intro", name: "Introduction to Computers", group: "Computer Basics" },
          { id: "comp-types", name: "Types & Generations of Computers", group: "Computer Basics" },
          { id: "comp-components", name: "Components: Hardware & Software", group: "Computer Basics" },
          { id: "comp-networking", name: "Networking & Internet", group: "Computer Basics" },
          { id: "comp-security", name: "Security Threats & Cyber Safety", group: "Computer Basics" },
          { id: "comp-abbreviations", name: "Computer Abbreviations", group: "Computer Basics" }
        ]
      }
    ]
  },
  {
    id: "quant",
    name: "Quant",
    sections: [
      {
        id: "arithmetic",
        name: "Arithmetic",
        topics: [
          { id: "math-intro", name: "How to Use This Section" },
          { id: "math-number-system", name: "Number System" },
          { id: "math-simplification", name: "Simplification (BODMAS)" },
          { id: "math-fraction-decimal", name: "Fractions & Decimals" },
          { id: "math-surds-indices", name: "Surds & Indices" },
          { id: "math-square-cube-root", name: "Square Root & Cube Root" },
          { id: "math-hcf-lcm", name: "HCF & LCM" },
          { id: "math-percentage", name: "Percentage" },
          { id: "math-profit-loss", name: "Profit & Loss" },
          { id: "math-discount", name: "Discount" },
          { id: "math-average", name: "Average" },
          { id: "math-age", name: "Problems on Ages" },
          { id: "math-ratio-proportion", name: "Ratio & Proportion" },
          { id: "math-race", name: "Races" },
          { id: "math-mixture", name: "Mixture & Alligation" },
          { id: "math-partnership", name: "Partnership" },
          { id: "math-si", name: "Simple Interest" },
          { id: "math-ci", name: "Compound Interest" },
          { id: "math-time-work", name: "Time & Work" },
          { id: "math-pipe-cistern", name: "Pipes & Cisterns" },
          { id: "math-time-distance", name: "Time, Speed & Distance" },
          { id: "math-train", name: "Problems on Trains" },
          { id: "math-boat-stream", name: "Boats & Streams" },
          { id: "math-sequence-series", name: "Sequences & Series" },
          { id: "math-di", name: "Data Interpretation" }
        ]
      },
      {
        id: "advance-maths",
        name: "Advance Maths",
        topics: [
          { id: "math-algebra", name: "Algebra" },
          { id: "math-trigonometry", name: "Trigonometry" },
          { id: "math-height-distance", name: "Height & Distance" },
          { id: "math-mensuration", name: "Mensuration (2D & 3D)" },
          { id: "math-geometry", name: "Geometry" },
          { id: "math-coord-geometry", name: "Coordinate Geometry" },
          { id: "math-permutation-combination", name: "Permutation & Combination" },
          { id: "math-probability", name: "Probability" },
          { id: "math-statistics", name: "Statistics" }
        ]
      }
    ]
  },
  {
    id: "english",
    name: "English",
    sections: [
      {
        id: "grammar",
        name: "Grammar",
        topics: [
          { id: "eng-intro", name: "How to Use This Section" },
          { id: "eng-parts-of-speech", name: "Parts of Speech (Overview)" },
          { id: "eng-noun", name: "Noun" },
          { id: "eng-pronoun", name: "Pronoun" },
          { id: "eng-adjective", name: "Adjective" },
          { id: "eng-verb", name: "Verb" },
          { id: "eng-modals", name: "Modals" },
          { id: "eng-adverb", name: "Adverb" },
          { id: "eng-preposition", name: "Preposition" },
          { id: "eng-conjunction", name: "Conjunction" },
          { id: "eng-articles", name: "Articles (A, An, The)" },
          { id: "eng-tense", name: "Time and Tense" },
          { id: "eng-sequence-tense", name: "Sequence of Tense" },
          { id: "eng-sva", name: "Subject-Verb Agreement" },
          { id: "eng-voice", name: "Voice (Active/Passive)" },
          { id: "eng-narration", name: "Narration (Direct/Indirect)" },
          { id: "eng-conditional", name: "Conditional Sentences" },
          { id: "eng-question-tag", name: "Question Tag" },
          { id: "eng-mood", name: "Mood" },
          { id: "eng-inversion", name: "Inversion" },
          { id: "eng-parallelism", name: "Parallelism" },
          { id: "eng-superfluous", name: "Superfluous Expressions" },
          { id: "eng-analysis", name: "Analysis of Sentences" },
          { id: "eng-transformation", name: "Transformation of Sentences" },
          { id: "eng-synthesis", name: "Synthesis of Sentences" },
          { id: "eng-rearrangement", name: "Sentence Rearrangement" },
          { id: "eng-error-detection", name: "Error Detection" },
          { id: "eng-cloze", name: "Cloze Test" },
          { id: "eng-comprehension", name: "Reading Comprehension" }
        ]
      },
      {
        id: "vocabulary",
        name: "Vocabulary",
        topics: [
          { id: "eng-synonyms", name: "Synonyms" },
          { id: "eng-antonyms", name: "Antonyms" },
          { id: "eng-phrasal-verb", name: "Phrasal Verbs" },
          { id: "eng-one-word", name: "One Word Substitution" },
          { id: "eng-idioms", name: "Idioms and Phrases" },
          { id: "eng-root-words", name: "Root Words" },
          { id: "eng-important-words", name: "Important Words & Meanings" },
          { id: "eng-homonyms", name: "Homonyms (Confusing Words)" },
          { id: "eng-misspelt", name: "Misspelt Words / Spelling" }
        ]
      }
    ]
  },
  {
    id: "reasoning",
    name: "Reasoning",
    sections: [
      {
        id: "verbal-reasoning",
        name: "Verbal Reasoning",
        topics: [
          { id: "reas-coding", name: "Coding-Decoding" },
          { id: "reas-series", name: "Number & Letter Series" },
          { id: "reas-analogy", name: "Analogy" },
          { id: "reas-classification", name: "Classification (Odd One Out)" },
          { id: "reas-blood-relation", name: "Blood Relations" },
          { id: "reas-direction", name: "Direction Sense" },
          { id: "reas-arrangements", name: "Linear, Circular & Complex Arrangements" },
          { id: "reas-ranking", name: "Ranking Order & Sequence" },
          { id: "reas-math-ops", name: "Mathematical Operations" },
          { id: "reas-venn", name: "Logical Venn Diagrams" },
          { id: "reas-syllogism", name: "Syllogism" },
          { id: "reas-puzzles", name: "Logical Puzzles" },
          { id: "reas-word-formation", name: "Word Formation & Logical Order" },
          { id: "reas-clock", name: "Clock" },
          { id: "reas-calendar", name: "Calendar" },
          { id: "reas-analytical", name: "Analytical Reasoning" }
        ]
      },
      {
        id: "non-verbal-reasoning",
        name: "Non-Verbal Reasoning",
        topics: [
          { id: "reas-nv-series", name: "Series (Non-Verbal)" },
          { id: "reas-nv-analogy", name: "Analogy (Non-Verbal)" },
          { id: "reas-nv-classification", name: "Classification (Non-Verbal)" },
          { id: "reas-dice", name: "Dice" },
          { id: "reas-cube", name: "Cube and Cuboid" },
          { id: "reas-mirror", name: "Mirror Images" },
          { id: "reas-water", name: "Water Images" },
          { id: "reas-embedded", name: "Embedded Figures" },
          { id: "reas-completion", name: "Completion of Figures" },
          { id: "reas-paper", name: "Paper Cutting & Folding" },
          { id: "reas-counting", name: "Counting of Figures" }
        ]
      }
    ]
  }
];

window.TOPICS = window.TOPICS || {};
