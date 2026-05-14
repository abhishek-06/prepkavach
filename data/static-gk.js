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

})();
