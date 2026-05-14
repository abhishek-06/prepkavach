(function() {
  const T = window.TOPICS = window.TOPICS || {};

  // ═══════════════════════════════════════════════════════════════
  // PHYSICS (16 topics)
  // ═══════════════════════════════════════════════════════════════

  // ───────────────────────────────────────────────────────────────
  // 1. UNITS & MEASUREMENT
  // ───────────────────────────────────────────────────────────────
  T["sci-phy-units"] = {
    body: `
      <h2>Units & Measurement</h2>
      <p>To measure any physical quantity, we need a standard called a <b>unit</b>. SSC asks 1-2 questions on units of physical quantities and unit conversions.</p>

      <h3>1. Fundamental (Base) Quantities & Their SI Units</h3>
      <table>
        <tr><th>Quantity</th><th>SI Unit</th><th>Symbol</th></tr>
        <tr><td>Length</td><td>Metre</td><td>m</td></tr>
        <tr><td>Mass</td><td>Kilogram</td><td>kg</td></tr>
        <tr><td>Time</td><td>Second</td><td>s</td></tr>
        <tr><td>Electric Current</td><td>Ampere</td><td>A</td></tr>
        <tr><td>Temperature</td><td>Kelvin</td><td>K</td></tr>
        <tr><td>Amount of Substance</td><td>Mole</td><td>mol</td></tr>
        <tr><td>Luminous Intensity</td><td>Candela</td><td>cd</td></tr>
      </table>

      <h3>2. Important Derived Units</h3>
      <table>
        <tr><th>Quantity</th><th>SI Unit</th><th>Other Name</th></tr>
        <tr><td>Force</td><td>kg·m/s²</td><td>Newton (N)</td></tr>
        <tr><td>Pressure</td><td>N/m²</td><td>Pascal (Pa)</td></tr>
        <tr><td>Energy / Work</td><td>N·m</td><td>Joule (J)</td></tr>
        <tr><td>Power</td><td>J/s</td><td>Watt (W)</td></tr>
        <tr><td>Frequency</td><td>per second</td><td>Hertz (Hz)</td></tr>
        <tr><td>Electric Charge</td><td>A·s</td><td>Coulomb (C)</td></tr>
        <tr><td>Voltage / EMF</td><td>J/C</td><td>Volt (V)</td></tr>
        <tr><td>Resistance</td><td>V/A</td><td>Ohm (Ω)</td></tr>
        <tr><td>Magnetic Flux</td><td>V·s</td><td>Weber (Wb)</td></tr>
        <tr><td>Magnetic Flux Density</td><td>Wb/m²</td><td>Tesla (T)</td></tr>
        <tr><td>Capacitance</td><td>C/V</td><td>Farad (F)</td></tr>
        <tr><td>Inductance</td><td>Wb/A</td><td>Henry (H)</td></tr>
        <tr><td>Radioactivity</td><td>per second</td><td>Becquerel (Bq)</td></tr>
        <tr><td>Absorbed Dose</td><td>J/kg</td><td>Gray (Gy)</td></tr>
        <tr><td>Equivalent Dose</td><td>J/kg</td><td>Sievert (Sv)</td></tr>
        <tr><td>Luminous Flux</td><td>cd·sr</td><td>Lumen (lm)</td></tr>
        <tr><td>Illuminance</td><td>lm/m²</td><td>Lux (lx)</td></tr>
      </table>

      <h3>3. Practical/Non-SI Units (Frequently Asked)</h3>
      <table>
        <tr><th>Quantity</th><th>Unit</th><th>SI Conversion</th></tr>
        <tr><td>Length</td><td>Angstrom (Å)</td><td>10⁻¹⁰ m</td></tr>
        <tr><td>Length (astronomy)</td><td>Light Year</td><td>9.46 × 10¹⁵ m</td></tr>
        <tr><td>Length (astronomy)</td><td>Parsec</td><td>3.26 light years</td></tr>
        <tr><td>Length (astronomy)</td><td>Astronomical Unit (AU)</td><td>1.496 × 10¹¹ m (Earth-Sun distance)</td></tr>
        <tr><td>Length (nautical)</td><td>Nautical Mile</td><td>1852 m</td></tr>
        <tr><td>Length (nuclear)</td><td>Fermi</td><td>10⁻¹⁵ m</td></tr>
        <tr><td>Mass</td><td>Tonne</td><td>1000 kg</td></tr>
        <tr><td>Mass (atomic)</td><td>amu / Dalton</td><td>1.66 × 10⁻²⁷ kg</td></tr>
        <tr><td>Mass (gem)</td><td>Carat</td><td>0.2 g</td></tr>
        <tr><td>Pressure</td><td>Bar</td><td>10⁵ Pa</td></tr>
        <tr><td>Pressure (atmosphere)</td><td>atm</td><td>1.013 × 10⁵ Pa</td></tr>
        <tr><td>Pressure (medical)</td><td>mm Hg / Torr</td><td>133.3 Pa</td></tr>
        <tr><td>Energy</td><td>Calorie</td><td>4.184 J</td></tr>
        <tr><td>Energy (electrical)</td><td>kWh (Unit)</td><td>3.6 × 10⁶ J</td></tr>
        <tr><td>Energy (atomic)</td><td>Electron Volt (eV)</td><td>1.6 × 10⁻¹⁹ J</td></tr>
        <tr><td>Power (engine)</td><td>Horse Power (HP)</td><td>746 W</td></tr>
        <tr><td>Temperature</td><td>Celsius (°C)</td><td>K − 273.15</td></tr>
        <tr><td>Temperature</td><td>Fahrenheit (°F)</td><td>(9/5)°C + 32</td></tr>
      </table>

      <h3>4. SI Prefixes (Powers of 10)</h3>
      <table>
        <tr><th>Prefix</th><th>Symbol</th><th>Factor</th></tr>
        <tr><td>Tera</td><td>T</td><td>10¹²</td></tr>
        <tr><td>Giga</td><td>G</td><td>10⁹</td></tr>
        <tr><td>Mega</td><td>M</td><td>10⁶</td></tr>
        <tr><td>Kilo</td><td>k</td><td>10³</td></tr>
        <tr><td>Hecto</td><td>h</td><td>10²</td></tr>
        <tr><td>Deca</td><td>da</td><td>10¹</td></tr>
        <tr><td>Deci</td><td>d</td><td>10⁻¹</td></tr>
        <tr><td>Centi</td><td>c</td><td>10⁻²</td></tr>
        <tr><td>Milli</td><td>m</td><td>10⁻³</td></tr>
        <tr><td>Micro</td><td>μ</td><td>10⁻⁶</td></tr>
        <tr><td>Nano</td><td>n</td><td>10⁻⁹</td></tr>
        <tr><td>Pico</td><td>p</td><td>10⁻¹²</td></tr>
        <tr><td>Femto</td><td>f</td><td>10⁻¹⁵</td></tr>
      </table>

      <h3>5. Measuring Instruments</h3>
      <table>
        <tr><th>Instrument</th><th>Measures</th></tr>
        <tr><td>Ammeter</td><td>Electric current</td></tr>
        <tr><td>Anemometer</td><td>Wind speed</td></tr>
        <tr><td>Audiometer</td><td>Sound intensity</td></tr>
        <tr><td>Barometer</td><td>Atmospheric pressure</td></tr>
        <tr><td>Calorimeter</td><td>Heat (quantity)</td></tr>
        <tr><td>Chronometer</td><td>Accurate time (ships)</td></tr>
        <tr><td>Dynamometer</td><td>Force / power of engine</td></tr>
        <tr><td>Galvanometer</td><td>Small electric current</td></tr>
        <tr><td>Hydrometer</td><td>Specific gravity of liquids</td></tr>
        <tr><td>Hygrometer</td><td>Humidity</td></tr>
        <tr><td>Lactometer</td><td>Purity of milk</td></tr>
        <tr><td>Manometer</td><td>Pressure of gas</td></tr>
        <tr><td>Odometer</td><td>Distance travelled (vehicle)</td></tr>
        <tr><td>Phonograph</td><td>Records / reproduces sound</td></tr>
        <tr><td>Photometer</td><td>Light intensity</td></tr>
        <tr><td>Pyrometer</td><td>Very high temperatures</td></tr>
        <tr><td>Refractometer</td><td>Refractive index</td></tr>
        <tr><td>Salinometer</td><td>Salinity of solutions</td></tr>
        <tr><td>Seismograph</td><td>Earthquake intensity</td></tr>
        <tr><td>Sextant</td><td>Angles (navigation)</td></tr>
        <tr><td>Sphygmomanometer</td><td>Blood pressure</td></tr>
        <tr><td>Spirometer</td><td>Lung volume</td></tr>
        <tr><td>Stethoscope</td><td>Sounds inside body</td></tr>
        <tr><td>Tachometer</td><td>Speed of rotation (RPM)</td></tr>
        <tr><td>Thermometer</td><td>Temperature</td></tr>
        <tr><td>Voltmeter</td><td>Voltage / potential difference</td></tr>
      </table>

      <h3>🎯 Tips</h3>
      <ul>
        <li>SI unit of force = Newton; CGS unit = Dyne (1 N = 10⁵ dyne).</li>
        <li>SI unit of energy = Joule; CGS unit = Erg (1 J = 10⁷ erg).</li>
        <li>Light year is unit of <b>distance</b>, not time.</li>
        <li>Parsec = 3.26 light years (largest distance unit in astronomy commonly used).</li>
        <li>1 HP = 746 W ≈ 0.746 kW.</li>
      </ul>
    `,
    mcq: [
      { q: "SI unit of force is:", opts: ["Newton", "Joule", "Watt", "Pascal"], a: 0, ex: "Newton = kg·m/s²." },
      { q: "Light year is a unit of:", opts: ["Time", "Distance", "Speed", "Energy"], a: 1, ex: "Distance light travels in 1 year." },
      { q: "1 Horse Power equals:", opts: ["546 W", "646 W", "746 W", "846 W"], a: 2, ex: "1 HP = 746 W." },
      { q: "Ammeter measures:", opts: ["Voltage", "Current", "Resistance", "Power"], a: 1, ex: "Ammeter → current in Amperes." },
      { q: "Lactometer measures:", opts: ["Lactic acid", "Purity of milk", "Lactose level", "Density of any liquid"], a: 1, ex: "Specifically purity of milk." },
      { q: "SI unit of temperature is:", opts: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"], a: 2, ex: "Kelvin (K)." },
      { q: "Atmospheric pressure is measured by:", opts: ["Manometer", "Barometer", "Hygrometer", "Sphygmomanometer"], a: 1, ex: "Barometer = atmospheric pressure." },
      { q: "1 nanometer = ?", opts: ["10⁻⁶ m", "10⁻⁹ m", "10⁻¹² m", "10⁻³ m"], a: 1, ex: "Nano = 10⁻⁹." },
      { q: "Earthquake intensity is measured by:", opts: ["Anemometer", "Seismograph", "Audiometer", "Barometer"], a: 1, ex: "Seismograph." },
      { q: "1 Angstrom = ?", opts: ["10⁻¹⁰ m", "10⁻⁸ m", "10⁻⁶ m", "10⁻⁴ m"], a: 0, ex: "1 Å = 10⁻¹⁰ m." },
      { q: "Pyrometer measures:", opts: ["Pressure", "Very high temperature", "Speed", "Humidity"], a: 1, ex: "Pyrometer = high temperature." },
      { q: "Blood pressure is measured by:", opts: ["Sphygmomanometer", "Stethoscope", "Spirometer", "Barometer"], a: 0, ex: "Sphygmomanometer." },
      { q: "SI unit of work is:", opts: ["Joule", "Newton", "Watt", "Pascal"], a: 0, ex: "Joule." },
      { q: "Hygrometer measures:", opts: ["Humidity", "Hydraulic pressure", "Hardness", "Heat"], a: 0, ex: "Humidity." },
      { q: "1 light year ≈ ?", opts: ["9.46 × 10¹² km", "9.46 × 10¹⁵ km", "9.46 × 10⁹ km", "9.46 × 10⁶ km"], a: 0, ex: "9.46 × 10¹² km = 9.46 × 10¹⁵ m." },
      { q: "Carat is the unit for:", opts: ["Light", "Weight of gems", "Distance", "Temperature"], a: 1, ex: "Gem weight; 1 carat = 0.2 g." },
      { q: "Anemometer measures:", opts: ["Wind speed", "Sound", "Rainfall", "Pressure"], a: 0, ex: "Wind speed." },
      { q: "SI unit of frequency is:", opts: ["Hertz", "Newton", "Watt", "Joule"], a: 0, ex: "Hertz = 1/s." },
      { q: "1 atm = ?", opts: ["10⁵ Pa", "1.013 × 10⁵ Pa", "100 Pa", "10⁴ Pa"], a: 1, ex: "Standard atmospheric pressure." },
      { q: "Tachometer measures:", opts: ["Time", "Distance", "Rotational speed", "Force"], a: 2, ex: "RPM of engine." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 2. KINEMATICS (MOTION)
  // ───────────────────────────────────────────────────────────────
  T["sci-phy-kinematics"] = {
    body: `
      <h2>Kinematics (Motion)</h2>
      <p>Kinematics is the study of motion of objects without considering forces causing it.</p>

      <h3>1. Basic Definitions</h3>
      <ul>
        <li><b>Distance</b>: total path length (scalar) — always positive.</li>
        <li><b>Displacement</b>: shortest distance from start to end with direction (vector). Can be zero or negative.</li>
        <li><b>Speed</b> = distance / time. Scalar. SI unit: m/s.</li>
        <li><b>Velocity</b> = displacement / time. Vector. Direction matters.</li>
        <li><b>Acceleration</b> = change in velocity / time. SI unit: m/s².</li>
        <li><b>Retardation/Deceleration</b>: negative acceleration (slowing down).</li>
        <li><b>Average speed</b> = total distance / total time.</li>
        <li><b>Uniform motion</b>: equal distance in equal time intervals.</li>
      </ul>

      <h3>2. Types of Motion</h3>
      <ul>
        <li><b>Translational</b>: object moves from one place to another (car on road).</li>
        <li><b>Rotational</b>: object rotates about an axis (ceiling fan).</li>
        <li><b>Oscillatory/Vibrational</b>: to-and-fro about a fixed point (pendulum).</li>
        <li><b>Periodic</b>: repeats after fixed interval (earth around sun).</li>
        <li><b>Random</b>: irregular (gas molecules).</li>
      </ul>

      <h3>3. Equations of Motion (Uniform Acceleration)</h3>
      <p>For motion in a straight line with constant acceleration <i>a</i>:</p>
      <ul>
        <li><b>v = u + at</b> (final velocity)</li>
        <li><b>s = ut + ½at²</b> (displacement)</li>
        <li><b>v² = u² + 2as</b> (no-time form)</li>
      </ul>
      <p>Where: u = initial velocity, v = final velocity, a = acceleration, t = time, s = displacement.</p>

      <h3>4. Free Fall (Vertical Motion under Gravity)</h3>
      <p>Acceleration due to gravity g ≈ 9.8 m/s² (≈ 10 m/s² for problems).</p>
      <ul>
        <li>For falling object: take a = +g (downward).</li>
        <li>For thrown upward: a = −g (decelerating).</li>
        <li>At highest point: v = 0.</li>
      </ul>

      <h3>5. Important Concepts</h3>
      <ul>
        <li><b>Scalar quantities</b>: magnitude only (mass, time, distance, speed, energy, work, power, temperature).</li>
        <li><b>Vector quantities</b>: magnitude + direction (displacement, velocity, acceleration, force, momentum, weight).</li>
        <li><b>Momentum</b> p = m × v (kg·m/s). Conserved in collisions.</li>
        <li><b>Circular motion</b>: even at constant speed, velocity changes direction → centripetal acceleration directed toward centre.</li>
        <li><b>Projectile motion</b>: object thrown at angle follows parabolic path. Time of flight = (2u sin θ)/g.</li>
      </ul>

      <h3>6. Graphs of Motion</h3>
      <ul>
        <li><b>Distance-time graph</b>: slope = speed.</li>
        <li><b>Velocity-time graph</b>: slope = acceleration; area under curve = distance.</li>
        <li><b>Straight horizontal line</b> in v-t: uniform velocity.</li>
        <li><b>Straight slanting line</b> in v-t: uniform acceleration.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Speed = how fast; Velocity = how fast AND in what direction.</li>
        <li>Displacement ≤ distance always.</li>
        <li>Free fall: ignore air resistance; all objects fall at same rate regardless of mass.</li>
        <li>Centripetal force is always toward centre; centrifugal force is "fictitious" (felt in rotating frame).</li>
      </ul>
    `,
    mcq: [
      { q: "SI unit of acceleration:", opts: ["m/s", "m/s²", "kg·m/s", "m²/s"], a: 1, ex: "m/s²." },
      { q: "If a body returns to starting point, displacement is:", opts: ["Zero", "Maximum", "Negative", "Path length"], a: 0, ex: "Displacement = 0 (start = end)." },
      { q: "Which is a vector quantity?", opts: ["Mass", "Speed", "Velocity", "Time"], a: 2, ex: "Velocity has direction." },
      { q: "Acceleration due to gravity is approximately:", opts: ["9.8 m/s²", "10 N", "9.8 N", "100 m/s"], a: 0, ex: "g ≈ 9.8 m/s²." },
      { q: "If u=0, a=2, t=5, then v = ?", opts: ["10 m/s", "5 m/s", "25 m/s", "2 m/s"], a: 0, ex: "v = 0 + 2×5 = 10." },
      { q: "An object moving in a circle at constant speed has:", opts: ["No acceleration", "Constant velocity", "Centripetal acceleration", "Zero displacement"], a: 2, ex: "Direction changes, so accelerating toward centre." },
      { q: "Momentum is product of:", opts: ["Mass × velocity", "Mass × acceleration", "Force × time", "Energy × time"], a: 0, ex: "p = m × v." },
      { q: "Force × time =", opts: ["Energy", "Momentum change", "Power", "Work"], a: 1, ex: "Impulse = change in momentum." },
      { q: "Distance is:", opts: ["Vector", "Scalar", "Both", "Neither"], a: 1, ex: "Scalar (no direction)." },
      { q: "At highest point of upward throw, velocity is:", opts: ["Maximum", "Zero", "Negative", "Equal to initial"], a: 1, ex: "Momentarily zero before falling back." },
      { q: "Slope of velocity-time graph gives:", opts: ["Velocity", "Acceleration", "Distance", "Displacement"], a: 1, ex: "Δv/Δt = acceleration." },
      { q: "Area under v-t graph =", opts: ["Velocity", "Displacement", "Acceleration", "Force"], a: 1, ex: "v × t = displacement." },
      { q: "If retardation is 4 m/s², the velocity reduces by:", opts: ["4 m/s per s", "4 m per s", "4 s", "Cannot calculate"], a: 0, ex: "Retardation = -acceleration." },
      { q: "A body thrown vertically up returns after how long if initial velocity = 20 m/s (g=10)?", opts: ["2 s", "4 s", "6 s", "10 s"], a: 1, ex: "Total time = 2u/g = 4 s." },
      { q: "Newton's first law deals with:", opts: ["Inertia", "Force", "Friction", "Energy"], a: 0, ex: "Law of inertia." },
      { q: "Speed is:", opts: ["Scalar", "Vector", "Both", "Neither"], a: 0, ex: "Magnitude only." },
      { q: "If car covers 60 km in 2 hours, average speed:", opts: ["20 km/h", "30 km/h", "40 km/h", "120 km/h"], a: 1, ex: "60/2 = 30." },
      { q: "Pendulum motion is:", opts: ["Rotational", "Oscillatory", "Random", "Linear"], a: 1, ex: "To-and-fro about mean position." },
      { q: "Free fall is independent of:", opts: ["Time", "Mass", "g", "Height"], a: 1, ex: "All bodies fall at same rate in vacuum." },
      { q: "Projectile path in air is:", opts: ["Circle", "Parabola", "Straight line", "Spiral"], a: 1, ex: "Parabolic trajectory." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 3. FRICTION
  // ───────────────────────────────────────────────────────────────
  T["sci-phy-friction"] = {
    body: `
      <h2>Friction</h2>
      <p><b>Friction</b> is the force that opposes relative motion between two surfaces in contact. SI unit: Newton (N).</p>

      <h3>1. Types of Friction</h3>
      <ul>
        <li><b>Static Friction</b>: prevents an object from starting to move. Acts when no relative motion. Maximum value just before motion starts.</li>
        <li><b>Limiting Friction</b>: maximum static friction value = μₛ × N (N = normal force).</li>
        <li><b>Kinetic (Sliding) Friction</b>: acts when surfaces are in relative motion. Always less than static friction.</li>
        <li><b>Rolling Friction</b>: when one body rolls over another. Much smaller than sliding friction (that's why we use wheels).</li>
        <li><b>Fluid Friction (Drag/Viscosity)</b>: opposes motion in liquid or gas. Aerodynamic shape reduces this.</li>
      </ul>

      <h3>2. Order of Friction (Highest to Lowest)</h3>
      <p><b>Static > Kinetic > Rolling > Fluid</b></p>

      <h3>3. Laws of Friction</h3>
      <ul>
        <li>Friction is independent of area of contact (for given materials).</li>
        <li>Friction is directly proportional to normal force pressing surfaces together.</li>
        <li>Coefficient of friction (μ) depends on materials, not on weight or speed.</li>
        <li>Kinetic friction is independent of velocity (approximately).</li>
      </ul>

      <h3>4. Friction Formula</h3>
      <p><b>F = μ × N</b></p>
      <p>where F = frictional force, μ = coefficient of friction, N = normal force (= mg on horizontal surface).</p>

      <h3>5. Advantages of Friction</h3>
      <ul>
        <li>Walking is possible (foot grips floor).</li>
        <li>Vehicles move (tyres grip road).</li>
        <li>Writing with pen / pencil.</li>
        <li>Brakes work due to friction.</li>
        <li>Holding objects.</li>
        <li>Nails and screws stay in place.</li>
      </ul>

      <h3>6. Disadvantages of Friction</h3>
      <ul>
        <li>Wear and tear of machinery.</li>
        <li>Loss of energy as heat.</li>
        <li>Lower efficiency of machines.</li>
        <li>Friction in engines reduces power output.</li>
      </ul>

      <h3>7. Methods to Reduce Friction</h3>
      <ul>
        <li><b>Polishing</b>: makes surfaces smooth.</li>
        <li><b>Lubrication</b>: oil/grease between moving parts (reduces direct contact).</li>
        <li><b>Ball bearings</b>: convert sliding to rolling friction.</li>
        <li><b>Streamlining</b>: shape reduces fluid friction (e.g., aircraft, fish).</li>
        <li><b>Air cushion</b>: hovercraft uses air to lift over water.</li>
      </ul>

      <h3>8. Methods to Increase Friction</h3>
      <ul>
        <li>Treaded tyres (grip wet roads).</li>
        <li>Sole of shoes with grooves.</li>
        <li>Sand on icy roads.</li>
        <li>Rough surface on stairs.</li>
      </ul>

      <h3>9. Real-Life Applications</h3>
      <ul>
        <li><b>Sparks from grinding wheel</b>: friction generates heat.</li>
        <li><b>Matchstick lighting</b>: friction provides ignition heat.</li>
        <li><b>Brake pads</b>: friction converts kinetic energy to heat.</li>
        <li><b>Meteors burning in atmosphere</b>: air friction.</li>
        <li><b>Belt drives</b>: friction transmits power.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Friction is a <b>contact force</b>.</li>
        <li>Without friction, walking is impossible (try walking on perfectly smooth ice!).</li>
        <li>Lubricants do NOT eliminate friction — they reduce it.</li>
        <li>Rolling friction is much less than sliding friction → wheels were a great invention.</li>
        <li>Coefficient of friction is dimensionless (no units).</li>
      </ul>
    `,
    mcq: [
      { q: "Force that opposes motion between surfaces in contact:", opts: ["Gravity", "Friction", "Inertia", "Magnetic"], a: 1, ex: "Friction." },
      { q: "Largest type of friction:", opts: ["Static", "Kinetic", "Rolling", "Fluid"], a: 0, ex: "Static > Kinetic > Rolling > Fluid." },
      { q: "Smallest type of friction:", opts: ["Static", "Kinetic", "Rolling", "Fluid"], a: 3, ex: "Fluid friction (drag) is least typically; but among solid frictions, rolling is least." },
      { q: "Ball bearings work by:", opts: ["Increasing friction", "Converting sliding to rolling friction", "Removing all friction", "Adding lubrication"], a: 1, ex: "Reduce friction by rolling." },
      { q: "Friction depends on:", opts: ["Area only", "Mass × g and surface materials", "Speed only", "Time"], a: 1, ex: "Normal force and surface types." },
      { q: "Friction in liquids is called:", opts: ["Drag", "Viscosity", "Both A and B", "Inertia"], a: 2, ex: "Drag/viscosity." },
      { q: "Coefficient of friction is:", opts: ["A unit", "Dimensionless", "Has SI unit Newton", "Constant for all"], a: 1, ex: "Dimensionless." },
      { q: "Treaded tyres are used to:", opts: ["Reduce friction", "Increase friction", "Smooth ride", "Look better"], a: 1, ex: "Better grip = more friction." },
      { q: "Lubrication reduces friction by:", opts: ["Adding mass", "Preventing direct contact", "Cooling", "Increasing area"], a: 1, ex: "Oil layer prevents direct contact." },
      { q: "Walking is possible due to:", opts: ["Gravity only", "Friction between foot and ground", "Air pressure", "Centripetal force"], a: 1, ex: "Without friction we'd slide." },
      { q: "When brakes are applied, friction converts kinetic energy into:", opts: ["Sound", "Heat", "Light", "Pressure"], a: 1, ex: "Heat (sometimes you smell burning brakes)." },
      { q: "Streamlining reduces:", opts: ["Static friction", "Rolling friction", "Fluid friction", "All"], a: 2, ex: "Aerodynamic drag." },
      { q: "Friction is independent of:", opts: ["Mass", "Materials", "Area of contact (approximately)", "Normal force"], a: 2, ex: "Friction laws state independent of area." },
      { q: "Matchstick ignites due to:", opts: ["Magnetic effect", "Friction heat", "Electric spark", "Chemical reaction only"], a: 1, ex: "Friction generates heat triggering ignition." },
      { q: "Coefficient of static friction is generally:", opts: ["Less than kinetic", "Greater than kinetic", "Equal to kinetic", "Zero"], a: 1, ex: "Static > Kinetic." },
      { q: "Sand is sprinkled on icy roads to:", opts: ["Reduce friction", "Increase friction", "Melt ice", "Make road smooth"], a: 1, ex: "Sand increases friction → better grip." },
      { q: "Friction force is:", opts: ["Conservative", "Non-conservative", "Both", "Neither"], a: 1, ex: "Energy lost as heat is irrecoverable." },
      { q: "Hovercraft reduces friction by:", opts: ["Lubrication", "Air cushion", "Streamlining only", "Ball bearings"], a: 1, ex: "Lifts on cushion of air over water." },
      { q: "Meteors burn due to:", opts: ["Air friction", "Magnetic field", "Solar radiation", "Gravity"], a: 0, ex: "Friction with atmosphere generates heat." },
      { q: "Without friction, machines would:", opts: ["Last longer", "Be efficient but useless (no grip)", "Run hotter", "Not exist"], a: 1, ex: "No grip → belts slip, brakes fail." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 4. WORK, ENERGY & POWER
  // ───────────────────────────────────────────────────────────────
  T["sci-phy-work-energy"] = {
    body: `
      <h2>Work, Energy & Power</h2>

      <h3>1. Work</h3>
      <p><b>Work</b> is done when a force causes displacement. <b>W = F × d × cos θ</b></p>
      <ul>
        <li>SI unit: <b>Joule (J)</b>; 1 J = 1 N·m.</li>
        <li>CGS unit: Erg; 1 J = 10⁷ erg.</li>
        <li>Work is scalar.</li>
        <li>Work is zero if: force is zero, OR displacement is zero, OR force perpendicular to displacement.</li>
      </ul>
      <p>Examples of zero work: carrying a bag on horizontal road (force is upward, motion is forward).</p>

      <h3>2. Energy</h3>
      <p><b>Energy</b> = capacity to do work. Same units as work (Joule).</p>

      <h4>Forms of Energy</h4>
      <ul>
        <li><b>Kinetic Energy (KE)</b> = ½mv². Energy of motion.</li>
        <li><b>Potential Energy (PE)</b>: stored energy due to position or configuration.
          <ul>
            <li>Gravitational PE = mgh.</li>
            <li>Elastic PE = ½kx² (spring).</li>
          </ul>
        </li>
        <li><b>Mechanical Energy</b> = KE + PE.</li>
        <li><b>Thermal/Heat Energy</b>: random kinetic energy of molecules.</li>
        <li><b>Chemical Energy</b>: stored in bonds (food, fuel, battery).</li>
        <li><b>Electrical Energy</b>: due to moving charges.</li>
        <li><b>Nuclear Energy</b>: from atomic nuclei (fission, fusion).</li>
        <li><b>Sound Energy</b>: vibrations through medium.</li>
        <li><b>Light/Radiant Energy</b>: electromagnetic.</li>
      </ul>

      <h3>3. Law of Conservation of Energy</h3>
      <p>Energy can neither be created nor destroyed; only transformed from one form to another. Total energy of an isolated system is constant.</p>
      <p>Examples:</p>
      <ul>
        <li>Falling object: PE → KE.</li>
        <li>Bulb: Electrical → Light + Heat.</li>
        <li>Battery: Chemical → Electrical.</li>
        <li>Photosynthesis: Light → Chemical.</li>
      </ul>

      <h3>4. Power</h3>
      <p><b>Power = Work / Time = Energy / Time.</b></p>
      <ul>
        <li>SI unit: <b>Watt (W)</b>; 1 W = 1 J/s.</li>
        <li>1 HP = 746 W.</li>
        <li>1 kW = 1000 W.</li>
        <li>1 kWh (1 Unit) = 3.6 × 10⁶ J (electric billing unit).</li>
      </ul>

      <h3>5. Work-Energy Theorem</h3>
      <p>Net work done on an object = change in its kinetic energy. W = ΔKE = ½m(v² − u²).</p>

      <h3>6. Important Concepts</h3>
      <ul>
        <li><b>Negative work</b>: force opposite to motion (friction).</li>
        <li><b>Conservative forces</b>: gravity, spring force (work doesn't depend on path).</li>
        <li><b>Non-conservative forces</b>: friction, air resistance (dissipate energy as heat).</li>
        <li><b>Doubling speed</b> quadruples KE (KE ∝ v²).</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>1 calorie = 4.184 J.</li>
        <li>1 electron-volt (eV) = 1.6 × 10⁻¹⁹ J (atomic-scale unit).</li>
        <li>Mass-energy equivalence: E = mc² (nuclear).</li>
        <li>Power of a 60 W bulb in 1 hour consumes 60 × 3600 J = 216,000 J = 0.06 kWh.</li>
        <li>Calorie (food) is actually kcal — 1 food calorie = 1000 physics calories.</li>
      </ul>
    `,
    mcq: [
      { q: "SI unit of work:", opts: ["Newton", "Joule", "Watt", "Pascal"], a: 1, ex: "Joule = N × m." },
      { q: "Energy of motion:", opts: ["Potential", "Kinetic", "Heat", "Chemical"], a: 1, ex: "Kinetic energy = ½mv²." },
      { q: "If speed doubles, KE becomes:", opts: ["2 times", "4 times", "Same", "Half"], a: 1, ex: "KE ∝ v²." },
      { q: "Energy can:", opts: ["Be created", "Be destroyed", "Only change form", "Vanish"], a: 2, ex: "Conservation of energy." },
      { q: "Battery energy form:", opts: ["Mechanical", "Chemical", "Nuclear", "Sound"], a: 1, ex: "Chemical energy in cells." },
      { q: "Power unit:", opts: ["Joule", "Watt", "Newton", "Pascal"], a: 1, ex: "Watt = J/s." },
      { q: "1 HP =", opts: ["546 W", "746 W", "846 W", "1000 W"], a: 1, ex: "746 W." },
      { q: "Photosynthesis converts:", opts: ["Heat→Chemical", "Light→Chemical", "Sound→Light", "Chemical→Electric"], a: 1, ex: "Sunlight → glucose (stored chemical energy)." },
      { q: "Work done is zero when:", opts: ["Force is zero", "Displacement is zero", "Force ⊥ motion", "All correct"], a: 3, ex: "Any of these gives W=0." },
      { q: "Carrying a bag horizontally — work is:", opts: ["Maximum", "Zero", "Negative", "Infinity"], a: 1, ex: "Force ⊥ motion." },
      { q: "1 calorie equals:", opts: ["4.184 J", "10 J", "1000 J", "0.1 J"], a: 0, ex: "4.184 Joules." },
      { q: "PE of object at height h:", opts: ["mgh", "½mv²", "mc²", "mh"], a: 0, ex: "PE = mgh." },
      { q: "Falling object converts:", opts: ["PE→KE", "KE→PE", "Sound→KE", "Heat→PE"], a: 0, ex: "Potential to Kinetic." },
      { q: "1 kWh =", opts: ["1000 J", "3.6 × 10⁶ J", "1 W", "60 J"], a: 1, ex: "kWh = electric billing unit." },
      { q: "Nuclear energy comes from:", opts: ["Atom's nucleus", "Friction", "Combustion", "Magnetism"], a: 0, ex: "Fission/fusion." },
      { q: "Friction force does:", opts: ["Positive work", "Negative work", "Zero work", "Variable"], a: 1, ex: "Friction opposes motion → negative." },
      { q: "Energy of food is measured in:", opts: ["kcal (Calories)", "Newton", "Pascal", "Hz"], a: 0, ex: "Food calories = kcal." },
      { q: "Wind energy is form of:", opts: ["Solar (indirectly)", "Nuclear", "Chemical", "Light"], a: 0, ex: "Wind = uneven solar heating." },
      { q: "Spring energy is:", opts: ["Kinetic", "Elastic PE", "Heat", "Sound"], a: 1, ex: "Elastic potential energy." },
      { q: "1 erg =", opts: ["10⁻⁷ J", "10⁷ J", "1 J", "0.1 J"], a: 0, ex: "1 J = 10⁷ erg." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 5. GRAVITATION
  // ───────────────────────────────────────────────────────────────
  T["sci-phy-gravitation"] = {
    body: `
      <h2>Gravitation</h2>

      <h3>1. Newton's Universal Law of Gravitation</h3>
      <p>Every body in the universe attracts every other body with a force directly proportional to the product of their masses and inversely proportional to the square of distance between them.</p>
      <p><b>F = G × (m₁ × m₂) / r²</b></p>
      <p>G = Universal Gravitational Constant = 6.67 × 10⁻¹¹ N·m²/kg² (measured by Cavendish).</p>

      <h3>2. Acceleration due to Gravity (g)</h3>
      <ul>
        <li>g = GM / R² ≈ 9.8 m/s² on Earth's surface.</li>
        <li>g is independent of mass of falling object.</li>
        <li>g varies with height: <b>decreases</b> as you go up (g_h = g(1 − 2h/R)).</li>
        <li>g varies with depth: <b>decreases</b> as you go inside earth (zero at centre).</li>
        <li>g is <b>maximum at poles</b>, <b>minimum at equator</b> (earth is oblate spheroid; equator is farther from centre).</li>
        <li>g on Moon ≈ g_earth / 6 (about 1.62 m/s²).</li>
        <li>g on Jupiter > g_earth (about 24.8 m/s²).</li>
      </ul>

      <h3>3. Mass vs Weight</h3>
      <table>
        <tr><th>Mass</th><th>Weight</th></tr>
        <tr><td>Amount of matter in object</td><td>Force of gravity on object</td></tr>
        <tr><td>Same everywhere</td><td>Varies with location</td></tr>
        <tr><td>Scalar</td><td>Vector (always downward)</td></tr>
        <tr><td>SI unit: kg</td><td>SI unit: Newton (N)</td></tr>
        <tr><td>Measured by physical balance</td><td>Measured by spring balance</td></tr>
      </table>
      <p>W = m × g</p>

      <h3>4. Free Fall</h3>
      <ul>
        <li>In vacuum, all bodies fall at same rate regardless of mass (Galileo's experiment).</li>
        <li>Astronauts experience weightlessness in orbit — not absence of gravity, but free fall around earth.</li>
        <li>Newton's feather-and-coin experiment proved this.</li>
      </ul>

      <h3>5. Escape Velocity</h3>
      <p>Minimum velocity needed to escape gravity of a celestial body permanently.</p>
      <ul>
        <li>v_escape = √(2gR).</li>
        <li>Earth: ~11.2 km/s.</li>
        <li>Moon: 2.4 km/s (low, that's why no atmosphere).</li>
        <li>Jupiter: ~60 km/s.</li>
        <li>Black hole: greater than speed of light (nothing escapes).</li>
      </ul>

      <h3>6. Orbital Velocity</h3>
      <p>Velocity needed for satellite to revolve around earth.</p>
      <ul>
        <li>v_orbital ≈ 7.9 km/s (just above earth surface).</li>
        <li>v_escape = √2 × v_orbital.</li>
        <li>Geostationary orbit: ~36,000 km altitude; period = 24 hours; stays over same point.</li>
      </ul>

      <h3>7. Kepler's Laws of Planetary Motion</h3>
      <ul>
        <li><b>1st Law (Orbits)</b>: planets move in elliptical orbits with Sun at one focus.</li>
        <li><b>2nd Law (Areas)</b>: line joining planet to sun sweeps equal areas in equal times → planet moves faster when closer to sun.</li>
        <li><b>3rd Law (Periods)</b>: T² ∝ a³ (T = period, a = semi-major axis).</li>
      </ul>

      <h3>8. Interesting Facts</h3>
      <ul>
        <li>Tides are due to Moon's gravity (Sun also contributes).</li>
        <li>Gravity is weakest of 4 fundamental forces (much weaker than electromagnetic, strong, weak).</li>
        <li>Black hole: gravity so strong even light can't escape.</li>
        <li>Newton derived gravity by observing falling apple.</li>
        <li>Einstein's General Relativity describes gravity as curvature of spacetime.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>g is maximum at poles, minimum at equator.</li>
        <li>Weight at centre of earth = 0 (g = 0).</li>
        <li>Weight on moon = (1/6) × weight on earth.</li>
        <li>Mass never changes; weight does.</li>
        <li>"Universal" in Newton's law because it applies everywhere in universe.</li>
      </ul>
    `,
    mcq: [
      { q: "Universal gravitational constant G unit:", opts: ["N·m/kg", "N·m²/kg²", "N/kg²", "kg·m²"], a: 1, ex: "N·m²/kg²." },
      { q: "g is maximum at:", opts: ["Equator", "Poles", "Surface", "Mountain"], a: 1, ex: "Poles (closer to centre)." },
      { q: "Weight on moon is approximately:", opts: ["1/2 earth", "1/4 earth", "1/6 earth", "Same"], a: 2, ex: "g_moon ≈ g/6." },
      { q: "Escape velocity from earth:", opts: ["7.9 km/s", "11.2 km/s", "1 km/s", "30 km/s"], a: 1, ex: "11.2 km/s." },
      { q: "Orbital velocity (near earth):", opts: ["7.9 km/s", "11.2 km/s", "30 km/s", "5 km/s"], a: 0, ex: "~7.9 km/s." },
      { q: "Mass of object on moon vs earth:", opts: ["1/6", "Same", "6 times", "Zero"], a: 1, ex: "Mass doesn't change." },
      { q: "Geostationary orbit altitude approx:", opts: ["3,000 km", "6,000 km", "36,000 km", "100,000 km"], a: 2, ex: "~35,786 km." },
      { q: "Kepler's 2nd law states planets sweep:", opts: ["Equal distances", "Equal angles", "Equal areas in equal times", "Equal speeds"], a: 2, ex: "Law of areas." },
      { q: "Weight of object at centre of earth:", opts: ["Maximum", "Zero", "Negative", "Same as surface"], a: 1, ex: "g = 0 at centre." },
      { q: "Tides occur due to:", opts: ["Sun only", "Moon's gravity", "Earth's rotation only", "Wind"], a: 1, ex: "Moon's gravity (Sun also contributes)." },
      { q: "Spring balance measures:", opts: ["Mass", "Weight", "Both", "Force"], a: 1, ex: "Spring balance → weight." },
      { q: "Galileo proved all bodies fall at:", opts: ["Different rates by mass", "Same rate in vacuum", "Different in vacuum", "Variable"], a: 1, ex: "Same regardless of mass." },
      { q: "Force of attraction depends on:", opts: ["m₁×m₂/r²", "m₁+m₂", "m₁/r", "m₁×r²"], a: 0, ex: "Newton's law." },
      { q: "If distance doubles, gravitational force becomes:", opts: ["Half", "Quarter", "Double", "Same"], a: 1, ex: "F ∝ 1/r² → 1/4." },
      { q: "Weakest fundamental force:", opts: ["Gravity", "Electromagnetic", "Strong", "Weak"], a: 0, ex: "Gravity is weakest." },
      { q: "Astronauts in orbit feel weightless because:", opts: ["No gravity", "In free fall around Earth", "Floating in air", "Earth too far"], a: 1, ex: "Free fall — gravity still present." },
      { q: "Black hole has gravity so strong that:", opts: ["Light can't escape", "Time slows", "Both A and B", "Nothing special"], a: 2, ex: "Both." },
      { q: "Escape velocity from moon:", opts: ["2.4 km/s", "11.2 km/s", "5 km/s", "7.9 km/s"], a: 0, ex: "About 2.4 km/s." },
      { q: "Kepler's 3rd law:", opts: ["T ∝ a", "T² ∝ a", "T² ∝ a³", "T ∝ a²"], a: 2, ex: "T² = a³." },
      { q: "Acceleration due to gravity on Jupiter:", opts: ["Same as earth", "Half", "About 2.5x earth", "Zero"], a: 2, ex: "~24.8 m/s²." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 6. GENERAL PROPERTIES OF MATTER
  // ───────────────────────────────────────────────────────────────
  T["sci-phy-properties"] = {
    body: `
      <h2>General Properties of Matter</h2>

      <h3>1. Elasticity</h3>
      <ul>
        <li>Property to regain original shape after removing deforming force.</li>
        <li><b>Stress</b> = Force / Area. Unit: N/m² (Pa).</li>
        <li><b>Strain</b> = Change in size / Original size. Dimensionless.</li>
        <li><b>Hooke's Law</b>: stress ∝ strain (within elastic limit). Stress / Strain = elastic modulus.</li>
        <li>Types: Young's modulus (length), Bulk modulus (volume), Shear (rigidity) modulus.</li>
        <li>Steel is more elastic than rubber (regains shape better).</li>
        <li><b>Elastic limit</b>: maximum stress beyond which permanent deformation occurs.</li>
      </ul>

      <h3>2. Surface Tension</h3>
      <ul>
        <li>Property of liquid surface acting like a stretched elastic membrane.</li>
        <li>Force per unit length acting on surface; unit: N/m.</li>
        <li>Caused by cohesion between liquid molecules.</li>
        <li>Decreases with temperature.</li>
        <li>Soap and detergent reduce surface tension (helps cleaning).</li>
      </ul>
      <p>Examples:</p>
      <ul>
        <li>Water drops are spherical (sphere has minimum surface area).</li>
        <li>Insects (water striders) walk on water.</li>
        <li>Mercury beads up on glass.</li>
        <li>Oil spreads on water (lower surface tension).</li>
      </ul>

      <h3>3. Capillarity</h3>
      <ul>
        <li>Rise or fall of liquid in narrow tube (capillary).</li>
        <li>Water <b>rises</b> in glass capillary (adhesion > cohesion).</li>
        <li>Mercury <b>falls</b> in glass capillary (cohesion > adhesion).</li>
        <li>Higher in narrower tube (h ∝ 1/r).</li>
      </ul>
      <p>Examples: oil rising in lamp wick, water rising in plant stems, blotting paper absorbing ink.</p>

      <h3>4. Viscosity</h3>
      <ul>
        <li>Internal friction in fluids; resistance to flow.</li>
        <li>Unit: Pa·s or poise.</li>
        <li>Honey is more viscous than water; tar is even more.</li>
        <li>Liquids: viscosity decreases with temperature (heat honey → flows easier).</li>
        <li>Gases: viscosity increases with temperature.</li>
        <li>Stokes' Law: terminal velocity reached by ball in viscous fluid.</li>
      </ul>

      <h3>5. Density</h3>
      <ul>
        <li>Mass per unit volume. ρ = m/V. Unit: kg/m³.</li>
        <li>Water density = 1000 kg/m³ = 1 g/cm³ at 4°C (maximum).</li>
        <li>Density of ice (920 kg/m³) less than water → ice floats.</li>
        <li>Mercury density = 13.6 g/cm³.</li>
      </ul>

      <h3>6. Pressure</h3>
      <ul>
        <li>Force per unit area. P = F/A. Unit: Pascal (Pa) = N/m².</li>
        <li>Pressure increases with depth in liquid: P = ρgh.</li>
        <li>Atmospheric pressure at sea level: 1 atm ≈ 1.013 × 10⁵ Pa.</li>
        <li><b>Pascal's Law</b>: pressure applied to enclosed fluid is transmitted equally in all directions.<br>(Used in hydraulic brakes, hydraulic lifts.)</li>
      </ul>

      <h3>7. Archimedes' Principle (Buoyancy)</h3>
      <ul>
        <li>An object immersed in fluid experiences an upward force = weight of fluid displaced.</li>
        <li>Object floats if density < fluid density.</li>
        <li>Ships float despite being made of dense metal because their hollow shape displaces enough water.</li>
        <li>Eureka! moment of Archimedes.</li>
      </ul>

      <h3>8. Bernoulli's Principle</h3>
      <ul>
        <li>Faster moving fluid has lower pressure.</li>
        <li>Aircraft wings: curved top makes air move faster → lower pressure above → lift.</li>
        <li>Spinning ball curves in air (Magnus effect).</li>
        <li>Atomizer (sprayer) works on this principle.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Mercury barometer column: ~76 cm at sea level (atmospheric pressure).</li>
        <li>Pressure cookers cook faster because higher pressure raises boiling point of water.</li>
        <li>Water expands when freezing (anomalous behavior) — bursts pipes in winter.</li>
        <li>Steel is more elastic than rubber.</li>
        <li>Pascal's law: hydraulic press, brake.</li>
      </ul>
    `,
    mcq: [
      { q: "Density of water at 4°C:", opts: ["1000 kg/m³", "100 kg/m³", "920 kg/m³", "500 kg/m³"], a: 0, ex: "Max density at 4°C." },
      { q: "Pressure unit:", opts: ["Newton", "Pascal", "Joule", "Watt"], a: 1, ex: "Pa = N/m²." },
      { q: "Water rises in capillary due to:", opts: ["Cohesion > adhesion", "Adhesion > cohesion", "Gravity", "Pressure"], a: 1, ex: "Adhesion (water-glass) wins." },
      { q: "Archimedes' principle relates to:", opts: ["Buoyancy", "Friction", "Heat", "Gravity"], a: 0, ex: "Buoyant force = weight of displaced fluid." },
      { q: "Ice floats on water because:", opts: ["Ice is colder", "Ice is denser", "Ice is less dense", "Pressure"], a: 2, ex: "Ice density < water density." },
      { q: "Bernoulli's principle: faster fluid has:", opts: ["Higher pressure", "Lower pressure", "Same pressure", "No pressure"], a: 1, ex: "Speed up → pressure down." },
      { q: "Hydraulic brake uses:", opts: ["Newton's law", "Pascal's law", "Bernoulli's law", "Hooke's law"], a: 1, ex: "Pressure transmitted in fluid." },
      { q: "More elastic of the two:", opts: ["Rubber", "Steel", "Both same", "Glass"], a: 1, ex: "Steel has higher Young's modulus." },
      { q: "Atmospheric pressure at sea level:", opts: ["1 atm", "2 atm", "0.5 atm", "10 atm"], a: 0, ex: "1 atm = 76 cm Hg." },
      { q: "Soap reduces:", opts: ["Mass", "Viscosity", "Surface tension", "Density"], a: 2, ex: "Soap lowers surface tension for cleaning." },
      { q: "Ships float because:", opts: ["Steel is light", "Hollow shape displaces enough water", "Magic", "Air inside"], a: 1, ex: "Average density of ship < water." },
      { q: "Liquid viscosity with temperature:", opts: ["Increases", "Decreases", "Constant", "Becomes zero"], a: 1, ex: "Heat → less viscous (honey flows easier)." },
      { q: "Surface tension causes water drops to be:", opts: ["Cubical", "Spherical", "Flat", "Random"], a: 1, ex: "Sphere minimizes surface area." },
      { q: "Mercury's density:", opts: ["1 g/cm³", "13.6 g/cm³", "8 g/cm³", "5 g/cm³"], a: 1, ex: "13.6 g/cm³ (heavy)." },
      { q: "Mercury in glass capillary:", opts: ["Rises", "Falls", "Stays same", "Boils"], a: 1, ex: "Cohesion > adhesion → falls." },
      { q: "Stress unit:", opts: ["N", "N/m²", "J", "Pa·s"], a: 1, ex: "N/m² = Pascal." },
      { q: "Aircraft lift due to:", opts: ["Engine power only", "Bernoulli's principle", "Density", "Buoyancy"], a: 1, ex: "Lower pressure above wing." },
      { q: "Pressure cooker cooks faster because:", opts: ["More heat", "Higher pressure raises boiling point", "Less air", "Magnet"], a: 1, ex: "Higher BP → faster cooking." },
      { q: "Hooke's law:", opts: ["F=ma", "Stress ∝ Strain", "F=qE", "F=GMm/r²"], a: 1, ex: "Within elastic limit." },
      { q: "1 atm in pascal:", opts: ["10² Pa", "10⁵ Pa (approx)", "10⁷ Pa", "10⁹ Pa"], a: 1, ex: "1 atm ≈ 1.013×10⁵ Pa." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 7. DENSITY & RELATIVE DENSITY
  // ───────────────────────────────────────────────────────────────
  T["sci-phy-density"] = {
    body: `
      <h2>Density & Relative Density</h2>

      <h3>1. Density</h3>
      <ul>
        <li><b>Definition</b>: mass per unit volume.</li>
        <li><b>Formula</b>: ρ (rho) = mass / volume = m/V.</li>
        <li>SI unit: kg/m³.</li>
        <li>CGS unit: g/cm³ (1 g/cm³ = 1000 kg/m³).</li>
      </ul>

      <h3>2. Relative Density (Specific Gravity)</h3>
      <ul>
        <li><b>Definition</b>: ratio of density of substance to density of water at 4°C.</li>
        <li><b>Formula</b>: R.D. = ρ_substance / ρ_water.</li>
        <li><b>Dimensionless</b> (no units).</li>
        <li>R.D. of water = 1 by definition.</li>
        <li>Measured by <b>hydrometer</b>.</li>
        <li>If R.D. < 1: substance floats on water.</li>
        <li>If R.D. > 1: substance sinks.</li>
      </ul>

      <h3>3. Common Densities (Approx, in g/cm³)</h3>
      <table>
        <tr><th>Substance</th><th>Density (g/cm³)</th></tr>
        <tr><td>Air</td><td>0.0012</td></tr>
        <tr><td>Cork</td><td>0.24</td></tr>
        <tr><td>Ice</td><td>0.92</td></tr>
        <tr><td>Water (4°C)</td><td>1.000</td></tr>
        <tr><td>Sea water</td><td>1.025</td></tr>
        <tr><td>Glycerin</td><td>1.26</td></tr>
        <tr><td>Aluminium</td><td>2.7</td></tr>
        <tr><td>Iron</td><td>7.8</td></tr>
        <tr><td>Copper</td><td>8.96</td></tr>
        <tr><td>Silver</td><td>10.5</td></tr>
        <tr><td>Lead</td><td>11.3</td></tr>
        <tr><td>Mercury</td><td>13.6</td></tr>
        <tr><td>Gold</td><td>19.3</td></tr>
        <tr><td>Osmium (densest natural metal)</td><td>22.6</td></tr>
        <tr><td>Sun (average)</td><td>1.4</td></tr>
        <tr><td>Earth (average)</td><td>5.5</td></tr>
      </table>

      <h3>4. Anomalous Behaviour of Water</h3>
      <ul>
        <li>Most substances <b>expand</b> on heating; water also expands above 4°C.</li>
        <li>But <b>below 4°C</b>, water expands on cooling (instead of contracting).</li>
        <li>Maximum density at 4°C → that's why fish survive in frozen lakes (bottom water stays at 4°C).</li>
        <li>Ice is less dense than water → floats.</li>
        <li>Water pipes burst in winter because ice expands.</li>
      </ul>

      <h3>5. Density and Floating</h3>
      <ul>
        <li>Object floats if its density < liquid density.</li>
        <li>Ship floats because average density (including hollow space) < water.</li>
        <li>Submarines change density by filling/emptying ballast tanks.</li>
        <li>Iron sinks in water but floats in mercury (mercury is denser).</li>
      </ul>

      <h3>6. Hydrometer</h3>
      <ul>
        <li>Instrument to measure relative density of liquids.</li>
        <li>Used to test purity of milk (lactometer is a special hydrometer).</li>
        <li>Tested for battery acid (sulfuric acid concentration).</li>
        <li>Brewery uses hydrometer for alcohol content.</li>
      </ul>

      <h3>7. Calculations</h3>
      <p>If mass of 50 cm³ object is 100 g, density = 100/50 = 2 g/cm³.</p>
      <p>R.D. = 2 / 1 = 2 (so it will sink in water).</p>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Gold is denser than silver — gold sinks faster.</li>
        <li>Hot water rises (less dense); cold water sinks — drives ocean currents.</li>
        <li>Hot air rises (less dense) — hot air balloons.</li>
        <li>Dead Sea: high salt → high density → bodies float easily.</li>
        <li>Diesel less dense than water → floats; sugar denser than water → sinks.</li>
      </ul>
    `,
    mcq: [
      { q: "Density formula:", opts: ["mass × volume", "mass / volume", "volume / mass", "mass + volume"], a: 1, ex: "ρ = m/V." },
      { q: "SI unit of density:", opts: ["g/cm³", "kg/m³", "kg·m³", "g/m³"], a: 1, ex: "kg/m³." },
      { q: "Density of water at 4°C:", opts: ["920 kg/m³", "1000 kg/m³", "1025 kg/m³", "1260 kg/m³"], a: 1, ex: "1000 kg/m³." },
      { q: "Densest natural metal:", opts: ["Gold", "Platinum", "Mercury", "Osmium"], a: 3, ex: "Osmium ~22.6 g/cm³." },
      { q: "Relative density of water:", opts: ["0", "1", "100", "1000"], a: 1, ex: "By definition." },
      { q: "Ice floats because:", opts: ["Ice is hotter", "Ice has lower density", "Surface tension", "Magic"], a: 1, ex: "Ice 0.92 < water 1.0." },
      { q: "Hydrometer measures:", opts: ["Pressure", "Relative density of liquids", "Temperature", "Humidity"], a: 1, ex: "Specific gravity." },
      { q: "Density of mercury:", opts: ["1 g/cm³", "5 g/cm³", "13.6 g/cm³", "19.3 g/cm³"], a: 2, ex: "13.6 g/cm³." },
      { q: "Density of gold:", opts: ["8 g/cm³", "13.6 g/cm³", "19.3 g/cm³", "22.6 g/cm³"], a: 2, ex: "19.3 g/cm³." },
      { q: "If R.D. > 1, the substance:", opts: ["Floats on water", "Sinks in water", "Dissolves", "Burns"], a: 1, ex: "Denser than water." },
      { q: "Bodies float in Dead Sea easily because:", opts: ["No gravity", "High salt → high density", "Less air", "Sun heat"], a: 1, ex: "Water density very high." },
      { q: "Water is densest at:", opts: ["0°C", "4°C", "100°C", "−4°C"], a: 1, ex: "4°C (anomalous)." },
      { q: "Fish survive in frozen lakes because:", opts: ["Ice layer insulates and bottom water at 4°C", "Fish hibernate", "Heat from sun", "Air bubbles"], a: 0, ex: "Anomalous density of water." },
      { q: "Hot air balloon rises because:", opts: ["Heat magic", "Hot air is less dense than cool air", "Wind", "Gases react"], a: 1, ex: "Buoyancy due to density difference." },
      { q: "Average density of Earth:", opts: ["1.0 g/cm³", "2.5 g/cm³", "5.5 g/cm³", "10 g/cm³"], a: 2, ex: "~5.5 g/cm³ (rocks + iron core)." },
      { q: "Lactometer tests:", opts: ["Acidity", "Purity of milk", "Sugar", "Hot beverages"], a: 1, ex: "Special hydrometer for milk." },
      { q: "If 200 g substance occupies 100 cm³, density:", opts: ["1 g/cm³", "2 g/cm³", "0.5 g/cm³", "20 g/cm³"], a: 1, ex: "200/100 = 2." },
      { q: "Iron in mercury:", opts: ["Sinks", "Floats", "Dissolves", "Reacts"], a: 1, ex: "Iron (7.8) < mercury (13.6) → floats." },
      { q: "Density of sea water vs pure water:", opts: ["Less", "More", "Equal", "Half"], a: 1, ex: "Salt increases density." },
      { q: "Cork density:", opts: ["Lighter than water", "Heavier than water", "Same as water", "Heavier than iron"], a: 0, ex: "~0.24 g/cm³ → floats." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 8. WAVE MOTION
  // ───────────────────────────────────────────────────────────────
  T["sci-phy-wave-motion"] = {
    body: `
      <h2>Wave Motion</h2>
      <p>A <b>wave</b> is a disturbance that transfers energy from one place to another without transferring matter.</p>

      <h3>1. Types of Waves</h3>

      <h4>(a) Based on Medium</h4>
      <ul>
        <li><b>Mechanical Waves</b>: need a medium. Examples: sound, water waves, seismic, waves on a string.</li>
        <li><b>Electromagnetic (EM) Waves</b>: do NOT need a medium; travel through vacuum. Examples: light, radio, X-rays, microwaves.</li>
        <li><b>Matter Waves</b>: associated with moving particles (de Broglie waves).</li>
      </ul>

      <h4>(b) Based on Direction of Vibration</h4>
      <ul>
        <li><b>Transverse Waves</b>: particles vibrate perpendicular to wave direction. Examples: light waves, water surface waves, string waves.</li>
        <li><b>Longitudinal Waves</b>: particles vibrate parallel to wave direction. Examples: sound waves in air, P-waves (primary seismic).</li>
      </ul>

      <h3>2. Wave Parameters</h3>
      <ul>
        <li><b>Wavelength (λ)</b>: distance between two consecutive crests (or troughs). Unit: metre.</li>
        <li><b>Frequency (f or ν)</b>: number of waves per second. Unit: Hertz (Hz).</li>
        <li><b>Period (T)</b>: time for one complete wave. T = 1/f.</li>
        <li><b>Amplitude (A)</b>: maximum displacement from rest position. Determines loudness/brightness.</li>
        <li><b>Speed (v)</b>: distance covered per second. <b>v = f × λ</b>.</li>
      </ul>

      <h3>3. Wave Phenomena</h3>

      <h4>(a) Reflection</h4>
      <p>Wave bounces back from a barrier. Angle of incidence = angle of reflection. Examples: echo (sound), mirror image (light).</p>

      <h4>(b) Refraction</h4>
      <p>Bending of wave when it enters a different medium (different speed). Examples: stick in water appears bent, mirage.</p>

      <h4>(c) Diffraction</h4>
      <p>Bending of waves around obstacles or through small openings. Why we can hear someone around a corner.</p>

      <h4>(d) Interference</h4>
      <p>When two waves overlap, their amplitudes add up:</p>
      <ul>
        <li>Constructive: crests align → bigger amplitude.</li>
        <li>Destructive: crest + trough → cancellation.</li>
      </ul>
      <p>Example: noise-cancelling headphones.</p>

      <h4>(e) Polarization</h4>
      <p>Restricting wave vibrations to one plane. Only transverse waves can be polarized (proof that light is transverse). Used in 3D glasses, sunglasses.</p>

      <h4>(f) Doppler Effect</h4>
      <p>Change in frequency due to relative motion of source and observer.</p>
      <ul>
        <li>Approaching source → higher pitch (frequency increases).</li>
        <li>Receding source → lower pitch (frequency decreases).</li>
        <li>Used: police radar, weather radar, astronomy (redshift/blueshift), ultrasound.</li>
      </ul>

      <h3>4. Electromagnetic Spectrum (Increasing Frequency)</h3>
      <ol>
        <li>Radio waves (longest λ, lowest f) — TV, radio broadcasting.</li>
        <li>Microwaves — microwave oven, radar, mobile communication.</li>
        <li>Infrared (IR) — heat radiation, remote controls, night vision.</li>
        <li>Visible Light (VIBGYOR: Violet to Red).</li>
        <li>Ultraviolet (UV) — sterilization, sun lamp, causes sunburn.</li>
        <li>X-rays — medical imaging.</li>
        <li>Gamma rays — cancer treatment, nuclear reactions.</li>
      </ol>
      <p>All EM waves travel at speed of light: c = 3 × 10⁸ m/s in vacuum.</p>

      <h3>5. Sound vs Light</h3>
      <table>
        <tr><th>Sound</th><th>Light</th></tr>
        <tr><td>Longitudinal</td><td>Transverse (EM)</td></tr>
        <tr><td>Needs medium</td><td>No medium needed</td></tr>
        <tr><td>~340 m/s in air</td><td>3 × 10⁸ m/s in vacuum</td></tr>
        <tr><td>Faster in solids</td><td>Slower in denser medium</td></tr>
      </table>

      <h3>🎯 Tips</h3>
      <ul>
        <li>v = fλ (universal wave equation).</li>
        <li>Sound is longitudinal; light is transverse.</li>
        <li>Doppler explains why train whistle sounds higher approaching, lower leaving.</li>
        <li>Polarization works only for transverse waves.</li>
        <li>Visible light wavelength: 400-700 nm.</li>
      </ul>
    `,
    mcq: [
      { q: "Wave equation:", opts: ["v = f × λ", "v = f / λ", "λ = f × v", "f = v × λ"], a: 0, ex: "v = fλ." },
      { q: "Sound wave is:", opts: ["Transverse", "Longitudinal", "EM", "Matter"], a: 1, ex: "Particles vibrate parallel." },
      { q: "Light wave is:", opts: ["Transverse", "Longitudinal", "Mechanical", "Matter"], a: 0, ex: "Transverse EM wave." },
      { q: "SI unit of frequency:", opts: ["Hertz", "Watt", "Joule", "Newton"], a: 0, ex: "Hz = 1/s." },
      { q: "Wave can be polarized if:", opts: ["Transverse only", "Longitudinal only", "Both", "Neither"], a: 0, ex: "Transverse only." },
      { q: "Doppler effect: train approaching has:", opts: ["Lower pitch", "Higher pitch", "Same pitch", "No sound"], a: 1, ex: "Frequency increases." },
      { q: "Speed of light in vacuum:", opts: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "340 m/s"], a: 1, ex: "c = 3 × 10⁸ m/s." },
      { q: "Bending around obstacle:", opts: ["Reflection", "Refraction", "Diffraction", "Interference"], a: 2, ex: "Diffraction." },
      { q: "Two waves cancel:", opts: ["Constructive interference", "Destructive interference", "Reflection", "Refraction"], a: 1, ex: "Destructive." },
      { q: "Highest frequency EM wave:", opts: ["Radio", "Visible", "X-ray", "Gamma"], a: 3, ex: "Gamma rays." },
      { q: "Microwave oven uses:", opts: ["Radio waves", "Microwaves", "Infrared", "UV"], a: 1, ex: "Microwaves (~2.45 GHz)." },
      { q: "TV remote uses:", opts: ["Visible light", "Infrared", "UV", "X-ray"], a: 1, ex: "IR (infrared)." },
      { q: "Echo is example of:", opts: ["Refraction", "Reflection of sound", "Diffraction", "Interference"], a: 1, ex: "Sound reflects back." },
      { q: "Sound travels fastest in:", opts: ["Air", "Water", "Solid", "Vacuum"], a: 2, ex: "Solids (densest contact)." },
      { q: "Light travels fastest in:", opts: ["Air", "Water", "Vacuum", "Glass"], a: 2, ex: "c in vacuum." },
      { q: "Visible light wavelength:", opts: ["400-700 nm", "1-10 nm", "1-10 mm", "1-10 m"], a: 0, ex: "400-700 nanometres." },
      { q: "Period T relates to frequency f:", opts: ["T = f", "T = 1/f", "T = f²", "T = √f"], a: 1, ex: "T = 1/f." },
      { q: "Crest to crest is one:", opts: ["Period", "Amplitude", "Wavelength", "Frequency"], a: 2, ex: "Wavelength." },
      { q: "EM wave needs medium:", opts: ["Yes always", "No, travels in vacuum", "Only in air", "Only sound"], a: 1, ex: "EM waves don't need medium." },
      { q: "Loudness depends on:", opts: ["Frequency", "Amplitude", "Wavelength", "Speed"], a: 1, ex: "Higher amplitude = louder." }
    ]
  };

})();
