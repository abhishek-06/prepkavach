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

  // ───────────────────────────────────────────────────────────────
  // 9. SOUND WAVE
  // ───────────────────────────────────────────────────────────────
  T["sci-phy-sound"] = {
    body: `
      <h2>Sound Wave</h2>
      <p>Sound is a <b>longitudinal mechanical wave</b> produced by vibrating objects. It needs a material medium (cannot travel in vacuum).</p>

      <h3>1. Properties of Sound</h3>
      <ul>
        <li><b>Pitch</b>: depends on frequency. Higher frequency → higher pitch (female voice higher than male).</li>
        <li><b>Loudness</b>: depends on amplitude. Higher amplitude → louder. Measured in <b>decibels (dB)</b>.</li>
        <li><b>Timbre/Quality</b>: distinguishes two sounds of same pitch and loudness (why guitar and piano playing same note sound different).</li>
        <li><b>Speed</b>: depends on medium and temperature.</li>
      </ul>

      <h3>2. Speed of Sound in Different Media</h3>
      <table>
        <tr><th>Medium</th><th>Speed (m/s)</th></tr>
        <tr><td>Air at 20°C</td><td>343</td></tr>
        <tr><td>Air at 0°C</td><td>331</td></tr>
        <tr><td>Water</td><td>1480</td></tr>
        <tr><td>Sea water</td><td>1530</td></tr>
        <tr><td>Iron / Steel</td><td>5000+</td></tr>
        <tr><td>Vacuum</td><td>0 (sound can't travel)</td></tr>
      </table>
      <p>Sound speed increases with temperature (~0.6 m/s per °C in air).</p>
      <p>Sound is faster in solids > liquids > gases (opposite of light).</p>

      <h3>3. Frequency Ranges</h3>
      <ul>
        <li><b>Infrasonic</b>: < 20 Hz. Elephants, whales communicate this way. Caused by earthquakes.</li>
        <li><b>Audible</b>: 20 Hz – 20,000 Hz (20 kHz). Human hearing range.</li>
        <li><b>Ultrasonic</b>: > 20,000 Hz. Used in:
          <ul>
            <li>Bats, dolphins (echolocation).</li>
            <li>Sonar (Sound Navigation And Ranging) — measure ocean depth.</li>
            <li>Medical: ultrasound imaging, kidney stone breaking (lithotripsy).</li>
            <li>Cleaning small parts (ultrasonic baths).</li>
          </ul>
        </li>
      </ul>

      <h3>4. Phenomena</h3>

      <h4>(a) Reflection of Sound — Echo</h4>
      <ul>
        <li>Echo is the reflection of sound from a distant surface.</li>
        <li>Echo heard only if sound reflects back after at least 0.1 second (human persistence of hearing).</li>
        <li>Minimum distance for echo: ~17 m (1/2 × 340 × 0.1).</li>
        <li>Used in: sonar, ultrasound, stethoscope.</li>
      </ul>

      <h4>(b) Reverberation</h4>
      <p>Persistence of sound due to multiple reflections in an enclosed space. Concert halls use absorbing materials to reduce reverberation.</p>

      <h4>(c) Resonance</h4>
      <p>When external frequency matches natural frequency, vibration amplitude increases dramatically.</p>
      <ul>
        <li>Tuning forks resonance.</li>
        <li>Soldiers break step on bridge to avoid resonance collapse.</li>
        <li>Glass shattering due to singer's voice at resonant frequency.</li>
      </ul>

      <h3>5. Sonic Boom</h3>
      <p>Shock wave produced when an object moves faster than speed of sound (supersonic). Causes a loud "boom" — heard from jets.</p>
      <ul>
        <li>Mach 1 = speed of sound.</li>
        <li>Mach 2 = twice speed of sound.</li>
      </ul>

      <h3>6. Decibel Scale</h3>
      <table>
        <tr><th>Sound</th><th>Decibels (dB)</th></tr>
        <tr><td>Whisper</td><td>30</td></tr>
        <tr><td>Normal conversation</td><td>60</td></tr>
        <tr><td>Heavy traffic</td><td>80</td></tr>
        <tr><td>Loud music / motorcycle</td><td>100</td></tr>
        <tr><td>Rock concert</td><td>120</td></tr>
        <tr><td>Threshold of pain</td><td>130</td></tr>
        <tr><td>Jet engine</td><td>140</td></tr>
      </table>
      <p>Sounds above 85 dB can damage hearing over time.</p>

      <h3>7. Doppler Effect (Sound)</h3>
      <p>Apparent change in frequency due to relative motion.</p>
      <ul>
        <li>Ambulance approaching: pitch increases.</li>
        <li>Ambulance moving away: pitch decreases.</li>
        <li>Used in radar guns to detect speeding cars.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Bats and dolphins use ultrasound for echolocation.</li>
        <li>Whales use infrasound for long-distance communication.</li>
        <li>Speed of sound in air ≈ 340 m/s (at room temperature).</li>
        <li>Lightning seen before thunder because light is much faster.</li>
        <li>Pitch depends on frequency, loudness on amplitude — easy to confuse!</li>
      </ul>
    `,
    mcq: [
      { q: "Sound is what type of wave?", opts: ["Transverse", "Longitudinal", "EM", "Matter"], a: 1, ex: "Longitudinal." },
      { q: "Sound cannot travel through:", opts: ["Air", "Water", "Vacuum", "Steel"], a: 2, ex: "No medium → no sound." },
      { q: "Human audible range:", opts: ["10-1000 Hz", "20-20000 Hz", "100-100000 Hz", "1-100 Hz"], a: 1, ex: "20-20000 Hz." },
      { q: "Frequency above 20000 Hz:", opts: ["Infrasonic", "Audible", "Ultrasonic", "Supersonic"], a: 2, ex: "Ultrasonic." },
      { q: "Pitch depends on:", opts: ["Amplitude", "Frequency", "Speed", "Wavelength only"], a: 1, ex: "Higher f = higher pitch." },
      { q: "Sound is fastest in:", opts: ["Air", "Water", "Iron", "Vacuum"], a: 2, ex: "Solids > Liquids > Gases." },
      { q: "Speed of sound in air at 20°C:", opts: ["340 m/s", "1000 m/s", "5000 m/s", "300 m/s"], a: 0, ex: "~343 m/s." },
      { q: "Echo requires minimum distance:", opts: ["1.7 m", "17 m", "170 m", "1.7 km"], a: 1, ex: "~17 m for 0.1 sec delay." },
      { q: "Bats use:", opts: ["Infrasound", "Audible sound", "Ultrasound", "X-rays"], a: 2, ex: "Echolocation with ultrasound." },
      { q: "Ultrasound is used in:", opts: ["Sonar", "Medical imaging", "Cleaning", "All correct"], a: 3, ex: "All applications." },
      { q: "Decibel measures:", opts: ["Pitch", "Loudness", "Speed", "Quality"], a: 1, ex: "Loudness/intensity." },
      { q: "Loud sound that damages hearing above:", opts: ["50 dB", "85 dB", "150 dB", "200 dB"], a: 1, ex: "85 dB threshold." },
      { q: "Reverberation is:", opts: ["Single echo", "Multiple reflections", "Doppler effect", "Resonance"], a: 1, ex: "Multiple reflections." },
      { q: "Faster than sound speed:", opts: ["Subsonic", "Sonic", "Supersonic", "Hypersonic"], a: 2, ex: "Supersonic (Mach > 1)." },
      { q: "Sonic boom is caused by:", opts: ["Echo", "Object moving faster than sound", "Resonance", "Beats"], a: 1, ex: "Shock wave." },
      { q: "Speed of sound vs light:", opts: ["Sound faster", "Light faster", "Same", "Depends"], a: 1, ex: "Light ~10⁶ times faster." },
      { q: "Doppler effect: source moving away gives:", opts: ["Higher pitch", "Lower pitch", "Same pitch", "No sound"], a: 1, ex: "Frequency decreases." },
      { q: "Sonar is used for:", opts: ["Air navigation", "Underwater depth/distance", "Mountain height", "Light measurement"], a: 1, ex: "Ocean depth measurement." },
      { q: "Resonance occurs when:", opts: ["No matching frequency", "Frequencies match natural frequency", "Random vibration", "No vibration"], a: 1, ex: "Drive frequency = natural frequency." },
      { q: "Elephants communicate using:", opts: ["Ultrasound", "Infrasound", "Visible light", "Radio waves"], a: 1, ex: "Low frequency (<20 Hz)." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 10. HEAT
  // ───────────────────────────────────────────────────────────────
  T["sci-phy-heat"] = {
    body: `
      <h2>Heat</h2>
      <p><b>Heat</b> is a form of energy that flows from a hotter body to a colder body. SI unit: Joule (J). Other: Calorie (1 cal = 4.184 J).</p>

      <h3>1. Temperature</h3>
      <ul>
        <li>Measure of how hot or cold an object is. Average KE of molecules.</li>
        <li>Scales:
          <ul>
            <li>Celsius (°C): water freezes 0, boils 100.</li>
            <li>Fahrenheit (°F): water freezes 32, boils 212.</li>
            <li>Kelvin (K): absolute scale, 0 K = −273.15°C.</li>
          </ul>
        </li>
        <li>Conversion: °F = (9/5)°C + 32; K = °C + 273.15.</li>
        <li>−40°C = −40°F (only point where they meet).</li>
      </ul>

      <h3>2. Heat vs Temperature</h3>
      <table>
        <tr><th>Heat</th><th>Temperature</th></tr>
        <tr><td>Total energy (depends on mass)</td><td>Average energy per molecule</td></tr>
        <tr><td>Unit: Joule</td><td>Unit: Kelvin / °C</td></tr>
        <tr><td>Cause</td><td>Effect</td></tr>
      </table>

      <h3>3. Thermal Expansion</h3>
      <p>Most substances expand on heating.</p>
      <ul>
        <li>Solids: linear, area, volume expansion.</li>
        <li>Liquids: only volume expansion.</li>
        <li>Gases: largest expansion.</li>
        <li><b>Anomalous expansion of water</b>: water contracts from 0°C to 4°C, then expands. Max density at 4°C.</li>
      </ul>
      <p>Examples: railway tracks have gaps; bimetallic strips used in thermostats; balloon expands when warmed.</p>

      <h3>4. Modes of Heat Transfer</h3>

      <h4>(a) Conduction</h4>
      <p>Heat transfer through direct contact (mostly in solids). Metals are good conductors; wood, plastic, air are bad conductors (insulators).</p>
      <p>Best conductor: Silver (then Copper, Gold). Best insulator (solid): Wood, plastic; (gas): Air; (liquid): pure water moderately.</p>

      <h4>(b) Convection</h4>
      <p>Heat transfer through bulk movement of fluid. Hot fluid rises (less dense), cold fluid sinks.</p>
      <p>Examples: sea breeze, monsoon winds, hot air balloon, boiling water, room heaters, ocean currents.</p>

      <h4>(c) Radiation</h4>
      <p>Heat transfer through electromagnetic waves (infrared). No medium needed.</p>
      <p>Examples: heat from Sun, fire, heater. Vacuum flask (thermos) prevents all three modes.</p>

      <h3>5. Specific Heat Capacity</h3>
      <ul>
        <li>Heat needed to raise 1 kg of substance by 1°C.</li>
        <li>Water has very high specific heat (4186 J/kg·°C) — moderates climate.</li>
        <li>Q = m × c × ΔT.</li>
        <li>That's why oceans don't freeze easily; sand on beach heats fast but water stays cooler.</li>
      </ul>

      <h3>6. Latent Heat</h3>
      <p>Heat absorbed/released during phase change at constant temperature.</p>
      <ul>
        <li><b>Latent heat of fusion</b>: solid ↔ liquid. Ice → water: 334 J/g (absorbs).</li>
        <li><b>Latent heat of vaporization</b>: liquid ↔ gas. Water → steam: 2260 J/g (absorbs).</li>
        <li>That's why steam burns are worse than boiling water burns (extra 2260 J/g released).</li>
        <li>That's why sweating cools us (water absorbs heat to evaporate).</li>
      </ul>

      <h3>7. Change of State</h3>
      <ul>
        <li>Melting: solid → liquid.</li>
        <li>Freezing: liquid → solid.</li>
        <li>Vaporization/Evaporation: liquid → gas.</li>
        <li>Condensation: gas → liquid.</li>
        <li>Sublimation: solid → gas directly (camphor, naphthalene, dry ice).</li>
        <li>Deposition: gas → solid (frost formation).</li>
      </ul>

      <h3>8. Boiling Point at Higher Altitude</h3>
      <p>Lower pressure → lower boiling point. Water boils at ~70°C at Mt. Everest top. That's why food takes longer to cook in hills, and why pressure cookers work (high pressure → high BP → faster cooking).</p>

      <h3>9. Thermometers</h3>
      <ul>
        <li>Clinical thermometer: 35-42°C; uses mercury.</li>
        <li>Laboratory thermometer: −10 to 110°C.</li>
        <li>Pyrometer: very high temperatures.</li>
        <li>Galileo thermometer: based on floating globes.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>0 K is absolute zero — lowest possible temperature (molecules stop).</li>
        <li>Steam at 100°C has more energy than water at 100°C (latent heat).</li>
        <li>Earthen pot keeps water cool because of evaporation (latent heat absorbed).</li>
        <li>Pressure cooker raises boiling point of water by increasing pressure.</li>
        <li>Mercury used in thermometers because: uniform expansion, doesn't wet glass, visible.</li>
      </ul>
    `,
    mcq: [
      { q: "SI unit of heat:", opts: ["Calorie", "Joule", "Newton", "Watt"], a: 1, ex: "Joule (energy unit)." },
      { q: "Water freezes at:", opts: ["0°C", "32°C", "0 K", "100°C"], a: 0, ex: "0°C = 32°F." },
      { q: "Absolute zero:", opts: ["0°C", "0°F", "0 K = −273.15°C", "−100°C"], a: 2, ex: "Coldest possible." },
      { q: "Conversion: K = ?", opts: ["°C × 9/5 + 32", "°C + 273.15", "°C − 273", "°C × 1.8"], a: 1, ex: "K = °C + 273.15." },
      { q: "Heat transfer in solids (mainly):", opts: ["Convection", "Conduction", "Radiation", "All equal"], a: 1, ex: "Conduction." },
      { q: "Heat from Sun reaches us by:", opts: ["Conduction", "Convection", "Radiation", "All three"], a: 2, ex: "Radiation (no medium in space)." },
      { q: "Best metal conductor:", opts: ["Iron", "Silver", "Aluminium", "Copper"], a: 1, ex: "Silver > Copper > Gold > Al > Fe." },
      { q: "Water has high:", opts: ["Density only", "Specific heat capacity", "Latent heat", "Both B and C"], a: 3, ex: "High specific heat AND latent heat." },
      { q: "Steam burn more severe than boiling water because:", opts: ["Steam is hotter", "Steam releases extra latent heat", "Steam is gas", "Air pressure"], a: 1, ex: "+2260 J/g extra energy." },
      { q: "Sweating cools us because:", opts: ["Body is hot", "Evaporation absorbs heat", "Magnet effect", "Cooling chemistry"], a: 1, ex: "Latent heat of vaporization absorbed." },
      { q: "Camphor solid → gas directly:", opts: ["Melting", "Sublimation", "Evaporation", "Condensation"], a: 1, ex: "Sublimation." },
      { q: "Boiling point of water on top of mountain:", opts: ["Higher", "Lower", "Same", "Doesn't boil"], a: 1, ex: "Lower pressure → lower BP." },
      { q: "Pressure cooker cooks faster because:", opts: ["Higher temperature", "Higher pressure raises BP", "Less heat needed", "Magic"], a: 1, ex: "BP higher = faster cooking." },
      { q: "Anomalous expansion of water:", opts: ["Expands always", "Contracts 0-4°C then expands", "Always contracts", "No expansion"], a: 1, ex: "Max density at 4°C." },
      { q: "Mercury used in thermometers because:", opts: ["Uniform expansion", "Doesn't wet glass", "Visible", "All correct"], a: 3, ex: "All reasons." },
      { q: "Thermos flask works by minimizing:", opts: ["Conduction", "Convection", "Radiation", "All three"], a: 3, ex: "Double wall, vacuum, silvered." },
      { q: "Sea breeze is example of:", opts: ["Conduction", "Convection", "Radiation", "All"], a: 1, ex: "Air movement = convection." },
      { q: "1 calorie =", opts: ["4.184 J", "100 J", "1000 J", "10 J"], a: 0, ex: "4.184 J." },
      { q: "Earthen pot cools water by:", opts: ["Conduction", "Evaporation", "Radiation", "Refrigeration"], a: 1, ex: "Water seeps and evaporates → cools." },
      { q: "Convection occurs in:", opts: ["Solids", "Fluids (liquids/gases)", "Vacuum", "Wood"], a: 1, ex: "Bulk fluid motion." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 11. LIGHT
  // ───────────────────────────────────────────────────────────────
  T["sci-phy-light"] = {
    body: `
      <h2>Light</h2>
      <p><b>Light</b> is a form of electromagnetic radiation visible to the human eye. It's a <b>transverse EM wave</b>.</p>

      <h3>1. Properties of Light</h3>
      <ul>
        <li>Travels in straight lines (rectilinear propagation).</li>
        <li>Speed in vacuum: <b>c = 3 × 10⁸ m/s</b> (universal constant).</li>
        <li>Speed in medium = c/n (n = refractive index).</li>
        <li>Wavelength: 400-700 nm (visible range).</li>
        <li>Dual nature: behaves as wave AND particle (photon).</li>
      </ul>

      <h3>2. VIBGYOR — Visible Spectrum</h3>
      <p><b>V</b>iolet, <b>I</b>ndigo, <b>B</b>lue, <b>G</b>reen, <b>Y</b>ellow, <b>O</b>range, <b>R</b>ed.</p>
      <ul>
        <li>Red: longest wavelength (~700 nm), lowest frequency, bends least.</li>
        <li>Violet: shortest wavelength (~400 nm), highest frequency, bends most.</li>
        <li>Beyond Red: Infrared (heat); Beyond Violet: Ultraviolet.</li>
      </ul>

      <h3>3. Reflection of Light</h3>
      <p>Light bouncing off a surface.</p>
      <ul>
        <li>Angle of incidence = Angle of reflection.</li>
        <li>Both lie in same plane with normal.</li>
        <li>Types of mirror:
          <ul>
            <li><b>Plane mirror</b>: image is virtual, erect, same size, laterally inverted, behind mirror.</li>
            <li><b>Concave (converging) mirror</b>: can form real or virtual images. Used in: shaving mirror, dentist mirror, headlights, telescope.</li>
            <li><b>Convex (diverging) mirror</b>: always virtual, erect, diminished image. Wider field of view. Used in: car side mirrors, security mirrors.</li>
          </ul>
        </li>
      </ul>

      <h3>4. Refraction of Light</h3>
      <p>Bending of light when it passes from one medium to another (because speed changes).</p>
      <ul>
        <li>Light bends <b>toward normal</b> entering denser medium (slower).</li>
        <li>Light bends <b>away from normal</b> entering rarer medium.</li>
        <li><b>Refractive index</b> (n) = speed in vacuum / speed in medium.</li>
        <li>n_water ≈ 1.33; n_glass ≈ 1.5; n_diamond ≈ 2.42.</li>
      </ul>
      <p>Examples: stick in water looks bent; mirages in desert; twinkling of stars; sun visible before actual sunrise.</p>

      <h3>5. Total Internal Reflection</h3>
      <p>When light passes from denser to rarer medium at angle greater than critical angle, it reflects entirely back.</p>
      <ul>
        <li>Used in: optical fibres (communication, endoscope), diamonds sparkle, prism binoculars.</li>
        <li>Critical angle for water-air: 48.6°; for diamond-air: 24.4°.</li>
      </ul>

      <h3>6. Dispersion of Light</h3>
      <p>White light splits into VIBGYOR through a prism. Each colour has different speed in glass → different bending.</p>
      <ul>
        <li>Rainbow formed by dispersion + total internal reflection in water droplets.</li>
        <li>Primary rainbow: violet inside, red outside.</li>
      </ul>

      <h3>7. Scattering of Light</h3>
      <ul>
        <li><b>Sky is blue</b>: blue light scatters more (Rayleigh scattering, λ⁻⁴).</li>
        <li><b>Sunset is red</b>: low sun → light travels long path → blue scattered away → only red reaches us.</li>
        <li><b>Clouds white</b>: large droplets scatter all colours equally.</li>
      </ul>

      <h3>8. Lenses</h3>
      <ul>
        <li><b>Convex (converging)</b>: thick middle, converges parallel rays. Used in magnifying glass, eye, telescope, microscope, cameras.</li>
        <li><b>Concave (diverging)</b>: thick edges, diverges parallel rays. Used to correct myopia (near-sightedness).</li>
        <li>Power of lens = 1/f (in metres). Unit: Dioptre (D).</li>
      </ul>

      <h3>9. Human Eye</h3>
      <ul>
        <li>Cornea + Lens focus light on Retina.</li>
        <li>Retina has Rod cells (low light) and Cone cells (colour).</li>
        <li>Three types of cones: Red, Green, Blue (RGB).</li>
        <li>Iris: colored part, controls light entry.</li>
        <li>Pupil: opening in iris.</li>
        <li>Defects:
          <ul>
            <li><b>Myopia</b> (short-sighted): can't see far. Use concave lens.</li>
            <li><b>Hypermetropia</b> (long-sighted): can't see near. Use convex lens.</li>
            <li><b>Astigmatism</b>: irregular cornea. Use cylindrical lens.</li>
            <li><b>Presbyopia</b>: age-related; need bifocal lens.</li>
            <li><b>Cataract</b>: clouding of lens.</li>
          </ul>
        </li>
      </ul>

      <h3>10. Optical Instruments</h3>
      <ul>
        <li>Camera: convex lens; image on film/sensor.</li>
        <li>Microscope: high magnification, small near objects.</li>
        <li>Telescope (refracting): two convex lenses; distant objects.</li>
        <li>Periscope: 2 plane mirrors at 45° (submarines).</li>
        <li>Optical fibre: total internal reflection.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Light travels in straight line — confirmed by sharp shadows.</li>
        <li>Sky is blue due to scattering of blue light by atmosphere.</li>
        <li>Star twinkles, planet doesn't — because stars are point sources affected by atmosphere.</li>
        <li>Newton's prism experiment proved white light = mixture of 7 colours.</li>
        <li>Primary colours of light: Red, Green, Blue (RGB).</li>
        <li>Primary colours of pigment: Cyan, Magenta, Yellow (CMY).</li>
      </ul>
    `,
    mcq: [
      { q: "Speed of light in vacuum:", opts: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "300 m/s"], a: 1, ex: "c = 3 × 10⁸ m/s." },
      { q: "Light is what kind of wave:", opts: ["Mechanical", "Sound", "Electromagnetic", "Matter"], a: 2, ex: "EM transverse wave." },
      { q: "VIBGYOR — longest wavelength:", opts: ["Violet", "Blue", "Green", "Red"], a: 3, ex: "Red ~700 nm." },
      { q: "Sky is blue due to:", opts: ["Reflection", "Refraction", "Scattering", "Dispersion"], a: 2, ex: "Blue scatters more (Rayleigh)." },
      { q: "Sun appears red at sunset because:", opts: ["Sun is hotter", "Blue scattered away, red reaches", "Atmosphere is red", "Mirage"], a: 1, ex: "Long path → blue scattered." },
      { q: "Rainbow forms by:", opts: ["Refraction only", "Dispersion + total reflection in droplets", "Reflection only", "Scattering"], a: 1, ex: "Combined effect." },
      { q: "Concave mirror used in:", opts: ["Car side mirror", "Shaving mirror", "Periscope", "Window"], a: 1, ex: "Concave gives magnified erect image." },
      { q: "Convex mirror in cars:", opts: ["Wider field of view", "Magnification", "Real image", "Larger image"], a: 0, ex: "Diverging → wider view." },
      { q: "Myopia is corrected by:", opts: ["Concave lens", "Convex lens", "Cylindrical lens", "Plane glass"], a: 0, ex: "Diverging lens corrects." },
      { q: "Hypermetropia corrected by:", opts: ["Concave", "Convex", "Cylindrical", "Bifocal"], a: 1, ex: "Convex lens." },
      { q: "Refractive index of water:", opts: ["1", "1.33", "1.5", "2.4"], a: 1, ex: "~1.33." },
      { q: "Refractive index of diamond:", opts: ["1.0", "1.5", "2.42", "3.0"], a: 2, ex: "~2.42 (high → sparkles)." },
      { q: "Total internal reflection used in:", opts: ["Optical fibre", "Mirror", "Camera", "Telescope"], a: 0, ex: "Light trapped inside fibre." },
      { q: "Primary colours of light:", opts: ["RGB", "CMY", "RYB", "VIBGYOR"], a: 0, ex: "Red, Green, Blue (additive)." },
      { q: "Power of lens unit:", opts: ["Watt", "Dioptre", "Joule", "Hertz"], a: 1, ex: "Dioptre = 1/m." },
      { q: "Image in plane mirror is:", opts: ["Real, erect", "Virtual, erect, same size", "Real, inverted", "Virtual, diminished"], a: 1, ex: "Virtual, erect, equidistant." },
      { q: "Twinkling of stars due to:", opts: ["Their colour", "Atmospheric refraction", "Magnetism", "Distance"], a: 1, ex: "Light bent by varying atmosphere." },
      { q: "Periscope uses:", opts: ["Lens", "Two plane mirrors", "Prism", "Optical fibre"], a: 1, ex: "Two mirrors at 45°." },
      { q: "Retina rod cells detect:", opts: ["Colour", "Low light/intensity", "Heat", "UV"], a: 1, ex: "Rods → low light vision." },
      { q: "Power of lens of focal length 0.5 m:", opts: ["0.5 D", "1 D", "2 D", "5 D"], a: 2, ex: "P = 1/f = 1/0.5 = 2 D." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 12. ELECTRICITY
  // ───────────────────────────────────────────────────────────────
  T["sci-phy-electricity"] = {
    body: `
      <h2>Electricity</h2>

      <h3>1. Electric Charge</h3>
      <ul>
        <li>Two types: positive (+) and negative (−).</li>
        <li>Like charges repel; unlike attract.</li>
        <li>SI unit: <b>Coulomb (C)</b>.</li>
        <li>Charge on one electron = −1.6 × 10⁻¹⁹ C.</li>
        <li>Charge is conserved and quantized (multiple of e).</li>
      </ul>

      <h3>2. Electric Current</h3>
      <ul>
        <li>Flow of charge per unit time. <b>I = Q/t</b>.</li>
        <li>SI unit: <b>Ampere (A)</b>.</li>
        <li>Conventional current: positive to negative; electron flow: opposite.</li>
        <li>DC (Direct Current): unidirectional (batteries).</li>
        <li>AC (Alternating Current): reverses periodically (50 Hz in India).</li>
      </ul>

      <h3>3. Voltage (Potential Difference)</h3>
      <ul>
        <li>Work done per unit charge. V = W/Q.</li>
        <li>SI unit: <b>Volt (V)</b>.</li>
        <li>1 V = 1 J/C.</li>
        <li>Like water pressure pushes water, voltage pushes electrons.</li>
        <li>India: AC supply at 230 V; US: 110-120 V.</li>
      </ul>

      <h3>4. Ohm's Law</h3>
      <p><b>V = IR</b></p>
      <ul>
        <li>V = voltage, I = current, R = resistance.</li>
        <li>Resistance unit: <b>Ohm (Ω)</b>.</li>
        <li>R = ρ × L/A; ρ = resistivity, L = length, A = cross-sectional area.</li>
        <li>Resistance increases with length, decreases with area, increases with temperature (for metals).</li>
      </ul>

      <h3>5. Series vs Parallel Circuits</h3>
      <table>
        <tr><th>Property</th><th>Series</th><th>Parallel</th></tr>
        <tr><td>Current</td><td>Same in all</td><td>Different in each</td></tr>
        <tr><td>Voltage</td><td>Different across each</td><td>Same across all</td></tr>
        <tr><td>Resistance</td><td>R = R₁ + R₂ + R₃</td><td>1/R = 1/R₁ + 1/R₂ + 1/R₃</td></tr>
        <tr><td>If one fails</td><td>Whole circuit stops</td><td>Others keep working</td></tr>
      </table>
      <p>Household wiring is parallel (so that one bulb failure doesn't affect others).</p>

      <h3>6. Electric Power & Energy</h3>
      <ul>
        <li>Power P = V × I = I²R = V²/R. Unit: Watt.</li>
        <li>Energy = Power × time. Unit: kWh (Unit of electric billing).</li>
        <li>1 kWh = 3.6 × 10⁶ J.</li>
        <li>60 W bulb in 10 hours = 60 × 10 = 600 Wh = 0.6 kWh.</li>
      </ul>

      <h3>7. Conductors, Insulators, Semiconductors</h3>
      <ul>
        <li><b>Conductors</b>: allow current. Metals (Cu, Al, Ag), graphite, salt solutions, human body.</li>
        <li><b>Insulators</b>: block current. Wood, rubber, plastic, glass, mica.</li>
        <li><b>Semiconductors</b>: in between. Si, Ge. Used in chips, diodes, transistors.</li>
        <li><b>Superconductors</b>: zero resistance at very low temperature.</li>
      </ul>

      <h3>8. Heating Effect of Current</h3>
      <p>H = I²Rt (Joule's law). Used in: electric heater, iron, geyser, bulb, fuse, toaster, oven.</p>

      <h3>9. Fuses and MCBs</h3>
      <ul>
        <li><b>Fuse</b>: thin wire that melts when current exceeds safe limit, breaking circuit.</li>
        <li><b>MCB</b> (Miniature Circuit Breaker): modern equivalent, reusable.</li>
        <li>Fuse and MCB are safety devices.</li>
      </ul>

      <h3>10. Indian Electrical Supply</h3>
      <ul>
        <li>AC at 50 Hz.</li>
        <li>Voltage: 220-240 V (single phase), 400 V (3-phase).</li>
        <li>Wiring colours: Live = Red/Brown, Neutral = Black/Blue, Earth = Green.</li>
        <li>Earth wire: safety, connects appliance body to ground.</li>
      </ul>

      <h3>11. Important Facts</h3>
      <ul>
        <li>Distilled water doesn't conduct (no ions); salt water does.</li>
        <li>Lightning is electric discharge between cloud and ground.</li>
        <li>Lightning conductor: metal rod that conducts lightning to ground safely.</li>
        <li>EMF (Electromotive Force) = energy supplied per unit charge by source.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>V = IR (Ohm's law).</li>
        <li>Parallel circuit: 1/R formula.</li>
        <li>Power = V × I.</li>
        <li>Filament bulbs work on heating effect (filament made of tungsten).</li>
        <li>Earthing prevents shock — current flows to earth if there's a fault.</li>
      </ul>
    `,
    mcq: [
      { q: "SI unit of current:", opts: ["Ampere", "Volt", "Ohm", "Watt"], a: 0, ex: "Ampere (A)." },
      { q: "Charge unit:", opts: ["Volt", "Ampere", "Coulomb", "Ohm"], a: 2, ex: "Coulomb." },
      { q: "Ohm's law:", opts: ["V = IR", "P = IV", "Q = It", "F = ma"], a: 0, ex: "V = IR." },
      { q: "Voltage unit:", opts: ["Ampere", "Volt", "Ohm", "Joule"], a: 1, ex: "Volt." },
      { q: "Indian household supply:", opts: ["110 V, 60 Hz", "230 V, 50 Hz", "12 V DC", "440 V"], a: 1, ex: "230 V AC at 50 Hz." },
      { q: "Best conductor of electricity:", opts: ["Iron", "Silver", "Aluminium", "Copper"], a: 1, ex: "Silver (then Cu, Au, Al)." },
      { q: "Insulator:", opts: ["Copper", "Iron", "Rubber", "Aluminium"], a: 2, ex: "Rubber blocks current." },
      { q: "Semiconductor:", opts: ["Cu", "Si", "Fe", "Al"], a: 1, ex: "Silicon." },
      { q: "Household wiring is:", opts: ["Series", "Parallel", "Both", "Neither"], a: 1, ex: "Parallel (one bulb failure doesn't affect others)." },
      { q: "Fuse wire is made of:", opts: ["Steel", "Tin-Lead alloy with low MP", "Copper", "Iron"], a: 1, ex: "Low melting point alloy." },
      { q: "Filament of bulb made of:", opts: ["Iron", "Aluminium", "Tungsten", "Carbon"], a: 2, ex: "High MP tungsten." },
      { q: "Earth wire colour in India:", opts: ["Red", "Blue", "Green", "Yellow"], a: 2, ex: "Green." },
      { q: "Power P = ?", opts: ["VI", "IR", "V/R", "V²I"], a: 0, ex: "P = VI = I²R = V²/R." },
      { q: "Distilled water:", opts: ["Conducts well", "Does not conduct (no ions)", "Same as salt water", "Solid"], a: 1, ex: "Pure water lacks ions." },
      { q: "1 kWh =", opts: ["1000 J", "3.6 × 10⁶ J", "60 W", "1 V"], a: 1, ex: "Energy = kW × 3600 s." },
      { q: "Conventional current direction:", opts: ["Same as electron flow", "Opposite to electrons", "Random", "No direction"], a: 1, ex: "Positive to negative (opposite to electron)." },
      { q: "Lightning conductor:", opts: ["Stops lightning", "Conducts lightning safely to earth", "Reflects lightning", "Magic"], a: 1, ex: "Safe ground path." },
      { q: "AC frequency in India:", opts: ["50 Hz", "60 Hz", "100 Hz", "25 Hz"], a: 0, ex: "50 Hz." },
      { q: "Series circuit: if one bulb fails:", opts: ["Others work", "All fail", "Half work", "Brightness increases"], a: 1, ex: "Whole circuit breaks." },
      { q: "Resistance increases with:", opts: ["Length", "Area", "Higher temperature for metals", "Both A and C"], a: 3, ex: "Both factors." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 13. MAGNETS
  // ───────────────────────────────────────────────────────────────
  T["sci-phy-magnets"] = {
    body: `
      <h2>Magnets</h2>

      <h3>1. Basic Properties of Magnets</h3>
      <ul>
        <li>Every magnet has two poles: North (N) and South (S).</li>
        <li>Like poles repel; unlike poles attract.</li>
        <li>Cannot have a single magnetic pole (cutting a magnet gives two new dipoles).</li>
        <li>Free-suspended magnet aligns N-S due to Earth's magnetic field.</li>
        <li>SI unit of magnetic field: <b>Tesla (T)</b>; CGS: Gauss (1 T = 10⁴ G).</li>
      </ul>

      <h3>2. Materials</h3>
      <ul>
        <li><b>Ferromagnetic</b>: strongly attracted. Iron, cobalt, nickel.</li>
        <li><b>Paramagnetic</b>: weakly attracted. Aluminium, platinum, oxygen.</li>
        <li><b>Diamagnetic</b>: weakly repelled. Copper, bismuth, water, gold.</li>
      </ul>

      <h3>3. Earth as a Magnet</h3>
      <ul>
        <li>Earth behaves like a huge bar magnet.</li>
        <li>Geographic north ≈ magnetic south, and vice versa (that's why compass N points to geographic N).</li>
        <li>Earth's magnetic field varies from 25-65 μT.</li>
        <li>Aurora (Northern/Southern Lights): charged particles guided by Earth's magnetic field.</li>
      </ul>

      <h3>4. Electromagnetism</h3>
      <p><b>Oersted's Discovery (1820)</b>: a current-carrying wire produces a magnetic field around it.</p>
      <ul>
        <li>Right-hand rule: thumb = current direction, fingers curl = field direction.</li>
        <li>Solenoid: a coil of wire acts like a bar magnet when current flows.</li>
        <li><b>Electromagnet</b>: solenoid with iron core; very strong and switchable.</li>
        <li>Used in: electric bell, motors, generators, MRI, cranes lifting scrap, doorbell, loudspeaker.</li>
      </ul>

      <h3>5. Electromagnetic Induction</h3>
      <p><b>Faraday's Law (1831)</b>: a changing magnetic field induces an EMF (voltage) in a conductor.</p>
      <ul>
        <li>Lenz's Law: induced current opposes the change causing it.</li>
        <li>Basis of: <b>electric generator</b> (motion → electricity), transformer, induction cooktop.</li>
      </ul>

      <h3>6. Devices Based on Magnetism</h3>
      <ul>
        <li><b>Electric Motor</b>: converts electrical energy to mechanical energy.</li>
        <li><b>Generator/Dynamo</b>: converts mechanical to electrical energy.</li>
        <li><b>Transformer</b>: changes AC voltage; works on electromagnetic induction. Can only step up or step down AC.</li>
        <li><b>Loudspeaker</b>: current in coil produces vibration in cone.</li>
        <li><b>Microphone</b>: sound waves move coil in field, inducing current.</li>
        <li><b>Mag-lev train</b>: levitates using powerful magnets, near-frictionless.</li>
      </ul>

      <h3>7. Magnetic Properties</h3>
      <ul>
        <li>Magnetism due to alignment of atomic magnetic moments (spinning electrons).</li>
        <li>Heating a magnet above Curie temperature destroys its magnetism (iron: 770°C).</li>
        <li>Striking or dropping a magnet weakens it.</li>
        <li>Storing two bar magnets together (N-S, N-S) preserves magnetism.</li>
      </ul>

      <h3>8. Magnetic Field Lines</h3>
      <ul>
        <li>Go from N pole to S pole externally; S to N internally.</li>
        <li>Never intersect.</li>
        <li>Density of lines = strength of field.</li>
        <li>Form closed loops.</li>
      </ul>

      <h3>9. Compass</h3>
      <p>A small freely-pivoting magnet. Used for navigation. Aligned by Earth's magnetic field.</p>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Iron, Nickel, Cobalt are ferromagnetic (mnemonic: "Magnets like Indian Nawabs Carrying iron").</li>
        <li>Electromagnet = wire + iron core + current.</li>
        <li>SI unit of magnetic field B = Tesla.</li>
        <li>Transformer works on AC only (needs changing magnetic field).</li>
        <li>Step-up transformer: more turns in secondary; step-down: fewer turns.</li>
      </ul>
    `,
    mcq: [
      { q: "Pole that repels north pole:", opts: ["North", "South", "Both", "Neither"], a: 0, ex: "Like poles repel." },
      { q: "Ferromagnetic material:", opts: ["Aluminium", "Iron", "Copper", "Water"], a: 1, ex: "Fe, Co, Ni." },
      { q: "Diamagnetic material:", opts: ["Iron", "Copper", "Nickel", "Cobalt"], a: 1, ex: "Cu is weakly repelled." },
      { q: "Unit of magnetic field:", opts: ["Tesla", "Newton", "Pascal", "Watt"], a: 0, ex: "Tesla (T)." },
      { q: "Compass needle aligns:", opts: ["East-West", "North-South", "Up-Down", "Random"], a: 1, ex: "Earth's magnetic field N-S." },
      { q: "Oersted showed:", opts: ["Light is wave", "Current produces magnetic field", "Heat is energy", "Friction"], a: 1, ex: "Current → magnetic field." },
      { q: "Faraday's law deals with:", opts: ["Electromagnetic induction", "Reflection", "Refraction", "Sound"], a: 0, ex: "Changing field induces EMF." },
      { q: "Electric motor converts:", opts: ["Mechanical to electrical", "Electrical to mechanical", "Heat to mech", "Sound to elec"], a: 1, ex: "Motor: E → M." },
      { q: "Generator/dynamo converts:", opts: ["Electrical to mechanical", "Mechanical to electrical", "Heat to elec", "Sound to elec"], a: 1, ex: "Generator: M → E." },
      { q: "Transformer works on:", opts: ["DC only", "AC only", "Both", "Neither"], a: 1, ex: "Needs changing field." },
      { q: "Heating magnet above Curie point:", opts: ["Makes stronger", "Destroys magnetism", "No effect", "Reverses poles"], a: 1, ex: "Magnetism lost above Curie temp." },
      { q: "Cutting a bar magnet:", opts: ["Single N pole", "Single S pole", "Two new dipoles", "No magnetism"], a: 2, ex: "Each piece becomes a dipole." },
      { q: "Electromagnet has core of:", opts: ["Wood", "Iron", "Copper", "Plastic"], a: 1, ex: "Soft iron." },
      { q: "Field lines go externally from:", opts: ["S to N", "N to S", "No direction", "Random"], a: 1, ex: "External: N→S; internal: S→N." },
      { q: "MRI machine uses:", opts: ["X-rays", "Strong magnetic field", "Sound", "Heat"], a: 1, ex: "Magnetic Resonance." },
      { q: "Aurora (Northern Lights) caused by:", opts: ["Wind", "Charged particles guided by magnetic field", "Sun's heat", "Light reflection"], a: 1, ex: "Earth's field traps solar particles." },
      { q: "Mag-lev train uses:", opts: ["Wheels only", "Magnetic levitation", "Hovercraft", "Steam"], a: 1, ex: "Frictionless via magnets." },
      { q: "Loudspeaker works on:", opts: ["Optical effect", "Electromagnetic interaction in coil", "Sound only", "Static"], a: 1, ex: "Current in coil moves cone." },
      { q: "Geographic N is approximately:", opts: ["Magnetic N", "Magnetic S", "Same", "Mathematical"], a: 1, ex: "Magnetic S pole near geographic N." },
      { q: "Right-hand rule gives:", opts: ["Force direction", "Magnetic field direction around current", "Velocity", "Acceleration"], a: 1, ex: "Thumb = current, fingers = field." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 14. ATOMIC & NUCLEAR PHYSICS
  // ───────────────────────────────────────────────────────────────
  T["sci-phy-atomic"] = {
    body: `
      <h2>Atomic & Nuclear Physics</h2>

      <h3>1. Atom — Basic Structure</h3>
      <ul>
        <li>Atom = smallest unit of element retaining its properties.</li>
        <li>Three particles: <b>Proton (+)</b>, <b>Neutron (neutral)</b>, <b>Electron (−)</b>.</li>
        <li>Protons + Neutrons in nucleus; Electrons in shells around nucleus.</li>
        <li>Atom is electrically neutral: #protons = #electrons.</li>
      </ul>

      <h3>2. Subatomic Particles</h3>
      <table>
        <tr><th>Particle</th><th>Charge</th><th>Mass</th><th>Discoverer</th></tr>
        <tr><td>Electron</td><td>−1 (−1.6 × 10⁻¹⁹ C)</td><td>9.1 × 10⁻³¹ kg</td><td>J.J. Thomson (1897)</td></tr>
        <tr><td>Proton</td><td>+1</td><td>1.67 × 10⁻²⁷ kg (1 amu)</td><td>Rutherford (1919)</td></tr>
        <tr><td>Neutron</td><td>0</td><td>~1 amu</td><td>James Chadwick (1932)</td></tr>
      </table>

      <h3>3. Atomic Models (Evolution)</h3>
      <ul>
        <li><b>Dalton (1808)</b>: atom is indivisible, like a solid ball.</li>
        <li><b>J.J. Thomson (1898)</b>: plum pudding model — sphere of positive charge with electrons embedded.</li>
        <li><b>Rutherford (1911)</b>: nuclear model — small dense nucleus with electrons orbiting (gold foil experiment).</li>
        <li><b>Bohr (1913)</b>: electrons in fixed orbits with quantized energy. Explained hydrogen spectrum.</li>
        <li><b>Modern (Quantum)</b>: electrons exist in orbitals (probability clouds), not fixed paths.</li>
      </ul>

      <h3>4. Atomic Number & Mass Number</h3>
      <ul>
        <li><b>Atomic Number (Z)</b> = number of protons = number of electrons.</li>
        <li><b>Mass Number (A)</b> = protons + neutrons.</li>
        <li>Number of neutrons = A − Z.</li>
      </ul>

      <h3>5. Isotopes, Isobars, Isotones</h3>
      <ul>
        <li><b>Isotopes</b>: same Z, different A. Same element. Example: ¹H, ²H, ³H (hydrogen).</li>
        <li><b>Isobars</b>: same A, different Z. Different elements. Example: ⁴⁰Ca and ⁴⁰Ar.</li>
        <li><b>Isotones</b>: same number of neutrons.</li>
      </ul>

      <h3>6. Nuclear Forces</h3>
      <ul>
        <li>Strong nuclear force holds protons and neutrons together against electric repulsion.</li>
        <li>Strongest of 4 fundamental forces but very short range (~10⁻¹⁵ m).</li>
        <li>Weak nuclear force responsible for radioactive beta decay.</li>
      </ul>

      <h3>7. Nuclear Fission</h3>
      <ul>
        <li>Splitting of heavy nucleus (e.g., U-235) into lighter ones, releasing energy and neutrons.</li>
        <li>Used in: <b>nuclear power plants</b> (controlled), <b>atomic bomb</b> (uncontrolled chain reaction).</li>
        <li>Discovered by Otto Hahn (1938).</li>
        <li>Sustains chain reaction: each fission releases neutrons that trigger more fission.</li>
        <li>India's nuclear plants: Tarapur, Kudankulam, Kaiga, Kakrapar, Narora, Rawatbhata.</li>
      </ul>

      <h3>8. Nuclear Fusion</h3>
      <ul>
        <li>Joining of light nuclei (hydrogen → helium) to form heavier, releasing huge energy.</li>
        <li>Occurs in the <b>Sun and stars</b>.</li>
        <li>Requires extreme temperature (millions of degrees).</li>
        <li>Used in: <b>hydrogen bomb</b>.</li>
        <li>Researchers working on controlled fusion (ITER, etc.) — clean energy future.</li>
      </ul>

      <h3>9. E = mc² (Mass-Energy Equivalence)</h3>
      <p>Einstein's famous equation: a small amount of mass can be converted to enormous energy.</p>
      <ul>
        <li>c = speed of light = 3 × 10⁸ m/s.</li>
        <li>1 gram of mass → 9 × 10¹³ J (huge!).</li>
        <li>Basis of all nuclear energy.</li>
      </ul>

      <h3>10. Quantum & Modern Physics Basics</h3>
      <ul>
        <li><b>Planck's quantum theory</b>: energy is emitted/absorbed in discrete packets (quanta) of energy E = hν.</li>
        <li><b>Photoelectric effect</b>: Einstein explained — light is also particle (photon). Earned him Nobel.</li>
        <li><b>de Broglie waves</b>: every moving particle has wave nature. Confirms wave-particle duality.</li>
        <li><b>Heisenberg's Uncertainty Principle</b>: cannot know both position and momentum exactly.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Atom: protons in nucleus, electrons in shells.</li>
        <li>Isotopes: same Z, different A.</li>
        <li>Fission: heavy → light (nuclear plants, A-bomb).</li>
        <li>Fusion: light → heavy (Sun, H-bomb).</li>
        <li>E = mc² explains nuclear energy.</li>
      </ul>
    `,
    mcq: [
      { q: "Discoverer of electron:", opts: ["Rutherford", "J.J. Thomson", "Bohr", "Chadwick"], a: 1, ex: "Thomson 1897." },
      { q: "Discoverer of neutron:", opts: ["Rutherford", "Bohr", "Chadwick", "Thomson"], a: 2, ex: "Chadwick 1932." },
      { q: "Charge of proton:", opts: ["Negative", "Positive", "Zero", "Variable"], a: 1, ex: "+1.6 × 10⁻¹⁹ C." },
      { q: "Atomic number =", opts: ["Protons", "Protons + neutrons", "Electrons - protons", "Mass"], a: 0, ex: "Z = #protons." },
      { q: "Mass number =", opts: ["Protons", "Neutrons", "Protons + neutrons", "Electrons"], a: 2, ex: "A = p + n." },
      { q: "Isotopes have same:", opts: ["Mass number", "Atomic number", "Number of neutrons", "All"], a: 1, ex: "Same Z, different A." },
      { q: "Energy of sun comes from:", opts: ["Fission", "Fusion", "Combustion", "Chemical"], a: 1, ex: "H → He fusion." },
      { q: "Nuclear power plant uses:", opts: ["Fission", "Fusion", "Combustion", "Solar"], a: 0, ex: "Uranium-235 fission." },
      { q: "Atomic bomb uses:", opts: ["Fusion", "Fission", "Combustion", "Both"], a: 1, ex: "Uncontrolled fission." },
      { q: "Hydrogen bomb uses:", opts: ["Fission", "Fusion", "Both", "Neither"], a: 1, ex: "Thermonuclear fusion." },
      { q: "E = mc² is by:", opts: ["Newton", "Einstein", "Bohr", "Planck"], a: 1, ex: "Einstein." },
      { q: "Rutherford's experiment:", opts: ["Cathode ray", "Gold foil", "Photoelectric", "Double slit"], a: 1, ex: "Gold foil — discovered nucleus." },
      { q: "Strongest fundamental force:", opts: ["Gravity", "Electromagnetic", "Strong nuclear", "Weak nuclear"], a: 2, ex: "Strong nuclear." },
      { q: "Bohr's model proposed:", opts: ["Indivisible atom", "Plum pudding", "Quantized orbits", "Solar system exactly"], a: 2, ex: "Discrete energy levels." },
      { q: "1 amu equals approximately:", opts: ["Mass of electron", "Mass of proton", "Mass of atom", "Mass of nucleus"], a: 1, ex: "1 amu = mass of proton ≈ 1.66 × 10⁻²⁷ kg." },
      { q: "Photoelectric effect explained by:", opts: ["Newton", "Einstein", "Bohr", "Maxwell"], a: 1, ex: "Einstein got Nobel for this." },
      { q: "Quantum theory founder:", opts: ["Planck", "Einstein", "Bohr", "Heisenberg"], a: 0, ex: "Max Planck 1900." },
      { q: "Tarapur nuclear plant in:", opts: ["UP", "Maharashtra", "Tamil Nadu", "Karnataka"], a: 1, ex: "Maharashtra." },
      { q: "Most abundant element in universe:", opts: ["Hydrogen", "Helium", "Oxygen", "Carbon"], a: 0, ex: "Hydrogen." },
      { q: "Heisenberg's principle relates to:", opts: ["Mass", "Energy", "Position-momentum uncertainty", "Time"], a: 2, ex: "Cannot measure both exactly." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 15. RADIOACTIVITY
  // ───────────────────────────────────────────────────────────────
  T["sci-phy-radioactivity"] = {
    body: `
      <h2>Radioactivity</h2>
      <p><b>Radioactivity</b> is the spontaneous emission of radiation from unstable atomic nuclei. Discovered by <b>Henri Becquerel (1896)</b>.</p>

      <h3>1. Key Scientists</h3>
      <ul>
        <li><b>Henri Becquerel</b> — discovered radioactivity in uranium (1896).</li>
        <li><b>Marie & Pierre Curie</b> — discovered polonium and radium. Marie got Nobel in Physics (1903) and Chemistry (1911).</li>
        <li><b>Rutherford</b> — identified alpha, beta, gamma radiation types.</li>
      </ul>

      <h3>2. Types of Radioactive Radiation</h3>

      <h4>(a) Alpha (α) Particles</h4>
      <ul>
        <li>Helium nucleus (2 protons + 2 neutrons).</li>
        <li>Charge: +2.</li>
        <li>Heavy, slow, low penetration. Stopped by paper or a few cm of air.</li>
        <li>Most ionizing.</li>
      </ul>

      <h4>(b) Beta (β) Particles</h4>
      <ul>
        <li>High-speed electrons (β⁻) or positrons (β⁺).</li>
        <li>Charge: −1 (β⁻) or +1 (β⁺).</li>
        <li>Moderate penetration. Stopped by aluminium sheet.</li>
        <li>Moderately ionizing.</li>
      </ul>

      <h4>(c) Gamma (γ) Rays</h4>
      <ul>
        <li>Electromagnetic waves of very high frequency.</li>
        <li>No charge, no mass.</li>
        <li>Highest penetration. Need thick lead or concrete to stop.</li>
        <li>Least ionizing but most dangerous due to penetration.</li>
      </ul>

      <h4>Order of Penetration: γ > β > α</h4>
      <h4>Order of Ionization: α > β > γ</h4>

      <h3>3. Radioactive Decay & Half-Life</h3>
      <ul>
        <li><b>Half-life (T½)</b>: time for half the radioactive nuclei to decay.</li>
        <li>Examples:
          <ul>
            <li>Uranium-238: 4.5 billion years.</li>
            <li>Carbon-14: 5,730 years (used in carbon dating).</li>
            <li>Radon-222: 3.8 days.</li>
            <li>Iodine-131: 8 days (medical).</li>
          </ul>
        </li>
        <li>After n half-lives, 1/2ⁿ of original remains.</li>
      </ul>

      <h3>4. Uses of Radioactivity</h3>

      <h4>Medical</h4>
      <ul>
        <li>Cancer treatment (radiotherapy with cobalt-60, radium).</li>
        <li>Diagnosis (thyroid: I-131; PET scan: F-18).</li>
        <li>Sterilization of medical instruments.</li>
      </ul>

      <h4>Industrial</h4>
      <ul>
        <li>Detecting flaws in metal castings (radiography).</li>
        <li>Measuring thickness of paper, steel sheets.</li>
        <li>Food preservation (kills bacteria without heating).</li>
      </ul>

      <h4>Energy</h4>
      <ul>
        <li>Nuclear power plants (U-235, Pu-239).</li>
        <li>RTG (radioisotope thermoelectric generator) for spacecraft.</li>
      </ul>

      <h4>Archaeology</h4>
      <ul>
        <li><b>Carbon-14 dating</b>: age of organic remains up to ~50,000 years.</li>
        <li>Uranium-lead dating: age of rocks up to billions of years.</li>
      </ul>

      <h4>Research</h4>
      <ul>
        <li>Tracer studies in biology (radioactive isotopes follow biological pathways).</li>
        <li>Agriculture (pest control, mutation breeding).</li>
      </ul>

      <h3>5. Hazards of Radiation</h3>
      <ul>
        <li>Cell damage, mutation.</li>
        <li>Cancer.</li>
        <li>Radiation sickness (acute exposure).</li>
        <li>Genetic effects.</li>
        <li>Measured in: Sievert (Sv) — biological effect; Gray (Gy) — absorbed dose; Becquerel (Bq) — activity.</li>
      </ul>

      <h3>6. Major Nuclear Incidents</h3>
      <ul>
        <li>Hiroshima & Nagasaki (1945): atomic bombs.</li>
        <li>Three Mile Island (1979): USA partial meltdown.</li>
        <li>Chernobyl (1986): worst civilian nuclear accident.</li>
        <li>Fukushima (2011): Japan, triggered by tsunami.</li>
      </ul>

      <h3>7. Radioactive Elements (Important)</h3>
      <table>
        <tr><th>Element</th><th>Use</th></tr>
        <tr><td>Uranium-235</td><td>Nuclear fuel</td></tr>
        <tr><td>Uranium-238</td><td>Source of Plutonium</td></tr>
        <tr><td>Plutonium-239</td><td>Nuclear weapons, fuel</td></tr>
        <tr><td>Cobalt-60</td><td>Cancer treatment, sterilization</td></tr>
        <tr><td>Iodine-131</td><td>Thyroid diagnosis/treatment</td></tr>
        <tr><td>Carbon-14</td><td>Carbon dating</td></tr>
        <tr><td>Radium</td><td>Older cancer therapy</td></tr>
        <tr><td>Polonium</td><td>Static eliminator</td></tr>
        <tr><td>Tritium (H-3)</td><td>Glow signs, fusion research</td></tr>
        <tr><td>Americium-241</td><td>Smoke detectors</td></tr>
      </table>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Discoverer: Henri Becquerel; Curies discovered radium/polonium.</li>
        <li>α: helium nucleus; β: electron; γ: EM wave.</li>
        <li>Order of penetration: γ > β > α.</li>
        <li>Carbon-14 dating: organic remains up to 50,000 years.</li>
        <li>Half-life is constant — temperature, pressure don't affect it.</li>
        <li>Nuclear shield: lead is best, then concrete.</li>
      </ul>
    `,
    mcq: [
      { q: "Discoverer of radioactivity:", opts: ["Curie", "Becquerel", "Rutherford", "Einstein"], a: 1, ex: "Henri Becquerel 1896." },
      { q: "Alpha particle is:", opts: ["Helium nucleus", "Electron", "Proton", "EM wave"], a: 0, ex: "2p + 2n." },
      { q: "Beta particle is:", opts: ["Helium nucleus", "Electron/positron", "Photon", "Neutron"], a: 1, ex: "High-speed electron." },
      { q: "Gamma ray is:", opts: ["Charged particle", "EM wave", "Helium", "Electron"], a: 1, ex: "EM wave, no charge." },
      { q: "Most penetrating radiation:", opts: ["Alpha", "Beta", "Gamma", "All same"], a: 2, ex: "γ > β > α." },
      { q: "Most ionizing:", opts: ["Alpha", "Beta", "Gamma", "All same"], a: 0, ex: "Alpha (slow, heavy)." },
      { q: "Element used in carbon dating:", opts: ["U-235", "C-14", "I-131", "Co-60"], a: 1, ex: "Carbon-14." },
      { q: "Half-life of C-14:", opts: ["100 years", "1000 years", "5,730 years", "50,000 years"], a: 2, ex: "~5,730 years." },
      { q: "Cobalt-60 used for:", opts: ["Heating", "Cancer treatment", "Telephone", "Astronomy"], a: 1, ex: "Radiotherapy." },
      { q: "Marie Curie discovered:", opts: ["X-rays", "Polonium and Radium", "Uranium", "Plutonium"], a: 1, ex: "Po and Ra." },
      { q: "Nuclear fuel:", opts: ["U-235", "C-14", "Na-24", "I-131"], a: 0, ex: "Uranium-235." },
      { q: "Worst nuclear accident:", opts: ["Three Mile Island", "Chernobyl", "Fukushima", "Hiroshima"], a: 1, ex: "Chernobyl 1986." },
      { q: "Atomic bombs at:", opts: ["Hiroshima", "Nagasaki", "Both", "Tokyo"], a: 2, ex: "Hiroshima + Nagasaki." },
      { q: "Half-life is affected by:", opts: ["Temperature", "Pressure", "Chemical state", "None of these"], a: 3, ex: "Constant; nature of nucleus only." },
      { q: "Stops alpha particles:", opts: ["Paper", "Aluminium", "Lead", "All"], a: 0, ex: "Paper is sufficient." },
      { q: "Smoke detectors use:", opts: ["Cobalt", "Americium-241", "Uranium", "Iodine"], a: 1, ex: "Am-241." },
      { q: "Radiation dose unit:", opts: ["Sievert (Sv)", "Newton", "Tesla", "Watt"], a: 0, ex: "Sievert for bio effect." },
      { q: "Plutonium-239:", opts: ["Natural", "Man-made", "Stable", "Non-radioactive"], a: 1, ex: "From U-238 in reactors." },
      { q: "Radioactive decay involves:", opts: ["Electron shells", "Nucleus only", "Molecular bonds", "Charge transfer"], a: 1, ex: "Nuclear process." },
      { q: "Iodine-131 medical use:", opts: ["Heart", "Thyroid", "Liver", "Brain"], a: 1, ex: "Thyroid diagnosis/treatment." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 16. NANOTECHNOLOGY
  // ───────────────────────────────────────────────────────────────
  T["sci-phy-nano"] = {
    body: `
      <h2>Nanotechnology</h2>
      <p><b>Nanotechnology</b> = science of structures at nanoscale (1-100 nanometres). 1 nm = 10⁻⁹ m. A human hair is ~80,000 nm thick!</p>

      <h3>1. Key Concepts</h3>
      <ul>
        <li>At nano scale, materials show unique properties different from bulk.</li>
        <li>Gold is yellow in bulk, but red/purple at nano scale.</li>
        <li>Higher surface area to volume ratio → more reactive.</li>
        <li>Quantum effects become significant.</li>
      </ul>

      <h3>2. Nobel & Pioneers</h3>
      <ul>
        <li><b>Richard Feynman (1959)</b>: famous lecture "There's Plenty of Room at the Bottom" — pioneered idea.</li>
        <li><b>Norio Taniguchi (1974)</b>: coined the term "Nanotechnology".</li>
        <li><b>STM (Scanning Tunneling Microscope) 1981</b>: by Binnig and Rohrer — Nobel 1986.</li>
        <li><b>Buckminsterfullerene (C₆₀) 1985</b>: discovered by Kroto, Curl, Smalley — Nobel 1996.</li>
        <li><b>Graphene (2004)</b>: by Geim and Novoselov — Nobel 2010.</li>
      </ul>

      <h3>3. Important Nanomaterials</h3>

      <h4>(a) Carbon Nanotubes (CNTs)</h4>
      <ul>
        <li>Rolled graphene sheets.</li>
        <li>100x stronger than steel, 1/6 weight.</li>
        <li>Excellent electrical/thermal conductors.</li>
        <li>Uses: composites, electronics, batteries, space elevator concept.</li>
      </ul>

      <h4>(b) Graphene</h4>
      <ul>
        <li>Single layer of carbon atoms in hexagonal lattice.</li>
        <li>Thinnest, strongest known material.</li>
        <li>Conducts electricity better than copper.</li>
        <li>Uses: transistors, batteries, solar cells, sensors.</li>
      </ul>

      <h4>(c) Fullerenes (C₆₀ "Buckyball")</h4>
      <ul>
        <li>Spherical carbon molecules.</li>
        <li>Soccer ball shape (60 carbon atoms).</li>
        <li>Uses: drug delivery, lubricants, photovoltaics.</li>
      </ul>

      <h4>(d) Quantum Dots</h4>
      <ul>
        <li>Semiconductor nanoparticles.</li>
        <li>Emit specific colour depending on size.</li>
        <li>Uses: QLED displays, solar cells, medical imaging.</li>
      </ul>

      <h4>(e) Nano Silver, Nano Gold</h4>
      <ul>
        <li>Silver: antibacterial — used in fabric, wound dressing.</li>
        <li>Gold: drug delivery, cancer therapy, electronics.</li>
      </ul>

      <h3>4. Applications</h3>

      <h4>Electronics</h4>
      <ul>
        <li>Faster, smaller chips.</li>
        <li>Higher storage in nano-scale memory.</li>
        <li>Flexible electronics.</li>
      </ul>

      <h4>Medicine</h4>
      <ul>
        <li>Targeted drug delivery (e.g., to cancer cells only).</li>
        <li>Nanoparticles for imaging (MRI contrast).</li>
        <li>Nanocoatings on implants.</li>
        <li>Cancer hyperthermia (gold nanoparticles heat tumours).</li>
      </ul>

      <h4>Energy</h4>
      <ul>
        <li>Better batteries and fuel cells.</li>
        <li>More efficient solar cells.</li>
        <li>Hydrogen storage.</li>
      </ul>

      <h4>Textile & Cosmetics</h4>
      <ul>
        <li>Stain-resistant, water-repellent fabrics.</li>
        <li>Sunscreens (nano titanium dioxide / zinc oxide).</li>
        <li>Anti-aging creams.</li>
      </ul>

      <h4>Environment</h4>
      <ul>
        <li>Water purification (nanofilters).</li>
        <li>Air filtration.</li>
        <li>Catalysts for pollution reduction.</li>
      </ul>

      <h4>Construction</h4>
      <ul>
        <li>Stronger concrete with nano additives.</li>
        <li>Self-cleaning glass coatings.</li>
        <li>Scratch-resistant paints.</li>
      </ul>

      <h3>5. Concerns</h3>
      <ul>
        <li>Health: inhalation of nanoparticles may cause lung issues.</li>
        <li>Environmental: nano-pollution effects unknown.</li>
        <li>Cost: production still expensive.</li>
        <li>Ethics: privacy issues with nano-sensors.</li>
      </ul>

      <h3>6. India in Nanotechnology</h3>
      <ul>
        <li>Nano Mission (2007): government initiative.</li>
        <li>INST (Institute of Nano Science and Technology), Mohali.</li>
        <li>Major research at IISc Bangalore, IITs, JNCASR.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>1 nanometre = 10⁻⁹ m.</li>
        <li>Feynman: "Plenty of room at the bottom".</li>
        <li>Carbon nanotubes are stronger than steel.</li>
        <li>Graphene: single layer of carbon, super conductor + super strong.</li>
        <li>Fullerene (C₆₀): "buckyball", 60 carbon atoms.</li>
      </ul>
    `,
    mcq: [
      { q: "1 nanometre =", opts: ["10⁻⁶ m", "10⁻⁹ m", "10⁻¹² m", "10⁻³ m"], a: 1, ex: "Nano = 10⁻⁹." },
      { q: "Father of nanotechnology vision:", opts: ["Feynman", "Einstein", "Newton", "Curie"], a: 0, ex: "Richard Feynman 1959." },
      { q: "Graphene is made of:", opts: ["Iron", "Carbon (single layer)", "Silicon", "Aluminium"], a: 1, ex: "Carbon hexagonal lattice." },
      { q: "C₆₀ (buckyball) is form of:", opts: ["Diamond", "Carbon (fullerene)", "Graphite", "Silicon"], a: 1, ex: "60-carbon sphere." },
      { q: "Carbon nanotubes are stronger than:", opts: ["Plastic", "Steel", "Wood", "All"], a: 3, ex: "100× stronger than steel." },
      { q: "Sunscreen uses nano:", opts: ["Iron oxide", "Titanium / Zinc oxide", "Silver", "Carbon"], a: 1, ex: "TiO₂ / ZnO blocks UV." },
      { q: "Nano silver in clothing:", opts: ["Looks shiny", "Antibacterial", "Heat resistant", "All"], a: 1, ex: "Antimicrobial property." },
      { q: "Quantum dots used in:", opts: ["QLED displays", "Cooking", "Iron melting", "Walking"], a: 0, ex: "Colour-tunable LEDs." },
      { q: "Nano size range:", opts: ["1-100 m", "1-100 mm", "1-100 μm", "1-100 nm"], a: 3, ex: "1-100 nanometres." },
      { q: "Targeted cancer drug delivery uses:", opts: ["Macro particles", "Nanoparticles", "Wires", "Solid blocks"], a: 1, ex: "Nano can target cells." },
      { q: "Term 'Nanotechnology' coined by:", opts: ["Feynman", "Taniguchi", "Drexler", "Smalley"], a: 1, ex: "Norio Taniguchi 1974." },
      { q: "Graphene conducts electricity:", opts: ["Worse than copper", "Better than copper", "Same as wood", "Doesn't conduct"], a: 1, ex: "Better than copper." },
      { q: "STM (Scanning Tunneling Microscope) developed in:", opts: ["1981", "1971", "1991", "2001"], a: 0, ex: "1981, Nobel 1986." },
      { q: "Nano gold colour:", opts: ["Always yellow", "Red/purple", "Black", "Green"], a: 1, ex: "Nano scale → different colour." },
      { q: "Nanotech in water:", opts: ["Makes water dirty", "Filtration", "Cannot be used", "Heats water"], a: 1, ex: "Nano-filters remove impurities." },
      { q: "INST stands for:", opts: ["Indian Nano Society", "Institute of Nano Science and Technology", "Indian National Standard", "Industrial Nano System"], a: 1, ex: "INST Mohali." },
      { q: "Discoverers of graphene won Nobel in:", opts: ["2004", "2010", "2015", "2020"], a: 1, ex: "Geim & Novoselov 2010." },
      { q: "Higher surface area to volume ratio at nano scale means:", opts: ["Less reactive", "More reactive", "No change", "Smaller"], a: 1, ex: "More surface for reactions." },
      { q: "Carbon nanotubes are:", opts: ["Solid carbon balls", "Hollow rolled graphene", "Plastic", "Metal sheets"], a: 1, ex: "Rolled-up graphene sheets." },
      { q: "Indian nano initiative:", opts: ["Made in India", "Nano Mission", "Digital India", "Make in India"], a: 1, ex: "Nano Mission 2007." }
    ]
  };

  // ═══════════════════════════════════════════════════════════════
  // CHEMISTRY (14 topics)
  // ═══════════════════════════════════════════════════════════════

  // ───────────────────────────────────────────────────────────────
  // 17. MATTER & ITS STATES
  // ───────────────────────────────────────────────────────────────
  T["sci-chem-matter"] = {
    body: `
      <h2>Matter & Its States</h2>
      <p><b>Matter</b> is anything that has mass and occupies space.</p>

      <h3>1. Three Common States of Matter</h3>
      <table>
        <tr><th>Property</th><th>Solid</th><th>Liquid</th><th>Gas</th></tr>
        <tr><td>Shape</td><td>Fixed</td><td>Takes shape of container</td><td>Fills container</td></tr>
        <tr><td>Volume</td><td>Fixed</td><td>Fixed</td><td>Not fixed</td></tr>
        <tr><td>Compressibility</td><td>Negligible</td><td>Slight</td><td>High</td></tr>
        <tr><td>Density</td><td>Highest</td><td>Medium</td><td>Lowest</td></tr>
        <tr><td>Intermolecular force</td><td>Strongest</td><td>Moderate</td><td>Weakest</td></tr>
        <tr><td>Molecular motion</td><td>Vibrate in place</td><td>Move past each other</td><td>Free random motion</td></tr>
      </table>

      <h3>2. Other States</h3>
      <ul>
        <li><b>Plasma</b>: ionized gas — found in sun, stars, lightning, neon signs.</li>
        <li><b>Bose-Einstein Condensate (BEC)</b>: at near absolute zero, atoms collapse into one quantum state. Predicted by Einstein, made in lab 1995.</li>
      </ul>

      <h3>3. Classification of Matter (Chemical)</h3>
      <ul>
        <li><b>Pure substances</b>: fixed composition.
          <ul>
            <li><b>Elements</b>: cannot be broken down (e.g., O, H, Fe). 118 known.</li>
            <li><b>Compounds</b>: two or more elements chemically combined in fixed ratio (e.g., H₂O, CO₂).</li>
          </ul>
        </li>
        <li><b>Mixtures</b>: physically combined.
          <ul>
            <li><b>Homogeneous</b>: uniform — solutions (salt water, air).</li>
            <li><b>Heterogeneous</b>: non-uniform — sand+water, oil+water.</li>
          </ul>
        </li>
      </ul>

      <h3>4. Element vs Compound vs Mixture</h3>
      <table>
        <tr><th>Element</th><th>Compound</th><th>Mixture</th></tr>
        <tr><td>One type of atom</td><td>Atoms of different elements bonded</td><td>Substances physically mixed</td></tr>
        <tr><td>Cannot be broken (chemically)</td><td>Can be broken into elements</td><td>Can be separated physically</td></tr>
        <tr><td>Fixed composition</td><td>Fixed composition</td><td>Variable composition</td></tr>
        <tr><td>Iron, Oxygen</td><td>Water, CO₂</td><td>Air, Salt+sand</td></tr>
      </table>

      <h3>5. Physical vs Chemical Changes</h3>
      <ul>
        <li><b>Physical</b>: reversible, no new substance. Examples: melting ice, dissolving salt, cutting paper, evaporation.</li>
        <li><b>Chemical</b>: new substance formed, often irreversible. Examples: burning paper, rusting iron, cooking food, digestion.</li>
      </ul>

      <h3>6. Separation Techniques</h3>
      <ul>
        <li><b>Filtration</b>: insoluble solid from liquid (sand + water).</li>
        <li><b>Evaporation</b>: dissolved solid from liquid (salt from sea water).</li>
        <li><b>Distillation</b>: liquids with different boiling points.</li>
        <li><b>Sublimation</b>: solids that sublime from non-subliming (camphor from sand).</li>
        <li><b>Chromatography</b>: separating components of a mixture (ink colours).</li>
        <li><b>Magnetic separation</b>: iron from other materials.</li>
        <li><b>Decantation</b>: pouring off liquid from settled solid.</li>
        <li><b>Centrifugation</b>: dense from less dense (blood plasma from cells).</li>
      </ul>

      <h3>7. Properties of Matter</h3>
      <ul>
        <li><b>Mass</b>: amount of matter (constant).</li>
        <li><b>Weight</b>: force of gravity (varies).</li>
        <li><b>Volume</b>: space occupied.</li>
        <li><b>Density</b>: mass per unit volume.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Plasma is most abundant state in universe (sun, stars).</li>
        <li>Air is a homogeneous mixture (not compound).</li>
        <li>Water is a compound (H + O bonded).</li>
        <li>Ice, water, steam are 3 states of same compound (H₂O).</li>
      </ul>
    `,
    mcq: [
      { q: "Matter has:", opts: ["Only mass", "Only volume", "Mass and volume", "Charge"], a: 2, ex: "Both mass and space." },
      { q: "Most compressible state:", opts: ["Solid", "Liquid", "Gas", "Plasma"], a: 2, ex: "Gas — large gaps." },
      { q: "State found in sun:", opts: ["Solid", "Liquid", "Gas", "Plasma"], a: 3, ex: "Plasma — ionized gas." },
      { q: "Element:", opts: ["Water", "Salt", "Iron", "Air"], a: 2, ex: "Iron is element." },
      { q: "Compound:", opts: ["Air", "Water", "Iron", "Brass"], a: 1, ex: "H₂O is compound." },
      { q: "Mixture:", opts: ["Air", "H₂O", "NaCl", "Fe"], a: 0, ex: "Air = N₂ + O₂ + … mixed." },
      { q: "Homogeneous mixture:", opts: ["Salt water", "Sand + water", "Oil + water", "Mud"], a: 0, ex: "Uniform." },
      { q: "Physical change:", opts: ["Burning paper", "Rusting iron", "Melting ice", "Cooking"], a: 2, ex: "No new substance." },
      { q: "Chemical change:", opts: ["Boiling water", "Tearing paper", "Burning wood", "Magnetizing"], a: 2, ex: "New substance formed." },
      { q: "Separation of salt from sea water:", opts: ["Filtration", "Evaporation", "Distillation", "Sublimation"], a: 1, ex: "Boil off water." },
      { q: "Separating ink colours:", opts: ["Distillation", "Chromatography", "Decantation", "Filtration"], a: 1, ex: "Chromatography." },
      { q: "Iron from mixture:", opts: ["Magnetic separation", "Evaporation", "Filtration", "Sublimation"], a: 0, ex: "Magnetic." },
      { q: "Camphor from sand:", opts: ["Filtration", "Sublimation", "Distillation", "Decantation"], a: 1, ex: "Camphor sublimes." },
      { q: "BEC state at:", opts: ["High temperature", "Near absolute zero", "100°C", "Room temp"], a: 1, ex: "Near 0 K." },
      { q: "Water is a:", opts: ["Element", "Compound", "Mixture", "Solution"], a: 1, ex: "H + O chemically bonded." },
      { q: "Number of known elements:", opts: ["50", "92", "118", "200"], a: 2, ex: "118 in periodic table." },
      { q: "Brass is:", opts: ["Element", "Compound", "Alloy/mixture", "Solid only"], a: 2, ex: "Cu + Zn alloy." },
      { q: "Mass is:", opts: ["Force", "Amount of matter", "Volume", "Energy"], a: 1, ex: "Quantity of matter." },
      { q: "Heterogeneous mixture:", opts: ["Air", "Salt water", "Oil + water", "Vinegar"], a: 2, ex: "Visible separate layers." },
      { q: "Sublimation example:", opts: ["Ice melting", "Camphor → vapor", "Boiling", "Freezing"], a: 1, ex: "Solid → gas directly." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 18. CONCEPT OF CHANGE IN STATES
  // ───────────────────────────────────────────────────────────────
  T["sci-chem-change-states"] = {
    body: `
      <h2>Concept of Change in States</h2>

      <h3>1. Phase Transitions</h3>
      <table>
        <tr><th>Process</th><th>Direction</th></tr>
        <tr><td>Melting / Fusion</td><td>Solid → Liquid</td></tr>
        <tr><td>Freezing / Solidification</td><td>Liquid → Solid</td></tr>
        <tr><td>Vaporization / Evaporation / Boiling</td><td>Liquid → Gas</td></tr>
        <tr><td>Condensation</td><td>Gas → Liquid</td></tr>
        <tr><td>Sublimation</td><td>Solid → Gas directly</td></tr>
        <tr><td>Deposition</td><td>Gas → Solid directly</td></tr>
        <tr><td>Ionization</td><td>Gas → Plasma</td></tr>
        <tr><td>Recombination</td><td>Plasma → Gas</td></tr>
      </table>

      <h3>2. Melting & Freezing</h3>
      <ul>
        <li><b>Melting point</b>: temperature at which solid changes to liquid at 1 atm.</li>
        <li>Pure ice melts at 0°C. Adding salt to ice lowers MP (used in ice cream makers).</li>
        <li>Pressure decreases MP of ice (anomalous; usually pressure raises MP).</li>
        <li>Pure substances have sharp MP. Mixtures have range.</li>
      </ul>

      <h3>3. Boiling & Condensation</h3>
      <ul>
        <li><b>Boiling point</b>: temperature at which vapor pressure of liquid equals atmospheric pressure.</li>
        <li>Pure water boils at 100°C at sea level.</li>
        <li>Lower atmospheric pressure → lower BP (Mt. Everest: ~70°C).</li>
        <li>Pressure cooker increases BP → faster cooking.</li>
        <li>Adding salt or impurity raises BP (elevation of BP).</li>
      </ul>

      <h3>4. Evaporation vs Boiling</h3>
      <table>
        <tr><th>Evaporation</th><th>Boiling</th></tr>
        <tr><td>Surface phenomenon</td><td>Throughout liquid</td></tr>
        <tr><td>At any temperature</td><td>Only at BP</td></tr>
        <tr><td>Slow, no bubbles</td><td>Fast, bubbles</td></tr>
        <tr><td>Cooling effect</td><td>Requires heat</td></tr>
      </table>
      <p>Factors affecting evaporation rate:</p>
      <ul>
        <li>Surface area (more area → faster).</li>
        <li>Temperature (higher → faster).</li>
        <li>Humidity (lower → faster).</li>
        <li>Wind speed (more → faster).</li>
      </ul>

      <h3>5. Latent Heat</h3>
      <ul>
        <li>Heat absorbed/released during phase change at constant temperature.</li>
        <li><b>Latent heat of fusion</b> (ice → water at 0°C): 334 J/g.</li>
        <li><b>Latent heat of vaporization</b> (water → steam at 100°C): 2260 J/g.</li>
        <li>That's why steam at 100°C burns more than boiling water at 100°C — extra 2260 J/g released when steam condenses on skin.</li>
        <li>Sweating cools us: evaporation absorbs latent heat from body.</li>
      </ul>

      <h3>6. Sublimation</h3>
      <ul>
        <li>Direct transition solid → gas (skipping liquid).</li>
        <li>Examples: dry ice (solid CO₂), camphor, naphthalene (mothballs), iodine, ammonium chloride.</li>
        <li>Used in freeze-drying food.</li>
      </ul>

      <h3>7. Deposition</h3>
      <ul>
        <li>Direct gas → solid (frost formation on cold glass).</li>
        <li>Used in semiconductor manufacturing (CVD).</li>
      </ul>

      <h3>8. Triple Point and Critical Point</h3>
      <ul>
        <li><b>Triple point</b>: unique T and P where all 3 states coexist. Water: 0.01°C and 0.006 atm.</li>
        <li><b>Critical point</b>: beyond which liquid and gas become indistinguishable.</li>
      </ul>

      <h3>9. Anomalous Expansion of Water</h3>
      <ul>
        <li>Water expands from 4°C downward (instead of contracting).</li>
        <li>Maximum density at 4°C.</li>
        <li>Ice (920 kg/m³) less dense than water → floats.</li>
        <li>Saves aquatic life in winter (water at 4°C at bottom).</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Heat absorbed = latent heat (no temperature change during phase transition).</li>
        <li>Sublimation: solid → gas. Examples: camphor, dry ice, naphthalene.</li>
        <li>Adding salt: lowers melting point of ice (used in roads), raises boiling point.</li>
        <li>Pressure cooker: more pressure → higher BP → faster cooking.</li>
      </ul>
    `,
    mcq: [
      { q: "Solid → liquid is:", opts: ["Melting", "Freezing", "Vaporization", "Sublimation"], a: 0, ex: "Melting." },
      { q: "Solid → gas directly:", opts: ["Melting", "Sublimation", "Condensation", "Deposition"], a: 1, ex: "Sublimation." },
      { q: "Gas → solid directly:", opts: ["Sublimation", "Deposition", "Condensation", "Freezing"], a: 1, ex: "Deposition." },
      { q: "Water boils at sea level:", opts: ["50°C", "75°C", "100°C", "150°C"], a: 2, ex: "100°C at 1 atm." },
      { q: "Ice melts at:", opts: ["−10°C", "0°C", "10°C", "100°C"], a: 1, ex: "0°C." },
      { q: "Sublimation example:", opts: ["Ice", "Camphor", "Salt", "Sugar"], a: 1, ex: "Camphor sublimes." },
      { q: "Evaporation occurs:", opts: ["Only at boiling", "At all temperatures from surface", "Below freezing only", "In solids"], a: 1, ex: "Surface phenomenon." },
      { q: "Steam burns worse than boiling water because:", opts: ["Steam hotter", "Latent heat released", "Steam is liquid", "Magic"], a: 1, ex: "2260 J/g extra energy." },
      { q: "Sweating cools us by:", opts: ["Magic", "Evaporation absorbs heat", "Air conditioning", "Skin reflex"], a: 1, ex: "Latent heat absorbed." },
      { q: "Dry ice is solid:", opts: ["Water", "CO₂", "N₂", "O₂"], a: 1, ex: "Solid carbon dioxide." },
      { q: "Pressure cooker cooks faster because:", opts: ["More heat", "Higher pressure raises BP", "Magic", "Steam"], a: 1, ex: "BP higher → faster cooking." },
      { q: "Water density max at:", opts: ["0°C", "4°C", "100°C", "−4°C"], a: 1, ex: "Anomalous; max at 4°C." },
      { q: "Adding salt to ice:", opts: ["Raises MP", "Lowers MP", "No effect", "Vaporizes"], a: 1, ex: "Salt lowers MP." },
      { q: "Naphthalene balls disappear by:", opts: ["Melting", "Evaporation", "Sublimation", "Deposition"], a: 2, ex: "Solid → gas." },
      { q: "Frost on cold glass is:", opts: ["Sublimation", "Deposition", "Condensation", "Freezing"], a: 1, ex: "Gas → solid directly." },
      { q: "Ice floats on water because:", opts: ["Lighter", "Ice less dense than water", "Surface tension", "Magic"], a: 1, ex: "Density ice < water." },
      { q: "Latent heat of vaporization of water:", opts: ["100 J/g", "334 J/g", "2260 J/g", "4186 J/g"], a: 2, ex: "2260 J/g (high)." },
      { q: "Evaporation faster when:", opts: ["Humid", "High wind", "Cold", "Closed"], a: 1, ex: "Wind carries away vapour." },
      { q: "On Mt. Everest, water boils at:", opts: ["100°C", "70°C approx", "150°C", "Doesn't boil"], a: 1, ex: "Lower pressure → lower BP." },
      { q: "Plasma is formed by:", opts: ["Cooling gas", "Ionizing gas", "Freezing liquid", "Compressing solid"], a: 1, ex: "High energy ionization." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 19. GAS LAWS
  // ───────────────────────────────────────────────────────────────
  T["sci-chem-gas-laws"] = {
    body: `
      <h2>Gas Laws</h2>
      <p>Gas laws describe how gases respond to changes in pressure (P), volume (V), and temperature (T).</p>

      <h3>1. Boyle's Law (1662)</h3>
      <p>At constant temperature, volume of gas is inversely proportional to pressure.</p>
      <p><b>PV = constant</b> (or P₁V₁ = P₂V₂)</p>
      <p>Example: squeezing a balloon (V decreases, P increases).</p>

      <h3>2. Charles's Law (1787)</h3>
      <p>At constant pressure, volume of gas is directly proportional to absolute temperature.</p>
      <p><b>V/T = constant</b> (or V₁/T₁ = V₂/T₂)</p>
      <p>Example: hot air balloon rises because gas expands when heated.</p>

      <h3>3. Gay-Lussac's Law</h3>
      <p>At constant volume, pressure is directly proportional to absolute temperature.</p>
      <p><b>P/T = constant</b></p>
      <p>Example: tyre pressure increases on a hot day.</p>

      <h3>4. Combined Gas Law</h3>
      <p><b>PV/T = constant</b></p>

      <h3>5. Avogadro's Law (1811)</h3>
      <p>Equal volumes of all gases at same T and P contain equal number of molecules.</p>
      <ul>
        <li>At STP (0°C, 1 atm), 1 mole of any gas occupies <b>22.4 litres</b>.</li>
        <li>Avogadro's number = 6.022 × 10²³ particles per mole.</li>
      </ul>

      <h3>6. Ideal Gas Law</h3>
      <p><b>PV = nRT</b></p>
      <ul>
        <li>n = number of moles.</li>
        <li>R = universal gas constant = 8.314 J/(mol·K).</li>
        <li>T must be in Kelvin.</li>
      </ul>

      <h3>7. Standard Conditions</h3>
      <ul>
        <li><b>STP</b> (Standard Temperature and Pressure): 0°C (273.15 K) and 1 atm.</li>
        <li><b>NTP</b> (Normal Temperature and Pressure): 20°C and 1 atm.</li>
      </ul>

      <h3>8. Dalton's Law of Partial Pressures</h3>
      <p>Total pressure of a gas mixture = sum of partial pressures.</p>
      <p>P_total = P₁ + P₂ + P₃ + …</p>
      <p>Used in scuba diving (mixture of N₂ and O₂).</p>

      <h3>9. Graham's Law of Diffusion</h3>
      <p>Rate of diffusion of a gas is inversely proportional to square root of its molar mass.</p>
      <p>rate ∝ 1/√M</p>
      <p>Lighter gases (H₂, He) diffuse faster than heavier ones.</p>

      <h3>10. Real vs Ideal Gas</h3>
      <ul>
        <li>Ideal gas: no intermolecular forces, point particles, perfectly elastic collisions.</li>
        <li>Real gases deviate at high pressure and low temperature.</li>
        <li>Van der Waals equation corrects for real gas behavior.</li>
      </ul>

      <h3>11. Kinetic Molecular Theory of Gases</h3>
      <ul>
        <li>Gas particles in constant random motion.</li>
        <li>Particles have negligible volume.</li>
        <li>No intermolecular forces.</li>
        <li>Average KE proportional to absolute temperature.</li>
        <li>Collisions are elastic.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Boyle's: P↑ → V↓ (constant T).</li>
        <li>Charles's: T↑ → V↑ (constant P).</li>
        <li>Gay-Lussac: T↑ → P↑ (constant V).</li>
        <li>Always use Kelvin for temperature in gas laws.</li>
        <li>1 mole gas at STP = 22.4 L.</li>
        <li>Avogadro's number = 6.022 × 10²³.</li>
      </ul>
    `,
    mcq: [
      { q: "Boyle's law: at constant T, V ∝ ?", opts: ["P", "1/P", "T", "1/T"], a: 1, ex: "V inversely proportional to P." },
      { q: "Charles's law: at constant P, V ∝ ?", opts: ["P", "T", "1/T", "1/P"], a: 1, ex: "V directly proportional to T." },
      { q: "Volume of 1 mole gas at STP:", opts: ["10 L", "22.4 L", "44 L", "1 L"], a: 1, ex: "22.4 litres." },
      { q: "Avogadro's number:", opts: ["6.022 × 10²³", "9.8", "10²", "10⁻²³"], a: 0, ex: "6.022 × 10²³ /mol." },
      { q: "Ideal gas equation:", opts: ["PV=nRT", "V=IR", "F=ma", "P=ρgh"], a: 0, ex: "PV = nRT." },
      { q: "STP temperature:", opts: ["0°C", "20°C", "100°C", "25°C"], a: 0, ex: "0°C = 273.15 K." },
      { q: "Lighter gas diffuses:", opts: ["Slower", "Faster", "Same", "None"], a: 1, ex: "Graham's law: rate ∝ 1/√M." },
      { q: "Hot air rises because:", opts: ["Heat goes up", "Hot air less dense (Charles)", "Magic", "Wind"], a: 1, ex: "Volume increases → density decreases." },
      { q: "Universal gas constant R:", opts: ["8.314 J/mol·K", "9.8 m/s²", "1.6×10⁻¹⁹ C", "6.6×10⁻¹¹"], a: 0, ex: "R = 8.314 J/(mol·K)." },
      { q: "Tyre pressure increases on hot day due to:", opts: ["Boyle's", "Charles's", "Gay-Lussac's", "None"], a: 2, ex: "Constant V, T↑ → P↑." },
      { q: "Equal volumes of all gases at same T,P contain:", opts: ["Different molecules", "Same number of molecules", "Same mass", "No molecules"], a: 1, ex: "Avogadro's law." },
      { q: "1 mole CO₂ mass:", opts: ["28 g", "44 g", "16 g", "32 g"], a: 1, ex: "C(12)+O(16×2) = 44." },
      { q: "Graham's law deals with:", opts: ["Pressure", "Diffusion", "Temperature", "Mass"], a: 1, ex: "Diffusion rate ∝ 1/√M." },
      { q: "Dalton's law of partial pressures:", opts: ["Total = sum of partial", "Pressure constant", "Temp dependent", "Volume sum"], a: 0, ex: "P_total = ΣP_i." },
      { q: "Kinetic theory: gas KE proportional to:", opts: ["Pressure", "Absolute temperature", "Volume", "Mass"], a: 1, ex: "KE_avg ∝ T (in K)." },
      { q: "If P doubles at constant T, V:", opts: ["Doubles", "Halves", "Same", "Quadruples"], a: 1, ex: "Boyle's: PV = constant." },
      { q: "If T doubles at constant P, V:", opts: ["Doubles", "Halves", "Same", "Quadruples"], a: 0, ex: "Charles's law." },
      { q: "Real gas deviates from ideal at:", opts: ["High P, low T", "Low P, high T", "STP", "All same"], a: 0, ex: "Forces become significant." },
      { q: "Mass of 1 mole H₂:", opts: ["1 g", "2 g", "16 g", "18 g"], a: 1, ex: "H = 1, H₂ = 2." },
      { q: "Scuba divers use Dalton's law for:", opts: ["Heat", "Gas mixtures (N₂, O₂)", "Pressure", "Diffusion"], a: 1, ex: "Air mixture partial pressures." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 20. ATOMIC STRUCTURE
  // ───────────────────────────────────────────────────────────────
  T["sci-chem-atomic-structure"] = {
    body: `
      <h2>Atomic Structure</h2>

      <h3>1. Subatomic Particles</h3>
      <table>
        <tr><th>Particle</th><th>Charge</th><th>Mass</th><th>Location</th></tr>
        <tr><td>Proton</td><td>+1</td><td>1 amu</td><td>Nucleus</td></tr>
        <tr><td>Neutron</td><td>0</td><td>1 amu</td><td>Nucleus</td></tr>
        <tr><td>Electron</td><td>−1</td><td>1/1836 amu</td><td>Shells around nucleus</td></tr>
      </table>

      <h3>2. Atomic Number, Mass Number, Isotopes</h3>
      <ul>
        <li><b>Atomic Number (Z)</b> = number of protons.</li>
        <li><b>Mass Number (A)</b> = protons + neutrons.</li>
        <li>Number of neutrons = A − Z.</li>
        <li><b>Isotopes</b>: same Z, different A (same element, different mass).
          <ul>
            <li>Hydrogen: ¹H (Protium), ²H (Deuterium), ³H (Tritium).</li>
            <li>Carbon: ¹²C (98.9%), ¹³C, ¹⁴C (radioactive).</li>
            <li>Uranium: U-235, U-238.</li>
          </ul>
        </li>
        <li><b>Isobars</b>: same A, different Z. Example: ⁴⁰K, ⁴⁰Ca, ⁴⁰Ar.</li>
        <li><b>Isotones</b>: same number of neutrons.</li>
      </ul>

      <h3>3. Electron Configuration</h3>
      <ul>
        <li>Electrons in shells (K, L, M, N, …) and subshells (s, p, d, f).</li>
        <li>Maximum electrons in nth shell: 2n².
          <ul>
            <li>K (n=1): 2</li>
            <li>L (n=2): 8</li>
            <li>M (n=3): 18</li>
            <li>N (n=4): 32</li>
          </ul>
        </li>
        <li>Outermost shell electrons = valence electrons → determine chemical properties.</li>
      </ul>

      <h3>4. Bohr's Atomic Model (1913)</h3>
      <ul>
        <li>Electrons revolve in fixed orbits with quantized energy.</li>
        <li>No energy emitted in an orbit.</li>
        <li>Energy absorbed/emitted only during transitions between orbits.</li>
        <li>E_n = −13.6/n² eV for hydrogen.</li>
        <li>Successful in explaining hydrogen spectrum.</li>
      </ul>

      <h3>5. Modern Quantum Mechanical Model</h3>
      <ul>
        <li>Electrons are in orbitals (probability clouds), not fixed paths.</li>
        <li>Heisenberg's uncertainty: cannot know both position and momentum exactly.</li>
        <li>Schrödinger wave equation describes electron behavior.</li>
        <li>Four quantum numbers describe each electron:
          <ul>
            <li>Principal (n): shell.</li>
            <li>Azimuthal (l): subshell s, p, d, f.</li>
            <li>Magnetic (m): orientation.</li>
            <li>Spin (s): ±½.</li>
          </ul>
        </li>
        <li>Pauli's exclusion principle: no two electrons in an atom can have same set of 4 quantum numbers.</li>
        <li>Hund's rule: electrons fill orbitals singly before pairing.</li>
        <li>Aufbau principle: lower energy orbitals filled first.</li>
      </ul>

      <h3>6. Order of Filling (Aufbau)</h3>
      <p>1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d</p>

      <h3>7. Important Subshells</h3>
      <table>
        <tr><th>Subshell</th><th>Max electrons</th></tr>
        <tr><td>s</td><td>2</td></tr>
        <tr><td>p</td><td>6</td></tr>
        <tr><td>d</td><td>10</td></tr>
        <tr><td>f</td><td>14</td></tr>
      </table>

      <h3>8. Valence Electrons and Reactivity</h3>
      <ul>
        <li>Atoms gain/lose/share electrons to attain stable configuration (usually 8 outer electrons — octet rule).</li>
        <li>Metals lose electrons → cations.</li>
        <li>Non-metals gain electrons → anions.</li>
        <li>Noble gases (group 18): full outer shell → very stable, mostly unreactive.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Atomic number = protons = electrons (in neutral atom).</li>
        <li>Mass mostly in nucleus (electrons are very light).</li>
        <li>Isotopes have same chemical properties but different physical (mass).</li>
        <li>Carbon-14: used in carbon dating; half-life ~5730 years.</li>
        <li>Noble gases have full outer shell — very stable.</li>
      </ul>
    `,
    mcq: [
      { q: "Protons + neutrons = ?", opts: ["Atomic number", "Mass number", "Valence", "Electron count"], a: 1, ex: "Mass number A." },
      { q: "Maximum electrons in L shell:", opts: ["2", "8", "18", "32"], a: 1, ex: "2n² = 2×4 = 8." },
      { q: "Maximum electrons in M shell:", opts: ["2", "8", "18", "32"], a: 2, ex: "2×9 = 18." },
      { q: "Maximum electrons in p subshell:", opts: ["2", "6", "10", "14"], a: 1, ex: "p holds 6." },
      { q: "Discoverer of nucleus:", opts: ["Bohr", "Rutherford", "Thomson", "Chadwick"], a: 1, ex: "Gold foil experiment." },
      { q: "Isotopes have same:", opts: ["Mass", "Protons (Z)", "Neutrons", "Electrons charge"], a: 1, ex: "Same Z." },
      { q: "Deuterium is isotope of:", opts: ["Helium", "Carbon", "Hydrogen", "Oxygen"], a: 2, ex: "²H." },
      { q: "Bohr's model explained:", opts: ["Hydrogen spectrum", "Photoelectric effect", "Diffraction", "Friction"], a: 0, ex: "Quantized orbits." },
      { q: "Pauli's exclusion:", opts: ["No 2 electrons same quantum numbers", "Same atom", "Same mass", "Same charge"], a: 0, ex: "Unique state." },
      { q: "Aufbau principle:", opts: ["Fill highest first", "Fill lowest energy first", "Random fill", "Fill outer first"], a: 1, ex: "Build up bottom-up." },
      { q: "Hund's rule:", opts: ["Pair first", "Fill singly first", "No pairing", "Highest first"], a: 1, ex: "Singly fill orbital, then pair." },
      { q: "Valence electrons of Sodium (Na):", opts: ["1", "2", "7", "8"], a: 0, ex: "Na = 2, 8, 1." },
      { q: "Noble gases have:", opts: ["Full outer shell", "Empty shell", "1 electron", "Odd"], a: 0, ex: "Stable octet (or duet for He)." },
      { q: "U-235 and U-238:", opts: ["Isotopes", "Isobars", "Isotones", "Same atom"], a: 0, ex: "Isotopes of U." },
      { q: "Heisenberg's uncertainty:", opts: ["Position and momentum", "Energy and time", "Both A and B", "Mass and energy"], a: 2, ex: "Two pairs." },
      { q: "Bohr's energy formula for H:", opts: ["E_n = −13.6/n²", "E = mc²", "E = h", "E = mgh"], a: 0, ex: "−13.6/n² eV." },
      { q: "C-14 used in:", opts: ["Energy", "Carbon dating", "Photosynthesis", "Calorimetry"], a: 1, ex: "Dating organic remains." },
      { q: "Electron in 2s subshell:", opts: ["Max 2", "Max 6", "Max 8", "Max 10"], a: 0, ex: "s holds 2." },
      { q: "Maximum f subshell electrons:", opts: ["6", "10", "14", "18"], a: 2, ex: "f holds 14." },
      { q: "Schrödinger equation describes:", opts: ["Light", "Electron wave function", "Heat", "Sound"], a: 1, ex: "Wave nature of electron." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 21. PERIODIC TABLE
  // ───────────────────────────────────────────────────────────────
  T["sci-chem-periodic"] = {
    body: `
      <h2>Periodic Table</h2>

      <h3>1. History</h3>
      <ul>
        <li><b>Mendeleev (1869)</b>: arranged elements by atomic mass; left gaps for undiscovered elements (predicted gallium, germanium correctly).</li>
        <li><b>Modern (Moseley 1913)</b>: arranged by atomic number, not mass. Periodic law: properties of elements are periodic function of atomic number.</li>
      </ul>

      <h3>2. Structure</h3>
      <ul>
        <li><b>Periods (rows)</b>: 7 periods. Number = number of shells.</li>
        <li><b>Groups (columns)</b>: 18 groups (or families).</li>
        <li>Elements in same group have similar chemical properties (same valence electrons).</li>
      </ul>

      <h3>3. Major Groups (Families)</h3>
      <table>
        <tr><th>Group</th><th>Name</th><th>Examples</th></tr>
        <tr><td>1</td><td>Alkali metals</td><td>Li, Na, K, Rb, Cs, Fr</td></tr>
        <tr><td>2</td><td>Alkaline earth metals</td><td>Be, Mg, Ca, Sr, Ba, Ra</td></tr>
        <tr><td>3-12</td><td>Transition metals</td><td>Fe, Cu, Zn, Au, Ag, Pt</td></tr>
        <tr><td>13</td><td>Boron family</td><td>B, Al, Ga, In, Tl</td></tr>
        <tr><td>14</td><td>Carbon family</td><td>C, Si, Ge, Sn, Pb</td></tr>
        <tr><td>15</td><td>Nitrogen family / Pnictogens</td><td>N, P, As, Sb, Bi</td></tr>
        <tr><td>16</td><td>Chalcogens / Oxygen family</td><td>O, S, Se, Te, Po</td></tr>
        <tr><td>17</td><td>Halogens</td><td>F, Cl, Br, I, At</td></tr>
        <tr><td>18</td><td>Noble gases</td><td>He, Ne, Ar, Kr, Xe, Rn</td></tr>
      </table>

      <h3>4. Other Important Sets</h3>
      <ul>
        <li><b>Lanthanides</b>: 57-71 (rare earth metals).</li>
        <li><b>Actinides</b>: 89-103 (all radioactive).</li>
        <li><b>Metalloids</b>: B, Si, Ge, As, Sb, Te, Po — properties between metals and non-metals.</li>
        <li><b>Radioactive natural</b>: Tc, Pm, all actinides, also Po, Ra, Rn.</li>
      </ul>

      <h3>5. Periodic Trends</h3>

      <h4>Atomic Radius</h4>
      <ul>
        <li>Decreases <b>left to right</b> in a period (more protons pull electrons in).</li>
        <li>Increases <b>top to bottom</b> in a group (more shells).</li>
      </ul>

      <h4>Ionization Energy</h4>
      <ul>
        <li>Energy to remove an electron from gaseous atom.</li>
        <li>Increases left to right.</li>
        <li>Decreases top to bottom.</li>
        <li>Highest: F, He; Lowest: Cs (or Fr).</li>
      </ul>

      <h4>Electronegativity</h4>
      <ul>
        <li>Tendency to attract shared electrons.</li>
        <li>Highest: Fluorine (4.0 on Pauling scale).</li>
        <li>Increases left to right; decreases top to bottom.</li>
      </ul>

      <h4>Metallic Character</h4>
      <ul>
        <li>Decreases left to right.</li>
        <li>Increases top to bottom.</li>
        <li>Cs is most metallic; F is least.</li>
      </ul>

      <h4>Non-metallic Character</h4>
      <ul>
        <li>Opposite of metallic.</li>
        <li>F is most non-metallic.</li>
      </ul>

      <h3>6. Key Element Trivia</h3>
      <ul>
        <li><b>Hydrogen</b>: only element placed alone (unique). Symbol H, lightest element.</li>
        <li><b>Helium</b>: 2nd most abundant in universe.</li>
        <li><b>Carbon</b>: basis of all life; many allotropes (diamond, graphite, fullerene, graphene).</li>
        <li><b>Nitrogen</b>: most abundant in air (78%).</li>
        <li><b>Oxygen</b>: ~21% of air; vital for respiration.</li>
        <li><b>Sodium</b>: most reactive alkali metal in common use (reacts violently with water).</li>
        <li><b>Mercury</b>: only metal liquid at room temperature.</li>
        <li><b>Bromine</b>: only non-metal liquid at room temperature.</li>
        <li><b>Gold</b>: most malleable and ductile metal.</li>
        <li><b>Iron</b>: most-used metal; magnetic.</li>
        <li><b>Silver</b>: best electrical conductor.</li>
        <li><b>Aluminium</b>: most abundant metal in earth's crust.</li>
        <li><b>Oxygen</b>: most abundant element in earth's crust.</li>
        <li><b>Diamond</b>: hardest natural substance.</li>
        <li><b>Tungsten</b>: highest melting point (3422°C) — used in bulb filaments.</li>
        <li><b>Osmium</b>: densest natural element.</li>
        <li><b>Caesium</b>: most reactive metal; ignites in air.</li>
        <li><b>Fluorine</b>: most reactive non-metal.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Mendeleev arranged by mass; modern table by atomic number.</li>
        <li>Group 1 = alkali metals; Group 17 = halogens; Group 18 = noble gases.</li>
        <li>F (fluorine) is most electronegative.</li>
        <li>Mercury and Bromine are only elements liquid at room temp.</li>
        <li>Carbon has most allotropes.</li>
      </ul>
    `,
    mcq: [
      { q: "Modern periodic table arranged by:", opts: ["Atomic mass", "Atomic number", "Density", "Alphabetical"], a: 1, ex: "Moseley." },
      { q: "Number of periods:", opts: ["5", "6", "7", "8"], a: 2, ex: "7 periods." },
      { q: "Number of groups:", opts: ["7", "8", "18", "32"], a: 2, ex: "18 groups." },
      { q: "Group 17 elements:", opts: ["Alkali metals", "Halogens", "Noble gases", "Transition"], a: 1, ex: "Halogens (F, Cl, Br, I)." },
      { q: "Group 18 elements:", opts: ["Alkali", "Halogens", "Noble gases", "Transition"], a: 2, ex: "Noble gases." },
      { q: "Most electronegative element:", opts: ["F", "O", "Cl", "N"], a: 0, ex: "Fluorine = 4.0." },
      { q: "Most abundant gas in air:", opts: ["O₂", "N₂", "CO₂", "Ar"], a: 1, ex: "N₂ ~78%." },
      { q: "Most abundant element in earth's crust:", opts: ["Iron", "Oxygen", "Silicon", "Aluminium"], a: 1, ex: "O ~46%." },
      { q: "Most abundant metal in earth's crust:", opts: ["Iron", "Aluminium", "Copper", "Zinc"], a: 1, ex: "Al ~8%." },
      { q: "Only liquid metal at room temp:", opts: ["Hg", "Br", "Na", "K"], a: 0, ex: "Mercury." },
      { q: "Only liquid non-metal at room temp:", opts: ["Hg", "Br", "Cl", "I"], a: 1, ex: "Bromine." },
      { q: "Hardest natural substance:", opts: ["Iron", "Diamond", "Steel", "Quartz"], a: 1, ex: "Diamond." },
      { q: "Highest melting point:", opts: ["Tungsten", "Iron", "Carbon", "Platinum"], a: 0, ex: "W = 3422°C." },
      { q: "Most reactive non-metal:", opts: ["O", "F", "Cl", "N"], a: 1, ex: "Fluorine." },
      { q: "Most reactive metal:", opts: ["Na", "K", "Cs", "Li"], a: 2, ex: "Caesium (most among practical)." },
      { q: "Best electrical conductor:", opts: ["Cu", "Ag", "Au", "Al"], a: 1, ex: "Silver (then Cu)." },
      { q: "Mendeleev arranged by:", opts: ["Atomic number", "Atomic mass", "Density", "Color"], a: 1, ex: "Mass; Moseley fixed to number." },
      { q: "Group 1 metals:", opts: ["Alkali", "Alkaline earth", "Transition", "Halogen"], a: 0, ex: "Na, K, etc." },
      { q: "Lanthanides + actinides are:", opts: ["Rare earths", "Noble gases", "Halogens", "Alkali"], a: 0, ex: "Rare earth elements." },
      { q: "Hydrogen position is:", opts: ["Group 1", "Group 17", "Both / unique", "Group 18"], a: 2, ex: "Unique; shares properties of both." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 22. METALS & NON-METALS
  // ───────────────────────────────────────────────────────────────
  T["sci-chem-metals"] = {
    body: `
      <h2>Metals & Non-Metals</h2>

      <h3>1. Properties Comparison</h3>
      <table>
        <tr><th>Property</th><th>Metals</th><th>Non-Metals</th></tr>
        <tr><td>Physical state</td><td>Solid (except Hg)</td><td>Solid, liquid, or gas</td></tr>
        <tr><td>Lustre</td><td>Shiny</td><td>Dull (except I₂, graphite)</td></tr>
        <tr><td>Conductivity</td><td>Good (heat, electricity)</td><td>Poor (except graphite)</td></tr>
        <tr><td>Malleability</td><td>Malleable (can be hammered)</td><td>Brittle</td></tr>
        <tr><td>Ductility</td><td>Ductile (drawn into wires)</td><td>Non-ductile</td></tr>
        <tr><td>Density</td><td>Generally high (except Li, Na)</td><td>Low</td></tr>
        <tr><td>Melting point</td><td>High (except Hg, Ga, Cs)</td><td>Low (except C, B, Si)</td></tr>
        <tr><td>Sonority</td><td>Sonorous (rings when struck)</td><td>Not sonorous</td></tr>
        <tr><td>Reaction with O₂</td><td>Form basic oxides</td><td>Form acidic oxides</td></tr>
        <tr><td>Electron behavior</td><td>Lose electrons (cations)</td><td>Gain electrons (anions)</td></tr>
      </table>

      <h3>2. Reactivity Series of Metals</h3>
      <p>Most reactive to least: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au</p>
      <p>Mnemonic: "<b>P</b>otatoes <b>S</b>hould <b>C</b>ome <b>M</b>ashed <b>A</b>nd <b>Z</b>esty, <b>F</b>or <b>L</b>ittle <b>H</b>ungry <b>C</b>hildren <b>M</b>ay <b>S</b>avor <b>A</b>nd <b>P</b>raise."</p>
      <ul>
        <li>Metals above H react with dilute acids to release H₂.</li>
        <li>Metals below H don't react with dilute acids.</li>
        <li>Gold and platinum don't even react with concentrated acids alone (need aqua regia).</li>
      </ul>

      <h3>3. Important Metals</h3>
      <ul>
        <li><b>Iron (Fe)</b>: most-used metal; rusts; used in construction, machinery.</li>
        <li><b>Aluminium (Al)</b>: light, corrosion-resistant; cans, aircraft, foil.</li>
        <li><b>Copper (Cu)</b>: excellent conductor; wires, coins.</li>
        <li><b>Gold (Au)</b>: jewellery; most malleable.</li>
        <li><b>Silver (Ag)</b>: jewellery, photography, best conductor.</li>
        <li><b>Mercury (Hg)</b>: liquid metal; thermometers (being phased out).</li>
        <li><b>Sodium (Na)</b>: stored in kerosene (reacts violently with water).</li>
        <li><b>Potassium (K)</b>: stored in kerosene.</li>
        <li><b>Tungsten (W)</b>: highest MP; bulb filaments.</li>
        <li><b>Lead (Pb)</b>: dense, soft; battery, X-ray shielding.</li>
        <li><b>Zinc (Zn)</b>: galvanizing iron (prevents rust).</li>
        <li><b>Calcium (Ca)</b>: bones, teeth, cement.</li>
        <li><b>Platinum (Pt)</b>: catalyst, jewellery.</li>
      </ul>

      <h3>4. Important Non-Metals</h3>
      <ul>
        <li><b>Carbon (C)</b>: basis of organic chemistry; allotropes: diamond, graphite, fullerene, graphene.</li>
        <li><b>Hydrogen (H)</b>: lightest element; rocket fuel, refining.</li>
        <li><b>Oxygen (O)</b>: respiration, combustion.</li>
        <li><b>Nitrogen (N)</b>: 78% of air; fertilizers, food preservation.</li>
        <li><b>Sulfur (S)</b>: gunpowder, vulcanization of rubber, fertilizer.</li>
        <li><b>Phosphorus (P)</b>: matches, fertilizers; DNA/RNA backbone.</li>
        <li><b>Chlorine (Cl)</b>: bleach, water purification.</li>
        <li><b>Iodine (I)</b>: antiseptic, thyroid; only sublimable halogen.</li>
        <li><b>Silicon (Si)</b>: chips, glass, sand.</li>
      </ul>

      <h3>5. Alloys (Mixtures of Metals)</h3>
      <table>
        <tr><th>Alloy</th><th>Composition</th><th>Use</th></tr>
        <tr><td>Brass</td><td>Cu + Zn</td><td>Decoration, instruments</td></tr>
        <tr><td>Bronze</td><td>Cu + Sn</td><td>Statues, coins</td></tr>
        <tr><td>Steel</td><td>Fe + C</td><td>Construction</td></tr>
        <tr><td>Stainless Steel</td><td>Fe + Cr + Ni + C</td><td>Utensils, surgical</td></tr>
        <tr><td>Solder</td><td>Pb + Sn</td><td>Joining wires</td></tr>
        <tr><td>Duralumin</td><td>Al + Cu + Mg</td><td>Aircraft</td></tr>
        <tr><td>Magnalium</td><td>Al + Mg</td><td>Aircraft, optical</td></tr>
        <tr><td>German Silver</td><td>Cu + Zn + Ni</td><td>Coins, utensils (no silver!)</td></tr>
        <tr><td>Amalgam</td><td>Hg + other metal</td><td>Dental fillings</td></tr>
        <tr><td>Gunmetal</td><td>Cu + Sn + Zn</td><td>Bearings</td></tr>
        <tr><td>22 carat gold</td><td>Au + Cu (small)</td><td>Jewellery</td></tr>
        <tr><td>Constantan</td><td>Cu + Ni</td><td>Resistors</td></tr>
        <tr><td>Nichrome</td><td>Ni + Cr + Fe</td><td>Heating elements</td></tr>
      </table>

      <h3>6. Corrosion</h3>
      <ul>
        <li><b>Rusting</b> of iron: Fe + O₂ + H₂O → Fe₂O₃·xH₂O (hydrated iron oxide).</li>
        <li>Prevented by: galvanizing (Zn coating), painting, oiling, electroplating.</li>
        <li>Aluminium: forms thin Al₂O₃ layer → corrosion-resistant naturally.</li>
        <li>Copper: green patina (basic copper carbonate).</li>
        <li>Silver: black tarnish (Ag₂S from air sulfur).</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>Hg is only liquid metal at room temp.</li>
        <li>Iron rusts → galvanize with zinc.</li>
        <li>Aqua regia: 3 HCl + 1 HNO₃ — dissolves gold and platinum.</li>
        <li>Mendeleev predicted gallium (eka-aluminium) and germanium accurately.</li>
        <li>Brass = Cu + Zn; Bronze = Cu + Sn.</li>
      </ul>
    `,
    mcq: [
      { q: "Only liquid metal:", opts: ["Hg", "Br", "Ga", "Cs"], a: 0, ex: "Mercury." },
      { q: "Most ductile metal:", opts: ["Cu", "Au", "Ag", "Pt"], a: 1, ex: "Gold." },
      { q: "Best electrical conductor:", opts: ["Cu", "Ag", "Au", "Al"], a: 1, ex: "Silver." },
      { q: "Aqua regia is mixture of:", opts: ["HCl + H₂SO₄", "HNO₃ + HCl (1:3)", "Water + HCl", "Acid + base"], a: 1, ex: "3 HCl + 1 HNO₃." },
      { q: "Rusting needs:", opts: ["Only water", "Only oxygen", "Water + oxygen", "Only sun"], a: 2, ex: "Both required." },
      { q: "Brass is alloy of:", opts: ["Cu + Sn", "Cu + Zn", "Fe + C", "Ni + Cr"], a: 1, ex: "Cu + Zn." },
      { q: "Bronze is alloy of:", opts: ["Cu + Sn", "Cu + Zn", "Fe + C", "Cu + Ni"], a: 0, ex: "Cu + Sn." },
      { q: "Stainless steel contains:", opts: ["Fe + C only", "Fe + Cr + Ni", "Cu + Ni", "Ni alone"], a: 1, ex: "Cr makes it stainless." },
      { q: "Most reactive metal:", opts: ["Na", "K", "Cs", "Li"], a: 2, ex: "Caesium." },
      { q: "Least reactive metal:", opts: ["Fe", "Cu", "Au", "Hg"], a: 2, ex: "Gold (noble metal)." },
      { q: "Sodium is stored in:", opts: ["Water", "Air", "Kerosene", "Acid"], a: 2, ex: "Reacts violently with air/water." },
      { q: "Galvanization is coating of:", opts: ["Iron with zinc", "Iron with copper", "Iron with gold", "Zinc with iron"], a: 0, ex: "Zn on Fe prevents rust." },
      { q: "Allotrope of carbon:", opts: ["Diamond", "Graphite", "Fullerene", "All correct"], a: 3, ex: "All forms of C." },
      { q: "Bulb filament made of:", opts: ["Cu", "Fe", "Tungsten", "Aluminium"], a: 2, ex: "W = high MP." },
      { q: "Silver tarnishes due to:", opts: ["Oxygen", "Sulfur in air → Ag₂S", "Water", "Carbon"], a: 1, ex: "Black silver sulfide." },
      { q: "Iodine is which group:", opts: ["Halogen", "Alkali", "Noble gas", "Transition"], a: 0, ex: "Group 17." },
      { q: "Most malleable metal:", opts: ["Au", "Ag", "Cu", "Fe"], a: 0, ex: "Gold." },
      { q: "Nichrome (heating element) contains:", opts: ["Ni + Cr + Fe", "Cu + Sn", "Ni only", "Fe + C"], a: 0, ex: "Resistive alloy." },
      { q: "German silver contains:", opts: ["Silver", "Cu + Zn + Ni (no Ag)", "Only Ni", "Ag + Cu"], a: 1, ex: "Misnomer — no silver." },
      { q: "Aluminium doesn't corrode because:", opts: ["Pure", "Forms Al₂O₃ layer", "Hard", "Light"], a: 1, ex: "Oxide layer protects." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 23. ACIDS, BASES & SALTS
  // ───────────────────────────────────────────────────────────────
  T["sci-chem-acids-bases"] = {
    body: `
      <h2>Acids, Bases & Salts</h2>

      <h3>1. Acids</h3>
      <ul>
        <li>Substance that releases H⁺ ions in water.</li>
        <li>Sour in taste (lemon, vinegar).</li>
        <li>Turn blue litmus red.</li>
        <li>pH < 7.</li>
        <li>React with metals to release H₂ gas.</li>
        <li>React with carbonates to release CO₂.</li>
      </ul>

      <h4>Common Acids</h4>
      <table>
        <tr><th>Acid</th><th>Formula</th><th>Source/Use</th></tr>
        <tr><td>Hydrochloric acid</td><td>HCl</td><td>Gastric juice, cleaning</td></tr>
        <tr><td>Sulfuric acid</td><td>H₂SO₄</td><td>"King of chemicals"; batteries, fertilizers</td></tr>
        <tr><td>Nitric acid</td><td>HNO₃</td><td>Fertilizers, explosives</td></tr>
        <tr><td>Carbonic acid</td><td>H₂CO₃</td><td>Soft drinks, rain</td></tr>
        <tr><td>Acetic acid</td><td>CH₃COOH</td><td>Vinegar (5-8% in water)</td></tr>
        <tr><td>Citric acid</td><td>C₆H₈O₇</td><td>Citrus fruits</td></tr>
        <tr><td>Lactic acid</td><td>—</td><td>Curd, sour milk</td></tr>
        <tr><td>Tartaric acid</td><td>—</td><td>Tamarind, grapes</td></tr>
        <tr><td>Oxalic acid</td><td>—</td><td>Spinach, tomato, rhubarb</td></tr>
        <tr><td>Formic acid</td><td>HCOOH</td><td>Ant sting, nettle sting</td></tr>
        <tr><td>Malic acid</td><td>—</td><td>Apple</td></tr>
        <tr><td>Phosphoric acid</td><td>H₃PO₄</td><td>Cola drinks</td></tr>
      </table>

      <h3>2. Bases</h3>
      <ul>
        <li>Substance that releases OH⁻ ions in water.</li>
        <li>Bitter, soapy feel.</li>
        <li>Turn red litmus blue.</li>
        <li>pH > 7.</li>
        <li><b>Alkali</b> = water-soluble base.</li>
      </ul>

      <h4>Common Bases</h4>
      <table>
        <tr><th>Base</th><th>Formula</th><th>Use</th></tr>
        <tr><td>Sodium hydroxide (Caustic soda)</td><td>NaOH</td><td>Soap, paper, drain cleaner</td></tr>
        <tr><td>Potassium hydroxide</td><td>KOH</td><td>Soaps, batteries</td></tr>
        <tr><td>Calcium hydroxide (Slaked lime)</td><td>Ca(OH)₂</td><td>Whitewash, plaster</td></tr>
        <tr><td>Magnesium hydroxide (Milk of magnesia)</td><td>Mg(OH)₂</td><td>Antacid</td></tr>
        <tr><td>Ammonium hydroxide</td><td>NH₄OH</td><td>Cleaning, fertilizers</td></tr>
      </table>

      <h3>3. pH Scale (0 to 14)</h3>
      <ul>
        <li>pH = −log[H⁺].</li>
        <li>pH 7 = neutral (pure water).</li>
        <li>pH < 7 = acidic (lower = stronger).</li>
        <li>pH > 7 = basic.</li>
        <li>Each unit = 10x change.</li>
      </ul>

      <h4>pH of Common Substances</h4>
      <table>
        <tr><th>Substance</th><th>pH</th></tr>
        <tr><td>Battery acid</td><td>0-1</td></tr>
        <tr><td>Gastric juice</td><td>1.5</td></tr>
        <tr><td>Lemon juice</td><td>2</td></tr>
        <tr><td>Vinegar</td><td>2.5-3.5</td></tr>
        <tr><td>Coffee, tomato</td><td>4-5</td></tr>
        <tr><td>Milk</td><td>6.5</td></tr>
        <tr><td>Pure water, blood</td><td>7 / 7.4</td></tr>
        <tr><td>Baking soda solution</td><td>9</td></tr>
        <tr><td>Soap</td><td>9-10</td></tr>
        <tr><td>Milk of magnesia</td><td>10</td></tr>
        <tr><td>Ammonia</td><td>11-12</td></tr>
        <tr><td>Bleach</td><td>13</td></tr>
        <tr><td>Lye (NaOH)</td><td>14</td></tr>
      </table>

      <h3>4. Neutralization</h3>
      <p>Acid + Base → Salt + Water (heat released).</p>
      <p>HCl + NaOH → NaCl + H₂O</p>
      <p>Applications:</p>
      <ul>
        <li>Antacid (Mg(OH)₂) neutralizes excess stomach acid.</li>
        <li>Bee sting (acidic) treated with baking soda.</li>
        <li>Wasp sting (alkaline) treated with vinegar.</li>
        <li>Acidic soil treated with lime.</li>
        <li>Toothpaste (basic) neutralizes acids from food.</li>
      </ul>

      <h3>5. Salts</h3>
      <ul>
        <li>Compounds formed when acid reacts with base.</li>
        <li>Examples:
          <ul>
            <li>NaCl (sodium chloride): common table salt.</li>
            <li>KNO₃ (potassium nitrate): gunpowder, saltpeter.</li>
            <li>NaHCO₃: baking soda.</li>
            <li>Na₂CO₃: washing soda.</li>
            <li>CaSO₄·2H₂O: gypsum.</li>
            <li>CaOCl₂: bleaching powder.</li>
            <li>CuSO₄·5H₂O: blue vitriol.</li>
            <li>FeSO₄·7H₂O: green vitriol.</li>
            <li>(NH₄)₂SO₄: ammonium sulfate (fertilizer).</li>
          </ul>
        </li>
      </ul>

      <h3>6. Indicators</h3>
      <ul>
        <li><b>Litmus</b>: red ↔ blue.</li>
        <li><b>Phenolphthalein</b>: colorless in acid; pink in base.</li>
        <li><b>Methyl orange</b>: red in acid; yellow in base.</li>
        <li><b>Turmeric</b>: yellow → red in base (like in haldi).</li>
        <li><b>Red cabbage</b>: natural indicator with many colours.</li>
      </ul>

      <h3>7. Strong vs Weak</h3>
      <ul>
        <li>Strong acid: fully dissociates (HCl, H₂SO₄, HNO₃).</li>
        <li>Weak acid: partial dissociation (CH₃COOH, citric).</li>
        <li>Strong base: NaOH, KOH.</li>
        <li>Weak base: NH₄OH.</li>
      </ul>

      <h3>🎯 Tips</h3>
      <ul>
        <li>H₂SO₄ called "King of Chemicals".</li>
        <li>Vinegar = acetic acid; Curd = lactic acid; Ant sting = formic acid.</li>
        <li>Blood pH = 7.35-7.45 (slightly basic).</li>
        <li>Baking soda (NaHCO₃) is weakly basic — neutralizes stomach acid.</li>
        <li>Antacids contain Mg(OH)₂ or Al(OH)₃.</li>
      </ul>
    `,
    mcq: [
      { q: "pH 7 means:", opts: ["Acidic", "Basic", "Neutral", "Salt"], a: 2, ex: "Neutral." },
      { q: "Acid in vinegar:", opts: ["Citric", "Acetic", "Lactic", "Tartaric"], a: 1, ex: "Acetic (CH₃COOH)." },
      { q: "Acid in lemon:", opts: ["Citric", "Acetic", "Lactic", "Formic"], a: 0, ex: "Citric acid." },
      { q: "Acid in curd:", opts: ["Acetic", "Lactic", "Citric", "Oxalic"], a: 1, ex: "Lactic acid." },
      { q: "Acid in ant sting:", opts: ["Acetic", "Formic", "Citric", "Lactic"], a: 1, ex: "Formic acid." },
      { q: "Strong acid:", opts: ["CH₃COOH", "HCl", "Citric", "Lactic"], a: 1, ex: "HCl fully dissociates." },
      { q: "Litmus turns:", opts: ["Red in acid", "Blue in acid", "Green in base", "Yellow in acid"], a: 0, ex: "Blue litmus → red in acid." },
      { q: "Baking soda is:", opts: ["NaOH", "NaHCO₃", "Na₂CO₃", "NaCl"], a: 1, ex: "Sodium bicarbonate." },
      { q: "Washing soda is:", opts: ["NaHCO₃", "Na₂CO₃", "NaCl", "NaOH"], a: 1, ex: "Sodium carbonate." },
      { q: "King of chemicals:", opts: ["HCl", "H₂SO₄", "HNO₃", "Aqua regia"], a: 1, ex: "Sulfuric acid." },
      { q: "Antacid uses:", opts: ["HCl", "NaCl", "Mg(OH)₂", "Sugar"], a: 2, ex: "Milk of magnesia." },
      { q: "Phenolphthalein in base:", opts: ["Colorless", "Pink", "Yellow", "Blue"], a: 1, ex: "Pink." },
      { q: "pH of pure water:", opts: ["0", "7", "14", "10"], a: 1, ex: "Neutral." },
      { q: "pH of blood:", opts: ["6", "7.4", "9", "12"], a: 1, ex: "Slightly basic." },
      { q: "Plaster of Paris:", opts: ["CaSO₄·½H₂O", "CaCO₃", "Ca(OH)₂", "CaO"], a: 0, ex: "Calcium sulfate hemihydrate." },
      { q: "Bleaching powder:", opts: ["CaOCl₂", "NaOCl", "Ca(OH)₂", "NaCl"], a: 0, ex: "Calcium hypochlorite." },
      { q: "Caustic soda:", opts: ["NaOH", "Na₂CO₃", "NaCl", "NaHCO₃"], a: 0, ex: "NaOH." },
      { q: "Bee sting treated with:", opts: ["Vinegar", "Baking soda", "Lemon", "Salt"], a: 1, ex: "Basic neutralizes acidic sting." },
      { q: "Acidic soil treated with:", opts: ["More acid", "Lime (Ca(OH)₂)", "Salt", "Sugar"], a: 1, ex: "Base neutralizes acid." },
      { q: "Common salt:", opts: ["KCl", "NaCl", "CaCl₂", "MgCl₂"], a: 1, ex: "Sodium chloride." }
    ]
  };

})();
