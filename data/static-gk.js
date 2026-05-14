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

})();
