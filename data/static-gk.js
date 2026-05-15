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

  // ───────────────────────────────────────────────────────────────
  // ISRO ESTABLISHMENTS & MISSIONS
  // ───────────────────────────────────────────────────────────────
  T["sgk-isro"] = {
    body: `
      <h2>ISRO Establishments & Missions</h2>

      <h3>1. Major ISRO Centres (Detailed Location List)</h3>
      <table>
        <tr><th>Centre</th><th>Location</th><th>Function</th></tr>
        <tr><td>ISRO HQ</td><td>Bengaluru</td><td>Headquarters</td></tr>
        <tr><td>VSSC (Vikram Sarabhai Space Centre)</td><td>Thiruvananthapuram</td><td>Launch vehicles development</td></tr>
        <tr><td>SDSC SHAR (Satish Dhawan Space Centre)</td><td>Sriharikota, Andhra Pradesh</td><td>Launch site</td></tr>
        <tr><td>URSC (UR Rao Satellite Centre)</td><td>Bengaluru</td><td>Satellite design and development</td></tr>
        <tr><td>LPSC (Liquid Propulsion Systems Centre)</td><td>Thiruvananthapuram & Bengaluru</td><td>Liquid engines, cryogenic stages</td></tr>
        <tr><td>SAC (Space Applications Centre)</td><td>Ahmedabad</td><td>Payload + applications development</td></tr>
        <tr><td>NRSC (National Remote Sensing Centre)</td><td>Hyderabad</td><td>Remote sensing data</td></tr>
        <tr><td>MCF (Master Control Facility)</td><td>Hassan, Karnataka</td><td>Geostationary satellite control</td></tr>
        <tr><td>ISTRAC (Telemetry, Tracking & Command)</td><td>Bengaluru</td><td>Spacecraft tracking</td></tr>
        <tr><td>IISU (Inertial Systems Unit)</td><td>Thiruvananthapuram</td><td>Inertial sensors</td></tr>
        <tr><td>NE-SAC (North Eastern Space Applications Centre)</td><td>Shillong, Meghalaya</td><td>Northeast applications</td></tr>
        <tr><td>PRL (Physical Research Laboratory)</td><td>Ahmedabad</td><td>Space physics research</td></tr>
        <tr><td>IIRS (Indian Institute of Remote Sensing)</td><td>Dehradun</td><td>Remote sensing education</td></tr>
        <tr><td>IIST (Indian Institute of Space Science & Technology)</td><td>Thiruvananthapuram</td><td>Space education</td></tr>
        <tr><td>SCL (Semi-Conductor Laboratory)</td><td>Mohali</td><td>Semiconductor chips</td></tr>
      </table>

      <h3>2. ISRO Major Missions Timeline</h3>
      <ul>
        <li><b>1975</b>: Aryabhata — first Indian satellite (launched from USSR).</li>
        <li><b>1979</b>: Bhaskara-I.</li>
        <li><b>1980</b>: Rohini RS-1 — first Indian satellite launched from Indian soil (SLV-3 vehicle).</li>
        <li><b>1982</b>: INSAT-1A — first INSAT communication satellite.</li>
        <li><b>1984</b>: Rakesh Sharma flew aboard Soyuz T-11 — first Indian in space.</li>
        <li><b>1988</b>: IRS-1A — first remote sensing satellite.</li>
        <li><b>1993-94</b>: PSLV first launches.</li>
        <li><b>2001</b>: GSLV first launch.</li>
        <li><b>2008</b>: Chandrayaan-1 — first Indian moon mission; discovered water on Moon.</li>
        <li><b>2013</b>: Mangalyaan (MOM) — first Mars mission; reached Mars on first attempt (Sep 2014).</li>
        <li><b>2014</b>: GSAT-14 (first launch from indigenous cryogenic stage).</li>
        <li><b>2017</b>: PSLV-C37 launched 104 satellites in single launch (world record).</li>
        <li><b>2017</b>: GSAT-9 / South Asia Satellite (regional cooperation).</li>
        <li><b>2018</b>: GSAT-11 (heaviest Indian satellite).</li>
        <li><b>2019</b>: Chandrayaan-2 — orbiter success; Vikram lander crashed.</li>
        <li><b>2022</b>: First commercial SSLV launch.</li>
        <li><b>2023</b>: <b>Chandrayaan-3</b> — successful soft landing on Moon's south pole (23 Aug 2023); India became 4th country to soft-land on Moon and 1st on south pole.</li>
        <li><b>2023</b>: <b>Aditya-L1</b> — first dedicated Indian solar observatory mission.</li>
        <li><b>2024 onwards</b>: Gaganyaan (planned human spaceflight).</li>
      </ul>

      <h3>3. Indian Launch Vehicles</h3>
      <table>
        <tr><th>Vehicle</th><th>Capacity</th><th>Use</th></tr>
        <tr><td>SLV (Satellite Launch Vehicle)</td><td>40 kg to LEO</td><td>Retired (1980s)</td></tr>
        <tr><td>ASLV</td><td>150 kg to LEO</td><td>Retired</td></tr>
        <tr><td>PSLV (Polar SLV)</td><td>1750 kg to SSO</td><td>Workhorse</td></tr>
        <tr><td>GSLV Mk II</td><td>2200 kg to GTO</td><td>Communication satellites</td></tr>
        <tr><td>LVM3 / GSLV Mk III</td><td>4000 kg to GTO; 8000 kg to LEO</td><td>Heaviest (Chandrayaan-2/3, Gaganyaan)</td></tr>
        <tr><td>SSLV (Small SLV)</td><td>500 kg to LEO</td><td>Small/commercial satellites</td></tr>
      </table>

      <h3>4. Famous Satellites</h3>
      <ul>
        <li><b>INSAT series</b>: communication and weather; geostationary orbit.</li>
        <li><b>IRS series</b>: Indian Remote Sensing; earth observation.</li>
        <li><b>GSAT series</b>: communication; Ku/Ka band.</li>
        <li><b>NavIC (IRNSS)</b>: Indian Regional Navigation Satellite System; 7 satellites.</li>
        <li><b>RISAT</b>: Radar Imaging Satellites.</li>
        <li><b>Cartosat</b>: high-resolution earth imagery.</li>
        <li><b>SARAL</b>: oceanography (with France).</li>
        <li><b>Astrosat</b> (2015): multi-wavelength space observatory.</li>
        <li><b>Chandrayaan-3</b>: lander Vikram, rover Pragyan.</li>
      </ul>

      <h3>5. ISRO Records & Achievements</h3>
      <ul>
        <li>1st country to reach Mars on maiden attempt.</li>
        <li>Cheapest Mars mission ($74 million).</li>
        <li>104 satellites in one launch (2017 record).</li>
        <li>1st soft landing on Moon's south pole (Chandrayaan-3, 2023).</li>
        <li>Discovered presence of water on Moon (Chandrayaan-1, 2008).</li>
        <li>One of the world's six major space agencies.</li>
      </ul>

      <h3>6. Future / Ongoing Missions</h3>
      <ul>
        <li><b>Gaganyaan</b>: 1st Indian crewed orbital mission (planned 2025-26).</li>
        <li><b>Aditya-L1</b>: Sun observation (already at L1 since Jan 2024).</li>
        <li><b>Mangalyaan-2</b>: planned 2nd Mars mission.</li>
        <li><b>Shukrayaan</b>: planned Venus orbiter.</li>
        <li><b>NISAR</b>: NASA-ISRO joint earth-observation satellite.</li>
        <li><b>Indian Space Station</b>: planned by 2035.</li>
        <li><b>Lunar mission</b>: planned crewed lunar landing by 2040.</li>
      </ul>

      <h3>7. Indian Astronauts (Historical & Upcoming)</h3>
      <ul>
        <li><b>Rakesh Sharma</b>: 1st Indian in space (3 April 1984, Soyuz T-11).</li>
        <li><b>Kalpana Chawla</b>: Indian-origin American; died Columbia disaster 2003.</li>
        <li><b>Sunita Williams</b>: Indian-origin American; record spacewalks.</li>
        <li><b>Sirisha Bandla</b>: Indian-origin; Virgin Galactic 2021.</li>
        <li><b>Gaganyaan crew</b> (announced 2024): Prashanth Nair, Ajit Krishnan, Angad Pratap, Shubhanshu Shukla.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>ISRO HQ: Bengaluru.</li>
        <li>Launch site: Sriharikota (SDSC SHAR).</li>
        <li>Master Control Facility: Hassan.</li>
        <li>VSSC: Thiruvananthapuram (vehicles).</li>
        <li>URSC: Bengaluru (satellites).</li>
        <li>SAC: Ahmedabad (applications).</li>
        <li>NRSC: Hyderabad (remote sensing).</li>
        <li>Heaviest rocket: LVM3 / GSLV Mk III.</li>
        <li>Workhorse: PSLV.</li>
        <li>Chandrayaan-3: south pole moon landing 2023.</li>
        <li>Mangalyaan: 1st Mars mission, maiden success.</li>
      </ul>
    `,
    mcq: [
      { q: "ISRO HQ:", opts: ["Mumbai", "Delhi", "Bengaluru", "Chennai"], a: 2, ex: "Bengaluru." },
      { q: "Launch site of ISRO:", opts: ["Bengaluru", "Sriharikota", "Hassan", "Trivandrum"], a: 1, ex: "SDSC SHAR." },
      { q: "VSSC is located in:", opts: ["Bengaluru", "Thiruvananthapuram", "Hyderabad", "Ahmedabad"], a: 1, ex: "Vikram Sarabhai SC." },
      { q: "Master Control Facility:", opts: ["Bengaluru", "Hyderabad", "Hassan", "Sriharikota"], a: 2, ex: "Karnataka." },
      { q: "1st Indian satellite Aryabhata launched in:", opts: ["1972", "1975", "1980", "1984"], a: 1, ex: "From USSR Kapustin Yar." },
      { q: "1st launch from Indian soil:", opts: ["Aryabhata", "Bhaskara", "Rohini RS-1 (1980)", "INSAT-1A"], a: 2, ex: "SLV-3 vehicle." },
      { q: "Chandrayaan-1 discovered:", opts: ["Iron on Moon", "Water on Moon", "Helium-3", "Volcanoes"], a: 1, ex: "First confirmed lunar water." },
      { q: "Mangalyaan reached Mars in:", opts: ["2013", "Sep 2014", "2015", "2018"], a: 1, ex: "On maiden attempt." },
      { q: "Chandrayaan-3 landed in:", opts: ["Equator", "Far side", "South pole", "Tycho crater"], a: 2, ex: "First in world." },
      { q: "Chandrayaan-3 success date:", opts: ["23 Aug 2023", "15 Aug 2023", "30 Aug 2023", "5 Sep 2023"], a: 0, ex: "Now National Space Day." },
      { q: "PSLV record (104 satellites) was in:", opts: ["2015", "2017 (PSLV-C37)", "2019", "2022"], a: 1, ex: "World record." },
      { q: "Heaviest Indian rocket:", opts: ["PSLV", "GSLV Mk II", "LVM3 / GSLV Mk III", "SSLV"], a: 2, ex: "4 ton to GTO." },
      { q: "NavIC has how many satellites:", opts: ["3", "5", "7", "10"], a: 2, ex: "Regional navigation." },
      { q: "Aditya-L1 mission destination:", opts: ["Moon", "Mars", "Sun (L1 point)", "Venus"], a: 2, ex: "1.5 million km from Earth." },
      { q: "Gaganyaan is:", opts: ["Moon mission", "Mars mission", "1st Indian crewed mission", "Communication satellite"], a: 2, ex: "First human spaceflight." },
      { q: "URSC is in:", opts: ["Bengaluru", "Trivandrum", "Hyderabad", "Mumbai"], a: 0, ex: "UR Rao Satellite Centre." },
      { q: "SAC is in:", opts: ["Ahmedabad", "Bengaluru", "Pune", "Mumbai"], a: 0, ex: "Space Applications Centre." },
      { q: "NRSC is in:", opts: ["Bengaluru", "Hyderabad", "Pune", "Delhi"], a: 1, ex: "National Remote Sensing." },
      { q: "Astrosat is:", opts: ["Communication", "Multi-wavelength space observatory", "Mars orbiter", "Lunar"], a: 1, ex: "2015 launched." },
      { q: "Indian Space Station planned by:", opts: ["2025", "2030", "2035", "2040"], a: 2, ex: "Recent target announced." }
    ]
  };

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

  // ═══════════════════════════════════════════════════════════════
  // AWARDS, PEOPLE & MISCELLANEOUS
  // ═══════════════════════════════════════════════════════════════

  // ───────────────────────────────────────────────────────────────
  // 25. FATHERS OF VARIOUS FIELDS
  // ───────────────────────────────────────────────────────────────
  T["sgk-fathers"] = {
    body: `
      <h2>Fathers of Various Fields</h2>

      <h3>1. Fathers of Indian Fields</h3>
      <table>
        <tr><th>Field</th><th>Father</th></tr>
        <tr><td>Indian Nation</td><td>Mahatma Gandhi</td></tr>
        <tr><td>Indian Constitution</td><td>B.R. Ambedkar</td></tr>
        <tr><td>Indian Civil Services</td><td>Lord Cornwallis</td></tr>
        <tr><td>Indian Civil Aviation</td><td>JRD Tata</td></tr>
        <tr><td>Indian Economic Reforms</td><td>P.V. Narasimha Rao / Manmohan Singh</td></tr>
        <tr><td>Indian Renaissance</td><td>Raja Ram Mohan Roy</td></tr>
        <tr><td>Indian Industry</td><td>Jamsetji Tata</td></tr>
        <tr><td>Indian Banking</td><td>Maidavolu Narasimham</td></tr>
        <tr><td>Indian Atomic Energy</td><td>Homi J. Bhabha</td></tr>
        <tr><td>Indian Space Programme</td><td>Vikram Sarabhai</td></tr>
        <tr><td>Indian Missile Programme</td><td>APJ Abdul Kalam</td></tr>
        <tr><td>Indian Green Revolution</td><td>M.S. Swaminathan</td></tr>
        <tr><td>Indian White Revolution</td><td>Verghese Kurien</td></tr>
        <tr><td>Indian Blue Revolution</td><td>Hiralal Chaudhuri</td></tr>
        <tr><td>Indian Cinema</td><td>Dadasaheb Phalke</td></tr>
        <tr><td>Indian Computer Education</td><td>Rajiv Gandhi</td></tr>
        <tr><td>Indian Press</td><td>James Augustus Hickey</td></tr>
        <tr><td>Indian Geology</td><td>William Logan</td></tr>
        <tr><td>Indian Surgery</td><td>Sushruta</td></tr>
        <tr><td>Indian Medicine</td><td>Charaka</td></tr>
        <tr><td>Indian English Education</td><td>Lord Macaulay</td></tr>
        <tr><td>Indian Geometry / Mathematics</td><td>Aryabhata</td></tr>
        <tr><td>Local Self Government</td><td>Lord Ripon</td></tr>
        <tr><td>Indian Archaeology</td><td>Alexander Cunningham</td></tr>
        <tr><td>Indian Numismatics</td><td>Edward Thomas</td></tr>
        <tr><td>Indian Polity (modern)</td><td>Ambedkar</td></tr>
        <tr><td>Indian Botany</td><td>William Roxburgh</td></tr>
        <tr><td>Indian Unrest</td><td>Bal Gangadhar Tilak</td></tr>
        <tr><td>Indian Communism</td><td>M.N. Roy</td></tr>
        <tr><td>Indian Socialism</td><td>Jayaprakash Narayan / Acharya Narendra Dev</td></tr>
      </table>

      <h3>2. Fathers of World Fields</h3>
      <table>
        <tr><th>Field</th><th>Father</th></tr>
        <tr><td>History</td><td>Herodotus</td></tr>
        <tr><td>Geometry</td><td>Euclid</td></tr>
        <tr><td>Modern Astronomy</td><td>Nicolaus Copernicus</td></tr>
        <tr><td>Physics</td><td>Isaac Newton (also Galileo)</td></tr>
        <tr><td>Modern Physics</td><td>Albert Einstein</td></tr>
        <tr><td>Chemistry</td><td>Antoine Lavoisier</td></tr>
        <tr><td>Modern Chemistry</td><td>Antoine Lavoisier</td></tr>
        <tr><td>Biology</td><td>Aristotle</td></tr>
        <tr><td>Modern Biology</td><td>Charles Darwin</td></tr>
        <tr><td>Botany</td><td>Theophrastus</td></tr>
        <tr><td>Zoology</td><td>Aristotle</td></tr>
        <tr><td>Genetics</td><td>Gregor Mendel</td></tr>
        <tr><td>Modern Genetics</td><td>T.H. Morgan</td></tr>
        <tr><td>Microbiology</td><td>Louis Pasteur</td></tr>
        <tr><td>Bacteriology</td><td>Robert Koch</td></tr>
        <tr><td>Medicine</td><td>Hippocrates</td></tr>
        <tr><td>Surgery</td><td>Sushruta (ancient); Modern: Joseph Lister</td></tr>
        <tr><td>Psychology</td><td>Wilhelm Wundt</td></tr>
        <tr><td>Psychoanalysis</td><td>Sigmund Freud</td></tr>
        <tr><td>Sociology</td><td>Auguste Comte</td></tr>
        <tr><td>Political Science</td><td>Aristotle (or Machiavelli for modern)</td></tr>
        <tr><td>Modern Political Science</td><td>Niccolò Machiavelli</td></tr>
        <tr><td>Economics</td><td>Adam Smith</td></tr>
        <tr><td>Modern Economics</td><td>John Maynard Keynes</td></tr>
        <tr><td>Computer</td><td>Charles Babbage</td></tr>
        <tr><td>Modern Computer Science</td><td>Alan Turing</td></tr>
        <tr><td>Internet</td><td>Vint Cerf / Bob Kahn</td></tr>
        <tr><td>WWW</td><td>Tim Berners-Lee</td></tr>
        <tr><td>Mathematics</td><td>Archimedes / Pythagoras / Euclid</td></tr>
        <tr><td>Algebra</td><td>Al-Khwarizmi (Mohammad ibn Musa)</td></tr>
        <tr><td>Number Theory</td><td>Pierre de Fermat</td></tr>
        <tr><td>Geometry</td><td>Euclid</td></tr>
        <tr><td>Trigonometry</td><td>Hipparchus</td></tr>
        <tr><td>Modern Astronomy</td><td>Copernicus</td></tr>
        <tr><td>Telescope</td><td>Galileo Galilei</td></tr>
        <tr><td>Aviation</td><td>Wright Brothers</td></tr>
        <tr><td>Communism</td><td>Karl Marx</td></tr>
        <tr><td>Capitalism</td><td>Adam Smith</td></tr>
        <tr><td>English Poetry</td><td>Geoffrey Chaucer</td></tr>
        <tr><td>English Drama</td><td>Christopher Marlowe</td></tr>
        <tr><td>Olympic Games (Modern)</td><td>Baron Pierre de Coubertin</td></tr>
        <tr><td>Test-Tube Baby</td><td>Robert Edwards</td></tr>
        <tr><td>Modern Science</td><td>Galileo</td></tr>
        <tr><td>Modern Surgery</td><td>Joseph Lister</td></tr>
        <tr><td>Vaccination</td><td>Edward Jenner (smallpox)</td></tr>
        <tr><td>Modern Painting</td><td>Pablo Picasso (impressionism: Cézanne)</td></tr>
        <tr><td>Public Address System</td><td>Edward Charles Wente</td></tr>
        <tr><td>Atomic Theory</td><td>John Dalton</td></tr>
        <tr><td>Periodic Table</td><td>Dmitri Mendeleev</td></tr>
      </table>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Father of Nation (India): Mahatma Gandhi.</li>
        <li>Father of Constitution: Ambedkar.</li>
        <li>Father of Green Revolution: M.S. Swaminathan.</li>
        <li>Father of White Revolution: Kurien.</li>
        <li>Father of Indian Space: Vikram Sarabhai.</li>
        <li>Father of Indian Atomic: Homi Bhabha.</li>
        <li>Father of Indian Missiles: Kalam.</li>
        <li>Father of Genetics: Mendel.</li>
        <li>Father of Medicine: Hippocrates.</li>
        <li>Father of Computer: Babbage.</li>
        <li>Father of Economics: Adam Smith.</li>
        <li>Father of Modern Olympics: Coubertin.</li>
      </ul>
    `,
    mcq: [
      { q: "Father of Indian Nation:", opts: ["Nehru", "Gandhi", "Patel", "Bose"], a: 1, ex: "Mahatma Gandhi." },
      { q: "Father of Indian Constitution:", opts: ["Nehru", "Patel", "Ambedkar", "Rajagopalachari"], a: 2, ex: "Dr B.R. Ambedkar." },
      { q: "Father of Green Revolution:", opts: ["Kurien", "Swaminathan", "Nehru", "Borlaug"], a: 1, ex: "M.S. Swaminathan." },
      { q: "Father of White Revolution:", opts: ["Swaminathan", "Kurien", "Tata", "Birla"], a: 1, ex: "Verghese Kurien." },
      { q: "Father of Indian Space:", opts: ["Bhabha", "Vikram Sarabhai", "Kalam", "Rao"], a: 1, ex: "Vikram Sarabhai." },
      { q: "Father of Indian Atomic:", opts: ["Vikram Sarabhai", "Bhabha", "Kalam", "Raman"], a: 1, ex: "Homi Bhabha." },
      { q: "Father of Indian Missiles:", opts: ["Bhabha", "Sarabhai", "Kalam", "Naidu"], a: 2, ex: "Kalam." },
      { q: "Father of Genetics:", opts: ["Darwin", "Mendel", "Watson", "Crick"], a: 1, ex: "Gregor Mendel." },
      { q: "Father of Medicine:", opts: ["Galen", "Hippocrates", "Sushruta", "Lister"], a: 1, ex: "Hippocrates." },
      { q: "Father of Surgery (Indian):", opts: ["Sushruta", "Charaka", "Hippocrates", "Lister"], a: 0, ex: "Ancient Indian." },
      { q: "Father of Computer:", opts: ["Babbage", "Turing", "Gates", "Jobs"], a: 0, ex: "Charles Babbage." },
      { q: "Father of WWW:", opts: ["Gates", "Jobs", "Berners-Lee", "Zuckerberg"], a: 2, ex: "Tim Berners-Lee." },
      { q: "Father of Economics:", opts: ["Marx", "Keynes", "Adam Smith", "Friedman"], a: 2, ex: "Adam Smith." },
      { q: "Father of Modern Physics:", opts: ["Newton", "Einstein", "Galileo", "Faraday"], a: 1, ex: "Einstein." },
      { q: "Father of Indian Cinema:", opts: ["Phalke", "Roy", "Mehboob", "Kapoor"], a: 0, ex: "Dadasaheb Phalke." },
      { q: "Father of Modern Olympics:", opts: ["Coubertin", "Aristotle", "Phidias", "Hercules"], a: 0, ex: "Pierre de Coubertin." },
      { q: "Father of Microbiology:", opts: ["Pasteur", "Koch", "Lister", "Jenner"], a: 0, ex: "Louis Pasteur." },
      { q: "Father of Periodic Table:", opts: ["Newton", "Mendeleev", "Dalton", "Bohr"], a: 1, ex: "Dmitri Mendeleev." },
      { q: "Father of Botany:", opts: ["Aristotle", "Theophrastus", "Linnaeus", "Darwin"], a: 1, ex: "Theophrastus." },
      { q: "Father of History:", opts: ["Herodotus", "Plato", "Aristotle", "Socrates"], a: 0, ex: "Herodotus." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 26. FAMOUS BOOKS & AUTHORS
  // ───────────────────────────────────────────────────────────────
  T["sgk-books-authors"] = {
    body: `
      <h2>Famous Books & Authors</h2>

      <h3>1. Indian Authors — Famous Works</h3>
      <table>
        <tr><th>Author</th><th>Famous Books</th></tr>
        <tr><td>Rabindranath Tagore</td><td>Gitanjali (Nobel 1913), Gora, The Home and the World, Chokher Bali</td></tr>
        <tr><td>Mahatma Gandhi</td><td>My Experiments with Truth, Hind Swaraj</td></tr>
        <tr><td>Jawaharlal Nehru</td><td>The Discovery of India, Glimpses of World History, Autobiography</td></tr>
        <tr><td>R.K. Narayan</td><td>Malgudi Days, The Guide, Swami and Friends</td></tr>
        <tr><td>Mulk Raj Anand</td><td>Untouchable, Coolie</td></tr>
        <tr><td>Khushwant Singh</td><td>Train to Pakistan, The Company of Women</td></tr>
        <tr><td>Vikram Seth</td><td>A Suitable Boy, The Golden Gate</td></tr>
        <tr><td>Salman Rushdie</td><td>Midnight's Children, Satanic Verses, Shame</td></tr>
        <tr><td>Arundhati Roy</td><td>The God of Small Things (Booker 1997)</td></tr>
        <tr><td>Kiran Desai</td><td>The Inheritance of Loss (Booker 2006)</td></tr>
        <tr><td>Aravind Adiga</td><td>The White Tiger (Booker 2008)</td></tr>
        <tr><td>Jhumpa Lahiri</td><td>The Namesake, Interpreter of Maladies</td></tr>
        <tr><td>Amitav Ghosh</td><td>The Shadow Lines, Sea of Poppies</td></tr>
        <tr><td>Anita Desai</td><td>Fire on the Mountain, In Custody</td></tr>
        <tr><td>Chetan Bhagat</td><td>Five Point Someone, 2 States, Half Girlfriend</td></tr>
        <tr><td>Amish Tripathi</td><td>Shiva Trilogy, Ramachandra Series</td></tr>
        <tr><td>Tulsidas</td><td>Ramcharitmanas</td></tr>
        <tr><td>Valmiki</td><td>Ramayana</td></tr>
        <tr><td>Ved Vyasa</td><td>Mahabharata, 18 Puranas</td></tr>
        <tr><td>Kalidasa</td><td>Shakuntala, Meghadootam, Raghuvamsa, Kumarasambhava</td></tr>
        <tr><td>Kautilya (Chanakya)</td><td>Arthashastra</td></tr>
        <tr><td>Panini</td><td>Ashtadhyayi</td></tr>
        <tr><td>Bana</td><td>Harshacharita, Kadambari</td></tr>
        <tr><td>Vishakhadatta</td><td>Mudrarakshasa</td></tr>
        <tr><td>Subhash Chandra Bose</td><td>The Indian Struggle</td></tr>
        <tr><td>APJ Abdul Kalam</td><td>Wings of Fire, India 2020, Ignited Minds</td></tr>
        <tr><td>Indira Gandhi</td><td>My Truth (autobiography)</td></tr>
        <tr><td>Bal Gangadhar Tilak</td><td>Gita Rahasya, The Arctic Home of Vedas</td></tr>
        <tr><td>Sri Aurobindo</td><td>Savitri, Life Divine</td></tr>
        <tr><td>Swami Vivekananda</td><td>Raja Yoga, Karma Yoga</td></tr>
      </table>

      <h3>2. World Literature</h3>
      <table>
        <tr><th>Author</th><th>Famous Works</th></tr>
        <tr><td>William Shakespeare</td><td>Hamlet, Othello, Romeo and Juliet, Macbeth, Julius Caesar, King Lear</td></tr>
        <tr><td>Leo Tolstoy</td><td>War and Peace, Anna Karenina</td></tr>
        <tr><td>Fyodor Dostoevsky</td><td>Crime and Punishment, Brothers Karamazov</td></tr>
        <tr><td>Charles Dickens</td><td>Oliver Twist, David Copperfield, A Tale of Two Cities</td></tr>
        <tr><td>Jane Austen</td><td>Pride and Prejudice, Emma, Sense and Sensibility</td></tr>
        <tr><td>Mark Twain</td><td>Tom Sawyer, Huckleberry Finn</td></tr>
        <tr><td>Ernest Hemingway</td><td>The Old Man and the Sea, A Farewell to Arms</td></tr>
        <tr><td>George Orwell</td><td>1984, Animal Farm</td></tr>
        <tr><td>Aldous Huxley</td><td>Brave New World</td></tr>
        <tr><td>J.K. Rowling</td><td>Harry Potter series</td></tr>
        <tr><td>Dan Brown</td><td>The Da Vinci Code, Angels and Demons</td></tr>
        <tr><td>J.R.R. Tolkien</td><td>The Lord of the Rings, The Hobbit</td></tr>
        <tr><td>Paulo Coelho</td><td>The Alchemist, Veronika Decides to Die</td></tr>
        <tr><td>Gabriel García Márquez</td><td>One Hundred Years of Solitude</td></tr>
        <tr><td>Homer</td><td>Iliad, Odyssey</td></tr>
        <tr><td>Karl Marx</td><td>Das Kapital, Communist Manifesto</td></tr>
        <tr><td>Adam Smith</td><td>The Wealth of Nations</td></tr>
        <tr><td>Charles Darwin</td><td>On the Origin of Species</td></tr>
        <tr><td>Sigmund Freud</td><td>The Interpretation of Dreams</td></tr>
        <tr><td>Niccolò Machiavelli</td><td>The Prince</td></tr>
        <tr><td>John Steinbeck</td><td>The Grapes of Wrath, Of Mice and Men</td></tr>
        <tr><td>Harper Lee</td><td>To Kill a Mockingbird</td></tr>
      </table>

      <h3>3. Recent Booker / Nobel Laureates</h3>
      <ul>
        <li>Indian Booker Prize: Roy (1997), Desai (2006), Adiga (2008), Geetanjali Shree (Tomb of Sand, 2022 International).</li>
        <li>Indian Nobel in Literature: Rabindranath Tagore (1913).</li>
        <li>V.S. Naipaul (Trinidad-born, Indian origin): Nobel 2001.</li>
        <li>Other Nobel laureates from Indian origin: Hargobind Khorana, Subramanyan Chandrasekhar, Amartya Sen, Venkatraman Ramakrishnan, Kailash Satyarthi, Abhijit Banerjee.</li>
      </ul>

      <h3>4. Religious Books</h3>
      <ul>
        <li>Bible (Christianity).</li>
        <li>Quran (Islam).</li>
        <li>Bhagavad Gita, Vedas, Upanishads, Ramayana, Mahabharata (Hinduism).</li>
        <li>Tripitaka, Dhammapada (Buddhism).</li>
        <li>Guru Granth Sahib (Sikhism).</li>
        <li>Agamas, Tattvartha Sutra (Jainism).</li>
        <li>Torah, Talmud (Judaism).</li>
        <li>Avesta (Zoroastrianism).</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Gitanjali by Tagore (Nobel 1913).</li>
        <li>God of Small Things: Arundhati Roy.</li>
        <li>Midnight's Children: Salman Rushdie.</li>
        <li>White Tiger: Aravind Adiga.</li>
        <li>Wings of Fire: APJ Kalam.</li>
        <li>Discovery of India: Nehru.</li>
        <li>Arthashastra: Kautilya.</li>
        <li>Ramayana: Valmiki; Mahabharata: Vyasa.</li>
        <li>War and Peace: Tolstoy.</li>
        <li>1984, Animal Farm: Orwell.</li>
      </ul>
    `,
    mcq: [
      { q: "Gitanjali by:", opts: ["Tagore", "Nehru", "Bose", "Gandhi"], a: 0, ex: "Nobel 1913." },
      { q: "Discovery of India by:", opts: ["Gandhi", "Nehru", "Tagore", "Patel"], a: 1, ex: "Nehru." },
      { q: "My Experiments with Truth by:", opts: ["Gandhi", "Tagore", "Tilak", "Bose"], a: 0, ex: "Gandhi's autobiography." },
      { q: "Arthashastra by:", opts: ["Kautilya", "Kalidasa", "Panini", "Vyasa"], a: 0, ex: "Chanakya." },
      { q: "Ramayana by:", opts: ["Vyasa", "Valmiki", "Tulsidas", "Kalidasa"], a: 1, ex: "Sanskrit original by Valmiki." },
      { q: "Mahabharata by:", opts: ["Valmiki", "Vyasa", "Tulsidas", "Vishakhadatta"], a: 1, ex: "Ved Vyasa." },
      { q: "Shakuntala by:", opts: ["Bana", "Kalidasa", "Vyasa", "Panini"], a: 1, ex: "Kalidasa." },
      { q: "Wings of Fire by:", opts: ["Kalam", "Nehru", "Modi", "Bose"], a: 0, ex: "APJ Abdul Kalam." },
      { q: "God of Small Things by:", opts: ["Roy", "Desai", "Adiga", "Lahiri"], a: 0, ex: "Arundhati Roy." },
      { q: "Midnight's Children by:", opts: ["Roy", "Rushdie", "Naipaul", "Seth"], a: 1, ex: "Salman Rushdie." },
      { q: "The White Tiger by:", opts: ["Adiga", "Roy", "Lahiri", "Rushdie"], a: 0, ex: "Aravind Adiga, Booker 2008." },
      { q: "Hamlet by:", opts: ["Shakespeare", "Marlowe", "Wilde", "Shaw"], a: 0, ex: "William Shakespeare." },
      { q: "War and Peace by:", opts: ["Dostoevsky", "Tolstoy", "Chekhov", "Pushkin"], a: 1, ex: "Leo Tolstoy." },
      { q: "Animal Farm by:", opts: ["Huxley", "Orwell", "Wells", "Lewis"], a: 1, ex: "George Orwell." },
      { q: "Das Kapital by:", opts: ["Marx", "Engels", "Smith", "Keynes"], a: 0, ex: "Karl Marx." },
      { q: "On the Origin of Species by:", opts: ["Mendel", "Darwin", "Lamarck", "Wallace"], a: 1, ex: "Charles Darwin." },
      { q: "Harry Potter by:", opts: ["Rowling", "Tolkien", "Lewis", "Roald Dahl"], a: 0, ex: "J.K. Rowling." },
      { q: "The Alchemist by:", opts: ["Roy", "Coelho", "Hemingway", "Murakami"], a: 1, ex: "Paulo Coelho." },
      { q: "1984 by:", opts: ["Huxley", "Orwell", "Bradbury", "Asimov"], a: 1, ex: "George Orwell." },
      { q: "The Prince by:", opts: ["Marx", "Plato", "Machiavelli", "Rousseau"], a: 2, ex: "Niccolò Machiavelli." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // OFFICIAL / AUTOBIOGRAPHIES / RELIGIOUS BOOKS
  // ───────────────────────────────────────────────────────────────
  T["sgk-official-books"] = {
    body: `
      <h2>Official Books of Countries / Religions / Autobiographies</h2>

      <h3>1. Religious Holy Books</h3>
      <table>
        <tr><th>Religion</th><th>Holy Book</th></tr>
        <tr><td>Christianity</td><td>Bible (Old + New Testament)</td></tr>
        <tr><td>Islam</td><td>Quran</td></tr>
        <tr><td>Hinduism</td><td>Vedas, Upanishads, Bhagavad Gita, Ramayana, Mahabharata, Puranas</td></tr>
        <tr><td>Buddhism</td><td>Tripitaka (Pali Canon), Dhammapada, Jatakas</td></tr>
        <tr><td>Sikhism</td><td>Guru Granth Sahib</td></tr>
        <tr><td>Jainism</td><td>Agamas, Tattvartha Sutra, Kalpa Sutra</td></tr>
        <tr><td>Judaism</td><td>Torah (Tanakh), Talmud</td></tr>
        <tr><td>Zoroastrianism</td><td>Avesta</td></tr>
        <tr><td>Confucianism</td><td>Analects of Confucius</td></tr>
        <tr><td>Taoism</td><td>Tao Te Ching</td></tr>
        <tr><td>Bahá'í</td><td>Kitáb-i-Aqdas</td></tr>
      </table>

      <h3>2. Famous Autobiographies</h3>
      <table>
        <tr><th>Author</th><th>Autobiography</th></tr>
        <tr><td>Mahatma Gandhi</td><td>The Story of My Experiments with Truth</td></tr>
        <tr><td>Jawaharlal Nehru</td><td>An Autobiography (Toward Freedom)</td></tr>
        <tr><td>APJ Abdul Kalam</td><td>Wings of Fire</td></tr>
        <tr><td>Indira Gandhi</td><td>My Truth</td></tr>
        <tr><td>Sonia Gandhi</td><td>Rajiv (memoir)</td></tr>
        <tr><td>Babur</td><td>Tuzuk-i-Babri / Baburnama</td></tr>
        <tr><td>Jahangir</td><td>Tuzuk-i-Jahangiri</td></tr>
        <tr><td>Manmohan Singh</td><td>Strictly Personal: Manmohan and Gursharan</td></tr>
        <tr><td>Lal Krishna Advani</td><td>My Country, My Life</td></tr>
        <tr><td>Khushwant Singh</td><td>Truth, Love and a Little Malice</td></tr>
        <tr><td>Sachin Tendulkar</td><td>Playing It My Way</td></tr>
        <tr><td>MS Dhoni</td><td>The Untold Story (biography by Bhaichand Patel)</td></tr>
        <tr><td>Bill Clinton</td><td>My Life</td></tr>
        <tr><td>Hillary Clinton</td><td>Living History</td></tr>
        <tr><td>Barack Obama</td><td>Dreams from My Father; A Promised Land</td></tr>
        <tr><td>Michelle Obama</td><td>Becoming</td></tr>
        <tr><td>Nelson Mandela</td><td>Long Walk to Freedom</td></tr>
        <tr><td>Malala Yousafzai</td><td>I Am Malala</td></tr>
        <tr><td>Anne Frank</td><td>The Diary of a Young Girl</td></tr>
        <tr><td>Helen Keller</td><td>The Story of My Life</td></tr>
        <tr><td>Charlie Chaplin</td><td>My Autobiography</td></tr>
        <tr><td>Adolf Hitler</td><td>Mein Kampf</td></tr>
      </table>

      <h3>3. Famous Biographies</h3>
      <table>
        <tr><th>Subject</th><th>Biography by</th></tr>
        <tr><td>Akbar</td><td>Akbarnama by Abul Fazl</td></tr>
        <tr><td>Shah Jahan</td><td>Padshahnama by Abdul Hamid Lahori</td></tr>
        <tr><td>Aurangzeb</td><td>Alamgirnama by Mirza Muhammad Kazim</td></tr>
        <tr><td>Mahatma Gandhi</td><td>Mahatma by D.G. Tendulkar (8 vols)</td></tr>
        <tr><td>Tagore</td><td>Various</td></tr>
        <tr><td>Sardar Patel</td><td>Patel: A Life by Rajmohan Gandhi</td></tr>
        <tr><td>Nehru</td><td>Nehru by Sarvepalli Gopal</td></tr>
      </table>

      <h3>4. Books on India / Significant Documents</h3>
      <ul>
        <li><b>The Discovery of India</b> — Jawaharlal Nehru.</li>
        <li><b>Glimpses of World History</b> — Nehru.</li>
        <li><b>Hind Swaraj</b> — Gandhi (1909).</li>
        <li><b>Poverty and Un-British Rule in India</b> — Dadabhai Naoroji.</li>
        <li><b>The Economic History of India</b> — R.C. Dutt.</li>
        <li><b>Gitanjali</b> — Tagore (Nobel 1913).</li>
        <li><b>Indica</b> — Megasthenes (Mauryan India).</li>
        <li><b>Arthashastra</b> — Kautilya.</li>
        <li><b>Ain-i-Akbari</b> — Abul Fazl.</li>
        <li><b>India: A Wounded Civilization</b> — V.S. Naipaul.</li>
        <li><b>India After Gandhi</b> — Ramachandra Guha.</li>
        <li><b>India 2020</b> — APJ Abdul Kalam.</li>
        <li><b>Argumentative Indian</b> — Amartya Sen.</li>
        <li><b>The Idea of India</b> — Sunil Khilnani.</li>
      </ul>

      <h3>5. Constitutional / Official Documents</h3>
      <ul>
        <li><b>Constitution of India</b> — adopted 26 Nov 1949; effective 26 Jan 1950.</li>
        <li><b>Magna Carta</b> (1215) — first major rights document, England.</li>
        <li><b>Declaration of Independence</b> (1776) — USA, by Jefferson.</li>
        <li><b>UN Charter</b> (1945).</li>
        <li><b>Universal Declaration of Human Rights</b> (1948).</li>
      </ul>

      <h3>6. Famous Speeches Compiled in Books</h3>
      <ul>
        <li>"Tryst with Destiny" — Nehru (14 Aug 1947 midnight).</li>
        <li>Vivekananda's Chicago Speech (1893).</li>
        <li>Gandhi's "Quit India" speech (1942).</li>
        <li>Subhas Bose's "Tum mujhe khoon do" (1944).</li>
        <li>Martin Luther King's "I have a dream" (1963).</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>My Experiments with Truth: Gandhi's autobiography.</li>
        <li>Wings of Fire: APJ Kalam.</li>
        <li>Long Walk to Freedom: Mandela.</li>
        <li>The Diary of a Young Girl: Anne Frank.</li>
        <li>I Am Malala: Malala Yousafzai.</li>
        <li>Mein Kampf: Hitler.</li>
        <li>Discovery of India: Nehru.</li>
        <li>Baburnama: Babur.</li>
        <li>Akbarnama: Abul Fazl on Akbar.</li>
        <li>Gitanjali: Tagore (Nobel 1913).</li>
      </ul>
    `,
    mcq: [
      { q: "Holy book of Sikhs:", opts: ["Bible", "Quran", "Guru Granth Sahib", "Vedas"], a: 2, ex: "11th eternal Guru." },
      { q: "Avesta is holy book of:", opts: ["Hindu", "Buddhist", "Parsi/Zoroastrian", "Jain"], a: 2, ex: "Zoroastrianism." },
      { q: "Mahatma Gandhi's autobiography:", opts: ["My Truth", "My Experiments with Truth", "Hind Swaraj", "Wings of Fire"], a: 1, ex: "Story of My Experiments with Truth." },
      { q: "Wings of Fire by:", opts: ["Nehru", "Kalam", "Modi", "Mandela"], a: 1, ex: "APJ Abdul Kalam." },
      { q: "Long Walk to Freedom:", opts: ["Gandhi", "Mandela", "King", "Obama"], a: 1, ex: "Nelson Mandela." },
      { q: "Mein Kampf author:", opts: ["Hitler", "Stalin", "Mussolini", "Lenin"], a: 0, ex: "Adolf Hitler." },
      { q: "Anne Frank's book:", opts: ["The Diary of a Young Girl", "My Life", "Becoming", "I Am Malala"], a: 0, ex: "Holocaust diary." },
      { q: "Discovery of India by:", opts: ["Gandhi", "Patel", "Nehru", "Tagore"], a: 2, ex: "Written in prison." },
      { q: "Becoming was written by:", opts: ["Michelle Obama", "Hillary Clinton", "Indira Gandhi", "Malala"], a: 0, ex: "Michelle Obama memoir." },
      { q: "Hind Swaraj by:", opts: ["Gandhi", "Tilak", "Nehru", "Patel"], a: 0, ex: "Gandhi 1909." },
      { q: "I Am Malala by:", opts: ["Obama", "Malala Yousafzai", "Indira", "Mother Teresa"], a: 1, ex: "Pakistani activist." },
      { q: "Baburnama is autobiography of:", opts: ["Akbar", "Babur", "Humayun", "Aurangzeb"], a: 1, ex: "In Chagatai Turkish." },
      { q: "Tuzuk-i-Jahangiri is by:", opts: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"], a: 1, ex: "Jahangir's memoirs." },
      { q: "Akbarnama biography of Akbar by:", opts: ["Babur", "Abul Fazl", "Faizi", "Badauni"], a: 1, ex: "Court historian." },
      { q: "Argumentative Indian by:", opts: ["Sen", "Naipaul", "Roy", "Guha"], a: 0, ex: "Amartya Sen." },
      { q: "Living History by:", opts: ["Hillary Clinton", "Bill Clinton", "Indira", "Michelle"], a: 0, ex: "Hillary Clinton memoir." },
      { q: "Strictly Personal: Manmohan and Gursharan by:", opts: ["Manmohan Singh", "Daughter (Daman Singh)", "Sonia", "Rahul"], a: 1, ex: "By his daughter." },
      { q: "Untold Story (cricket):", opts: ["Dhoni", "Sachin", "Sehwag", "Dravid"], a: 0, ex: "Dhoni biography." },
      { q: "Gitanjali by:", opts: ["Tagore", "Nehru", "Bose", "Gandhi"], a: 0, ex: "Nobel 1913." },
      { q: "Promised Land:", opts: ["Obama autobiography", "Clinton", "Trump", "Reagan"], a: 0, ex: "Barack Obama vol 2." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 27. SPORTS
  // ───────────────────────────────────────────────────────────────
  T["sgk-sports"] = {
    body: `
      <h2>Sports: Cups, Trophies, Players & Stadia</h2>

      <h3>1. Cricket Trophies</h3>
      <ul>
        <li><b>ICC World Cup (ODI)</b>: every 4 years.</li>
        <li><b>ICC T20 World Cup</b>: every 2 years.</li>
        <li><b>ICC Champions Trophy</b>: discontinued, may return.</li>
        <li><b>IPL Trophy</b>: Indian Premier League.</li>
        <li><b>Ranji Trophy</b>: Indian domestic.</li>
        <li><b>Duleep Trophy</b>: zonal cricket.</li>
        <li><b>Irani Trophy</b>: champion vs Rest of India.</li>
        <li><b>Vijay Hazare Trophy</b>: domestic ODI.</li>
        <li><b>Syed Mushtaq Ali Trophy</b>: domestic T20.</li>
        <li><b>Ashes</b>: England vs Australia Test.</li>
        <li><b>Border-Gavaskar Trophy</b>: India vs Australia.</li>
      </ul>

      <h3>2. Football</h3>
      <ul>
        <li><b>FIFA World Cup</b>: every 4 years; 1st 1930 (Uruguay won); 2022 won by Argentina.</li>
        <li><b>UEFA Champions League</b>: Europe's top club tournament.</li>
        <li><b>UEFA Euro</b>: European national.</li>
        <li><b>Copa America</b>: South American national.</li>
        <li><b>AFC Asian Cup</b>: Asian national.</li>
        <li><b>Indian: Santosh Trophy, I-League, ISL, Federation Cup, Durand Cup</b>.</li>
      </ul>

      <h3>3. Hockey</h3>
      <ul>
        <li><b>World Cup</b>: every 4 years.</li>
        <li><b>Champions Trophy</b>.</li>
        <li><b>India's domestic</b>: Beighton Cup, Aga Khan Cup, Bombay Gold Cup.</li>
      </ul>

      <h3>4. Tennis</h3>
      <ul>
        <li><b>Grand Slams</b> (4 majors):
          <ul>
            <li>Australian Open (January).</li>
            <li>French Open / Roland Garros (May-June; clay).</li>
            <li>Wimbledon (June-July; grass; oldest, 1877).</li>
            <li>US Open (August-September; hard).</li>
          </ul>
        </li>
        <li><b>Davis Cup</b>: Men's national team.</li>
        <li><b>Fed Cup</b> (Billie Jean King Cup): Women's national team.</li>
        <li><b>ATP Finals</b>: Top 8 men.</li>
      </ul>

      <h3>5. Olympic Sports</h3>
      <ul>
        <li>Modern Olympics started: 1896 Athens.</li>
        <li>Winter Olympics started: 1924 Chamonix.</li>
        <li>Olympic motto: "Citius, Altius, Fortius" (Faster, Higher, Stronger) — added "Communiter" (Together) 2021.</li>
        <li>Olympic flag: 5 rings on white — represent 5 continents.</li>
      </ul>

      <h3>6. Game Origin Countries</h3>
      <table>
        <tr><th>Sport</th><th>Origin</th></tr>
        <tr><td>Cricket</td><td>England</td></tr>
        <tr><td>Football</td><td>England</td></tr>
        <tr><td>Hockey</td><td>England/Persia</td></tr>
        <tr><td>Tennis</td><td>France</td></tr>
        <tr><td>Badminton</td><td>England (India "Poona")</td></tr>
        <tr><td>Table Tennis</td><td>England</td></tr>
        <tr><td>Golf</td><td>Scotland</td></tr>
        <tr><td>Baseball</td><td>USA</td></tr>
        <tr><td>Basketball</td><td>USA (James Naismith, 1891)</td></tr>
        <tr><td>Volleyball</td><td>USA (William Morgan, 1895)</td></tr>
        <tr><td>Chess</td><td>India (Chaturanga)</td></tr>
        <tr><td>Polo</td><td>Manipur (India)</td></tr>
        <tr><td>Kabaddi</td><td>India</td></tr>
        <tr><td>Judo</td><td>Japan</td></tr>
        <tr><td>Karate</td><td>Japan</td></tr>
        <tr><td>Taekwondo</td><td>Korea</td></tr>
        <tr><td>Sumo</td><td>Japan</td></tr>
        <tr><td>Rugby</td><td>England</td></tr>
      </table>

      <h3>7. Number of Players (per side)</h3>
      <table>
        <tr><th>Game</th><th>Players</th></tr>
        <tr><td>Cricket</td><td>11</td></tr>
        <tr><td>Football</td><td>11</td></tr>
        <tr><td>Hockey</td><td>11</td></tr>
        <tr><td>Volleyball</td><td>6</td></tr>
        <tr><td>Basketball</td><td>5</td></tr>
        <tr><td>Baseball</td><td>9</td></tr>
        <tr><td>Polo</td><td>4</td></tr>
        <tr><td>Kabaddi</td><td>7</td></tr>
        <tr><td>Kho-Kho</td><td>9 (with 3 reserves)</td></tr>
        <tr><td>Rugby</td><td>15</td></tr>
        <tr><td>Water polo</td><td>7</td></tr>
        <tr><td>Netball</td><td>7</td></tr>
        <tr><td>Lacrosse</td><td>10</td></tr>
      </table>

      <h3>8. Indian Sports Stadia</h3>
      <ul>
        <li><b>Narendra Modi Stadium</b>, Ahmedabad: largest cricket stadium (132,000).</li>
        <li><b>Eden Gardens</b>, Kolkata: oldest test ground in India.</li>
        <li><b>Wankhede</b>, Mumbai.</li>
        <li><b>Chinnaswamy</b>, Bengaluru.</li>
        <li><b>Chepauk</b>, Chennai.</li>
        <li><b>Feroz Shah Kotla / Arun Jaitley Stadium</b>, Delhi.</li>
        <li><b>Salt Lake Stadium</b>, Kolkata: 2nd largest football stadium in world.</li>
      </ul>

      <h3>9. Sports Awards in India</h3>
      <ul>
        <li><b>Major Dhyan Chand Khel Ratna Award</b>: highest sporting honor.</li>
        <li><b>Arjuna Award</b>: outstanding performance.</li>
        <li><b>Dronacharya Award</b>: best coach.</li>
        <li><b>Dhyan Chand Award</b>: lifetime achievement.</li>
        <li><b>Rashtriya Khel Protsahan Puraskar</b>: corporate sports promotion.</li>
        <li>1st Khel Ratna: Viswanathan Anand (1991-92).</li>
      </ul>

      <h3>10. Famous Indian Sportspersons</h3>
      <ul>
        <li>Cricket: Tendulkar, Kohli, Dhoni, Sourav Ganguly, Sunil Gavaskar, Kapil Dev.</li>
        <li>Hockey: Dhyan Chand, Balbir Singh, Sardar Singh.</li>
        <li>Athletics: Milkha Singh, PT Usha, Anju Bobby George, Neeraj Chopra.</li>
        <li>Badminton: Prakash Padukone, P. Gopichand, Saina Nehwal, PV Sindhu, Lakshya Sen.</li>
        <li>Boxing: Mary Kom, Vijender Singh.</li>
        <li>Wrestling: Sushil Kumar, Yogeshwar Dutt, Sakshi Malik.</li>
        <li>Tennis: Leander Paes, Mahesh Bhupathi, Sania Mirza.</li>
        <li>Shooting: Abhinav Bindra, Gagan Narang, Rajyavardhan Rathore.</li>
        <li>Chess: Viswanathan Anand, Praggnanandhaa, Gukesh.</li>
        <li>Golf: Jeev Milkha Singh, Anirban Lahiri.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>FIFA WC 2022: Argentina (Messi).</li>
        <li>Cricket WC 2023: Australia (vs India).</li>
        <li>Wimbledon: oldest grand slam (1877).</li>
        <li>Largest cricket stadium: Modi Stadium Ahmedabad.</li>
        <li>Salt Lake: 2nd largest football stadium.</li>
        <li>Khel Ratna: highest sport award (Indian).</li>
        <li>1st Khel Ratna: Anand 1991-92.</li>
        <li>Olympic motto: Citius, Altius, Fortius.</li>
        <li>Chess origin: India.</li>
        <li>Basketball: USA, 1891.</li>
      </ul>
    `,
    mcq: [
      { q: "FIFA WC 2022 winner:", opts: ["France", "Argentina", "Croatia", "Brazil"], a: 1, ex: "Messi's team." },
      { q: "Cricket WC 2023 winner:", opts: ["India", "Australia", "England", "NZ"], a: 1, ex: "Australia vs India." },
      { q: "Oldest tennis Grand Slam:", opts: ["Australian Open", "Wimbledon", "French", "US Open"], a: 1, ex: "1877." },
      { q: "Olympic motto:", opts: ["Citius Altius Fortius", "Per Aspera", "Festina Lente", "Carpe Diem"], a: 0, ex: "Faster Higher Stronger." },
      { q: "Olympic rings count:", opts: ["3", "4", "5", "6"], a: 2, ex: "5 continents." },
      { q: "Players in football:", opts: ["10", "11", "9", "7"], a: 1, ex: "11 per side." },
      { q: "Players in basketball:", opts: ["5", "7", "9", "6"], a: 0, ex: "5 on court." },
      { q: "Players in kabaddi:", opts: ["5", "7", "9", "11"], a: 1, ex: "7 per side." },
      { q: "Players in polo:", opts: ["4", "7", "9", "11"], a: 0, ex: "4 per team." },
      { q: "Chess originated in:", opts: ["China", "India", "Persia", "Egypt"], a: 1, ex: "Chaturanga." },
      { q: "Basketball invented by:", opts: ["Naismith", "Edison", "Smith", "Watt"], a: 0, ex: "James Naismith 1891." },
      { q: "Wimbledon court surface:", opts: ["Hard", "Clay", "Grass", "Carpet"], a: 2, ex: "Grass." },
      { q: "French Open surface:", opts: ["Hard", "Clay", "Grass", "Carpet"], a: 1, ex: "Clay." },
      { q: "Largest cricket stadium:", opts: ["Eden Gardens", "MCG", "Wankhede", "Modi Stadium"], a: 3, ex: "Ahmedabad 132K." },
      { q: "Highest Indian sport award:", opts: ["Arjuna", "Khel Ratna", "Dronacharya", "Padma"], a: 1, ex: "Khel Ratna." },
      { q: "First Khel Ratna:", opts: ["Anand", "Dhoni", "Tendulkar", "Milkha"], a: 0, ex: "1991-92." },
      { q: "Hockey wizard:", opts: ["Dhyan Chand", "Sardar", "Balbir", "Bhutia"], a: 0, ex: "Major Dhyan Chand." },
      { q: "Neeraj Chopra event:", opts: ["Shotput", "Discus", "Javelin", "100m"], a: 2, ex: "Olympic gold 2020." },
      { q: "Davis Cup is in:", opts: ["Football", "Cricket", "Tennis", "Hockey"], a: 2, ex: "Tennis men national." },
      { q: "Polo origin:", opts: ["England", "Manipur", "Spain", "Russia"], a: 1, ex: "India." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 28. AWARDS & HONOURS
  // ───────────────────────────────────────────────────────────────
  T["sgk-awards"] = {
    body: `
      <h2>Awards & Honours</h2>

      <h3>1. Indian Civilian Awards (in order)</h3>
      <ol>
        <li><b>Bharat Ratna</b>: Highest civilian. Instituted 1954.</li>
        <li><b>Padma Vibhushan</b>: 2nd highest.</li>
        <li><b>Padma Bhushan</b>: 3rd.</li>
        <li><b>Padma Shri</b>: 4th.</li>
      </ol>
      <p>First Bharat Ratna recipients (1954): Dr. S. Radhakrishnan, C. Rajagopalachari, C.V. Raman.</p>
      <p>First Indian-born Nobel: Tagore.</p>

      <h3>2. Bharat Ratna Notable Recipients</h3>
      <ul>
        <li>Dr. Rajendra Prasad, Indira Gandhi, Rajiv Gandhi.</li>
        <li>Mother Teresa, Khan Abdul Ghaffar Khan (1st non-Indian).</li>
        <li>Nelson Mandela.</li>
        <li>Sachin Tendulkar (1st sportsperson, 2014).</li>
        <li>Atal Bihari Vajpayee, Madan Mohan Malviya.</li>
        <li>APJ Abdul Kalam (2nd youngest scientist).</li>
        <li>Pranab Mukherjee, Bhupen Hazarika, Nanaji Deshmukh.</li>
        <li>L.K. Advani (2024).</li>
      </ul>

      <h3>3. Gallantry Awards</h3>
      <ul>
        <li>Wartime: PVC → MVC → VC.</li>
        <li>Peacetime: Ashoka Chakra → Kirti Chakra → Shaurya Chakra.</li>
      </ul>

      <h3>4. Literature Awards</h3>
      <ul>
        <li><b>Jnanpith Award</b>: Highest Indian literary award.</li>
        <li><b>Sahitya Akademi Award</b>: For Indian language literature.</li>
        <li><b>Vyas Samman</b>: Hindi literature.</li>
        <li><b>Saraswati Samman</b>: Indian literature.</li>
        <li><b>Bharatiya Jnanpith</b>: Founded by Sahu Shanti Prasad Jain (1944).</li>
        <li>1st Jnanpith: G. Sankara Kurup (Malayalam, 1965).</li>
      </ul>

      <h3>5. International Awards</h3>
      <ul>
        <li><b>Nobel Prize</b>: instituted 1901. 6 fields: Physics, Chemistry, Medicine, Literature, Peace, Economics (1969).</li>
        <li><b>Booker Prize</b>: English fiction. International Booker also.</li>
        <li><b>Pulitzer Prize</b>: USA journalism and arts.</li>
        <li><b>Magsaysay Award</b>: "Asian Nobel" — Philippines.</li>
        <li><b>Right Livelihood Award</b>: "Alternative Nobel".</li>
        <li><b>Fields Medal</b>: highest math award (Manjul Bhargava, Indian-origin).</li>
        <li><b>Abel Prize</b>: math.</li>
        <li><b>Turing Award</b>: highest in CS.</li>
        <li><b>Pritzker Prize</b>: architecture.</li>
        <li><b>Templeton Prize</b>: religion-science.</li>
        <li><b>Oscar (Academy Awards)</b>: cinema.</li>
        <li><b>Grammy</b>: music.</li>
        <li><b>Emmy</b>: TV.</li>
        <li><b>Tony</b>: theatre.</li>
        <li><b>Cannes Festival</b>: Palme d'Or.</li>
      </ul>

      <h3>6. Indian Cinema Awards</h3>
      <ul>
        <li><b>Dadasaheb Phalke Award</b>: highest film honor.</li>
        <li><b>National Film Awards</b>: by Govt of India.</li>
        <li><b>Filmfare</b>, <b>IIFA</b>, <b>Zee Cine</b>: private awards.</li>
      </ul>

      <h3>7. Major Sports Awards (India)</h3>
      <ul>
        <li>Khel Ratna (highest).</li>
        <li>Arjuna Award.</li>
        <li>Dronacharya (coach).</li>
        <li>Dhyan Chand Award (lifetime).</li>
        <li>Rashtriya Khel Protsahan Puraskar.</li>
        <li>1st Khel Ratna: Anand (1991-92).</li>
      </ul>

      <h3>8. Nobel Laureates of Indian Origin</h3>
      <ul>
        <li>1913 Literature: <b>Rabindranath Tagore</b>.</li>
        <li>1930 Physics: <b>C.V. Raman</b>.</li>
        <li>1968 Medicine: <b>Hargobind Khorana</b>.</li>
        <li>1979 Peace: <b>Mother Teresa</b>.</li>
        <li>1983 Physics: <b>Subramanyan Chandrasekhar</b>.</li>
        <li>1998 Economics: <b>Amartya Sen</b>.</li>
        <li>2001 Literature: <b>V.S. Naipaul</b> (Trinidad-born, Indian origin).</li>
        <li>2009 Chemistry: <b>Venkatraman Ramakrishnan</b> (UK-born Indian).</li>
        <li>2014 Peace: <b>Kailash Satyarthi</b>.</li>
        <li>2019 Economics: <b>Abhijit Banerjee</b>.</li>
      </ul>

      <h3>9. Important Other Awards</h3>
      <ul>
        <li><b>Gandhi Peace Prize</b>: by Govt of India.</li>
        <li><b>Indira Gandhi Peace Prize</b>: international.</li>
        <li><b>Jamnalal Bajaj Award</b>: constructive work.</li>
        <li><b>Tata Innovation Prize</b>.</li>
        <li><b>UNESCO Peace Prize</b>.</li>
        <li><b>WHO Awards</b>.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Bharat Ratna: highest Indian civilian (1954).</li>
        <li>1st BR: Radhakrishnan, Rajagopalachari, C.V. Raman.</li>
        <li>Nobel: 1901, 6 fields.</li>
        <li>Magsaysay: Asian Nobel.</li>
        <li>Booker: English fiction.</li>
        <li>Fields Medal: top math.</li>
        <li>Turing Award: top CS.</li>
        <li>Pulitzer: USA.</li>
        <li>Oscar: film.</li>
        <li>Tagore: 1st Indian Nobel (1913).</li>
      </ul>
    `,
    mcq: [
      { q: "Highest Indian civilian award:", opts: ["Padma Vibhushan", "Bharat Ratna", "Padma Shri", "Padma Bhushan"], a: 1, ex: "Bharat Ratna." },
      { q: "Bharat Ratna instituted:", opts: ["1947", "1950", "1954", "1962"], a: 2, ex: "1954." },
      { q: "1st Bharat Ratna (not single name, set):", opts: ["Radhakrishnan, Rajagopalachari, CV Raman", "Nehru", "Gandhi", "Patel"], a: 0, ex: "Three together." },
      { q: "Bharat Ratna first non-Indian:", opts: ["Nelson Mandela", "Khan Abdul Ghaffar Khan", "Mother Teresa", "Asha Bhonsle"], a: 1, ex: "Frontier Gandhi." },
      { q: "1st sportsperson Bharat Ratna:", opts: ["Dhyan Chand", "Tendulkar", "Anand", "Milkha"], a: 1, ex: "Sachin 2014." },
      { q: "Highest Indian literary award:", opts: ["Sahitya Akademi", "Jnanpith", "Vyas Samman", "Saraswati"], a: 1, ex: "Jnanpith." },
      { q: "Highest film award (India):", opts: ["Filmfare", "Dadasaheb Phalke", "IIFA", "National"], a: 1, ex: "Phalke Award." },
      { q: "Magsaysay is called:", opts: ["European Nobel", "Asian Nobel", "Indian Nobel", "African"], a: 1, ex: "Philippines award." },
      { q: "Nobel Prize started:", opts: ["1900", "1901", "1905", "1910"], a: 1, ex: "1901." },
      { q: "Nobel in Economics added:", opts: ["1901", "1969", "1990", "2001"], a: 1, ex: "1969 by Sweden bank." },
      { q: "Pulitzer Prize is for:", opts: ["Film", "Journalism/literature (USA)", "Math", "Science"], a: 1, ex: "USA award." },
      { q: "Fields Medal is for:", opts: ["Math", "Physics", "Chemistry", "Literature"], a: 0, ex: "Highest math award." },
      { q: "Turing Award:", opts: ["Math", "Computer Science", "Robotics", "Engineering"], a: 1, ex: "Highest CS." },
      { q: "Booker Prize:", opts: ["English fiction", "Poetry", "Drama", "Non-fiction"], a: 0, ex: "Fiction novel." },
      { q: "Oscar award:", opts: ["Music", "Film", "TV", "Theatre"], a: 1, ex: "Academy Awards." },
      { q: "Grammy is for:", opts: ["Film", "Music", "TV", "Sports"], a: 1, ex: "Music." },
      { q: "Mother Teresa got Nobel in:", opts: ["1969", "1979", "1989", "1999"], a: 1, ex: "1979 Peace." },
      { q: "CV Raman Nobel Physics in:", opts: ["1930", "1913", "1968", "1983"], a: 0, ex: "1930." },
      { q: "Amartya Sen Nobel:", opts: ["Literature", "Economics", "Peace", "Physics"], a: 1, ex: "1998." },
      { q: "Kailash Satyarthi Nobel:", opts: ["Literature", "Peace", "Economics", "Chemistry"], a: 1, ex: "2014 Peace." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 29. IMPORTANT DAYS & DATES
  // ───────────────────────────────────────────────────────────────
  T["sgk-days"] = {
    body: `
      <h2>Important Days & Dates</h2>

      <h3>1. January</h3>
      <ul>
        <li>1: New Year, Global Family Day.</li>
        <li>4: World Braille Day.</li>
        <li>9: Pravasi Bharatiya Divas.</li>
        <li>10: World Hindi Day.</li>
        <li>12: National Youth Day (Vivekananda's birthday).</li>
        <li>15: Army Day (India).</li>
        <li>23: Subhas Chandra Bose's birth (Parakram Diwas).</li>
        <li>24: National Girl Child Day.</li>
        <li>25: National Voters' Day, National Tourism Day.</li>
        <li>26: <b>Republic Day</b>; International Customs Day.</li>
        <li>27: International Holocaust Remembrance Day.</li>
        <li>28: Data Protection Day.</li>
        <li>30: Martyrs' Day (Gandhi's death).</li>
      </ul>

      <h3>2. February</h3>
      <ul>
        <li>2: World Wetlands Day.</li>
        <li>4: World Cancer Day.</li>
        <li>11: International Day of Women and Girls in Science.</li>
        <li>13: World Radio Day; National Women's Day (Sarojini Naidu).</li>
        <li>14: Valentine's Day.</li>
        <li>20: World Day of Social Justice.</li>
        <li>21: International Mother Language Day.</li>
        <li>24: Central Excise Day.</li>
        <li>28: National Science Day (CV Raman's discovery).</li>
      </ul>

      <h3>3. March</h3>
      <ul>
        <li>3: World Wildlife Day; World Hearing Day.</li>
        <li>4: National Safety Day.</li>
        <li>8: International Women's Day.</li>
        <li>14: Pi Day.</li>
        <li>15: World Consumer Rights Day.</li>
        <li>20: International Day of Happiness.</li>
        <li>21: World Forestry Day; World Down Syndrome Day; World Poetry Day.</li>
        <li>22: World Water Day.</li>
        <li>23: Shaheed Diwas (Bhagat Singh, Rajguru, Sukhdev); World Meteorological Day.</li>
        <li>24: World TB Day.</li>
        <li>27: World Theatre Day.</li>
      </ul>

      <h3>4. April</h3>
      <ul>
        <li>1: Odisha Day; April Fools'.</li>
        <li>2: World Autism Awareness Day.</li>
        <li>5: National Maritime Day.</li>
        <li>7: World Health Day (WHO founded).</li>
        <li>10: World Homeopathy Day.</li>
        <li>11: National Safe Motherhood Day.</li>
        <li>14: Ambedkar Jayanti.</li>
        <li>17: World Hemophilia Day.</li>
        <li>18: World Heritage Day.</li>
        <li>21: National Civil Services Day.</li>
        <li>22: Earth Day.</li>
        <li>23: World Book Day.</li>
        <li>24: National Panchayati Raj Day.</li>
        <li>25: World Malaria Day.</li>
      </ul>

      <h3>5. May</h3>
      <ul>
        <li>1: International Labour Day, Maharashtra Day, Gujarat Day.</li>
        <li>3: World Press Freedom Day.</li>
        <li>4: Coal Miners' Day.</li>
        <li>5: World Hand Hygiene Day.</li>
        <li>7: Rabindranath Tagore Jayanti.</li>
        <li>8: World Red Cross Day; World Thalassemia Day.</li>
        <li>11: National Technology Day.</li>
        <li>12: International Nurses Day.</li>
        <li>15: International Day of Families.</li>
        <li>17: World Telecommunication Day.</li>
        <li>18: World AIDS Vaccine Day; Museum Day.</li>
        <li>21: Anti-Terrorism Day (Rajiv Gandhi's death).</li>
        <li>22: International Day for Biological Diversity.</li>
        <li>24: Commonwealth Day.</li>
        <li>31: World No Tobacco Day.</li>
      </ul>

      <h3>6. June</h3>
      <ul>
        <li>1: World Milk Day.</li>
        <li>3: World Bicycle Day.</li>
        <li>5: World Environment Day.</li>
        <li>8: World Ocean Day.</li>
        <li>12: World Day Against Child Labour.</li>
        <li>14: World Blood Donor Day.</li>
        <li>15: World Wind Day.</li>
        <li>20: World Refugee Day.</li>
        <li>21: <b>International Day of Yoga</b>.</li>
        <li>23: International Olympic Day.</li>
        <li>26: International Day Against Drug Abuse.</li>
        <li>27: MSME Day.</li>
        <li>29: National Statistics Day.</li>
      </ul>

      <h3>7. July</h3>
      <ul>
        <li>1: National Doctor's Day, GST Day.</li>
        <li>11: World Population Day.</li>
        <li>18: Nelson Mandela International Day.</li>
        <li>26: Kargil Vijay Diwas.</li>
        <li>28: World Hepatitis Day.</li>
        <li>29: International Tiger Day.</li>
      </ul>

      <h3>8. August</h3>
      <ul>
        <li>6: Hiroshima Day.</li>
        <li>9: International Day of World's Indigenous People; Quit India Day.</li>
        <li>12: International Youth Day.</li>
        <li>15: <b>Independence Day</b> (India).</li>
        <li>19: World Humanitarian Day; World Photography Day.</li>
        <li>20: Sadbhavna Diwas (Rajiv Gandhi birth).</li>
        <li>23: National Space Day (Chandrayaan-3 landing).</li>
        <li>29: National Sports Day (Dhyan Chand's birth).</li>
      </ul>

      <h3>9. September</h3>
      <ul>
        <li>5: Teachers' Day (Radhakrishnan); International Day of Charity.</li>
        <li>8: International Literacy Day.</li>
        <li>14: Hindi Diwas.</li>
        <li>15: Engineer's Day (Visvesvaraya); International Day of Democracy.</li>
        <li>16: World Ozone Day.</li>
        <li>21: International Peace Day; Alzheimer's Day.</li>
        <li>27: World Tourism Day.</li>
        <li>29: World Heart Day.</li>
      </ul>

      <h3>10. October</h3>
      <ul>
        <li>1: International Day of Older Persons.</li>
        <li>2: Gandhi Jayanti; International Day of Non-Violence.</li>
        <li>4: World Animal Welfare Day.</li>
        <li>5: World Teachers' Day.</li>
        <li>8: Indian Air Force Day.</li>
        <li>9: World Postal Day.</li>
        <li>10: World Mental Health Day.</li>
        <li>11: International Day of the Girl Child.</li>
        <li>15: World Students' Day (Kalam birth); World White Cane Day.</li>
        <li>16: World Food Day.</li>
        <li>17: International Day for Eradication of Poverty.</li>
        <li>24: UN Day; World Polio Day.</li>
        <li>31: Sardar Vallabhbhai Patel (National Unity Day); Halloween.</li>
      </ul>

      <h3>11. November</h3>
      <ul>
        <li>1: All Saints' Day.</li>
        <li>7: National Cancer Awareness Day.</li>
        <li>11: National Education Day (Maulana Azad birth).</li>
        <li>12: Public Service Broadcasting Day.</li>
        <li>14: Children's Day (Nehru birth).</li>
        <li>16: International Day for Tolerance.</li>
        <li>17: National Epilepsy Day.</li>
        <li>19: International Men's Day; National Integration Day (Indira birth).</li>
        <li>20: Universal Children's Day.</li>
        <li>21: World Television Day.</li>
        <li>26: Constitution Day (Samvidhan Diwas) — adopted 1949.</li>
        <li>29: International Day of Solidarity with Palestinian People.</li>
      </ul>

      <h3>12. December</h3>
      <ul>
        <li>1: World AIDS Day.</li>
        <li>2: National Pollution Control Day.</li>
        <li>3: International Day of Disabled Persons.</li>
        <li>4: Indian Navy Day.</li>
        <li>5: International Volunteer Day.</li>
        <li>7: Indian Armed Forces Flag Day.</li>
        <li>10: Human Rights Day.</li>
        <li>11: International Mountain Day.</li>
        <li>14: National Energy Conservation Day.</li>
        <li>18: Minority Rights Day (India).</li>
        <li>22: National Mathematics Day (Ramanujan birth).</li>
        <li>23: National Farmer's Day (Kisan Diwas).</li>
        <li>24: National Consumer Rights Day.</li>
        <li>25: Christmas; Good Governance Day (Vajpayee birth).</li>
        <li>26: National Veer Bal Diwas; Boxing Day.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>26 Jan: Republic Day.</li>
        <li>15 Aug: Independence Day.</li>
        <li>2 Oct: Gandhi Jayanti.</li>
        <li>21 June: Yoga Day.</li>
        <li>5 June: Environment Day.</li>
        <li>8 March: Women's Day.</li>
        <li>22 April: Earth Day.</li>
        <li>5 Sept: Teachers' Day.</li>
        <li>14 Sept: Hindi Diwas.</li>
        <li>14 Nov: Children's Day.</li>
        <li>22 Dec: Mathematics Day.</li>
        <li>23 Aug: National Space Day.</li>
        <li>15 Jan: Army Day.</li>
      </ul>
    `,
    mcq: [
      { q: "Republic Day:", opts: ["15 Aug", "26 Jan", "2 Oct", "14 Nov"], a: 1, ex: "26 January." },
      { q: "Independence Day:", opts: ["15 Aug", "26 Jan", "2 Oct", "14 Aug"], a: 0, ex: "15 August." },
      { q: "International Yoga Day:", opts: ["1 June", "21 June", "5 June", "30 June"], a: 1, ex: "21 June." },
      { q: "Environment Day:", opts: ["22 April", "5 June", "8 June", "1 Apr"], a: 1, ex: "5 June." },
      { q: "Teachers Day in India:", opts: ["5 Sept", "5 Oct", "14 Nov", "26 Jan"], a: 0, ex: "Radhakrishnan birth." },
      { q: "Children's Day in India:", opts: ["14 Nov", "5 Sept", "26 Jan", "11 Apr"], a: 0, ex: "Nehru's birth." },
      { q: "Hindi Diwas:", opts: ["14 Sept", "14 Nov", "8 Sept", "26 Jan"], a: 0, ex: "14 September." },
      { q: "Earth Day:", opts: ["22 April", "5 June", "22 Mar", "22 July"], a: 0, ex: "22 April." },
      { q: "Water Day:", opts: ["5 June", "22 March", "22 April", "1 May"], a: 1, ex: "22 March." },
      { q: "Women's Day:", opts: ["8 March", "14 Nov", "5 Sept", "21 June"], a: 0, ex: "International." },
      { q: "Army Day (India):", opts: ["15 Jan", "26 Jan", "8 Oct", "4 Dec"], a: 0, ex: "15 January." },
      { q: "Navy Day (India):", opts: ["15 Jan", "4 Dec", "8 Oct", "26 Jan"], a: 1, ex: "December 4." },
      { q: "Air Force Day:", opts: ["15 Jan", "4 Dec", "8 Oct", "26 Jan"], a: 2, ex: "October 8." },
      { q: "Gandhi Jayanti:", opts: ["15 Aug", "2 Oct", "26 Jan", "14 Nov"], a: 1, ex: "2 October." },
      { q: "Math Day (India):", opts: ["22 Dec", "1 Apr", "22 March", "11 May"], a: 0, ex: "Ramanujan birth." },
      { q: "Science Day (India):", opts: ["28 Feb", "11 May", "22 Apr", "5 Jun"], a: 0, ex: "CV Raman discovery." },
      { q: "Tech Day (India):", opts: ["28 Feb", "11 May", "5 Sept", "23 Aug"], a: 1, ex: "Pokhran 1998." },
      { q: "Constitution Day:", opts: ["26 Jan", "26 Nov", "14 Nov", "15 Aug"], a: 1, ex: "Adopted Nov 26, 1949." },
      { q: "Sports Day (India):", opts: ["29 Aug", "29 Sept", "23 Aug", "5 Sept"], a: 0, ex: "Dhyan Chand birth." },
      { q: "Yoga Day declared by:", opts: ["UN (2014)", "PM India", "Both A and B", "WHO"], a: 2, ex: "UN on India proposal." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 30. IMPORTANT ABBREVIATIONS
  // ───────────────────────────────────────────────────────────────
  T["sgk-abbreviations"] = {
    body: `
      <h2>Important Abbreviations</h2>

      <h3>1. Government / Indian</h3>
      <ul>
        <li><b>ATM</b>: Automated Teller Machine</li>
        <li><b>PAN</b>: Permanent Account Number</li>
        <li><b>GST</b>: Goods and Services Tax</li>
        <li><b>TDS</b>: Tax Deducted at Source</li>
        <li><b>UPI</b>: Unified Payments Interface</li>
        <li><b>NEFT</b>: National Electronic Funds Transfer</li>
        <li><b>RTGS</b>: Real-Time Gross Settlement</li>
        <li><b>IMPS</b>: Immediate Payment Service</li>
        <li><b>FDI</b>: Foreign Direct Investment</li>
        <li><b>FII</b>: Foreign Institutional Investor</li>
        <li><b>NRI</b>: Non-Resident Indian</li>
        <li><b>OCI</b>: Overseas Citizen of India</li>
        <li><b>PIO</b>: Person of Indian Origin</li>
        <li><b>FERA</b>: Foreign Exchange Regulation Act</li>
        <li><b>FEMA</b>: Foreign Exchange Management Act</li>
        <li><b>EPF</b>: Employees' Provident Fund</li>
        <li><b>ESIC</b>: Employees' State Insurance Corporation</li>
        <li><b>LIC</b>: Life Insurance Corporation</li>
        <li><b>GIC</b>: General Insurance Corporation</li>
        <li><b>NSE</b>: National Stock Exchange</li>
        <li><b>BSE</b>: Bombay Stock Exchange</li>
        <li><b>SEBI</b>: Securities and Exchange Board of India</li>
        <li><b>RBI</b>: Reserve Bank of India</li>
        <li><b>NPA</b>: Non-Performing Assets</li>
        <li><b>NBFC</b>: Non-Banking Financial Company</li>
        <li><b>SHG</b>: Self-Help Group</li>
        <li><b>SLR</b>: Statutory Liquidity Ratio</li>
        <li><b>CRR</b>: Cash Reserve Ratio</li>
        <li><b>BPL</b>: Below Poverty Line</li>
        <li><b>NREGA</b>: National Rural Employment Guarantee Act</li>
        <li><b>UIDAI</b>: Unique Identification Authority of India (Aadhaar)</li>
        <li><b>CBDT</b>: Central Board of Direct Taxes</li>
        <li><b>CBIC</b>: Central Board of Indirect Taxes and Customs</li>
        <li><b>NITI Aayog</b>: National Institution for Transforming India</li>
        <li><b>NRC</b>: National Register of Citizens</li>
        <li><b>CAA</b>: Citizenship Amendment Act</li>
        <li><b>NPR</b>: National Population Register</li>
      </ul>

      <h3>2. International Organisations</h3>
      <ul>
        <li><b>UN</b>: United Nations</li>
        <li><b>UNESCO</b>: UN Educational, Scientific, Cultural Org.</li>
        <li><b>UNICEF</b>: UN Children's Fund</li>
        <li><b>WHO</b>: World Health Organization</li>
        <li><b>WTO</b>: World Trade Organization</li>
        <li><b>IMF</b>: International Monetary Fund</li>
        <li><b>OPEC</b>: Organization of Petroleum Exporting Countries</li>
        <li><b>NATO</b>: North Atlantic Treaty Organization</li>
        <li><b>SAARC</b>: South Asian Association for Regional Cooperation</li>
        <li><b>ASEAN</b>: Association of Southeast Asian Nations</li>
        <li><b>BRICS</b>: Brazil, Russia, India, China, South Africa</li>
        <li><b>G7</b>: Group of Seven (USA, UK, Canada, France, Germany, Italy, Japan)</li>
        <li><b>G20</b>: Group of Twenty</li>
        <li><b>OECD</b>: Organisation for Economic Co-operation and Development</li>
        <li><b>FAO</b>: Food and Agriculture Organization</li>
        <li><b>IAEA</b>: International Atomic Energy Agency</li>
        <li><b>ILO</b>: International Labour Organization</li>
        <li><b>ICJ</b>: International Court of Justice</li>
        <li><b>ICC</b>: International Cricket Council / International Criminal Court</li>
        <li><b>WIPO</b>: World Intellectual Property Organization</li>
        <li><b>IOC</b>: International Olympic Committee</li>
        <li><b>FIFA</b>: Fédération Internationale de Football Association</li>
        <li><b>SCO</b>: Shanghai Cooperation Organisation</li>
        <li><b>BIMSTEC</b>: Bay of Bengal Initiative</li>
        <li><b>APEC</b>: Asia-Pacific Economic Cooperation</li>
        <li><b>QUAD</b>: India, USA, Japan, Australia</li>
        <li><b>AUKUS</b>: Australia, UK, USA</li>
      </ul>

      <h3>3. Defence & Space</h3>
      <ul>
        <li><b>ISRO</b>: Indian Space Research Organisation</li>
        <li><b>DRDO</b>: Defence Research and Development Organisation</li>
        <li><b>BARC</b>: Bhabha Atomic Research Centre</li>
        <li><b>HAL</b>: Hindustan Aeronautics Limited</li>
        <li><b>BEL</b>: Bharat Electronics Limited</li>
        <li><b>BHEL</b>: Bharat Heavy Electricals Limited</li>
        <li><b>NPCIL</b>: Nuclear Power Corporation of India Limited</li>
        <li><b>CDS</b>: Chief of Defence Staff</li>
        <li><b>NSG</b>: National Security Guard</li>
        <li><b>SPG</b>: Special Protection Group</li>
        <li><b>BSF</b>: Border Security Force</li>
        <li><b>CRPF</b>: Central Reserve Police Force</li>
        <li><b>CISF</b>: Central Industrial Security Force</li>
        <li><b>ITBP</b>: Indo-Tibetan Border Police</li>
        <li><b>SSB</b>: Sashastra Seema Bal</li>
        <li><b>NASA</b>: National Aeronautics and Space Administration (USA)</li>
        <li><b>ESA</b>: European Space Agency</li>
        <li><b>CERN</b>: European Organization for Nuclear Research</li>
      </ul>

      <h3>4. Computers / Internet</h3>
      <ul>
        <li><b>CPU</b>: Central Processing Unit</li>
        <li><b>GPU</b>: Graphics Processing Unit</li>
        <li><b>RAM</b>: Random Access Memory</li>
        <li><b>ROM</b>: Read-Only Memory</li>
        <li><b>HDD</b>: Hard Disk Drive</li>
        <li><b>SSD</b>: Solid State Drive</li>
        <li><b>USB</b>: Universal Serial Bus</li>
        <li><b>OS</b>: Operating System</li>
        <li><b>GUI</b>: Graphical User Interface</li>
        <li><b>CLI</b>: Command Line Interface</li>
        <li><b>WWW</b>: World Wide Web</li>
        <li><b>HTTP</b>: HyperText Transfer Protocol</li>
        <li><b>HTTPS</b>: HTTP Secure</li>
        <li><b>URL</b>: Uniform Resource Locator</li>
        <li><b>HTML</b>: HyperText Markup Language</li>
        <li><b>CSS</b>: Cascading Style Sheets</li>
        <li><b>IP</b>: Internet Protocol</li>
        <li><b>TCP</b>: Transmission Control Protocol</li>
        <li><b>DNS</b>: Domain Name System</li>
        <li><b>FTP</b>: File Transfer Protocol</li>
        <li><b>SMTP</b>: Simple Mail Transfer Protocol</li>
        <li><b>POP</b>: Post Office Protocol</li>
        <li><b>IMAP</b>: Internet Message Access Protocol</li>
        <li><b>LAN</b>: Local Area Network</li>
        <li><b>WAN</b>: Wide Area Network</li>
        <li><b>VPN</b>: Virtual Private Network</li>
        <li><b>ISP</b>: Internet Service Provider</li>
        <li><b>WIFI</b>: Wireless Fidelity</li>
        <li><b>GIF</b>: Graphics Interchange Format</li>
        <li><b>JPEG</b>: Joint Photographic Experts Group</li>
        <li><b>PDF</b>: Portable Document Format</li>
        <li><b>MP3</b>: MPEG Audio Layer 3</li>
        <li><b>API</b>: Application Programming Interface</li>
        <li><b>AI</b>: Artificial Intelligence</li>
        <li><b>ML</b>: Machine Learning</li>
        <li><b>IoT</b>: Internet of Things</li>
        <li><b>VR / AR</b>: Virtual / Augmented Reality</li>
      </ul>

      <h3>5. Health</h3>
      <ul>
        <li><b>WHO</b>: World Health Organization</li>
        <li><b>AIIMS</b>: All India Institute of Medical Sciences</li>
        <li><b>ICU</b>: Intensive Care Unit</li>
        <li><b>OPD</b>: Out-Patient Department</li>
        <li><b>HIV</b>: Human Immunodeficiency Virus</li>
        <li><b>AIDS</b>: Acquired Immunodeficiency Syndrome</li>
        <li><b>BP</b>: Blood Pressure</li>
        <li><b>ECG</b>: Electrocardiogram</li>
        <li><b>MRI</b>: Magnetic Resonance Imaging</li>
        <li><b>CT</b>: Computed Tomography</li>
        <li><b>BMI</b>: Body Mass Index</li>
        <li><b>WBC / RBC</b>: White / Red Blood Cells</li>
        <li><b>DNA / RNA</b>: Deoxy / Ribonucleic Acid</li>
        <li><b>ATP</b>: Adenosine Triphosphate</li>
        <li><b>TB</b>: Tuberculosis</li>
        <li><b>COVID</b>: Coronavirus Disease</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>GST: Goods and Services Tax (2017).</li>
        <li>SEBI: stock market regulator.</li>
        <li>RBI: central bank.</li>
        <li>NATO: military alliance.</li>
        <li>OPEC: oil cartel.</li>
        <li>WWW: Berners-Lee.</li>
        <li>BRICS: 5 emerging economies.</li>
        <li>QUAD: India + USA + Japan + Australia.</li>
        <li>NASA: USA space agency.</li>
        <li>UNESCO: education + science + culture.</li>
      </ul>
    `,
    mcq: [
      { q: "GST stands for:", opts: ["Goods and Services Tax", "General Sales Tax", "Govt Sales Tax", "General Service Tariff"], a: 0, ex: "Goods and Services." },
      { q: "ISRO stands for:", opts: ["Indian Space Research Organisation", "Indian Science", "International Space", "Indian Spaceflight"], a: 0, ex: "Space agency." },
      { q: "NATO stands for:", opts: ["North American Treaty", "North Atlantic Treaty Organisation", "Northern Asia", "New Atlantic"], a: 1, ex: "Military alliance." },
      { q: "BRICS members:", opts: ["Brazil Russia India China S Africa", "Britain Romania India Chad Sudan", "Both correct", "Random"], a: 0, ex: "5 economies." },
      { q: "WWW invented by:", opts: ["Gates", "Berners-Lee", "Jobs", "Zuckerberg"], a: 1, ex: "Tim Berners-Lee." },
      { q: "UPI is:", opts: ["Unified Payments Interface", "United Payment", "Universal Pay", "Uni Payment Index"], a: 0, ex: "Indian payment system." },
      { q: "PAN is:", opts: ["Permanent Account Number", "Personal Account No", "Public Acc Num", "Private"], a: 0, ex: "Income tax ID." },
      { q: "FDI:", opts: ["Foreign Direct Investment", "Foreign Domestic Income", "Fast Direct India", "Fund Develop India"], a: 0, ex: "Investment from abroad." },
      { q: "RBI:", opts: ["Reserve Bank India", "Real Bank India", "Royal Bank India", "Rural Bank India"], a: 0, ex: "Central bank." },
      { q: "SEBI:", opts: ["Sec and Exch Board of India", "Stock Exchange Bank", "South Eastern Bank", "Service Bank"], a: 0, ex: "Stock regulator." },
      { q: "DRDO:", opts: ["Defence R&D Organisation", "Defence Research Development Office", "Defense R&D Org", "All correct"], a: 0, ex: "Defence research." },
      { q: "OPEC:", opts: ["Petroleum exporters", "Energy exporters", "Oil & coal", "Random group"], a: 0, ex: "Oil cartel." },
      { q: "QUAD members:", opts: ["India, USA, Japan, Australia", "China, Russia, India, USA", "Random", "All Asian"], a: 0, ex: "Indo-Pacific group." },
      { q: "ASEAN HQ:", opts: ["Jakarta", "Bangkok", "Singapore", "Manila"], a: 0, ex: "Indonesia." },
      { q: "RAM is:", opts: ["Random Access Memory", "Read Access", "Real Active", "Run Active"], a: 0, ex: "Temporary memory." },
      { q: "HTTP is:", opts: ["HyperText Transfer Protocol", "High Trans Protocol", "Hyper Trans Path", "Hello"], a: 0, ex: "Web protocol." },
      { q: "NREGA:", opts: ["National Rural Employment Guarantee Act", "National Rural Energy", "New Rural", "National Reform"], a: 0, ex: "Job guarantee scheme." },
      { q: "UIDAI:", opts: ["Unique ID Authority", "United Indian Authority", "Universal Indian", "All India ID"], a: 0, ex: "Aadhaar." },
      { q: "WHO:", opts: ["World Health", "World House Org", "Workers Health Org", "Wide Health"], a: 0, ex: "World Health Organization." },
      { q: "ATM:", opts: ["Automated Teller Machine", "Auto Tax Machine", "Adv Teller", "Auto Trans Money"], a: 0, ex: "Banking machine." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 31. MISCELLANEOUS GK
  // ───────────────────────────────────────────────────────────────
  T["sgk-misc"] = {
    body: `
      <h2>Miscellaneous GK</h2>

      <h3>1. Indian Currency Notes</h3>
      <ul>
        <li>₹10: Konark Sun Temple.</li>
        <li>₹20: Ellora Caves.</li>
        <li>₹50: Hampi Stone Chariot.</li>
        <li>₹100: Rani-ki-Vav, Patan.</li>
        <li>₹200: Sanchi Stupa.</li>
        <li>₹500: Red Fort.</li>
        <li>₹2000: Mangalyaan (Mars Orbiter Mission) — withdrawn 2023.</li>
        <li>All notes signed by RBI Governor.</li>
        <li>₹1 note signed by Finance Secretary.</li>
      </ul>

      <h3>2. Indian Capitals and Famous For</h3>
      <ul>
        <li>Mumbai: financial capital, Bollywood.</li>
        <li>Delhi: political capital.</li>
        <li>Bengaluru: IT/Silicon Valley of India.</li>
        <li>Hyderabad: Cyberabad, pearl city.</li>
        <li>Chennai: Detroit of India (auto).</li>
        <li>Pune: Oxford of East.</li>
        <li>Kolkata: City of Joy.</li>
        <li>Surat: Diamond city.</li>
        <li>Coimbatore: Manchester of South.</li>
        <li>Ahmedabad: Manchester of India.</li>
        <li>Jamshedpur: Steel city.</li>
        <li>Lucknow: City of Nawabs.</li>
        <li>Jaipur: Pink City.</li>
        <li>Udaipur: City of Lakes.</li>
        <li>Jodhpur: Blue/Sun City.</li>
        <li>Kanpur: Manchester of East / leather city.</li>
        <li>Ludhiana: Manchester of North.</li>
        <li>Nashik: Wine capital.</li>
        <li>Madurai: Athens of East.</li>
        <li>Varanasi: Spiritual capital.</li>
        <li>Allahabad/Prayagraj: Sangam city.</li>
        <li>Mysuru: City of Palaces.</li>
        <li>Vadodara: Cultural capital of Gujarat.</li>
      </ul>

      <h3>3. Sobriquets & Nicknames (World Cities)</h3>
      <ul>
        <li>Venice: Queen of the Adriatic.</li>
        <li>Rome: Eternal City.</li>
        <li>Paris: City of Light, Fashion Capital.</li>
        <li>New York: Big Apple.</li>
        <li>London: Foggy City.</li>
        <li>Tokyo: City of Lights (Asia).</li>
        <li>Beijing: Forbidden City.</li>
        <li>Singapore: Lion City, Garden City.</li>
        <li>Las Vegas: Sin City.</li>
        <li>Chicago: Windy City.</li>
        <li>Detroit: Motor City.</li>
        <li>Hollywood: Film capital.</li>
        <li>Geneva: City of Peace.</li>
        <li>Berlin: Athens on Spree.</li>
        <li>Bangkok: City of Angels.</li>
        <li>Cairo: City of 1000 Minarets.</li>
        <li>Istanbul: City of Seven Hills.</li>
      </ul>

      <h3>4. Important Indian Government Bodies</h3>
      <ul>
        <li>UPSC: Union Public Service Commission.</li>
        <li>SSC: Staff Selection Commission.</li>
        <li>Election Commission of India (ECI).</li>
        <li>NITI Aayog (replaced Planning Commission, 2015).</li>
        <li>CAG: Comptroller and Auditor General.</li>
        <li>NHRC: National Human Rights Commission.</li>
        <li>NCW: National Commission for Women.</li>
        <li>NCST/NCSC: Tribes/SC.</li>
        <li>CBI: Central Bureau of Investigation.</li>
        <li>CVC: Central Vigilance Commission.</li>
        <li>CIC: Central Information Commission.</li>
        <li>Lokpal.</li>
      </ul>

      <h3>5. Famous Indian Slogans</h3>
      <ul>
        <li>"Jai Hind": Bose.</li>
        <li>"Jai Jawan Jai Kisan": Shastri.</li>
        <li>"Jai Jawan Jai Kisan Jai Vigyan": Vajpayee added.</li>
        <li>"Jai Jawan Jai Kisan Jai Vigyan Jai Anusandhan": Modi.</li>
        <li>"Tum mujhe khoon do, main tumhe azadi dunga": Bose.</li>
        <li>"Inquilab Zindabad": Bhagat Singh.</li>
        <li>"Do or Die" / "Karo ya Maro": Gandhi.</li>
        <li>"Sare Jahan Se Achha": Iqbal.</li>
        <li>"Vande Mataram": Bankim.</li>
        <li>"Garibi Hatao": Indira Gandhi.</li>
        <li>"Sabka Saath Sabka Vikas": Modi.</li>
      </ul>

      <h3>6. Five-Year Plans of India</h3>
      <ul>
        <li>1st: 1951-56 (focus on agriculture).</li>
        <li>2nd: 1956-61 (industrialization, Mahalanobis model).</li>
        <li>11th: 2007-12.</li>
        <li>12th: 2012-17 (last; Planning Commission abolished 2014).</li>
        <li>NITI Aayog now (2015): no plans, just policy.</li>
      </ul>

      <h3>7. Notable Indian Trees, Birds, Animals</h3>
      <ul>
        <li>Indian National Animal: Tiger.</li>
        <li>Bengal Tiger: most famous; project Tiger 1973.</li>
        <li>Asiatic Lion: only in Gir, Gujarat.</li>
        <li>Indian Elephant: heritage animal.</li>
        <li>Indian Rhino: Kaziranga.</li>
        <li>Snow Leopard: Ladakh, Himalayas.</li>
        <li>One-horned Rhino: Indian, in Assam.</li>
        <li>Common birds: Peacock (national), Sarus crane, Crow, Mynas.</li>
        <li>State birds vary.</li>
      </ul>

      <h3>8. Largest in India (Misc)</h3>
      <ul>
        <li>Largest Library: National Library, Kolkata.</li>
        <li>Largest auditorium: Sri Shanmukhananda, Mumbai (~2,800 seats).</li>
        <li>Largest cantilever bridge: Howrah Bridge.</li>
        <li>Largest book fair: Kolkata Book Fair.</li>
        <li>Highest gallantry: PVC.</li>
        <li>Largest electric power station (hydroelectric): Tehri Dam.</li>
        <li>Largest planetarium: Birla, Kolkata.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Bengaluru: Silicon Valley of India.</li>
        <li>Mumbai: financial capital.</li>
        <li>Chennai: Detroit of India.</li>
        <li>Jaipur: Pink City.</li>
        <li>Coimbatore: Manchester of South.</li>
        <li>Kolkata: City of Joy.</li>
        <li>5-year plans started: 1951.</li>
        <li>Planning Commission replaced by NITI Aayog: 2015.</li>
        <li>National Library: Kolkata.</li>
      </ul>
    `,
    mcq: [
      { q: "Silicon Valley of India:", opts: ["Mumbai", "Bengaluru", "Hyderabad", "Pune"], a: 1, ex: "Bengaluru." },
      { q: "Pink City:", opts: ["Udaipur", "Jaipur", "Jodhpur", "Jaisalmer"], a: 1, ex: "Jaipur." },
      { q: "Detroit of India:", opts: ["Mumbai", "Chennai", "Delhi", "Pune"], a: 1, ex: "Chennai (automobile)." },
      { q: "City of Joy:", opts: ["Mumbai", "Kolkata", "Delhi", "Pune"], a: 1, ex: "Kolkata." },
      { q: "Diamond city of India:", opts: ["Mumbai", "Surat", "Ahmedabad", "Jaipur"], a: 1, ex: "Surat." },
      { q: "Manchester of India:", opts: ["Mumbai", "Ahmedabad", "Surat", "Coimbatore"], a: 1, ex: "Ahmedabad." },
      { q: "Steel city:", opts: ["Mumbai", "Jamshedpur", "Hyderabad", "Pune"], a: 1, ex: "Tata Steel." },
      { q: "City of Lakes:", opts: ["Udaipur", "Bhopal", "Nainital", "Both A and B"], a: 0, ex: "Udaipur." },
      { q: "Wine capital of India:", opts: ["Mumbai", "Nashik", "Pune", "Goa"], a: 1, ex: "Nashik." },
      { q: "Eternal City (Rome):", opts: ["Rome", "Athens", "Paris", "Venice"], a: 0, ex: "Rome." },
      { q: "Big Apple:", opts: ["London", "Paris", "New York", "Tokyo"], a: 2, ex: "NYC." },
      { q: "Sin City:", opts: ["New York", "Las Vegas", "Paris", "Bangkok"], a: 1, ex: "Vegas." },
      { q: "Lion City:", opts: ["Singapore", "Tokyo", "Bangkok", "HK"], a: 0, ex: "Singapore." },
      { q: "Garibi Hatao slogan:", opts: ["Nehru", "Indira", "Modi", "Rao"], a: 1, ex: "Indira Gandhi." },
      { q: "First 5-year plan:", opts: ["1947-52", "1951-56", "1955-60", "1950-55"], a: 1, ex: "1951-56." },
      { q: "Planning Commission replaced by:", opts: ["NITI Aayog (2015)", "Yojana", "Vikas", "Niyojan"], a: 0, ex: "2015." },
      { q: "Mangalyaan on which note (now withdrawn):", opts: ["₹500", "₹1000", "₹2000", "₹100"], a: 2, ex: "₹2000 (withdrawn 2023)." },
      { q: "Konark Sun Temple on which note:", opts: ["₹10", "₹50", "₹100", "₹200"], a: 0, ex: "₹10." },
      { q: "Red Fort on which note:", opts: ["₹100", "₹500", "₹200", "₹50"], a: 1, ex: "₹500." },
      { q: "Foggy City:", opts: ["Paris", "London", "Tokyo", "Berlin"], a: 1, ex: "London." }
    ]
  };

})();
