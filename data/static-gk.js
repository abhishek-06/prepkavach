(function() {
  const T = window.TOPICS = window.TOPICS || {};

  // ═══════════════════════════════════════════════════════════════
  // WORLD GK
  // ═══════════════════════════════════════════════════════════════

  // ───────────────────────────────────────────────────────────────
  // 1. FIRST IN THE WORLD
  // ───────────────────────────────────────────────────────────────
  T["sgk-first-world"] = {
    body: `
      <h2>First in the World</h2>
      <p>Notable "firsts" in world history — frequently asked in SSC.</p>

      <h3>1. Space</h3>
      <table>
        <tr><th>First</th><th>Name</th><th>Year/Detail</th></tr>
        <tr><td>First satellite</td><td>Sputnik-1 (USSR)</td><td>1957</td></tr>
        <tr><td>First animal in space</td><td>Laika (dog, USSR)</td><td>1957</td></tr>
        <tr><td>First man in space</td><td>Yuri Gagarin (USSR)</td><td>1961</td></tr>
        <tr><td>First woman in space</td><td>Valentina Tereshkova (USSR)</td><td>1963</td></tr>
        <tr><td>First person on Moon</td><td>Neil Armstrong (USA)</td><td>20 July 1969</td></tr>
        <tr><td>First woman to walk in space</td><td>Svetlana Savitskaya (USSR)</td><td>1984</td></tr>
        <tr><td>First space tourist</td><td>Dennis Tito (USA)</td><td>2001</td></tr>
      </table>

      <h3>2. Mountaineering</h3>
      <ul>
        <li><b>First to climb Everest</b>: Edmund Hillary (NZ) & Tenzing Norgay (Nepal), 29 May 1953.</li>
        <li><b>First woman to climb Everest</b>: Junko Tabei (Japan), 1975.</li>
        <li><b>First Indian to climb Everest</b>: Tenzing Norgay (1953).</li>
        <li><b>First Indian woman on Everest</b>: Bachendri Pal, 1984.</li>
      </ul>

      <h3>3. Polar Exploration</h3>
      <ul>
        <li><b>First to reach North Pole</b>: Robert Peary (USA), 1909.</li>
        <li><b>First to reach South Pole</b>: Roald Amundsen (Norway), 1911.</li>
      </ul>

      <h3>4. World Records by Country</h3>
      <ul>
        <li><b>First country to give women voting rights</b>: New Zealand (1893).</li>
        <li><b>First written constitution</b>: USA (1788).</li>
        <li><b>First Olympics (modern)</b>: Athens, Greece (1896).</li>
        <li><b>First country to launch satellite</b>: USSR (1957).</li>
        <li><b>First Asian to win Nobel</b>: Rabindranath Tagore (1913, Literature).</li>
        <li><b>First woman Nobel</b>: Marie Curie (Physics, 1903).</li>
      </ul>

      <h3>5. Inventions and Discoveries</h3>
      <table>
        <tr><th>Invention</th><th>Inventor</th><th>Year</th></tr>
        <tr><td>Telephone</td><td>Alexander Graham Bell</td><td>1876</td></tr>
        <tr><td>Light bulb</td><td>Thomas Edison</td><td>1879</td></tr>
        <tr><td>Television</td><td>John Logie Baird</td><td>1925</td></tr>
        <tr><td>Aeroplane</td><td>Wright Brothers</td><td>1903</td></tr>
        <tr><td>Radio</td><td>G. Marconi</td><td>1895</td></tr>
        <tr><td>Penicillin</td><td>Alexander Fleming</td><td>1928</td></tr>
        <tr><td>Computer (modern)</td><td>Charles Babbage (Father)</td><td>1830s concept</td></tr>
        <tr><td>WWW</td><td>Tim Berners-Lee</td><td>1989</td></tr>
        <tr><td>Steam engine</td><td>James Watt</td><td>1769</td></tr>
        <tr><td>Printing press</td><td>Gutenberg</td><td>1450</td></tr>
        <tr><td>Electricity</td><td>Benjamin Franklin</td><td>1752</td></tr>
        <tr><td>X-rays</td><td>Wilhelm Röntgen</td><td>1895</td></tr>
        <tr><td>Radioactivity</td><td>Henri Becquerel</td><td>1896</td></tr>
        <tr><td>Atom bomb</td><td>Oppenheimer</td><td>1945</td></tr>
        <tr><td>Periodic table</td><td>Mendeleev</td><td>1869</td></tr>
      </table>

      <h3>6. Olympic & Sports Firsts</h3>
      <ul>
        <li>First modern Olympics: Athens 1896.</li>
        <li>First Winter Olympics: Chamonix, France 1924.</li>
        <li>First Olympic gold for India: 1928 Hockey (Amsterdam).</li>
        <li>First female Olympian: Charlotte Cooper (Britain, 1900).</li>
      </ul>

      <h3>7. Heads of State</h3>
      <ul>
        <li>First woman PM in world: Sirimavo Bandaranaike (Sri Lanka, 1960).</li>
        <li>First woman President in world: Vigdís Finnbogadóttir (Iceland, 1980).</li>
        <li>First Black US President: Barack Obama (2009).</li>
        <li>First US President: George Washington (1789).</li>
        <li>First UN Secretary General: Trygve Lie (Norway, 1946).</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Yuri Gagarin: first man in space (1961).</li>
        <li>Neil Armstrong: first on moon (1969).</li>
        <li>Hillary + Tenzing: first to Everest (1953).</li>
        <li>Marie Curie: first woman Nobel.</li>
        <li>New Zealand: first to give women vote (1893).</li>
      </ul>
    `,
    mcq: [
      { q: "First person on moon:", opts: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Edmund Hillary"], a: 1, ex: "1969." },
      { q: "First man in space:", opts: ["Neil Armstrong", "Yuri Gagarin", "Alan Shepard", "John Glenn"], a: 1, ex: "1961, USSR." },
      { q: "First woman in space:", opts: ["Marie Curie", "Valentina Tereshkova", "Sally Ride", "Kalpana Chawla"], a: 1, ex: "USSR 1963." },
      { q: "First to climb Everest:", opts: ["Tenzing only", "Hillary only", "Hillary + Tenzing", "Junko Tabei"], a: 2, ex: "1953." },
      { q: "First country to give women vote:", opts: ["USA", "UK", "New Zealand", "France"], a: 2, ex: "1893." },
      { q: "First Asian Nobel laureate:", opts: ["Gandhi", "Tagore", "Nehru", "Sen"], a: 1, ex: "1913 Literature." },
      { q: "First woman Nobel:", opts: ["Mother Teresa", "Marie Curie", "Pearl Buck", "Selma Lagerlöf"], a: 1, ex: "1903 Physics." },
      { q: "First satellite:", opts: ["Apollo 11", "Sputnik-1", "Hubble", "ISS"], a: 1, ex: "USSR 1957." },
      { q: "First modern Olympics in:", opts: ["Rome", "Athens", "Paris", "London"], a: 1, ex: "Greece 1896." },
      { q: "First US President:", opts: ["Lincoln", "Washington", "Jefferson", "Adams"], a: 1, ex: "George Washington 1789." },
      { q: "First woman PM (world):", opts: ["Indira Gandhi", "Sirimavo Bandaranaike", "Thatcher", "Bandaranaike Jr."], a: 1, ex: "Sri Lanka 1960." },
      { q: "First to reach South Pole:", opts: ["Peary", "Scott", "Amundsen", "Shackleton"], a: 2, ex: "Roald Amundsen 1911." },
      { q: "Invented telephone:", opts: ["Edison", "Bell", "Marconi", "Tesla"], a: 1, ex: "Alexander Graham Bell." },
      { q: "Invented WWW:", opts: ["Gates", "Jobs", "Berners-Lee", "Zuckerberg"], a: 2, ex: "Tim Berners-Lee 1989." },
      { q: "Discovered penicillin:", opts: ["Pasteur", "Fleming", "Salk", "Mendel"], a: 1, ex: "Alexander Fleming 1928." },
      { q: "Discovered X-rays:", opts: ["Curie", "Becquerel", "Röntgen", "Einstein"], a: 2, ex: "1895." },
      { q: "First Black US President:", opts: ["Obama", "King", "Biden", "Mandela"], a: 0, ex: "Barack Obama 2009." },
      { q: "Father of computers:", opts: ["Babbage", "Turing", "Edison", "Gates"], a: 0, ex: "Charles Babbage." },
      { q: "Invented light bulb:", opts: ["Tesla", "Edison", "Bell", "Faraday"], a: 1, ex: "Thomas Edison 1879." },
      { q: "First Indian woman on Everest:", opts: ["Bachendri Pal", "Junko Tabei", "Arunima Sinha", "Santosh Yadav"], a: 0, ex: "1984." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 2. SUPERLATIVES (Largest, Smallest, Longest, Highest) IN WORLD
  // ───────────────────────────────────────────────────────────────
  T["sgk-superlatives-world"] = {
    body: `
      <h2>Smallest, Largest, Longest, Deepest in the World</h2>

      <h3>1. Land & Countries</h3>
      <ul>
        <li><b>Largest country (area)</b>: Russia (~17.1 million km²).</li>
        <li><b>Smallest country (area)</b>: Vatican City (0.44 km²).</li>
        <li><b>Largest population country</b>: India (2023, surpassed China).</li>
        <li><b>Smallest population country</b>: Vatican City (~800).</li>
        <li><b>Largest continent</b>: Asia.</li>
        <li><b>Smallest continent</b>: Australia/Oceania.</li>
        <li><b>Largest island</b>: Greenland.</li>
        <li><b>Largest archipelago</b>: Indonesia (>17,000 islands).</li>
        <li><b>Largest peninsula</b>: Arabia.</li>
      </ul>

      <h3>2. Mountains</h3>
      <ul>
        <li><b>Highest mountain</b>: Mt. Everest (8,848.86 m), Nepal-Tibet border.</li>
        <li><b>Highest in Western Hemisphere</b>: Aconcagua, Argentina (6,961 m).</li>
        <li><b>Highest in Africa</b>: Kilimanjaro, Tanzania (5,895 m).</li>
        <li><b>Longest mountain range</b>: Andes, South America (~7,000 km).</li>
        <li><b>Highest in India</b>: Kanchenjunga (8,586 m); also 3rd highest in world. Highest entirely in India: K2 is in PoK; thus Kanchenjunga.</li>
        <li><b>Longest mountain range in India</b>: Himalayas.</li>
      </ul>

      <h3>3. Rivers</h3>
      <ul>
        <li><b>Longest river</b>: Nile (Africa, ~6,650 km) — most accepted; Amazon contested.</li>
        <li><b>Largest river by volume</b>: Amazon, South America.</li>
        <li><b>Longest in Asia</b>: Yangtze, China (~6,300 km).</li>
        <li><b>Longest in India</b>: Ganga (2,525 km).</li>
      </ul>

      <h3>4. Oceans & Lakes</h3>
      <ul>
        <li><b>Largest ocean</b>: Pacific.</li>
        <li><b>Smallest ocean</b>: Arctic.</li>
        <li><b>Deepest ocean point</b>: Mariana Trench, Pacific (~11,034 m).</li>
        <li><b>Largest lake (area)</b>: Caspian Sea (saltwater).</li>
        <li><b>Largest freshwater lake</b>: Lake Superior, North America.</li>
        <li><b>Largest freshwater lake by volume</b>: Lake Baikal, Russia.</li>
        <li><b>Deepest lake</b>: Lake Baikal (~1,642 m).</li>
        <li><b>Highest lake</b>: Lake Titicaca, Andes (3,812 m).</li>
        <li><b>Lowest point on land</b>: Dead Sea (-431 m below sea level).</li>
      </ul>

      <h3>5. Deserts</h3>
      <ul>
        <li><b>Largest hot desert</b>: Sahara, Africa.</li>
        <li><b>Largest desert overall</b>: Antarctica (cold desert).</li>
        <li><b>Hottest desert</b>: Sahara.</li>
        <li><b>Largest in Asia</b>: Gobi.</li>
        <li><b>Largest in India</b>: Thar.</li>
      </ul>

      <h3>6. Waterfalls</h3>
      <ul>
        <li><b>Highest waterfall</b>: Angel Falls, Venezuela (979 m).</li>
        <li><b>Largest by volume</b>: Inga Falls, Congo.</li>
        <li><b>Widest</b>: Khone Falls, Laos.</li>
      </ul>

      <h3>7. Buildings & Structures</h3>
      <ul>
        <li><b>Tallest building</b>: Burj Khalifa, Dubai (828 m).</li>
        <li><b>Tallest tower</b>: Tokyo Skytree (634 m).</li>
        <li><b>Longest wall</b>: Great Wall of China.</li>
        <li><b>Largest religious monument</b>: Angkor Wat, Cambodia.</li>
        <li><b>Largest palace</b>: Forbidden City, Beijing.</li>
        <li><b>Largest stadium</b>: Narendra Modi Stadium, Ahmedabad (1,32,000).</li>
      </ul>

      <h3>8. Animals & Plants</h3>
      <ul>
        <li><b>Largest animal</b>: Blue Whale.</li>
        <li><b>Largest land animal</b>: African Elephant.</li>
        <li><b>Tallest animal</b>: Giraffe.</li>
        <li><b>Fastest land animal</b>: Cheetah.</li>
        <li><b>Fastest bird</b>: Peregrine Falcon (diving 389 km/h).</li>
        <li><b>Largest bird</b>: Ostrich.</li>
        <li><b>Smallest bird</b>: Bee Hummingbird.</li>
        <li><b>Smallest mammal</b>: Bumblebee Bat (Kitti's hog-nosed).</li>
        <li><b>Largest fish</b>: Whale Shark.</li>
        <li><b>Tallest tree</b>: Coast Redwood (~115 m).</li>
        <li><b>Largest flower</b>: Rafflesia.</li>
        <li><b>Smallest flowering plant</b>: Wolffia.</li>
      </ul>

      <h3>9. Other Notables</h3>
      <ul>
        <li>Most populous city: Tokyo.</li>
        <li>Highest capital: La Paz, Bolivia (3,500 m).</li>
        <li>Longest railway line: Trans-Siberian.</li>
        <li>Largest planet: Jupiter.</li>
        <li>Smallest planet: Mercury.</li>
        <li>Hottest planet: Venus.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Russia: largest country.</li>
        <li>Vatican: smallest country.</li>
        <li>Greenland: largest island.</li>
        <li>Pacific: largest ocean.</li>
        <li>Burj Khalifa: tallest building.</li>
        <li>Sahara: largest hot desert; Antarctica: largest desert overall.</li>
        <li>Nile: longest river.</li>
        <li>Mariana Trench: deepest ocean point.</li>
      </ul>
    `,
    mcq: [
      { q: "Largest country (area):", opts: ["China", "USA", "Russia", "Canada"], a: 2, ex: "Russia ~17 million km²." },
      { q: "Smallest country:", opts: ["Monaco", "Vatican", "Nauru", "San Marino"], a: 1, ex: "Vatican City." },
      { q: "Largest continent:", opts: ["Africa", "Asia", "Europe", "North America"], a: 1, ex: "Asia." },
      { q: "Smallest continent:", opts: ["Europe", "Australia", "Africa", "Antarctica"], a: 1, ex: "Australia/Oceania." },
      { q: "Tallest mountain:", opts: ["K2", "Everest", "Kanchenjunga", "Annapurna"], a: 1, ex: "8848.86 m." },
      { q: "Largest island:", opts: ["Madagascar", "Greenland", "Borneo", "Indonesia"], a: 1, ex: "Greenland." },
      { q: "Longest river:", opts: ["Nile", "Amazon", "Yangtze", "Ganges"], a: 0, ex: "Nile most accepted." },
      { q: "Largest ocean:", opts: ["Atlantic", "Indian", "Pacific", "Arctic"], a: 2, ex: "Pacific." },
      { q: "Deepest ocean point:", opts: ["Mariana Trench", "Tonga Trench", "Java Trench", "Puerto Rico Trench"], a: 0, ex: "~11,034 m." },
      { q: "Largest hot desert:", opts: ["Gobi", "Sahara", "Kalahari", "Arabian"], a: 1, ex: "Sahara." },
      { q: "Largest desert overall:", opts: ["Sahara", "Antarctica", "Gobi", "Arabian"], a: 1, ex: "Antarctica (cold desert)." },
      { q: "Highest waterfall:", opts: ["Niagara", "Victoria", "Angel Falls", "Iguazu"], a: 2, ex: "Venezuela, 979 m." },
      { q: "Tallest building:", opts: ["Burj Khalifa", "Eiffel Tower", "Empire State", "Tokyo Tower"], a: 0, ex: "Dubai, 828 m." },
      { q: "Largest animal:", opts: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"], a: 2, ex: "Blue Whale." },
      { q: "Fastest land animal:", opts: ["Lion", "Cheetah", "Tiger", "Leopard"], a: 1, ex: "Cheetah ~110 km/h." },
      { q: "Largest planet:", opts: ["Earth", "Saturn", "Jupiter", "Uranus"], a: 2, ex: "Jupiter." },
      { q: "Smallest planet:", opts: ["Pluto (dwarf)", "Mercury", "Mars", "Venus"], a: 1, ex: "Mercury smallest among planets." },
      { q: "Hottest planet:", opts: ["Mercury", "Venus", "Mars", "Jupiter"], a: 1, ex: "Venus (greenhouse effect)." },
      { q: "Largest archipelago:", opts: ["Philippines", "Japan", "Indonesia", "Malaysia"], a: 2, ex: ">17,000 islands." },
      { q: "Highest in Africa:", opts: ["Atlas", "Kilimanjaro", "Mt Kenya", "Drakensberg"], a: 1, ex: "Tanzania." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 3. COUNTRIES, CAPITALS & CURRENCIES
  // ───────────────────────────────────────────────────────────────
  T["sgk-capitals-currencies"] = {
    body: `
      <h2>Countries, Capitals & Currencies</h2>

      <h3>1. South Asia</h3>
      <table>
        <tr><th>Country</th><th>Capital</th><th>Currency</th></tr>
        <tr><td>India</td><td>New Delhi</td><td>Indian Rupee (₹)</td></tr>
        <tr><td>Pakistan</td><td>Islamabad</td><td>Pakistani Rupee</td></tr>
        <tr><td>Bangladesh</td><td>Dhaka</td><td>Taka</td></tr>
        <tr><td>Sri Lanka</td><td>Colombo (commercial), Sri Jayawardenepura Kotte (admin)</td><td>Sri Lankan Rupee</td></tr>
        <tr><td>Nepal</td><td>Kathmandu</td><td>Nepalese Rupee</td></tr>
        <tr><td>Bhutan</td><td>Thimphu</td><td>Ngultrum</td></tr>
        <tr><td>Maldives</td><td>Male</td><td>Rufiyaa</td></tr>
        <tr><td>Afghanistan</td><td>Kabul</td><td>Afghani</td></tr>
        <tr><td>Myanmar</td><td>Naypyidaw</td><td>Kyat</td></tr>
      </table>

      <h3>2. East Asia</h3>
      <table>
        <tr><th>Country</th><th>Capital</th><th>Currency</th></tr>
        <tr><td>China</td><td>Beijing</td><td>Yuan (Renminbi)</td></tr>
        <tr><td>Japan</td><td>Tokyo</td><td>Yen</td></tr>
        <tr><td>North Korea</td><td>Pyongyang</td><td>North Korean Won</td></tr>
        <tr><td>South Korea</td><td>Seoul</td><td>South Korean Won</td></tr>
        <tr><td>Mongolia</td><td>Ulaanbaatar</td><td>Tugrik</td></tr>
        <tr><td>Taiwan</td><td>Taipei</td><td>New Taiwan Dollar</td></tr>
      </table>

      <h3>3. Southeast Asia</h3>
      <table>
        <tr><th>Country</th><th>Capital</th><th>Currency</th></tr>
        <tr><td>Indonesia</td><td>Jakarta (new: Nusantara)</td><td>Rupiah</td></tr>
        <tr><td>Thailand</td><td>Bangkok</td><td>Baht</td></tr>
        <tr><td>Vietnam</td><td>Hanoi</td><td>Dong</td></tr>
        <tr><td>Philippines</td><td>Manila</td><td>Peso</td></tr>
        <tr><td>Malaysia</td><td>Kuala Lumpur</td><td>Ringgit</td></tr>
        <tr><td>Singapore</td><td>Singapore</td><td>Singapore Dollar</td></tr>
        <tr><td>Cambodia</td><td>Phnom Penh</td><td>Riel</td></tr>
        <tr><td>Laos</td><td>Vientiane</td><td>Kip</td></tr>
        <tr><td>Brunei</td><td>Bandar Seri Begawan</td><td>Brunei Dollar</td></tr>
      </table>

      <h3>4. West/Middle East Asia</h3>
      <table>
        <tr><th>Country</th><th>Capital</th><th>Currency</th></tr>
        <tr><td>Saudi Arabia</td><td>Riyadh</td><td>Riyal</td></tr>
        <tr><td>UAE</td><td>Abu Dhabi</td><td>Dirham</td></tr>
        <tr><td>Iran</td><td>Tehran</td><td>Rial</td></tr>
        <tr><td>Iraq</td><td>Baghdad</td><td>Dinar</td></tr>
        <tr><td>Israel</td><td>Jerusalem</td><td>Shekel</td></tr>
        <tr><td>Turkey</td><td>Ankara</td><td>Lira</td></tr>
        <tr><td>Syria</td><td>Damascus</td><td>Syrian Pound</td></tr>
        <tr><td>Yemen</td><td>Sana'a</td><td>Yemeni Rial</td></tr>
        <tr><td>Qatar</td><td>Doha</td><td>Qatari Riyal</td></tr>
        <tr><td>Kuwait</td><td>Kuwait City</td><td>Kuwaiti Dinar (most valuable)</td></tr>
        <tr><td>Oman</td><td>Muscat</td><td>Omani Rial</td></tr>
        <tr><td>Jordan</td><td>Amman</td><td>Jordanian Dinar</td></tr>
        <tr><td>Lebanon</td><td>Beirut</td><td>Lebanese Pound</td></tr>
      </table>

      <h3>5. Europe</h3>
      <table>
        <tr><th>Country</th><th>Capital</th><th>Currency</th></tr>
        <tr><td>UK</td><td>London</td><td>Pound Sterling (£)</td></tr>
        <tr><td>France</td><td>Paris</td><td>Euro (€)</td></tr>
        <tr><td>Germany</td><td>Berlin</td><td>Euro</td></tr>
        <tr><td>Italy</td><td>Rome</td><td>Euro</td></tr>
        <tr><td>Spain</td><td>Madrid</td><td>Euro</td></tr>
        <tr><td>Russia</td><td>Moscow</td><td>Ruble</td></tr>
        <tr><td>Netherlands</td><td>Amsterdam</td><td>Euro</td></tr>
        <tr><td>Belgium</td><td>Brussels</td><td>Euro</td></tr>
        <tr><td>Switzerland</td><td>Bern</td><td>Swiss Franc</td></tr>
        <tr><td>Austria</td><td>Vienna</td><td>Euro</td></tr>
        <tr><td>Portugal</td><td>Lisbon</td><td>Euro</td></tr>
        <tr><td>Greece</td><td>Athens</td><td>Euro</td></tr>
        <tr><td>Norway</td><td>Oslo</td><td>Norwegian Krone</td></tr>
        <tr><td>Sweden</td><td>Stockholm</td><td>Swedish Krona</td></tr>
        <tr><td>Denmark</td><td>Copenhagen</td><td>Danish Krone</td></tr>
        <tr><td>Finland</td><td>Helsinki</td><td>Euro</td></tr>
        <tr><td>Poland</td><td>Warsaw</td><td>Zloty</td></tr>
        <tr><td>Ireland</td><td>Dublin</td><td>Euro</td></tr>
        <tr><td>Ukraine</td><td>Kyiv</td><td>Hryvnia</td></tr>
        <tr><td>Vatican</td><td>Vatican City</td><td>Euro</td></tr>
      </table>

      <h3>6. Africa (Major)</h3>
      <table>
        <tr><th>Country</th><th>Capital</th><th>Currency</th></tr>
        <tr><td>Egypt</td><td>Cairo</td><td>Egyptian Pound</td></tr>
        <tr><td>South Africa</td><td>Pretoria (admin), Cape Town, Bloemfontein</td><td>Rand</td></tr>
        <tr><td>Nigeria</td><td>Abuja</td><td>Naira</td></tr>
        <tr><td>Kenya</td><td>Nairobi</td><td>Kenyan Shilling</td></tr>
        <tr><td>Ethiopia</td><td>Addis Ababa</td><td>Birr</td></tr>
        <tr><td>Morocco</td><td>Rabat</td><td>Dirham</td></tr>
        <tr><td>Algeria</td><td>Algiers</td><td>Dinar</td></tr>
        <tr><td>Ghana</td><td>Accra</td><td>Cedi</td></tr>
        <tr><td>Tanzania</td><td>Dodoma</td><td>Tanzanian Shilling</td></tr>
        <tr><td>Sudan</td><td>Khartoum</td><td>Sudanese Pound</td></tr>
        <tr><td>Zimbabwe</td><td>Harare</td><td>Zimbabwean Dollar</td></tr>
      </table>

      <h3>7. Americas</h3>
      <table>
        <tr><th>Country</th><th>Capital</th><th>Currency</th></tr>
        <tr><td>USA</td><td>Washington D.C.</td><td>US Dollar ($)</td></tr>
        <tr><td>Canada</td><td>Ottawa</td><td>Canadian Dollar</td></tr>
        <tr><td>Mexico</td><td>Mexico City</td><td>Mexican Peso</td></tr>
        <tr><td>Brazil</td><td>Brasília</td><td>Real</td></tr>
        <tr><td>Argentina</td><td>Buenos Aires</td><td>Argentine Peso</td></tr>
        <tr><td>Chile</td><td>Santiago</td><td>Chilean Peso</td></tr>
        <tr><td>Colombia</td><td>Bogotá</td><td>Colombian Peso</td></tr>
        <tr><td>Peru</td><td>Lima</td><td>Sol</td></tr>
        <tr><td>Venezuela</td><td>Caracas</td><td>Bolívar</td></tr>
        <tr><td>Cuba</td><td>Havana</td><td>Cuban Peso</td></tr>
      </table>

      <h3>8. Oceania</h3>
      <table>
        <tr><th>Country</th><th>Capital</th><th>Currency</th></tr>
        <tr><td>Australia</td><td>Canberra</td><td>Australian Dollar</td></tr>
        <tr><td>New Zealand</td><td>Wellington</td><td>NZ Dollar</td></tr>
        <tr><td>Fiji</td><td>Suva</td><td>Fijian Dollar</td></tr>
        <tr><td>Papua New Guinea</td><td>Port Moresby</td><td>Kina</td></tr>
      </table>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Australia capital: Canberra (not Sydney/Melbourne).</li>
        <li>USA capital: Washington D.C. (not New York).</li>
        <li>Brazil capital: Brasília (not Rio).</li>
        <li>Canada capital: Ottawa (not Toronto).</li>
        <li>Switzerland capital: Bern (not Geneva).</li>
        <li>Turkey capital: Ankara (not Istanbul).</li>
        <li>South Africa has 3 capitals.</li>
        <li>Kuwaiti Dinar: most valuable currency.</li>
        <li>20+ European countries use Euro.</li>
      </ul>
    `,
    mcq: [
      { q: "Capital of Australia:", opts: ["Sydney", "Melbourne", "Canberra", "Perth"], a: 2, ex: "Canberra." },
      { q: "Capital of USA:", opts: ["New York", "Washington D.C.", "Los Angeles", "Chicago"], a: 1, ex: "Washington D.C." },
      { q: "Currency of Japan:", opts: ["Yuan", "Won", "Yen", "Ringgit"], a: 2, ex: "Yen." },
      { q: "Currency of UK:", opts: ["Euro", "Pound Sterling", "Dollar", "Franc"], a: 1, ex: "£." },
      { q: "Capital of Canada:", opts: ["Toronto", "Vancouver", "Ottawa", "Montreal"], a: 2, ex: "Ottawa." },
      { q: "Currency of China:", opts: ["Yen", "Yuan/Renminbi", "Won", "Baht"], a: 1, ex: "Yuan." },
      { q: "Capital of Brazil:", opts: ["Rio", "São Paulo", "Brasília", "Salvador"], a: 2, ex: "Brasília." },
      { q: "Currency of Saudi Arabia:", opts: ["Dinar", "Riyal", "Dirham", "Lira"], a: 1, ex: "Saudi Riyal." },
      { q: "Capital of Switzerland:", opts: ["Geneva", "Zurich", "Bern", "Basel"], a: 2, ex: "Bern." },
      { q: "Capital of South Africa (admin):", opts: ["Cape Town", "Pretoria", "Johannesburg", "Bloemfontein"], a: 1, ex: "Pretoria." },
      { q: "Currency of Bhutan:", opts: ["Rupee", "Ngultrum", "Kyat", "Taka"], a: 1, ex: "Ngultrum." },
      { q: "Most valuable currency:", opts: ["USD", "Pound", "Kuwaiti Dinar", "Euro"], a: 2, ex: "KWD." },
      { q: "Capital of Indonesia (old):", opts: ["Jakarta", "Surabaya", "Bali", "Bandung"], a: 0, ex: "Jakarta (new: Nusantara)." },
      { q: "Capital of Bangladesh:", opts: ["Dhaka", "Chittagong", "Khulna", "Sylhet"], a: 0, ex: "Dhaka." },
      { q: "Currency of Russia:", opts: ["Euro", "Ruble", "Krone", "Lira"], a: 1, ex: "Ruble." },
      { q: "Capital of New Zealand:", opts: ["Auckland", "Wellington", "Christchurch", "Hamilton"], a: 1, ex: "Wellington." },
      { q: "Capital of Turkey:", opts: ["Istanbul", "Ankara", "Izmir", "Bursa"], a: 1, ex: "Ankara." },
      { q: "Currency of Vietnam:", opts: ["Dong", "Baht", "Kyat", "Riel"], a: 0, ex: "Dong." },
      { q: "Capital of Iran:", opts: ["Tehran", "Mashhad", "Isfahan", "Tabriz"], a: 0, ex: "Tehran." },
      { q: "Capital of Argentina:", opts: ["Santiago", "Buenos Aires", "Lima", "Bogotá"], a: 1, ex: "Buenos Aires." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 4. LARGEST & SMALLEST COUNTRIES
  // ───────────────────────────────────────────────────────────────
  T["sgk-largest-countries"] = {
    body: `
      <h2>Largest & Smallest Countries (Areawise)</h2>

      <h3>1. Top 10 Largest Countries by Area</h3>
      <table>
        <tr><th>Rank</th><th>Country</th><th>Area (million km²)</th></tr>
        <tr><td>1</td><td>Russia</td><td>17.1</td></tr>
        <tr><td>2</td><td>Canada</td><td>9.98</td></tr>
        <tr><td>3</td><td>USA</td><td>9.83</td></tr>
        <tr><td>4</td><td>China</td><td>9.59</td></tr>
        <tr><td>5</td><td>Brazil</td><td>8.51</td></tr>
        <tr><td>6</td><td>Australia</td><td>7.69</td></tr>
        <tr><td>7</td><td>India</td><td>3.29</td></tr>
        <tr><td>8</td><td>Argentina</td><td>2.78</td></tr>
        <tr><td>9</td><td>Kazakhstan</td><td>2.72</td></tr>
        <tr><td>10</td><td>Algeria</td><td>2.38</td></tr>
      </table>

      <h3>2. Top 5 Smallest Countries by Area</h3>
      <table>
        <tr><th>Rank</th><th>Country</th><th>Area (km²)</th></tr>
        <tr><td>1</td><td>Vatican City</td><td>0.44</td></tr>
        <tr><td>2</td><td>Monaco</td><td>2.02</td></tr>
        <tr><td>3</td><td>Nauru</td><td>21</td></tr>
        <tr><td>4</td><td>Tuvalu</td><td>26</td></tr>
        <tr><td>5</td><td>San Marino</td><td>61</td></tr>
      </table>

      <h3>3. Top 10 Most Populous Countries (2023-24)</h3>
      <table>
        <tr><th>Rank</th><th>Country</th><th>Population (billion/million)</th></tr>
        <tr><td>1</td><td>India</td><td>~1.43 billion</td></tr>
        <tr><td>2</td><td>China</td><td>~1.41 billion</td></tr>
        <tr><td>3</td><td>USA</td><td>~339 million</td></tr>
        <tr><td>4</td><td>Indonesia</td><td>~277 million</td></tr>
        <tr><td>5</td><td>Pakistan</td><td>~240 million</td></tr>
        <tr><td>6</td><td>Nigeria</td><td>~224 million</td></tr>
        <tr><td>7</td><td>Brazil</td><td>~216 million</td></tr>
        <tr><td>8</td><td>Bangladesh</td><td>~172 million</td></tr>
        <tr><td>9</td><td>Russia</td><td>~144 million</td></tr>
        <tr><td>10</td><td>Mexico</td><td>~128 million</td></tr>
      </table>

      <h3>4. Continent-wise Largest Countries</h3>
      <ul>
        <li>Asia: China (largest), Russia covers most of N. Asia.</li>
        <li>Africa: Algeria.</li>
        <li>Europe: Russia (partially).</li>
        <li>North America: Canada.</li>
        <li>South America: Brazil.</li>
        <li>Oceania: Australia.</li>
        <li>Antarctica: claimed by various, not a country.</li>
      </ul>

      <h3>5. Other Geographic Records</h3>
      <ul>
        <li>Largest landlocked country: Kazakhstan.</li>
        <li>Smallest landlocked country: Vatican (sometimes considered).</li>
        <li>Country with most borders: China (14), Russia (14).</li>
        <li>Longest international border: USA-Canada.</li>
        <li>Only country that's also a continent: Australia.</li>
        <li>Country with most time zones: France (12, due to overseas territories).</li>
        <li>Least dense population: Mongolia.</li>
        <li>Most densely populated: Monaco (sovereign), Macau (territory).</li>
      </ul>

      <h3>6. India's Position</h3>
      <ul>
        <li>7th largest country by area (~3.29 million km²).</li>
        <li>Most populous country (overtook China 2023).</li>
        <li>Largest democracy in world.</li>
        <li>2nd largest English-speaking country.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Top 5 largest: Russia, Canada, USA, China, Brazil.</li>
        <li>India: 7th largest.</li>
        <li>Smallest: Vatican.</li>
        <li>India: most populous (2023).</li>
        <li>Australia: only country that's a continent.</li>
      </ul>
    `,
    mcq: [
      { q: "Largest country by area:", opts: ["China", "USA", "Russia", "Canada"], a: 2, ex: "Russia." },
      { q: "Smallest country:", opts: ["Monaco", "San Marino", "Vatican", "Nauru"], a: 2, ex: "Vatican 0.44 km²." },
      { q: "Most populous country (2023):", opts: ["China", "India", "USA", "Indonesia"], a: 1, ex: "India surpassed China." },
      { q: "Second largest country:", opts: ["USA", "China", "Canada", "Australia"], a: 2, ex: "Canada." },
      { q: "Third largest country:", opts: ["China", "USA", "Brazil", "Russia"], a: 1, ex: "USA." },
      { q: "India's rank by area:", opts: ["5th", "6th", "7th", "8th"], a: 2, ex: "7th." },
      { q: "Largest landlocked country:", opts: ["Kazakhstan", "Mongolia", "Ethiopia", "Bolivia"], a: 0, ex: "Kazakhstan." },
      { q: "Only country = continent:", opts: ["Russia", "Canada", "Australia", "Antarctica"], a: 2, ex: "Australia." },
      { q: "Largest African country:", opts: ["Nigeria", "South Africa", "Algeria", "Egypt"], a: 2, ex: "Algeria." },
      { q: "Largest European country:", opts: ["Germany", "France", "Russia (partially)", "UK"], a: 2, ex: "Russia." },
      { q: "Smallest sovereign country:", opts: ["Vatican", "Monaco", "Nauru", "Tuvalu"], a: 0, ex: "Vatican City." },
      { q: "Most populous country in S. Asia:", opts: ["Pakistan", "Bangladesh", "India", "Nepal"], a: 2, ex: "India." },
      { q: "Country with most borders:", opts: ["Russia", "China", "Both (14)", "USA"], a: 2, ex: "Both have 14." },
      { q: "Longest international border:", opts: ["India-China", "USA-Canada", "Russia-China", "India-Pak"], a: 1, ex: "USA-Canada." },
      { q: "Largest country in S. America:", opts: ["Argentina", "Brazil", "Peru", "Chile"], a: 1, ex: "Brazil." },
      { q: "Largest North American country:", opts: ["USA", "Canada", "Mexico", "Greenland"], a: 1, ex: "Canada." },
      { q: "Indian rank in population:", opts: ["1st (2023)", "2nd", "3rd", "5th"], a: 0, ex: "Most populous." },
      { q: "Smallest country in Asia:", opts: ["Maldives", "Bhutan", "Singapore", "Nepal"], a: 0, ex: "Maldives." },
      { q: "Country with most time zones:", opts: ["Russia", "USA", "France", "China"], a: 2, ex: "France with territories." },
      { q: "Least densely populated country:", opts: ["Australia", "Canada", "Mongolia", "Russia"], a: 2, ex: "Mongolia." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 5. RELIGIONS OF THE WORLD
  // ───────────────────────────────────────────────────────────────
  T["sgk-religions"] = {
    body: `
      <h2>Religions of the World</h2>

      <h3>1. Major Religions (by followers)</h3>
      <table>
        <tr><th>Religion</th><th>Followers (approx)</th><th>Founder / Origin</th></tr>
        <tr><td>Christianity</td><td>~2.4 billion</td><td>Jesus Christ; ~2000 years ago</td></tr>
        <tr><td>Islam</td><td>~1.9 billion</td><td>Prophet Muhammad; ~610 CE</td></tr>
        <tr><td>Hinduism</td><td>~1.2 billion</td><td>No single founder; ancient (Vedic)</td></tr>
        <tr><td>Buddhism</td><td>~520 million</td><td>Gautama Buddha; ~563 BCE</td></tr>
        <tr><td>Folk religions</td><td>~430 million</td><td>Various</td></tr>
        <tr><td>Sikhism</td><td>~27 million</td><td>Guru Nanak; 1469</td></tr>
        <tr><td>Judaism</td><td>~15 million</td><td>Abraham; ancient Middle East</td></tr>
        <tr><td>Jainism</td><td>~6 million</td><td>Mahavira; ~6th century BCE</td></tr>
        <tr><td>Bahá'í</td><td>~6 million</td><td>Bahá'u'lláh; 19th century Persia</td></tr>
        <tr><td>Zoroastrianism (Parsi)</td><td>~100,000</td><td>Zarathustra; ancient Persia</td></tr>
      </table>

      <h3>2. Christianity</h3>
      <ul>
        <li>Holy book: <b>Bible</b> (Old + New Testament).</li>
        <li>Places of worship: Church, Cathedral.</li>
        <li>Holy day: Sunday.</li>
        <li>Major festivals: Christmas (Dec 25), Easter, Good Friday.</li>
        <li>Major branches: Roman Catholic, Protestant, Orthodox.</li>
        <li>Holy sites: Jerusalem, Vatican City, Bethlehem.</li>
      </ul>

      <h3>3. Islam</h3>
      <ul>
        <li>Holy book: <b>Quran</b>.</li>
        <li>Place of worship: Mosque (Masjid).</li>
        <li>Holy day: Friday.</li>
        <li>5 Pillars: Shahada, Salah, Zakat, Sawm, Hajj.</li>
        <li>Major festivals: Eid al-Fitr, Eid al-Adha, Muharram.</li>
        <li>Holy sites: Mecca, Medina (Saudi Arabia), Jerusalem.</li>
        <li>Major branches: Sunni (~85%), Shia.</li>
      </ul>

      <h3>4. Hinduism</h3>
      <ul>
        <li>Holy books: <b>Vedas, Upanishads, Bhagavad Gita, Ramayana, Mahabharata, Puranas</b>.</li>
        <li>Place of worship: Mandir (Temple).</li>
        <li>Major gods: Brahma (creator), Vishnu (preserver), Shiva (destroyer); also Ganesha, Krishna, Rama, Devi.</li>
        <li>Festivals: Diwali, Holi, Navratri, Janmashtami, Raksha Bandhan.</li>
        <li>Holy sites: Varanasi (Kashi), Mathura, Ayodhya, Haridwar, Rameshwaram, Dwarka.</li>
        <li>Concepts: Dharma, Karma, Moksha, Reincarnation.</li>
      </ul>

      <h3>5. Buddhism</h3>
      <ul>
        <li>Founded by: <b>Siddhartha Gautama (Buddha)</b>, ~563 BCE in Lumbini (Nepal).</li>
        <li>Holy book: <b>Tripitaka</b> (Pali Canon).</li>
        <li>Place of worship: Vihara, Stupa, Pagoda.</li>
        <li>Buddha attained enlightenment at Bodh Gaya.</li>
        <li>Branches: Theravada, Mahayana, Vajrayana (Tibetan).</li>
        <li>Major festivals: Buddha Purnima.</li>
        <li>Spread by: Emperor Ashoka.</li>
      </ul>

      <h3>6. Sikhism</h3>
      <ul>
        <li>Founded by: <b>Guru Nanak Dev</b> in 1469, Punjab.</li>
        <li>10 Gurus; last living Guru: Guru Gobind Singh.</li>
        <li>Holy book: <b>Guru Granth Sahib</b> (also called the 11th Guru).</li>
        <li>Place of worship: Gurdwara.</li>
        <li>Holiest site: Golden Temple (Harmandir Sahib), Amritsar.</li>
        <li>5 K's: Kesh, Kara, Kanga, Kachera, Kirpan.</li>
        <li>Festivals: Guru Nanak Jayanti, Baisakhi.</li>
      </ul>

      <h3>7. Jainism</h3>
      <ul>
        <li>Founder: <b>Mahavira</b> (24th Tirthankara), ~599 BCE.</li>
        <li>Holy books: Agamas.</li>
        <li>Principles: Ahimsa (non-violence), Aparigraha (non-possession).</li>
        <li>Two sects: Digambar (sky-clad) and Shvetambar (white-clad).</li>
        <li>Pilgrimage sites: Palitana, Shravanabelagola, Mount Abu.</li>
      </ul>

      <h3>8. Judaism</h3>
      <ul>
        <li>Oldest monotheistic religion.</li>
        <li>Holy book: <b>Torah</b> (also Tanakh, Talmud).</li>
        <li>Place of worship: Synagogue.</li>
        <li>Holy day: Saturday (Sabbath).</li>
        <li>Festivals: Passover, Hanukkah, Rosh Hashanah, Yom Kippur.</li>
        <li>Holy site: Wailing Wall, Jerusalem.</li>
      </ul>

      <h3>9. Zoroastrianism</h3>
      <ul>
        <li>One of world's oldest religions.</li>
        <li>Founded by Zoroaster (Zarathustra), ~600 BCE in Persia.</li>
        <li>Holy book: <b>Avesta</b>.</li>
        <li>Worship of Ahura Mazda.</li>
        <li>Mostly Parsis in India (Mumbai, Gujarat).</li>
        <li>Fire temples (Atash Behram).</li>
      </ul>

      <h3>10. Other Religions</h3>
      <ul>
        <li><b>Bahá'í</b>: founded by Bahá'u'lláh, 19th century Persia. Lotus Temple in Delhi.</li>
        <li><b>Confucianism / Taoism</b>: Chinese philosophical-religious systems.</li>
        <li><b>Shinto</b>: native religion of Japan.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Christianity: largest religion.</li>
        <li>Islam: 2nd largest, fastest growing.</li>
        <li>Hindu Trinity: Brahma, Vishnu, Shiva.</li>
        <li>Buddha born in Lumbini, enlightenment in Bodh Gaya.</li>
        <li>Guru Nanak founded Sikhism in 1469.</li>
        <li>Mahavira: 24th Jain Tirthankara.</li>
        <li>Judaism: oldest monotheistic religion.</li>
        <li>Quran: holy book of Islam.</li>
      </ul>
    `,
    mcq: [
      { q: "Largest religion in world:", opts: ["Hindu", "Christianity", "Islam", "Buddhism"], a: 1, ex: "~2.4 billion." },
      { q: "Founder of Buddhism:", opts: ["Mahavira", "Buddha", "Confucius", "Lao Tzu"], a: 1, ex: "Siddhartha Gautama." },
      { q: "Founder of Sikhism:", opts: ["Guru Tegh Bahadur", "Guru Nanak", "Guru Gobind Singh", "Buddha"], a: 1, ex: "1469." },
      { q: "Holy book of Sikhs:", opts: ["Quran", "Bible", "Guru Granth Sahib", "Vedas"], a: 2, ex: "11th Guru." },
      { q: "Holy book of Islam:", opts: ["Bible", "Quran", "Torah", "Avesta"], a: 1, ex: "Quran." },
      { q: "Holy book of Judaism:", opts: ["Quran", "Torah", "Bible", "Avesta"], a: 1, ex: "Torah (Tanakh)." },
      { q: "Buddha was born in:", opts: ["Bodh Gaya", "Lumbini", "Sarnath", "Kushinagar"], a: 1, ex: "Nepal." },
      { q: "Buddha attained enlightenment at:", opts: ["Lumbini", "Bodh Gaya", "Sarnath", "Kushinagar"], a: 1, ex: "Bihar, India." },
      { q: "Golden Temple at:", opts: ["Amritsar", "Patna", "Delhi", "Anandpur"], a: 0, ex: "Punjab." },
      { q: "Mahavira's principles:", opts: ["Ahimsa", "Aparigraha", "Both", "Force"], a: 2, ex: "Non-violence + non-possession." },
      { q: "Parsi religion:", opts: ["Buddhist", "Zoroastrian", "Jain", "Sikh"], a: 1, ex: "Ancient Persian." },
      { q: "Vatican is the centre of:", opts: ["Islam", "Catholic Christianity", "Judaism", "Buddhism"], a: 1, ex: "Pope's seat." },
      { q: "Hajj is to:", opts: ["Jerusalem", "Mecca", "Medina", "Karbala"], a: 1, ex: "Mecca." },
      { q: "Number of Sikh Gurus:", opts: ["8", "10", "12", "5"], a: 1, ex: "10 Gurus (Granth = 11th)." },
      { q: "Mahavira was Tirthankara number:", opts: ["1", "24", "10", "12"], a: 1, ex: "24th and last." },
      { q: "Holy day for Muslims:", opts: ["Friday", "Saturday", "Sunday", "Monday"], a: 0, ex: "Friday." },
      { q: "Holy day for Jews:", opts: ["Friday", "Saturday (Sabbath)", "Sunday", "Monday"], a: 1, ex: "Saturday." },
      { q: "Lotus Temple is for:", opts: ["Christians", "Bahá'í", "Buddhist", "Sikh"], a: 1, ex: "Delhi, Bahá'í House of Worship." },
      { q: "Hindu trinity:", opts: ["Brahma, Vishnu, Shiva", "Ram, Krishna, Buddha", "Three Vedas", "Three Gurus"], a: 0, ex: "Creator, Preserver, Destroyer." },
      { q: "Avesta is holy book of:", opts: ["Hindu", "Buddhist", "Parsi/Zoroastrian", "Jain"], a: 2, ex: "Zoroastrianism." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 6. IMPORTANT WORLD MONUMENTS
  // ───────────────────────────────────────────────────────────────
  T["sgk-monuments"] = {
    body: `
      <h2>Important World Monuments</h2>

      <h3>1. Wonders of the World</h3>

      <h4>Seven Wonders of the Ancient World</h4>
      <ol>
        <li>Great Pyramid of Giza (Egypt) — only one still standing.</li>
        <li>Hanging Gardens of Babylon.</li>
        <li>Statue of Zeus at Olympia.</li>
        <li>Temple of Artemis at Ephesus.</li>
        <li>Mausoleum at Halicarnassus.</li>
        <li>Colossus of Rhodes.</li>
        <li>Lighthouse of Alexandria.</li>
      </ol>

      <h4>New Seven Wonders (2007)</h4>
      <ol>
        <li><b>Great Wall of China</b>, China.</li>
        <li><b>Taj Mahal</b>, India.</li>
        <li><b>Christ the Redeemer</b>, Rio de Janeiro, Brazil.</li>
        <li><b>Machu Picchu</b>, Peru.</li>
        <li><b>Chichen Itza</b>, Mexico (Mayan).</li>
        <li><b>Petra</b>, Jordan.</li>
        <li><b>Colosseum</b>, Rome, Italy.</li>
      </ol>

      <h3>2. Famous Monuments by Country</h3>

      <h4>Asia</h4>
      <ul>
        <li><b>Taj Mahal</b> (India): Built by Shah Jahan for Mumtaz, Agra, 17th century.</li>
        <li><b>Red Fort, India Gate, Qutub Minar</b>: Delhi.</li>
        <li><b>Great Wall of China</b>: ~21,196 km.</li>
        <li><b>Forbidden City</b>: Beijing.</li>
        <li><b>Angkor Wat</b>: Cambodia (largest religious monument).</li>
        <li><b>Borobudur</b>: Java, Indonesia (Buddhist temple).</li>
        <li><b>Petra</b>: Jordan (rock-cut city).</li>
        <li><b>Persepolis</b>: Iran.</li>
        <li><b>Ka'aba</b>: Mecca.</li>
        <li><b>Hagia Sophia, Blue Mosque</b>: Istanbul, Turkey.</li>
        <li><b>Burj Khalifa</b>: Dubai (tallest building).</li>
        <li><b>Marina Bay Sands</b>: Singapore.</li>
        <li><b>Mt. Fuji</b>, <b>Tokyo Tower</b>: Japan.</li>
      </ul>

      <h4>Europe</h4>
      <ul>
        <li><b>Eiffel Tower</b>: Paris (built 1889).</li>
        <li><b>Notre Dame</b>: Paris.</li>
        <li><b>Big Ben, Tower of London, Buckingham Palace, Stonehenge</b>: UK.</li>
        <li><b>Colosseum, Leaning Tower of Pisa, Vatican, Sistine Chapel</b>: Italy.</li>
        <li><b>Sagrada Familia</b>: Barcelona (Gaudí).</li>
        <li><b>Acropolis, Parthenon</b>: Athens, Greece.</li>
        <li><b>Brandenburg Gate</b>: Berlin.</li>
        <li><b>Kremlin, Red Square, St. Basil's</b>: Moscow.</li>
        <li><b>Neuschwanstein Castle</b>: Bavaria, Germany.</li>
      </ul>

      <h4>Africa</h4>
      <ul>
        <li><b>Pyramids of Giza, Sphinx</b>: Egypt.</li>
        <li><b>Karnak Temple, Valley of the Kings</b>: Luxor.</li>
        <li><b>Table Mountain</b>: Cape Town.</li>
      </ul>

      <h4>Americas</h4>
      <ul>
        <li><b>Statue of Liberty</b>: New York (gift from France).</li>
        <li><b>Empire State Building, Times Square</b>: NY.</li>
        <li><b>White House, Capitol, Washington Monument</b>: Washington D.C.</li>
        <li><b>Hollywood Sign</b>: Los Angeles.</li>
        <li><b>Niagara Falls</b>: USA-Canada border.</li>
        <li><b>Grand Canyon</b>: Arizona, USA.</li>
        <li><b>Mount Rushmore</b>: South Dakota, USA.</li>
        <li><b>Christ the Redeemer</b>: Rio de Janeiro.</li>
        <li><b>Machu Picchu, Cusco</b>: Peru.</li>
        <li><b>Chichen Itza</b>: Mexico (Mayan).</li>
      </ul>

      <h4>Oceania</h4>
      <ul>
        <li><b>Sydney Opera House, Harbour Bridge</b>: Australia.</li>
        <li><b>Uluru (Ayers Rock)</b>: Australia.</li>
      </ul>

      <h3>3. Famous Buildings</h3>
      <ul>
        <li>Tallest building: <b>Burj Khalifa</b>, Dubai (828 m).</li>
        <li>Tallest tower: <b>Tokyo Skytree</b>, Japan (634 m).</li>
        <li>Biggest cathedral: St. Peter's Basilica, Vatican.</li>
        <li>Biggest mosque: Masjid al-Haram, Mecca.</li>
        <li>Largest palace: Forbidden City, Beijing.</li>
      </ul>

      <h3>4. Famous Bridges</h3>
      <ul>
        <li>Tower Bridge: London.</li>
        <li>Golden Gate: San Francisco.</li>
        <li>Sydney Harbour Bridge: Australia.</li>
        <li>Brooklyn Bridge: New York.</li>
        <li>Akashi Kaikyō Bridge: Japan (one of longest spans).</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Taj Mahal: Shah Jahan, 17th c., Agra.</li>
        <li>Pyramid of Giza: only ancient wonder still standing.</li>
        <li>Eiffel Tower: 1889, Paris.</li>
        <li>Statue of Liberty: gift from France to USA.</li>
        <li>Christ the Redeemer: Brazil.</li>
        <li>Petra: Jordan, rock-cut city.</li>
        <li>Angkor Wat: largest religious monument.</li>
      </ul>
    `,
    mcq: [
      { q: "Taj Mahal built by:", opts: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"], a: 1, ex: "For Mumtaz Mahal." },
      { q: "Only Ancient Wonder standing:", opts: ["Pyramid Giza", "Colossus Rhodes", "Hanging Gardens", "Lighthouse"], a: 0, ex: "Egypt." },
      { q: "Eiffel Tower in:", opts: ["London", "Paris", "Berlin", "Rome"], a: 1, ex: "France." },
      { q: "Statue of Liberty in:", opts: ["Paris", "New York", "Washington", "Boston"], a: 1, ex: "USA (gift from France)." },
      { q: "Christ the Redeemer in:", opts: ["Argentina", "Brazil", "Mexico", "Peru"], a: 1, ex: "Rio de Janeiro." },
      { q: "Machu Picchu in:", opts: ["Mexico", "Peru", "Chile", "Bolivia"], a: 1, ex: "Inca site." },
      { q: "Petra in:", opts: ["Egypt", "Jordan", "Turkey", "Lebanon"], a: 1, ex: "Rock-cut city." },
      { q: "Colosseum in:", opts: ["Greece", "Rome", "Spain", "France"], a: 1, ex: "Italy." },
      { q: "Great Wall in:", opts: ["China", "Japan", "Mongolia", "Korea"], a: 0, ex: "~21,000 km." },
      { q: "Tallest building:", opts: ["Empire State", "Burj Khalifa", "Tokyo Tower", "Eiffel"], a: 1, ex: "Dubai 828 m." },
      { q: "Sydney Opera House in:", opts: ["NZ", "Australia", "Britain", "USA"], a: 1, ex: "Sydney, Australia." },
      { q: "Angkor Wat in:", opts: ["Thailand", "Cambodia", "Laos", "Vietnam"], a: 1, ex: "Largest religious monument." },
      { q: "Pyramids in:", opts: ["Egypt", "Mexico", "Both A and B", "Just Egypt"], a: 2, ex: "Both Egyptian and Mayan." },
      { q: "Big Ben in:", opts: ["Paris", "London", "Berlin", "Rome"], a: 1, ex: "London clock tower." },
      { q: "Niagara Falls between:", opts: ["USA-Mexico", "USA-Canada", "Brazil-Argentina", "Spain-Portugal"], a: 1, ex: "Border falls." },
      { q: "Pisa Tower famous for:", opts: ["Height", "Tilt", "Material", "Bell"], a: 1, ex: "Leaning Tower." },
      { q: "Forbidden City in:", opts: ["Tokyo", "Beijing", "Seoul", "Hong Kong"], a: 1, ex: "China." },
      { q: "Buckingham Palace in:", opts: ["Paris", "Madrid", "London", "Rome"], a: 2, ex: "UK royal residence." },
      { q: "Hagia Sophia in:", opts: ["Athens", "Istanbul", "Cairo", "Rome"], a: 1, ex: "Turkey." },
      { q: "New 7 Wonders selected in:", opts: ["2000", "2007", "2010", "2015"], a: 1, ex: "2007." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 7. SEVEN WONDERS OF THE WORLD
  // ───────────────────────────────────────────────────────────────
  T["sgk-seven-wonders"] = {
    body: `
      <h2>Seven Wonders of the World</h2>

      <h3>1. New Seven Wonders (2007)</h3>
      <p>Voted by people around the world in a campaign by New7Wonders Foundation.</p>
      <table>
        <tr><th>Wonder</th><th>Country</th><th>Year Built / Period</th></tr>
        <tr><td>Great Wall of China</td><td>China</td><td>Started 7th century BCE; expanded by Qin Shi Huang ~200 BCE</td></tr>
        <tr><td>Taj Mahal</td><td>India (Agra)</td><td>1632-1653, Mughal Emperor Shah Jahan for wife Mumtaz Mahal</td></tr>
        <tr><td>Christ the Redeemer</td><td>Brazil (Rio de Janeiro)</td><td>1922-1931, statue 38 m tall</td></tr>
        <tr><td>Machu Picchu</td><td>Peru</td><td>~1450 CE, Inca citadel; rediscovered 1911 by Hiram Bingham</td></tr>
        <tr><td>Chichen Itza</td><td>Mexico (Yucatán)</td><td>~600-1200 CE, Mayan-Toltec city; El Castillo pyramid</td></tr>
        <tr><td>Petra</td><td>Jordan</td><td>~300 BCE, Nabataean rock-cut city</td></tr>
        <tr><td>Colosseum</td><td>Italy (Rome)</td><td>70-80 CE, Roman amphitheatre</td></tr>
      </table>

      <h3>2. Original Seven Wonders of the Ancient World</h3>
      <table>
        <tr><th>Wonder</th><th>Location</th><th>Status</th></tr>
        <tr><td>Great Pyramid of Giza</td><td>Egypt</td><td><b>Only one still standing</b></td></tr>
        <tr><td>Hanging Gardens of Babylon</td><td>Iraq (disputed)</td><td>Destroyed / mythical</td></tr>
        <tr><td>Statue of Zeus at Olympia</td><td>Greece</td><td>Destroyed</td></tr>
        <tr><td>Temple of Artemis at Ephesus</td><td>Turkey</td><td>Destroyed</td></tr>
        <tr><td>Mausoleum at Halicarnassus</td><td>Turkey</td><td>Destroyed</td></tr>
        <tr><td>Colossus of Rhodes</td><td>Greece</td><td>Destroyed (earthquake)</td></tr>
        <tr><td>Lighthouse of Alexandria</td><td>Egypt</td><td>Destroyed (earthquake)</td></tr>
      </table>

      <h3>3. Seven Natural Wonders</h3>
      <ol>
        <li>Grand Canyon (USA).</li>
        <li>Great Barrier Reef (Australia).</li>
        <li>Mount Everest (Nepal/Tibet).</li>
        <li>Aurora Borealis (Northern Lights).</li>
        <li>Victoria Falls (Zambia-Zimbabwe).</li>
        <li>Paricutin Volcano (Mexico).</li>
        <li>Harbour of Rio de Janeiro (Brazil).</li>
      </ol>

      <h3>4. UNESCO World Heritage Sites — Notable</h3>
      <ul>
        <li>Pyramids of Giza (Egypt).</li>
        <li>Taj Mahal (India).</li>
        <li>Great Wall of China.</li>
        <li>Statue of Liberty (USA).</li>
        <li>Machu Picchu (Peru).</li>
        <li>Petra (Jordan).</li>
        <li>Stonehenge (UK).</li>
      </ul>

      <h3>5. Details of Each New Wonder</h3>

      <h4>Taj Mahal</h4>
      <ul>
        <li>White marble mausoleum on Yamuna river, Agra.</li>
        <li>Built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.</li>
        <li>Architects: Ustad Ahmad Lahori (chief).</li>
        <li>Material: White marble from Makrana, Rajasthan; inlaid with precious stones.</li>
        <li>20,000+ workers and ~22 years to build.</li>
        <li>UNESCO Heritage Site since 1983.</li>
      </ul>

      <h4>Great Wall of China</h4>
      <ul>
        <li>Built and rebuilt over 2,000 years.</li>
        <li>Total length ~21,196 km.</li>
        <li>Defense against northern invaders.</li>
        <li>Visible from low Earth orbit (with magnification).</li>
      </ul>

      <h4>Christ the Redeemer</h4>
      <ul>
        <li>Statue of Jesus Christ on Corcovado Mountain, Rio de Janeiro.</li>
        <li>30 m tall + 8 m pedestal.</li>
        <li>Made of soapstone and reinforced concrete.</li>
        <li>Built 1922-1931.</li>
      </ul>

      <h4>Machu Picchu</h4>
      <ul>
        <li>Inca citadel in Andes Mountains, Peru.</li>
        <li>2,430 m above sea level.</li>
        <li>Built ~1450 CE under Emperor Pachacuti.</li>
        <li>Rediscovered by Hiram Bingham, 1911.</li>
      </ul>

      <h4>Chichen Itza</h4>
      <ul>
        <li>Mayan city in Yucatán, Mexico.</li>
        <li>Famous El Castillo step pyramid (Temple of Kukulcan).</li>
        <li>Shows precise astronomical alignment at equinox.</li>
      </ul>

      <h4>Petra</h4>
      <ul>
        <li>"Rose City" — carved into pink sandstone cliffs.</li>
        <li>Capital of Nabataean Kingdom.</li>
        <li>The Treasury (Al-Khazneh) is most famous facade.</li>
      </ul>

      <h4>Colosseum</h4>
      <ul>
        <li>Largest amphitheatre ever built.</li>
        <li>Held 50,000-80,000 spectators.</li>
        <li>Used for gladiator contests, public spectacles.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Taj Mahal: India (Agra), Shah Jahan, 1632-1653.</li>
        <li>Pyramid of Giza: only ancient wonder still standing.</li>
        <li>Christ the Redeemer: Brazil.</li>
        <li>Machu Picchu: Peru, Inca.</li>
        <li>Chichen Itza: Mexico, Mayan.</li>
        <li>Petra: Jordan, Nabataean.</li>
        <li>Colosseum: Rome.</li>
        <li>Aurora Borealis: a natural wonder, not human-made.</li>
      </ul>
    `,
    mcq: [
      { q: "Taj Mahal is in:", opts: ["Delhi", "Agra", "Jaipur", "Lucknow"], a: 1, ex: "Agra." },
      { q: "Built by:", opts: ["Akbar", "Babur", "Shah Jahan", "Humayun"], a: 2, ex: "For Mumtaz Mahal." },
      { q: "Christ the Redeemer in:", opts: ["Brazil", "Argentina", "Peru", "Mexico"], a: 0, ex: "Rio de Janeiro." },
      { q: "Machu Picchu in:", opts: ["Mexico", "Peru", "Bolivia", "Chile"], a: 1, ex: "Inca, Peru." },
      { q: "Chichen Itza in:", opts: ["Peru", "Mexico", "Guatemala", "Colombia"], a: 1, ex: "Mayan." },
      { q: "Petra in:", opts: ["Egypt", "Jordan", "Syria", "Iran"], a: 1, ex: "Nabataean rock-cut." },
      { q: "Colosseum in:", opts: ["Greece", "Italy", "Spain", "France"], a: 1, ex: "Rome." },
      { q: "Only Ancient Wonder standing:", opts: ["Lighthouse", "Pyramid Giza", "Colossus", "Mausoleum"], a: 1, ex: "Egypt." },
      { q: "Great Wall in:", opts: ["China", "Japan", "Korea", "Mongolia"], a: 0, ex: "China." },
      { q: "Hanging Gardens were in:", opts: ["Iraq (Babylon)", "Egypt", "Greece", "Turkey"], a: 0, ex: "Mythical/disputed." },
      { q: "Statue of Liberty gift from:", opts: ["UK", "France", "Germany", "Italy"], a: 1, ex: "France 1886." },
      { q: "Colossus of Rhodes destroyed by:", opts: ["War", "Earthquake", "Fire", "Flood"], a: 1, ex: "Earthquake." },
      { q: "New 7 Wonders announced in:", opts: ["2000", "2005", "2007", "2010"], a: 2, ex: "2007." },
      { q: "Aurora Borealis is:", opts: ["Man-made wonder", "Natural wonder", "City", "River"], a: 1, ex: "Natural light show." },
      { q: "Grand Canyon in:", opts: ["USA", "Mexico", "Canada", "Brazil"], a: 0, ex: "Arizona, USA." },
      { q: "Great Barrier Reef in:", opts: ["USA", "Australia", "Japan", "Indonesia"], a: 1, ex: "Coral reef." },
      { q: "Victoria Falls between:", opts: ["Zambia-Zimbabwe", "Kenya-Tanzania", "Egypt-Sudan", "Ghana-Nigeria"], a: 0, ex: "Africa." },
      { q: "Petra is also called:", opts: ["White City", "Rose City", "Black City", "Lost City"], a: 1, ex: "Rose sandstone." },
      { q: "Inca empire was in:", opts: ["Mexico", "Peru", "Argentina", "Brazil"], a: 1, ex: "Andean civilization." },
      { q: "Largest amphitheatre:", opts: ["Sydney Opera", "Colosseum", "Wembley", "Yankee Stadium"], a: 1, ex: "Roman Colosseum." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 8. PARLIAMENTS OF COUNTRIES
  // ───────────────────────────────────────────────────────────────
  T["sgk-parliaments"] = {
    body: `
      <h2>Parliaments of Countries</h2>
      <p>Names of national legislative bodies (parliaments) around the world.</p>

      <table>
        <tr><th>Country</th><th>Parliament Name</th></tr>
        <tr><td>India</td><td>Sansad (Parliament) — Lok Sabha + Rajya Sabha</td></tr>
        <tr><td>Pakistan</td><td>Majlis-e-Shoora — National Assembly + Senate</td></tr>
        <tr><td>Bangladesh</td><td>Jatiya Sangsad</td></tr>
        <tr><td>Nepal</td><td>Sansad (Federal Parliament)</td></tr>
        <tr><td>Bhutan</td><td>Tshogdu</td></tr>
        <tr><td>Sri Lanka</td><td>Parliament</td></tr>
        <tr><td>Maldives</td><td>Majlis</td></tr>
        <tr><td>Afghanistan</td><td>Loya Jirga / Shora</td></tr>
        <tr><td>China</td><td>National People's Congress</td></tr>
        <tr><td>Japan</td><td>Diet (Kokkai)</td></tr>
        <tr><td>North Korea</td><td>Supreme People's Assembly</td></tr>
        <tr><td>South Korea</td><td>National Assembly (Gukhoe)</td></tr>
        <tr><td>Mongolia</td><td>Great Khural</td></tr>
        <tr><td>Russia</td><td>Federal Assembly (Duma + Federation Council)</td></tr>
        <tr><td>Israel</td><td>Knesset</td></tr>
        <tr><td>Iran</td><td>Majles (Islamic Consultative Assembly)</td></tr>
        <tr><td>Turkey</td><td>Grand National Assembly</td></tr>
        <tr><td>Saudi Arabia</td><td>Majlis al-Shura (Consultative Assembly)</td></tr>
        <tr><td>UAE</td><td>Federal National Council</td></tr>
        <tr><td>Egypt</td><td>House of Representatives</td></tr>
        <tr><td>UK</td><td>Parliament — House of Commons + House of Lords</td></tr>
        <tr><td>France</td><td>Parlement — Assemblée Nationale + Sénat</td></tr>
        <tr><td>Germany</td><td>Bundestag + Bundesrat</td></tr>
        <tr><td>Italy</td><td>Parliament — Chamber of Deputies + Senate</td></tr>
        <tr><td>Spain</td><td>Cortes Generales</td></tr>
        <tr><td>Switzerland</td><td>Federal Assembly</td></tr>
        <tr><td>Netherlands</td><td>States General (Staten-Generaal)</td></tr>
        <tr><td>Norway</td><td>Storting</td></tr>
        <tr><td>Sweden</td><td>Riksdag</td></tr>
        <tr><td>Denmark</td><td>Folketing</td></tr>
        <tr><td>Iceland</td><td>Althing (one of oldest, 930 CE)</td></tr>
        <tr><td>Finland</td><td>Eduskunta</td></tr>
        <tr><td>Poland</td><td>Sejm + Senate</td></tr>
        <tr><td>Ireland</td><td>Oireachtas (Dáil + Seanad)</td></tr>
        <tr><td>Ukraine</td><td>Verkhovna Rada</td></tr>
        <tr><td>Romania</td><td>Parlamentul</td></tr>
        <tr><td>USA</td><td>Congress — House of Representatives + Senate</td></tr>
        <tr><td>Canada</td><td>Parliament — House of Commons + Senate</td></tr>
        <tr><td>Mexico</td><td>Congreso de la Unión</td></tr>
        <tr><td>Brazil</td><td>National Congress</td></tr>
        <tr><td>Argentina</td><td>National Congress</td></tr>
        <tr><td>Australia</td><td>Parliament — House of Representatives + Senate</td></tr>
        <tr><td>New Zealand</td><td>Parliament (House of Representatives only)</td></tr>
        <tr><td>South Africa</td><td>Parliament — National Assembly + National Council of Provinces</td></tr>
        <tr><td>Kenya</td><td>National Assembly + Senate</td></tr>
        <tr><td>Nigeria</td><td>National Assembly</td></tr>
      </table>

      <h3>🎯 Tips</h3>
      <ul>
        <li>India: Sansad.</li>
        <li>Japan: Diet (Kokkai).</li>
        <li>Israel: Knesset.</li>
        <li>Iceland: Althing (one of oldest parliaments, 930 CE).</li>
        <li>USA: Congress.</li>
        <li>UK: Parliament (Commons + Lords).</li>
        <li>Russia: Duma (lower house).</li>
        <li>Germany: Bundestag.</li>
        <li>Iran: Majles.</li>
      </ul>
    `,
    mcq: [
      { q: "Parliament of Japan:", opts: ["Knesset", "Diet", "Majles", "Duma"], a: 1, ex: "Kokkai / Diet." },
      { q: "Parliament of Israel:", opts: ["Knesset", "Majles", "Diet", "Duma"], a: 0, ex: "Knesset." },
      { q: "Parliament of Iran:", opts: ["Knesset", "Majles", "Diet", "Duma"], a: 1, ex: "Islamic Consultative Assembly." },
      { q: "Parliament of Russia (lower):", opts: ["Knesset", "Duma", "Majles", "Khural"], a: 1, ex: "State Duma." },
      { q: "Parliament of USA:", opts: ["Congress", "Parliament", "Diet", "Senate only"], a: 0, ex: "House + Senate = Congress." },
      { q: "Parliament of UK:", opts: ["Parliament", "Congress", "Senate", "Diet"], a: 0, ex: "Commons + Lords." },
      { q: "Parliament of India:", opts: ["Sansad", "Lok Sabha only", "Congress", "Vidhan Sabha"], a: 0, ex: "Sansad." },
      { q: "Parliament of China:", opts: ["NPC", "Diet", "Sansad", "Duma"], a: 0, ex: "National People's Congress." },
      { q: "Parliament of Germany (lower):", opts: ["Bundestag", "Bundesrat", "Reichstag", "Kongress"], a: 0, ex: "Bundestag." },
      { q: "Parliament of Mongolia:", opts: ["Great Khural", "Diet", "Majles", "Knesset"], a: 0, ex: "Mongolian parliament." },
      { q: "Parliament of Pakistan:", opts: ["Sansad", "Majlis-e-Shoora", "Diet", "Knesset"], a: 1, ex: "National Assembly + Senate." },
      { q: "Parliament of Sweden:", opts: ["Riksdag", "Storting", "Folketing", "Eduskunta"], a: 0, ex: "Sweden = Riksdag." },
      { q: "Parliament of Norway:", opts: ["Riksdag", "Storting", "Folketing", "Eduskunta"], a: 1, ex: "Norway = Storting." },
      { q: "Parliament of Denmark:", opts: ["Riksdag", "Storting", "Folketing", "Eduskunta"], a: 2, ex: "Denmark = Folketing." },
      { q: "Parliament of Finland:", opts: ["Riksdag", "Storting", "Folketing", "Eduskunta"], a: 3, ex: "Finland = Eduskunta." },
      { q: "Oldest parliament:", opts: ["Althing (Iceland)", "Westminster", "Diet", "Congress"], a: 0, ex: "Althing 930 CE." },
      { q: "Parliament of France:", opts: ["Parlement", "Congress", "Knesset", "Duma"], a: 0, ex: "Assemblée + Sénat." },
      { q: "Parliament of South Korea:", opts: ["National Assembly", "Knesset", "Diet", "Duma"], a: 0, ex: "Gukhoe." },
      { q: "Parliament of Maldives:", opts: ["Majlis", "Diet", "Senate", "Sansad"], a: 0, ex: "Majlis." },
      { q: "Parliament of Bangladesh:", opts: ["Jatiya Sangsad", "Sansad", "Majlis", "Lok Sabha"], a: 0, ex: "Bangladesh national parliament." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 9. INTELLIGENCE AGENCIES
  // ───────────────────────────────────────────────────────────────
  T["sgk-intel-agencies"] = {
    body: `
      <h2>Intelligence Agencies of the World</h2>

      <table>
        <tr><th>Country</th><th>Agency</th><th>Full Name</th></tr>
        <tr><td>India</td><td><b>RAW</b></td><td>Research and Analysis Wing (external)</td></tr>
        <tr><td>India</td><td><b>IB</b></td><td>Intelligence Bureau (internal)</td></tr>
        <tr><td>India</td><td><b>NIA</b></td><td>National Investigation Agency</td></tr>
        <tr><td>India</td><td><b>CBI</b></td><td>Central Bureau of Investigation</td></tr>
        <tr><td>USA</td><td><b>CIA</b></td><td>Central Intelligence Agency (external)</td></tr>
        <tr><td>USA</td><td><b>FBI</b></td><td>Federal Bureau of Investigation (internal)</td></tr>
        <tr><td>USA</td><td><b>NSA</b></td><td>National Security Agency (signals)</td></tr>
        <tr><td>UK</td><td><b>MI5</b></td><td>Military Intelligence Section 5 (domestic)</td></tr>
        <tr><td>UK</td><td><b>MI6 / SIS</b></td><td>Secret Intelligence Service (foreign)</td></tr>
        <tr><td>UK</td><td><b>GCHQ</b></td><td>Government Communications Headquarters</td></tr>
        <tr><td>Russia</td><td><b>FSB</b></td><td>Federal Security Service (domestic, former KGB)</td></tr>
        <tr><td>Russia</td><td><b>SVR</b></td><td>Foreign Intelligence Service</td></tr>
        <tr><td>Russia</td><td><b>GRU</b></td><td>Main Intelligence Directorate (military)</td></tr>
        <tr><td>Soviet Union (former)</td><td><b>KGB</b></td><td>Committee for State Security (Cold War era)</td></tr>
        <tr><td>Pakistan</td><td><b>ISI</b></td><td>Inter-Services Intelligence</td></tr>
        <tr><td>Israel</td><td><b>Mossad</b></td><td>Foreign intelligence</td></tr>
        <tr><td>Israel</td><td><b>Shin Bet / Shabak</b></td><td>Internal security</td></tr>
        <tr><td>Israel</td><td><b>Aman</b></td><td>Military intelligence</td></tr>
        <tr><td>China</td><td><b>MSS</b></td><td>Ministry of State Security</td></tr>
        <tr><td>Germany</td><td><b>BND</b></td><td>Federal Intelligence Service</td></tr>
        <tr><td>France</td><td><b>DGSE</b></td><td>Directorate-General for External Security</td></tr>
        <tr><td>France</td><td><b>DGSI</b></td><td>Internal Security</td></tr>
        <tr><td>Australia</td><td><b>ASIS</b></td><td>Australian Secret Intelligence Service</td></tr>
        <tr><td>Australia</td><td><b>ASIO</b></td><td>Australian Security Intelligence Organisation</td></tr>
        <tr><td>Canada</td><td><b>CSIS</b></td><td>Canadian Security Intelligence Service</td></tr>
        <tr><td>Iran</td><td><b>MOIS / VAJA</b></td><td>Ministry of Intelligence</td></tr>
        <tr><td>Saudi Arabia</td><td><b>GIP</b></td><td>General Intelligence Presidency</td></tr>
        <tr><td>Bangladesh</td><td><b>DGFI</b></td><td>Directorate General of Forces Intelligence</td></tr>
        <tr><td>Bangladesh</td><td><b>NSI</b></td><td>National Security Intelligence</td></tr>
        <tr><td>Sri Lanka</td><td><b>SIS</b></td><td>State Intelligence Service</td></tr>
        <tr><td>Bhutan</td><td><b>RBP Intel</b></td><td>Royal Bhutan Police</td></tr>
        <tr><td>Afghanistan</td><td><b>NDS</b></td><td>National Directorate of Security (former)</td></tr>
        <tr><td>South Africa</td><td><b>SSA</b></td><td>State Security Agency</td></tr>
        <tr><td>Japan</td><td><b>PSIA</b></td><td>Public Security Intelligence Agency</td></tr>
        <tr><td>South Korea</td><td><b>NIS</b></td><td>National Intelligence Service</td></tr>
        <tr><td>North Korea</td><td><b>RGB</b></td><td>Reconnaissance General Bureau</td></tr>
        <tr><td>Spain</td><td><b>CNI</b></td><td>National Intelligence Centre</td></tr>
        <tr><td>Italy</td><td><b>AISE / AISI</b></td><td>External and Internal</td></tr>
        <tr><td>Egypt</td><td><b>GIS</b></td><td>General Intelligence Service</td></tr>
      </table>

      <h3>🎯 Tips</h3>
      <ul>
        <li>India: RAW (external), IB (internal).</li>
        <li>USA: CIA (foreign), FBI (domestic), NSA (signals).</li>
        <li>UK: MI6 (foreign), MI5 (domestic).</li>
        <li>Russia: FSB (current internal), GRU (military), former KGB.</li>
        <li>Pakistan: ISI.</li>
        <li>Israel: Mossad (foreign), Shin Bet (domestic).</li>
        <li>China: MSS.</li>
        <li>Germany: BND.</li>
        <li>France: DGSE.</li>
      </ul>
    `,
    mcq: [
      { q: "India's external intelligence:", opts: ["IB", "RAW", "CBI", "NIA"], a: 1, ex: "Research and Analysis Wing." },
      { q: "USA's foreign intelligence:", opts: ["FBI", "CIA", "NSA", "DEA"], a: 1, ex: "CIA." },
      { q: "UK's foreign intelligence:", opts: ["MI5", "MI6", "GCHQ", "Scotland Yard"], a: 1, ex: "MI6 / SIS." },
      { q: "Pakistan's intelligence:", opts: ["IB", "RAW", "ISI", "FSB"], a: 2, ex: "Inter-Services Intelligence." },
      { q: "Israel's foreign intelligence:", opts: ["Shin Bet", "Mossad", "Aman", "ISI"], a: 1, ex: "Mossad." },
      { q: "Soviet Union's intelligence (Cold War):", opts: ["FSB", "KGB", "GRU", "SVR"], a: 1, ex: "KGB." },
      { q: "Russia's current internal agency:", opts: ["KGB", "FSB", "CIA", "RAW"], a: 1, ex: "FSB succeeded KGB." },
      { q: "China's intelligence:", opts: ["MSS", "PLA", "PRC", "MIA"], a: 0, ex: "Ministry of State Security." },
      { q: "Germany's intelligence:", opts: ["BND", "DGSE", "BfV", "CIA"], a: 0, ex: "BND for foreign." },
      { q: "France's foreign intelligence:", opts: ["BND", "DGSE", "DGSI", "DGS"], a: 1, ex: "DGSE." },
      { q: "India's internal intelligence:", opts: ["RAW", "IB", "NIA", "CBI"], a: 1, ex: "Intelligence Bureau." },
      { q: "USA's signals intelligence:", opts: ["CIA", "FBI", "NSA", "DOJ"], a: 2, ex: "NSA." },
      { q: "UK's domestic intelligence:", opts: ["MI5", "MI6", "GCHQ", "FBI"], a: 0, ex: "MI5." },
      { q: "Australia's internal:", opts: ["ASIS", "ASIO", "CSIS", "NZSIS"], a: 1, ex: "ASIO." },
      { q: "Canada's intelligence:", opts: ["CSIS", "MI6", "CIA", "NSA"], a: 0, ex: "CSIS." },
      { q: "Israel's internal:", opts: ["Mossad", "Shin Bet", "Aman", "IDF"], a: 1, ex: "Shabak / Shin Bet." },
      { q: "NSA stands for:", opts: ["National Security Agency", "New Security Authority", "Nation State Agency", "Network Spy Agency"], a: 0, ex: "Signals intelligence." },
      { q: "FBI is:", opts: ["Foreign Intel USA", "Domestic Intel USA", "Military Intel", "Private"], a: 1, ex: "Federal Bureau of Investigation." },
      { q: "Bangladesh agency:", opts: ["RAW", "DGFI", "NIA", "MOIS"], a: 1, ex: "Directorate General of Forces Intelligence." },
      { q: "India's anti-terror investigation:", opts: ["CBI", "RAW", "NIA", "IB"], a: 2, ex: "National Investigation Agency." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 10. ORGANISATIONS & THEIR HEADQUARTERS
  // ───────────────────────────────────────────────────────────────
  T["sgk-organisations"] = {
    body: `
      <h2>Organisations and Their Headquarters</h2>

      <h3>1. United Nations & Agencies</h3>
      <table>
        <tr><th>Organisation</th><th>HQ</th><th>Established</th></tr>
        <tr><td>United Nations (UN)</td><td>New York, USA</td><td>1945</td></tr>
        <tr><td>UN General Assembly</td><td>New York</td><td>1945</td></tr>
        <tr><td>UN Security Council</td><td>New York</td><td>1945</td></tr>
        <tr><td>International Court of Justice (ICJ)</td><td>The Hague, Netherlands</td><td>1945</td></tr>
        <tr><td>UNESCO</td><td>Paris, France</td><td>1945</td></tr>
        <tr><td>UNICEF</td><td>New York</td><td>1946</td></tr>
        <tr><td>WHO (World Health Organisation)</td><td>Geneva, Switzerland</td><td>1948</td></tr>
        <tr><td>ILO (International Labour Organisation)</td><td>Geneva</td><td>1919</td></tr>
        <tr><td>FAO (Food and Agriculture Organisation)</td><td>Rome, Italy</td><td>1945</td></tr>
        <tr><td>WFP (World Food Programme)</td><td>Rome</td><td>1961</td></tr>
        <tr><td>WIPO (Intellectual Property)</td><td>Geneva</td><td>1967</td></tr>
        <tr><td>WMO (Meteorological)</td><td>Geneva</td><td>1950</td></tr>
        <tr><td>IAEA (Atomic Energy)</td><td>Vienna, Austria</td><td>1957</td></tr>
        <tr><td>IMO (International Maritime)</td><td>London</td><td>1948</td></tr>
        <tr><td>ICAO (Civil Aviation)</td><td>Montreal, Canada</td><td>1944</td></tr>
        <tr><td>UNHCR (Refugees)</td><td>Geneva</td><td>1950</td></tr>
        <tr><td>UNFPA (Population)</td><td>New York</td><td>1969</td></tr>
        <tr><td>UNDP (Development)</td><td>New York</td><td>1965</td></tr>
        <tr><td>UNEP (Environment)</td><td>Nairobi, Kenya</td><td>1972</td></tr>
        <tr><td>UNCTAD (Trade and Development)</td><td>Geneva</td><td>1964</td></tr>
        <tr><td>UN Women</td><td>New York</td><td>2010</td></tr>
      </table>

      <h3>2. Financial Organisations</h3>
      <table>
        <tr><th>Organisation</th><th>HQ</th></tr>
        <tr><td>IMF (International Monetary Fund)</td><td>Washington D.C., USA</td></tr>
        <tr><td>World Bank</td><td>Washington D.C.</td></tr>
        <tr><td>WTO (World Trade Organisation)</td><td>Geneva, Switzerland</td></tr>
        <tr><td>BIS (Bank for International Settlements)</td><td>Basel, Switzerland</td></tr>
        <tr><td>ADB (Asian Development Bank)</td><td>Manila, Philippines</td></tr>
        <tr><td>AIIB (Asian Infrastructure Investment Bank)</td><td>Beijing, China</td></tr>
        <tr><td>NDB (New Development Bank, BRICS)</td><td>Shanghai, China</td></tr>
        <tr><td>African Development Bank</td><td>Abidjan, Ivory Coast</td></tr>
        <tr><td>European Central Bank (ECB)</td><td>Frankfurt, Germany</td></tr>
        <tr><td>European Investment Bank</td><td>Luxembourg</td></tr>
      </table>

      <h3>3. Regional & Political Organisations</h3>
      <table>
        <tr><th>Organisation</th><th>HQ</th></tr>
        <tr><td>SAARC</td><td>Kathmandu, Nepal</td></tr>
        <tr><td>ASEAN</td><td>Jakarta, Indonesia</td></tr>
        <tr><td>European Union (EU)</td><td>Brussels, Belgium</td></tr>
        <tr><td>African Union (AU)</td><td>Addis Ababa, Ethiopia</td></tr>
        <tr><td>Arab League</td><td>Cairo, Egypt</td></tr>
        <tr><td>OPEC (Oil Exporting Countries)</td><td>Vienna, Austria</td></tr>
        <tr><td>NATO</td><td>Brussels, Belgium</td></tr>
        <tr><td>Commonwealth of Nations</td><td>London</td></tr>
        <tr><td>OAS (Organisation of American States)</td><td>Washington D.C.</td></tr>
        <tr><td>OIC (Islamic Cooperation)</td><td>Jeddah, Saudi Arabia</td></tr>
        <tr><td>BRICS</td><td>No fixed HQ; rotational summit</td></tr>
        <tr><td>G20</td><td>No permanent secretariat</td></tr>
        <tr><td>G7</td><td>No HQ</td></tr>
        <tr><td>SCO (Shanghai Cooperation)</td><td>Beijing</td></tr>
      </table>

      <h3>4. Sports Organisations</h3>
      <table>
        <tr><th>Organisation</th><th>HQ</th></tr>
        <tr><td>IOC (International Olympic Committee)</td><td>Lausanne, Switzerland</td></tr>
        <tr><td>FIFA</td><td>Zurich, Switzerland</td></tr>
        <tr><td>ICC (International Cricket Council)</td><td>Dubai, UAE</td></tr>
        <tr><td>FIH (Hockey)</td><td>Lausanne</td></tr>
        <tr><td>FIBA (Basketball)</td><td>Mies, Switzerland</td></tr>
        <tr><td>BWF (Badminton)</td><td>Kuala Lumpur, Malaysia</td></tr>
        <tr><td>ITTF (Table Tennis)</td><td>Lausanne</td></tr>
        <tr><td>WADA (Anti-Doping)</td><td>Montreal, Canada</td></tr>
      </table>

      <h3>5. Humanitarian & Others</h3>
      <table>
        <tr><th>Organisation</th><th>HQ</th></tr>
        <tr><td>ICRC (Red Cross)</td><td>Geneva</td></tr>
        <tr><td>Amnesty International</td><td>London</td></tr>
        <tr><td>Greenpeace</td><td>Amsterdam, Netherlands</td></tr>
        <tr><td>Doctors Without Borders (MSF)</td><td>Geneva</td></tr>
        <tr><td>WWF (World Wildlife Fund)</td><td>Gland, Switzerland</td></tr>
        <tr><td>Transparency International</td><td>Berlin, Germany</td></tr>
        <tr><td>Interpol</td><td>Lyon, France</td></tr>
        <tr><td>Europol</td><td>The Hague, Netherlands</td></tr>
        <tr><td>OPCW (Chemical Weapons)</td><td>The Hague</td></tr>
      </table>

      <h3>🎯 Tips</h3>
      <ul>
        <li>UN: New York.</li>
        <li>ICJ: The Hague.</li>
        <li>WHO, ILO, WTO, UNHCR: Geneva.</li>
        <li>FAO: Rome.</li>
        <li>UNESCO: Paris.</li>
        <li>IAEA: Vienna.</li>
        <li>IMF and World Bank: Washington D.C.</li>
        <li>SAARC: Kathmandu; ASEAN: Jakarta.</li>
        <li>EU and NATO: Brussels.</li>
        <li>IOC and FIFA: Switzerland.</li>
        <li>ICC: Dubai.</li>
        <li>Interpol: Lyon.</li>
      </ul>
    `,
    mcq: [
      { q: "UN HQ:", opts: ["Geneva", "New York", "Paris", "London"], a: 1, ex: "New York." },
      { q: "WHO HQ:", opts: ["New York", "Geneva", "Paris", "Brussels"], a: 1, ex: "Geneva." },
      { q: "UNESCO HQ:", opts: ["Paris", "Geneva", "Rome", "Vienna"], a: 0, ex: "Paris, France." },
      { q: "FAO HQ:", opts: ["Geneva", "Rome", "Vienna", "Paris"], a: 1, ex: "Rome, Italy." },
      { q: "IMF HQ:", opts: ["New York", "Washington D.C.", "Geneva", "Paris"], a: 1, ex: "Washington D.C." },
      { q: "World Bank HQ:", opts: ["New York", "Washington D.C.", "London", "Geneva"], a: 1, ex: "DC." },
      { q: "WTO HQ:", opts: ["New York", "Geneva", "Brussels", "Paris"], a: 1, ex: "Geneva." },
      { q: "SAARC HQ:", opts: ["Kathmandu", "Delhi", "Dhaka", "Colombo"], a: 0, ex: "Nepal." },
      { q: "ASEAN HQ:", opts: ["Bangkok", "Jakarta", "Manila", "Singapore"], a: 1, ex: "Indonesia." },
      { q: "EU HQ:", opts: ["Paris", "Berlin", "Brussels", "Geneva"], a: 2, ex: "Brussels." },
      { q: "NATO HQ:", opts: ["Brussels", "Washington", "London", "Geneva"], a: 0, ex: "Brussels." },
      { q: "OPEC HQ:", opts: ["Vienna", "Riyadh", "Tehran", "Dubai"], a: 0, ex: "Vienna." },
      { q: "IAEA HQ:", opts: ["Vienna", "Geneva", "New York", "Paris"], a: 0, ex: "Atomic energy agency." },
      { q: "African Union HQ:", opts: ["Cairo", "Addis Ababa", "Lagos", "Nairobi"], a: 1, ex: "Ethiopia." },
      { q: "ICJ HQ:", opts: ["Geneva", "The Hague", "New York", "Paris"], a: 1, ex: "Netherlands." },
      { q: "FIFA HQ:", opts: ["Zurich", "Lausanne", "Paris", "London"], a: 0, ex: "Switzerland." },
      { q: "IOC HQ:", opts: ["Zurich", "Lausanne", "Athens", "Paris"], a: 1, ex: "Switzerland." },
      { q: "ICC (Cricket) HQ:", opts: ["London", "Mumbai", "Dubai", "Sydney"], a: 2, ex: "UAE." },
      { q: "Interpol HQ:", opts: ["Paris", "Lyon", "Geneva", "London"], a: 1, ex: "France." },
      { q: "Red Cross HQ:", opts: ["Geneva", "New York", "London", "Brussels"], a: 0, ex: "ICRC Geneva." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 11. FAMOUS NEWSPAPERS
  // ───────────────────────────────────────────────────────────────
  T["sgk-newspapers"] = {
    body: `
      <h2>Famous Newspapers of the World</h2>

      <h3>1. Major International Newspapers</h3>
      <table>
        <tr><th>Newspaper</th><th>Country</th></tr>
        <tr><td>The New York Times</td><td>USA</td></tr>
        <tr><td>The Washington Post</td><td>USA</td></tr>
        <tr><td>The Wall Street Journal</td><td>USA</td></tr>
        <tr><td>USA Today</td><td>USA</td></tr>
        <tr><td>Los Angeles Times</td><td>USA</td></tr>
        <tr><td>The Guardian</td><td>UK</td></tr>
        <tr><td>The Times (London)</td><td>UK</td></tr>
        <tr><td>The Daily Telegraph</td><td>UK</td></tr>
        <tr><td>Financial Times</td><td>UK</td></tr>
        <tr><td>Le Monde</td><td>France</td></tr>
        <tr><td>Le Figaro</td><td>France</td></tr>
        <tr><td>Liberation</td><td>France</td></tr>
        <tr><td>Bild</td><td>Germany</td></tr>
        <tr><td>Die Welt</td><td>Germany</td></tr>
        <tr><td>Frankfurter Allgemeine</td><td>Germany</td></tr>
        <tr><td>La Repubblica</td><td>Italy</td></tr>
        <tr><td>El Pais</td><td>Spain</td></tr>
        <tr><td>Pravda</td><td>Russia (Soviet era; "Truth")</td></tr>
        <tr><td>Izvestia</td><td>Russia ("News")</td></tr>
        <tr><td>People's Daily</td><td>China (official CPC)</td></tr>
        <tr><td>South China Morning Post</td><td>Hong Kong</td></tr>
        <tr><td>Asahi Shimbun</td><td>Japan</td></tr>
        <tr><td>Yomiuri Shimbun</td><td>Japan (largest by circulation)</td></tr>
        <tr><td>The Sydney Morning Herald</td><td>Australia</td></tr>
        <tr><td>The Australian</td><td>Australia</td></tr>
        <tr><td>The Globe and Mail</td><td>Canada</td></tr>
        <tr><td>Dawn</td><td>Pakistan</td></tr>
        <tr><td>The News International</td><td>Pakistan</td></tr>
        <tr><td>Jang</td><td>Pakistan (Urdu)</td></tr>
        <tr><td>The Daily Star</td><td>Bangladesh</td></tr>
        <tr><td>Prothom Alo</td><td>Bangladesh (Bengali)</td></tr>
        <tr><td>Daily News (Lanka)</td><td>Sri Lanka</td></tr>
        <tr><td>Kathmandu Post</td><td>Nepal</td></tr>
        <tr><td>Haaretz</td><td>Israel</td></tr>
        <tr><td>Jerusalem Post</td><td>Israel</td></tr>
        <tr><td>Al Ahram</td><td>Egypt</td></tr>
        <tr><td>Gulf News</td><td>UAE</td></tr>
        <tr><td>Khaleej Times</td><td>UAE</td></tr>
        <tr><td>Arab News</td><td>Saudi Arabia</td></tr>
      </table>

      <h3>2. Largest Newspapers (by circulation)</h3>
      <ol>
        <li>Yomiuri Shimbun (Japan) — ~10 million.</li>
        <li>Asahi Shimbun (Japan) — ~5 million.</li>
        <li>Times of India (India) — ~3.5 million.</li>
        <li>Dainik Jagran (India, Hindi).</li>
        <li>Daily Mail (UK).</li>
        <li>Bild (Germany).</li>
        <li>USA Today.</li>
      </ol>

      <h3>3. Famous Magazines</h3>
      <table>
        <tr><th>Magazine</th><th>Country</th></tr>
        <tr><td>Time</td><td>USA</td></tr>
        <tr><td>Newsweek</td><td>USA</td></tr>
        <tr><td>The Economist</td><td>UK</td></tr>
        <tr><td>National Geographic</td><td>USA</td></tr>
        <tr><td>Vogue</td><td>USA</td></tr>
        <tr><td>Forbes</td><td>USA</td></tr>
        <tr><td>Fortune</td><td>USA</td></tr>
        <tr><td>The New Yorker</td><td>USA</td></tr>
        <tr><td>Reader's Digest</td><td>USA</td></tr>
        <tr><td>Der Spiegel</td><td>Germany</td></tr>
        <tr><td>Stern</td><td>Germany</td></tr>
        <tr><td>L'Express</td><td>France</td></tr>
      </table>

      <h3>4. Famous News Agencies</h3>
      <table>
        <tr><th>Agency</th><th>Country</th></tr>
        <tr><td>Reuters</td><td>UK</td></tr>
        <tr><td>Associated Press (AP)</td><td>USA</td></tr>
        <tr><td>Agence France-Presse (AFP)</td><td>France</td></tr>
        <tr><td>Bloomberg</td><td>USA</td></tr>
        <tr><td>TASS</td><td>Russia</td></tr>
        <tr><td>RIA Novosti</td><td>Russia</td></tr>
        <tr><td>Xinhua</td><td>China</td></tr>
        <tr><td>Kyodo News</td><td>Japan</td></tr>
        <tr><td>PTI (Press Trust of India)</td><td>India</td></tr>
        <tr><td>UNI (United News of India)</td><td>India</td></tr>
        <tr><td>ANI (Asian News International)</td><td>India</td></tr>
        <tr><td>Al Jazeera</td><td>Qatar</td></tr>
      </table>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Yomiuri Shimbun: largest circulation in world.</li>
        <li>Pravda: Russian, means "truth".</li>
        <li>Asahi Shimbun, Yomiuri: Japan.</li>
        <li>People's Daily: China official.</li>
        <li>Reuters: UK news agency.</li>
        <li>AP: USA.</li>
        <li>Al Jazeera: Qatar.</li>
        <li>The Economist: UK.</li>
      </ul>
    `,
    mcq: [
      { q: "Pravda is from:", opts: ["China", "Russia", "France", "Germany"], a: 1, ex: "Soviet-era; means 'truth'." },
      { q: "Asahi Shimbun from:", opts: ["China", "Japan", "Korea", "Singapore"], a: 1, ex: "Japan." },
      { q: "People's Daily from:", opts: ["USA", "UK", "China", "Vietnam"], a: 2, ex: "CPC official." },
      { q: "Dawn is from:", opts: ["India", "Pakistan", "Bangladesh", "Sri Lanka"], a: 1, ex: "English daily." },
      { q: "Al Ahram from:", opts: ["Saudi", "UAE", "Egypt", "Israel"], a: 2, ex: "Egypt." },
      { q: "Largest newspaper (circulation):", opts: ["NYT", "Yomiuri Shimbun", "Times of India", "Daily Mail"], a: 1, ex: "Japan." },
      { q: "The Guardian from:", opts: ["USA", "UK", "Australia", "Ireland"], a: 1, ex: "UK." },
      { q: "Le Monde from:", opts: ["France", "Belgium", "Switzerland", "Canada"], a: 0, ex: "France." },
      { q: "Bild from:", opts: ["UK", "Germany", "Austria", "Switzerland"], a: 1, ex: "Tabloid." },
      { q: "Reuters news agency from:", opts: ["USA", "UK", "France", "Germany"], a: 1, ex: "UK." },
      { q: "AP news agency:", opts: ["USA", "UK", "France", "Russia"], a: 0, ex: "Associated Press." },
      { q: "AFP from:", opts: ["Australia", "USA", "France", "Africa"], a: 2, ex: "Agence France-Presse." },
      { q: "Al Jazeera from:", opts: ["Saudi", "Qatar", "UAE", "Egypt"], a: 1, ex: "Doha." },
      { q: "Xinhua from:", opts: ["Japan", "Korea", "China", "Taiwan"], a: 2, ex: "China." },
      { q: "TASS from:", opts: ["USA", "Russia", "Ukraine", "Belarus"], a: 1, ex: "Russian agency." },
      { q: "PTI from:", opts: ["UK", "India", "Pakistan", "USA"], a: 1, ex: "Press Trust of India." },
      { q: "The Economist from:", opts: ["USA", "UK", "Germany", "France"], a: 1, ex: "UK." },
      { q: "Haaretz from:", opts: ["Iran", "Israel", "Egypt", "Saudi"], a: 1, ex: "Israel." },
      { q: "Yomiuri Shimbun:", opts: ["Italy", "Korea", "Japan", "China"], a: 2, ex: "Japan, largest circ." },
      { q: "Prothom Alo from:", opts: ["Nepal", "Bangladesh", "India", "Sri Lanka"], a: 1, ex: "Bangladesh (Bengali)." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 12. POLITICAL PARTIES
  // ───────────────────────────────────────────────────────────────
  T["sgk-political-parties"] = {
    body: `
      <h2>Important Political Parties</h2>

      <h3>1. India — Major Political Parties</h3>
      <table>
        <tr><th>Party</th><th>Abbreviation</th><th>Founded</th><th>Founder/Notes</th></tr>
        <tr><td>Indian National Congress</td><td>INC / Congress</td><td>1885</td><td>A.O. Hume</td></tr>
        <tr><td>Bharatiya Janata Party</td><td>BJP</td><td>1980</td><td>From Jana Sangh; founder LK Advani, AB Vajpayee</td></tr>
        <tr><td>Communist Party of India</td><td>CPI</td><td>1925</td><td>M.N. Roy</td></tr>
        <tr><td>Communist Party of India (Marxist)</td><td>CPI(M)</td><td>1964</td><td>Split from CPI</td></tr>
        <tr><td>Aam Aadmi Party</td><td>AAP</td><td>2012</td><td>Arvind Kejriwal</td></tr>
        <tr><td>Bahujan Samaj Party</td><td>BSP</td><td>1984</td><td>Kanshi Ram</td></tr>
        <tr><td>Samajwadi Party</td><td>SP</td><td>1992</td><td>Mulayam Singh Yadav</td></tr>
        <tr><td>Trinamool Congress</td><td>TMC</td><td>1998</td><td>Mamata Banerjee</td></tr>
        <tr><td>Telugu Desam Party</td><td>TDP</td><td>1982</td><td>N.T. Rama Rao</td></tr>
        <tr><td>YSR Congress Party</td><td>YSRCP</td><td>2011</td><td>Y.S. Jagan Reddy</td></tr>
        <tr><td>Janata Dal (United)</td><td>JD(U)</td><td>2003</td><td>Bihar based</td></tr>
        <tr><td>Janata Dal (Secular)</td><td>JD(S)</td><td>1999</td><td>H.D. Deve Gowda</td></tr>
        <tr><td>DMK</td><td>DMK</td><td>1949</td><td>C.N. Annadurai</td></tr>
        <tr><td>AIADMK</td><td>AIADMK</td><td>1972</td><td>M.G. Ramachandran</td></tr>
        <tr><td>Shiv Sena</td><td>SHS</td><td>1966</td><td>Bal Thackeray</td></tr>
        <tr><td>Nationalist Congress Party</td><td>NCP</td><td>1999</td><td>Sharad Pawar</td></tr>
        <tr><td>BJD (Biju Janata Dal)</td><td>BJD</td><td>1997</td><td>Naveen Patnaik (Odisha)</td></tr>
        <tr><td>TRS / BRS (Bharat Rashtra Samithi)</td><td>BRS</td><td>2001</td><td>K. Chandrashekhar Rao</td></tr>
        <tr><td>Akali Dal</td><td>SAD</td><td>1920</td><td>Punjab Sikh-based</td></tr>
        <tr><td>RLD (Rashtriya Lok Dal)</td><td>RLD</td><td>1996</td><td>Western UP based</td></tr>
        <tr><td>National Conference</td><td>JKNC</td><td>1932</td><td>Sheikh Abdullah</td></tr>
        <tr><td>PDP</td><td>JKPDP</td><td>1999</td><td>Mufti Mohammad Sayeed</td></tr>
      </table>

      <h3>2. India — National vs Regional Parties</h3>
      <ul>
        <li><b>National parties (2024)</b> (6): BJP, Congress, BSP, CPI(M), AAP, NPP.</li>
        <li>Recognition by Election Commission based on vote share.</li>
        <li>Recently: TMC, NCP, CPI lost national status; AAP gained.</li>
      </ul>

      <h3>3. World — Major Political Parties</h3>

      <h4>USA</h4>
      <ul>
        <li>Democratic Party (1828).</li>
        <li>Republican Party (1854).</li>
        <li>Two-party system.</li>
      </ul>

      <h4>UK</h4>
      <ul>
        <li>Conservative Party.</li>
        <li>Labour Party.</li>
        <li>Liberal Democrats.</li>
        <li>Scottish National Party (SNP).</li>
      </ul>

      <h4>Russia</h4>
      <ul>
        <li>United Russia (ruling).</li>
        <li>Communist Party of Russian Federation.</li>
      </ul>

      <h4>China</h4>
      <ul>
        <li>Communist Party of China (CPC) — one-party state.</li>
        <li>Founded 1921.</li>
      </ul>

      <h4>Other</h4>
      <ul>
        <li>Pakistan: PTI (Imran Khan), PMLN (Sharif), PPP (Bhutto family).</li>
        <li>Bangladesh: Awami League, BNP.</li>
        <li>Japan: LDP (Liberal Democratic Party) — long ruling.</li>
        <li>Germany: CDU, SPD, Greens, AfD.</li>
        <li>France: La République En Marche!, Republicans, Socialists.</li>
        <li>Israel: Likud, Labor, Yesh Atid.</li>
        <li>Iran: Reformist and Principlist factions.</li>
        <li>South Africa: ANC (African National Congress) — Mandela's party.</li>
        <li>Sri Lanka: SLFP, UNP.</li>
        <li>Nepal: NCP, Nepali Congress, Maoist.</li>
      </ul>

      <h3>4. Famous Election Symbols (India)</h3>
      <table>
        <tr><th>Party</th><th>Symbol</th></tr>
        <tr><td>BJP</td><td>Lotus</td></tr>
        <tr><td>Congress</td><td>Hand</td></tr>
        <tr><td>BSP</td><td>Elephant</td></tr>
        <tr><td>AAP</td><td>Broom</td></tr>
        <tr><td>SP</td><td>Bicycle</td></tr>
        <tr><td>TMC</td><td>Flowers and Grass</td></tr>
        <tr><td>CPI(M)</td><td>Hammer, Sickle and Star</td></tr>
        <tr><td>NCP</td><td>Clock</td></tr>
        <tr><td>DMK</td><td>Rising Sun</td></tr>
        <tr><td>AIADMK</td><td>Two Leaves</td></tr>
      </table>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Congress founded 1885 by A.O. Hume.</li>
        <li>BJP founded 1980; from Jana Sangh.</li>
        <li>CPC founded 1921 in Shanghai.</li>
        <li>Republican and Democratic: USA.</li>
        <li>Conservative and Labour: UK.</li>
        <li>ANC: South Africa, Mandela's party.</li>
        <li>BJP symbol: Lotus; Congress: Hand.</li>
      </ul>
    `,
    mcq: [
      { q: "BJP founded in:", opts: ["1947", "1980", "1990", "1985"], a: 1, ex: "1980." },
      { q: "INC founded in:", opts: ["1885", "1947", "1900", "1920"], a: 0, ex: "By A.O. Hume." },
      { q: "AAP founder:", opts: ["Modi", "Kejriwal", "Rahul", "Mamata"], a: 1, ex: "Arvind Kejriwal." },
      { q: "BSP founder:", opts: ["Kanshi Ram", "Mayawati", "Ambedkar", "Lalu"], a: 0, ex: "Kanshi Ram." },
      { q: "TMC founder:", opts: ["Mamata Banerjee", "Buddhadev", "Jyoti Basu", "Suvendu"], a: 0, ex: "Mamata 1998." },
      { q: "Shiv Sena founder:", opts: ["Uddhav", "Bal Thackeray", "Aaditya", "Raj"], a: 1, ex: "Bal Thackeray 1966." },
      { q: "BJD founder:", opts: ["Naveen Patnaik", "Biju Patnaik", "Both", "Mamata"], a: 0, ex: "Naveen (named after father Biju)." },
      { q: "DMK was founded by:", opts: ["MGR", "Annadurai", "Karunanidhi", "Stalin"], a: 1, ex: "C.N. Annadurai 1949." },
      { q: "Election symbol of BJP:", opts: ["Hand", "Lotus", "Bicycle", "Elephant"], a: 1, ex: "Lotus." },
      { q: "Election symbol of Congress:", opts: ["Lotus", "Hand", "Elephant", "Sun"], a: 1, ex: "Hand." },
      { q: "Election symbol of BSP:", opts: ["Elephant", "Lotus", "Cycle", "Bow"], a: 0, ex: "Elephant." },
      { q: "Election symbol of AAP:", opts: ["Broom", "Lotus", "Sun", "Tree"], a: 0, ex: "Broom." },
      { q: "Communist Party of China founded:", opts: ["1911", "1921", "1949", "1976"], a: 1, ex: "1921 Shanghai." },
      { q: "ANC is in:", opts: ["India", "South Africa", "Egypt", "Kenya"], a: 1, ex: "Mandela's party." },
      { q: "LDP rules:", opts: ["Pakistan", "Japan", "Korea", "China"], a: 1, ex: "Liberal Democratic Party, Japan." },
      { q: "PTI is in:", opts: ["India", "Pakistan", "Bangladesh", "Sri Lanka"], a: 1, ex: "Pakistan Tehreek-e-Insaf." },
      { q: "AAP founded in:", opts: ["2010", "2012", "2014", "2008"], a: 1, ex: "2012." },
      { q: "Democratic and Republican in:", opts: ["UK", "USA", "France", "Canada"], a: 1, ex: "USA two-party." },
      { q: "Conservative and Labour in:", opts: ["USA", "UK", "Canada", "Australia"], a: 1, ex: "UK." },
      { q: "Awami League in:", opts: ["Pakistan", "Bangladesh", "Sri Lanka", "Nepal"], a: 1, ex: "Bangladesh ruling party." }
    ]
  };

  // ═══════════════════════════════════════════════════════════════
  // INDIA GK
  // ═══════════════════════════════════════════════════════════════

  // ───────────────────────────────────────────────────────────────
  // 13. FIRST IN INDIA
  // ───────────────────────────────────────────────────────────────
  T["sgk-first-india"] = {
    body: `
      <h2>First in India</h2>

      <h3>1. Political Firsts</h3>
      <table>
        <tr><th>Position</th><th>Name</th></tr>
        <tr><td>1st President of India</td><td>Dr. Rajendra Prasad</td></tr>
        <tr><td>1st Vice-President</td><td>Dr. S. Radhakrishnan</td></tr>
        <tr><td>1st Prime Minister</td><td>Jawaharlal Nehru</td></tr>
        <tr><td>1st Woman PM</td><td>Indira Gandhi</td></tr>
        <tr><td>1st Woman President</td><td>Pratibha Patil (2007)</td></tr>
        <tr><td>1st Muslim President</td><td>Dr. Zakir Husain</td></tr>
        <tr><td>1st Sikh PM</td><td>Manmohan Singh</td></tr>
        <tr><td>1st Dalit President</td><td>K.R. Narayanan</td></tr>
        <tr><td>1st Tribal President</td><td>Droupadi Murmu (2022)</td></tr>
        <tr><td>1st PM not to face Parliament</td><td>Charan Singh</td></tr>
        <tr><td>1st Deputy PM</td><td>Sardar Vallabhbhai Patel</td></tr>
        <tr><td>1st Home Minister</td><td>Sardar Vallabhbhai Patel</td></tr>
        <tr><td>1st Finance Minister</td><td>R.K. Shanmukham Chetty</td></tr>
        <tr><td>1st Foreign Minister</td><td>Jawaharlal Nehru</td></tr>
        <tr><td>1st Speaker of Lok Sabha</td><td>G.V. Mavalankar</td></tr>
        <tr><td>1st Woman Speaker (LS)</td><td>Meira Kumar</td></tr>
        <tr><td>1st CJI</td><td>H.J. Kania</td></tr>
        <tr><td>1st Woman CJI</td><td>(none yet)</td></tr>
        <tr><td>1st CEC (Chief Election Commissioner)</td><td>Sukumar Sen</td></tr>
        <tr><td>1st Governor-General after Independence</td><td>Lord Mountbatten</td></tr>
        <tr><td>1st Indian Governor-General</td><td>C. Rajagopalachari</td></tr>
      </table>

      <h3>2. Other Political Firsts</h3>
      <ul>
        <li>1st elected woman CM of Indian state: Sucheta Kripalani (UP, 1963).</li>
        <li>1st CM of an Indian state: Pt. Govind Ballabh Pant (UP).</li>
        <li>1st woman Governor: Sarojini Naidu (UP).</li>
        <li>1st woman judge of Supreme Court: M. Fathima Beevi.</li>
        <li>1st woman IPS officer: Kiran Bedi.</li>
        <li>1st woman IAS officer: Anna George (Anna Rajam Malhotra) (1951).</li>
        <li>1st woman IFS: C.B. Muthamma.</li>
      </ul>

      <h3>3. Military / Defence Firsts</h3>
      <ul>
        <li>1st Field Marshal of India: Sam Manekshaw.</li>
        <li>1st CDS (Chief of Defence Staff): General Bipin Rawat (2019).</li>
        <li>1st Marshal of Air Force: Arjan Singh.</li>
        <li>1st Admiral of Indian Navy: R.D. Katari (Chief of Naval Staff).</li>
        <li>1st PVC awardee: Major Somnath Sharma (posthumous, 1947).</li>
        <li>1st woman PVC: (none).</li>
        <li>1st Indian woman to fly fighter aircraft: Avani Chaturvedi.</li>
        <li>1st Indian woman pilot of Indian Air Force: Harita Kaur Deol.</li>
        <li>1st woman air marshal: Padmavathy Bandopadhyay.</li>
      </ul>

      <h3>4. Sports Firsts</h3>
      <ul>
        <li>1st Olympic Gold (Hockey team): 1928 Amsterdam.</li>
        <li>1st Individual Olympic Gold: Abhinav Bindra (Shooting, Beijing 2008).</li>
        <li>1st Olympic Medal: Norman Pritchard (Athletics, 1900).</li>
        <li>1st Indian to win Khel Ratna: Vishwanathan Anand (1991-92).</li>
        <li>1st Indian woman Olympic medal: Karnam Malleswari (Bronze, Weightlifting, Sydney 2000).</li>
        <li>1st Indian Test cricket captain: CK Nayudu (1932).</li>
        <li>1st cricketer to score 100 international centuries: Sachin Tendulkar.</li>
        <li>1st Indian woman boxer Olympic medal: Mary Kom (Bronze 2012).</li>
        <li>1st Indian woman to win Wimbledon (junior): Sania Mirza.</li>
        <li>1st Indian Olympic gold in Athletics: Neeraj Chopra (Javelin, Tokyo 2020).</li>
      </ul>

      <h3>5. Space & Science Firsts</h3>
      <ul>
        <li>1st Indian astronaut: Rakesh Sharma (1984, Soyuz).</li>
        <li>1st Indian woman astronaut: Kalpana Chawla (1997, NASA; Indian-origin American).</li>
        <li>1st Indian-origin in space (Indian citizen): Rakesh Sharma.</li>
        <li>1st satellite: Aryabhata (1975).</li>
        <li>1st Indian-built satellite: Aryabhata.</li>
        <li>1st Indian satellite launched from India: Rohini (1980, by SLV-3).</li>
        <li>Chandrayaan-1: First Indian moon mission (2008).</li>
        <li>Mangalyaan: First India Mars mission (2013).</li>
        <li>Chandrayaan-3: Soft landing on Moon's south pole (2023).</li>
        <li>1st Indian Nobel laureate: Rabindranath Tagore (Literature 1913).</li>
        <li>1st Indian Nobel in Physics: C.V. Raman (1930).</li>
        <li>1st Indian Nobel in Peace: Mother Teresa (1979).</li>
        <li>1st Indian Nobel in Economics: Amartya Sen (1998).</li>
        <li>1st Indian Nobel in Medicine: Har Gobind Khorana (1968).</li>
      </ul>

      <h3>6. Travel / Adventure Firsts</h3>
      <ul>
        <li>1st Indian on Everest: Tenzing Norgay (1953).</li>
        <li>1st Indian woman on Everest: Bachendri Pal (1984).</li>
        <li>1st Indian to swim across English Channel: Mihir Sen.</li>
        <li>1st Indian to circumnavigate world solo by sailboat: Dilip Donde (2010).</li>
        <li>1st Indian woman to circumnavigate solo: Aarohi Pandit (aviation, 2019).</li>
      </ul>

      <h3>7. Banking & Finance Firsts</h3>
      <ul>
        <li>1st Bank of India: Bank of Hindustan (1770).</li>
        <li>Oldest existing bank: SBI (1806 as Bank of Calcutta).</li>
        <li>1st Indian Bank with only Indian capital: Punjab National Bank (1894).</li>
        <li>1st RBI Governor: Sir Osborne Smith.</li>
        <li>1st Indian RBI Governor: C.D. Deshmukh.</li>
        <li>1st SEBI chairman: Dr S.A. Dave.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>1st President: Dr. Rajendra Prasad.</li>
        <li>1st PM: Nehru.</li>
        <li>1st woman PM: Indira Gandhi.</li>
        <li>1st woman President: Pratibha Patil (2007).</li>
        <li>1st tribal President: Droupadi Murmu (2022).</li>
        <li>1st CJI: H.J. Kania.</li>
        <li>1st Indian Nobel: Tagore 1913.</li>
        <li>1st Indian astronaut: Rakesh Sharma 1984.</li>
        <li>1st Individual Olympic Gold: Abhinav Bindra 2008.</li>
        <li>1st Field Marshal: Sam Manekshaw.</li>
        <li>1st Indian PNB.</li>
      </ul>
    `,
    mcq: [
      { q: "1st President of India:", opts: ["Nehru", "Rajendra Prasad", "Radhakrishnan", "Patel"], a: 1, ex: "Dr. Rajendra Prasad." },
      { q: "1st PM:", opts: ["Patel", "Nehru", "Shastri", "Indira"], a: 1, ex: "Nehru." },
      { q: "1st Woman PM:", opts: ["Indira Gandhi", "Sonia Gandhi", "Sushma Swaraj", "Pratibha"], a: 0, ex: "Indira Gandhi." },
      { q: "1st Woman President:", opts: ["Indira", "Pratibha Patil", "Sonia", "Droupadi Murmu"], a: 1, ex: "2007." },
      { q: "1st Tribal President:", opts: ["Kovind", "Murmu", "Kalam", "Narayanan"], a: 1, ex: "Droupadi Murmu 2022." },
      { q: "1st Indian Nobel:", opts: ["C.V. Raman", "Tagore", "Mother Teresa", "Sen"], a: 1, ex: "Literature 1913." },
      { q: "1st Indian Nobel in Physics:", opts: ["Raman", "Bose", "Khorana", "Sen"], a: 0, ex: "C.V. Raman 1930." },
      { q: "1st Indian astronaut:", opts: ["Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Sirisha Bandla"], a: 0, ex: "1984." },
      { q: "1st individual Olympic gold:", opts: ["Bindra", "Anand", "Bolt", "Phelps"], a: 0, ex: "Abhinav Bindra 2008." },
      { q: "1st Field Marshal:", opts: ["Manekshaw", "Cariappa", "Thimayya", "Rawat"], a: 0, ex: "Sam Manekshaw." },
      { q: "1st CDS:", opts: ["Manekshaw", "Rawat", "Naravane", "Anil Chauhan"], a: 1, ex: "Bipin Rawat 2019." },
      { q: "1st Indian woman IPS:", opts: ["Kiran Bedi", "Anna Rajam", "Roshni Nadar", "Indira"], a: 0, ex: "Kiran Bedi." },
      { q: "1st CJI:", opts: ["H.J. Kania", "Patanjali Shastri", "B.K. Mukherjee", "M. Sastri"], a: 0, ex: "Harilal Kania." },
      { q: "1st Indian Olympic medal in Hockey gold:", opts: ["1928", "1932", "1936", "1948"], a: 0, ex: "Amsterdam 1928." },
      { q: "1st Indian satellite:", opts: ["INSAT", "Aryabhata", "Rohini", "GSAT"], a: 1, ex: "1975." },
      { q: "1st woman Speaker of Lok Sabha:", opts: ["Sumitra Mahajan", "Meira Kumar", "Sushma Swaraj", "Sonia"], a: 1, ex: "Meira Kumar." },
      { q: "1st Olympic gold in athletics:", opts: ["Milkha", "Neeraj Chopra", "PT Usha", "Anju Bobby"], a: 1, ex: "Tokyo 2020 javelin." },
      { q: "1st Indian to climb Everest:", opts: ["Tenzing Norgay", "Bachendri", "Junko", "Hillary"], a: 0, ex: "1953." },
      { q: "1st Sikh PM:", opts: ["Patel", "Manmohan Singh", "Singh", "Kalam"], a: 1, ex: "Manmohan Singh." },
      { q: "1st Indian RBI Governor:", opts: ["Smith", "C.D. Deshmukh", "Reddy", "Subbarao"], a: 1, ex: "Deshmukh." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 14. SUPERLATIVES IN INDIA
  // ───────────────────────────────────────────────────────────────
  T["sgk-superlatives-india"] = {
    body: `
      <h2>Superlatives in India (Largest, Highest, Longest)</h2>

      <h3>1. Geography</h3>
      <ul>
        <li><b>Largest state (area)</b>: Rajasthan.</li>
        <li><b>Smallest state (area)</b>: Goa.</li>
        <li><b>Most populous state</b>: Uttar Pradesh.</li>
        <li><b>Least populous state</b>: Sikkim.</li>
        <li><b>Largest UT (area)</b>: Ladakh.</li>
        <li><b>Smallest UT (area)</b>: Lakshadweep.</li>
        <li><b>Most populous UT</b>: Delhi.</li>
        <li><b>Highest peak (in India)</b>: Kanchenjunga (8,586 m); 3rd in world. (K2 is in PoK.)</li>
        <li><b>Highest peak entirely in India</b>: Nanda Devi.</li>
        <li><b>Longest river</b>: Ganga (2,525 km).</li>
        <li><b>Longest river entirely in India</b>: Godavari.</li>
        <li><b>Largest lake (natural, freshwater)</b>: Wular Lake (J&K).</li>
        <li><b>Largest saltwater lake</b>: Chilika (Odisha).</li>
        <li><b>Largest artificial lake</b>: Govind Sagar (Bhakra Dam).</li>
        <li><b>Highest lake</b>: Tsomgo (Sikkim).</li>
        <li><b>Largest delta</b>: Sundarbans (Ganga-Brahmaputra).</li>
        <li><b>Largest desert</b>: Thar.</li>
        <li><b>Wettest place</b>: Mawsynram (earlier Cherrapunji).</li>
        <li><b>Driest place</b>: Jaisalmer.</li>
        <li><b>Highest waterfall</b>: Kunchikal (Karnataka).</li>
      </ul>

      <h3>2. Demographic</h3>
      <ul>
        <li>Most densely populated state: Bihar.</li>
        <li>Least densely populated state: Arunachal Pradesh.</li>
        <li>Highest literacy state: Kerala.</li>
        <li>Lowest literacy state: Bihar.</li>
        <li>State with highest sex ratio: Kerala.</li>
        <li>State with lowest sex ratio: Haryana.</li>
      </ul>

      <h3>3. Cities</h3>
      <ul>
        <li><b>Largest city (population)</b>: Mumbai.</li>
        <li><b>Largest city (area)</b>: Delhi.</li>
        <li><b>Most populous metropolitan</b>: Mumbai metro.</li>
        <li><b>Highest city</b>: Leh.</li>
        <li><b>Oldest city</b>: Varanasi (continuously inhabited).</li>
      </ul>

      <h3>4. Buildings & Structures</h3>
      <ul>
        <li><b>Tallest building</b>: Palais Royale, Mumbai (320 m).</li>
        <li><b>Tallest statue</b>: Statue of Unity, Gujarat (Sardar Patel, 182 m) — tallest in world.</li>
        <li><b>Tallest tower</b>: Pitampura TV Tower, Delhi.</li>
        <li><b>Largest stadium</b>: Narendra Modi Stadium, Ahmedabad (1,32,000).</li>
        <li><b>Largest dome</b>: Gol Gumbaz, Bijapur.</li>
        <li><b>Tallest minar</b>: Qutub Minar (73 m).</li>
        <li><b>Largest railway station</b>: Howrah / Sealdah (most platforms).</li>
        <li><b>Longest platform</b>: Hubballi (Karnataka, ~1.5 km).</li>
        <li><b>Highest airport</b>: Daulat Beg Oldie (army), commercial Leh.</li>
        <li><b>Largest port</b>: Mumbai (Jawaharlal Nehru Port).</li>
        <li><b>Busiest airport</b>: Indira Gandhi International, Delhi.</li>
      </ul>

      <h3>5. Bridges & Roads</h3>
      <ul>
        <li><b>Longest road bridge</b>: Atal Setu (Mumbai Trans Harbour, 2024, 21.8 km).</li>
        <li><b>Longest rail bridge</b>: Bogibeel (Assam, 4.94 km).</li>
        <li><b>Highest rail bridge</b>: Chenab Bridge (J&K, 359 m).</li>
        <li><b>Longest road tunnel</b>: Atal Tunnel (Rohtang, 9 km).</li>
        <li><b>Longest national highway</b>: NH-44 (Srinagar to Kanyakumari).</li>
      </ul>

      <h3>6. Religious Sites</h3>
      <ul>
        <li><b>Largest temple complex</b>: Akshardham (Delhi).</li>
        <li><b>Largest mosque</b>: Jama Masjid, Delhi.</li>
        <li><b>Largest church</b>: Sé Cathedral, Goa.</li>
        <li><b>Largest cave temple</b>: Kailasa Temple, Ellora.</li>
        <li><b>Holiest river</b>: Ganga.</li>
        <li><b>Largest gurudwara</b>: Golden Temple, Amritsar.</li>
      </ul>

      <h3>7. Forests & Wildlife</h3>
      <ul>
        <li><b>Largest forest cover state</b>: Madhya Pradesh.</li>
        <li><b>Highest forest % state</b>: Mizoram.</li>
        <li><b>1st National Park</b>: Jim Corbett (Uttarakhand, 1936).</li>
        <li><b>Largest National Park</b>: Hemis (Ladakh).</li>
        <li><b>National animal</b>: Tiger.</li>
        <li><b>National bird</b>: Peacock.</li>
        <li><b>National flower</b>: Lotus.</li>
        <li><b>National tree</b>: Banyan.</li>
        <li><b>National fruit</b>: Mango.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Largest state: Rajasthan; Smallest: Goa.</li>
        <li>Most populous: UP; Least: Sikkim.</li>
        <li>Highest literacy: Kerala; Lowest: Bihar.</li>
        <li>Largest delta: Sundarbans.</li>
        <li>Statue of Unity: tallest in world.</li>
        <li>NH-44: longest highway.</li>
        <li>Atal Setu: longest road bridge (2024).</li>
        <li>Mawsynram: wettest place.</li>
      </ul>
    `,
    mcq: [
      { q: "Largest Indian state by area:", opts: ["MP", "Rajasthan", "Maharashtra", "UP"], a: 1, ex: "Rajasthan." },
      { q: "Smallest Indian state by area:", opts: ["Goa", "Sikkim", "Tripura", "Manipur"], a: 0, ex: "Goa." },
      { q: "Most populous state:", opts: ["Bihar", "Maharashtra", "UP", "WB"], a: 2, ex: "Uttar Pradesh." },
      { q: "Least populous state:", opts: ["Tripura", "Sikkim", "Mizoram", "Goa"], a: 1, ex: "Sikkim." },
      { q: "Largest UT:", opts: ["Delhi", "Ladakh", "Andaman", "J&K"], a: 1, ex: "Ladakh." },
      { q: "Highest peak in India:", opts: ["K2", "Kanchenjunga", "Nanda Devi", "Everest"], a: 1, ex: "K2 is in PoK." },
      { q: "Longest river:", opts: ["Ganga", "Godavari", "Brahmaputra", "Krishna"], a: 0, ex: "2525 km." },
      { q: "Largest delta:", opts: ["Krishna", "Godavari", "Sundarbans (Ganga-Brahmaputra)", "Cauvery"], a: 2, ex: "Sundarbans." },
      { q: "Highest literacy state:", opts: ["TN", "Kerala", "Goa", "Mizoram"], a: 1, ex: "Kerala >95%." },
      { q: "Wettest place:", opts: ["Cherrapunji", "Mawsynram", "Shillong", "Darjeeling"], a: 1, ex: "Meghalaya." },
      { q: "Largest desert:", opts: ["Thar", "Gobi", "Kachchh", "Rann"], a: 0, ex: "Thar." },
      { q: "1st National Park:", opts: ["Kanha", "Jim Corbett", "Bandhavgarh", "Gir"], a: 1, ex: "1936." },
      { q: "Statue of Unity height:", opts: ["100 m", "182 m", "250 m", "200 m"], a: 1, ex: "Tallest statue in world." },
      { q: "Tallest statue is of:", opts: ["Gandhi", "Sardar Patel", "Nehru", "Shivaji"], a: 1, ex: "Statue of Unity, Gujarat." },
      { q: "National bird:", opts: ["Eagle", "Peacock", "Crow", "Parrot"], a: 1, ex: "Peacock." },
      { q: "National tree:", opts: ["Banyan", "Neem", "Peepal", "Mango"], a: 0, ex: "Banyan." },
      { q: "Largest natural lake:", opts: ["Wular", "Dal", "Chilika", "Loktak"], a: 0, ex: "Wular J&K (freshwater); Chilika is largest saltwater coastal." },
      { q: "Longest road bridge:", opts: ["Atal Setu", "Bogibeel", "Mahatma Gandhi Setu", "Bandra-Worli"], a: 0, ex: "21.8 km Mumbai." },
      { q: "Highest rail bridge:", opts: ["Chenab", "Bogibeel", "Pamban", "Atal"], a: 0, ex: "359 m above river." },
      { q: "NH-44 runs from:", opts: ["Srinagar to Kanyakumari", "Mumbai to Chennai", "Delhi to Kolkata", "Delhi to Mumbai"], a: 0, ex: "Longest highway." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 15. UNESCO WORLD HERITAGE SITES IN INDIA
  // ───────────────────────────────────────────────────────────────
  T["sgk-unesco-india"] = {
    body: `
      <h2>UNESCO World Heritage Sites in India</h2>
      <p>India has 42 UNESCO World Heritage Sites (as of 2023): 34 cultural, 7 natural, 1 mixed.</p>

      <h3>1. Cultural Sites (34) — Major Ones</h3>
      <table>
        <tr><th>Site</th><th>State</th><th>Year</th></tr>
        <tr><td>Agra Fort</td><td>Uttar Pradesh</td><td>1983</td></tr>
        <tr><td>Ajanta Caves</td><td>Maharashtra</td><td>1983</td></tr>
        <tr><td>Ellora Caves</td><td>Maharashtra</td><td>1983</td></tr>
        <tr><td>Taj Mahal</td><td>Uttar Pradesh</td><td>1983</td></tr>
        <tr><td>Sun Temple Konark</td><td>Odisha</td><td>1984</td></tr>
        <tr><td>Mahabalipuram Group of Monuments</td><td>Tamil Nadu</td><td>1984</td></tr>
        <tr><td>Churches and Convents of Goa</td><td>Goa</td><td>1986</td></tr>
        <tr><td>Khajuraho Group of Monuments</td><td>Madhya Pradesh</td><td>1986</td></tr>
        <tr><td>Group of Monuments at Hampi</td><td>Karnataka</td><td>1986</td></tr>
        <tr><td>Fatehpur Sikri</td><td>Uttar Pradesh</td><td>1986</td></tr>
        <tr><td>Group of Monuments at Pattadakal</td><td>Karnataka</td><td>1987</td></tr>
        <tr><td>Elephanta Caves</td><td>Maharashtra</td><td>1987</td></tr>
        <tr><td>Great Living Chola Temples</td><td>Tamil Nadu</td><td>1987</td></tr>
        <tr><td>Buddhist Monuments at Sanchi</td><td>Madhya Pradesh</td><td>1989</td></tr>
        <tr><td>Humayun's Tomb</td><td>Delhi</td><td>1993</td></tr>
        <tr><td>Qutub Minar and its Monuments</td><td>Delhi</td><td>1993</td></tr>
        <tr><td>Mountain Railways of India</td><td>Multiple (Darjeeling, Nilgiri, Kalka-Shimla)</td><td>1999, 2005, 2008</td></tr>
        <tr><td>Mahabodhi Temple Complex, Bodh Gaya</td><td>Bihar</td><td>2002</td></tr>
        <tr><td>Rock Shelters of Bhimbetka</td><td>Madhya Pradesh</td><td>2003</td></tr>
        <tr><td>Champaner-Pavagadh Archaeological Park</td><td>Gujarat</td><td>2004</td></tr>
        <tr><td>Chhatrapati Shivaji Terminus (CST)</td><td>Maharashtra (Mumbai)</td><td>2004</td></tr>
        <tr><td>Red Fort Complex</td><td>Delhi</td><td>2007</td></tr>
        <tr><td>Jantar Mantar, Jaipur</td><td>Rajasthan</td><td>2010</td></tr>
        <tr><td>Hill Forts of Rajasthan</td><td>Rajasthan</td><td>2013</td></tr>
        <tr><td>Rani-ki-Vav (The Queen's Stepwell)</td><td>Gujarat (Patan)</td><td>2014</td></tr>
        <tr><td>Archaeological Site of Nalanda Mahavihara</td><td>Bihar</td><td>2016</td></tr>
        <tr><td>The Architectural Work of Le Corbusier</td><td>Chandigarh (Capitol Complex)</td><td>2016</td></tr>
        <tr><td>Historic City of Ahmedabad</td><td>Gujarat</td><td>2017</td></tr>
        <tr><td>Victorian Gothic and Art Deco Ensembles of Mumbai</td><td>Maharashtra</td><td>2018</td></tr>
        <tr><td>Jaipur City</td><td>Rajasthan</td><td>2019</td></tr>
        <tr><td>Kakatiya Rudreshwara (Ramappa) Temple</td><td>Telangana</td><td>2021</td></tr>
        <tr><td>Dholavira (Harappan City)</td><td>Gujarat</td><td>2021</td></tr>
        <tr><td>Hoysala Temples</td><td>Karnataka</td><td>2023</td></tr>
        <tr><td>Shantiniketan</td><td>West Bengal</td><td>2023</td></tr>
      </table>

      <h3>2. Natural Sites (7)</h3>
      <table>
        <tr><th>Site</th><th>State</th><th>Year</th></tr>
        <tr><td>Kaziranga National Park</td><td>Assam</td><td>1985 (one-horned rhino)</td></tr>
        <tr><td>Keoladeo National Park</td><td>Rajasthan</td><td>1985 (bird sanctuary)</td></tr>
        <tr><td>Manas Wildlife Sanctuary</td><td>Assam</td><td>1985</td></tr>
        <tr><td>Sundarbans National Park</td><td>West Bengal</td><td>1987 (tigers, mangroves)</td></tr>
        <tr><td>Nanda Devi and Valley of Flowers</td><td>Uttarakhand</td><td>1988, 2005</td></tr>
        <tr><td>Western Ghats</td><td>Multiple</td><td>2012</td></tr>
        <tr><td>Great Himalayan National Park</td><td>Himachal Pradesh</td><td>2014</td></tr>
      </table>

      <h3>3. Mixed Site (1)</h3>
      <table>
        <tr><th>Site</th><th>State</th><th>Year</th></tr>
        <tr><td>Khangchendzonga National Park</td><td>Sikkim</td><td>2016 (both natural and cultural)</td></tr>
      </table>

      <h3>4. Key Highlights</h3>
      <ul>
        <li>India: <b>6th most</b> UNESCO sites globally.</li>
        <li>Italy and China have most (~58 each).</li>
        <li>Most sites in: Maharashtra (4-5), Karnataka (4), Tamil Nadu (3), Rajasthan, MP.</li>
        <li>Most recent (2023): Hoysala Temples, Shantiniketan.</li>
        <li>First Indian site (1983): Taj Mahal, Agra Fort, Ajanta, Ellora.</li>
      </ul>

      <h3>5. Famous UNESCO Cultural Sites Worldwide</h3>
      <ul>
        <li>Pyramids of Giza (Egypt).</li>
        <li>Great Wall of China.</li>
        <li>Machu Picchu (Peru).</li>
        <li>Petra (Jordan).</li>
        <li>Stonehenge (UK).</li>
        <li>Acropolis (Greece).</li>
        <li>Angkor (Cambodia).</li>
        <li>Versailles (France).</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>India has 42 UNESCO sites (34 cultural, 7 natural, 1 mixed).</li>
        <li>1st Indian sites (1983): Taj Mahal, Agra Fort, Ajanta, Ellora.</li>
        <li>Mahabodhi: Bodh Gaya, Bihar.</li>
        <li>Sun Temple: Konark, Odisha.</li>
        <li>Nalanda: 2016.</li>
        <li>Jaipur: 2019.</li>
        <li>Dholavira (Harappan): 2021.</li>
        <li>Western Ghats: natural site.</li>
        <li>Sundarbans: mangrove forest, tigers.</li>
        <li>Khangchendzonga: only mixed site in India.</li>
      </ul>
    `,
    mcq: [
      { q: "Total UNESCO sites in India (2023):", opts: ["35", "40", "42", "50"], a: 2, ex: "42 sites." },
      { q: "First Indian site (1983):", opts: ["Taj Mahal", "Red Fort", "Hampi", "Khajuraho"], a: 0, ex: "Among first 4." },
      { q: "Sun Temple Konark in:", opts: ["WB", "Odisha", "Bihar", "AP"], a: 1, ex: "Odisha." },
      { q: "Khajuraho is in:", opts: ["UP", "MP", "Rajasthan", "Gujarat"], a: 1, ex: "Madhya Pradesh." },
      { q: "Hampi is in:", opts: ["Karnataka", "AP", "TN", "Telangana"], a: 0, ex: "Karnataka (Vijayanagar)." },
      { q: "Ajanta and Ellora in:", opts: ["MP", "Maharashtra", "Telangana", "Karnataka"], a: 1, ex: "Aurangabad." },
      { q: "Mahabodhi Temple in:", opts: ["UP", "Bihar (Bodh Gaya)", "MP", "Odisha"], a: 1, ex: "Buddha enlightenment." },
      { q: "Mountain Railways UNESCO heritage:", opts: ["Darjeeling", "Nilgiri", "Kalka-Shimla", "All correct"], a: 3, ex: "All three." },
      { q: "Kaziranga famous for:", opts: ["Tiger", "Rhino", "Elephant", "Bird"], a: 1, ex: "One-horned rhino." },
      { q: "Keoladeo National Park is:", opts: ["Tiger reserve", "Bird sanctuary", "Marine", "Mountain"], a: 1, ex: "Rajasthan, birds." },
      { q: "Sundarbans famous for:", opts: ["Lions", "Tigers (Royal Bengal)", "Deer", "Elephants"], a: 1, ex: "Mangrove + tigers." },
      { q: "Nalanda site UNESCO heritage in:", opts: ["UP", "Bihar", "WB", "MP"], a: 1, ex: "2016." },
      { q: "Dholavira in:", opts: ["Gujarat", "MP", "Rajasthan", "UP"], a: 0, ex: "Harappan city 2021." },
      { q: "Jaipur city UNESCO heritage in:", opts: ["2015", "2017", "2019", "2021"], a: 2, ex: "2019." },
      { q: "Hoysala temples in:", opts: ["TN", "Kerala", "Karnataka", "AP"], a: 2, ex: "2023." },
      { q: "Mixed natural+cultural site:", opts: ["Sundarbans", "Khangchendzonga", "Western Ghats", "Kaziranga"], a: 1, ex: "Sikkim 2016." },
      { q: "Indian rank in UNESCO sites:", opts: ["3rd", "5th", "6th", "10th"], a: 2, ex: "6th globally." },
      { q: "Champaner-Pavagadh in:", opts: ["Gujarat", "MP", "Maharashtra", "Rajasthan"], a: 0, ex: "Gujarat." },
      { q: "Le Corbusier work UNESCO heritage:", opts: ["Delhi", "Chandigarh", "Mumbai", "Bangalore"], a: 1, ex: "Capitol Complex." },
      { q: "Shantiniketan UNESCO heritage year:", opts: ["2019", "2021", "2023", "2024"], a: 2, ex: "2023." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 16. INDIAN RESEARCH CENTRES & INSTITUTES
  // ───────────────────────────────────────────────────────────────
  T["sgk-research-centres"] = {
    body: `
      <h2>Indian Research Centres & Institutes</h2>

      <h3>1. Space & Atomic</h3>
      <ul>
        <li><b>ISRO HQ</b>: Bengaluru.</li>
        <li><b>VSSC</b> (Vikram Sarabhai Space Centre): Thiruvananthapuram.</li>
        <li><b>SDSC SHAR</b> (Satish Dhawan Space Centre): Sriharikota, AP (launch site).</li>
        <li><b>URSC</b> (UR Rao Satellite Centre): Bengaluru.</li>
        <li><b>LPSC</b> (Liquid Propulsion): Thiruvananthapuram + Bengaluru.</li>
        <li><b>SAC</b> (Space Applications): Ahmedabad.</li>
        <li><b>MCF</b> (Master Control Facility): Hassan, Karnataka.</li>
        <li><b>BARC</b> (Bhabha Atomic Research Centre): Trombay, Mumbai.</li>
        <li><b>AERB</b> (Atomic Energy Regulatory Board): Mumbai.</li>
        <li><b>IGCAR</b> (Indira Gandhi Centre for Atomic Research): Kalpakkam.</li>
        <li><b>RRCAT</b> (Raja Ramanna Centre for Advanced Tech): Indore.</li>
        <li><b>VECC</b> (Variable Energy Cyclotron Centre): Kolkata.</li>
      </ul>

      <h3>2. Defence Research</h3>
      <ul>
        <li><b>DRDO HQ</b>: Delhi.</li>
        <li><b>DRDL</b> (Defence Research Lab): Hyderabad.</li>
        <li><b>RCI</b> (Research Centre Imarat): Hyderabad.</li>
        <li><b>ADE</b> (Aeronautical Development Estab.): Bengaluru.</li>
        <li><b>HAL</b> (Hindustan Aeronautics Ltd.): Bengaluru.</li>
        <li><b>BEL</b> (Bharat Electronics Ltd.): Bengaluru.</li>
        <li><b>OFB</b> (Ordnance Factory Board): Kolkata.</li>
      </ul>

      <h3>3. CSIR Laboratories (Council of Scientific & Industrial Research)</h3>
      <ul>
        <li><b>CSIR HQ</b>: Delhi.</li>
        <li><b>NPL</b> (National Physical Laboratory): Delhi.</li>
        <li><b>CDRI</b> (Central Drug Research Institute): Lucknow.</li>
        <li><b>NCL</b> (National Chemical Laboratory): Pune.</li>
        <li><b>NEERI</b> (Environmental Engineering): Nagpur.</li>
        <li><b>IICT</b> (Indian Institute of Chemical Tech): Hyderabad.</li>
        <li><b>CEERI</b> (Electronics): Pilani.</li>
        <li><b>NIO</b> (National Institute of Oceanography): Goa.</li>
        <li><b>IIIM</b> (Integrative Medicine): Jammu.</li>
        <li><b>CFTRI</b> (Central Food Tech Research Institute): Mysore.</li>
        <li><b>CMERI</b> (Mechanical): Durgapur.</li>
        <li><b>NAL</b> (National Aerospace Lab): Bengaluru.</li>
        <li><b>CGCRI</b> (Glass and Ceramic): Kolkata.</li>
        <li><b>IGIB</b> (Integrative Biology): Delhi.</li>
        <li><b>CCMB</b> (Cellular and Molecular Biology): Hyderabad.</li>
      </ul>

      <h3>4. ICAR (Agriculture)</h3>
      <ul>
        <li><b>IARI</b> (Indian Agricultural Research Institute): Pusa, Delhi.</li>
        <li><b>NDRI</b> (National Dairy Research Institute): Karnal.</li>
        <li><b>IIHR</b> (Horticultural Research): Bengaluru.</li>
        <li><b>CIFRI</b> (Inland Fisheries): Barrackpore.</li>
        <li><b>CMFRI</b> (Marine Fisheries): Kochi.</li>
        <li><b>CRRI</b> (Rice): Cuttack.</li>
        <li><b>CICR</b> (Cotton): Nagpur.</li>
        <li><b>CRIDA</b> (Dryland Agriculture): Hyderabad.</li>
      </ul>

      <h3>5. ICMR (Medical)</h3>
      <ul>
        <li><b>NIV</b> (National Institute of Virology): Pune.</li>
        <li><b>NIMHANS</b> (Mental Health): Bengaluru.</li>
        <li><b>AIIMS</b> (All India Institute of Medical Sciences): Delhi (and others).</li>
        <li><b>JIPMER</b>: Puducherry.</li>
        <li><b>PGIMER</b>: Chandigarh.</li>
        <li><b>NIPER</b> (Pharmaceutical Education): Mohali.</li>
      </ul>

      <h3>6. Education / Premier Institutes</h3>
      <ul>
        <li><b>IISc</b> (Indian Institute of Science): Bengaluru — top research institute.</li>
        <li><b>TIFR</b> (Tata Institute of Fundamental Research): Mumbai.</li>
        <li><b>IISERs</b>: Pune, Mohali, Kolkata, Bhopal, etc.</li>
        <li><b>IITs</b>: 23 across India (Madras, Bombay, Delhi, Kanpur, Kharagpur top old ones).</li>
        <li><b>NITs</b>: 31 across India.</li>
        <li><b>IIMs</b>: 20+ business schools.</li>
        <li><b>IISc Bengaluru</b>: India's top science institute.</li>
        <li><b>JNCASR</b>: Jawaharlal Nehru Centre for Advanced Scientific Research, Bengaluru.</li>
        <li><b>RRI</b> (Raman Research Institute): Bengaluru.</li>
        <li><b>IUCAA</b> (Inter-University Centre for Astronomy and Astrophysics): Pune.</li>
        <li><b>NCRA</b> (Centre for Radio Astrophysics): Pune (GMRT operator).</li>
      </ul>

      <h3>7. Statistical / Economic</h3>
      <ul>
        <li><b>ISI</b> (Indian Statistical Institute): Kolkata.</li>
        <li><b>NCAER</b> (Applied Economic Research): Delhi.</li>
        <li><b>NIPFP</b> (Public Finance and Policy): Delhi.</li>
      </ul>

      <h3>8. National Bureaux</h3>
      <ul>
        <li><b>NBPGR</b> (Plant Genetic Resources): Delhi.</li>
        <li><b>NBAGR</b> (Animal Genetic): Karnal.</li>
        <li><b>NBSS&LUP</b> (Soil Survey): Nagpur.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>ISRO HQ: Bengaluru.</li>
        <li>Sriharikota: launch site.</li>
        <li>BARC: Trombay, Mumbai.</li>
        <li>NPL: Delhi.</li>
        <li>NIV: Pune (COVID studies).</li>
        <li>IARI: Pusa, Delhi.</li>
        <li>NDRI: Karnal.</li>
        <li>CFTRI: Mysore.</li>
        <li>IISc: Bengaluru.</li>
        <li>TIFR: Mumbai.</li>
      </ul>
    `,
    mcq: [
      { q: "ISRO HQ:", opts: ["Mumbai", "Bengaluru", "Delhi", "Chennai"], a: 1, ex: "Bengaluru." },
      { q: "Satish Dhawan Space Centre is in:", opts: ["Bengaluru", "Sriharikota", "Trombay", "Chennai"], a: 1, ex: "AP launch site." },
      { q: "BARC HQ:", opts: ["Mumbai (Trombay)", "Delhi", "Hyderabad", "Bengaluru"], a: 0, ex: "Trombay." },
      { q: "VSSC is in:", opts: ["Bengaluru", "Thiruvananthapuram", "Hyderabad", "Mumbai"], a: 1, ex: "Kerala." },
      { q: "IARI is in:", opts: ["Pune", "Delhi (Pusa)", "Bengaluru", "Mumbai"], a: 1, ex: "Delhi." },
      { q: "NDRI is in:", opts: ["Karnal", "Bengaluru", "Pune", "Anand"], a: 0, ex: "Haryana." },
      { q: "NIV (virology) in:", opts: ["Delhi", "Pune", "Bengaluru", "Hyderabad"], a: 1, ex: "Pune, ICMR." },
      { q: "DRDO HQ:", opts: ["Mumbai", "Delhi", "Bengaluru", "Hyderabad"], a: 1, ex: "Delhi." },
      { q: "TIFR is in:", opts: ["Mumbai", "Pune", "Delhi", "Bengaluru"], a: 0, ex: "Mumbai." },
      { q: "IISc is in:", opts: ["Mumbai", "Bengaluru", "Delhi", "Hyderabad"], a: 1, ex: "Top science institute." },
      { q: "CFTRI is in:", opts: ["Mumbai", "Mysore", "Pune", "Hyderabad"], a: 1, ex: "Food tech research." },
      { q: "NIMHANS is in:", opts: ["Delhi", "Bengaluru", "Mumbai", "Chennai"], a: 1, ex: "Mental health." },
      { q: "IUCAA is in:", opts: ["Pune", "Mumbai", "Delhi", "Bengaluru"], a: 0, ex: "Astronomy and Astrophysics." },
      { q: "ISI is in:", opts: ["Delhi", "Kolkata", "Mumbai", "Hyderabad"], a: 1, ex: "Indian Statistical Institute." },
      { q: "Master Control Facility (ISRO):", opts: ["Hassan", "Sriharikota", "Trivandrum", "Bengaluru"], a: 0, ex: "Karnataka." },
      { q: "IGCAR is in:", opts: ["Trombay", "Kalpakkam", "Hyderabad", "Mumbai"], a: 1, ex: "Tamil Nadu." },
      { q: "NEERI is in:", opts: ["Nagpur", "Pune", "Mumbai", "Delhi"], a: 0, ex: "Environmental research." },
      { q: "CMFRI is in:", opts: ["Mumbai", "Cochin", "Chennai", "Goa"], a: 1, ex: "Marine fisheries." },
      { q: "JIPMER is in:", opts: ["Puducherry", "Delhi", "Mumbai", "Chennai"], a: 0, ex: "Medical." },
      { q: "NCL is in:", opts: ["Pune", "Mumbai", "Delhi", "Hyderabad"], a: 0, ex: "National Chemical Lab." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 17. PRINCIPAL LANGUAGES OF INDIA
  // ───────────────────────────────────────────────────────────────
  T["sgk-languages"] = {
    body: `
      <h2>Principal Languages of India</h2>

      <h3>1. The 22 Scheduled Languages (8th Schedule of Constitution)</h3>
      <ol>
        <li>Assamese</li>
        <li>Bengali</li>
        <li>Bodo</li>
        <li>Dogri</li>
        <li>Gujarati</li>
        <li>Hindi</li>
        <li>Kannada</li>
        <li>Kashmiri</li>
        <li>Konkani</li>
        <li>Maithili</li>
        <li>Malayalam</li>
        <li>Manipuri (Meitei)</li>
        <li>Marathi</li>
        <li>Nepali</li>
        <li>Odia</li>
        <li>Punjabi</li>
        <li>Sanskrit</li>
        <li>Santali</li>
        <li>Sindhi</li>
        <li>Tamil</li>
        <li>Telugu</li>
        <li>Urdu</li>
      </ol>

      <h3>2. Classical Languages (currently 6)</h3>
      <ul>
        <li>Tamil (declared 2004).</li>
        <li>Sanskrit (2005).</li>
        <li>Telugu (2008).</li>
        <li>Kannada (2008).</li>
        <li>Malayalam (2013).</li>
        <li>Odia (2014).</li>
      </ul>
      <p>Criteria: high antiquity (1,500-2,000 years), original literary tradition, independent linguistic body.</p>

      <h3>3. Most Spoken Languages</h3>
      <table>
        <tr><th>Rank</th><th>Language</th><th>Speakers (approx)</th></tr>
        <tr><td>1</td><td>Hindi</td><td>~528 million</td></tr>
        <tr><td>2</td><td>Bengali</td><td>~97 million</td></tr>
        <tr><td>3</td><td>Marathi</td><td>~83 million</td></tr>
        <tr><td>4</td><td>Telugu</td><td>~81 million</td></tr>
        <tr><td>5</td><td>Tamil</td><td>~69 million</td></tr>
        <tr><td>6</td><td>Gujarati</td><td>~55 million</td></tr>
        <tr><td>7</td><td>Urdu</td><td>~51 million</td></tr>
        <tr><td>8</td><td>Kannada</td><td>~44 million</td></tr>
        <tr><td>9</td><td>Odia</td><td>~38 million</td></tr>
        <tr><td>10</td><td>Malayalam</td><td>~35 million</td></tr>
      </table>

      <h3>4. Official Languages</h3>
      <ul>
        <li>Official languages of Union of India: <b>Hindi (Devanagari script)</b> and <b>English</b>.</li>
        <li>Each state has its own official language(s).</li>
      </ul>

      <h3>5. State Official Languages (Major)</h3>
      <table>
        <tr><th>State</th><th>Official Language</th></tr>
        <tr><td>UP, Bihar, MP, Rajasthan, Haryana, Uttarakhand, HP, Jharkhand, Chhattisgarh, Delhi</td><td>Hindi</td></tr>
        <tr><td>West Bengal</td><td>Bengali</td></tr>
        <tr><td>Maharashtra</td><td>Marathi</td></tr>
        <tr><td>Andhra Pradesh, Telangana</td><td>Telugu</td></tr>
        <tr><td>Tamil Nadu, Puducherry</td><td>Tamil</td></tr>
        <tr><td>Karnataka</td><td>Kannada</td></tr>
        <tr><td>Kerala</td><td>Malayalam</td></tr>
        <tr><td>Odisha</td><td>Odia</td></tr>
        <tr><td>Gujarat</td><td>Gujarati</td></tr>
        <tr><td>Punjab</td><td>Punjabi</td></tr>
        <tr><td>Assam</td><td>Assamese</td></tr>
        <tr><td>Nagaland</td><td>English</td></tr>
        <tr><td>Sikkim</td><td>Nepali, Bhutia, Lepcha</td></tr>
        <tr><td>Goa</td><td>Konkani</td></tr>
        <tr><td>Manipur</td><td>Manipuri (Meitei)</td></tr>
        <tr><td>Mizoram</td><td>Mizo (Lushai)</td></tr>
        <tr><td>Arunachal Pradesh</td><td>English</td></tr>
        <tr><td>Meghalaya</td><td>English, Khasi, Garo</td></tr>
        <tr><td>Tripura</td><td>Bengali, Kokborok</td></tr>
        <tr><td>J&K</td><td>Hindi, Urdu, Kashmiri, Dogri, English</td></tr>
        <tr><td>Ladakh</td><td>Hindi, English</td></tr>
      </table>

      <h3>6. Language Family</h3>
      <ul>
        <li><b>Indo-Aryan family</b>: Hindi, Bengali, Marathi, Gujarati, Punjabi, Odia, Assamese, Urdu, Kashmiri, Sindhi, Sanskrit, Nepali, Konkani, Maithili, Dogri.</li>
        <li><b>Dravidian family</b>: Tamil, Telugu, Kannada, Malayalam.</li>
        <li><b>Tibeto-Burman</b>: Bodo, Manipuri.</li>
        <li><b>Austro-Asiatic</b>: Santali, Khasi.</li>
      </ul>

      <h3>7. Scripts</h3>
      <ul>
        <li>Devanagari: Hindi, Marathi, Sanskrit, Nepali, Konkani.</li>
        <li>Bengali script: Bengali, Assamese.</li>
        <li>Gurmukhi: Punjabi.</li>
        <li>Tamil script: Tamil.</li>
        <li>Telugu script: Telugu.</li>
        <li>Kannada script: Kannada.</li>
        <li>Malayalam script: Malayalam.</li>
        <li>Odia script: Odia.</li>
        <li>Gujarati script: Gujarati.</li>
        <li>Urdu script: Perso-Arabic (Nastaliq).</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>22 scheduled languages.</li>
        <li>6 classical languages (Tamil first, 2004).</li>
        <li>Hindi: most-spoken in India and 3rd most in world.</li>
        <li>Sanskrit: oldest classical.</li>
        <li>Santali added in 92nd Amendment.</li>
        <li>Sindhi: added in 21st Amendment (1967).</li>
        <li>Konkani, Manipuri, Nepali: added in 71st Amendment (1992).</li>
        <li>Bodo, Dogri, Maithili, Santali: 92nd (2003).</li>
      </ul>
    `,
    mcq: [
      { q: "Number of scheduled languages:", opts: ["18", "20", "22", "24"], a: 2, ex: "22 in 8th Schedule." },
      { q: "1st classical language declared:", opts: ["Sanskrit", "Tamil", "Telugu", "Kannada"], a: 1, ex: "Tamil 2004." },
      { q: "Total classical languages:", opts: ["4", "5", "6", "7"], a: 2, ex: "6 currently." },
      { q: "Most spoken Indian language:", opts: ["Bengali", "Hindi", "Tamil", "Marathi"], a: 1, ex: "Hindi." },
      { q: "Official languages of Union:", opts: ["Hindi", "English", "Both A and B", "Sanskrit"], a: 2, ex: "Hindi + English." },
      { q: "Official language of Goa:", opts: ["Konkani", "Marathi", "Portuguese", "Gujarati"], a: 0, ex: "Konkani." },
      { q: "Official language of Sikkim:", opts: ["Hindi", "Nepali", "Bengali", "Bhutia"], a: 1, ex: "Plus Bhutia, Lepcha." },
      { q: "Bengali script also used for:", opts: ["Assamese", "Odia", "Urdu", "Punjabi"], a: 0, ex: "Assamese." },
      { q: "Gurmukhi script for:", opts: ["Tamil", "Punjabi", "Kashmiri", "Sindhi"], a: 1, ex: "Punjabi." },
      { q: "Dravidian language:", opts: ["Hindi", "Bengali", "Telugu", "Marathi"], a: 2, ex: "Tamil/Telugu/Kannada/Malayalam." },
      { q: "Sindhi added in 8th Schedule by:", opts: ["21st Amendment", "71st", "92nd", "100th"], a: 0, ex: "1967." },
      { q: "Konkani added by:", opts: ["21st", "71st", "92nd", "44th"], a: 1, ex: "1992." },
      { q: "Santali added by:", opts: ["21st", "71st", "92nd", "44th"], a: 2, ex: "2003." },
      { q: "Devanagari script for:", opts: ["Hindi", "Sanskrit", "Marathi", "All correct"], a: 3, ex: "Multiple languages." },
      { q: "Urdu script:", opts: ["Devanagari", "Perso-Arabic", "Roman", "Bengali"], a: 1, ex: "Nastaliq." },
      { q: "Bodo language belongs to:", opts: ["Indo-Aryan", "Dravidian", "Tibeto-Burman", "Austro-Asiatic"], a: 2, ex: "Tibeto-Burman." },
      { q: "Manipuri official language of:", opts: ["Manipur", "Mizoram", "Tripura", "Nagaland"], a: 0, ex: "Meitei." },
      { q: "Nagaland's official language:", opts: ["Naga", "English", "Hindi", "Manipuri"], a: 1, ex: "English." },
      { q: "Tamil declared classical in:", opts: ["2000", "2004", "2008", "2014"], a: 1, ex: "2004." },
      { q: "Odia declared classical in:", opts: ["2008", "2013", "2014", "2016"], a: 2, ex: "2014." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 18. FAMOUS TOURIST PLACES OF INDIA
  // ───────────────────────────────────────────────────────────────
  T["sgk-tourist-places"] = {
    body: `
      <h2>Famous Tourist Places of India</h2>

      <h3>1. Heritage Sites (Monuments)</h3>
      <ul>
        <li><b>Taj Mahal</b>: Agra (Mughal mausoleum, UNESCO).</li>
        <li><b>Red Fort, India Gate, Qutub Minar, Humayun's Tomb, Jama Masjid, Lotus Temple, Akshardham</b>: Delhi.</li>
        <li><b>Fatehpur Sikri</b>: Akbar's capital.</li>
        <li><b>Hampi</b>: Karnataka — Vijayanagar ruins.</li>
        <li><b>Khajuraho</b>: Madhya Pradesh — temples.</li>
        <li><b>Sun Temple Konark</b>: Odisha.</li>
        <li><b>Ajanta and Ellora Caves</b>: Maharashtra.</li>
        <li><b>Hawa Mahal, City Palace, Amber Fort, Jantar Mantar</b>: Jaipur.</li>
        <li><b>Mehrangarh Fort</b>: Jodhpur.</li>
        <li><b>Lake Palace, City Palace</b>: Udaipur.</li>
        <li><b>Sanchi Stupa</b>: MP — Buddhist.</li>
        <li><b>Mahabodhi Temple</b>: Bodh Gaya.</li>
        <li><b>Nalanda</b>: Bihar.</li>
        <li><b>Sanchi, Bhimbetka</b>: MP.</li>
        <li><b>Charminar, Golconda Fort</b>: Hyderabad.</li>
        <li><b>Mysore Palace</b>: Karnataka.</li>
        <li><b>Gateway of India</b>: Mumbai.</li>
        <li><b>Victoria Memorial</b>: Kolkata.</li>
        <li><b>Golden Temple</b>: Amritsar.</li>
        <li><b>Cellular Jail</b>: Port Blair (Kala Pani).</li>
      </ul>

      <h3>2. Beaches</h3>
      <ul>
        <li>Goa beaches: Calangute, Anjuna, Baga, Palolem.</li>
        <li>Kerala: Kovalam, Varkala, Marari.</li>
        <li>Tamil Nadu: Marina (longest), Mahabalipuram, Kanyakumari.</li>
        <li>Andaman: Radhanagar (Asia's best), Havelock.</li>
        <li>Maharashtra: Alibaug, Tarkarli.</li>
        <li>Karnataka: Gokarna.</li>
        <li>Odisha: Puri.</li>
      </ul>

      <h3>3. Hill Stations</h3>
      <ul>
        <li><b>Shimla, Manali, Dharamshala, Dalhousie</b>: HP.</li>
        <li><b>Mussoorie, Nainital, Auli, Almora</b>: Uttarakhand.</li>
        <li><b>Darjeeling, Kalimpong</b>: WB.</li>
        <li><b>Gangtok</b>: Sikkim.</li>
        <li><b>Ooty, Kodaikanal</b>: TN.</li>
        <li><b>Munnar, Wayanad, Thekkady</b>: Kerala.</li>
        <li><b>Coorg, Chikmagalur</b>: Karnataka.</li>
        <li><b>Mahabaleshwar, Lonavala</b>: Maharashtra.</li>
        <li><b>Mt. Abu</b>: Rajasthan.</li>
        <li><b>Tawang, Bomdila</b>: Arunachal.</li>
        <li><b>Cherrapunji, Shillong</b>: Meghalaya.</li>
        <li><b>Pahalgam, Gulmarg, Sonamarg</b>: Kashmir.</li>
        <li><b>Leh, Nubra Valley</b>: Ladakh.</li>
      </ul>

      <h3>4. Religious / Pilgrim Sites</h3>
      <ul>
        <li><b>Char Dham</b> (Hindu): Badrinath (UK), Dwarka (Guj), Puri (Odisha), Rameshwaram (TN).</li>
        <li><b>Char Dham Uttarakhand</b>: Yamunotri, Gangotri, Kedarnath, Badrinath.</li>
        <li><b>Kashi (Varanasi)</b>: oldest living city; Vishwanath Temple.</li>
        <li><b>Mathura, Vrindavan</b>: Krishna birthplace.</li>
        <li><b>Ayodhya</b>: Ram Janmabhoomi.</li>
        <li><b>Tirupati</b>: AP, Venkateswara.</li>
        <li><b>Vaishno Devi</b>: J&K.</li>
        <li><b>Shirdi, Shani Shingnapur</b>: Maharashtra.</li>
        <li><b>Haridwar, Rishikesh</b>: Ganga.</li>
        <li><b>Amarnath, Vaishno Devi</b>: J&K.</li>
        <li><b>Bodh Gaya, Sarnath, Kushinagar, Lumbini</b>: Buddhist sites.</li>
        <li><b>Golden Temple</b>: Amritsar.</li>
        <li><b>Velankanni</b>: TN (Christian).</li>
        <li><b>Ajmer Sharif</b>: Rajasthan (Sufi shrine).</li>
        <li><b>Sabarimala</b>: Kerala (Ayyappa).</li>
      </ul>

      <h3>5. Natural Wonders</h3>
      <ul>
        <li>Backwaters: Kerala (Alleppey, Kumarakom).</li>
        <li>Valley of Flowers: UK.</li>
        <li>Khajjiar: "mini Switzerland".</li>
        <li>Lonar Lake: Maharashtra (meteor crater).</li>
        <li>Living Root Bridges: Meghalaya.</li>
        <li>Rann of Kutch: Gujarat.</li>
        <li>Loktak Lake: Manipur.</li>
        <li>Dudhsagar Falls: Goa.</li>
        <li>Nohkalikai Falls: Meghalaya.</li>
        <li>Jog Falls: Karnataka.</li>
      </ul>

      <h3>6. Wildlife Sanctuaries / National Parks</h3>
      <ul>
        <li>Jim Corbett (UK), Ranthambore (RJ), Kanha + Bandhavgarh (MP) — Tiger reserves.</li>
        <li>Kaziranga (Assam) — Rhinos.</li>
        <li>Gir (Gujarat) — Asiatic lions.</li>
        <li>Sundarbans (WB) — Mangrove + tigers.</li>
        <li>Periyar (Kerala) — Elephants.</li>
        <li>Bandipur (Karnataka) — Tigers.</li>
        <li>Manas (Assam).</li>
        <li>Nanda Devi, Valley of Flowers (UK).</li>
        <li>Hemis (Ladakh) — largest park.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Char Dham of India: Badrinath, Dwarka, Puri, Rameshwaram.</li>
        <li>Kerala backwaters: Alleppey.</li>
        <li>"Mini Switzerland": Khajjiar (HP).</li>
        <li>Gir: only Asiatic lion habitat.</li>
        <li>Kaziranga: one-horned rhino.</li>
        <li>Cellular Jail: Andaman.</li>
        <li>Charminar: Hyderabad.</li>
        <li>Gateway of India: Mumbai.</li>
        <li>Victoria Memorial: Kolkata.</li>
      </ul>
    `,
    mcq: [
      { q: "Taj Mahal in:", opts: ["Delhi", "Agra", "Jaipur", "Lucknow"], a: 1, ex: "UP." },
      { q: "Gateway of India in:", opts: ["Delhi", "Mumbai", "Goa", "Chennai"], a: 1, ex: "Mumbai." },
      { q: "Charminar in:", opts: ["Hyderabad", "Mysore", "Bengaluru", "Chennai"], a: 0, ex: "Hyderabad." },
      { q: "Hampi in:", opts: ["Karnataka", "AP", "TN", "Kerala"], a: 0, ex: "Vijayanagar." },
      { q: "Khajjiar called:", opts: ["Mini Switzerland", "Heaven", "Paradise", "Hill Queen"], a: 0, ex: "HP." },
      { q: "Backwaters in:", opts: ["Karnataka", "Goa", "Kerala", "TN"], a: 2, ex: "Alleppey, Kumarakom." },
      { q: "Gir National Park famous for:", opts: ["Tiger", "Asiatic lion", "Rhino", "Elephant"], a: 1, ex: "Only Asiatic lions in world." },
      { q: "Cellular Jail in:", opts: ["Andaman", "Lakshadweep", "Goa", "Daman"], a: 0, ex: "Port Blair." },
      { q: "Char Dham includes:", opts: ["Badrinath", "Dwarka", "Puri, Rameshwaram", "All correct"], a: 3, ex: "4 Hindu sites." },
      { q: "Ajmer Sharif:", opts: ["Hindu", "Muslim Sufi shrine", "Sikh", "Christian"], a: 1, ex: "Khwaja Moinuddin Chishti." },
      { q: "Rann of Kutch in:", opts: ["Gujarat", "Rajasthan", "MP", "Maharashtra"], a: 0, ex: "Salt desert." },
      { q: "Mahabalipuram in:", opts: ["Karnataka", "TN", "Kerala", "AP"], a: 1, ex: "Tamil Nadu, near Chennai." },
      { q: "Sun Temple Konark in:", opts: ["WB", "Odisha", "Bihar", "Jharkhand"], a: 1, ex: "Odisha." },
      { q: "Ranthambore famous for:", opts: ["Lion", "Tiger", "Elephant", "Rhino"], a: 1, ex: "Tiger reserve, RJ." },
      { q: "Hawa Mahal in:", opts: ["Jaipur", "Udaipur", "Jodhpur", "Agra"], a: 0, ex: "Jaipur palace of winds." },
      { q: "Marina Beach in:", opts: ["Mumbai", "Goa", "Chennai", "Kerala"], a: 2, ex: "Longest in India." },
      { q: "Loktak Lake in:", opts: ["Manipur", "Assam", "Sikkim", "Meghalaya"], a: 0, ex: "Floating Phumdi." },
      { q: "Ooty hill station in:", opts: ["Karnataka", "Kerala", "TN", "AP"], a: 2, ex: "Nilgiri." },
      { q: "Lake Palace in:", opts: ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"], a: 1, ex: "Udaipur." },
      { q: "Living root bridges in:", opts: ["Assam", "Meghalaya", "Mizoram", "Nagaland"], a: 1, ex: "Cherrapunji area." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 19. INDIAN ART, DANCE & CULTURE
  // ───────────────────────────────────────────────────────────────
  T["sgk-art-culture"] = {
    body: `
      <h2>Indian Art, Dance & Culture</h2>

      <h3>1. Classical Dance Forms of India</h3>
      <p>Officially 8 classical dances recognized by Sangeet Natak Akademi:</p>
      <table>
        <tr><th>Dance</th><th>State</th><th>Highlights</th></tr>
        <tr><td><b>Bharatanatyam</b></td><td>Tamil Nadu</td><td>Oldest; based on Natya Shastra</td></tr>
        <tr><td><b>Kathak</b></td><td>UP, North India</td><td>Storytelling, fast spins</td></tr>
        <tr><td><b>Kathakali</b></td><td>Kerala</td><td>Elaborate makeup, mime, costumes</td></tr>
        <tr><td><b>Kuchipudi</b></td><td>Andhra Pradesh</td><td>Devotional, narrative</td></tr>
        <tr><td><b>Odissi</b></td><td>Odisha</td><td>Tribhanga (3-bend) posture</td></tr>
        <tr><td><b>Manipuri</b></td><td>Manipur</td><td>Graceful, Vaishnavite themes</td></tr>
        <tr><td><b>Mohiniyattam</b></td><td>Kerala</td><td>Female solo, "enchantress dance"</td></tr>
        <tr><td><b>Sattriya</b></td><td>Assam</td><td>Vaishnavite, Sankardev's tradition</td></tr>
      </table>

      <h3>2. Folk Dances of India (by state)</h3>
      <table>
        <tr><th>State</th><th>Folk Dances</th></tr>
        <tr><td>Punjab</td><td>Bhangra, Giddha</td></tr>
        <tr><td>Haryana</td><td>Jhumar, Phag</td></tr>
        <tr><td>Rajasthan</td><td>Ghoomar, Kalbeliya, Bhavai</td></tr>
        <tr><td>Gujarat</td><td>Garba, Dandiya, Raas</td></tr>
        <tr><td>Maharashtra</td><td>Lavani, Tamasha</td></tr>
        <tr><td>Goa</td><td>Dekhni, Fugdi</td></tr>
        <tr><td>UP</td><td>Raslila, Charkula, Nautanki</td></tr>
        <tr><td>MP</td><td>Tertali, Maanch</td></tr>
        <tr><td>Bihar</td><td>Jat-Jatin, Jhijhian</td></tr>
        <tr><td>Jharkhand</td><td>Chhau, Karma</td></tr>
        <tr><td>Bengal</td><td>Baul, Jhumar, Chhau</td></tr>
        <tr><td>Odisha</td><td>Gotipua, Chhau</td></tr>
        <tr><td>Assam</td><td>Bihu</td></tr>
        <tr><td>Nagaland</td><td>Chang Lo</td></tr>
        <tr><td>Manipur</td><td>Pung Cholom, Thang Ta</td></tr>
        <tr><td>Karnataka</td><td>Yakshagana, Dollu Kunitha</td></tr>
        <tr><td>Kerala</td><td>Theyyam, Padayani</td></tr>
        <tr><td>Tamil Nadu</td><td>Kummi, Karagattam</td></tr>
        <tr><td>Andhra/Telangana</td><td>Kolattam, Perini</td></tr>
        <tr><td>Sikkim</td><td>Singhi Chham</td></tr>
        <tr><td>Arunachal</td><td>Aji Lhamu, Khampti</td></tr>
        <tr><td>Mizoram</td><td>Cheraw (Bamboo dance)</td></tr>
        <tr><td>Meghalaya</td><td>Wangala</td></tr>
        <tr><td>Tripura</td><td>Hojagiri</td></tr>
        <tr><td>HP</td><td>Nati</td></tr>
        <tr><td>J&K</td><td>Rouf, Dumhal</td></tr>
        <tr><td>Ladakh</td><td>Cham (mask dance)</td></tr>
      </table>

      <h3>3. Classical Music</h3>
      <ul>
        <li><b>Hindustani classical</b> (North): Bhimsen Joshi, Bismillah Khan, Ravi Shankar, Zakir Hussain, Hariprasad Chaurasia, Pt. Jasraj, Ustad Amjad Ali Khan.</li>
        <li><b>Carnatic classical</b> (South): M.S. Subbulakshmi, Mandolin Srinivas, Lalgudi Jayaraman, Balamurali Krishna.</li>
        <li>Father of music: Tansen (Hindustani).</li>
        <li>Trinity of Carnatic music: Tyagaraja, Muthuswami Dikshitar, Syama Sastri.</li>
      </ul>

      <h3>4. Instruments</h3>
      <ul>
        <li>Sitar: Ravi Shankar.</li>
        <li>Sarod: Amjad Ali Khan, Ali Akbar Khan.</li>
        <li>Shehnai: Bismillah Khan.</li>
        <li>Tabla: Zakir Hussain, Alla Rakha.</li>
        <li>Flute (Bansuri): Hariprasad Chaurasia.</li>
        <li>Santoor: Shivkumar Sharma.</li>
        <li>Mridangam: Palghat Mani Iyer.</li>
        <li>Veena: Various Carnatic players.</li>
        <li>Violin: L. Subramaniam, Lalgudi Jayaraman.</li>
      </ul>

      <h3>5. Paintings & Schools</h3>
      <ul>
        <li><b>Madhubani</b>: Bihar.</li>
        <li><b>Warli</b>: Maharashtra (tribal).</li>
        <li><b>Kalighat</b>: West Bengal.</li>
        <li><b>Tanjore</b>: Tamil Nadu (gold-leaf).</li>
        <li><b>Mysore</b>: Karnataka.</li>
        <li><b>Pattachitra</b>: Odisha.</li>
        <li><b>Kalamkari</b>: AP.</li>
        <li><b>Kerala Mural</b>: Kerala.</li>
        <li><b>Phad</b>: Rajasthan.</li>
        <li><b>Pithora</b>: Gujarat tribal.</li>
        <li><b>Pichwai</b>: Rajasthan (Krishna).</li>
        <li><b>Gond</b>: MP tribal.</li>
      </ul>

      <h3>6. Festivals</h3>
      <ul>
        <li>Diwali, Holi, Dussehra, Navratri, Janmashtami, Raksha Bandhan.</li>
        <li>Eid al-Fitr, Eid al-Adha, Muharram.</li>
        <li>Christmas, Good Friday.</li>
        <li>Guru Nanak Jayanti, Baisakhi.</li>
        <li>Pongal (TN), Onam (Kerala), Bihu (Assam), Vishu (Kerala).</li>
        <li>Durga Puja (WB), Ganesh Chaturthi (Maharashtra), Lohri (Punjab).</li>
        <li>Chhath Puja (Bihar), Hornbill (Nagaland), Pushkar Fair (RJ).</li>
        <li>Kumbh Mela: largest gathering (Haridwar, Allahabad, Nashik, Ujjain).</li>
      </ul>

      <h3>7. Major Awards</h3>
      <ul>
        <li>Sangeet Natak Akademi: classical music/dance/drama.</li>
        <li>Sahitya Akademi: literature.</li>
        <li>Jnanpith: highest literary award.</li>
        <li>Bharat Ratna: highest civilian.</li>
        <li>Padma Vibhushan, Padma Bhushan, Padma Shri.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>8 classical dances.</li>
        <li>Bharatanatyam: TN (oldest).</li>
        <li>Kathakali: Kerala (makeup-mime).</li>
        <li>Garba: Gujarat.</li>
        <li>Bhangra: Punjab.</li>
        <li>Bihu: Assam.</li>
        <li>Sattriya: Assam (newest classical).</li>
        <li>Tansen: father of Hindustani music.</li>
        <li>Madhubani: Bihar.</li>
        <li>Warli: Maharashtra tribal.</li>
      </ul>
    `,
    mcq: [
      { q: "Bharatanatyam from:", opts: ["TN", "Kerala", "AP", "Karnataka"], a: 0, ex: "Tamil Nadu." },
      { q: "Kathakali from:", opts: ["TN", "Kerala", "Karnataka", "AP"], a: 1, ex: "Kerala." },
      { q: "Kathak from:", opts: ["UP, North", "TN", "Kerala", "Karnataka"], a: 0, ex: "North India." },
      { q: "Odissi from:", opts: ["Odisha", "WB", "Bihar", "Assam"], a: 0, ex: "Odisha." },
      { q: "Sattriya from:", opts: ["Sikkim", "Assam", "Mizoram", "Nagaland"], a: 1, ex: "Assam." },
      { q: "Mohiniyattam from:", opts: ["Kerala", "TN", "Karnataka", "AP"], a: 0, ex: "Kerala." },
      { q: "Bhangra is from:", opts: ["Punjab", "Haryana", "Rajasthan", "UP"], a: 0, ex: "Punjab folk." },
      { q: "Garba from:", opts: ["Rajasthan", "Gujarat", "Maharashtra", "Goa"], a: 1, ex: "Navratri dance." },
      { q: "Bihu is festival/dance of:", opts: ["WB", "Assam", "Manipur", "Odisha"], a: 1, ex: "Assam." },
      { q: "Madhubani painting from:", opts: ["Bihar", "Bengal", "Odisha", "AP"], a: 0, ex: "Mithila region." },
      { q: "Warli painting from:", opts: ["Gujarat", "Maharashtra", "Rajasthan", "Goa"], a: 1, ex: "Tribal." },
      { q: "Tanjore painting from:", opts: ["TN", "Karnataka", "Kerala", "AP"], a: 0, ex: "Tamil Nadu." },
      { q: "Shehnai virtuoso:", opts: ["Ravi Shankar", "Bismillah Khan", "Amjad Ali", "Zakir Hussain"], a: 1, ex: "Bismillah Khan." },
      { q: "Sitar maestro:", opts: ["Ravi Shankar", "Amjad Ali", "Zakir Hussain", "Hariprasad"], a: 0, ex: "Pandit Ravi Shankar." },
      { q: "Tabla maestro:", opts: ["Ravi Shankar", "Zakir Hussain", "Hari Prasad", "Bismillah"], a: 1, ex: "Zakir Hussain." },
      { q: "Bamboo dance (Cheraw) from:", opts: ["Manipur", "Mizoram", "Tripura", "Assam"], a: 1, ex: "Mizoram." },
      { q: "Yakshagana from:", opts: ["Karnataka", "AP", "TN", "Kerala"], a: 0, ex: "Karnataka." },
      { q: "Kumbh Mela held at how many places:", opts: ["2", "3", "4", "5"], a: 2, ex: "Haridwar, Allahabad, Nashik, Ujjain." },
      { q: "Father of Hindustani music:", opts: ["Tansen", "Tyagaraja", "Tukaram", "Tulsidas"], a: 0, ex: "Tansen." },
      { q: "Kalbeliya dance from:", opts: ["Gujarat", "Rajasthan", "Punjab", "MP"], a: 1, ex: "Rajasthan." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 20. INDIAN DEFENCE FORCES
  // ───────────────────────────────────────────────────────────────
  T["sgk-defence"] = {
    body: `
      <h2>Indian Defence Forces</h2>

      <h3>1. Three Services</h3>
      <ul>
        <li><b>Indian Army</b>: largest land army.</li>
        <li><b>Indian Navy</b>: maritime defence.</li>
        <li><b>Indian Air Force (IAF)</b>: aerial defence.</li>
      </ul>

      <h3>2. Chiefs (Current Heads)</h3>
      <ul>
        <li>Supreme Commander: <b>President of India</b>.</li>
        <li><b>CDS</b> (Chief of Defence Staff): inter-services head; 1st CDS = General Bipin Rawat (2019); current = Gen. Anil Chauhan.</li>
        <li><b>COAS</b> (Chief of Army Staff): General.</li>
        <li><b>CNS</b> (Chief of Naval Staff): Admiral.</li>
        <li><b>CAS</b> (Chief of Air Staff): Air Chief Marshal.</li>
      </ul>

      <h3>3. Indian Army</h3>
      <ul>
        <li>Founded: 1 April 1895 (as British Indian Army).</li>
        <li>HQ: New Delhi.</li>
        <li>Ranks: General (highest), Lt. Gen., Maj. Gen., Brigadier, Colonel, Lt. Colonel, Major, Captain, Lieutenant.</li>
        <li>7 Commands: Northern, Western, South-Western, Southern, Central, Eastern, Training (Shimla).</li>
        <li>Field Marshals (only 2 in history): Sam Manekshaw, K.M. Cariappa.</li>
        <li>Highest gallantry award: Param Vir Chakra (PVC).</li>
        <li>Day: <b>15 January</b> (Army Day).</li>
      </ul>

      <h3>4. Indian Navy</h3>
      <ul>
        <li>Founded: 1612 (Royal Indian Navy); rechristened 1950.</li>
        <li>HQ: New Delhi.</li>
        <li>Ranks: Admiral of the Fleet (only 1, Marshal-level), Admiral, Vice-Admiral, Rear Admiral, Commodore, Captain, Commander.</li>
        <li>Major bases: Mumbai, Visakhapatnam, Karwar, Kochi, Port Blair.</li>
        <li>Aircraft Carriers: INS Vikramaditya, INS Vikrant (indigenous).</li>
        <li>Submarines: INS Arihant (nuclear).</li>
        <li>Day: <b>4 December</b> (Navy Day; commemorates 1971 Karachi attack).</li>
      </ul>

      <h3>5. Indian Air Force</h3>
      <ul>
        <li>Founded: 8 October 1932.</li>
        <li>HQ: New Delhi.</li>
        <li>Ranks: Marshal of the Air Force (only 1, Arjan Singh), Air Chief Marshal, Air Marshal, Air Vice Marshal, Air Commodore, Group Captain, Wing Commander, Squadron Leader, Flight Lieutenant, Flying Officer.</li>
        <li>Major aircraft: Rafale, Sukhoi Su-30MKI, MiG-29, Tejas (indigenous).</li>
        <li>Day: <b>8 October</b> (Air Force Day).</li>
      </ul>

      <h3>6. Paramilitary Forces</h3>
      <ul>
        <li><b>CRPF</b> (Central Reserve Police Force): internal security, anti-insurgency.</li>
        <li><b>BSF</b> (Border Security Force): borders with Pak, Bangladesh.</li>
        <li><b>CISF</b> (Central Industrial Security): infrastructure/airports.</li>
        <li><b>ITBP</b> (Indo-Tibetan Border Police): China border.</li>
        <li><b>SSB</b> (Sashastra Seema Bal): Nepal, Bhutan borders.</li>
        <li><b>NSG</b> (National Security Guard, "Black Cats"): counter-terrorism, VIP protection.</li>
        <li><b>SPG</b> (Special Protection Group): PM and family.</li>
        <li><b>Coast Guard</b>: maritime law enforcement.</li>
        <li><b>Assam Rifles</b>: oldest paramilitary (1835); NE.</li>
        <li><b>RAF</b> (Rapid Action Force): part of CRPF, riot control.</li>
      </ul>

      <h3>7. Gallantry Awards</h3>
      <table>
        <tr><th>Award</th><th>For</th></tr>
        <tr><td>Param Vir Chakra (PVC)</td><td>Highest war-time gallantry</td></tr>
        <tr><td>Maha Vir Chakra</td><td>2nd highest war</td></tr>
        <tr><td>Vir Chakra</td><td>3rd highest war</td></tr>
        <tr><td>Ashoka Chakra</td><td>Highest peacetime gallantry</td></tr>
        <tr><td>Kirti Chakra</td><td>2nd peacetime</td></tr>
        <tr><td>Shaurya Chakra</td><td>3rd peacetime</td></tr>
      </table>
      <p>First PVC: Major Somnath Sharma (posthumous, 1947, Kashmir).</p>

      <h3>8. Wars Fought by India</h3>
      <ul>
        <li>1947-48: Kashmir war (Pakistan).</li>
        <li>1962: China war (Sino-Indian).</li>
        <li>1965: Pakistan war.</li>
        <li>1971: Bangladesh Liberation (Pakistan); creation of Bangladesh.</li>
        <li>1999: Kargil War (Pakistan); Operation Vijay.</li>
      </ul>

      <h3>9. Important Military Operations</h3>
      <ul>
        <li>Op Blue Star (1984): Golden Temple.</li>
        <li>Op Vijay (1999): Kargil.</li>
        <li>Op Cactus (1988): Maldives.</li>
        <li>Op Brasstacks (1986-87): military exercise.</li>
        <li>Op Pawan (1987): Sri Lanka IPKF.</li>
        <li>Op All Out: Kashmir.</li>
        <li>Surgical Strikes (2016): Uri response.</li>
        <li>Balakot Strike (2019): Pulwama response.</li>
      </ul>

      <h3>10. Military Academies / Training</h3>
      <ul>
        <li><b>NDA</b> (National Defence Academy): Khadakwasla, Pune.</li>
        <li><b>IMA</b> (Indian Military Academy): Dehradun.</li>
        <li><b>OTA</b> (Officers Training Academy): Chennai.</li>
        <li><b>INA</b> (Indian Naval Academy): Ezhimala, Kerala.</li>
        <li><b>AFA</b> (Air Force Academy): Hyderabad (Dundigal).</li>
        <li><b>DSSC</b> (Defence Services Staff College): Wellington (TN).</li>
        <li><b>RIMC</b> (Rashtriya Indian Military College): Dehradun.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Supreme Commander: President.</li>
        <li>1st CDS: Bipin Rawat.</li>
        <li>1st Field Marshal: Manekshaw.</li>
        <li>NDA: Pune; IMA: Dehradun.</li>
        <li>Army Day: 15 Jan; Navy Day: 4 Dec; AF Day: 8 Oct.</li>
        <li>Highest war award: PVC.</li>
        <li>Highest peace award: Ashoka Chakra.</li>
        <li>INS Vikrant: indigenous aircraft carrier.</li>
        <li>Assam Rifles: oldest paramilitary.</li>
        <li>NSG: Black Cats.</li>
      </ul>
    `,
    mcq: [
      { q: "Supreme Commander of armed forces:", opts: ["PM", "President", "Defence Minister", "CDS"], a: 1, ex: "President." },
      { q: "1st CDS:", opts: ["Manekshaw", "Bipin Rawat", "Naravane", "Chauhan"], a: 1, ex: "2019." },
      { q: "Highest war-time gallantry:", opts: ["MVC", "Kirti Chakra", "PVC", "Vir Chakra"], a: 2, ex: "Param Vir Chakra." },
      { q: "Highest peace-time gallantry:", opts: ["PVC", "Ashoka Chakra", "Vir Chakra", "Padma Shri"], a: 1, ex: "Ashoka Chakra." },
      { q: "NDA is in:", opts: ["Dehradun", "Khadakwasla (Pune)", "Hyderabad", "Chennai"], a: 1, ex: "Pune." },
      { q: "IMA in:", opts: ["Dehradun", "Pune", "Delhi", "Hyderabad"], a: 0, ex: "Dehradun." },
      { q: "Air Force Academy at:", opts: ["Pune", "Bangalore", "Hyderabad", "Delhi"], a: 2, ex: "Dundigal, Hyderabad." },
      { q: "Indian Naval Academy at:", opts: ["Kochi", "Ezhimala", "Vizag", "Mumbai"], a: 1, ex: "Kerala." },
      { q: "Army Day:", opts: ["15 Jan", "4 Dec", "8 Oct", "26 Jan"], a: 0, ex: "Jan 15." },
      { q: "Navy Day:", opts: ["15 Jan", "4 Dec", "8 Oct", "1 Apr"], a: 1, ex: "Dec 4." },
      { q: "Air Force Day:", opts: ["15 Jan", "4 Dec", "8 Oct", "26 Jan"], a: 2, ex: "Oct 8." },
      { q: "First Field Marshal:", opts: ["Cariappa", "Manekshaw", "Karpoori", "Rawat"], a: 1, ex: "Sam Manekshaw 1973." },
      { q: "1st PVC awardee:", opts: ["Major Sharma", "Karam Singh", "Yadav", "Vikram Batra"], a: 0, ex: "Somnath Sharma, 1947." },
      { q: "Kargil war year:", opts: ["1995", "1999", "2001", "2003"], a: 1, ex: "Op Vijay." },
      { q: "Bangladesh war:", opts: ["1962", "1965", "1971", "1999"], a: 2, ex: "1971 creation of Bangladesh." },
      { q: "China war:", opts: ["1962", "1965", "1971", "1999"], a: 0, ex: "Sino-Indian." },
      { q: "BSF guards:", opts: ["China", "Pakistan/Bangladesh borders", "Nepal", "Inside"], a: 1, ex: "Border Security Force." },
      { q: "ITBP guards:", opts: ["Pakistan", "China (Tibet)", "Nepal", "Bangladesh"], a: 1, ex: "Indo-Tibetan." },
      { q: "Black Cats:", opts: ["CRPF", "BSF", "NSG", "ITBP"], a: 2, ex: "National Security Guard." },
      { q: "Oldest paramilitary:", opts: ["BSF", "CRPF", "Assam Rifles", "NSG"], a: 2, ex: "1835." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 21. INDIA'S ATOMIC RESEARCH
  // ───────────────────────────────────────────────────────────────
  T["sgk-atomic-research"] = {
    body: `
      <h2>India's Atomic Research</h2>

      <h3>1. Department of Atomic Energy (DAE)</h3>
      <ul>
        <li>Established: 1954.</li>
        <li>Reports directly to PM.</li>
        <li>Headquartered in Mumbai.</li>
        <li>Father of Indian Nuclear Programme: <b>Dr. Homi Jehangir Bhabha</b>.</li>
      </ul>

      <h3>2. Major Atomic Research Institutions</h3>
      <ul>
        <li><b>BARC</b> (Bhabha Atomic Research Centre): Trombay, Mumbai. Established 1954 as AEET, renamed 1967.</li>
        <li><b>IGCAR</b> (Indira Gandhi Centre for Atomic Research): Kalpakkam, TN. Fast breeder reactor research.</li>
        <li><b>RRCAT</b> (Raja Ramanna Centre for Advanced Technology): Indore.</li>
        <li><b>VECC</b> (Variable Energy Cyclotron Centre): Kolkata.</li>
        <li><b>AERB</b> (Atomic Energy Regulatory Board): Mumbai.</li>
        <li><b>NPCIL</b> (Nuclear Power Corporation of India Ltd.): Mumbai.</li>
        <li><b>UCIL</b> (Uranium Corporation of India): Jaduguda, Jharkhand.</li>
        <li><b>IREL</b> (Indian Rare Earths Ltd.): Mumbai (rare earth processing).</li>
        <li><b>HWB</b> (Heavy Water Board): Mumbai.</li>
        <li><b>TIFR</b> (Tata Institute of Fundamental Research): Mumbai.</li>
      </ul>

      <h3>3. Nuclear Power Plants in India</h3>
      <table>
        <tr><th>Power Plant</th><th>State</th><th>Year</th></tr>
        <tr><td>Tarapur</td><td>Maharashtra</td><td>1969 (1st)</td></tr>
        <tr><td>Rawatbhata</td><td>Rajasthan</td><td>1973</td></tr>
        <tr><td>Madras (Kalpakkam)</td><td>Tamil Nadu</td><td>1984</td></tr>
        <tr><td>Narora</td><td>UP</td><td>1991</td></tr>
        <tr><td>Kakrapar</td><td>Gujarat</td><td>1993</td></tr>
        <tr><td>Kaiga</td><td>Karnataka</td><td>2000</td></tr>
        <tr><td>Kudankulam</td><td>Tamil Nadu</td><td>2013 (Russian)</td></tr>
      </table>
      <p>Total installed nuclear capacity: ~6,780 MW (2023). 3-stage nuclear program planned.</p>

      <h3>4. India's Nuclear Tests</h3>
      <ul>
        <li><b>Pokhran-I (Smiling Buddha)</b>: 18 May 1974 — first nuclear test by India.</li>
        <li><b>Pokhran-II</b>: 11-13 May 1998 — 5 nuclear tests. Declared India a nuclear weapon state. <b>Operation Shakti</b>.</li>
        <li>Site: Pokhran, Rajasthan.</li>
        <li>India observes <b>National Technology Day on 11 May</b> commemorating 1998 test.</li>
      </ul>

      <h3>5. Three-Stage Nuclear Programme (by Homi Bhabha)</h3>
      <ol>
        <li>Stage 1: Pressurized Heavy Water Reactors (PHWR) using natural uranium.</li>
        <li>Stage 2: Fast Breeder Reactors using plutonium.</li>
        <li>Stage 3: Advanced reactors using thorium (India has world's largest thorium reserves).</li>
      </ol>

      <h3>6. Important Personalities</h3>
      <ul>
        <li><b>Homi Jehangir Bhabha</b>: father of Indian nuclear programme; died 1966.</li>
        <li><b>Vikram Sarabhai</b>: oversaw transition after Bhabha; also space.</li>
        <li><b>Raja Ramanna</b>: led Pokhran-I (1974).</li>
        <li><b>R. Chidambaram</b>: scientific lead Pokhran-II.</li>
        <li><b>Dr APJ Abdul Kalam</b>: missile man; supervised Pokhran-II.</li>
        <li><b>Anil Kakodkar</b>: BARC director, chairman AEC.</li>
        <li><b>Mahatma Gandhi</b> opposed atomic weapons.</li>
      </ul>

      <h3>7. India and Nuclear Treaties</h3>
      <ul>
        <li>India is NOT signatory to NPT (Non-Proliferation Treaty).</li>
        <li>India-US Civil Nuclear Agreement (2005, 123 Agreement).</li>
        <li>NSG (Nuclear Suppliers Group): India seeks membership.</li>
        <li>India committed to no-first-use policy.</li>
      </ul>

      <h3>8. Uranium and Thorium</h3>
      <ul>
        <li>Major uranium mine: <b>Jaduguda</b>, Jharkhand.</li>
        <li>Thorium: India has world's largest reserves (~25-30%) in Kerala beach sands (monazite).</li>
        <li>Tummalapalle (AP): largest uranium reserve in India.</li>
      </ul>

      <h3>9. Defence-Related Nuclear</h3>
      <ul>
        <li>India has nuclear triad: land (Agni missiles), air (fighter jets), sea (INS Arihant submarine).</li>
        <li>Agni-V: range >5,000 km, ICBM.</li>
        <li>BrahMos: supersonic cruise missile (with Russia).</li>
        <li>Prithvi missile series.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Father of Indian nuclear programme: Homi Bhabha.</li>
        <li>Pokhran-I: 1974.</li>
        <li>Pokhran-II: 1998 (Operation Shakti).</li>
        <li>National Technology Day: 11 May.</li>
        <li>1st nuclear plant: Tarapur (1969).</li>
        <li>India NOT signatory to NPT.</li>
        <li>Thorium: India has largest reserves.</li>
        <li>Jaduguda: uranium mine.</li>
        <li>BARC: Trombay, Mumbai.</li>
      </ul>
    `,
    mcq: [
      { q: "Father of Indian nuclear programme:", opts: ["Vikram Sarabhai", "Homi Bhabha", "Kalam", "Raja Ramanna"], a: 1, ex: "Homi Bhabha." },
      { q: "1st Indian nuclear test:", opts: ["1974", "1980", "1998", "2000"], a: 0, ex: "Pokhran-I." },
      { q: "1st nuclear test codename:", opts: ["Operation Shakti", "Smiling Buddha", "Brahma", "Pokhran"], a: 1, ex: "1974." },
      { q: "Pokhran-II year:", opts: ["1995", "1998", "2000", "2005"], a: 1, ex: "May 1998." },
      { q: "Pokhran-II codename:", opts: ["Operation Vijay", "Operation Shakti", "Operation Cactus", "Operation Blue"], a: 1, ex: "Operation Shakti." },
      { q: "National Technology Day:", opts: ["1 May", "11 May", "15 May", "26 May"], a: 1, ex: "May 11." },
      { q: "BARC HQ:", opts: ["Delhi", "Mumbai (Trombay)", "Hyderabad", "Bengaluru"], a: 1, ex: "Trombay." },
      { q: "1st nuclear plant:", opts: ["Tarapur", "Kudankulam", "Kakrapar", "Kaiga"], a: 0, ex: "1969." },
      { q: "Uranium mine in India:", opts: ["Khetri", "Jaduguda", "Kolar", "Korba"], a: 1, ex: "Jharkhand." },
      { q: "Largest thorium reserves in:", opts: ["USA", "Russia", "India", "China"], a: 2, ex: "Kerala beach sands." },
      { q: "Kudankulam plant in:", opts: ["TN", "AP", "Maharashtra", "Karnataka"], a: 0, ex: "Tamil Nadu (Russian)." },
      { q: "Kaiga plant in:", opts: ["Karnataka", "Kerala", "TN", "AP"], a: 0, ex: "Karnataka." },
      { q: "DAE established:", opts: ["1948", "1954", "1962", "1971"], a: 1, ex: "1954." },
      { q: "India signed NPT?", opts: ["Yes", "No", "Partial", "Pending"], a: 1, ex: "India NOT signatory." },
      { q: "Agni-V is:", opts: ["Cruise missile", "ICBM", "Submarine", "Drone"], a: 1, ex: ">5000 km range." },
      { q: "INS Arihant is:", opts: ["Carrier", "Nuclear submarine", "Destroyer", "Frigate"], a: 1, ex: "Nuclear ballistic submarine." },
      { q: "IGCAR is in:", opts: ["Trombay", "Kalpakkam", "Indore", "Hyderabad"], a: 1, ex: "Fast breeder research." },
      { q: "Pokhran is in:", opts: ["Gujarat", "Rajasthan", "Punjab", "MP"], a: 1, ex: "Rajasthan." },
      { q: "BrahMos developed with:", opts: ["USA", "Russia", "France", "Israel"], a: 1, ex: "India-Russia." },
      { q: "Indian Nuclear Doctrine:", opts: ["First use", "No first use", "Random", "Mixed"], a: 1, ex: "No first use." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 22. SPACE PROGRAMME IN INDIA + 23. ISRO ESTABLISHMENTS
  // ───────────────────────────────────────────────────────────────
  T["sgk-space"] = {
    body: `
      <h2>Space Programme in India</h2>

      <h3>1. ISRO — Overview</h3>
      <ul>
        <li>Indian Space Research Organisation.</li>
        <li>Founded: <b>15 August 1969</b>.</li>
        <li>HQ: <b>Bengaluru</b>.</li>
        <li>Father of Indian Space Programme: <b>Dr. Vikram Sarabhai</b>.</li>
        <li>Reports to Department of Space (DOS).</li>
        <li>Chairperson reports to PM.</li>
      </ul>

      <h3>2. Major ISRO Missions</h3>

      <h4>Satellites</h4>
      <ul>
        <li><b>Aryabhata</b> (1975): 1st Indian satellite, launched from USSR.</li>
        <li><b>Bhaskara, Rohini</b>: early experiments.</li>
        <li><b>Rohini RS-1</b> (1980): 1st satellite launched from Indian soil (SLV-3).</li>
        <li><b>INSAT series</b>: communication satellites.</li>
        <li><b>IRS series</b>: remote sensing.</li>
        <li><b>GSAT series</b>: geostationary communication.</li>
        <li><b>NavIC (IRNSS)</b>: India's GPS (regional).</li>
      </ul>

      <h4>Launch Vehicles</h4>
      <ul>
        <li><b>SLV (Satellite Launch Vehicle)</b>: 1980s.</li>
        <li><b>ASLV</b>: 1990s.</li>
        <li><b>PSLV (Polar)</b>: workhorse of ISRO; 2nd most reliable rocket.</li>
        <li><b>GSLV (Geosynchronous)</b>: for heavier payloads, geostationary orbit.</li>
        <li><b>GSLV Mk III / LVM3</b>: heaviest, for Chandrayaan, Gaganyaan.</li>
        <li><b>SSLV (Small Satellite)</b>: 2022 onwards.</li>
      </ul>

      <h4>Interplanetary Missions</h4>
      <ul>
        <li><b>Chandrayaan-1</b> (2008): 1st Indian Moon mission. Found water on Moon.</li>
        <li><b>Mangalyaan (MOM)</b> (2013-14): 1st Mars mission; success in 1st attempt; cheapest Mars mission.</li>
        <li><b>Chandrayaan-2</b> (2019): Orbiter success; lander Vikram crashed.</li>
        <li><b>Chandrayaan-3</b> (2023): Successful soft landing near Moon's south pole (1st country to do so).</li>
        <li><b>Aditya-L1</b> (2023): Solar observatory mission.</li>
        <li><b>Gaganyaan</b> (planned): India's first human spaceflight.</li>
      </ul>

      <h3>3. World Records</h3>
      <ul>
        <li><b>104 satellites in single launch</b>: PSLV-C37, 2017 (broke previous record).</li>
        <li>1st country to reach Mars in maiden attempt.</li>
        <li>Cheapest Mars mission ($74 million).</li>
        <li>1st soft landing on Moon's south pole (Chandrayaan-3, 2023).</li>
      </ul>

      <h3>4. ISRO Establishments / Centres</h3>

      <h4>Launch / Operations</h4>
      <ul>
        <li><b>SDSC SHAR</b> (Satish Dhawan Space Centre): <b>Sriharikota, AP</b> — launch site.</li>
        <li><b>MCF</b> (Master Control Facility): <b>Hassan, Karnataka</b> — geostationary control.</li>
        <li><b>ISTRAC</b> (Telemetry, Tracking and Command): Bengaluru.</li>
      </ul>

      <h4>R&D Centres</h4>
      <ul>
        <li><b>VSSC</b> (Vikram Sarabhai Space Centre): <b>Thiruvananthapuram</b> — launch vehicles.</li>
        <li><b>URSC</b> (UR Rao Satellite Centre): <b>Bengaluru</b> — satellite design/development.</li>
        <li><b>LPSC</b> (Liquid Propulsion Systems Centre): Thiruvananthapuram + Bengaluru.</li>
        <li><b>SAC</b> (Space Applications Centre): <b>Ahmedabad</b> — applications.</li>
        <li><b>NRSC</b> (National Remote Sensing Centre): <b>Hyderabad</b>.</li>
        <li><b>PRL</b> (Physical Research Laboratory): <b>Ahmedabad</b>.</li>
        <li><b>NE-SAC</b> (North Eastern Space Applications Centre): Shillong.</li>
        <li><b>IIRS</b> (Indian Institute of Remote Sensing): Dehradun.</li>
        <li><b>IIST</b> (Indian Institute of Space Science and Technology): Thiruvananthapuram.</li>
      </ul>

      <h4>Commercial Arm</h4>
      <ul>
        <li><b>NSIL</b> (NewSpace India Limited): commercial arm of ISRO.</li>
        <li><b>Antrix Corporation</b>: earlier commercial arm.</li>
        <li><b>IN-SPACe</b>: regulator for private space companies.</li>
      </ul>

      <h3>5. ISRO Chairpersons (recent)</h3>
      <ul>
        <li>Dr Vikram Sarabhai (1963-1971).</li>
        <li>Prof Satish Dhawan (1972-1984).</li>
        <li>Prof UR Rao (1984-1994).</li>
        <li>Dr K Kasturirangan (1994-2003).</li>
        <li>Dr G Madhavan Nair (2003-2009).</li>
        <li>Dr K Radhakrishnan (2009-2014).</li>
        <li>Dr AS Kiran Kumar (2015-2018).</li>
        <li>Dr K Sivan (2018-2022).</li>
        <li>Dr S Somanath (2022-present).</li>
      </ul>

      <h3>6. Indian Astronauts</h3>
      <ul>
        <li><b>Rakesh Sharma</b>: 1st Indian in space (1984, Soyuz; said "Saare Jahan Se Achha").</li>
        <li><b>Kalpana Chawla</b>: 1st Indian-origin woman astronaut (1997 NASA; died in 2003 Columbia disaster).</li>
        <li><b>Sunita Williams</b>: Indian-origin American, record spacewalks.</li>
        <li><b>Sirisha Bandla</b>: Indian-origin, Virgin Galactic 2021.</li>
        <li><b>Gaganyaan astronauts</b> announced: Group Captains Prashanth Nair, Ajit Krishnan, Angad Pratap, Shubhanshu Shukla.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>ISRO founded: 15 Aug 1969.</li>
        <li>Father: Vikram Sarabhai.</li>
        <li>HQ: Bengaluru.</li>
        <li>SHAR launch site: Sriharikota.</li>
        <li>1st satellite: Aryabhata 1975.</li>
        <li>Chandrayaan-1: water on Moon.</li>
        <li>Mangalyaan: 1st Mars in maiden attempt.</li>
        <li>Chandrayaan-3: south pole moon landing.</li>
        <li>104 satellites: 2017 record.</li>
        <li>Rakesh Sharma: 1st Indian in space.</li>
      </ul>
    `,
    mcq: [
      { q: "ISRO founded:", opts: ["1962", "1969", "1975", "1980"], a: 1, ex: "Aug 15, 1969." },
      { q: "Father of Indian space programme:", opts: ["Kalam", "Bhabha", "Vikram Sarabhai", "Rao"], a: 2, ex: "Vikram Sarabhai." },
      { q: "ISRO HQ:", opts: ["Mumbai", "Delhi", "Bengaluru", "Chennai"], a: 2, ex: "Bengaluru." },
      { q: "1st Indian satellite:", opts: ["INSAT", "Aryabhata", "Bhaskara", "Rohini"], a: 1, ex: "1975." },
      { q: "ISRO launch site:", opts: ["Sriharikota", "Trivandrum", "Hassan", "Bangalore"], a: 0, ex: "SDSC SHAR." },
      { q: "1st Indian in space:", opts: ["Kalpana", "Rakesh Sharma", "Sunita Williams", "Sirisha"], a: 1, ex: "1984." },
      { q: "Chandrayaan-1 launched:", opts: ["2007", "2008", "2013", "2019"], a: 1, ex: "Oct 2008." },
      { q: "Mangalyaan launched:", opts: ["2008", "2013", "2014", "2018"], a: 1, ex: "Nov 2013." },
      { q: "Chandrayaan-3 success:", opts: ["2019", "2022", "2023", "2024"], a: 2, ex: "23 Aug 2023." },
      { q: "Workhorse rocket of ISRO:", opts: ["SLV", "PSLV", "GSLV", "SSLV"], a: 1, ex: "PSLV." },
      { q: "104 satellites in one launch:", opts: ["PSLV-C37", "GSLV", "SLV", "GSLV Mk III"], a: 0, ex: "2017 record." },
      { q: "ISRO commercial arm:", opts: ["NSIL", "Antrix", "Both A and B", "ISRO direct"], a: 2, ex: "Both." },
      { q: "Current ISRO chairman (2023):", opts: ["Sivan", "Somanath", "Kiran", "Radha"], a: 1, ex: "S Somanath." },
      { q: "VSSC is in:", opts: ["Bengaluru", "Trivandrum", "Hyderabad", "Mumbai"], a: 1, ex: "Kerala." },
      { q: "NRSC is in:", opts: ["Hyderabad", "Bengaluru", "Mumbai", "Delhi"], a: 0, ex: "Remote sensing." },
      { q: "Aditya-L1 mission to:", opts: ["Moon", "Mars", "Sun", "Venus"], a: 2, ex: "Solar observatory." },
      { q: "Gaganyaan is:", opts: ["Lunar mission", "Mars mission", "First Indian human spaceflight", "Satellite"], a: 2, ex: "Manned mission." },
      { q: "Master Control Facility at:", opts: ["Hassan", "Sriharikota", "Bengaluru", "Hyderabad"], a: 0, ex: "Karnataka." },
      { q: "PRL is in:", opts: ["Ahmedabad", "Hyderabad", "Bengaluru", "Mumbai"], a: 0, ex: "Physical Research Lab." },
      { q: "IIST is in:", opts: ["Bengaluru", "Thiruvananthapuram", "Hyderabad", "Pune"], a: 1, ex: "Space education." }
    ]
  };

  // sgk-isro placeholder — content covered above
  T["sgk-isro"] = T["sgk-space"];

  // ───────────────────────────────────────────────────────────────
  // 24. NATIONAL SYMBOLS OF INDIA
  // ───────────────────────────────────────────────────────────────
  T["sgk-national-symbols"] = {
    body: `
      <h2>National Symbols of India</h2>

      <h3>1. State Symbols</h3>
      <table>
        <tr><th>Symbol</th><th>Name</th><th>Adopted</th></tr>
        <tr><td>National Flag</td><td>Tiranga (Tricolour) — saffron, white, green, with Ashoka Chakra (24 spokes)</td><td>22 July 1947</td></tr>
        <tr><td>National Emblem</td><td>Adapted from Lion Capital of Ashoka at Sarnath</td><td>26 Jan 1950</td></tr>
        <tr><td>National Anthem</td><td>Jana Gana Mana (by Rabindranath Tagore)</td><td>24 Jan 1950</td></tr>
        <tr><td>National Song</td><td>Vande Mataram (by Bankim Chandra Chattopadhyay)</td><td>24 Jan 1950</td></tr>
        <tr><td>National Pledge</td><td>"India is my country, all Indians are my brothers and sisters..."</td><td>1962</td></tr>
        <tr><td>National Motto</td><td>Satyameva Jayate (Truth alone triumphs)</td><td>26 Jan 1950</td></tr>
      </table>

      <h3>2. National Anthem Details</h3>
      <ul>
        <li>Written by: <b>Rabindranath Tagore</b>.</li>
        <li>Adopted: 24 Jan 1950.</li>
        <li>First sung at: Calcutta session of INC, 27 Dec 1911.</li>
        <li>Duration: 52 seconds (full); 20 seconds (short version).</li>
        <li>Language: Sanskritized Bengali.</li>
        <li>5 stanzas, only 1st sung as anthem.</li>
        <li>Tagore also wrote Bangladesh anthem (Amar Sonar Bangla).</li>
      </ul>

      <h3>3. National Song</h3>
      <ul>
        <li>Vande Mataram by <b>Bankim Chandra Chattopadhyay</b>.</li>
        <li>From novel "Anandamath" (1882).</li>
        <li>Set to music by Rabindranath Tagore.</li>
        <li>Sung at INC Calcutta session 1896.</li>
        <li>Equal status with anthem.</li>
      </ul>

      <h3>4. National Emblem (Lion Capital)</h3>
      <ul>
        <li>Adapted from Ashoka's pillar at Sarnath (Buddhist).</li>
        <li>4 lions back-to-back; only 3 visible.</li>
        <li>Below: a horse (west), a bull (east), a lion (north), an elephant (south), separated by wheels (Dharma Chakras).</li>
        <li>Inscription: "Satyameva Jayate" (from Mundaka Upanishad).</li>
        <li>Adopted: 26 Jan 1950.</li>
      </ul>

      <h3>5. National Flag Details</h3>
      <ul>
        <li>Designed by: <b>Pingali Venkayya</b>.</li>
        <li>Adopted: <b>22 July 1947</b>.</li>
        <li>Ratio: 2:3.</li>
        <li>Saffron (top): courage and sacrifice.</li>
        <li>White (middle): peace, truth.</li>
        <li>Green (bottom): faith, prosperity.</li>
        <li>Ashoka Chakra (navy blue, 24 spokes): from Sarnath; signifies wheel of law.</li>
      </ul>

      <h3>6. National Symbols (Living)</h3>
      <table>
        <tr><th>Symbol</th><th>Name</th></tr>
        <tr><td>National Animal</td><td>Tiger (Royal Bengal)</td></tr>
        <tr><td>National Bird</td><td>Peacock (Indian Peafowl)</td></tr>
        <tr><td>National Aquatic Animal</td><td>Ganges Dolphin</td></tr>
        <tr><td>National Heritage Animal</td><td>Asian Elephant</td></tr>
        <tr><td>National Reptile</td><td>King Cobra</td></tr>
        <tr><td>National Flower</td><td>Lotus</td></tr>
        <tr><td>National Tree</td><td>Banyan</td></tr>
        <tr><td>National Fruit</td><td>Mango</td></tr>
        <tr><td>National River</td><td>Ganga</td></tr>
        <tr><td>National Microbe</td><td>Lactobacillus delbrueckii (curd)</td></tr>
      </table>

      <h3>7. Other National</h3>
      <ul>
        <li>National Game (de facto): Hockey (though not officially declared).</li>
        <li>National Currency: Indian Rupee (₹).</li>
        <li>Rupee symbol designed by D. Udaya Kumar (2010).</li>
        <li>National Days:
          <ul>
            <li>Republic Day: 26 January.</li>
            <li>Independence Day: 15 August.</li>
            <li>Gandhi Jayanti: 2 October.</li>
          </ul>
        </li>
        <li>National Calendar: Saka calendar (adopted 22 March 1957).</li>
      </ul>

      <h3>8. Important Slogans</h3>
      <ul>
        <li>"Jai Hind" — Subhash Chandra Bose.</li>
        <li>"Jai Jawan Jai Kisan" — Lal Bahadur Shastri.</li>
        <li>"Inquilab Zindabad" — Bhagat Singh / Maulana Hasrat Mohani.</li>
        <li>"Do or Die" — Gandhi (Quit India 1942).</li>
        <li>"Vande Mataram" — Bankim Chandra.</li>
        <li>"Saare Jahan Se Achha" — Iqbal.</li>
        <li>"Sare Jahan Se Achha" sung from space by Rakesh Sharma.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>National flag designer: Pingali Venkayya.</li>
        <li>National anthem: Tagore.</li>
        <li>National song: Bankim Chandra.</li>
        <li>National emblem from Sarnath Lion Capital.</li>
        <li>National motto: Satyameva Jayate (Mundaka Upanishad).</li>
        <li>National animal: Tiger.</li>
        <li>National bird: Peacock.</li>
        <li>National flower: Lotus.</li>
        <li>National tree: Banyan.</li>
        <li>National fruit: Mango.</li>
        <li>National river: Ganga.</li>
        <li>Rupee symbol: D. Udaya Kumar 2010.</li>
      </ul>
    `,
    mcq: [
      { q: "National flag designer:", opts: ["Pingali Venkayya", "Tagore", "Nehru", "Gandhi"], a: 0, ex: "Pingali Venkayya." },
      { q: "National anthem by:", opts: ["Tagore", "Bankim", "Iqbal", "Gandhi"], a: 0, ex: "Rabindranath Tagore." },
      { q: "National song by:", opts: ["Tagore", "Bankim Chandra", "Iqbal", "Nehru"], a: 1, ex: "Bankim Chandra Chattopadhyay." },
      { q: "National motto source:", opts: ["Gita", "Mundaka Upanishad", "Vedas", "Manusmriti"], a: 1, ex: "Satyameva Jayate." },
      { q: "National emblem from:", opts: ["Bodh Gaya", "Sarnath Lion Capital", "Sanchi", "Ellora"], a: 1, ex: "Ashoka's pillar." },
      { q: "National animal:", opts: ["Lion", "Tiger", "Elephant", "Peacock"], a: 1, ex: "Royal Bengal Tiger." },
      { q: "National bird:", opts: ["Eagle", "Peacock", "Parrot", "Crow"], a: 1, ex: "Indian Peafowl." },
      { q: "National flower:", opts: ["Rose", "Lotus", "Marigold", "Jasmine"], a: 1, ex: "Lotus." },
      { q: "National tree:", opts: ["Neem", "Banyan", "Peepal", "Mango"], a: 1, ex: "Banyan." },
      { q: "National fruit:", opts: ["Apple", "Mango", "Banana", "Orange"], a: 1, ex: "Mango." },
      { q: "National aquatic animal:", opts: ["Whale", "Ganges Dolphin", "Shark", "Crocodile"], a: 1, ex: "Ganges River Dolphin." },
      { q: "National reptile:", opts: ["Snake", "King Cobra", "Crocodile", "Tortoise"], a: 1, ex: "King Cobra." },
      { q: "Ashoka Chakra spokes:", opts: ["12", "16", "24", "32"], a: 2, ex: "24 spokes." },
      { q: "Flag adopted:", opts: ["15 Aug 1947", "22 July 1947", "26 Jan 1950", "1949"], a: 1, ex: "Just before independence." },
      { q: "Republic Day:", opts: ["15 Aug", "26 Jan", "2 Oct", "26 Nov"], a: 1, ex: "26 January." },
      { q: "National anthem duration:", opts: ["30 sec", "52 sec", "1 min", "2 min"], a: 1, ex: "~52 seconds." },
      { q: "Vande Mataram from novel:", opts: ["Devi", "Anandamath", "Durgesh", "Krishnakanta"], a: 1, ex: "Bankim's novel 1882." },
      { q: "Slogan 'Jai Jawan Jai Kisan':", opts: ["Nehru", "Shastri", "Patel", "Indira"], a: 1, ex: "Lal Bahadur Shastri." },
      { q: "Rupee symbol designer:", opts: ["D. Udaya Kumar", "Pingali", "Tagore", "Sarabhai"], a: 0, ex: "2010." },
      { q: "National river:", opts: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"], a: 0, ex: "Ganga." }
    ]
  };

})();
