// World History — SSC CGL
(function() {
  const T = window.TOPICS;

  T["wh-ancient"] = {
    body: `
      <h3>Ancient World — A Sweeping Survey</h3>
      <p>Ancient world history covers ~5000 BC to ~500 AD. The river-valley civilizations of Egypt, Mesopotamia, Indus, and China gave rise to writing, agriculture, kingship, and law. Greek philosophy and Roman law shaped Western thought. India and China developed parallel civilizations of equal sophistication.</p>

      <hr>

      <h3>1. River-Valley Civilizations (3500–1500 BC)</h3>
      <table>
        <tr><th>Civilization</th><th>River(s)</th><th>Region</th><th>Famous For</th></tr>
        <tr><td><b>Mesopotamian</b></td><td>Tigris-Euphrates</td><td>Iraq</td><td>Cuneiform script (Sumerians); Code of Hammurabi (1750 BC); Ziggurats; first wheel; first cities (Ur, Uruk, Babylon, Nineveh).</td></tr>
        <tr><td><b>Egyptian</b></td><td>Nile</td><td>Egypt</td><td>Hieroglyphic script; Pyramids (Giza); Pharaohs; Mummification; Sphinx; "Egypt is the gift of Nile" — Herodotus.</td></tr>
        <tr><td><b>Indus Valley / Harappan</b></td><td>Indus + dried Saraswati</td><td>Pakistan, NW India</td><td>Town planning; drainage; cotton; undeciphered script.</td></tr>
        <tr><td><b>Chinese (Shang)</b></td><td>Yellow (Huang He)</td><td>China</td><td>Oracle bones; bronze; written script (Logographic Chinese).</td></tr>
      </table>

      <hr>

      <h3>2. Mesopotamian Civilization (3500–500 BC)</h3>
      <ul>
        <li>"Mesopotamia" = "Land between the Rivers" (Tigris and Euphrates).</li>
        <li><b>Sumerians</b> (3500–2000 BC): first city-states (Ur, Uruk, Lagash); cuneiform script; ziggurats; Epic of Gilgamesh.</li>
        <li><b>Babylonians</b> (1900–500 BC): <b>Hammurabi (~1750 BC)</b> — code of laws on stele; "eye for an eye"; <b>Hanging Gardens of Babylon</b> (one of 7 wonders) by Nebuchadnezzar II for wife Amytis (~600 BC).</li>
        <li><b>Assyrians</b> (1300–600 BC): warrior kings; library of Ashurbanipal at Nineveh.</li>
        <li><b>Persians/Achaemenid</b> (550–330 BC): Cyrus the Great founder; Darius I; defeated by Alexander.</li>
      </ul>

      <hr>

      <h3>3. Egyptian Civilization (3100–30 BC)</h3>
      <ul>
        <li>Unified by King Menes / Narmer (~3100 BC).</li>
        <li>Three Kingdoms: Old (~2700–2200 BC, pyramid age), Middle, New (Tutankhamun, Ramses II).</li>
        <li><b>Pyramids of Giza</b> — Khufu (Cheops), Khafre, Menkaure (~2500 BC); Sphinx.</li>
        <li>Hieroglyphic script — deciphered by <b>Champollion</b> using <b>Rosetta Stone (1822)</b>.</li>
        <li>Religion: Sun god Ra; Osiris (afterlife); Pharaohs as god-kings.</li>
        <li>Conquered by Alexander (332 BC); Ptolemaic dynasty (Cleopatra last).</li>
        <li>Annexed by Rome (30 BC).</li>
      </ul>

      <hr>

      <h3>4. Greek Civilization (~2000 BC – 146 BC)</h3>

      <h4>Ages</h4>
      <ul>
        <li><b>Minoan / Cretan</b> (~2000–1450 BC) — Crete; Knossos palace.</li>
        <li><b>Mycenaean</b> (~1600–1100 BC) — mainland; Trojan War legend (Homer's Iliad, Odyssey).</li>
        <li><b>Dark Age</b> (~1100–800 BC).</li>
        <li><b>Archaic</b> (800–500 BC) — rise of city-states (poleis): <b>Athens, Sparta</b>.</li>
        <li><b>Classical Age</b> (500–323 BC) — Persian Wars, Athenian democracy, philosophy.</li>
        <li><b>Hellenistic</b> (323–146 BC) — Alexander's empire splits.</li>
      </ul>

      <h4>Persian Wars</h4>
      <ul>
        <li><b>Battle of Marathon (490 BC)</b> — Athenians defeated Persian invasion (Darius); Pheidippides ran 26 miles to announce victory.</li>
        <li><b>Battle of Thermopylae (480 BC)</b> — Spartan King Leonidas with 300 Spartans against Xerxes; lost.</li>
        <li><b>Battle of Salamis (480 BC)</b> — naval; Athenians (Themistocles) defeated Persian fleet.</li>
      </ul>

      <h4>Athenian Democracy</h4>
      <ul>
        <li><b>Solon</b> (594 BC) — early reforms.</li>
        <li><b>Cleisthenes</b> (508 BC) — "Father of Athenian democracy".</li>
        <li><b>Pericles</b> (461–429 BC) — "Golden Age" of Athens; Parthenon built.</li>
      </ul>

      <h4>Greek Philosophy</h4>
      <table>
        <tr><th>Philosopher</th><th>Contribution</th></tr>
        <tr><td><b>Socrates</b> (469–399 BC)</td><td>Father of Western philosophy; Socratic method (Q&A); executed for impiety.</td></tr>
        <tr><td><b>Plato</b> (427–347 BC)</td><td>Socrates' student; Academy (387 BC); wrote Republic; theory of Forms.</td></tr>
        <tr><td><b>Aristotle</b> (384–322 BC)</td><td>Plato's student; tutor of Alexander; Lyceum; writings on logic, politics, ethics, biology, physics.</td></tr>
        <tr><td>Pythagoras</td><td>Theorem; mathematics, music; Pythagoreans.</td></tr>
        <tr><td>Heraclitus</td><td>"Cannot step in same river twice"; flux.</td></tr>
        <tr><td>Democritus</td><td>Atomic theory.</td></tr>
        <tr><td>Hippocrates</td><td>"Father of Medicine"; Hippocratic Oath.</td></tr>
        <tr><td>Herodotus</td><td>"Father of History"; wrote "Histories" of Persian Wars.</td></tr>
        <tr><td>Thucydides</td><td>Peloponnesian War history.</td></tr>
      </table>

      <h4>Alexander the Great (356–323 BC)</h4>
      <ul>
        <li>Son of Philip II of Macedon; tutor Aristotle.</li>
        <li>Conquered Persia (Battle of Gaugamela 331 BC), Egypt, parts of India (Battle of Hydaspes 326 BC vs Porus).</li>
        <li>Died at Babylon at age 32 (323 BC).</li>
        <li>Empire split among his generals (Diadochi) — Seleucus (Asia), Ptolemy (Egypt), Antigonus (Macedon).</li>
        <li>Spread Hellenistic culture through Asia and Egypt.</li>
      </ul>

      <hr>

      <h3>5. Roman Civilization (753 BC – 476 AD)</h3>
      <ul>
        <li>Rome founded (legendary): <b>753 BC</b> by Romulus.</li>
        <li>Three phases:
          <ul>
            <li><b>Roman Kingdom</b> (753–509 BC).</li>
            <li><b>Roman Republic</b> (509–27 BC) — Senate, Consuls, Tribunes; "<b>Twelve Tables</b>" (450 BC).</li>
            <li><b>Roman Empire</b> (27 BC – 476 AD) — Augustus first emperor.</li>
          </ul>
        </li>
        <li><b>Punic Wars (264–146 BC)</b> — Rome vs <b>Carthage (Hannibal)</b>; Rome won.</li>
        <li><b>Julius Caesar</b> (100–44 BC) — conquered Gaul; crossed Rubicon (49 BC); assassinated on Ides of March (15 March 44 BC) by Brutus & Cassius.</li>
        <li><b>Augustus / Octavian</b> (27 BC – 14 AD) — first Emperor; Pax Romana began.</li>
        <li>Famous emperors: Nero (burned Rome), Trajan (greatest extent), Hadrian, Marcus Aurelius (philosopher emperor), Constantine (legalized Christianity, 313 AD; founded Constantinople, 330 AD).</li>
        <li>Empire split (395 AD) into Western and Eastern (Byzantine).</li>
        <li><b>Fall of Rome (476 AD)</b> — last emperor Romulus Augustulus deposed by Odoacer.</li>
        <li>Eastern (Byzantine) empire continued till 1453 (Constantinople fell to Ottoman Turks).</li>
      </ul>

      <h4>Roman Achievements</h4>
      <ul>
        <li>Roman law (Twelve Tables, Justinian Code 529 AD).</li>
        <li>Latin language; ancestor of Romance languages (Italian, French, Spanish, Portuguese, Romanian).</li>
        <li>Engineering — aqueducts, roads ("All roads lead to Rome"), arches, concrete, Colosseum (80 AD).</li>
        <li>Christianity spread through Rome; legalized 313 AD; state religion 380 AD.</li>
      </ul>

      <hr>

      <h3>6. Chinese Civilization (Ancient)</h3>
      <ul>
        <li><b>Xia dynasty</b> (~2070–1600 BC) — semi-mythical.</li>
        <li><b>Shang dynasty</b> (1600–1046 BC) — bronze age; oracle bones; Yellow River.</li>
        <li><b>Zhou dynasty</b> (1046–256 BC) — Mandate of Heaven concept; Spring & Autumn; Warring States period.</li>
        <li><b>Confucius</b> (551–479 BC) — moral philosophy; Analects.</li>
        <li><b>Lao Tzu</b> (~6th c. BC) — Taoism; Tao Te Ching.</li>
        <li><b>Sun Tzu</b> — Art of War.</li>
        <li><b>Qin dynasty</b> (221–206 BC) — first unification under <b>Qin Shi Huang</b>; built <b>Great Wall</b>; Terracotta Army; standardized script, weights, measures; "China" name from "Qin".</li>
        <li><b>Han dynasty</b> (206 BC – 220 AD) — Silk Road; paper invention (Cai Lun, 105 AD).</li>
      </ul>

      <hr>

      <h3>7. Major Religions of the Ancient World</h3>
      <table>
        <tr><th>Religion</th><th>Founder</th><th>Era</th></tr>
        <tr><td>Hinduism</td><td>No single founder</td><td>Continuous from Vedic times (1500 BC)</td></tr>
        <tr><td>Judaism</td><td>Abraham, Moses</td><td>~1900 BC – Moses (~1300 BC)</td></tr>
        <tr><td>Zoroastrianism</td><td>Zoroaster (Zarathustra)</td><td>Persia, ~1500 BC</td></tr>
        <tr><td>Buddhism</td><td>Gautama Buddha</td><td>India, ~550 BC</td></tr>
        <tr><td>Jainism</td><td>Mahavira (24th Tirthankara)</td><td>India, ~540 BC</td></tr>
        <tr><td>Confucianism</td><td>Confucius</td><td>China, ~500 BC</td></tr>
        <tr><td>Taoism</td><td>Lao Tzu</td><td>China, ~500 BC</td></tr>
        <tr><td>Christianity</td><td>Jesus Christ</td><td>1 AD; Roman empire</td></tr>
      </table>

      <h3>Looking Ahead</h3>
      <p>The fall of the Western Roman Empire (476 AD) is conventionally taken as the end of the Ancient World and the beginning of the Medieval World. The next topic covers the Medieval World — Byzantine empire, Islamic Caliphates, Crusades, Mongols, Renaissance, and the Black Death.</p>
    `,
    mcq: [
      { q: "Code of Hammurabi (~1750 BC) was from?", opts: ["Egypt", "Babylon (Mesopotamia)", "Greece", "China"], a: 1, ex: "Babylonian king Hammurabi; on stele; 'eye for an eye' principle." },
      { q: "'Egypt is the gift of Nile' was said by?", opts: ["Plato", "Aristotle", "Herodotus", "Thucydides"], a: 2, ex: "Herodotus, Greek 'Father of History'." },
      { q: "Hieroglyphic script was deciphered using?", opts: ["Behistun Inscription", "Rosetta Stone (1822, by Champollion)", "Cyrus Cylinder", "Linear A"], a: 1, ex: "Rosetta Stone — found by Napoleon's troops; deciphered by Jean-François Champollion in 1822." },
      { q: "Hanging Gardens of Babylon were built by?", opts: ["Hammurabi", "Nebuchadnezzar II", "Sargon", "Cyrus"], a: 1, ex: "Nebuchadnezzar II for his wife Amytis (~600 BC); one of Seven Wonders." },
      { q: "Battle of Marathon (490 BC) was won by?", opts: ["Persians (Darius)", "Greeks (Athens)", "Spartans", "Egyptians"], a: 1, ex: "Athenians defeated Persian invasion of Darius I." },
      { q: "Battle of Thermopylae (480 BC) — 300 Spartans were led by?", opts: ["Pericles", "Themistocles", "Leonidas", "Alexander"], a: 2, ex: "King Leonidas of Sparta; lost to Xerxes' Persian army." },
      { q: "'Father of Western Philosophy' is?", opts: ["Plato", "Socrates", "Aristotle", "Pythagoras"], a: 1, ex: "Socrates (469–399 BC); executed for impiety; Socratic method." },
      { q: "Tutor of Alexander the Great was?", opts: ["Plato", "Socrates", "Aristotle", "Pythagoras"], a: 2, ex: "Aristotle taught Alexander as a teenager." },
      { q: "Alexander died at?", opts: ["Athens", "Macedon", "Babylon (323 BC)", "Persepolis"], a: 2, ex: "Babylon, age 32, 323 BC; possibly malaria or poisoning." },
      { q: "Rome was founded (legendary) in?", opts: ["3000 BC", "1000 BC", "753 BC", "476 BC"], a: 2, ex: "753 BC by Romulus and Remus." },
      { q: "Julius Caesar was assassinated in?", opts: ["27 BC", "44 BC", "AD 14", "AD 64"], a: 1, ex: "Ides of March (15 March) 44 BC by Brutus and Cassius in the Senate." },
      { q: "First Roman Emperor was?", opts: ["Julius Caesar", "Augustus / Octavian (27 BC)", "Nero", "Constantine"], a: 1, ex: "Augustus; began Pax Romana (peace of Rome)." },
      { q: "Western Roman Empire fell in?", opts: ["AD 313", "AD 380", "AD 476", "AD 1453"], a: 2, ex: "AD 476 — last emperor Romulus Augustulus deposed by Odoacer." },
      { q: "Eastern Roman (Byzantine) Empire fell in?", opts: ["AD 476", "AD 1066", "AD 1453 (Constantinople to Ottomans)", "AD 1492"], a: 2, ex: "1453 — Constantinople fell to Sultan Mehmed II." },
      { q: "Christianity was legalized in Rome by?", opts: ["Julius Caesar", "Augustus", "Constantine (Edict of Milan, 313 AD)", "Theodosius"], a: 2, ex: "Constantine the Great in 313 AD; made state religion in 380 AD by Theodosius." },
      { q: "Confucius was a Chinese philosopher of which century?", opts: ["10th BC", "6th BC (~551–479 BC)", "1st BC", "5th AD"], a: 1, ex: "551–479 BC; wrote Analects; moral philosophy." },
      { q: "Great Wall of China was built by?", opts: ["Han dynasty", "Qin Shi Huang (Qin dynasty)", "Tang dynasty", "Ming dynasty"], a: 1, ex: "Started under Qin Shi Huang (~220 BC); extended by later dynasties especially Ming." },
      { q: "Paper was invented in?", opts: ["Egypt", "Greece", "China (Cai Lun, 105 AD)", "India"], a: 2, ex: "Cai Lun of Han dynasty, 105 AD." },
      { q: "Terracotta Army of Xi'an is associated with?", opts: ["Han dynasty", "Qin Shi Huang", "Ming dynasty", "Tang dynasty"], a: 1, ex: "Qin Shi Huang's mausoleum; ~8,000 life-size soldiers; UNESCO." },
      { q: "Zoroastrianism was founded by?", opts: ["Cyrus", "Darius", "Zoroaster (Zarathustra)", "Mani"], a: 2, ex: "Zoroaster in ancient Persia (~1500 BC); Avesta is the holy text." }
    ]
  };

  T["wh-medieval"] = {
    body: `
      <h3>Medieval World (476 – 1500 AD)</h3>
      <p>The "medieval" or "Middle Ages" began with the fall of the Western Roman Empire (476 AD) and ended with the Renaissance and discovery of America (~1500). It saw the rise of Islam, Byzantine empire, feudal Europe, the Crusades, the Mongol empire, and ended with the Renaissance.</p>

      <hr>

      <h3>1. Byzantine Empire (330–1453 AD)</h3>
      <ul>
        <li>Eastern Roman Empire; capital <b>Constantinople</b> (founded by Constantine, 330 AD).</li>
        <li>Justinian I (527–565) — most famous emperor; <b>Justinian Code</b> (Corpus Juris Civilis) systematized Roman law; built <b>Hagia Sophia</b> at Constantinople (537).</li>
        <li>Preserved Greco-Roman heritage during European Dark Ages.</li>
        <li><b>Great Schism (1054)</b> — split between Roman Catholic and Eastern Orthodox Christianity.</li>
        <li><b>Fell in 1453</b> — Constantinople captured by Ottoman Sultan <b>Mehmed II "the Conqueror"</b>; renamed Istanbul.</li>
      </ul>

      <hr>

      <h3>2. Rise of Islam (570–632 AD)</h3>
      <ul>
        <li><b>Prophet Muhammad</b> born at <b>Mecca, ~570 AD</b>.</li>
        <li><b>610 AD</b> — first revelation in cave of Hira (angel Gabriel).</li>
        <li><b>622 AD</b> — <b>Hijra</b> (migration) from Mecca to Medina; Islamic calendar starts here.</li>
        <li><b>630 AD</b> — Muhammad returned to Mecca victoriously.</li>
        <li><b>632 AD</b> — Muhammad died at Medina.</li>
        <li>Five Pillars of Islam: Shahada (faith), Salat (prayer), Zakat (charity), Sawm (fasting Ramadan), Hajj (pilgrimage to Mecca).</li>
        <li>Quran — holy book; revealed to Muhammad over 23 years.</li>
      </ul>

      <h4>Islamic Caliphates</h4>
      <table>
        <tr><th>Caliphate</th><th>Period</th><th>Capital</th><th>Note</th></tr>
        <tr><td><b>Rashidun (Rightly Guided)</b></td><td>632–661</td><td>Medina, Kufa</td><td>4 caliphs — Abu Bakr, Umar, Uthman, Ali; conquests of Persia, Byzantine territories.</td></tr>
        <tr><td><b>Umayyad</b></td><td>661–750</td><td>Damascus</td><td>Reached Spain (711) and Sindh (712); first hereditary caliphate.</td></tr>
        <tr><td><b>Abbasid</b></td><td>750–1258</td><td>Baghdad</td><td>"Golden Age of Islam"; Harun al-Rashid (One Thousand and One Nights); House of Wisdom; mathematics (al-Khwarizmi — algebra), medicine (Avicenna/Ibn Sina), philosophy (al-Farabi, Averroes/Ibn Rushd). Sacked by Mongols (Hulagu Khan) 1258.</td></tr>
        <tr><td><b>Ottoman</b></td><td>1299–1924</td><td>Istanbul (Constantinople)</td><td>Took Constantinople 1453; greatest extent under Suleiman the Magnificent (1520–66).</td></tr>
      </table>

      <hr>

      <h3>3. Feudal Europe (Middle Ages)</h3>
      <ul>
        <li><b>Feudalism</b> — pyramid of land ownership: King → Barons (lords) → Knights → Serfs (peasants).</li>
        <li>Manor — basic economic unit; serfs worked the lord's land.</li>
        <li>Catholic Church — most powerful institution; Pope at Vatican; Latin language.</li>
        <li><b>Charlemagne</b> (768–814) — Frankish king; crowned <b>Holy Roman Emperor in 800 AD</b> by Pope Leo III; called "Father of Europe".</li>
        <li><b>Holy Roman Empire</b> (962–1806) — central European empire; Voltaire said it was "neither holy, nor Roman, nor an empire".</li>
        <li><b>Norman Conquest of England (1066)</b> — William the Conqueror won at <b>Battle of Hastings</b>; transformed English language and society.</li>
        <li><b>Magna Carta (1215)</b> — King John of England forced to sign by barons at Runnymede; limited royal power; first step toward modern democracy.</li>
        <li><b>Hundred Years' War (1337–1453)</b> — England vs France; <b>Joan of Arc</b> rallied French (1429); England lost; she was burned (1431).</li>
      </ul>

      <hr>

      <h3>4. The Crusades (1096–1291)</h3>
      <ul>
        <li>Religious wars by Western Europeans to recover the Holy Land (Jerusalem) from Muslim control.</li>
        <li>Called by Pope Urban II at Council of Clermont (1095).</li>
        <li>Eight major Crusades over ~200 years.</li>
        <li><b>First Crusade (1096–99)</b> — captured Jerusalem (1099).</li>
        <li><b>Saladin</b> (Salah-ud-din) recaptured Jerusalem (1187).</li>
        <li><b>Third Crusade (1189–92)</b> — Richard the Lionheart vs Saladin; ended in stalemate.</li>
        <li>Crusades ultimately failed; Europeans driven out of Holy Land by 1291.</li>
        <li>Effects: increased European contact with Asia; brought back paper, gunpowder, spices, silks; weakened feudal lords; rise of trade and towns.</li>
      </ul>

      <hr>

      <h3>5. Mongol Empire (1206–1368)</h3>
      <ul>
        <li><b>Genghis Khan (Temujin)</b> united Mongol tribes; declared "Khan of Khans" in 1206.</li>
        <li>Largest contiguous empire in history — from Korea to Hungary.</li>
        <li>Devastated cities; Mongol horde used to spread terror; but built efficient communication system (yam) and tolerated religions.</li>
        <li><b>Kublai Khan</b> (grandson) — founded <b>Yuan dynasty in China (1271–1368)</b>; capital Beijing (Khanbaliq); patron of <b>Marco Polo</b> (1271–95).</li>
        <li><b>Hulagu Khan</b> sacked Baghdad (1258), ending Abbasid Caliphate.</li>
        <li>Empire fragmented after Genghis's death; finally collapsed in mid-14th century.</li>
        <li><b>Timur (Tamerlane)</b> (1336–1405) — Turkish-Mongol; sacked Delhi 1398.</li>
      </ul>

      <hr>

      <h3>6. Black Death (1346–53)</h3>
      <ul>
        <li>Bubonic plague epidemic; killed ~25 million in Europe (~30–60% of population).</li>
        <li>Reached Europe via Mongol-Genoese trade routes from Asia.</li>
        <li>Effects: labor shortage; rise of peasant wages; weakening of feudal system; rise of vernacular literature; questioning of Church authority.</li>
      </ul>

      <hr>

      <h3>7. Renaissance (~1300–1600)</h3>
      <ul>
        <li>"Renaissance" = "Rebirth"; began in <b>Italy</b> (Florence, Venice, Rome) and spread north.</li>
        <li>Revival of classical Greek and Roman learning.</li>
        <li>Patronized by wealthy merchant families — <b>Medici</b> of Florence.</li>
        <li><b>Johannes Gutenberg</b> invented the <b>printing press (1440 AD)</b>; first book printed: Gutenberg Bible (1455). Revolutionized book production.</li>
        <li><b>Humanism</b> — focus on human potential; Erasmus, Thomas More.</li>
        <li>Scientific Revolution begins.</li>
      </ul>

      <h4>Renaissance Figures</h4>
      <table>
        <tr><th>Figure</th><th>Field</th><th>Famous Works</th></tr>
        <tr><td><b>Dante Alighieri</b> (1265–1321)</td><td>Italian poet</td><td>Divine Comedy</td></tr>
        <tr><td><b>Petrarch</b> (1304–74)</td><td>Italian poet</td><td>"Father of Humanism"</td></tr>
        <tr><td><b>Leonardo da Vinci</b> (1452–1519)</td><td>Painter, polymath</td><td>Mona Lisa, Last Supper, Vitruvian Man</td></tr>
        <tr><td><b>Michelangelo</b> (1475–1564)</td><td>Sculptor, painter</td><td>David, Pietà, Sistine Chapel ceiling</td></tr>
        <tr><td><b>Raphael</b> (1483–1520)</td><td>Painter</td><td>School of Athens</td></tr>
        <tr><td><b>Niccolò Machiavelli</b> (1469–1527)</td><td>Political theorist</td><td>The Prince (1513)</td></tr>
        <tr><td><b>Shakespeare</b> (1564–1616)</td><td>English playwright</td><td>Hamlet, Macbeth, Romeo and Juliet, etc.</td></tr>
        <tr><td><b>Erasmus</b> (1466–1536)</td><td>Dutch humanist</td><td>In Praise of Folly</td></tr>
      </table>

      <hr>

      <h3>8. Voyages of Discovery (~1450–1600)</h3>
      <ul>
        <li><b>Bartholomew Dias</b> (Portuguese) — rounded Cape of Good Hope (1487).</li>
        <li><b>Christopher Columbus</b> (Italian sailing for Spain) — reached America (1492); thought it was India.</li>
        <li><b>Vasco da Gama</b> (Portuguese) — reached Calicut, India (1498) by sea via Cape.</li>
        <li><b>Amerigo Vespucci</b> — Italian explorer; America named after him.</li>
        <li><b>Ferdinand Magellan</b> (Portuguese sailing for Spain) — first circumnavigation of globe (1519–22; he died in Philippines).</li>
        <li><b>Spanish conquests</b>: <b>Cortés</b> destroyed Aztec empire of Mexico (1519–21); <b>Pizarro</b> destroyed Inca empire of Peru (1532).</li>
        <li>Effects: European colonization of Americas; Columbian Exchange (potato, tomato, tobacco, maize, chocolate to Old World; horses, wheat, smallpox to New World); slave trade.</li>
      </ul>

      <hr>

      <h3>9. Reformation (1517–1648)</h3>
      <ul>
        <li><b>Martin Luther</b> (German monk) nailed his <b>95 Theses</b> to the door of Wittenberg church on <b>31 October 1517</b>; protested sale of indulgences; sparked Protestant Reformation.</li>
        <li><b>John Calvin</b> — Geneva; predestination doctrine.</li>
        <li><b>Henry VIII of England</b> — broke with Rome (1534) over divorce; established Church of England.</li>
        <li><b>Counter-Reformation</b> — Catholic response; Council of Trent (1545–63); Jesuits founded by <b>Ignatius Loyola</b> (1540).</li>
        <li>Religious wars in Europe followed; ended with Peace of Westphalia (1648).</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>The Renaissance and Reformation, combined with voyages of discovery, transformed Europe and laid the foundation for the modern world. The next topic — Modern World — covers the Scientific Revolution, the American and French Revolutions, the Industrial Revolution, the World Wars, and decolonization.</p>
    `,
    mcq: [
      { q: "Capital of Byzantine Empire was?", opts: ["Rome", "Constantinople", "Athens", "Alexandria"], a: 1, ex: "Constantinople — founded by Constantine in 330 AD; renamed Istanbul after Ottoman conquest 1453." },
      { q: "Justinian Code was a body of?", opts: ["Greek philosophy", "Roman law (Corpus Juris Civilis)", "Religious doctrine", "Mathematical theorems"], a: 1, ex: "Codified Roman law under Byzantine emperor Justinian I (527–565)." },
      { q: "Hagia Sophia was built by?", opts: ["Constantine", "Justinian I (537)", "Mehmed II", "Suleiman"], a: 1, ex: "Justinian I in 537 AD at Constantinople; converted to mosque by Ottomans 1453." },
      { q: "Constantinople fell to Ottomans in?", opts: ["1204", "1453", "1492", "1517"], a: 1, ex: "1453 — Sultan Mehmed II 'the Conqueror'." },
      { q: "Hijra (Muhammad's migration to Medina) occurred in?", opts: ["570 AD", "610 AD", "622 AD", "632 AD"], a: 2, ex: "622 AD — start of Islamic calendar (Hijri)." },
      { q: "Five Pillars of Islam do NOT include?", opts: ["Shahada", "Salat", "Hajj", "Jihad"], a: 3, ex: "Five Pillars: Shahada, Salat, Zakat, Sawm, Hajj. Jihad is not a pillar." },
      { q: "Capital of Abbasid Caliphate was?", opts: ["Damascus", "Mecca", "Baghdad", "Cairo"], a: 2, ex: "Baghdad (founded 762); 'Golden Age of Islam'; sacked by Mongols 1258." },
      { q: "Baghdad was sacked by Mongols in 1258 under?", opts: ["Genghis Khan", "Hulagu Khan", "Kublai Khan", "Timur"], a: 1, ex: "Hulagu Khan; ended Abbasid Caliphate." },
      { q: "Charlemagne was crowned Holy Roman Emperor in?", opts: ["476 AD", "800 AD", "1066", "1215"], a: 1, ex: "800 AD by Pope Leo III; called 'Father of Europe'." },
      { q: "Battle of Hastings (1066) was won by?", opts: ["Charlemagne", "William the Conqueror", "Saladin", "Richard the Lionheart"], a: 1, ex: "William of Normandy defeated Harold; Norman conquest of England." },
      { q: "Magna Carta was signed in?", opts: ["1066", "1215", "1453", "1517"], a: 1, ex: "1215 by King John of England at Runnymede; first step to modern democracy." },
      { q: "Joan of Arc rallied which side in Hundred Years' War?", opts: ["English", "French (1429)", "Burgundian", "Spanish"], a: 1, ex: "Led French to victory at Orleans (1429); burned at Rouen (1431)." },
      { q: "Crusades were primarily fought over?", opts: ["Constantinople", "Jerusalem (Holy Land)", "Spain", "Sicily"], a: 1, ex: "Holy Land — particularly Jerusalem; ~1096–1291; eight major crusades." },
      { q: "Saladin recaptured Jerusalem from Crusaders in?", opts: ["1099", "1187", "1271", "1453"], a: 1, ex: "1187; faced by Richard the Lionheart in Third Crusade." },
      { q: "Mongol empire was founded by?", opts: ["Kublai Khan", "Genghis Khan (Temujin)", "Hulagu Khan", "Timur"], a: 1, ex: "Genghis Khan declared Khan of Khans in 1206; largest contiguous empire ever." },
      { q: "Marco Polo visited the court of?", opts: ["Genghis Khan", "Kublai Khan (Yuan dynasty)", "Hulagu", "Timur"], a: 1, ex: "1271–95 at Khanbaliq (Beijing); described in 'Travels'." },
      { q: "Black Death (1346–53) killed about?", opts: ["10% of Europe", "30–60% of Europe", "Almost everyone", "<1%"], a: 1, ex: "Estimated 30–60%; ~25 million dead in Europe." },
      { q: "Printing press was invented by?", opts: ["Leonardo da Vinci", "Johannes Gutenberg (1440)", "Galileo", "Newton"], a: 1, ex: "Gutenberg in Germany; first major book Gutenberg Bible (1455)." },
      { q: "Renaissance began in which country?", opts: ["England", "Italy (Florence)", "France", "Germany"], a: 1, ex: "Italy — Florence, Venice, Rome; patronized by Medici family." },
      { q: "Mona Lisa was painted by?", opts: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"], a: 1, ex: "Leonardo da Vinci, ~1503–06." },
      { q: "Sistine Chapel ceiling was painted by?", opts: ["Leonardo", "Raphael", "Michelangelo", "Botticelli"], a: 2, ex: "Michelangelo — 1508–12; commissioned by Pope Julius II." },
      { q: "'The Prince' was written by?", opts: ["Erasmus", "Machiavelli (1513)", "Thomas More", "Petrarch"], a: 1, ex: "Niccolò Machiavelli — handbook of political realism." },
      { q: "Christopher Columbus reached America in?", opts: ["1487", "1492", "1498", "1519"], a: 1, ex: "12 October 1492; thought he had reached India." },
      { q: "Vasco da Gama reached Calicut in?", opts: ["1487", "1492", "1498", "1519"], a: 2, ex: "20 May 1498; first sea route from Europe to India." },
      { q: "First circumnavigation of globe was led by?", opts: ["Columbus", "Magellan (1519–22)", "Vasco da Gama", "Vespucci"], a: 1, ex: "Magellan; he died in Philippines; expedition completed by Elcano." },
      { q: "Aztec empire was destroyed by?", opts: ["Pizarro", "Cortés (1519–21)", "Magellan", "Vespucci"], a: 1, ex: "Hernán Cortés conquered Mexico; defeated Montezuma II." },
      { q: "Inca empire was destroyed by?", opts: ["Cortés", "Pizarro (1532)", "Vespucci", "Balboa"], a: 1, ex: "Francisco Pizarro conquered Peru; killed Atahualpa." },
      { q: "Martin Luther's 95 Theses (1517) sparked the?", opts: ["Renaissance", "Protestant Reformation", "Counter-Reformation", "Scientific Revolution"], a: 1, ex: "Nailed to Wittenberg church door, 31 October 1517; protested indulgences." },
      { q: "Jesuits were founded by?", opts: ["Martin Luther", "Calvin", "Ignatius Loyola (1540)", "Henry VIII"], a: 2, ex: "Society of Jesus (Jesuits) — founded 1540; Counter-Reformation order." }
    ]
  };

  T["wh-modern"] = {
    body: `
      <h3>Modern World (1500 – present)</h3>
      <p>The Modern World begins with the Renaissance and Voyages of Discovery (~1500), continues through the Scientific and Industrial Revolutions, the American and French Revolutions, two World Wars, and ends in our current era of globalization.</p>

      <hr>

      <h3>1. Scientific Revolution (1543–1700)</h3>
      <ul>
        <li><b>Nicolaus Copernicus</b> (1473–1543) — Polish astronomer; <b>heliocentric theory</b> (Sun at centre, not Earth); "On the Revolutions of the Celestial Spheres" (1543).</li>
        <li><b>Galileo Galilei</b> (1564–1642) — Italian; improved telescope; observed Jupiter's moons; supported Copernicus; condemned by Inquisition (1633).</li>
        <li><b>Johannes Kepler</b> (1571–1630) — three laws of planetary motion (elliptical orbits).</li>
        <li><b>Isaac Newton</b> (1642–1727) — laws of motion, universal gravitation; "Principia Mathematica" (1687).</li>
        <li><b>William Harvey</b> (1578–1657) — circulation of blood.</li>
        <li><b>Francis Bacon</b> (1561–1626) — empirical/scientific method.</li>
        <li><b>Rene Descartes</b> (1596–1650) — "Cogito, ergo sum"; modern philosophy.</li>
      </ul>

      <hr>

      <h3>2. Enlightenment (~1700s)</h3>
      <ul>
        <li>Age of Reason; emphasis on reason, science, individual rights, secularism.</li>
        <li><b>John Locke</b> — natural rights (life, liberty, property); social contract; influenced US Declaration of Independence.</li>
        <li><b>Voltaire</b> — French; freedom of speech, religious tolerance.</li>
        <li><b>Rousseau</b> — "Social Contract"; "Man is born free but everywhere is in chains".</li>
        <li><b>Montesquieu</b> — separation of powers (Spirit of the Laws).</li>
        <li><b>Adam Smith</b> — "Wealth of Nations" (1776); free-market economics.</li>
      </ul>

      <hr>

      <h3>3. American Revolution (1775–1783)</h3>
      <ul>
        <li>13 American colonies revolted against British rule.</li>
        <li>Causes: taxation without representation; Stamp Act (1765); Boston Tea Party (1773).</li>
        <li><b>4 July 1776</b> — <b>Declaration of Independence</b> (drafted by <b>Thomas Jefferson</b>).</li>
        <li><b>George Washington</b> led American forces; helped by France.</li>
        <li><b>Treaty of Paris (1783)</b> — Britain recognized American independence.</li>
        <li><b>US Constitution</b> drafted 1787; ratified 1788; Washington first President 1789.</li>
        <li><b>Bill of Rights</b> (first 10 amendments) — 1791.</li>
      </ul>

      <hr>

      <h3>4. French Revolution (1789–1799)</h3>
      <ul>
        <li>Causes: financial crisis; inequality (Three Estates — Clergy, Nobility, Commoners); Enlightenment ideas; American Revolution example.</li>
        <li><b>14 July 1789</b> — <b>Storming of the Bastille</b> (Bastille Day, French national day).</li>
        <li><b>August 1789</b> — <b>Declaration of the Rights of Man and Citizen</b>.</li>
        <li>Slogan: "<b>Liberty, Equality, Fraternity</b>" (Liberté, Égalité, Fraternité).</li>
        <li>King <b>Louis XVI</b> and queen <b>Marie Antoinette</b> guillotined (1793).</li>
        <li><b>Reign of Terror</b> (1793–94) under <b>Robespierre</b>.</li>
        <li>Republic established; later Directory; ended in <b>Napoleon's coup (1799)</b>.</li>
      </ul>

      <h4>Napoleonic Era (1799–1815)</h4>
      <ul>
        <li><b>Napoleon Bonaparte</b> (1769–1821) — Corsican; rose through army; First Consul (1799); Emperor (1804).</li>
        <li><b>Napoleonic Code (1804)</b> — modernized French law; influenced civil codes worldwide.</li>
        <li>Conquered most of Europe.</li>
        <li>Defeated in <b>Russian Campaign (1812)</b>; <b>Battle of Leipzig (1813)</b>; finally <b>Battle of Waterloo (18 June 1815)</b> by Wellington and Blücher.</li>
        <li>Exiled to <b>St. Helena</b>; died there (1821).</li>
      </ul>

      <hr>

      <h3>5. Industrial Revolution (~1760–1840)</h3>
      <ul>
        <li>Began in <b>Britain</b>; spread to Europe, USA, Japan.</li>
        <li>Shift from agricultural/handicraft to factory/machine production.</li>
        <li>Key inventions:
          <ul>
            <li><b>Spinning Jenny</b> (Hargreaves, 1764).</li>
            <li><b>Water frame</b> (Arkwright, 1769).</li>
            <li><b>Steam engine</b> (improved by James Watt, 1769).</li>
            <li><b>Power loom</b> (Edmund Cartwright, 1785).</li>
            <li><b>Cotton gin</b> (Eli Whitney, 1793).</li>
            <li><b>Steam locomotive</b> (George Stephenson, 1814).</li>
          </ul>
        </li>
        <li>Effects: urbanization; factory system; rise of working class; child labour; pollution; capitalism vs socialism debates.</li>
        <li><b>Karl Marx</b> (1818–83) — German philosopher; <b>Communist Manifesto (1848)</b> with Friedrich Engels; <b>Das Kapital (1867)</b>; "Workers of the world, unite!".</li>
      </ul>

      <hr>

      <h3>6. 19th Century — Major Movements</h3>

      <h4>Unification of Italy (1861) and Germany (1871)</h4>
      <ul>
        <li><b>Italian unification (Risorgimento)</b> — under <b>Cavour</b> (statesman) and <b>Garibaldi</b> (military); King Victor Emmanuel II became first king of unified Italy (1861).</li>
        <li><b>German unification</b> — by <b>Otto von Bismarck</b> ("Iron Chancellor"); through "blood and iron"; defeated Austria (1866) and France (1870 Franco-Prussian War); German Empire proclaimed at Versailles (18 January 1871) under Kaiser Wilhelm I.</li>
      </ul>

      <h4>American Civil War (1861–65)</h4>
      <ul>
        <li>Northern (Union) vs Southern (Confederacy) states; over slavery and states' rights.</li>
        <li><b>Abraham Lincoln</b> elected 1860; issued <b>Emancipation Proclamation (1 January 1863)</b> freeing slaves.</li>
        <li>Battle of Gettysburg (1863); Lincoln's Gettysburg Address.</li>
        <li>Confederate Robert E. Lee surrendered to Ulysses Grant at Appomattox (April 1865).</li>
        <li>Lincoln assassinated by John Wilkes Booth (14 April 1865).</li>
        <li>13th Amendment abolished slavery (1865).</li>
      </ul>

      <h4>Russian Revolution (1917)</h4>
      <ul>
        <li>February Revolution (March 1917) — Tsar Nicholas II abdicated; Provisional Government.</li>
        <li><b>October Revolution (7 November 1917)</b> — <b>Bolsheviks under Lenin</b> seized power; world's first communist government.</li>
        <li>Tsar and family executed (1918).</li>
        <li><b>Treaty of Brest-Litovsk (1918)</b> — Russia withdrew from WWI.</li>
        <li><b>USSR established 1922</b>; Lenin → Stalin → Khrushchev → Gorbachev.</li>
        <li>USSR dissolved 1991.</li>
      </ul>

      <h4>Meiji Restoration in Japan (1868)</h4>
      <ul>
        <li>Emperor Meiji restored to power; ended Tokugawa Shogunate.</li>
        <li>Rapid Westernization and industrialization.</li>
        <li>Defeated China (Sino-Japanese War 1894–95) and Russia (Russo-Japanese War 1904–05) — first Asian power to defeat European in modern era.</li>
      </ul>

      <hr>

      <h3>7. World War I (1914–1918)</h3>
      <ul>
        <li><b>Causes</b>: nationalism, alliances (Triple Alliance: Germany-Austria-Italy vs Triple Entente: France-Russia-Britain), imperialism, militarism.</li>
        <li><b>Trigger</b>: assassination of <b>Archduke Franz Ferdinand</b> of Austria-Hungary at Sarajevo (28 June 1914) by <b>Gavrilo Princip</b> (Serbian).</li>
        <li><b>Allies</b>: Britain, France, Russia (later USSR), USA (1917), Italy (switched 1915), Japan, etc.</li>
        <li><b>Central Powers</b>: Germany, Austria-Hungary, Ottoman Empire, Bulgaria.</li>
        <li>Major battles: Marne (1914), Verdun (1916), Somme (1916), Gallipoli (1915–16, against Ottomans).</li>
        <li>USA entered after sinking of <i>Lusitania</i> (1915) and Zimmermann telegram (1917).</li>
        <li><b>11 November 1918</b> — Germany surrendered (Armistice Day).</li>
        <li><b>Treaty of Versailles (28 June 1919)</b> — Germany blamed; lost colonies; paid reparations; lost territory; military restricted.</li>
        <li><b>League of Nations</b> founded (1920) — proposed by US President <b>Woodrow Wilson's 14 Points</b> — but USA never joined.</li>
        <li>Casualties: ~20 million dead (military + civilian).</li>
      </ul>

      <hr>

      <h3>8. Interwar Years (1919–1939)</h3>
      <ul>
        <li>Russian Revolution and rise of USSR.</li>
        <li>Great Depression (1929–39) — started with Wall Street Crash (29 Oct 1929 "Black Tuesday").</li>
        <li>Rise of fascism — <b>Mussolini</b> in Italy (March on Rome, 1922; Il Duce).</li>
        <li>Rise of Nazism — <b>Adolf Hitler</b> in Germany (Chancellor 1933; Führer 1934).</li>
        <li><b>Spanish Civil War (1936–39)</b> — Francisco Franco's Nationalists won.</li>
        <li>Japan invaded Manchuria (1931), China (1937).</li>
        <li>Hitler annexed Austria (Anschluss, 1938), Czechoslovakia (1939).</li>
        <li><b>Munich Agreement (1938)</b> — appeasement of Hitler; Chamberlain's "Peace for our time".</li>
      </ul>

      <hr>

      <h3>9. World War II (1939–1945)</h3>
      <ul>
        <li><b>Trigger</b>: Germany invaded <b>Poland on 1 September 1939</b>; Britain and France declared war 3 September.</li>
        <li><b>Allies</b>: UK, France, USSR (from 1941), USA (from December 1941), China.</li>
        <li><b>Axis</b>: Germany, Italy, Japan.</li>
        <li>Major events:
          <ul>
            <li>Fall of France (June 1940); Battle of Britain (1940); Operation Barbarossa (Hitler invaded USSR, June 1941).</li>
            <li><b>Pearl Harbor (7 December 1941)</b> — Japan attacked; USA entered war.</li>
            <li><b>Battle of Stalingrad (1942–43)</b> — turning point on Eastern Front; German defeat.</li>
            <li><b>D-Day (6 June 1944)</b> — Allied invasion of Normandy; opened Western Front.</li>
            <li>Soviet armies took Berlin; Hitler committed suicide (30 April 1945).</li>
            <li><b>VE Day (8 May 1945)</b> — Germany surrendered.</li>
            <li><b>Atomic bombs</b> on <b>Hiroshima (6 Aug 1945)</b> and <b>Nagasaki (9 Aug 1945)</b> by USA.</li>
            <li><b>VJ Day (15 August 1945)</b> — Japan surrendered (formal 2 September).</li>
          </ul>
        </li>
        <li><b>Holocaust</b> — Nazi genocide of ~6 million Jews and 5 million others.</li>
        <li>Casualties: ~75 million dead (largest war in history).</li>
        <li><b>Yalta Conference (Feb 1945)</b> — FDR, Churchill, Stalin; post-war division of Europe.</li>
        <li><b>Potsdam Conference (July–Aug 1945)</b> — Truman, Attlee, Stalin.</li>
        <li><b>UN Charter signed at San Francisco</b> on 26 June 1945; <b>UN founded 24 October 1945</b>.</li>
      </ul>

      <hr>

      <h3>10. Cold War (1945–1991)</h3>
      <ul>
        <li>Ideological rivalry between USA (capitalism) and USSR (communism).</li>
        <li>"<b>Iron Curtain</b>" — Churchill's term (1946).</li>
        <li><b>Truman Doctrine (1947)</b> and <b>Marshall Plan (1948)</b> — US containment of communism.</li>
        <li><b>Berlin Blockade (1948–49)</b> — Soviet blockade of West Berlin; Berlin Airlift.</li>
        <li><b>NATO (1949)</b>; <b>Warsaw Pact (1955)</b>.</li>
        <li><b>Korean War (1950–53)</b> — divided into N. Korea (communist) and S. Korea.</li>
        <li><b>Vietnam War (1955–75)</b> — US lost; Vietnam unified under communism.</li>
        <li><b>Cuban Missile Crisis (1962)</b> — closest to nuclear war.</li>
        <li><b>Sputnik (1957)</b> — Soviet first satellite; sparked space race.</li>
        <li><b>Apollo 11 (20 July 1969)</b> — Americans <b>Neil Armstrong</b> and <b>Buzz Aldrin</b> landed on Moon; "One small step for man, one giant leap for mankind".</li>
        <li><b>Berlin Wall built (1961)</b>; <b>fell 9 November 1989</b>.</li>
        <li><b>USSR dissolved 25 December 1991</b> under <b>Mikhail Gorbachev</b> (Glasnost, Perestroika); 15 republics independent.</li>
      </ul>

      <hr>

      <h3>11. Decolonization (1945–1975)</h3>
      <ul>
        <li>Most Asian and African colonies gained independence after WWII.</li>
        <li><b>India</b> (1947) and Pakistan (1947) — first major decolonizations.</li>
        <li>Indonesia (1945–49 from Dutch).</li>
        <li>African decolonization: Ghana (1957, first sub-Saharan; Nkrumah), Kenya, Algeria (1962 from France), South Africa (apartheid ended 1994 under Nelson Mandela).</li>
        <li>Vietnam, China, Indonesia, Egypt, Algeria — anti-colonial revolutions.</li>
      </ul>

      <hr>

      <h3>12. Recent History (1991–present)</h3>
      <ul>
        <li>End of Cold War; USA as sole superpower.</li>
        <li>European Union (Maastricht Treaty, 1992); Euro currency (1999/2002).</li>
        <li><b>9/11 (11 September 2001)</b> — Al-Qaeda attacks on US; led to Afghanistan War (2001–21) and Iraq War (2003).</li>
        <li>Rise of China as economic superpower.</li>
        <li>Arab Spring (2010–11).</li>
        <li>Brexit (UK left EU, 2016/2020).</li>
        <li>COVID-19 pandemic (2020–22).</li>
        <li>Russia-Ukraine War (2022–present).</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>This concludes Modern World History at SSC CGL level. The next major shifts in world history continue to unfold — climate change, AI, geopolitical shifts to Asia. With this we close the History section of General Awareness.</p>
    `,
    mcq: [
      { q: "Heliocentric theory was proposed by?", opts: ["Galileo", "Copernicus (1543)", "Kepler", "Newton"], a: 1, ex: "Nicolaus Copernicus — 'On the Revolutions of the Celestial Spheres' (1543)." },
      { q: "Newton's Principia Mathematica was published in?", opts: ["1543", "1687", "1776", "1859"], a: 1, ex: "1687 — Isaac Newton's laws of motion and universal gravitation." },
      { q: "American Declaration of Independence was on?", opts: ["4 July 1776", "14 July 1789", "1 January 1788", "11 November 1918"], a: 0, ex: "Drafted by Thomas Jefferson; signed 4 July 1776 — US national day." },
      { q: "First US President was?", opts: ["Thomas Jefferson", "Benjamin Franklin", "George Washington", "John Adams"], a: 2, ex: "George Washington, sworn in 1789." },
      { q: "Storming of Bastille (French Revolution) was on?", opts: ["4 July 1776", "14 July 1789", "1 May 1789", "10 August 1792"], a: 1, ex: "14 July 1789 — French national day." },
      { q: "Slogan of French Revolution was?", opts: ["Bread, Peace, Land", "Liberty, Equality, Fraternity", "Workers of the world unite", "Life, Liberty, Property"], a: 1, ex: "Liberté, Égalité, Fraternité." },
      { q: "Napoleon was finally defeated at?", opts: ["Trafalgar", "Leipzig", "Waterloo (1815)", "Borodino"], a: 2, ex: "Battle of Waterloo, 18 June 1815, by Wellington and Blücher." },
      { q: "Steam engine was improved by?", opts: ["Hargreaves", "James Watt (1769)", "Stephenson", "Cartwright"], a: 1, ex: "James Watt — separate condenser, increased efficiency." },
      { q: "Communist Manifesto (1848) was written by?", opts: ["Marx alone", "Marx & Engels", "Lenin", "Trotsky"], a: 1, ex: "Karl Marx and Friedrich Engels." },
      { q: "Italy was unified in?", opts: ["1815", "1848", "1861", "1871"], a: 2, ex: "1861 — Cavour and Garibaldi; King Victor Emmanuel II." },
      { q: "Germany was unified in?", opts: ["1815", "1848", "1861", "1871"], a: 3, ex: "1871 by Bismarck — proclaimed at Versailles after Franco-Prussian War." },
      { q: "Otto von Bismarck was called?", opts: ["Iron Chancellor", "Iron Lady", "Father of Europe", "Tiger of Germany"], a: 0, ex: "'Iron Chancellor'; unified Germany through 'blood and iron'." },
      { q: "American Civil War was fought over?", opts: ["Independence", "Slavery and states' rights", "British rule", "Religion"], a: 1, ex: "Union (North) vs Confederacy (South); 1861–65; Lincoln's Emancipation Proclamation 1863." },
      { q: "Lincoln was assassinated in?", opts: ["1860", "1861", "1865", "1872"], a: 2, ex: "14 April 1865 by John Wilkes Booth at Ford's Theatre." },
      { q: "Russian October Revolution (1917) was led by?", opts: ["Tsar", "Kerensky", "Lenin (Bolsheviks)", "Stalin"], a: 2, ex: "Vladimir Lenin; world's first communist government; 7 November 1917." },
      { q: "Trigger of WWI was assassination of?", opts: ["Tsar Nicholas", "Kaiser Wilhelm", "Archduke Franz Ferdinand (June 1914)", "Hitler"], a: 2, ex: "Franz Ferdinand of Austria-Hungary at Sarajevo by Gavrilo Princip." },
      { q: "WWI ended on?", opts: ["28 June 1919 (Versailles)", "11 November 1918 (Armistice Day)", "8 May 1945", "15 August 1945"], a: 1, ex: "Armistice 11 November 1918; Treaty of Versailles signed 28 June 1919." },
      { q: "League of Nations was founded after?", opts: ["WWI (1920)", "WWII", "Cold War", "American Revolution"], a: 0, ex: "1920, after WWI; proposed by US President Woodrow Wilson; USA never joined." },
      { q: "WWII was triggered by?", opts: ["Hitler invading Czechoslovakia", "Germany invading Poland (1 Sep 1939)", "Pearl Harbor", "Munich Agreement"], a: 1, ex: "1 September 1939; Britain and France declared war on Germany." },
      { q: "Pearl Harbor attack was on?", opts: ["1 September 1939", "7 December 1941", "6 June 1944", "8 May 1945"], a: 1, ex: "Japan attacked US fleet at Pearl Harbor, Hawaii; USA entered WWII." },
      { q: "Battle of Stalingrad was a turning point against?", opts: ["Italy", "Germany (1942–43)", "Japan", "USSR"], a: 1, ex: "Soviet victory; turning point on Eastern Front." },
      { q: "D-Day (Normandy) was on?", opts: ["6 June 1944", "8 May 1945", "15 August 1945", "1 September 1939"], a: 0, ex: "Allied invasion of France; Operation Overlord." },
      { q: "Atomic bombs were dropped on Hiroshima and Nagasaki on?", opts: ["6 & 9 August 1945", "1 & 2 September 1939", "8 May & 15 Aug 1945", "1 & 6 June 1944"], a: 0, ex: "Hiroshima 6 August 1945, Nagasaki 9 August 1945 — by USA." },
      { q: "United Nations was founded on?", opts: ["8 May 1945", "24 October 1945", "1 January 1946", "26 June 1945"], a: 1, ex: "24 October 1945 — celebrated as UN Day. UN Charter signed 26 June 1945 at San Francisco." },
      { q: "First man on the Moon was?", opts: ["Yuri Gagarin", "Neil Armstrong (20 July 1969)", "Buzz Aldrin", "John Glenn"], a: 1, ex: "Neil Armstrong, Apollo 11; 'One small step for man, one giant leap for mankind'." },
      { q: "First man in space was?", opts: ["Yuri Gagarin (12 April 1961)", "Neil Armstrong", "John Glenn", "Alan Shepard"], a: 0, ex: "Yuri Gagarin (USSR) on 12 April 1961 in Vostok 1." },
      { q: "Berlin Wall fell on?", opts: ["1961", "9 November 1989", "1991", "1992"], a: 1, ex: "9 November 1989 — symbolic end of Cold War." },
      { q: "USSR dissolved in?", opts: ["1989", "1990", "1991", "1992"], a: 2, ex: "25 December 1991 under Gorbachev; 15 republics independent." },
      { q: "9/11 attacks occurred in?", opts: ["1989", "1991", "2001", "2003"], a: 2, ex: "11 September 2001 — Al-Qaeda attacks on World Trade Center and Pentagon." }
    ]
  };

})();
