(function() {
  const T = window.TOPICS = window.TOPICS || {};

  // ───────────────────────────────────────────────────────────────
  // 1. INTRODUCTION TO COMPUTERS
  // ───────────────────────────────────────────────────────────────
  T["comp-intro"] = {
    body: `
      <h2>Introduction to Computers</h2>

      <h3>1. What is a Computer?</h3>
      <p>A computer is an electronic device that accepts input, processes it as per instructions, and produces output. It can store data, perform calculations, and run programs.</p>

      <h3>2. Basic Functions (IPO + Storage)</h3>
      <ol>
        <li><b>Input</b>: receives data (keyboard, mouse).</li>
        <li><b>Processing</b>: handles instructions (CPU).</li>
        <li><b>Output</b>: shows result (monitor, printer).</li>
        <li><b>Storage</b>: keeps data (HDD, SSD, RAM, ROM).</li>
      </ol>

      <h3>3. Characteristics</h3>
      <ul>
        <li>Speed: very fast (millions of operations per second).</li>
        <li>Accuracy: produces correct output if instructions are right.</li>
        <li>Storage: large capacity.</li>
        <li>Versatility: many applications.</li>
        <li>Automation: works without human intervention.</li>
        <li>Diligence: doesn't get tired.</li>
        <li>Reliability: consistent.</li>
      </ul>

      <h3>4. History of Computers</h3>

      <h4>Pre-computer Era</h4>
      <ul>
        <li><b>Abacus</b> (~3000 BCE): first calculating device.</li>
        <li><b>Pascaline</b> (1642): Blaise Pascal — mechanical calculator.</li>
        <li><b>Leibniz Calculator</b> (1671): German mathematician.</li>
        <li><b>Jacquard Loom</b> (1801): used punched cards.</li>
        <li><b>Analytical Engine</b> (1837): <b>Charles Babbage</b> — Father of Computers.</li>
        <li><b>Ada Lovelace</b>: first programmer; worked on Babbage's machine.</li>
      </ul>

      <h4>Modern Era</h4>
      <ul>
        <li><b>ENIAC</b> (1946): first electronic computer; used vacuum tubes; 30 tons.</li>
        <li><b>UNIVAC</b> (1951): first commercial computer.</li>
        <li><b>IBM</b>: dominant in 1950s-60s.</li>
        <li><b>Microprocessor</b> (1971): Intel 4004.</li>
        <li><b>Apple I, II</b> (1976-77): first personal computers.</li>
        <li><b>IBM PC</b> (1981).</li>
        <li><b>Macintosh</b> (1984): GUI by Apple.</li>
        <li><b>Windows 1.0</b> (1985) by Microsoft.</li>
        <li><b>WWW</b> (1989): Tim Berners-Lee.</li>
      </ul>

      <h3>5. Father of Computers</h3>
      <ul>
        <li><b>Charles Babbage</b>: father of computer (mechanical concept, 1837).</li>
        <li><b>Alan Turing</b>: father of modern/theoretical computer science.</li>
        <li><b>John von Neumann</b>: stored-program architecture.</li>
        <li><b>Ada Lovelace</b>: first programmer.</li>
        <li><b>Tim Berners-Lee</b>: father of WWW.</li>
        <li><b>Vint Cerf, Bob Kahn</b>: fathers of internet (TCP/IP).</li>
      </ul>

      <h3>6. Father of Indian Computers</h3>
      <ul>
        <li><b>Rajiv Gandhi</b>: introduced computers to India; "Father of Indian IT".</li>
        <li><b>Vijay Bhatkar</b>: developed PARAM (India's first supercomputer, 1991).</li>
        <li><b>N. Seshagiri</b>: NIC founder.</li>
        <li><b>F.C. Kohli</b>: father of Indian IT industry (TCS).</li>
      </ul>

      <h3>7. Generations of Computers</h3>
      <table>
        <tr><th>Gen</th><th>Years</th><th>Technology</th><th>Examples</th></tr>
        <tr><td>1st</td><td>1940-56</td><td>Vacuum tubes</td><td>ENIAC, UNIVAC</td></tr>
        <tr><td>2nd</td><td>1956-63</td><td>Transistors</td><td>IBM 1401</td></tr>
        <tr><td>3rd</td><td>1964-71</td><td>Integrated Circuits (IC)</td><td>IBM 360</td></tr>
        <tr><td>4th</td><td>1971-Present</td><td>Microprocessors (VLSI)</td><td>PCs, modern computers</td></tr>
        <tr><td>5th</td><td>Present-Future</td><td>AI, parallel processing</td><td>AI systems, robots</td></tr>
      </table>

      <h3>8. Indian Supercomputers</h3>
      <ul>
        <li><b>PARAM 8000</b> (1991): first Indian supercomputer (C-DAC, Pune; Bhatkar).</li>
        <li><b>PARAM Yuva, Padma, Brahma, Siddhi-AI</b>: later versions.</li>
        <li><b>PARAM Pravega</b> (2022): at IISc Bengaluru.</li>
        <li><b>National Supercomputing Mission (NSM)</b>: 2015.</li>
        <li>India: 4th country to develop supercomputer in 1980s.</li>
      </ul>

      <h3>9. Computer Day in India</h3>
      <ul>
        <li>World Computer Literacy Day: December 2.</li>
        <li>National Computer Security Day: November 30.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Father of computers: Charles Babbage.</li>
        <li>Father of modern CS: Alan Turing.</li>
        <li>Father of WWW: Tim Berners-Lee.</li>
        <li>First programmer: Ada Lovelace.</li>
        <li>ENIAC: 1946.</li>
        <li>PARAM: 1st Indian supercomputer (1991).</li>
        <li>Rajiv Gandhi: father of Indian IT.</li>
        <li>F.C. Kohli: TCS, IT industry.</li>
      </ul>
    `,
    mcq: [
      { q: "Father of computers:", opts: ["Turing", "Babbage", "Pascal", "Newton"], a: 1, ex: "Charles Babbage." },
      { q: "First programmer:", opts: ["Babbage", "Ada Lovelace", "Turing", "Pascal"], a: 1, ex: "Ada Lovelace." },
      { q: "ENIAC year:", opts: ["1939", "1946", "1956", "1971"], a: 1, ex: "1946." },
      { q: "1st Indian supercomputer:", opts: ["Cray", "PARAM 8000", "Tianhe", "Sunway"], a: 1, ex: "C-DAC 1991." },
      { q: "Father of Indian IT:", opts: ["Rajiv Gandhi", "Modi", "Indira", "Nehru"], a: 0, ex: "Brought computers." },
      { q: "PARAM by:", opts: ["Bhatkar", "Bhabha", "Sarabhai", "Kalam"], a: 0, ex: "Vijay Bhatkar." },
      { q: "1st gen used:", opts: ["Vacuum tubes", "Transistors", "ICs", "Microprocessors"], a: 0, ex: "1940s-50s." },
      { q: "4th generation:", opts: ["Vacuum tubes", "Transistors", "ICs", "Microprocessors"], a: 3, ex: "1971+." },
      { q: "Father of WWW:", opts: ["Gates", "Jobs", "Berners-Lee", "Zuckerberg"], a: 2, ex: "Tim Berners-Lee 1989." },
      { q: "Father of modern computer science:", opts: ["Babbage", "Turing", "Newton", "Einstein"], a: 1, ex: "Alan Turing." },
      { q: "Abacus is:", opts: ["Modern device", "Earliest calculating tool", "Computer", "ROM"], a: 1, ex: "~3000 BCE." },
      { q: "World Computer Literacy Day:", opts: ["1 Dec", "2 Dec", "5 Dec", "30 Nov"], a: 1, ex: "December 2." },
      { q: "Speed of computer measured in:", opts: ["MHz/GHz", "Volts", "Joules", "Hours"], a: 0, ex: "Clock speed." },
      { q: "UNIVAC was:", opts: ["First electronic", "First commercial computer", "First Indian", "First mainframe"], a: 1, ex: "1951." },
      { q: "Stored-program concept by:", opts: ["Babbage", "Turing", "von Neumann", "Pascal"], a: 2, ex: "John von Neumann." },
      { q: "Microprocessor invented in:", opts: ["1965", "1971 (Intel 4004)", "1975", "1981"], a: 1, ex: "1971." },
      { q: "Apple's first GUI computer:", opts: ["Apple I", "Apple II", "Macintosh", "iMac"], a: 2, ex: "1984." },
      { q: "Father of Internet (TCP/IP):", opts: ["Berners-Lee", "Cerf and Kahn", "Gates", "Turing"], a: 1, ex: "Vint Cerf + Bob Kahn." },
      { q: "C-DAC HQ:", opts: ["Mumbai", "Bengaluru", "Pune", "Delhi"], a: 2, ex: "Pune." },
      { q: "National Supercomputing Mission launched:", opts: ["2010", "2015", "2018", "2020"], a: 1, ex: "2015." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 2. TYPES & GENERATIONS OF COMPUTERS
  // ───────────────────────────────────────────────────────────────
  T["comp-types"] = {
    body: `
      <h2>Types & Generations of Computers</h2>

      <h3>1. Classification by Size & Capacity</h3>

      <h4>(a) Supercomputer</h4>
      <ul>
        <li>Most powerful, expensive.</li>
        <li>For complex calculations: weather, scientific research, atomic simulations, AI.</li>
        <li>Examples: Fugaku (Japan), Frontier (USA), Summit (USA), PARAM (India).</li>
        <li>Speed in TFLOPs / PFLOPs.</li>
      </ul>

      <h4>(b) Mainframe</h4>
      <ul>
        <li>Large, very reliable.</li>
        <li>Used by big organizations: banks, airlines, governments.</li>
        <li>Many users simultaneously.</li>
        <li>Examples: IBM Z series.</li>
      </ul>

      <h4>(c) Mini Computer</h4>
      <ul>
        <li>Medium-sized; multi-user (few hundred).</li>
        <li>Used in medium businesses, factories.</li>
        <li>Largely obsolete now.</li>
      </ul>

      <h4>(d) Microcomputer (Personal Computer / PC)</h4>
      <ul>
        <li>Most common; uses microprocessor.</li>
        <li>Types:
          <ul>
            <li><b>Desktop</b>: stationary.</li>
            <li><b>Laptop / Notebook</b>: portable.</li>
            <li><b>Tablet</b>: touchscreen.</li>
            <li><b>Smartphone</b>: pocket-sized.</li>
            <li><b>Workstation</b>: powerful PC for engineering, graphics.</li>
            <li><b>Server</b>: for network services.</li>
          </ul>
        </li>
      </ul>

      <h3>2. Classification by Data Type</h3>
      <ul>
        <li><b>Digital Computer</b>: works on discrete data (0s and 1s); modern computers.</li>
        <li><b>Analog Computer</b>: works on continuous data; specialized scientific.</li>
        <li><b>Hybrid Computer</b>: combines both; used in hospitals, weather forecasting.</li>
      </ul>

      <h3>3. Classification by Purpose</h3>
      <ul>
        <li><b>General Purpose</b>: PCs, laptops — multiple tasks.</li>
        <li><b>Special Purpose</b>: ATM, traffic light controller, washing machine, automobile ECU.</li>
      </ul>

      <h3>4. Generations Detail</h3>

      <h4>1st Gen (1940-1956)</h4>
      <ul>
        <li><b>Vacuum tubes</b> used.</li>
        <li>Very large, heat, slow.</li>
        <li>Machine language only.</li>
        <li>Punched cards.</li>
        <li>Examples: ENIAC, UNIVAC, EDVAC.</li>
      </ul>

      <h4>2nd Gen (1956-1963)</h4>
      <ul>
        <li><b>Transistors</b> replaced tubes.</li>
        <li>Smaller, faster, more reliable.</li>
        <li>Assembly language (low-level).</li>
        <li>Magnetic core memory.</li>
        <li>Examples: IBM 1401, 7090.</li>
      </ul>

      <h4>3rd Gen (1964-1971)</h4>
      <ul>
        <li><b>Integrated Circuits (IC)</b>: many transistors on chip.</li>
        <li>Much smaller and cheaper.</li>
        <li>High-level languages: FORTRAN, COBOL, BASIC.</li>
        <li>Examples: IBM 360, PDP-8.</li>
      </ul>

      <h4>4th Gen (1971-Present)</h4>
      <ul>
        <li><b>Microprocessor</b>: entire CPU on one chip.</li>
        <li>VLSI (Very Large Scale Integration).</li>
        <li>Personal computers.</li>
        <li>GUI, mouse, networking.</li>
        <li>Languages: C, C++, Java.</li>
        <li>Examples: Intel 4004, Apple, IBM PC, Pentium, Core.</li>
      </ul>

      <h4>5th Gen (Present-Future)</h4>
      <ul>
        <li><b>AI</b> (Artificial Intelligence), <b>parallel processing</b>, <b>quantum computing</b>.</li>
        <li>Natural language processing.</li>
        <li>Robotics.</li>
        <li>Examples: IBM Watson, ChatGPT, Tesla Autopilot, AlphaGo.</li>
      </ul>

      <h3>5. Top Supercomputers (Current)</h3>
      <table>
        <tr><th>Name</th><th>Country</th><th>Speed</th></tr>
        <tr><td>Frontier (top)</td><td>USA (Oak Ridge)</td><td>1.1+ exaFLOPS</td></tr>
        <tr><td>Aurora</td><td>USA</td><td>~1 exaFLOPS</td></tr>
        <tr><td>Fugaku</td><td>Japan</td><td>~442 PFLOPS</td></tr>
        <tr><td>LUMI</td><td>Finland</td><td>~309 PFLOPS</td></tr>
        <tr><td>Leonardo</td><td>Italy</td><td>~174 PFLOPS</td></tr>
        <tr><td>Summit</td><td>USA</td><td>~148 PFLOPS</td></tr>
        <tr><td>AIRAWAT</td><td>India</td><td>~13 PFLOPS (top in India)</td></tr>
        <tr><td>PARAM Siddhi-AI</td><td>India</td><td>~5.2 PFLOPS</td></tr>
      </table>
      <p>Top supercomputer lists: <b>TOP500</b> (ranks fastest globally).</p>

      <h3>🎯 Tips</h3>
      <ul>
        <li>5 generations of computers.</li>
        <li>1st: vacuum tubes; 4th: microprocessors.</li>
        <li>Supercomputers: weather, defense, research.</li>
        <li>Mainframes: banking, airline.</li>
        <li>PCs: personal use.</li>
        <li>Digital, Analog, Hybrid.</li>
        <li>Top supercomputer: Frontier (USA).</li>
        <li>India's top: AIRAWAT.</li>
      </ul>
    `,
    mcq: [
      { q: "Most powerful computer type:", opts: ["PC", "Server", "Supercomputer", "Mainframe"], a: 2, ex: "Supercomputer." },
      { q: "Used in banking:", opts: ["PC", "Supercomputer", "Mainframe", "Tablet"], a: 2, ex: "Mainframes." },
      { q: "First-gen tech:", opts: ["Vacuum tubes", "Transistors", "ICs", "Microprocessors"], a: 0, ex: "1940-56." },
      { q: "4th-gen tech:", opts: ["Vacuum tubes", "Transistors", "ICs", "Microprocessors"], a: 3, ex: "1971+." },
      { q: "5th gen focus:", opts: ["Vacuum", "AI", "Transistors", "Tubes"], a: 1, ex: "AI, quantum." },
      { q: "Top supercomputer (2023):", opts: ["Fugaku", "Summit", "Frontier", "AIRAWAT"], a: 2, ex: "USA Oak Ridge." },
      { q: "India's top supercomputer:", opts: ["PARAM", "AIRAWAT", "Siddhi", "Cray"], a: 1, ex: "13 PFLOPS." },
      { q: "PARAM developed at:", opts: ["IIT", "C-DAC (Pune)", "ISRO", "BARC"], a: 1, ex: "1991." },
      { q: "Analog computer works on:", opts: ["Discrete data", "Continuous data", "Both", "Light"], a: 1, ex: "Continuous signals." },
      { q: "Digital computer uses:", opts: ["Continuous", "Discrete (0/1)", "Light", "Sound"], a: 1, ex: "Binary." },
      { q: "ENIAC was:", opts: ["1st mainframe", "1st electronic computer", "1st PC", "1st microcomputer"], a: 1, ex: "1946." },
      { q: "UNIVAC was:", opts: ["1st commercial computer", "1st PC", "1st Indian", "1st supercomputer"], a: 0, ex: "1951." },
      { q: "Intel 4004 was:", opts: ["1st PC", "1st microprocessor", "1st chip", "1st laptop"], a: 1, ex: "1971." },
      { q: "Apple's iconic computer:", opts: ["IBM PC", "Macintosh", "Compaq", "Dell"], a: 1, ex: "1984 GUI." },
      { q: "Indian supercomputer ranking list:", opts: ["TOP500", "TOP100", "TOP10", "PARAM list"], a: 0, ex: "TOP500." },
      { q: "Cheapest computer is:", opts: ["Supercomputer", "Mainframe", "PC (varies)", "Server"], a: 2, ex: "PC is cheapest of these." },
      { q: "Hybrid computer used in:", opts: ["Hospital, weather", "Bank only", "Gaming", "ATM"], a: 0, ex: "Analog + digital." },
      { q: "Workstation is:", opts: ["Mini computer", "Powerful PC for engineering/graphics", "Mainframe", "Supercomputer"], a: 1, ex: "High-end PC." },
      { q: "GUI introduced widely with:", opts: ["1st gen", "2nd gen", "4th gen (microprocessor)", "5th gen"], a: 2, ex: "Macintosh, Windows." },
      { q: "Tablet is:", opts: ["Mainframe", "Microcomputer", "Mini", "Super"], a: 1, ex: "Type of PC." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 3. COMPONENTS: HARDWARE & SOFTWARE
  // ───────────────────────────────────────────────────────────────
  T["comp-components"] = {
    body: `
      <h2>Components: Hardware & Software</h2>

      <h3>1. Hardware vs Software</h3>
      <ul>
        <li><b>Hardware</b>: physical components (CPU, RAM, monitor).</li>
        <li><b>Software</b>: programs and instructions (Windows, MS Office).</li>
      </ul>

      <h3>2. Main Hardware Components</h3>

      <h4>(a) Input Devices</h4>
      <ul>
        <li>Keyboard.</li>
        <li>Mouse.</li>
        <li>Scanner.</li>
        <li>Microphone.</li>
        <li>Webcam.</li>
        <li>Touchscreen.</li>
        <li>Light pen.</li>
        <li>Joystick.</li>
        <li>OCR (Optical Character Recognition).</li>
        <li>OMR (Optical Mark Recognition) — for exam sheets.</li>
        <li>MICR (Magnetic Ink Character Recognition) — bank cheques.</li>
        <li>Barcode reader.</li>
        <li>Biometric scanner.</li>
      </ul>

      <h4>(b) Output Devices</h4>
      <ul>
        <li>Monitor (CRT, LCD, LED, OLED, Plasma).</li>
        <li>Printer:
          <ul>
            <li>Dot Matrix (impact).</li>
            <li>Inkjet.</li>
            <li>Laser.</li>
            <li>3D printer.</li>
          </ul>
        </li>
        <li>Speaker.</li>
        <li>Headphones.</li>
        <li>Projector.</li>
        <li>Plotter (large format).</li>
      </ul>

      <h4>(c) CPU (Central Processing Unit)</h4>
      <ul>
        <li>Brain of computer.</li>
        <li>3 parts:
          <ul>
            <li><b>ALU</b> (Arithmetic Logic Unit): calculations and logical ops.</li>
            <li><b>CU</b> (Control Unit): manages operations.</li>
            <li><b>Registers</b>: fast small memory.</li>
          </ul>
        </li>
        <li>Speed measured in GHz.</li>
        <li>Examples: Intel Core (i3, i5, i7, i9), AMD Ryzen, Apple M-series.</li>
      </ul>

      <h4>(d) Memory</h4>

      <h5>Primary Memory</h5>
      <ul>
        <li><b>RAM (Random Access Memory)</b>: volatile (loses data on power-off); fast.
          <ul>
            <li>DRAM, SRAM.</li>
          </ul>
        </li>
        <li><b>ROM (Read-Only Memory)</b>: non-volatile; stores boot info.
          <ul>
            <li>PROM (Programmable), EPROM (Erasable), EEPROM.</li>
            <li>BIOS stored in ROM.</li>
          </ul>
        </li>
        <li><b>Cache memory</b>: very fast, near CPU. L1, L2, L3.</li>
      </ul>

      <h5>Secondary Memory (Storage)</h5>
      <ul>
        <li><b>HDD</b> (Hard Disk Drive): magnetic, mechanical.</li>
        <li><b>SSD</b> (Solid State Drive): flash, no moving parts, faster.</li>
        <li><b>Optical</b>: CD (700 MB), DVD (4.7 GB+), Blu-ray (25-128 GB).</li>
        <li><b>USB flash drive / pen drive</b>.</li>
        <li><b>Memory card</b>: SD, microSD.</li>
        <li><b>Magnetic tape</b>: archival.</li>
        <li><b>Cloud storage</b>: Google Drive, Dropbox.</li>
      </ul>

      <h4>(e) Motherboard</h4>
      <ul>
        <li>Main circuit board.</li>
        <li>Connects CPU, RAM, storage, ports.</li>
      </ul>

      <h4>(f) Power Supply (SMPS)</h4>
      <ul>
        <li>Switched Mode Power Supply.</li>
        <li>Converts AC to DC.</li>
      </ul>

      <h3>3. Memory Units</h3>
      <table>
        <tr><th>Unit</th><th>Size</th></tr>
        <tr><td>1 Bit</td><td>0 or 1</td></tr>
        <tr><td>1 Byte</td><td>8 bits</td></tr>
        <tr><td>1 KB</td><td>1024 Bytes</td></tr>
        <tr><td>1 MB</td><td>1024 KB</td></tr>
        <tr><td>1 GB</td><td>1024 MB</td></tr>
        <tr><td>1 TB</td><td>1024 GB</td></tr>
        <tr><td>1 PB (Petabyte)</td><td>1024 TB</td></tr>
        <tr><td>1 EB (Exabyte)</td><td>1024 PB</td></tr>
        <tr><td>1 ZB (Zettabyte)</td><td>1024 EB</td></tr>
        <tr><td>1 YB (Yottabyte)</td><td>1024 ZB</td></tr>
        <tr><td>1 Nibble</td><td>4 bits</td></tr>
      </table>

      <h3>4. Software Types</h3>

      <h4>(a) System Software</h4>
      <ul>
        <li><b>Operating System (OS)</b>: Windows, Linux, macOS, Android, iOS, Unix.</li>
        <li><b>Utility Programs</b>: antivirus, backup, file compression.</li>
        <li><b>Device Drivers</b>: for printer, sound card, etc.</li>
        <li><b>Firmware</b>: low-level (BIOS).</li>
      </ul>

      <h4>(b) Application Software</h4>
      <ul>
        <li><b>Word processors</b>: MS Word, Google Docs.</li>
        <li><b>Spreadsheets</b>: MS Excel, Google Sheets.</li>
        <li><b>Presentation</b>: MS PowerPoint, Google Slides.</li>
        <li><b>Database</b>: MS Access, MySQL, Oracle.</li>
        <li><b>Image editing</b>: Photoshop, GIMP.</li>
        <li><b>Browsers</b>: Chrome, Firefox, Safari, Edge.</li>
        <li><b>Media players</b>: VLC, Windows Media Player.</li>
      </ul>

      <h4>(c) Programming Languages</h4>
      <ul>
        <li><b>Low-level</b>: Machine code, Assembly.</li>
        <li><b>High-level</b>: C, C++, Java, Python, JavaScript, PHP, Ruby, Swift, Go, Rust.</li>
        <li><b>Web</b>: HTML, CSS, JavaScript.</li>
      </ul>

      <h3>5. Operating Systems</h3>
      <ul>
        <li>Windows (Microsoft): most common desktop OS.</li>
        <li>macOS (Apple).</li>
        <li>Linux (open source): Ubuntu, Fedora, Debian.</li>
        <li>Unix.</li>
        <li>Android (Google): mobile.</li>
        <li>iOS (Apple): mobile.</li>
        <li>Chrome OS (Google).</li>
        <li>India: BOSS (Bharat Operating System Solutions).</li>
      </ul>

      <h3>6. File Extensions</h3>
      <table>
        <tr><th>Extension</th><th>Type</th></tr>
        <tr><td>.docx</td><td>MS Word</td></tr>
        <tr><td>.xlsx</td><td>MS Excel</td></tr>
        <tr><td>.pptx</td><td>MS PowerPoint</td></tr>
        <tr><td>.pdf</td><td>Portable Document</td></tr>
        <tr><td>.txt</td><td>Text</td></tr>
        <tr><td>.jpg / .png</td><td>Image</td></tr>
        <tr><td>.gif</td><td>Animated image</td></tr>
        <tr><td>.mp3</td><td>Audio</td></tr>
        <tr><td>.mp4</td><td>Video</td></tr>
        <tr><td>.exe</td><td>Executable (Windows)</td></tr>
        <tr><td>.zip / .rar</td><td>Compressed</td></tr>
        <tr><td>.html</td><td>Web page</td></tr>
        <tr><td>.css</td><td>Web styles</td></tr>
        <tr><td>.js</td><td>JavaScript</td></tr>
      </table>

      <h3>🎯 Tips</h3>
      <ul>
        <li>1 Byte = 8 bits.</li>
        <li>RAM: volatile; ROM: non-volatile.</li>
        <li>ALU + CU = CPU.</li>
        <li>SSD faster than HDD.</li>
        <li>Linux: open-source OS.</li>
        <li>BIOS in ROM.</li>
        <li>MICR: bank cheques.</li>
        <li>OMR: optical mark sheets (exams).</li>
        <li>BOSS: Indian Linux.</li>
      </ul>
    `,
    mcq: [
      { q: "Brain of computer:", opts: ["RAM", "CPU", "ROM", "HDD"], a: 1, ex: "Processor." },
      { q: "1 Byte =", opts: ["4 bits", "8 bits", "16 bits", "32 bits"], a: 1, ex: "8 bits." },
      { q: "Volatile memory:", opts: ["RAM", "ROM", "HDD", "CD"], a: 0, ex: "Loses data on power off." },
      { q: "Non-volatile memory:", opts: ["RAM", "ROM", "Cache", "Registers"], a: 1, ex: "ROM, HDD persist." },
      { q: "OMR is used in:", opts: ["Cheques", "Exam sheets", "Print", "Sound"], a: 1, ex: "Mark sheets." },
      { q: "MICR is used in:", opts: ["Exam", "Bank cheques", "Print", "Image"], a: 1, ex: "Magnetic Ink Character." },
      { q: "Input device:", opts: ["Printer", "Monitor", "Keyboard", "Speaker"], a: 2, ex: "Keyboard." },
      { q: "Output device:", opts: ["Mouse", "Scanner", "Monitor", "Keyboard"], a: 2, ex: "Monitor." },
      { q: "ALU is part of:", opts: ["RAM", "ROM", "CPU", "HDD"], a: 2, ex: "Inside CPU." },
      { q: "1 KB =", opts: ["1000 bytes", "1024 bytes", "1024 bits", "100 bytes"], a: 1, ex: "Binary system." },
      { q: "1 TB =", opts: ["1024 MB", "1024 GB", "1024 KB", "1024 PB"], a: 1, ex: "1024 GB." },
      { q: "Cache is:", opts: ["Very fast small memory", "Slow disk", "Same as RAM", "External storage"], a: 0, ex: "Near CPU." },
      { q: "OS example:", opts: ["MS Word", "Windows", "Photoshop", "Chrome"], a: 1, ex: "System software." },
      { q: "Application software:", opts: ["Windows", "MS Excel", "Linux", "Android"], a: 1, ex: "User application." },
      { q: "Faster storage:", opts: ["HDD", "SSD", "CD", "Tape"], a: 1, ex: "Solid State, no moving parts." },
      { q: "BIOS stored in:", opts: ["RAM", "ROM", "HDD", "Cache"], a: 1, ex: "Firmware in ROM." },
      { q: "Indian Linux OS:", opts: ["Ubuntu", "BOSS", "Fedora", "Mint"], a: 1, ex: "Bharat OS Solutions." },
      { q: ".pdf extension:", opts: ["Image", "Text doc", "Portable Document Format", "Audio"], a: 2, ex: "Adobe PDF." },
      { q: "1 Nibble =", opts: ["2 bits", "4 bits", "8 bits", "16 bits"], a: 1, ex: "Half byte." },
      { q: "Motherboard is:", opts: ["Software", "Main circuit board", "Storage", "Input"], a: 1, ex: "Connects everything." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 4. NETWORKING & INTERNET
  // ───────────────────────────────────────────────────────────────
  T["comp-networking"] = {
    body: `
      <h2>Networking & Internet</h2>

      <h3>1. Network Basics</h3>
      <p>A <b>computer network</b> is a group of interconnected computers that share resources.</p>

      <h3>2. Types of Networks (by size)</h3>
      <ul>
        <li><b>PAN (Personal Area Network)</b>: very small range (Bluetooth between phone and earphones).</li>
        <li><b>LAN (Local Area Network)</b>: room, building (office, home Wi-Fi).</li>
        <li><b>MAN (Metropolitan Area Network)</b>: city.</li>
        <li><b>WAN (Wide Area Network)</b>: country/world (Internet is largest WAN).</li>
        <li><b>CAN (Campus Area Network)</b>: campus.</li>
        <li><b>VPN (Virtual Private Network)</b>: secure connection over public.</li>
      </ul>

      <h3>3. Network Topology</h3>
      <ul>
        <li><b>Bus</b>: all on single cable; if cable fails, network fails.</li>
        <li><b>Star</b>: all connect to central hub; most common in LAN.</li>
        <li><b>Ring</b>: each connected to two neighbors forming ring.</li>
        <li><b>Mesh</b>: every device connected to every other (high redundancy).</li>
        <li><b>Tree</b>: hierarchical.</li>
        <li><b>Hybrid</b>: combination.</li>
      </ul>

      <h3>4. Network Devices</h3>
      <ul>
        <li><b>Hub</b>: simple; broadcasts to all.</li>
        <li><b>Switch</b>: smarter; sends to specific device.</li>
        <li><b>Router</b>: connects different networks; routes traffic.</li>
        <li><b>Modem</b>: modulates/demodulates signal (analog ↔ digital).</li>
        <li><b>Bridge</b>: connects two LANs.</li>
        <li><b>Gateway</b>: between two networks with different protocols.</li>
        <li><b>Access Point</b>: provides Wi-Fi.</li>
        <li><b>NIC</b> (Network Interface Card).</li>
        <li><b>Firewall</b>: security device.</li>
      </ul>

      <h3>5. The Internet</h3>
      <ul>
        <li>Global network of networks.</li>
        <li>Originated as ARPANET (1969, US Defense Department).</li>
        <li>Vint Cerf and Bob Kahn developed TCP/IP (early 1970s).</li>
        <li>Internet became popular in 1990s after Tim Berners-Lee invented WWW (1989).</li>
        <li>India connected to internet: 1995 (VSNL).</li>
      </ul>

      <h3>6. Internet Protocols</h3>
      <ul>
        <li><b>TCP/IP</b> (Transmission Control Protocol / Internet Protocol): core internet protocol suite.</li>
        <li><b>HTTP</b>: HyperText Transfer Protocol (web pages).</li>
        <li><b>HTTPS</b>: HTTP Secure (encrypted, used for banking).</li>
        <li><b>FTP</b>: File Transfer Protocol.</li>
        <li><b>SMTP</b>: Simple Mail Transfer Protocol (sending email).</li>
        <li><b>POP3, IMAP</b>: receiving email.</li>
        <li><b>DNS</b>: Domain Name System (translates name to IP address).</li>
        <li><b>DHCP</b>: Dynamic Host Configuration Protocol (auto-assigns IP).</li>
        <li><b>SSH</b>: Secure Shell.</li>
        <li><b>VoIP</b>: Voice over IP (Skype, WhatsApp call).</li>
      </ul>

      <h3>7. URL Components</h3>
      <p>Example: <code>https://www.example.com/path/page.html</code></p>
      <ul>
        <li><b>https://</b>: protocol.</li>
        <li><b>www</b>: subdomain.</li>
        <li><b>example.com</b>: domain name.</li>
        <li><b>.com</b>: top-level domain.</li>
        <li><b>/path/page.html</b>: path.</li>
      </ul>

      <h3>8. Top-Level Domains</h3>
      <ul>
        <li>.com (commercial).</li>
        <li>.org (organisation).</li>
        <li>.net (network).</li>
        <li>.edu (education).</li>
        <li>.gov (government).</li>
        <li>.mil (military).</li>
        <li>Country codes: .in (India), .uk, .us, .cn, .jp.</li>
      </ul>

      <h3>9. WWW (World Wide Web)</h3>
      <ul>
        <li>System of interconnected documents.</li>
        <li>Created by <b>Tim Berners-Lee</b> in 1989 at CERN.</li>
        <li>Web browsers: Chrome (Google), Firefox (Mozilla), Safari (Apple), Edge (Microsoft).</li>
        <li>Search engines: Google, Bing, DuckDuckGo, Yandex.</li>
      </ul>

      <h3>10. IP Address</h3>
      <ul>
        <li>IPv4: 32-bit (e.g., 192.168.1.1); ~4.3 billion addresses.</li>
        <li>IPv6: 128-bit; vastly more addresses.</li>
        <li>Private IPs: 192.168.x.x, 10.x.x.x.</li>
        <li>Public IP: assigned by ISP.</li>
        <li>Localhost: 127.0.0.1.</li>
      </ul>

      <h3>11. Wi-Fi & Bluetooth</h3>
      <ul>
        <li><b>Wi-Fi</b>: wireless LAN; 2.4 GHz / 5 GHz; range ~30 m.</li>
        <li><b>Bluetooth</b>: short-range wireless (~10 m); for peripherals.</li>
        <li><b>Wi-Fi 6</b>: latest standard.</li>
      </ul>

      <h3>12. Important Internet Services</h3>
      <ul>
        <li>Email: Gmail, Outlook, Yahoo Mail.</li>
        <li>Social media: Facebook, Twitter, Instagram, LinkedIn, WhatsApp.</li>
        <li>Search: Google, Bing.</li>
        <li>Cloud: AWS, Google Cloud, Microsoft Azure.</li>
        <li>Streaming: YouTube, Netflix, Spotify.</li>
        <li>E-commerce: Amazon, Flipkart, eBay.</li>
        <li>Banking: net banking, UPI apps.</li>
        <li>Education: Coursera, Khan Academy.</li>
      </ul>

      <h3>13. India and Internet</h3>
      <ul>
        <li>1st website: 1995.</li>
        <li>Digital India: launched 2015.</li>
        <li>2nd largest internet user base after China.</li>
        <li>BharatNet: rural broadband project.</li>
        <li>5G launched in India: 2022.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>LAN: local; WAN: wide.</li>
        <li>Internet originated from ARPANET 1969.</li>
        <li>WWW by Berners-Lee 1989.</li>
        <li>HTTP for web; HTTPS for secure.</li>
        <li>FTP for file transfer.</li>
        <li>DNS: name to IP.</li>
        <li>IPv4: 32-bit; IPv6: 128-bit.</li>
        <li>Localhost: 127.0.0.1.</li>
        <li>India: 5G launched 2022.</li>
      </ul>
    `,
    mcq: [
      { q: "Internet is example of:", opts: ["LAN", "MAN", "WAN", "PAN"], a: 2, ex: "Largest WAN." },
      { q: "Office network:", opts: ["LAN", "WAN", "MAN", "PAN"], a: 0, ex: "Local Area." },
      { q: "Bluetooth is:", opts: ["LAN", "WAN", "PAN", "MAN"], a: 2, ex: "Short range." },
      { q: "WWW invented by:", opts: ["Gates", "Jobs", "Berners-Lee", "Zuckerberg"], a: 2, ex: "1989 CERN." },
      { q: "TCP/IP developed by:", opts: ["Cerf and Kahn", "Berners-Lee", "Pascal", "Turing"], a: 0, ex: "1970s." },
      { q: "HTTP is for:", opts: ["File transfer", "Web pages", "Email", "Voice"], a: 1, ex: "HyperText Transfer." },
      { q: "FTP is for:", opts: ["Web", "File transfer", "Email", "Chat"], a: 1, ex: "File Transfer Protocol." },
      { q: "DNS translates:", opts: ["Domain name to IP", "IP to MAC", "Email to user", "URL to HTML"], a: 0, ex: "Phonebook of internet." },
      { q: "Connects different networks:", opts: ["Hub", "Switch", "Router", "Modem"], a: 2, ex: "Router." },
      { q: "Converts analog to digital:", opts: ["Hub", "Switch", "Router", "Modem"], a: 3, ex: "Modulator-demodulator." },
      { q: "Star topology has:", opts: ["Bus", "Ring", "Central hub", "Mesh"], a: 2, ex: "All connect to hub." },
      { q: "Internet started as:", opts: ["WWW", "ARPANET", "Email", "Google"], a: 1, ex: "1969 USA." },
      { q: "Localhost IP:", opts: ["0.0.0.0", "127.0.0.1", "192.168.1.1", "255.255.255.255"], a: 1, ex: "127.0.0.1." },
      { q: "Secure HTTP:", opts: ["HTTP", "HTTPS", "FTP", "SSH"], a: 1, ex: "HTTPS encrypted." },
      { q: "SMTP is for:", opts: ["Receiving email", "Sending email", "Browsing", "Chatting"], a: 1, ex: "Sending mail." },
      { q: "IPv4 is:", opts: ["8-bit", "16-bit", "32-bit", "64-bit"], a: 2, ex: "32-bit, ~4.3B addresses." },
      { q: "5G launched in India:", opts: ["2018", "2020", "2022", "2024"], a: 2, ex: "Oct 2022." },
      { q: "Search engine:", opts: ["Google", "Bing", "DuckDuckGo", "All correct"], a: 3, ex: "All are search engines." },
      { q: "1st Indian web 1995 by:", opts: ["BSNL", "VSNL", "TCS", "Infosys"], a: 1, ex: "VSNL launched." },
      { q: "Wi-Fi range approx:", opts: ["10 m", "30 m", "100 m", "1 km"], a: 1, ex: "~30 m." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 5. SECURITY THREATS & CYBER SAFETY
  // ───────────────────────────────────────────────────────────────
  T["comp-security"] = {
    body: `
      <h2>Security Threats & Cyber Safety</h2>

      <h3>1. Types of Malware</h3>
      <ul>
        <li><b>Virus</b>: attaches to programs; replicates and spreads. (e.g., I LOVE YOU, ILOVEYOU 2000.)</li>
        <li><b>Worm</b>: self-replicating; spreads independently across networks.</li>
        <li><b>Trojan Horse</b>: disguised as legitimate; doesn't replicate but installs bad code.</li>
        <li><b>Spyware</b>: secretly monitors user activity.</li>
        <li><b>Adware</b>: shows unwanted ads.</li>
        <li><b>Ransomware</b>: encrypts data; demands ransom. (WannaCry 2017.)</li>
        <li><b>Rootkit</b>: hides deep in system; gives unauthorized access.</li>
        <li><b>Keylogger</b>: records keystrokes (steals passwords).</li>
        <li><b>Botnet</b>: army of infected computers controlled remotely.</li>
      </ul>

      <h3>2. Cyber Attacks</h3>
      <ul>
        <li><b>Phishing</b>: fake emails/websites to steal credentials.</li>
        <li><b>Spear Phishing</b>: targeted phishing.</li>
        <li><b>Smishing</b>: phishing via SMS.</li>
        <li><b>Vishing</b>: voice phishing (phone calls).</li>
        <li><b>DDoS (Distributed Denial of Service)</b>: floods server to make unavailable.</li>
        <li><b>Man-in-the-Middle</b>: attacker intercepts communication.</li>
        <li><b>SQL Injection</b>: malicious code in database query.</li>
        <li><b>Brute Force</b>: trying many passwords until one works.</li>
        <li><b>Social Engineering</b>: manipulating people to give info.</li>
        <li><b>Zero-day exploit</b>: attack on unknown vulnerability.</li>
        <li><b>Identity theft</b>: stealing personal info.</li>
        <li><b>Cyberbullying, cyberstalking</b>.</li>
      </ul>

      <h3>3. Protection Methods</h3>
      <ul>
        <li><b>Antivirus software</b>: Norton, McAfee, Kaspersky, Quick Heal, Avast.</li>
        <li><b>Firewall</b>: blocks unauthorized access.</li>
        <li><b>Strong passwords</b>: long, mix of cases + numbers + symbols.</li>
        <li><b>2FA / MFA (Two-Factor Authentication)</b>: extra verification.</li>
        <li><b>VPN</b>: encrypts your internet traffic.</li>
        <li><b>Updates and patches</b>: keep OS and apps updated.</li>
        <li><b>Backups</b>: regular backups protect against ransomware.</li>
        <li><b>HTTPS</b>: use secure websites.</li>
        <li><b>Avoid suspicious links/attachments</b>.</li>
        <li><b>Encryption</b>: protects data even if stolen.</li>
        <li><b>Biometric authentication</b>: fingerprint, face ID.</li>
      </ul>

      <h3>4. Encryption Types</h3>
      <ul>
        <li><b>Symmetric</b>: same key for encrypt and decrypt (AES, DES).</li>
        <li><b>Asymmetric</b>: public/private key pair (RSA, ECC).</li>
        <li><b>Hashing</b>: one-way (MD5, SHA).</li>
        <li><b>End-to-end encryption</b>: only sender and receiver can read (WhatsApp, Signal).</li>
        <li><b>SSL/TLS</b>: secures web (HTTPS).</li>
      </ul>

      <h3>5. Famous Cyber Attacks</h3>
      <ul>
        <li>I LOVE YOU virus (2000): affected 50+ million PCs.</li>
        <li>Stuxnet (2010): targeted Iran's nuclear program.</li>
        <li>WannaCry (2017): ransomware; 200,000+ computers worldwide.</li>
        <li>NotPetya (2017): destructive malware.</li>
        <li>SolarWinds (2020): supply chain attack on US gov.</li>
        <li>Equifax breach (2017): 147 million records.</li>
      </ul>

      <h3>6. Indian Cyber Laws</h3>
      <ul>
        <li><b>Information Technology Act, 2000</b>: main law.</li>
        <li><b>IT Amendment Act, 2008</b>: added new offences.</li>
        <li><b>Digital Personal Data Protection (DPDP) Act, 2023</b>: data privacy.</li>
        <li><b>Section 66</b>: hacking.</li>
        <li><b>Section 67</b>: obscene material.</li>
        <li><b>Section 69</b>: intercepting info.</li>
        <li><b>Cyber Crime Cells</b> in every state.</li>
        <li><b>CERT-In</b> (Computer Emergency Response Team): India's cyber agency.</li>
        <li><b>I4C</b> (Indian Cybercrime Coordination Centre).</li>
        <li>Cyber crime helpline: 1930.</li>
      </ul>

      <h3>7. Digital Safety Tips</h3>
      <ul>
        <li>Use unique passwords for each site (or password manager).</li>
        <li>Enable 2FA.</li>
        <li>Don't click suspicious links.</li>
        <li>Verify sender before opening attachments.</li>
        <li>Don't share OTP / passwords.</li>
        <li>Be cautious on public Wi-Fi (use VPN).</li>
        <li>Update software regularly.</li>
        <li>Be aware of social engineering.</li>
        <li>Limit personal info on social media.</li>
        <li>Lock phone with password / biometric.</li>
        <li>Beware of UPI fraud, fake bank calls.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Virus: needs host; Worm: independent.</li>
        <li>Trojan: disguised malware.</li>
        <li>Ransomware: encrypts, demands money.</li>
        <li>Phishing: fake emails for credentials.</li>
        <li>DDoS: overload server.</li>
        <li>SQL injection: attack on database.</li>
        <li>2FA: extra security.</li>
        <li>India IT Act: 2000.</li>
        <li>Cyber helpline: 1930.</li>
        <li>CERT-In: India's cyber emergency team.</li>
      </ul>
    `,
    mcq: [
      { q: "Malware that replicates by attaching to programs:", opts: ["Virus", "Worm", "Trojan", "Spyware"], a: 0, ex: "Virus." },
      { q: "Self-replicating malware (no host needed):", opts: ["Virus", "Worm", "Trojan", "Spyware"], a: 1, ex: "Worm." },
      { q: "Disguised malware:", opts: ["Virus", "Worm", "Trojan", "Spyware"], a: 2, ex: "Trojan Horse." },
      { q: "Encrypts data, demands money:", opts: ["Spyware", "Worm", "Ransomware", "Adware"], a: 2, ex: "Ransomware (e.g., WannaCry)." },
      { q: "Records keystrokes:", opts: ["Worm", "Trojan", "Keylogger", "Adware"], a: 2, ex: "Keylogger." },
      { q: "Fake emails to steal credentials:", opts: ["Phishing", "Spam", "Spoofing", "Hacking"], a: 0, ex: "Phishing." },
      { q: "Flooding server attack:", opts: ["DDoS", "SQL injection", "Phishing", "Brute force"], a: 0, ex: "Distributed Denial of Service." },
      { q: "Database attack via input:", opts: ["DDoS", "SQL Injection", "XSS", "Phishing"], a: 1, ex: "Malicious SQL in query." },
      { q: "2FA stands for:", opts: ["Two-Factor Authentication", "Two-File Access", "Twin Firewall", "Two-Factor Access"], a: 0, ex: "Extra security step." },
      { q: "WannaCry attack year:", opts: ["2015", "2017", "2020", "2022"], a: 1, ex: "2017 global ransomware." },
      { q: "Indian IT Act year:", opts: ["1995", "2000", "2005", "2010"], a: 1, ex: "IT Act 2000." },
      { q: "Cyber crime helpline (India):", opts: ["100", "101", "1930", "1800"], a: 2, ex: "1930." },
      { q: "Antivirus example:", opts: ["Quick Heal", "Norton", "McAfee", "All correct"], a: 3, ex: "All AV." },
      { q: "Hashing function:", opts: ["MD5", "SHA", "Both A and B", "AES"], a: 2, ex: "MD5 and SHA." },
      { q: "AES is:", opts: ["Hash", "Symmetric encryption", "Asymmetric", "Protocol"], a: 1, ex: "AES symmetric." },
      { q: "RSA is:", opts: ["Hash", "Symmetric", "Asymmetric (public/private keys)", "Protocol"], a: 2, ex: "Public-key encryption." },
      { q: "WhatsApp uses:", opts: ["No encryption", "End-to-end encryption", "Only HTTPS", "Hash only"], a: 1, ex: "E2E encryption." },
      { q: "VPN does:", opts: ["Encrypt traffic", "Hide IP", "Both", "Slow PC"], a: 2, ex: "Virtual Private Network." },
      { q: "CERT-In is:", opts: ["Indian Cyber Emergency Team", "Indian Stock Exchange", "Indian Police", "Telecom Body"], a: 0, ex: "National cyber agency." },
      { q: "DPDP Act year:", opts: ["2015", "2020", "2023", "2024"], a: 2, ex: "Digital Personal Data Protection 2023." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 6. COMPUTER ABBREVIATIONS
  // ───────────────────────────────────────────────────────────────
  T["comp-abbreviations"] = {
    body: `
      <h2>Computer Abbreviations</h2>

      <h3>1. General Computing</h3>
      <ul>
        <li><b>CPU</b>: Central Processing Unit</li>
        <li><b>GPU</b>: Graphics Processing Unit</li>
        <li><b>ALU</b>: Arithmetic Logic Unit</li>
        <li><b>RAM</b>: Random Access Memory</li>
        <li><b>ROM</b>: Read-Only Memory</li>
        <li><b>HDD</b>: Hard Disk Drive</li>
        <li><b>SSD</b>: Solid State Drive</li>
        <li><b>USB</b>: Universal Serial Bus</li>
        <li><b>BIOS</b>: Basic Input/Output System</li>
        <li><b>OS</b>: Operating System</li>
        <li><b>GUI</b>: Graphical User Interface</li>
        <li><b>CLI</b>: Command Line Interface</li>
        <li><b>PC</b>: Personal Computer</li>
        <li><b>LCD</b>: Liquid Crystal Display</li>
        <li><b>LED</b>: Light Emitting Diode</li>
        <li><b>OLED</b>: Organic LED</li>
        <li><b>CRT</b>: Cathode Ray Tube</li>
        <li><b>VDU</b>: Visual Display Unit</li>
        <li><b>HDMI</b>: High-Definition Multimedia Interface</li>
        <li><b>VGA</b>: Video Graphics Array</li>
        <li><b>DVI</b>: Digital Visual Interface</li>
        <li><b>OCR</b>: Optical Character Recognition</li>
        <li><b>OMR</b>: Optical Mark Recognition</li>
        <li><b>MICR</b>: Magnetic Ink Character Recognition</li>
        <li><b>UPS</b>: Uninterruptible Power Supply</li>
        <li><b>SMPS</b>: Switched Mode Power Supply</li>
        <li><b>BCD</b>: Binary Coded Decimal</li>
        <li><b>ASCII</b>: American Standard Code for Information Interchange</li>
        <li><b>EBCDIC</b>: Extended Binary Coded Decimal Interchange Code</li>
      </ul>

      <h3>2. Memory & Storage</h3>
      <ul>
        <li><b>DRAM</b>: Dynamic RAM</li>
        <li><b>SRAM</b>: Static RAM</li>
        <li><b>PROM</b>: Programmable ROM</li>
        <li><b>EPROM</b>: Erasable PROM</li>
        <li><b>EEPROM</b>: Electrically Erasable PROM</li>
        <li><b>CD</b>: Compact Disc</li>
        <li><b>DVD</b>: Digital Versatile Disc</li>
        <li><b>BD</b>: Blu-ray Disc</li>
      </ul>

      <h3>3. Networking</h3>
      <ul>
        <li><b>LAN</b>: Local Area Network</li>
        <li><b>WAN</b>: Wide Area Network</li>
        <li><b>MAN</b>: Metropolitan Area Network</li>
        <li><b>PAN</b>: Personal Area Network</li>
        <li><b>CAN</b>: Campus Area Network</li>
        <li><b>VPN</b>: Virtual Private Network</li>
        <li><b>ISP</b>: Internet Service Provider</li>
        <li><b>IP</b>: Internet Protocol</li>
        <li><b>TCP</b>: Transmission Control Protocol</li>
        <li><b>UDP</b>: User Datagram Protocol</li>
        <li><b>HTTP</b>: HyperText Transfer Protocol</li>
        <li><b>HTTPS</b>: HTTP Secure</li>
        <li><b>FTP</b>: File Transfer Protocol</li>
        <li><b>SMTP</b>: Simple Mail Transfer Protocol</li>
        <li><b>POP3</b>: Post Office Protocol</li>
        <li><b>IMAP</b>: Internet Message Access Protocol</li>
        <li><b>DNS</b>: Domain Name System</li>
        <li><b>DHCP</b>: Dynamic Host Configuration Protocol</li>
        <li><b>SSH</b>: Secure Shell</li>
        <li><b>SSL</b>: Secure Sockets Layer</li>
        <li><b>TLS</b>: Transport Layer Security</li>
        <li><b>URL</b>: Uniform Resource Locator</li>
        <li><b>HTML</b>: HyperText Markup Language</li>
        <li><b>XML</b>: eXtensible Markup Language</li>
        <li><b>CSS</b>: Cascading Style Sheets</li>
        <li><b>JS</b>: JavaScript</li>
        <li><b>PHP</b>: Hypertext Preprocessor (recursive acronym)</li>
        <li><b>SQL</b>: Structured Query Language</li>
        <li><b>API</b>: Application Programming Interface</li>
        <li><b>JSON</b>: JavaScript Object Notation</li>
        <li><b>WWW</b>: World Wide Web</li>
        <li><b>WIFI</b>: Wireless Fidelity</li>
        <li><b>NIC</b>: Network Interface Card</li>
        <li><b>MAC address</b>: Media Access Control</li>
        <li><b>VoIP</b>: Voice over IP</li>
        <li><b>ICANN</b>: Internet Corporation for Assigned Names and Numbers</li>
      </ul>

      <h3>4. File Formats</h3>
      <ul>
        <li><b>JPEG</b>: Joint Photographic Experts Group</li>
        <li><b>PNG</b>: Portable Network Graphics</li>
        <li><b>GIF</b>: Graphics Interchange Format</li>
        <li><b>BMP</b>: Bitmap</li>
        <li><b>TIFF</b>: Tagged Image File Format</li>
        <li><b>PDF</b>: Portable Document Format</li>
        <li><b>MP3</b>: MPEG Audio Layer 3</li>
        <li><b>MP4</b>: MPEG-4</li>
        <li><b>AVI</b>: Audio Video Interleave</li>
        <li><b>WAV</b>: Waveform Audio</li>
        <li><b>MIDI</b>: Musical Instrument Digital Interface</li>
        <li><b>ASF</b>: Advanced Systems Format</li>
        <li><b>FLAC</b>: Free Lossless Audio Codec</li>
      </ul>

      <h3>5. Languages & Frameworks</h3>
      <ul>
        <li><b>C, C++, Java, Python, JS</b>: programming languages.</li>
        <li><b>COBOL</b>: COmmon Business-Oriented Language</li>
        <li><b>FORTRAN</b>: FORmula TRANslation</li>
        <li><b>BASIC</b>: Beginner's All-purpose Symbolic Instruction Code</li>
        <li><b>ALGOL</b>: Algorithmic Language</li>
        <li><b>LISP</b>: List Processing</li>
        <li><b>JDK</b>: Java Development Kit</li>
        <li><b>JRE</b>: Java Runtime Environment</li>
        <li><b>JVM</b>: Java Virtual Machine</li>
        <li><b>IDE</b>: Integrated Development Environment</li>
      </ul>

      <h3>6. AI / Modern Computing</h3>
      <ul>
        <li><b>AI</b>: Artificial Intelligence</li>
        <li><b>ML</b>: Machine Learning</li>
        <li><b>DL</b>: Deep Learning</li>
        <li><b>NLP</b>: Natural Language Processing</li>
        <li><b>IoT</b>: Internet of Things</li>
        <li><b>VR</b>: Virtual Reality</li>
        <li><b>AR</b>: Augmented Reality</li>
        <li><b>MR</b>: Mixed Reality</li>
        <li><b>BC</b>: Blockchain</li>
        <li><b>NFT</b>: Non-Fungible Token</li>
        <li><b>SaaS</b>: Software as a Service</li>
        <li><b>PaaS</b>: Platform as a Service</li>
        <li><b>IaaS</b>: Infrastructure as a Service</li>
        <li><b>BCDR</b>: Business Continuity and Disaster Recovery</li>
        <li><b>API</b>: Application Programming Interface</li>
        <li><b>SDK</b>: Software Development Kit</li>
      </ul>

      <h3>7. Computer Companies</h3>
      <ul>
        <li><b>IBM</b>: International Business Machines</li>
        <li><b>HP</b>: Hewlett-Packard</li>
        <li><b>HPE</b>: HP Enterprise</li>
        <li><b>AMD</b>: Advanced Micro Devices</li>
        <li><b>NVIDIA</b>: ('Invidia' Latin "envy")</li>
        <li><b>TCS</b>: Tata Consultancy Services</li>
        <li><b>WIPRO</b>: Western India Products Pvt. Ltd.</li>
        <li><b>HCL</b>: Hindustan Computers Limited</li>
        <li><b>SAP</b>: Systems, Applications, Products</li>
        <li><b>NIIT</b>: National Institute of Information Technology</li>
        <li><b>NASSCOM</b>: National Association of Software and Services Companies</li>
        <li><b>STPI</b>: Software Technology Parks of India</li>
      </ul>

      <h3>8. Government / Indian</h3>
      <ul>
        <li><b>NIC</b>: National Informatics Centre</li>
        <li><b>C-DAC</b>: Centre for Development of Advanced Computing</li>
        <li><b>STPI</b>: Software Technology Parks of India</li>
        <li><b>UIDAI</b>: Unique Identification Authority of India</li>
        <li><b>DigiLocker</b>: digital document storage</li>
        <li><b>NEFT</b>: National Electronic Funds Transfer</li>
        <li><b>RTGS</b>: Real-Time Gross Settlement</li>
        <li><b>UPI</b>: Unified Payments Interface</li>
        <li><b>IMPS</b>: Immediate Payment Service</li>
        <li><b>BHIM</b>: Bharat Interface for Money</li>
        <li><b>CERT-In</b>: Computer Emergency Response Team India</li>
        <li><b>I4C</b>: Indian Cybercrime Coordination Centre</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>WWW: Tim Berners-Lee.</li>
        <li>BIOS: Basic I/O System (firmware).</li>
        <li>HTTP: web; HTTPS: secure web.</li>
        <li>SQL: database queries.</li>
        <li>SaaS, PaaS, IaaS: cloud models.</li>
        <li>VPN: secure tunnel.</li>
        <li>ASCII: standard character encoding.</li>
        <li>IBM: International Business Machines.</li>
        <li>HCL: Hindustan Computers.</li>
        <li>WIPRO: Western India Products.</li>
      </ul>
    `,
    mcq: [
      { q: "CPU stands for:", opts: ["Central Processing Unit", "Central Power", "Computer Power Unit", "Core Personal Unit"], a: 0, ex: "Brain of computer." },
      { q: "RAM:", opts: ["Random Access Memory", "Read Active Memory", "Real Memory", "Recent Active"], a: 0, ex: "Volatile." },
      { q: "ROM:", opts: ["Random Output", "Read Only Memory", "Real Optical Memory", "Reverse Operations"], a: 1, ex: "Non-volatile." },
      { q: "BIOS:", opts: ["Basic Input Output System", "Binary I/O", "Boot In Out Service", "Beneath Operating Sys"], a: 0, ex: "Firmware in ROM." },
      { q: "GUI:", opts: ["Graphical User Interface", "General User Interface", "Geometric UI", "Global UI"], a: 0, ex: "Visual user interface." },
      { q: "HTML:", opts: ["HyperText Markup Language", "Hyper Text Mark Lang", "High Tech ML", "Hosted Tech ML"], a: 0, ex: "Web pages." },
      { q: "HTTP:", opts: ["HyperText Transfer Protocol", "Hyper Trans Protocol", "High Text Transport", "Hosted Text TP"], a: 0, ex: "Web protocol." },
      { q: "URL:", opts: ["Uniform Resource Locator", "Unified Resource Link", "Uniform Reference Locator", "Universal Real Link"], a: 0, ex: "Web address." },
      { q: "WWW:", opts: ["World Wide Web", "Worldwide Web", "World Wired Web", "Web Wide World"], a: 0, ex: "Berners-Lee 1989." },
      { q: "SQL:", opts: ["Structured Query Language", "Structural Quick Lang", "Sequence QL", "Standard QL"], a: 0, ex: "Database language." },
      { q: "USB:", opts: ["Universal Serial Bus", "Unified System Bus", "Ultra Speed Bus", "Useful Serial Bus"], a: 0, ex: "Connector." },
      { q: "DNS:", opts: ["Domain Name System", "Digital Network Service", "Data Name System", "Direct Network Server"], a: 0, ex: "Translates name to IP." },
      { q: "ASCII:", opts: ["American Standard Code for Information Interchange", "All Std Cmd Indian Inter", "Asian Std Cmd", "All Std Common"], a: 0, ex: "Character encoding." },
      { q: "VPN:", opts: ["Virtual Private Network", "Very Public Net", "Virtual Public Net", "Verified Pvt Net"], a: 0, ex: "Encrypted tunnel." },
      { q: "HDMI:", opts: ["High-Definition Multimedia Interface", "High Def Mod Interface", "High Speed M I", "High Density Multi I"], a: 0, ex: "Video cable." },
      { q: "SSD:", opts: ["Solid State Drive", "Speed Storage Disc", "Super Speed Disk", "Smart Storage Disc"], a: 0, ex: "Flash storage." },
      { q: "HDD:", opts: ["Hard Disk Drive", "Highspeed Data Disk", "High Density Disk", "High Disk Drive"], a: 0, ex: "Mechanical storage." },
      { q: "IBM:", opts: ["International Business Machines", "International Banking", "Indian Business", "Integrated"], a: 0, ex: "Computer company." },
      { q: "TCS:", opts: ["Tata Consultancy Services", "Top Computer Services", "Tech Cloud Server", "Total Comp Services"], a: 0, ex: "Indian IT giant." },
      { q: "CERT-In:", opts: ["Indian cyber agency", "Indian Education Center", "Council Edu Research", "Computer Edu Reserve"], a: 0, ex: "Computer Emergency Response Team India." }
    ]
  };

})();
