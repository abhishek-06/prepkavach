// Maths — SSC CGL Quant + Advance
// Format per topic: Concept → Formulas → Tricks → Solved examples → Practice MCQs → Common traps
// Math expressions render via KaTeX. Use $...$ for inline, $$...$$ for block.

(function () {
  const T = window.TOPICS;

  // ───────────────────────────────────────────────────────────────
  // META: How to use this section
  // ───────────────────────────────────────────────────────────────
  T["math-intro"] = {
    body: `
      <h2>How to Use the Maths Section</h2>
      <p>This section covers <b>SSC CGL Quant (Tier-1)</b> and <b>Advanced Maths (Tier-2)</b>. Approach the topics in order, but you can jump to any.</p>

      <h3>What each topic gives you</h3>
      <ol>
        <li><b>Concept Notes</b> — theory + formulas (rendered with KaTeX so they look like a textbook).</li>
        <li><b>🔥 Shortcut Tricks</b> — 1-line tricks from Rakesh Yadav / Abhinay style for fast solving.</li>
        <li><b>Solved Examples</b> — every question pattern covered, with step-by-step solution and the trick used.</li>
        <li><b>Practice MCQs</b> — 25-30 questions with detailed explanations.</li>
        <li><b>🎯 Common Traps</b> — mistakes that trick examinees.</li>
      </ol>

      <h3>How to study daily</h3>
      <ul>
        <li><b>Day 1 of new topic</b>: Read concepts + tricks. Solve all examples. Take notes of tricks.</li>
        <li><b>Day 2</b>: Try all practice MCQs without looking at solutions. Score yourself.</li>
        <li><b>Day 3</b>: Redo the ones you got wrong. Move to next topic.</li>
        <li><b>Weekly</b>: Re-do MCQs of all topics done so far. Speed builds from re-doing same problems.</li>
      </ul>

      <h3>Sample KaTeX rendering</h3>
      <p>Inline math: the formula $a^2 + b^2 = c^2$ (Pythagoras).</p>
      <p>Block math:</p>
      <p>$$\\text{Compound Interest} \\;=\\; P\\left(1 + \\frac{r}{100}\\right)^n - P$$</p>
      <p>$$1 + 2 + 3 + \\cdots + n \\;=\\; \\frac{n(n+1)}{2}$$</p>

      <h3>Honest note</h3>
      <p>This material is great for <b>learning + revision</b>. For exam-day <b>speed under pressure</b>, also do timed mock tests from SSC's PYQ papers. Both together = guaranteed selection.</p>

      <h3>What's covered (33 topics)</h3>
      <p><b>Quant (24)</b>: Number System, Simplification, Fractions/Decimals, Surds & Indices, Square/Cube Root, HCF/LCM, Percentage, P&L, Discount, Average, Ages, Ratio, Race, Mixture, Partnership, SI, CI, Time-Work, Pipes-Cisterns, Time-Speed-Distance, Trains, Boats-Streams, Series, DI.</p>
      <p><b>Advance Maths (9)</b>: Algebra, Trigonometry, Height-Distance, Mensuration, Geometry, Coordinate Geometry, Permutation-Combination, Probability, Statistics.</p>
    `,
    mcq: [
      { q: "Which is NOT covered in this Maths section?", opts: ["Geometry", "Trigonometry", "Computer Science", "Probability"], a: 2, ex: "This section covers Quant + Advance Maths only." },
      { q: "Best way to use this section?", opts: ["Read once, never revisit", "Read concepts → solve examples → attempt MCQs without looking", "Skip examples, do only MCQs", "Memorize MCQ answers"], a: 1, ex: "Spaced repetition + practice without looking builds real understanding." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 1. NUMBER SYSTEM
  // ───────────────────────────────────────────────────────────────
  T["math-number-system"] = {
    body: `
      <h2>Number System</h2>
      <p>The foundation of Quant. SSC asks <b>3-5 questions</b> directly from this every year: divisibility, remainders, unit digits, trailing zeros, sum-formula based.</p>

      <hr>

      <h3>1. Classification of Numbers</h3>
      <ul>
        <li><b>Natural Numbers (N)</b>: $1, 2, 3, \\ldots$ — counting numbers.</li>
        <li><b>Whole Numbers (W)</b>: $0, 1, 2, 3, \\ldots$ — natural + zero.</li>
        <li><b>Integers (Z)</b>: $\\ldots, -2, -1, 0, 1, 2, \\ldots$ — positive + negative + zero.</li>
        <li><b>Rational Numbers (Q)</b>: numbers of the form $\\frac{p}{q}$ where $q \\ne 0$. Includes all integers, fractions, terminating + recurring decimals.</li>
        <li><b>Irrational Numbers</b>: non-terminating, non-recurring decimals. Examples: $\\sqrt{2}, \\sqrt{3}, \\pi, e$.</li>
        <li><b>Real Numbers (R)</b>: rational + irrational.</li>
        <li><b>Imaginary Numbers</b>: involve $i = \\sqrt{-1}$. Outside SSC scope.</li>
      </ul>

      <h3>2. Even, Odd, Prime, Composite</h3>
      <ul>
        <li><b>Even</b>: divisible by 2 ($0, 2, 4, \\ldots$).</li>
        <li><b>Odd</b>: not divisible by 2 ($1, 3, 5, \\ldots$).</li>
        <li><b>Prime</b>: exactly 2 factors (1 and itself). Examples: $2, 3, 5, 7, 11, 13, 17, 19, 23, \\ldots$
          <ul>
            <li><b>2 is the only even prime.</b></li>
            <li><b>1 is neither prime nor composite.</b></li>
            <li>There are <b>25 primes below 100</b>.</li>
          </ul>
        </li>
        <li><b>Composite</b>: more than 2 factors (e.g., 4, 6, 8, 9, 10...).</li>
        <li><b>Co-prime</b>: two numbers with HCF = 1 (e.g., 8 and 9).</li>
        <li><b>Twin primes</b>: pairs differing by 2 (e.g., 3-5, 5-7, 11-13).</li>
      </ul>

      <h3>3. Divisibility Rules — MUST MEMORIZE</h3>
      <table>
        <tr><th>Divisible by</th><th>Rule</th><th>Example</th></tr>
        <tr><td><b>2</b></td><td>Last digit is even</td><td>1234 ✓</td></tr>
        <tr><td><b>3</b></td><td>Digit sum divisible by 3</td><td>123 → 1+2+3 = 6 ✓</td></tr>
        <tr><td><b>4</b></td><td>Last 2 digits divisible by 4</td><td>1316 → 16 ✓</td></tr>
        <tr><td><b>5</b></td><td>Last digit 0 or 5</td><td>235 ✓</td></tr>
        <tr><td><b>6</b></td><td>Divisible by 2 AND 3</td><td>132 ✓</td></tr>
        <tr><td><b>7</b></td><td>Double last digit, subtract from rest; check divisibility recursively</td><td>161 → 16 − 2(1) = 14 ✓</td></tr>
        <tr><td><b>8</b></td><td>Last 3 digits divisible by 8</td><td>17128 → 128 ✓</td></tr>
        <tr><td><b>9</b></td><td>Digit sum divisible by 9</td><td>153 → 1+5+3 = 9 ✓</td></tr>
        <tr><td><b>10</b></td><td>Last digit 0</td><td>140 ✓</td></tr>
        <tr><td><b>11</b></td><td>Alternating digit sum divisible by 11</td><td>2728: $(2+2) - (7+8) = -11$ ✓</td></tr>
        <tr><td><b>13</b></td><td>Multiply last digit by 4, add to rest; recursive</td><td>247 → 24 + 4(7) = 52 ✓</td></tr>
        <tr><td><b>25</b></td><td>Last 2 digits = 00, 25, 50, or 75</td><td>375 ✓</td></tr>
        <tr><td><b>125</b></td><td>Last 3 digits divisible by 125</td><td>1000, 1125, 1250, 1375...</td></tr>
      </table>

      <h3>4. Key Sum Formulas</h3>
      <p>$$\\text{Sum of first }n\\text{ natural numbers} = 1+2+3+\\cdots+n = \\frac{n(n+1)}{2}$$</p>
      <p>$$\\text{Sum of squares of first }n: \\quad 1^2+2^2+\\cdots+n^2 = \\frac{n(n+1)(2n+1)}{6}$$</p>
      <p>$$\\text{Sum of cubes of first }n: \\quad 1^3+2^3+\\cdots+n^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$$</p>
      <p>$$\\text{Sum of first }n\\text{ odd numbers: } 1+3+5+\\cdots+(2n-1) = n^2$$</p>
      <p>$$\\text{Sum of first }n\\text{ even numbers: } 2+4+6+\\cdots+2n = n(n+1)$$</p>

      <hr>

      <h3>🔥 Shortcut Tricks</h3>

      <h4>Trick 1: Unit Digit Cyclicity</h4>
      <p>The last digit of $a^n$ depends only on the last digit of $a$ and a cyclicity pattern. Learn this table:</p>
      <table>
        <tr><th>Last digit of base</th><th>Cyclicity (period)</th><th>Pattern</th></tr>
        <tr><td><b>0</b></td><td>1</td><td>0</td></tr>
        <tr><td><b>1</b></td><td>1</td><td>1</td></tr>
        <tr><td><b>2</b></td><td>4</td><td>2, 4, 8, 6</td></tr>
        <tr><td><b>3</b></td><td>4</td><td>3, 9, 7, 1</td></tr>
        <tr><td><b>4</b></td><td>2</td><td>4, 6</td></tr>
        <tr><td><b>5</b></td><td>1</td><td>5</td></tr>
        <tr><td><b>6</b></td><td>1</td><td>6</td></tr>
        <tr><td><b>7</b></td><td>4</td><td>7, 9, 3, 1</td></tr>
        <tr><td><b>8</b></td><td>4</td><td>8, 4, 2, 6</td></tr>
        <tr><td><b>9</b></td><td>2</td><td>9, 1</td></tr>
      </table>
      <p><b>How to use</b>: For $a^n$ where the base ends in $d$ with cyclicity $c$, find $n \\bmod c$. If remainder $r = 0$, take the last entry in pattern; otherwise the $r$-th entry.</p>

      <h4>Trick 2: Trailing Zeros in n!</h4>
      <p>Number of trailing zeros in $n!$ is found by counting the power of 5:</p>
      <p>$$Z(n!) = \\left\\lfloor\\frac{n}{5}\\right\\rfloor + \\left\\lfloor\\frac{n}{25}\\right\\rfloor + \\left\\lfloor\\frac{n}{125}\\right\\rfloor + \\cdots$$</p>
      <p>Example: zeros in $100! = \\lfloor 100/5 \\rfloor + \\lfloor 100/25 \\rfloor = 20 + 4 = 24$.</p>

      <h4>Trick 3: Power of a Prime in n! (Legendre)</h4>
      <p>$$E_p(n!) = \\left\\lfloor\\frac{n}{p}\\right\\rfloor + \\left\\lfloor\\frac{n}{p^2}\\right\\rfloor + \\left\\lfloor\\frac{n}{p^3}\\right\\rfloor + \\cdots$$</p>
      <p>Example: power of 3 in $50! = \\lfloor 50/3 \\rfloor + \\lfloor 50/9 \\rfloor + \\lfloor 50/27 \\rfloor = 16 + 5 + 1 = 22$.</p>

      <h4>Trick 4: Number of Factors</h4>
      <p>If $N = p_1^{a_1} \\cdot p_2^{a_2} \\cdot p_3^{a_3} \\cdots$, then:</p>
      <ul>
        <li><b>Total factors</b> $= (a_1 + 1)(a_2 + 1)(a_3 + 1)\\cdots$</li>
        <li><b>Sum of factors</b> $= \\frac{p_1^{a_1+1}-1}{p_1-1} \\cdot \\frac{p_2^{a_2+1}-1}{p_2-1} \\cdots$</li>
        <li><b>Even factors</b>: if $N$ has 2 as a factor, replace $(a_1+1)$ for 2 with $a_1$ instead.</li>
        <li><b>Odd factors</b>: drop the factor of 2 entirely.</li>
      </ul>

      <h4>Trick 5: Successive Division Remainders</h4>
      <p>If $N$ when divided by $d_1, d_2, d_3$ successively leaves remainders $r_1, r_2, r_3$, then to find $N$ work backwards: start with last quotient $q$, then $q \\cdot d_3 + r_3 = $ previous number, and so on.</p>

      <h4>Trick 6: $a^n - b^n$ Divisibility</h4>
      <ul>
        <li>$a^n - b^n$ is <b>always</b> divisible by $(a - b)$.</li>
        <li>$a^n - b^n$ is divisible by $(a + b)$ when $n$ is even.</li>
        <li>$a^n + b^n$ is divisible by $(a + b)$ when $n$ is odd.</li>
        <li>$a^n + b^n$ is never divisible by $(a - b)$.</li>
      </ul>

      <h4>Trick 7: Remainder Theorem (when divided by 9 or 11)</h4>
      <p>Remainder of $N$ when divided by 9 = remainder of (sum of digits of $N$) divided by 9.</p>
      <p>Remainder of $N$ when divided by 11 = remainder of (alternating digit sum) divided by 11.</p>

      <hr>

      <h3>Solved Examples</h3>

      <h4>Example 1: Unit Digit</h4>
      <p><b>Find the unit digit of $7^{105}$.</b></p>
      <p><b>Solution</b>: Cyclicity of 7 is 4 (pattern: 7, 9, 3, 1). Compute $105 \\div 4 = 26$ remainder $1$. So unit digit = 1st entry = <b>7</b>.</p>

      <h4>Example 2: Unit Digit Combined</h4>
      <p><b>Unit digit of $2^{31} \\times 3^{47}$?</b></p>
      <p><b>Solution</b>: $2^{31}$: cyclicity 4. $31 \\bmod 4 = 3$. Unit digit = 8 (3rd in 2,4,8,6).<br>
      $3^{47}$: cyclicity 4. $47 \\bmod 4 = 3$. Unit digit = 7 (3rd in 3,9,7,1).<br>
      Product unit digit = $8 \\times 7 = 56$ → unit digit = <b>6</b>.</p>

      <h4>Example 3: Trailing Zeros</h4>
      <p><b>How many zeros are at the end of $200!$?</b></p>
      <p><b>Solution</b>: $\\lfloor 200/5 \\rfloor + \\lfloor 200/25 \\rfloor + \\lfloor 200/125 \\rfloor = 40 + 8 + 1 = $ <b>49 zeros</b>.</p>

      <h4>Example 4: Number of Factors</h4>
      <p><b>How many factors does $360$ have?</b></p>
      <p><b>Solution</b>: $360 = 2^3 \\cdot 3^2 \\cdot 5^1$. Total factors $= (3+1)(2+1)(1+1) = 4 \\cdot 3 \\cdot 2 = $ <b>24</b>.</p>

      <h4>Example 5: Number of Odd Factors</h4>
      <p><b>How many odd factors does $360$ have?</b></p>
      <p><b>Solution</b>: Drop the factor of 2. So consider $3^2 \\cdot 5^1$. Odd factors $= (2+1)(1+1) = $ <b>6</b>.</p>

      <h4>Example 6: Divisibility by 11</h4>
      <p><b>Is $945362$ divisible by 11?</b></p>
      <p><b>Solution</b>: Alternating sum = $(9+5+6) - (4+3+2) = 20 - 9 = 11$. Divisible by 11. <b>Yes</b>.</p>

      <h4>Example 7: Sum of First n Numbers</h4>
      <p><b>Find $1 + 2 + 3 + \\cdots + 50$.</b></p>
      <p><b>Solution</b>: $\\frac{n(n+1)}{2} = \\frac{50 \\cdot 51}{2} = $ <b>1275</b>.</p>

      <h4>Example 8: Sum of Squares</h4>
      <p><b>Find $1^2 + 2^2 + \\cdots + 20^2$.</b></p>
      <p><b>Solution</b>: $\\frac{n(n+1)(2n+1)}{6} = \\frac{20 \\cdot 21 \\cdot 41}{6} = $ <b>2870</b>.</p>

      <h4>Example 9: Sum of Odd Numbers</h4>
      <p><b>Sum of first 30 odd natural numbers?</b></p>
      <p><b>Solution</b>: $n^2 = 30^2 = $ <b>900</b>.</p>

      <h4>Example 10: Remainder Theorem (Mod 7)</h4>
      <p><b>Find the remainder when $7^{82}$ is divided by $5$.</b></p>
      <p><b>Solution</b>: $7 \\equiv 2 \\pmod 5$. So $7^{82} \\equiv 2^{82} \\pmod 5$. Cyclicity of 2 mod 5: $2, 4, 3, 1$ (period 4). $82 \\bmod 4 = 2$. So $2^{82} \\equiv 4 \\pmod 5$. Remainder = <b>4</b>.</p>

      <h4>Example 11: $a^n - b^n$ Divisibility</h4>
      <p><b>Is $99^{99} - 1$ divisible by 98?</b></p>
      <p><b>Solution</b>: $99^{99} - 1^{99}$. Always divisible by $(99 - 1) = 98$. <b>Yes</b>.</p>

      <h4>Example 12: Power of a Prime in Factorial</h4>
      <p><b>Find the power of 3 in $100!$.</b></p>
      <p><b>Solution</b>: $\\lfloor 100/3 \\rfloor + \\lfloor 100/9 \\rfloor + \\lfloor 100/27 \\rfloor + \\lfloor 100/81 \\rfloor = 33 + 11 + 3 + 1 = $ <b>48</b>.</p>

      <h4>Example 13: Number to Add for Divisibility</h4>
      <p><b>What is the least number to be added to $1057$ to make it divisible by $23$?</b></p>
      <p><b>Solution</b>: $1057 \\div 23 = 45$ remainder $22$. So add $23 - 22 = $ <b>1</b>.</p>

      <h4>Example 14: Number to Subtract</h4>
      <p><b>What is the least number to subtract from $13294$ so it's divisible by $97$?</b></p>
      <p><b>Solution</b>: $13294 \\div 97 = 137$ remainder $5$. So subtract <b>5</b>.</p>

      <h4>Example 15: Successive Division</h4>
      <p><b>A number when divided by 3 gives remainder 1, when quotient divided by 5 gives remainder 2, when that quotient divided by 7 gives remainder 4. Find the smallest such number.</b></p>
      <p><b>Solution</b>: Start from last. Last quotient $= 0$ (smallest). Then $0 \\cdot 7 + 4 = 4$. Then $4 \\cdot 5 + 2 = 22$. Then $22 \\cdot 3 + 1 = $ <b>67</b>.</p>

      <h4>Example 16: Find Last Two Digits</h4>
      <p><b>Last two digits of $7^{2008}$?</b></p>
      <p><b>Solution</b>: $7^4 = 2401$. So $7^{2008} = (7^4)^{502} = 2401^{502}$. Last two digits of $2401^{502}$ = last two digits of $01^{502} = $ <b>01</b>.</p>

      <h4>Example 17: Sum of Digit Trick</h4>
      <p><b>If $N = \\underbrace{777\\ldots7}_{50\\text{ digits}}$, find the remainder when $N$ is divided by 9.</b></p>
      <p><b>Solution</b>: Sum of digits $= 50 \\times 7 = 350$. $350 \\div 9$ remainder $= 350 - 38 \\cdot 9 = 350 - 342 = $ <b>8</b>.</p>

      <h4>Example 18: Counting Primes</h4>
      <p><b>How many prime numbers are there below 50?</b></p>
      <p><b>Solution</b>: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$ — total <b>15 primes</b> below 50. (Below 100 there are 25.)</p>

      <hr>

      <h3>Practice MCQs</h3>
      <p><i>Try without looking at solutions first. Each MCQ below has its solution in the explanation when you submit.</i></p>

      <hr>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li><b>Trap 1</b>: Confusing "divisible by 2 and 3" with "divisible by 5 or 7". For 6 = both 2 AND 3 must work.</li>
        <li><b>Trap 2</b>: Forgetting that 1 is <b>neither prime nor composite</b>.</li>
        <li><b>Trap 3</b>: Forgetting that 2 is the <b>only even prime</b>.</li>
        <li><b>Trap 4</b>: For trailing zeros, students count powers of 2 (wrong). Count powers of 5 (because 2s are always abundant).</li>
        <li><b>Trap 5</b>: For unit digit cyclicity, remember to take <b>remainder $r$; if $r = 0$, use the last entry of the pattern</b>, not the first.</li>
        <li><b>Trap 6</b>: $a^n + b^n$ is divisible by $(a + b)$ only when $n$ is <b>odd</b>. Many forget this distinction.</li>
        <li><b>Trap 7</b>: In successive division, remember to work <b>backwards</b> starting from the last quotient.</li>
      </ul>
    `,
    mcq: [
      { q: "Find the unit digit of $3^{1234}$.", opts: ["1", "3", "7", "9"], a: 3, ex: "Cyclicity of 3 is 4, pattern (3, 9, 7, 1). $1234 \\bmod 4 = 2$. So unit digit = 2nd entry = 9." },
      { q: "Number of trailing zeros in $150!$?", opts: ["30", "33", "37", "40"], a: 2, ex: "$\\lfloor 150/5 \\rfloor + \\lfloor 150/25 \\rfloor + \\lfloor 150/125 \\rfloor = 30 + 6 + 1 = 37$." },
      { q: "How many factors does $84$ have?", opts: ["10", "12", "14", "8"], a: 1, ex: "$84 = 2^2 \\cdot 3 \\cdot 7$. Factors $= (2+1)(1+1)(1+1) = 3 \\cdot 2 \\cdot 2 = 12$." },
      { q: "Remainder when $2^{2008}$ is divided by $7$?", opts: ["1", "2", "4", "6"], a: 1, ex: "$2^3 \\equiv 1 \\pmod 7$. Cyclicity 3, pattern (2, 4, 1). $2008 \\bmod 3 = 1$. So remainder = 1st entry = 2." },
      { q: "Sum $1 + 2 + 3 + \\cdots + 100 = ?$", opts: ["4950", "5000", "5050", "5150"], a: 2, ex: "$\\frac{n(n+1)}{2} = \\frac{100 \\cdot 101}{2} = 5050$." },
      { q: "Sum of first 25 odd natural numbers?", opts: ["525", "625", "725", "825"], a: 1, ex: "Sum of first $n$ odd numbers $= n^2 = 25^2 = 625$." },
      { q: "If $N = 2^3 \\cdot 3^2 \\cdot 5$, sum of all factors of $N$?", opts: ["468", "1170", "360", "936"], a: 1, ex: "Sum = $\\frac{2^4-1}{1} \\cdot \\frac{3^3-1}{2} \\cdot \\frac{5^2-1}{4} = 15 \\cdot 13 \\cdot 6 = 1170$." },
      { q: "Is $9999$ divisible by $99$?", opts: ["Yes", "No", "Only by 9", "Only by 11"], a: 0, ex: "$9999 = 99 \\times 101$. Yes, divisible." },
      { q: "Least 4-digit number divisible by $25$ is?", opts: ["1000", "1025", "1050", "975"], a: 0, ex: "1000 ends in 00, divisible by 25. Smallest 4-digit." },
      { q: "Number of primes between 1 and 100?", opts: ["20", "23", "25", "30"], a: 2, ex: "Exactly 25 primes below 100." },
      { q: "If $a^n - b^n$ is divisible by $a + b$, then $n$ is:", opts: ["always odd", "always even", "any natural number", "always prime"], a: 1, ex: "$a^n - b^n$ is divisible by $a+b$ only when $n$ is even." },
      { q: "Last digit of $7^{100}$?", opts: ["1", "3", "7", "9"], a: 0, ex: "Cyclicity of 7 is 4, pattern (7,9,3,1). $100 \\bmod 4 = 0$, so use last entry = 1." },
      { q: "Largest power of $5$ dividing $200!$?", opts: ["48", "49", "50", "51"], a: 1, ex: "$\\lfloor 200/5 \\rfloor + \\lfloor 200/25 \\rfloor + \\lfloor 200/125 \\rfloor = 40 + 8 + 1 = 49$." },
      { q: "Remainder when $43^{43}$ is divided by $7$?", opts: ["1", "3", "6", "4"], a: 0, ex: "$43 = 7 \\cdot 6 + 1 \\equiv 1 \\pmod 7$. So $43^{43} \\equiv 1 \\pmod 7$." },
      { q: "How many odd factors does $72$ have?", opts: ["2", "3", "4", "6"], a: 1, ex: "$72 = 2^3 \\cdot 3^2$. Drop the factor of 2 for odd factors. Odd factors of $3^2 = (2+1) = 3$: namely 1, 3, 9." },
      { q: "Number of zeros at end of $30!$?", opts: ["5", "6", "7", "8"], a: 2, ex: "$\\lfloor 30/5 \\rfloor + \\lfloor 30/25 \\rfloor = 6 + 1 = 7$." },
      { q: "Find the unit digit of $123^{456}$.", opts: ["1", "3", "5", "9"], a: 0, ex: "Last digit of base is 3. Cyclicity 4. $456 \\bmod 4 = 0$, so use last entry of (3,9,7,1) = 1." },
      { q: "$N$ when divided by $13$ leaves remainder $9$. Remainder when $2N$ is divided by $13$?", opts: ["5", "9", "18", "6"], a: 0, ex: "$N = 13k + 9$. $2N = 26k + 18 = 13(2k+1) + 5$. Remainder = 5." },
      { q: "Is $0$ a natural number (Indian convention)?", opts: ["Yes", "No", "Sometimes", "Cannot say"], a: 1, ex: "In Indian convention, naturals start at 1. Zero is a whole number." },
      { q: "Smallest 5-digit number divisible by $11$?", opts: ["10010", "10011", "10001", "10100"], a: 0, ex: "$10000 \\div 11 = 909$ rem 1. So smallest = $10000 + (11-1) = 10010$." },
      { q: "Find unit digit of $1! + 2! + 3! + \\cdots + 100!$.", opts: ["1", "3", "5", "7"], a: 1, ex: "$1!+2!+3!+4! = 1+2+6+24 = 33$. For $n \\ge 5$, $n!$ ends in 0. So unit digit = 3." },
      { q: "How many natural numbers from 1 to 100 are not divisible by 2, 3, or 5?", opts: ["20", "26", "30", "32"], a: 1, ex: "By inclusion-exclusion: $100 - (50+33+20) + (16+10+6) - 3 = 100 - 103 + 32 - 3 = 26$." },
      { q: "Sum of all even numbers between 1 and 100 (inclusive of 100)?", opts: ["2450", "2500", "2550", "2600"], a: 2, ex: "Evens: 2, 4, ..., 100. Count = 50. Sum = $2(1+2+\\cdots+50) = 2 \\cdot \\frac{50 \\cdot 51}{2} = 2550$." },
      { q: "Largest 4-digit number divisible by 88?", opts: ["9944", "9988", "9856", "9999"], a: 0, ex: "$9999 \\div 88 = 113$ rem $55$. So largest = $9999 - 55 = 9944$." },
      { q: "If $123x456$ (a 7-digit number) is divisible by 9, value of $x$?", opts: ["3", "6", "9", "0"], a: 1, ex: "Digit sum $= 1+2+3+x+4+5+6 = 21+x$. For divisibility by 9, $21+x$ must be multiple of 9. So $x = 6$ ($21+6=27$)." },
      { q: "Largest prime factor of $42!$?", opts: ["41", "37", "43", "53"], a: 0, ex: "Largest prime $\\le 42$ is 41. It appears once in $42!$." },
      { q: "Sum of any 3 consecutive natural numbers is always divisible by:", opts: ["2", "3", "5", "6"], a: 1, ex: "If consecutive numbers are $n-1, n, n+1$, sum = $3n$, always divisible by 3." },
      { q: "Number of even factors of $2520$?", opts: ["24", "36", "48", "16"], a: 1, ex: "$2520 = 2^3 \\cdot 3^2 \\cdot 5 \\cdot 7$. Total $= 4 \\cdot 3 \\cdot 2 \\cdot 2 = 48$. Odd factors $= 3 \\cdot 2 \\cdot 2 = 12$. Even = $48 - 12 = 36$." }
    ]
  };

})();
