// Geography — SSC CGL
(function() {
  const T = window.TOPICS;

  const fig = (file, caption, w) => {
    const width = w || 600;
    const url = "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(file) + "?width=" + width;
    return '<figure><img src="' + url + '" alt="' + caption + '" loading="lazy"><figcaption>' + caption + '</figcaption></figure>';
  };

  const figRow = (items) => {
    return '<div class="img-row">' + items.map(([f, c]) => fig(f, c, 400)).join("") + '</div>';
  };

  T["geo-universe"] = {
    body: `
      ${fig("Planets2013.svg", "Solar System: the Sun and 8 planets (Mercury → Neptune)")}
      <h3>The Universe</h3>
      <ul>
        <li><b>Universe</b>: vast expanse of space + everything in it (galaxies, stars, planets, gas, dust).</li>
        <li><b>Big Bang Theory</b> (Georges Lemaître, 1927; popularized by Edwin Hubble's observations) — universe began ~13.8 billion years ago from an extremely dense and hot point.</li>
        <li>Universe is <b>expanding</b> (Hubble's Law, 1929).</li>
        <li><b>Cosmic Microwave Background (CMB)</b> radiation — afterglow of Big Bang; discovered by Penzias & Wilson (1964).</li>
        <li>Other theories (mostly outdated):
          <ul>
            <li>Steady State (Hoyle, Bondi, Gold).</li>
            <li>Pulsating universe.</li>
            <li>Multiverse.</li>
          </ul>
        </li>
      </ul>

      <h3>Galaxies</h3>
      <ul>
        <li>Massive systems of stars + gas + dust held by gravity.</li>
        <li>Estimated <b>~2 trillion galaxies</b> in observable universe.</li>
        <li>Types:
          <ul>
            <li><b>Spiral</b> (e.g., Milky Way, Andromeda)</li>
            <li><b>Elliptical</b></li>
            <li><b>Irregular</b></li>
          </ul>
        </li>
        <li><b>Milky Way</b> — our galaxy; spiral; ~100 billion stars; diameter ~100,000 light years; we are in the <b>Orion Arm</b>.</li>
        <li><b>Andromeda Galaxy (M31)</b> — closest spiral galaxy to ours; ~2.5 million light years away.</li>
        <li><b>Magellanic Clouds</b> — small irregular galaxies near Milky Way.</li>
      </ul>

      <h3>Stars</h3>
      <ul>
        <li>Massive luminous balls of plasma, mostly hydrogen + helium, undergoing nuclear fusion.</li>
        <li>Born in nebulae (gas clouds).</li>
        <li>Life cycle: nebula → protostar → main sequence → red giant → (depending on mass) <b>white dwarf</b> / <b>neutron star</b> / <b>black hole</b>.</li>
        <li><b>Sun</b> is a medium-sized G-type yellow dwarf star.</li>
        <li><b>Constellations</b>: 88 recognized; e.g., Ursa Major (Saptarishi), Ursa Minor (Pole Star), Orion, Cassiopeia, Sirius (brightest star in night sky — in Canis Major).</li>
        <li><b>Nearest star (other than Sun)</b>: <b>Proxima Centauri</b>, ~4.24 light years away.</li>
        <li><b>Light year</b> = distance light travels in 1 year ≈ <b>9.46 × 10¹² km</b>.</li>
        <li><b>Astronomical Unit (AU)</b> = mean Earth-Sun distance ≈ <b>149.6 million km</b>.</li>
        <li><b>Parsec</b> = ~3.26 light years.</li>
      </ul>

      <hr>

      <h3>The Solar System</h3>
      <p>Sun + 8 planets + dwarf planets + asteroids + comets + meteors + 200+ moons. Formed ~4.6 billion years ago.</p>

      <h4>The Sun</h4>
      <ul>
        <li>Diameter ~13.9 lakh km (~109 times Earth's).</li>
        <li>Distance from Earth: ~149.6 million km (1 AU).</li>
        <li>Composition: <b>Hydrogen 71%, Helium 26.5%</b>, others 2.5%.</li>
        <li>Temperature: surface ~5500°C; core ~15 million°C.</li>
        <li>Energy: <b>nuclear fusion</b> of H to He.</li>
        <li>Layers (inside out): Core → Radiative Zone → Convective Zone → Photosphere (visible surface) → Chromosphere → Corona.</li>
        <li>Sun's rotation: ~25 days at equator; varies (differential rotation).</li>
        <li><b>Sunspots</b>: cooler, darker patches on photosphere; 11-year cycle.</li>
        <li>Light from Sun reaches Earth in <b>~8 minutes 20 seconds</b>.</li>
      </ul>

      <h4>The 8 Planets (Inner-out)</h4>
      <table>
        <tr><th>Planet</th><th>Type</th><th>Distance from Sun</th><th>Day length</th><th>Year length</th><th>Moons</th></tr>
        <tr><td><b>Mercury</b></td><td>Terrestrial (rocky)</td><td>~58 mn km</td><td>59 Earth days</td><td>88 days</td><td>0</td></tr>
        <tr><td><b>Venus</b></td><td>Terrestrial</td><td>~108 mn km</td><td>243 days (retrograde)</td><td>225 days</td><td>0</td></tr>
        <tr><td><b>Earth</b></td><td>Terrestrial</td><td>~149.6 mn km</td><td>23h 56m</td><td>365.25 days</td><td>1 (Moon)</td></tr>
        <tr><td><b>Mars</b></td><td>Terrestrial</td><td>~228 mn km</td><td>24h 37m</td><td>687 days</td><td>2 (Phobos, Deimos)</td></tr>
        <tr><td><b>Jupiter</b></td><td>Gas giant</td><td>~778 mn km</td><td>~10 hours</td><td>11.86 years</td><td>~95+ (Ganymede biggest)</td></tr>
        <tr><td><b>Saturn</b></td><td>Gas giant</td><td>~1.43 bn km</td><td>~10.7 hours</td><td>29.46 years</td><td>~146+ (Titan biggest)</td></tr>
        <tr><td><b>Uranus</b></td><td>Ice giant</td><td>~2.87 bn km</td><td>~17 hours</td><td>84 years</td><td>27</td></tr>
        <tr><td><b>Neptune</b></td><td>Ice giant</td><td>~4.5 bn km</td><td>~16 hours</td><td>164.8 years</td><td>14</td></tr>
      </table>
      <p>Mnemonic: <b>"My Very Educated Mother Just Served Us Noodles"</b></p>

      <h4>Quick Planet Facts</h4>
      <ul>
        <li><b>Mercury</b>: smallest; closest to Sun; no atmosphere; extreme temperature variation.</li>
        <li><b>Venus</b>: hottest planet (~462°C — even hotter than Mercury due to thick CO₂ atmosphere/greenhouse effect); rotates retrograde (E to W); "Earth's twin" (similar size); brightest planet (Morning/Evening Star).</li>
        <li><b>Earth</b>: only known habitable planet; 71% water; atmosphere of N₂ (78%) + O₂ (21%); "Blue Planet".</li>
        <li><b>Mars</b>: "Red Planet" (iron oxide); polar ice caps; <b>Olympus Mons</b> — largest volcano in solar system (~22 km tall).</li>
        <li><b>Jupiter</b>: largest planet; "<b>Great Red Spot</b>" — giant storm visible for 350+ years; faint rings; 4 Galilean moons (Io, Europa, Ganymede, Callisto).</li>
        <li><b>Saturn</b>: famous for prominent rings (made of ice and rock); <b>Titan</b> — only moon with substantial atmosphere; least dense planet (would float on water).</li>
        <li><b>Uranus</b>: rotates on its side (axial tilt 98°); blue-green from methane; rings; coldest planet atmosphere.</li>
        <li><b>Neptune</b>: windiest planet; "Great Dark Spot"; predicted by mathematics (Le Verrier) before discovery 1846.</li>
      </ul>

      <h4>Inner vs Outer Planets</h4>
      <table>
        <tr><th>Inner / Terrestrial Planets</th><th>Outer / Jovian Planets</th></tr>
        <tr><td>Mercury, Venus, Earth, Mars</td><td>Jupiter, Saturn, Uranus, Neptune</td></tr>
        <tr><td>Rocky, dense</td><td>Gaseous, less dense</td></tr>
        <tr><td>Few/no moons</td><td>Many moons</td></tr>
        <tr><td>No rings</td><td>All have rings</td></tr>
        <tr><td>Smaller</td><td>Larger</td></tr>
      </table>

      <h4>Pluto — Dwarf Planet</h4>
      <ul>
        <li>Discovered 1930 by <b>Clyde Tombaugh</b>.</li>
        <li>Reclassified as <b>"dwarf planet"</b> by IAU on <b>24 August 2006</b>.</li>
        <li>Other dwarf planets: <b>Ceres, Eris, Haumea, Makemake</b>.</li>
      </ul>

      <h4>Asteroid Belt</h4>
      <p>Located between <b>Mars and Jupiter</b>; contains millions of rocky bodies; Ceres is largest (also a dwarf planet).</p>

      <h4>Kuiper Belt and Oort Cloud</h4>
      <ul>
        <li><b>Kuiper Belt</b>: beyond Neptune; contains Pluto and many icy bodies.</li>
        <li><b>Oort Cloud</b>: theoretical, very far (1 light year away); source of long-period comets.</li>
      </ul>

      <h4>Comets, Asteroids, Meteors</h4>
      <ul>
        <li><b>Comet</b>: ice + rock; develops a tail (always points away from Sun) when near Sun. Famous: <b>Halley's Comet</b> (visible every ~76 years; last 1986; next 2061).</li>
        <li><b>Asteroid</b>: small rocky body in space.</li>
        <li><b>Meteoroid</b>: small particle in space.</li>
        <li><b>Meteor</b>: meteoroid burning in atmosphere ("shooting star").</li>
        <li><b>Meteorite</b>: meteoroid that survives and lands on Earth.</li>
      </ul>

      <h3>The Moon</h3>
      <ul>
        <li>Earth's only natural satellite; 5th largest moon in solar system.</li>
        <li>Distance from Earth: ~3,84,400 km (light takes ~1.3 seconds).</li>
        <li>Diameter: ~3,474 km (about 1/4 of Earth).</li>
        <li>Rotation period = revolution period = ~27.3 days (synchronous; same face always toward Earth).</li>
        <li>Origin: Giant Impact Hypothesis (Mars-sized "Theia" hit Earth).</li>
        <li>No atmosphere; extreme temperature (-173°C to 127°C); no weather.</li>
        <li><b>First man on Moon: Neil Armstrong (Apollo 11, 20 July 1969)</b>.</li>
        <li>India's missions: Chandrayaan-1 (2008), Chandrayaan-2 (2019), <b>Chandrayaan-3 (23 August 2023)</b> — soft-landed on Moon's south pole.</li>
      </ul>

      <h3>Eclipses</h3>
      <ul>
        <li><b>Solar Eclipse</b>: Moon between Sun and Earth (only on New Moon day, Amavasya). Three types: total, partial, annular.</li>
        <li><b>Lunar Eclipse</b>: Earth between Sun and Moon (only on Full Moon, Purnima). Total or partial.</li>
        <li>Eclipses don't happen every month due to ~5° tilt of Moon's orbit.</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>Next: <b>Earth — its structure, movements, and zones</b>.</p>
    `,
    mcq: [
      { q: "Big Bang theory was proposed by?", opts: ["Stephen Hawking", "Edwin Hubble", "Georges Lemaître (1927)", "Albert Einstein"], a: 2, ex: "Belgian priest Georges Lemaître proposed it in 1927; Hubble's observations supported it." },
      { q: "Universe is approximately how old?", opts: ["4.5 billion years", "13.8 billion years", "100 billion years", "1 trillion years"], a: 1, ex: "13.8 billion years per current measurements." },
      { q: "Our galaxy is called?", opts: ["Andromeda", "Milky Way (spiral)", "Triangulum", "Magellanic"], a: 1, ex: "Milky Way; spiral galaxy; Sun is in Orion Arm." },
      { q: "Closest galaxy to Milky Way is?", opts: ["Andromeda (M31, ~2.5 mn light years)", "Triangulum", "Magellanic Cloud", "Milky Way itself"], a: 0, ex: "Andromeda — closest large spiral; ~2.5 million light years away." },
      { q: "Light year is a unit of?", opts: ["Time", "Distance (~9.46 × 10¹² km)", "Speed", "Mass"], a: 1, ex: "Distance light travels in 1 year ≈ 9.46 trillion km." },
      { q: "Closest star to Earth (other than Sun)?", opts: ["Sirius", "Alpha Centauri", "Proxima Centauri (~4.24 ly)", "Polaris"], a: 2, ex: "Proxima Centauri, part of Alpha Centauri system." },
      { q: "Number of planets in solar system?", opts: ["7", "8 (after Pluto's reclassification 2006)", "9", "10"], a: 1, ex: "8 planets since Pluto reclassified as dwarf planet on 24 August 2006." },
      { q: "Largest planet?", opts: ["Earth", "Saturn", "Jupiter", "Neptune"], a: 2, ex: "Jupiter — gas giant; ~318 Earth masses." },
      { q: "Smallest planet?", opts: ["Mercury", "Mars", "Earth", "Pluto"], a: 0, ex: "Mercury — closest to Sun; no atmosphere." },
      { q: "Hottest planet?", opts: ["Mercury", "Venus (~462°C — greenhouse effect)", "Mars", "Jupiter"], a: 1, ex: "Venus — even hotter than Mercury due to thick CO₂ atmosphere causing runaway greenhouse effect." },
      { q: "Red planet?", opts: ["Venus", "Mars (iron oxide)", "Jupiter", "Saturn"], a: 1, ex: "Mars — iron oxide on surface gives reddish color." },
      { q: "Largest volcano in solar system is on?", opts: ["Earth", "Mars (Olympus Mons, ~22 km)", "Venus", "Mercury"], a: 1, ex: "Olympus Mons on Mars — ~22 km tall." },
      { q: "Great Red Spot is a feature of?", opts: ["Mars", "Jupiter (giant storm)", "Saturn", "Neptune"], a: 1, ex: "Jupiter — atmospheric storm visible for 350+ years." },
      { q: "Planet famous for prominent rings?", opts: ["Jupiter", "Saturn", "Uranus", "Neptune"], a: 1, ex: "Saturn; all gas giants have rings but Saturn's are most prominent." },
      { q: "Planet that rotates on its side (axial tilt 98°)?", opts: ["Jupiter", "Saturn", "Uranus", "Neptune"], a: 2, ex: "Uranus — unique sideways rotation." },
      { q: "Planet with retrograde rotation (East to West)?", opts: ["Mercury", "Venus", "Mars", "Jupiter"], a: 1, ex: "Venus — rotates East to West (opposite of Earth)." },
      { q: "Pluto was reclassified as dwarf planet in?", opts: ["1990", "2000", "2006 (24 August)", "2010"], a: 2, ex: "International Astronomical Union (IAU) — 24 August 2006." },
      { q: "Asteroid belt is located between?", opts: ["Earth and Mars", "Mars and Jupiter", "Jupiter and Saturn", "Saturn and Uranus"], a: 1, ex: "Between Mars and Jupiter; contains Ceres (dwarf planet)." },
      { q: "Halley's Comet visits Earth every?", opts: ["50 years", "76 years (next 2061)", "100 years", "1000 years"], a: 1, ex: "~76 years; last seen 1986, next 2061." },
      { q: "Burning meteoroid in atmosphere is called?", opts: ["Asteroid", "Meteor (shooting star)", "Meteorite", "Comet"], a: 1, ex: "Meteor; if it survives and reaches Earth = meteorite." },
      { q: "First human on Moon?", opts: ["Yuri Gagarin", "Neil Armstrong (Apollo 11, 20 July 1969)", "Buzz Aldrin", "John Glenn"], a: 1, ex: "Neil Armstrong; followed by Buzz Aldrin." },
      { q: "Chandrayaan-3 soft-landed on Moon's south pole on?", opts: ["15 August 2023", "23 August 2023", "26 January 2024", "5 September 2023"], a: 1, ex: "23 August 2023 — celebrated as National Space Day." },
      { q: "Distance from Sun to Earth (1 AU) is?", opts: ["~10 million km", "~50 million km", "~149.6 million km", "~1 billion km"], a: 2, ex: "~149.6 million km; 1 Astronomical Unit (AU)." },
      { q: "Sunlight reaches Earth in?", opts: ["1 second", "8 minutes 20 seconds", "1 hour", "1 day"], a: 1, ex: "About 8 minutes 20 seconds." },
      { q: "Sun is mostly composed of?", opts: ["Oxygen and Helium", "Hydrogen (~71%) and Helium (~27%)", "Carbon and Hydrogen", "Iron and Hydrogen"], a: 1, ex: "Hydrogen ~71%, Helium ~27%, others 2%." }
    ]
  };

  T["geo-earth"] = {
    body: `
      ${figRow([
        ["The_Earth_seen_from_Apollo_17.jpg", "Earth from Apollo 17 (the 'Blue Marble')"],
        ["Earth_axial_tilt_23.4.svg", "Earth's axial tilt (23.5°) — cause of seasons"]
      ])}
      <h3>Earth — Quick Facts</h3>
      <ul>
        <li><b>3rd planet</b> from Sun; only known habitable planet.</li>
        <li>Age: ~<b>4.54 billion years</b>.</li>
        <li>Diameter: ~12,742 km (mean); <b>polar 12,714 km, equatorial 12,756 km</b> (oblate spheroid).</li>
        <li>Circumference: ~40,075 km (equatorial), ~40,008 km (polar).</li>
        <li>Surface area: ~510 million km²; <b>land 29% (~149 mn km²), water 71% (~361 mn km²)</b>.</li>
        <li>Mass: ~5.972 × 10²⁴ kg.</li>
        <li>"Blue Planet" — for water cover.</li>
        <li>Axis tilt: <b>23.5°</b> from vertical (perpendicular to orbital plane).</li>
        <li>Atmosphere: 78% N₂, 21% O₂, 1% others.</li>
      </ul>

      <hr>

      <h3>Internal Structure of Earth</h3>
      <table>
        <tr><th>Layer</th><th>Composition</th><th>Depth from surface</th><th>Temperature</th></tr>
        <tr><td><b>Crust</b></td><td>Solid silicate rocks</td><td>5–70 km (thinnest layer)</td><td>~200°C–400°C at base</td></tr>
        <tr><td><b>Mantle</b></td><td>Solid + plastic rocks (silicates)</td><td>30 km – 2,900 km</td><td>500°C–4,000°C</td></tr>
        <tr><td><b>Outer Core</b></td><td>Liquid iron + nickel</td><td>2,900 km – 5,150 km</td><td>4,000°C–6,000°C</td></tr>
        <tr><td><b>Inner Core</b></td><td>Solid iron + nickel</td><td>5,150 km – 6,371 km</td><td>~5,400°C (similar to Sun's surface!)</td></tr>
      </table>

      <h4>Crust</h4>
      <ul>
        <li><b>Continental crust (Sial)</b>: silicon + aluminium; ~30–70 km thick; lighter; granitic; under continents.</li>
        <li><b>Oceanic crust (Sima)</b>: silicon + magnesium; ~5–10 km thick; denser; basaltic; under oceans.</li>
        <li>Crust + uppermost mantle = <b>lithosphere</b>.</li>
      </ul>

      <h4>Mantle</h4>
      <ul>
        <li>Largest layer; ~84% of Earth's volume.</li>
        <li>Made of silicates rich in iron and magnesium (peridotite).</li>
        <li>Asthenosphere — partially molten upper mantle layer; on which plates float.</li>
        <li>Convection currents in mantle drive plate tectonics.</li>
        <li><b>Mohorovicic discontinuity (Moho)</b> — between crust and mantle.</li>
        <li><b>Gutenberg discontinuity</b> — between mantle and outer core.</li>
        <li><b>Lehmann discontinuity</b> — between outer and inner core.</li>
      </ul>

      <h4>Core</h4>
      <ul>
        <li>Outer core: liquid; flow generates Earth's magnetic field.</li>
        <li>Inner core: solid; due to immense pressure; mainly iron + nickel.</li>
      </ul>

      <hr>

      <h3>Earth's Movements</h3>

      <h4>1. Rotation (Spin on axis)</h4>
      <ul>
        <li>Earth rotates from <b>West to East</b> on its axis.</li>
        <li>Time taken: <b>23 hours 56 minutes 4 seconds</b> (sidereal day) — but solar day = 24 hours.</li>
        <li>Angular speed: ~<b>1670 km/hr at equator</b>; less toward poles.</li>
        <li><b>Effects of rotation</b>:
          <ul>
            <li>Day and night alternation.</li>
            <li>Apparent rising and setting of celestial objects.</li>
            <li>Coriolis effect (deflection of moving objects/winds).</li>
            <li>Tides.</li>
            <li>Shape of Earth (oblate spheroid).</li>
          </ul>
        </li>
      </ul>

      <h4>2. Revolution (Around Sun)</h4>
      <ul>
        <li>Earth orbits Sun in elliptical path.</li>
        <li>Time: <b>365.25 days</b> (1 year). Extra 0.25 day → leap year (366 days every 4 years).</li>
        <li>Speed: ~107,000 km/hr.</li>
        <li>Mean distance from Sun: 1 AU = ~149.6 million km.</li>
        <li><b>Perihelion</b>: closest to Sun (~3 January, ~147.1 mn km).</li>
        <li><b>Aphelion</b>: farthest from Sun (~4 July, ~152.1 mn km).</li>
        <li><b>Effects of revolution + axial tilt</b>:
          <ul>
            <li>Seasons.</li>
            <li>Variation in length of day and night.</li>
            <li>Solstices and equinoxes.</li>
          </ul>
        </li>
      </ul>

      <hr>

      <h3>Solstices and Equinoxes</h3>
      <table>
        <tr><th>Event</th><th>Date</th><th>Sun overhead at</th><th>Effect</th></tr>
        <tr><td><b>Summer Solstice (N. Hemisphere)</b></td><td>21 June</td><td>Tropic of Cancer (23.5°N)</td><td>Longest day in N. Hemisphere; shortest in S.</td></tr>
        <tr><td><b>Autumnal Equinox</b></td><td>23 September</td><td>Equator</td><td>Equal day & night everywhere</td></tr>
        <tr><td><b>Winter Solstice (N. Hemisphere)</b></td><td>22 December</td><td>Tropic of Capricorn (23.5°S)</td><td>Shortest day in N. Hemisphere; longest in S.</td></tr>
        <tr><td><b>Vernal/Spring Equinox</b></td><td>21 March</td><td>Equator</td><td>Equal day & night everywhere</td></tr>
      </table>

      <hr>

      <h3>Latitudes and Longitudes</h3>

      <h4>Latitude</h4>
      <ul>
        <li>Imaginary lines parallel to equator; measure angular distance N or S of equator.</li>
        <li>Equator: 0°; North Pole: 90°N; South Pole: 90°S.</li>
        <li>Total 180° latitude (90 N + 90 S).</li>
        <li>1° latitude ≈ 111 km.</li>
        <li>Important latitudes:
          <ul>
            <li><b>Equator</b> (0°)</li>
            <li><b>Tropic of Cancer</b> (23.5° N)</li>
            <li><b>Tropic of Capricorn</b> (23.5° S)</li>
            <li><b>Arctic Circle</b> (66.5° N)</li>
            <li><b>Antarctic Circle</b> (66.5° S)</li>
          </ul>
        </li>
        <li>Tropic of Cancer passes through India — through 8 states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, WB, Tripura, Mizoram.</li>
      </ul>

      <h4>Longitude</h4>
      <ul>
        <li>Imaginary lines from N to S Pole; measure angular distance E or W of <b>Prime Meridian</b>.</li>
        <li><b>Prime Meridian (0°)</b>: passes through <b>Greenwich, London</b> (UK).</li>
        <li>Total 360° (180 E + 180 W); 180° meridian is the <b>International Date Line (IDL)</b>.</li>
        <li>1° longitude = 111 km at equator; less near poles.</li>
        <li>Earth rotates 360° in 24 hours, so 15° = 1 hour, 1° = 4 minutes.</li>
      </ul>

      <h4>Indian Standard Time (IST)</h4>
      <ul>
        <li>Calculated from <b>82.5° E</b> longitude (passes through <b>Mirzapur, UP</b>; also Naini, Allahabad area).</li>
        <li>IST = GMT + 5:30 hours.</li>
        <li>Single time zone for entire India (despite ~30° longitude span; ~2 hour real difference between Gujarat and Arunachal Pradesh).</li>
      </ul>

      <h4>International Date Line (IDL)</h4>
      <ul>
        <li>180° meridian (mostly).</li>
        <li>Crossing W to E: subtract 1 day.</li>
        <li>Crossing E to W: add 1 day.</li>
        <li>Bends through Pacific to avoid splitting countries.</li>
      </ul>

      <hr>

      <h3>Earth's Magnetic Field</h3>
      <ul>
        <li>Generated by motion of liquid iron in outer core (geo-dynamo).</li>
        <li>Magnetic poles ≠ geographic poles.</li>
        <li>Magnetic North Pole near Canada (drifting).</li>
        <li>Protects Earth from solar wind (creates aurora at poles).</li>
        <li>Earth's magnetic field reverses every ~200,000–300,000 years (paleomagnetism).</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>Next: <b>Rocks and Minerals</b> — building blocks of Earth's crust.</p>
    `,
    mcq: [
      { q: "Earth's age is approximately?", opts: ["1 billion years", "4.54 billion years", "10 billion years", "13.8 billion years"], a: 1, ex: "~4.54 billion years; universe is ~13.8 billion years old." },
      { q: "Earth's shape is best described as?", opts: ["Perfect sphere", "Oblate spheroid (flattened at poles)", "Cylinder", "Cube"], a: 1, ex: "Oblate spheroid — flattened at poles, bulging at equator due to rotation." },
      { q: "Surface composition: water vs land?", opts: ["50:50", "60:40", "71:29 (water:land)", "80:20"], a: 2, ex: "71% water, 29% land — 'Blue Planet'." },
      { q: "Earth's axial tilt is?", opts: ["18°", "23.5° (responsible for seasons)", "30°", "45°"], a: 1, ex: "23.5° from vertical; tilt causes seasons." },
      { q: "Innermost layer of Earth is?", opts: ["Crust", "Mantle", "Outer Core (liquid)", "Inner Core (solid iron+nickel)"], a: 3, ex: "Inner Core — solid; ~5,400°C; iron and nickel." },
      { q: "Earth's outer core is?", opts: ["Solid", "Liquid (iron + nickel; generates magnetic field)", "Gas", "Plasma"], a: 1, ex: "Liquid; flow generates Earth's magnetic field." },
      { q: "Crust + uppermost mantle is called?", opts: ["Asthenosphere", "Lithosphere", "Hydrosphere", "Biosphere"], a: 1, ex: "Lithosphere; broken into tectonic plates." },
      { q: "Continental crust is mainly?", opts: ["Sial (silicon + aluminium)", "Sima (silicon + magnesium)", "Iron + Nickel", "Carbon"], a: 0, ex: "Sial — granitic; lighter; under continents." },
      { q: "Oceanic crust is mainly?", opts: ["Sial", "Sima (silicon + magnesium)", "Iron", "Hydrogen"], a: 1, ex: "Sima — basaltic; denser; under oceans." },
      { q: "Mohorovicic discontinuity is between?", opts: ["Crust and Mantle", "Mantle and Outer Core", "Outer and Inner Core", "Atmosphere and Crust"], a: 0, ex: "Crust-Mantle boundary; identified by Croatian scientist Mohorovičić." },
      { q: "Earth rotates from?", opts: ["E to W", "W to E", "N to S", "S to N"], a: 1, ex: "West to East; that's why Sun appears to rise in East." },
      { q: "Time for Earth to rotate (sidereal day)?", opts: ["12 hours", "23 hours 56 minutes 4 seconds", "24 hours", "365 days"], a: 1, ex: "Sidereal day = ~23h 56m 4s; solar day = 24h." },
      { q: "Earth revolves around Sun in?", opts: ["~24 hours", "~30 days", "365.25 days (leap year every 4 years)", "365.5 days"], a: 2, ex: "365.25 days; leap day adjustment every 4 years." },
      { q: "Perihelion (Earth closest to Sun) occurs around?", opts: ["3 January", "21 March", "21 June", "4 July"], a: 0, ex: "~3 January; aphelion is ~4 July." },
      { q: "Summer solstice (N. Hemisphere) is on?", opts: ["21 March", "21 June (longest day in N)", "23 September", "22 December"], a: 1, ex: "Sun overhead at Tropic of Cancer." },
      { q: "Equinoxes (equal day/night) fall on?", opts: ["June 21 & December 22", "March 21 & September 23", "January 1 & July 1", "April 1 & October 1"], a: 1, ex: "Vernal (Spring) Equinox 21 March; Autumnal Equinox 23 September." },
      { q: "Tropic of Cancer is at?", opts: ["0°", "23.5° N", "23.5° S", "66.5° N"], a: 1, ex: "23.5° N; passes through 8 Indian states." },
      { q: "Total degrees of latitude?", opts: ["90", "180 (0–90 N + 0–90 S)", "360", "270"], a: 1, ex: "180° total — 90° N + 90° S." },
      { q: "Prime Meridian (0° longitude) passes through?", opts: ["New York", "Tokyo", "Greenwich (London)", "Mumbai"], a: 2, ex: "Greenwich, London — Royal Observatory." },
      { q: "Indian Standard Time is calculated from?", opts: ["75° E", "82.5° E (Mirzapur, UP)", "90° E", "0°"], a: 1, ex: "IST = 82.5° E; passes through Mirzapur (UP)." },
      { q: "IST is ahead of GMT by?", opts: ["3 hours", "5 hours", "5:30 hours", "6 hours"], a: 2, ex: "IST = GMT + 5:30." },
      { q: "International Date Line is at?", opts: ["0°", "90°", "180° meridian (Pacific Ocean)", "270°"], a: 2, ex: "180° meridian; bends to avoid splitting countries." },
      { q: "1° longitude at equator equals about how much time?", opts: ["1 minute", "4 minutes (15° = 1 hour)", "10 minutes", "1 hour"], a: 1, ex: "Earth rotates 360° in 24 hours; so 15°/hour, 1°/4 min." },
      { q: "Earth's magnetic field is generated by?", opts: ["Sun", "Moon", "Liquid iron in outer core", "Atmosphere"], a: 2, ex: "Geo-dynamo effect from molten iron flow." }
    ]
  };

  T["geo-rocks"] = {
    body: `
      ${fig("Rockcycle.jpg", "The Rock Cycle — igneous, sedimentary, and metamorphic transitions")}
      <h3>Rocks — Building Blocks of Earth's Crust</h3>
      <p><b>Rock</b>: aggregate of one or more minerals. <b>Mineral</b>: naturally occurring inorganic substance with definite chemical composition.</p>

      <h3>Three Types of Rocks</h3>
      <table>
        <tr><th>Type</th><th>Formed By</th><th>Examples</th></tr>
        <tr><td><b>Igneous</b></td><td>Solidification of magma/lava</td><td>Granite, Basalt, Dolerite, Pumice, Obsidian, Gabbro</td></tr>
        <tr><td><b>Sedimentary</b></td><td>Deposition + compression of sediments</td><td>Sandstone, Limestone, Shale, Conglomerate, Coal, Gypsum</td></tr>
        <tr><td><b>Metamorphic</b></td><td>Transformation of igneous/sedimentary by heat & pressure</td><td>Marble (from limestone), Slate (from shale), Quartzite (from sandstone), Schist, Gneiss, Diamond</td></tr>
      </table>

      <hr>

      <h3>1. IGNEOUS ROCKS ("Primary" rocks)</h3>
      <ul>
        <li>Form from cooling and solidification of magma (inside Earth) or lava (on surface).</li>
        <li>"Igneous" comes from Latin <i>ignis</i> (fire).</li>
      </ul>

      <h4>Two Main Types</h4>
      <table>
        <tr><th>Intrusive (Plutonic)</th><th>Extrusive (Volcanic)</th></tr>
        <tr><td>Form below Earth's surface</td><td>Form on Earth's surface</td></tr>
        <tr><td>Slow cooling → coarse-grained</td><td>Rapid cooling → fine-grained / glassy</td></tr>
        <tr><td>Examples: <b>Granite</b>, Diorite, Gabbro</td><td>Examples: <b>Basalt</b>, Pumice, Obsidian, Andesite</td></tr>
      </table>

      <h4>Famous Igneous Rocks</h4>
      <ul>
        <li><b>Granite</b>: most common intrusive; coarse-grained; quartz + feldspar + mica.</li>
        <li><b>Basalt</b>: most common extrusive; dark colored; <b>Deccan Traps</b> are basaltic.</li>
        <li><b>Pumice</b>: light, porous; floats on water; from explosive volcanic eruption.</li>
        <li><b>Obsidian</b>: volcanic glass; formed when lava cools rapidly.</li>
      </ul>

      <hr>

      <h3>2. SEDIMENTARY ROCKS</h3>
      <ul>
        <li>Form from accumulation of sediments transported by water, wind, ice.</li>
        <li>Layered (stratified); often contain fossils.</li>
        <li>Cover ~75% of Earth's surface but only ~5% of crustal volume.</li>
      </ul>

      <h4>Three Categories</h4>
      <table>
        <tr><th>Category</th><th>Source</th><th>Examples</th></tr>
        <tr><td><b>Mechanically formed (Clastic)</b></td><td>Mechanical weathering of rocks</td><td>Sandstone, Conglomerate, Shale, Loess</td></tr>
        <tr><td><b>Chemically formed</b></td><td>Precipitation from solution</td><td>Limestone (some), Rock Salt, Gypsum, Borax</td></tr>
        <tr><td><b>Organically formed</b></td><td>Organic remains</td><td>Coal (plants), Limestone (corals/shells), Chalk</td></tr>
      </table>

      <h4>Famous Sedimentary Rocks</h4>
      <ul>
        <li><b>Sandstone</b>: mostly quartz; used in construction (Red Fort, Fatehpur Sikri).</li>
        <li><b>Limestone</b>: CaCO₃; used in cement; Taj Mahal foundation.</li>
        <li><b>Coal</b>: fossil fuel; from ancient plants.</li>
        <li><b>Shale</b>: clay-rich; impermeable; oil and gas source rock.</li>
      </ul>

      <hr>

      <h3>3. METAMORPHIC ROCKS</h3>
      <ul>
        <li>Form when existing rocks (igneous or sedimentary) are subjected to high heat/pressure without melting.</li>
        <li>Greek "metamorphosis" = change of form.</li>
        <li>Often have foliated (banded) appearance.</li>
      </ul>

      <h4>Common Transformations</h4>
      <table>
        <tr><th>Original Rock</th><th>Metamorphic Form</th></tr>
        <tr><td>Limestone</td><td><b>Marble</b></td></tr>
        <tr><td>Sandstone</td><td><b>Quartzite</b></td></tr>
        <tr><td>Shale</td><td><b>Slate → Schist → Gneiss</b> (increasing metamorphism)</td></tr>
        <tr><td>Granite</td><td>Gneiss</td></tr>
        <tr><td>Coal</td><td>Anthracite (highest grade) → Graphite → Diamond</td></tr>
        <tr><td>Basalt</td><td>Schist</td></tr>
      </table>

      <h4>Famous Metamorphic Rocks</h4>
      <ul>
        <li><b>Marble</b>: Taj Mahal; Makrana, Rajasthan is famous source.</li>
        <li><b>Slate</b>: roofing, blackboards.</li>
        <li><b>Diamond</b>: hardest natural substance; carbon under extreme pressure.</li>
      </ul>

      <hr>

      <h3>The Rock Cycle</h3>
      <p>Rocks transform from one type to another through geological processes:</p>
      <ul>
        <li>Igneous → weathering → Sedimentary</li>
        <li>Sedimentary → heat + pressure → Metamorphic</li>
        <li>Metamorphic → melting → Magma → Igneous</li>
        <li>Igneous → heat + pressure → Metamorphic (directly)</li>
      </ul>

      <hr>

      <h3>MINERALS</h3>

      <h4>Classification</h4>
      <ul>
        <li><b>Metallic</b>: contain metals.
          <ul>
            <li><b>Ferrous</b> (iron-bearing): Iron Ore, Manganese, Chromite, Nickel.</li>
            <li><b>Non-Ferrous</b>: Copper, Bauxite (Al), Zinc, Tin, Gold, Silver, Lead.</li>
          </ul>
        </li>
        <li><b>Non-Metallic</b>: Mica, Salt, Limestone, Gypsum, Diamond, Phosphate.</li>
        <li><b>Energy/Fuel</b>: Coal, Petroleum, Natural Gas, Uranium, Thorium.</li>
      </ul>

      <h4>Important Minerals and Their Ores</h4>
      <table>
        <tr><th>Metal</th><th>Main Ore(s)</th></tr>
        <tr><td>Iron (Fe)</td><td>Hematite, Magnetite, Limonite, Siderite</td></tr>
        <tr><td>Aluminium (Al)</td><td>Bauxite, Cryolite</td></tr>
        <tr><td>Copper (Cu)</td><td>Chalcocite, Chalcopyrite, Malachite</td></tr>
        <tr><td>Zinc (Zn)</td><td>Sphalerite, Calamine</td></tr>
        <tr><td>Lead (Pb)</td><td>Galena</td></tr>
        <tr><td>Mercury (Hg)</td><td>Cinnabar</td></tr>
        <tr><td>Silver (Ag)</td><td>Argentite</td></tr>
        <tr><td>Sodium (Na)</td><td>Rock Salt (Halite), Borax</td></tr>
        <tr><td>Magnesium (Mg)</td><td>Magnesite, Dolomite</td></tr>
        <tr><td>Calcium (Ca)</td><td>Limestone, Gypsum, Marble</td></tr>
        <tr><td>Tin (Sn)</td><td>Cassiterite</td></tr>
        <tr><td>Manganese (Mn)</td><td>Pyrolusite, Manganite</td></tr>
        <tr><td>Uranium (U)</td><td>Uraninite/Pitchblende</td></tr>
        <tr><td>Thorium (Th)</td><td>Monazite</td></tr>
      </table>

      <h4>Mohs Scale of Hardness (1822)</h4>
      <ol>
        <li>Talc (softest)</li>
        <li>Gypsum</li>
        <li>Calcite</li>
        <li>Fluorite</li>
        <li>Apatite</li>
        <li>Feldspar</li>
        <li>Quartz</li>
        <li>Topaz</li>
        <li>Corundum (Ruby, Sapphire)</li>
        <li><b>Diamond</b> (hardest natural)</li>
      </ol>

      <h3>Looking Ahead</h3>
      <p>Next: <b>Landforms</b> — including earthquakes, volcanoes, mountains.</p>
    `,
    mcq: [
      { q: "Three main types of rocks are?", opts: ["Igneous, Sedimentary, Metamorphic", "Hard, Soft, Medium", "Volcanic, River, Mountain", "Old, New, Ancient"], a: 0, ex: "Igneous (from magma/lava), Sedimentary (deposition), Metamorphic (transformed)." },
      { q: "Granite is which type of rock?", opts: ["Igneous (intrusive)", "Sedimentary", "Metamorphic", "Hybrid"], a: 0, ex: "Intrusive igneous; coarse-grained; quartz + feldspar + mica." },
      { q: "Basalt is?", opts: ["Intrusive igneous", "Extrusive igneous", "Sedimentary", "Metamorphic"], a: 1, ex: "Extrusive igneous; Deccan Traps are basaltic." },
      { q: "Pumice rock is famous because it?", opts: ["Is hardest", "Floats on water (porous, light)", "Glows", "Magnetic"], a: 1, ex: "Light and porous; from explosive volcanic eruption." },
      { q: "Sandstone is?", opts: ["Igneous", "Sedimentary (clastic)", "Metamorphic", "Volcanic"], a: 1, ex: "Mechanically formed sedimentary; mostly quartz." },
      { q: "Coal is which type of rock?", opts: ["Igneous", "Organically formed sedimentary", "Metamorphic", "Mineral (not rock)"], a: 1, ex: "Sedimentary (organic origin); from ancient plants." },
      { q: "Marble is metamorphic form of?", opts: ["Sandstone", "Limestone", "Shale", "Granite"], a: 1, ex: "Limestone (CaCO₃) → Marble under heat and pressure." },
      { q: "Quartzite is metamorphic form of?", opts: ["Sandstone", "Limestone", "Shale", "Granite"], a: 0, ex: "Sandstone → Quartzite." },
      { q: "Slate is metamorphic form of?", opts: ["Sandstone", "Limestone", "Shale", "Basalt"], a: 2, ex: "Shale → Slate → Schist → Gneiss (with increasing metamorphism)." },
      { q: "Diamond is metamorphic form of?", opts: ["Limestone", "Sandstone", "Carbon (Coal/Graphite under extreme pressure)", "Iron"], a: 2, ex: "Carbon under extreme pressure and temperature." },
      { q: "Hardest natural substance on Earth?", opts: ["Quartz", "Topaz", "Corundum", "Diamond (Mohs scale 10)"], a: 3, ex: "Diamond — Mohs hardness 10." },
      { q: "Softest mineral on Mohs scale?", opts: ["Talc (1)", "Gypsum (2)", "Calcite (3)", "Fluorite (4)"], a: 0, ex: "Talc — hardness 1." },
      { q: "Hematite, Magnetite, Limonite are ores of?", opts: ["Aluminium", "Copper", "Iron", "Lead"], a: 2, ex: "Iron (Fe) ores." },
      { q: "Bauxite is the main ore of?", opts: ["Iron", "Copper", "Aluminium", "Zinc"], a: 2, ex: "Aluminium." },
      { q: "Galena is the main ore of?", opts: ["Lead", "Mercury", "Copper", "Silver"], a: 0, ex: "Lead (Pb)." },
      { q: "Cinnabar is the main ore of?", opts: ["Lead", "Mercury", "Copper", "Tin"], a: 1, ex: "Mercury (HgS)." },
      { q: "Cassiterite is the ore of?", opts: ["Tin", "Zinc", "Lead", "Iron"], a: 0, ex: "Tin (Sn)." },
      { q: "Monazite is the source of?", opts: ["Uranium", "Thorium", "Iron", "Aluminium"], a: 1, ex: "Thorium; major Indian deposits in Kerala beach sands." },
      { q: "Pitchblende (Uraninite) is the ore of?", opts: ["Uranium", "Thorium", "Plutonium", "Lithium"], a: 0, ex: "Uranium." },
      { q: "Sedimentary rocks cover what % of Earth's surface?", opts: ["25%", "50%", "~75%", "95%"], a: 2, ex: "Cover ~75% of Earth's surface but only ~5% of crustal volume." }
    ]
  };

  T["geo-landforms"] = {
    body: `
      ${figRow([
        ["Plates_tect2_en.svg", "Earth's major tectonic plates"],
        ["Volcano_scheme.svg", "Cross-section of a volcano"]
      ])}
      <h3>Plate Tectonics</h3>
      <p>Earth's lithosphere is broken into <b>~7 major and several minor "tectonic plates"</b> that float on the asthenosphere and slowly move (a few cm per year). Their movement causes mountains, earthquakes, volcanoes, ocean trenches.</p>

      <h4>Major Plates</h4>
      <ol>
        <li>African Plate</li>
        <li>Antarctic Plate</li>
        <li>Eurasian Plate</li>
        <li>Indo-Australian Plate (sometimes split into Indian + Australian)</li>
        <li>North American Plate</li>
        <li>Pacific Plate</li>
        <li>South American Plate</li>
      </ol>
      <p>Theory: <b>Continental Drift</b> by <b>Alfred Wegener (1912)</b> — proposed all continents were once joined as <b>"Pangaea"</b>; later proven through plate tectonics (1960s).</p>

      <h4>Plate Boundaries — Three Types</h4>
      <table>
        <tr><th>Boundary</th><th>Movement</th><th>Result</th></tr>
        <tr><td><b>Convergent</b> (destructive)</td><td>Plates move toward each other; one subducts</td><td>Mountains, deep ocean trenches, volcanoes, earthquakes (e.g., Himalayas — India + Eurasia; Andes — Pacific + S. American)</td></tr>
        <tr><td><b>Divergent</b> (constructive)</td><td>Plates move apart</td><td>Mid-ocean ridges, rift valleys (e.g., Mid-Atlantic Ridge, East African Rift, Iceland)</td></tr>
        <tr><td><b>Transform</b> (conservative)</td><td>Plates slide past each other</td><td>Earthquakes (e.g., San Andreas Fault, California)</td></tr>
      </table>

      <hr>

      <h3>EARTHQUAKES</h3>
      <ul>
        <li>Sudden release of energy in Earth's crust → seismic waves.</li>
        <li>Caused mainly by tectonic plate movements; also volcanic activity, mining, large reservoirs.</li>
      </ul>

      <h4>Key Terms</h4>
      <ul>
        <li><b>Focus / Hypocenter</b>: point inside Earth where earthquake originates.</li>
        <li><b>Epicenter</b>: point on Earth's surface directly above focus.</li>
        <li><b>Seismograph</b>: instrument to record earthquake waves.</li>
        <li><b>Seismology</b>: study of earthquakes.</li>
      </ul>

      <h4>Earthquake Waves</h4>
      <table>
        <tr><th>Wave</th><th>Type</th><th>Speed</th><th>Notes</th></tr>
        <tr><td><b>P-Waves (Primary)</b></td><td>Longitudinal (compressional)</td><td>Fastest (4–8 km/s)</td><td>Travel through solid, liquid, gas. First to arrive.</td></tr>
        <tr><td><b>S-Waves (Secondary)</b></td><td>Transverse</td><td>Slower (2.5–4 km/s)</td><td>Travel through solids only — proves outer core is liquid.</td></tr>
        <tr><td><b>L-Waves (Surface / Love)</b></td><td>Surface waves</td><td>Slowest</td><td>Most damaging; travel along surface.</td></tr>
      </table>

      <h4>Measurement</h4>
      <ul>
        <li><b>Richter Scale</b>: logarithmic scale for magnitude (energy released). Charles Richter, 1935.</li>
        <li><b>Mercalli Scale</b>: intensity (effects on humans/structures); I to XII (subjective).</li>
        <li><b>Moment Magnitude Scale (Mw)</b>: modern; replacing Richter for big quakes.</li>
      </ul>

      <h4>Earthquake Belts</h4>
      <ol>
        <li><b>Circum-Pacific Belt ("Ring of Fire")</b> — most active; ~80% of world's earthquakes.</li>
        <li><b>Mediterranean-Himalayan Belt (Alpine-Himalayan)</b> — ~15%; from Mediterranean through Iran to Himalayas, SE Asia.</li>
        <li><b>Mid-Atlantic Belt</b> — along mid-ocean ridges.</li>
      </ol>

      <h4>India's Seismic Zones (5 zones)</h4>
      <ul>
        <li>Zone V: highest risk (NE India, Kashmir, Kutch).</li>
        <li>Zone IV: high (Delhi, Mumbai, Jammu, Patna).</li>
        <li>Zone III: moderate (Chennai, Bhubaneswar, Bhopal).</li>
        <li>Zone II: low.</li>
        <li>(Earlier Zone I was lowest; merged into Zone II in 2002.)</li>
      </ul>

      <h4>Major Earthquakes in India (Recent)</h4>
      <ul>
        <li>1934 Bihar–Nepal — 8.4 magnitude.</li>
        <li>1950 Assam — 8.6.</li>
        <li>1991 Uttarkashi — 6.8.</li>
        <li>1993 Latur, Maharashtra — 6.4; ~10,000 dead.</li>
        <li>2001 Bhuj, Gujarat — 7.7; ~20,000 dead.</li>
        <li>2004 Indian Ocean (Sumatra) — 9.1; tsunami; over 2 lakh dead globally.</li>
        <li>2005 Kashmir — 7.6.</li>
        <li>2015 Nepal/India — 7.8.</li>
      </ul>

      <hr>

      <h3>VOLCANOES</h3>
      <ul>
        <li>Vent in Earth's crust through which lava, ash, gases erupt.</li>
        <li>Magma below Earth = Lava when erupted.</li>
      </ul>

      <h4>Types of Volcanoes (by activity)</h4>
      <ul>
        <li><b>Active</b>: erupted recently or actively erupting (e.g., Etna, Fuji, Stromboli, Mauna Loa, Kilauea, Mount Merapi, Barren Island - India's only active volcano).</li>
        <li><b>Dormant</b>: not erupted recently but could in future (e.g., Mount Fuji - sometimes classified active).</li>
        <li><b>Extinct</b>: not expected to erupt again (e.g., Aconcagua, Kilimanjaro, Narcondam Island - India).</li>
      </ul>

      <h4>Types by Shape</h4>
      <ul>
        <li><b>Shield Volcanoes</b>: low, broad; runny lava (Hawaiian — Mauna Loa).</li>
        <li><b>Composite/Stratovolcanoes</b>: tall, conical; alternating lava and ash (Fuji, Vesuvius, Etna).</li>
        <li><b>Cinder Cone</b>: small, steep.</li>
        <li><b>Caldera</b>: large depression after major eruption (Yellowstone).</li>
      </ul>

      <h4>India's Volcanoes</h4>
      <ul>
        <li><b>Barren Island (Andaman)</b> — only active volcano in India.</li>
        <li><b>Narcondam Island (Andaman)</b> — dormant/extinct.</li>
      </ul>

      <h4>Famous Volcanic Disasters</h4>
      <ul>
        <li><b>Mount Vesuvius (79 AD)</b> — buried Pompeii and Herculaneum.</li>
        <li><b>Krakatoa (1883, Indonesia)</b> — heard 4,000 km away.</li>
        <li><b>Mount St. Helens (1980, USA)</b>.</li>
        <li><b>Mount Tambora (1815, Indonesia)</b> — caused "Year Without Summer" 1816.</li>
      </ul>

      <h4>Pacific "Ring of Fire"</h4>
      <p>Circum-Pacific zone — has ~75% of world's volcanoes (~450 active) and ~80% of earthquakes.</p>

      <hr>

      <h3>MOUNTAINS</h3>

      <h4>Types of Mountains by Origin</h4>
      <table>
        <tr><th>Type</th><th>Formation</th><th>Examples</th></tr>
        <tr><td><b>Fold Mountains</b></td><td>Compression of plates → folding of rocks</td><td><b>Himalayas, Alps, Andes, Rockies, Atlas</b></td></tr>
        <tr><td><b>Block (Fault) Mountains</b></td><td>Faulting; blocks uplifted between faults</td><td>Sierra Nevada (USA), Vosges (France), Black Forest (Germany), <b>Satpura, Vindhya</b></td></tr>
        <tr><td><b>Volcanic Mountains</b></td><td>Eruption builds cone</td><td>Fuji, Vesuvius, Mauna Loa, Kilimanjaro</td></tr>
        <tr><td><b>Residual / Relict</b></td><td>Erosion of older mountains</td><td>Aravalli, Nilgiri, Western Ghats (oldest mountains in India)</td></tr>
        <tr><td><b>Dome Mountains</b></td><td>Magma uplift but doesn't erupt</td><td>Black Hills (USA)</td></tr>
      </table>

      <h4>Mountain Ages</h4>
      <ul>
        <li><b>Young fold mountains</b>: Cenozoic era; tall, sharp peaks. Examples: Himalayas, Alps, Andes, Rockies.</li>
        <li><b>Old mountains</b>: heavily eroded; rounded peaks. Examples: Aravallis, Appalachians, Urals.</li>
      </ul>

      <h4>World's Highest Peaks</h4>
      <table>
        <tr><th>Peak</th><th>Height</th><th>Range / Country</th></tr>
        <tr><td><b>Mount Everest (Sagarmatha / Chomolungma)</b></td><td>8,848.86 m</td><td>Nepal–Tibet (China)</td></tr>
        <tr><td>K2 (Godwin-Austen)</td><td>8,611 m</td><td>Pakistan-China (Karakoram)</td></tr>
        <tr><td>Kangchenjunga</td><td>8,586 m</td><td>Nepal-Sikkim (India's highest fully)</td></tr>
        <tr><td>Lhotse</td><td>8,516 m</td><td>Nepal-Tibet</td></tr>
        <tr><td>Makalu</td><td>8,485 m</td><td>Nepal-Tibet</td></tr>
        <tr><td>Cho Oyu</td><td>8,188 m</td><td>Nepal-Tibet</td></tr>
        <tr><td>Dhaulagiri</td><td>8,167 m</td><td>Nepal</td></tr>
        <tr><td>Manaslu</td><td>8,163 m</td><td>Nepal</td></tr>
        <tr><td>Nanga Parbat</td><td>8,126 m</td><td>Pakistan</td></tr>
        <tr><td>Annapurna</td><td>8,091 m</td><td>Nepal</td></tr>
      </table>
      <p>14 peaks above 8,000 m, all in Asia (Himalayas + Karakoram).</p>

      <h4>Highest Peaks of Each Continent (Seven Summits)</h4>
      <table>
        <tr><th>Continent</th><th>Highest Peak</th><th>Height</th></tr>
        <tr><td>Asia</td><td>Mt. Everest</td><td>8,848.86 m</td></tr>
        <tr><td>S. America</td><td>Aconcagua (Argentina, Andes)</td><td>6,961 m</td></tr>
        <tr><td>N. America</td><td>Denali (formerly McKinley, Alaska)</td><td>6,194 m</td></tr>
        <tr><td>Africa</td><td>Mt. Kilimanjaro (Tanzania)</td><td>5,895 m</td></tr>
        <tr><td>Europe</td><td>Mt. Elbrus (Russia, Caucasus)</td><td>5,642 m</td></tr>
        <tr><td>Antarctica</td><td>Mt. Vinson (Vinson Massif)</td><td>4,892 m</td></tr>
        <tr><td>Australia/Oceania</td><td>Puncak Jaya (Indonesia)</td><td>4,884 m</td></tr>
      </table>

      <hr>

      <h3>Plateaus</h3>
      <ul>
        <li>Elevated flat-topped landforms; "high-level plain".</li>
        <li>Types:
          <ul>
            <li><b>Intermontane</b> (between mountains): Tibet (highest), Bolivian, Mongolian.</li>
            <li><b>Continental</b>: surrounded by mountains/sea; African Plateau.</li>
            <li><b>Piedmont</b>: at foot of mountains.</li>
            <li><b>Volcanic / Lava</b>: basalt; <b>Deccan Plateau</b>.</li>
          </ul>
        </li>
        <li>Famous: <b>Tibetan Plateau (highest, "Roof of the World")</b>, Deccan, Brazilian, Iranian, Anatolian, Ethiopian.</li>
      </ul>

      <h3>Plains</h3>
      <ul>
        <li>Low-relief flat areas.</li>
        <li>Types:
          <ul>
            <li><b>Alluvial plains</b> (river-deposited): Indo-Gangetic, Hwang Ho, Mississippi.</li>
            <li><b>Glacial plains</b>: from glacier deposits.</li>
            <li><b>Coastal plains</b>: along seashores.</li>
            <li><b>Lacustrine plains</b>: from lake deposits.</li>
          </ul>
        </li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>Next: <b>Atmosphere, Climate & Winds</b>.</p>
    `,
    mcq: [
      { q: "Continental Drift theory was proposed by?", opts: ["Wegener (1912)", "Hess", "Wilson", "Pangaea"], a: 0, ex: "Alfred Wegener, 1912; proposed Pangaea." },
      { q: "Pangaea was?", opts: ["A supercontinent that broke into modern continents", "An ocean", "A volcano", "A mountain"], a: 0, ex: "Wegener's hypothetical supercontinent ~200 million years ago." },
      { q: "Earthquake originates at?", opts: ["Epicenter", "Focus / Hypocenter (point inside Earth)", "Tectonic plate", "Mantle"], a: 1, ex: "Focus is inside Earth; epicenter is the point on surface directly above." },
      { q: "Earthquake magnitude is measured on?", opts: ["Mercalli scale", "Richter scale (logarithmic, magnitude/energy)", "Beaufort scale", "Mohs scale"], a: 1, ex: "Richter (1935); now Moment Magnitude Scale used for large quakes." },
      { q: "S-Waves (secondary seismic waves) cannot travel through?", opts: ["Solids", "Liquids and gases (proves outer core is liquid)", "Air", "Mantle"], a: 1, ex: "S-waves are transverse; cannot travel through liquids — proved outer core is liquid." },
      { q: "Most damaging earthquake waves are?", opts: ["P-waves", "S-waves", "L-waves (Love/surface)", "Sound waves"], a: 2, ex: "L-waves travel along surface; cause most structural damage." },
      { q: "Pacific Ring of Fire accounts for what % of earthquakes?", opts: ["50%", "60%", "~80%", "100%"], a: 2, ex: "~80% of earthquakes; ~75% of volcanoes." },
      { q: "India's only active volcano?", opts: ["Narcondam", "Barren Island (Andaman)", "Pawagad", "Mahabaleshwar"], a: 1, ex: "Barren Island in Andaman Sea." },
      { q: "Himalayas are which type of mountains?", opts: ["Fold (young)", "Block", "Volcanic", "Residual"], a: 0, ex: "Fold mountains; formed by Indian plate-Eurasian plate convergence; still rising." },
      { q: "Aravalli is which type of mountain?", opts: ["Young fold", "Block", "Volcanic", "Residual / oldest"], a: 3, ex: "Aravalli is one of the oldest fold mountain ranges in world (Pre-Cambrian); now heavily eroded — residual." },
      { q: "Satpura and Vindhya ranges are?", opts: ["Fold", "Block / Horst", "Volcanic", "Plateau"], a: 1, ex: "Block mountains; formed between faults." },
      { q: "Highest peak in the world?", opts: ["K2", "Mt. Everest (8,848.86 m)", "Kangchenjunga", "Lhotse"], a: 1, ex: "Mt. Everest in Himalayas (Nepal-Tibet border)." },
      { q: "K2 (second highest in world) is in?", opts: ["Himalayas", "Karakoram (Pakistan-China)", "Hindu Kush", "Kunlun"], a: 1, ex: "Karakoram range; 8,611 m; also called Godwin-Austen." },
      { q: "Highest peak in Africa?", opts: ["Mt. Kenya", "Mt. Kilimanjaro (Tanzania, 5,895 m)", "Atlas", "Ras Dejen"], a: 1, ex: "Mt. Kilimanjaro — extinct volcano." },
      { q: "Highest peak in S. America?", opts: ["Cotopaxi", "Aconcagua (Argentina, 6,961 m)", "Chimborazo", "Pico de Orizaba"], a: 1, ex: "Aconcagua in Andes; highest outside Asia." },
      { q: "'Roof of the World' refers to?", opts: ["Pamir Plateau", "Tibetan Plateau (highest in world)", "Deccan Plateau", "Iranian Plateau"], a: 1, ex: "Tibetan Plateau, average height ~4,500 m. (Pamir is also called 'Roof of the World' in some usages.)" },
      { q: "Deccan Plateau is which type?", opts: ["Intermontane", "Continental", "Volcanic / Lava (basaltic)", "Piedmont"], a: 2, ex: "Volcanic/lava plateau; from Deccan Traps eruptions ~65 million years ago." },
      { q: "Indo-Gangetic Plain is which type?", opts: ["Plateau", "Alluvial plain (river-deposited)", "Coastal", "Glacial"], a: 1, ex: "Alluvial plain; deposited by Ganga, Yamuna, etc." },
      { q: "Vesuvius volcanic eruption (79 AD) buried?", opts: ["Athens", "Pompeii and Herculaneum", "Rome", "Carthage"], a: 1, ex: "Roman cities Pompeii and Herculaneum near Naples." },
      { q: "Plate boundary at San Andreas Fault (California) is?", opts: ["Convergent", "Divergent", "Transform (sliding)", "Volcanic"], a: 2, ex: "Transform boundary; Pacific and North American plates slide past." },
      { q: "Mid-Atlantic Ridge is what type of boundary?", opts: ["Convergent", "Divergent (constructive)", "Transform", "Subduction"], a: 1, ex: "Divergent — plates moving apart, creating new sea floor." }
    ]
  };

  T["geo-atmosphere"] = {
    body: `
      ${fig("Atmosphere_layers-en.svg", "Layers of Earth's atmosphere — troposphere, stratosphere, mesosphere, thermosphere, exosphere")}
      <h3>Atmosphere — Earth's Gaseous Envelope</h3>
      <p>Layer of gases held by Earth's gravity. Extends ~10,000 km up but most mass within ~50 km.</p>

      <h4>Composition (by volume, dry air)</h4>
      <ul>
        <li><b>Nitrogen (N₂)</b> — 78.09%</li>
        <li><b>Oxygen (O₂)</b> — 20.95%</li>
        <li><b>Argon (Ar)</b> — 0.93%</li>
        <li><b>Carbon Dioxide (CO₂)</b> — 0.04% (rising)</li>
        <li>Trace: Neon, Helium, Methane, Krypton, Hydrogen, Xenon, Ozone</li>
        <li>Water vapour — 0–4% (variable)</li>
      </ul>

      <h3>Layers of the Atmosphere (bottom to top)</h3>
      <table>
        <tr><th>Layer</th><th>Altitude</th><th>Features</th></tr>
        <tr><td><b>Troposphere</b></td><td>0–12 km (varies; 8 at poles, 18 at equator)</td><td>"Convective sphere"; weather happens here. Temperature decreases with height (~6.5°C/km — Normal Lapse Rate). 80% of atmospheric mass.</td></tr>
        <tr><td>Tropopause</td><td>~12 km</td><td>Boundary between Troposphere and Stratosphere; stable.</td></tr>
        <tr><td><b>Stratosphere</b></td><td>12–50 km</td><td>Contains <b>Ozone Layer (15–35 km)</b> — absorbs UV. Temperature increases with height. Ideal for jet aircraft (smooth).</td></tr>
        <tr><td>Stratopause</td><td>~50 km</td><td>Boundary.</td></tr>
        <tr><td><b>Mesosphere</b></td><td>50–80 km</td><td>Coldest layer (-90°C at top). Meteors burn up here.</td></tr>
        <tr><td>Mesopause</td><td>~80 km</td><td>Boundary; coldest point.</td></tr>
        <tr><td><b>Thermosphere</b> (incl. Ionosphere)</td><td>80–500 km</td><td>Temperature rises sharply (up to 2,500°C). Auroras occur. Ionosphere reflects radio waves. ISS orbits here.</td></tr>
        <tr><td><b>Exosphere</b></td><td>500–10,000 km</td><td>Outermost layer; merges with space; satellites orbit.</td></tr>
      </table>

      <h4>Ozone Layer</h4>
      <ul>
        <li>In stratosphere (15–35 km).</li>
        <li>Absorbs harmful UV radiation.</li>
        <li>Depleted by <b>CFCs (chlorofluorocarbons)</b> — discovered 1985 (Antarctic ozone hole).</li>
        <li><b>Montreal Protocol (1987)</b> — international agreement to phase out CFCs.</li>
        <li>16 September: International Day for Preservation of Ozone Layer.</li>
      </ul>

      <hr>

      <h3>Weather vs Climate</h3>
      <table>
        <tr><th>Weather</th><th>Climate</th></tr>
        <tr><td>Atmospheric conditions at a place at a given time</td><td>Average weather of a place over long period (~30 years)</td></tr>
        <tr><td>Short-term, changes hourly/daily</td><td>Long-term, stable</td></tr>
      </table>

      <h3>Elements of Weather and Climate</h3>
      <ol>
        <li>Temperature</li>
        <li>Atmospheric pressure</li>
        <li>Wind</li>
        <li>Humidity</li>
        <li>Precipitation (rain, snow, hail, sleet)</li>
        <li>Cloudiness</li>
      </ol>

      <hr>

      <h3>Insolation and Heat Budget</h3>
      <ul>
        <li><b>Insolation</b>: incoming solar radiation. Earth receives ~2 cal/cm²/min (solar constant).</li>
        <li>Tropical regions get more insolation (Sun more vertical).</li>
        <li>Heat budget: balance of solar energy received and radiated.</li>
      </ul>

      <hr>

      <h3>Atmospheric Pressure</h3>
      <ul>
        <li>Weight of air column above unit area.</li>
        <li>Standard sea-level pressure: <b>1013.25 hPa (millibars) / 760 mm Hg</b>.</li>
        <li>Decreases with altitude.</li>
        <li>Measured by <b>Barometer</b>.</li>
        <li><b>Isobars</b>: lines connecting points of equal pressure.</li>
      </ul>

      <h4>Pressure Belts (7 globally)</h4>
      <table>
        <tr><th>Belt</th><th>Latitude</th><th>Type</th></tr>
        <tr><td><b>Equatorial Low</b></td><td>0° (equator)</td><td>Low pressure (Doldrums)</td></tr>
        <tr><td><b>Subtropical High</b> (N + S)</td><td>30° N/S</td><td>High pressure (Horse Latitudes)</td></tr>
        <tr><td><b>Subpolar Low</b> (N + S)</td><td>60° N/S</td><td>Low pressure</td></tr>
        <tr><td><b>Polar High</b> (N + S)</td><td>90° N/S</td><td>High pressure</td></tr>
      </table>

      <hr>

      <h3>WINDS</h3>
      <p>Air moves from high pressure to low pressure. <b>Coriolis effect</b> deflects winds — to right in N. Hemisphere, to left in S. Hemisphere (Ferrel's Law).</p>

      <h4>Types of Winds</h4>

      <h4>1. Permanent / Planetary Winds</h4>
      <table>
        <tr><th>Wind</th><th>From → To</th><th>Direction</th></tr>
        <tr><td><b>Trade Winds</b></td><td>Subtropical High (30°) → Equator</td><td>NE in N. Hemisphere; SE in S. Hemisphere</td></tr>
        <tr><td><b>Westerlies</b></td><td>Subtropical High → Subpolar Low (30°–60°)</td><td>SW in N; NW in S</td></tr>
        <tr><td><b>Polar Easterlies</b></td><td>Polar High → Subpolar Low (60°–90°)</td><td>NE in N; SE in S</td></tr>
      </table>
      <p>Westerlies in Southern Hemisphere = "Roaring Forties (40°)", "Furious Fifties (50°)", "Shrieking Sixties (60°)" — strong, unobstructed.</p>

      <h4>2. Periodic Winds</h4>
      <ul>
        <li><b>Monsoon</b>: seasonal wind reversal; classic in Indian subcontinent; SW Monsoon (June-Sept, brings rain) and NE Monsoon (Oct-Dec).</li>
        <li><b>Sea breeze</b> (day, sea → land) and <b>Land breeze</b> (night, land → sea).</li>
        <li><b>Mountain breeze</b> (night, downslope) and <b>Valley breeze</b> (day, upslope).</li>
      </ul>

      <h4>3. Local Winds (Hot)</h4>
      <table>
        <tr><th>Wind</th><th>Location</th><th>Effect</th></tr>
        <tr><td><b>Loo</b></td><td>N. India</td><td>Hot dry summer wind from west</td></tr>
        <tr><td>Foehn</td><td>Alps</td><td>Hot dry wind down leeward side</td></tr>
        <tr><td>Chinook</td><td>Rocky Mountains, USA</td><td>"Snow eater"; warms valleys</td></tr>
        <tr><td>Sirocco</td><td>Mediterranean (from Sahara)</td><td>Hot dusty</td></tr>
        <tr><td>Harmattan</td><td>W. Africa (from Sahara)</td><td>Dry, dusty</td></tr>
        <tr><td>Khamsin</td><td>Egypt</td><td>Hot, dry</td></tr>
        <tr><td>Santa Ana</td><td>California</td><td>Hot, dry</td></tr>
      </table>

      <h4>4. Local Winds (Cold)</h4>
      <table>
        <tr><th>Wind</th><th>Location</th></tr>
        <tr><td>Mistral</td><td>S. France/Mediterranean</td></tr>
        <tr><td>Bora</td><td>Adriatic coast</td></tr>
        <tr><td>Bise</td><td>France</td></tr>
        <tr><td>Buran/Purga</td><td>Russia/Siberia</td></tr>
        <tr><td>Norther</td><td>Texas, USA</td></tr>
        <tr><td>Pampero</td><td>S. America (Pampas)</td></tr>
      </table>

      <h4>Cyclones and Anticyclones</h4>
      <ul>
        <li><b>Cyclone</b>: low-pressure system; air moves anti-clockwise in N. Hemisphere, clockwise in S.</li>
        <li><b>Anti-cyclone</b>: high-pressure system; opposite circulation.</li>
        <li><b>Tropical cyclones</b>: form over warm oceans; called by different names regionally:
          <ul>
            <li><b>Hurricane</b> — Caribbean, N. Atlantic, NE Pacific.</li>
            <li><b>Typhoon</b> — NW Pacific (Asia).</li>
            <li><b>Cyclone</b> — Indian Ocean, Bay of Bengal, Arabian Sea, Australia.</li>
            <li><b>Willy-Willy</b> — Australia (also dust devil).</li>
            <li><b>Tornado</b> — N. America (small, intense, over land).</li>
            <li><b>Baguio</b> — Philippines.</li>
          </ul>
        </li>
      </ul>

      <hr>

      <h3>Humidity and Precipitation</h3>
      <ul>
        <li><b>Absolute humidity</b>: actual water vapour in air (g/m³).</li>
        <li><b>Relative humidity</b>: ratio of actual water vapour to saturation level (%).</li>
        <li><b>Dew point</b>: temperature at which air becomes saturated.</li>
      </ul>

      <h4>Forms of Precipitation</h4>
      <ul>
        <li>Rain, Snow, Sleet, Hail, Dew, Frost, Fog, Mist.</li>
      </ul>

      <h4>Types of Rainfall</h4>
      <table>
        <tr><th>Type</th><th>Cause</th><th>Examples</th></tr>
        <tr><td><b>Convectional</b></td><td>Heating → rising air → cooling → rain</td><td>Equatorial regions</td></tr>
        <tr><td><b>Orographic / Relief</b></td><td>Mountains force air to rise → rain on windward side; rain shadow on leeward</td><td>Western Ghats (Mumbai side rain; Deccan rain shadow)</td></tr>
        <tr><td><b>Cyclonic / Frontal</b></td><td>Warm and cold air masses meet</td><td>Mid-latitude cyclones</td></tr>
      </table>

      <h4>Clouds (4 main types by altitude)</h4>
      <ul>
        <li><b>High clouds (above 6 km)</b>: Cirrus, Cirrocumulus, Cirrostratus.</li>
        <li><b>Middle clouds (2–6 km)</b>: Altocumulus, Altostratus.</li>
        <li><b>Low clouds (below 2 km)</b>: Stratus, Nimbostratus, Stratocumulus.</li>
        <li><b>Vertical clouds</b>: <b>Cumulus, Cumulonimbus</b> (thunderstorm cloud).</li>
      </ul>

      <h3>Climate Types (Köppen Classification)</h3>
      <ul>
        <li>A — Tropical (always warm)</li>
        <li>B — Dry (deserts, steppes)</li>
        <li>C — Temperate (mid-latitudes)</li>
        <li>D — Continental (cold winters)</li>
        <li>E — Polar (very cold)</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>Next: <b>Hydrosphere — Oceans, Currents and Tides</b>.</p>
    `,
    mcq: [
      { q: "% of nitrogen in atmosphere?", opts: ["50%", "60%", "78%", "90%"], a: 2, ex: "78.09% nitrogen; 20.95% oxygen; 0.93% argon; 0.04% CO₂." },
      { q: "Lowest layer of atmosphere is?", opts: ["Stratosphere", "Mesosphere", "Troposphere", "Thermosphere"], a: 2, ex: "Troposphere (0–12 km); contains 80% of atmospheric mass; weather here." },
      { q: "Ozone layer is in?", opts: ["Troposphere", "Stratosphere (15–35 km)", "Mesosphere", "Thermosphere"], a: 1, ex: "Stratosphere; absorbs harmful UV radiation." },
      { q: "Meteors burn up in?", opts: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], a: 2, ex: "Mesosphere; coldest layer." },
      { q: "Aurora (Northern/Southern Lights) occurs in?", opts: ["Stratosphere", "Mesosphere", "Thermosphere/Ionosphere", "Exosphere"], a: 2, ex: "Thermosphere — ionized particles from solar wind interact with magnetic field." },
      { q: "Coldest atmospheric layer?", opts: ["Troposphere", "Stratosphere", "Mesosphere (~-90°C)", "Thermosphere"], a: 2, ex: "Mesosphere — top reaches -90°C." },
      { q: "Montreal Protocol (1987) was about?", opts: ["Greenhouse gases", "CFCs and ozone protection", "Plastic waste", "Nuclear arms"], a: 1, ex: "Phase-out of CFCs; signed Montreal 1987." },
      { q: "Standard sea-level atmospheric pressure?", opts: ["1013 hPa / 760 mm Hg", "500 hPa", "2000 hPa", "100 mm Hg"], a: 0, ex: "1013.25 hPa = 760 mm Hg = 29.92 in Hg." },
      { q: "Atmospheric pressure is measured by?", opts: ["Thermometer", "Barometer", "Anemometer", "Hygrometer"], a: 1, ex: "Barometer (mercury or aneroid)." },
      { q: "Anemometer measures?", opts: ["Pressure", "Wind speed", "Humidity", "Temperature"], a: 1, ex: "Wind speed and direction." },
      { q: "Coriolis effect deflects winds in N. Hemisphere to?", opts: ["Left", "Right", "Up", "Down"], a: 1, ex: "Right in N. Hemisphere; left in S. Hemisphere (Ferrel's Law)." },
      { q: "Trade winds blow from?", opts: ["Equator to poles", "Subtropical High (30°) to Equator", "Poles to equator", "30° to 60°"], a: 1, ex: "Subtropical High to Equatorial Low; NE in N, SE in S Hemisphere." },
      { q: "Westerlies blow from?", opts: ["30° to 60° (Subtropical High to Subpolar Low)", "60° to 90°", "0° to 30°", "Random"], a: 0, ex: "30°–60° latitudes; SW in N, NW in S." },
      { q: "'Roaring Forties' refers to?", opts: ["Trade winds", "Strong westerlies in Southern Hemisphere at 40°", "Polar easterlies", "Monsoon"], a: 1, ex: "Strong unobstructed westerlies in S. Hemisphere at 40° latitude." },
      { q: "Loo is a wind found in?", opts: ["California", "N. India (hot summer wind from west)", "Sahara", "Russia"], a: 1, ex: "Hot dry summer wind in northern plains of India." },
      { q: "Chinook 'snow eater' wind is in?", opts: ["Alps", "Rocky Mountains, USA/Canada", "Andes", "Himalayas"], a: 1, ex: "Warm dry wind that descends Rocky Mountains' eastern slopes." },
      { q: "Mistral cold wind is in?", opts: ["S. France/Mediterranean", "Russia", "Australia", "USA"], a: 0, ex: "Cold dry wind in southern France and Mediterranean." },
      { q: "Cyclone in NW Pacific is called?", opts: ["Hurricane", "Typhoon", "Willy-Willy", "Tornado"], a: 1, ex: "Typhoon — Asia/Pacific. Hurricane = N. Atlantic; Cyclone = Indian Ocean; Willy-Willy = Australia; Tornado = land in N. America." },
      { q: "Hurricanes occur over?", opts: ["NW Pacific", "Indian Ocean", "Caribbean / N. Atlantic", "Australia"], a: 2, ex: "Hurricane = Caribbean, N. Atlantic, NE Pacific." },
      { q: "Wind on western side of Western Ghats causes which type of rainfall in Mumbai?", opts: ["Convectional", "Orographic", "Cyclonic", "Frontal"], a: 1, ex: "Orographic — wind forced up by mountains; rain shadow on Deccan side." },
      { q: "International Day for Ozone Layer Preservation?", opts: ["5 June", "16 September", "22 April", "10 December"], a: 1, ex: "16 September — anniversary of Montreal Protocol." },
      { q: "Cumulonimbus clouds are associated with?", opts: ["Fair weather", "Thunderstorms", "Cirrus", "Light drizzle"], a: 1, ex: "Tall vertical clouds; thunderstorms, lightning, hail." },
      { q: "Köppen classified climates by?", opts: ["Pressure", "Temperature + Precipitation (vegetation)", "Wind", "Latitude only"], a: 1, ex: "Temperature and precipitation patterns linked to vegetation." }
    ]
  };

  T["geo-hydrosphere"] = {
    body: `
      ${fig("Corrientes-oceanicas.png", "Major ocean currents of the world (warm: red; cold: blue)")}
      <h3>Hydrosphere — Earth's Water</h3>
      <ul>
        <li>Total water on Earth: ~<b>1,386 million km³</b>.</li>
        <li>Distribution:
          <ul>
            <li><b>~97.5% — Oceans (saline)</b></li>
            <li>~1.7% — Glaciers and ice caps (frozen freshwater)</li>
            <li>~0.7% — Groundwater</li>
            <li>~0.1% — Lakes, rivers, atmosphere (surface freshwater)</li>
          </ul>
        </li>
        <li>Only ~2.5% is freshwater; only ~1% is accessible to humans.</li>
      </ul>

      <hr>

      <h3>Oceans of the World — 5 Major</h3>
      <table>
        <tr><th>Ocean</th><th>Approx. Area</th><th>Notes</th></tr>
        <tr><td><b>Pacific Ocean</b></td><td>165 million km²</td><td>Largest; covers 1/3 of Earth's surface; <b>Mariana Trench (10,994 m / Challenger Deep)</b> — deepest point.</td></tr>
        <tr><td><b>Atlantic Ocean</b></td><td>106 million km²</td><td>2nd largest; "S"-shape; busiest ocean for trade.</td></tr>
        <tr><td><b>Indian Ocean</b></td><td>73 million km²</td><td>3rd largest; <b>only ocean named after a country</b>.</td></tr>
        <tr><td><b>Southern (Antarctic) Ocean</b></td><td>20 million km²</td><td>Recognized as 5th ocean by IHO in 2000; surrounds Antarctica.</td></tr>
        <tr><td><b>Arctic Ocean</b></td><td>14 million km²</td><td>Smallest; mostly ice-covered; shallowest.</td></tr>
      </table>

      <h3>Composition of Sea Water</h3>
      <ul>
        <li>Average salinity: <b>~35‰ (35 parts per thousand / 3.5%)</b>.</li>
        <li>Main salts: <b>Sodium chloride (77%)</b>, magnesium chloride, magnesium sulphate, calcium sulphate, potassium sulphate.</li>
        <li>Highest salinity: Lake Van (Turkey, 330‰), Dead Sea (~340‰), Lake Assal (Djibouti, 348‰).</li>
        <li>Among open seas: Red Sea (~41‰); lowest among open seas: Baltic Sea (~7‰).</li>
        <li>Salinity increases: high evaporation, low rainfall, isolated water body.</li>
        <li>Salinity decreases: low evaporation, high rainfall, freshwater inflow.</li>
      </ul>

      <hr>

      <h3>OCEAN CURRENTS</h3>
      <p>Continuous flow of seawater driven by winds, density differences, salinity, Earth's rotation. Two types:</p>

      <h4>Warm Currents</h4>
      <ul>
        <li>Move from low to high latitudes; warm coasts they hit.</li>
        <li>Major:
          <ul>
            <li><b>Gulf Stream</b> (N. Atlantic) — most famous; warms NW Europe.</li>
            <li><b>North Atlantic Drift</b> (extension of Gulf Stream).</li>
            <li><b>Kuroshio (Japan Current)</b> — N. Pacific.</li>
            <li>Brazil Current (S. Atlantic).</li>
            <li>East Australian Current.</li>
            <li>Mozambique Current (Indian Ocean).</li>
            <li>North Equatorial, South Equatorial, Counter Equatorial currents.</li>
          </ul>
        </li>
      </ul>

      <h4>Cold Currents</h4>
      <ul>
        <li>Move from high to low latitudes; cool coasts.</li>
        <li>Major:
          <ul>
            <li><b>Labrador Current</b> (N. Atlantic).</li>
            <li><b>Canary Current</b> (E. N. Atlantic; off NW Africa).</li>
            <li><b>California Current</b>.</li>
            <li><b>Humboldt / Peru Current</b> (S. Pacific; off W. S. America).</li>
            <li><b>Benguela Current</b> (off SW Africa).</li>
            <li><b>Oyashio (Kurile Current)</b> — N. Pacific.</li>
            <li>Falkland Current.</li>
            <li>West Australian Current.</li>
          </ul>
        </li>
      </ul>

      <h4>Where Warm and Cold Meet — Best Fishing Grounds</h4>
      <ul>
        <li>Newfoundland — Gulf Stream meets Labrador → <b>Grand Banks</b> (rich cod fishery).</li>
        <li>Japan — Kuroshio meets Oyashio.</li>
        <li>Why: nutrient-rich cold water + warm water = plankton bloom.</li>
      </ul>

      <h4>El Niño and La Niña</h4>
      <ul>
        <li><b>El Niño</b>: warming of central/eastern Pacific (off Peru); reverses normal current. Effects: weak Indian monsoon, droughts in Australia/SE Asia, floods in S. America.</li>
        <li><b>La Niña</b>: cooling of same region; opposite effects (good monsoon in India).</li>
        <li>Cycle: 2–7 years; ENSO (El Niño-Southern Oscillation).</li>
      </ul>

      <hr>

      <h3>TIDES</h3>
      <ul>
        <li>Periodic rise and fall of sea level due to <b>gravitational pull of Moon and Sun</b>, plus Earth's rotation.</li>
        <li><b>Moon's effect</b> ~2.2× that of Sun (despite Sun's much greater mass) because Moon is much closer.</li>
      </ul>

      <h4>Types of Tides</h4>
      <ul>
        <li><b>High tide</b> and <b>Low tide</b>: occur twice a day each (interval ~12h 25min).</li>
        <li><b>Spring tides</b>: highest tides; when Sun, Moon, Earth align (Full Moon and New Moon — Purnima and Amavasya). 2 times a month.</li>
        <li><b>Neap tides</b>: lowest tides; when Sun and Moon are at right angles to Earth (1st and 3rd quarter Moon). 2 times a month.</li>
      </ul>

      <h4>Highest Tides in World</h4>
      <ul>
        <li><b>Bay of Fundy (Canada)</b> — highest tides in world (~16 m); funnel shape.</li>
        <li>Bristol Channel (UK).</li>
        <li>Gulf of Cambay/Khambhat (India).</li>
      </ul>

      <h4>Tidal Energy</h4>
      <p>Renewable energy from tides; India's first tidal plant proposed at Gulf of Kutch and Sundarbans.</p>

      <hr>

      <h3>Lakes</h3>
      <ul>
        <li>Inland water bodies; either freshwater or saline.</li>
        <li><b>Largest lake</b>: <b>Caspian Sea</b> (~3,71,000 km²; saline; bordered by Russia, Iran, Kazakhstan, Turkmenistan, Azerbaijan).</li>
        <li><b>Largest freshwater lake (by area)</b>: <b>Lake Superior</b> (USA/Canada).</li>
        <li><b>Deepest lake</b>: <b>Lake Baikal</b> (Russia, 1,642 m); also largest by volume of freshwater (20% of world's surface freshwater).</li>
        <li><b>Highest lake</b>: <b>Titicaca</b> (Bolivia/Peru, ~3,812 m).</li>
        <li><b>Lowest lake</b>: <b>Dead Sea</b> (Israel/Jordan, 430 m below sea level); extremely saline.</li>
        <li>African Great Lakes: Victoria (largest in Africa), Tanganyika (deepest in Africa, 2nd deepest in world), Malawi.</li>
      </ul>

      <h4>Indian Lakes (briefly)</h4>
      <ul>
        <li><b>Wular Lake (J&K)</b> — largest freshwater lake in India.</li>
        <li><b>Chilika Lake (Odisha)</b> — largest brackish-water (saltwater) lake in India.</li>
        <li><b>Sambhar Lake (Rajasthan)</b> — largest inland salt lake.</li>
        <li><b>Vembanad Lake (Kerala)</b> — longest lake in India.</li>
        <li>Loktak Lake (Manipur) — only floating lake; phumdis (floating islands).</li>
        <li>Dal Lake (Srinagar), Pulicat Lake (TN-Andhra), Pangong Tso (Ladakh).</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>Next: <b>World Continents and Major Features</b>.</p>
    `,
    mcq: [
      { q: "Earth's water distribution: oceans hold approximately?", opts: ["50%", "75%", "97.5%", "100%"], a: 2, ex: "97.5% in oceans (saline); only 2.5% freshwater." },
      { q: "Largest ocean?", opts: ["Atlantic", "Pacific (1/3 of Earth's surface)", "Indian", "Arctic"], a: 1, ex: "Pacific — 165 million km²." },
      { q: "Smallest of the 5 oceans?", opts: ["Indian", "Arctic", "Atlantic", "Southern"], a: 1, ex: "Arctic Ocean — ~14 million km²." },
      { q: "Deepest point on Earth?", opts: ["Mariana Trench (Challenger Deep, ~10,994 m, Pacific)", "Tonga Trench", "Java Trench", "Puerto Rico Trench"], a: 0, ex: "Mariana Trench in W. Pacific; Challenger Deep ~10,994 m below sea level." },
      { q: "Average salinity of sea water?", opts: ["3.5% (35‰)", "10%", "25%", "50%"], a: 0, ex: "About 35 parts per thousand (3.5%)." },
      { q: "Highest salinity is in?", opts: ["Red Sea", "Dead Sea (~340‰)", "Mediterranean", "Pacific Ocean"], a: 1, ex: "Dead Sea — among saline lakes; very high evaporation." },
      { q: "Gulf Stream is?", opts: ["Cold current", "Warm current (warms NW Europe)", "Local wind", "Tide"], a: 1, ex: "Warm current in N. Atlantic; warms British Isles and NW Europe." },
      { q: "Labrador Current is?", opts: ["Warm", "Cold (off Canada)", "Tidal", "Surface wave"], a: 1, ex: "Cold current in N. Atlantic." },
      { q: "Humboldt / Peru Current is?", opts: ["Warm", "Cold (off W. S. America)", "Tidal", "Equatorial"], a: 1, ex: "Cold current; rich fishing." },
      { q: "El Niño is associated with?", opts: ["Cooling of central/E Pacific", "Warming of central/E Pacific (off Peru)", "Atlantic warming", "Indian Ocean cooling"], a: 1, ex: "El Niño: warming of equatorial E Pacific; weakens Indian monsoon." },
      { q: "Tides are caused mainly by?", opts: ["Sun only", "Moon's gravitational pull (and Sun)", "Earth's rotation", "Wind"], a: 1, ex: "Moon's gravitational pull (~2.2× Sun's effect); Sun adds smaller effect." },
      { q: "Spring tides occur on?", opts: ["Full Moon and New Moon (alignment)", "Half Moon", "Random", "Daily"], a: 0, ex: "Sun, Moon, Earth align — strongest tides; twice a month." },
      { q: "Neap tides occur on?", opts: ["Full Moon", "New Moon", "1st and 3rd quarter Moon (perpendicular)", "Solar eclipse"], a: 2, ex: "Sun and Moon perpendicular to Earth — weakest tides." },
      { q: "Highest tides in the world are at?", opts: ["Bay of Bengal", "Bay of Fundy (Canada, ~16 m)", "Mediterranean", "Persian Gulf"], a: 1, ex: "Bay of Fundy in Canada; funnel shape amplifies tides." },
      { q: "Largest lake in the world?", opts: ["Lake Superior", "Caspian Sea (saline; ~3.71 lakh km²)", "Victoria", "Baikal"], a: 1, ex: "Caspian Sea — saline; technically a sea by name but a lake." },
      { q: "Deepest lake in the world?", opts: ["Tanganyika", "Baikal (Russia, 1,642 m)", "Caspian", "Victoria"], a: 1, ex: "Lake Baikal — also holds 20% of world's surface freshwater." },
      { q: "Highest lake in the world?", opts: ["Titicaca (Bolivia/Peru, 3,812 m)", "Pangong", "Baikal", "Victoria"], a: 0, ex: "Lake Titicaca in Andes." },
      { q: "Lowest lake (below sea level)?", opts: ["Caspian", "Dead Sea (430 m below sea level)", "Aral Sea", "Lake Eyre"], a: 1, ex: "Dead Sea — extremely saline; ~430 m below sea level." },
      { q: "Largest freshwater lake (by area)?", opts: ["Caspian Sea", "Lake Superior (USA/Canada)", "Baikal", "Victoria"], a: 1, ex: "Lake Superior — USA-Canada; largest by area; Baikal largest by volume." },
      { q: "Largest freshwater lake in India?", opts: ["Chilika", "Wular (J&K)", "Vembanad", "Sambhar"], a: 1, ex: "Wular Lake in Kashmir." },
      { q: "Largest brackish-water lake in India?", opts: ["Wular", "Chilika (Odisha)", "Sambhar", "Pulicat"], a: 1, ex: "Chilika Lake in Odisha — also famous for migratory birds." },
      { q: "Loktak Lake (only floating lake) is in?", opts: ["Kerala", "Manipur", "Assam", "Sikkim"], a: 1, ex: "Manipur — famous for phumdis (floating biomass islands); Keibul Lamjao National Park (only floating NP)." }
    ]
  };

  T["geo-world-continents"] = {
    body: `
      ${fig("Continents_colour_coded.png", "The seven continents of the world", 700)}
      <h3>The Seven Continents</h3>
      <table>
        <tr><th>#</th><th>Continent</th><th>Area (km²)</th><th>% of land</th><th>Population</th></tr>
        <tr><td>1</td><td><b>Asia</b></td><td>~44.6 million</td><td>30%</td><td>~4.7 billion (most populous)</td></tr>
        <tr><td>2</td><td><b>Africa</b></td><td>~30.4 million</td><td>20%</td><td>~1.4 billion</td></tr>
        <tr><td>3</td><td><b>North America</b></td><td>~24.7 million</td><td>16%</td><td>~600 million</td></tr>
        <tr><td>4</td><td><b>South America</b></td><td>~17.8 million</td><td>12%</td><td>~430 million</td></tr>
        <tr><td>5</td><td><b>Antarctica</b></td><td>~14.0 million</td><td>9%</td><td>No permanent residents</td></tr>
        <tr><td>6</td><td><b>Europe</b></td><td>~10.2 million</td><td>7%</td><td>~745 million</td></tr>
        <tr><td>7</td><td><b>Australia/Oceania</b></td><td>~8.5 million</td><td>6%</td><td>~45 million (smallest)</td></tr>
      </table>

      <hr>

      <h3>1. ASIA — The Largest Continent</h3>
      <ul>
        <li>30% of world's land; 60% of world's population.</li>
        <li>Bordered by Arctic Ocean (N), Pacific (E), Indian Ocean (S), Europe (W; separated by Ural Mountains).</li>
        <li><b>Most populous countries</b>: <b>India (1st), China (2nd)</b>.</li>
        <li>Highest peak: <b>Mount Everest (Nepal-Tibet)</b>.</li>
        <li>Longest river: <b>Yangtze (Chang Jiang, 6,300 km)</b> in China.</li>
        <li>Largest lake: <b>Caspian Sea</b>.</li>
        <li>Hottest place in summer: <b>Death Valley</b> (USA, but in Mojave Desert N. America); in Asia — Lut Desert (Iran), Ahvaz (Iran).</li>
        <li>Largest desert in Asia: <b>Gobi</b> (Mongolia/China).</li>
        <li>Important regions: South Asia, SE Asia, East Asia, Central Asia, West Asia (Middle East), North Asia (Siberia).</li>
      </ul>

      <hr>

      <h3>2. AFRICA — "The Dark Continent"</h3>
      <ul>
        <li>2nd largest continent.</li>
        <li>Equator passes through middle.</li>
        <li>54 countries; <b>Nigeria most populous, Algeria largest by area</b>.</li>
        <li>Highest peak: <b>Mt. Kilimanjaro (Tanzania, 5,895 m)</b>.</li>
        <li><b>Longest river in world: Nile (6,650 km)</b>; flows N from Lake Victoria to Mediterranean.</li>
        <li>Largest desert in world: <b>Sahara</b> (~9.2 million km²; covers N. Africa).</li>
        <li>Largest lake: <b>Lake Victoria (UG/KE/TZ)</b> — 2nd largest freshwater lake in world.</li>
        <li>Deepest lake in Africa: <b>Tanganyika</b>.</li>
        <li>Madagascar is 4th largest island in world.</li>
        <li><b>Cradle of humanity</b> — earliest hominid fossils (Olduvai Gorge, Tanzania).</li>
        <li>Tropic of Cancer crosses N Africa; Tropic of Capricorn crosses S Africa.</li>
      </ul>

      <hr>

      <h3>3. NORTH AMERICA</h3>
      <ul>
        <li>3rd largest continent.</li>
        <li>23 countries; 3 main: USA, Canada, Mexico.</li>
        <li>Highest peak: <b>Denali (Alaska, USA, 6,194 m)</b>.</li>
        <li>Longest river: <b>Missouri</b> (3,767 km); but <b>Mississippi</b>-Missouri together is the river system.</li>
        <li>Largest lake: <b>Lake Superior</b>.</li>
        <li>5 Great Lakes: <b>Superior, Huron, Michigan, Erie, Ontario</b> (mnemonic: HOMES).</li>
        <li>Mountain ranges: Rocky Mountains (W), Appalachians (E).</li>
        <li>Famous: Niagara Falls (Canada-USA border), Grand Canyon, Yellowstone (oldest national park), Death Valley.</li>
        <li>Largest island: Greenland (an autonomous part of Denmark).</li>
      </ul>

      <hr>

      <h3>4. SOUTH AMERICA</h3>
      <ul>
        <li>4th largest continent; 12 countries; <b>Brazil largest</b>.</li>
        <li>Highest peak: <b>Aconcagua (Argentina, 6,961 m)</b>; highest outside Asia.</li>
        <li>Longest river: <b>Amazon (6,400 km)</b> — by volume the largest in world; flows through Brazil.</li>
        <li><b>Amazon Rainforest</b> — largest tropical rainforest; "lungs of Earth"; mostly in Brazil.</li>
        <li>Mountain range: <b>Andes</b> — longest mountain range on land (~7,000 km).</li>
        <li>Famous: Lake Titicaca (highest navigable lake), Atacama Desert (driest place on Earth, Chile), Pampas (grasslands), Iguazu Falls, Angel Falls (highest waterfall in world; Venezuela).</li>
        <li>Galapagos Islands (Ecuador) — Darwin's evolutionary studies.</li>
      </ul>

      <hr>

      <h3>5. ANTARCTICA</h3>
      <ul>
        <li>5th largest; covers South Pole; surrounded by Southern Ocean.</li>
        <li>~98% covered by ice; thickest ice ~4 km.</li>
        <li>Coldest, driest, windiest continent.</li>
        <li>Lowest recorded temperature: <b>-89.2°C at Vostok Station (Russia, 1983)</b>.</li>
        <li>No permanent residents; only research stations (~70 stations).</li>
        <li>Indian stations: <b>Dakshin Gangotri (1983, abandoned), Maitri (1989), Bharati (2012)</b>.</li>
        <li>Highest peak: Vinson Massif (4,892 m).</li>
        <li>Active volcanoes: Mount Erebus, Mount Sidley.</li>
        <li><b>Antarctic Treaty (1959)</b> — preserves continent for peaceful, scientific use; 12 original signatories.</li>
        <li>Ozone hole discovered over Antarctica in 1985.</li>
      </ul>

      <hr>

      <h3>6. EUROPE</h3>
      <ul>
        <li>6th largest continent (smallest if we exclude Australia for area); ~50 countries.</li>
        <li>Bordered by Atlantic (W), Arctic (N), Mediterranean (S); Urals separate from Asia.</li>
        <li>Highest peak: <b>Mt. Elbrus (Russia, Caucasus, 5,642 m)</b> — also one of Seven Summits.</li>
        <li>Mont Blanc (Alps, France-Italy, 4,810 m) — highest in Western Europe.</li>
        <li>Longest river: <b>Volga (3,690 km)</b> in Russia; flows into Caspian Sea.</li>
        <li>Other major rivers: Danube (passes 10 countries), Rhine, Thames, Seine, Po, Tagus.</li>
        <li>Mountains: Alps, Pyrenees, Apennines, Caucasus, Carpathians, Urals (boundary).</li>
        <li>Russia is the largest country in Europe (and world).</li>
        <li>Vatican City — smallest country in world (in Europe).</li>
        <li>European Union (EU) — 27 member states; common market; Euro currency (most members).</li>
      </ul>

      <hr>

      <h3>7. AUSTRALIA / OCEANIA</h3>
      <ul>
        <li>Smallest continent; 14 countries.</li>
        <li><b>Australia</b> — smallest continent and largest country in Oceania; only nation that is also a continent.</li>
        <li>Highest peak: <b>Puncak Jaya (Indonesia, 4,884 m)</b>; in Australia: Mt. Kosciuszko (2,228 m).</li>
        <li>Longest river: Murray-Darling (Australia).</li>
        <li><b>Great Barrier Reef</b> — world's largest coral reef system; off Queensland coast (Australia); UNESCO.</li>
        <li><b>Outback</b> — vast arid interior of Australia.</li>
        <li>Australia: marsupials (kangaroo, koala, wombat, wallaby) — only continent (with Americas) to have them.</li>
        <li>Indigenous: Aborigines (Australia), Maoris (New Zealand).</li>
        <li>Pacific Islands: Polynesia, Melanesia, Micronesia.</li>
      </ul>

      <hr>

      <h3>Important Geographical "Firsts"</h3>
      <table>
        <tr><th>Item</th><th>Detail</th></tr>
        <tr><td>Largest country (by area)</td><td>Russia (~17.1 mn km²)</td></tr>
        <tr><td>Smallest country</td><td>Vatican City (0.49 km²)</td></tr>
        <tr><td>Largest country (by population)</td><td>India (since 2023; surpassed China)</td></tr>
        <tr><td>Highest country (avg elevation)</td><td>Bhutan / Nepal / Tibet — varies; Kyrgyzstan high</td></tr>
        <tr><td>Lowest country (below sea level)</td><td>Maldives (mostly), Netherlands</td></tr>
        <tr><td>Longest land border</td><td>USA-Canada (~8,891 km)</td></tr>
        <tr><td>Most populous city</td><td>Tokyo (Japan, ~37 million metropolitan)</td></tr>
        <tr><td>Largest island</td><td>Greenland (~21.66 lakh km²)</td></tr>
        <tr><td>Largest archipelago</td><td>Indonesia (~17,500 islands)</td></tr>
        <tr><td>Largest peninsula</td><td>Arabian Peninsula</td></tr>
        <tr><td>Largest delta</td><td>Sundarbans (Ganga-Brahmaputra, India-Bangladesh)</td></tr>
      </table>

      <h3>Looking Ahead</h3>
      <p>Next: <b>World Rivers, Mountains, Deserts</b> in detail.</p>
    `,
    mcq: [
      { q: "Number of continents?", opts: ["5", "6", "7", "8"], a: 2, ex: "Seven: Asia, Africa, N. America, S. America, Antarctica, Europe, Australia/Oceania." },
      { q: "Largest continent by area and population?", opts: ["Africa", "Asia", "Europe", "America"], a: 1, ex: "Asia — 30% of land, 60% of population." },
      { q: "Africa is 2nd largest continent and known as?", opts: ["Continent of contrasts", "Dark continent", "Hot continent", "Tropical continent"], a: 1, ex: "'Dark Continent' historically (referring to limited European exploration in 19th c.)." },
      { q: "Equator passes through which continents?", opts: ["S. America, Africa, Asia", "Asia, Africa, Europe", "S. America, Africa, Asia (Indonesia)", "All seven"], a: 2, ex: "S. America (Brazil, Ecuador, Colombia), Africa (Gabon, Congo, Kenya, etc.), Asia (Indonesia)." },
      { q: "Highest mountain in Africa?", opts: ["Mt. Kenya", "Mt. Kilimanjaro (Tanzania)", "Atlas", "Ethiopian Highlands"], a: 1, ex: "Mt. Kilimanjaro — 5,895 m." },
      { q: "Longest river in the world?", opts: ["Amazon", "Nile (6,650 km)", "Yangtze", "Mississippi"], a: 1, ex: "Nile — Africa; from Lake Victoria to Mediterranean." },
      { q: "Largest river by volume?", opts: ["Nile", "Amazon (S. America)", "Yangtze", "Ganga"], a: 1, ex: "Amazon — by water volume; flows through Brazil." },
      { q: "Largest desert in world?", opts: ["Gobi", "Sahara (Africa, ~9.2 mn km²)", "Atacama", "Kalahari"], a: 1, ex: "Sahara — covers N. Africa." },
      { q: "Driest place on Earth?", opts: ["Sahara", "Atacama Desert (Chile, S. America)", "Gobi", "Kalahari"], a: 1, ex: "Atacama in Chile; some areas have not received measurable rain in years." },
      { q: "Highest peak in N. America?", opts: ["Mt. Whitney", "Denali (formerly McKinley, Alaska)", "Mt. Logan", "Pico de Orizaba"], a: 1, ex: "Denali — 6,194 m." },
      { q: "Five Great Lakes of N. America?", opts: ["Superior, Huron, Ontario, Erie, Michigan (HOMES)", "Big, Long, Wide, Deep, Round", "Same as African Great Lakes", "Pacific lakes"], a: 0, ex: "HOMES: Huron, Ontario, Michigan, Erie, Superior." },
      { q: "Highest peak in S. America (and Western Hemisphere)?", opts: ["Cotopaxi", "Aconcagua (Argentina, 6,961 m)", "Chimborazo", "Pico de Orizaba"], a: 1, ex: "Aconcagua in Andes." },
      { q: "Longest mountain range on land?", opts: ["Himalayas", "Rockies", "Andes (S. America, ~7,000 km)", "Alps"], a: 2, ex: "Andes — longest continental range; runs along W. coast of S. America." },
      { q: "Highest waterfall in the world?", opts: ["Niagara", "Angel Falls (Venezuela)", "Victoria Falls", "Iguazu"], a: 1, ex: "Angel Falls in Venezuela — 979 m total." },
      { q: "Antarctica's lowest recorded temperature?", opts: ["-50°C", "-70°C", "-89.2°C (Vostok, 1983)", "-100°C"], a: 2, ex: "-89.2°C at Vostok Station, Russia, 1983." },
      { q: "First Indian station in Antarctica?", opts: ["Bharati", "Maitri", "Dakshin Gangotri (1983)", "Sagarmatha"], a: 2, ex: "Dakshin Gangotri (1983), now abandoned; Maitri (1989) and Bharati (2012) currently operational." },
      { q: "Antarctic Treaty was signed in?", opts: ["1945", "1959", "1972", "1992"], a: 1, ex: "1959 — preserves continent for peaceful scientific use." },
      { q: "Highest peak in Europe?", opts: ["Mt. Blanc", "Mt. Elbrus (Russia/Caucasus, 5,642 m)", "Matterhorn", "Mt. Etna"], a: 1, ex: "Mt. Elbrus in Caucasus; Mt. Blanc highest in Western Europe (Alps)." },
      { q: "Longest river in Europe?", opts: ["Danube", "Volga (Russia, 3,690 km)", "Rhine", "Thames"], a: 1, ex: "Volga — flows into Caspian Sea." },
      { q: "Largest country (by area)?", opts: ["Canada", "Russia (~17.1 mn km²)", "USA", "China"], a: 1, ex: "Russia — spans 11 time zones." },
      { q: "Smallest country (by area)?", opts: ["Monaco", "San Marino", "Vatican City (0.49 km²)", "Liechtenstein"], a: 2, ex: "Vatican City — within Rome, Italy." },
      { q: "Largest island in the world?", opts: ["Greenland (~22 lakh km²)", "Madagascar", "Borneo", "New Guinea"], a: 0, ex: "Greenland — autonomous part of Denmark; Madagascar is 4th largest." },
      { q: "Australia's largest coral reef?", opts: ["Maldives", "Great Barrier Reef (off Queensland)", "Mesoamerican Reef", "Andros Reef"], a: 1, ex: "Great Barrier Reef — UNESCO; world's largest." },
      { q: "Most populous city in world?", opts: ["Mumbai", "Delhi", "Tokyo (Japan, ~37 mn metro)", "Shanghai"], a: 2, ex: "Tokyo metropolitan area." }
    ]
  };

  T["geo-world-rivers"] = {
    body: `
      ${figRow([
        ["Mountain_Ranges_Map.png", "Major mountain ranges of the world"],
        ["Map_of_major_deserts.png", "Major deserts of the world"]
      ])}
      <h3>Major Rivers of the World</h3>

      <h4>Top 10 Longest Rivers</h4>
      <table>
        <tr><th>Rank</th><th>River</th><th>Length</th><th>Continent</th><th>Empties Into</th></tr>
        <tr><td>1</td><td><b>Nile</b></td><td>6,650 km</td><td>Africa</td><td>Mediterranean Sea (Egypt)</td></tr>
        <tr><td>2</td><td><b>Amazon</b></td><td>6,400 km</td><td>S. America</td><td>Atlantic Ocean (Brazil)</td></tr>
        <tr><td>3</td><td>Yangtze (Chang Jiang)</td><td>6,300 km</td><td>Asia (China)</td><td>East China Sea</td></tr>
        <tr><td>4</td><td>Mississippi-Missouri</td><td>6,275 km</td><td>N. America</td><td>Gulf of Mexico</td></tr>
        <tr><td>5</td><td>Yenisei-Angara</td><td>5,539 km</td><td>Asia (Russia)</td><td>Arctic Ocean</td></tr>
        <tr><td>6</td><td>Yellow (Huang He)</td><td>5,464 km</td><td>Asia (China)</td><td>Bohai Sea</td></tr>
        <tr><td>7</td><td>Ob-Irtysh</td><td>5,410 km</td><td>Asia (Russia)</td><td>Arctic Ocean</td></tr>
        <tr><td>8</td><td>Paraná</td><td>4,880 km</td><td>S. America</td><td>Atlantic Ocean</td></tr>
        <tr><td>9</td><td>Congo (Zaire)</td><td>4,700 km</td><td>Africa</td><td>Atlantic Ocean</td></tr>
        <tr><td>10</td><td>Amur</td><td>4,444 km</td><td>Asia (Russia/China)</td><td>Sea of Okhotsk</td></tr>
      </table>

      <h4>Famous Rivers and Cities on Them</h4>
      <table>
        <tr><th>River</th><th>Cities</th></tr>
        <tr><td>Nile</td><td>Cairo, Khartoum, Aswan</td></tr>
        <tr><td>Thames</td><td>London</td></tr>
        <tr><td>Seine</td><td>Paris</td></tr>
        <tr><td>Tiber</td><td>Rome</td></tr>
        <tr><td>Danube</td><td>Vienna, Budapest, Belgrade (passes 10 countries)</td></tr>
        <tr><td>Rhine</td><td>Cologne, Bonn (Germany)</td></tr>
        <tr><td>Volga</td><td>Russia</td></tr>
        <tr><td>Hudson</td><td>New York</td></tr>
        <tr><td>Mississippi</td><td>New Orleans, Memphis</td></tr>
        <tr><td>Potomac</td><td>Washington DC</td></tr>
        <tr><td>Tigris-Euphrates</td><td>Baghdad (Iraq)</td></tr>
        <tr><td>Mekong</td><td>SE Asia (passes 6 countries)</td></tr>
        <tr><td>Yangtze</td><td>Shanghai, Wuhan, Chongqing</td></tr>
        <tr><td>Nile</td><td>Cairo, Aswan</td></tr>
        <tr><td>Tigris</td><td>Mosul (Iraq)</td></tr>
        <tr><td>Rio Grande</td><td>USA-Mexico border</td></tr>
        <tr><td>Brisbane</td><td>Brisbane (Australia)</td></tr>
      </table>

      <hr>

      <h3>Major Mountain Ranges of the World</h3>
      <table>
        <tr><th>Range</th><th>Continent</th><th>Highest Peak</th></tr>
        <tr><td><b>Himalayas</b></td><td>Asia</td><td>Mt. Everest (8,848.86 m)</td></tr>
        <tr><td><b>Karakoram</b></td><td>Asia (Pakistan/China/India)</td><td>K2 (8,611 m)</td></tr>
        <tr><td>Hindu Kush</td><td>Asia (Afghanistan)</td><td>Tirich Mir</td></tr>
        <tr><td>Pamirs</td><td>Central Asia</td><td>Ismoil Somoni Peak</td></tr>
        <tr><td>Tien Shan</td><td>Central Asia</td><td>Jengish Chokusu (Pobeda)</td></tr>
        <tr><td>Kunlun</td><td>Asia (China)</td><td>Liushi Shan</td></tr>
        <tr><td><b>Andes</b></td><td>S. America</td><td>Aconcagua (6,961 m); longest in world (~7,000 km)</td></tr>
        <tr><td><b>Rocky Mountains</b></td><td>N. America (USA-Canada)</td><td>Mt. Elbert</td></tr>
        <tr><td>Sierra Nevada</td><td>USA (California)</td><td>Mt. Whitney</td></tr>
        <tr><td>Appalachian</td><td>USA (East)</td><td>Mt. Mitchell</td></tr>
        <tr><td><b>Alps</b></td><td>Europe</td><td>Mont Blanc (4,810 m)</td></tr>
        <tr><td>Pyrenees</td><td>Europe (France-Spain)</td><td>Aneto</td></tr>
        <tr><td>Caucasus</td><td>Europe (Russia)</td><td>Mt. Elbrus (5,642 m)</td></tr>
        <tr><td>Apennines</td><td>Italy</td><td>Corno Grande</td></tr>
        <tr><td>Carpathians</td><td>Eastern Europe</td><td>Gerlachovský</td></tr>
        <tr><td>Urals</td><td>Russia (Asia-Europe boundary)</td><td>Narodnaya</td></tr>
        <tr><td><b>Atlas</b></td><td>N. Africa (Morocco)</td><td>Toubkal</td></tr>
        <tr><td>Drakensberg</td><td>S. Africa</td><td>Thabana Ntlenyana</td></tr>
        <tr><td>Great Dividing Range</td><td>Australia</td><td>Mt. Kosciuszko</td></tr>
        <tr><td>Transantarctic</td><td>Antarctica</td><td>Mt. Vinson</td></tr>
      </table>

      <hr>

      <h3>Major Deserts of the World</h3>
      <table>
        <tr><th>Desert</th><th>Type</th><th>Continent / Location</th><th>Area</th></tr>
        <tr><td><b>Antarctic Polar Desert</b></td><td>Polar (cold)</td><td>Antarctica</td><td>14 mn km² (largest desert)</td></tr>
        <tr><td><b>Arctic Polar Desert</b></td><td>Polar</td><td>Arctic</td><td>13.7 mn km²</td></tr>
        <tr><td><b>Sahara</b></td><td>Hot</td><td>N. Africa</td><td>9.2 mn km² (largest hot desert)</td></tr>
        <tr><td><b>Arabian (Rub al-Khali)</b></td><td>Hot</td><td>Saudi Arabia, etc.</td><td>2.3 mn km²</td></tr>
        <tr><td><b>Gobi</b></td><td>Cold</td><td>Mongolia/China</td><td>1.3 mn km²</td></tr>
        <tr><td><b>Kalahari</b></td><td>Hot semi-arid</td><td>S. Africa, Botswana</td><td>0.9 mn km²</td></tr>
        <tr><td><b>Patagonian</b></td><td>Cold</td><td>Argentina</td><td>0.67 mn km²</td></tr>
        <tr><td><b>Great Victoria</b></td><td>Hot</td><td>Australia</td><td>0.65 mn km²</td></tr>
        <tr><td><b>Syrian</b></td><td>Hot</td><td>Syria, Iraq, Jordan, Saudi Arabia</td><td>0.5 mn km²</td></tr>
        <tr><td><b>Great Basin</b></td><td>Cold</td><td>USA</td><td>0.49 mn km²</td></tr>
        <tr><td><b>Chihuahuan</b></td><td>Hot</td><td>Mexico/USA</td><td>0.45 mn km²</td></tr>
        <tr><td><b>Great Sandy / Tanami</b></td><td>Hot</td><td>Australia</td><td>0.4 mn km²</td></tr>
        <tr><td><b>Karakum</b></td><td>Hot</td><td>Turkmenistan</td><td>0.35 mn km²</td></tr>
        <tr><td><b>Kyzylkum</b></td><td>Hot</td><td>Uzbekistan/Kazakhstan</td><td>0.30 mn km²</td></tr>
        <tr><td><b>Thar (Great Indian)</b></td><td>Hot</td><td>India/Pakistan</td><td>0.20 mn km²</td></tr>
        <tr><td><b>Atacama</b></td><td>Cold (driest)</td><td>Chile</td><td>0.10 mn km²</td></tr>
        <tr><td><b>Mojave</b></td><td>Hot</td><td>USA (California)</td><td>0.12 mn km²</td></tr>
        <tr><td><b>Sonoran</b></td><td>Hot</td><td>USA-Mexico</td><td>0.31 mn km²</td></tr>
        <tr><td><b>Namib</b></td><td>Hot coastal</td><td>Namibia (W. Africa)</td><td>~0.08 mn km² (oldest desert, ~55 mn yrs)</td></tr>
      </table>

      <h4>Famous Desert Facts</h4>
      <ul>
        <li><b>Largest desert in world</b>: Antarctica (technically a polar desert) — 14 mn km².</li>
        <li><b>Largest hot desert</b>: <b>Sahara</b> (N. Africa).</li>
        <li><b>Driest place on Earth</b>: <b>Atacama Desert</b> (Chile) — some areas have not seen measurable rain in years.</li>
        <li><b>Hottest place on Earth (record)</b>: Death Valley (Mojave, USA) — 56.7°C (Furnace Creek, 1913).</li>
        <li><b>Oldest desert</b>: <b>Namib</b> (W. Africa) — ~55 million years.</li>
        <li>Greenland is technically a desert (very low precipitation).</li>
      </ul>

      <hr>

      <h3>Famous Waterfalls</h3>
      <table>
        <tr><th>Waterfall</th><th>Country</th><th>Height</th></tr>
        <tr><td><b>Angel Falls</b></td><td>Venezuela</td><td>979 m (highest)</td></tr>
        <tr><td>Tugela Falls</td><td>S. Africa</td><td>948 m</td></tr>
        <tr><td>Yumbilla Falls</td><td>Peru</td><td>895 m</td></tr>
        <tr><td>Niagara Falls</td><td>USA-Canada</td><td>51 m (famous; high volume)</td></tr>
        <tr><td><b>Victoria Falls</b></td><td>Zambia-Zimbabwe</td><td>108 m (largest by volume)</td></tr>
        <tr><td>Iguazu Falls</td><td>Brazil-Argentina</td><td>~80 m</td></tr>
        <tr><td>Boyoma Falls</td><td>Congo</td><td>—</td></tr>
        <tr><td>Detian Falls</td><td>China-Vietnam</td><td>~70 m</td></tr>
      </table>

      <h3>Famous Lakes (recap)</h3>
      <ul>
        <li>Largest: Caspian Sea</li>
        <li>Largest freshwater (area): Superior</li>
        <li>Deepest: Baikal</li>
        <li>Highest: Titicaca</li>
        <li>Lowest: Dead Sea</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>That completes World Geography. Next: <b>Indian Geography — Physical Features</b>.</p>
    `,
    mcq: [
      { q: "Longest river in the world?", opts: ["Amazon", "Nile (6,650 km)", "Yangtze", "Mississippi"], a: 1, ex: "Nile in Africa." },
      { q: "Longest river in S. America?", opts: ["Paraná", "Amazon (6,400 km, largest by volume)", "Orinoco", "Magdalena"], a: 1, ex: "Amazon — by water volume the largest in world." },
      { q: "Longest river in N. America?", opts: ["Mississippi-Missouri", "Yukon", "Mackenzie", "St. Lawrence"], a: 0, ex: "Mississippi-Missouri river system." },
      { q: "Longest river in Asia?", opts: ["Yangtze (Chang Jiang, 6,300 km)", "Yellow", "Mekong", "Ganges"], a: 0, ex: "Yangtze in China." },
      { q: "Longest river in China?", opts: ["Yangtze", "Yellow (Huang He)", "Mekong", "Pearl"], a: 0, ex: "Yangtze (longest); Yellow (2nd longest)." },
      { q: "Cairo is on the banks of?", opts: ["Tigris", "Euphrates", "Nile", "Niger"], a: 2, ex: "Cairo on the Nile." },
      { q: "London is on the banks of?", opts: ["Seine", "Thames", "Rhine", "Danube"], a: 1, ex: "Thames." },
      { q: "Paris is on the banks of?", opts: ["Seine", "Thames", "Rhine", "Loire"], a: 0, ex: "Seine." },
      { q: "Rome is on the banks of?", opts: ["Tigris", "Tiber", "Tagus", "Tajus"], a: 1, ex: "Tiber River." },
      { q: "Vienna is on the banks of?", opts: ["Rhine", "Danube", "Volga", "Elbe"], a: 1, ex: "Danube — also passes Budapest, Belgrade." },
      { q: "Baghdad is on the banks of?", opts: ["Tigris", "Euphrates", "Both", "Nile"], a: 0, ex: "Tigris River." },
      { q: "New York is on the banks of?", opts: ["Mississippi", "Hudson", "Potomac", "Erie"], a: 1, ex: "Hudson River." },
      { q: "Washington DC is on the banks of?", opts: ["Mississippi", "Potomac", "Hudson", "Susquehanna"], a: 1, ex: "Potomac River." },
      { q: "Largest desert in the world (incl. polar)?", opts: ["Sahara", "Antarctic Desert", "Arctic", "Gobi"], a: 1, ex: "Antarctica technically the largest desert (cold/polar) at ~14 mn km²." },
      { q: "Largest hot desert in the world?", opts: ["Gobi", "Sahara (~9.2 mn km²)", "Arabian", "Kalahari"], a: 1, ex: "Sahara — N. Africa." },
      { q: "Oldest desert in the world?", opts: ["Sahara", "Namib (~55 mn years)", "Atacama", "Gobi"], a: 1, ex: "Namib in SW Africa — ~55 million years old." },
      { q: "Driest desert?", opts: ["Sahara", "Atacama (Chile)", "Gobi", "Antarctic"], a: 1, ex: "Atacama in Chile; some parts have not received rain in years." },
      { q: "Gobi Desert is in?", opts: ["China only", "Mongolia/China", "Iran", "Russia"], a: 1, ex: "Gobi — Asia (Mongolia and China)." },
      { q: "Kalahari Desert is in?", opts: ["S. Africa, Botswana, Namibia", "N. Africa", "S. America", "Australia"], a: 0, ex: "Southern Africa." },
      { q: "Thar Desert is in?", opts: ["Africa", "Mongolia", "India and Pakistan", "Iran"], a: 2, ex: "Great Indian Desert; mostly Rajasthan." },
      { q: "Highest waterfall in the world?", opts: ["Niagara", "Victoria", "Angel Falls (Venezuela, 979 m)", "Iguazu"], a: 2, ex: "Angel Falls in Venezuela — 979 m." },
      { q: "Largest waterfall by volume?", opts: ["Niagara", "Victoria Falls (Zambia-Zimbabwe)", "Angel", "Iguazu"], a: 1, ex: "Victoria Falls on Zambezi River — between Zambia and Zimbabwe." },
      { q: "Niagara Falls is between?", opts: ["USA-Mexico", "USA-Canada", "Brazil-Argentina", "China-Russia"], a: 1, ex: "USA-Canada border between Lake Erie and Lake Ontario." },
      { q: "Iguazu Falls is between?", opts: ["USA-Canada", "Zambia-Zimbabwe", "Brazil-Argentina", "Peru-Chile"], a: 2, ex: "Brazil-Argentina border on Iguazu River." },
      { q: "Hottest temperature recorded on Earth?", opts: ["50°C", "56.7°C (Furnace Creek, Death Valley, 1913)", "60°C", "65°C"], a: 1, ex: "Furnace Creek, Death Valley, California — 10 July 1913." }
    ]
  };

  T["geo-india-physical"] = {
    body: `
      ${fig("India_topo_big.jpg", "Physical / Topographic map of India — Himalayas, Indo-Gangetic plain, Deccan plateau, coasts", 700)}
      <h3>India — Quick Facts</h3>
      <ul>
        <li><b>Area</b>: 32,87,263 km² (~3.28 mn km²) — <b>7th largest country</b> in world.</li>
        <li><b>Coastline</b>: ~7,517 km (mainland + Andaman & Nicobar + Lakshadweep).</li>
        <li><b>Mainland coastline</b>: 6,100 km.</li>
        <li><b>Latitude</b>: 8°4' N to 37°6' N (north-south extent ~3,214 km).</li>
        <li><b>Longitude</b>: 68°7' E to 97°25' E (east-west extent ~2,933 km).</li>
        <li><b>Tropic of Cancer (23.5°N)</b> passes through 8 states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, WB, Tripura, Mizoram.</li>
        <li><b>Standard Meridian</b>: <b>82.5°E</b> (passes through Mirzapur, UP); IST = GMT + 5:30.</li>
        <li><b>Land borders</b>: ~15,200 km with 7 countries.</li>
      </ul>

      <h4>India's Land Borders</h4>
      <table>
        <tr><th>Country</th><th>Length</th><th>States bordering</th></tr>
        <tr><td><b>Bangladesh</b></td><td>~4,096 km (longest)</td><td>WB, Assam, Meghalaya, Tripura, Mizoram</td></tr>
        <tr><td><b>China</b></td><td>~3,488 km</td><td>Ladakh, HP, Uttarakhand, Sikkim, Arunachal Pradesh</td></tr>
        <tr><td><b>Pakistan</b></td><td>~3,323 km</td><td>Gujarat, Rajasthan, Punjab, J&K, Ladakh</td></tr>
        <tr><td><b>Nepal</b></td><td>~1,751 km</td><td>UK, UP, Bihar, WB, Sikkim</td></tr>
        <tr><td><b>Myanmar</b></td><td>~1,643 km</td><td>Arunachal, Nagaland, Manipur, Mizoram</td></tr>
        <tr><td><b>Bhutan</b></td><td>~699 km</td><td>Sikkim, WB, Assam, Arunachal</td></tr>
        <tr><td><b>Afghanistan</b></td><td>~106 km (with PoK; disputed)</td><td>Wakhan corridor</td></tr>
      </table>

      <h4>Important Boundary Lines</h4>
      <ul>
        <li><b>Radcliffe Line</b>: India-Pakistan, India-Bangladesh (Cyril Radcliffe, 1947).</li>
        <li><b>McMahon Line</b>: India-China (1914 Simla Convention; not accepted by China).</li>
        <li><b>Durand Line</b>: Pakistan-Afghanistan (Sir Mortimer Durand, 1893).</li>
        <li><b>Line of Control (LoC)</b>: India-Pakistan in J&K (post-1972 Shimla Agreement).</li>
        <li><b>Line of Actual Control (LAC)</b>: India-China.</li>
      </ul>

      <hr>

      <h3>Physical Divisions of India — 6 Regions</h3>
      <ol>
        <li>The Himalayan Mountains</li>
        <li>The Northern Plains</li>
        <li>The Peninsular Plateau</li>
        <li>The Indian Desert</li>
        <li>The Coastal Plains</li>
        <li>The Islands</li>
      </ol>

      <hr>

      <h3>1. THE HIMALAYAS</h3>
      <ul>
        <li>"<b>Himalaya</b>" = Sanskrit "abode of snow" (hima = snow).</li>
        <li>Young fold mountains; result of Indian Plate-Eurasian Plate collision (~50 million years ago).</li>
        <li>Length: ~2,500 km (W to E); width: 150–400 km.</li>
        <li>Pass through India, Nepal, Bhutan, Pakistan, China.</li>
      </ul>

      <h4>Three Parallel Ranges</h4>
      <table>
        <tr><th>Range</th><th>Other names</th><th>Avg. height</th><th>Features</th></tr>
        <tr><td><b>Greater Himalayas</b></td><td>Himadri / Inner Himalayas</td><td>~6,100 m</td><td>Tallest range; permanent snow; <b>Mt. Everest, Kanchenjunga, Nanga Parbat, Annapurna, Dhaulagiri</b>; perennial glaciers (Gangotri, Yamunotri, Siachen).</td></tr>
        <tr><td><b>Lesser Himalayas</b></td><td>Himachal / Middle Himalayas</td><td>3,700–4,500 m</td><td>Hill stations (Shimla, Manali, Mussoorie, Nainital, Darjeeling, Dalhousie); ranges: Pir Panjal (longest), Dhauladhar, Mahabharat.</td></tr>
        <tr><td><b>Outer Himalayas</b></td><td>Shiwaliks / Sub-Himalayas</td><td>900–1,100 m</td><td>Youngest, lowest range; "Duns" (longitudinal valleys — Dehradun, Patli Dun); foothills.</td></tr>
      </table>

      <h4>Regional Divisions (W to E)</h4>
      <table>
        <tr><th>Region</th><th>Extent</th><th>Major Peaks/Features</th></tr>
        <tr><td><b>Punjab Himalayas / Kashmir Himalayas</b></td><td>Indus to Sutlej</td><td>Karakoram, Ladakh, Zaskar; <b>K2 (8,611 m)</b>; Kashmir Valley.</td></tr>
        <tr><td><b>Kumaon Himalayas</b></td><td>Sutlej to Kali</td><td>Nanda Devi, Kamet; sources of Ganga and Yamuna.</td></tr>
        <tr><td><b>Nepal Himalayas</b></td><td>Kali to Tista</td><td>Mt. Everest, Kanchenjunga, Annapurna, Dhaulagiri.</td></tr>
        <tr><td><b>Assam Himalayas</b></td><td>Tista to Brahmaputra</td><td>Namcha Barwa, Kula Kangri.</td></tr>
        <tr><td><b>Eastern Himalayas / Purvanchal</b></td><td>Beyond Brahmaputra</td><td>Patkai, Naga Hills, Manipur Hills, Mizo Hills.</td></tr>
      </table>

      <h4>Important Himalayan Passes</h4>
      <table>
        <tr><th>Pass</th><th>State / Region</th><th>Connects</th></tr>
        <tr><td>Khardung La</td><td>Ladakh</td><td>Highest motorable pass (~5,602 m); Leh to Nubra Valley</td></tr>
        <tr><td>Karakoram Pass</td><td>Ladakh</td><td>India-China</td></tr>
        <tr><td>Zoji La</td><td>Kashmir</td><td>Srinagar to Leh</td></tr>
        <tr><td>Banihal Pass</td><td>J&K</td><td>Jammu to Srinagar (Pir Panjal)</td></tr>
        <tr><td>Rohtang Pass</td><td>HP</td><td>Manali to Lahaul-Spiti/Leh</td></tr>
        <tr><td>Shipki La</td><td>HP</td><td>India-Tibet (China)</td></tr>
        <tr><td>Mana Pass / Niti Pass</td><td>Uttarakhand</td><td>India-Tibet</td></tr>
        <tr><td>Lipulekh</td><td>Uttarakhand</td><td>Kailash Mansarovar route</td></tr>
        <tr><td>Nathu La</td><td>Sikkim</td><td>India-China (re-opened 2006)</td></tr>
        <tr><td>Jelep La</td><td>Sikkim</td><td>India-China (closed)</td></tr>
        <tr><td>Bomdi La / Bom Di La</td><td>Arunachal</td><td>India-Tibet</td></tr>
        <tr><td>Diphu Pass</td><td>Arunachal</td><td>India-China-Myanmar</td></tr>
      </table>

      <h4>Important Glaciers</h4>
      <ul>
        <li><b>Siachen</b> (Karakoram) — longest in non-polar regions; ~76 km.</li>
        <li><b>Gangotri</b> (Uttarakhand) — source of Bhagirathi/Ganga.</li>
        <li><b>Yamunotri</b> — source of Yamuna.</li>
        <li>Zemu (Sikkim, Kanchenjunga area).</li>
        <li>Milam (Uttarakhand).</li>
        <li>Pindari, Kafni (Uttarakhand).</li>
      </ul>

      <hr>

      <h3>2. THE NORTHERN PLAINS (Indo-Gangetic Plain)</h3>
      <ul>
        <li>Most fertile region; alluvial deposits from <b>Indus, Ganga, Brahmaputra</b> and tributaries.</li>
        <li>Length ~2,400 km; width 150–300 km.</li>
        <li>Three main parts:
          <ul>
            <li><b>Punjab Plain</b>: drained by Indus and tributaries (Jhelum, Chenab, Ravi, Beas, Sutlej).</li>
            <li><b>Ganga Plain</b>: largest part; UP, Bihar, WB.</li>
            <li><b>Brahmaputra Plain</b>: Assam.</li>
          </ul>
        </li>
        <li>Sub-regions:
          <ul>
            <li><b>Bhabar</b>: narrow belt at foothills; coarse pebbles; streams disappear.</li>
            <li><b>Tarai</b>: marshy belt south of Bhabar; rich vegetation.</li>
            <li><b>Bhangar</b>: older alluvium; relatively higher.</li>
            <li><b>Khadar</b>: newer alluvium; flood plains; very fertile.</li>
            <li><b>Doabs</b>: land between two rivers (Doab = "two waters"). E.g., Bist Doab (Beas-Sutlej), Bari Doab (Beas-Ravi).</li>
          </ul>
        </li>
      </ul>

      <hr>

      <h3>3. THE PENINSULAR PLATEAU</h3>
      <ul>
        <li>Triangular shape; one of oldest landforms (Pre-Cambrian).</li>
        <li>Composed of igneous and metamorphic rocks; rich in minerals.</li>
        <li><b>Two divisions</b>:
          <ul>
            <li><b>Central Highlands</b>: north of Narmada; Aravalli, Vindhya, Satpura ranges, Bundelkhand, Malwa Plateau, Chota Nagpur Plateau.</li>
            <li><b>Deccan Plateau</b>: south of Narmada-Tapi; bordered by Western and Eastern Ghats; Maharashtra Plateau, Karnataka Plateau, Telangana Plateau.</li>
          </ul>
        </li>
      </ul>

      <h4>Western Ghats (Sahyadri)</h4>
      <ul>
        <li>~1,600 km along W. coast (Maharashtra to Kerala).</li>
        <li>Higher than Eastern Ghats; rises sharply.</li>
        <li>Highest peak: <b>Anamudi (Kerala, 2,695 m)</b>; in Anaimalai Hills.</li>
        <li>Other peaks: Doddabetta (Nilgiris, 2,637 m); Mahabaleshwar.</li>
        <li>Receives heavy monsoon rain (windward side).</li>
        <li>Source of Krishna, Godavari, Kaveri.</li>
        <li>Important passes: <b>Thal Ghat (Mumbai-Nashik), Bhor Ghat (Mumbai-Pune), Pal Ghat (Coimbatore-Palakkad), Senkottah Pass, Goran Ghat</b>.</li>
        <li>Biodiversity hotspot; UNESCO site.</li>
      </ul>

      <h4>Eastern Ghats</h4>
      <ul>
        <li>Discontinuous, lower than Western Ghats.</li>
        <li>From Odisha to Tamil Nadu.</li>
        <li>Highest peak: <b>Mahendragiri (Odisha, 1,501 m)</b>; <b>Arma Konda (Andhra, 1,680 m)</b> highest in the range overall.</li>
        <li>Cut by major rivers: Mahanadi, Godavari, Krishna, Kaveri.</li>
        <li>Nilgiri Hills join Western & Eastern Ghats at southern end.</li>
      </ul>

      <h4>Major Hill Ranges in Peninsular India</h4>
      <ul>
        <li><b>Aravallis</b>: oldest fold mountains in India (Pre-Cambrian, ~2.5 billion years); Rajasthan, Haryana, Delhi; <b>Guru Shikhar (Mt. Abu, 1,722 m)</b> highest.</li>
        <li><b>Vindhya</b>: north of Narmada; sandstone; separates N and S India culturally.</li>
        <li><b>Satpura</b>: south of Narmada; <b>Dhupgarh (Mahadeo Hills, 1,350 m)</b> highest.</li>
        <li><b>Maikal</b>: junction of Vindhya and Satpura.</li>
        <li><b>Nilgiri Hills</b>: junction of Western and Eastern Ghats.</li>
        <li><b>Anaimalai Hills</b>: south of Palghat Gap; Anamudi here.</li>
        <li><b>Cardamom Hills (Elaimalai)</b>: southern Western Ghats.</li>
      </ul>

      <hr>

      <h3>4. THE THAR DESERT (Great Indian Desert)</h3>
      <ul>
        <li>Western Rajasthan; extends into Pakistan.</li>
        <li>Mostly sandy with dunes; some rocky areas.</li>
        <li>Driest part of India; rainfall &lt; 150 mm.</li>
        <li>Luni is the only major river (seasonal).</li>
        <li>Sambhar Lake (largest inland salt lake) here.</li>
      </ul>

      <hr>

      <h3>5. THE COASTAL PLAINS</h3>

      <h4>Western Coastal Plain</h4>
      <ul>
        <li>From Kutch (Gujarat) to Kanyakumari (TN).</li>
        <li>Sub-regions:
          <ul>
            <li><b>Konkan Coast</b>: Maharashtra-Goa.</li>
            <li><b>Kanara Coast</b>: Karnataka.</li>
            <li><b>Malabar Coast</b>: Kerala — famous for backwaters, lagoons, kayals, Kerala canals.</li>
          </ul>
        </li>
        <li>Narrow; rivers don't form deltas (most form estuaries).</li>
        <li>Major ports: Mumbai, Mangalore, Marmagao (Goa), Cochin (Kochi).</li>
      </ul>

      <h4>Eastern Coastal Plain</h4>
      <ul>
        <li>From Sundarbans (WB) to Kanyakumari.</li>
        <li>Sub-regions:
          <ul>
            <li><b>Northern Circars</b>: Mahanadi to Krishna delta.</li>
            <li><b>Coromandel Coast</b>: Krishna to Kanyakumari (TN).</li>
          </ul>
        </li>
        <li>Wider than west coast; rivers (Mahanadi, Godavari, Krishna, Kaveri) form large deltas.</li>
        <li>Major ports: Kolkata, Paradip, Visakhapatnam, Chennai, Tuticorin.</li>
      </ul>

      <hr>

      <h3>6. THE ISLANDS</h3>

      <h4>Andaman and Nicobar Islands (Bay of Bengal)</h4>
      <ul>
        <li>~572 islands (about 38 inhabited).</li>
        <li>Capital: Port Blair (Andaman).</li>
        <li>Highest peak: <b>Saddle Peak (North Andaman, 737 m)</b>.</li>
        <li>10° Channel separates Andaman from Nicobar.</li>
        <li>Indira Point (southern tip of Great Nicobar) — southernmost point of India; ~10 km from Indonesia.</li>
        <li><b>Barren Island</b> (only active volcano in India).</li>
        <li>Tropical evergreen forests; Sentinelese tribe.</li>
      </ul>

      <h4>Lakshadweep Islands (Arabian Sea)</h4>
      <ul>
        <li>~36 islands; 10 inhabited.</li>
        <li>Capital: Kavaratti.</li>
        <li>All coral atolls/lagoons.</li>
        <li>Smallest UT by area.</li>
        <li>Minicoy is the southernmost island.</li>
      </ul>

      <hr>

      <h3>India's Extremities</h3>
      <ul>
        <li><b>Northernmost point</b>: <b>Indira Col</b> (Ladakh).</li>
        <li><b>Southernmost point (mainland)</b>: <b>Kanyakumari</b>.</li>
        <li><b>Southernmost point (territorial)</b>: <b>Indira Point (Great Nicobar)</b>.</li>
        <li><b>Easternmost point</b>: <b>Kibithu (Arunachal Pradesh)</b>.</li>
        <li><b>Westernmost point</b>: <b>Guhar Moti (Kutch, Gujarat)</b>.</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>Next: <b>Indian Rivers and Drainage Systems</b>.</p>
    `,
    mcq: [
      { q: "India is the ____ largest country by area?", opts: ["5th", "6th", "7th", "10th"], a: 2, ex: "7th largest after Russia, Canada, USA, China, Brazil, Australia." },
      { q: "Tropic of Cancer passes through how many Indian states?", opts: ["6", "7", "8", "10"], a: 2, ex: "8 states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, WB, Tripura, Mizoram." },
      { q: "India's standard meridian is?", opts: ["75°E", "82.5°E (Mirzapur, UP)", "90°E", "0°"], a: 1, ex: "82.5°E; passes through Mirzapur, UP." },
      { q: "Longest land border of India is with?", opts: ["China", "Pakistan", "Bangladesh (~4,096 km)", "Nepal"], a: 2, ex: "Bangladesh — longest land border, ~4,096 km." },
      { q: "McMahon Line separates?", opts: ["India-Pakistan", "India-China", "India-Bangladesh", "Pakistan-Afghanistan"], a: 1, ex: "India-China; drawn at 1914 Simla Convention; not accepted by China." },
      { q: "Radcliffe Line separates?", opts: ["India-China", "India-Pakistan and India-Bangladesh", "India-Nepal", "Pak-Afghanistan"], a: 1, ex: "Drawn by Cyril Radcliffe in 1947; partition boundary." },
      { q: "Three parallel Himalayan ranges are?", opts: ["Greater, Lesser, Outer", "North, South, East", "Inner, Outer, Middle", "All correct (Himadri, Himachal, Shiwalik)"], a: 0, ex: "Greater (Himadri) → Lesser (Himachal) → Outer (Shiwalik) — N to S in elevation." },
      { q: "Highest peak in India?", opts: ["Mt. Everest (in Nepal)", "Kanchenjunga (Sikkim)", "K2 (in PoK)", "Nanda Devi"], a: 1, ex: "Kanchenjunga (8,586 m) — highest peak fully within India in Sikkim. K2 is in PoK; debated." },
      { q: "Highest motorable pass in India?", opts: ["Rohtang", "Khardung La (Ladakh, ~5,602 m)", "Zoji La", "Banihal"], a: 1, ex: "Khardung La in Ladakh — connects Leh to Nubra Valley." },
      { q: "Nathu La pass is in?", opts: ["Ladakh", "HP", "Sikkim (India-China)", "Arunachal"], a: 2, ex: "Sikkim — re-opened in 2006 for trade with China." },
      { q: "Longest non-polar glacier is?", opts: ["Gangotri", "Siachen (Karakoram, ~76 km)", "Yamunotri", "Pindari"], a: 1, ex: "Siachen — also strategic; on India-Pakistan border." },
      { q: "Aravallis are?", opts: ["Young fold mountains", "Block mountains", "Old residual mountains (oldest in India)", "Volcanic"], a: 2, ex: "Pre-Cambrian; ~2.5 billion years; heavily eroded." },
      { q: "Highest peak of Aravalli range?", opts: ["Doddabetta", "Guru Shikhar (Mt. Abu, 1,722 m)", "Anamudi", "Mahendragiri"], a: 1, ex: "Guru Shikhar in Mt. Abu, Rajasthan." },
      { q: "Highest peak of Western Ghats?", opts: ["Doddabetta", "Anamudi (Kerala, 2,695 m)", "Mahabaleshwar", "Mahendragiri"], a: 1, ex: "Anamudi — highest peak in S. India outside Himalayas." },
      { q: "Highest peak of Eastern Ghats?", opts: ["Mahendragiri", "Arma Konda (Andhra, 1,680 m)", "Doddabetta", "Anamudi"], a: 1, ex: "Arma Konda in Andhra Pradesh; Mahendragiri is in Odisha (1,501 m)." },
      { q: "Highest peak of Satpura range?", opts: ["Anamudi", "Dhupgarh (Mahadeo Hills, 1,350 m)", "Mahabaleshwar", "Doddabetta"], a: 1, ex: "Dhupgarh in MP." },
      { q: "Sahyadri is another name for?", opts: ["Eastern Ghats", "Western Ghats", "Aravallis", "Vindhyas"], a: 1, ex: "Western Ghats." },
      { q: "Bhor Ghat connects?", opts: ["Mumbai-Pune", "Mumbai-Nashik", "Coimbatore-Palakkad", "Mumbai-Goa"], a: 0, ex: "Bhor Ghat: Mumbai-Pune; Thal Ghat: Mumbai-Nashik; Pal Ghat: Coimbatore-Palakkad." },
      { q: "Ganga-Brahmaputra delta (Sundarbans) is?", opts: ["Smallest in India", "Largest delta in the world", "Longest", "Driest"], a: 1, ex: "World's largest delta — UNESCO." },
      { q: "Konkan Coast is between?", opts: ["Mumbai-Goa (Maharashtra-Goa)", "Goa-Karnataka", "Karnataka-Kerala", "Kerala-TN"], a: 0, ex: "Konkan: Maharashtra-Goa; Kanara: Karnataka; Malabar: Kerala." },
      { q: "Capital of Andaman & Nicobar?", opts: ["Kavaratti", "Port Blair", "Diu", "Daman"], a: 1, ex: "Port Blair (officially Sri Vijaya Puram from 2024)." },
      { q: "Capital of Lakshadweep?", opts: ["Port Blair", "Kavaratti", "Minicoy", "Aminidivi"], a: 1, ex: "Kavaratti." },
      { q: "Indira Point is southernmost point of?", opts: ["Mainland India", "India (Great Nicobar)", "Andaman", "Lakshadweep"], a: 1, ex: "Southernmost point of India; on Great Nicobar Island." },
      { q: "Northernmost point of India?", opts: ["Leh", "Kibithu", "Indira Col (Ladakh)", "Itanagar"], a: 2, ex: "Indira Col in Ladakh." },
      { q: "Easternmost point of India?", opts: ["Kohima", "Kibithu (Arunachal Pradesh)", "Imphal", "Aizawl"], a: 1, ex: "Kibithu in Arunachal Pradesh." }
    ]
  };

  T["geo-india-rivers"] = {
    body: `
      ${fig("Major_rivers_of_India.svg", "Major rivers of India — Himalayan and Peninsular systems", 700)}
      <h3>Indian Drainage System</h3>
      <p>Two main systems based on origin:</p>
      <ul>
        <li><b>Himalayan Rivers</b>: perennial; snow-fed + rainfall-fed; large volume; long course; carry huge sediment.</li>
        <li><b>Peninsular Rivers</b>: seasonal (rainfall-fed); shorter; smaller volume; older.</li>
      </ul>

      <hr>

      <h3>HIMALAYAN RIVERS — Three Major Systems</h3>

      <h4>1. Indus System</h4>
      <ul>
        <li>Source: <b>Mansarovar Lake (Tibet, near Mt. Kailash)</b> at ~5,182 m.</li>
        <li>Length: ~3,180 km (~1,114 km in India).</li>
        <li>Flows through Ladakh; enters Pakistan; into Arabian Sea.</li>
        <li><b>Five tributaries (Punjab = "Land of Five Rivers"):</b>
          <ol>
            <li><b>Jhelum</b> — source: Verinag spring (J&K); flows through Wular Lake.</li>
            <li><b>Chenab</b> (Asikni) — source: Lahaul-Spiti, HP; longest tributary of Indus.</li>
            <li><b>Ravi</b> (Parushni / Iravati) — source: Rohtang Pass, HP; flows through Chamba.</li>
            <li><b>Beas</b> (Vipasha) — source: Rohtang Pass, HP; ends at Sutlej (Harike).</li>
            <li><b>Sutlej</b> (Shutudri) — longest of the five; source: Mansarovar (Rakshastal), Tibet; <b>Bhakra Nangal Dam</b> on Sutlej.</li>
          </ol>
        </li>
        <li><b>Indus Water Treaty (1960)</b>: brokered by World Bank between India and Pakistan; India gets Ravi, Beas, Sutlej (eastern); Pakistan gets Indus, Jhelum, Chenab (western).</li>
      </ul>

      <h4>2. Ganga System</h4>
      <ul>
        <li>National river of India.</li>
        <li>Source: <b>Gangotri Glacier (Gaumukh, Uttarakhand)</b> at ~3,892 m as <b>Bhagirathi</b>.</li>
        <li>Bhagirathi + Alaknanda (other source from Satopanth Glacier) meet at <b>Devprayag</b> → Ganga.</li>
        <li>Length: ~2,525 km.</li>
        <li>Flows through Uttarakhand, UP, Bihar, Jharkhand (briefly), West Bengal; into Bay of Bengal.</li>
        <li>Splits into <b>Hooghly</b> (Kolkata) and <b>Padma</b> (Bangladesh) at <b>Farakka</b>.</li>
        <li>Forms <b>Ganga-Brahmaputra delta (Sundarbans)</b> — world's largest delta.</li>
      </ul>

      <h5>Five Prayags (Confluences)</h5>
      <ol>
        <li><b>Vishnuprayag</b> — Alaknanda meets Dhauliganga.</li>
        <li><b>Nandprayag</b> — Alaknanda meets Nandakini.</li>
        <li><b>Karnaprayag</b> — Alaknanda meets Pindar.</li>
        <li><b>Rudraprayag</b> — Alaknanda meets Mandakini.</li>
        <li><b>Devprayag</b> — Alaknanda meets Bhagirathi → Ganga officially begins here.</li>
      </ol>

      <h5>Major Tributaries of Ganga</h5>
      <table>
        <tr><th>Right Bank (south)</th><th>Left Bank (north — Himalayan)</th></tr>
        <tr><td><b>Yamuna</b> (longest tributary; source Yamunotri)</td><td><b>Ramganga</b></td></tr>
        <tr><td>Son (longest right tributary)</td><td><b>Gomti</b></td></tr>
        <tr><td>Damodar</td><td><b>Ghaghra</b> (longest left tributary; source Mansarovar)</td></tr>
        <tr><td>Tamasa</td><td><b>Gandak</b></td></tr>
        <tr><td>Punpun</td><td><b>Kosi</b> ("Sorrow of Bihar")</td></tr>
        <tr><td>Karmanasa</td><td>Mahananda</td></tr>
      </table>

      <h5>Yamuna</h5>
      <ul>
        <li>Source: <b>Yamunotri Glacier (Banderpunch peak, Uttarakhand)</b>.</li>
        <li>Longest tributary of Ganga; ~1,376 km.</li>
        <li>Tributaries: <b>Chambal, Betwa, Ken, Sind</b>.</li>
        <li>Cities on banks: Delhi, Mathura, Agra (Taj Mahal), Allahabad/Prayagraj.</li>
        <li>Joins Ganga at <b>Triveni Sangam (Prayagraj)</b> with mythological Saraswati.</li>
      </ul>

      <h4>3. Brahmaputra System</h4>
      <ul>
        <li>Source: <b>Chemayungdung Glacier (Tibet)</b>; called <b>Tsangpo</b> in Tibet.</li>
        <li>Enters India through Arunachal Pradesh as <b>Siang/Dihang</b>; becomes Brahmaputra in Assam.</li>
        <li>Length: ~2,900 km (~916 km in India).</li>
        <li>Volume: largest in India.</li>
        <li>In Bangladesh called <b>Jamuna</b>; merges with Padma.</li>
        <li>Tributaries: Subansiri, Lohit, Manas, Tista, Burhi Dihing.</li>
        <li><b>Majuli</b> (largest river island in the world); on Brahmaputra; in Assam.</li>
        <li>Causes severe floods in Assam.</li>
      </ul>

      <hr>

      <h3>PENINSULAR RIVERS</h3>

      <h4>East-flowing Rivers (drain into Bay of Bengal; form deltas)</h4>
      <table>
        <tr><th>River</th><th>Source</th><th>Length</th><th>Notes</th></tr>
        <tr><td><b>Mahanadi</b></td><td>Sihawa Hills (Chhattisgarh)</td><td>851 km</td><td><b>Hirakud Dam</b> (longest dam, world's longest earthen dam — 25.8 km).</td></tr>
        <tr><td><b>Godavari</b></td><td><b>Trimbak (Maharashtra)</b></td><td>1,465 km (longest peninsular river)</td><td>"Dakshin Ganga"; flows through MH, Telangana, AP.</td></tr>
        <tr><td><b>Krishna</b></td><td><b>Mahabaleshwar (Maharashtra)</b></td><td>1,400 km</td><td>2nd longest in S. India; flows through MH, Karnataka, Telangana, AP.</td></tr>
        <tr><td><b>Kaveri (Cauvery)</b></td><td>Talakaveri (Karnataka)</td><td>800 km</td><td>"Ganga of South"; sacred; flows through Karnataka, TN; <b>Hogenakkal Falls</b>.</td></tr>
      </table>

      <h5>Tributaries of Major Peninsular Rivers</h5>
      <ul>
        <li><b>Godavari</b>: Manjira, Indravati, Pranhita (left bank), Sabari.</li>
        <li><b>Krishna</b>: Bhima, Tungabhadra, Musi, Koyna.</li>
        <li><b>Kaveri</b>: Hemavati, Kabini, Bhavani, Amaravathi.</li>
        <li><b>Mahanadi</b>: Tel, Ib, Hasdeo.</li>
      </ul>

      <h4>West-flowing Rivers (drain into Arabian Sea; form estuaries, not deltas)</h4>
      <table>
        <tr><th>River</th><th>Source</th><th>Length</th><th>Notes</th></tr>
        <tr><td><b>Narmada</b></td><td><b>Amarkantak (Maikal Hills, MP)</b></td><td>1,312 km</td><td>"Lifeline of Madhya Pradesh"; flows in <b>rift valley</b> between Vindhyas and Satpuras; forms estuary at Gulf of Cambay; <b>Sardar Sarovar Dam</b> (Gujarat).</td></tr>
        <tr><td><b>Tapi (Tapti)</b></td><td>Multai (Satpura, MP)</td><td>724 km</td><td>Parallel to Narmada; flows through MP, Maharashtra, Gujarat; estuary at Gulf of Cambay.</td></tr>
        <tr><td><b>Sabarmati</b></td><td>Aravalli (Rajasthan)</td><td>371 km</td><td>Flows through Gujarat; Ahmedabad on its banks.</td></tr>
        <tr><td><b>Mahi</b></td><td>Vindhyas, MP</td><td>583 km</td><td>Crosses Tropic of Cancer twice.</td></tr>
        <tr><td><b>Luni</b></td><td>Aravalli (Rajasthan)</td><td>495 km</td><td>Drains into Rann of Kutch; only major river in Thar.</td></tr>
        <tr><td>Periyar</td><td>Western Ghats</td><td>244 km</td><td>Longest river of Kerala.</td></tr>
        <tr><td>Sharavathi</td><td>Western Ghats</td><td>—</td><td><b>Jog Falls</b> on it (highest waterfall in India 253 m / 829 ft when not regulated).</td></tr>
      </table>

      <h4>Why West-flowing Rivers Don't Form Deltas?</h4>
      <p>They flow through narrow gorges and rift valleys with steep slopes; deposit sediment into the sea before forming wide deltas; instead they form <b>estuaries</b>.</p>

      <hr>

      <h3>Important Indian Lakes</h3>
      <ul>
        <li><b>Wular (J&K)</b> — largest <b>freshwater</b> lake in India.</li>
        <li><b>Chilika (Odisha)</b> — largest <b>brackish/saltwater</b> lake; Asia's largest brackish water lagoon.</li>
        <li><b>Sambhar (Rajasthan)</b> — largest <b>inland salt</b> lake.</li>
        <li><b>Vembanad (Kerala)</b> — longest lake in India (~96 km); famous backwaters.</li>
        <li><b>Kolleru (Andhra)</b> — between Krishna and Godavari deltas.</li>
        <li><b>Loktak (Manipur)</b> — only floating lake; phumdis (floating islands of biomass); Keibul Lamjao National Park (only floating NP).</li>
        <li><b>Pulicat (TN-Andhra)</b> — 2nd largest brackish water lagoon.</li>
        <li><b>Pangong Tso (Ladakh)</b> — high-altitude saline lake; partly in China.</li>
        <li><b>Tso Moriri (Ladakh)</b>; <b>Dal & Nigeen Lake (Srinagar)</b>.</li>
        <li><b>Hussain Sagar (Hyderabad)</b>, <b>Nainital (UK)</b>, <b>Bhimtal</b>.</li>
      </ul>

      <h3>Major Dams in India</h3>
      <table>
        <tr><th>Dam</th><th>River</th><th>State</th><th>Notes</th></tr>
        <tr><td><b>Bhakra Nangal</b></td><td>Sutlej</td><td>Punjab/HP</td><td>Tallest gravity dam in India (226 m); reservoir Gobind Sagar.</td></tr>
        <tr><td><b>Tehri</b></td><td>Bhagirathi</td><td>Uttarakhand</td><td>Tallest dam in India (260.5 m).</td></tr>
        <tr><td><b>Hirakud</b></td><td>Mahanadi</td><td>Odisha</td><td>Longest earthen dam in world (~25.8 km).</td></tr>
        <tr><td><b>Sardar Sarovar</b></td><td>Narmada</td><td>Gujarat</td><td>Largest dam project in India.</td></tr>
        <tr><td><b>Idukki</b></td><td>Periyar</td><td>Kerala</td><td>Arch dam.</td></tr>
        <tr><td><b>Nagarjuna Sagar</b></td><td>Krishna</td><td>Andhra/Telangana</td><td>One of largest masonry dams.</td></tr>
        <tr><td>Mettur</td><td>Kaveri</td><td>TN</td><td>—</td></tr>
        <tr><td>Salal</td><td>Chenab</td><td>J&K</td><td>—</td></tr>
        <tr><td>Indira Sagar</td><td>Narmada</td><td>MP</td><td>Largest reservoir.</td></tr>
        <tr><td>Rihand</td><td>Rihand (Son tributary)</td><td>UP</td><td>—</td></tr>
        <tr><td>Krishnaraja Sagar</td><td>Kaveri</td><td>Karnataka</td><td>Brindavan Gardens.</td></tr>
      </table>

      <h3>Looking Ahead</h3>
      <p>Next: <b>Indian Climate and Monsoon</b>.</p>
    `,
    mcq: [
      { q: "Source of Ganga is?", opts: ["Mansarovar", "Gangotri Glacier (Gaumukh)", "Yamunotri", "Devprayag"], a: 1, ex: "Gangotri Glacier (Gaumukh) — Bhagirathi flows down; merges with Alaknanda at Devprayag to form Ganga." },
      { q: "Bhagirathi and Alaknanda merge at?", opts: ["Vishnuprayag", "Karnaprayag", "Devprayag", "Rudraprayag"], a: 2, ex: "Devprayag — Ganga officially begins here." },
      { q: "Longest tributary of Ganga?", opts: ["Yamuna", "Ghaghra (longest left bank)", "Gandak", "Kosi"], a: 0, ex: "Yamuna — longest of all Ganga tributaries (1,376 km); Ghaghra is longest left/Himalayan tributary." },
      { q: "'Sorrow of Bihar' refers to?", opts: ["Ganga", "Yamuna", "Kosi (river)", "Damodar"], a: 2, ex: "Kosi — frequent floods in Bihar." },
      { q: "'Sorrow of Bengal' refers to?", opts: ["Ganga", "Hooghly", "Damodar (river)", "Mahanadi"], a: 2, ex: "Damodar — historically caused floods in Bengal; now controlled by DVC dams." },
      { q: "Source of Indus is?", opts: ["Lake Mansarovar (Tibet)", "Gangotri", "Karakoram", "Hindu Kush"], a: 0, ex: "Mansarovar Lake area near Mt. Kailash." },
      { q: "5 tributaries of Indus that gave Punjab its name?", opts: ["Jhelum, Chenab, Ravi, Beas, Sutlej", "Ganga, Yamuna, Saraswati, Sindhu, Sarayu", "Indus, Ganga, Brahmaputra, Yamuna, Sutlej", "Ravi, Beas, Sutlej, Indus, Jhelum"], a: 0, ex: "Punjab = 'Land of Five Rivers' = Jhelum + Chenab + Ravi + Beas + Sutlej." },
      { q: "Indus Water Treaty (1960) gives India which rivers?", opts: ["Western (Indus, Jhelum, Chenab)", "Eastern (Ravi, Beas, Sutlej)", "All five", "Only Sutlej"], a: 1, ex: "India: Ravi, Beas, Sutlej; Pakistan: Indus, Jhelum, Chenab. Brokered by World Bank." },
      { q: "Bhakra Nangal Dam is on which river?", opts: ["Beas", "Sutlej", "Ravi", "Chenab"], a: 1, ex: "Sutlej; reservoir is Gobind Sagar." },
      { q: "Source of Brahmaputra is?", opts: ["Manasarovar Lake", "Chemayungdung Glacier (Tibet)", "Yamunotri", "Gangotri"], a: 1, ex: "Chemayungdung Glacier in Tibet; called Tsangpo there." },
      { q: "Brahmaputra is called what in Bangladesh?", opts: ["Padma", "Jamuna", "Meghna", "Hooghly"], a: 1, ex: "Jamuna in Bangladesh; merges with Padma." },
      { q: "Largest river island in the world?", opts: ["Diu", "Majuli (Brahmaputra, Assam)", "Sundarbans", "Madagascar"], a: 1, ex: "Majuli on Brahmaputra in Assam." },
      { q: "Longest peninsular river?", opts: ["Krishna", "Godavari (1,465 km)", "Kaveri", "Narmada"], a: 1, ex: "Godavari — 'Dakshin Ganga'; source at Trimbak (Maharashtra)." },
      { q: "Source of Godavari?", opts: ["Mahabaleshwar", "Trimbak (Maharashtra)", "Talakaveri", "Amarkantak"], a: 1, ex: "Trimbak in Nashik district, Maharashtra." },
      { q: "Source of Krishna?", opts: ["Trimbak", "Mahabaleshwar (Maharashtra)", "Talakaveri", "Amarkantak"], a: 1, ex: "Mahabaleshwar in Western Ghats." },
      { q: "Source of Kaveri?", opts: ["Trimbak", "Talakaveri (Coorg, Karnataka)", "Mahabaleshwar", "Brahmagiri"], a: 1, ex: "Talakaveri in Brahmagiri Hills, Karnataka." },
      { q: "Narmada flows through which type of valley?", opts: ["Glacial valley", "Rift valley (between Vindhya and Satpura)", "U-shaped valley", "Hanging valley"], a: 1, ex: "Rift valley — west-flowing; estuary at Gulf of Cambay." },
      { q: "Source of Narmada?", opts: ["Trimbak", "Amarkantak (Maikal Hills, MP)", "Multai", "Mahabaleshwar"], a: 1, ex: "Amarkantak — also source of Son river." },
      { q: "Largest dam in India by reservoir size?", opts: ["Bhakra Nangal", "Hirakud", "Sardar Sarovar", "Indira Sagar"], a: 3, ex: "Indira Sagar (Narmada, MP) — largest reservoir capacity." },
      { q: "Tallest dam in India?", opts: ["Bhakra Nangal", "Tehri (260.5 m, Bhagirathi)", "Sardar Sarovar", "Hirakud"], a: 1, ex: "Tehri Dam on Bhagirathi in Uttarakhand." },
      { q: "Hirakud Dam (longest in world) is on?", opts: ["Mahanadi (Odisha)", "Krishna", "Godavari", "Narmada"], a: 0, ex: "Mahanadi in Odisha; ~25.8 km long earthen dam." },
      { q: "Sardar Sarovar Dam is on?", opts: ["Tapi", "Narmada (Gujarat)", "Sabarmati", "Mahi"], a: 1, ex: "Narmada — Gujarat." },
      { q: "Largest freshwater lake in India?", opts: ["Chilika", "Wular (J&K)", "Vembanad", "Sambhar"], a: 1, ex: "Wular Lake in Kashmir." },
      { q: "Largest brackish water lake in India?", opts: ["Wular", "Chilika (Odisha)", "Sambhar", "Pulicat"], a: 1, ex: "Chilika in Odisha — also Asia's largest brackish water lagoon." },
      { q: "Largest inland salt lake in India?", opts: ["Wular", "Chilika", "Sambhar (Rajasthan)", "Pangong"], a: 2, ex: "Sambhar in Rajasthan — major source of salt production." }
    ]
  };

  T["geo-india-climate"] = {
    body: `
      ${fig("India_southwest_summer_monsoon_onset_map_en.svg", "South-West Monsoon onset dates across India", 700)}
      <h3>India's Climate</h3>
      <p>India has a <b>"Tropical Monsoon" climate</b> due to its location, latitude, the Himalayas, and the Indian Ocean. The Tropic of Cancer divides India into the tropical south and subtropical north.</p>

      <h3>Factors Affecting Indian Climate</h3>
      <ul>
        <li><b>Latitude</b>: Tropic of Cancer through middle.</li>
        <li><b>Altitude</b>: Himalayas block cold Central Asian winds; high peaks have alpine climate.</li>
        <li><b>Pressure & winds</b>: Monsoon winds; ITCZ.</li>
        <li><b>Distance from sea</b>: coastal areas have moderate climate; interior has continental.</li>
        <li><b>Ocean currents</b>: warm currents.</li>
        <li><b>El Niño / La Niña</b>: influence monsoon.</li>
        <li><b>Western disturbances</b>: bring winter rain to N. India from Mediterranean.</li>
      </ul>

      <h3>Four Seasons (IMD Classification)</h3>
      <table>
        <tr><th>Season</th><th>Months</th><th>Features</th></tr>
        <tr><td><b>Cold Weather (Winter)</b></td><td>December – February</td><td>Clear skies; low temperature; western disturbances bring rain to N. India; Tamil Nadu gets NE monsoon rain.</td></tr>
        <tr><td><b>Hot Weather (Summer)</b></td><td>March – May</td><td>Temperature rises; "Loo" (hot dry wind in N. plains); Kalbaisakhi/Norwesters in Bengal/Assam; Mango showers in Kerala/Karnataka (pre-monsoon).</td></tr>
        <tr><td><b>SW Monsoon (Rainy)</b></td><td>June – September</td><td>~75% of annual rain; arrives Kerala ~1 June; covers India by mid-July.</td></tr>
        <tr><td><b>Retreating Monsoon (Post-monsoon)</b></td><td>October – November</td><td>Monsoon withdraws N to S; cyclones in Bay of Bengal; NE monsoon brings rain to TN, S. AP.</td></tr>
      </table>

      <hr>

      <h3>Monsoon</h3>
      <p>Word from Arabic <b>"mausim"</b> = season. Reversal of winds between summer and winter.</p>

      <h4>Mechanism — Why Monsoon?</h4>
      <ul>
        <li>Summer: Indian subcontinent heats up → low pressure forms over NW India.</li>
        <li>Cool, moisture-laden winds from Indian Ocean (high pressure) rush in toward this low.</li>
        <li>Reverse in winter: high pressure over land, low over warmer ocean → winds blow outward (NE Monsoon).</li>
        <li>Recent factor: <b>Tibetan Plateau</b> heating creates additional pull.</li>
        <li><b>Inter-Tropical Convergence Zone (ITCZ)</b>: shifts north in summer (drives SW monsoon) and south in winter.</li>
        <li><b>Jet streams</b>: subtropical westerly jet (winter) and tropical easterly jet (summer over India).</li>
      </ul>

      <h4>SW Monsoon (June–September)</h4>
      <ul>
        <li>Brings ~75% of India's annual rainfall.</li>
        <li>Two branches:
          <ul>
            <li><b>Arabian Sea Branch</b>: hits Western Ghats → heavy rain on windward side; rain shadow over Deccan.</li>
            <li><b>Bay of Bengal Branch</b>: enters NE India; deflects west (due to Himalayas); brings rain to entire Ganga plain.</li>
          </ul>
        </li>
        <li><b>Onset</b>:
          <ul>
            <li>Kerala: ~1 June ("monsoon arrives Kerala").</li>
            <li>Mumbai: ~10 June.</li>
            <li>Delhi: ~end of June.</li>
            <li>Covers entire country by mid-July.</li>
          </ul>
        </li>
        <li><b>Mawsynram (Meghalaya)</b> — wettest place on Earth (~11,800 mm/year). Earlier Cherrapunji.</li>
        <li><b>Driest place</b>: Jaisalmer (Rajasthan) — &lt; 150 mm/year.</li>
      </ul>

      <h4>NE Monsoon (October–December)</h4>
      <ul>
        <li>"Retreating monsoon"; reverses direction.</li>
        <li>Brings rain to <b>Tamil Nadu</b> and parts of Andhra (these states get most of their rain in NE monsoon).</li>
        <li>Causes Bay of Bengal cyclones.</li>
      </ul>

      <hr>

      <h3>Local Phenomena</h3>
      <ul>
        <li><b>Loo</b>: hot, dry, dust-laden summer wind in N. plains (May-June).</li>
        <li><b>Kalbaisakhi / Nor'westers</b>: violent thunderstorms in Bengal, Assam in pre-monsoon.</li>
        <li><b>Mango Showers</b>: pre-monsoon showers in Kerala and Karnataka (April-May); help mango ripening.</li>
        <li><b>Blossom Showers</b>: similar; help coffee blossoms (Karnataka).</li>
        <li><b>Cherry Blossom</b>: Karnataka.</li>
        <li><b>October Heat</b>: high temperature in N. India in October due to delayed monsoon withdrawal + clear skies.</li>
        <li><b>Western Disturbances</b>: extra-tropical cyclones from Mediterranean reaching N. India in winter; bring rain (rabi crops benefit) and snow.</li>
      </ul>

      <hr>

      <h3>Rainfall Distribution</h3>
      <ul>
        <li><b>Heavy (&gt; 200 cm)</b>: NE India, Western Ghats, Sub-Himalayas.</li>
        <li><b>Moderate (100–200 cm)</b>: Ganga plain, parts of Peninsula.</li>
        <li><b>Less (50–100 cm)</b>: Deccan, Punjab, Haryana.</li>
        <li><b>Scanty (&lt; 50 cm)</b>: Rajasthan (Thar), Ladakh, Saurashtra-Kutch.</li>
      </ul>

      <h3>Annual Average</h3>
      <p>India: ~117 cm.</p>

      <h3>Looking Ahead</h3>
      <p>Next: <b>Indian Soils and Natural Vegetation</b>.</p>
    `,
    mcq: [
      { q: "India's climate is described as?", opts: ["Equatorial", "Tropical Monsoon", "Mediterranean", "Continental"], a: 1, ex: "Tropical Monsoon — defined by seasonal wind reversal." },
      { q: "Word 'monsoon' comes from?", opts: ["Sanskrit", "Arabic 'mausim' (season)", "Greek", "Latin"], a: 1, ex: "Arabic mausim — used by sailors for seasonal winds." },
      { q: "SW Monsoon brings how much of India's annual rain?", opts: ["50%", "60%", "~75%", "90%"], a: 2, ex: "About 75% — June to September." },
      { q: "SW Monsoon arrives in Kerala on?", opts: ["1 May", "1 June", "1 July", "1 August"], a: 1, ex: "Around 1 June." },
      { q: "Two branches of SW Monsoon?", opts: ["Arabian Sea & Bay of Bengal branches", "Northern & Southern", "Eastern & Western", "Land & Sea"], a: 0, ex: "Arabian Sea Branch hits Western Ghats; Bay of Bengal Branch enters NE India." },
      { q: "Wettest place on Earth?", opts: ["Cherrapunji", "Mawsynram (Meghalaya)", "Manaus", "Lloro"], a: 1, ex: "Mawsynram in Meghalaya, India — ~11,800 mm/year." },
      { q: "Driest place in India?", opts: ["Bikaner", "Jaisalmer", "Leh (Ladakh)", "Both Jaisalmer and Leh have very low rainfall"], a: 3, ex: "Jaisalmer in Thar; Leh in Ladakh both have very low rainfall." },
      { q: "Tamil Nadu gets most of its rain from?", opts: ["SW Monsoon", "NE Monsoon (Oct-Dec)", "Western disturbances", "Pre-monsoon"], a: 1, ex: "NE Monsoon (retreating) — distinctive for TN." },
      { q: "'Loo' is associated with?", opts: ["Cold winter wind", "Hot dry summer wind in N. plains", "Monsoon wind", "Cyclonic wind"], a: 1, ex: "May-June; hot dry westerly wind in northern plains." },
      { q: "Kalbaisakhi / Nor'westers occur in?", opts: ["Punjab in winter", "Bengal/Assam in pre-monsoon (April-May)", "Kerala in monsoon", "Rajasthan in summer"], a: 1, ex: "Violent thunderstorms in Bengal/Assam during pre-monsoon." },
      { q: "Mango showers occur in?", opts: ["Punjab", "Kerala/Karnataka (pre-monsoon, April-May)", "Bengal", "Rajasthan"], a: 1, ex: "Pre-monsoon showers in S. India; help mango fruits ripen." },
      { q: "Cherry blossom showers help which crop?", opts: ["Tea", "Coffee (Karnataka)", "Rubber", "Cardamom"], a: 1, ex: "Coffee in Karnataka — pre-monsoon showers help blooms." },
      { q: "Western disturbances bring winter rain to?", opts: ["South India", "North India (Punjab, Haryana, UP, HP, J&K)", "East India", "Northeast"], a: 1, ex: "Extra-tropical cyclones from Mediterranean; help rabi (wheat) crops." },
      { q: "Why do Western Ghats get heavy rain on western side?", opts: ["Convectional", "Orographic (mountains force winds up)", "Cyclonic", "Frontal"], a: 1, ex: "Orographic — Arabian Sea branch of monsoon hits and rises; rain shadow on Deccan side." },
      { q: "ITCZ (Inter-Tropical Convergence Zone) is responsible for?", opts: ["Earthquakes", "SW Monsoon onset (shifts north in summer)", "Tides", "Cyclones only"], a: 1, ex: "ITCZ shift north in summer brings SW Monsoon." },
      { q: "Annual average rainfall of India?", opts: ["50 cm", "75 cm", "117 cm", "200 cm"], a: 2, ex: "About 117 cm." },
      { q: "El Niño typically causes?", opts: ["Stronger monsoon", "Weak Indian monsoon (drought)", "More cyclones in Bay", "Cold winter"], a: 1, ex: "El Niño weakens Indian monsoon; La Niña strengthens it." },
      { q: "Bay of Bengal cyclones (October-December) are part of?", opts: ["SW Monsoon", "Retreating / NE Monsoon", "Cold weather", "Pre-monsoon"], a: 1, ex: "Retreating monsoon period; common cyclones." },
      { q: "Rain shadow region of Western Ghats?", opts: ["Coastal Maharashtra", "Konkan", "Deccan Plateau (e.g., Pune, Solapur)", "Kerala"], a: 2, ex: "Leeward / Deccan side." },
      { q: "Highest rainfall belt in India is in?", opts: ["Rajasthan", "Northeast India + Western Ghats", "Punjab", "Tamil Nadu"], a: 1, ex: "NE India (Mawsynram, Cherrapunji) and Western Ghats coastal side — > 200 cm/year." }
    ]
  };

  T["geo-india-soils"] = {
    body: `
      ${fig("India-Soils.png", "Soil types across India (alluvial, black, red, laterite, desert, mountain)", 600)}
      <h3>Soils of India</h3>
      <p>Indian Council of Agricultural Research (ICAR) classifies Indian soils into <b>8 major types</b>.</p>

      <table>
        <tr><th>Soil</th><th>Region / States</th><th>Crops</th><th>Features</th></tr>
        <tr><td><b>1. Alluvial Soil</b></td><td>Indo-Gangetic Plain (UP, Bihar, WB), Coastal regions, deltas</td><td>Wheat, Rice, Sugarcane, Cotton, Pulses, Oilseeds</td><td>Most widespread (~40% of India); deposited by rivers; rich in potash; poor in N and humus; <b>Khadar</b> (newer) and <b>Bhangar</b> (older).</td></tr>
        <tr><td><b>2. Black (Regur)</b></td><td>Deccan Plateau (Maharashtra, MP, Gujarat, Karnataka, Telangana, AP)</td><td><b>Cotton</b> (hence "black cotton soil"), wheat, jowar, oilseeds, tobacco</td><td>Formed from weathering of <b>basalt</b> (Deccan traps); rich in iron, magnesium, calcium, potash; develops cracks in summer (self-ploughing); poor in nitrogen and phosphorus.</td></tr>
        <tr><td><b>3. Red Soil</b></td><td>SE Deccan, Tamil Nadu, Karnataka, Odisha, Chhattisgarh, Jharkhand</td><td>Pulses, millets (ragi, jowar), wheat, oilseeds, potato</td><td>Formed from old crystalline rocks; rich in iron oxide → red color; poor in phosphate, lime, nitrogen, humus; less fertile.</td></tr>
        <tr><td><b>4. Laterite Soil</b></td><td>Hilly Western Ghats (Maharashtra, Karnataka, Kerala), Eastern Ghats, Assam, MP</td><td>Tea, coffee, cashew, rubber</td><td>Formed by intense leaching in tropical wet-and-dry; rich in iron, aluminium; poor in nitrogen, phosphate, lime, organic matter; reddish.</td></tr>
        <tr><td><b>5. Mountain / Forest Soil</b></td><td>Himalayan slopes (J&K, HP, UK, Sikkim, Arunachal)</td><td>Tea, coffee, spices, fruits</td><td>In situ formation; varies with altitude; rich in humus on lower slopes.</td></tr>
        <tr><td><b>6. Arid / Desert Soil</b></td><td>Rajasthan, Gujarat (Kutch), parts of Punjab, Haryana</td><td>With irrigation: bajra, jowar, barley, wheat</td><td>Sandy, saline; low organic matter; high salt content.</td></tr>
        <tr><td><b>7. Saline / Alkaline (Reh, Kallar, Usar)</b></td><td>Punjab, Haryana, UP (canal-irrigated areas)</td><td>Generally infertile</td><td>Excess of soluble salts (Na, Mg, Ca); develops in arid/semi-arid areas with poor drainage; can be reclaimed by gypsum.</td></tr>
        <tr><td><b>8. Peaty / Marshy Soil</b></td><td>Kerala (Kuttanad), Sundarbans (WB), parts of Odisha, TN, Bihar</td><td>Rice, jute</td><td>High humus, organic matter; black; high water content; saline; humid regions.</td></tr>
      </table>

      <hr>

      <h3>Soil Erosion</h3>
      <ul>
        <li>Removal of topsoil by water, wind, glaciers, human activity.</li>
        <li>Causes: deforestation, overgrazing, faulty agriculture, mining, construction.</li>
        <li>Types:
          <ul>
            <li><b>Sheet erosion</b>: thin layer removed.</li>
            <li><b>Rill erosion</b>: small channels.</li>
            <li><b>Gully erosion</b>: deep grooves (e.g., <b>Chambal ravines</b>).</li>
            <li><b>Wind erosion</b>: in deserts, dry areas.</li>
          </ul>
        </li>
        <li>Conservation: contour farming, terracing, afforestation, strip cropping, shelterbelts, check dams.</li>
      </ul>

      <hr>

      <h3>Natural Vegetation</h3>
      <p>India has 5 major types of natural vegetation based on rainfall, temperature, soil:</p>

      <table>
        <tr><th>Type</th><th>Rainfall</th><th>Region</th><th>Features / Trees</th></tr>
        <tr><td><b>1. Tropical Evergreen / Rainforest</b></td><td>&gt; 200 cm</td><td>Western Ghats, NE India, Andamans</td><td>Dense, multi-storied, no leaf shedding; rosewood, mahogany, ebony, rubber.</td></tr>
        <tr><td><b>2. Tropical Deciduous (Monsoon)</b></td><td>70–200 cm</td><td>Most of India (peninsular, NE plains, Shiwaliks)</td><td><b>Most widespread</b>; sheds leaves in dry season; <b>teak</b> (most important — Maharashtra, MP), sal, sandalwood, peepal, neem, banyan.</td></tr>
        <tr><td><b>3. Tropical Thorn / Desert / Scrub</b></td><td>&lt; 70 cm</td><td>Rajasthan, Punjab, Gujarat, Haryana</td><td>Cactus, acacia, khair, babul, kikar, palms.</td></tr>
        <tr><td><b>4. Mountain / Montane</b></td><td>variable</td><td>Himalayas (different vegetation at different altitudes)</td><td>Below 1500m: deciduous (oak, chestnut). 1500-3000m: temperate (pine, deodar, silver fir). 3000-4000m: alpine (juniper). Above 4000m: tundra. Conifers in higher elevations.</td></tr>
        <tr><td><b>5. Mangrove / Tidal</b></td><td>—</td><td>Sundarbans (WB), Mahanadi delta, Krishna-Godavari delta, Andamans</td><td>Salt-tolerant; aerial roots; <b>Sundari trees</b> in Sundarbans; protect coast from cyclones.</td></tr>
      </table>

      <h3>Famous Trees</h3>
      <ul>
        <li><b>Banyan</b>: National tree of India; aerial roots; longest-living.</li>
        <li><b>Peepal</b>: Sacred fig; Buddha's enlightenment.</li>
        <li><b>Neem</b>: medicinal.</li>
        <li><b>Teak</b>: durable wood; Western Ghats, MP.</li>
        <li><b>Sal</b>: hardwood; Chhota Nagpur, Bengal.</li>
        <li><b>Sandalwood</b>: Karnataka.</li>
        <li><b>Deodar</b>: cedar; Himalayas; building wood.</li>
      </ul>

      <h3>Forest Cover</h3>
      <ul>
        <li>India's forest cover: <b>~24.62% of land</b> (FSI India State of Forest Report 2021).</li>
        <li>National Forest Policy (1988) target: 33%.</li>
        <li>State with most forest cover: <b>Madhya Pradesh</b>.</li>
        <li>State with highest % forest cover: <b>Mizoram</b>.</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>Next: <b>Indian Agriculture and Crops</b>.</p>
    `,
    mcq: [
      { q: "Most widespread soil in India?", opts: ["Black", "Red", "Alluvial (~40%)", "Laterite"], a: 2, ex: "Alluvial soil — Indo-Gangetic plain, deltas, coasts; ~40% of India." },
      { q: "Khadar and Bhangar are types of?", opts: ["Black soil", "Alluvial soil", "Red soil", "Laterite"], a: 1, ex: "Khadar (newer alluvium) and Bhangar (older alluvium)." },
      { q: "Black soil is also called?", opts: ["Laterite", "Regur (cotton soil)", "Bhangar", "Khadar"], a: 1, ex: "Regur — Telugu for 'black'; ideal for cotton." },
      { q: "Black soil is formed from weathering of?", opts: ["Granite", "Basalt (Deccan Traps)", "Sandstone", "Limestone"], a: 1, ex: "Basaltic lava of Deccan Traps." },
      { q: "Black soil is best suited for?", opts: ["Rice", "Cotton", "Tea", "Spices"], a: 1, ex: "Cotton — hence 'black cotton soil'; also wheat, jowar, oilseeds." },
      { q: "Red soil's color is due to?", opts: ["Manganese", "Iron oxide", "Carbon", "Sulphur"], a: 1, ex: "Iron oxide — high iron content." },
      { q: "Laterite soil is best suited for?", opts: ["Rice", "Wheat", "Tea, coffee, cashew", "Sugarcane"], a: 2, ex: "Tea, coffee, cashew, rubber — needs well-drained, slightly acidic." },
      { q: "Saline soils can be reclaimed by?", opts: ["Lime", "Gypsum", "Sulphur", "Urea"], a: 1, ex: "Gypsum (calcium sulphate) — replaces sodium ions." },
      { q: "Sundarbans (WB) has which soil?", opts: ["Black", "Red", "Peaty / Marshy / Mangrove", "Laterite"], a: 2, ex: "Marshy/mangrove soils; saline; supports Sundari trees." },
      { q: "Most widespread vegetation in India?", opts: ["Evergreen", "Deciduous (Monsoon) — teak, sal", "Thorn/Desert", "Mountain"], a: 1, ex: "Tropical deciduous (monsoon) forests cover most of peninsular India." },
      { q: "Tropical evergreen forests need rainfall of?", opts: ["< 50 cm", "70–100 cm", "> 200 cm", "100–150 cm"], a: 2, ex: "Above 200 cm — Western Ghats, NE, Andamans." },
      { q: "Sundari tree is found in?", opts: ["Western Ghats", "Sundarbans (WB)", "Himalayas", "Thar"], a: 1, ex: "Sundarbans is named after Sundari trees; mangrove vegetation." },
      { q: "National tree of India?", opts: ["Banyan", "Peepal", "Mango", "Teak"], a: 0, ex: "Banyan (Ficus benghalensis) — declared 1950." },
      { q: "Teak is mainly grown in?", opts: ["Himalayas", "Maharashtra, MP, Karnataka (deciduous forests)", "Coastal Kerala", "Sundarbans"], a: 1, ex: "Tropical deciduous forests of central and southern India." },
      { q: "India's forest cover is?", opts: ["~10%", "~25%", "~40%", "~60%"], a: 1, ex: "About 24.62% per FSI 2021; National Forest Policy target was 33%." },
      { q: "Highest % forest cover state in India?", opts: ["MP", "Mizoram", "Arunachal Pradesh", "Kerala"], a: 1, ex: "Mizoram — over 84% (highest %); MP has largest area in absolute terms." },
      { q: "State with largest forest area in India?", opts: ["Mizoram", "Madhya Pradesh", "Arunachal Pradesh", "Chhattisgarh"], a: 1, ex: "MP has largest forest area in km² terms." },
      { q: "Chambal ravines are example of?", opts: ["Sheet erosion", "Gully erosion", "Wind erosion", "Coastal erosion"], a: 1, ex: "Gully erosion in Chambal valley (MP/Rajasthan/UP)." },
      { q: "Mountain forests above 4000 m are?", opts: ["Tropical evergreen", "Deciduous", "Conifers (alpine)", "Tundra (mosses, lichens)"], a: 3, ex: "Tundra vegetation above 4000 m; conifers (pine, deodar) lower down." }
    ]
  };

  T["geo-india-agriculture"] = {
    body: `
      <h3>Indian Agriculture — Key Facts</h3>
      <ul>
        <li>Agriculture: ~17% of GDP (declining); <b>~45% of workforce</b> (2023).</li>
        <li>India: 2nd largest country in arable land (~157 mn ha).</li>
        <li>India is largest producer of: <b>milk, pulses, jute</b>; 2nd in: rice, wheat, sugarcane, cotton, fruits, vegetables, fish.</li>
        <li>4 crop seasons:
          <ul>
            <li><b>Kharif</b>: sown June–July, harvested Sept–Oct (rice, jowar, bajra, maize, cotton, jute, sugarcane).</li>
            <li><b>Rabi</b>: sown Oct–Dec, harvested April–May (wheat, barley, mustard, gram, peas).</li>
            <li><b>Zaid</b>: short summer season (March–June; watermelon, cucumber, vegetables).</li>
          </ul>
        </li>
      </ul>

      <hr>

      <h3>Major Crops of India</h3>

      <h4>Food Grains</h4>
      <table>
        <tr><th>Crop</th><th>Top States</th><th>Conditions / Notes</th></tr>
        <tr><td><b>Rice</b></td><td>WB (largest), UP, Punjab, Andhra, Bihar, Telangana</td><td>Kharif; needs 25°C+, 100+ cm rain; flooded fields. India 2nd in world after China.</td></tr>
        <tr><td><b>Wheat</b></td><td>UP (largest), Punjab, Haryana, MP, Rajasthan</td><td>Rabi; cool moist growth, dry harvest; "Granary of India" = Punjab + Haryana. 2nd largest producer (after China).</td></tr>
        <tr><td><b>Maize</b></td><td>Karnataka, MP, Bihar, TN, Telangana</td><td>Kharif (and Rabi in some places); used as food, feed, oil.</td></tr>
        <tr><td><b>Jowar (Sorghum)</b></td><td>Maharashtra (largest), Karnataka, Andhra</td><td>Drought-resistant; grown in Deccan; Kharif and Rabi.</td></tr>
        <tr><td><b>Bajra (Pearl Millet)</b></td><td>Rajasthan (largest), UP, Haryana, Gujarat, Maharashtra</td><td>Kharif; arid regions.</td></tr>
        <tr><td><b>Ragi (Finger Millet)</b></td><td>Karnataka, TN, Andhra</td><td>South Indian dryland.</td></tr>
        <tr><td><b>Pulses (Gram, Tur, Moong, Urad)</b></td><td>MP (largest), UP, Maharashtra, Rajasthan, Karnataka</td><td>Nitrogen-fixing; India largest producer and consumer.</td></tr>
      </table>

      <h4>Cash Crops</h4>
      <table>
        <tr><th>Crop</th><th>Top States</th><th>Notes</th></tr>
        <tr><td><b>Cotton</b></td><td>Gujarat (largest), Maharashtra, Telangana, Punjab, Haryana</td><td>Black soil; "white gold"; 2nd largest producer (after China). Grown in Kharif.</td></tr>
        <tr><td><b>Jute</b></td><td>WB (largest), Bihar, Assam, Odisha</td><td>"Golden fibre"; needs warm-humid climate; alluvial soil. Largest producer (India ~50% of world).</td></tr>
        <tr><td><b>Sugarcane</b></td><td>UP (largest), Maharashtra, Karnataka, TN, Bihar</td><td>Tropical/subtropical; needs ample water. India 2nd in world after Brazil.</td></tr>
        <tr><td><b>Tobacco</b></td><td>Andhra, Gujarat, Karnataka</td><td>—</td></tr>
        <tr><td><b>Oilseeds (Groundnut, Mustard, Soybean, Sesame, Sunflower, Coconut)</b></td><td>Groundnut: Gujarat, Andhra; Mustard: Rajasthan; Soybean: MP; Coconut: Kerala</td><td>India is largest producer of groundnut.</td></tr>
        <tr><td><b>Tea</b></td><td>Assam (largest, ~50%), WB (Darjeeling), TN (Nilgiri), Kerala</td><td>Hill slopes; well-drained acidic soil; 100–250 cm rain; <b>India 2nd largest producer (after China); largest consumer</b>.</td></tr>
        <tr><td><b>Coffee</b></td><td>Karnataka (largest, ~70%), Kerala, TN</td><td>Arabica & Robusta; Western Ghats slopes; Chikmagalur traditional.</td></tr>
        <tr><td><b>Rubber</b></td><td>Kerala (largest, ~75%), Karnataka, TN</td><td>Equatorial; high humidity.</td></tr>
        <tr><td><b>Spices</b></td><td>Pepper: Kerala (largest); Cardamom: Kerala, Karnataka; Saffron: J&K (Pampore); Turmeric: Telangana, AP</td><td>India largest producer/consumer/exporter of spices.</td></tr>
      </table>

      <hr>

      <h3>Green Revolution (1965 onwards)</h3>
      <ul>
        <li>Initiative under <b>M.S. Swaminathan</b> ("Father of Green Revolution in India"); inspired by <b>Norman Borlaug</b>.</li>
        <li>Introduced <b>HYV (High Yielding Variety) seeds</b>; expanded irrigation; chemical fertilizers; pesticides; mechanization.</li>
        <li>Mainly in Punjab, Haryana, UP — wheat and rice productivity rose dramatically.</li>
        <li>Made India self-sufficient in food grains.</li>
        <li>Critique: regional/crop disparity; ecological damage; declining water table.</li>
      </ul>

      <h3>Other Revolutions in Indian Agriculture</h3>
      <table>
        <tr><th>Revolution</th><th>Sector</th><th>Person/State</th></tr>
        <tr><td><b>Green</b></td><td>Food grains (wheat, rice)</td><td>M.S. Swaminathan</td></tr>
        <tr><td><b>White (Operation Flood)</b></td><td>Milk</td><td><b>Verghese Kurien</b> ("Milkman of India"); Anand, Gujarat (Amul)</td></tr>
        <tr><td><b>Yellow</b></td><td>Oilseeds</td><td>Sam Pitroda</td></tr>
        <tr><td><b>Blue</b></td><td>Fish farming</td><td>Hiralal Chaudhuri, Arun Krishnan</td></tr>
        <tr><td><b>Pink</b></td><td>Onion / Prawn</td><td>—</td></tr>
        <tr><td><b>Golden</b></td><td>Fruits, honey</td><td>—</td></tr>
        <tr><td><b>Brown</b></td><td>Leather, cocoa</td><td>—</td></tr>
        <tr><td><b>Silver</b></td><td>Egg / Poultry</td><td>Indira Gandhi</td></tr>
        <tr><td><b>Red</b></td><td>Tomato / Meat</td><td>—</td></tr>
        <tr><td><b>Black</b></td><td>Petroleum</td><td>—</td></tr>
        <tr><td><b>Grey</b></td><td>Wool / Fertilizer</td><td>—</td></tr>
        <tr><td><b>Round</b></td><td>Potato</td><td>—</td></tr>
        <tr><td><b>Silver Fiber</b></td><td>Cotton</td><td>—</td></tr>
        <tr><td><b>Golden Fiber</b></td><td>Jute</td><td>—</td></tr>
      </table>

      <hr>

      <h3>India's Position in World</h3>
      <ul>
        <li><b>1st in production</b>: milk, pulses, jute, ginger, banana, mango, papaya, lemon, okra.</li>
        <li><b>2nd in production</b>: rice, wheat, sugarcane, groundnut, cotton, fish, vegetables, fruits, tea (after China), tobacco.</li>
      </ul>

      <h3>Important Agricultural Institutions</h3>
      <ul>
        <li><b>ICAR</b> (Indian Council of Agricultural Research, 1929) — apex body for agricultural R&D; HQ Delhi.</li>
        <li><b>IARI</b> (Indian Agricultural Research Institute, Pusa, Delhi).</li>
        <li><b>NDRI</b> (National Dairy Research Institute, Karnal).</li>
        <li><b>NABARD</b> (National Bank for Agriculture & Rural Development, 1982) — apex bank for rural credit.</li>
        <li><b>FCI</b> (Food Corporation of India, 1965) — food procurement and distribution.</li>
        <li><b>CACP</b> (Commission for Agricultural Costs and Prices) — recommends MSP.</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>Next: <b>Minerals and Mining in India</b>.</p>
    `,
    mcq: [
      { q: "India's main agricultural seasons?", opts: ["Kharif and Rabi (and Zaid)", "Summer & Winter only", "Tropical & Temperate", "Spring & Autumn"], a: 0, ex: "Kharif (sown monsoon), Rabi (sown winter), Zaid (short summer)." },
      { q: "Wheat is which type of crop?", opts: ["Kharif", "Rabi", "Zaid", "Year-round"], a: 1, ex: "Sown October-December; harvested April-May." },
      { q: "Largest rice-producing state in India?", opts: ["Punjab", "Andhra", "West Bengal (largest)", "UP"], a: 2, ex: "WB largest producer; Punjab largest exporter." },
      { q: "Largest wheat-producing state?", opts: ["Punjab", "UP (largest)", "Haryana", "MP"], a: 1, ex: "UP — largest producer; Punjab + Haryana = 'Granary of India'." },
      { q: "'Granary of India' refers to?", opts: ["Punjab + Haryana", "UP + Bihar", "MP + Maharashtra", "Punjab + UP"], a: 0, ex: "Punjab and Haryana — wheat and rice surplus." },
      { q: "Largest cotton producer in India?", opts: ["Maharashtra", "Gujarat (largest)", "Telangana", "Punjab"], a: 1, ex: "Gujarat — largest cotton producer; Maharashtra 2nd." },
      { q: "Cotton grows best in which soil?", opts: ["Alluvial", "Black (Regur)", "Red", "Laterite"], a: 1, ex: "Black soil retains moisture; ideal for cotton." },
      { q: "'Golden fibre' refers to?", opts: ["Cotton", "Jute", "Silk", "Wool"], a: 1, ex: "Jute — golden color; India ~50% of world production." },
      { q: "Largest jute-producing state?", opts: ["Bihar", "Odisha", "West Bengal (largest)", "Assam"], a: 2, ex: "WB largest; needs warm humid climate, alluvial soil." },
      { q: "Largest sugarcane-producing state?", opts: ["Maharashtra", "UP (largest)", "Karnataka", "Bihar"], a: 1, ex: "UP — largest area + production. Maharashtra 2nd." },
      { q: "Largest tea-producing state?", opts: ["Kerala", "Tamil Nadu", "Assam (~50%)", "WB"], a: 2, ex: "Assam — about half of India's tea." },
      { q: "Famous tea region in WB?", opts: ["Sundarbans", "Darjeeling", "Cherrapunji", "Coorg"], a: 1, ex: "Darjeeling — 'Champagne of teas'; small grower." },
      { q: "Largest coffee-producing state?", opts: ["Kerala", "Karnataka (~70%)", "Tamil Nadu", "Andhra"], a: 1, ex: "Karnataka — Coorg, Chikmagalur regions; 70% of India's coffee." },
      { q: "Largest rubber-producing state?", opts: ["TN", "Kerala (~75%)", "Karnataka", "Andhra"], a: 1, ex: "Kerala — humid equatorial conditions." },
      { q: "Largest cardamom producer?", opts: ["Karnataka", "Kerala", "Both Kerala and Karnataka", "Andhra"], a: 2, ex: "Kerala and Karnataka are top cardamom producers." },
      { q: "Saffron is grown in?", opts: ["Punjab", "Kashmir (Pampore)", "Kerala", "Assam"], a: 1, ex: "Pampore in Kashmir is famous for saffron." },
      { q: "'Father of Green Revolution in India'?", opts: ["Norman Borlaug", "M.S. Swaminathan", "Verghese Kurien", "C. Subramaniam"], a: 1, ex: "M.S. Swaminathan; Norman Borlaug was the 'Father of Green Revolution' globally." },
      { q: "White Revolution / Operation Flood was led by?", opts: ["Norman Borlaug", "M.S. Swaminathan", "Verghese Kurien (Anand, Gujarat)", "Sam Pitroda"], a: 2, ex: "Verghese Kurien — 'Milkman of India'; led Amul cooperative model." },
      { q: "Yellow Revolution refers to?", opts: ["Wheat", "Oilseeds", "Cotton", "Tea"], a: 1, ex: "Yellow = oilseeds; Sam Pitroda led 1990s." },
      { q: "Blue Revolution refers to?", opts: ["Water", "Fish/Aquaculture", "Petroleum", "Coal"], a: 1, ex: "Fish farming; Hiralal Chaudhuri pioneered." },
      { q: "Silver Revolution refers to?", opts: ["Cotton", "Eggs/Poultry", "Wool", "Silver mining"], a: 1, ex: "Eggs and poultry — Indira Gandhi era." },
      { q: "Pink Revolution refers to?", opts: ["Tomatoes", "Onion/Prawn", "Berries", "Plums"], a: 1, ex: "Onion / Prawn farming." },
      { q: "Largest milk producer in the world?", opts: ["USA", "China", "India", "New Zealand"], a: 2, ex: "India — World's largest milk producer (Operation Flood, 1970)." },
      { q: "ICAR was established in?", opts: ["1929", "1947", "1965", "1991"], a: 0, ex: "Indian Council of Agricultural Research, 1929." },
      { q: "NABARD was established in?", opts: ["1947", "1969", "1982", "1991"], a: 2, ex: "National Bank for Agriculture and Rural Development — 1982." }
    ]
  };

  T["geo-india-minerals"] = {
    body: `
      <h2>Minerals & Mining in India</h2>
      <p>India has rich and varied mineral resources. The <b>Chota Nagpur Plateau</b> (Jharkhand–Odisha–Chhattisgarh–WB) is called the <i>"Ruhr of India"</i> because of its concentration of coal, iron ore, manganese, mica, bauxite and copper.</p>

      <h3>Classification</h3>
      <ul>
        <li><b>Metallic</b> — Ferrous (iron, manganese, chromite) and Non-ferrous (copper, bauxite, lead, zinc, gold).</li>
        <li><b>Non-metallic</b> — Mica, limestone, dolomite, gypsum, phosphate.</li>
        <li><b>Energy / Fuel</b> — Coal, petroleum, gas, uranium, thorium.</li>
      </ul>

      <h3>Iron Ore</h3>
      <p>India has world's largest haematite reserves. Types: Magnetite (highest, ~70% Fe), Haematite, Limonite, Siderite.</p>
      <ul>
        <li><b>Odisha</b> (largest, ~50%) — Sundargarh, Keonjhar, Mayurbhanj. Belts: Badampahar, Daitari, Gurumahisani.</li>
        <li><b>Chhattisgarh</b> — Bailadila (best magnetite, exported to Japan via Vizag), Dalli-Rajhara.</li>
        <li><b>Karnataka</b> — Bellary-Hospet, Kudremukh.</li>
        <li><b>Jharkhand</b> — Singhbhum (Noamundi, Gua). Goa exports via Marmagao.</li>
      </ul>

      <h3>Manganese</h3>
      <ul>
        <li><b>MP</b> (largest) — Balaghat, Chhindwara.</li>
        <li>Maharashtra — Nagpur, Bhandara. Odisha — Sundargarh, Keonjhar.</li>
      </ul>

      <h3>Copper</h3>
      <ul>
        <li><b>MP</b> (largest) — Malanjkhand (Balaghat).</li>
        <li>Rajasthan — Khetri. Jharkhand — Singhbhum (Mosabani).</li>
      </ul>

      <h3>Bauxite</h3>
      <ul>
        <li><b>Odisha</b> (largest) — Panchpatmali (Koraput, Kalahandi).</li>
        <li>Gujarat (Jamnagar), Jharkhand (Lohardaga), Chhattisgarh (Amarkantak).</li>
        <li>Aluminium plants: BALCO (Korba), HINDALCO (Renukoot), NALCO (Angul).</li>
      </ul>

      <h3>Mica</h3>
      <ul>
        <li><b>Jharkhand</b> — Koderma (largest mica belt in world), Hazaribagh, Giridih.</li>
        <li>Andhra (Nellore), Rajasthan (Ajmer, Bhilwara).</li>
      </ul>

      <h3>Gold, Silver, Diamond</h3>
      <ul>
        <li>Gold — Kolar (closed 2001), Hutti (Karnataka — only working mine), Ramgiri (Andhra).</li>
        <li>Silver — Zawar (Rajasthan).</li>
        <li>Diamond — Panna (MP) — only diamond mine; Majhgawan.</li>
      </ul>

      <h3>Coal</h3>
      <p>4th largest reserves; ~98% Gondwana coal in Damodar, Mahanadi, Son, Wardha, Godavari valleys. Tertiary coal in NE.</p>
      <ul>
        <li><b>Jharkhand</b> — Jharia (largest coalfield), Bokaro, Giridih, Karanpura.</li>
        <li><b>Odisha</b> — Talcher (2nd largest reserves).</li>
        <li><b>Chhattisgarh</b> — Korba, Raigarh.</li>
        <li><b>WB</b> — Raniganj (oldest, mining since 1774).</li>
        <li><b>TN</b> — Neyveli (largest lignite).</li>
        <li>Quality: Anthracite (best, J&K only) > Bituminous > Lignite > Peat.</li>
      </ul>

      <h3>Petroleum & Gas</h3>
      <ul>
        <li>Mumbai High — largest oilfield (offshore, 1974, Sagar Samrat rig).</li>
        <li>Gujarat — Ankleshwar, Kalol, Lunej.</li>
        <li>Assam — Digboi (oldest, 1889), Naharkatiya, Moran.</li>
        <li>Krishna-Godavari Basin — major gas (KG-D6).</li>
        <li>Refineries: Digboi (oldest, 1901), Mumbai, Koyali, Mathura, Vizag, Jamnagar (world's largest, Reliance).</li>
      </ul>

      <h3>Atomic Minerals</h3>
      <ul>
        <li>Uranium — Jaduguda (Jharkhand — main mine), Khasi Hills (Meghalaya), Tummalapalle (Andhra).</li>
        <li>Thorium — monazite sands of Kerala — world's largest reserves.</li>
      </ul>
    `,
    mcq: [
      { q: "'Ruhr of India' is?", opts: ["Mumbai region", "Chota Nagpur Plateau", "Deccan", "Konkan"], a: 1, ex: "Chota Nagpur — coal, iron, manganese concentration." },
      { q: "Largest iron-ore producing state?", opts: ["Karnataka", "Odisha", "Chhattisgarh", "Jharkhand"], a: 1, ex: "Odisha — Sundargarh, Keonjhar." },
      { q: "Bailadila is famous for?", opts: ["Coal", "Iron ore", "Bauxite", "Copper"], a: 1, ex: "Bailadila in Chhattisgarh — high-grade iron ore." },
      { q: "Highest iron content in?", opts: ["Haematite", "Magnetite (~70%)", "Limonite", "Siderite"], a: 1, ex: "Magnetite has ~70% Fe." },
      { q: "Largest manganese state?", opts: ["MP", "Maharashtra", "Odisha", "Karnataka"], a: 0, ex: "MP — Balaghat." },
      { q: "Khetri is famous for?", opts: ["Iron", "Copper", "Coal", "Mica"], a: 1, ex: "Khetri (Rajasthan) — copper." },
      { q: "Largest copper producer?", opts: ["Rajasthan", "MP (Malanjkhand)", "Jharkhand", "Karnataka"], a: 1, ex: "Malanjkhand mine in Balaghat, MP." },
      { q: "Largest bauxite producer?", opts: ["Gujarat", "Odisha", "Jharkhand", "Maharashtra"], a: 1, ex: "Odisha — Panchpatmali." },
      { q: "World's largest mica belt?", opts: ["Bihar", "Koderma (Jharkhand)", "Andhra", "Rajasthan"], a: 1, ex: "Koderma in Jharkhand." },
      { q: "Only working gold mine?", opts: ["Kolar", "Hutti (Karnataka)", "Ramgiri", "Zawar"], a: 1, ex: "Hutti — Kolar closed 2001." },
      { q: "Only diamond mine?", opts: ["Golconda", "Panna (MP)", "Kolar", "Bailadila"], a: 1, ex: "Panna — Majhgawan mine." },
      { q: "Largest coalfield?", opts: ["Raniganj", "Jharia", "Bokaro", "Talcher"], a: 1, ex: "Jharia in Jharkhand." },
      { q: "Oldest coalfield?", opts: ["Jharia", "Bokaro", "Raniganj (1774)", "Talcher"], a: 2, ex: "Raniganj — mining since 1774." },
      { q: "Best coal quality?", opts: ["Peat", "Lignite", "Bituminous", "Anthracite"], a: 3, ex: "Anthracite — only in J&K." },
      { q: "Largest lignite at?", opts: ["Jharia", "Neyveli (TN)", "Talcher", "Korba"], a: 1, ex: "Neyveli, Tamil Nadu." },
      { q: "Mumbai High is for?", opts: ["Coal", "Petroleum (offshore)", "Iron", "Bauxite"], a: 1, ex: "Largest offshore oilfield, 1974." },
      { q: "Oldest refinery?", opts: ["Mumbai", "Koyali", "Digboi (1901)", "Mathura"], a: 2, ex: "Digboi, Assam — 1901." },
      { q: "World's largest refinery?", opts: ["Mathura", "Jamnagar (Reliance)", "Vizag", "Koyali"], a: 1, ex: "Jamnagar — Reliance." },
      { q: "Main uranium mine?", opts: ["Jaduguda", "Tummalapalle", "Khasi", "Kolar"], a: 0, ex: "Jaduguda, Jharkhand — since 1967." },
      { q: "World's largest thorium reserves?", opts: ["Australia", "USA", "India (Kerala)", "Brazil"], a: 2, ex: "Kerala monazite sands." }
    ]
  };

  T["geo-india-industries"] = {
    body: `
      <h2>Industries of India</h2>
      <p>Industries are classified by raw material (agro/mineral-based), size, ownership, and weight of raw material (heavy/light).</p>

      <h3>Iron & Steel</h3>
      <ul>
        <li><b>TISCO Jamshedpur</b> (1907, J.N. Tata) — first integrated plant; Jharia coal + Singhbhum iron + Subarnarekha water.</li>
        <li><b>IISCO Burnpur</b> (Asansol, WB).</li>
        <li><b>Visvesvaraya Iron & Steel</b> — Bhadravati (Karnataka).</li>
        <li>SAIL plants: Bhilai (USSR aid), Rourkela (German aid), Durgapur (British aid), Bokaro (USSR), Burnpur, Salem (TN), Vijaynagar, Vizag.</li>
        <li>Bhilai is largest. Vizag is the only port-based plant.</li>
      </ul>

      <h3>Cotton Textile</h3>
      <p>Oldest organised industry; first mill at Fort Gloster (Howrah, 1818); first successful Bombay Spinning & Weaving (1854, Cowasji Davar).</p>
      <ul>
        <li>Maharashtra (largest) — Mumbai ("Cottonopolis"), Pune, Solapur.</li>
        <li>Gujarat — Ahmedabad ("Manchester of India"/"Boston of East"), Surat.</li>
        <li>TN — Coimbatore ("Manchester of South India"), Madurai.</li>
        <li>UP — Kanpur ("Manchester of North India"). WB — Howrah.</li>
      </ul>

      <h3>Jute</h3>
      <p>India is largest producer; Bangladesh largest exporter. First mill at Rishra (1855). Centres along Hooghly: Titagarh, Jagatdal, Bhadreshwar, Howrah, Budge-Budge.</p>

      <h3>Sugar</h3>
      <ul>
        <li>UP — largest production. Maharashtra — highest recovery (cooperative model).</li>
        <li>Karnataka, TN, AP — southern belt with higher sugar content.</li>
      </ul>

      <h3>Paper</h3>
      <p>First mill at Serampore (1812). Centres: Ballarpur, Titagarh, Nepanagar (newsprint), Hoshangabad (currency notes), Dehradun (security paper).</p>

      <h3>Cement</h3>
      <p>First plant — Chennai (1904). India 2nd largest producer. Major: Rajasthan, Andhra, TN, MP, Gujarat.</p>

      <h3>Fertilizer</h3>
      <p>First plant — Ranipet (TN, 1906); first large-scale — Sindri (Jharkhand, 1951). Major: Trombay, Sindri, Nangal, Namrup.</p>

      <h3>Aircraft, Shipbuilding & Locomotives</h3>
      <ul>
        <li>HAL — Bengaluru (HQ), Kanpur, Koraput, Nasik, Hyderabad.</li>
        <li>Shipbuilding: Cochin Shipyard (largest), Mazagon (warships), Garden Reach (Kolkata), Hindustan Shipyard (Vizag).</li>
        <li>Locomotives: Chittaranjan (electric), Varanasi (DLW — diesel), Kapurthala (coaches), Perambur (ICF — coaches).</li>
      </ul>

      <h3>IT / Electronics</h3>
      <ul>
        <li>Bengaluru — "Silicon Valley of India".</li>
        <li>Hyderabad — "Cyberabad". Other hubs: Pune, Chennai, Gurugram, Noida, Kochi, Trivandrum (Technopark).</li>
      </ul>
    `,
    mcq: [
      { q: "First integrated steel plant?", opts: ["IISCO", "TISCO Jamshedpur (1907)", "Bhilai", "Rourkela"], a: 1, ex: "TISCO 1907 by J.N. Tata." },
      { q: "Bhilai steel plant — aid from?", opts: ["UK", "Germany", "USSR", "Japan"], a: 2, ex: "USSR aid; Bokaro also USSR." },
      { q: "Rourkela — aid from?", opts: ["UK", "Germany (West)", "USSR", "USA"], a: 1, ex: "Rourkela — West Germany." },
      { q: "Durgapur — aid from?", opts: ["UK", "Germany", "USSR", "Japan"], a: 0, ex: "Durgapur — British (UK)." },
      { q: "Only port-based steel plant?", opts: ["Bhilai", "Rourkela", "Vizag", "Salem"], a: 2, ex: "Vizag — only coastal plant." },
      { q: "First successful cotton mill (1854)?", opts: ["Howrah", "Bombay (Cowasji Davar)", "Ahmedabad", "Surat"], a: 1, ex: "Bombay Spinning & Weaving Mill, 1854." },
      { q: "Largest cotton-textile state?", opts: ["Gujarat", "Maharashtra", "TN", "WB"], a: 1, ex: "Maharashtra — Mumbai 'Cottonopolis'." },
      { q: "'Manchester of India'?", opts: ["Mumbai", "Ahmedabad", "Coimbatore", "Kanpur"], a: 1, ex: "Ahmedabad — also 'Boston of East'." },
      { q: "'Manchester of South India'?", opts: ["Madurai", "Coimbatore", "Salem", "Erode"], a: 1, ex: "Coimbatore." },
      { q: "First jute mill (1855)?", opts: ["Howrah", "Rishra", "Kolkata", "Titagarh"], a: 1, ex: "Rishra near Kolkata." },
      { q: "Largest sugar-producing state?", opts: ["Maharashtra", "UP", "Karnataka", "TN"], a: 1, ex: "UP — largest production." },
      { q: "Newsprint paper mill?", opts: ["Ballarpur", "Titagarh", "Nepanagar (MP)", "Hoshangabad"], a: 2, ex: "Nepanagar — newsprint." },
      { q: "Currency note paper made at?", opts: ["Nepanagar", "Hoshangabad", "Dehradun", "Nasik"], a: 1, ex: "Hoshangabad, MP." },
      { q: "First cement plant (1904)?", opts: ["Mumbai", "Chennai", "Kolkata", "Surat"], a: 1, ex: "Chennai — 1904." },
      { q: "First fertilizer plant (1906)?", opts: ["Sindri", "Ranipet (TN)", "Trombay", "Nangal"], a: 1, ex: "Ranipet, Tamil Nadu." },
      { q: "HAL HQ?", opts: ["Hyderabad", "Bengaluru", "Nasik", "Kanpur"], a: 1, ex: "HAL — Bengaluru." },
      { q: "Largest shipyard?", opts: ["Mazagon", "Cochin Shipyard", "Garden Reach", "Hindustan"], a: 1, ex: "Cochin Shipyard." },
      { q: "DLW (diesel loco)?", opts: ["Chittaranjan", "Varanasi", "Kapurthala", "Perambur"], a: 1, ex: "Varanasi — DLW." },
      { q: "ICF (coach factory)?", opts: ["Chittaranjan", "Kapurthala", "Perambur (Chennai)", "Varanasi"], a: 2, ex: "ICF Perambur, Chennai." },
      { q: "'Silicon Valley of India'?", opts: ["Hyderabad", "Pune", "Bengaluru", "Chennai"], a: 2, ex: "Bengaluru — IT capital." }
    ]
  };

  T["geo-india-energy"] = {
    body: `
      <h2>Energy Resources of India</h2>
      <p>Energy is conventional (coal, oil, gas, hydro, nuclear) or non-conventional (solar, wind, biomass, tidal, geothermal). Coal supplies ~55% of commercial energy.</p>

      <h3>Hydroelectric Power</h3>
      <p>First hydel plant — Sidrapong (Darjeeling, 1897). India has 4th largest hydropower potential.</p>
      <ul>
        <li><b>Bhakra-Nangal</b> (Sutlej) — Punjab-HP-Haryana-Rajasthan project; highest dam.</li>
        <li><b>Hirakud</b> (Mahanadi, Odisha) — longest dam in world.</li>
        <li><b>DVC</b> — first multipurpose project (1948), modelled on TVA-USA. Dams: Tilaiya, Konar, Maithon, Panchet.</li>
        <li><b>Tehri Dam</b> (Bhagirathi, Uttarakhand) — tallest in India (260 m).</li>
        <li><b>Sardar Sarovar</b> (Narmada) — Gujarat-MP-Maha-Raj.</li>
        <li><b>Nagarjuna Sagar</b> (Krishna, AP–Telangana) — masonry.</li>
        <li>Others: Rihand (Son), Indira Sagar (Narmada), Koyna, Idukki, Sharavathi.</li>
      </ul>

      <h3>Thermal</h3>
      <p>Largest source (~70%). NTPC (1975) — Singrauli, Korba, Ramagundam, Farakka, Vindhyachal (largest).</p>

      <h3>Nuclear</h3>
      <ul>
        <li><b>Tarapur</b> (Maharashtra) — 1st (1969); BWR.</li>
        <li><b>Rawatbhata</b> (Rajasthan) — Canadian aid.</li>
        <li><b>Kalpakkam</b> (TN) — first indigenous; MAPS.</li>
        <li>Narora (UP), Kakrapar (Gujarat), Kaiga (Karnataka).</li>
        <li><b>Kudankulam</b> (TN) — Russian VVER; largest.</li>
        <li>BARC research reactors: Apsara (1956 — first in Asia), Cirus, Dhruva, Purnima.</li>
      </ul>

      <h3>Solar</h3>
      <ul>
        <li>Bhadla Solar Park (Rajasthan) — once world's largest (~2245 MW).</li>
        <li>Pavagada (Karnataka), Kurnool (AP), Kamuthi (TN), Charanka (Gujarat).</li>
        <li>International Solar Alliance — India + France (2015), HQ Gurugram.</li>
      </ul>

      <h3>Wind</h3>
      <p>India 4th largest globally.</p>
      <ul>
        <li>TN (largest) — Muppandal (Kanyakumari).</li>
        <li>Gujarat (Kutch), Maharashtra, Rajasthan, Karnataka, Andhra.</li>
      </ul>

      <h3>Other Non-Conventional</h3>
      <ul>
        <li>Tidal — Gulf of Kutch, Gulf of Khambhat, Sundarbans.</li>
        <li>Geothermal — Puga Valley (Ladakh), Manikaran (HP), Tattapani.</li>
        <li>Biomass / Biogas — National Biogas program.</li>
        <li>Wave — Vizhinjam (Kerala) experimental.</li>
      </ul>

      <h3>Institutions</h3>
      <ul>
        <li>MNRE (since 2006). SECI, IREDA. NTPC, NHPC, NPCIL, ONGC, GAIL, CIL.</li>
      </ul>
    `,
    mcq: [
      { q: "First hydel station?", opts: ["Sivasamudram", "Sidrapong (1897)", "Khopoli", "Pykara"], a: 1, ex: "Sidrapong, Darjeeling — 1897." },
      { q: "Bhakra-Nangal is on?", opts: ["Beas", "Sutlej", "Ravi", "Chenab"], a: 1, ex: "Sutlej river." },
      { q: "Longest dam in world?", opts: ["Bhakra", "Hirakud", "Tehri", "Sardar Sarovar"], a: 1, ex: "Hirakud on Mahanadi." },
      { q: "Tallest dam in India?", opts: ["Bhakra", "Tehri (260 m)", "Hirakud", "Sardar Sarovar"], a: 1, ex: "Tehri on Bhagirathi." },
      { q: "DVC modelled on?", opts: ["Hoover", "TVA USA", "Aswan", "Three Gorges"], a: 1, ex: "Tennessee Valley Authority." },
      { q: "First multipurpose project?", opts: ["Bhakra", "DVC (1948)", "Hirakud", "Nagarjuna"], a: 1, ex: "Damodar Valley Corporation, 1948." },
      { q: "Sardar Sarovar on?", opts: ["Tapti", "Narmada", "Mahi", "Sabarmati"], a: 1, ex: "Narmada river." },
      { q: "Nagarjuna Sagar on?", opts: ["Godavari", "Krishna", "Kaveri", "Tungabhadra"], a: 1, ex: "Krishna — masonry dam." },
      { q: "First nuclear plant?", opts: ["Kalpakkam", "Rawatbhata", "Tarapur (1969)", "Narora"], a: 2, ex: "Tarapur — 1969, BWR." },
      { q: "First indigenous nuclear plant?", opts: ["Tarapur", "Rawatbhata", "Kalpakkam", "Narora"], a: 2, ex: "Kalpakkam (MAPS)." },
      { q: "Largest nuclear plant in India?", opts: ["Tarapur", "Kakrapar", "Kudankulam", "Kaiga"], a: 2, ex: "Kudankulam — Russian VVER." },
      { q: "Apsara reactor (1956)?", opts: ["Tarapur", "BARC Trombay", "Kalpakkam", "Narora"], a: 1, ex: "BARC — first in Asia." },
      { q: "Bhadla Solar Park?", opts: ["Gujarat", "Rajasthan", "AP", "Karnataka"], a: 1, ex: "Bhadla, Jodhpur, Rajasthan." },
      { q: "ISA HQ?", opts: ["Paris", "Delhi", "Gurugram", "Geneva"], a: 2, ex: "Gurugram — founded 2015." },
      { q: "Largest wind state?", opts: ["Gujarat", "TN (Muppandal)", "Rajasthan", "Maharashtra"], a: 1, ex: "TN — Muppandal." },
      { q: "Best tidal site?", opts: ["Gulf of Kutch", "Sundarbans", "Both Gulf of Kutch & Khambhat", "Vizhinjam"], a: 2, ex: "Highest tidal range in Gulf of Kutch and Khambhat." },
      { q: "Puga Valley (geothermal) is in?", opts: ["HP", "Ladakh", "Sikkim", "Uttarakhand"], a: 1, ex: "Puga, Ladakh." },
      { q: "MNRE formed in?", opts: ["1992", "2002", "2006", "2014"], a: 2, ex: "Ministry of New & Renewable Energy — 2006." },
      { q: "Largest source of electricity?", opts: ["Hydro", "Thermal (~70%)", "Nuclear", "Renewables"], a: 1, ex: "Coal-based thermal." },
      { q: "Vindhyachal NTPC is in?", opts: ["UP", "MP (Singrauli)", "Chhattisgarh", "Bihar"], a: 1, ex: "Singrauli, MP — NTPC's largest." }
    ]
  };

  T["geo-india-transport"] = {
    body: `
      ${fig("Indian_Railway_zones_map.svg", "Indian Railway zones (18 zones)", 600)}
      <h2>Transportation in India</h2>

      <h3>Railways</h3>
      <p>First train: 16 April 1853, Mumbai (Bori Bunder)–Thane, 34 km, by Lord Dalhousie. Asia's largest, world's 4th largest network.</p>
      <ul>
        <li>Nationalised in 1951. 18 zones (incl. Metro Kolkata).</li>
        <li>Gauges: Broad (1.676 m), Metre (1.000 m), Narrow (0.762/0.610 m). Project Unigauge.</li>
        <li>HQ: Rail Bhawan, New Delhi. Railway Museum: Chanakyapuri.</li>
        <li>Railway Staff College: Vadodara. RDSO: Lucknow.</li>
        <li>Konkan Railway — Roha (Maharashtra) to Mangalore.</li>
        <li>Metro: Kolkata (1984 — first), Delhi (2002), Bengaluru, Mumbai, Chennai, Hyderabad, Lucknow, Jaipur, Kochi.</li>
      </ul>

      <h3>Roadways</h3>
      <p>2nd largest road network in world (~63 lakh km).</p>
      <ul>
        <li>NHs (~1,30,000 km) under NHAI (1988).</li>
        <li>Longest NH — NH 44 (Srinagar–Kanyakumari, ~3745 km).</li>
        <li>Golden Quadrilateral — Delhi–Mumbai–Chennai–Kolkata.</li>
        <li>NSEW Corridor — Srinagar–Kanyakumari & Silchar–Porbandar.</li>
        <li>BRO — strategic border roads; Khardung La, Umling La passes.</li>
        <li>GT Road — Sher Shah Suri's road; today NH-1 + NH-2.</li>
      </ul>

      <h3>Waterways</h3>
      <p>IWAI — 1986.</p>
      <ul>
        <li>NW-1 — Ganga (Allahabad–Haldia, 1620 km).</li>
        <li>NW-2 — Brahmaputra (Sadiya–Dhubri).</li>
        <li>NW-3 — West Coast Canal (Kollam–Kottapuram, Kerala).</li>
        <li>NW-4 — Krishna-Godavari. NW-5 — Brahmani–Mahanadi (Odisha–WB).</li>
      </ul>

      <h3>Major Ports (13 major)</h3>
      <ul>
        <li>West coast: Kandla (Deendayal — tidal, Gujarat), Mumbai (largest natural harbour), JNPT/Nhava Sheva (largest container port), Marmagao (Goa — iron ore), New Mangalore, Cochin.</li>
        <li>East coast: Kolkata–Haldia (riverine, Hooghly), Paradip (Odisha), Vishakhapatnam (deepest natural), Chennai (oldest artificial), Ennore/Kamarajar, Tuticorin, Port Blair.</li>
      </ul>

      <h3>Airways</h3>
      <p>First flight: 1911, Allahabad–Naini (mail). First passenger: J.R.D. Tata (1932). Air India founded 1932.</p>
      <ul>
        <li>AAI — 1995.</li>
        <li>International airports: Delhi (IGI — busiest), Mumbai (CSI), Kolkata (Subhash Chandra Bose), Chennai, Bengaluru (Kempegowda), Hyderabad (Rajiv Gandhi), Kochi, Trivandrum, Goa, Ahmedabad (Sardar Patel).</li>
        <li>Pawan Hans — helicopter services.</li>
      </ul>

      <h3>Pipelines</h3>
      <ul>
        <li>HVJ (Hazira-Vijaipur-Jagdishpur) — longest gas pipeline.</li>
        <li>Kandla–Bhatinda crude oil; Salaya–Mathura.</li>
      </ul>
    `,
    mcq: [
      { q: "First train in India?", opts: ["1851 Calcutta", "1853 Bombay-Thane", "1854 Howrah", "1860 Madras"], a: 1, ex: "16 April 1853 — Bombay (Bori Bunder) to Thane." },
      { q: "Railways nationalised in?", opts: ["1947", "1951", "1969", "1991"], a: 1, ex: "1951." },
      { q: "Railway zones?", opts: ["16", "17", "18", "19"], a: 2, ex: "18 zones with Metro Rly Kolkata." },
      { q: "Broad gauge width?", opts: ["1.000 m", "1.435 m", "1.676 m", "0.762 m"], a: 2, ex: "Indian broad gauge — 1.676 m." },
      { q: "Konkan Railway connects?", opts: ["Mumbai-Chennai", "Roha-Mangalore", "Mumbai-Goa", "Goa-Cochin"], a: 1, ex: "Roha to Mangalore along Western Ghats." },
      { q: "First metro in India?", opts: ["Delhi", "Mumbai", "Kolkata (1984)", "Chennai"], a: 2, ex: "Kolkata Metro — 1984." },
      { q: "Longest NH?", opts: ["NH 7", "NH 44", "NH 2", "NH 8"], a: 1, ex: "NH 44 (Srinagar–Kanyakumari) ~3745 km." },
      { q: "Golden Quadrilateral connects?", opts: ["4 metros", "Delhi-Mumbai-Chennai-Kolkata", "All ports", "Border cities"], a: 1, ex: "4-metro highway." },
      { q: "NHAI was set up in?", opts: ["1956", "1988", "1991", "2000"], a: 1, ex: "NHAI Act 1988." },
      { q: "BRO builds in?", opts: ["Coastal", "Border / strategic", "Cities", "Rural"], a: 1, ex: "Border Roads Org." },
      { q: "NW-1 is on?", opts: ["Brahmaputra", "Ganga (Allahabad–Haldia)", "Krishna-Godavari", "West Coast"], a: 1, ex: "Ganga, 1620 km." },
      { q: "NW-2 is on?", opts: ["Ganga", "Brahmaputra", "Krishna", "Mahanadi"], a: 1, ex: "Brahmaputra (Sadiya–Dhubri)." },
      { q: "Kandla port also called?", opts: ["JNPT", "Deendayal", "Marmagao", "Mundra"], a: 1, ex: "Deendayal Port — tidal port." },
      { q: "Largest container port?", opts: ["Mumbai", "JNPT/Nhava Sheva", "Chennai", "Vizag"], a: 1, ex: "JNPT — largest container port." },
      { q: "Deepest natural harbour?", opts: ["Mumbai", "Vishakhapatnam", "Cochin", "Chennai"], a: 1, ex: "Vizag — deepest landlocked." },
      { q: "Oldest artificial port?", opts: ["Mumbai", "Kolkata", "Chennai", "Cochin"], a: 2, ex: "Chennai (Madras)." },
      { q: "Marmagao is famous for?", opts: ["Coal", "Iron ore", "Cotton", "Tea"], a: 1, ex: "Iron ore exports to Japan." },
      { q: "Kolkata-Haldia is?", opts: ["Tidal", "Riverine (Hooghly)", "Natural deep", "Artificial"], a: 1, ex: "Riverine on Hooghly." },
      { q: "Air India founded in?", opts: ["1911", "1932", "1947", "1953"], a: 1, ex: "1932 — Tata Air Services." },
      { q: "Longest gas pipeline?", opts: ["Kandla-Bhatinda", "HVJ", "Salaya-Mathura", "Mumbai-Mathura"], a: 1, ex: "Hazira-Vijaipur-Jagdishpur." }
    ]
  };

  T["geo-ecology"] = {
    body: `
      ${fig("FoodChain.svg", "Food chain — energy flow from producers to top consumers")}
      <h2>Ecology & Ecosystems</h2>
      <p><b>Ecology</b> (term: Ernst Haeckel, 1869) studies organism-environment interactions. <b>Ecosystem</b> (A.G. Tansley, 1935) is a self-sustaining unit of biotic + abiotic components.</p>

      <h3>Levels of Organisation</h3>
      <p>Organism → Population → Community → Ecosystem → Biome → Biosphere.</p>

      <h3>Components</h3>
      <ul>
        <li><b>Abiotic</b> — sunlight, temperature, water, soil, air, minerals.</li>
        <li><b>Biotic</b>:
          <ul>
            <li>Producers (autotrophs) — green plants/algae.</li>
            <li>Consumers (heterotrophs) — primary (herbivores), secondary, tertiary, omnivores.</li>
            <li>Decomposers (saprotrophs) — bacteria, fungi.</li>
          </ul>
        </li>
      </ul>

      <h3>Food Chain & Food Web</h3>
      <ul>
        <li>Grazing food chain — starts with green plants.</li>
        <li>Detritus food chain — starts with dead organic matter.</li>
        <li>Food web — interlinked chains.</li>
        <li><b>10% Law (Lindeman)</b> — only 10% energy passes to next trophic level; 90% lost as heat.</li>
      </ul>

      <h3>Ecological Pyramids</h3>
      <ul>
        <li>Pyramid of numbers — can be inverted.</li>
        <li>Pyramid of biomass — usually upright; inverted in oceans.</li>
        <li>Pyramid of energy — always upright (10% law).</li>
      </ul>

      <h3>Biogeochemical Cycles</h3>
      <ul>
        <li>Water — evaporation, precipitation, runoff.</li>
        <li>Carbon — photosynthesis ↔ respiration; combustion adds CO₂.</li>
        <li>Nitrogen — N₂ fixation (Rhizobium, Azotobacter; lightning), nitrification, ammonification, denitrification.</li>
        <li>Phosphorus — sedimentary; no gaseous phase.</li>
        <li>Oxygen — photosynthesis ↔ respiration.</li>
      </ul>

      <h3>Ecological Succession</h3>
      <p>Gradual change until a stable <b>climax community</b>.</p>
      <ul>
        <li>Primary — bare rock/lava (slow). Secondary — disturbed soil (faster).</li>
        <li>Hydrosere (water), Xerosere (dry), Lithosere (rock), Psammosere (sand).</li>
      </ul>

      <h3>Biomes</h3>
      <ul>
        <li>Tropical Rainforest — Amazon, Congo, SE Asia, W. Ghats.</li>
        <li>Tropical Savanna — Africa (Serengeti), Llanos, Australia.</li>
        <li>Desert — Sahara, Thar, Gobi, Atacama.</li>
        <li>Temperate Grassland — Pampas, Steppes, Prairies, Veld, Downs.</li>
        <li>Mediterranean — citrus, olives.</li>
        <li>Taiga — coniferous; Siberia, Canada.</li>
        <li>Tundra — Arctic; mosses, lichens; permafrost.</li>
      </ul>

      <h3>Ecotone & Niche</h3>
      <p>Ecotone — transition zone between ecosystems (mangrove between land and sea); edge species are abundant — <b>edge effect</b>. <b>Niche</b> — functional role + habitat. Two species cannot share the exact same niche (Gause's exclusion principle).</p>
    `,
    mcq: [
      { q: "Term 'Ecology' coined by?", opts: ["Tansley", "Ernst Haeckel (1869)", "Odum", "Lindeman"], a: 1, ex: "Ernst Haeckel, German, 1869." },
      { q: "Term 'Ecosystem' coined by?", opts: ["Haeckel", "A.G. Tansley (1935)", "Odum", "Lindeman"], a: 1, ex: "Tansley, 1935." },
      { q: "Producers are?", opts: ["Heterotrophs", "Autotrophs", "Decomposers", "Carnivores"], a: 1, ex: "Green plants — autotrophs." },
      { q: "Decomposers are mainly?", opts: ["Insects", "Bacteria & fungi", "Snails", "Earthworms"], a: 1, ex: "Saprotrophs." },
      { q: "10% law was given by?", opts: ["Tansley", "Haeckel", "Lindeman", "Odum"], a: 2, ex: "Raymond Lindeman, 1942." },
      { q: "Always upright pyramid?", opts: ["Numbers", "Biomass", "Energy", "All"], a: 2, ex: "Energy pyramid — always upright (10% law)." },
      { q: "Inverted biomass pyramid in?", opts: ["Forest", "Grassland", "Ocean", "Desert"], a: 2, ex: "Ocean — phytoplankton biomass less than zooplankton momentarily." },
      { q: "N-fixing bacteria in legumes?", opts: ["Azotobacter", "Rhizobium", "Nitrosomonas", "Nitrobacter"], a: 1, ex: "Rhizobium — symbiotic." },
      { q: "Phosphorus cycle is?", opts: ["Gaseous", "Sedimentary", "Mixed", "Hydrological"], a: 1, ex: "Sedimentary; no gas phase." },
      { q: "Primary succession on?", opts: ["Disturbed soil", "Bare rock/lava", "Old field", "Pond"], a: 1, ex: "On bare rock with no soil." },
      { q: "Succession in water?", opts: ["Lithosere", "Hydrosere", "Xerosere", "Psammosere"], a: 1, ex: "Hydrosere." },
      { q: "Climax community is?", opts: ["Initial", "Stable final stage", "Disturbed", "Pioneer"], a: 1, ex: "Stable, self-sustaining final community." },
      { q: "Pampas grassland is in?", opts: ["S. Africa", "S. America (Argentina)", "Australia", "Russia"], a: 1, ex: "Argentina, S. America." },
      { q: "Steppes are in?", opts: ["Russia/Eurasia", "USA", "Australia", "Africa"], a: 0, ex: "Eurasia — temperate grassland." },
      { q: "Veld is in?", opts: ["Argentina", "South Africa", "Australia", "Hungary"], a: 1, ex: "South African grassland." },
      { q: "Tundra is?", opts: ["Hot desert", "Coniferous", "Permafrost / cold treeless", "Tropical"], a: 2, ex: "Arctic, treeless, mosses, permafrost." },
      { q: "Taiga has?", opts: ["Deciduous", "Coniferous boreal", "Cacti", "Mangroves"], a: 1, ex: "Boreal coniferous — Siberia, Canada." },
      { q: "Transition zone between two ecosystems?", opts: ["Niche", "Ecotone", "Habitat", "Biome"], a: 1, ex: "Ecotone." },
      { q: "Niche is?", opts: ["Habitat only", "Functional role + habitat", "Population", "Community"], a: 1, ex: "Niche — full functional role of species." },
      { q: "Gause's principle?", opts: ["10% law", "Competitive exclusion", "Edge effect", "Succession"], a: 1, ex: "Two species can't occupy identical niche indefinitely." }
    ]
  };

  T["geo-pollution"] = {
    body: `
      ${fig("The_green_house_effect.svg", "The greenhouse effect — how GHGs trap heat in Earth's atmosphere")}
      <h2>Pollution & Climate Change</h2>

      <h3>Air Pollutants</h3>
      <ul>
        <li>CO — vehicle exhaust; binds Hb, suffocation.</li>
        <li>SO₂ — coal burning; acid rain, bronchitis.</li>
        <li>NOₓ — combustion; acid rain, photochemical smog.</li>
        <li>SPM/PM₁₀/PM₂.₅ — fine particulates; lung cancer.</li>
        <li>VOCs / Ozone — photochemical smog.</li>
        <li>CFCs — deplete stratospheric ozone.</li>
      </ul>

      <h3>Smog</h3>
      <ul>
        <li>Classical / London smog (1952) — SO₂ + smoke + fog (cold, humid).</li>
        <li>Photochemical / LA smog — NOx + VOCs + sunlight → ozone, PAN (warm, sunny).</li>
      </ul>

      <h3>Acid Rain</h3>
      <p>SO₂, NOx + water → H₂SO₄, HNO₃ → pH &lt; 5.6. Damages forests (Black Forest), aquatic life, marble (Taj Mahal — "Marble Cancer" from Mathura refinery).</p>

      <h3>Greenhouse Effect</h3>
      <p>GHGs trap infrared. Without them earth would be ~−18°C.</p>
      <ul>
        <li>Main GHGs: CO₂ (~60%), CH₄ (~20%, ~25× CO₂ potency), N₂O, CFCs, water vapour.</li>
        <li>CO₂ — fossil fuels, deforestation.</li>
        <li>CH₄ — paddy fields, livestock, landfills.</li>
        <li>N₂O — fertilizers.</li>
      </ul>

      <h3>Ozone Depletion</h3>
      <ul>
        <li>Stratospheric ozone (15–35 km) absorbs UV-B/UV-C.</li>
        <li>Depleted by CFCs, halons, methyl bromide, HCFCs.</li>
        <li>Ozone hole over Antarctica — discovered 1985.</li>
        <li>Dobson Unit — measures ozone column.</li>
      </ul>

      <h3>Water Pollution</h3>
      <ul>
        <li>BOD — high BOD = polluted water.</li>
        <li>Eutrophication — N/P → algal bloom → O₂ loss → fish die. Dal Lake suffers.</li>
        <li>Biomagnification — DDT, Hg accumulate up food chain.</li>
        <li>Minamata disease — mercury (Japan, 1956).</li>
        <li>Itai-Itai — cadmium (Japan).</li>
        <li>Blue Baby Syndrome — high nitrates, methaemoglobinaemia.</li>
        <li>Fluorosis — fluoride; Arsenic — Ganga delta.</li>
      </ul>

      <h3>Other</h3>
      <ul>
        <li>Soil — pesticides, plastic, e-waste, salinisation.</li>
        <li>Noise — &gt;85 dB harmful. WHO: 55 dB day / 45 night residential.</li>
      </ul>

      <h3>Conferences & Treaties</h3>
      <ul>
        <li>Stockholm 1972 — first UN env conf; UNEP; World Env Day 5 June.</li>
        <li>Vienna 1985 — ozone protection.</li>
        <li>Montreal Protocol 1987 — phased out CFCs (most successful env treaty). Kigali 2016 — HFCs.</li>
        <li>Earth Summit / Rio 1992 — Agenda 21, UNFCCC, CBD.</li>
        <li>Kyoto Protocol 1997 — first binding GHG cuts; CDM, JI, ETS.</li>
        <li>Paris Agreement (COP-21, 2015) — well below 2°C, ideally 1.5°C; NDCs.</li>
        <li>Glasgow COP-26 (2021) — India's "Panchamrit"; net zero by 2070.</li>
        <li>IPCC (1988) — WMO + UNEP.</li>
      </ul>

      <h3>India's Environmental Laws</h3>
      <ul>
        <li>Wildlife Protection Act 1972; Water Act 1974 (CPCB); Forest Conservation 1980.</li>
        <li>Air Act 1981; Environment Protection Act 1986 (post Bhopal 1984).</li>
        <li>Biological Diversity Act 2002; NGT Act 2010.</li>
      </ul>
    `,
    mcq: [
      { q: "Main pollutant from automobiles?", opts: ["SO₂", "CO", "Methane", "NH₃"], a: 1, ex: "CO from incomplete combustion." },
      { q: "Acid rain from?", opts: ["CO₂ + CH₄", "SO₂ + NOx", "CFCs", "Ozone"], a: 1, ex: "SO₂ + NOx → H₂SO₄, HNO₃." },
      { q: "London smog (1952)?", opts: ["Photochemical", "SO₂ + smoke + fog", "Acid", "Ozone"], a: 1, ex: "Classical smog — killed ~12,000." },
      { q: "Los Angeles smog?", opts: ["Reducing", "Photochemical", "Volcanic", "Industrial"], a: 1, ex: "Photochemical (NOx + VOCs + sun)." },
      { q: "Marble Cancer of Taj is due to?", opts: ["CO", "Acid rain (SO₂ from Mathura)", "Ozone", "CFCs"], a: 1, ex: "SO₂ from Mathura refinery." },
      { q: "Most abundant anthropogenic GHG?", opts: ["CH₄", "CO₂", "N₂O", "CFC"], a: 1, ex: "CO₂ — ~60%." },
      { q: "Most potent (per molecule) of these?", opts: ["CO₂", "CH₄ (~25×)", "Water vapour", "Ozone"], a: 1, ex: "CH₄ GWP ~25 over 100 yrs." },
      { q: "Methane source?", opts: ["Cars", "Paddy + livestock", "Refineries", "Forest fires"], a: 1, ex: "Paddy, ruminants, landfills." },
      { q: "Ozone hole over?", opts: ["Arctic", "Antarctic", "Equator", "Sahara"], a: 1, ex: "Antarctic — discovered 1985." },
      { q: "Ozone measured in?", opts: ["ppm", "Bel", "Dobson Units", "Watts"], a: 2, ex: "Dobson Unit." },
      { q: "Montreal Protocol (1987) for?", opts: ["GHGs", "Ozone (CFCs)", "Wetlands", "Biodiversity"], a: 1, ex: "Phased out CFCs." },
      { q: "Kyoto Protocol year?", opts: ["1992", "1997", "2002", "2015"], a: 1, ex: "1997." },
      { q: "Paris Agreement at?", opts: ["COP-19", "COP-21 (2015)", "COP-25", "COP-26"], a: 1, ex: "COP-21, Paris, 2015." },
      { q: "India's net-zero year (Glasgow)?", opts: ["2030", "2050", "2060", "2070"], a: 3, ex: "PM Modi at COP-26 — 2070." },
      { q: "Earth Summit was at?", opts: ["Stockholm 1972", "Rio 1992", "Kyoto 1997", "Paris 2015"], a: 1, ex: "Rio — UNFCCC, CBD adopted." },
      { q: "Minamata disease — caused by?", opts: ["Lead", "Mercury", "Cadmium", "Arsenic"], a: 1, ex: "Mercury — Japan, 1956." },
      { q: "Itai-Itai disease — caused by?", opts: ["Mercury", "Cadmium", "Lead", "Fluoride"], a: 1, ex: "Cadmium — Japan." },
      { q: "Blue Baby Syndrome — caused by?", opts: ["Mercury", "Nitrate", "Fluoride", "Lead"], a: 1, ex: "Methaemoglobinaemia in infants." },
      { q: "Eutrophication causes?", opts: ["Acid rain", "Algal bloom + O₂ loss", "Ozone hole", "Smog"], a: 1, ex: "Excess N/P → algal bloom." },
      { q: "IPCC formed in?", opts: ["1972", "1985", "1988", "1992"], a: 2, ex: "1988 — WMO + UNEP." },
      { q: "World Environment Day?", opts: ["22 April", "5 June", "16 September", "1 December"], a: 1, ex: "5 June — Stockholm anniversary." },
      { q: "Environment Protection Act?", opts: ["1972", "1981", "1986", "2002"], a: 2, ex: "1986 — post Bhopal." },
      { q: "NGT Act?", opts: ["1995", "2002", "2010", "2014"], a: 2, ex: "National Green Tribunal — 2010." }
    ]
  };

  T["geo-biodiversity"] = {
    body: `
      ${figRow([
        ["Panthera_tigris_tigris.jpg", "Royal Bengal Tiger — India's national animal"],
        ["Asiatic_Lion.jpg", "Asiatic Lion of Gir National Park"]
      ])}
      <h2>Biodiversity, National Parks & Wildlife</h2>
      <p><b>Biodiversity</b> = variety of life at three levels: <b>genetic, species, ecosystem</b>. Term popularised by E.O. Wilson. India is one of 17 <b>megadiverse</b> countries.</p>

      <h3>Biodiversity Hotspots in India (4 of 36 globally)</h3>
      <ul>
        <li><b>Western Ghats & Sri Lanka</b> — Nilgiri tahr, lion-tailed macaque.</li>
        <li><b>Eastern Himalaya</b> — red panda, snow leopard.</li>
        <li><b>Indo-Burma</b> — Hoolock gibbon (only ape in India).</li>
        <li><b>Sundaland</b> — Nicobar Islands part.</li>
      </ul>
      <p>Concept by Norman Myers (1988) — &gt;1500 endemic species & &gt;70% original habitat lost.</p>

      <h3>IUCN Red List</h3>
      <p>EX → EW → CR → EN → VU → NT → LC → DD → NE.</p>
      <ul>
        <li>CR: Great Indian Bustard, Jerdon's courser, Pygmy hog, Hangul (Kashmir stag), Gharial, Gangetic shark.</li>
        <li>EN: Asian elephant, Asiatic lion, Snow leopard, One-horned rhino, Nilgiri tahr, Lion-tailed macaque, Red panda, Wild ass, Dhole.</li>
      </ul>

      <h3>Protected Areas</h3>
      <ul>
        <li>National Parks — ~106. Wildlife Sanctuaries — ~570+.</li>
        <li>Biosphere Reserves — 18 (UNESCO MAB recognises 12).</li>
        <li>Tiger Reserves — 54 under Project Tiger.</li>
      </ul>

      <h3>Major National Parks</h3>
      <ul>
        <li><b>Jim Corbett</b> (Uttarakhand, 1936) — first NP; Project Tiger (1973) launched here.</li>
        <li><b>Kaziranga</b> (Assam) — UNESCO; one-horned rhino.</li>
        <li><b>Manas</b> (Assam) — UNESCO; tiger, golden langur.</li>
        <li><b>Sundarbans</b> (WB) — UNESCO; Royal Bengal tiger; mangroves.</li>
        <li><b>Gir</b> (Gujarat) — Asiatic lion.</li>
        <li><b>Ranthambore</b> (Rajasthan) — tiger.</li>
        <li><b>Kanha</b> (MP) — barasingha; Project Tiger.</li>
        <li><b>Bandhavgarh, Pench, Satpura</b> (MP) — tigers.</li>
        <li><b>Periyar</b> (Kerala) — elephants.</li>
        <li><b>Bandipur, Nagarhole</b> (Karnataka). <b>Mudumalai</b> (TN).</li>
        <li><b>Hemis</b> (Ladakh) — largest NP in India; snow leopard.</li>
        <li><b>Dachigam</b> (J&K) — Hangul.</li>
        <li><b>Keoladeo</b> (Bharatpur) — UNESCO; bird sanctuary.</li>
        <li><b>Nanda Devi & Valley of Flowers</b> (Uttarakhand) — UNESCO.</li>
        <li><b>Great Himalayan</b> (HP), <b>Khangchendzonga</b> (Sikkim) — UNESCO.</li>
        <li><b>Namdapha</b> (Arunachal) — only park with all 4 big cats (tiger, leopard, snow leopard, clouded leopard).</li>
        <li><b>Silent Valley</b> (Kerala) — lion-tailed macaque.</li>
      </ul>

      <h3>Project Tiger (1973)</h3>
      <p>Launched at Jim Corbett. Tiger — national animal since 1972 (replacing lion). NTCA — statutory body 2006.</p>

      <h3>Project Elephant (1992)</h3>
      <p>Elephant — Heritage Animal of India (2010). 33 elephant reserves.</p>

      <h3>Other Programs</h3>
      <ul>
        <li>Project Crocodile (1975), Project Snow Leopard (2009), Project Hangul, Rhino, Vulture, Sea Turtle (Olive Ridley), Dolphin (Ganges Dolphin — National Aquatic Animal, 2010).</li>
      </ul>

      <h3>Biosphere Reserves</h3>
      <ul>
        <li>Nilgiri (TN-Kerala-Karnataka) — first BR (1986).</li>
        <li>Nanda Devi, Nokrek, Manas, Sundarbans, Gulf of Mannar, Great Nicobar, Similipal, Khangchendzonga, Pachmarhi, Achanakmar-Amarkantak, Agasthyamalai, Cold Desert, Seshachalam, Panna.</li>
      </ul>

      <h3>Ramsar Sites (75+)</h3>
      <p>First two: Chilika (Odisha) and Keoladeo (Rajasthan), 1981. Largest: Sundarbans. Others: Wular, Loktak (only floating NP — Keibul Lamjao), Sambhar, Bhitarkanika, Pong, Harike, Vembanad-Kol.</p>

      <h3>Conventions</h3>
      <ul>
        <li>CITES (1973) — wildlife trade.</li>
        <li>Ramsar (1971) — wetlands.</li>
        <li>CBD (Rio 1992) — Biological Diversity Act 2002.</li>
        <li>Cartagena 2000 — biosafety/GMOs.</li>
        <li>Nagoya 2010 — access & benefit sharing.</li>
        <li>Bonn (CMS) — migratory species.</li>
      </ul>
    `,
    mcq: [
      { q: "Biodiversity hotspots in India?", opts: ["2", "3", "4", "5"], a: 2, ex: "W. Ghats, E. Himalaya, Indo-Burma, Sundaland." },
      { q: "Concept of biodiversity hotspot by?", opts: ["E.O. Wilson", "Norman Myers", "Tansley", "Odum"], a: 1, ex: "Norman Myers, 1988." },
      { q: "First National Park of India?", opts: ["Kaziranga", "Jim Corbett (1936)", "Gir", "Bandipur"], a: 1, ex: "Jim Corbett (orig. Hailey NP), Uttarakhand." },
      { q: "Project Tiger launched in?", opts: ["1969", "1972", "1973", "1992"], a: 2, ex: "Launched at Corbett, 1973." },
      { q: "Asiatic lion at?", opts: ["Kaziranga", "Gir", "Ranthambore", "Bandipur"], a: 1, ex: "Gir, Gujarat." },
      { q: "One-horned rhino at?", opts: ["Gir", "Kaziranga", "Periyar", "Sundarbans"], a: 1, ex: "Kaziranga, Assam." },
      { q: "Royal Bengal tiger at?", opts: ["Sundarbans", "Gir", "Periyar", "Hemis"], a: 0, ex: "Sundarbans (WB) mangroves." },
      { q: "Hangul (Kashmir Stag) at?", opts: ["Hemis", "Dachigam", "Corbett", "Sundarbans"], a: 1, ex: "Dachigam, J&K." },
      { q: "Largest NP in India?", opts: ["Corbett", "Hemis", "Kaziranga", "Sundarbans"], a: 1, ex: "Hemis, Ladakh — snow leopard." },
      { q: "Only floating NP?", opts: ["Manipur (Loktak)", "Assam", "Tripura", "Meghalaya"], a: 0, ex: "Keibul Lamjao on Loktak; Sangai deer." },
      { q: "Silent Valley is in?", opts: ["TN", "Kerala", "Karnataka", "Goa"], a: 1, ex: "Kerala — lion-tailed macaque." },
      { q: "First Biosphere Reserve?", opts: ["Nanda Devi", "Nilgiri (1986)", "Sundarbans", "Manas"], a: 1, ex: "Nilgiri — 1986." },
      { q: "Ramsar Convention deals with?", opts: ["Forests", "Wetlands", "Wildlife trade", "GHGs"], a: 1, ex: "Wetlands of international importance." },
      { q: "First Ramsar sites in India?", opts: ["Sundarbans & Wular", "Chilika & Keoladeo (1981)", "Loktak & Pong", "Sambhar & Harike"], a: 1, ex: "Chilika & Keoladeo, 1981." },
      { q: "National Aquatic Animal?", opts: ["Olive Ridley", "Ganges dolphin", "Gharial", "Mahseer"], a: 1, ex: "Ganges dolphin — 2010." },
      { q: "National Heritage Animal?", opts: ["Tiger", "Elephant", "Lion", "Rhino"], a: 1, ex: "Indian Elephant — 2010." },
      { q: "CITES (1973) deals with?", opts: ["Wetlands", "International wildlife trade", "Biodiversity", "Ozone"], a: 1, ex: "Endangered Species trade." },
      { q: "CBD adopted at?", opts: ["Stockholm 1972", "Rio 1992", "Kyoto 1997", "Paris 2015"], a: 1, ex: "Rio Earth Summit." },
      { q: "Hoolock gibbon (only Indian ape) is in?", opts: ["W. Ghats", "NE India (Indo-Burma)", "Himalayas", "Andamans"], a: 1, ex: "NE India." },
      { q: "Namdapha NP is famous for?", opts: ["All 4 big cats present", "Rhinos", "Lions", "Elephants only"], a: 0, ex: "Tiger, leopard, snow leopard, clouded leopard." }
    ]
  };

})();
