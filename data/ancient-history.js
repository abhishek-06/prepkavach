// Ancient Indian History — SSC CGL
(function() {
  const T = window.TOPICS;

  const fig = (file, caption, w) => {
    const width = w || 600;
    const url = "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(file) + "?width=" + width;
    return '<figure><img src="' + url + '" alt="' + caption + '" loading="lazy"><figcaption>' + caption + '</figcaption></figure>';
  };
  const figRow = (items) => '<div class="img-row">' + items.map(([f, c]) => fig(f, c, 400)).join("") + '</div>';

  T["ah-dates-basics"] = {
    body: `
      <h2>How to Read History Dates — BC, AD, CE, BCE</h2>
      <p><i>(पहले यह पढ़ लो — फिर हर topic आसान लगेगी)</i></p>

      <h3>क्यों ज़रूरी है? (Why this matters)</h3>
      <p>हर history topic में dates आते हैं — "563 BC में Buddha का जन्म", "1526 AD में Babur ने Panipat जीता"। अगर आप BC और AD समझ नहीं पाए तो पूरी timeline उल्टी-पुल्टी हो जाएगी।</p>

      <h3>The Big Picture — एक Number Line</h3>
      <p>एक लम्बी रेखा सोचिए। बीच में है <b>Year 1 AD</b> (Christ का birth year, approximately)।</p>
      <ul>
        <li>रेखा के <b>left</b> side सब <b>BC</b> है — older / पुराना समय</li>
        <li>रेखा के <b>right</b> side सब <b>AD</b> है — newer / नया समय</li>
      </ul>
      <pre style="background:#f1f5f9;padding:0.6rem;border-radius:6px;overflow-x:auto;font-size:0.85rem;">
पुराना (Older) ←————————————————————————————————→ नया (Newer)
   3000 BC      1000 BC     1 BC | 1 AD     1000 AD     2026 AD
                              ↑
                       Christ का birth (year 1)
      </pre>

      <h3>BC — Before Christ (ईसा-पूर्व)</h3>
      <ul>
        <li>"Christ के पहले का time"</li>
        <li><b>Bigger BC number = OLDER</b> (ज़्यादा पुराना)</li>
        <li>उदाहरण: <b>3000 BC, 500 BC से पुराना है</b> (because 3000 &gt; 500, और दोनों BC हैं)</li>
        <li>Trick: BC = "Back-Counting" — पीछे की तरफ़ गिनती</li>
      </ul>

      <h3>AD — Anno Domini (Latin: "in the year of the Lord")</h3>
      <ul>
        <li>"Christ के बाद का time"</li>
        <li><b>Bigger AD number = MORE RECENT</b> (ज़्यादा नया)</li>
        <li>उदाहरण: <b>2026 AD, 1947 AD से नया है</b></li>
        <li>Trick: AD = "After Date" — सीधी गिनती</li>
      </ul>

      <h3>Quick Examples (Indian History)</h3>
      <table>
        <tr><th>Event</th><th>Date</th><th>आज से कितने साल पहले?</th></tr>
        <tr><td>Indus Valley peak</td><td>~2500 BC</td><td>~4,500 साल पहले</td></tr>
        <tr><td>Buddha का जन्म</td><td>563 BC</td><td>~2,589 साल पहले</td></tr>
        <tr><td>Chandragupta Maurya का राज्य</td><td>322 BC</td><td>~2,348 साल पहले</td></tr>
        <tr><td>Ashoka का Kalinga War</td><td>261 BC</td><td>~2,287 साल पहले</td></tr>
        <tr><td>Gupta dynasty शुरू</td><td>320 AD</td><td>~1,706 साल पहले</td></tr>
        <tr><td>Akbar का जन्म</td><td>1542 AD</td><td>~484 साल पहले</td></tr>
        <tr><td>1857 Revolt</td><td>1857 AD</td><td>~169 साल पहले</td></tr>
        <tr><td>India Independence</td><td>1947 AD</td><td>79 साल पहले</td></tr>
      </table>
      <p><b>Calculation trick</b>:</p>
      <ul>
        <li><b>BC date</b> → Years ago = 2026 + BC year. (e.g., 500 BC → 500 + 2026 = 2526 साल पहले)</li>
        <li><b>AD date</b> → Years ago = 2026 − AD year. (e.g., 1947 AD → 2026 − 1947 = 79 साल पहले)</li>
      </ul>

      <h3>CE और BCE क्या है?</h3>
      <p>Modern textbooks (NCERT included) में अब CE/BCE भी देखते हैं — meaning वही है, बस naming secular है।</p>
      <table>
        <tr><th>Old (religious)</th><th>New (secular)</th><th>Meaning</th></tr>
        <tr><td>BC (Before Christ)</td><td>BCE (Before Common Era)</td><td>Same — older time</td></tr>
        <tr><td>AD (Anno Domini)</td><td>CE (Common Era)</td><td>Same — newer time</td></tr>
      </table>
      <p>👉 <b>Numbers बिल्कुल नहीं बदलते</b>। 322 BC = 322 BCE। 1947 AD = 1947 CE।</p>

      <h3>Centuries समझना</h3>
      <p>"Century" matlab 100 साल का block.</p>
      <ul>
        <li><b>1st century AD</b> = years 1 to 100 AD</li>
        <li><b>21st century AD</b> = years 2001 to 2100 AD (हम यहाँ हैं)</li>
        <li><b>6th century BC</b> = years 600 BC to 501 BC (Buddha-Mahavira का time)</li>
      </ul>
      <p><b>Formula</b>: Century = Math.ceil(Year ÷ 100)</p>
      <ul>
        <li>563 BC → 6th century BC ✓</li>
        <li>1857 AD → 19th century AD ✓</li>
        <li>2026 AD → 21st century AD ✓</li>
      </ul>

      <h3>Bird's-eye view: Indian History Timeline</h3>
      <p>यह table याद कर लो — पूरी history एक नज़र में आ जाएगी।</p>
      <table>
        <tr><th>Period</th><th>When</th><th>Key event</th></tr>
        <tr><td>Stone Age / Prehistoric</td><td>~2.5 million BC – 3500 BC</td><td>Tools, Bhimbetka paintings</td></tr>
        <tr><td>Indus Valley Civilization</td><td>~2500 BC – 1900 BC</td><td>Harappa, Mohenjo-daro</td></tr>
        <tr><td>Vedic Age</td><td>~1500 BC – 600 BC</td><td>Rigveda, Aryans</td></tr>
        <tr><td>Buddhism / Mahajanapadas</td><td>~600 BC – 322 BC</td><td>Buddha, Mahavira, 16 kingdoms</td></tr>
        <tr><td>Mauryan Empire</td><td>322 BC – 185 BC</td><td>Chandragupta, Ashoka</td></tr>
        <tr><td>Post-Maurya</td><td>185 BC – 320 AD</td><td>Shungas, Satavahanas, Kushanas</td></tr>
        <tr><td>Gupta (Golden Age)</td><td>320 AD – 550 AD</td><td>Samudragupta, Kalidasa</td></tr>
        <tr><td>Early Medieval</td><td>750 AD – 1206 AD</td><td>Rashtrakutas, Cholas</td></tr>
        <tr><td>Delhi Sultanate</td><td>1206 – 1526</td><td>5 dynasties (Slave, Khilji, Tughlaq, Sayyid, Lodi)</td></tr>
        <tr><td>Mughal Empire</td><td>1526 – 1857</td><td>Babur, Akbar, Aurangzeb</td></tr>
        <tr><td>British Period</td><td>1757 – 1947</td><td>East India Co., British Raj</td></tr>
        <tr><td>Independent India</td><td>1947 onwards</td><td>Republic since 1950</td></tr>
      </table>

      <hr>

      <h3>🧠 याद कैसे रखें? (Memory Tricks)</h3>
      <ul>
        <li><b>"BC उल्टा गिनो, AD सीधा गिनो"</b> — BC = bigger number means older; AD = bigger number means newer.</li>
        <li><b>1 BC के तुरंत बाद 1 AD आता है</b> — कोई year 0 नहीं है। यानि 1 BC → 1 AD direct jump।</li>
        <li><b>BCE = BC, CE = AD</b> — सिर्फ़ naming change, dates same।</li>
        <li>Centuries के लिए: 19th century AD = 1801 to 1900। यानी "जो century चल रही है उसका number = (current year ÷ 100) round-up"।</li>
        <li><b>Story to remember timeline</b>: सोचो एक movie — पहले Stone Age caveman → फिर Indus Valley (planned cities) → Vedic Aryans (cattle, mantras) → Buddha (peace) → Mauryas (empire) → Guptas (golden age) → Sultanate (Muslims came) → Mughals (Akbar etc.) → British → Independence. यह sequence याद रहेगा।</li>
      </ul>
    `,
    mcq: [
      { q: "BC stands for?", opts: ["Before Christ", "Before Calendar", "Backward Counting", "Before Crisis"], a: 0, ex: "BC = Before Christ — ईसा-पूर्व।" },
      { q: "AD stands for?", opts: ["After Death", "Anno Domini (Latin)", "After Date", "Average Decade"], a: 1, ex: "Anno Domini = 'in the year of the Lord'." },
      { q: "Which is older?", opts: ["500 BC", "100 BC", "100 AD", "500 AD"], a: 0, ex: "BC में bigger number = older. 500 BC सबसे पुराना।" },
      { q: "Which is most recent?", opts: ["500 BC", "100 BC", "100 AD", "500 AD"], a: 3, ex: "AD में bigger number = more recent." },
      { q: "CE means?", opts: ["Christian Era", "Common Era (= AD)", "Century End", "Calendar Era"], a: 1, ex: "CE = Common Era; same dates as AD." },
      { q: "BCE means?", opts: ["Before Christian Era", "Before Common Era (= BC)", "Before Calendar Event", "Backward Common Era"], a: 1, ex: "BCE = Before Common Era; same as BC." },
      { q: "How many years between 500 BC and 500 AD?", opts: ["0 (same)", "500", "1000", "999"], a: 2, ex: "500 + 500 = 1000 years (no year 0)." },
      { q: "Buddha (563 BC) lived in which century BC?", opts: ["4th", "5th", "6th", "7th"], a: 2, ex: "563 BC = 6th century BC (years 600 to 501 BC)." },
      { q: "1947 AD belongs to which century?", opts: ["18th", "19th", "20th", "21st"], a: 2, ex: "20th century AD = years 1901 to 2000." },
      { q: "Year between 1 BC and 1 AD?", opts: ["0 AD", "0 BC", "No year exists (direct jump)", "Both 0 AD and 0 BC"], a: 2, ex: "1 BC के तुरंत बाद 1 AD आता है — year 0 नहीं है।" },
      { q: "Mauryan Empire (322 BC – 185 BC) lasted how many years?", opts: ["100", "137", "185", "322"], a: 1, ex: "322 − 185 = 137 years." },
      { q: "Indus Valley peak (~2500 BC) is approximately how many years ago (in 2026 AD)?", opts: ["~1000", "~2500", "~4500", "~5000"], a: 2, ex: "2500 + 2026 ≈ 4500 years ago." },
      { q: "Akbar's reign (1556–1605 AD) is approximately how many years ago?", opts: ["~100", "~250", "~470", "~700"], a: 2, ex: "2026 − 1556 ≈ 470 years ago." },
      { q: "Which order is chronologically correct (oldest first)?", opts: ["Mauryas → Indus Valley → Mughals", "Indus Valley → Mauryas → Mughals", "Mughals → Mauryas → Indus Valley", "Indus Valley → Mughals → Mauryas"], a: 1, ex: "Indus Valley (2500 BC) → Mauryas (322 BC) → Mughals (1526 AD)." },
      { q: "Gupta dynasty (320 AD) and Mauryan dynasty (322 BC) are how many years apart (start dates)?", opts: ["~322 years", "~642 years", "~1000 years", "~2026 years"], a: 1, ex: "322 + 320 ≈ 642 years (one BC, one AD, no year 0)." }
    ]
  };

  T["ah-sources"] = {
    body: `
      ${figRow([
        ["Ashoka's Major Rock Edict, Girnar Gujarat 001.jpg", "Ashokan Rock Edict, Junagadh — example of an inscription"],
        ["Indus_seal_impression.jpg", "Indus Valley seal — example of archaeological source"]
      ])}
      <h3>Why Study Sources?</h3>
      <p>Unlike modern history (which is documented by newspapers, archives, photographs), ancient Indian history must be reconstructed from <b>fragments</b>: ruined cities, broken inscriptions, undeciphered scripts, manuscripts copied across centuries, and traveler accounts. Historians divide these into three groups: <b>Literary, Archaeological, and Foreign Accounts</b>.</p>

      <hr>

      <h3>1. Literary Sources</h3>

      <h4>A. Religious Literature</h4>
      <table>
        <tr><th>Tradition</th><th>Major Texts</th><th>Period</th></tr>
        <tr><td><b>Hindu / Brahmanical</b></td><td>Vedas (Rig, Sama, Yajur, Atharva), Brahmanas, Aranyakas, Upanishads, Vedangas (6), Smritis (Manu, Yajnavalkya, Narada), Puranas (18), Epics (Mahabharata, Ramayana), Bhagavad Gita</td><td>1500 BC – 500 AD</td></tr>
        <tr><td><b>Buddhist</b></td><td>Tripitakas (Vinaya, Sutta, Abhidhamma — in Pali); Jatakas (~550 stories of Buddha's previous lives); Dipavamsa, Mahavamsa (Sri Lankan chronicles); Milindapanho (Greek-Buddhist dialogue); Divyavadana</td><td>500 BC – 500 AD</td></tr>
        <tr><td><b>Jain</b></td><td>14 Purvas (lost); 12 Angas; Upangas; Kalpasutra (Bhadrabahu); Bhagavati Sutra; Acharanga Sutra (in Prakrit/Ardhamagadhi)</td><td>500 BC – 500 AD</td></tr>
      </table>

      <h4>B. Secular Literature</h4>
      <ul>
        <li><b>Arthashastra</b> by <b>Kautilya / Chanakya</b> (4th century BC) — classic of statecraft; Mauryan administration.</li>
        <li><b>Indica</b> by <b>Megasthenes</b> (Seleucid envoy at Mauryan court) — Greek; original lost; survives in fragments cited by Strabo, Arrian, Diodorus.</li>
        <li><b>Astadhyayi</b> by <b>Panini</b> (~5th century BC) — Sanskrit grammar; gives geographical and political insights.</li>
        <li><b>Mahabhashya</b> by <b>Patanjali</b> (~2nd century BC) — commentary on Panini.</li>
        <li><b>Mudrarakshasa</b> by <b>Vishakhadatta</b> — Sanskrit play; Mauryan succession.</li>
        <li><b>Mricchakatika</b> by <b>Shudraka</b> — social play.</li>
        <li><b>Rajatarangini</b> by <b>Kalhana</b> (12th century AD) — history of Kashmir; closest to a modern historical chronicle.</li>
        <li><b>Harshacharita</b> by <b>Banabhatta</b> — biography of Harsha.</li>
        <li><b>Vikramankadeva Charita</b> by <b>Bilhana</b> — history of Chalukya Vikramaditya VI.</li>
        <li><b>Prithviraj Raso</b> by <b>Chand Bardai</b> — about Prithviraj Chauhan.</li>
        <li>Kalidasa's plays and poems (<i>Abhijnanashakuntalam, Raghuvamsha, Meghaduta</i>) — Gupta court life.</li>
      </ul>

      <h4>C. Sangam Literature (Tamil)</h4>
      <ul>
        <li>3 Sangams at Madurai (under Pandyas); only 3rd Sangam works survived.</li>
        <li><b>Tolkappiyam</b> — oldest extant Tamil grammar; by Tolkappiyar.</li>
        <li><b>Ettutogai (Eight Anthologies)</b> and <b>Pattupattu (Ten Idylls)</b>.</li>
        <li>Five great Tamil epics: <b>Silappadikaram</b> (Ilango Adigal), <b>Manimekalai</b> (Sittalai Sattanar), Civaka Cintamani, Valayapathi, Kundalakesi.</li>
      </ul>

      <hr>

      <h3>2. Archaeological Sources</h3>

      <h4>A. Inscriptions (Epigraphy)</h4>
      <p>Most reliable source — fixed in time and place. Read by epigraphists.</p>
      <table>
        <tr><th>Inscription</th><th>King</th><th>Significance</th></tr>
        <tr><td><b>Ashokan Edicts (14 Major Rock + 7 Pillar + Minor)</b></td><td>Ashoka (3rd c. BC)</td><td>Earliest large-scale public inscriptions; in <b>Brahmi (most), Kharosthi (NW), Greek & Aramaic (Kandahar)</b>.</td></tr>
        <tr><td><b>Hathigumpha Inscription</b> (Udayagiri, Odisha)</td><td>Kharavela (Kalinga, ~1st c. BC)</td><td>Records his career; Jain patron.</td></tr>
        <tr><td><b>Junagadh Rock Inscription</b></td><td><b>Rudradaman I</b> (150 AD)</td><td>First long inscription in <b>chaste Sanskrit</b>; records repair of Sudarshan Lake.</td></tr>
        <tr><td><b>Allahabad Pillar / Prayag Prashasti</b></td><td>Samudragupta (4th c. AD)</td><td>By court poet <b>Harisena</b>; details Samudragupta's conquests.</td></tr>
        <tr><td><b>Mehrauli Iron Pillar</b> (Delhi)</td><td>Probably Chandragupta II</td><td>Famous for rust-resistance.</td></tr>
        <tr><td><b>Aihole Inscription</b></td><td>Pulakeshin II (Chalukya, ~634 AD)</td><td>By poet <b>Ravikirti</b>; defeat of Harsha.</td></tr>
        <tr><td><b>Uttiramerur Inscriptions</b></td><td>Chola</td><td>Local self-government in Chola villages.</td></tr>
        <tr><td><b>Heliodorus Pillar (Besnagar)</b></td><td>~110 BC</td><td>Greek envoy who became a Bhagavata; first inscription about Vasudeva worship.</td></tr>
      </table>

      <h4>Scripts</h4>
      <ul>
        <li><b>Brahmi</b> — earliest Indian script (4th–3rd c. BC); written left to right; deciphered by <b>James Princep (1837)</b>; ancestor of all Indian scripts (except Urdu).</li>
        <li><b>Kharosthi</b> — written right to left; from Aramaic; used in NW India; deciphered by James Princep & Christian Lassen.</li>
        <li><b>Indus Script</b> — pictographic (Harappan civilization); written right-to-left; <b>still undeciphered</b>.</li>
      </ul>

      <h4>B. Coins (Numismatics)</h4>
      <ul>
        <li><b>Punch-marked coins</b> — earliest Indian coins (6th c. BC); silver & copper; symbols only; pre-Mauryan.</li>
        <li><b>Indo-Greek coins</b> — first to bear king's portrait & name; introduced gold coinage.</li>
        <li><b>Kushans</b> — first to issue gold coins on a large scale; Kanishka's coins show various deities (Shiva, Buddha, Greek, Iranian gods).</li>
        <li><b>Guptas</b> — largest gold coins (Dinara); Samudragupta's coins show him playing veena, performing Ashvamedha; Chandragupta II's lion-slayer coins.</li>
        <li><b>Satavahana</b> — lead, copper, potin; ship-coins of Yajna Sri Satakarni (maritime trade).</li>
      </ul>

      <h4>C. Monuments and Excavations</h4>
      <ul>
        <li><b>Indus Valley sites</b>: Harappa, Mohenjodaro, Lothal, Dholavira, etc.</li>
        <li><b>Stupas</b>: Sanchi, Bharhut, Amaravati.</li>
        <li><b>Caves</b>: Ajanta, Ellora, Karle, Bhaja, Bagh.</li>
        <li><b>Temples</b>: Khajuraho, Konark, Brihadeshvara (Tanjore), Kailasa (Ellora).</li>
        <li><b>Archaeological Survey of India (ASI)</b> founded 1861 by <b>Alexander Cunningham</b>; reorganized 1902 under Curzon by <b>John Marshall</b>.</li>
      </ul>

      <hr>

      <h3>3. Foreign Accounts</h3>

      <h4>Greek and Roman Writers</h4>
      <table>
        <tr><th>Writer</th><th>Work / Notes</th></tr>
        <tr><td>Herodotus (5th c. BC)</td><td>"Histories" — first mention of India (Indos = Indus).</td></tr>
        <tr><td>Megasthenes (4th c. BC)</td><td>Indica — Mauryan India.</td></tr>
        <tr><td>Deimachus, Dionysius</td><td>Seleucid envoys to Bindusara, Ashoka.</td></tr>
        <tr><td>Strabo, Arrian, Pliny, Plutarch</td><td>Quote Megasthenes; record Alexander's invasion.</td></tr>
        <tr><td>Ptolemy (2nd c. AD)</td><td>"Geography" — Indian places, ports.</td></tr>
        <tr><td>Anonymous (1st c. AD)</td><td><b>Periplus of the Erythraean Sea</b> — Greek-Egyptian trade with India; ports of Bharuch (Barygaza), Muziris.</td></tr>
      </table>

      <h4>Chinese Pilgrims</h4>
      <table>
        <tr><th>Pilgrim</th><th>Visit</th><th>Patron / Time</th><th>Work</th></tr>
        <tr><td><b>Fa-Hien (Fa Xian)</b></td><td>399–414 AD</td><td>Chandragupta II</td><td>Fo-Kuo-Ki — visited Buddhist sites; came via land, returned by sea.</td></tr>
        <tr><td><b>Hiuen Tsang (Xuanzang)</b></td><td>629–645 AD</td><td>Harsha</td><td>Si-Yu-Ki ("Records of Western Regions") — most detailed account; studied at Nalanda.</td></tr>
        <tr><td><b>I-tsing (Yijing)</b></td><td>671–695 AD</td><td>Post-Harsha</td><td>Came by sea via Sumatra; visited Nalanda; account of Buddhism.</td></tr>
      </table>

      <h4>Arab and Persian Writers</h4>
      <ul>
        <li><b>Sulaiman</b> (9th c. AD) — Arab traveler; visited Mihir Bhoja's court.</li>
        <li><b>Al-Biruni</b> (973–1048) — visited India with Mahmud Ghazni; wrote <i>Tahqiq-i-Hind / Kitab-ul-Hind</i> in Arabic — first systematic study of Indian thought, science, religion by an outsider.</li>
        <li><b>Ibn Battuta</b> (1304–69) — Moroccan traveler; spent ~14 years in India under Muhammad bin Tughlaq; wrote <i>Rehla</i>.</li>
        <li><b>Marco Polo</b> (1254–1324) — Venetian; visited Pandya kingdom.</li>
      </ul>

      <h4>European Travelers (15th–17th c.)</h4>
      <ul>
        <li><b>Niccolo Conti</b> (Italian) — Vijayanagar.</li>
        <li><b>Abdur Razzak</b> (Persian) — Vijayanagar (Devaraya II).</li>
        <li><b>Domingo Paes, Duarte Barbosa</b> (Portuguese) — Krishna Deva Raya's court.</li>
        <li><b>Bernier</b>, <b>Tavernier</b> (French) — Mughal court (Shah Jahan, Aurangzeb).</li>
        <li><b>Manucci</b> (Italian) — <i>Storia do Mogor</i>; Mughal era.</li>
        <li><b>Sir Thomas Roe</b> (English) — Jahangir's court.</li>
      </ul>

      <h3>Periodization</h3>
      <table>
        <tr><th>Period</th><th>Approx. Dates</th></tr>
        <tr><td>Prehistoric (Paleolithic, Mesolithic, Neolithic, Chalcolithic)</td><td>5,00,000 – 1500 BC</td></tr>
        <tr><td>Indus Valley / Harappan</td><td>2500 – 1750 BC</td></tr>
        <tr><td>Vedic Age (Early & Later)</td><td>1500 – 600 BC</td></tr>
        <tr><td>Mahajanapada Age (Magadha rises)</td><td>600 – 322 BC</td></tr>
        <tr><td>Mauryan Empire</td><td>322 – 185 BC</td></tr>
        <tr><td>Post-Mauryan (Shungas, Kanvas, Satavahanas, Sakas, Kushans)</td><td>185 BC – 320 AD</td></tr>
        <tr><td>Gupta Age</td><td>320 – 550 AD</td></tr>
        <tr><td>Post-Gupta / Vardhanas (Harsha)</td><td>550 – 750 AD</td></tr>
        <tr><td>South Indian dynasties (Pallavas, Cholas, Chalukyas)</td><td>500 – 1300 AD</td></tr>
      </table>

      <h3>Looking Ahead</h3>
      <p>Now that we know <b>how</b> ancient India is reconstructed, let us begin at the beginning — the prehistoric Stone Age, when human beings were hunter-gatherers using stone tools. The next topic covers the Stone Age, the dawn of agriculture, and the rise of settled village life.</p>

      <hr>
      <h3>🧠 याद कैसे रखें? (Memory Tricks)</h3>
      <ul>
        <li><b>3 sources = "LAF" का formula</b> — <b>L</b>iterary (किताबें), <b>A</b>rchaeological (खुदाई), <b>F</b>oreign accounts (विदेशी यात्री)।</li>
        <li><b>4 Vedas याद रखने का trick</b>: <b>"Rig Sa Ya Atha"</b> — <b>Rig</b>veda (hymns/भजन), <b>Sama</b>veda (songs/संगीत), <b>Yaju</b>rveda (rituals/यज्ञ), <b>Atharva</b>veda (magic/जादू-टोना)। Order of composition भी यही है।</li>
        <li><b>Foreign travelers (बाहर से आए)</b>: Megasthenes (Maurya court) → Fa-Hien (Gupta, Chandragupta II) → Hiuen Tsang (Harsha) → Al-Beruni (Mahmud Ghazni के साथ)। <i>"मेगा फा हिउ अल"</i> — chronological order।</li>
        <li><b>Story</b>: Imagine आप archaeologist हैं — ज़मीन खोदी (archaeology), पुरानी पोथी मिली (literature), और एक विदेशी traveler की diary मिली (foreign account)। ये तीनों मिलकर ancient history बनती है।</li>
      </ul>
    `,
    mcq: [
      { q: "Vedas are part of which type of source?", opts: ["Archaeological", "Literary (religious)", "Foreign accounts", "Numismatic"], a: 1, ex: "Vedas are religious literary sources — Rig, Sama, Yajur, Atharva." },
      { q: "Arthashastra was authored by?", opts: ["Megasthenes", "Kautilya", "Patanjali", "Panini"], a: 1, ex: "Kautilya (Chanakya/Vishnugupta) — minister of Chandragupta Maurya." },
      { q: "Megasthenes was the ambassador of?", opts: ["Antiochus I", "Seleucus Nikator", "Ptolemy II", "Alexander"], a: 1, ex: "Sent by Seleucus Nikator to Chandragupta Maurya's court; wrote Indica." },
      { q: "Brahmi script was deciphered by?", opts: ["William Jones", "James Princep", "John Marshall", "Cunningham"], a: 1, ex: "James Princep deciphered Brahmi in 1837; Kharosthi too." },
      { q: "First long inscription in chaste Sanskrit is the Junagadh Inscription of?", opts: ["Ashoka", "Rudradaman I (150 AD)", "Samudragupta", "Kanishka"], a: 1, ex: "Rudradaman I — Saka ruler; records repair of Sudarshan Lake." },
      { q: "Allahabad Pillar Inscription was composed by?", opts: ["Banabhatta", "Harisena", "Kalidasa", "Patanjali"], a: 1, ex: "Harisena, court poet of Samudragupta — Prayag Prashasti." },
      { q: "Aihole Inscription was composed by?", opts: ["Harisena", "Ravikirti", "Banabhatta", "Bilhana"], a: 1, ex: "Ravikirti, court poet of Pulakeshin II of Chalukyas (~634 AD)." },
      { q: "Rajatarangini, the historical chronicle of Kashmir, was written by?", opts: ["Kalhana", "Bilhana", "Banabhatta", "Vishakhadatta"], a: 0, ex: "Kalhana wrote Rajatarangini in 12th century AD." },
      { q: "Fa-Hien visited India during the reign of?", opts: ["Samudragupta", "Chandragupta II", "Kumaragupta", "Harsha"], a: 1, ex: "399–414 AD, during Chandragupta II's reign." },
      { q: "Hiuen Tsang visited India during?", opts: ["Samudragupta", "Skandagupta", "Harsha", "Pulakeshin II"], a: 2, ex: "Visited 629–645 AD; main patron was Harsha; studied at Nalanda; wrote Si-Yu-Ki." },
      { q: "Al-Biruni came to India with?", opts: ["Muhammad Ghori", "Mahmud Ghazni", "Babur", "Timur"], a: 1, ex: "Mahmud Ghazni; Al-Biruni wrote Kitab-ul-Hind (Tahqiq-i-Hind) in Arabic." },
      { q: "Periplus of the Erythraean Sea is a?", opts: ["Greek geography of Indian Ocean trade", "Mauryan administrative manual", "Buddhist text", "Chinese pilgrim's account"], a: 0, ex: "Anonymous Greek-Egyptian author (1st c. AD); details Indian ports and exports." },
      { q: "Indus script is?", opts: ["Pictographic, undeciphered", "Phonetic, deciphered", "Aramaic", "Brahmi-derived"], a: 0, ex: "Pictographic, written right-to-left; still undeciphered." },
      { q: "ASI was founded in 1861 by?", opts: ["John Marshall", "Alexander Cunningham", "Mortimer Wheeler", "James Princep"], a: 1, ex: "Sir Alexander Cunningham, 1861; reorganized 1902 under Curzon by John Marshall." }
    ]
  };

  T["ah-stone-age"] = {
    body: `
      ${figRow([
        ["Rock painting, Bhimbetka, Raisen district, MP.jpg", "Bhimbetka rock paintings (Mesolithic, MP)"],
        ["Acheulean handaxe.png", "Acheulean handaxe — Lower Palaeolithic stone tool"]
      ])}
      <h3>Why "Prehistoric"?</h3>
      <p>"Prehistoric" means "before written records". Since humans only began to write around 3000 BC (Sumerian cuneiform) and the Indus script (~2500 BC) is undeciphered, everything before then has to be reconstructed from <b>stone tools, bones, paintings, and skeletons</b>. The first systematic Indian prehistoric discovery was made in 1863 by <b>Robert Bruce Foote</b>, a British geologist who found a Paleolithic hand-axe at <b>Pallavaram, near Madras</b>.</p>

      <h3>Periodization of the Stone Age</h3>
      <table>
        <tr><th>Period</th><th>Approx. Dates (BC)</th><th>Tool Type</th><th>Subsistence</th></tr>
        <tr><td><b>Paleolithic (Old Stone Age)</b></td><td>5,00,000 – 10,000</td><td>Crude, unpolished stone tools — hand-axes, choppers, flakes</td><td>Hunting and food-gathering</td></tr>
        <tr><td><b>Mesolithic (Middle Stone Age)</b></td><td>10,000 – 6,000</td><td>Microliths (very small flakes mounted as composite tools)</td><td>Hunting, fishing; domestication began</td></tr>
        <tr><td><b>Neolithic (New Stone Age)</b></td><td>6,000 – 1,000</td><td>Polished stone tools, ground axes</td><td>Agriculture, pottery, settled villages</td></tr>
        <tr><td><b>Chalcolithic (Copper-Stone Age)</b></td><td>3,000 – 1,000</td><td>Copper tools alongside polished stone</td><td>First use of metal; village cultures</td></tr>
      </table>

      <hr>

      <h3>1. Paleolithic Age (Old Stone Age)</h3>
      <p>Paleo = old; Lithos = stone. Subdivided into Lower, Middle, and Upper.</p>

      <h4>Lower Paleolithic (~5,00,000 – 1,00,000 BC)</h4>
      <ul>
        <li>Earliest humans: <b>Homo erectus</b>; evidence from <b>Hathnora (Narmada Valley, MP)</b> — "Narmada Man" (1982).</li>
        <li>Tools: <b>hand-axes, cleavers, choppers</b> made of quartzite; <b>Acheulean culture</b>.</li>
        <li>Major sites: <b>Soan/Sohan Valley (Pakistan), Belan Valley (UP), Bhimbetka (MP), Hunsgi (Karnataka), Adamgarh (MP), Pahalgam (J&K)</b>.</li>
        <li><b>Bori (Maharashtra)</b> — earliest evidence of human presence in India (~1.4 million years).</li>
      </ul>

      <h4>Middle Paleolithic (~1,00,000 – 40,000 BC)</h4>
      <ul>
        <li>Improved flake tools — scrapers, points, borers; <b>Mousterian-like</b> tools.</li>
        <li>Sites: Nevasa (Maharashtra), Pushkar (Rajasthan), Bhimbetka, Narmada Valley.</li>
      </ul>

      <h4>Upper Paleolithic (~40,000 – 10,000 BC)</h4>
      <ul>
        <li>Appearance of <b>Homo sapiens sapiens</b>.</li>
        <li>Tools: blades, burins, parallel-sided blades.</li>
        <li>Bone tools begin to appear.</li>
        <li>Earliest <b>art</b> — engravings, ornaments at <b>Bhimbetka</b>.</li>
        <li>Sites: Belan Valley (UP), Narmada Valley, Renigunta (Andhra), Patne (Maharashtra), Inamgaon.</li>
      </ul>

      <hr>

      <h3>2. Mesolithic Age (~10,000 – 6,000 BC)</h3>
      <ul>
        <li>Climatic warming; emergence of grasslands; humans began to follow animal herds.</li>
        <li><b>Microliths</b> — tiny stone blades (1–8 cm) hafted onto wood/bone to make composite tools (arrows, sickles).</li>
        <li>First evidence of <b>animal domestication</b> (~5500 BC at Adamgarh, MP and Bagor, Rajasthan); <b>dog</b> first domesticated.</li>
        <li>Beginnings of cultivation (Mesolithic transition).</li>
        <li>Cemetery burials emerge.</li>
        <li><b>Rock paintings</b>:
          <ul>
            <li><b>Bhimbetka (Raisen, MP)</b> — UNESCO World Heritage; ~700 rock shelters; paintings from Paleolithic to early historic; oldest paintings ~30,000 years.</li>
            <li>Discovered by <b>V.S. Wakankar (1957)</b>.</li>
          </ul>
        </li>
        <li>Important sites: <b>Bagor (Rajasthan)</b> — largest Mesolithic site; <b>Langhnaj (Gujarat), Adamgarh (MP), Sarai Nahar Rai (UP), Mahadaha (UP), Damdama (UP), Birbhanpur (Bengal), Mahapatlikum (Bihar)</b>.</li>
      </ul>

      <hr>

      <h3>3. Neolithic Age (~6,000 – 1,000 BC)</h3>
      <p>The "Neolithic Revolution" — beginning of <b>agriculture, animal husbandry, pottery, polished stone tools, weaving, and settled village life</b>.</p>

      <h4>Key Features</h4>
      <ul>
        <li>Polished, ground stone tools — celts, axes, ring stones.</li>
        <li><b>Agriculture</b> — wheat, barley, rice, cotton; first use of plough.</li>
        <li><b>Domestication of animals</b> completed — cattle, sheep, goats, dogs.</li>
        <li><b>Pottery</b> — handmade in early Neolithic, wheel-made later; black-and-red ware.</li>
        <li><b>Settled villages</b> — pit dwellings, mud-brick houses.</li>
        <li>Weaving of cotton and wool.</li>
        <li>Beginnings of religious life — fertility cults, mother-goddess.</li>
      </ul>

      <h4>Important Neolithic Sites in India</h4>
      <table>
        <tr><th>Site</th><th>Region/State</th><th>Significance</th></tr>
        <tr><td><b>Mehrgarh</b></td><td>Balochistan (Pakistan)</td><td><b>Earliest Neolithic site of South Asia</b>; ~7000 BC; first evidence of <b>wheat & barley cultivation</b> in India; pre-Indus.</td></tr>
        <tr><td><b>Burzahom</b></td><td>Kashmir</td><td>Pit dwellings; bone tools; "dog-burial" (a man buried with his dog).</td></tr>
        <tr><td><b>Gufkral</b></td><td>Kashmir</td><td>Same culture as Burzahom; means "potter's cave".</td></tr>
        <tr><td><b>Chirand</b></td><td>Bihar (Saran)</td><td>Bone tools; on Ghaghra river.</td></tr>
        <tr><td><b>Koldihwa</b> (Belan Valley)</td><td>UP</td><td><b>Earliest evidence of rice cultivation</b> in India (~6500 BC).</td></tr>
        <tr><td><b>Mahagara</b></td><td>UP</td><td>Cattle pen; rice husk in pottery.</td></tr>
        <tr><td><b>Adamgarh</b></td><td>Madhya Pradesh</td><td>Earliest evidence of animal domestication (~5500 BC).</td></tr>
        <tr><td><b>Hallur</b></td><td>Karnataka</td><td>Earliest iron tools (~1000 BC); Neolithic to Iron Age transition.</td></tr>
        <tr><td>Brahmagiri, Maski, Piklihal, Tekkalakota</td><td>Karnataka</td><td>Southern Neolithic.</td></tr>
        <tr><td>Daojali Hading</td><td>Assam</td><td>NE Neolithic.</td></tr>
        <tr><td>Sarutaru</td><td>Assam</td><td>NE Neolithic.</td></tr>
      </table>

      <hr>

      <h3>4. Chalcolithic Age (~3,000 – 1,000 BC)</h3>
      <p>"Chalco" = copper; "Lithic" = stone. Used <b>copper</b> alongside polished stone tools — but <b>not iron</b>. Many Chalcolithic cultures were contemporary with the Indus Valley Civilization.</p>

      <h4>Major Chalcolithic Cultures</h4>
      <table>
        <tr><th>Culture</th><th>Region</th><th>Period</th></tr>
        <tr><td><b>Ahar / Banas culture</b></td><td>SE Rajasthan (Aravalli)</td><td>~3000 BC</td></tr>
        <tr><td><b>Kayatha culture</b></td><td>Madhya Pradesh (Chambal)</td><td>~2400 BC</td></tr>
        <tr><td><b>Malwa culture</b></td><td>Madhya Pradesh, Maharashtra</td><td>~1700 BC</td></tr>
        <tr><td><b>Jorwe culture</b></td><td>Maharashtra (Inamgaon, Daimabad, Nevasa)</td><td>~1400 BC</td></tr>
      </table>

      <h4>Important Chalcolithic Sites</h4>
      <ul>
        <li><b>Ahar (Rajasthan)</b> — copper-smelting; black-and-red ware.</li>
        <li><b>Inamgaon (Maharashtra)</b> — most extensively excavated Chalcolithic site; large dwelling unit at Inamgaon may have been a chief's house.</li>
        <li><b>Daimabad (Maharashtra)</b> — bronze chariot, elephant, rhino, buffalo figurines.</li>
        <li><b>Navdatoli (MP)</b> — variety of crops.</li>
        <li><b>Eran, Kayatha (MP), Nevasa (Maharashtra), Songaon, Chandoli</b>.</li>
      </ul>

      <hr>

      <h3>"Firsts" in Indian Prehistory</h3>
      <ul>
        <li>First metal used by humans: <b>Copper</b>.</li>
        <li>First crop cultivated in India: <b>Wheat & Barley</b> (at Mehrgarh).</li>
        <li>Earliest evidence of rice cultivation in India: <b>Koldihwa (UP)</b> ~6500 BC.</li>
        <li>First animal domesticated: <b>Dog</b>.</li>
        <li>Earliest hominid in India: <b>Homo erectus</b> at Hathnora (Narmada Valley) — "Narmada Man".</li>
        <li>First evidence of animal domestication: <b>Adamgarh (MP)</b>, ~5500 BC.</li>
        <li>Earliest paintings: <b>Bhimbetka (MP)</b>, Mesolithic onwards.</li>
        <li>Earliest iron tools: <b>Hallur (Karnataka)</b>, ~1000 BC.</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>Out of the Chalcolithic cultures and especially the agricultural villages of <b>Mehrgarh in Balochistan</b>, there gradually emerged urban civilization in the Indus Valley around 2500 BC — India's first cities, with planned drainage, brick architecture, and a script we still cannot read. The next topic explores the <b>Indus Valley / Harappan Civilization</b>.</p>

      <hr>
      <h3>🧠 याद कैसे रखें? (Memory Tricks)</h3>
      <ul>
        <li><b>3 Stone Ages — "P-M-N" sequence</b>: <b>P</b>aleolithic (पुराना, ~2.5M–10k BC) → <b>M</b>esolithic (मध्य, 10k–8k BC) → <b>N</b>eolithic (नया, 8k–3500 BC)।</li>
        <li><b>Hindi से याद</b>: "पुराना-मध्य-नया" = "P-M-N"।</li>
        <li><b>Story</b>: एक caveman पहले बड़े rough पत्थर तोड़ता था (Paleo) → फिर छोटे sharp tools बनाने लगा (Meso) → फिर खेती करने लगा, घर बनाए, बर्तन बनाए (Neo)। यानि जैसे-जैसे time बढ़ा, tools fine होते गए।</li>
        <li><b>Bhimbetka</b> (Madhya Pradesh) = "Bhi-म-bet" — <b>Mesolithic</b> rock paintings। याद रखें "Bhi-म" में म = Meso।</li>
        <li><b>Neolithic gift</b>: पहली बार खेती (wheat, barley) + पालतू जानवर (dog, cow) + पहिया (wheel) + मिट्टी के बर्तन (pottery)। पूरी civilisation यहाँ से शुरू।</li>
      </ul>
    `,
    mcq: [
      { q: "First Indian prehistoric tool was found in 1863 by?", opts: ["Robert Bruce Foote", "John Marshall", "Mortimer Wheeler", "Alexander Cunningham"], a: 0, ex: "Robert Bruce Foote (British geologist) found a Paleolithic hand-axe at Pallavaram near Madras." },
      { q: "First metal used by humans was?", opts: ["Iron", "Bronze", "Copper", "Gold"], a: 2, ex: "Copper — Chalcolithic age." },
      { q: "Earliest known hominid in India is?", opts: ["Homo sapiens", "Homo erectus (Hathnora, Narmada)", "Australopithecus", "Neanderthal"], a: 1, ex: "Homo erectus from Hathnora in Narmada Valley (1982)." },
      { q: "Bhimbetka rock paintings are located in?", opts: ["Bihar", "Madhya Pradesh", "Karnataka", "Rajasthan"], a: 1, ex: "Bhimbetka, Raisen district, Madhya Pradesh — UNESCO World Heritage site; ~700 rock shelters." },
      { q: "Bhimbetka was discovered in 1957 by?", opts: ["John Marshall", "V.S. Wakankar", "Cunningham", "B.B. Lal"], a: 1, ex: "Vishnu Shridhar Wakankar." },
      { q: "Mesolithic age is characterized by?", opts: ["Iron tools", "Microliths", "Bronze tools", "Polished axes"], a: 1, ex: "Microliths — small stone blades hafted onto wood/bone for composite tools." },
      { q: "Earliest evidence of rice cultivation in India is from?", opts: ["Mehrgarh", "Koldihwa", "Burzahom", "Inamgaon"], a: 1, ex: "Koldihwa (Belan Valley, UP) ~6500 BC." },
      { q: "First animal domesticated by humans was?", opts: ["Cow", "Dog", "Goat", "Horse"], a: 1, ex: "Dog was the first domesticated animal." },
      { q: "Mehrgarh, the earliest Neolithic site of South Asia, is located in?", opts: ["Pakistan (Balochistan)", "Afghanistan", "MP", "Rajasthan"], a: 0, ex: "Mehrgarh in Balochistan (Pakistan); ~7000 BC; pre-Indus." },
      { q: "Burzahom, with pit dwellings, is in?", opts: ["Kashmir", "Punjab", "Bengal", "Andhra"], a: 0, ex: "Kashmir — Neolithic site with pit dwellings; famous for dog-burial." },
      { q: "Earliest iron tools in India are from?", opts: ["Mehrgarh", "Hallur (Karnataka)", "Inamgaon", "Bhimbetka"], a: 1, ex: "Hallur in Karnataka — ~1000 BC; Neolithic to Iron Age transition." },
      { q: "Bronze chariot, elephant, rhino, buffalo figurines were found at?", opts: ["Inamgaon", "Daimabad (Maharashtra)", "Mehrgarh", "Lothal"], a: 1, ex: "Daimabad — Late Harappan / Jorwe culture site in Maharashtra." },
      { q: "Inamgaon is located in?", opts: ["Maharashtra", "MP", "Karnataka", "Gujarat"], a: 0, ex: "Maharashtra — most extensively excavated Chalcolithic / Jorwe site." },
      { q: "Earliest evidence of animal domestication is from?", opts: ["Mehrgarh", "Adamgarh (MP)", "Koldihwa", "Burzahom"], a: 1, ex: "Adamgarh (MP) ~5500 BC." }
    ]
  };

  T["ah-indus"] = {
    body: `
      ${figRow([
        ["Indus_Valley_Civilization,_Mature_Phase_(2600-1900_BCE).png", "Extent of the Indus Valley Civilization"],
        ["Mohenjo-daro.jpg", "Mohenjo-daro — Great Bath ruins"],
        ["Mohenjo-daro_Priesterk%C3%B6nig.jpeg", "'Priest-King' bust from Mohenjo-daro"]
      ])}
      <h3>Discovery and Names</h3>
      <ul>
        <li>Called <b>Indus Valley Civilization (IVC)</b> because most early sites were near the Indus river; also called the <b>Harappan Civilization</b> (after the first excavated site, Harappa) — the term preferred today since many sites are <i>not</i> on the Indus.</li>
        <li><b>1826</b> — Charles Masson, a deserter of the East India Company army, was first European to note the Harappa mound.</li>
        <li><b>1856</b> — Brunton brothers (engineers building Lahore-Multan railway) used Harappan bricks as ballast.</li>
        <li><b>1921</b> — <b>Daya Ram Sahni</b> excavated Harappa under <b>Sir John Marshall</b> (Director General of ASI).</li>
        <li><b>1922</b> — <b>R.D. Banerjee</b> (Rakhal Das Banerjee) excavated <b>Mohenjodaro</b> ("Mound of the Dead") in Larkana, Sindh.</li>
        <li><b>1924</b> — Marshall announced the discovery of a hitherto unknown civilization to the world (in <i>The Illustrated London News</i>, 20 Sep 1924).</li>
      </ul>

      <h3>Chronology</h3>
      <table>
        <tr><th>Phase</th><th>Approx. Dates (BC)</th></tr>
        <tr><td>Early Harappan (formative villages)</td><td>3300–2600</td></tr>
        <tr><td><b>Mature Harappan (urban civilization)</b></td><td><b>2600–1900</b></td></tr>
        <tr><td>Late Harappan (decline)</td><td>1900–1300</td></tr>
      </table>
      <p>The "<b>2500–1750 BC</b>" range commonly cited refers to the mature urban phase (within slightly different dates).</p>

      <h3>Geographical Extent</h3>
      <ul>
        <li>Largest of the four early Bronze Age civilizations (the others — Mesopotamia, Egypt, China — were smaller in area).</li>
        <li>Stretched <b>~13 lakh sq km</b> across modern Pakistan, NW India, and parts of Afghanistan.</li>
        <li>Boundaries:
          <ul>
            <li><b>Northernmost</b>: <b>Manda (J&K)</b> on river Chenab.</li>
            <li><b>Southernmost</b>: <b>Daimabad (Maharashtra)</b> on river Pravara.</li>
            <li><b>Westernmost</b>: <b>Sutkagendor (Balochistan, Pakistan)</b> near the Iranian border.</li>
            <li><b>Easternmost</b>: <b>Alamgirpur (UP)</b> on river Hindon.</li>
          </ul>
        </li>
        <li>Triangular shape; centered on Indus and the now-dried Saraswati / Ghaggar-Hakra river.</li>
        <li>Of ~2,000 known sites, about <b>1,500 are in India</b>; only ~100 mature urban sites.</li>
      </ul>

      <h3>The Five Largest Cities (by size)</h3>
      <ol>
        <li><b>Mohenjodaro</b> (Sindh, Pakistan) — on Indus; ~200 hectares.</li>
        <li><b>Harappa</b> (Punjab, Pakistan) — on Ravi.</li>
        <li><b>Ganweriwala</b> (Cholistan, Pakistan) — on dry Hakra bed.</li>
        <li><b>Rakhigarhi</b> (Haryana, India) — <b>largest Harappan site in India</b>; on dry Drishadvati.</li>
        <li><b>Dholavira</b> (Kutch, Gujarat, India) — on Khadir island.</li>
      </ol>

      <h3>Town Planning — The Defining Feature</h3>
      <ul>
        <li><b>Grid pattern</b>: streets crossed each other at right angles.</li>
        <li><b>Two-fold division</b>: <b>Citadel</b> (raised, fortified, west — public buildings) + <b>Lower Town</b> (east — residential).
          <ul>
            <li>Exceptions: <b>Dholavira</b> had <b>three-fold</b> division (citadel, middle town, lower town); <b>Chanhudaro</b> had <b>no citadel</b>.</li>
          </ul>
        </li>
        <li><b>Houses</b>: of standardized <b>baked bricks</b> in ratio <b>1:2:4</b> (thickness:width:length); doors and windows opened onto side lanes (not main streets).</li>
        <li>Almost every house had a private <b>well, bathroom, and drainage</b> connected to street drains.</li>
        <li><b>Drainage system</b> — covered, U-shaped, with manholes for cleaning — the hallmark of IVC; finer than any contemporary civilization.</li>
        <li>Public buildings: <b>Great Bath, Great Granary, Assembly Hall, Pillared Hall</b> (all at Mohenjodaro).</li>
      </ul>

      <h3>Major Sites and Their Findings</h3>
      <table>
        <tr><th>Site</th><th>River</th><th>Excavator(s)</th><th>Key Findings</th></tr>
        <tr><td><b>Harappa</b></td><td>Ravi (Punjab, Pakistan)</td><td>Daya Ram Sahni (1921), M.S. Vats, M. Wheeler</td><td><b>Two granaries (12 in two rows of 6)</b>, R-37 cemetery, "H" cemetery, working class quarters, stone images of dancers, copper bullock cart, red sandstone torso.</td></tr>
        <tr><td><b>Mohenjodaro</b></td><td>Indus (Sindh)</td><td>R.D. Banerjee (1922)</td><td><b>Great Bath</b> (~12×7×2.4 m, made of burnt brick with bitumen lining), <b>Great Granary</b> (largest building), <b>Pashupati seal, Bronze Dancing Girl, Bearded Priest</b> (steatite); Assembly Hall; college; clay figurines of Mother Goddess; <b>"Mohenjodaro" = Mound of the Dead</b>.</td></tr>
        <tr><td><b>Chanhudaro</b></td><td>Sindh</td><td>N.G. Majumdar (1931), Mackay (1935)</td><td>Bead-making factory, dyeing vat, ink-pot, lipstick (small terracotta cosmetic vials); <b>only Harappan city without a citadel</b>.</td></tr>
        <tr><td><b>Lothal</b></td><td>Bhogava (Gujarat)</td><td>S.R. Rao (1955)</td><td><b>Dockyard / tidal port</b> (~217 m × 36 m) — only one in IVC; rice husks; fire altars; bead-making; Persian Gulf seal; "lipstick"; double burial; "manport".</td></tr>
        <tr><td><b>Kalibangan</b></td><td>Ghaggar (Rajasthan)</td><td>A. Ghosh, B.B. Lal, B.K. Thapar</td><td><b>Ploughed field</b> (earliest in world), <b>fire altars</b>, lower and upper towns separate, mixed crops (wheat + gram), wooden plough, cylindrical seal; "Kalibangan" = "black bangles".</td></tr>
        <tr><td><b>Banawali</b></td><td>Saraswati (Haryana)</td><td>R.S. Bisht (1973)</td><td>Both pre-Harappan & Harappan layers; <b>terracotta plough model</b>; high-quality barley.</td></tr>
        <tr><td><b>Rakhigarhi</b></td><td>Drishadvati (Haryana)</td><td>Suraj Bhan, Amarendra Nath</td><td><b>Largest Harappan site in India</b>; granaries; cemetery; ancient DNA sample (2018) showed Indo-Iranian roots.</td></tr>
        <tr><td><b>Dholavira</b></td><td>Kutch (Gujarat) — on Khadir Bet</td><td>R.S. Bisht (1990)</td><td><b>Three-fold division</b> (citadel, middle town, lower town); 16 reservoirs (water-management); <b>Harappan "signboard"</b> with 10 large characters; stadium-like ground; UNESCO World Heritage (2021).</td></tr>
        <tr><td><b>Surkotada</b></td><td>Kutch (Gujarat)</td><td>J.P. Joshi (1972)</td><td><b>Horse bones</b> (controversial); fortified citadel + residential annex.</td></tr>
        <tr><td>Sutkagendor</td><td>Makran coast (Pakistan)</td><td>—</td><td>Westernmost site; trade outpost.</td></tr>
        <tr><td>Manda</td><td>Chenab (J&K)</td><td>—</td><td>Northernmost site.</td></tr>
        <tr><td>Daimabad</td><td>Pravara (Maharashtra)</td><td>—</td><td>Southernmost site; bronze hoard (chariot, elephant, rhino, buffalo).</td></tr>
        <tr><td>Alamgirpur</td><td>Hindon (UP)</td><td>—</td><td>Easternmost site.</td></tr>
        <tr><td>Ropar (Rupnagar)</td><td>Sutlej (Punjab)</td><td>Y.D. Sharma (1953)</td><td><b>First IVC site discovered in independent India</b>; dog buried with master.</td></tr>
        <tr><td>Mehrgarh</td><td>Bolan (Balochistan)</td><td>J.F. Jarrige (1974)</td><td>Pre-Indus Neolithic site (~7000 BC); origins of IVC agriculture.</td></tr>
      </table>

      <h3>Economy</h3>

      <h4>Agriculture</h4>
      <ul>
        <li>Wheat and barley were main crops; also rice (Lothal), peas, sesame, mustard, dates, cotton.</li>
        <li><b>First to grow cotton</b> in the world (Greeks called it "<i>Sindon</i>" from Sindh).</li>
        <li>Used wooden plough; granaries indicate agricultural surplus.</li>
        <li>Animals: domesticated cattle, buffalo, sheep, goats, dogs, pigs, donkeys, camels, fowl, possibly elephants. <b>Horse</b> evidence is disputed (Surkotada bones).</li>
      </ul>

      <h4>Crafts</h4>
      <ul>
        <li>Bronze (copper + tin) — figurines, tools, weapons.</li>
        <li>Pottery — wheel-made, painted (red and black ware).</li>
        <li>Bead-making (Chanhudaro, Lothal); cotton textiles; carnelian, agate, jasper.</li>
        <li>Steatite seals (most famous artifacts).</li>
        <li>Standardized weights — multiples of 16; <b>chert weights</b>.</li>
      </ul>

      <h4>Trade</h4>
      <ul>
        <li>Internal trade across the IVC zone.</li>
        <li><b>External trade with Mesopotamia</b> — IVC is the "<b>Meluhha</b>" of Sumerian texts.</li>
        <li>Harappan seals found at Ur, Susa, Tepe Yahya; Mesopotamian cylinder seals found at Lothal & Mohenjodaro.</li>
        <li>Goods exchanged: cotton, beads, ivory, copper, gold, semi-precious stones (carnelian, lapis lazuli from Afghanistan).</li>
        <li>Sea trade via Lothal port; Gulf trade routes.</li>
      </ul>

      <h3>Script</h3>
      <ul>
        <li>About <b>4,000 inscribed objects</b> known; mostly seals.</li>
        <li>Pictographic; ~400–600 distinct signs.</li>
        <li>Written <b>right to left</b> (sometimes <b>boustrophedon</b> — alternating directions).</li>
        <li>Inscriptions are short (5 signs avg.).</li>
        <li><b>Still undeciphered</b> — the most famous unsolved script in the world.</li>
      </ul>

      <h3>Religion</h3>
      <ul>
        <li><b>Mother Goddess</b> — terracotta figurines; fertility cult.</li>
        <li><b>Pashupati seal</b> (Mohenjodaro) — three-faced male figure in yogic posture, surrounded by elephant, tiger, rhino, buffalo, deer; identified by Marshall as <b>"Proto-Shiva"</b>.</li>
        <li><b>Lingam (phallus) worship</b> — stone phalluses found at Mohenjodaro.</li>
        <li><b>Pipal tree</b> worship — sacred fig tree.</li>
        <li>Animal worship — bull, especially humped bull on seals.</li>
        <li><b>Swastika</b> — auspicious symbol on Indus seals.</li>
        <li>No temples found; possibly natural sites and household shrines.</li>
        <li>Burial: extended (most common — Harappa cemetery R-37); a few <b>fractional</b> burials; <b>cremation</b> at Mohenjodaro; no royal tombs.</li>
      </ul>

      <h3>Society</h3>
      <ul>
        <li>Apparently egalitarian — no royal palaces, temples or massive tombs.</li>
        <li>Three classes inferred: rulers/priests, traders/artisans, labourers.</li>
        <li>Mother Goddess cult and women's figurines suggest possible matriarchal element.</li>
      </ul>

      <h3>Famous Artifacts</h3>
      <ul>
        <li><b>Bronze Dancing Girl</b> — 10.5 cm; Mohenjodaro; bronze; left arm covered with bangles.</li>
        <li><b>Bearded Priest / Priest-King</b> — steatite; Mohenjodaro; trefoil-decorated robe.</li>
        <li><b>Pashupati seal</b> — Mohenjodaro.</li>
        <li><b>Red sandstone torso</b> (male) — Harappa.</li>
        <li><b>Bronze figurine of bullock cart</b> — Harappa.</li>
        <li>Terracotta toys; gamesman; mother goddess figurines.</li>
        <li><b>Unicorn seal</b> — most common motif (>60%).</li>
      </ul>

      <h3>What the IVC Did NOT Have</h3>
      <ul>
        <li><b>Iron</b> (still in Bronze Age).</li>
        <li>True <b>writing tradition</b> we can read.</li>
        <li>Coinage.</li>
        <li>Royal palaces or grand temples.</li>
        <li>Royal tombs (unlike Egypt).</li>
        <li>Definite evidence of horses (Surkotada is debated).</li>
      </ul>

      <h3>Decline (~1900–1300 BC)</h3>
      <p>Theories on why the IVC declined:</p>
      <ul>
        <li><b>Aryan invasion / migration</b> — Mortimer Wheeler's "battle for Mohenjodaro"; rejected today.</li>
        <li><b>Climate change</b> — drying of Saraswati / Ghaggar; reduced monsoons.</li>
        <li>Tectonic shifts — earthquakes; Indus changed course.</li>
        <li>Floods — repeated devastation; layers of silt at Mohenjodaro.</li>
        <li>Ecological degradation — deforestation, salinity, exhaustion of soils.</li>
        <li>Decline of trade with Mesopotamia.</li>
        <li>Internal social/economic problems.</li>
        <li>Most likely a combination of climate change, river shifts, and gradual deurbanization.</li>
      </ul>

      <h3>Legacy</h3>
      <ul>
        <li>Town planning — drainage, brick standardization.</li>
        <li>Cotton cultivation.</li>
        <li>Religious symbols — possibly antecedents of yoga, Shiva worship, Mother Goddess, swastika.</li>
        <li>Weights and measures — bina ushed in later Indian commerce.</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>As the Harappan cities declined (~1900 BC), pastoral nomads speaking Indo-European languages began arriving in north-west India. From these "Aryans" — and their interaction with the existing population — emerged the Vedic Age, India's earliest period documented by literature. The next topic is the Vedic Age.</p>

      <hr>
      <h3>🧠 याद कैसे रखें? (Memory Tricks)</h3>
      <ul>
        <li><b>Dates trick</b>: Indus Valley का peak <b>2500 BC – 1900 BC</b>। यानि लगभग <i>"25-19"</i> सोचो।</li>
        <li><b>Discovery dates</b>: 1921 = Dayaram Sahni → <b>Harappa</b>। 1922 = R.D. Banerjee → <b>Mohenjo-daro</b>। <i>"21-22 का जोड़ा"</i>।</li>
        <li><b>Main sites + River + State</b> (बहुत पूछा जाता है):
          <ul>
            <li><b>Harappa</b> — Ravi नदी — Punjab (Pakistan)</li>
            <li><b>Mohenjo-daro</b> — Indus नदी — Sindh (Pakistan) — meaning "Mound of the Dead"</li>
            <li><b>Lothal</b> — Sabarmati — Gujarat — पहला <b>port/dockyard</b> ("लोथल" में "lota" = water vessel = port)</li>
            <li><b>Dholavira</b> — Kutch — Gujarat — water harvesting system</li>
            <li><b>Kalibangan</b> — Ghaggar — Rajasthan — "Kali Bangan" = काली चूड़ियाँ; पहला plowed field</li>
            <li><b>Rakhigarhi</b> — Haryana — सबसे बड़ी site (1990s में discovered)</li>
          </ul>
        </li>
        <li><b>Famous artifacts</b>: <i>Dancing Girl</i> (bronze, Mohenjo-daro), <i>Priest-King</i> (stone, Mohenjo-daro), <i>Pashupati seal</i> (3-faced god — proto-Shiva)।</li>
        <li><b>Trick to remember "Mohenjo-daro" features</b>: <b>"GREAT B-G-S"</b> — <b>Great B</b>ath, <b>Great G</b>ranary, <b>S</b>eals।</li>
        <li><b>Decline story</b>: Climate change + Aryan invasion + Ghaggar (Saraswati) नदी सूख गई + floods — कोई एक final reason नहीं।</li>
      </ul>
    `,
    mcq: [
      { q: "Harappa was discovered in 1921 by?", opts: ["John Marshall", "Daya Ram Sahni", "R.D. Banerjee", "Mortimer Wheeler"], a: 1, ex: "Daya Ram Sahni in 1921, under Marshall (DG, ASI)." },
      { q: "Mohenjodaro was excavated in 1922 by?", opts: ["Sahni", "R.D. Banerjee", "Marshall", "Wheeler"], a: 1, ex: "Rakhal Das Banerjee in 1922; 'Mohenjodaro' means 'Mound of the Dead'." },
      { q: "Northernmost IVC site is?", opts: ["Manda", "Daimabad", "Sutkagendor", "Alamgirpur"], a: 0, ex: "Manda (J&K) on river Chenab is the northernmost." },
      { q: "Southernmost IVC site is?", opts: ["Manda", "Daimabad (Maharashtra)", "Sutkagendor", "Alamgirpur"], a: 1, ex: "Daimabad in Maharashtra on river Pravara." },
      { q: "The 'Great Bath' was found at?", opts: ["Harappa", "Mohenjodaro", "Lothal", "Kalibangan"], a: 1, ex: "Mohenjodaro — finest example of public bath; ~12×7×2.4 m, brick with bitumen lining." },
      { q: "Lothal is famous for?", opts: ["Dockyard", "Granary", "Citadel", "Stadium"], a: 0, ex: "Tidal dockyard at Lothal — only port in IVC; proves maritime trade." },
      { q: "Kalibangan is famous for?", opts: ["Great Bath", "Ploughed field & fire altars", "Dockyard", "Bead-making"], a: 1, ex: "Earliest ploughed field in the world; fire altars suggest ritual fires." },
      { q: "Largest Harappan site in India is?", opts: ["Lothal", "Dholavira", "Rakhigarhi", "Kalibangan"], a: 2, ex: "Rakhigarhi (Haryana) is the largest Harappan site in India." },
      { q: "Three-fold division of city was found at?", opts: ["Mohenjodaro", "Harappa", "Dholavira", "Lothal"], a: 2, ex: "Dholavira (Gujarat) had citadel + middle town + lower town; UNESCO World Heritage 2021." },
      { q: "First IVC site discovered in independent India was?", opts: ["Lothal", "Ropar (Rupnagar)", "Kalibangan", "Banawali"], a: 1, ex: "Ropar (1953) by Y.D. Sharma." },
      { q: "Bead-making factory was found at?", opts: ["Mohenjodaro", "Harappa", "Chanhudaro", "Surkotada"], a: 2, ex: "Chanhudaro — also the only IVC city without a citadel." },
      { q: "The Harappan script is written?", opts: ["Left to right", "Right to left", "Top to bottom", "Boustrophedon (and right to left)"], a: 3, ex: "Right to left, sometimes boustrophedon (alternating); pictographic and undeciphered." },
      { q: "The Pashupati seal was found at?", opts: ["Harappa", "Mohenjodaro", "Lothal", "Dholavira"], a: 1, ex: "Mohenjodaro — Marshall identified it as 'Proto-Shiva'." },
      { q: "Bronze Dancing Girl figurine was found at?", opts: ["Harappa", "Mohenjodaro", "Lothal", "Kalibangan"], a: 1, ex: "Mohenjodaro — 10.5 cm bronze figurine; left arm covered with bangles." },
      { q: "IVC is identified with which name in Mesopotamian texts?", opts: ["Aratta", "Meluhha", "Magan", "Dilmun"], a: 1, ex: "Sumerian texts call IVC 'Meluhha'; Magan = Oman; Dilmun = Bahrain." },
      { q: "Cotton was first cultivated by?", opts: ["Egyptians", "Sumerians", "Indus Valley people", "Chinese"], a: 2, ex: "IVC was first to grow cotton; Greeks called it 'Sindon' from Sindh." },
      { q: "Horse remains (controversial) were found at?", opts: ["Lothal", "Surkotada (Gujarat)", "Mohenjodaro", "Harappa"], a: 1, ex: "Surkotada in Kutch — but evidence disputed." },
      { q: "Standard brick ratio in IVC was?", opts: ["1:2:3", "1:2:4 (thickness:width:length)", "1:3:6", "1:1:2"], a: 1, ex: "Standardized 1:2:4 ratio for baked bricks across all sites." }
    ]
  };

  T["ah-vedic"] = {
    body: `
      ${fig("Rigveda_MS2097.jpg", "Rigveda manuscript (early 19th c. copy of the oldest Veda)")}
      <h3>Aryans — Origin Debate</h3>
      <ul>
        <li>"Arya" in Sanskrit means "noble"; <b>Aryans</b> spoke an Indo-European language (parent of Sanskrit, Latin, Greek, Persian, Germanic, Celtic).</li>
        <li>Theories of origin (still debated):
          <ul>
            <li><b>Central Asian / Pontic Steppe origin</b> — most accepted; Aryans migrated to India via Hindu Kush ~1500 BC. Supported by Rig Vedic geography (NW), linguistic links with Avestan (Iranian), and ancient DNA studies.</li>
            <li><b>Aryan invasion theory</b> (Max Müller, Wheeler) — Aryans destroyed Harappan cities; rejected today.</li>
            <li><b>Indigenous origin</b> (B.B. Lal, Tilak's "Arctic Home") — Aryans native to India; minority view.</li>
          </ul>
        </li>
        <li>Aryans were nomadic, pastoral, patriarchal; brought horse and chariot to India.</li>
      </ul>

      <h3>Two Phases of Vedic Age</h3>
      <table>
        <tr><th>Phase</th><th>Dates</th><th>Region</th><th>Economy</th></tr>
        <tr><td><b>Early / Rig Vedic</b></td><td>1500 – 1000 BC</td><td><b>Saptasindhu</b> — land of seven rivers (Punjab + NW)</td><td>Pastoral; some cultivation</td></tr>
        <tr><td><b>Later Vedic</b></td><td>1000 – 600 BC</td><td>Ganga-Yamuna Doab; Madhyadesh</td><td>Settled agriculture; iron-age</td></tr>
      </table>

      <hr>

      <h3>Vedic Literature — The Big Picture</h3>
      <ul>
        <li>Vedic literature was composed orally and transmitted through generations of priests; written down much later.</li>
        <li>Two categories:
          <ul>
            <li><b>Shruti</b> ("that which is heard" — divine revelation): Vedas, Brahmanas, Aranyakas, Upanishads.</li>
            <li><b>Smriti</b> ("that which is remembered" — human tradition): Vedangas, Sutras, Smritis (Dharmashastras), Epics, Puranas.</li>
          </ul>
        </li>
      </ul>

      <h3>The Four Vedas</h3>

      <h4>1. Rig Veda — The Oldest</h4>
      <ul>
        <li>Oldest religious text in the world that is still in use.</li>
        <li><b>10 mandalas (books)</b> with <b>1,028 suktas (hymns)</b> and <b>10,580 verses</b>.</li>
        <li>Mandalas <b>2 to 7</b> ("Family Mandalas") are the oldest; composed by specific rishi families.</li>
        <li>Mandala 1 and 10 are youngest; Mandala 10 contains the famous <b>Purusha Sukta</b> (origin of varnas), <b>Nasadiya Sukta</b> (creation hymn), and the marriage hymn.</li>
        <li><b>Gayatri Mantra</b> — in Mandala III (3.62.10) — composed by sage <b>Vishwamitra</b>; addressed to <b>Savitri (Sun)</b>.</li>
        <li>Rig Vedic priest is <b>Hotri</b>.</li>
        <li>Mostly hymns to gods; oldest historical record of Indo-Aryan civilization.</li>
      </ul>

      <h4>2. Sama Veda — Book of Melodies</h4>
      <ul>
        <li>"Saman" = melody; mostly hymns borrowed from Rig Veda set to music for chanting at sacrifices.</li>
        <li>1,549 verses; only ~75 not in Rig Veda.</li>
        <li>Origin of Indian classical music — <b>seven notes (sapta-svara)</b>.</li>
        <li>Priest: <b>Udgatri</b>.</li>
      </ul>

      <h4>3. Yajur Veda — Book of Sacrificial Formulas</h4>
      <ul>
        <li>Prose mantras and verses for performing yajnas (sacrifices).</li>
        <li>Two forms: <b>Krishna (Black) Yajurveda</b> and <b>Shukla (White) Yajurveda</b> — Black has unarranged prose mixed with verses; White has clear verses and prose.</li>
        <li>Priest: <b>Adhvaryu</b>.</li>
      </ul>

      <h4>4. Atharva Veda — Latest</h4>
      <ul>
        <li>Composed by Atharvan and Angiras families.</li>
        <li>Magical spells, charms, chants for healing, warding off evil, marriage, longevity.</li>
        <li>Reflects popular religion alongside priestly Vedas.</li>
        <li>Priest: <b>Brahma</b> (overseer of the entire ritual).</li>
        <li>Considered "non-canonical" by some orthodox traditions.</li>
      </ul>

      <h3>Brahmanas, Aranyakas, Upanishads</h3>
      <table>
        <tr><th>Text</th><th>Content</th></tr>
        <tr><td><b>Brahmanas</b></td><td>Prose commentaries on Vedas; explain rituals, sacrifices. Each Veda has its own Brahmana(s). E.g., <b>Aitareya & Kausitaki Brahmana</b> (Rig); <b>Tandya, Jaiminiya</b> (Sama); <b>Taittiriya, Shatapatha</b> (Yajur); <b>Gopatha</b> (Atharva).</td></tr>
        <tr><td><b>Aranyakas</b></td><td>"Forest books" — for forest hermits; transitional between ritual and philosophy.</td></tr>
        <tr><td><b>Upanishads</b></td><td>Philosophical works; "<i>sitting near</i>" the teacher; ~108 in number, but <b>10–13 are principal</b>: Isha, Kena, Katha, Prashna, Mundaka, Mandukya, Taittiriya, Aitareya, Chhandogya, Brihadaranyaka. Concept of <b>Brahman (universal soul) and Atman (individual soul)</b>; karma, rebirth, moksha. <b>"Satyameva Jayate"</b> from <b>Mundaka Upanishad</b> (3.1.6).</td></tr>
      </table>

      <h3>Vedangas — Six Auxiliary Sciences</h3>
      <ol>
        <li><b>Shiksha</b> — phonetics</li>
        <li><b>Kalpa</b> — rituals (Sutras)</li>
        <li><b>Vyakarana</b> — grammar (Panini's Astadhyayi)</li>
        <li><b>Nirukta</b> — etymology (Yaska's Nirukta)</li>
        <li><b>Chhanda</b> — metres (Pingala)</li>
        <li><b>Jyotisha</b> — astronomy</li>
      </ol>

      <h3>Smritis (Dharmashastras)</h3>
      <ul>
        <li><b>Manusmriti</b> — oldest law book; ascribed to Manu; ~200 BC – 200 AD.</li>
        <li>Yajnavalkya Smriti, Narada Smriti, Parashara Smriti.</li>
      </ul>

      <h3>Epics and Puranas</h3>
      <ul>
        <li><b>Mahabharata</b> — by <b>Veda Vyasa</b>; ~1 lakh verses; longest poem ever; contains the <b>Bhagavad Gita</b>.</li>
        <li><b>Ramayana</b> — by <b>Valmiki</b>; ~24,000 verses.</li>
        <li><b>18 Puranas</b> — Bhagavata, Vishnu, Matsya (oldest), Markandeya, Skanda, etc.; mythology, genealogy.</li>
      </ul>

      <hr>

      <h3>Rig Vedic Period (1500–1000 BC)</h3>

      <h4>Geography — Saptasindhu</h4>
      <ul>
        <li>Rig Veda mentions seven rivers (<b>Sapta-Sindhu</b>):
          <ol>
            <li><b>Sindhu</b> (Indus) — most mentioned</li>
            <li><b>Vitasta</b> (Jhelum)</li>
            <li><b>Asikni</b> (Chenab)</li>
            <li><b>Parushni</b> (Ravi)</li>
            <li><b>Vipasha</b> (Beas)</li>
            <li><b>Shutudri</b> (Sutlej)</li>
            <li><b>Saraswati</b> ("Naditama" — best of rivers; now dried up)</li>
          </ol>
        </li>
        <li>Aryans extended to <b>Punjab, Haryana, Western UP</b>; not yet to the Ganga.</li>
      </ul>

      <h4>Political Structure</h4>
      <ul>
        <li><b>Tribal</b> — society organized by clans (jana, vish, grama).</li>
        <li>Hierarchy: <b>kula (family) → grama (village) → vish (clan) → jana (tribe) → rashtra (territory)</b>.</li>
        <li><b>Rajan</b> — tribal chief; not absolute; checked by assemblies.</li>
        <li><b>Assemblies</b>:
          <ul>
            <li><b>Vidatha</b> — oldest, religious-administrative; mentioned only in Rig Veda.</li>
            <li><b>Sabha</b> — assembly of elders / nobles.</li>
            <li><b>Samiti</b> — assembly of common people; could elect king.</li>
            <li><b>Gana</b> — military assembly.</li>
          </ul>
        </li>
        <li>Officials: <b>Purohita (priest, e.g., Vasishtha and Vishvamitra), Senani (army chief), Gramani (village head)</b>.</li>
        <li>No regular taxation; voluntary tribute (<b>bali</b>).</li>
      </ul>

      <h4>Battle of Ten Kings (Dasarajna)</h4>
      <ul>
        <li>Rig Vedic battle on the <b>Parushni (Ravi) river</b>.</li>
        <li>King <b>Sudas</b> of the <b>Bharata</b> tribe (with priest Vashishtha) defeated a confederation of <b>10 tribes</b> (with priest Vishvamitra) — including Purus, Yadus, Anu, Druhyus, Turvasas, Bhrigus, etc.</li>
        <li>Victory established Bharata supremacy — origin of "<b>Bharatvarsha</b>".</li>
      </ul>

      <h4>Society</h4>
      <ul>
        <li>Patriarchal; family was basic unit; <b>kula</b> = family.</li>
        <li>Cow was the chief unit of wealth; "<b>gomat</b>" = wealthy ("having cows").</li>
        <li>"<b>Gavishti</b>" = "search for cows" (i.e., war/cattle raid).</li>
        <li>Society was simple — distinctions of birth had not yet hardened into rigid varnas.</li>
        <li><b>Women</b> enjoyed considerable freedom — could attend Sabha, study Vedas; some composed Rig Vedic hymns: <b>Apala, Lopamudra (wife of Agastya), Ghosha, Visvavara, Romasha</b>.</li>
        <li>No purdah, no sati, no child marriage; widow remarriage allowed.</li>
      </ul>

      <h4>Economy</h4>
      <ul>
        <li>Pastoral — cattle, horses, sheep, goats.</li>
        <li>Some agriculture — barley (yava); plough mentioned.</li>
        <li>Crafts — carpenter (Takshan), smith, leather-worker, weaver, potter, physician (Bhishak).</li>
        <li>Trade in barter; cow as unit; <b>Nishka</b> mentioned as gold ornament/currency.</li>
        <li>No knowledge of iron; metal known: <b>ayas</b> (probably copper/bronze).</li>
      </ul>

      <h4>Religion</h4>
      <ul>
        <li>Worship of natural forces personified as gods.</li>
        <li><b>Indra</b> (Purandara — fort-destroyer; god of war and rain) — most prominent; <b>250 hymns</b>.</li>
        <li><b>Agni</b> (fire; messenger between gods and humans) — 200 hymns; second only to Indra.</li>
        <li><b>Varuna</b> — keeper of cosmic order (rita); upholds rita and morality.</li>
        <li>Other gods: <b>Soma</b> (intoxicating ritual drink), <b>Surya</b> (Sun), <b>Yama</b> (death), <b>Rudra</b> (storm; later identified with Shiva), <b>Vishnu</b> (minor in Rig Veda; major later), Ashvins (twin gods).</li>
        <li>Goddesses: <b>Aditi</b> (mother of gods), <b>Ushas</b> (dawn), <b>Prithvi</b> (earth), Sarasvati.</li>
        <li>Worship through hymns and yajnas (fire-sacrifices); no idol worship; no temples.</li>
      </ul>

      <hr>

      <h3>Later Vedic Period (1000–600 BC)</h3>

      <h4>Geography</h4>
      <ul>
        <li>Aryans expanded eastward to the <b>Ganga-Yamuna Doab (Madhyadesh)</b>; reached Bihar.</li>
        <li>Major tribes: <b>Kuru-Panchala</b> (heartland), Kashi, Kosala, Videha.</li>
        <li>Capital cities emerged: <b>Hastinapura, Indraprastha, Kaushambi, Ayodhya</b>.</li>
      </ul>

      <h4>Political Structure</h4>
      <ul>
        <li>Tribes consolidated into early kingdoms (Mahajanapadas would emerge by ~600 BC).</li>
        <li><b>Rajan</b> became more powerful — "samrat", "ekarat", "virat".</li>
        <li>Larger administration — Senani (army), Sangrahitri (treasurer), Bhagadudha (tax collector), Mahishi (chief queen), <b>Suta (charioteer-bard)</b>.</li>
        <li>Regular taxation: bali (tribute), bhaga, shulka.</li>
        <li>Sabha and Samiti continued but were less democratic; Vidatha disappeared.</li>
        <li>Royal sacrifices for legitimacy:
          <ul>
            <li><b>Rajasuya</b> — coronation; brought wealth.</li>
            <li><b>Vajapeya</b> — strength of chariot.</li>
            <li><b>Ashvamedha</b> — horse sacrifice; established imperial sovereignty.</li>
          </ul>
        </li>
      </ul>

      <h4>Society — Rise of Varna System</h4>
      <ul>
        <li><b>Four-fold varna</b> — first formalized in <b>Purusha Sukta of Rig Veda Mandala 10</b> (a late hymn) and consolidated in Later Vedic literature:
          <ol>
            <li><b>Brahmana</b> (priest) — from Purusha's mouth.</li>
            <li><b>Kshatriya</b> (warrior) — from Purusha's arms.</li>
            <li><b>Vaishya</b> (cultivator/trader) — from Purusha's thighs.</li>
            <li><b>Shudra</b> (servant) — from Purusha's feet.</li>
          </ol>
        </li>
        <li>Varna based on birth, not occupation, became more rigid.</li>
        <li>Untouchability not yet rigid.</li>
        <li><b>Four ashramas</b> (life stages): <b>Brahmacharya, Grihastha, Vanaprastha, Sannyasa</b>.</li>
        <li><b>Position of women declined</b> — daughters not desired; child marriage emerged; widow remarriage discouraged; women excluded from Vedic education.</li>
      </ul>

      <h4>Economy</h4>
      <ul>
        <li><b>Iron</b> (called <i>shyama ayas</i> — black metal; or <i>krishna ayas</i>) widely used by 1000 BC.</li>
        <li>Iron axes cleared dense forests of the Ganga-Yamuna doab.</li>
        <li>Settled agriculture replaced pastoralism — wheat, rice, barley, cotton.</li>
        <li>Trade and craft specialization — guilds (shrenis) emerged.</li>
        <li>Coins not yet — <b>shatamana</b> (silver) and <b>krishnala</b> (gold weight) mentioned.</li>
      </ul>

      <h4>Religion</h4>
      <ul>
        <li>Indra and Agni declined in importance.</li>
        <li>Rise of <b>Prajapati</b> (creator), <b>Vishnu</b> (preserver), <b>Rudra-Shiva</b> (destroyer).</li>
        <li>Excessive ritualism; sacrifices became elaborate, costly.</li>
        <li>Beginnings of philosophical thought (Upanishads) — questioning ritualism.</li>
        <li>Concept of Atman, Brahman, karma, samsara, moksha emerged.</li>
      </ul>

      <h3>Pottery</h3>
      <ul>
        <li>Rig Vedic: <b>Ochre Coloured Pottery (OCP)</b>.</li>
        <li>Later Vedic: <b>Painted Grey Ware (PGW)</b>.</li>
        <li>Around 600 BC: <b>Northern Black Polished Ware (NBPW)</b> (associated with Mahajanapadas).</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>By the end of the Vedic Age (~600 BC), excessive Brahmanical ritualism, the rigidity of caste, and the costly Vedic sacrifices created social discontent. Out of this churning emerged two new religions — <b>Buddhism</b> and <b>Jainism</b> — both originating in the <b>Magadha-Vaishali region</b> in the 6th century BC. The next topic covers these revolutionary movements.</p>

      <hr>
      <h3>🧠 याद कैसे रखें? (Memory Tricks)</h3>
      <ul>
        <li><b>4 Vedas trick</b>: <b>"Rig-Sa-Ya-Atha"</b> in order of composition:
          <ul>
            <li><b>Rig</b>veda — <b>hymns/भजन</b> (oldest, 1028 hymns) — "Rig = सबसे पहली रिंग"</li>
            <li><b>Sama</b>veda — <b>songs/संगीत</b> — "Sa = Sa-Re-Ga-Ma"</li>
            <li><b>Yaju</b>rveda — <b>rituals/यज्ञ</b> — "Yaju = यज्ञ"</li>
            <li><b>Atharva</b>veda — <b>magic, medicine, daily life</b> — "Atharva = अद्भुत"</li>
          </ul>
        </li>
        <li><b>Vedic periods</b>: Early Vedic (1500–1000 BC, में सिर्फ़ Rigveda) → Later Vedic (1000–600 BC, बाक़ी 3 Vedas, बड़े kingdoms)।</li>
        <li><b>4 Varnas mnemonic</b>: <b>"Brahmin-Kshatriya-Vaishya-Shudra"</b> = "<b>BKVS</b>" — origin from Purusha Sukta in Rigveda (सिर - mouth, arms, thighs, feet)।</li>
        <li><b>4 Ashramas</b>: Brahmacharya (छात्र) → Grihastha (गृहस्थ) → Vanaprastha (वन) → Sannyasa (sanyasi)। Life का natural flow।</li>
        <li><b>Most important river of Rigveda</b>: <b>Saraswati</b> (mentioned 71 times); next Sindhu (Indus)। Ganga सिर्फ़ 1 बार mention।</li>
        <li><b>Story</b>: Vedic Aryans pastoral थे — cattle = wealth ("Gomat" = cow-owner = rich)। Battles cow को लेकर होती थीं ("Gavishti" = battle = literally "search for cows")।</li>
      </ul>
    `,
    mcq: [
      { q: "Aryans came to India around?", opts: ["3000 BC", "2000 BC", "1500 BC", "1000 BC"], a: 2, ex: "Around 1500 BC; from Central Asia / Pontic Steppe via Hindu Kush." },
      { q: "Saptasindhu refers to the?", opts: ["Region of seven rivers (Punjab + NW)", "Seven holy cities", "Seven oceans", "Seven sages"], a: 0, ex: "Land of seven rivers — Sindhu, Jhelum, Chenab, Ravi, Beas, Sutlej, Saraswati." },
      { q: "Oldest Veda is?", opts: ["Sama", "Yajur", "Rig", "Atharva"], a: 2, ex: "Rig Veda — oldest religious text still in use; 1,028 hymns in 10 mandalas." },
      { q: "Rig Veda has how many hymns?", opts: ["1008", "1028", "1108", "10000"], a: 1, ex: "1,028 hymns (suktas), 10,580 verses, 10 mandalas." },
      { q: "Gayatri Mantra is in which Veda?", opts: ["Rig", "Sama", "Yajur", "Atharva"], a: 0, ex: "Mandala III (3.62.10) of Rig Veda; composed by sage Vishwamitra; addressed to Savitri (Sun)." },
      { q: "Sama Veda is associated with?", opts: ["Sacrificial formulas", "Music / melodies", "Magical spells", "Philosophy"], a: 1, ex: "Sama = melody; chants at sacrifices; basis of Indian classical music." },
      { q: "Atharva Veda is associated with?", opts: ["Hymns to Indra", "Magic spells & charms", "Philosophy", "Geography"], a: 1, ex: "Atharva Veda — magical spells, healing, popular religion." },
      { q: "Which assembly is mentioned only in Rig Veda (oldest)?", opts: ["Sabha", "Samiti", "Vidatha", "Gana"], a: 2, ex: "Vidatha is the oldest assembly; mentioned only in Rig Veda." },
      { q: "Battle of Ten Kings was fought on?", opts: ["Saraswati", "Sarayu", "Parushni (Ravi)", "Yamuna"], a: 2, ex: "On Parushni (Ravi) river; Bharata King Sudas defeated a confederation of 10 tribes." },
      { q: "Most prominent Rig Vedic god was?", opts: ["Agni", "Indra", "Varuna", "Vishnu"], a: 1, ex: "Indra had 250 hymns; god of war and rain; called Purandara (fort-destroyer)." },
      { q: "Second most important Rig Vedic god was?", opts: ["Agni", "Soma", "Varuna", "Vishnu"], a: 0, ex: "Agni — 200 hymns; messenger between gods and humans." },
      { q: "Purusha Sukta describing the four varnas is in?", opts: ["Mandala 1, Rig Veda", "Mandala 10, Rig Veda", "Atharva Veda", "Manusmriti"], a: 1, ex: "Mandala 10 (a late mandala) of Rig Veda; Brahmana from mouth, Kshatriya from arms, Vaishya from thighs, Shudra from feet." },
      { q: "Purohita of Bharata King Sudas was?", opts: ["Vasishtha", "Vishvamitra", "Bharadvaja", "Vyasa"], a: 0, ex: "Vasishtha; Vishvamitra was on the opposing side at Battle of Ten Kings." },
      { q: "'Satyameva Jayate' is from?", opts: ["Rig Veda", "Mundaka Upanishad", "Manusmriti", "Bhagavad Gita"], a: 1, ex: "Taken from Mundaka Upanishad (3.1.6); national motto since 1950." },
      { q: "Six Vedangas include?", opts: ["Shiksha, Kalpa, Vyakarana, Nirukta, Chhanda, Jyotisha", "Brahmanas, Aranyakas, Upanishads", "Four Vedas + Brahma", "Manu, Yajnavalkya, etc"], a: 0, ex: "Six auxiliary sciences: phonetics, ritual, grammar, etymology, metre, astronomy." },
      { q: "Iron in Later Vedic was called?", opts: ["Shyama ayas / Krishna ayas", "Tamra", "Suvarna", "Loha"], a: 0, ex: "Shyama ayas or Krishna ayas — 'black metal'; widely used after 1000 BC." },
      { q: "Three royal sacrifices in Later Vedic period were?", opts: ["Rajasuya, Vajapeya, Ashvamedha", "Yajna, Tapas, Daana", "Brahma, Vishnu, Rudra", "Soma, Agni, Indra"], a: 0, ex: "Rajasuya (coronation), Vajapeya (chariot), Ashvamedha (horse sacrifice)." }
    ]
  };

  T["ah-religions"] = {
    body: `
      ${figRow([
        ["Buddha_in_Sarnath_Museum_(Dhammajak_Mutra).jpg", "Buddha (Sarnath, Gupta period)"],
        ["Mahavira.jpg", "Mahavira — 24th Jain Tirthankara"]
      ])}
      <h3>Why New Religions in 6th Century BC?</h3>
      <p>The 6th century BC was a period of religious churning in India. Several factors caused dissatisfaction with the existing Brahmanical Vedic religion:</p>
      <ol>
        <li><b>Excessive ritualism</b> and costly sacrifices — only the rich could afford yajnas.</li>
        <li><b>Brahmanical monopoly</b> — Sanskrit was incomprehensible to common people; rituals controlled by priests.</li>
        <li><b>Rigidity of varna system</b> — Vaishyas and Shudras had no spiritual access.</li>
        <li><b>Animal sacrifices</b> in yajnas — alienated the rising agricultural and trading classes who needed cattle.</li>
        <li><b>Rise of trading classes</b> — Vaishyas grew wealthy with iron-age agriculture and trade; wanted social status.</li>
        <li><b>Eastern Ganga basin</b> (Magadha, Vaishali, Kosala) was geographically away from Brahmanical heartland (Madhyadesh) — open to new ideas.</li>
        <li>Similar churning in West Asia (Zoroaster), Greece (Pythagoras), China (Confucius, Lao-tzu) — the "<b>Axial Age</b>" (Karl Jaspers).</li>
      </ol>
      <p>Out of this churning emerged about <b>62 sects</b> mentioned in Buddhist texts (e.g., Ajivika of Makkhali Gosala, Lokayata/Charvaka). Two — <b>Buddhism and Jainism</b> — became major world religions.</p>

      <hr>

      <h3>BUDDHISM</h3>

      <h4>Life of Buddha</h4>
      <ul>
        <li>Personal name: <b>Siddhartha Gautama</b>; later titled <b>Buddha (Enlightened One)</b>, <b>Tathagata</b>, <b>Shakyamuni</b>.</li>
        <li><b>Born 563 BC</b> at <b>Lumbini (Nepal)</b> on Vaishakha Purnima.</li>
        <li>Father: <b>Suddhodana</b>, chief of Shakya clan, Kapilavastu; Mother: <b>Maha Maya</b> (died 7 days after his birth); Stepmother: Mahaprajapati Gautami.</li>
        <li>Wife: <b>Yashodhara</b>; Son: <b>Rahula</b>.</li>
        <li><b>Four Sights</b> (drove him to renunciation): old man, sick man, dead body, ascetic.</li>
        <li><b>Mahabhinishkramana (Great Renunciation)</b> at age <b>29</b> — left palace one night with charioteer Channa and horse Kanthaka.</li>
        <li>Wandered for <b>6 years</b>; studied under <b>Alara Kalama and Uddaka Ramaputta</b>; practiced extreme asceticism, then abandoned it.</li>
        <li><b>Enlightenment (Bodhi)</b> at age <b>35</b> under a peepal (Bodhi) tree on the bank of the Niranjana river at <b>Bodh Gaya (Bihar)</b>.</li>
        <li><b>First Sermon</b> (<b>Dharma-Chakra-Pravartana</b> — "Turning the Wheel of Law") at <b>Deer Park, Sarnath (near Varanasi)</b> to his five former companions (Pancha Vargiya bhikkus).</li>
        <li>Preached for <b>45 years</b> in Pali; mainly in Magadha, Kosala, Kashi, Vatsa, Anga.</li>
        <li><b>Mahaparinirvana (death)</b> at <b>Kushinagar (UP)</b> at age <b>80 in 483 BC</b>; in the kingdom of Mallas. Cause: food poisoning at the home of a smith named Cunda.</li>
      </ul>

      <h4>Eight Sites in Buddha's Life (Ashtamahasthana)</h4>
      <ol>
        <li><b>Lumbini</b> — birth.</li>
        <li><b>Bodh Gaya</b> — enlightenment.</li>
        <li><b>Sarnath</b> — first sermon.</li>
        <li><b>Kushinagar</b> — death.</li>
        <li><b>Sravasti</b> — performed miracles; Anathapindika built Jetavana monastery.</li>
        <li><b>Sankasya</b> — descent from heaven.</li>
        <li><b>Rajagriha</b> — taming of mad elephant Nalagiri.</li>
        <li><b>Vaishali</b> — taming of monkey; predicted his own death.</li>
      </ol>

      <h4>Doctrine</h4>
      <ul>
        <li><b>Four Noble Truths (Arya Satya)</b>:
          <ol>
            <li><b>Dukkha</b> — Life is full of suffering.</li>
            <li><b>Dukkha-Samudaya</b> — Suffering has a cause (desire / craving / tanha).</li>
            <li><b>Dukkha-Nirodha</b> — Suffering can be ended.</li>
            <li><b>Magga</b> — There is a path to end suffering.</li>
          </ol>
        </li>
        <li><b>Eightfold Path (Astangika Marg / Madhyamarg — Middle Path)</b>:
          <ol>
            <li><b>Right View / Understanding</b> (Samyak Drishti)</li>
            <li><b>Right Intention / Resolve</b> (Samyak Sankalpa)</li>
            <li><b>Right Speech</b> (Samyak Vak)</li>
            <li><b>Right Action / Conduct</b> (Samyak Karmanta)</li>
            <li><b>Right Livelihood</b> (Samyak Ajiva)</li>
            <li><b>Right Effort</b> (Samyak Vyayama)</li>
            <li><b>Right Mindfulness</b> (Samyak Smriti)</li>
            <li><b>Right Concentration / Meditation</b> (Samyak Samadhi)</li>
          </ol>
        </li>
        <li><b>Three Jewels (Triratna)</b>: Buddha, Dhamma, Sangha.</li>
        <li><b>Five Precepts (Pancha Sila)</b> for laypersons:
          <ol>
            <li>No killing (ahimsa).</li>
            <li>No stealing.</li>
            <li>No sexual misconduct.</li>
            <li>No lying.</li>
            <li>No intoxicants.</li>
          </ol>
        </li>
        <li><b>Anatta</b> — no permanent soul.</li>
        <li><b>Anicca</b> — impermanence.</li>
        <li><b>Pratitya-samutpada</b> — dependent origination.</li>
        <li><b>Nirvana</b> — extinction of desire and suffering; liberation.</li>
        <li>Did NOT believe in: a creator god, soul (atman), Vedas, caste, ritual sacrifices.</li>
        <li>Believed in: karma, rebirth, liberation through self-effort.</li>
        <li><b>Language</b>: <b>Pali</b> (the language of common people in Magadha).</li>
      </ul>

      <h4>Tripitakas (Three Baskets) — Buddhist Canon</h4>
      <ol>
        <li><b>Vinaya Pitaka</b> — rules of monastic discipline for monks (bhikkus) and nuns (bhikkunis).</li>
        <li><b>Sutta Pitaka</b> — discourses of Buddha; further divided into 5 Nikayas; contains <b>Jatakas</b> (~550 stories of Buddha's previous lives).</li>
        <li><b>Abhidhamma Pitaka</b> — philosophical and analytical works; latest (added at 3rd Council).</li>
      </ol>
      <p>Other texts: <b>Milindapanho</b> (dialogue between Indo-Greek king <b>Menander/Milinda</b> and monk <b>Nagasena</b>); Dipavamsa, Mahavamsa (Sri Lankan chronicles).</p>

      <h4>Buddhist Councils</h4>
      <table>
        <tr><th>#</th><th>Year</th><th>Place</th><th>Patron</th><th>President</th><th>Highlight</th></tr>
        <tr><td>1st</td><td>483 BC</td><td>Rajagriha (Sapta-parni cave)</td><td>Ajatashatru</td><td>Mahakassapa</td><td>Compilation of <b>Vinaya</b> (by Upali) and <b>Sutta</b> (by Ananda); held just after Buddha's death.</td></tr>
        <tr><td>2nd</td><td>383 BC</td><td>Vaishali</td><td>Kalashoka (Shishunaga)</td><td>Sabakami</td><td>Schism over 10 disputed monastic rules; <b>Sthaviravadins (orthodox) vs Mahasanghikas (liberal)</b>.</td></tr>
        <tr><td>3rd</td><td>250 BC</td><td>Pataliputra</td><td>Ashoka</td><td>Moggaliputta Tissa</td><td>Final compilation of Tripitakas; <b>Abhidhamma added</b>; missions sent abroad.</td></tr>
        <tr><td>4th</td><td>~72 AD</td><td>Kundalavana, Kashmir</td><td>Kanishka</td><td>Vasumitra (President), Asvaghosha (Vice)</td><td>Split into <b>Hinayana</b> and <b>Mahayana</b>; Buddhism's first commentaries in <b>Sanskrit</b>.</td></tr>
      </table>

      <h4>Schools of Buddhism</h4>
      <ul>
        <li><b>Hinayana (Theravada — "Doctrine of Elders")</b> — older school; Pali language; no idol worship; Buddha as teacher (not god); aim is individual liberation; Sri Lanka, Myanmar, Thailand, Cambodia.</li>
        <li><b>Mahayana (The Great Vehicle)</b> — Sanskrit; <b>Bodhisattvas</b> (those who delay nirvana to help others); idol worship of Buddha; concept of Buddha as eternal divine being; aim is universal liberation; China, Japan, Korea, Tibet, Vietnam.</li>
        <li><b>Vajrayana (Thunderbolt Vehicle)</b> — Tantric Buddhism; emerged in 7th–8th century; magic, mantras; Tibet, Bhutan, Mongolia.</li>
      </ul>

      <h4>Royal Patrons</h4>
      <ul>
        <li><b>Bimbisara</b> (Magadha) — early follower; donated Veluvana monastery.</li>
        <li><b>Ajatashatru</b> — patron of 1st Buddhist Council.</li>
        <li><b>Ashoka</b> — most famous patron; sent missions worldwide.</li>
        <li><b>Kanishka</b> — patron of Mahayana; 4th Council in Kashmir.</li>
        <li><b>Harsha</b> — held Kanauj Buddhist Council.</li>
        <li><b>Pala kings</b> — Mahayana and Vajrayana patrons; Vikramshila University.</li>
      </ul>

      <h4>Buddhist Universities</h4>
      <ul>
        <li><b>Nalanda</b> — founded by Kumaragupta I (415–455 AD); peak under Harsha; destroyed by Bakhtiyar Khilji (1193).</li>
        <li><b>Vikramshila</b> — founded by Pala king Dharmapala (~770–810 AD); Bihar.</li>
        <li><b>Odantapuri</b> — Bihar; Pala period.</li>
        <li><b>Vallabhi</b> — Gujarat; Maitraka kingdom.</li>
        <li><b>Somapura</b> — Bangladesh; Pala period; UNESCO.</li>
      </ul>

      <h4>Famous Buddhist Symbols (no idol of Buddha till Kanishka era)</h4>
      <ul>
        <li>Lotus and Bull — birth.</li>
        <li>Horse — renunciation.</li>
        <li>Bodhi tree — enlightenment.</li>
        <li>Wheel (Dharmachakra) — first sermon.</li>
        <li>Stupa / Footprint — death / Mahaparinirvana.</li>
      </ul>

      <hr>

      <h3>JAINISM</h3>

      <h4>Origin and the 24 Tirthankaras</h4>
      <ul>
        <li>"Jain" derives from <b>Jina</b> ("conqueror" — one who has conquered passions).</li>
        <li><b>24 Tirthankaras</b> ("ford-makers" — those who help cross the ocean of existence).</li>
        <li><b>1st Tirthankara: Rishabhadeva (Adinath)</b> — symbol bull; mentioned in Rig Veda; considered the founder.</li>
        <li><b>23rd Tirthankara: Parshvanatha</b> — symbol snake; lived ~8th century BC; from Banaras; son of King Asvasena; preached <b>4 vows</b> (ahimsa, satya, asteya, aparigraha).</li>
        <li><b>24th Tirthankara: Mahavira</b> — symbol lion; the historical founder of Jainism in its current form.</li>
      </ul>

      <h4>Life of Mahavira</h4>
      <ul>
        <li>Personal name: <b>Vardhamana</b>; titles: <b>Mahavira (Great Hero), Jina, Tirthankara, Nirgrantha (free from bonds)</b>.</li>
        <li><b>Born 540 BC</b> (some say 599 BC) at <b>Kundagrama / Kundalpur (near Vaishali, Bihar)</b>.</li>
        <li>Father: <b>Siddhartha</b>, chief of Jnatrika clan; Mother: <b>Trishala</b> (sister of Lichchhavi chief Chetaka).</li>
        <li>Wife: <b>Yashoda</b>; Daughter: <b>Anojja / Priyadarshana</b> (Digambara sect denies he ever married).</li>
        <li><b>Renounced at age 30</b>; left home after parents' deaths.</li>
        <li>Practiced asceticism for <b>12.5 years</b>; abandoned clothes after 13 months.</li>
        <li><b>Attained Kaivalya (omniscience) at age 42</b> — at <b>Jrimbhikagrama</b> on the banks of <b>Rijupalika river</b>, under a Sal tree.</li>
        <li>Preached for <b>30 years</b> in Magadha, Anga, Vaishali, Mithila.</li>
        <li>Used <b>Prakrit (Ardhamagadhi)</b> — language of common people.</li>
        <li><b>Died at age 72 (468 BC)</b> at <b>Pavapuri (Bihar)</b> — in the kingdom of Mallas.</li>
        <li>11 chief disciples (Ganadharas); chief was <b>Indrabhuti Gautama</b>; only one (Sudharman) survived him.</li>
      </ul>

      <h4>Jain Doctrine</h4>
      <ul>
        <li><b>Three Jewels (Triratna)</b>:
          <ol>
            <li><b>Right Faith</b> (Samyak Darshana)</li>
            <li><b>Right Knowledge</b> (Samyak Jnana)</li>
            <li><b>Right Conduct</b> (Samyak Charitra)</li>
          </ol>
        </li>
        <li><b>Five Vows (Pancha Mahavrata)</b> for monks; partial vows (Anuvrata) for laypeople:
          <ol>
            <li><b>Ahimsa</b> — non-violence (most important).</li>
            <li><b>Satya</b> — truth.</li>
            <li><b>Asteya</b> — non-stealing.</li>
            <li><b>Brahmacharya</b> — celibacy / chastity (added by Mahavira to Parshvanatha's 4 vows).</li>
            <li><b>Aparigraha</b> — non-possession.</li>
          </ol>
        </li>
        <li><b>Anekantavada</b> — doctrine of "many-sidedness"; reality is multifaceted.</li>
        <li><b>Syadvada</b> — doctrine of conditional/probabilistic predication; "from this perspective..." Truth has 7 forms.</li>
        <li><b>Karma</b> as physical particles; soul (Jiva) is bound by karma; liberation = shedding all karma.</li>
        <li>Two basic principles: <b>Jiva</b> (soul) and <b>Ajiva</b> (non-soul / matter).</li>
        <li><b>Did NOT believe in</b>: creator god (atheistic in this sense), Vedas, sacrifices.</li>
        <li><b>Believed in</b>: soul (in everything — even stones, water, air); karma; rebirth; liberation (Kaivalya / moksha).</li>
        <li><b>Sallekhana</b> — voluntary fasting unto death; considered the highest achievement.</li>
      </ul>

      <h4>Jain Texts and Language</h4>
      <ul>
        <li>Original 14 Purvas — lost.</li>
        <li>12 Angas (canonical texts) — main scriptures.</li>
        <li>Other: Upangas, Mulasutras, Kalpasutra (by Bhadrabahu), Bhagavati Sutra, Acharanga Sutra.</li>
        <li>Language: <b>Prakrit (Ardhamagadhi)</b>; later also Sanskrit.</li>
      </ul>

      <h4>Jain Councils</h4>
      <table>
        <tr><th>#</th><th>Year</th><th>Place</th><th>President</th><th>Highlight</th></tr>
        <tr><td>1st</td><td>~300 BC</td><td>Pataliputra</td><td>Sthulabhadra</td><td>Compilation of 12 Angas; <b>schism into Digambara (sky-clad) and Svetambara (white-clad)</b> — Bhadrabahu went south to Sravanabelagola with disciples (including Chandragupta Maurya) during a famine; on return, found those who stayed had relaxed dress code.</td></tr>
        <tr><td>2nd</td><td>~512 AD</td><td>Vallabhi (Gujarat)</td><td>Devardhi Kshamasramana</td><td>Final compilation of Jain Agamas; written down for first time.</td></tr>
      </table>

      <h4>Two Sects of Jainism</h4>
      <table>
        <tr><th>Aspect</th><th>Digambara ("Sky-clad")</th><th>Svetambara ("White-clad")</th></tr>
        <tr><td>Region</td><td>South India</td><td>North/West India</td></tr>
        <tr><td>Clothing</td><td>Naked (monks)</td><td>White robes</td></tr>
        <tr><td>Liberation of women</td><td>Not possible</td><td>Possible</td></tr>
        <tr><td>Food</td><td>Strict ascetic; standing</td><td>Less strict</td></tr>
        <tr><td>Mahavira's marriage</td><td>Denied</td><td>Acknowledged</td></tr>
      </table>

      <h4>Royal Patrons</h4>
      <ul>
        <li><b>Bimbisara, Ajatashatru</b> — early sympathy.</li>
        <li><b>Chandragupta Maurya</b> — embraced Jainism in old age; abdicated and died at Sravanabelagola (Karnataka) by sallekhana under Bhadrabahu.</li>
        <li><b>Kharavela of Kalinga</b> — major Jain patron (1st century BC); Hathigumpha inscription.</li>
        <li><b>Chalukya Kumarapala</b> (12th c.) of Gujarat — under Hemchandra Suri.</li>
      </ul>

      <h4>Famous Jain Sites</h4>
      <ul>
        <li><b>Sravanabelagola (Karnataka)</b> — colossal statue of <b>Bahubali / Gomateshwara</b> (57 ft, ~983 AD, by Ganga ruler Rachamalla's minister Chamundaraya).</li>
        <li><b>Dilwara Temples (Mt. Abu, Rajasthan)</b> — Solanki/Chalukya period; marble.</li>
        <li><b>Khajuraho</b> (Jain group of temples).</li>
        <li><b>Palitana (Gujarat)</b> — Shatrunjaya hill; 863 temples.</li>
        <li><b>Ranakpur (Rajasthan)</b> — 15th c.</li>
        <li><b>Udayagiri-Khandagiri Caves (Odisha)</b> — Kharavela.</li>
      </ul>

      <hr>

      <h3>Comparison — Buddhism vs Jainism</h3>
      <table>
        <tr><th>Feature</th><th>Buddhism</th><th>Jainism</th></tr>
        <tr><td>Founder</td><td>Buddha (563–483 BC)</td><td>Mahavira (540–468 BC) — 24th Tirthankara</td></tr>
        <tr><td>Birthplace</td><td>Lumbini</td><td>Kundagrama (Vaishali)</td></tr>
        <tr><td>Death place</td><td>Kushinagar</td><td>Pavapuri</td></tr>
        <tr><td>Language</td><td>Pali</td><td>Prakrit (Ardhamagadhi)</td></tr>
        <tr><td>Path</td><td>Middle Path; Eightfold Path</td><td>Extreme asceticism; Triratna</td></tr>
        <tr><td>Vows</td><td>Pancha Sila (5 precepts)</td><td>5 Mahavratas</td></tr>
        <tr><td>Soul</td><td>Anatta — no permanent soul</td><td>Jiva — soul in all things</td></tr>
        <tr><td>God</td><td>No creator god</td><td>No creator god (Tirthankaras)</td></tr>
        <tr><td>Caste</td><td>Rejected</td><td>Rejected (mostly)</td></tr>
        <tr><td>Spread</td><td>Worldwide (Asia)</td><td>Mostly India</td></tr>
      </table>

      <h3>Looking Ahead</h3>
      <p>Buddhism and Jainism arose in a politically transforming northern India — the era of <b>16 Mahajanapadas</b> (great kingdoms). Of these, Magadha would absorb the others to become the first imperial power. The next topic surveys the 16 Mahajanapadas and the rise of Magadha.</p>

      <hr>
      <h3>🧠 याद कैसे रखें? (Memory Tricks)</h3>
      <ul>
        <li><b>Buddha quick facts</b> — "5-6-3 / 4-8-3":
          <ul>
            <li><b>563 BC जन्म</b> Lumbini (Nepal) में</li>
            <li><b>483 BC मृत्यु</b> Kushinagar में (UP)</li>
            <li><b>"Lumbini → Bodh Gaya → Sarnath → Kushinagar"</b> = जन्म → ज्ञान → first sermon → death = "LBSK"</li>
          </ul>
        </li>
        <li><b>4 Noble Truths trick — "DSDM"</b>: <b>D</b>ukkha (दुःख है), <b>S</b>amudaya (cause = इच्छा), <b>D</b>ukkha-Nirodh (मुक्ति संभव), <b>M</b>arg (path = 8-fold)।</li>
        <li><b>4 Buddhist Councils</b>:
          <ul>
            <li>1st — Rajgriha (483 BC) — under Ajatashatru</li>
            <li>2nd — Vaishali (383 BC) — Kalashoka</li>
            <li>3rd — Pataliputra (250 BC) — <b>Ashoka</b></li>
            <li>4th — Kashmir (72 AD) — <b>Kanishka</b>; Buddhism split into Hinayana और Mahayana</li>
          </ul>
        </li>
        <li><b>Mahavira</b>: 540 BC जन्म Vaishali → 468 BC मृत्यु Pavapuri। <b>24वें</b> Tirthankara (Rishabhanatha 1st, Parshvanatha 23rd)।</li>
        <li><b>3 Jain Jewels (Triratna)</b> — <i>"दर्शन-ज्ञान-चरित्र"</i> — Right belief, Right knowledge, Right conduct।</li>
        <li><b>5 Mahavratas of Jainism</b>: Ahimsa, Satya, Asteya (no stealing), Brahmacharya, Aparigraha (no possessions)।</li>
        <li><b>Trick — why 6th century BC?</b>: सोचो — Vedic rituals बहुत महंगे (animal sacrifice), Brahmins का दबाव बढ़ रहा था, trade बढ़ने से Vaishyas को नया धर्म चाहिए था जो birth-based caste न रखे — दोनों Buddhism और Jainism इसी need से निकले।</li>
      </ul>
    `,
    mcq: [
      { q: "Buddha was born at?", opts: ["Bodh Gaya", "Lumbini", "Sarnath", "Kushinagar"], a: 1, ex: "Lumbini (in present-day Nepal); 563 BC; Vaishakha Purnima." },
      { q: "Buddha's wife and son were?", opts: ["Trishala & Vardhamana", "Yashodhara & Rahula", "Mahamaya & Suddhodana", "Anula & Channa"], a: 1, ex: "Wife: Yashodhara; Son: Rahula." },
      { q: "Buddha attained enlightenment at?", opts: ["Lumbini", "Bodh Gaya", "Sarnath", "Kushinagar"], a: 1, ex: "Bodh Gaya, under a peepal/Bodhi tree at age 35." },
      { q: "Buddha delivered his first sermon at?", opts: ["Lumbini", "Sarnath", "Bodh Gaya", "Vaishali"], a: 1, ex: "Sarnath (Deer Park) — Dharma-Chakra-Pravartana to five companions." },
      { q: "Buddha died at?", opts: ["Lumbini", "Sarnath", "Vaishali", "Kushinagar"], a: 3, ex: "Kushinagar (UP) at age 80; Mahaparinirvana." },
      { q: "Tripitakas are written in?", opts: ["Sanskrit", "Pali", "Prakrit", "Magadhi"], a: 1, ex: "Pali — language of common people in Magadha." },
      { q: "First Buddhist Council was held at?", opts: ["Vaishali", "Rajagriha (Sapta-parni cave)", "Pataliputra", "Kashmir"], a: 1, ex: "Rajagriha, 483 BC, under Ajatashatru, presided by Mahakassapa." },
      { q: "Fourth Buddhist Council was held under?", opts: ["Ashoka", "Kanishka", "Ajatashatru", "Harsha"], a: 1, ex: "Kanishka, in Kashmir; led to Hinayana-Mahayana split; commentaries in Sanskrit." },
      { q: "Hinayana Buddhism uses which language?", opts: ["Pali", "Sanskrit", "Prakrit", "Tamil"], a: 0, ex: "Pali; older school; no idol worship." },
      { q: "Mahavira was the?", opts: ["1st Tirthankara", "23rd Tirthankara", "24th and last Tirthankara", "Buddhist saint"], a: 2, ex: "24th and last Tirthankara of Jainism; historical founder." },
      { q: "Mahavira was born at?", opts: ["Lumbini", "Kundagrama (Vaishali)", "Pavapuri", "Pataliputra"], a: 1, ex: "Kundagrama / Kundalpur near Vaishali (Bihar); 540 BC." },
      { q: "Jainism's 23rd Tirthankara was?", opts: ["Rishabhadeva", "Parshvanatha", "Neminath", "Mahavira"], a: 1, ex: "Parshvanatha (~8th century BC); preached the first 4 vows." },
      { q: "Mahavira added which 5th vow to Parshvanatha's 4?", opts: ["Ahimsa", "Satya", "Asteya", "Brahmacharya (celibacy)"], a: 3, ex: "Brahmacharya — celibacy/chastity. Other 4 already preached by Parshvanatha." },
      { q: "Mahavira died at?", opts: ["Vaishali", "Pavapuri", "Pataliputra", "Rajgir"], a: 1, ex: "Pavapuri (Bihar) at age 72; 468 BC." },
      { q: "Anekantavada is associated with?", opts: ["Buddhism", "Jainism", "Hinduism", "Charvaka"], a: 1, ex: "Jain doctrine of 'many-sidedness' of reality." },
      { q: "Digambara-Svetambara split occurred at?", opts: ["Pataliputra Council", "Vallabhi Council", "Rajagriha Council", "Vaishali Council"], a: 0, ex: "1st Jain Council at Pataliputra (~300 BC) under Sthulabhadra." },
      { q: "Bahubali / Gomateshwara statue is at?", opts: ["Mt. Abu", "Sravanabelagola (Karnataka)", "Khajuraho", "Palitana"], a: 1, ex: "Sravanabelagola, Karnataka — 57 ft monolithic statue, c. 983 AD." },
      { q: "Royal patron of Jainism in Kalinga was?", opts: ["Ashoka", "Kharavela", "Pulakeshin II", "Harsha"], a: 1, ex: "Kharavela (1st c. BC); Hathigumpha inscription at Udayagiri." },
      { q: "Chandragupta Maurya is said to have died at?", opts: ["Pataliputra by old age", "Sravanabelagola by sallekhana", "Taxila", "Ujjain"], a: 1, ex: "Sravanabelagola — abdicated and starved himself (sallekhana) under Bhadrabahu." }
    ]
  };

  T["ah-mahajanapadas"] = {
    body: `
      ${fig("Mahajanapadas_(c._500_BCE).png", "16 Mahajanapadas (c. 6th century BCE)", 700)}
      <h3>From Janapadas to Mahajanapadas</h3>
      <p>By the 6th century BC, India had transitioned from <b>tribal janapadas</b> (small tribal territories of the Vedic age) to <b>16 Mahajanapadas</b> (great kingdoms). The shift was driven by:</p>
      <ul>
        <li><b>Iron Age</b> agricultural surplus (Painted Grey Ware, NBPW culture) supporting larger populations.</li>
        <li>Use of <b>iron axes</b> to clear forests of the Ganga valley.</li>
        <li>Emergence of trade and money economy (first <b>punch-marked coins</b> ~6th century BC).</li>
        <li>Urbanization — the "Second Urbanization" of India after the Indus Valley.</li>
        <li>Buddhist and Jain texts list <b>16 great states</b>.</li>
      </ul>

      <h3>Sources Listing 16 Mahajanapadas</h3>
      <ul>
        <li><b>Anguttara Nikaya</b> (Buddhist text in Pali) — primary source.</li>
        <li><b>Bhagavati Sutra</b> (Jain text) — gives a slightly different list.</li>
        <li>Mahabharata, Puranas, Panini's Astadhyayi.</li>
      </ul>

      <h3>The 16 Mahajanapadas</h3>
      <table>
        <tr><th>#</th><th>Mahajanapada</th><th>Capital</th><th>Modern Region</th></tr>
        <tr><td>1</td><td><b>Anga</b></td><td>Champa</td><td>Bihar (Bhagalpur, Munger); annexed by Magadha early.</td></tr>
        <tr><td>2</td><td><b>Magadha</b></td><td>Rajagriha (Girivraja) → Pataliputra</td><td>Bihar (Patna, Gaya). The eventual victor.</td></tr>
        <tr><td>3</td><td><b>Kashi</b></td><td>Varanasi</td><td>UP (around Banaras).</td></tr>
        <tr><td>4</td><td><b>Kosala</b></td><td>Shravasti</td><td>UP (Eastern UP, around Faizabad/Ayodhya).</td></tr>
        <tr><td>5</td><td><b>Vajji (Vrijji) — confederacy</b></td><td>Vaishali</td><td>North Bihar; 8 clans including Lichchhavis (most important), Videha, Jnatrika (Mahavira's), Vajji proper.</td></tr>
        <tr><td>6</td><td><b>Malla — confederacy</b></td><td>Kushinara & Pava (two capitals)</td><td>Eastern UP; Buddha's death at Kushinagar.</td></tr>
        <tr><td>7</td><td><b>Chedi</b></td><td>Shuktimati / Sotthivati</td><td>Bundelkhand (MP/UP); Kalachuris of later period.</td></tr>
        <tr><td>8</td><td><b>Vatsa</b></td><td>Kaushambi (Kosam, near Allahabad)</td><td>UP; ruler Udayana (contemporary of Buddha).</td></tr>
        <tr><td>9</td><td><b>Kuru</b></td><td>Indraprastha (Hastinapur was old capital)</td><td>Delhi-Haryana-Western UP; of Mahabharata fame.</td></tr>
        <tr><td>10</td><td><b>Panchala</b></td><td>Ahichhatra (north) & Kampilya (south)</td><td>Western UP.</td></tr>
        <tr><td>11</td><td><b>Matsya</b></td><td>Viratnagar (Bairat, Rajasthan)</td><td>Rajasthan (Jaipur area).</td></tr>
        <tr><td>12</td><td><b>Surasena</b></td><td>Mathura</td><td>UP; ruler Avantiputra (Buddha's disciple).</td></tr>
        <tr><td>13</td><td><b>Ashmaka (Assaka)</b></td><td>Potana / Potali</td><td>Maharashtra (along Godavari); only Mahajanapada south of Vindhyas.</td></tr>
        <tr><td>14</td><td><b>Avanti</b></td><td>Ujjain (north) & Mahishmati (south)</td><td>Western MP. Major rival of Magadha; ruler Pradyota.</td></tr>
        <tr><td>15</td><td><b>Gandhara</b></td><td>Taxila</td><td>NW Pakistan, Eastern Afghanistan; ruler Pukkusati.</td></tr>
        <tr><td>16</td><td><b>Kamboja</b></td><td>Rajapura (some say Hatak/Pooch)</td><td>NW (Hindu Kush, parts of Afghanistan).</td></tr>
      </table>

      <h4>Mnemonic</h4>
      <blockquote>"<b>Anga, Magadha, Kashi, Kosala</b> ; <b>Vajji, Malla, Chedi, Vatsa</b> ; <b>Kuru, Panchala, Matsya, Surasena</b> ; <b>Assaka, Avanti, Gandhara, Kamboja</b>"</blockquote>

      <h3>Two Types of States</h3>
      <ul>
        <li><b>Monarchies</b>: Anga, Magadha, Kashi, Kosala, Chedi, Vatsa, Kuru (later monarchy), Panchala, Matsya, Surasena, Ashmaka, Avanti, Gandhara, Kamboja.</li>
        <li><b>Republics / Confederacies (Gana-Sangha)</b>: <b>Vajji and Malla</b>; also smaller republics — Lichchhavi, Sakya (Buddha's clan), Mallas, Koliyas, Bhaggas, Moriyas.</li>
        <li>In republics, the chief was <b>elected</b>; Sabha had real power; collective leadership.</li>
      </ul>

      <hr>

      <h3>Why Magadha Won — Reasons for Magadhan Supremacy</h3>
      <ol>
        <li><b>Geography</b>: Bound by rivers Ganga, Son, Champa — natural defense; fertile alluvial plain.</li>
        <li><b>Iron deposits</b> at Rajgir hills — gave Magadha a military and economic edge.</li>
        <li><b>Two strategic capitals</b>: Rajagriha (5 hills, fortified); Pataliputra (water-fortress at confluence of Ganga, Son, Punpun).</li>
        <li><b>Use of elephants</b> — Magadhan kings deployed war elephants from forests of Bengal/Odisha; other states didn't.</li>
        <li><b>Ambitious and unscrupulous kings</b> — Bimbisara, Ajatashatru, Mahapadma Nanda.</li>
        <li><b>Trade and resources</b> — control of the lower Ganga gave commercial wealth.</li>
        <li><b>Unorthodox religious environment</b> — receptive to Buddhism and Jainism, freeing Magadha from Brahmanical caste rigidities of north-west.</li>
      </ol>

      <hr>

      <h3>Dynasties of Magadha</h3>

      <h4>1. Brihadrathas (Earliest, c. 1700 BC – 6th c. BC)</h4>
      <ul>
        <li>Mythological dynasty mentioned in Mahabharata; founder Brihadratha; famous king <b>Jarasandha</b>.</li>
      </ul>

      <h4>2. Haryanka Dynasty (~544 – 412 BC)</h4>
      <table>
        <tr><th>Ruler</th><th>Reign</th><th>Key Facts</th></tr>
        <tr><td><b>Bimbisara</b> (Shrenika)</td><td>544–492 BC</td><td>Founder of Magadhan empire; ruled <b>52 years</b>; capital <b>Rajagriha (Girivraja)</b>; <b>matrimonial alliances</b> — married <b>Kosala Devi</b> (Kosala — got Kashi as dowry), <b>Chellana</b> (Vaishali — Lichchhavi), <b>Khema</b> (Madra/Punjab); <b>conquered Anga</b>; contemporary of <b>Buddha and Mahavira</b>; killed by his son.</td></tr>
        <tr><td><b>Ajatashatru</b> (Kunika)</td><td>492–460 BC</td><td>Killed his father Bimbisara to ascend; <b>16-year war with Vaishali</b> (Vajji confederacy); finally annexed Vaishali by sowing internal discord using minister <b>Vassakara</b>; war with Kosala; built fort at <b>Pataligrama</b> (later Pataliputra) on Ganga; held <b>1st Buddhist Council</b> at Rajagriha. Used new weapons — <b>Mahashilakantaka (catapult)</b> and <b>Rathamushala (chariot with mounted blade)</b>.</td></tr>
        <tr><td><b>Udayin / Udayabhadra</b></td><td>460–444 BC</td><td>Killed his father Ajatashatru; <b>founded Pataliputra (Patna) in 461 BC</b> at confluence of Ganga and Son.</td></tr>
        <tr><td>Anuruddha, Munda, Naga-Dasaka</td><td>444–412 BC</td><td>Successive parricides; "father-killers". The last, Naga-Dasaka, was overthrown by his amatya (minister) <b>Shishunaga</b>.</td></tr>
      </table>

      <h4>3. Shishunaga Dynasty (~412–344 BC)</h4>
      <ul>
        <li>Founder: <b>Shishunaga</b> — overthrew Naga-Dasaka; capital Vaishali (briefly); annexed <b>Avanti and Vatsa</b>.</li>
        <li><b>Kalashoka (Kakavarna)</b> — held the <b>2nd Buddhist Council at Vaishali (383 BC)</b>; transferred capital back to Pataliputra.</li>
        <li>Last Shishunaga ruler killed by Mahapadma Nanda.</li>
      </ul>

      <h4>4. Nanda Dynasty (~344–322 BC) — First Imperial Dynasty</h4>
      <ul>
        <li><b>Mahapadma Nanda</b> — founder; "Sarvakshatrantaka" (uprooter of all Kshatriyas); "Ekarat" (sole sovereign); "Ugrasena"; said to have low-caste origin.</li>
        <li>Greatly expanded Magadha to include <b>Kosala, Kashi, Avanti, Surasena, Kalinga</b> — first true empire.</li>
        <li>According to Plutarch, the Nandan army facing Alexander was <b>2,00,000 infantry, 80,000 cavalry, 8,000 chariots, 6,000 elephants</b> — too formidable for Alexander's exhausted men.</li>
        <li>Hugely wealthy — "Navanidhi" (nine treasures); legendary in Sanskrit literature.</li>
        <li><b>Last Nanda — Dhana Nanda (Agrammes / Xandrames in Greek sources)</b> — unpopular due to over-taxation; defeated and killed by <b>Chandragupta Maurya with Kautilya's help</b> (~322 BC).</li>
        <li>Nandas extended Magadha to NW; built network of roads.</li>
      </ul>

      <hr>

      <h3>Alexander the Great's Invasion of India (327–325 BC)</h3>
      <ul>
        <li>Alexander III of Macedon (356–323 BC) had defeated Persia (Battle of Gaugamela, 331 BC); reached the borders of India by 327 BC.</li>
        <li>Crossed the <b>Hindu Kush</b> in 327 BC; through Bajaur, Swat, Buner.</li>
        <li>Crossed <b>Indus</b> in spring 326 BC at Ohind (near Attock).</li>
        <li><b>Ambhi (Omphis)</b>, king of <b>Taxila</b>, voluntarily submitted; gave 200 silver talents, 3,000 oxen, elephants.</li>
      </ul>

      <h4>Battle of Hydaspes (May 326 BC) — vs Porus</h4>
      <ul>
        <li>Fought on the <b>Hydaspes river (Jhelum)</b>.</li>
        <li><b>Alexander vs Porus (Indian: Puru/Paurava)</b> — king of the Paurava country (between Jhelum and Chenab).</li>
        <li>Porus was tall and brave; led elephants; lost two sons.</li>
        <li>Alexander won but suffered heavy losses; impressed by Porus's bravery, asked how he wished to be treated; Porus said "<b>like a king</b>"; Alexander restored his kingdom and added more.</li>
        <li>Alexander's horse <b>Bucephalus</b> died after the battle; he founded city <b>Bucephala</b>.</li>
      </ul>

      <h4>Mutiny at Beas (326 BC)</h4>
      <ul>
        <li>Alexander wanted to push to the Ganga and confront the Nandas.</li>
        <li>His exhausted army <b>refused to advance</b> at the river <b>Beas (Hyphasis)</b> — frightened by stories of Nanda's elephants.</li>
        <li>Alexander reluctantly turned back; built 12 altars on Beas as the easternmost limit of his conquest.</li>
        <li>Sailed down the Indus; founded Alexandria (modern Uchh).</li>
        <li>Returned via the <b>Gedrosian (Makran) desert</b> — heavy losses.</li>
        <li>Reached Babylon; <b>died there at age 32 in June 323 BC</b>.</li>
      </ul>

      <h4>Effects of Alexander's Invasion</h4>
      <ul>
        <li>Direct contact between India and Greece; gave Greeks knowledge of India (Megasthenes' later mission stems from this).</li>
        <li>Established four <b>Indo-Greek satrapies</b> in NW India which became kingdoms after his death.</li>
        <li>Possibly inspired <b>Chandragupta Maurya</b> (whom he reportedly met as a young man) to overthrow the Nandas.</li>
        <li>Introduced Hellenistic art, coinage style.</li>
        <li>Inspired the Carolus-Schliemann route between India and the Mediterranean.</li>
        <li>However, Alexander's invasion left no permanent impression on Indian historical literature — Indian sources do not mention him at all!</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>Alexander's withdrawal left a power vacuum in north-western India. Chandragupta Maurya, with Chanakya's guidance, exploited it — first defeating Greek satraps in the NW, then overthrowing the Nandas at Magadha. The result was the <b>Mauryan Empire</b> — India's first great empire. The next topic covers the Mauryas.</p>

      <hr>
      <h3>🧠 याद कैसे रखें? (Memory Tricks)</h3>
      <ul>
        <li><b>16 Mahajanapadas</b> — पूरा list याद रखना मुश्किल। Focus on Magadha (most important — ultimately सबको हराकर empire बना)।</li>
        <li><b>4 most powerful</b>: <b>Magadha, Kosala, Vatsa, Avanti</b> — "Ma-Ko-Va-A"।</li>
        <li><b>Magadha की 4 dynasties (Mauryas से पहले)</b>: <b>"HSN"</b> = <b>H</b>aryanka → <b>S</b>hishunaga → <b>N</b>anda → फिर Maurya।
          <ul>
            <li><b>Haryanka</b>: Bimbisara → Ajatashatru (his son who killed him) → 1st Buddhist council under Ajatashatru</li>
            <li><b>Shishunaga</b>: Kalashoka → 2nd Buddhist council</li>
            <li><b>Nanda</b>: Mahapadma Nanda — first non-Kshatriya king; immense wealth; आख़िरी Nanda — Dhana Nanda — defeated by Chandragupta Maurya</li>
          </ul>
        </li>
        <li><b>Capital of Magadha</b>: पहले Rajgriha (Haryanka) → फिर Pataliputra (Shishunaga onwards)।</li>
        <li><b>Story</b>: Bimbisara कूटनीतिक राजा था — Kosala, Vaishali, Madra की राजकुमारियों से शादी करके alliances बनाए। उसका बेटा Ajatashatru ने उसे जेल में डालकर मार डाला (Buddha के time पर)। यानि Magadha का rise = strategic marriages + military force।</li>
      </ul>
    `,
    mcq: [
      { q: "16 Mahajanapadas are mentioned in?", opts: ["Mahabharata", "Anguttara Nikaya", "Arthashastra", "Manusmriti"], a: 1, ex: "Buddhist text Anguttara Nikaya in Pali; Bhagavati Sutra (Jain) gives a similar list." },
      { q: "Which Mahajanapada was a republic / gana-sangha?", opts: ["Anga", "Vajji", "Magadha", "Kosala"], a: 1, ex: "Vajji confederacy with capital Vaishali; another republic was Malla. The rest were monarchies." },
      { q: "Capital of Avanti was?", opts: ["Mathura", "Ujjain (& Mahishmati)", "Kaushambi", "Champa"], a: 1, ex: "Avanti had two capitals — Ujjain (north) and Mahishmati (south)." },
      { q: "Founder of Magadhan empire (Haryanka dynasty) was?", opts: ["Ajatashatru", "Bimbisara", "Udayin", "Mahapadma Nanda"], a: 1, ex: "Bimbisara (544–492 BC) — contemporary of Buddha; ruled 52 years; matrimonial alliances." },
      { q: "Bimbisara got Kashi as dowry from?", opts: ["Vaishali", "Kosala", "Madra", "Avanti"], a: 1, ex: "By marrying Kosala Devi, sister of king Prasenajit of Kosala." },
      { q: "Who killed Bimbisara?", opts: ["His father", "His son Ajatashatru", "Shishunaga", "Mahapadma Nanda"], a: 1, ex: "Ajatashatru killed his father Bimbisara to ascend the throne." },
      { q: "First Buddhist Council was held under?", opts: ["Bimbisara", "Ajatashatru", "Ashoka", "Kanishka"], a: 1, ex: "Held at Rajagriha in 483 BC under Ajatashatru, just after Buddha's death." },
      { q: "Pataliputra was founded by?", opts: ["Bimbisara", "Ajatashatru", "Udayin", "Mahapadma Nanda"], a: 2, ex: "Udayin built Pataliputra in 461 BC at the confluence of Ganga and Son." },
      { q: "Founder of Nanda dynasty was?", opts: ["Mahapadma Nanda", "Dhana Nanda", "Shishunaga", "Bimbisara"], a: 0, ex: "Mahapadma Nanda — 'Ekarat' (sole sovereign); 'Sarvakshatrantaka' (uprooter of all Kshatriyas)." },
      { q: "Last ruler of Nanda dynasty defeated by Chandragupta Maurya was?", opts: ["Mahapadma Nanda", "Dhana Nanda", "Bindusara", "Bimbisara"], a: 1, ex: "Dhana Nanda (Agrammes/Xandrames in Greek) was overthrown around 322 BC." },
      { q: "Alexander invaded India in?", opts: ["327–325 BC", "325–323 BC", "302 BC", "261 BC"], a: 0, ex: "Crossed Indus in 326 BC; left India 325 BC; died 323 BC at Babylon." },
      { q: "Alexander defeated Porus at the Battle of?", opts: ["Indus", "Hydaspes (Jhelum)", "Beas", "Sutlej"], a: 1, ex: "Battle of Hydaspes (May 326 BC) on the Jhelum river." },
      { q: "Alexander's army mutinied at?", opts: ["Indus", "Jhelum", "Chenab", "Beas (Hyphasis)"], a: 3, ex: "At the Beas (Hyphasis); soldiers refused to advance further east." },
      { q: "Which Mahajanapada was Buddha's home tribe?", opts: ["Vatsa", "Sakya (subordinate to Kosala)", "Magadha", "Kashi"], a: 1, ex: "Buddha was a prince of the Sakya clan, capital Kapilavastu — a small republic under Kosala." }
    ]
  };

  T["ah-mauryas"] = {
    body: `
      ${figRow([
        ["Maurya_Dynasty_in_265_BCE.jpg", "Maurya Empire under Ashoka (c. 265 BCE)"],
        ["Sarnath_capital.jpg", "Sarnath Lion Capital of Ashoka — India's national emblem"],
        ["Stupa 1, Sanchi 02.jpg", "Sanchi Stupa (built by Ashoka, MP)"]
      ])}
      <h3>The First Indian Empire (322–185 BC)</h3>
      <p>The Mauryan Empire was India's <b>first great empire</b> — covering virtually the entire subcontinent except deep south. It was built and held by three remarkable rulers — <b>Chandragupta, Bindusara, and Ashoka</b> — over about a century, then collapsed in two generations. Our knowledge of it comes from a richer set of sources than any earlier period in Indian history.</p>

      <h3>Sources for Mauryan History</h3>
      <ul>
        <li><b>Arthashastra</b> by <b>Kautilya / Chanakya / Vishnugupta</b> — handbook of statecraft; ~15 books on administration, economy, war, espionage.</li>
        <li><b>Indica</b> by <b>Megasthenes</b> — Greek ambassador; original lost; survives in fragments quoted by Strabo, Arrian, Diodorus, Pliny.</li>
        <li><b>Ashokan Edicts</b> — 14 Major Rock + 7 Pillar + several Minor; in Brahmi (mostly), Kharoshti (NW), Greek & Aramaic (Kandahar).</li>
        <li><b>Mudrarakshasa</b> by <b>Vishakhadatta</b> (Sanskrit play, ~5th century AD) — about how Chanakya helped Chandragupta.</li>
        <li>Buddhist texts: <b>Ashokavadana, Divyavadana, Mahavamsa, Dipavamsa</b>.</li>
        <li>Jain text: <b>Parisishtaparvan</b> by Hemchandra.</li>
        <li>Puranas: lists of Mauryan kings.</li>
      </ul>

      <hr>

      <h3>Chandragupta Maurya (322–298 BC) — Founder</h3>

      <h4>Origins (Disputed)</h4>
      <ul>
        <li>Buddhist tradition: Kshatriya from Moriya clan of Pippalivana (related to the Sakyas of Buddha's tribe).</li>
        <li>Brahmanical tradition: Mura (a Shudra woman in the Nanda harem); hence Maurya = "son of Mura".</li>
        <li>Greek sources: Sandrokottos / Sandrokoptos.</li>
      </ul>

      <h4>Rise to Power</h4>
      <ul>
        <li>Met as a young man (allegedly) by <b>Alexander</b> in NW India (~325 BC); some say he was already plotting against the Nandas.</li>
        <li>Mentor: <b>Chanakya / Kautilya / Vishnugupta</b> — Brahmin teacher at Taxila; insulted by Dhana Nanda; vowed revenge.</li>
        <li>Recruited an army from the Punjab tribes; first ousted Greek garrisons left by Alexander.</li>
        <li><b>Defeated Dhana Nanda ~322 BC</b>; ascended the Magadhan throne.</li>
      </ul>

      <h4>Conquests and Expansion</h4>
      <ul>
        <li>Extended empire westward — through Punjab, Sind, Gandhara, Kabul Valley, Herat, Kandahar, Baluchistan.</li>
        <li>Southward to Karnataka (evidence at Sravanabelagola).</li>
        <li><b>War with Seleucus Nicator (305 BC)</b> — Seleucus, successor of Alexander, tried to recover Indian provinces. Defeated by Chandragupta.</li>
        <li><b>Treaty of 303 BC</b>:
          <ul>
            <li>Chandragupta got: <b>Aria (Herat), Arachosia (Kandahar), Gedrosia (Makran), Paropanisadae (Kabul)</b>.</li>
            <li>Gave Seleucus: <b>500 war elephants</b> (used by Seleucus to win the Battle of Ipsus, 301 BC).</li>
            <li>Matrimonial alliance — Chandragupta probably married Seleucus's daughter.</li>
            <li>Exchange of ambassadors — <b>Megasthenes</b> sent to Pataliputra; later Deimachus and Dionysius.</li>
          </ul>
        </li>
      </ul>

      <h4>Religious Conversion and Death</h4>
      <ul>
        <li>According to Jain tradition, Chandragupta embraced <b>Jainism</b> in old age under <b>Bhadrabahu</b>.</li>
        <li>Abdicated in favor of son Bindusara.</li>
        <li>Travelled south during a 12-year famine; died by <b>sallekhana (ritual fasting unto death) at Sravanabelagola (Karnataka)</b> ~298 BC.</li>
        <li>The Chandragiri hill at Sravanabelagola is named after him.</li>
      </ul>

      <hr>

      <h3>Bindusara (298–272 BC) — "Amitraghata"</h3>
      <ul>
        <li>Son of Chandragupta and Durdhara.</li>
        <li>Title <b>"Amitraghata"</b> (slayer of foes); Greeks called him <b>"Amitrochates" / "Allitrochades"</b>.</li>
        <li>Maintained Mauryan empire; some say extended it to the Mysore plateau.</li>
        <li>Followed the <b>Ajivika sect</b> (founded by Makkhali Gosala); his guru/counsellor was the Ajivika monk <b>Pingalavatsa</b>.</li>
        <li>Maintained diplomatic ties with:
          <ul>
            <li><b>Antiochus I Soter</b> (Syria) — son of Seleucus.</li>
            <li><b>Ptolemy II Philadelphus</b> (Egypt) — sent ambassador <b>Dionysius</b>.</li>
            <li>Antiochus refused Bindusara's request for sweet wine, dried figs, and a sophist.</li>
          </ul>
        </li>
        <li>Suppressed a revolt at Taxila — sent young <b>Ashoka</b> as governor.</li>
        <li>Died ~272 BC; according to tradition, succession war between his sons; Ashoka killed 99 brothers (legend) to ascend.</li>
      </ul>

      <hr>

      <h3>Ashoka the Great (268–232 BC)</h3>

      <h4>Background</h4>
      <ul>
        <li>Mother: Subhadrangi (Buddhist tradition) / Dharma (Jain).</li>
        <li>Earlier governor at <b>Taxila and Ujjain</b>.</li>
        <li>Married <b>Devi</b> (Sakyan, daughter of merchant of Vidisha) — children <b>Mahendra and Sanghamitra</b> who later went to Sri Lanka.</li>
        <li>Other wives: Kaurvaki, Padmavati, Tishyaraksita.</li>
        <li>Coronated <b>4 years after father's death (268 BC)</b>; succession struggle.</li>
        <li>Earliest titles: <b>Devanampiya Piyadassi</b> ("Beloved of the Gods, of pleasing appearance"); also <b>"Magadhraja"</b>.</li>
        <li>Name "Ashoka" found in only a few Minor Rock Edicts (especially <b>Maski</b>).</li>
      </ul>

      <h4>Kalinga War (261 BC) — The Turning Point</h4>
      <ul>
        <li>In his <b>13th regnal year (261 BC)</b>, Ashoka invaded the rich coastal kingdom of <b>Kalinga (modern Odisha)</b>.</li>
        <li>According to <b>13th Major Rock Edict</b>: <b>1,00,000 killed, 1,50,000 deported, many more died</b>.</li>
        <li>The bloodshed shocked Ashoka; he embraced <b>Dhamma / Buddhism</b>.</li>
        <li>This was the only war Ashoka fought.</li>
      </ul>

      <h4>Ashoka's Dhamma</h4>
      <ul>
        <li>Not a religion — a code of ethics for all subjects:
          <ul>
            <li>Respect for parents, elders, teachers.</li>
            <li>Compassion for slaves and servants.</li>
            <li>Tolerance of all religions and sects.</li>
            <li>Truthfulness; ahimsa (non-violence).</li>
            <li>Welfare of all beings.</li>
          </ul>
        </li>
        <li>To spread Dhamma:
          <ul>
            <li><b>Dhamma-Mahamatras</b> appointed (officers of Dhamma).</li>
            <li>Sent <b>Dhamma missions</b> abroad — Sri Lanka (son <b>Mahendra</b> and daughter <b>Sanghamitra</b>), Burma, Cambodia, Egypt (Ptolemy II), Macedonia (Antigonus), Cyrenaica (Magas), Epirus (Alexander II), Syria (Antiochus II).</li>
            <li>Convened <b>3rd Buddhist Council at Pataliputra (~250 BC)</b> under <b>Moggaliputta Tissa</b>.</li>
            <li>Banned animal sacrifices; royal hunting reduced.</li>
            <li>Built hospitals for humans and animals.</li>
            <li>Planted shade trees, dug wells along roads.</li>
          </ul>
        </li>
        <li>Did NOT impose Buddhism on subjects; encouraged tolerance — most edicts were written for non-Buddhists.</li>
      </ul>

      <h4>Ashoka's Construction</h4>
      <ul>
        <li>Built ~<b>84,000 stupas</b> (legendary): <b>Sanchi (MP), Bharhut, Sarnath</b>, etc.</li>
        <li>Cut <b>Barabar Caves (Bihar)</b> — earliest example of rock-cut architecture in India; gifted to Ajivikas.</li>
        <li>Erected pillars (over 30 known) — single block of <b>polished Chunar sandstone</b>; topped with animal capitals (lions, bulls, elephants).</li>
        <li>Most famous: <b>Sarnath Lion Capital</b> — adopted as <b>National Emblem of India (26 January 1950)</b>; the wheel below it (Dharma Chakra) is on the national flag.</li>
        <li>Wrote inscriptions across the empire — communicating directly with subjects in their language.</li>
      </ul>

      <hr>

      <h3>Ashokan Edicts — Survey</h3>

      <h4>14 Major Rock Edicts</h4>
      <p>Engraved on rock surfaces; 14 inscriptions found at multiple sites.</p>
      <table>
        <tr><th>Site</th><th>Location</th><th>Notes</th></tr>
        <tr><td><b>Girnar</b></td><td>Junagadh, Gujarat</td><td>—</td></tr>
        <tr><td><b>Dhauli</b></td><td>Odisha (near Bhubaneshwar)</td><td>Replaces 11, 12, 13 with separate Kalinga edicts; "all men are my children".</td></tr>
        <tr><td><b>Jaugada</b></td><td>Odisha</td><td>Same separate Kalinga edicts.</td></tr>
        <tr><td><b>Kalsi</b></td><td>Uttarakhand</td><td>—</td></tr>
        <tr><td><b>Mansehra</b></td><td>Hazara, Pakistan</td><td>In Kharoshti.</td></tr>
        <tr><td><b>Shahbazgarhi</b></td><td>NWFP, Pakistan</td><td>In Kharoshti.</td></tr>
        <tr><td><b>Sopara</b></td><td>Maharashtra</td><td>—</td></tr>
        <tr><td><b>Yerragudi</b></td><td>Andhra</td><td>—</td></tr>
      </table>

      <h4>13th Major Rock Edict — The Most Famous</h4>
      <ul>
        <li>The <b>Kalinga Edict</b>; describes Ashoka's remorse over the war.</li>
        <li>Mentions five contemporary Greek kings (the only direct historical synchronism in Indian history of this era):
          <ul>
            <li>Antiochus II Theos of Syria.</li>
            <li>Ptolemy II Philadelphus of Egypt.</li>
            <li>Antigonus II Gonatas of Macedonia.</li>
            <li>Magas of Cyrene.</li>
            <li>Alexander II of Epirus.</li>
          </ul>
        </li>
      </ul>

      <h4>Minor Rock Edicts</h4>
      <ul>
        <li>About 17 places: <b>Maski (Karnataka) — bears the name "Ashoka"</b>; Brahmagiri, Gujarra (MP), Bairat, Sasaram, Rupanath.</li>
        <li>Gujarra and Maski are the only two places that mention the actual name "Ashoka"; all others use "Devanampiya Piyadassi".</li>
      </ul>

      <h4>7 Pillar Edicts</h4>
      <ul>
        <li>On large stone pillars; 7 inscribed pillars known.</li>
        <li>Sites: <b>Topra (now Delhi-Topra), Meerut (now Delhi-Meerut), Allahabad (Prayag), Lauriya-Araraj, Lauriya-Nandangarh, Rampurva, Sarnath</b>.</li>
        <li>Topra and Meerut pillars were brought to Delhi by Firoz Shah Tughlaq.</li>
        <li><b>Allahabad pillar</b> — bears Ashokan edicts + later inscriptions of Samudragupta and Jahangir.</li>
        <li>Sarnath has the famous <b>Lion Capital</b>.</li>
      </ul>

      <h4>Scripts Used</h4>
      <ul>
        <li><b>Brahmi</b> — most edicts; left-to-right; deciphered by <b>James Princep (1837)</b>.</li>
        <li><b>Kharoshti</b> — Mansehra, Shahbazgarhi (NW); right-to-left.</li>
        <li><b>Greek and Aramaic</b> — Kandahar bilingual (Shar-i-Kuna).</li>
      </ul>

      <hr>

      <h3>Mauryan Administration</h3>

      <h4>Centralized Bureaucracy</h4>
      <ul>
        <li>Centre: King at Pataliputra; advised by <b>Mantriparishad</b> (Council of Ministers).</li>
        <li><b>4 (later 5) provinces (chakras)</b>:
          <ol>
            <li><b>Uttarapatha</b> (North) — capital <b>Taxila</b>.</li>
            <li><b>Avantirashtra</b> (West) — capital <b>Ujjain</b>.</li>
            <li><b>Dakshinapatha</b> (South) — capital <b>Suvarnagiri (Karnataka)</b>.</li>
            <li><b>Prachyapatha</b> (East/Kalinga, after 261 BC) — capital <b>Tosali (Odisha)</b>.</li>
            <li><b>Madhyadesha</b> (Centre) — Pataliputra itself.</li>
          </ol>
        </li>
        <li>Provinces under <b>Kumaras</b> (princes / royal governors).</li>
      </ul>

      <h4>Officials</h4>
      <ul>
        <li><b>18 Tirthas</b> — top officials (Mantri, Purohita, Senapati, Yuvaraja, etc.).</li>
        <li><b>Adhyakshas (~30)</b> — heads of departments (mining, gold, weights, ports, customs, treasury, etc.); described in detail in Arthashastra.</li>
        <li><b>Yuktas</b> — middle-rank officials, supervisors of revenue.</li>
        <li><b>Rajukas</b> — judicial and revenue officials in rural areas (added by Ashoka).</li>
        <li><b>Pradeshikas</b> — district officers; toured for inspection every 5 years.</li>
        <li><b>Mahamatras</b> — high officials; Ashoka added <b>Dhamma-Mahamatras</b> for moral welfare.</li>
        <li><b>Gopas</b> — village accountants; <b>Sthanikas</b> — tax collectors.</li>
        <li><b>Espionage</b> — elaborate; Arthashastra describes 9 types of spies (housewife, monk, pupil, etc.).</li>
      </ul>

      <h4>Pataliputra City Administration</h4>
      <p>Megasthenes describes <b>6 boards (committees) of 5 members each (total 30)</b> for Pataliputra:</p>
      <ol>
        <li>Industries.</li>
        <li>Foreigners.</li>
        <li>Birth and death registration.</li>
        <li>Trade and commerce.</li>
        <li>Inspection of manufacturing.</li>
        <li>Sale tax (1/10 of price).</li>
      </ol>

      <h4>Society — Megasthenes' Seven Classes</h4>
      <p>Megasthenes wrongly described Indian society as 7 classes (probably misunderstanding of Indian varnas + occupational groups):</p>
      <ol>
        <li>Philosophers (Brahmanas, Sramanas).</li>
        <li>Farmers.</li>
        <li>Soldiers.</li>
        <li>Herdsmen.</li>
        <li>Artisans.</li>
        <li>Magistrates / Inspectors.</li>
        <li>Councillors.</li>
      </ol>

      <h4>Economy</h4>
      <ul>
        <li>State controlled mines, salt, key crafts.</li>
        <li>Land revenue: <b>1/4 to 1/6 of produce</b> (bhaga); plus bali, kara.</li>
        <li>Highly developed irrigation — <b>Sudarshan Lake</b> built by Pushyagupta (governor of Saurashtra) under Chandragupta; repaired later by Tushaspha (under Ashoka).</li>
        <li>Sthala (toll) and import-export duties.</li>
        <li>Coins: punch-marked silver and copper coins.</li>
      </ul>

      <h4>Military</h4>
      <p>According to Pliny (citing Megasthenes), the Mauryan army:</p>
      <ul>
        <li><b>6,00,000 infantry</b>.</li>
        <li><b>30,000 cavalry</b>.</li>
        <li><b>9,000 elephants</b>.</li>
        <li>8,000 chariots.</li>
        <li>Six committees of 5 members each managed war (navy, transport, infantry, cavalry, chariots, elephants).</li>
      </ul>

      <hr>

      <h3>Mauryan Art and Architecture</h3>
      <ul>
        <li><b>Pillars</b>: monolithic, polished Chunar sandstone; up to 50 ft tall; animal capitals.
          <ul>
            <li>Sarnath — Lion Capital (national emblem).</li>
            <li>Lauriya-Nandangarh — Lion.</li>
            <li>Sankissa — Elephant.</li>
            <li>Vaishali — single Lion.</li>
            <li>Rampurva — Bull.</li>
          </ul>
        </li>
        <li><b>Stupas</b>: Sanchi (MP) — original wooden stupa by Ashoka; later enlarged in stone by Shungas.</li>
        <li><b>Cave architecture</b>: <b>Barabar Caves (Bihar)</b> — earliest rock-cut caves; gifted to Ajivikas; <b>Lomas Rishi cave</b> with elephant-arch entrance.</li>
        <li><b>Yaksha and Yakshi statues</b> — Parkham Yaksha, Didarganj Yakshi (Mauryan polish).</li>
      </ul>

      <hr>

      <h3>Decline of the Mauryan Empire</h3>
      <p>After Ashoka's death (232 BC), the empire disintegrated within 50 years.</p>

      <h4>Later Mauryans</h4>
      <ul>
        <li>Dasharatha (232–224 BC) — Ashoka's grandson; some inscriptions in Nagarjuni Caves to Ajivikas.</li>
        <li>Samprati, Salisuka, Devavarman, Shatadhanvan.</li>
        <li><b>Brihadratha</b> — last Mauryan; <b>killed by his commander Pushyamitra Shunga in 185 BC</b> while reviewing the army. End of Mauryan empire.</li>
      </ul>

      <h4>Causes of Decline</h4>
      <ol>
        <li><b>Weak successors</b> after Ashoka.</li>
        <li><b>Brahmanical reaction</b> (H.C. Raychaudhuri's view) — Ashoka's pro-Buddhist policies alienated Brahmins; Pushyamitra was a Brahmin.</li>
        <li><b>Financial strain</b> (D.D. Kosambi's view) — Ashoka's lavish gifts to Sangha; debasement of coinage in later Mauryan times.</li>
        <li><b>Pacifism</b> (H.C. Raychaudhuri) — Ashoka's non-violence demoralized army; Romila Thapar disagrees.</li>
        <li><b>Internal revolts</b> at Taxila, Magadha.</li>
        <li><b>Pressure from Greek invasions</b> in NW.</li>
        <li><b>Over-centralization</b> — too much depended on the king.</li>
        <li><b>Partition of empire</b> after Ashoka — between his sons and grandsons; weakened defence.</li>
      </ol>

      <h3>Legacy</h3>
      <ul>
        <li>First all-India political unification.</li>
        <li>Buddhism became a world religion through Ashoka's missions.</li>
        <li>Indian script (Brahmi → modern scripts).</li>
        <li>National Emblem (Sarnath Lion Capital).</li>
        <li>Idea of dhamma — pluralism, ethical governance.</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>After 185 BC, North India fragmented into smaller dynasties — Shungas, Kanvas, Indo-Greeks, Sakas, Kushans, Satavahanas. This <b>Post-Mauryan period</b> (185 BC – 320 AD) saw extensive interactions with Central Asia, the rise of Buddhism's Mahayana school, the Gandhara and Mathura schools of art, and Roman trade. The next topic surveys this fertile period.</p>

      <hr>
      <h3>🧠 याद कैसे रखें? (Memory Tricks)</h3>
      <ul>
        <li><b>Maurya dynasty timeline — "322 to 185 BC"</b>। 3 main kings:
          <ul>
            <li><b>Chandragupta</b> (322–298 BC) — Chanakya की मदद से Dhana Nanda को हराकर शुरू। Last में Jainism अपनाई, Shravanabelagola (Karnataka) में देहत्याग।</li>
            <li><b>Bindusara</b> (298–273 BC) — "Slayer of foes" (Amitraghata); Greeks ने Deimachus भेजा।</li>
            <li><b>Ashoka</b> (268–232 BC) — सबसे महान; <b>261 BC में Kalinga War</b> जीता पर खून बहाकर पश्चाताप → Buddhism अपनाई।</li>
          </ul>
        </li>
        <li><b>Date trick</b>: 322 BC = Chandragupta starts। 261 BC = Kalinga। 232 BC = Ashoka dies। 185 BC = Brihadratha killed by Pushyamitra Shunga (last Maurya)।</li>
        <li><b>Chanakya = Kautilya = Vishnugupta</b> — 3 नाम, एक व्यक्ति। उन्होंने <b>"Arthashastra"</b> लिखी — politics/economics का बाइबल।</li>
        <li><b>Megasthenes</b> = Greek ambassador (Seleucus से भेजा गया) — "Indica" लिखी; society को 7 classes में बाँटा।</li>
        <li><b>Ashoka's Pillars (Sarnath Lion Capital)</b> — India का national emblem। 4 lions = 4 directions of Dharma; bottom wheel = Ashoka Chakra (national flag में)।</li>
        <li><b>Ashoka's edicts language</b>: Most में <b>Prakrit (Brahmi script)</b>। NW में Kharosthi + Greek + Aramaic।</li>
        <li><b>Story</b>: Imagine — Chandragupta एक young warrior, Chanakya एक brilliant teacher। दोनों मिले, Nandas को हराया। पोता Ashoka — पहले बहुत violent (Kalinga War 1 लाख से ज़्यादा deaths), फिर Buddha के teachings पढ़कर बदल गया, Buddhism फैलाई SE Asia तक।</li>
      </ul>
    `,
    mcq: [
      { q: "Author of Arthashastra was?", opts: ["Megasthenes", "Kautilya", "Patanjali", "Panini"], a: 1, ex: "Kautilya (also called Chanakya / Vishnugupta) — minister of Chandragupta Maurya." },
      { q: "Megasthenes was the ambassador of?", opts: ["Antiochus I", "Seleucus Nikator", "Ptolemy II", "Alexander"], a: 1, ex: "Sent by Seleucus Nikator after the 305 BC peace treaty; wrote Indica." },
      { q: "Treaty of 303 BC between Chandragupta and Seleucus involved?", opts: ["War indemnity", "500 elephants given by Chandragupta", "Greek garrisons in Punjab", "Surrender of Pataliputra"], a: 1, ex: "Chandragupta got Aria, Arachosia, Gedrosia, Paropanisadae; gave Seleucus 500 war elephants." },
      { q: "Chandragupta Maurya is said to have died at?", opts: ["Pataliputra", "Sravanabelagola (Karnataka)", "Taxila", "Ujjain"], a: 1, ex: "Sravanabelagola — abdicated, became a Jain monk under Bhadrabahu, died by sallekhana." },
      { q: "Bindusara's title 'Amitraghata' means?", opts: ["Lover of friends", "Slayer of foes", "Beloved of the Gods", "Conqueror of seven seas"], a: 1, ex: "Amitraghata = slayer of foes; Greeks called him Amitrochates." },
      { q: "Bindusara's counsellor and a follower of which sect?", opts: ["Buddhism", "Jainism", "Ajivika (Pingalavatsa)", "Vaishnavism"], a: 2, ex: "Pingalavatsa, an Ajivika monk; Bindusara himself was an Ajivika sympathizer." },
      { q: "Kalinga War was fought in?", opts: ["261 BC", "326 BC", "250 BC", "185 BC"], a: 0, ex: "13th regnal year of Ashoka, 261 BC; described in 13th Major Rock Edict." },
      { q: "Number of dead in Kalinga War (per 13th Rock Edict)?", opts: ["10,000 killed", "1,00,000 killed; 1,50,000 deported", "5,000 killed", "2,00,000 killed"], a: 1, ex: "1,00,000 killed and 1,50,000 deported; many more died." },
      { q: "Ashoka's name 'Ashoka' is mentioned at which edict site?", opts: ["Girnar", "Maski", "Sarnath", "Dhauli"], a: 1, ex: "Minor Rock Edict at Maski (Karnataka) bears 'Ashoka'; also Gujarra (MP)." },
      { q: "Brahmi script was deciphered by?", opts: ["William Jones", "James Princep", "John Marshall", "Cunningham"], a: 1, ex: "James Princep deciphered Brahmi in 1837; also Kharoshti." },
      { q: "Sarnath Lion Capital was adopted as India's National Emblem on?", opts: ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1948"], a: 1, ex: "26 January 1950 — Republic Day; from Mauryan polished sandstone capital." },
      { q: "Capital of Northern province (Uttarapatha) of Mauryans was?", opts: ["Pataliputra", "Taxila", "Ujjain", "Tosali"], a: 1, ex: "Taxila was the capital of Uttarapatha." },
      { q: "Capital of Western province (Avantirashtra) was?", opts: ["Ujjain", "Suvarnagiri", "Tosali", "Pataliputra"], a: 0, ex: "Ujjain — Western province; Ashoka was governor there before becoming king." },
      { q: "Ashoka sent his son and daughter as Buddhist missionaries to?", opts: ["China", "Sri Lanka", "Burma", "Tibet"], a: 1, ex: "Mahendra (son) and Sanghamitra (daughter) went to Sri Lanka." },
      { q: "Third Buddhist Council under Ashoka was held at?", opts: ["Rajgriha", "Vaishali", "Pataliputra", "Kashmir"], a: 2, ex: "Pataliputra (~250 BC) under Moggaliputta Tissa." },
      { q: "Earliest rock-cut caves in India are?", opts: ["Ajanta", "Ellora", "Barabar (Bihar)", "Karle"], a: 2, ex: "Barabar Caves in Bihar — Mauryan period; gifted by Ashoka to Ajivikas; Lomas Rishi cave famous." },
      { q: "Last Mauryan ruler was?", opts: ["Dasharatha", "Brihadratha", "Bindusara", "Pushyamitra"], a: 1, ex: "Brihadratha was killed by his commander Pushyamitra Shunga in 185 BC." }
    ]
  };

  T["ah-postmaurya"] = {
    body: `
      ${figRow([
        ["Gandhara_Buddha_(tnm).jpeg", "Gandhara Buddha — Indo-Greek artistic influence"],
        ["Kanishka statue inscription.jpg", "Kanishka — greatest Kushana ruler"]
      ])}
      <h3>The Post-Mauryan Centuries (185 BC – 320 AD)</h3>
      <p>The fall of the Mauryan empire (185 BC) was followed by 500 years of fragmentation in north India and a parallel rise of Deccan powers. This period is sometimes called the <b>"Dark Age"</b> of Indian history (mistakenly) — in fact it was a time of cultural florescence: <b>Mahayana Buddhism, Gandhara/Mathura art, Sangam Tamil literature, Roman trade, the Saka era</b>, and the foundations of Sanskrit kavya.</p>

      <h3>Powers of the Era — Quick Map</h3>
      <table>
        <tr><th>Region</th><th>Dynasty</th><th>Period</th></tr>
        <tr><td>Magadha (north India)</td><td>Shungas</td><td>185–73 BC</td></tr>
        <tr><td>Magadha</td><td>Kanvas</td><td>73–28 BC</td></tr>
        <tr><td>Kalinga (Odisha)</td><td>Cheta / Mahameghavahana (Kharavela)</td><td>1st c. BC</td></tr>
        <tr><td>Deccan</td><td>Satavahanas (Andhras)</td><td>1st c. BC – 3rd c. AD</td></tr>
        <tr><td>Northwest</td><td>Indo-Greeks</td><td>180 BC – 10 BC</td></tr>
        <tr><td>Northwest</td><td>Sakas (Scythians)</td><td>1st c. BC – 4th c. AD</td></tr>
        <tr><td>Northwest</td><td>Parthians (Pahlavas)</td><td>1st c. AD</td></tr>
        <tr><td>NW & North India</td><td>Kushans</td><td>1st – 3rd c. AD</td></tr>
        <tr><td>South India (Tamilakam)</td><td>Cheras, Cholas, Pandyas (Sangam)</td><td>3rd c. BC – 3rd c. AD</td></tr>
      </table>

      <hr>

      <h3>1. Shunga Dynasty (185–73 BC)</h3>
      <ul>
        <li><b>Founder: Pushyamitra Shunga</b> — Brahmin commander of the last Mauryan king Brihadratha, whom he assassinated during a military review.</li>
        <li>Capital: <b>Vidisha (Besnagar, MP)</b>; later Pataliputra.</li>
        <li>Pushyamitra performed <b>two Ashvamedha sacrifices</b> (Ayodhya inscription) — symbolizing Brahmanical revival.</li>
        <li>Defeated invasions by <b>Demetrius (Indo-Greek)</b> and <b>Kalinga's Kharavela</b>.</li>
        <li>Persecuted Buddhists according to Buddhist sources (Divyavadana) — historians today debate this; Ashokavadana exaggerates.</li>
      </ul>

      <h4>Cultural Achievements under Shungas</h4>
      <ul>
        <li><b>Patanjali</b> wrote <b>Mahabhashya</b> (commentary on Panini's grammar) at Pushyamitra's court.</li>
        <li><b>Manusmriti</b> compiled in this period.</li>
        <li>Beautification of <b>Sanchi and Bharhut stupas</b> (railings, gateways) — Buddhist patronage continued by aristocrats and merchants despite Brahmanical kings.</li>
        <li><b>Bharhut Stupa</b> — most famous early Indian stone railing.</li>
        <li>Sanskrit replaced Pali/Prakrit in court use.</li>
        <li>Vasudeva worship grew — <b>Heliodorus Pillar (Besnagar/Vidisha, ~110 BC)</b> erected by Greek envoy Heliodorus to Vasudeva (Krishna).</li>
      </ul>

      <h4>Decline</h4>
      <ul>
        <li>Last Shunga king <b>Devabhuti</b> killed by his minister <b>Vasudeva Kanva</b>.</li>
      </ul>

      <hr>

      <h3>2. Kanva Dynasty (73–28 BC)</h3>
      <ul>
        <li>Brahmin dynasty founded by <b>Vasudeva Kanva</b>.</li>
        <li>Four kings; minor power.</li>
        <li>Last Kanva king Susarman killed by a Satavahana king (Andhra).</li>
      </ul>

      <hr>

      <h3>3. Cheta / Mahameghavahana Dynasty of Kalinga</h3>
      <ul>
        <li><b>Kharavela</b> — third king (1st c. BC); Kalinga (Odisha).</li>
        <li><b>Hathigumpha Inscription</b> at Udayagiri (Bhubaneshwar) — one of the most important Indian inscriptions.</li>
        <li>Defeated <b>Pushyamitra Shunga</b>; sacked Magadha; brought back the idol of Jain Tirthankara that Mahapadma Nanda had taken away (<b>"Kalinga-Jina"</b>).</li>
        <li>Patronized <b>Jainism</b>; built rock-cut <b>Udayagiri-Khandagiri Caves</b> for Jain monks.</li>
        <li>Records "year 165 of Maurya era" — earliest king to use a numbered era.</li>
      </ul>

      <hr>

      <h3>4. Indo-Greeks (Bactrian Greeks) (~180 BC – 10 BC)</h3>
      <ul>
        <li>After Alexander's death (323 BC), his general Seleucus's Bactrian satraps became independent (~250 BC).</li>
        <li>Pushed into NW India during/after Mauryan decline.</li>
        <li><b>Demetrius I</b> (190 BC) — first major Indo-Greek king of India; pushed deep into Punjab.</li>
        <li><b>Menander I (Milinda)</b> (~155–130 BC) — most famous; capital <b>Sakala (Sialkot)</b>.
          <ul>
            <li>Converted to Buddhism by monk <b>Nagasena</b>; their dialogue is in <b>"Milindapanho"</b> ("Questions of Milinda").</li>
            <li>Coins found across NW India.</li>
          </ul>
        </li>
        <li>40+ Indo-Greek kings known mainly through coins.</li>
      </ul>

      <h4>Indo-Greek Contributions</h4>
      <ul>
        <li><b>First Indian rulers to issue gold coins</b>.</li>
        <li>First to put <b>portraits of kings on coins</b> with names — a practice India adopted.</li>
        <li>Introduced Hellenistic art elements; foundation of <b>Gandhara school</b>.</li>
        <li>Introduced Greek astronomy/astrology — terms like horascope (horashastra), kendra, lipta.</li>
        <li><b>Heliodorus Pillar (Besnagar)</b> — Heliodorus, Indo-Greek envoy, made an offering to Vasudeva at Vidisha — first record of Vaishnavism flourishing.</li>
      </ul>

      <hr>

      <h3>5. Sakas (Scythians) (1st c. BC – 4th c. AD)</h3>
      <ul>
        <li>From Central Asia (originally nomads of Sythia).</li>
        <li>Pushed by Yueh-chi (later Kushans); migrated southward; entered NW India ~80 BC.</li>
        <li><b>Five Saka branches</b>:
          <ol>
            <li>Afghanistan (Kabul) — Maues, Vonones.</li>
            <li>Punjab (Taxila) — Azes I (introduced Vikrama era?), Azes II.</li>
            <li>Mathura.</li>
            <li>Western India (Saurashtra/Malwa) — <b>Western Satraps / Kshaharatas and Kshatrapas</b>; capital Ujjain.</li>
            <li>Upper Deccan.</li>
          </ol>
        </li>
        <li><b>Vikram Samvat / Vikrami era (57 BC)</b> — supposedly founded by Vikramaditya of Ujjain after defeating Sakas; legendary.</li>
        <li><b>Saka era / Shaka Samvat (78 AD)</b> — adopted as the <b>National Calendar of India</b> (1957).</li>
      </ul>

      <h4>Western Satraps — Kshaharata and Kardamaka</h4>
      <ul>
        <li><b>Nahapana (Kshaharata)</b> — issued silver coins; defeated by Gautamiputra Satakarni.</li>
        <li><b>Chashtana</b> — founder of Kardamaka line; capital Ujjain.</li>
        <li><b>Rudradaman I (130–150 AD)</b> — most famous; defeated Satavahanas; <b>Junagadh Rock Inscription (150 AD)</b> in <b>chaste Sanskrit</b> — first long Sanskrit inscription. Records repair of <b>Sudarshan Lake</b> (originally built under Chandragupta Maurya by Pushyagupta).</li>
        <li>Western Satraps minted silver coins for ~400 years; finally absorbed by <b>Chandragupta II</b> ~409 AD.</li>
      </ul>

      <hr>

      <h3>6. Parthians (Pahlavas) (1st c. AD)</h3>
      <ul>
        <li>From Iran; pushed into NW India after Sakas.</li>
        <li><b>Gondophernes (Vindafarna)</b> — most famous; ~21–46 AD.</li>
        <li>Christian tradition: <b>St. Thomas the Apostle</b> visited his court (~52 AD).</li>
        <li>Soon overthrown by Kushans.</li>
      </ul>

      <hr>

      <h3>7. Kushan Empire (1st – 3rd c. AD)</h3>
      <ul>
        <li>Originated from <b>Yueh-chi</b> nomads of Central Asia (driven west by Hsiung-nu/Huns).</li>
        <li>Five Yueh-chi clans were unified under the <b>Kushan</b> branch.</li>
        <li>Kushan empire stretched from Central Asia to Bihar — a great <b>cosmopolitan empire</b> on the Silk Road.</li>
      </ul>

      <h4>Kings</h4>
      <table>
        <tr><th>King</th><th>Reign</th><th>Notes</th></tr>
        <tr><td><b>Kujula Kadphises</b></td><td>~30–80 AD</td><td>Founder; united Yueh-chi tribes; took NW India.</td></tr>
        <tr><td>Vima Taktu</td><td>—</td><td>—</td></tr>
        <tr><td><b>Vima Kadphises</b></td><td>~95–127 AD</td><td>First to issue <b>gold coins</b> on a large scale; Shaivite (Shiva on coins); titled "Mahishvara".</td></tr>
        <tr><td><b>Kanishka I</b></td><td>78–101 AD (or 127–150)</td><td>Greatest Kushan; <b>started Shaka Era 78 AD</b>; capital <b>Purushapura (Peshawar)</b>; second capital <b>Mathura</b>; territory from Khorasan to Bengal.</td></tr>
        <tr><td>Huvishka</td><td>~150–180</td><td>Built city of Huviskapur (Mathura); coins show many deities.</td></tr>
        <tr><td>Vasudeva I</td><td>~190–230</td><td>Last great Kushan; only Shiva on coins.</td></tr>
      </table>

      <h4>Kanishka's Achievements</h4>
      <ul>
        <li><b>Started Saka era (78 AD)</b> — most accepted view (some say a Saka king started it).</li>
        <li>Patronized <b>Mahayana Buddhism</b>; held <b>4th Buddhist Council</b> at <b>Kundalavana, Kashmir</b> (under Vasumitra and Asvaghosha).</li>
        <li>Sent missions to China; Buddhism reached China through Kushan empire.</li>
        <li>Court figures:
          <ul>
            <li><b>Asvaghosha</b> — wrote <i>Buddhacharita, Saundarananda, Sariputra Prakaranam</i>.</li>
            <li><b>Nagarjuna</b> — founder of <b>Madhyamika (Shunyavada)</b> philosophy.</li>
            <li><b>Charaka</b> — physician; wrote <b>Charaka Samhita</b> (medicine).</li>
            <li>Vasumitra — Buddhist scholar.</li>
            <li>Mathara, Sangharaksha, Parsva — Buddhist scholars.</li>
          </ul>
        </li>
        <li>Title <b>"Devaputra"</b> ("Son of God") — adapted from Chinese imperial title.</li>
        <li>Coins show various deities — Greek (Helios), Iranian (Mithra, Anahita), Indian (Shiva, Buddha) — reflecting cosmopolitan nature.</li>
        <li>First Indian coin to depict Buddha (Kanishka's coins).</li>
        <li>Patronized <b>Gandhara and Mathura schools of art</b>.</li>
      </ul>

      <hr>

      <h3>8. Satavahanas (Andhras) (1st c. BC – 3rd c. AD)</h3>
      <ul>
        <li>Filled the Deccan vacuum left by Mauryan decline.</li>
        <li>Capital: <b>Pratishthana (Paithan, Maharashtra)</b>; second capital Amaravati.</li>
        <li>Mentioned in Puranas as "Andhras"; rulers identified by Brahmi inscriptions.</li>
      </ul>

      <h4>Kings</h4>
      <ul>
        <li><b>Simuka</b> — founder; ~30 kings followed.</li>
        <li>Krishna, Sri Satakarni I.</li>
        <li><b>Gautamiputra Satakarni</b> (~106–130 AD) — greatest king.
          <ul>
            <li>Defeated <b>Nahapana</b> (Saka) — restruck his coins.</li>
            <li>Titles: "Trisamudratoyapitavahana" (whose horses drank from three seas), "Satakarni-Hindu", "Eka-Brahmana" (unique Brahmana), "Khatiyadapamana-Madana" (destroyer of pride of Kshatriyas).</li>
            <li>His mother <b>Gautami Balashri</b>'s <b>Nasik Prashasti / Inscription</b> describes his achievements (the eulogy is one of the great pieces of Indian epigraphy).</li>
          </ul>
        </li>
        <li><b>Vasishthiputra Pulumavi</b> — successor; coins, inscriptions at Amaravati.</li>
        <li><b>Yajna Sri Satakarni</b> — last great king; <b>ship-coins</b> showing two-masted ships symbolize maritime trade.</li>
      </ul>

      <h4>Society and Culture</h4>
      <ul>
        <li>Mostly Brahmanical; supported by Buddhism (donations to monks).</li>
        <li>Language: <b>Prakrit</b>; script: Brahmi.</li>
        <li>Coins of <b>lead, copper, potin</b>; some silver. Notable for diversity of metals.</li>
        <li>Patrons of <b>rock-cut caves</b>:
          <ul>
            <li><b>Karle (Maharashtra)</b> — most famous Chaitya hall.</li>
            <li><b>Bhaja, Nasik, Kanheri, Kondane</b>.</li>
          </ul>
        </li>
        <li><b>Amaravati Stupa</b> (Andhra) — finest Satavahana monument; in white marble; "Amaravati School".</li>
        <li>Naming convention: kings named after mothers (matronymic) — Gautamiputra (son of Gautami), Vasishthiputra (son of Vasishthi).</li>
        <li>Trade with Rome — Roman coins found at Coimbatore, Madurai.</li>
      </ul>

      <hr>

      <h3>Schools of Art (Post-Mauryan)</h3>
      <table>
        <tr><th>Feature</th><th>Gandhara</th><th>Mathura</th><th>Amaravati</th></tr>
        <tr><td>Region</td><td>NW (Peshawar, Taxila)</td><td>UP (Mathura)</td><td>Andhra (Krishna river)</td></tr>
        <tr><td>Patron</td><td>Kushans (Kanishka)</td><td>Kushans</td><td>Satavahanas (Yajna Sri); Ikshvakus</td></tr>
        <tr><td>Material</td><td>Bluish-grey schist; later stucco</td><td>Red sandstone (from Sikri)</td><td>White marble</td></tr>
        <tr><td>Period</td><td>1st c. BC – 5th c. AD</td><td>1st c. BC – 6th c. AD</td><td>2nd c. BC – 3rd c. AD</td></tr>
        <tr><td>Influence</td><td>Greek/Hellenistic; foreign</td><td>Indigenous (Yaksha tradition)</td><td>Indigenous</td></tr>
        <tr><td>Buddha figure</td><td>Athletic; wavy hair; halo with rays; Apollo-like</td><td>Robust; serene; transparent garments; oushnisha; halo decorated</td><td>Slim; flexible posture; narrative panels</td></tr>
        <tr><td>Subject</td><td>Buddha & Bodhisattvas; first anthropomorphic Buddha images</td><td>Buddha, Yaksha, Yakshi, Jain Tirthankaras (mainly indigenous gods); first Buddha image in Mathura also</td><td>Buddhist narrative panels (Jataka stories); rare Buddha images</td></tr>
      </table>
      <p>The first <b>anthropomorphic representation of Buddha</b> arose almost simultaneously at Gandhara and Mathura in the 1st–2nd century AD — earlier Buddhist art had used symbols (lotus, footprint, Bodhi tree, dharma chakra, stupa).</p>

      <hr>

      <h3>Sangam Age in South India (3rd c. BC – 3rd c. AD)</h3>
      <p>Concurrent with the post-Mauryan north. Three early Tamil kingdoms:</p>
      <ul>
        <li><b>Cheras (Kerala)</b> — emblem: bow; capital <b>Vanji</b>; greatest king Senguttuvan (Pattini cult).</li>
        <li><b>Cholas (Tanjore region, Tamil Nadu)</b> — emblem: tiger; capital <b>Uraiyur</b>; greatest king <b>Karikala</b> (built Kallanai dam on Kaveri ~190 AD).</li>
        <li><b>Pandyas (Madurai region)</b> — emblem: fish; capital <b>Madurai</b>; held three Sangams of poets.</li>
      </ul>
      <p>Sangam literature (oldest Tamil literature): <b>Tolkappiyam, Ettutogai, Pattupattu, Silappadikaram, Manimekalai</b>.</p>

      <hr>

      <h3>Foreign Trade — The Indo-Roman Connection</h3>
      <ul>
        <li>By 1st century AD, India had become Rome's biggest trading partner in the East.</li>
        <li>Roman fleet sailed using monsoon winds (described by Hippalus).</li>
        <li><b>Periplus of the Erythraean Sea</b> (~50–80 AD) — anonymous Greek text — describes Indian ports.</li>
        <li>Indian ports: Bharukachchha (Bharuch), Surparaka (Sopara), Kalyana, Muziris, Kaveripattinam, Tamralipti.</li>
        <li>Indian exports: spices (pepper), textiles, ivory, sandalwood, sapphires, beads.</li>
        <li>Indian imports: Roman gold coins (caused Pliny to lament India was "draining" Roman wealth), wine, glassware.</li>
        <li>Hoards of Roman coins found at Coimbatore, Madurai, Akki Alur (Karnataka).</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>By 320 AD, the Kushan empire had fragmented; Western Satraps controlled Saurashtra-Malwa; Satavahanas had collapsed; Magadha was again a small kingdom. Out of this quasi-anarchy emerged a new dynasty in 320 AD — the <b>Guptas</b> — who would unify north India and produce the cultural florescence later called India's "Golden Age". The next topic explores the Gupta empire and the Vardhana dynasty that followed.</p>

      <hr>
      <h3>🧠 याद कैसे रखें? (Memory Tricks)</h3>
      <ul>
        <li><b>Post-Maurya dynasties order — "SK SK I"</b>:
          <ul>
            <li><b>S</b>hungas (185–73 BC) — Pushyamitra Shunga, killed last Maurya Brihadratha। Capital Pataliputra।</li>
            <li><b>K</b>anvas (73–28 BC) — short, weak dynasty।</li>
            <li><b>S</b>atavahanas (Deccan) — Gautamiputra Satakarni सबसे महान। Capital Pratishthana।</li>
            <li><b>K</b>ushanas (north + Central Asia) — <b>Kanishka</b> सबसे famous; 78 AD में Saka era शुरू (Indian national calendar)।</li>
            <li><b>I</b>ndo-Greeks — Menander (Milinda) = Buddhism अपनाई; "Milindapanho" किताब।</li>
          </ul>
        </li>
        <li><b>Kanishka facts</b>: 4th Buddhist Council (Kashmir) → Buddhism में Hinayana और Mahayana का split। Gandhara art को promote किया (Greek-Indian fusion)।</li>
        <li><b>Saka era 78 AD</b> = India का official national calendar (Saka Samvat)। याद रखें: "<b>78 = सब काम शुरू</b>"।</li>
        <li><b>2 schools of art</b>: <b>Gandhara</b> (Greek influence, Buddha statues with curly hair) vs <b>Mathura</b> (purely Indian)।</li>
        <li><b>Story</b>: Mauryas के बाद North में chaos, छोटे-छोटे dynasties। But Deccan में Satavahanas ने 400+ साल राज किया। Central Asia से Kushanas आए — Buddhism को Silk Route पर China तक ले गए।</li>
      </ul>
    `,
    mcq: [
      { q: "Founder of Shunga dynasty was?", opts: ["Vasudeva", "Pushyamitra Shunga", "Simuka", "Kanishka"], a: 1, ex: "Pushyamitra Shunga (185 BC) — killed last Mauryan, Brihadratha, during military review." },
      { q: "Patanjali (Mahabhashya) lived during?", opts: ["Mauryans", "Shungas", "Kushans", "Guptas"], a: 1, ex: "Patanjali wrote Mahabhashya at the court of Pushyamitra Shunga." },
      { q: "Heliodorus Pillar at Besnagar/Vidisha is dedicated to?", opts: ["Buddha", "Shiva", "Vasudeva (Krishna)", "Surya"], a: 2, ex: "Erected by Heliodorus, Indo-Greek envoy, in honour of Vasudeva (Krishna) — early Vaishnava evidence." },
      { q: "Kharavela of Kalinga is known from which inscription?", opts: ["Allahabad", "Hathigumpha (Udayagiri)", "Junagadh", "Mehrauli"], a: 1, ex: "Hathigumpha Inscription at Udayagiri, Bhubaneshwar; describes his career and Jain patronage." },
      { q: "Most famous Indo-Greek king was?", opts: ["Demetrius", "Menander I (Milinda)", "Diodotus", "Eucratides"], a: 1, ex: "Menander I; capital Sakala (Sialkot); converted to Buddhism by Nagasena (Milindapanho)." },
      { q: "First gold coins in India were issued by?", opts: ["Mauryans", "Indo-Greeks", "Kushans (Vima Kadphises)", "Guptas"], a: 2, ex: "Kushans, especially Vima Kadphises and Kanishka, issued gold coins on a large scale." },
      { q: "Saka era (78 AD) was started by?", opts: ["Rudradaman", "Menander", "Kanishka", "Kujula Kadphises"], a: 2, ex: "Kanishka I — most accepted view; adopted as India's National Calendar in 1957." },
      { q: "Junagadh Rock Inscription (150 AD) was issued by?", opts: ["Ashoka", "Rudradaman I", "Kanishka", "Samudragupta"], a: 1, ex: "Rudradaman I — first long inscription in chaste Sanskrit; records repair of Sudarshan Lake." },
      { q: "Vikram Samvat era began in?", opts: ["57 BC", "78 AD", "320 AD", "606 AD"], a: 0, ex: "Vikram Samvat — 57 BC; Vikramaditya legend." },
      { q: "Kushan capital was at?", opts: ["Pataliputra", "Mathura", "Purushapura (Peshawar)", "Taxila"], a: 2, ex: "Purushapura (modern Peshawar); Mathura was secondary capital." },
      { q: "Fourth Buddhist Council was held under?", opts: ["Ashoka", "Kanishka", "Ajatashatru", "Harsha"], a: 1, ex: "Kanishka, in Kashmir (~72 AD); led to Hinayana-Mahayana split; commentaries in Sanskrit." },
      { q: "Charaka, the famous physician, lived during?", opts: ["Ashoka's reign", "Kanishka's reign", "Harsha's reign", "Chandragupta Maurya's reign"], a: 1, ex: "Court of Kanishka; wrote Charaka Samhita (medicine)." },
      { q: "Founder of Madhyamika Buddhism was?", opts: ["Asvaghosha", "Nagarjuna", "Vasubandhu", "Asanga"], a: 1, ex: "Nagarjuna — court of Kanishka; founded Madhyamika (Shunyavada) philosophy." },
      { q: "Satavahana capital was at?", opts: ["Amaravati", "Pratishthana (Paithan)", "Hampi", "Tanjore"], a: 1, ex: "Pratishthana (modern Paithan, Maharashtra)." },
      { q: "Greatest Satavahana ruler was?", opts: ["Simuka", "Gautamiputra Satakarni", "Vasishthiputra Pulumavi", "Yajna Sri Satakarni"], a: 1, ex: "Gautamiputra Satakarni — defeated Sakas (Nahapana); Nasik Prashasti by mother Gautami Balashri." },
      { q: "Gandhara school of art was patronized by?", opts: ["Mauryans", "Satavahanas", "Kushans", "Guptas"], a: 2, ex: "Kushans, especially Kanishka." },
      { q: "Material of Mathura school of art was?", opts: ["Bluish-grey schist", "Red sandstone", "White marble", "Bronze"], a: 1, ex: "Red sandstone from Sikri quarry." },
      { q: "Amaravati school of art used what material?", opts: ["Schist", "Red sandstone", "White marble", "Bronze"], a: 2, ex: "White marble; patronized by Satavahanas (Yajna Sri) and Ikshvakus." }
    ]
  };

  T["ah-guptas"] = {
    body: `
      ${figRow([
        ["Gupta_Empire_320_-_600_ad.PNG", "Gupta Empire at its peak (c. 4th-5th c. CE)"],
        ["Delhi Iron pillar, 2010-09-27.jpg", "Iron Pillar of Delhi — Gupta-era metallurgy"]
      ])}
      <h3>Why "Golden Age"?</h3>
      <p>The Gupta period (320–550 AD) is called the <b>"Golden Age" of ancient India</b> not because it was politically vast (it wasn't — Mauryan empire was bigger) but because of <b>cultural florescence</b>: Sanskrit literature peaked (Kalidasa), mathematics & astronomy (Aryabhatta, Varahamihira), classical sculpture (Sarnath Buddha), temple architecture (Dashavatara, Deogarh), gold coins of unmatched beauty, the decimal system with zero, and a stable Brahmanical-Sanskritic synthesis.</p>

      <h3>Sources</h3>
      <ul>
        <li><b>Inscriptions</b>: Allahabad Pillar (Prayag Prashasti), Mehrauli Iron Pillar, Junagadh inscription of Skandagupta, Eran inscriptions.</li>
        <li><b>Coins</b>: extensive gold coinage; numismatics is a major Gupta source.</li>
        <li><b>Literary</b>: Kalidasa's plays, Vishakhadatta's Devichandragupta and Mudrarakshasa, Puranas (lists of Gupta kings).</li>
        <li><b>Foreign</b>: Fa-Hien's <i>Fo-Kuo-Ki</i>; later Hiuen Tsang.</li>
      </ul>

      <h3>The Gupta Kings — Genealogy</h3>
      <table>
        <tr><th>King</th><th>Reign (AD)</th><th>Highlights</th></tr>
        <tr><td>Sri Gupta</td><td>~240–280</td><td>Founder; minor chieftain.</td></tr>
        <tr><td>Ghatotkacha</td><td>~280–319</td><td>Title "Maharaja".</td></tr>
        <tr><td><b>Chandragupta I</b></td><td>319–335</td><td>First "Maharajadhiraja"; founder of empire; <b>Gupta Era 319–20 AD</b>.</td></tr>
        <tr><td><b>Samudragupta</b></td><td>335–375</td><td>"Indian Napoleon"; greatest conqueror.</td></tr>
        <tr><td>Ramagupta</td><td>~375 (briefly)</td><td>Mentioned in <i>Devichandragupta</i> (Vishakhadatta); offered queen Dhruvadevi to Saka king; was killed by his brother.</td></tr>
        <tr><td><b>Chandragupta II "Vikramaditya"</b></td><td>375–415</td><td>Greatest cultural patron; "Sakari" (destroyer of Sakas).</td></tr>
        <tr><td><b>Kumaragupta I "Mahendraditya"</b></td><td>415–455</td><td>Founded Nalanda; Pushyamitra and early Hun threats.</td></tr>
        <tr><td><b>Skandagupta</b></td><td>455–467</td><td>Repulsed Hunas; last great Gupta.</td></tr>
        <tr><td>Purugupta, Kumaragupta II, Budhagupta</td><td>467–500</td><td>Decline.</td></tr>
        <tr><td>Vainyagupta, Bhanugupta, Vishnugupta</td><td>500–550</td><td>Final disintegration; Eran inscription mentions sati.</td></tr>
      </table>

      <hr>

      <h3>Chandragupta I (319–335 AD) — Founder of the Empire</h3>
      <ul>
        <li>Assumed title <b>"Maharajadhiraja"</b> (king of kings) — first Gupta to do so.</li>
        <li>Married <b>Kumaradevi</b>, princess of the powerful <b>Lichchhavi</b> clan of Vaishali — political alliance that gave Guptas legitimacy and territory.</li>
        <li>Issued <b>Chandragupta-Kumaradevi commemorative coins</b> showing king and queen.</li>
        <li>Inaugurated the <b>Gupta Era / Gupta Samvat</b> on <b>26 February 320 AD</b>.</li>
        <li>Empire confined to Magadha (Bihar), parts of UP, Saketa, Prayag.</li>
      </ul>

      <hr>

      <h3>Samudragupta (335–375 AD) — "The Indian Napoleon"</h3>
      <ul>
        <li>The greatest military conqueror of the Gupta dynasty.</li>
        <li>Title given by historian <b>V.A. Smith</b> based on his conquests across India.</li>
        <li><b>Allahabad Pillar Inscription</b> (Prayag Prashasti) by court poet <b>Harisena</b> — the most important source of his career; engraved on an Ashokan pillar (still standing).</li>
      </ul>

      <h4>Conquests (per Allahabad Inscription)</h4>
      <ul>
        <li><b>Aryavarta (north)</b>: 9 kings of north India "uprooted" (annexed) — including Achyuta, Nagasena.</li>
        <li><b>Forest tribes (atavika rajya)</b>: 18 forest kingdoms reduced to vassals.</li>
        <li><b>Dakshinapatha (Deccan/South)</b>: 12 kings <b>defeated and reinstated</b> as tributaries — including king Mahendragiri of Pishtapura, king Vishnugopa of Kanchi, king Mantaraja of Kerala.</li>
        <li><b>Border kings (pratyanta) and tribes (Malavas, Yaudheyas, Arjunayanas, Madras, Abhiras)</b>: paid tribute.</li>
        <li><b>Foreign powers</b>: friendship with Daivaputra Shahi Shahanu Shahi (Kushan), Saka, Sinhalese (Sri Lanka — sent embassy under Meghavarman). According to Chinese sources, Sri Lankan king Meghavarman got permission to build a monastery at Bodh Gaya.</li>
        <li>Performed <b>Ashvamedha</b> — issued coins showing horse sacrifice; revival of Vedic ritual.</li>
      </ul>

      <h4>Cultural Persona</h4>
      <ul>
        <li>Patron of arts; called <b>"Kaviraja"</b> (king of poets) in inscription.</li>
        <li>Coins show him <b>playing the veena</b> — perhaps the only known coins of an Indian king playing music.</li>
        <li>Various coin types: Standard, Archer, Battle-axe, Tiger-slayer, Ashvamedha, Lyrist (veena), Kacha.</li>
      </ul>

      <hr>

      <h3>Ramagupta — The Forgotten Gupta</h3>
      <ul>
        <li>Mentioned in <b>"Devichandragupta"</b> (incomplete play by <b>Vishakhadatta</b>).</li>
        <li>Story: Ramagupta, defeated by a Saka king, agreed to give up his queen <b>Dhruvadevi</b>; his brother Chandragupta II disguised himself as the queen, killed the Saka king, then killed Ramagupta and married Dhruvadevi.</li>
        <li>For long considered legendary; copperplate inscriptions in 1980s confirmed Ramagupta's historical existence.</li>
      </ul>

      <hr>

      <h3>Chandragupta II "Vikramaditya" (375–415 AD)</h3>
      <ul>
        <li>Greatest Gupta cultural ruler; titles: <b>Vikramaditya</b> ("Sun of Power"), <b>Sakari</b> ("destroyer of Sakas"), <b>Devagupta</b>, <b>Devaraja</b>, <b>Devasri</b>, <b>Narendrachandra</b>, <b>Simhavikrama</b>.</li>
        <li><b>Defeated Western Satraps (Sakas)</b> ~409 AD; took Saurashtra (Gujarat); reached the western sea.</li>
        <li>Capital extended to <b>Ujjain</b> (in addition to Pataliputra).</li>
        <li><b>Matrimonial alliances</b>: married <b>Kuvera Naga</b> (Naga princess); married daughter <b>Prabhavati Gupta</b> to <b>Rudrasena II</b> (Vakataka, Deccan) — Vakataka alliance crucial for southward expansion.</li>
        <li>Issued <b>silver coins</b> for the first time among Guptas (after Saka conquest).</li>
        <li>Coins: archer, lion-slayer, horseman.</li>
      </ul>

      <h4>Navaratnas — The "Nine Gems"</h4>
      <p>Tradition says Chandragupta II's court had <b>nine gems (Navaratnas)</b>, though this list is from the much later <i>Jyotirvidabharana</i>:</p>
      <ol>
        <li><b>Kalidasa</b> — greatest Sanskrit poet/playwright. Wrote <b>Abhijnana-Shakuntalam, Meghaduta, Raghuvamsha, Kumarasambhava, Ritusamhara, Malavikagnimitram, Vikramorvasiyam</b>.</li>
        <li><b>Varahamihira</b> — astronomer. Wrote <b>Brihat Samhita</b> (encyclopedia), <b>Brihat Jataka</b> (astrology), <b>Pancha Siddhantika</b> (5 schools of astronomy).</li>
        <li><b>Aryabhatta</b> — mathematician/astronomer (more accurately under Kumaragupta). Wrote <b>Aryabhatiya</b> at age 23 (499 AD).</li>
        <li><b>Dhanvantari</b> — physician; "father of Indian medicine".</li>
        <li><b>Vetala Bhatta</b> — magician.</li>
        <li><b>Kshapanaka</b> — astrologer (Jain monk).</li>
        <li><b>Amarasimha</b> — lexicographer; wrote <b>Amarakosha</b>.</li>
        <li><b>Shanku</b> — architect.</li>
        <li><b>Ghatakarpara</b> — poet.</li>
      </ol>

      <h4>Fa-Hien (Fa Xian)</h4>
      <ul>
        <li>Chinese Buddhist pilgrim; first Chinese pilgrim to India.</li>
        <li>Visited 399–414 AD during Chandragupta II's reign; came overland (via Khotan), returned by sea.</li>
        <li>Spent <b>6 years in India</b>, mainly visiting Buddhist sites.</li>
        <li>Wrote <b>Fo-Kuo-Ki</b> (Records of Buddhist Kingdoms).</li>
        <li>Praised India's prosperity, mild government, religious tolerance, vegetarianism among Buddhists.</li>
      </ul>

      <h4>Mehrauli Iron Pillar</h4>
      <ul>
        <li>~7.21 m tall, ~6 tonnes; in <b>Qutub complex, Delhi</b>.</li>
        <li>Famous for <b>not rusting</b> for 1,600 years.</li>
        <li>Inscription mentions a king <b>"Chandra"</b> — generally identified with Chandragupta II.</li>
      </ul>

      <hr>

      <h3>Kumaragupta I (415–455 AD)</h3>
      <ul>
        <li>Title: <b>Mahendraditya</b>.</li>
        <li>Founded the <b>Nalanda University</b> ~427 AD.</li>
        <li>Performed Ashvamedha sacrifice (mentioned in coins).</li>
        <li>Faced Pushyamitra invasions in late reign; Hun threat began on NW frontier.</li>
        <li>Various coin types.</li>
      </ul>

      <hr>

      <h3>Skandagupta (455–467 AD)</h3>
      <ul>
        <li>Title: <b>Vikramaditya</b> (like grandfather).</li>
        <li>Last great Gupta; defended the empire against the <b>White Huns / Hephthalites / Hunas</b>.</li>
        <li><b>Junagadh Rock Inscription</b> records the repair of <b>Sudarshan Lake</b> (originally built under Chandragupta Maurya, repaired by Rudradaman, then again here) under his governor Parnadatta.</li>
        <li>Issued silver and gold coins.</li>
        <li>Bhitari Pillar Inscription describes his Hun victory.</li>
      </ul>

      <hr>

      <h3>Decline of the Guptas (467–550 AD)</h3>
      <ul>
        <li><b>Hun invasions</b> from Central Asia under <b>Toramana</b> (~500 AD) and his son <b>Mihirakula</b> (early 6th century — defeated by Yashodharman of Malwa ~528 AD).</li>
        <li>Rise of feudatories — Maukharis (Kannauj), Maitrakas (Vallabhi, Gujarat), Pushyabhutis (Thaneswar), Vakatakas (Deccan).</li>
        <li>Weak successors — series of brief reigns.</li>
        <li>Decline of Roman trade post-3rd century AD reduced revenue.</li>
        <li>By 550 AD, the empire was effectively dissolved.</li>
      </ul>

      <hr>

      <h3>Gupta Society and Economy</h3>
      <ul>
        <li>Brahmanical revival — Vishnu, Shiva, Surya worship.</li>
        <li>Caste system became more rigid; varna distinctions strict.</li>
        <li>Position of women declined further — Manusmriti's strict rules; child marriage common; first inscriptional evidence of <b>sati</b> at <b>Eran (510 AD)</b>.</li>
        <li>Untouchability hardened — Fa-Hien describes "Chandalas" living outside towns.</li>
        <li>Agricultural surplus; <b>land grants</b> to Brahmins (agrahara) and officials proliferated — early feudalism.</li>
        <li>Numerous towns prospered — Pataliputra, Ujjain, Mathura, Vidisha, Kanyakubja.</li>
        <li><b>Coins</b>:
          <ul>
            <li><b>Gold coins (Dinaras)</b> — largest gold coins of ancient India; up to 8.4 g.</li>
            <li>Various types — archer, lion-slayer, horseman, lyrist, ashvamedha.</li>
            <li>Silver and copper for local use.</li>
          </ul>
        </li>
        <li>Decline of trade with Roman empire (after 3rd c. AD); shift towards South-East Asia trade.</li>
      </ul>

      <h3>Gupta Cultural Achievements</h3>

      <h4>Literature (Sanskrit)</h4>
      <ul>
        <li><b>Kalidasa</b> — greatest playwright.</li>
        <li><b>Vishnu Sharma</b> — <b>Panchatantra</b> (animal fables; spread to Persia, Arabia, Europe).</li>
        <li><b>Vishakhadatta</b> — Mudrarakshasa (Chandragupta Maurya), Devichandragupta.</li>
        <li><b>Sudraka</b> — Mricchakatika (Little Clay Cart).</li>
        <li><b>Bhasa</b> — playwright; Svapnavasavadatta.</li>
        <li>Puranas largely composed/finalized in this period.</li>
        <li>Manusmriti, Yajnavalkya Smriti, Narada Smriti.</li>
        <li>Buddhist commentaries (Vasubandhu, Asanga).</li>
      </ul>

      <h4>Mathematics & Astronomy</h4>
      <ul>
        <li><b>Aryabhatta</b> (born 476 AD) — wrote <b>Aryabhatiya (499 AD)</b> at age 23.
          <ul>
            <li>Decimal system with <b>zero</b>.</li>
            <li>Value of π (3.1416).</li>
            <li>Earth rotates on its axis.</li>
            <li>Eclipses caused by shadows (not Rahu-Ketu myth).</li>
            <li>Calculated length of solar year (365.25 days).</li>
            <li>Trigonometry — sine.</li>
          </ul>
        </li>
        <li><b>Varahamihira</b> (505–587) — astronomer, mathematician.
          <ul>
            <li><b>Brihat Samhita</b> — encyclopedia of architecture, gemology, omens.</li>
            <li><b>Pancha Siddhantika</b> — five astronomical systems.</li>
            <li><b>Brihat Jataka</b> — astrology.</li>
          </ul>
        </li>
        <li><b>Brahmagupta</b> (later, 7th c.) — extended Aryabhatta's work.</li>
      </ul>

      <h4>Medicine</h4>
      <ul>
        <li><b>Charaka Samhita</b> — compiled earlier (Kushan era), formalized in Gupta era.</li>
        <li><b>Susruta Samhita</b> — surgical text by Susruta; "father of surgery"; describes 121 surgical instruments, plastic surgery (rhinoplasty), cataract surgery.</li>
        <li><b>Vagbhata</b> — wrote Ashtanga Hridayam (later).</li>
      </ul>

      <h4>Art and Architecture</h4>
      <ul>
        <li><b>Sarnath Buddha</b> (5th c. AD) — finest Gupta Buddha image; preaching pose.</li>
        <li><b>Ajanta Caves (Cave 1, 2, 16, 17, 19)</b> — paintings depicting Jataka stories; "Padmapani" Bodhisattva.</li>
        <li>Bagh Caves (MP).</li>
        <li><b>Dashavatara Temple, Deogarh (UP)</b> — earliest known stone temple with shikhara; depicts Vishnu's avatars.</li>
        <li><b>Vishnu Temple, Tigawa</b>; <b>Parvati Temple, Nachna Kuthara</b>.</li>
        <li>Mahabodhi Temple at Bodh Gaya — original built in this era.</li>
        <li>Statue of Vishnu at Udayagiri (MP) — boar (Varaha) avatar relief.</li>
        <li><b>Bhitargaon Temple (UP)</b> — early brick temple.</li>
      </ul>

      <hr>

      <h3>Vakatakas (3rd – 6th c. AD)</h3>
      <p>Contemporary Deccan dynasty; allies of Guptas.</p>
      <ul>
        <li>Founder: Vindhyashakti.</li>
        <li><b>Pravarasena I</b> — performed Ashvamedha.</li>
        <li><b>Rudrasena II</b> married <b>Prabhavati Gupta</b> (Chandragupta II's daughter); died early; she ruled as regent for ~20 years — strong Gupta influence.</li>
        <li>Patronized <b>Ajanta caves</b> (some painted under Vakataka king Harishena).</li>
      </ul>

      <hr>

      <h3>Pushyabhuti / Vardhana Dynasty (6th–7th c. AD)</h3>
      <ul>
        <li>Founded by Pushyabhuti at <b>Thaneswar (Sthaneshvara, Haryana)</b>.</li>
        <li>Major rulers: Prabhakaravardhana (father of Harsha) — repulsed Huns.</li>
        <li>Successors: Rajyavardhana, Harshavardhana.</li>
      </ul>

      <h3>Harshavardhana (606–647 AD) — The Last Great North Indian Hindu Emperor</h3>
      <ul>
        <li>Real name <b>Harshavardhana</b>; titles "Shiladitya", "Rajaputra".</li>
        <li>Born ~590 AD at Thaneswar; second son of Prabhakaravardhana.</li>
        <li>Sister <b>Rajyashri</b> married Maukhari king Grahavarman of Kannauj.</li>
        <li>Background:
          <ul>
            <li>Father died; elder brother Rajyavardhana ascended Thaneswar throne.</li>
            <li>King Shashanka of Gauda (Bengal) and king Devagupta of Malwa allied; killed Grahavarman; captured Rajyashri.</li>
            <li>Rajyavardhana defeated Devagupta but was killed by Shashanka.</li>
            <li><b>Harsha ascended at age 16</b> (606 AD) — also the year his Harsha era starts.</li>
            <li>Avenged brother's death (campaign against Shashanka — but did not fully defeat him).</li>
            <li>Rescued Rajyashri from suicide on funeral pyre in Vindhya forest.</li>
            <li>Capital shifted from Thaneswar to <b>Kannauj (Kanyakubja)</b> ~612 AD; Kannauj remained the political pivot of north India for next 4 centuries.</li>
          </ul>
        </li>
        <li>Conquests:
          <ul>
            <li>Punjab, Bengal, Bihar, Kashmir.</li>
            <li>Defeated by <b>Pulakeshin II of Chalukyas</b> (Badami) at the <b>Battle of Narmada</b> (~630 AD) — Aihole inscription of Ravikirti records this; Harsha's southward expansion checked.</li>
          </ul>
        </li>
      </ul>

      <h4>Hiuen Tsang (Xuanzang) at Harsha's Court</h4>
      <ul>
        <li>Chinese Buddhist pilgrim; visited India <b>629–645 AD</b>.</li>
        <li>Came overland through Central Asia (Silk Road); spent over 13 years in India.</li>
        <li>Studied at <b>Nalanda University</b> for 5 years under <b>Shilabhadra</b>.</li>
        <li>Wrote <b>"Si-Yu-Ki" / "Records of the Western Regions"</b> — most detailed foreign account of ancient India.</li>
        <li>Honoured guest at Harsha's <b>Kannauj Religious Assembly (643 AD)</b> — for 18 days; attended by 18 kings.</li>
        <li>Returned to China with <b>657 Buddhist texts</b>.</li>
        <li>Praised Harsha's piety, religious tolerance, charity assemblies.</li>
      </ul>

      <h4>Religious Assemblies</h4>
      <ul>
        <li>Harsha held religious assemblies every 5 years at <b>Prayag (Allahabad)</b> at the confluence of the Ganga, Yamuna, Saraswati — distributing all his wealth (<b>Maha-moksha-parishad</b>).</li>
        <li>The <b>Kannauj Assembly (643 AD)</b> — Buddhist scholars, Brahmins, Jains debated Mahayana doctrine.</li>
      </ul>

      <h4>Harsha as Author</h4>
      <ul>
        <li>Skilled Sanskrit dramatist; wrote three plays:
          <ol>
            <li><b>Ratnavali</b></li>
            <li><b>Nagananda</b></li>
            <li><b>Priyadarshika</b></li>
          </ol>
        </li>
        <li>Patron of Banabhatta (<b>Harshacharita</b> — biography; <b>Kadambari</b> — Sanskrit prose romance), Mayura (Suryashataka), Matanga Divakara.</li>
      </ul>

      <h4>Other Foreign Visitors</h4>
      <ul>
        <li>Chinese ambassador <b>Wang-Hiuen-Tse</b> visited Harsha's court three times.</li>
        <li>I-tsing (Yi Jing) came later (671–695 AD), studied at Nalanda.</li>
      </ul>

      <h3>Death of Harsha</h3>
      <ul>
        <li>Died 647 AD without an heir.</li>
        <li>Empire disintegrated; <b>Arjuna</b>, his minister, usurped the throne briefly.</li>
        <li>Wang-Hiuen-Tse, on a return embassy, was attacked by Arjuna; he raised troops from Tibet and Nepal, defeated Arjuna, took him to China.</li>
        <li>End of empire; north India fragmented again — Pratiharas, Palas, Rashtrakutas would emerge.</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>While the north fragmented after Harsha (647 AD), south India saw the rise of three great dynasties — <b>Pallavas, Chalukyas, and Cholas</b> — that built temples, expanded overseas trade, and developed the Dravidian style of architecture. The next topic surveys these South Indian kingdoms.</p>

      <hr>
      <h3>🧠 याद कैसे रखें? (Memory Tricks)</h3>
      <ul>
        <li><b>Gupta dates — "320 AD se 550 AD"</b>। ध्यान दें — यह AD है, BC नहीं। यानि Mauryas के <b>~500 साल बाद</b>।</li>
        <li><b>Gupta dynasty kings — "CSC Ch SK"</b>:
          <ul>
            <li><b>Chandragupta I</b> (320 AD) — founder; Lichchhavi princess Kumaradevi से शादी।</li>
            <li><b>Samudragupta</b> (335–375) — "<b>Napoleon of India</b>" (V.A. Smith ने कहा); Allahabad Pillar Inscription (Prashasti by Harisena) में conquests लिखे।</li>
            <li><b>Chandragupta II Vikramaditya</b> (375–415) — golden peak; <b>9 Gems / Navaratnas</b> court में। Fa-Hien (Chinese) आया।</li>
            <li><b>Kumaragupta I</b> — Nalanda University की स्थापना।</li>
            <li><b>Skandagupta</b> — Hunas को हराया लेकिन कमज़ोर पड़ी dynasty।</li>
          </ul>
        </li>
        <li><b>Navaratnas (9 Gems) trick — "KADVA KSV"</b>: <b>K</b>alidasa (poet — "Shakuntala"), <b>A</b>ryabhata (mathematician — zero, π), <b>D</b>hanvantari (Ayurveda), <b>V</b>arahamihira (astronomer — "Brihat Samhita"), <b>A</b>marasimha (Sanskrit lexicographer), <b>K</b>shapanaka, <b>S</b>hanku, <b>V</b>araruchi, <b>Vetalabhatta</b>।</li>
        <li><b>"Golden Age" क्यों?</b>: Aryabhata ने <b>zero</b> और decimal दिए, Kalidasa ने Shakuntala/Meghaduta लिखा, Iron Pillar (rust-free metallurgy), Nalanda University, gold coins सबसे beautiful। Science + Art दोनों चरम पर।</li>
        <li><b>Story</b>: सोचो — Mauryas के बाद ~500 साल बिखराव → फिर Guptas ने North India को एक किया। यह वो time था जब India ने world को zero दिया, decimal system दिया, Kama Sutra लिखी गई, Ajanta caves बने। इसीलिए "Golden Age"।</li>
      </ul>
    `,
    mcq: [
      { q: "Gupta Era was started in?", opts: ["319–320 AD", "335 AD", "375 AD", "606 AD"], a: 0, ex: "Started by Chandragupta I on 26 February 320 AD; founder of Gupta empire." },
      { q: "Chandragupta I married whom?", opts: ["Mahadevi", "Kumaradevi (Lichchhavi)", "Dhruvadevi", "Prabhavati"], a: 1, ex: "Married Lichchhavi princess Kumaradevi — alliance gave Guptas legitimacy." },
      { q: "'Indian Napoleon' is a title used for?", opts: ["Chandragupta Maurya", "Samudragupta", "Chandragupta II", "Harsha"], a: 1, ex: "V.A. Smith called Samudragupta the Indian Napoleon for his conquests across India." },
      { q: "Allahabad Pillar Inscription was composed by?", opts: ["Banabhatta", "Harisena", "Kalidasa", "Patanjali"], a: 1, ex: "Harisena, court poet of Samudragupta — Prayag Prashasti." },
      { q: "Samudragupta's coins show him?", opts: ["Hunting tiger", "Playing veena", "Performing Ashvamedha", "All of the above"], a: 3, ex: "Various types: archer, tiger-slayer, lyrist (veena), ashvamedha, battle-axe, etc." },
      { q: "Devichandragupta is a play by?", opts: ["Kalidasa", "Vishakhadatta", "Sudraka", "Bhasa"], a: 1, ex: "Vishakhadatta — incomplete play; mentions Ramagupta and Chandragupta II." },
      { q: "Chandragupta II is also known as?", opts: ["Samudragupta", "Vikramaditya", "Mahendraditya", "Skandagupta"], a: 1, ex: "Title 'Vikramaditya' — also 'Sakari' (destroyer of Sakas) for defeating Western Satraps." },
      { q: "Fa-Hien visited India during the reign of?", opts: ["Samudragupta", "Chandragupta II", "Kumaragupta", "Harsha"], a: 1, ex: "399–414 AD, during Chandragupta II's reign; wrote Fo-Kuo-Ki." },
      { q: "Mehrauli Iron Pillar's inscription mentions king?", opts: ["Samudra", "Chandra (Chandragupta II)", "Skanda", "Kumara"], a: 1, ex: "King 'Chandra' — generally identified with Chandragupta II." },
      { q: "Aryabhatta's Aryabhatiya was written in?", opts: ["476 AD", "499 AD", "550 AD", "606 AD"], a: 1, ex: "499 AD — when Aryabhatta was 23 years old." },
      { q: "Founder of Nalanda University was?", opts: ["Chandragupta II", "Kumaragupta I", "Skandagupta", "Harsha"], a: 1, ex: "Kumaragupta I (415–455 AD) founded Nalanda." },
      { q: "Skandagupta repulsed which invaders?", opts: ["Sakas", "Indo-Greeks", "Hunas (White Huns)", "Pushyamitras"], a: 2, ex: "White Huns / Hephthalites; Bhitari Pillar inscription records his victory." },
      { q: "First inscriptional evidence of sati is from?", opts: ["Allahabad", "Eran (510 AD)", "Junagadh", "Sanchi"], a: 1, ex: "Eran inscription (510 AD); records widow of Goparaja committing sati." },
      { q: "Susruta is known as?", opts: ["Father of Indian medicine", "Father of Indian surgery", "Author of Charaka Samhita", "Founder of Yoga"], a: 1, ex: "Father of Indian surgery; wrote Susruta Samhita; described 121 instruments and rhinoplasty." },
      { q: "Sarnath Buddha image (preaching pose) is from?", opts: ["Mauryan", "Kushan", "Gupta", "Pala"], a: 2, ex: "5th century AD Gupta; finest example of Gupta Buddha sculpture." },
      { q: "Hiuen Tsang visited India during?", opts: ["Samudragupta", "Skandagupta", "Harsha", "Pulakeshin II"], a: 2, ex: "Visited 629–645 AD; primary patron was Harsha; studied at Nalanda." },
      { q: "Harsha was defeated at Narmada by?", opts: ["Yashovarman", "Pulakeshin II", "Vikramaditya", "Mihirakula"], a: 1, ex: "Pulakeshin II of Chalukyas (Badami) defeated Harsha around 630 AD; Aihole inscription by Ravikirti." },
      { q: "Capital of Harsha was?", opts: ["Pataliputra", "Thaneswar → Kannauj", "Ujjain", "Vidisha"], a: 1, ex: "Initially Thaneswar; shifted to Kannauj (Kanyakubja) ~612 AD." },
      { q: "Harsha wrote which plays?", opts: ["Mricchakatika & Mudrarakshasa", "Ratnavali, Nagananda, Priyadarshika", "Abhijnanashakuntalam", "Devichandragupta"], a: 1, ex: "Three Sanskrit plays: Ratnavali, Nagananda, Priyadarshika." },
      { q: "Court poet of Harsha was?", opts: ["Kalidasa", "Banabhatta", "Harisena", "Vishakhadatta"], a: 1, ex: "Banabhatta — wrote Harshacharita (biography) and Kadambari (Sanskrit prose romance)." }
    ]
  };

  T["ah-south"] = {
    body: `
      ${fig("Brihadeeswara Temple Thanjavur.png", "Brihadeeshvara Temple, Thanjavur — Chola dynasty (Rajaraja I)")}
      <h3>South India — A Different Story</h3>
      <p>South of the Vindhyas, history followed a parallel but distinct course. While the north fragmented after the Guptas (550 AD), the south saw a series of long-lived dynasties — <b>Pallavas, Chalukyas, Rashtrakutas, and Cholas</b> — who built the great Dravidian temples, expanded overseas trade, founded universities, and projected Indian power into Southeast Asia. The earliest stratum was the <b>Sangam Age</b> in Tamil-speaking south.</p>

      <hr>

      <h3>1. Sangam Age (3rd c. BC – 3rd c. AD)</h3>

      <h4>The Three Sangams</h4>
      <ul>
        <li>"Sangam" = assembly (of Tamil poets); Pandyan kings of Madurai are said to have patronized three:
          <ol>
            <li><b>First Sangam</b> at Madurai (legendary; submerged); 549 poets including Agastya.</li>
            <li><b>Second Sangam</b> at Kapatapuram (submerged); 59 poets.</li>
            <li><b>Third Sangam</b> at Madurai (existing literature is from this); 49 poets.</li>
          </ol>
        </li>
        <li>Source for the legend: <b>Iraiyanar Akapporul</b> (8th c.).</li>
      </ul>

      <h4>The Three Tamil Kingdoms (Muvendar)</h4>
      <table>
        <tr><th>Dynasty</th><th>Region</th><th>Capital</th><th>Emblem</th><th>Greatest King</th></tr>
        <tr><td><b>Cheras</b></td><td>Kerala + western Tamil Nadu</td><td>Vanji (Karur)</td><td>Bow & Arrow</td><td>Senguttuvan ("Red/Good Chera")</td></tr>
        <tr><td><b>Cholas</b></td><td>Kaveri delta (Tamil Nadu)</td><td>Uraiyur; later Puhar (Kaveripattinam)</td><td>Tiger</td><td>Karikala</td></tr>
        <tr><td><b>Pandyas</b></td><td>Southern Tamil Nadu</td><td>Madurai (Korkai port)</td><td>Fish (double carp)</td><td>Nedunjeliyan</td></tr>
      </table>

      <h4>Major Rulers</h4>
      <ul>
        <li><b>Karikala Chola</b> (~190 AD) — built the <b>Kallanai (Grand Anicut) dam</b> on the Kaveri river — still in use; defeated combined Chera-Pandya forces at <b>Battle of Venni</b>.</li>
        <li><b>Senguttuvan Chera</b> — invaded north India; founded <b>Pattini cult</b> (worship of Kannagi from Silappadikaram).</li>
        <li><b>Nedunjeliyan Pandya</b> — defeated Chera-Chola alliance at the <b>Battle of Talaiyalanganam</b>.</li>
      </ul>

      <h4>Sangam Literature</h4>
      <ul>
        <li>Earliest extant Tamil literature; secular in tone.</li>
        <li><b>Tolkappiyam</b> (by Tolkappiyar) — oldest Tamil grammar.</li>
        <li><b>Ettutogai</b> ("Eight Anthologies") — including <i>Aingurunuru, Kuruntogai, Narrinai, Akananuru, Purananuru, Patirruppattu, Paripadal, Kalittogai</i>.</li>
        <li><b>Pattupattu</b> ("Ten Idylls") — including <i>Tirumurugatrupatadai, Sirupanatrupatadai, Mullaippattu, Kurunjippattu, Maduraikanchi</i>.</li>
        <li><b>Pathinenkilkanakku</b> ("18 Minor Works") — including <b>Tirukkural</b> (by <b>Thiruvalluvar</b>).</li>
        <li>Five great Tamil epics (later than Sangam):
          <ol>
            <li><b>Silappadikaram</b> ("Story of the Anklet") — by <b>Ilango Adigal</b>; about Kannagi and Kovalan.</li>
            <li><b>Manimekalai</b> — by <b>Sittalai Sattanar</b>; Buddhist.</li>
            <li>Civaka Cintamani — by Tiruttakkadevar (Jain).</li>
            <li>Valayapathi.</li>
            <li>Kundalakesi.</li>
          </ol>
        </li>
      </ul>

      <h4>Sangam Society</h4>
      <ul>
        <li>Five eco-zones (tinai): <b>Kurinji</b> (hills), <b>Mullai</b> (forests), <b>Marudam</b> (plains), <b>Neidal</b> (coast), <b>Palai</b> (desert).</li>
        <li>Active trade with Rome — Roman gold coins found at <b>Coimbatore, Madurai, Karur</b>; ports of Muziris (Cranganore), Tondi, Korkai, Kaveripattinam.</li>
        <li><i>Periplus of the Erythraean Sea</i> (~50 AD) describes Tamil trade.</li>
      </ul>

      <hr>

      <h3>2. Pallavas of Kanchipuram (~275 – 897 AD)</h3>
      <ul>
        <li>Origin debated (possibly Pahlava/Persian, or local).</li>
        <li>Capital: <b>Kanchipuram</b> ("city of a thousand temples").</li>
        <li>Initially used Prakrit, then Sanskrit and Tamil.</li>
      </ul>

      <h4>Major Rulers</h4>
      <table>
        <tr><th>Ruler</th><th>Reign</th><th>Highlights</th></tr>
        <tr><td><b>Simhavishnu</b></td><td>~575–600</td><td>Founder of imperial Pallavas; conquered Cholas.</td></tr>
        <tr><td><b>Mahendravarman I</b></td><td>600–630</td><td>"Vichitrachitta" (curious-minded); patron of Tamil + Sanskrit; <b>started rock-cut temples</b> (Mandagapattu — first in Tamil Nadu); wrote satirical play <b>Mattavilasa Prahasana</b>; defeated by Pulakeshin II.</td></tr>
        <tr><td><b>Narasimhavarman I "Mahamalla"</b></td><td>630–668</td><td>Greatest Pallava; <b>defeated and killed Pulakeshin II</b> at <b>Battle of Vatapi (642 AD)</b>; took title <b>"Vatapikonda"</b>; founded <b>Mamallapuram (Mahabalipuram)</b> — Five Rathas, Shore Temple, Pancha Pandava cave temples; <b>Hiuen Tsang visited Kanchi</b> during his reign.</td></tr>
        <tr><td>Mahendravarman II, Parameshvaravarman I</td><td>668–705</td><td>—</td></tr>
        <tr><td><b>Narasimhavarman II "Rajasimha"</b></td><td>700–728</td><td>Built <b>Shore Temple at Mahabalipuram</b> and <b>Kailasanatha Temple at Kanchipuram</b> (early structural temples); patron of poet Dandin (author of <i>Dasakumaracharita</i>).</td></tr>
        <tr><td><b>Nandivarman II</b></td><td>731–795</td><td>Built <b>Vaikunta Perumal Temple, Kanchi</b>.</td></tr>
        <tr><td>Aparajita</td><td>~885–897</td><td>Last Pallava; defeated by Aditya Chola.</td></tr>
      </table>

      <h4>Pallava Architecture — Four Stages (according to Percy Brown)</h4>
      <ol>
        <li><b>Mahendra style (610–640 AD)</b> — rock-cut cave temples (Mahendravarman I).</li>
        <li><b>Mamalla style (640–700 AD)</b> — monolithic rathas at Mahabalipuram; <b>Five Rathas (Pancha Rathas)</b> — Dharmaraja, Bhima, Arjuna, Nakula-Sahadeva, Draupadi.</li>
        <li><b>Rajasimha style (700–800 AD)</b> — structural temples; Shore Temple (Mahabalipuram), Kailasanatha (Kanchi), Vaikunta Perumal.</li>
        <li><b>Aparajita style (800–900 AD)</b> — small structural temples; transition to Chola.</li>
      </ol>

      <hr>

      <h3>3. Chalukyas of Badami / Vatapi (543–757 AD)</h3>
      <ul>
        <li>Capital: <b>Badami / Vatapi (Karnataka)</b>.</li>
        <li>Founder: <b>Pulakeshin I</b> (543 AD).</li>
        <li>Most famous: <b>Pulakeshin II</b>.</li>
      </ul>

      <h4>Pulakeshin II (610–642 AD)</h4>
      <ul>
        <li>Greatest Chalukya king; restored fortunes after early reverses.</li>
        <li>Conquered Andhra (defeated Vishnukundins), made his brother <b>Kubja Vishnuvardhana</b> viceroy of Vengi (founder of <b>Eastern Chalukyas</b>).</li>
        <li><b>Aihole Inscription</b> (634 AD) — composed by court poet <b>Ravikirti</b>; records his career; on the wall of Meguti Jain temple.</li>
        <li><b>Defeated Harshavardhana</b> at the <b>Battle of Narmada</b> (~630 AD); only ruler to defeat Harsha.</li>
        <li><b>Hiuen Tsang visited his court</b> (around 641 AD).</li>
        <li>Persian envoy from Khusro II of Iran visited; an Ajanta cave painting (Cave 1) is said to depict this.</li>
        <li><b>Killed by Pallava Narasimhavarman I</b> at the Battle of Vatapi (642 AD); Vatapi sacked.</li>
      </ul>

      <h4>Chalukya Architecture</h4>
      <ul>
        <li>"Cradle of Indian temple architecture" — testing ground for both Nagara and Dravidian styles.</li>
        <li><b>Aihole</b> — ~125 temples; called "city of temples"; <b>Lad Khan, Durga, Meguti</b> temples.</li>
        <li><b>Badami</b> — rock-cut cave temples (4 caves: 3 Hindu + 1 Jain).</li>
        <li><b>Pattadakal (UNESCO)</b> — 10 temples; mix of Nagara and Dravidian styles; <b>Virupaksha temple</b> (Lokeshvara) by Lokamahadevi (queen of Vikramaditya II) commemorates his victory over Pallavas.</li>
      </ul>

      <h4>Other Chalukya Branches</h4>
      <ul>
        <li><b>Eastern Chalukyas of Vengi</b> (624–1070) — founded by Kubja Vishnuvardhana; later merged with Cholas through Rajaraja's daughter Kundavai.</li>
        <li><b>Western Chalukyas of Kalyani</b> (973–1189) — re-emerged after Rashtrakutas; founder Tailapa II; <b>Vikramaditya VI</b> patronized poet <b>Bilhana</b> (Vikramankadeva Charita) and jurist <b>Vijnaneshvara</b> (Mitakshara).</li>
      </ul>

      <hr>

      <h3>4. Rashtrakutas (753–973 AD)</h3>
      <ul>
        <li>Founder: <b>Dantidurga</b> — overthrew Chalukya Kirtivarman II (753 AD).</li>
        <li>Capital: <b>Manyakheta (Malkhed, Karnataka)</b>.</li>
        <li>Tripartite struggle (with Pratiharas, Palas) for control of <b>Kannauj</b>.</li>
      </ul>

      <h4>Major Rulers</h4>
      <ul>
        <li><b>Krishna I</b> — built the magnificent <b>Kailasa Temple (Cave 16) at Ellora</b> — entirely carved out of single rock; largest monolithic structure in the world; symbolizes Mt. Kailash.</li>
        <li><b>Govinda III</b> — most successful militarily; defeated Pala and Pratihara kings.</li>
        <li><b>Amoghavarsha I "Atishaya Dhavala"</b> (814–878) — longest reign (~64 years); wrote <b>"Kavirajamarga"</b> — oldest existing book on poetics in Kannada (also said to be written by his court poet); patron of Jainism; Arab travelers Sulaiman called him one of the four greatest kings of the world.</li>
        <li><b>Krishna III</b> — last great Rashtrakuta; defeated Cholas and Cheras.</li>
      </ul>

      <h4>Cultural Achievements</h4>
      <ul>
        <li><b>Kailasa Temple, Ellora</b> — one of greatest engineering feats of ancient world.</li>
        <li>Patrons of Jainism — many Jain temples at Ellora.</li>
        <li>Encouraged Kannada and Sanskrit literature.</li>
      </ul>

      <hr>

      <h3>5. Cholas (Imperial, 850–1279 AD)</h3>
      <p>The most powerful South Indian dynasty; created the only Indian empire that ruled Sri Lanka and parts of Southeast Asia.</p>

      <h4>Founders and Major Rulers</h4>
      <table>
        <tr><th>Ruler</th><th>Reign</th><th>Highlights</th></tr>
        <tr><td><b>Vijayalaya</b></td><td>848–871</td><td>Founder; <b>captured Tanjore (Thanjavur) ~850 AD</b> from Muttaraiyar.</td></tr>
        <tr><td>Aditya I</td><td>871–907</td><td>Defeated Pallava Aparajita; ended Pallava rule.</td></tr>
        <tr><td>Parantaka I</td><td>907–953</td><td>Defeated Pandyas, took Madurai; titled "Madurakonda"; defeated by Rashtrakuta Krishna III at Takkolam (949).</td></tr>
        <tr><td><b>Rajaraja Chola I "Rajaraja the Great"</b></td><td>985–1014</td><td>Greatest Chola; conquered Kerala (Cheras), Pandyas, parts of Sri Lanka, Maldives, Vengi; built <b>Brihadishvara / Brihadeshwara Temple at Tanjore (1010 AD)</b> — UNESCO World Heritage; the Rajarajeshwaram. Issued elaborate copper plate inscriptions; granted villages to temples.</td></tr>
        <tr><td><b>Rajendra Chola I "Gangaikondachola"</b></td><td>1014–1044</td><td>Greatest Chola; <b>conquered Bengal up to the Ganga</b> (took title <b>Gangaikondachola</b>); built <b>Gangaikonda Cholapuram</b> as new capital with <b>Brihadishvara Temple</b> there; <b>naval expedition to Srivijaya (Sumatra/Indonesia, 1025 AD)</b> — only Indian king to conquer overseas territory; expanded the Chola Lake.</td></tr>
        <tr><td>Rajadhiraja, Rajendra II, Virarajendra</td><td>1044–1070</td><td>—</td></tr>
        <tr><td>Kulottunga I (Chalukya-Chola)</td><td>1070–1120</td><td>United Chola and Eastern Chalukya lines; abolished tolls — title "Sungam Tavirtta Cholan"; sent envoy to China.</td></tr>
        <tr><td>Kulottunga III</td><td>1178–1216</td><td>—</td></tr>
        <tr><td>Rajendra III</td><td>1246–1279</td><td>Last Chola; defeated by Pandya Maravarman; end of Chola empire.</td></tr>
      </table>

      <h4>Chola Administration — Highly Organized</h4>
      <ul>
        <li><b>King</b>: ruled with absolute authority; took titles like Chakravartin.</li>
        <li><b>Mandalas</b> (provinces) → <b>Valanadus</b> (commissarates) → <b>Nadus</b> (districts) → <b>Kurram / Kottam</b> (groups of villages) → <b>villages</b>.</li>
        <li><b>Local self-government</b> — most distinctive feature.</li>
      </ul>

      <h4>Chola Village Self-Government</h4>
      <ul>
        <li>Three types of village assemblies:
          <ol>
            <li><b>Ur</b> — assembly of common village.</li>
            <li><b>Sabha (Mahasabha)</b> — assembly of <b>Brahmin agraharam (brahmadeya)</b> village; only adult male Brahmin landowners voted.</li>
            <li><b>Nagaram</b> — assembly of merchants in trading towns.</li>
          </ol>
        </li>
        <li><b>Uttiramerur Inscriptions (919–921 AD)</b> of <b>Parantaka I</b> at the Vaikuntha Perumal Temple, Uttiramerur (TN) — describe in great detail:
          <ul>
            <li>Election by lottery (kudavolai system) — names of candidates put in pot, drawn out by a child.</li>
            <li>Qualifications: own property, knowledge of Vedas, ages 35–70.</li>
            <li>Disqualifications: corruption, drunkenness, criminality, leprosy.</li>
            <li>Tenure 1 year; minimum 3 years before re-election.</li>
            <li>Variyams (committees) — Annual Committee, Garden Committee, Tank Committee, Justice Committee, Gold Committee.</li>
          </ul>
        </li>
        <li>One of the most sophisticated systems of local self-government in pre-modern world.</li>
      </ul>

      <h4>Chola Society and Economy</h4>
      <ul>
        <li>Sophisticated revenue system; survey of land; rotation of crops.</li>
        <li>Brahmin land grants (brahmadeya); temple land (devadana); royal land (vellanvagai).</li>
        <li>Active overseas trade with China, SE Asia, Arabia.</li>
        <li>Coins: gold (<i>kasu</i>, <i>varaha</i>); silver and copper.</li>
        <li>Powerful merchant guilds — <b>"Manigramam, Ayyavolu, Anjuvannam, Nanadeshi"</b>.</li>
      </ul>

      <h4>Chola Art and Architecture</h4>
      <ul>
        <li><b>Brihadishvara Temple, Tanjore (1010 AD)</b> — by Rajaraja I; 66 m vimana; one of the tallest temples; UNESCO World Heritage.</li>
        <li><b>Brihadishvara Temple, Gangaikonda Cholapuram</b> — by Rajendra I.</li>
        <li><b>Airavateshvara Temple, Darasuram</b> — by Rajaraja II.</li>
        <li>Together these three are the <b>"Great Living Chola Temples"</b> — UNESCO.</li>
        <li>Chola <b>bronze sculpture</b>: <b>Nataraja</b> (cosmic dance of Shiva) — internationally celebrated; lost-wax technique.</li>
        <li>Chola period: peak of Dravidian temple architecture.</li>
      </ul>

      <h4>Religion and Culture</h4>
      <ul>
        <li>Patrons of Shaivism (Brihadishvara dedicated to Shiva).</li>
        <li>Bhakti movement — <b>Nayanars</b> (63 Shaiva saints) and <b>Alvars</b> (12 Vaishnava saints).</li>
        <li>Tamil literature flourished — <b>Kamban</b> (Ramayana in Tamil); Sekkilar (<i>Periya Puranam</i>).</li>
        <li>Sanskrit also patronized.</li>
      </ul>

      <hr>

      <h3>6. Other Notable South Indian Dynasties</h3>
      <ul>
        <li><b>Pandyas (revival, 1190–1310)</b> — Madurai; Marco Polo visited (1288, 1293) under Maravarman Kulasekhara; ended by Malik Kafur's invasion (1310).</li>
        <li><b>Hoysalas (1026–1343)</b> — Karnataka; capital Dwarasamudra (Halebidu); famous temples — <b>Chennakeshava (Belur), Hoysaleshwara (Halebidu), Keshava (Somnathpur)</b> — star-shaped soapstone temples; ended by Khilji and Tughlaq invasions.</li>
        <li><b>Yadavas of Devagiri (1187–1318)</b> — Maharashtra; Marathi-speaking; capital Devagiri (Daulatabad); famous for poet Hemadri (Hemadpanti style of architecture); ended by Alauddin Khilji and Muhammad bin Tughlaq.</li>
        <li><b>Kakatiyas of Warangal (1163–1323)</b> — Andhra; <b>Rudrama Devi</b> (1262–89) — one of few female rulers in Indian history; ended by Tughlaqs (1323).</li>
        <li><b>Eastern Gangas of Odisha</b> — built <b>Sun Temple at Konark</b> by Narasimhadeva I (1238–64) and Jagannath Temple at Puri (Anantavarman Chodaganga).</li>
      </ul>

      <hr>

      <h3>Temple Architecture — Three Styles</h3>
      <table>
        <tr><th>Style</th><th>Region</th><th>Shikhara</th><th>Examples</th></tr>
        <tr><td><b>Nagara</b></td><td>North India</td><td>Curvilinear (beehive); ends in <i>amalaka</i> & <i>kalasha</i></td><td>Khajuraho (Chandellas); Sun Temple Konark; Lingaraja (Bhubaneshwar); Modhera Sun Temple (Solanki)</td></tr>
        <tr><td><b>Dravidian</b></td><td>South India</td><td>Pyramidal vimana; ends in <i>stupika</i>; tall <i>gopurams</i> at gates</td><td>Brihadishvara Tanjore; Mahabalipuram; Meenakshi Madurai (Pandya/Nayaka); Virupaksha Hampi</td></tr>
        <tr><td><b>Vesara</b></td><td>Deccan (between Vindhyas and Krishna)</td><td>Hybrid; circular shikhara on square base</td><td>Hoysala temples (Belur, Halebidu, Somnathpur); some Pattadakal temples</td></tr>
      </table>

      <h4>Parts of a Hindu Temple</h4>
      <ul>
        <li><b>Garbhagriha</b> — sanctum; idol kept here.</li>
        <li><b>Mandapa</b> — pillared hall.</li>
        <li><b>Shikhara/Vimana</b> — tower above the garbhagriha.</li>
        <li><b>Antarala</b> — vestibule.</li>
        <li><b>Gopuram</b> (Dravidian) — gateway tower.</li>
        <li><b>Pradakshinapatha</b> — circumambulation path.</li>
      </ul>

      <hr>

      <h3>South Indian Influence on Southeast Asia</h3>
      <ul>
        <li>Southeast Asia became "Greater India" — Sanskrit names, Hindu-Buddhist religion, Indian alphabets.</li>
        <li><b>Funan, Champa, Khmer (Angkor Wat — Suryavarman II ~1150), Srivijaya, Sailendra (Borobudur), Majapahit</b> — all influenced by Indian culture.</li>
        <li><b>Angkor Wat (Cambodia)</b> — largest religious monument in the world; built as a Vishnu temple.</li>
        <li>Cultural transmission via Indian merchants and Brahmins; <b>not by conquest</b> (except briefly Cholas).</li>
      </ul>

      <h3>Looking Ahead — End of Ancient History</h3>
      <p>The Chola empire weakened by 1279 AD; Khilji and Tughlaq invasions destroyed Yadavas, Kakatiyas, Hoysalas, Pandyas (1310–1323); the Vijayanagar empire (1336) and Bahmani Sultanate (1347) emerged from the ruins, beginning a new era. Combined with the rise of the Delhi Sultanate in the north (1206), this transition marks the end of "Ancient" India and the beginning of "Medieval" India — covered in the Medieval History section.</p>

      <hr>
      <h3>🧠 याद कैसे रखें? (Memory Tricks)</h3>
      <ul>
        <li><b>3 Sangam dynasties — "CCP"</b>: <b>C</b>hera (Kerala, west coast), <b>C</b>hola (Tamil Nadu east coast), <b>P</b>andya (south, Madurai)।</li>
        <li><b>Sangam Age</b>: ~300 BC – 300 AD; Tamil literature का golden age। Sangam = "गोष्ठी/assembly" of poets।</li>
        <li><b>3 Sangams held at</b>: Madurai (capital of Pandyas)।</li>
        <li><b>Cholas — 2 phases</b>: Sangam Cholas (early) → <b>Imperial Cholas</b> (9th–13th century AD)। Imperial में <b>Rajaraja I</b> + <b>Rajendra I</b> सबसे महान।</li>
        <li><b>Rajaraja I (985–1014)</b>: Brihadeeshvara Temple (Thanjavur) बनवाया — UNESCO site, Dravida architecture का जौहर।</li>
        <li><b>Rajendra I (1014–1044)</b>: <b>"Gangaikondacholapuram"</b> नाम बदला (Ganga तक पहुँचने के बाद); पहला Indian ruler जिसने <b>Bay of Bengal "Chola Lake"</b> बनाया — SE Asia (Srivijaya) तक navy भेजी।</li>
        <li><b>Pallavas (6th–9th c.)</b>: Capital Kanchipuram। <b>Mahabalipuram</b> rock-cut temples (Shore Temple, Five Rathas)। Narasimhavarman I सबसे famous।</li>
        <li><b>Story</b>: South India का history independent है — Aryan invasion का असर कम पड़ा। Tamils ने अपनी language, sangam poetry, और world's longest classical Sanskrit/Tamil drama tradition develop की। Cholas ने इतना naval power बनाया कि SE Asia तक राज किया।</li>
      </ul>
    `,
    mcq: [
      { q: "Sangam literature was composed in?", opts: ["Sanskrit", "Tamil", "Telugu", "Pali"], a: 1, ex: "Tamil — earliest extant Tamil literature; assemblies (Sangams) at Madurai under Pandyas." },
      { q: "Tolkappiyam, the oldest Tamil grammar, was written by?", opts: ["Thiruvalluvar", "Tolkappiyar", "Ilango Adigal", "Sittalai Sattanar"], a: 1, ex: "Tolkappiyar; the oldest extant Tamil work." },
      { q: "Silappadikaram was authored by?", opts: ["Sittalai Sattanar", "Ilango Adigal", "Thiruvalluvar", "Tiruttakkadevar"], a: 1, ex: "Ilango Adigal — story of Kannagi and Kovalan." },
      { q: "Kallanai (Grand Anicut) dam on Kaveri was built by?", opts: ["Karikala Chola", "Senguttuvan Chera", "Rajaraja Chola", "Pulakeshin II"], a: 0, ex: "Karikala Chola (~190 AD) — still in use; one of the world's oldest dams." },
      { q: "Pallava capital was at?", opts: ["Tanjore", "Madurai", "Kanchipuram", "Vatapi"], a: 2, ex: "Kanchipuram — 'city of a thousand temples'." },
      { q: "Mahabalipuram (Mamallapuram) was built by?", opts: ["Mahendravarman I", "Narasimhavarman I", "Rajaraja Chola", "Pulakeshin II"], a: 1, ex: "Narasimhavarman I 'Mahamalla'; founded after his title." },
      { q: "Battle of Vatapi (642 AD) was won by?", opts: ["Pulakeshin II", "Narasimhavarman I", "Harsha", "Karikala"], a: 1, ex: "Pallava Narasimhavarman I killed Pulakeshin II; took title 'Vatapikonda'." },
      { q: "Pulakeshin II of Chalukyas defeated whom at Narmada?", opts: ["Harsha", "Yashovarman", "Mihirakula", "Rajendra"], a: 0, ex: "Defeated Harshavardhana around 630 AD; recorded in Aihole Inscription by Ravikirti." },
      { q: "Hiuen Tsang visited Pulakeshin II's court around?", opts: ["629 AD", "641 AD", "647 AD", "650 AD"], a: 1, ex: "~641 AD; described his peaceful kingdom." },
      { q: "Pattadakal temples (UNESCO) were built by?", opts: ["Pallavas", "Cholas", "Chalukyas of Badami", "Rashtrakutas"], a: 2, ex: "Chalukyas of Badami; Virupaksha temple by Lokamahadevi commemorates Vikramaditya II's victory over Pallavas." },
      { q: "Founder of Rashtrakuta dynasty was?", opts: ["Krishna I", "Dantidurga", "Govinda III", "Amoghavarsha"], a: 1, ex: "Dantidurga (753 AD) — overthrew Chalukya Kirtivarman II." },
      { q: "Kailasa Temple at Ellora was built by?", opts: ["Pallavas", "Cholas", "Rashtrakutas (Krishna I)", "Chalukyas"], a: 2, ex: "Krishna I of Rashtrakutas — Cave 16, monolithic, carved from single rock." },
      { q: "Amoghavarsha I wrote which book?", opts: ["Tirukkural", "Kavirajamarga (Kannada poetics)", "Mattavilasa Prahasana", "Vikramankadeva Charita"], a: 1, ex: "Kavirajamarga — oldest existing book on Kannada poetics." },
      { q: "Founder of imperial Cholas was?", opts: ["Aditya I", "Vijayalaya", "Rajaraja I", "Karikala"], a: 1, ex: "Vijayalaya — captured Tanjore from Muttaraiyar around 850 AD." },
      { q: "Brihadeshvara Temple at Tanjore was built by?", opts: ["Vijayalaya", "Rajaraja I", "Rajendra I", "Kulottunga"], a: 1, ex: "Rajaraja Chola I (1010 AD) — UNESCO World Heritage; vimana ~66 m tall." },
      { q: "Rajendra Chola I conquered up to which river/region?", opts: ["Indus", "Yamuna", "Ganga (Bengal)", "Narmada"], a: 2, ex: "Bengal up to the Ganga — took title 'Gangaikondachola'; built Gangaikonda Cholapuram as new capital." },
      { q: "Naval expedition to Srivijaya (Sumatra) was led by?", opts: ["Rajaraja", "Rajendra Chola I (1025 AD)", "Kulottunga", "Vijayalaya"], a: 1, ex: "Rajendra Chola I in 1025 AD — only Indian king to conquer overseas." },
      { q: "Uttiramerur inscription describes?", opts: ["Trade", "Local self-government in Cholas", "Conquests", "Religion"], a: 1, ex: "Detailed system of village/sabha elections under Cholas; kudavolai (lottery) system; from 919 AD under Parantaka I." },
      { q: "Three village assemblies in Cholas were?", opts: ["Sabha, Samiti, Vidatha", "Ur, Sabha, Nagaram", "Mandala, Nadu, Kottam", "Mahasabha, Mahanagaram, Mahaur"], a: 1, ex: "Ur (common village), Sabha (Brahmin agraharam), Nagaram (merchants)." },
      { q: "Hoysala temples are in?", opts: ["Tamil Nadu", "Karnataka (Belur, Halebidu, Somnathpur)", "Andhra", "Kerala"], a: 1, ex: "Karnataka — Chennakeshava (Belur), Hoysaleshwara (Halebidu), Keshava (Somnathpur); star-shaped soapstone." },
      { q: "Rudrama Devi was the queen of?", opts: ["Cholas", "Pallavas", "Kakatiyas of Warangal", "Hoysalas"], a: 2, ex: "Kakatiya queen (1262–89); rare female ruler; Andhra." },
      { q: "Sun Temple at Konark was built by?", opts: ["Cholas", "Eastern Gangas (Narasimhadeva I)", "Pallavas", "Pandyas"], a: 1, ex: "Narasimhadeva I of Eastern Gangas (1238–64); UNESCO; Nagara style." },
      { q: "Nagara style of temple is found in?", opts: ["South India", "North India", "Deccan", "Sri Lanka"], a: 1, ex: "North India — curvilinear shikhara; Khajuraho, Konark, Lingaraja." },
      { q: "Vesara style is associated with?", opts: ["North India", "South India", "Deccan", "Bengal"], a: 2, ex: "Deccan — hybrid of Nagara and Dravidian; Hoysala temples." }
    ]
  };

  T["ah-temple-architecture"] = {
    body: `
      ${figRow([
        ["Khajuraho India, Kandariya Mahadev Temple Sculpture.JPG", "Nagara style — Khajuraho (Kandariya Mahadev)"],
        ["Darasuram, Airavatesvara Temple, Mandapa at night 4, India.jpg", "Dravida style — Airavateshvara, Darasuram"],
        ["Nandi (bull) facing porch entrance into Doddabasappa temple at Dambal.jpg", "Vesara style — Doddabasappa Temple, Dambal"]
      ])}
      <h3>Temple Architecture in India — Three Great Styles</h3>
      <p>Indian temples (5th c. AD onwards) developed three distinct regional styles, codified in <b>Shilpa Shastras</b> (Manasara, Mayamatam, Vishvakarma Vastushastra):</p>
      <table>
        <tr><th>Style</th><th>Region</th><th>Defining Feature</th></tr>
        <tr><td><b>Nagara</b></td><td>North India (north of Vindhyas)</td><td>Curvilinear shikhara (beehive); square plan; ends in <i>amalaka</i> + <i>kalasha</i></td></tr>
        <tr><td><b>Dravidian</b></td><td>South India (Krishna river south)</td><td>Pyramidal vimana; tall <i>gopurams</i> at gates; large complexes</td></tr>
        <tr><td><b>Vesara</b></td><td>Deccan (between Vindhyas and Krishna)</td><td>Hybrid; star-shaped plan; circular shikhara on square base</td></tr>
      </table>

      <h3>Parts of a Hindu Temple</h3>
      <ul>
        <li><b>Garbhagriha</b> — sanctum sanctorum (idol).</li>
        <li><b>Mandapa</b> — pillared hall for devotees.</li>
        <li><b>Antarala</b> — vestibule between mandapa and garbhagriha.</li>
        <li><b>Shikhara / Vimana</b> — tower above garbhagriha.</li>
        <li><b>Pradakshinapatha</b> — circumambulation path.</li>
        <li><b>Gopuram</b> (Dravidian) — gateway tower.</li>
        <li><b>Amalaka</b> — ribbed disc (Nagara); <b>Kalasha</b> — pot finial.</li>
      </ul>

      <hr>

      <h3>1. NAGARA STYLE (North India)</h3>

      <h4>Sub-styles</h4>
      <ul>
        <li><b>Latina (Rekha-Prasada)</b> — single curvilinear shikhara; most common (Khajuraho).</li>
        <li><b>Phamsana</b> — broader, lower; pyramidal; mostly mandapas.</li>
        <li><b>Valabhi</b> — rectangular base with vaulted roof.</li>
      </ul>

      <h4>Major Nagara Schools</h4>
      <table>
        <tr><th>School</th><th>Region</th><th>Key Temples</th></tr>
        <tr><td><b>Odisha (Kalinga) school</b></td><td>Odisha</td><td><b>Lingaraja (Bhubaneshwar, 11th c.)</b>, <b>Jagannath (Puri, 12th c., by Anantavarman Chodaganga)</b>, <b>Sun Temple Konark (1238–64, by Narasimhadeva I — UNESCO)</b>, Mukteshvara, Rajarani.</td></tr>
        <tr><td><b>Khajuraho (Chandela) school</b></td><td>Bundelkhand (MP)</td><td>~85 temples (only 25 survive); UNESCO. <b>Kandariya Mahadeva (largest)</b>, Lakshmana, Vishwanath, Devi Jagadambi, Chitragupta, Parshvanatha (Jain). Erotic sculptures famous.</td></tr>
        <tr><td><b>Solanki / Maru-Gurjara school</b></td><td>Gujarat, Rajasthan</td><td><b>Modhera Sun Temple (1026, by Bhima I Solanki)</b>, <b>Dilwara Jain Temples (Mt. Abu, 11–13th c.)</b>, Somnath Temple (originally), Rani-ki-Vav (UNESCO step-well).</td></tr>
        <tr><td><b>Pala-Sena school</b></td><td>Bengal, Bihar</td><td>Brick temples; Vishnupur (Bishnupur) terracotta; Somapura Mahavihara (Bangladesh, UNESCO).</td></tr>
      </table>

      <hr>

      <h3>2. DRAVIDIAN STYLE (South India)</h3>

      <h4>Stages of Dravidian Temple Evolution</h4>
      <table>
        <tr><th>Period</th><th>Stage</th><th>Examples</th></tr>
        <tr><td>610–700</td><td><b>Mahendra (rock-cut caves)</b></td><td>Mandagapattu (first), Mahendravadi, Trichy (Pallavas)</td></tr>
        <tr><td>640–700</td><td><b>Mamalla (monolithic rathas)</b></td><td>Five Rathas (Pancha Pandava Rathas) at Mahabalipuram; rock-cut by Narasimhavarman I</td></tr>
        <tr><td>700–800</td><td><b>Rajasimha (early structural)</b></td><td>Shore Temple (Mahabalipuram), Kailasanatha (Kanchi), Vaikunta Perumal (Kanchi)</td></tr>
        <tr><td>800–900</td><td><b>Aparajita / late Pallava</b></td><td>Smaller structural temples</td></tr>
        <tr><td>850–1280</td><td><b>Chola (peak Dravidian)</b></td><td>Brihadeshvara Tanjore (1010, Rajaraja I — UNESCO), Brihadeshvara Gangaikondacholapuram (Rajendra I), Airavateshvara Darasuram (Rajaraja II) — together "Great Living Chola Temples" UNESCO</td></tr>
        <tr><td>1300–1500</td><td><b>Pandya (post-Chola)</b></td><td>Tall gopurams; emphasis on entry towers</td></tr>
        <tr><td>1336–1565</td><td><b>Vijayanagara (Provida)</b></td><td>Vitthala Temple (musical pillars + stone chariot), Hazara Rama, Virupaksha — all at Hampi (UNESCO 1986); Vellore (Jalakanteshwara)</td></tr>
        <tr><td>17th c.</td><td><b>Nayaka</b></td><td>Meenakshi Madurai (under Tirumala Nayaka, 1623–55) — 14 gopurams, 1000-pillar hall; Ranganatha Srirangam (largest functioning Hindu temple)</td></tr>
      </table>

      <h4>Distinctive Dravidian Features</h4>
      <ul>
        <li><b>Vimana</b> — pyramidal tower above sanctum.</li>
        <li><b>Stupika</b> — pot finial.</li>
        <li><b>Gopuram</b> — gateway tower (became taller than vimana in late period).</li>
        <li>Massive walled compounds (prakaras).</li>
        <li>Pillared halls (mandapas) with sculpted columns.</li>
        <li>Tank (kalyani / temple tank) for ritual bathing.</li>
      </ul>

      <hr>

      <h3>3. VESARA STYLE (Deccan)</h3>
      <ul>
        <li>Combines Nagara curves with Dravidian pyramid.</li>
        <li>Star-shaped (stellate) plans.</li>
        <li>Soapstone (chloritic schist) — fine carving possible.</li>
      </ul>

      <h4>Examples</h4>
      <ul>
        <li><b>Pattadakal (Karnataka)</b> — 10 temples; Chalukyas of Badami; UNESCO.
          <ul>
            <li><b>Virupaksha</b> (by queen Lokamahadevi, 740 AD) — Dravidian.</li>
            <li><b>Mallikarjuna</b> — Dravidian.</li>
            <li><b>Papanatha</b> — Nagara.</li>
            <li>Includes Jain and Hindu temples.</li>
          </ul>
        </li>
        <li><b>Hoysala temples (Karnataka, 11–14th c.)</b> — soapstone; star-shaped:
          <ul>
            <li><b>Chennakeshava (Belur, 1117, by Vishnuvardhana)</b>.</li>
            <li><b>Hoysaleshwara (Halebidu)</b> — twin temple.</li>
            <li><b>Keshava (Somnathpur, 1268)</b>.</li>
          </ul>
        </li>
        <li><b>Kakatiya temples (Andhra)</b> — Ramappa (Warangal, UNESCO 2021), Thousand-Pillar Temple (Hanamkonda).</li>
      </ul>

      <hr>

      <h3>BUDDHIST AND JAIN ARCHITECTURE</h3>

      <h4>Buddhist Stupas</h4>
      <ul>
        <li><b>Stupa</b> — hemispherical dome over relics; surrounded by railings; 4 toranas (gateways).</li>
        <li>Parts: <b>Anda</b> (dome), <b>Harmika</b> (square railing on top), <b>Chhatra</b> (umbrella finial), <b>Medhi</b> (drum), <b>Vedika</b> (railing), <b>Toranas</b> (gateways).</li>
        <li>Famous stupas:
          <ul>
            <li><b>Sanchi Stupa No. 1 (Madhya Pradesh)</b> — original by Ashoka; enlarged by Shungas; sculpted toranas added by Satavahanas; UNESCO.</li>
            <li><b>Bharhut Stupa (MP)</b> — Shunga era; railings and toranas in Indian Museum, Calcutta.</li>
            <li><b>Amaravati Stupa (Andhra)</b> — Satavahana; white marble; 2nd c. BC – 2nd c. AD.</li>
            <li><b>Nagarjunakonda (Andhra)</b> — Ikshvaku.</li>
            <li><b>Dhamek Stupa (Sarnath)</b> — site of Buddha's first sermon.</li>
            <li><b>Borobudur (Indonesia)</b> — largest Buddhist monument; Sailendra dynasty.</li>
          </ul>
        </li>
      </ul>

      <h4>Buddhist Cave Architecture</h4>
      <table>
        <tr><th>Site</th><th>Period</th><th>Note</th></tr>
        <tr><td><b>Barabar Caves (Bihar)</b></td><td>Mauryan (Ashoka)</td><td>Earliest rock-cut caves; Lomas Rishi cave; gifted to Ajivikas.</td></tr>
        <tr><td><b>Karle (Maharashtra)</b></td><td>1st BC – 2nd AD (Satavahana)</td><td>Most famous chaitya hall.</td></tr>
        <tr><td>Bhaja, Nasik, Kanheri, Kondane</td><td>Satavahana</td><td>Buddhist caves.</td></tr>
        <tr><td><b>Ajanta (Maharashtra)</b></td><td>2nd BC – 6th AD (Vakataka, Gupta)</td><td>30 caves; <b>paintings</b> of Jataka stories; "Padmapani Bodhisattva"; UNESCO.</td></tr>
        <tr><td><b>Ellora (Maharashtra)</b></td><td>5th–10th c.</td><td>34 caves — Buddhist (1–12), Hindu (13–29), Jain (30–34); <b>Kailasa Temple (Cave 16)</b> by Krishna I (Rashtrakuta) — monolithic; UNESCO.</td></tr>
        <tr><td>Bagh Caves (MP)</td><td>4–6th c.</td><td>Buddhist; paintings.</td></tr>
        <tr><td>Elephanta (Maharashtra)</td><td>6th c.</td><td>Hindu Shaiva caves; <b>Trimurti Sadashiva</b> 6 m sculpture; UNESCO.</td></tr>
      </table>

      <h4>Jain Architecture</h4>
      <ul>
        <li><b>Udayagiri-Khandagiri (Odisha)</b> — Kharavela (1st c. BC); Jain caves.</li>
        <li><b>Sravanabelagola (Karnataka)</b> — colossal <b>Bahubali / Gomateshwara statue</b> (57 ft, 983 AD by Chamundaraya).</li>
        <li><b>Dilwara Temples (Mt. Abu)</b> — Solanki/Chalukya marble Jain temples.</li>
        <li><b>Palitana (Gujarat)</b> — Shatrunjaya hill; 863 temples.</li>
        <li><b>Ranakpur (Rajasthan)</b> — 15th c.; 1,444 marble pillars, no two alike.</li>
        <li><b>Khajuraho Jain temples</b> — Parshvanatha, Adinath, Shantinath.</li>
      </ul>

      <hr>

      <h3>INDO-ISLAMIC ARCHITECTURE (Brief)</h3>
      <ul>
        <li><b>Slave Dynasty</b>: Quwwat-ul-Islam Mosque (1192) — first mosque in India; <b>Qutb Minar</b> (started by Aibak 1192–93, completed by Iltutmish, restored by Firuz Shah). Adhai Din ka Jhonpra (Ajmer).</li>
        <li><b>Khilji</b>: <b>Alai Darwaza (1311)</b> — first true Islamic arch and dome in India; Siri Fort.</li>
        <li><b>Tughlaq</b>: Tughlaqabad (Ghiyasuddin); Firozabad; Hauz Khas.</li>
        <li><b>Lodi</b>: Octagonal tombs (Lodi Gardens, Delhi).</li>
        <li><b>Mughal architecture</b>: Humayun's Tomb (1565–72) → Akbar's Fatehpur Sikri (1571–85, red sandstone) → Itmad-ud-Daula's tomb (1622–28, first pietra dura) → Taj Mahal (1632–48, Shah Jahan, marble) → Bibi-ka-Maqbara (1660, Aurangzeb).</li>
        <li><b>Provincial styles</b>: Bahmani (Gulbarga, Bidar — Mahmud Gawan's madrasa); Bijapur (<b>Gol Gumbaz</b> — 2nd largest dome; Whispering Gallery; Ibrahim Rauza); Golconda/Hyderabad (<b>Charminar 1591</b>, Mecca Masjid); Jaunpur Sharqi (Atala Mosque); Bengal (Adina Mosque).</li>
      </ul>

      <h3>UNESCO World Heritage Indian Temple Sites</h3>
      <ul>
        <li>Mahabalipuram (1984)</li>
        <li>Khajuraho (1986)</li>
        <li>Hampi (1986)</li>
        <li>Pattadakal (1987)</li>
        <li>Konark Sun Temple (1984)</li>
        <li>Great Living Chola Temples (1987)</li>
        <li>Ajanta + Ellora + Elephanta (1983)</li>
        <li>Sanchi Stupas (1989)</li>
        <li>Mahabodhi Temple Complex, Bodh Gaya (2002)</li>
        <li>Sun Temple, Modhera (tentative)</li>
        <li>Hoysala Temples (Belur, Halebidu, Somnathpur — 2023)</li>
        <li>Ramappa Temple, Telangana (2021)</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>Indian temple architecture forms one continuous heritage from rock-cut Mauryan caves (3rd c. BC) to Nayaka gopurams (17th c. AD). Each region developed its own grammar — Nagara north, Dravidian south, Vesara Deccan. With this we close Ancient History; medieval India introduced Islamic architecture which would coexist with surviving Hindu styles.</p>

      <hr>
      <h3>🧠 याद कैसे रखें? (Memory Tricks)</h3>
      <ul>
        <li><b>3 Temple Styles — "N-D-V"</b>:
          <ul>
            <li><b>N</b>agara — <b>North</b> India। <b>Curved shikhara</b> (beehive shape)। No big boundary wall। Examples: Khajuraho, Konark, Lingaraja।</li>
            <li><b>D</b>ravida — <b>South</b> India। <b>Pyramidal vimana</b> (stepped tower)। बड़ा gopuram (entrance gate)। Walled compound। Examples: Brihadeeshvara (Thanjavur), Meenakshi (Madurai)।</li>
            <li><b>V</b>esara — <b>Deccan</b> (mix of both)। Half-curved, half-pyramidal। Examples: Hoysala temples (Belur, Halebidu), Pattadakal।</li>
          </ul>
        </li>
        <li><b>Trick to remember "Vimana vs Shikhara"</b>: South में "V" = Vimana = Dravida (V-V matching); North में Shikhara = Nagara (S-N memory)।</li>
        <li><b>Famous temples by style</b>:
          <ul>
            <li>Nagara: <b>Khajuraho</b> (Chandelas, MP), <b>Konark Sun Temple</b> (Odisha, Ganga dynasty), <b>Jagannath Puri</b>, <b>Lingaraja Bhubaneshwar</b>।</li>
            <li>Dravida: <b>Brihadeeshvara Thanjavur</b> (Chola — Rajaraja I), <b>Meenakshi Madurai</b>, <b>Shore Temple Mahabalipuram</b> (Pallava), <b>Virupaksha Hampi</b> (Vijayanagara)।</li>
            <li>Vesara: <b>Chennakeshava Belur</b>, <b>Hoysaleswara Halebidu</b> (Hoysalas)।</li>
          </ul>
        </li>
        <li><b>Cave architecture (rock-cut)</b>: <b>Ajanta</b> (Buddhist, MP) — paintings। <b>Ellora</b> (Buddhist + Hindu + Jain) — <b>Kailasa Temple</b> entire mountain से carved। <b>Mahabalipuram</b> (Pallava, TN) — Five Rathas, Shore Temple।</li>
        <li><b>Story</b>: South में patrons बड़े-बड़े kings थे जिनके पास stone और लम्बा time था — वहाँ huge stone temples बने। North में लकड़ी ज़्यादा use होती थी, इसलिए shikhara उठा हुआ; और invaders के डर से बड़े-बड़े walled temples कम बने।</li>
      </ul>
    `,
    mcq: [
      { q: "Three major styles of Indian temple architecture are?", opts: ["Nagara, Dravidian, Vesara", "Maru, Gurjara, Vesara", "Pallava, Chola, Hoysala", "Buddhist, Hindu, Jain"], a: 0, ex: "Nagara (North), Dravidian (South), Vesara (Deccan/hybrid)." },
      { q: "Curvilinear shikhara is characteristic of?", opts: ["Dravidian", "Nagara", "Vesara", "Indo-Islamic"], a: 1, ex: "Nagara — beehive-shaped tower; ends in amalaka and kalasha." },
      { q: "Pyramidal vimana with tall gopurams is the feature of?", opts: ["Nagara", "Dravidian", "Vesara", "Buddhist"], a: 1, ex: "Dravidian style — found in South India." },
      { q: "Khajuraho temples are in?", opts: ["Odisha", "Madhya Pradesh (Bundelkhand)", "Rajasthan", "Gujarat"], a: 1, ex: "Bundelkhand (MP); Chandela dynasty; UNESCO 1986; ~25 of original 85 survive." },
      { q: "Sun Temple at Konark was built by?", opts: ["Cholas", "Eastern Gangas (Narasimhadeva I)", "Pallavas", "Pandyas"], a: 1, ex: "Narasimhadeva I, 1238–64; Nagara Kalinga style; UNESCO." },
      { q: "Lingaraja Temple is at?", opts: ["Bhubaneshwar", "Puri", "Konark", "Madurai"], a: 0, ex: "Bhubaneshwar — Odisha Kalinga school of Nagara." },
      { q: "Modhera Sun Temple was built by?", opts: ["Solanki Bhima I (1026)", "Cholas", "Hoysalas", "Mughals"], a: 0, ex: "Bhima I Solanki — Maru-Gurjara style; Gujarat." },
      { q: "Brihadeshvara Temple at Tanjore was built by?", opts: ["Vijayalaya", "Rajaraja I (1010)", "Rajendra I", "Krishna Deva Raya"], a: 1, ex: "Rajaraja Chola I in 1010; UNESCO Great Living Chola Temples." },
      { q: "Five Rathas (Pancha Pandava Rathas) are at?", opts: ["Tanjore", "Mahabalipuram", "Kanchipuram", "Hampi"], a: 1, ex: "Mahabalipuram — by Narasimhavarman I 'Mahamalla' (Pallava)." },
      { q: "Hoysala temples (Belur, Halebidu, Somnathpur) are made of?", opts: ["Granite", "Soapstone (chloritic schist)", "Marble", "Sandstone"], a: 1, ex: "Soapstone — allows fine carving; star-shaped plans." },
      { q: "Pattadakal (UNESCO) was built by?", opts: ["Pallavas", "Cholas", "Chalukyas of Badami", "Rashtrakutas"], a: 2, ex: "Chalukyas of Badami; Virupaksha temple by queen Lokamahadevi; mix of Nagara and Dravidian." },
      { q: "Meenakshi Temple Madurai was built/expanded under?", opts: ["Pallavas", "Cholas", "Pandyas (revival)", "Tirumala Nayaka (17th c.)"], a: 3, ex: "Pandyas built earlier; Nayakas (Tirumala Nayaka 1623–55) added 14 gopurams and 1000-pillar hall." },
      { q: "Vitthala Temple with musical pillars and stone chariot is at?", opts: ["Madurai", "Hampi (Vijayanagara)", "Tanjore", "Konark"], a: 1, ex: "Hampi — Vijayanagara empire; UNESCO World Heritage 1986." },
      { q: "Kailasa Temple at Ellora (monolithic) was built by?", opts: ["Pallavas", "Cholas", "Krishna I (Rashtrakuta)", "Chalukyas"], a: 2, ex: "Cave 16 at Ellora; carved out of single rock; Krishna I." },
      { q: "Ajanta caves are famous for?", opts: ["Sculptures only", "Paintings (Jataka stories)", "Stupas", "Inscriptions"], a: 1, ex: "Cave paintings — Padmapani Bodhisattva; covered Jataka stories; Vakataka era." },
      { q: "Sanchi Stupa (UNESCO) is in?", opts: ["Bihar", "Madhya Pradesh", "UP", "Andhra"], a: 1, ex: "MP — original by Ashoka; toranas added by Satavahanas." },
      { q: "Bahubali / Gomateshwara colossal statue (57 ft) is at?", opts: ["Mt. Abu", "Sravanabelagola (Karnataka)", "Khajuraho", "Palitana"], a: 1, ex: "Sravanabelagola, Karnataka — c. 983 AD by Chamundaraya (under Ganga king Rachamalla)." },
      { q: "Dilwara Jain Temples are at?", opts: ["Palitana", "Mt. Abu (Rajasthan)", "Ranakpur", "Sravanabelagola"], a: 1, ex: "Mt. Abu — Solanki/Chalukya period; marble." },
      { q: "Earliest rock-cut caves in India are at?", opts: ["Ajanta", "Ellora", "Barabar (Bihar)", "Karle"], a: 2, ex: "Barabar Caves, Bihar — Mauryan (Ashoka) era; Lomas Rishi cave; gifted to Ajivikas." },
      { q: "Trimurti Sadashiva (6 m sculpture) is at?", opts: ["Ajanta", "Ellora", "Elephanta", "Karle"], a: 2, ex: "Elephanta Caves, Maharashtra; 6th century; UNESCO." }
    ]
  };

})();
