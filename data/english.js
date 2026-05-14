// English — SSC CGL (Grammar + Vocabulary)
// Comprehensive single-source content for SSC CGL English Language section.

(function () {
  const T = window.TOPICS;

  // ───────────────────────────────────────────────────────────────
  // INTRO
  // ───────────────────────────────────────────────────────────────
  T["eng-intro"] = {
    body: `
      <h2>How to Use the English Section</h2>
      <p>SSC CGL English has <b>25 questions in Tier-1</b> (₹2 marks each) and a longer paper in Tier-2. This section covers <b>all 37 topics</b> from grammar and vocabulary you'll need.</p>

      <h3>What each topic gives you</h3>
      <ol>
        <li><b>Concept notes</b> — rules with examples</li>
        <li><b>SSC question pattern</b> — which way SSC frames questions on this topic</li>
        <li><b>🔥 Tricks / Shortcuts</b></li>
        <li><b>Solved examples</b> — 12-20 worked examples per topic covering every pattern</li>
        <li><b>Practice MCQs</b> — 25-30 SSC-style questions with full explanations</li>
        <li><b>🎯 Common Errors / Traps</b></li>
      </ol>

      <h3>SSC English Question Types (Tier-1 breakdown)</h3>
      <ul>
        <li><b>Error Spotting</b> — 2-3 questions</li>
        <li><b>Sentence Improvement</b> — 2-3</li>
        <li><b>Fill in the Blanks</b> — 2-3</li>
        <li><b>Synonyms / Antonyms</b> — 2-4</li>
        <li><b>Idioms & Phrases</b> — 2-3</li>
        <li><b>One Word Substitution</b> — 2-3</li>
        <li><b>Spelling correction (Misspelt)</b> — 1-2</li>
        <li><b>Active/Passive Voice</b> — 1-2</li>
        <li><b>Direct/Indirect Speech</b> — 1-2</li>
        <li><b>Cloze Test</b> — 5 questions (1 passage)</li>
        <li><b>Reading Comprehension</b> — 5 questions (1 passage)</li>
      </ul>

      <h3>How to study daily</h3>
      <ul>
        <li><b>Week 1-2</b>: Master Parts of Speech, Tenses, Subject-Verb Agreement, Articles, Prepositions. These power 50% of Error Spotting questions.</li>
        <li><b>Week 3-4</b>: Voice, Narration, Conditional, Question Tag. Build sentence-transformation muscle.</li>
        <li><b>Week 5-6</b>: Vocabulary daily — learn 10 synonyms + 5 idioms + 5 one-word substitutions per day.</li>
        <li><b>Week 7-8</b>: Practice Cloze Test + RC daily.</li>
        <li><b>Daily 15 min</b>: Read a newspaper editorial (The Hindu / Indian Express). It silently builds vocabulary + grammar instincts.</li>
      </ul>

      <h3>Honest note</h3>
      <p>English requires <b>volume of reading</b> beyond just memorising rules. While this site gives you complete rule-coverage + 1500+ MCQs, also build a habit of reading something English daily (newspaper editorial, short story, etc.) — it makes grammar instinctive.</p>
    `,
    mcq: [
      { q: "Which English topic gives 5 questions from a single passage?", opts: ["Idioms", "Cloze Test", "Synonyms", "Spelling"], a: 1, ex: "Cloze test and Reading Comprehension each have 5 questions from one passage." },
      { q: "How many English questions in SSC CGL Tier-1?", opts: ["20", "25", "30", "50"], a: 1, ex: "25 questions, 50 marks." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 1. PARTS OF SPEECH — Overview
  // ───────────────────────────────────────────────────────────────
  T["eng-parts-of-speech"] = {
    body: `
      <h2>Parts of Speech — Overview</h2>
      <p>Every word in English belongs to one of <b>8 parts of speech</b> based on its function in a sentence. The same word can belong to different parts of speech depending on use.</p>

      <h3>The 8 Parts of Speech</h3>
      <table>
        <tr><th>#</th><th>Part</th><th>Function</th><th>Examples</th></tr>
        <tr><td>1</td><td><b>Noun</b></td><td>names a person, place, thing, or idea</td><td>boy, Delhi, pen, happiness</td></tr>
        <tr><td>2</td><td><b>Pronoun</b></td><td>replaces a noun</td><td>he, she, it, they, who</td></tr>
        <tr><td>3</td><td><b>Adjective</b></td><td>describes a noun/pronoun</td><td>tall, blue, beautiful, three</td></tr>
        <tr><td>4</td><td><b>Verb</b></td><td>shows action or state of being</td><td>run, eat, is, have, become</td></tr>
        <tr><td>5</td><td><b>Adverb</b></td><td>modifies a verb / adjective / other adverb</td><td>quickly, very, never, here</td></tr>
        <tr><td>6</td><td><b>Preposition</b></td><td>shows relation (place, time, direction) of a noun</td><td>in, on, at, between, before</td></tr>
        <tr><td>7</td><td><b>Conjunction</b></td><td>joins words, phrases, or clauses</td><td>and, but, or, because, although</td></tr>
        <tr><td>8</td><td><b>Interjection</b></td><td>expresses sudden emotion</td><td>Oh! Wow! Alas! Hurray!</td></tr>
      </table>

      <h3>1. The Same Word, Different Parts</h3>
      <p>A word's "part of speech" depends on its <b>job</b> in a sentence:</p>
      <ul>
        <li><b>"Light"</b>
          <ul>
            <li>Turn on the <i>light</i> (noun)</li>
            <li>A <i>light</i> bag (adjective)</li>
            <li><i>Light</i> the candle (verb)</li>
          </ul>
        </li>
        <li><b>"Round"</b>
          <ul>
            <li>A <i>round</i> table (adjective)</li>
            <li>The earth goes <i>round</i> the sun (preposition)</li>
            <li>Boxers fought 12 <i>rounds</i> (noun)</li>
            <li>The bus will <i>round</i> the corner (verb)</li>
          </ul>
        </li>
        <li><b>"Up"</b>
          <ul>
            <li>Look <i>up</i> (adverb)</li>
            <li>The price went <i>up</i> the chart (preposition)</li>
            <li>The <i>up</i> train arrives at 9 (adjective)</li>
          </ul>
        </li>
      </ul>

      <h3>2. SSC Question Pattern</h3>
      <p>SSC rarely asks "what part of speech is this word?" directly. But understanding parts of speech is the foundation for <b>every</b> error-detection question. You must be able to identify the role of each word in a sentence.</p>

      <h3>🔥 Tricks to Identify</h3>
      <ul>
        <li><b>Test for Noun</b>: can you put "a / an / the" before it?</li>
        <li><b>Test for Verb</b>: does it answer "what is the subject doing / being"?</li>
        <li><b>Test for Adjective</b>: does it modify a noun (which noun? which one? how many? what kind?)</li>
        <li><b>Test for Adverb</b>: does it answer how / when / where / why / how much about a verb? Most end in <b>-ly</b> (but not all: <i>fast, hard, well</i>).</li>
        <li><b>Test for Preposition</b>: is it followed by a noun/pronoun showing relation?</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Identify the part of speech of the underlined word</b>: "She sings <u>beautifully</u>."</p>
      <p><b>Solution:</b><br>"beautifully" modifies the verb "sings".<br>How does she sing? Beautifully.<br>Answer: <b>Adverb</b>.</p>

      <h4>Example 2</h4>
      <p><b>"After the meeting, we went home."</b> — what is "after"?</p>
      <p><b>Solution:</b><br>"after" is followed by a noun phrase ("the meeting") and shows time relation.<br>Answer: <b>Preposition</b>.</p>

      <h4>Example 3</h4>
      <p><b>"He spoke <u>but</u> nobody listened."</b> — "but" is?</p>
      <p><b>Solution:</b><br>It joins two clauses: "He spoke" and "nobody listened".<br>Answer: <b>Conjunction</b>.</p>

      <h4>Example 4</h4>
      <p><b>"<u>Wow</u>, that's amazing!"</b></p>
      <p><b>Solution:</b><br>Expresses sudden feeling of surprise.<br>Answer: <b>Interjection</b>.</p>

      <h4>Example 5</h4>
      <p><b>"<u>Five</u> students passed."</b> — "five" is?</p>
      <p><b>Solution:</b><br>Describes the noun "students" (tells how many).<br>Answer: <b>Adjective</b> (numeral adjective).</p>

      <h4>Example 6</h4>
      <p><b>"He <u>walks</u> daily."</b></p>
      <p><b>Solution:</b><br>Action being done by subject "He".<br>Answer: <b>Verb</b>.</p>

      <h4>Example 7 (Tricky)</h4>
      <p><b>"He hurt his back."</b> — "back" is?</p>
      <p><b>Solution:</b><br>Refers to a body part — naming a thing.<br>Answer: <b>Noun</b>.<br><i>(In "Come back," it would be an adverb.)</i></p>

      <h4>Example 8 (Tricky)</h4>
      <p><b>"The <u>poor</u> need help."</b> — "poor"?</p>
      <p><b>Solution:</b><br>Here "poor" stands for "poor people" — used as a noun.<br>Answer: <b>Noun</b> (adjective used as noun).</p>

      <h4>Example 9</h4>
      <p><b>"I will see <u>you</u> tomorrow."</b> — "you"?</p>
      <p><b>Solution:</b><br>Replaces the name of the person being addressed.<br>Answer: <b>Pronoun</b>.</p>

      <h4>Example 10</h4>
      <p><b>"The book is <u>on</u> the table."</b> — "on"?</p>
      <p><b>Solution:</b><br>Shows position of book relative to table.<br>Answer: <b>Preposition</b>.</p>

      <h4>Example 11</h4>
      <p><b>"He is <u>very</u> tall."</b> — "very"?</p>
      <p><b>Solution:</b><br>Modifies the adjective "tall" — tells <i>how</i> tall.<br>Answer: <b>Adverb</b>.</p>

      <h4>Example 12</h4>
      <p><b>"I went there <u>and</u> met him."</b> — "and"?</p>
      <p><b>Solution:</b><br>Joins two actions: "went there" and "met him".<br>Answer: <b>Conjunction</b>.</p>

      <h3>🎯 Common Errors / Traps</h3>
      <ul>
        <li><b>"Fast"</b> can be adjective (a fast car) or adverb (drive fast). Same word — context decides.</li>
        <li><b>"Like"</b> can be verb ("I like coffee"), preposition ("she dances like an angel"), or adjective ("a like-minded friend").</li>
        <li><b>Adjectives don't always end in -ous/-ful/-ive</b>. Words like "tall, blue, three, this, every" are also adjectives.</li>
        <li><b>Adverbs don't always end in -ly</b>. <i>Soon, then, here, often, never, well</i> are all adverbs.</li>
      </ul>
    `,
    mcq: [
      { q: "Identify part of speech of 'quickly' in 'He ran quickly'.", opts: ["Adjective", "Adverb", "Noun", "Verb"], a: 1, ex: "Modifies the verb 'ran' — answers 'how'." },
      { q: "'The dog is sleeping.' — 'is'?", opts: ["Verb", "Noun", "Adjective", "Preposition"], a: 0, ex: "'Is' is a linking verb / auxiliary." },
      { q: "'Ouch! That hurt.' — 'Ouch'?", opts: ["Adverb", "Noun", "Interjection", "Pronoun"], a: 2, ex: "Expresses sudden pain — interjection." },
      { q: "'She is rich but unhappy.' — 'but'?", opts: ["Conjunction", "Adverb", "Preposition", "Adjective"], a: 0, ex: "Joins two contrasting ideas." },
      { q: "'Three boys are playing.' — 'three'?", opts: ["Noun", "Pronoun", "Adjective", "Adverb"], a: 2, ex: "Describes noun 'boys' (quantity)." },
      { q: "'He sat under the tree.' — 'under'?", opts: ["Adverb", "Conjunction", "Preposition", "Noun"], a: 2, ex: "Shows relation between 'sat' and 'tree'." },
      { q: "'They are good friends.' — 'good'?", opts: ["Verb", "Adjective", "Noun", "Adverb"], a: 1, ex: "Describes 'friends'." },
      { q: "'He runs very fast.' — 'very'?", opts: ["Adjective", "Adverb", "Noun", "Conjunction"], a: 1, ex: "Modifies adverb 'fast'." },
      { q: "'Honesty is the best policy.' — 'Honesty'?", opts: ["Adjective", "Verb", "Noun", "Pronoun"], a: 2, ex: "Abstract noun (idea)." },
      { q: "'It is mine.' — 'mine'?", opts: ["Noun", "Adjective", "Pronoun", "Verb"], a: 2, ex: "Possessive pronoun." },
      { q: "'I will meet him after school.' — 'after'?", opts: ["Conjunction", "Adverb", "Preposition", "Adjective"], a: 2, ex: "Followed by noun phrase 'school', shows time." },
      { q: "'She speaks softly.' — 'softly'?", opts: ["Adjective", "Adverb", "Verb", "Noun"], a: 1, ex: "How does she speak? — adverb." },
      { q: "'Each student got a prize.' — 'Each'?", opts: ["Pronoun", "Adjective", "Adverb", "Noun"], a: 1, ex: "Describes 'student' (which)." },
      { q: "'Wow, what a goal!' — 'Wow'?", opts: ["Verb", "Interjection", "Adverb", "Noun"], a: 1, ex: "Sudden emotion." },
      { q: "'He works hard.' — 'hard'?", opts: ["Adjective", "Noun", "Adverb", "Verb"], a: 2, ex: "Modifies 'works' — adverb." },
      { q: "'A hard exam.' — 'hard' here?", opts: ["Adjective", "Adverb", "Noun", "Verb"], a: 0, ex: "Describes 'exam'." },
      { q: "'They live in Delhi.' — 'in'?", opts: ["Conjunction", "Preposition", "Adverb", "Noun"], a: 1, ex: "Shows place — preposition." },
      { q: "'The poor are suffering.' — 'poor'?", opts: ["Verb", "Adjective", "Noun", "Pronoun"], a: 2, ex: "Adjective used as noun = 'poor people'." },
      { q: "'I will call her tomorrow.' — 'tomorrow'?", opts: ["Noun", "Adverb", "Pronoun", "Adjective"], a: 1, ex: "Modifies verb 'call' (when)." },
      { q: "'Either you or I will go.' — 'or'?", opts: ["Conjunction", "Pronoun", "Preposition", "Adverb"], a: 0, ex: "Joins alternatives." },
      { q: "'The students who came late were punished.' — 'who'?", opts: ["Conjunction", "Adverb", "Relative Pronoun", "Adjective"], a: 2, ex: "Relative pronoun — replaces and connects." },
      { q: "'She sang beautifully.' — 'beautifully'?", opts: ["Adjective", "Adverb", "Noun", "Verb"], a: 1, ex: "Modifies 'sang'." },
      { q: "'This book is mine.' — 'this'?", opts: ["Adjective (demonstrative)", "Pronoun", "Adverb", "Noun"], a: 0, ex: "Modifies 'book' (which one)." },
      { q: "'Alas! He is no more.' — 'Alas'?", opts: ["Adverb", "Conjunction", "Interjection", "Pronoun"], a: 2, ex: "Sudden sorrow." },
      { q: "'The bridge is being repaired.' — main verb?", opts: ["Is", "Being", "Repaired", "Bridge"], a: 2, ex: "Main verb = 'repaired'; 'is being' is auxiliary." },
      { q: "Adverbs usually answer:", opts: ["What", "Who", "How/When/Where", "Why only"], a: 2, ex: "Adverbs answer how, when, where, how much, etc." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 2. NOUN
  // ───────────────────────────────────────────────────────────────
  T["eng-noun"] = {
    body: `
      <h2>Noun</h2>
      <p>A <b>noun</b> is the name of a person, place, thing, or idea. SSC asks ~2-3 questions in error spotting where noun errors appear (number, possession, collective nouns).</p>

      <h3>1. Kinds of Nouns</h3>
      <table>
        <tr><th>Kind</th><th>Definition</th><th>Examples</th></tr>
        <tr><td><b>Proper</b></td><td>specific name (capitalised)</td><td>Ramesh, India, Ganga, Monday</td></tr>
        <tr><td><b>Common</b></td><td>general name for a class</td><td>boy, country, river, day</td></tr>
        <tr><td><b>Collective</b></td><td>name of a group taken as one</td><td>team, herd, crowd, jury, family</td></tr>
        <tr><td><b>Material</b></td><td>name of substance/material</td><td>gold, wood, milk, water</td></tr>
        <tr><td><b>Abstract</b></td><td>name of a quality / state / idea</td><td>honesty, love, freedom, beauty</td></tr>
        <tr><td><b>Countable</b></td><td>can be counted (has plural)</td><td>book(s), apple(s), idea(s)</td></tr>
        <tr><td><b>Uncountable</b></td><td>cannot be counted (no plural)</td><td>water, advice, furniture, news</td></tr>
      </table>

      <h3>2. Singular / Plural Rules</h3>
      <ul>
        <li>Most: add <b>-s</b> — book → books</li>
        <li>Ending in <b>-s, -ss, -sh, -ch, -x, -z</b>: add <b>-es</b> — box → boxes, bus → buses</li>
        <li>Ending in <b>consonant + y</b>: change y → ies — baby → babies</li>
        <li>Ending in <b>vowel + y</b>: just add s — boy → boys</li>
        <li>Ending in <b>-f / -fe</b>: usually → ves — leaf → leaves, knife → knives (exceptions: roof → roofs, chief → chiefs)</li>
        <li><b>Irregular plurals</b>: child → children; man → men; woman → women; tooth → teeth; foot → feet; mouse → mice; ox → oxen; goose → geese</li>
        <li><b>Same in singular & plural</b>: sheep, deer, fish, aircraft, series, species</li>
        <li><b>Only plural form</b>: scissors, trousers, glasses, pants, news, mathematics, physics</li>
        <li><b>Only singular form (uncountable)</b>: advice, information, furniture, luggage, baggage, scenery, equipment, machinery, poetry, news, jewellery, work (in general sense)</li>
      </ul>

      <h3>3. Possessive Forms (apostrophe rules)</h3>
      <ul>
        <li><b>Singular</b>: add <b>'s</b> — boy's bag, Ram's car</li>
        <li><b>Plural ending in -s</b>: just add <b>'</b> — boys' team, girls' hostel</li>
        <li><b>Irregular plural</b>: add <b>'s</b> — children's park, men's club</li>
        <li><b>Joint possession</b>: 's only on last — Ram and Shyam's shop (one shop, jointly)</li>
        <li><b>Separate possession</b>: 's on each — Ram's and Shyam's shops (two shops)</li>
        <li><b>Things (non-living)</b>: usually use "of" instead — "the leg of the table" (not "table's leg" — though informal use exists)</li>
        <li><b>Use 's with</b>: time/period/distance ("a day's work", "a stone's throw"), personified things ("nature's beauty", "Death's hand")</li>
      </ul>

      <h3>4. Collective Nouns — Singular or Plural Verb?</h3>
      <ul>
        <li>If the group acts as <b>one unit</b> → singular verb: "The team <i>is</i> winning."</li>
        <li>If members act as <b>individuals</b> → plural verb (esp. British): "The team <i>are</i> fighting among themselves."</li>
        <li>Always plural: <b>police, cattle, people, gentry</b> — "The police <i>are</i> searching."</li>
      </ul>

      <h3>5. Common SSC Traps</h3>
      <ul>
        <li><b>Uncountable as plural</b>: ❌ "many informations" / ❌ "two furnitures" / ❌ "give me an advice"<br>
          ✓ "much information / pieces of information"; ✓ "two pieces of furniture"; ✓ "give me a piece of advice / some advice"</li>
        <li><b>Wrong plurals</b>: ❌ "two scissors" / ❌ "a scissor"<br>
          ✓ "a pair of scissors" / ✓ "two pairs of scissors"</li>
        <li><b>News, Mathematics, Physics, Economics, Politics, Athletics, Measles, Mumps</b> = singular verb (look plural but treated singular).<br>
          ✓ "The news <i>is</i> good." / ✓ "Mathematics <i>is</i> easy."</li>
        <li><b>Government, Committee, Cabinet, Public, Audience, Jury</b> — usually singular but plural when emphasising members.</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li><b>"A pair of"</b> is followed by plural noun but takes singular verb: "A pair of shoes <i>is</i> needed."</li>
        <li><b>"None" + plural noun</b> can take either singular or plural, but plural is more common in modern usage.</li>
        <li><b>Compound nouns</b> (mother-in-law, passer-by): pluralise the main word — mothers-in-law, passers-by.</li>
        <li><b>Letters and figures</b>: add <b>'s</b> — "two A's", "three 5's".</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "The furnitures in this house are old."</p>
      <p><b>Solution:</b><br>"Furniture" is uncountable — no plural.<br>Correct: "The <b>furniture</b> in this house <b>is</b> old."</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "He gave me an advice."</p>
      <p><b>Solution:</b><br>"Advice" is uncountable.<br>Correct: "He gave me <b>some advice</b>" or "<b>a piece of advice</b>".</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "Many people has come."</p>
      <p><b>Solution:</b><br>"People" is plural.<br>Correct: "Many people <b>have</b> come."</p>

      <h4>Example 4</h4>
      <p><b>Spot the error</b>: "The news are interesting."</p>
      <p><b>Solution:</b><br>"News" is singular (despite -s ending).<br>Correct: "The news <b>is</b> interesting."</p>

      <h4>Example 5</h4>
      <p><b>Plural of "child"?</b></p>
      <p><b>Solution:</b><br>Irregular: <b>children</b>.</p>

      <h4>Example 6</h4>
      <p><b>"This is my sister-in-law." Plural?</b></p>
      <p><b>Solution:</b><br>Compound noun — pluralise main word "sister".<br>"These are my <b>sisters-in-law</b>."</p>

      <h4>Example 7</h4>
      <p><b>Spot the error</b>: "Mathematics are my favourite subject."</p>
      <p><b>Solution:</b><br>Mathematics = singular.<br>Correct: "Mathematics <b>is</b> my favourite subject."</p>

      <h4>Example 8</h4>
      <p><b>Spot the error</b>: "The team are playing well."</p>
      <p><b>Solution:</b><br>When team acts as one unit, use singular.<br>Correct: "The team <b>is</b> playing well."<br>(Acceptable if emphasising individual members, but in SSC context, singular is preferred.)</p>

      <h4>Example 9</h4>
      <p><b>Possessive of "boys" (plural)?</b></p>
      <p><b>Solution:</b><br>Plural ending in -s → add only apostrophe.<br><b>boys'</b> hostel.</p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "He bought a scissor."</p>
      <p><b>Solution:</b><br>Scissors is always plural.<br>Correct: "He bought <b>a pair of scissors</b>."</p>

      <h4>Example 11</h4>
      <p><b>Spot the error</b>: "Police is investigating the case."</p>
      <p><b>Solution:</b><br>"Police" always takes plural verb.<br>Correct: "Police <b>are</b> investigating."</p>

      <h4>Example 12</h4>
      <p><b>Spot the error</b>: "Many fishes were caught."</p>
      <p><b>Solution:</b><br>"Fish" is same in singular and plural (when same species).<br>Correct: "Many <b>fish</b> were caught."<br><i>(Fishes is used only when referring to different species.)</i></p>

      <h4>Example 13</h4>
      <p><b>Possessive: "Ravi and Sita have a car (joint)."</b></p>
      <p><b>Solution:</b><br>Joint ownership → 's on last name only.<br><b>Ravi and Sita's</b> car.</p>

      <h4>Example 14</h4>
      <p><b>Spot the error</b>: "The cattle is grazing."</p>
      <p><b>Solution:</b><br>"Cattle" is plural.<br>Correct: "The cattle <b>are</b> grazing."</p>

      <h4>Example 15</h4>
      <p><b>Spot the error</b>: "I have two luggages."</p>
      <p><b>Solution:</b><br>"Luggage" is uncountable.<br>Correct: "I have <b>two pieces of luggage</b>" or "I have <b>a lot of luggage</b>."</p>

      <h4>Example 16</h4>
      <p><b>Spot the error</b>: "The jury were divided in their opinions."</p>
      <p><b>Solution:</b><br>When jury members disagree (act individually) — plural is correct! This sentence is correct.<br>Compare: "The jury <i>is</i> here" (acting as one).</p>

      <h4>Example 17</h4>
      <p><b>Plural of "datum" / "criterion" / "phenomenon"?</b></p>
      <p><b>Solution:</b><br>Latin/Greek origin:<br>datum → <b>data</b><br>criterion → <b>criteria</b><br>phenomenon → <b>phenomena</b><br>analysis → analyses; basis → bases; crisis → crises; oasis → oases; thesis → theses.</p>

      <h4>Example 18</h4>
      <p><b>Spot the error</b>: "The poets and politician was honoured."</p>
      <p><b>Solution:</b><br>"poets and politician" suggests different persons → plural verb. But the singular "politician" with plural verb is also OK if meant as same person? Context-dependent.<br>If two persons: <b>were</b> honoured.<br>If same person (one who is both): <b>was</b> honoured — but then use "The poet and politician" (singular).</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li><b>Uncountable nouns NEVER take "a/an" or plural</b>: information, advice, furniture, luggage, baggage, news, knowledge, equipment, machinery, scenery, work, poetry, music.</li>
        <li>Use <b>"a piece of"</b> or <b>"some"</b> with uncountables: a piece of advice, some information.</li>
        <li>News, Mathematics, Physics, Politics — <b>singular verb</b>.</li>
        <li>Police, Cattle, People — <b>plural verb</b>.</li>
        <li>For pairs (scissors, trousers, glasses): use "a pair of" + plural noun + singular verb.</li>
        <li><b>Plural of compound nouns</b>: pluralise the main word, not the qualifier (passer-by → passers-by, son-in-law → sons-in-law).</li>
      </ul>
    `,
    mcq: [
      { q: "Which is correct?", opts: ["He gave me an advice", "He gave me a advice", "He gave me some advices", "He gave me some advice"], a: 3, ex: "Advice is uncountable; use 'some advice' or 'a piece of advice'." },
      { q: "Plural of 'child'?", opts: ["childs", "children", "childes", "child"], a: 1, ex: "Irregular plural." },
      { q: "Spot the error: 'The news are good.'", opts: ["news", "are", "good", "No error"], a: 1, ex: "'News' is singular — should be 'is'." },
      { q: "Which is correct?", opts: ["Mathematics are easy", "Mathematics is easy", "Mathematic is easy", "The mathematics are easy"], a: 1, ex: "Singular." },
      { q: "Plural of 'crisis'?", opts: ["crisises", "crises", "crisis", "crisiss"], a: 1, ex: "Greek origin; -is → -es." },
      { q: "Possessive of 'children'?", opts: ["children's", "childrens'", "childrens's", "children"], a: 0, ex: "Irregular plural — add 's." },
      { q: "Plural of 'mouse' (animal)?", opts: ["mouses", "mices", "mice", "mouse"], a: 2, ex: "Irregular." },
      { q: "Which is correct?", opts: ["A pair of shoes is needed", "A pair of shoes are needed", "Pair of shoe is needed", "A pairs of shoes is needed"], a: 0, ex: "'A pair of' takes singular verb." },
      { q: "Spot the error: 'The committee have decided.'", opts: ["The", "committee", "have", "No error"], a: 2, ex: "Committee acting as one unit → singular 'has'." },
      { q: "Which is correct?", opts: ["He bought new furnitures", "He bought new furniture", "He bought a furniture", "He bought one furniture"], a: 1, ex: "Furniture is uncountable." },
      { q: "Plural of 'sister-in-law'?", opts: ["sister-in-laws", "sisters-in-laws", "sisters-in-law", "sister-in-law's"], a: 2, ex: "Pluralise main word." },
      { q: "Spot the error: 'The cattle is in the field.'", opts: ["The", "cattle", "is", "field"], a: 2, ex: "Cattle is plural — 'are'." },
      { q: "Plural of 'datum'?", opts: ["datums", "data", "datas", "datae"], a: 1, ex: "Latin origin." },
      { q: "Which is correct?", opts: ["Police is on the way", "Police are on the way", "The police is on the way", "Police was on the way"], a: 1, ex: "Police always plural." },
      { q: "Plural of 'oasis'?", opts: ["oasises", "oasis", "oases", "oasiss"], a: 2, ex: "-is → -es." },
      { q: "Possessive of 'James'?", opts: ["James'", "James's", "Both correct", "Jameses"], a: 2, ex: "Both James's and James' are accepted." },
      { q: "Which is correct?", opts: ["Many fishes were caught", "Many fish were caught", "Much fish were caught", "Many fishes was caught"], a: 1, ex: "Same species → 'fish'." },
      { q: "Spot the error: 'Two scissors are on the table.'", opts: ["Two scissors", "are", "table", "No error"], a: 0, ex: "Use 'Two pairs of scissors'." },
      { q: "Which is correct?", opts: ["The audience is enjoying the show", "The audience are enjoying the show", "Both are correct (depending on context)", "An audiences is enjoying"], a: 2, ex: "Collective nouns can take either depending on unity vs individuality." },
      { q: "Possessive 'Ram and Shyam own one house jointly':", opts: ["Ram's and Shyam's house", "Ram and Shyam's house", "Ram and Shyams house", "Rams and Shyams house"], a: 1, ex: "Joint → 's on last only." },
      { q: "Plural of 'phenomenon'?", opts: ["phenomenons", "phenomena", "phenomenas", "phenomenon"], a: 1, ex: "Greek -on → -a." },
      { q: "Which is correct?", opts: ["Politics is dirty", "Politics are dirty", "The politics are dirty", "Politic is dirty"], a: 0, ex: "Politics is singular." },
      { q: "Plural of 'analysis'?", opts: ["analysises", "analyses", "analysises", "analysis"], a: 1, ex: "-is → -es." },
      { q: "Possessive for 'a day's work':", opts: ["one days work", "a day's work", "a days work", "a day work"], a: 1, ex: "Time/period uses 's." },
      { q: "Which is uncountable?", opts: ["Book", "Pen", "Information", "Apple"], a: 2, ex: "Information cannot be counted." },
      { q: "Plural of 'roof'?", opts: ["roofs", "rooves", "roof", "roofes"], a: 0, ex: "Exception to -f → -ves rule." },
      { q: "Plural of 'leaf'?", opts: ["leafs", "leafes", "leaves", "leavs"], a: 2, ex: "-f → -ves." },
      { q: "Spot the error: 'There is many books on the table.'", opts: ["is", "many", "books", "table"], a: 0, ex: "Many books → 'are'." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 3. PRONOUN
  // ───────────────────────────────────────────────────────────────
  T["eng-pronoun"] = {
    body: `
      <h2>Pronoun</h2>
      <p>A <b>pronoun</b> replaces a noun. SSC asks 2-3 questions on pronoun errors — case, agreement, reference.</p>

      <h3>1. Kinds of Pronouns</h3>
      <table>
        <tr><th>Kind</th><th>Examples</th><th>Usage</th></tr>
        <tr><td><b>Personal</b></td><td>I, you, he, she, it, we, they</td><td>refer to persons</td></tr>
        <tr><td><b>Possessive</b></td><td>mine, yours, his, hers, ours, theirs</td><td>show ownership</td></tr>
        <tr><td><b>Reflexive</b></td><td>myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</td><td>refer back to subject</td></tr>
        <tr><td><b>Demonstrative</b></td><td>this, that, these, those</td><td>point out</td></tr>
        <tr><td><b>Interrogative</b></td><td>who, whom, whose, which, what</td><td>ask questions</td></tr>
        <tr><td><b>Relative</b></td><td>who, whom, whose, which, that</td><td>link clauses</td></tr>
        <tr><td><b>Indefinite</b></td><td>someone, anybody, everyone, none, all, some, few, many</td><td>refer to non-specific</td></tr>
        <tr><td><b>Distributive</b></td><td>each, either, neither</td><td>refer to each separately</td></tr>
        <tr><td><b>Reciprocal</b></td><td>each other, one another</td><td>mutual action</td></tr>
      </table>

      <h3>2. Cases of Personal Pronouns</h3>
      <table>
        <tr><th>Person</th><th>Subject (Nominative)</th><th>Object (Accusative)</th><th>Possessive Adj.</th><th>Possessive Pronoun</th><th>Reflexive</th></tr>
        <tr><td>1st sg</td><td>I</td><td>me</td><td>my</td><td>mine</td><td>myself</td></tr>
        <tr><td>2nd</td><td>you</td><td>you</td><td>your</td><td>yours</td><td>yourself/yourselves</td></tr>
        <tr><td>3rd sg (m)</td><td>he</td><td>him</td><td>his</td><td>his</td><td>himself</td></tr>
        <tr><td>3rd sg (f)</td><td>she</td><td>her</td><td>her</td><td>hers</td><td>herself</td></tr>
        <tr><td>3rd sg (n)</td><td>it</td><td>it</td><td>its</td><td>—</td><td>itself</td></tr>
        <tr><td>1st pl</td><td>we</td><td>us</td><td>our</td><td>ours</td><td>ourselves</td></tr>
        <tr><td>3rd pl</td><td>they</td><td>them</td><td>their</td><td>theirs</td><td>themselves</td></tr>
      </table>

      <h3>3. Key Rules</h3>

      <h4>Rule 1: Subject form for subject, object form for object</h4>
      <ul>
        <li>✓ <b>He</b> and I went. (both subjects)</li>
        <li>✓ Give it to him and <b>me</b>. (both objects of "to")</li>
        <li>❌ He and me went. / ❌ Give it to he and I.</li>
      </ul>

      <h4>Rule 2: After "than / as" — use subject form when comparing subjects</h4>
      <ul>
        <li>✓ He is taller than <b>I (am)</b>. ❌ taller than me.</li>
        <li>✓ She is as quick as <b>he (is)</b>.</li>
        <li><i>Note: In informal speech "than me" is accepted, but in SSC use "than I".</i></li>
      </ul>

      <h4>Rule 3: Reflexive pronouns — only when subject = object</h4>
      <ul>
        <li>✓ He hurt <b>himself</b>. (he = object)</li>
        <li>❌ He came with myself. → ✓ He came with me.</li>
        <li>Reflexive after verbs of <b>self-action</b>: enjoy, exert, avail, absent, exert, pride, accustom, resign, reconcile, present, behave, hide. — "He prided <b>himself</b> on his work."</li>
      </ul>

      <h4>Rule 4: Order of Pronouns ("231 / 123")</h4>
      <ul>
        <li><b>Positive sentence</b>: 2nd → 3rd → 1st (You, he, and I are friends.)</li>
        <li><b>Negative / Fault</b>: 1st → 2nd → 3rd (I, you, and he are at fault.)</li>
        <li>Mnemonic: "When good, save self for last. When bad, take blame first."</li>
      </ul>

      <h4>Rule 5: Each / Every / Either / Neither — singular</h4>
      <ul>
        <li>✓ Each of the boys <b>has</b> his book. (singular verb, singular "his")</li>
        <li>✓ Neither of them <b>is</b> coming.</li>
      </ul>

      <h4>Rule 6: One / One's</h4>
      <ul>
        <li>"One" should follow with "one" / "one's" — not "his/her".</li>
        <li>✓ <b>One</b> must do <b>one's</b> duty.</li>
        <li>❌ One must do his duty.</li>
      </ul>

      <h4>Rule 7: Relative pronouns</h4>
      <ul>
        <li><b>Who/Whom</b> — persons (who = subject, whom = object). Whom did you meet? — But "who" is increasingly accepted for both in modern English.</li>
        <li><b>Which</b> — things, animals.</li>
        <li><b>That</b> — both (defining clauses only — clauses essential to meaning).</li>
        <li><b>Whose</b> — possession (for both persons and things).</li>
      </ul>

      <h4>Rule 8: "Each other" vs "One another"</h4>
      <ul>
        <li><b>Each other</b> → two persons/things.</li>
        <li><b>One another</b> → more than two.</li>
      </ul>

      <h4>Rule 9: Pronoun must agree with antecedent in number & gender</h4>
      <ul>
        <li>✓ Every student must do <b>his</b> homework. (formal singular)</li>
        <li>✓ Every student must do <b>their</b> homework. (modern, gender-neutral)</li>
        <li>❌ A boy should do their homework.</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li><b>"Between you and me"</b> — NOT "between you and I" (preposition takes object form).</li>
        <li><b>"Let us"</b> — both formal pronouns; "Let me and him go" → ✓ "Let him and me go".</li>
        <li><b>"It is I"</b> formal; "It is me" informal (SSC prefers "It is I").</li>
        <li><b>"None"</b> can be singular or plural depending on intent; modern usage prefers plural.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "He and me went to market."</p>
      <p><b>Solution:</b><br>Both are subjects → use subject form.<br>Correct: "He and <b>I</b> went."</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "Between you and I, this is wrong."</p>
      <p><b>Solution:</b><br>After preposition "between" → use object form.<br>Correct: "Between you and <b>me</b>."</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "He is taller than me."</p>
      <p><b>Solution:</b><br>Implied "than I am tall".<br>Correct (SSC): "He is taller than <b>I</b>."</p>

      <h4>Example 4</h4>
      <p><b>Spot the error</b>: "One should keep his word."</p>
      <p><b>Solution:</b><br>"One" → use "one's", not "his".<br>Correct: "One should keep <b>one's</b> word."</p>

      <h4>Example 5</h4>
      <p><b>Spot the error</b>: "Each of the boys have done their work."</p>
      <p><b>Solution:</b><br>"Each" is singular.<br>Correct: "Each of the boys <b>has</b> done <b>his</b> work."</p>

      <h4>Example 6</h4>
      <p><b>Spot the error</b>: "The two brothers loved one another."</p>
      <p><b>Solution:</b><br>Only two → use "each other".<br>Correct: "The two brothers loved <b>each other</b>."</p>

      <h4>Example 7</h4>
      <p><b>Spot the error</b>: "He went there himself."</p>
      <p><b>Solution:</b><br>Sentence is correct — "himself" emphasises (intensive use). No error.</p>

      <h4>Example 8</h4>
      <p><b>Spot the error</b>: "Whom is the captain?"</p>
      <p><b>Solution:</b><br>"Who" is the captain — captain is subject (predicate nominative).<br>Correct: "<b>Who</b> is the captain?"</p>

      <h4>Example 9</h4>
      <p><b>Spot the error</b>: "Me and you should leave now."</p>
      <p><b>Solution:</b><br>Wrong order + wrong case.<br>Correct: "<b>You and I</b> should leave now."</p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "Neither of the boys are coming."</p>
      <p><b>Solution:</b><br>"Neither" is singular.<br>Correct: "Neither of the boys <b>is</b> coming."</p>

      <h4>Example 11</h4>
      <p><b>Spot the error</b>: "He absented from school."</p>
      <p><b>Solution:</b><br>"Absent" requires reflexive pronoun.<br>Correct: "He absented <b>himself</b> from school."</p>

      <h4>Example 12</h4>
      <p><b>Spot the error</b>: "It is me who spoke."</p>
      <p><b>Solution:</b><br>Formal/SSC: "It is <b>I</b> who spoke." (Then verb "spoke" agrees with "I".)<br>"It is me" is informal.</p>

      <h4>Example 13</h4>
      <p><b>Spot the error</b>: "She is one of those women who is always smiling."</p>
      <p><b>Solution:</b><br>"who" refers to "women" (plural).<br>Correct: "...who <b>are</b> always smiling."</p>

      <h4>Example 14</h4>
      <p><b>Spot the error</b>: "I, you and he are at fault."</p>
      <p><b>Solution:</b><br>This is correct! For fault/negative, the order is 1-2-3 (I take blame first).</p>

      <h4>Example 15</h4>
      <p><b>Spot the error</b>: "The dog hurt its leg." vs "It's a nice dog."</p>
      <p><b>Solution:</b><br>"Its" = possessive (no apostrophe). "It's" = it is (with apostrophe).<br>Both example sentences are correct.</p>

      <h4>Example 16</h4>
      <p><b>Spot the error</b>: "All of them is here."</p>
      <p><b>Solution:</b><br>"All of them" — plural.<br>Correct: "All of them <b>are</b> here."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>"Between you and <b>me</b>" — NOT "and I" (object case after preposition).</li>
        <li>"He" (subject) vs "him" (object) — after prepositions, ALWAYS use "him/her/me/them".</li>
        <li>"One" → "one's" (consistent), NOT "his".</li>
        <li>Reflexive pronouns NEVER alone subject: ❌ "Myself went" → ✓ "I went".</li>
        <li>Each / Either / Neither — singular pronoun + singular verb.</li>
        <li>"Whose" can be used for things too: "a chair whose legs are broken".</li>
      </ul>
    `,
    mcq: [
      { q: "Spot the error: 'He invited my friend and I to dinner.'", opts: ["He", "and I", "to dinner", "No error"], a: 1, ex: "Object of 'invited' → 'me'." },
      { q: "Which is correct?", opts: ["One should respect his elders", "One should respect one's elders", "Both correct", "Neither correct"], a: 1, ex: "'One' takes 'one's'." },
      { q: "Spot the error: 'Each of the students have a book.'", opts: ["Each", "of", "have", "a book"], a: 2, ex: "Each → singular 'has'." },
      { q: "Choose: 'It is ___ who am to blame.'", opts: ["I", "me", "myself", "mine"], a: 0, ex: "Subject form 'I'." },
      { q: "Which is correct?", opts: ["Between you and I", "Between you and me", "Between I and you", "Between mine and yours"], a: 1, ex: "Preposition → object case." },
      { q: "Spot the error: 'Me and my brother went there.'", opts: ["Me", "my brother", "went", "there"], a: 0, ex: "Subject → 'My brother and I'." },
      { q: "Choose: 'The two friends helped ___ other.'", opts: ["each", "one", "another", "every"], a: 0, ex: "Two → each other." },
      { q: "Spot the error: 'He is one of those men who has succeeded.'", opts: ["He", "those men", "has", "succeeded"], a: 2, ex: "Who refers to 'men' (plural) → 'have'." },
      { q: "Choose: 'Let ___ go now.' (informal)", opts: ["he and I", "him and me", "he and me", "him and I"], a: 1, ex: "Object of 'Let' → object pronouns." },
      { q: "Spot the error: 'Either of the two roads lead to the station.'", opts: ["Either", "of", "lead", "to"], a: 2, ex: "Either → singular 'leads'." },
      { q: "Choose correct order: '__ are responsible.' (positive)", opts: ["I, you and he", "He, you and I", "You, he and I", "He, I and you"], a: 2, ex: "Positive: 2-3-1." },
      { q: "Spot the error: 'I myself will do it.'", opts: ["I", "myself", "will do it", "No error"], a: 3, ex: "Reflexive used emphatically — correct." },
      { q: "Choose: 'The dog wagged ___ tail.'", opts: ["it's", "its", "its'", "his"], a: 1, ex: "'Its' is possessive (no apostrophe)." },
      { q: "Spot the error: 'Whom did you said came?'", opts: ["Whom", "did", "you said", "came"], a: 0, ex: "Subject of 'came' → 'Who'." },
      { q: "Choose: 'No one knows ___ pain.'", opts: ["his", "my", "their", "one's"], a: 0, ex: "Singular generic — 'his' (or 'their' in modern usage). 'his' is the SSC standard." },
      { q: "Spot the error: 'None of them were there.'", opts: ["None", "of", "were", "there"], a: 3, ex: "Both 'were' and 'was' are now acceptable; SSC accepts plural." },
      { q: "Choose: 'I and Ravi went together.' Correct order?", opts: ["I and Ravi", "Ravi and I", "Me and Ravi", "Ravi and me"], a: 1, ex: "Positive: 2-3-1 order." },
      { q: "Spot the error: 'The boy and the girl loves themselves.'", opts: ["The", "and the girl", "loves", "themselves"], a: 2, ex: "Two subjects → 'love'. Also 'themselves' is wrong — they love 'each other'." },
      { q: "Spot the error: 'My brother is taller than me.'", opts: ["My brother", "is taller", "than me", "No error"], a: 2, ex: "Should be 'than I' (am tall)." },
      { q: "Choose: '___ of the two should go.'", opts: ["Each", "All", "Both", "Either"], a: 3, ex: "Of two → either; of all → each." },
      { q: "Spot the error: 'Each girl have her own desk.'", opts: ["Each girl", "have", "her own", "desk"], a: 1, ex: "Each → has." },
      { q: "Choose: 'This book is ___.'", opts: ["my", "mine", "myself", "me"], a: 1, ex: "Possessive pronoun." },
      { q: "Spot the error: 'He gave the prize to my friend and I.'", opts: ["He", "to my friend", "and I", "No error"], a: 2, ex: "Object of 'to' → 'me'." },
      { q: "Choose: 'Hardly had I ___ when bell rang.'", opts: ["sat", "sit", "sit down", "set"], a: 0, ex: "Past perfect 'had sat'." },
      { q: "Spot the error: 'Whom do you think will win?'", opts: ["Whom", "do you think", "will win", "No error"], a: 0, ex: "Subject of 'will win' → 'Who'." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 4. ADJECTIVE
  // ───────────────────────────────────────────────────────────────
  T["eng-adjective"] = {
    body: `
      <h2>Adjective</h2>
      <p>An <b>adjective</b> describes or qualifies a noun/pronoun. SSC asks ~2 questions on adjective errors — degrees of comparison, position, agreement.</p>

      <h3>1. Kinds of Adjectives</h3>
      <table>
        <tr><th>Kind</th><th>Function</th><th>Examples</th></tr>
        <tr><td><b>Descriptive (Quality)</b></td><td>describes a quality</td><td>tall, beautiful, intelligent</td></tr>
        <tr><td><b>Quantity</b></td><td>shows quantity (uncountable)</td><td>some, much, little, enough</td></tr>
        <tr><td><b>Number / Numeral</b></td><td>shows number (countable)</td><td>three, first, many, few, all</td></tr>
        <tr><td><b>Demonstrative</b></td><td>points out</td><td>this, that, these, those, such</td></tr>
        <tr><td><b>Distributive</b></td><td>refers to each</td><td>each, every, either, neither</td></tr>
        <tr><td><b>Interrogative</b></td><td>asks question</td><td>which book? what time? whose pen?</td></tr>
        <tr><td><b>Possessive</b></td><td>shows ownership</td><td>my, your, his, our, their</td></tr>
        <tr><td><b>Proper</b></td><td>from a proper noun</td><td>Indian, French, Shakespearean</td></tr>
      </table>

      <h3>2. Degrees of Comparison</h3>
      <table>
        <tr><th>Positive</th><th>Comparative</th><th>Superlative</th></tr>
        <tr><td>tall</td><td>taller</td><td>tallest</td></tr>
        <tr><td>big</td><td>bigger</td><td>biggest</td></tr>
        <tr><td>happy</td><td>happier</td><td>happiest</td></tr>
        <tr><td>beautiful</td><td>more beautiful</td><td>most beautiful</td></tr>
        <tr><td>good</td><td>better</td><td>best</td></tr>
        <tr><td>bad</td><td>worse</td><td>worst</td></tr>
        <tr><td>much/many</td><td>more</td><td>most</td></tr>
        <tr><td>little</td><td>less</td><td>least</td></tr>
        <tr><td>far</td><td>farther / further</td><td>farthest / furthest</td></tr>
        <tr><td>old</td><td>older / elder</td><td>oldest / eldest</td></tr>
      </table>
      <p><b>farther</b> = physical distance; <b>further</b> = additional. <b>elder/eldest</b> = within family; <b>older/oldest</b> = general comparison.</p>

      <h3>3. Rules of Comparison</h3>

      <h4>Rule 1: Use comparative for two, superlative for three or more</h4>
      <ul>
        <li>✓ Of the two boys, Ram is <b>taller</b>.</li>
        <li>✓ Of the three boys, Ram is the <b>tallest</b>.</li>
      </ul>

      <h4>Rule 2: "Than any other" + singular; "than all other" + plural</h4>
      <ul>
        <li>✓ Delhi is bigger than <b>any other</b> city in India. (Delhi compared to each other city, one at a time)</li>
        <li>✓ Delhi is bigger than <b>all (the) other</b> cities in India.</li>
      </ul>

      <h4>Rule 3: Double comparatives / superlatives are wrong</h4>
      <ul>
        <li>❌ more bigger / most tallest</li>
        <li>✓ bigger / tallest</li>
      </ul>

      <h4>Rule 4: Adjectives ending in -ior take "to" instead of "than"</h4>
      <ul>
        <li>superior, inferior, junior, senior, prior, anterior, posterior</li>
        <li>✓ He is senior <b>to</b> me. ❌ senior than me.</li>
        <li>✓ This is superior <b>to</b> that.</li>
      </ul>

      <h4>Rule 5: "Latter / Later", "Last / Latest"</h4>
      <ul>
        <li><b>Latter</b> = second of two; <b>Later</b> = afterward (time)</li>
        <li><b>Last</b> = final / past; <b>Latest</b> = most recent</li>
      </ul>

      <h4>Rule 6: "Many / Much" usage</h4>
      <ul>
        <li><b>Many</b> + plural countable noun: many books</li>
        <li><b>Much</b> + uncountable noun: much water</li>
        <li><b>Few</b> (countable) — almost nothing; <b>A few</b> — some (positive); <b>The few</b> — all that there are</li>
        <li><b>Little</b> (uncountable) — almost nothing; <b>A little</b> — some (positive); <b>The little</b> — all there is</li>
      </ul>

      <h4>Rule 7: Order of multiple adjectives (OSASCOMP)</h4>
      <p><b>O</b>pinion → <b>S</b>ize → <b>A</b>ge → <b>S</b>hape → <b>C</b>olour → <b>O</b>rigin → <b>M</b>aterial → <b>P</b>urpose → noun</p>
      <p>Example: "a beautiful (opinion) large (size) old (age) round (shape) red (colour) Italian (origin) wooden (material) dining (purpose) table"</p>

      <h4>Rule 8: Adjectives used only attributively or predicatively</h4>
      <ul>
        <li><b>Only before noun (attributive)</b>: former, latter, main, only, mere, principal</li>
        <li><b>Only after verb (predicative)</b>: awake, asleep, afraid, alive, alone, ashamed, aware</li>
        <li>✓ The baby is asleep. ❌ The asleep baby.</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li><b>Less vs Fewer</b>: <i>less</i> with uncountable (less water), <i>fewer</i> with countable (fewer books).</li>
        <li><b>Each / Every</b> + singular noun + singular verb.</li>
        <li>Avoid double comparatives — pick adjective form OR use "more"/"most".</li>
        <li>"Senior / junior / superior / inferior + <b>to</b>" (never "than").</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "He is the more cleverer of the two."</p>
      <p><b>Solution:</b><br>Double comparative.<br>Correct: "He is the <b>more clever</b>" or "the <b>cleverer</b> of the two".</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "He is senior than me."</p>
      <p><b>Solution:</b><br>"senior" takes "to", not "than".<br>Correct: "senior <b>to</b> me."</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "Delhi is bigger than any city in India."</p>
      <p><b>Solution:</b><br>Delhi is a city in India — can't be bigger than itself.<br>Correct: "Delhi is bigger than <b>any other city</b>."</p>

      <h4>Example 4</h4>
      <p><b>Spot the error</b>: "Of the two boys, Ravi is the tallest."</p>
      <p><b>Solution:</b><br>Two → comparative.<br>Correct: "Ravi is the <b>taller</b>."</p>

      <h4>Example 5</h4>
      <p><b>Spot the error</b>: "Less students attended the class today."</p>
      <p><b>Solution:</b><br>Students = countable → "fewer".<br>Correct: "<b>Fewer</b> students attended."</p>

      <h4>Example 6</h4>
      <p><b>Spot the error</b>: "I have few money in my pocket."</p>
      <p><b>Solution:</b><br>Money = uncountable → "little".<br>Correct: "I have <b>little</b> money."</p>

      <h4>Example 7</h4>
      <p><b>Spot the error</b>: "She is the most beautifullest girl in the class."</p>
      <p><b>Solution:</b><br>Double superlative.<br>Correct: "She is the <b>most beautiful</b> girl."</p>

      <h4>Example 8</h4>
      <p><b>Spot the error</b>: "He is junior than my brother."</p>
      <p><b>Solution:</b><br>"junior to".<br>Correct: "junior <b>to</b> my brother."</p>

      <h4>Example 9</h4>
      <p><b>Spot the error</b>: "These furniture is old."</p>
      <p><b>Solution:</b><br>"furniture" is uncountable → use "this".<br>Correct: "<b>This</b> furniture is old."</p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "He has more taller siblings."</p>
      <p><b>Solution:</b><br>Double comparative.<br>Correct: "He has <b>taller</b> siblings."</p>

      <h4>Example 11</h4>
      <p><b>Order the adjectives</b>: "an old wooden round table"</p>
      <p><b>Solution:</b><br>OSASCOMP order: Age → Shape → Material.<br>Correct: "an <b>old round wooden</b> table."</p>

      <h4>Example 12</h4>
      <p><b>Spot the error</b>: "Each of the boys are present."</p>
      <p><b>Solution:</b><br>"Each" is singular.<br>Correct: "Each of the boys <b>is</b> present."</p>

      <h4>Example 13</h4>
      <p><b>Spot the error</b>: "He is the most popularest leader."</p>
      <p><b>Solution:</b><br>Double superlative.<br>Correct: "the <b>most popular</b>."</p>

      <h4>Example 14</h4>
      <p><b>Spot the error</b>: "My elder brother lives in Delhi."</p>
      <p><b>Solution:</b><br>"Elder" used within family is correct! (No error.)</p>

      <h4>Example 15</h4>
      <p><b>Spot the error</b>: "I prefer tea than coffee."</p>
      <p><b>Solution:</b><br>"prefer X to Y" (not "than").<br>Correct: "I prefer tea <b>to</b> coffee."</p>

      <h4>Example 16</h4>
      <p><b>Spot the error</b>: "A few water is left in the bottle."</p>
      <p><b>Solution:</b><br>"few" is for countable.<br>Correct: "<b>A little</b> water is left."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>"Prefer X <b>to</b> Y" not "X than Y".</li>
        <li>"Superior/inferior/senior/junior/prior/anterior + <b>to</b>" — NEVER "than".</li>
        <li>"Older/oldest" (general) vs "elder/eldest" (within family).</li>
        <li>"Farther" (distance) vs "further" (additional).</li>
        <li>Two items: <b>comparative</b>; Three+: <b>superlative</b>.</li>
        <li>"Less" → uncountable; "Fewer" → countable.</li>
        <li>"Few" = almost none; "A few" = some; "The few" = all that exist.</li>
      </ul>
    `,
    mcq: [
      { q: "Spot the error: 'He is wiser than any boy in his class.'", opts: ["He", "wiser", "than any boy", "No error"], a: 2, ex: "Use 'any other boy' (he is also a boy in class)." },
      { q: "Choose: 'I prefer tea ___ coffee.'", opts: ["than", "to", "more than", "over"], a: 1, ex: "Prefer X to Y." },
      { q: "Spot the error: 'He is senior than I in service.'", opts: ["He", "senior than", "I in service", "No error"], a: 1, ex: "Senior to, not than." },
      { q: "Which is correct?", opts: ["More cleverer", "Cleverer", "Most cleverer", "More clever"], a: 1, ex: "Single comparative." },
      { q: "Choose: 'There is ___ water in the glass.'", opts: ["few", "fewer", "little", "less"], a: 2, ex: "Uncountable → little." },
      { q: "Spot the error: 'He is the better of the three.'", opts: ["He", "the better", "of the three", "No error"], a: 1, ex: "Three → 'best'." },
      { q: "Choose: '___ books are on the shelf.'", opts: ["Less", "Fewer", "Little", "Much"], a: 1, ex: "Countable → fewer." },
      { q: "Spot the error: 'My elder son is taller than me.'", opts: ["My elder", "is taller", "than me", "No error"], a: 2, ex: "Than I." },
      { q: "Choose: 'He is the ___ of the two brothers.'", opts: ["elder", "eldest", "older", "Both A and C"], a: 3, ex: "Either 'elder' or 'older' works." },
      { q: "Which is correct?", opts: ["Most beautifullest", "More beautiful", "Beautifuler", "Most beautiful"], a: 3, ex: "Multi-syllable → 'most'." },
      { q: "Spot the error: 'Few students were present yesterday.'", opts: ["Few", "students", "were present", "No error"], a: 3, ex: "Correct — few = almost none." },
      { q: "Choose: 'I have ___ friends here.' (almost none)", opts: ["a few", "few", "the few", "little"], a: 1, ex: "Few = almost none." },
      { q: "Choose: '___ of the two roads will lead you.'", opts: ["Any", "Either", "Each", "Both"], a: 1, ex: "Of two → either." },
      { q: "Spot the error: 'Sita is older than her sister.'", opts: ["Sita", "older", "than her sister", "No error"], a: 3, ex: "'Older' is acceptable; 'elder' also." },
      { q: "Choose: 'He is junior ___ me.'", opts: ["than", "to", "of", "from"], a: 1, ex: "Junior to." },
      { q: "Spot the error: 'Of all the cities, Delhi is more populous.'", opts: ["Of all", "is more populous", "all the cities", "No error"], a: 1, ex: "All → superlative 'most populous'." },
      { q: "Choose: 'I have ___ friends.' (some)", opts: ["few", "a few", "little", "the few"], a: 1, ex: "A few = some, positive." },
      { q: "Spot the error: 'There is little water in the jug.'", opts: ["There is", "little water", "in the jug", "No error"], a: 3, ex: "Correct." },
      { q: "Choose: 'This is ___ than that.'", opts: ["superior", "more superior", "superior to", "more superior to"], a: 0, ex: "Just 'superior' — already comparative." },
      { q: "Spot the error: 'Each of the players have their own bat.'", opts: ["Each", "have", "their", "Both B and C"], a: 3, ex: "Singular: 'has', 'his'." },
      { q: "Choose: 'I want ___ books to read.' (some)", opts: ["a little", "a few", "few", "less"], a: 1, ex: "Countable + positive = a few." },
      { q: "Spot the error: 'It is the most cheapest in the market.'", opts: ["It is", "most cheapest", "in the market", "No error"], a: 1, ex: "Double superlative." },
      { q: "Choose: 'He is the ___ of all my friends.'", opts: ["intelligent", "more intelligent", "most intelligent", "intelligenter"], a: 2, ex: "All → superlative." },
      { q: "Spot the error: 'Of the two sisters, Sita is more beautiful.'", opts: ["Of the two", "more beautiful", "sisters", "No error"], a: 3, ex: "Two → comparative ✓." },
      { q: "Choose: 'No two leaves are ___.'", opts: ["same", "alike", "similar", "All correct"], a: 1, ex: "Alike — preferred." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 5. VERB
  // ───────────────────────────────────────────────────────────────
  T["eng-verb"] = {
    body: `
      <h2>Verb</h2>
      <p>A <b>verb</b> expresses action or state of being. SSC English's <b>most-tested</b> topic — verbs interact with tense, subject-verb agreement, voice, narration, and modals.</p>

      <h3>1. Types of Verbs</h3>

      <h4>By Function</h4>
      <ul>
        <li><b>Main Verb</b>: carries primary meaning. <i>She <b>sings</b>.</i></li>
        <li><b>Auxiliary (Helping) Verb</b>: helps form tense/voice/mood. <i>She <b>is</b> singing.</i>
          <ul>
            <li><b>Primary auxiliaries</b>: be (am, is, are, was, were, been, being), have (has, had), do (does, did)</li>
            <li><b>Modal auxiliaries</b>: can, could, may, might, will, would, shall, should, must, ought to, dare, need, used to</li>
          </ul>
        </li>
        <li><b>Linking Verb</b>: connects subject to a complement (no action). <i>She <b>is</b> happy. / He <b>seems</b> tired.</i>
          <ul>
            <li>be, become, seem, appear, look, feel, sound, taste, smell, remain, grow, get, turn</li>
          </ul>
        </li>
      </ul>

      <h4>By Object</h4>
      <ul>
        <li><b>Transitive</b>: takes an object. <i>She <b>ate</b> the apple.</i></li>
        <li><b>Intransitive</b>: no object. <i>She <b>slept</b>.</i></li>
        <li><b>Di-transitive</b>: two objects (direct + indirect). <i>He <b>gave</b> me a gift.</i></li>
      </ul>

      <h3>2. Verb Forms — 5 Forms</h3>
      <table>
        <tr><th>V1 (base)</th><th>V2 (past)</th><th>V3 (past participle)</th><th>V-ing</th><th>V-s/es</th></tr>
        <tr><td>go</td><td>went</td><td>gone</td><td>going</td><td>goes</td></tr>
        <tr><td>see</td><td>saw</td><td>seen</td><td>seeing</td><td>sees</td></tr>
        <tr><td>begin</td><td>began</td><td>begun</td><td>beginning</td><td>begins</td></tr>
        <tr><td>break</td><td>broke</td><td>broken</td><td>breaking</td><td>breaks</td></tr>
        <tr><td>drink</td><td>drank</td><td>drunk</td><td>drinking</td><td>drinks</td></tr>
        <tr><td>eat</td><td>ate</td><td>eaten</td><td>eating</td><td>eats</td></tr>
        <tr><td>write</td><td>wrote</td><td>written</td><td>writing</td><td>writes</td></tr>
        <tr><td>take</td><td>took</td><td>taken</td><td>taking</td><td>takes</td></tr>
        <tr><td>give</td><td>gave</td><td>given</td><td>giving</td><td>gives</td></tr>
        <tr><td>swim</td><td>swam</td><td>swum</td><td>swimming</td><td>swims</td></tr>
      </table>
      <p><i>For regular verbs: V2 = V3 = V + ed (walk → walked → walked).</i></p>

      <h3>3. Common Verb Confusions</h3>
      <table>
        <tr><th>Verb</th><th>Past</th><th>Past Part.</th><th>Meaning</th></tr>
        <tr><td>lie (recline)</td><td>lay</td><td>lain</td><td>to recline; intransitive</td></tr>
        <tr><td>lay (place)</td><td>laid</td><td>laid</td><td>to put down; transitive</td></tr>
        <tr><td>lie (untruth)</td><td>lied</td><td>lied</td><td>to tell untruth</td></tr>
        <tr><td>rise (go up)</td><td>rose</td><td>risen</td><td>intransitive</td></tr>
        <tr><td>raise (lift)</td><td>raised</td><td>raised</td><td>transitive (takes object)</td></tr>
        <tr><td>sit</td><td>sat</td><td>sat</td><td>intransitive</td></tr>
        <tr><td>set</td><td>set</td><td>set</td><td>transitive</td></tr>
        <tr><td>fall</td><td>fell</td><td>fallen</td><td>intransitive</td></tr>
        <tr><td>fell (cut down)</td><td>felled</td><td>felled</td><td>transitive</td></tr>
        <tr><td>hang (suspend)</td><td>hung</td><td>hung</td><td>thing</td></tr>
        <tr><td>hang (execute)</td><td>hanged</td><td>hanged</td><td>person</td></tr>
      </table>

      <h3>4. Key Verb Rules</h3>

      <h4>Rule 1: Verbs of Perception/Sensation in active</h4>
      <p>see, hear, watch, feel, observe + object + V1 OR V-ing (NOT V3):</p>
      <ul>
        <li>✓ I saw him <b>run</b> / <b>running</b>. ❌ I saw him to run.</li>
      </ul>

      <h4>Rule 2: "Let" and "Make" + object + V1 (no "to")</h4>
      <ul>
        <li>✓ Let me <b>go</b>. ❌ Let me to go.</li>
        <li>✓ Make him <b>understand</b>.</li>
        <li><i>(But: "Make" in passive uses "to": "He was made <b>to</b> understand.")</i></li>
      </ul>

      <h4>Rule 3: "Help" + object + V1 OR "to" + V1 (both acceptable)</h4>
      <ul>
        <li>✓ Help me <b>finish</b>. ✓ Help me <b>to finish</b>.</li>
      </ul>

      <h4>Rule 4: V-ing after preposition</h4>
      <ul>
        <li>✓ He is good at <b>singing</b>. (not "at sing")</li>
        <li>✓ Thank you for <b>helping</b>.</li>
      </ul>

      <h4>Rule 5: Stative verbs — NOT in continuous tense</h4>
      <p>Verbs of perception/possession/emotion don't typically take -ing:</p>
      <ul>
        <li><b>Senses</b>: see, hear, smell, taste, feel</li>
        <li><b>Mental</b>: know, think, believe, understand, remember, forget, suppose, imagine, recognise</li>
        <li><b>Emotion</b>: love, hate, like, prefer, want, wish, need</li>
        <li><b>Possession</b>: have (own), own, belong, possess</li>
        <li>❌ I am loving it. ✓ I love it.</li>
        <li>❌ I am knowing. ✓ I know.</li>
      </ul>

      <h4>Rule 6: "Have" + object + V3 (causative)</h4>
      <ul>
        <li>✓ I had my car <b>repaired</b>. (someone else did it)</li>
        <li>Compare: "I had my car <b>repair</b>" — wrong.</li>
      </ul>

      <h4>Rule 7: Gerund vs Infinitive after certain verbs</h4>
      <ul>
        <li><b>Verb + V-ing (gerund)</b>: enjoy, mind, avoid, finish, suggest, consider, postpone, deny, admit, practise, risk, miss, escape — ✓ I enjoy <b>reading</b>.</li>
        <li><b>Verb + to + V1 (infinitive)</b>: agree, decide, expect, hope, plan, want, refuse, promise, manage, fail — ✓ I decided <b>to go</b>.</li>
        <li><b>Either</b>: like, love, hate, prefer, begin, start, continue — ✓ I like <b>swimming</b> / <b>to swim</b>.</li>
      </ul>

      <h4>Rule 8: "Dare" and "Need" usage</h4>
      <ul>
        <li>As main verbs (positive): take V1+s/es. "She <b>dares to</b> speak."</li>
        <li>As modals (negative/interrogative): no "to". "She <b>dare not</b> speak."</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li>After <b>let, make, see, hear, watch, feel</b> → bare infinitive (V1, no "to").</li>
        <li>After preposition → <b>gerund (V-ing)</b>.</li>
        <li>Stative verbs → NEVER continuous.</li>
        <li>"Lay" (place) is transitive; "Lie" (recline) is intransitive.</li>
        <li>"Hanged" for execution; "Hung" for things.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "He suggested me to take rest."</p>
      <p><b>Solution:</b><br>"Suggest" doesn't take "object + to + verb".<br>Correct: "He suggested <b>that I should take rest</b>" or "He suggested <b>taking</b> rest".</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "Let me to go now."</p>
      <p><b>Solution:</b><br>"Let" takes bare infinitive.<br>Correct: "Let me <b>go</b> now."</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "I am knowing him for years."</p>
      <p><b>Solution:</b><br>"Know" is stative — not used in continuous.<br>Correct: "I <b>have known</b> him for years."</p>

      <h4>Example 4</h4>
      <p><b>Spot the error</b>: "She laid in bed all morning."</p>
      <p><b>Solution:</b><br>"Lie" (recline) → past is "lay"; "lay" (place) → past is "laid".<br>Correct: "She <b>lay</b> in bed."</p>

      <h4>Example 5</h4>
      <p><b>Spot the error</b>: "The thief was hung last night."</p>
      <p><b>Solution:</b><br>Person executed → "hanged".<br>Correct: "The thief was <b>hanged</b>."</p>

      <h4>Example 6</h4>
      <p><b>Spot the error</b>: "He avoided to meet me."</p>
      <p><b>Solution:</b><br>"Avoid" + V-ing.<br>Correct: "He avoided <b>meeting</b> me."</p>

      <h4>Example 7</h4>
      <p><b>Spot the error</b>: "I look forward to meet you."</p>
      <p><b>Solution:</b><br>"Look forward to" + V-ing (here "to" is preposition).<br>Correct: "I look forward to <b>meeting</b> you."</p>

      <h4>Example 8</h4>
      <p><b>Spot the error</b>: "I saw him to enter the room."</p>
      <p><b>Solution:</b><br>Perception verbs + V1.<br>Correct: "I saw him <b>enter</b>" or "I saw him <b>entering</b>".</p>

      <h4>Example 9</h4>
      <p><b>Spot the error</b>: "He is having a car."</p>
      <p><b>Solution:</b><br>"Have" (possess) is stative.<br>Correct: "He <b>has</b> a car."<br><i>(But "He is having dinner" is OK — there "have" = "eat", action verb.)</i></p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "He prefers reading than writing."</p>
      <p><b>Solution:</b><br>"Prefer X to Y".<br>Correct: "He prefers reading <b>to</b> writing."</p>

      <h4>Example 11</h4>
      <p><b>Spot the error</b>: "Birds are flying since morning."</p>
      <p><b>Solution:</b><br>"Since" → use present perfect continuous.<br>Correct: "Birds <b>have been</b> flying since morning."</p>

      <h4>Example 12</h4>
      <p><b>Spot the error</b>: "She raised early today."</p>
      <p><b>Solution:</b><br>"Raise" is transitive (needs object); for "got up" use "rose".<br>Correct: "She <b>rose</b> early today."</p>

      <h4>Example 13</h4>
      <p><b>Spot the error</b>: "He refused going there."</p>
      <p><b>Solution:</b><br>"Refuse" takes infinitive.<br>Correct: "He refused <b>to go</b>."</p>

      <h4>Example 14</h4>
      <p><b>Spot the error</b>: "I made him to apologise."</p>
      <p><b>Solution:</b><br>"Make" (active) + V1.<br>Correct: "I made him <b>apologise</b>."</p>

      <h4>Example 15</h4>
      <p><b>Spot the error</b>: "She enjoys to read novels."</p>
      <p><b>Solution:</b><br>"Enjoy" + V-ing.<br>Correct: "She enjoys <b>reading</b> novels."</p>

      <h4>Example 16</h4>
      <p><b>Spot the error</b>: "He has finished to write the letter."</p>
      <p><b>Solution:</b><br>"Finish" + V-ing.<br>Correct: "He has finished <b>writing</b>."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>After modals (can/could/may/will/should/must) → V1 only, no "to".</li>
        <li>After "to" (infinitive marker) → V1; but after "to" (preposition, as in "look forward to") → V-ing.</li>
        <li>Stative verbs (know, believe, love, have/own, etc.) → no -ing form.</li>
        <li>"Suggest", "advise", "demand", "recommend" + V-ing or "that + subjunctive" (he suggested I go).</li>
        <li>"Let/Make/See/Hear" + bare infinitive (no "to").</li>
        <li>"Help" — bare infinitive or "to + V" both acceptable.</li>
        <li>Don't confuse: <b>lie/lay/lain</b> (recline) vs <b>lay/laid/laid</b> (place) vs <b>lie/lied/lied</b> (untruth).</li>
      </ul>
    `,
    mcq: [
      { q: "Spot the error: 'He suggested me to leave.'", opts: ["He", "suggested me", "to leave", "No error"], a: 1, ex: "Suggest + V-ing or that-clause." },
      { q: "Choose: 'I look forward to ___ you.'", opts: ["meet", "meeting", "have met", "be met"], a: 1, ex: "Preposition 'to' → gerund." },
      { q: "Spot the error: 'Let me to go.'", opts: ["Let", "me to go", "No error", "Let me"], a: 1, ex: "Let + V1 (no 'to')." },
      { q: "Choose: 'I enjoy ___ in the morning.'", opts: ["to walk", "walking", "have walked", "walked"], a: 1, ex: "Enjoy + V-ing." },
      { q: "Spot the error: 'He is having a bike.'", opts: ["He", "is having", "a bike", "No error"], a: 1, ex: "'Have' as possession → simple, not continuous." },
      { q: "Choose: 'I saw him ___ across the road.'", opts: ["to run", "ran", "run", "have run"], a: 2, ex: "Perception verb + V1." },
      { q: "Spot the error: 'He prefers tea than coffee.'", opts: ["He", "prefers", "tea than", "No error"], a: 2, ex: "Prefer X to Y." },
      { q: "Choose: 'I avoided ___ him.'", opts: ["meet", "meeting", "to meet", "have met"], a: 1, ex: "Avoid + V-ing." },
      { q: "Spot the error: 'The murderer was hung yesterday.'", opts: ["The murderer", "was hung", "yesterday", "No error"], a: 1, ex: "Person → hanged." },
      { q: "Choose: 'She lay in bed.' (past tense of recline)", opts: ["lay", "lied", "laid", "lain"], a: 0, ex: "Lie → lay → lain." },
      { q: "Spot the error: 'I am knowing him for 5 years.'", opts: ["I am", "knowing him", "for 5 years", "No error"], a: 1, ex: "Stative — present perfect: have known." },
      { q: "Choose: 'He decided ___ the offer.'", opts: ["accept", "accepting", "to accept", "having accepted"], a: 2, ex: "Decide + infinitive." },
      { q: "Spot the error: 'The teacher made him to apologise.'", opts: ["The teacher", "made him to", "apologise", "No error"], a: 1, ex: "Make (active) + V1." },
      { q: "Choose: 'It has been raining ___ morning.'", opts: ["from", "since", "for", "by"], a: 1, ex: "Point of time → since." },
      { q: "Spot the error: 'He has finished to read the book.'", opts: ["He has", "finished to", "the book", "No error"], a: 1, ex: "Finish + V-ing." },
      { q: "Choose: 'I would rather ___ home.'", opts: ["go", "to go", "going", "went"], a: 0, ex: "Would rather + V1." },
      { q: "Spot the error: 'She refused going there.'", opts: ["She", "refused going", "there", "No error"], a: 1, ex: "Refuse + to + V1." },
      { q: "Choose: 'They are used to ___ early.'", opts: ["get up", "getting up", "got up", "have got up"], a: 1, ex: "Used to (preposition) + V-ing." },
      { q: "Spot the error: 'He used to plays cricket.'", opts: ["He", "used to plays", "cricket", "No error"], a: 1, ex: "Used to + V1." },
      { q: "Choose: 'He is good at ___.'", opts: ["sing", "to sing", "singing", "having sung"], a: 2, ex: "Preposition + V-ing." },
      { q: "Spot the error: 'I want that he should come.'", opts: ["I", "want that", "he should come", "No error"], a: 1, ex: "Want + obj + to + V1." },
      { q: "Choose: 'I had my hair ___ yesterday.'", opts: ["cut", "to cut", "cutting", "to be cut"], a: 0, ex: "Causative 'have' + V3." },
      { q: "Spot the error: 'The sun is rising in the east.' (general truth)", opts: ["The sun", "is rising", "east", "No error"], a: 1, ex: "Universal truth → simple present 'rises'." },
      { q: "Choose: 'He didn't dare ___ to me.'", opts: ["speaking", "speak", "to speak", "Both B and C"], a: 3, ex: "Dare can be modal (no 'to') or main (with 'to')." },
      { q: "Spot the error: 'She has gone to Delhi yesterday.'", opts: ["She has gone", "to Delhi", "yesterday", "No error"], a: 0, ex: "Past time → simple past 'went'." },
      { q: "Choose: 'The committee ___ divided in opinions.'", opts: ["is", "are", "was", "Either A or B"], a: 3, ex: "Singular if unit, plural if individuals." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 6. MODALS
  // ───────────────────────────────────────────────────────────────
  T["eng-modals"] = {
    body: `
      <h2>Modals</h2>
      <p><b>Modal verbs</b> express ability, permission, possibility, obligation, necessity, advice, etc. They are auxiliaries — always followed by V1 (no "to" in most cases). SSC asks 1-2 modal questions.</p>

      <h3>1. The 9 Core Modals + Semi-Modals</h3>
      <p><b>Core</b>: can, could, may, might, will, would, shall, should, must, ought to.<br>
      <b>Semi-modals</b>: dare, need, used to, had better.</p>

      <h3>2. Each Modal's Use</h3>

      <h4>CAN / COULD</h4>
      <ul>
        <li><b>Ability</b> (present/past): I <b>can</b> swim. / He <b>could</b> run fast in his youth.</li>
        <li><b>Permission</b> (informal): <b>Can</b> I go? (less formal than "may")</li>
        <li><b>Possibility</b>: Anyone <b>can</b> make a mistake.</li>
        <li><b>Polite request</b>: <b>Could</b> you help me?</li>
      </ul>

      <h4>MAY / MIGHT</h4>
      <ul>
        <li><b>Permission</b> (formal): <b>May</b> I come in?</li>
        <li><b>Possibility</b>: It <b>may</b> rain today. (50% probable) / It <b>might</b> rain. (less probable)</li>
        <li><b>Wish/blessing</b>: <b>May</b> God bless you!</li>
        <li><b>Purpose</b>: He works hard <b>so that</b> he <b>may</b> succeed.</li>
      </ul>

      <h4>WILL / WOULD</h4>
      <ul>
        <li><b>Future</b>: I <b>will</b> come tomorrow.</li>
        <li><b>Polite request</b>: <b>Would</b> you please...?</li>
        <li><b>Habitual past</b>: He <b>would</b> sit there for hours. (= used to)</li>
        <li><b>Conditional</b>: I <b>would</b> go if I had time.</li>
        <li><b>Willingness</b>: I <b>will</b> help you.</li>
      </ul>

      <h4>SHALL / SHOULD</h4>
      <ul>
        <li><b>Shall</b> — used with I/we for future (formal): <b>I shall</b> go. (modern usage prefers "will")</li>
        <li><b>Shall</b> in questions for offers: <b>Shall</b> I open the door?</li>
        <li><b>Shall</b> for command/promise (with you/he/they): You <b>shall</b> pay! (threat/promise)</li>
        <li><b>Should</b> — advice/obligation/suggestion: You <b>should</b> study harder.</li>
        <li><b>Should</b> — expectation: He <b>should</b> arrive soon.</li>
        <li><b>Should</b> in if-clause: If you <b>should</b> see him, tell me.</li>
      </ul>

      <h4>MUST</h4>
      <ul>
        <li><b>Strong necessity / obligation</b>: You <b>must</b> obey rules.</li>
        <li><b>Strong probability</b>: He <b>must</b> be tired.</li>
        <li><b>No past form</b> — use "had to" for past obligation: I <b>had to</b> leave.</li>
      </ul>

      <h4>OUGHT TO</h4>
      <ul>
        <li>Moral duty / advice: You <b>ought to</b> respect your parents.</li>
        <li>Always with "to" — that's the only modal that does.</li>
      </ul>

      <h4>NEED</h4>
      <ul>
        <li>As modal (in negatives/questions): You <b>needn't</b> come. / <b>Need</b> I come?</li>
        <li>As main verb: He <b>needs to</b> come. / He doesn't <b>need to</b> come.</li>
      </ul>

      <h4>DARE</h4>
      <ul>
        <li>As modal: He <b>dare not</b> say it. / How <b>dare</b> you!</li>
        <li>As main verb: He <b>dares to</b> say it. / He didn't <b>dare to</b> say it.</li>
      </ul>

      <h4>USED TO</h4>
      <ul>
        <li>Past habit: I <b>used to</b> smoke. (now I don't)</li>
        <li>Negative/question: Did you <b>use to</b>...? / I <b>didn't use to</b>...</li>
        <li>"Be used to + V-ing" = accustomed: I'm used to <b>waking</b> early.</li>
      </ul>

      <h4>HAD BETTER</h4>
      <ul>
        <li>Strong advice/warning: You <b>had better</b> leave now. / You'd better not be late.</li>
        <li>"Had better" + V1 (no "to").</li>
      </ul>

      <h3>3. Key Patterns</h3>
      <ul>
        <li><b>Modal + V1</b> (bare infinitive): I can <b>go</b>. ❌ I can to go.</li>
        <li><b>Modal + have + V3</b> (perfect modal): "must have done" / "should have done" / "could have done".</li>
        <li><b>NO modal after another modal</b>: ❌ I will can do it. → ✓ I will be able to do it.</li>
      </ul>

      <h3>4. Perfect Modals (modal + have + V3)</h3>
      <ul>
        <li><b>Must have V3</b> = strong certainty about past: He must have left already.</li>
        <li><b>Should have V3</b> = regret/criticism: You should have called me.</li>
        <li><b>Could have V3</b> = past possibility/ability not used: I could have helped (but didn't).</li>
        <li><b>Might have V3</b> = past possibility: They might have missed the bus.</li>
        <li><b>Need not have V3</b> = unnecessary past action: You needn't have waited.</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li><b>"May" / "Might"</b> for permission/possibility; <b>"Can" / "Could"</b> for ability.</li>
        <li><b>"Must" has NO past form</b> → use "had to".</li>
        <li><b>"Ought to"</b> is the only modal with "to".</li>
        <li><b>"Need" / "Dare"</b> behave as modal in negatives/questions only.</li>
        <li><b>Always V1 after modal</b> — never -ing or to+V (except ought to).</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "He can to swim well."</p>
      <p><b>Solution:</b><br>Modal + V1 only.<br>Correct: "He <b>can swim</b> well."</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "You must to obey your elders."</p>
      <p><b>Solution:</b><br>"Must" + V1 (no "to").<br>Correct: "You <b>must obey</b>."</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "He must left already."</p>
      <p><b>Solution:</b><br>Past use → "must have left".<br>Correct: "He <b>must have left</b>."</p>

      <h4>Example 4</h4>
      <p><b>Spot the error</b>: "You should studied harder."</p>
      <p><b>Solution:</b><br>Should + V1 OR should have + V3.<br>Correct: "You <b>should have studied</b>" (regret about past).</p>

      <h4>Example 5</h4>
      <p><b>Spot the error</b>: "I will can come tomorrow."</p>
      <p><b>Solution:</b><br>Two modals can't be consecutive.<br>Correct: "I <b>will be able to come</b>."</p>

      <h4>Example 6</h4>
      <p><b>Choose</b>: "If you should see him, ___ him to call me."</p>
      <p><b>Solution:</b><br>After "if you should" → imperative.<br>Correct: "<b>tell</b> him."</p>

      <h4>Example 7</h4>
      <p><b>Spot the error</b>: "He used to going to the gym."</p>
      <p><b>Solution:</b><br>"Used to" (past habit) + V1.<br>Correct: "He used to <b>go</b>."<br><i>(But "is used to going" = accustomed to. Different structure!)</i></p>

      <h4>Example 8</h4>
      <p><b>Spot the error</b>: "You had better to leave now."</p>
      <p><b>Solution:</b><br>"Had better" + V1.<br>Correct: "You had better <b>leave</b> now."</p>

      <h4>Example 9</h4>
      <p><b>Spot the error</b>: "He need not to come."</p>
      <p><b>Solution:</b><br>"Need" as modal: needn't + V1.<br>Correct: "He <b>need not come</b>" or "He <b>doesn't need to come</b>".</p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "May you live long!" / "Wish you a long life."</p>
      <p><b>Solution:</b><br>Both correct — "May you live long" is a blessing/wish (formal).</p>

      <h4>Example 11</h4>
      <p><b>Choose</b>: "It ___ rain today; the sky is grey."</p>
      <p><b>Solution:</b><br>Possibility (likely) → "may". For less likely, "might".<br>"It <b>may/might</b> rain today."</p>

      <h4>Example 12</h4>
      <p><b>Spot the error</b>: "You should not have done that. It was unnecessary."</p>
      <p><b>Solution:</b><br>Need to express "was unnecessary" → "need not have".<br>Correct: "You <b>need not have done</b> that."</p>

      <h4>Example 13</h4>
      <p><b>Spot the error</b>: "He ought respect his teachers."</p>
      <p><b>Solution:</b><br>"Ought" requires "to".<br>Correct: "He <b>ought to respect</b>."</p>

      <h4>Example 14</h4>
      <p><b>Spot the error</b>: "When I was young, I will play cricket daily."</p>
      <p><b>Solution:</b><br>Past habit → "would" or "used to".<br>Correct: "I <b>would play</b>" / "I <b>used to play</b>".</p>

      <h4>Example 15</h4>
      <p><b>Choose</b>: "She ___ have called, but she forgot."</p>
      <p><b>Solution:</b><br>Past possibility that didn't happen → "could have".<br>"She <b>could have called</b>."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>Modal + V1 ALWAYS — no "to", no -ing.</li>
        <li>"Must" has NO past form → use "had to".</li>
        <li>Two modals can't follow each other. Use "be able to" / "have to" for combinations.</li>
        <li>"Ought to" is the only one with "to".</li>
        <li>"Used to V1" (past habit) ≠ "be used to V-ing" (accustomed).</li>
        <li>"Had better + V1" — no "to".</li>
      </ul>
    `,
    mcq: [
      { q: "Spot the error: 'You must to obey rules.'", opts: ["You", "must to", "obey rules", "No error"], a: 1, ex: "Must + V1." },
      { q: "Choose: 'He ___ swim very well.'", opts: ["can to", "can", "can be", "can will"], a: 1, ex: "Modal + V1." },
      { q: "Spot the error: 'I will can finish it.'", opts: ["I", "will can", "finish it", "No error"], a: 1, ex: "Use 'will be able to'." },
      { q: "Choose: '___ I borrow your pen?'", opts: ["May", "Can", "Could", "All correct"], a: 3, ex: "All work for permission/request." },
      { q: "Choose: 'You ___ have called me yesterday.' (regret)", opts: ["could", "should", "would", "may"], a: 1, ex: "Should have = regret." },
      { q: "Spot the error: 'He used to playing cricket.'", opts: ["He", "used to", "playing", "cricket"], a: 2, ex: "Used to + V1 ('play')." },
      { q: "Choose: 'You ___ better leave now.'", opts: ["have", "had", "would", "should"], a: 1, ex: "Had better." },
      { q: "Spot the error: 'He need not to wait.'", opts: ["He", "need not to", "wait", "No error"], a: 1, ex: "Modal 'need not' + V1, no 'to'." },
      { q: "Choose: 'He ___ have missed the train; he is so punctual.' (unlikely past)", opts: ["must", "can't", "could not", "Both B and C"], a: 3, ex: "Negative certainty about past — 'can't have' or 'couldn't have'." },
      { q: "Spot the error: 'When I was a child, I will play in the park.'", opts: ["When I was", "I will play", "park", "No error"], a: 1, ex: "Past habit → would / used to." },
      { q: "Choose: 'He ___ respect his teachers.' (moral duty)", opts: ["should", "must", "ought to", "All correct"], a: 3, ex: "All work for obligation." },
      { q: "Spot the error: 'May you living long!'", opts: ["May", "you", "living", "long"], a: 2, ex: "May + V1 → 'live'." },
      { q: "Choose: 'I ___ go now; it's late.' (necessity)", opts: ["may", "must", "can", "would"], a: 1, ex: "Strong necessity → must." },
      { q: "Spot the error: 'I had to went there yesterday.'", opts: ["I", "had to went", "yesterday", "No error"], a: 1, ex: "Had to + V1: 'had to go'." },
      { q: "Choose: 'How ___ you say such things!'", opts: ["dare", "dares", "dared", "daring"], a: 0, ex: "Dare (modal) + V1." },
      { q: "Spot the error: 'He ought respect his elders.'", opts: ["He", "ought respect", "elders", "No error"], a: 1, ex: "Ought + to + V1." },
      { q: "Choose: 'You ___ have been more careful.' (regret)", opts: ["can", "could", "should", "Both B and C"], a: 3, ex: "Both 'could have' (possibility) and 'should have' (regret) work." },
      { q: "Spot the error: 'I am used to walk every morning.'", opts: ["I am", "used to walk", "every morning", "No error"], a: 1, ex: "Be used to + V-ing → 'walking'." },
      { q: "Choose: 'It ___ have rained; the ground is wet.'", opts: ["must", "should", "would", "shall"], a: 0, ex: "Strong inference about past → must have." },
      { q: "Spot the error: 'You needn't to worry.'", opts: ["You", "needn't to", "worry", "No error"], a: 1, ex: "Needn't + V1." },
      { q: "Choose: 'He ___ play chess as a child.' (past habit)", opts: ["uses to", "is used to", "used to", "would have"], a: 2, ex: "Used to (past habit)." },
      { q: "Spot the error: 'Could you to help me?'", opts: ["Could you", "to help me", "No error", "Could"], a: 1, ex: "Modal + V1." },
      { q: "Choose: 'If I ___ a bird, I would fly.'", opts: ["am", "were", "was", "be"], a: 1, ex: "Hypothetical → were (subjunctive)." },
      { q: "Spot the error: 'I might better leave.'", opts: ["I", "might better", "leave", "No error"], a: 1, ex: "Had better, not might better." },
      { q: "Choose: 'You ___ not have come if you were busy.'", opts: ["should", "must", "need", "could"], a: 2, ex: "Need not have = unnecessary past action." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 7. ADVERB
  // ───────────────────────────────────────────────────────────────
  T["eng-adverb"] = {
    body: `
      <h2>Adverb</h2>
      <p>An <b>adverb</b> modifies a verb, adjective, or another adverb. Most end in <b>-ly</b> but not all. SSC asks 1-2 questions on adverb position/formation.</p>

      <h3>1. Kinds of Adverbs</h3>
      <table>
        <tr><th>Kind</th><th>Tells</th><th>Examples</th></tr>
        <tr><td><b>Manner</b></td><td>how</td><td>quickly, well, badly, carefully</td></tr>
        <tr><td><b>Time</b></td><td>when</td><td>now, then, today, yesterday, soon, recently, already, still, yet</td></tr>
        <tr><td><b>Place</b></td><td>where</td><td>here, there, everywhere, outside, near</td></tr>
        <tr><td><b>Frequency</b></td><td>how often</td><td>always, often, never, seldom, sometimes, rarely, usually</td></tr>
        <tr><td><b>Degree</b></td><td>how much</td><td>very, quite, almost, too, fully, partly, enough</td></tr>
        <tr><td><b>Affirmation/Negation</b></td><td>yes/no</td><td>certainly, surely, not, never, hardly, scarcely</td></tr>
        <tr><td><b>Reason</b></td><td>why</td><td>therefore, hence, consequently</td></tr>
        <tr><td><b>Interrogative</b></td><td>question</td><td>when? where? how? why?</td></tr>
        <tr><td><b>Relative</b></td><td>links</td><td>when, where, why (in "the day when...")</td></tr>
      </table>

      <h3>2. Position of Adverbs</h3>

      <h4>Manner Adverbs</h4>
      <ul>
        <li>Usually after verb (or object): "He drove the car <b>carefully</b>."</li>
        <li>Before main verb is also OK if emphasis needed: "He <b>carefully</b> drove the car."</li>
      </ul>

      <h4>Frequency Adverbs (always/often/never/sometimes...)</h4>
      <ul>
        <li><b>Before</b> the main verb: "She <b>always</b> wakes early."</li>
        <li><b>After</b> "to be" verbs: "She is <b>always</b> punctual."</li>
        <li><b>Between</b> auxiliary and main verb: "She has <b>always</b> done well."</li>
      </ul>

      <h4>Time Adverbs</h4>
      <ul>
        <li>Usually <b>end of sentence</b>: "He came <b>yesterday</b>."</li>
      </ul>

      <h4>Place Adverbs</h4>
      <ul>
        <li>Usually <b>end of sentence</b>: "I'll meet you <b>there</b>."</li>
      </ul>

      <h4>Degree Adverbs (very, too, quite, almost...)</h4>
      <ul>
        <li>Usually <b>before</b> the adjective/adverb they modify: "He is <b>very</b> tall."</li>
      </ul>

      <h3>3. Order if Multiple Adverbs</h3>
      <p>Usually: <b>Manner → Place → Time</b> (MPT).</p>
      <p>Example: "He works <b>hard (manner) here (place) every day (time)</b>."</p>

      <h3>4. Common Adverbs That Look Like Adjectives</h3>
      <p>Same form for adjective and adverb (no -ly added):</p>
      <ul>
        <li><b>fast</b>: a fast car (adj) / drives fast (adv)</li>
        <li><b>hard</b>: hard work (adj) / works hard (adv)</li>
        <li><b>early</b>: early morning (adj) / arrived early (adv)</li>
        <li><b>late</b>: a late hour (adj) / came late (adv) <i>(careful: "lately" = recently, different meaning!)</i></li>
        <li><b>well</b>: adverb of "good"; "she is well" = healthy (adj here)</li>
        <li><b>high, low, deep, near, far, much</b></li>
      </ul>
      <p><b>Tricky -ly pairs (different meaning)</b>:</p>
      <ul>
        <li><b>Late</b> (after time) vs <b>Lately</b> (recently)</li>
        <li><b>Hard</b> (strenuously) vs <b>Hardly</b> (almost not)</li>
        <li><b>Near</b> (close) vs <b>Nearly</b> (almost)</li>
        <li><b>High</b> (up) vs <b>Highly</b> (very much, in level)</li>
        <li><b>Deep</b> (down) vs <b>Deeply</b> (intensely emotionally)</li>
      </ul>

      <h3>5. "Too" vs "Very" vs "Enough"</h3>
      <ul>
        <li><b>Too</b> = excessively (negative implication): "He is <b>too</b> tired to work."</li>
        <li><b>Very</b> = to a high degree (neutral): "He is <b>very</b> tired."</li>
        <li><b>Enough</b> = sufficiently: comes <b>after</b> adjective/adverb: "He is old <b>enough</b> to drive."</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li>Frequency adverbs → before main verb; after "be".</li>
        <li>Order: Manner → Place → Time.</li>
        <li>"Hardly", "Scarcely", "Barely", "Seldom", "Rarely" are <b>negative</b> — don't add another negative.</li>
        <li>"Hardly... when / No sooner... than" → invert verb. "Hardly had he arrived when..."</li>
        <li>"Enough" placement: <b>before noun</b>, <b>after adj/adv</b>.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "He drives a car fastly."</p>
      <p><b>Solution:</b><br>"Fast" is both adjective and adverb (no -ly form).<br>Correct: "He drives a car <b>fast</b>."</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "I had hardly reached home when it began to rain."</p>
      <p><b>Solution:</b><br>"Hardly... when" pattern with inversion: "Hardly <b>had I</b> reached..."<br>Correct: "<b>Hardly had I reached</b> home when it began to rain."</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "I have not seen him lately."</p>
      <p><b>Solution:</b><br>Correct — "lately" = recently.</p>

      <h4>Example 4</h4>
      <p><b>Spot the error</b>: "He works very hardly."</p>
      <p><b>Solution:</b><br>"Hardly" = almost not. Wrong meaning.<br>Correct: "He works very <b>hard</b>."</p>

      <h4>Example 5</h4>
      <p><b>Spot the error</b>: "She is too beautiful."</p>
      <p><b>Solution:</b><br>"Too" suggests negative consequence. If just expressing degree, use "very".<br>Correct: "She is <b>very</b> beautiful." (Unless context: "She is too beautiful to ignore" — then "too" fine.)</p>

      <h4>Example 6</h4>
      <p><b>Spot the error</b>: "He is enough rich to buy this."</p>
      <p><b>Solution:</b><br>"Enough" comes after adjective.<br>Correct: "He is <b>rich enough</b> to buy this."</p>

      <h4>Example 7</h4>
      <p><b>Spot the error</b>: "He didn't hardly know me."</p>
      <p><b>Solution:</b><br>Double negative — "hardly" already negative.<br>Correct: "He <b>hardly knew</b> me." (no "didn't")</p>

      <h4>Example 8</h4>
      <p><b>Spot the error</b>: "He has gone to school yesterday."</p>
      <p><b>Solution:</b><br>"Yesterday" (specific past) → simple past, not present perfect.<br>Correct: "He <b>went</b> to school yesterday."</p>

      <h4>Example 9</h4>
      <p><b>Spot the error</b>: "He often is late."</p>
      <p><b>Solution:</b><br>Frequency adverb after "be".<br>Correct: "He <b>is often</b> late."</p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "He plays cricket very well in the field daily."</p>
      <p><b>Solution:</b><br>Order should be M-P-T.<br>Correct: "He plays cricket <b>very well in the field daily</b>." — Actually this is already in order. <i>Adjust based on context.</i></p>

      <h4>Example 11</h4>
      <p><b>Spot the error</b>: "Sit down quietly!"</p>
      <p><b>Solution:</b><br>Correct. "Quietly" is adverb of manner modifying "sit".</p>

      <h4>Example 12</h4>
      <p><b>Spot the error</b>: "Drive slow on this road."</p>
      <p><b>Solution:</b><br>Should be adverb "slowly" in formal usage.<br>Correct: "Drive <b>slowly</b>." <i>(In informal speech, "drive slow" is acceptable.)</i></p>

      <h4>Example 13</h4>
      <p><b>Spot the error</b>: "No sooner he came than I left."</p>
      <p><b>Solution:</b><br>"No sooner... than" with inversion.<br>Correct: "<b>No sooner had he come than</b> I left."</p>

      <h4>Example 14</h4>
      <p><b>Spot the error</b>: "He scarcely never speaks rudely."</p>
      <p><b>Solution:</b><br>Double negative.<br>Correct: "He <b>scarcely speaks</b> rudely."</p>

      <h4>Example 15</h4>
      <p><b>Spot the error</b>: "He is highly tall."</p>
      <p><b>Solution:</b><br>"Highly" = to a great degree (in opinion/quality). Physical height → "very tall".<br>Correct: "He is <b>very tall</b>." / "He is <b>highly</b> intelligent" (✓ for quality).</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>Don't add -ly to words that don't need it: "fast", "hard", "early", "late" — adverb forms are same as adjective.</li>
        <li>"Hardly", "Scarcely", "Barely" — already negative. NO double negative.</li>
        <li>"Hardly... when" / "No sooner... than" → INVERT the auxiliary.</li>
        <li>Frequency adverbs come <b>before</b> main verb, <b>after</b> "be" verb.</li>
        <li>"Enough" comes <b>before</b> a noun, <b>after</b> an adj/adv.</li>
        <li>"Too" implies negative consequence; "very" is neutral.</li>
      </ul>
    `,
    mcq: [
      { q: "Spot the error: 'He drives fastly.'", opts: ["He drives", "fastly", "No error", "He"], a: 1, ex: "'Fast' is both adj and adv." },
      { q: "Choose: 'Hardly ___ when the lights went out.'", opts: ["I had arrived", "had I arrived", "I arrived", "did I arrive"], a: 1, ex: "Inversion after 'hardly'." },
      { q: "Spot the error: 'He didn't hardly know me.'", opts: ["He", "didn't hardly", "know me", "No error"], a: 1, ex: "Double negative." },
      { q: "Choose: 'He is ___ enough to drive.'", opts: ["old", "older", "more old", "most old"], a: 0, ex: "Enough after adj." },
      { q: "Spot the error: 'He often is late.'", opts: ["He often", "often is", "is late", "No error"], a: 1, ex: "Frequency after 'be': 'is often'." },
      { q: "Choose: 'I haven't seen him ___.'", opts: ["late", "lately", "later", "lastly"], a: 1, ex: "Lately = recently." },
      { q: "Spot the error: 'He works hardly on this project.'", opts: ["He", "works hardly", "project", "No error"], a: 1, ex: "Hardly = almost not. Use 'hard'." },
      { q: "Choose: 'No sooner ___ when the bell rang.'", opts: ["he had sat", "had he sat", "he sat", "did he sit"], a: 1, ex: "Inversion: 'no sooner had + S + V3'." },
      { q: "Spot the error: 'She is enough rich.'", opts: ["She is", "enough rich", "No error", "rich"], a: 1, ex: "'Rich enough'." },
      { q: "Choose: 'The ground is wet; it ___ rained.'", opts: ["should have", "must have", "could have", "would have"], a: 1, ex: "Strong inference past — must have." },
      { q: "Spot the error: 'They reached safely there.'", opts: ["reached safely", "safely there", "No error", "They"], a: 1, ex: "Order M-P-T: 'safely there' OK, but typically 'reached there safely'." },
      { q: "Choose: 'He spoke ___ on the topic.'", opts: ["intelligent", "intelligence", "intelligently", "intelligenter"], a: 2, ex: "Adverb modifies 'spoke'." },
      { q: "Spot the error: 'I high admire his work.'", opts: ["I", "high admire", "his work", "No error"], a: 1, ex: "'Highly admire' (level)." },
      { q: "Choose: 'He came ___.' (recently)", opts: ["late", "lately", "later", "latest"], a: 1, ex: "Recently = lately." },
      { q: "Spot the error: 'She is too good.'", opts: ["She is", "too good", "No error", "is"], a: 1, ex: "'Too' implies negative; use 'very'." },
      { q: "Choose: 'I have ___ finished my work.'", opts: ["already", "yet", "still", "now"], a: 0, ex: "Already (positive) before V3." },
      { q: "Spot the error: 'He doesn't never come on time.'", opts: ["doesn't never", "He", "on time", "No error"], a: 0, ex: "Double negative." },
      { q: "Choose: 'He scarcely ___ what was happening.'", opts: ["knows", "knew", "doesn't know", "didn't know"], a: 1, ex: "Scarcely takes positive verb." },
      { q: "Spot the error: 'I never have seen such a sight.'", opts: ["I never have", "have seen", "such a sight", "No error"], a: 0, ex: "Order: 'I have never seen'." },
      { q: "Choose: 'It is ___ that he passed.' (almost not)", opts: ["nearly true", "hardly true", "highly true", "deeply true"], a: 1, ex: "Hardly = almost not." },
      { q: "Spot the error: 'He plays cricket very good.'", opts: ["He plays", "very good", "No error", "cricket"], a: 1, ex: "Adverb 'well'." },
      { q: "Choose: '___ before, I felt nervous.'", opts: ["Like never", "Never as", "Never before", "As never before"], a: 2, ex: "Standard phrase." },
      { q: "Spot the error: 'The teacher come daily.'", opts: ["The teacher", "come", "daily", "No error"], a: 1, ex: "Singular subject → 'comes'." },
      { q: "Choose: 'She arrived ___.'", opts: ["soonly", "soon", "soonly enough", "more sooner"], a: 1, ex: "'Soon' has no -ly form." },
      { q: "Spot the error: 'He sat quiet in the room.'", opts: ["He sat", "quiet", "in the room", "No error"], a: 1, ex: "'Quietly' (manner adverb)." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 8. PREPOSITION
  // ───────────────────────────────────────────────────────────────
  T["eng-preposition"] = {
    body: `
      <h2>Preposition</h2>
      <p>A <b>preposition</b> shows the relation between a noun/pronoun and other words. SSC asks 2-3 preposition questions — usually wrong preposition used with a verb/adjective/noun.</p>

      <h3>1. Types of Prepositions</h3>
      <ul>
        <li><b>Of time</b>: at (time), on (day/date), in (month/year/period)</li>
        <li><b>Of place</b>: at (point), on (surface), in (enclosed)</li>
        <li><b>Of direction/movement</b>: to, into, from, towards, across, through</li>
        <li><b>Of agent/instrument</b>: by (agent), with (instrument)</li>
      </ul>

      <h3>2. AT / ON / IN — Time & Place Rules</h3>

      <h4>TIME</h4>
      <ul>
        <li><b>At</b> — specific time: at 5 pm, at midnight, at noon, at sunset, at the moment, at Christmas</li>
        <li><b>On</b> — day/date: on Sunday, on May 12th, on my birthday, on Christmas Day</li>
        <li><b>In</b> — month/year/period: in June, in 2025, in summer, in the morning, in the past</li>
      </ul>

      <h4>PLACE</h4>
      <ul>
        <li><b>At</b> — specific point: at the door, at the bus stop, at the airport, at home, at work</li>
        <li><b>On</b> — surface: on the table, on the wall, on the floor, on the page</li>
        <li><b>In</b> — enclosed/inside: in the room, in the box, in Delhi, in India, in water</li>
      </ul>

      <h3>3. SINCE vs FOR vs FROM</h3>
      <ul>
        <li><b>Since</b> — specific starting point (in time): since Monday, since 2010, since morning, since I came</li>
        <li><b>For</b> — duration: for 2 hours, for 3 days, for years</li>
        <li><b>From</b> — starting point (general, often with "to"): from 9 to 5, from Delhi to Mumbai</li>
      </ul>

      <h3>4. Prepositions with Specific Verbs/Adjectives/Nouns</h3>

      <h4>Verb + Preposition (memorize these — often tested)</h4>
      <table>
        <tr><th>Verb</th><th>Prep</th><th>Example</th></tr>
        <tr><td>agree</td><td>to (proposal) / with (person) / on (matter)</td><td>I agree with you.</td></tr>
        <tr><td>arrive</td><td>at (small place) / in (big place)</td><td>arrived at station / in Delhi</td></tr>
        <tr><td>congratulate</td><td>on</td><td>congratulate her on success</td></tr>
        <tr><td>consist</td><td>of</td><td>Team consists of 11.</td></tr>
        <tr><td>depend</td><td>on / upon</td><td>It depends on him.</td></tr>
        <tr><td>differ</td><td>from (thing) / with (person)</td><td>I differ with you on this.</td></tr>
        <tr><td>insist</td><td>on</td><td>He insisted on going.</td></tr>
        <tr><td>look</td><td>at (see) / after (care) / for (search) / into (investigate)</td><td>look after the baby</td></tr>
        <tr><td>laugh</td><td>at (mock)</td><td>Don't laugh at him.</td></tr>
        <tr><td>listen</td><td>to</td><td>Listen to me.</td></tr>
        <tr><td>marry</td><td>(no prep!)</td><td>She married him. NOT 'with him'.</td></tr>
        <tr><td>prefer</td><td>to</td><td>I prefer tea to coffee.</td></tr>
        <tr><td>prevent</td><td>from + V-ing</td><td>prevented him from going</td></tr>
        <tr><td>reach</td><td>(no prep!)</td><td>reached Delhi. NOT 'reached at Delhi'.</td></tr>
        <tr><td>discuss</td><td>(no prep!)</td><td>We discussed the matter. NOT 'discussed about'.</td></tr>
        <tr><td>request</td><td>(no prep!)</td><td>I requested him. NOT 'requested to him'.</td></tr>
        <tr><td>order</td><td>(no prep!)</td><td>I ordered him. NOT 'ordered to him'.</td></tr>
        <tr><td>warn</td><td>against / about / of</td><td>warned him against smoking</td></tr>
      </table>

      <h4>Adjective + Preposition</h4>
      <ul>
        <li>afraid <b>of</b>, angry <b>with</b> (person) / <b>at</b> (thing), good <b>at</b>, bad <b>at</b>, fond <b>of</b>, jealous <b>of</b>, proud <b>of</b>, tired <b>of</b>, sure <b>of/about</b>, married <b>to</b>, different <b>from</b>, similar <b>to</b>, addicted <b>to</b>, popular <b>with</b>, devoted <b>to</b>, satisfied <b>with</b></li>
      </ul>

      <h4>Noun + Preposition</h4>
      <ul>
        <li>reason <b>for</b>, cause <b>of</b>, demand <b>for</b>, hope <b>of/for</b>, interest <b>in</b>, advantage <b>of/over</b>, attack <b>on</b>, lack <b>of</b>, need <b>of/for</b>, reply <b>to</b>, increase <b>in</b>, key <b>to</b>, solution <b>to/for</b></li>
      </ul>

      <h3>5. Verbs that DON'T take prepositions (Important!)</h3>
      <p><b>Discuss, Reach, Marry, Resemble, Order, Request, Tell, Ask, Inform</b> (someone), <b>Accompany, Lack, Resist, Sign, Pay (a sum)</b></p>
      <ul>
        <li>✓ He <b>discussed the issue</b>. ❌ discussed about the issue</li>
        <li>✓ He <b>reached home</b>. ❌ reached to home / reached at home</li>
        <li>✓ She <b>married him</b>. ❌ married with him</li>
        <li>✓ He <b>resembles his father</b>. ❌ resembles to his father</li>
        <li>✓ He <b>requested me</b>. ❌ requested to me</li>
        <li>✓ He <b>ordered him</b>. ❌ ordered to him</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li><b>Time</b>: AT (clock), ON (day/date), IN (month/year/period).</li>
        <li><b>Place</b>: AT (point), ON (surface), IN (enclosed).</li>
        <li><b>Married TO</b>, NOT married WITH.</li>
        <li><b>Different FROM</b>, NOT different than (American but SSC accepts "from").</li>
        <li><b>Prefer X TO Y</b>, NOT than.</li>
        <li><b>Senior/Junior/Superior/Inferior + TO</b>.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "He arrived to Delhi yesterday."</p>
      <p><b>Solution:</b><br>"Arrive" + "in" (big place) or "at" (small place).<br>Correct: "He arrived <b>in</b> Delhi."</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "She married with him."</p>
      <p><b>Solution:</b><br>"Marry" takes no preposition.<br>Correct: "She <b>married him</b>."</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "Listen me carefully."</p>
      <p><b>Solution:</b><br>Listen TO.<br>Correct: "Listen <b>to</b> me."</p>

      <h4>Example 4</h4>
      <p><b>Spot the error</b>: "He discussed about the matter."</p>
      <p><b>Solution:</b><br>"Discuss" takes no preposition.<br>Correct: "He <b>discussed the matter</b>."</p>

      <h4>Example 5</h4>
      <p><b>Spot the error</b>: "She is married with a doctor."</p>
      <p><b>Solution:</b><br>"Married TO".<br>Correct: "married <b>to</b> a doctor."</p>

      <h4>Example 6</h4>
      <p><b>Spot the error</b>: "I have been waiting since two hours."</p>
      <p><b>Solution:</b><br>Duration → "for".<br>Correct: "...waiting <b>for</b> two hours."</p>

      <h4>Example 7</h4>
      <p><b>Spot the error</b>: "I prefer tea than coffee."</p>
      <p><b>Solution:</b><br>"Prefer X to Y".<br>Correct: "I prefer tea <b>to</b> coffee."</p>

      <h4>Example 8</h4>
      <p><b>Spot the error</b>: "He is good in mathematics."</p>
      <p><b>Solution:</b><br>"Good AT".<br>Correct: "He is good <b>at</b> mathematics."</p>

      <h4>Example 9</h4>
      <p><b>Spot the error</b>: "She is jealous from her sister."</p>
      <p><b>Solution:</b><br>"Jealous OF".<br>Correct: "jealous <b>of</b> her sister."</p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "He requested to me to help him."</p>
      <p><b>Solution:</b><br>"Request" + obj (no "to").<br>Correct: "He <b>requested me</b> to help him."</p>

      <h4>Example 11</h4>
      <p><b>Spot the error</b>: "He died from cancer."</p>
      <p><b>Solution:</b><br>"Die OF (disease)" / "Die FROM (injury/accident)".<br>Correct: "He died <b>of</b> cancer."</p>

      <h4>Example 12</h4>
      <p><b>Spot the error</b>: "He is suffering from fever since two days."</p>
      <p><b>Solution:</b><br>Two errors: "two days" is duration → "for"; also "since two days" wrong even otherwise.<br>Correct: "...suffering from fever <b>for</b> two days."</p>

      <h4>Example 13</h4>
      <p><b>Spot the error</b>: "He divided the cake between his five children."</p>
      <p><b>Solution:</b><br>"Between" for 2; "among" for more than 2.<br>Correct: "...divided the cake <b>among</b> his five children."</p>

      <h4>Example 14</h4>
      <p><b>Spot the error</b>: "The book is consisting of 10 chapters."</p>
      <p><b>Solution:</b><br>"Consist" is stative — no continuous form.<br>Correct: "The book <b>consists of</b> 10 chapters."</p>

      <h4>Example 15</h4>
      <p><b>Spot the error</b>: "He is angry on me."</p>
      <p><b>Solution:</b><br>"Angry with" (person), "angry at" (situation).<br>Correct: "He is <b>angry with</b> me."</p>

      <h4>Example 16</h4>
      <p><b>Spot the error</b>: "I congratulated him for his success."</p>
      <p><b>Solution:</b><br>"Congratulate ON".<br>Correct: "I congratulated him <b>on</b> his success."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>NO preposition after: discuss, reach, marry, resemble, order, request, tell, ask, lack, resist, accompany, inform (someone).</li>
        <li>"Married <b>to</b>", "Different <b>from</b>", "Prefer X <b>to</b> Y", "Angry <b>with</b> (person)".</li>
        <li>"Die <b>of</b> disease" but "Die <b>from</b> accident".</li>
        <li>"Between" 2 people, "Among" 3+.</li>
        <li>"Since" + point in time; "For" + duration.</li>
        <li>"In the morning", "At night" (NOT "in the night" usually).</li>
      </ul>
    `,
    mcq: [
      { q: "Spot the error: 'He reached at Delhi.'", opts: ["He reached", "at Delhi", "No error", "Delhi"], a: 1, ex: "Reach takes no preposition." },
      { q: "Choose: 'She is married ___ a doctor.'", opts: ["with", "to", "by", "for"], a: 1, ex: "Married to." },
      { q: "Spot the error: 'He has been working since two hours.'", opts: ["He", "since two hours", "working", "No error"], a: 1, ex: "Duration → 'for'." },
      { q: "Choose: 'I prefer tea ___ coffee.'", opts: ["than", "to", "over", "from"], a: 1, ex: "Prefer X to Y." },
      { q: "Spot the error: 'Listen me carefully.'", opts: ["Listen me", "carefully", "No error", "Listen"], a: 0, ex: "Listen to me." },
      { q: "Choose: 'He died ___ cancer.'", opts: ["from", "of", "by", "with"], a: 1, ex: "Die of disease." },
      { q: "Spot the error: 'They divided the money between four boys.'", opts: ["They", "between four boys", "money", "No error"], a: 1, ex: "Among (>2 people)." },
      { q: "Choose: 'He is good ___ English.'", opts: ["in", "at", "with", "of"], a: 1, ex: "Good at." },
      { q: "Spot the error: 'I congratulated him for passing.'", opts: ["I", "for passing", "him", "No error"], a: 1, ex: "Congratulate on." },
      { q: "Choose: 'She is afraid ___ darkness.'", opts: ["from", "to", "of", "with"], a: 2, ex: "Afraid of." },
      { q: "Spot the error: 'He is junior than me.'", opts: ["He is", "junior than", "me", "No error"], a: 1, ex: "Junior to." },
      { q: "Choose: 'The boy is angry ___ his teacher.'", opts: ["on", "with", "at", "from"], a: 1, ex: "Angry with (person)." },
      { q: "Spot the error: 'He requested to me to come.'", opts: ["He", "requested to me", "to come", "No error"], a: 1, ex: "Request takes no 'to'." },
      { q: "Choose: 'He resembles ___ his father.'", opts: ["to", "with", "(no prep)", "from"], a: 2, ex: "Resemble takes no preposition." },
      { q: "Spot the error: 'I have been waiting from 5 o'clock.'", opts: ["I have been", "from 5 o'clock", "waiting", "No error"], a: 1, ex: "Since (point of time)." },
      { q: "Choose: 'He is suffering ___ fever.'", opts: ["from", "with", "of", "by"], a: 0, ex: "Suffering from." },
      { q: "Spot the error: 'She married with a businessman.'", opts: ["She married", "with", "a businessman", "No error"], a: 1, ex: "Married to (or no prep)." },
      { q: "Choose: 'It depends ___ the weather.'", opts: ["from", "in", "on", "at"], a: 2, ex: "Depend on." },
      { q: "Spot the error: 'He insisted in going.'", opts: ["He", "insisted in", "going", "No error"], a: 1, ex: "Insisted on." },
      { q: "Choose: 'The book consists ___ 10 chapters.'", opts: ["from", "in", "of", "with"], a: 2, ex: "Consist of." },
      { q: "Spot the error: 'Will you accompany with me?'", opts: ["Will you", "accompany with", "me", "No error"], a: 1, ex: "Accompany takes no preposition." },
      { q: "Choose: 'I have not seen him ___ Monday.'", opts: ["since", "for", "from", "by"], a: 0, ex: "Since Monday (point)." },
      { q: "Spot the error: 'She is interested for music.'", opts: ["She is", "interested for", "music", "No error"], a: 1, ex: "Interested in." },
      { q: "Choose: 'He was killed ___ a snake bite.'", opts: ["from", "by", "with", "of"], a: 1, ex: "By (agent)." },
      { q: "Spot the error: 'He died from heart attack.'", opts: ["He died", "from", "heart attack", "No error"], a: 1, ex: "Die of (cause)." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 9. CONJUNCTION
  // ───────────────────────────────────────────────────────────────
  T["eng-conjunction"] = {
    body: `
      <h2>Conjunction</h2>
      <p>A <b>conjunction</b> joins words, phrases, or clauses. SSC asks 1-2 questions on conjunction misuse.</p>

      <h3>1. Types</h3>
      <ul>
        <li><b>Coordinating</b>: join equal elements. <b>FANBOYS</b>: <b>F</b>or, <b>A</b>nd, <b>N</b>or, <b>B</b>ut, <b>O</b>r, <b>Y</b>et, <b>S</b>o.</li>
        <li><b>Correlative</b> (paired): either...or, neither...nor, not only...but also, both...and, whether...or, no sooner...than, hardly...when, scarcely...when</li>
        <li><b>Subordinating</b>: introduce dependent clauses. <i>because, since, as, although, though, while, if, unless, until, when, where, before, after, that, lest</i></li>
      </ul>

      <h3>2. Correlative Pairs (most-tested)</h3>
      <table>
        <tr><th>Pair</th><th>Example</th></tr>
        <tr><td><b>Either ... or</b></td><td>Either you or he is wrong.</td></tr>
        <tr><td><b>Neither ... nor</b></td><td>Neither he nor I am responsible.</td></tr>
        <tr><td><b>Not only ... but also</b></td><td>She is not only smart but also kind.</td></tr>
        <tr><td><b>Both ... and</b></td><td>Both Ram and Sita came.</td></tr>
        <tr><td><b>Whether ... or</b></td><td>Tell me whether you'll come or not.</td></tr>
        <tr><td><b>No sooner ... than</b></td><td>No sooner had I sat than the bell rang.</td></tr>
        <tr><td><b>Hardly ... when</b></td><td>Hardly had I reached when it rained.</td></tr>
        <tr><td><b>Scarcely ... when</b></td><td>Scarcely had he entered when she left.</td></tr>
        <tr><td><b>Such ... that</b></td><td>It was such a beautiful sight that...</td></tr>
        <tr><td><b>So ... that</b></td><td>He is so weak that he can't walk.</td></tr>
        <tr><td><b>As ... as</b></td><td>She is as tall as her brother.</td></tr>
        <tr><td><b>Not ... but</b></td><td>He is not a poet but a writer.</td></tr>
        <tr><td><b>Lest ... should</b></td><td>Walk fast lest you should miss the train.</td></tr>
      </table>

      <h3>3. Key Rules</h3>

      <h4>Rule 1: Either/Neither — Verb agrees with NEAREST subject</h4>
      <ul>
        <li>✓ Either he or I <b>am</b> coming.</li>
        <li>✓ Neither you nor she <b>is</b> wrong.</li>
        <li>✓ Either of them <b>is</b> ready. (singular)</li>
      </ul>

      <h4>Rule 2: "Not only ... but also" — parallel structure</h4>
      <ul>
        <li>✓ He is not only intelligent but also hardworking.</li>
        <li>❌ He not only sings but also is dancing. (mixed forms)</li>
      </ul>

      <h4>Rule 3: "Both ... and" — parallel and avoid "as well as"</h4>
      <ul>
        <li>✓ Both Ram and Shyam are here. ❌ Both Ram as well as Shyam.</li>
      </ul>

      <h4>Rule 4: "Lest" + should + V1 (negative idea)</h4>
      <ul>
        <li>✓ Hurry, lest you <b>should</b> miss the train.</li>
        <li>❌ Lest you don't miss. (lest is already negative)</li>
      </ul>

      <h4>Rule 5: "Unless" — negative; don't use "not" with it</h4>
      <ul>
        <li>✓ I won't go unless he <b>calls</b>.</li>
        <li>❌ Unless he doesn't call.</li>
      </ul>

      <h4>Rule 6: "Although / Though" — NOT followed by "but"</h4>
      <ul>
        <li>✓ Although he is rich, he is unhappy.</li>
        <li>❌ Although he is rich, but he is unhappy.</li>
      </ul>

      <h4>Rule 7: "No sooner ... than" / "Hardly/Scarcely ... when"</h4>
      <ul>
        <li>Pattern: Hardly/No sooner + had + subject + V3 + when/than + simple past</li>
        <li>✓ No sooner had he arrived than I left.</li>
        <li>❌ No sooner he arrived than I left.</li>
      </ul>

      <h4>Rule 8: "Such ... that" vs "So ... that"</h4>
      <ul>
        <li><b>Such + adj + noun + that</b>: It was <b>such a beautiful day</b> that...</li>
        <li><b>So + adj/adv + that</b>: He is <b>so tired</b> that he can't walk.</li>
      </ul>

      <h4>Rule 9: "Reason ... because" — wrong (redundant)</h4>
      <ul>
        <li>❌ The reason for his absence is because he is sick.</li>
        <li>✓ The reason for his absence is that he is sick. / He is absent because he is sick.</li>
      </ul>

      <h4>Rule 10: "Until" (negative meaning)</h4>
      <ul>
        <li>✓ Wait until I come. (until = up to the time when)</li>
        <li>❌ Don't go until I don't come. (double negative)</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li>Correlatives must be <b>parallel</b> (same form on both sides).</li>
        <li>"Either/Neither" verb agrees with <b>nearest</b> subject.</li>
        <li>"Although...but", "Despite...but", "In spite of...but" — pick ONE, not both.</li>
        <li>"Unless" and "Lest" are already negative — don't add another "not".</li>
        <li>"No sooner... than" / "Hardly...when" → inversion of subject and verb.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "Either he or I am wrong."</p>
      <p><b>Solution:</b><br>Verb agrees with nearer subject (I).<br>Correct: "Either he or I <b>am</b> wrong." (this is already correct!) <br><i>Correct alternative</i>: "Either he or you are wrong."</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "Although he is rich, but he is sad."</p>
      <p><b>Solution:</b><br>Don't use both "although" and "but".<br>Correct: "Although he is rich, he is sad." / "He is rich, but he is sad."</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "No sooner I reached than the bell rang."</p>
      <p><b>Solution:</b><br>Inversion required.<br>Correct: "No sooner <b>had I reached</b> than the bell rang."</p>

      <h4>Example 4</h4>
      <p><b>Spot the error</b>: "He is not only a poet but a writer also."</p>
      <p><b>Solution:</b><br>"Not only ... but also" — fixed pair.<br>Correct: "He is not only a poet <b>but also</b> a writer."</p>

      <h4>Example 5</h4>
      <p><b>Spot the error</b>: "Run fast lest you should not miss the train."</p>
      <p><b>Solution:</b><br>"Lest" is already negative.<br>Correct: "...lest you <b>should miss</b>."</p>

      <h4>Example 6</h4>
      <p><b>Spot the error</b>: "He neither came nor he wrote."</p>
      <p><b>Solution:</b><br>Parallel structure required.<br>Correct: "He neither <b>came nor wrote</b>."</p>

      <h4>Example 7</h4>
      <p><b>Spot the error</b>: "Unless you don't try, you won't succeed."</p>
      <p><b>Solution:</b><br>"Unless" is negative.<br>Correct: "Unless you <b>try</b>, you won't succeed."</p>

      <h4>Example 8</h4>
      <p><b>Spot the error</b>: "She is so a beautiful girl that everyone loves her."</p>
      <p><b>Solution:</b><br>"So + adj + that"; for "adj + noun" use "such".<br>Correct: "She is <b>such a beautiful girl</b> that..."</p>

      <h4>Example 9</h4>
      <p><b>Spot the error</b>: "Both my brother as well as I went."</p>
      <p><b>Solution:</b><br>"Both ... and", not "both as well as".<br>Correct: "<b>Both my brother and I</b> went."</p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "The reason of his failure is because he was lazy."</p>
      <p><b>Solution:</b><br>"Reason... because" redundant.<br>Correct: "The reason for his failure is <b>that</b> he was lazy."</p>

      <h4>Example 11</h4>
      <p><b>Spot the error</b>: "Hardly he had reached when it began to rain."</p>
      <p><b>Solution:</b><br>Inversion needed.<br>Correct: "Hardly <b>had he reached</b> when..."</p>

      <h4>Example 12</h4>
      <p><b>Spot the error</b>: "Wait here till I will return."</p>
      <p><b>Solution:</b><br>After "till/until/when/before/after" — simple present (no future).<br>Correct: "Wait here till I <b>return</b>."</p>

      <h4>Example 13</h4>
      <p><b>Spot the error</b>: "Neither he is wise nor honest."</p>
      <p><b>Solution:</b><br>"Neither" placement — should be just before what's being negated.<br>Correct: "He is <b>neither wise nor honest</b>."</p>

      <h4>Example 14</h4>
      <p><b>Spot the error</b>: "Either you or me have to go."</p>
      <p><b>Solution:</b><br>"Me" → "I" (subject); verb agrees with nearest (I) → "have".<br>Correct: "Either you or <b>I have to go</b>."</p>

      <h4>Example 15</h4>
      <p><b>Spot the error</b>: "He is so weak that he cannot walks."</p>
      <p><b>Solution:</b><br>After modal "cannot" → V1.<br>Correct: "...he <b>cannot walk</b>."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>Never use "Although...but" or "Despite...but" together.</li>
        <li>"Unless" / "Lest" are already negative — no double negative.</li>
        <li>"Either/Neither" + verb agrees with nearest subject.</li>
        <li>"No sooner... than" requires inversion (had + S + V3).</li>
        <li>"Such + adj + noun + that"; "So + adj + that" — don't mix.</li>
        <li>"Both ... and", NEVER "both ... as well as".</li>
      </ul>
    `,
    mcq: [
      { q: "Spot the error: 'Although he is rich, but he is unhappy.'", opts: ["Although", "but", "rich", "No error"], a: 1, ex: "Don't use both 'although' and 'but'." },
      { q: "Choose: 'He is neither honest ___ hardworking.'", opts: ["or", "nor", "but", "and"], a: 1, ex: "Neither... nor." },
      { q: "Spot the error: 'No sooner I had entered than he left.'", opts: ["No sooner", "I had entered", "than", "left"], a: 1, ex: "Inversion: 'had I entered'." },
      { q: "Choose: 'He is ___ tired ___ he can't walk.'", opts: ["so / that", "such / that", "so / as", "such / as"], a: 0, ex: "So + adj + that." },
      { q: "Spot the error: 'Unless you don't work, you will fail.'", opts: ["Unless", "don't work", "fail", "No error"], a: 1, ex: "Unless is negative." },
      { q: "Choose: 'Hardly had he sat ___ the bell rang.'", opts: ["than", "when", "that", "as"], a: 1, ex: "Hardly... when." },
      { q: "Spot the error: 'Both Ram as well as Shyam went.'", opts: ["Both", "as well as", "went", "No error"], a: 1, ex: "Both...and." },
      { q: "Choose: '___ he is poor, he is honest.'", opts: ["Despite", "Although", "But", "Either"], a: 1, ex: "Although + clause." },
      { q: "Spot the error: 'The reason is because he was busy.'", opts: ["The reason", "is because", "busy", "No error"], a: 1, ex: "'Reason is that' or 'because he was'." },
      { q: "Choose: 'Run fast ___ you should miss the train.'", opts: ["unless", "until", "lest", "than"], a: 2, ex: "Lest = for fear that." },
      { q: "Spot the error: 'Neither he nor I are responsible.'", opts: ["Neither", "nor I", "are", "responsible"], a: 2, ex: "Verb agrees with nearer (I): 'am'." },
      { q: "Choose: 'Such ___ his speech that all were impressed.'", opts: ["was", "is", "were", "are"], a: 0, ex: "Past — was." },
      { q: "Spot the error: 'He came late because that he missed the bus.'", opts: ["He came late", "because that", "he missed", "No error"], a: 1, ex: "Only 'because', not 'because that'." },
      { q: "Choose: '___ you nor he is to blame.'", opts: ["Both", "Either", "Neither", "Whether"], a: 2, ex: "Neither...nor." },
      { q: "Spot the error: 'I will wait here till you will come back.'", opts: ["I will wait", "till", "you will come", "back"], a: 2, ex: "After 'till' → simple present 'come'." },
      { q: "Choose: 'Not only Ram ___ also Shyam came.'", opts: ["and", "but", "or", "with"], a: 1, ex: "Not only... but also." },
      { q: "Spot the error: 'He is so a great leader that everyone respects him.'", opts: ["so a great leader", "everyone", "respects him", "No error"], a: 0, ex: "Should be 'such a great leader'." },
      { q: "Choose: 'It was raining heavily, ___ I took a taxi.'", opts: ["because", "so", "but", "yet"], a: 1, ex: "So = result." },
      { q: "Spot the error: 'Hardly had I reached the station than the train left.'", opts: ["Hardly", "had I reached", "than", "No error"], a: 2, ex: "Hardly... when (not 'than')." },
      { q: "Choose: 'I wonder ___ he will come or not.'", opts: ["if", "whether", "that", "Both A and B"], a: 1, ex: "Whether for if/or alternatives." },
      { q: "Spot the error: 'He has not gone neither to Delhi nor to Mumbai.'", opts: ["He has not gone", "neither", "nor to Mumbai", "No error"], a: 1, ex: "Don't use 'not' with 'neither'." },
      { q: "Choose: '___ rich, he is unhappy.'", opts: ["Despite of", "In spite of being", "Although", "Both B and C"], a: 3, ex: "Both work." },
      { q: "Spot the error: 'I waited for him since he didn't come.'", opts: ["I waited", "since", "he didn't come", "No error"], a: 1, ex: "Use 'as'/'because' for reason." },
      { q: "Choose: 'No sooner did he see me ___ he ran away.'", opts: ["when", "than", "that", "but"], a: 1, ex: "No sooner... than." },
      { q: "Spot the error: 'You are not only late but you didn't come prepared too.'", opts: ["not only", "late but", "too", "but you didn't come"], a: 2, ex: "Should be 'but also unprepared'." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 10. ARTICLES
  // ───────────────────────────────────────────────────────────────
  T["eng-articles"] = {
    body: `
      <h2>Articles (A, An, The)</h2>
      <p>SSC asks 2-3 questions on articles. Master "a/an" vs "the" vs no article.</p>

      <h3>1. A vs An — by Sound, Not Spelling</h3>
      <ul>
        <li><b>A</b> → before consonant <b>sound</b>: a book, a man, a university (yoo), a European (yoor), a one-way (wuh), a hotel</li>
        <li><b>An</b> → before vowel <b>sound</b>: an apple, an honest man (h silent), an hour (h silent), an MBA (em), an FBI agent (eff), an X-ray</li>
      </ul>
      <p>Note: "university" starts with "yoo" sound → <b>a</b> university. "Honest" starts with vowel sound (silent h) → <b>an</b> honest.</p>

      <h3>2. Indefinite Article (A / An)</h3>
      <p>Use when noun is mentioned for the <b>first time</b> or refers to <b>any one</b> of a group.</p>
      <ul>
        <li>I saw <b>a</b> dog yesterday. (any one dog)</li>
        <li>She is <b>an</b> engineer. (one of many engineers)</li>
        <li>What <b>a</b> beautiful sight!</li>
        <li>Use with countable singular nouns; NEVER with uncountable or plural.</li>
      </ul>

      <h3>3. Definite Article (The)</h3>

      <h4>Use "The" when:</h4>
      <ul>
        <li><b>Specific / Particular</b> noun (already known to listener): <b>The</b> book you gave me is good.</li>
        <li><b>Unique objects</b>: the sun, the moon, the earth, the sky, the world, the universe</li>
        <li><b>Superlatives</b>: the tallest building, the best player</li>
        <li><b>Ordinals</b>: the first chapter, the third floor</li>
        <li><b>Rivers, oceans, seas, gulfs, deserts, mountain ranges</b>: the Ganga, the Atlantic, the Bay of Bengal, the Sahara, the Himalayas</li>
        <li><b>Plural country names</b>: the USA, the UK, the Netherlands, the Philippines</li>
        <li><b>Direction</b>: the north, the east</li>
        <li><b>Famous buildings/monuments</b>: the Taj Mahal, the Red Fort, the Eiffel Tower</li>
        <li><b>Newspapers / Books / Plays / Holy books</b>: the Hindu, the Ramayana, the Bible</li>
        <li><b>Adjectives used as nouns</b>: the rich, the poor, the deaf</li>
        <li><b>Nationality (whole community)</b>: the Indians, the Japanese</li>
        <li><b>Musical instruments</b>: play the guitar, the piano</li>
        <li><b>Inventions</b>: who invented the telephone?</li>
      </ul>

      <h4>NO article with:</h4>
      <ul>
        <li><b>Most countries, cities, towns, states, continents</b>: India, Delhi, Asia (NOT "the India")</li>
        <li><b>Languages</b>: I speak English (NOT "the English"). But "the English language" ✓</li>
        <li><b>Meals</b>: have breakfast, lunch, dinner (NOT "the breakfast")</li>
        <li><b>Sports / Games</b>: play cricket, football</li>
        <li><b>Subjects</b>: I study mathematics (NOT "the mathematics")</li>
        <li><b>Modes of transport with "by"</b>: by bus, by train, by car</li>
        <li><b>Abstract nouns in general sense</b>: Honesty is the best policy. (general); BUT "The honesty of Gandhi..."</li>
        <li><b>Material nouns in general</b>: Gold is precious.</li>
        <li><b>Single mountains, lakes, islands</b>: Mount Everest, Lake Victoria, Sri Lanka (singular)</li>
      </ul>

      <h3>4. Special Uses</h3>

      <h4>"A few" vs "Few" vs "The few"</h4>
      <ul>
        <li><b>A few</b> = some (positive): A few friends came.</li>
        <li><b>Few</b> = almost none (negative): Few friends came.</li>
        <li><b>The few</b> = all those (specific limited): The few friends I have are loyal.</li>
      </ul>

      <h4>School / Hospital / Church (Idiomatic)</h4>
      <ul>
        <li><b>No article</b> when going for primary purpose: go to school (study), go to hospital (be treated), go to church (worship)</li>
        <li><b>With "the"</b> when visiting as outsider: go to the school (visit), go to the hospital (visit patient)</li>
      </ul>

      <h4>"Man" / "Woman" — in general sense, no article</h4>
      <ul>
        <li>Man is mortal. (mankind)</li>
        <li>The man who came here is my friend. (specific)</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li>"A/An" — based on <b>sound</b>, not letter.</li>
        <li>"The" — for unique, specific, ordinal, superlative, rivers/oceans, mountain ranges, plural countries.</li>
        <li>NO article — meals, sports, languages, subjects, by + transport, abstract nouns in general.</li>
        <li>"A few" = some; "Few" = almost none; "The few" = the limited group.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "He is a M.B.A."</p>
      <p><b>Solution:</b><br>"M" starts with vowel sound "em".<br>Correct: "He is <b>an</b> M.B.A."</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "He is an honest man."</p>
      <p><b>Solution:</b><br>Correct! "Honest" has silent h → vowel sound → "an".</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "He lives in the India."</p>
      <p><b>Solution:</b><br>Country names (singular) → no article.<br>Correct: "He lives in <b>India</b>."</p>

      <h4>Example 4</h4>
      <p><b>Spot the error</b>: "Sun rises in the east."</p>
      <p><b>Solution:</b><br>"Sun" is unique → "the".<br>Correct: "<b>The sun</b> rises in the east."</p>

      <h4>Example 5</h4>
      <p><b>Spot the error</b>: "He went to the school for admission."</p>
      <p><b>Solution:</b><br>"For admission" = not the primary purpose of school, so "the" is OK. <i>But "He goes to school daily" — no article (primary purpose).</i> So if it's about visiting, this is fine.</p>

      <h4>Example 6</h4>
      <p><b>Spot the error</b>: "He plays the cricket."</p>
      <p><b>Solution:</b><br>Sports take no article.<br>Correct: "He plays <b>cricket</b>."</p>

      <h4>Example 7</h4>
      <p><b>Spot the error</b>: "She plays cricket and piano."</p>
      <p><b>Solution:</b><br>Musical instrument → "the".<br>Correct: "...and <b>the piano</b>."</p>

      <h4>Example 8</h4>
      <p><b>Spot the error</b>: "Honesty is best policy."</p>
      <p><b>Solution:</b><br>Superlative → "the".<br>Correct: "Honesty is <b>the</b> best policy."</p>

      <h4>Example 9</h4>
      <p><b>Spot the error</b>: "He is a university student."</p>
      <p><b>Solution:</b><br>"University" starts with /yoo/ sound → "a". Already correct!</p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "He went to United States."</p>
      <p><b>Solution:</b><br>"United States" is plural-form country → "the".<br>Correct: "...to <b>the United States</b>."</p>

      <h4>Example 11</h4>
      <p><b>Spot the error</b>: "I had the breakfast at 9."</p>
      <p><b>Solution:</b><br>Meals take no article.<br>Correct: "I had <b>breakfast</b> at 9."</p>

      <h4>Example 12</h4>
      <p><b>Spot the error</b>: "He plays the football daily."</p>
      <p><b>Solution:</b><br>Sports take no article.<br>Correct: "He plays <b>football</b>."</p>

      <h4>Example 13</h4>
      <p><b>Spot the error</b>: "Rich should help poor."</p>
      <p><b>Solution:</b><br>Adjectives as nouns → "the".<br>Correct: "<b>The rich</b> should help <b>the poor</b>."</p>

      <h4>Example 14</h4>
      <p><b>Spot the error</b>: "Taj Mahal is in Agra."</p>
      <p><b>Solution:</b><br>Famous monument → "the".<br>Correct: "<b>The Taj Mahal</b>..."</p>

      <h4>Example 15</h4>
      <p><b>Spot the error</b>: "He took an one-rupee coin."</p>
      <p><b>Solution:</b><br>"One" starts with "wuh" (consonant sound) → "a".<br>Correct: "He took <b>a</b> one-rupee coin."</p>

      <h4>Example 16</h4>
      <p><b>Spot the error</b>: "I have a few work to do."</p>
      <p><b>Solution:</b><br>"Work" uncountable → use "little" / "some".<br>Correct: "I have <b>a little</b> / <b>some</b> work."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>"A/An" depends on <b>sound</b>: a university (consonant), an MBA (vowel), an hour (silent h).</li>
        <li>"The" for unique/specific/superlative/rivers/seas/plural countries/famous monuments/holy books.</li>
        <li>NO article for: meals, sports, languages, subjects, single country names, abstract/material nouns in general.</li>
        <li>Musical instruments → "the"; sports → no article.</li>
        <li>"The rich/poor/dead" → adjective used as collective noun.</li>
      </ul>
    `,
    mcq: [
      { q: "Choose: 'He is ___ honest man.'", opts: ["a", "an", "the", "no article"], a: 1, ex: "Silent h → vowel sound." },
      { q: "Spot the error: 'He went to the India last week.'", opts: ["He", "the India", "last week", "No error"], a: 1, ex: "No 'the' before India." },
      { q: "Choose: 'She plays ___ piano very well.'", opts: ["a", "the", "no article", "an"], a: 1, ex: "Musical instrument → the." },
      { q: "Spot the error: 'He is an university professor.'", opts: ["He is", "an university", "professor", "No error"], a: 1, ex: "University starts with consonant sound /yoo/." },
      { q: "Choose: '___ Ganga is sacred.'", opts: ["A", "An", "The", "No article"], a: 2, ex: "River → the." },
      { q: "Spot the error: 'He plays the cricket every day.'", opts: ["the cricket", "every day", "He plays", "No error"], a: 0, ex: "No article with sports." },
      { q: "Choose: 'I had ___ breakfast at 8.'", opts: ["a", "the", "an", "no article"], a: 3, ex: "Meals — no article." },
      { q: "Spot the error: 'He has a M.A. degree.'", opts: ["a M.A.", "He has", "degree", "No error"], a: 0, ex: "'an M.A.' (vowel sound)." },
      { q: "Choose: 'Honesty is ___ best policy.'", opts: ["a", "an", "the", "no article"], a: 2, ex: "Superlative → the." },
      { q: "Spot the error: 'He visited Taj Mahal.'", opts: ["He visited", "Taj Mahal", "No error", "(none)"], a: 1, ex: "'The Taj Mahal'." },
      { q: "Choose: '___ rich should help ___ poor.'", opts: ["A / the", "The / the", "An / the", "No article both"], a: 1, ex: "Adj as noun → the." },
      { q: "Spot the error: 'He took an one-day course.'", opts: ["an one-day", "course", "He took", "No error"], a: 0, ex: "'a one-day' (one = consonant sound)." },
      { q: "Choose: 'I bought ___ umbrella.'", opts: ["a", "an", "the", "no article"], a: 1, ex: "Umbrella — vowel sound." },
      { q: "Spot the error: 'She is the best player of all.'", opts: ["She is", "the best", "of all", "No error"], a: 3, ex: "Correct." },
      { q: "Choose: 'We sailed across ___ Atlantic.'", opts: ["a", "an", "the", "no article"], a: 2, ex: "Oceans → the." },
      { q: "Spot the error: 'The Mt. Everest is the tallest peak.'", opts: ["The Mt. Everest", "the tallest", "peak", "No error"], a: 0, ex: "Single mountain → no 'the'." },
      { q: "Choose: '___ USA is a powerful country.'", opts: ["A", "An", "The", "No article"], a: 2, ex: "Plural form → the." },
      { q: "Spot the error: 'He bought a ice-cream.'", opts: ["a ice-cream", "He bought", "No error", "(none)"], a: 0, ex: "'an ice-cream'." },
      { q: "Choose: 'He is ___ honourable man.'", opts: ["a", "an", "the", "no article"], a: 1, ex: "Silent h → vowel sound → 'an'." },
      { q: "Spot the error: 'I study the Mathematics.'", opts: ["I study", "the Mathematics", "No error", "(none)"], a: 1, ex: "Subjects — no article." },
      { q: "Choose: 'He went to ___ school at 8 am.' (as student)", opts: ["a", "the", "no article", "an"], a: 2, ex: "Going to school for primary purpose." },
      { q: "Spot the error: 'A few students were absent.'", opts: ["A few", "students were absent", "No error", "(none)"], a: 2, ex: "Correct — a few = some." },
      { q: "Choose: '___ Bible is a sacred book.'", opts: ["A", "An", "The", "No article"], a: 2, ex: "Holy books → the." },
      { q: "Spot the error: 'Sun rises in east.'", opts: ["Sun", "in east", "No error", "Both A and B"], a: 3, ex: "The sun / in the east." },
      { q: "Choose: 'He plays ___ guitar daily.'", opts: ["a", "the", "an", "no article"], a: 1, ex: "Musical instrument → the." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 11. TIME AND TENSE
  // ───────────────────────────────────────────────────────────────
  T["eng-tense"] = {
    body: `
      <h2>Time and Tense</h2>
      <p>Tense shows the <b>time</b> of action. There are <b>3 times × 4 aspects = 12 tenses</b>. SSC asks 3-5 questions on tense — most-tested grammar area.</p>

      <h3>1. The 12 Tenses Chart</h3>
      <table>
        <tr><th>Time \\ Aspect</th><th>Simple (indefinite)</th><th>Continuous (progressive)</th><th>Perfect</th><th>Perfect Continuous</th></tr>
        <tr><td><b>Present</b></td><td>I write</td><td>I am writing</td><td>I have written</td><td>I have been writing</td></tr>
        <tr><td><b>Past</b></td><td>I wrote</td><td>I was writing</td><td>I had written</td><td>I had been writing</td></tr>
        <tr><td><b>Future</b></td><td>I will write</td><td>I will be writing</td><td>I will have written</td><td>I will have been writing</td></tr>
      </table>

      <h3>2. Forms (Active Voice)</h3>
      <table>
        <tr><th>Tense</th><th>Structure</th></tr>
        <tr><td>Present Simple</td><td>S + V1/V-s</td></tr>
        <tr><td>Present Continuous</td><td>S + am/is/are + V-ing</td></tr>
        <tr><td>Present Perfect</td><td>S + has/have + V3</td></tr>
        <tr><td>Present Perfect Continuous</td><td>S + has/have been + V-ing</td></tr>
        <tr><td>Past Simple</td><td>S + V2</td></tr>
        <tr><td>Past Continuous</td><td>S + was/were + V-ing</td></tr>
        <tr><td>Past Perfect</td><td>S + had + V3</td></tr>
        <tr><td>Past Perfect Continuous</td><td>S + had been + V-ing</td></tr>
        <tr><td>Future Simple</td><td>S + will/shall + V1</td></tr>
        <tr><td>Future Continuous</td><td>S + will be + V-ing</td></tr>
        <tr><td>Future Perfect</td><td>S + will have + V3</td></tr>
        <tr><td>Future Perfect Continuous</td><td>S + will have been + V-ing</td></tr>
      </table>

      <h3>3. When to Use Each Tense</h3>

      <h4>Present Simple</h4>
      <ul>
        <li>Habitual / Regular action: He <b>walks</b> daily.</li>
        <li>Universal truths: The sun <b>rises</b> in the east.</li>
        <li>Scheduled future events: The train <b>leaves</b> at 6 pm.</li>
        <li>With "always, often, never, every day, usually, generally, sometimes, daily, weekly"</li>
      </ul>

      <h4>Present Continuous</h4>
      <ul>
        <li>Action happening now: I <b>am writing</b>.</li>
        <li>Temporary action: She <b>is staying</b> with us this week.</li>
        <li>Future plan/arrangement: I <b>am meeting</b> him tomorrow.</li>
        <li>With "now, at the moment, currently, presently, this week"</li>
      </ul>

      <h4>Present Perfect</h4>
      <ul>
        <li>Action completed recently with present relevance: I <b>have just eaten</b>.</li>
        <li>Action in past with effect on present: She <b>has broken</b> her leg.</li>
        <li>Experiences (life): Have you <b>ever been</b> to Paris?</li>
        <li>With "just, already, yet, ever, never, recently, lately, so far, since, for"</li>
      </ul>

      <h4>Present Perfect Continuous</h4>
      <ul>
        <li>Action started in past, still continuing: I <b>have been waiting</b> for 2 hours.</li>
        <li>With "since" (point) / "for" (duration)</li>
      </ul>

      <h4>Past Simple</h4>
      <ul>
        <li>Completed past action: I <b>went</b> yesterday.</li>
        <li>With specific past time: yesterday, last week, in 2010, ago, when</li>
      </ul>

      <h4>Past Continuous</h4>
      <ul>
        <li>Action ongoing at past moment: I <b>was reading</b> at 7 pm.</li>
        <li>Two simultaneous past actions: While I <b>was cooking</b>, he <b>was watching</b> TV.</li>
        <li>Past action interrupted by another: I <b>was watching</b> TV <b>when</b> he came.</li>
      </ul>

      <h4>Past Perfect</h4>
      <ul>
        <li>Earlier of two past actions: He <b>had left</b> when I arrived.</li>
        <li>Used with past simple in same sentence. Past perfect = earlier action.</li>
      </ul>

      <h4>Past Perfect Continuous</h4>
      <ul>
        <li>Action that was ongoing before another past action: He <b>had been studying</b> for 3 hours when I called.</li>
      </ul>

      <h4>Future Simple</h4>
      <ul>
        <li>Action in future: I <b>will go</b> tomorrow.</li>
        <li>Predictions, promises, instant decisions, offers</li>
      </ul>

      <h4>Future Continuous / Future Perfect / Future Perfect Continuous</h4>
      <ul>
        <li>Will be doing (continuous future): At 5 pm I <b>will be sleeping</b>.</li>
        <li>Will have done (action complete by future time): By tomorrow I <b>will have finished</b>.</li>
        <li>Will have been doing: By 5 pm, I <b>will have been working</b> for 8 hours.</li>
      </ul>

      <h3>4. Key Rules</h3>

      <h4>Rule 1: "Since" — present perfect / perfect continuous (NOT simple past)</h4>
      <ul>
        <li>❌ I am waiting since 2 hours. → ✓ I have been waiting for 2 hours.</li>
        <li>❌ I waited since morning. → ✓ I have been waiting since morning.</li>
      </ul>

      <h4>Rule 2: Universal truths — always present simple</h4>
      <ul>
        <li>✓ He told me that the earth <b>is</b> round. (not "was" round)</li>
      </ul>

      <h4>Rule 3: Future after "when, if, until, before, after, as soon as" — simple present</h4>
      <ul>
        <li>✓ I will call when I <b>reach</b> home. (not "will reach")</li>
        <li>✓ Wait until he <b>comes</b>. (not "will come")</li>
      </ul>

      <h4>Rule 4: Stative verbs — no continuous</h4>
      <p>love, like, hate, know, believe, understand, want, mean, see, hear, taste, smell, feel, own, have, possess, prefer, recognize, doubt, suppose, seem, appear, remember, forget, contain, include</p>
      <ul>
        <li>❌ I am loving it. → ✓ I love it.</li>
        <li>❌ I am understanding. → ✓ I understand.</li>
      </ul>

      <h4>Rule 5: After "wish / if only" — past tenses for present hypothetical</h4>
      <ul>
        <li>I wish I <b>had</b> a car. (present situation)</li>
        <li>I wish I <b>had had</b> a car yesterday. (past)</li>
      </ul>

      <h4>Rule 6: "By the time" + simple past, main clause past perfect</h4>
      <ul>
        <li>By the time I reached, he <b>had left</b>.</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li><b>Since (point) + present perfect</b>; <b>For (duration) + present perfect/cont.</b></li>
        <li>Two past actions — earlier one in past perfect.</li>
        <li>After "if/when/until/before" referring to future → use simple <b>present</b>.</li>
        <li>Stative verbs (know, love, understand) → never continuous.</li>
        <li>Universal truths → always simple present.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "I am living in Delhi since 2010."</p>
      <p><b>Solution:</b><br>"Since" needs present perfect.<br>Correct: "I <b>have been living</b> in Delhi since 2010."</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "He told me that the earth was round."</p>
      <p><b>Solution:</b><br>Universal truth — present.<br>Correct: "...the earth <b>is</b> round."</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "I will call you when I will reach home."</p>
      <p><b>Solution:</b><br>After "when" (future) → simple present.<br>Correct: "...when I <b>reach</b> home."</p>

      <h4>Example 4</h4>
      <p><b>Spot the error</b>: "She has come yesterday."</p>
      <p><b>Solution:</b><br>"Yesterday" is specific past — use simple past.<br>Correct: "She <b>came</b> yesterday."</p>

      <h4>Example 5</h4>
      <p><b>Spot the error</b>: "When I reached, he already left."</p>
      <p><b>Solution:</b><br>Earlier of two past actions → past perfect.<br>Correct: "When I reached, he <b>had already left</b>."</p>

      <h4>Example 6</h4>
      <p><b>Spot the error</b>: "I am knowing him for 5 years."</p>
      <p><b>Solution:</b><br>"Know" — stative.<br>Correct: "I <b>have known</b> him for 5 years."</p>

      <h4>Example 7</h4>
      <p><b>Spot the error</b>: "He is going to school every day."</p>
      <p><b>Solution:</b><br>Habit → simple present.<br>Correct: "He <b>goes</b> to school every day."</p>

      <h4>Example 8</h4>
      <p><b>Spot the error</b>: "I have seen him last week."</p>
      <p><b>Solution:</b><br>"Last week" — specific past.<br>Correct: "I <b>saw</b> him last week."</p>

      <h4>Example 9</h4>
      <p><b>Spot the error</b>: "If it will rain, I will not come."</p>
      <p><b>Solution:</b><br>After "if" (future condition) → present.<br>Correct: "If it <b>rains</b>, I will not come."</p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "Hardly had I sat when the phone rang." (correct or error?)</p>
      <p><b>Solution:</b><br>Correct! "Hardly had + S + V3 + when + simple past."</p>

      <h4>Example 11</h4>
      <p><b>Spot the error</b>: "I wish I have more time."</p>
      <p><b>Solution:</b><br>"Wish" + past tense (present situation hypothetical).<br>Correct: "I wish I <b>had</b> more time."</p>

      <h4>Example 12</h4>
      <p><b>Spot the error</b>: "He says that he has gone there yesterday."</p>
      <p><b>Solution:</b><br>"Yesterday" → simple past.<br>Correct: "...that he <b>went</b> there yesterday."</p>

      <h4>Example 13</h4>
      <p><b>Spot the error</b>: "It is raining since morning."</p>
      <p><b>Solution:</b><br>"Since" → present perfect continuous.<br>Correct: "It <b>has been raining</b> since morning."</p>

      <h4>Example 14</h4>
      <p><b>Spot the error</b>: "While she cooked dinner, the phone rang."</p>
      <p><b>Solution:</b><br>"While" → ongoing action → past continuous.<br>Correct: "While she <b>was cooking</b>, the phone rang."</p>

      <h4>Example 15</h4>
      <p><b>Spot the error</b>: "By the time he came, I have finished."</p>
      <p><b>Solution:</b><br>"By the time + past" → main clause past perfect.<br>Correct: "By the time he came, I <b>had finished</b>."</p>

      <h4>Example 16</h4>
      <p><b>Spot the error</b>: "He is having two cars."</p>
      <p><b>Solution:</b><br>"Have" (possess) is stative.<br>Correct: "He <b>has</b> two cars."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>"Since" requires present perfect tense, NOT present.</li>
        <li>"Yesterday", "ago", "last week/year" → simple past, NOT present perfect.</li>
        <li>After "if/when/until/as soon as" (future) → simple present, NOT future.</li>
        <li>Stative verbs (know, love, etc.) — never -ing.</li>
        <li>Two past actions → use past perfect for the earlier one.</li>
        <li>Universal truths and habitual actions → always simple present.</li>
      </ul>
    `,
    mcq: [
      { q: "Spot the error: 'I am living here since 2015.'", opts: ["I am living", "here", "since 2015", "No error"], a: 0, ex: "Since → present perfect: 'I have been living'." },
      { q: "Choose: 'He ___ to school every day.'", opts: ["is going", "goes", "has gone", "went"], a: 1, ex: "Habit → simple present." },
      { q: "Spot the error: 'When I reached home, he already left.'", opts: ["When I reached", "he already left", "No error", "home"], a: 1, ex: "Earlier past → had already left." },
      { q: "Choose: 'I ___ him last Sunday.'", opts: ["have seen", "saw", "had seen", "see"], a: 1, ex: "Last Sunday → past simple." },
      { q: "Spot the error: 'It is raining since morning.'", opts: ["It is raining", "since morning", "No error", "It"], a: 0, ex: "Has been raining." },
      { q: "Choose: 'If it ___ tomorrow, we will postpone.'", opts: ["rain", "rains", "will rain", "is raining"], a: 1, ex: "After 'if' (future) → simple present." },
      { q: "Spot the error: 'He told me that the sun was bright.'", opts: ["He told me", "the sun was bright", "No error", "told"], a: 1, ex: "Universal truth → 'is bright'." },
      { q: "Choose: 'I ___ for the bus when he arrived.'", opts: ["wait", "was waiting", "had waited", "have waited"], a: 1, ex: "Ongoing past → was waiting." },
      { q: "Spot the error: 'He has gone to Delhi two days ago.'", opts: ["He has gone", "two days ago", "Delhi", "No error"], a: 0, ex: "Ago → past simple: went." },
      { q: "Choose: 'I ___ him for 10 years now.'", opts: ["know", "am knowing", "have known", "have been knowing"], a: 2, ex: "Stative + duration → have known." },
      { q: "Spot the error: 'She is going to gym daily.'", opts: ["is going", "daily", "to gym", "No error"], a: 0, ex: "Daily = habit → goes." },
      { q: "Choose: 'By next year, I ___ my course.'", opts: ["will complete", "will have completed", "complete", "completed"], a: 1, ex: "Action complete by future time → future perfect." },
      { q: "Spot the error: 'He died from cancer last year.'", opts: ["He died", "from cancer", "last year", "No error"], a: 1, ex: "Die OF disease." },
      { q: "Choose: 'I wish I ___ a car.'", opts: ["have", "had", "has", "having"], a: 1, ex: "Wish + past (present hypothetical)." },
      { q: "Spot the error: 'I will tell you when he will come.'", opts: ["I will tell", "when he will come", "No error", "tell"], a: 1, ex: "After 'when' (future) → simple present 'comes'." },
      { q: "Choose: 'He ___ TV when I called.'", opts: ["watches", "was watching", "had watched", "watched"], a: 1, ex: "Past continuous for ongoing past." },
      { q: "Spot the error: 'I am understanding the lesson now.'", opts: ["I am understanding", "now", "the lesson", "No error"], a: 0, ex: "Understand is stative → 'I understand'." },
      { q: "Choose: 'They ___ here for years.'", opts: ["live", "are living", "have been living", "had lived"], a: 2, ex: "For + present perfect continuous." },
      { q: "Spot the error: 'She left as soon as he had come.'", opts: ["She left", "as soon as", "he had come", "No error"], a: 2, ex: "Two past actions, but 'as soon as' suggests immediately — use simple past 'came'." },
      { q: "Choose: 'The train ___ at 6 tomorrow.'", opts: ["leaves", "is leaving", "will leave", "All correct"], a: 3, ex: "Scheduled future allows all three." },
      { q: "Spot the error: 'He has been knowing her since college.'", opts: ["has been knowing", "her", "since college", "No error"], a: 0, ex: "Stative → 'has known'." },
      { q: "Choose: 'No sooner ___ than the rain stopped.'", opts: ["I went out", "had I gone out", "did I go out", "I had gone"], a: 1, ex: "Inversion: 'had I gone out'." },
      { q: "Spot the error: 'I had finished the work before he comes.'", opts: ["I had finished", "before he comes", "No error", "the work"], a: 1, ex: "Past perfect → 'before he came'." },
      { q: "Choose: 'When the bell ___, leave the room.'", opts: ["will ring", "rings", "rang", "has rung"], a: 1, ex: "After 'when' (future) → simple present." },
      { q: "Spot the error: 'He is loving cricket.'", opts: ["He is loving", "cricket", "No error", "loving"], a: 0, ex: "Stative → 'He loves cricket'." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 12. SEQUENCE OF TENSE
  // ───────────────────────────────────────────────────────────────
  T["eng-sequence-tense"] = {
    body: `
      <h2>Sequence of Tense</h2>
      <p>When a sentence has two clauses (main + subordinate), the tense of subordinate clause is governed by tense of the main clause. SSC asks 1-2 questions.</p>

      <h3>1. The Master Rule</h3>
      <p>If the <b>main clause</b> is in <b>past tense</b>, the <b>subordinate clause</b> is usually also in past tense.</p>
      <ul>
        <li>✓ He said that he <b>was</b> tired. (main: "said" past → subordinate: was past)</li>
        <li>✓ I knew she <b>would</b> come. (would, not will)</li>
        <li>✓ He believed that she <b>was telling</b> the truth.</li>
      </ul>

      <h3>2. Tense Shifts (main past → subordinate)</h3>
      <table>
        <tr><th>Direct (Main = Present)</th><th>Reported (Main = Past)</th></tr>
        <tr><td>Present Simple → write</td><td>Past Simple → wrote</td></tr>
        <tr><td>Present Continuous → is writing</td><td>Past Continuous → was writing</td></tr>
        <tr><td>Present Perfect → has written</td><td>Past Perfect → had written</td></tr>
        <tr><td>Present Perfect Cont. → has been writing</td><td>Past Perfect Cont. → had been writing</td></tr>
        <tr><td>Past Simple → wrote</td><td>Past Perfect → had written</td></tr>
        <tr><td>Past Continuous → was writing</td><td>Past Perfect Cont. → had been writing</td></tr>
        <tr><td>Will / Shall → will</td><td>Would / Should → would</td></tr>
        <tr><td>Can → can</td><td>Could → could</td></tr>
        <tr><td>May → may</td><td>Might → might</td></tr>
      </table>

      <h3>3. EXCEPTIONS to the Rule</h3>
      <p>Subordinate clause does NOT shift to past even if main is past, when it expresses:</p>

      <h4>(a) Universal truth / Fact / Law of nature</h4>
      <ul>
        <li>✓ He said that the sun <b>rises</b> in the east. (NOT "rose")</li>
        <li>✓ Galileo proved that the earth <b>moves</b> around the sun.</li>
      </ul>

      <h4>(b) Habitual / Regular action</h4>
      <ul>
        <li>✓ He said that he <b>walks</b> daily.</li>
      </ul>

      <h4>(c) Quotations / Historical truths in direct sense</h4>
      <ul>
        <li>✓ Our teacher told us that honesty <b>is</b> the best policy.</li>
      </ul>

      <h4>(d) "Than" comparison — keep original tense</h4>
      <ul>
        <li>✓ He worked harder than he <b>does</b> now.</li>
      </ul>

      <h4>(e) Modal "must" — no past form, stays</h4>
      <ul>
        <li>✓ He said that I <b>must</b> go.</li>
      </ul>

      <h3>4. Special Cases</h3>

      <h4>Main: Present / Future → Subordinate: Any tense</h4>
      <ul>
        <li>If main clause is present or future, subordinate can be any tense based on meaning.</li>
        <li>✓ He says that he <b>was</b> ill yesterday.</li>
        <li>✓ I think he <b>has gone</b> already.</li>
        <li>✓ I will tell him when he <b>comes</b>.</li>
      </ul>

      <h4>"As if" / "As though" → past tense (subjunctive)</h4>
      <ul>
        <li>✓ He talks as if he <b>knew</b> everything.</li>
        <li>✓ He behaves as if he <b>were</b> a king. (subjunctive)</li>
      </ul>

      <h4>"It is high time / about time" → past tense</h4>
      <ul>
        <li>✓ It is high time you <b>started</b> studying.</li>
        <li>❌ It is high time you start.</li>
      </ul>

      <h4>"Wish / If only" → past tense (present), past perfect (past)</h4>
      <ul>
        <li>✓ I wish I <b>had</b> wings. (present)</li>
        <li>✓ I wish he <b>had come</b> yesterday. (past)</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li>Main past → Subordinate past (usually).</li>
        <li>EXCEPT: universal truths, habits, "than" comparison → stay in original tense.</li>
        <li>"As if / as though / wish / if only" → past tense for present.</li>
        <li>"It is high time" → past tense.</li>
        <li>After "when/if/until" referring to future + main present/future → use simple present.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "He told me that he is busy."</p>
      <p><b>Solution:</b><br>Main past ("told") → subordinate past.<br>Correct: "He told me that he <b>was</b> busy."</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "He told me that the earth was round."</p>
      <p><b>Solution:</b><br>Universal truth — stays in present.<br>Correct: "...the earth <b>is</b> round."</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "I knew that he will come."</p>
      <p><b>Solution:</b><br>Will → would.<br>Correct: "I knew that he <b>would</b> come."</p>

      <h4>Example 4</h4>
      <p><b>Spot the error</b>: "He behaves as if he is a king."</p>
      <p><b>Solution:</b><br>"As if" + past subjunctive.<br>Correct: "...as if he <b>were</b> a king."</p>

      <h4>Example 5</h4>
      <p><b>Spot the error</b>: "It is high time you go to bed."</p>
      <p><b>Solution:</b><br>"High time" + past tense.<br>Correct: "...you <b>went</b> to bed."</p>

      <h4>Example 6</h4>
      <p><b>Spot the error</b>: "I wish I have a car."</p>
      <p><b>Solution:</b><br>"Wish" (present hypothetical) + past.<br>Correct: "I wish I <b>had</b> a car."</p>

      <h4>Example 7</h4>
      <p><b>Spot the error</b>: "He said that he can do it."</p>
      <p><b>Solution:</b><br>Can → could.<br>Correct: "He said that he <b>could</b> do it."</p>

      <h4>Example 8</h4>
      <p><b>Spot the error</b>: "He said that he had gone there last year."</p>
      <p><b>Solution:</b><br>Correct as is. (Past simple → past perfect when reported.)</p>

      <h4>Example 9</h4>
      <p><b>Spot the error</b>: "He worked harder than he is working now."</p>
      <p><b>Solution:</b><br>"Than" — keep original tense.<br>Correct: "...harder than he <b>works</b> now."</p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "She said that she has finished her work."</p>
      <p><b>Solution:</b><br>Has → had.<br>Correct: "She said that she <b>had finished</b>."</p>

      <h4>Example 11</h4>
      <p><b>Spot the error</b>: "The teacher said that water boils at 100°C."</p>
      <p><b>Solution:</b><br>Scientific fact — present.<br>Correct as is.</p>

      <h4>Example 12</h4>
      <p><b>Spot the error</b>: "He asked if I am going."</p>
      <p><b>Solution:</b><br>Past → past.<br>Correct: "...if I <b>was</b> going."</p>

      <h4>Example 13</h4>
      <p><b>Spot the error</b>: "I told him that I will help him."</p>
      <p><b>Solution:</b><br>Will → would.<br>Correct: "...that I <b>would</b> help him."</p>

      <h4>Example 14</h4>
      <p><b>Spot the error</b>: "He said that honesty was the best policy."</p>
      <p><b>Solution:</b><br>Universal/proverbial truth — present.<br>Correct: "...honesty <b>is</b> the best policy."</p>

      <h4>Example 15</h4>
      <p><b>Spot the error</b>: "It is high time we start the project."</p>
      <p><b>Solution:</b><br>High time + past.<br>Correct: "...we <b>started</b> the project."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>Main past → subordinate past (default rule).</li>
        <li>Exceptions: universal truth, habit, "than" comparison, "must" — stay in original tense.</li>
        <li>"As if / wish / if only / high time" → past tense always (for present hypothetical).</li>
        <li>Will/Shall → Would; Can → Could; May → Might; Have/Has → Had.</li>
      </ul>
    `,
    mcq: [
      { q: "Spot the error: 'He told me that he is going home.'", opts: ["He told", "that he is going", "home", "No error"], a: 1, ex: "Past → past: was going." },
      { q: "Choose: 'I wish I ___ a millionaire.'", opts: ["am", "were", "have been", "was"], a: 1, ex: "Wish + were (subjunctive)." },
      { q: "Spot the error: 'He behaves as if he is a king.'", opts: ["He behaves", "as if", "he is", "No error"], a: 2, ex: "As if + past: 'were a king'." },
      { q: "Choose: 'She said that she ___ studying.'", opts: ["is", "was", "has been", "had been"], a: 1, ex: "Past → past." },
      { q: "Spot the error: 'It is high time you study seriously.'", opts: ["It is", "high time", "you study", "No error"], a: 2, ex: "High time + past: studied." },
      { q: "Choose: 'The teacher said that water ___ at 100°C.'", opts: ["boils", "boiled", "is boiling", "was boiling"], a: 0, ex: "Universal truth → present." },
      { q: "Spot the error: 'I knew he will come.'", opts: ["I knew", "he will come", "No error", "knew"], a: 1, ex: "Will → would." },
      { q: "Choose: 'He spoke as if he ___ the matter.'", opts: ["knows", "knew", "has known", "had known"], a: 1, ex: "As if + past." },
      { q: "Spot the error: 'He said that honesty was the best policy.'", opts: ["He said", "honesty was", "best policy", "No error"], a: 1, ex: "Universal truth — present: 'is'." },
      { q: "Choose: 'I told him I ___ help him.'", opts: ["will", "would", "shall", "must"], a: 1, ex: "Will → would." },
      { q: "Spot the error: 'He told that he had been ill.'", opts: ["He told", "that he had been", "ill", "No error"], a: 3, ex: "Correct sequence." },
      { q: "Choose: 'She wished she ___ taller.'", opts: ["is", "was", "were", "had been"], a: 2, ex: "Wish + were." },
      { q: "Spot the error: 'I knew she has finished the work.'", opts: ["I knew", "she has finished", "No error", "knew"], a: 1, ex: "Has → had." },
      { q: "Choose: 'He acted as though he ___ angry.'", opts: ["is", "was", "were", "had been"], a: 2, ex: "Subjunctive after 'as though'." },
      { q: "Spot the error: 'It is high time we will leave.'", opts: ["It is", "high time", "we will leave", "No error"], a: 2, ex: "High time + past simple: 'we left'." },
      { q: "Choose: 'He said he ___ his work.'", opts: ["completed", "had completed", "has completed", "Both A and B"], a: 3, ex: "Either works depending on emphasis." },
      { q: "Spot the error: 'The boy worked harder than he is doing now.'", opts: ["worked harder", "is doing now", "than", "No error"], a: 1, ex: "'Than' keeps original: 'does'." },
      { q: "Choose: 'I asked him if he ___ ready.'", opts: ["is", "was", "are", "were"], a: 1, ex: "Past → was." },
      { q: "Spot the error: 'He said that he must go.'", opts: ["He said", "that he must go", "No error", "go"], a: 2, ex: "Must has no past — stays." },
      { q: "Choose: 'He spoke as if he ___ everything.'", opts: ["knows", "knew", "has known", "had known"], a: 1, ex: "As if + past." },
      { q: "Spot the error: 'She wishes she has met him earlier.'", opts: ["She wishes", "she has met", "earlier", "No error"], a: 1, ex: "Wish + past perfect for past: 'had met'." },
      { q: "Choose: 'I knew that the earth ___ around the sun.'", opts: ["moved", "moves", "is moving", "has moved"], a: 1, ex: "Universal truth." },
      { q: "Spot the error: 'It is high time you stop smoking.'", opts: ["It is", "high time", "you stop", "No error"], a: 2, ex: "Past: 'you stopped'." },
      { q: "Choose: 'He told me that he ___ ill since morning.'", opts: ["has been", "had been", "was being", "is"], a: 1, ex: "Has been → had been." },
      { q: "Spot the error: 'She said that she will come tomorrow.'", opts: ["She said", "she will come", "tomorrow", "No error"], a: 1, ex: "Will → would." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 13. SUBJECT-VERB AGREEMENT
  // ───────────────────────────────────────────────────────────────
  T["eng-sva"] = {
    body: `
      <h2>Subject-Verb Agreement</h2>
      <p>The verb must agree with its subject in <b>number</b> and <b>person</b>. SSC asks 3-4 questions on SVA — one of the most heavily tested topics.</p>

      <h3>1. Basic Rule</h3>
      <p>Singular subject → singular verb. Plural subject → plural verb.</p>
      <ul>
        <li>✓ He <b>writes</b>. They <b>write</b>.</li>
        <li>✓ The boy <b>is</b> playing. The boys <b>are</b> playing.</li>
      </ul>

      <h3>2. Important Rules</h3>

      <h4>Rule 1: Two singular subjects joined by AND → plural verb</h4>
      <ul>
        <li>✓ Ram and Shyam <b>are</b> friends.</li>
        <li>BUT if "and" joins items referring to same person/thing → singular: ✓ The poet and philosopher (one person) <b>has</b> come.</li>
        <li>"Bread and butter" / "Time and tide" — singular: ✓ Bread and butter <b>is</b> my favourite.</li>
      </ul>

      <h4>Rule 2: Two subjects joined by OR / NOR / EITHER...OR / NEITHER...NOR → verb agrees with NEAREST subject</h4>
      <ul>
        <li>✓ Either he or I <b>am</b> wrong.</li>
        <li>✓ Either I or he <b>is</b> wrong.</li>
        <li>✓ Neither she nor her brothers <b>are</b> here.</li>
      </ul>

      <h4>Rule 3: "Each / Every / Either / Neither / Anyone / Everyone / No one / Nobody / Anybody / Somebody / Each one" → singular verb</h4>
      <ul>
        <li>✓ Each of them <b>has</b> a book.</li>
        <li>✓ Every boy and girl <b>is</b> present.</li>
        <li>✓ Neither of the answers <b>is</b> correct.</li>
        <li>✓ Everyone <b>knows</b> this.</li>
      </ul>

      <h4>Rule 4: Indefinite numerical pronouns</h4>
      <ul>
        <li><b>Few / Many / Several / Both</b> → plural verb: Many <b>were</b> absent.</li>
        <li><b>None</b> → can be singular or plural (modern: plural).</li>
        <li><b>All / Some / Most</b> → depend on noun. With uncountable: singular. With countable plural: plural.<br>
          ✓ All <b>is</b> well. (uncountable)<br>
          ✓ All <b>are</b> coming. (countable people)</li>
      </ul>

      <h4>Rule 5: Collective nouns (team, committee, class, jury, family) — usually singular</h4>
      <ul>
        <li>✓ The team <b>is</b> winning. (as one unit)</li>
        <li>✓ The team <b>are</b> arguing among themselves. (members acting individually)</li>
        <li><b>Always plural</b>: police, cattle, people, gentry, vermin, poultry, infantry, swine</li>
      </ul>

      <h4>Rule 6: Plural-form but Singular-meaning nouns → singular verb</h4>
      <ul>
        <li>News, Mathematics, Physics, Politics, Economics, Statistics, Ethics, Mumps, Measles, Athletics</li>
        <li>✓ The news <b>is</b> bad.</li>
        <li>✓ Mathematics <b>is</b> my favourite.</li>
      </ul>

      <h4>Rule 7: A pair of / A series of / A team of + (plural noun) → singular verb</h4>
      <ul>
        <li>✓ A pair of shoes <b>is</b> on the table.</li>
        <li>✓ A series of accidents <b>has</b> occurred.</li>
      </ul>

      <h4>Rule 8: "Number" — depends on form</h4>
      <ul>
        <li><b>The number</b> + plural noun → singular verb: The number of students <b>is</b> 50.</li>
        <li><b>A number of</b> + plural noun → plural verb: A number of students <b>are</b> absent.</li>
      </ul>

      <h4>Rule 9: Phrases with "as well as / along with / together with / besides / accompanied by / including / no less than" — only the SUBJECT counts; intervening phrase doesn't change verb number</h4>
      <ul>
        <li>✓ Ram, as well as his brothers, <b>is</b> here. (subject: Ram = singular)</li>
        <li>✓ The teacher, along with the students, <b>has</b> gone.</li>
      </ul>

      <h4>Rule 10: Time / Distance / Money / Weight (single unit) → singular verb</h4>
      <ul>
        <li>✓ Ten years <b>is</b> a long time.</li>
        <li>✓ Five kilometres <b>is</b> not far.</li>
        <li>✓ Two hundred rupees <b>is</b> a lot.</li>
      </ul>

      <h4>Rule 11: Some words always plural — scissors, trousers, pants, glasses, jeans, etc.</h4>
      <ul>
        <li>✓ My scissors <b>are</b> sharp.</li>
        <li>✓ His glasses <b>are</b> on the table.</li>
      </ul>

      <h4>Rule 12: "There is / There are" — based on subject after the verb</h4>
      <ul>
        <li>✓ There <b>is</b> a book. (book is singular)</li>
        <li>✓ There <b>are</b> many books.</li>
      </ul>

      <h4>Rule 13: One of + plural noun + relative clause</h4>
      <ul>
        <li>"He is one of those students <b>who study</b> hard." — "who" refers to "students" (plural)</li>
        <li>"He is the <b>only one</b> of the students <b>who studies</b> hard." — "who" refers to "only one" (singular)</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li>"As well as / along with / together with" don't add to subject.</li>
        <li>"Each / Every / Either / Neither / Anyone" — singular.</li>
        <li>News, Mathematics, Physics, etc. — singular.</li>
        <li>"A pair of / A series of / A team of" — singular.</li>
        <li>Distance/Time/Money as unit — singular.</li>
        <li>"Police / Cattle / People" — always plural.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "Each of the boys have done his work."</p>
      <p><b>Solution:</b><br>"Each" → singular.<br>Correct: "Each of the boys <b>has</b> done his work."</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "Neither of the two answers are correct."</p>
      <p><b>Solution:</b><br>"Neither" → singular.<br>Correct: "Neither of the two answers <b>is</b> correct."</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "Mathematics are an interesting subject."</p>
      <p><b>Solution:</b><br>Mathematics → singular.<br>Correct: "Mathematics <b>is</b> an interesting subject."</p>

      <h4>Example 4</h4>
      <p><b>Spot the error</b>: "The news are very disturbing."</p>
      <p><b>Solution:</b><br>News → singular.<br>Correct: "The news <b>is</b> very disturbing."</p>

      <h4>Example 5</h4>
      <p><b>Spot the error</b>: "Ram, with his friends, are going."</p>
      <p><b>Solution:</b><br>"With his friends" — intervening phrase; subject is Ram.<br>Correct: "Ram, with his friends, <b>is</b> going."</p>

      <h4>Example 6</h4>
      <p><b>Spot the error</b>: "The number of students are increasing."</p>
      <p><b>Solution:</b><br>"The number" → singular.<br>Correct: "The number of students <b>is</b> increasing."</p>

      <h4>Example 7</h4>
      <p><b>Spot the error</b>: "A number of students is absent today."</p>
      <p><b>Solution:</b><br>"A number of" → plural.<br>Correct: "A number of students <b>are</b> absent."</p>

      <h4>Example 8</h4>
      <p><b>Spot the error</b>: "Either he or his friends is wrong."</p>
      <p><b>Solution:</b><br>Verb agrees with nearer subject (friends = plural).<br>Correct: "Either he or his friends <b>are</b> wrong."</p>

      <h4>Example 9</h4>
      <p><b>Spot the error</b>: "Bread and butter are my favourite breakfast."</p>
      <p><b>Solution:</b><br>Joint expression — singular.<br>Correct: "Bread and butter <b>is</b> my favourite breakfast."</p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "Cattle is grazing in the field."</p>
      <p><b>Solution:</b><br>Cattle is plural.<br>Correct: "Cattle <b>are</b> grazing."</p>

      <h4>Example 11</h4>
      <p><b>Spot the error</b>: "Ten kilometres are not far."</p>
      <p><b>Solution:</b><br>Distance as unit → singular.<br>Correct: "Ten kilometres <b>is</b> not far."</p>

      <h4>Example 12</h4>
      <p><b>Spot the error</b>: "The committee have decided."</p>
      <p><b>Solution:</b><br>Committee as one unit → singular.<br>Correct: "The committee <b>has</b> decided." (Acceptable plural if members acting individually.)</p>

      <h4>Example 13</h4>
      <p><b>Spot the error</b>: "She is one of those women who is always cheerful."</p>
      <p><b>Solution:</b><br>"Who" refers to "women" (plural).<br>Correct: "...who <b>are</b> always cheerful."</p>

      <h4>Example 14</h4>
      <p><b>Spot the error</b>: "Police is investigating the case."</p>
      <p><b>Solution:</b><br>Police → plural.<br>Correct: "Police <b>are</b> investigating."</p>

      <h4>Example 15</h4>
      <p><b>Spot the error</b>: "A pair of shoes are on the floor."</p>
      <p><b>Solution:</b><br>"A pair of" → singular.<br>Correct: "A pair of shoes <b>is</b> on the floor."</p>

      <h4>Example 16</h4>
      <p><b>Spot the error</b>: "Every man and woman are responsible."</p>
      <p><b>Solution:</b><br>"Every" → singular.<br>Correct: "Every man and woman <b>is</b> responsible."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>Each / Every / Either / Neither / Anyone / Someone / Nobody — SINGULAR.</li>
        <li>News / Mathematics / Physics / Politics — SINGULAR.</li>
        <li>Cattle / Police / People — PLURAL.</li>
        <li>"As well as / along with / together with" — don't affect verb agreement.</li>
        <li>"A number of" → plural; "The number of" → singular.</li>
        <li>Distance/Time/Money as unit → singular.</li>
        <li>"Either A or B" / "Neither A nor B" — verb agrees with nearest.</li>
      </ul>
    `,
    mcq: [
      { q: "Spot the error: 'Each of the boys have a book.'", opts: ["Each", "of the boys", "have", "a book"], a: 2, ex: "Each → has." },
      { q: "Choose: 'The news ___ very surprising.'", opts: ["are", "is", "have", "were"], a: 1, ex: "News is singular." },
      { q: "Spot the error: 'Neither of the two boys are present.'", opts: ["Neither", "of the two", "are", "present"], a: 2, ex: "Neither → is." },
      { q: "Choose: 'Mathematics ___ my favourite.'", opts: ["are", "have been", "is", "were"], a: 2, ex: "Mathematics is singular." },
      { q: "Spot the error: 'Either he or I am responsible.'", opts: ["Either he", "or I", "am", "responsible"], a: 3, ex: "Correct — verb agrees with nearer 'I'." },
      { q: "Choose: 'The team ___ winning the match.'", opts: ["is", "are", "have", "were"], a: 0, ex: "Team as unit → is." },
      { q: "Spot the error: 'Police is searching for him.'", opts: ["Police", "is", "searching for", "him"], a: 1, ex: "Police → are." },
      { q: "Choose: 'A number of students ___ absent.'", opts: ["is", "are", "has", "have been"], a: 1, ex: "A number of → plural." },
      { q: "Spot the error: 'The number of accidents are increasing.'", opts: ["The number", "of accidents", "are", "increasing"], a: 2, ex: "Number of → is." },
      { q: "Choose: 'Cattle ___ grazing in the field.'", opts: ["is", "are", "was", "has been"], a: 1, ex: "Cattle → plural." },
      { q: "Spot the error: 'Each man and woman are equal.'", opts: ["Each", "man and woman", "are", "equal"], a: 2, ex: "Each → is." },
      { q: "Choose: 'Five hundred rupees ___ a fair price.'", opts: ["are", "is", "have", "were"], a: 1, ex: "Money as unit → singular." },
      { q: "Spot the error: 'A pair of trousers are missing.'", opts: ["A pair", "of trousers", "are", "missing"], a: 2, ex: "A pair → is." },
      { q: "Choose: 'Ram, along with his friends, ___ going.'", opts: ["are", "is", "have", "were"], a: 1, ex: "Subject Ram (singular)." },
      { q: "Spot the error: 'Bread and butter are nutritious.'", opts: ["Bread", "and butter", "are", "nutritious"], a: 2, ex: "Joint dish → is." },
      { q: "Choose: 'Every boy and every girl ___ been awarded.'", opts: ["have", "has", "were", "are"], a: 1, ex: "Every → has." },
      { q: "Spot the error: 'Neither he nor his brothers is present.'", opts: ["Neither", "his brothers", "is", "present"], a: 2, ex: "Verb agrees with nearer (brothers) → are." },
      { q: "Choose: 'Five years ___ a long time.'", opts: ["is", "are", "have been", "were"], a: 0, ex: "Period as unit → singular." },
      { q: "Spot the error: 'The committee have decided unanimously.'", opts: ["The committee", "have decided", "unanimously", "No error"], a: 1, ex: "Unit acting as one → has decided." },
      { q: "Choose: 'A series of accidents ___ happened.'", opts: ["have", "has", "are", "were"], a: 1, ex: "A series of → singular." },
      { q: "Spot the error: 'People is angry about the rise.'", opts: ["People", "is angry", "about the rise", "No error"], a: 1, ex: "People → are." },
      { q: "Choose: 'She is one of those students who ___ studied well.'", opts: ["has", "have", "is", "was"], a: 1, ex: "'Who' refers to plural students." },
      { q: "Spot the error: 'Each of the candidates have to pay a fee.'", opts: ["Each", "of the candidates", "have to pay", "a fee"], a: 2, ex: "Each → has." },
      { q: "Choose: 'A team of doctors ___ formed to investigate.'", opts: ["have been", "has been", "are", "is"], a: 1, ex: "A team of → singular." },
      { q: "Spot the error: 'The audience were enjoying the show.'", opts: ["The audience", "were enjoying", "the show", "No error"], a: 3, ex: "Plural acceptable when audience members reacting individually." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 14. VOICE (Active/Passive)
  // ───────────────────────────────────────────────────────────────
  T["eng-voice"] = {
    body: `
      <h2>Voice (Active / Passive)</h2>
      <p>SSC asks 2 questions on Voice in Tier-1. Either change active → passive or vice versa.</p>

      <h3>1. Active vs Passive — Concept</h3>
      <ul>
        <li><b>Active</b>: Subject DOES the action. <i>Ram <b>wrote</b> a letter.</i> (Ram = doer)</li>
        <li><b>Passive</b>: Subject RECEIVES the action. <i>A letter <b>was written</b> by Ram.</i> (letter = receiver)</li>
      </ul>

      <h3>2. General Rules for Conversion</h3>
      <ol>
        <li>Object of active becomes Subject of passive.</li>
        <li>Subject of active becomes Object of preposition "by" (often optional).</li>
        <li>Verb form changes: use appropriate "be" form + V3.</li>
        <li>Pronoun cases: I→me, he→him, she→her, we→us, they→them, who→whom.</li>
      </ol>

      <h3>3. Tense-wise Conversion (Active → Passive)</h3>
      <table>
        <tr><th>Tense</th><th>Active</th><th>Passive</th></tr>
        <tr><td>Pres. Simple</td><td>He writes a letter</td><td>A letter <b>is written</b> by him</td></tr>
        <tr><td>Pres. Cont.</td><td>He is writing a letter</td><td>A letter <b>is being written</b> by him</td></tr>
        <tr><td>Pres. Perfect</td><td>He has written a letter</td><td>A letter <b>has been written</b> by him</td></tr>
        <tr><td>Past Simple</td><td>He wrote a letter</td><td>A letter <b>was written</b> by him</td></tr>
        <tr><td>Past Cont.</td><td>He was writing a letter</td><td>A letter <b>was being written</b> by him</td></tr>
        <tr><td>Past Perfect</td><td>He had written a letter</td><td>A letter <b>had been written</b> by him</td></tr>
        <tr><td>Future Simple</td><td>He will write a letter</td><td>A letter <b>will be written</b> by him</td></tr>
        <tr><td>Future Perfect</td><td>He will have written</td><td>It <b>will have been written</b> by him</td></tr>
        <tr><td>Modals</td><td>He can/may/must write</td><td>It <b>can/may/must be written</b> by him</td></tr>
      </table>

      <p><b>Note:</b> Present/Past Perfect Continuous and Future Continuous don't have passive forms (rarely used).</p>

      <h3>4. Special Voice Conversions</h3>

      <h4>Imperative Sentences</h4>
      <ul>
        <li>Active: <b>Open</b> the door.</li>
        <li>Passive: Let the door <b>be opened</b>.</li>
        <li>Active: <b>Don't disturb</b> me.</li>
        <li>Passive: Let me <b>not be disturbed</b>.</li>
        <li>Polite request: Active "Please close the door." → Passive "You are requested to close the door."</li>
      </ul>

      <h4>Interrogative Sentences (Yes/No)</h4>
      <ul>
        <li>Active: Did he write a letter?</li>
        <li>Passive: Was a letter written by him?</li>
        <li>Active: Has she finished her work?</li>
        <li>Passive: Has her work been finished by her?</li>
      </ul>

      <h4>Interrogative (Wh-)</h4>
      <ul>
        <li>Active: Who broke the window?</li>
        <li>Passive: By whom was the window broken?</li>
        <li>Active: What does he want?</li>
        <li>Passive: What is wanted by him?</li>
        <li>Active: Why are you laughing at her?</li>
        <li>Passive: Why is she being laughed at by you?</li>
      </ul>

      <h4>Sentences with Indirect Object</h4>
      <p>The man gave me a book → Two passives possible:</p>
      <ul>
        <li>I was given a book by the man. (indirect obj → subject)</li>
        <li>A book was given to me by the man. (direct obj → subject)</li>
      </ul>

      <h4>"Let" sentences</h4>
      <ul>
        <li>Active: Let him write.</li>
        <li>Passive: Let it be written by him.</li>
      </ul>

      <h3>5. Voice with Prepositional Verbs</h3>
      <p>Keep the preposition in passive too:</p>
      <ul>
        <li>Active: They laughed <b>at</b> him.</li>
        <li>Passive: He was laughed <b>at</b> by them. (don't drop "at")</li>
      </ul>

      <h3>6. When "By" is Omitted</h3>
      <p>If agent is obvious, unimportant, or unknown — drop "by + agent":</p>
      <ul>
        <li>The thief was caught. (by police — obvious, dropped)</li>
        <li>English is spoken all over the world. (people in general)</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li><b>Step 1</b>: Identify tense. <b>Step 2</b>: Object → Subject. <b>Step 3</b>: Use be-form + V3.</li>
        <li>I → me; he → him; she → her; we → us; they → them; who → whom.</li>
        <li>Pres. Perf. Cont., Past Perf. Cont., Future Cont. → no passive form.</li>
        <li>For modals: keep modal + "be" + V3.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1 — Simple Present</h4>
      <p><b>Active</b>: She writes a letter.</p>
      <p><b>Solution:</b><br>Tense: present simple → "is/are + V3".<br>Passive: "A letter <b>is written</b> by her."</p>

      <h4>Example 2 — Present Continuous</h4>
      <p><b>Active</b>: He is repairing the car.</p>
      <p><b>Solution:</b><br>Tense: pres cont → "is/are being + V3".<br>Passive: "The car <b>is being repaired</b> by him."</p>

      <h4>Example 3 — Present Perfect</h4>
      <p><b>Active</b>: They have completed the project.</p>
      <p><b>Solution:</b><br>Passive: "The project <b>has been completed</b> by them."</p>

      <h4>Example 4 — Past Simple</h4>
      <p><b>Active</b>: Columbus discovered America.</p>
      <p><b>Solution:</b><br>Passive: "America <b>was discovered</b> by Columbus."</p>

      <h4>Example 5 — Past Continuous</h4>
      <p><b>Active</b>: The children were watching TV.</p>
      <p><b>Solution:</b><br>Passive: "TV <b>was being watched</b> by the children."</p>

      <h4>Example 6 — Past Perfect</h4>
      <p><b>Active</b>: He had completed his work before the bell rang.</p>
      <p><b>Solution:</b><br>Passive: "His work <b>had been completed</b> by him before the bell rang."</p>

      <h4>Example 7 — Future Simple</h4>
      <p><b>Active</b>: She will paint the house.</p>
      <p><b>Solution:</b><br>Passive: "The house <b>will be painted</b> by her."</p>

      <h4>Example 8 — Modal</h4>
      <p><b>Active</b>: You must obey the rules.</p>
      <p><b>Solution:</b><br>Passive: "The rules <b>must be obeyed</b> by you."</p>

      <h4>Example 9 — Imperative</h4>
      <p><b>Active</b>: Open the window.</p>
      <p><b>Solution:</b><br>Passive: "Let the window <b>be opened</b>."</p>

      <h4>Example 10 — Imperative (negative)</h4>
      <p><b>Active</b>: Don't waste time.</p>
      <p><b>Solution:</b><br>Passive: "Let time <b>not be wasted</b>." / "You are requested not to waste time."</p>

      <h4>Example 11 — Yes/No Question</h4>
      <p><b>Active</b>: Did she sing a song?</p>
      <p><b>Solution:</b><br>Passive: "<b>Was</b> a song <b>sung</b> by her?"</p>

      <h4>Example 12 — Wh-Question</h4>
      <p><b>Active</b>: Who killed the rat?</p>
      <p><b>Solution:</b><br>Passive: "<b>By whom was</b> the rat <b>killed</b>?"</p>

      <h4>Example 13 — Two Objects</h4>
      <p><b>Active</b>: My father gave me a watch.</p>
      <p><b>Solution:</b><br>Passive: "I <b>was given</b> a watch by my father." or "A watch <b>was given</b> to me by my father."</p>

      <h4>Example 14 — Prepositional verb</h4>
      <p><b>Active</b>: They laughed at the joker.</p>
      <p><b>Solution:</b><br>Passive: "The joker <b>was laughed at</b> by them." (keep 'at')</p>

      <h4>Example 15 — "Let"</h4>
      <p><b>Active</b>: Let him paint the wall.</p>
      <p><b>Solution:</b><br>Passive: "Let the wall <b>be painted</b> by him."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>Don't drop prepositions ("laughed at", "looked after", "spoken to").</li>
        <li>Change pronoun case: I→me; he→him; etc.</li>
        <li>Identify tense first — picks the right "be" form.</li>
        <li>Imperative → "Let + obj + be + V3".</li>
        <li>Questions: "By whom" goes to front.</li>
      </ul>
    `,
    mcq: [
      { q: "Passive of 'He writes a letter':", opts: ["A letter is wrote by him", "A letter is written by him", "A letter was written by him", "A letter has written by him"], a: 1, ex: "Pres simple passive: is/are + V3." },
      { q: "Passive of 'They are building a house':", opts: ["A house is being built", "A house is built", "A house has built", "A house was built"], a: 0, ex: "Pres cont: is/are being + V3." },
      { q: "Passive of 'She has won the prize':", opts: ["The prize is won by her", "The prize has been won by her", "The prize was won by her", "The prize had won by her"], a: 1, ex: "Pres perfect: has/have been + V3." },
      { q: "Passive of 'Did he break the window?':", opts: ["Was the window break", "Was the window broken by him?", "Did the window break by him?", "Has the window been broken?"], a: 1, ex: "Yes/no question + past." },
      { q: "Passive of 'Open the door':", opts: ["Let the door be opened", "The door is opened", "The door must open", "Open is the door"], a: 0, ex: "Imperative → Let + obj + be + V3." },
      { q: "Active of 'A book is being read by him':", opts: ["He read a book", "He is reading a book", "He has read a book", "He reads a book"], a: 1, ex: "Is being + V3 → present continuous." },
      { q: "Passive of 'Who taught you English?':", opts: ["By whom were you taught English?", "By whom you were taught?", "By whom did you teach English?", "Whom were you teach?"], a: 0, ex: "By whom + auxiliary + obj + V3." },
      { q: "Passive of 'They will complete the work':", opts: ["The work will complete", "The work will be completed", "The work has been completed", "The work is being completed"], a: 1, ex: "Will be + V3." },
      { q: "Passive of 'Children love sweets':", opts: ["Sweets loves children", "Sweets are loved by children", "Sweets is loved by children", "Sweets has been loved"], a: 1, ex: "Plural subj 'sweets' → are." },
      { q: "Active of 'A letter was being written by Ram':", opts: ["Ram wrote a letter", "Ram is writing a letter", "Ram was writing a letter", "Ram had written"], a: 2, ex: "Was being + V3 → past continuous." },
      { q: "Passive of 'He must finish his work':", opts: ["His work must finish", "His work must be finished", "His work is being finished", "His work had been finished"], a: 1, ex: "Modal + be + V3." },
      { q: "Passive of 'Don't hurt the bird':", opts: ["The bird should not hurt", "Let the bird not be hurt", "Don't be hurting the bird", "Hurt not the bird"], a: 1, ex: "Negative imperative: Let + not be + V3." },
      { q: "Passive of 'He gave me a pen':", opts: ["A pen was given to me by him", "Me was given a pen by him", "Both A and 'I was given a pen by him'", "Only A"], a: 2, ex: "Two passives possible." },
      { q: "Passive of 'They laughed at him':", opts: ["He was laughed by them", "He was laughed at by them", "He laughed at by them", "He had been laughed"], a: 1, ex: "Keep preposition." },
      { q: "Passive of 'Has he finished the work?':", opts: ["Was the work finished?", "Has the work been finished by him?", "Is the work finished?", "Did the work finish?"], a: 1, ex: "Has + obj + been + V3?" },
      { q: "Passive of 'Bring me a glass of water':", opts: ["A glass of water is brought", "Let a glass of water be brought to me", "Let me bring a glass", "Bring a glass to me"], a: 1, ex: "Imperative with indirect obj." },
      { q: "Active of 'The letter is being typed':", opts: ["Someone types the letter", "Someone is typing the letter", "Someone has typed", "Someone typed"], a: 1, ex: "Is being + V3 → pres cont." },
      { q: "Passive of 'She was singing a song':", opts: ["A song was being sung", "A song was sung", "A song was singing", "A song has been sung"], a: 0, ex: "Past cont: was being + V3." },
      { q: "Passive of 'I shall finish the work':", opts: ["The work shall finish by me", "The work shall be finished by me", "The work is finished by me", "The work was finished"], a: 1, ex: "Will/shall be + V3." },
      { q: "Passive of 'Let him do this':", opts: ["This is done by him", "Let this be done by him", "This must be done", "This let be done"], a: 1, ex: "Let + obj + be + V3." },
      { q: "Active of 'Why was he being punished?':", opts: ["Why he punished?", "Why someone punished him?", "Why were they punishing him?", "Why is he being punished?"], a: 2, ex: "Was being + V3 → past cont." },
      { q: "Passive of 'They are repairing the road':", opts: ["The road is repaired", "The road is being repaired", "The road has been repaired", "The road was repaired"], a: 1, ex: "Pres cont passive." },
      { q: "Passive of 'Who broke the window?':", opts: ["By whom the window was broken?", "By whom was the window broken?", "The window was broken by whom?", "Whom did break the window?"], a: 1, ex: "By whom + was + obj + V3?" },
      { q: "Passive of 'Take care of your books':", opts: ["Your books should take care", "Let your books be taken care of", "Care should take", "Your books are taken care"], a: 1, ex: "Imperative with prepositional verb." },
      { q: "Passive of 'They have been doing this':", opts: ["This has been being done", "This has been done by them", "This is being done", "(No clean passive — pres perf cont)"], a: 3, ex: "Pres perf cont rarely has passive — usually rephrased." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 15. NARRATION (Direct / Indirect Speech)
  // ───────────────────────────────────────────────────────────────
  T["eng-narration"] = {
    body: `
      <h2>Narration (Direct / Indirect Speech)</h2>
      <p>SSC asks 1-2 questions. Conversion between direct and indirect (reported) speech.</p>

      <h3>1. Direct vs Indirect</h3>
      <ul>
        <li><b>Direct</b>: exact words in quotes. <i>He said, "I am happy."</i></li>
        <li><b>Indirect</b>: reported meaning, no quotes. <i>He said that he was happy.</i></li>
      </ul>

      <h3>2. Key Changes (Direct → Indirect)</h3>

      <h4>(a) Tense Changes (if reporting verb is past)</h4>
      <table>
        <tr><th>Direct</th><th>Indirect</th></tr>
        <tr><td>Simple Present (write)</td><td>Simple Past (wrote)</td></tr>
        <tr><td>Present Cont. (am writing)</td><td>Past Cont. (was writing)</td></tr>
        <tr><td>Pres. Perfect (have written)</td><td>Past Perfect (had written)</td></tr>
        <tr><td>Past Simple (wrote)</td><td>Past Perfect (had written)</td></tr>
        <tr><td>Past Cont. (was writing)</td><td>Past Perfect Cont. (had been writing)</td></tr>
        <tr><td>Will / Shall</td><td>Would / Should</td></tr>
        <tr><td>Can</td><td>Could</td></tr>
        <tr><td>May</td><td>Might</td></tr>
        <tr><td>Must (no past)</td><td>Stays "must" or "had to"</td></tr>
      </table>
      <p><b>Exceptions</b>: Universal truths, habitual actions, historical facts — stay in original tense.</p>

      <h4>(b) Pronoun Changes</h4>
      <p>1st person (I, we, my) → subject of reporting verb (he, she, they).<br>
      2nd person (you, your) → object of reporting verb (me, him, her).<br>
      3rd person (he, she, it, they) → no change.</p>

      <h4>(c) Time / Place / Adverb Changes</h4>
      <table>
        <tr><th>Direct</th><th>Indirect</th></tr>
        <tr><td>now</td><td>then</td></tr>
        <tr><td>today</td><td>that day</td></tr>
        <tr><td>tonight</td><td>that night</td></tr>
        <tr><td>yesterday</td><td>the previous day / the day before</td></tr>
        <tr><td>tomorrow</td><td>the next day / the following day</td></tr>
        <tr><td>last night/week</td><td>the previous night / the week before</td></tr>
        <tr><td>next week</td><td>the following week</td></tr>
        <tr><td>ago</td><td>before</td></tr>
        <tr><td>this</td><td>that</td></tr>
        <tr><td>these</td><td>those</td></tr>
        <tr><td>here</td><td>there</td></tr>
        <tr><td>come</td><td>go</td></tr>
        <tr><td>hence</td><td>thence</td></tr>
      </table>

      <h3>3. Conversion Rules by Sentence Type</h3>

      <h4>(a) Assertive (Statements)</h4>
      <p>Use "that" + tense change + pronoun change.</p>
      <ul>
        <li>Direct: He said, "I am tired."</li>
        <li>Indirect: He said <b>that</b> he <b>was</b> tired.</li>
      </ul>

      <h4>(b) Interrogative (Questions)</h4>
      <p>Change reporting verb to "asked" / "enquired".</p>
      <ul>
        <li><b>Yes/No question</b>: use "if" or "whether". No question mark, change to statement word order.<br>
          Direct: He said, "Are you ready?"<br>
          Indirect: He asked <b>if/whether</b> I <b>was</b> ready.</li>
        <li><b>Wh-question</b>: keep wh-word. Change order to statement.<br>
          Direct: She said, "Where do you live?"<br>
          Indirect: She asked where I <b>lived</b>.</li>
      </ul>

      <h4>(c) Imperative (Commands / Requests / Advice)</h4>
      <p>Change reporting verb to: ordered / commanded / told / requested / advised / urged / warned / forbade.<br>
      Drop comma & quotes. Use "to + V1" (infinitive). For negatives, use "not to + V1".</p>
      <ul>
        <li>Direct: He said, "Open the door."<br>
          Indirect: He <b>ordered</b> me <b>to open</b> the door.</li>
        <li>Direct: She said, "Please help me."<br>
          Indirect: She <b>requested</b> me <b>to help</b> her.</li>
        <li>Direct: Father said, "Don't tell lies."<br>
          Indirect: Father <b>advised</b> me <b>not to tell</b> lies.</li>
      </ul>

      <h4>(d) Exclamatory (Emotions: joy, sorrow, surprise)</h4>
      <p>Change reporting verb to: exclaimed with joy / sorrow / surprise / exclaimed that / cried out.<br>
      Drop "What", "Alas", "Hurrah", "Oh", "Bravo". Convert to statement.</p>
      <ul>
        <li>Direct: He said, "Hurrah! We won!"<br>
          Indirect: He <b>exclaimed with joy that</b> they had won.</li>
        <li>Direct: She said, "Alas! He is no more."<br>
          Indirect: She <b>exclaimed with sorrow that</b> he was no more.</li>
        <li>Direct: He said, "What a beautiful sight!"<br>
          Indirect: He <b>exclaimed</b> that it <b>was</b> a very beautiful sight.</li>
      </ul>

      <h4>(e) Optative (Wish / Blessing / Curse)</h4>
      <p>Use "wished / prayed / blessed / cursed".</p>
      <ul>
        <li>Direct: He said, "May you live long!"<br>
          Indirect: He <b>wished</b> that I <b>might live</b> long. / He <b>blessed</b> me with long life.</li>
      </ul>

      <h3>4. Important Exceptions</h3>

      <h4>(a) Universal Truth / Habitual Action / Historical Fact</h4>
      <ul>
        <li>Direct: The teacher said, "The sun rises in the east."<br>
          Indirect: The teacher said that the sun <b>rises</b> (NOT rose) in the east.</li>
      </ul>

      <h4>(b) Reporting verb in Present / Future Tense — No tense change in reported speech</h4>
      <ul>
        <li>Direct: He <b>says</b>, "I am tired."<br>
          Indirect: He says that he <b>is</b> tired. (no change)</li>
      </ul>

      <h4>(c) "Let" — special conversion</h4>
      <ul>
        <li>Suggestion: "Let us go." → He suggested that they should go. / He proposed going.</li>
        <li>Permission: "Let me go." → He requested to be allowed to go.</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li>Reporting verb past → tense in reported clause goes back one step.</li>
        <li>Reporting verb present/future → NO tense change.</li>
        <li>Universal truths stay in present.</li>
        <li>Imperative → "to + V1" (or "not to + V1").</li>
        <li>Wh-question → keep wh-word; change to statement order.</li>
        <li>Yes/No question → use "if/whether".</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1 — Assertive</h4>
      <p><b>Direct</b>: She said, "I love music."</p>
      <p><b>Solution:</b><br>Tense: present → past. Pronoun: I → she.<br>Indirect: "She said <b>that she loved</b> music."</p>

      <h4>Example 2 — Yes/No Question</h4>
      <p><b>Direct</b>: He said, "Are you coming?"</p>
      <p><b>Solution:</b><br>Indirect: "He asked <b>if/whether I was coming</b>."</p>

      <h4>Example 3 — Wh-Question</h4>
      <p><b>Direct</b>: She asked, "Where do you live?"</p>
      <p><b>Solution:</b><br>Indirect: "She asked <b>where I lived</b>."</p>

      <h4>Example 4 — Imperative (Command)</h4>
      <p><b>Direct</b>: The teacher said, "Sit down."</p>
      <p><b>Solution:</b><br>Indirect: "The teacher <b>ordered us to sit down</b>."</p>

      <h4>Example 5 — Imperative (Request)</h4>
      <p><b>Direct</b>: She said to him, "Please help me."</p>
      <p><b>Solution:</b><br>Indirect: "She <b>requested him to help her</b>."</p>

      <h4>Example 6 — Negative Imperative</h4>
      <p><b>Direct</b>: He said, "Don't waste time."</p>
      <p><b>Solution:</b><br>Indirect: "He <b>advised me not to waste time</b>."</p>

      <h4>Example 7 — Exclamatory</h4>
      <p><b>Direct</b>: He said, "Hurrah! I have won."</p>
      <p><b>Solution:</b><br>Indirect: "He <b>exclaimed with joy that</b> he had won."</p>

      <h4>Example 8 — Universal Truth</h4>
      <p><b>Direct</b>: She said, "The earth revolves around the sun."</p>
      <p><b>Solution:</b><br>Indirect: "She said that the earth <b>revolves</b> around the sun." (no tense change)</p>

      <h4>Example 9 — Time change</h4>
      <p><b>Direct</b>: He said, "I will come tomorrow."</p>
      <p><b>Solution:</b><br>Indirect: "He said that he <b>would come the next day</b>."</p>

      <h4>Example 10 — Present Reporting</h4>
      <p><b>Direct</b>: He says, "I am tired."</p>
      <p><b>Solution:</b><br>No tense change.<br>Indirect: "He says that he <b>is</b> tired."</p>

      <h4>Example 11 — Optative</h4>
      <p><b>Direct</b>: He said, "May God bless you!"</p>
      <p><b>Solution:</b><br>Indirect: "He <b>prayed that God might bless me</b>." / "He <b>wished that God might bless me</b>."</p>

      <h4>Example 12 — Wh-Question with did</h4>
      <p><b>Direct</b>: She asked, "When did you arrive?"</p>
      <p><b>Solution:</b><br>Past simple "did arrive" → past perfect.<br>Indirect: "She asked when I <b>had arrived</b>."</p>

      <h4>Example 13 — "Let us"</h4>
      <p><b>Direct</b>: He said, "Let's go to the cinema."</p>
      <p><b>Solution:</b><br>Suggestion → "suggested" / "proposed".<br>Indirect: "He <b>suggested going</b> to the cinema." / "He <b>proposed that they should go</b>..."</p>

      <h4>Example 14 — Mixed (statement + question)</h4>
      <p><b>Direct</b>: He said, "I am happy. Are you?"</p>
      <p><b>Solution:</b><br>Indirect: "He said that he was happy and asked if I was (happy too)."</p>

      <h4>Example 15 — "This" / "Here"</h4>
      <p><b>Direct</b>: He said, "I will buy this book here."</p>
      <p><b>Solution:</b><br>Indirect: "He said that he would buy <b>that</b> book <b>there</b>."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>Reporting verb past → reported clause shifts to past (unless universal truth).</li>
        <li>Imperative → "to + V1" / "not to + V1" with verb like ordered/requested/advised.</li>
        <li>Y/N question → "if" or "whether"; Wh-question → keep wh-word.</li>
        <li>Change "today/now/here/this/come" → "that day/then/there/that/go".</li>
        <li>Drop quotation marks and use "that" for assertive (often optional in modern English).</li>
      </ul>
    `,
    mcq: [
      { q: "Indirect of: He said, 'I am happy.'", opts: ["He said that he is happy", "He said that he was happy", "He says he was happy", "He had said he is happy"], a: 1, ex: "Past tense reporting → past in reported." },
      { q: "Indirect of: He said, 'I have done my work.'", opts: ["He said that he has done", "He said that he had done", "He said he was doing", "He said he is doing"], a: 1, ex: "Has → had." },
      { q: "Indirect of: She said, 'Where are you going?'", opts: ["She asked where I am going", "She asked where I was going", "She asked where I go", "She said where am I going"], a: 1, ex: "Wh + past." },
      { q: "Indirect of: He said, 'Open the door.'", opts: ["He said to open", "He ordered to open the door", "He ordered me to open the door", "He said me to open"], a: 2, ex: "Imperative → ordered/told + obj + to + V1." },
      { q: "Indirect of: 'May you live long!'", opts: ["He said you may live long", "He wished I might live long", "He prayed I may live", "He said may you live long"], a: 1, ex: "Optative → wished/prayed + might." },
      { q: "Indirect of: He said, 'I will come tomorrow.'", opts: ["He said he will come tomorrow", "He said he would come the next day", "He said I would come tomorrow", "He said come the next day"], a: 1, ex: "Will → would; tomorrow → next day." },
      { q: "Indirect of: He said, 'Are you ready?'", opts: ["He asked are you ready", "He asked if I was ready", "He asked I was ready", "He said if I am ready"], a: 1, ex: "Y/N → if + statement order." },
      { q: "Indirect of: 'The sun rises in the east,' he said.", opts: ["He said sun rose", "He said the sun rises", "He said sun has risen", "He said the sun was rising"], a: 1, ex: "Universal truth — no change." },
      { q: "Indirect of: 'Don't lie,' she said.", opts: ["She told me don't lie", "She said not to lie", "She advised me not to lie", "She forbade me lie"], a: 2, ex: "Negative imperative → not to + V1." },
      { q: "Indirect of: He said, 'Alas! I am undone.'", opts: ["He said alas he is undone", "He exclaimed with sorrow that he was undone", "He cried alas I was undone", "He said sadly undone"], a: 1, ex: "Exclamatory → exclaimed with sorrow that..." },
      { q: "Indirect of: She said, 'I bought a pen yesterday.'", opts: ["She said she bought a pen yesterday", "She said she had bought a pen the previous day", "She said she had bought a pen yesterday", "She bought a pen the day before"], a: 1, ex: "Past → past perfect; yesterday → previous day." },
      { q: "Indirect of: He said, 'I can swim.'", opts: ["He said he can swim", "He said he could swim", "He said he swam", "He said he might swim"], a: 1, ex: "Can → could." },
      { q: "Indirect of: 'Please give me a glass of water,' he said.", opts: ["He told me to give water", "He requested me to give him a glass of water", "He pleased to give water", "He said please give water"], a: 1, ex: "Please → requested + to + V1." },
      { q: "Indirect of: 'What a beautiful day it is!'", opts: ["He said what a day", "He exclaimed that it was a very beautiful day", "He said it is beautiful", "He cried beautiful day"], a: 1, ex: "Exclamatory → exclaimed that + statement." },
      { q: "Indirect of: 'Let's play cricket,' he said.", opts: ["He said let's play cricket", "He proposed that we should play cricket", "He suggested playing cricket", "Both B and C"], a: 3, ex: "Let's → suggested/proposed." },
      { q: "Indirect of: She asked, 'Did you see the movie?'", opts: ["She asked if I saw the movie", "She asked if I had seen the movie", "She asked I saw the movie", "She asked have I seen the movie"], a: 1, ex: "Y/N + past → if + had + V3." },
      { q: "Indirect of: He said, 'I shall do it.'", opts: ["He said he shall do it", "He said he would do it", "He said he should do it", "He said he had done it"], a: 1, ex: "Shall → would." },
      { q: "Indirect of: 'Bring me a book,' she said.", opts: ["She brought a book", "She ordered me to bring a book", "She said to bring a book", "She brought to me a book"], a: 1, ex: "Imperative → ordered + obj + to + V1." },
      { q: "Indirect of: He said, 'I went there yesterday.'", opts: ["He said he went there yesterday", "He said he had gone there the previous day", "He said he goes there yesterday", "He said he had gone yesterday"], a: 1, ex: "Past + yesterday → past perf + previous day." },
      { q: "Indirect of: 'Where do you come from?' the man asked.", opts: ["He asked where I come from", "He asked where I came from", "He asked where I am coming", "He asked where did I come"], a: 1, ex: "Present → past in reported." },
      { q: "Indirect of: 'Hurrah! India has won the match.'", opts: ["He said hurrah India won", "He exclaimed with joy that India had won", "He cried India won", "He shouted India has won"], a: 1, ex: "Exclamatory of joy." },
      { q: "Indirect of: 'Don't smoke,' the doctor said.", opts: ["Doctor said don't smoke", "Doctor told not to smoke", "Doctor advised me not to smoke", "Doctor forbade me to smoke"], a: 2, ex: "Doctor → advised." },
      { q: "Indirect of: He said, 'It is raining now.'", opts: ["He said it is raining now", "He said it was raining then", "He said it has been raining", "He said it had been raining"], a: 1, ex: "Now → then." },
      { q: "Indirect of: She said, 'I have been waiting for hours.'", opts: ["She said I have been waiting", "She said she had been waiting for hours", "She said I was waiting", "She said she has waited"], a: 1, ex: "Has been → had been." },
      { q: "Indirect of: 'May God forgive you,' he said.", opts: ["He said may God forgive", "He prayed that God might forgive me", "He blessed me with forgiveness", "Both B and C"], a: 3, ex: "Optative — multiple equivalents." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 16. CONDITIONAL SENTENCES
  // ───────────────────────────────────────────────────────────────
  T["eng-conditional"] = {
    body: `
      <h2>Conditional Sentences (If-clauses)</h2>
      <p>Conditional sentences express situations and their consequences. SSC asks 1-2 questions on if-clauses.</p>

      <h3>1. The Four Types</h3>

      <h4>Type 0: Zero Conditional (universal truth / always true)</h4>
      <p>If + Present Simple, Present Simple.</p>
      <ul>
        <li>If you <b>heat</b> water to 100°C, it <b>boils</b>.</li>
        <li>If it <b>rains</b>, the ground <b>gets</b> wet.</li>
      </ul>

      <h4>Type 1: First Conditional (real possibility in future)</h4>
      <p>If + Present Simple, Future Simple (will + V1).</p>
      <ul>
        <li>If it <b>rains</b>, I <b>will stay</b> home.</li>
        <li>If you <b>study</b> hard, you <b>will pass</b>.</li>
        <li>If he <b>comes</b>, I <b>will go</b>.</li>
      </ul>

      <h4>Type 2: Second Conditional (unreal/hypothetical present)</h4>
      <p>If + Past Simple, would + V1.</p>
      <ul>
        <li>If I <b>had</b> a car, I <b>would drive</b> to office.</li>
        <li>If I <b>were</b> you, I <b>would accept</b> the offer. (use "were" for all subjects)</li>
        <li>If she <b>knew</b> his number, she <b>would call</b> him.</li>
      </ul>

      <h4>Type 3: Third Conditional (unreal past — opposite of what happened)</h4>
      <p>If + Past Perfect, would have + V3.</p>
      <ul>
        <li>If I <b>had studied</b> hard, I <b>would have passed</b>. (but I didn't)</li>
        <li>If he <b>had come</b> earlier, he <b>would have met</b> her. (but he came late)</li>
        <li>If you <b>had told</b> me, I <b>would have helped</b>. (but you didn't)</li>
      </ul>

      <h4>Mixed Conditional (Type 2 + Type 3)</h4>
      <p>Past condition affecting present, OR present condition imagining different past.</p>
      <ul>
        <li>If I <b>had studied</b> (past), I <b>would be</b> a doctor now. (past condition, present result)</li>
        <li>If I <b>were</b> a doctor (present), I <b>would have saved</b> her. (present condition, past result)</li>
      </ul>

      <h3>2. Important Notes</h3>

      <h4>(a) "If I were" (NOT "if I was") — subjunctive mood</h4>
      <ul>
        <li>✓ If I <b>were</b> rich, I <b>would</b> travel.</li>
        <li>✓ I wish I <b>were</b> taller.</li>
        <li><i>"If I was" is sometimes accepted in modern informal English, but SSC prefers "were".</i></li>
      </ul>

      <h4>(b) "Unless" = "if not"</h4>
      <ul>
        <li>✓ Unless you <b>study</b>, you will fail. = If you don't study, you will fail.</li>
        <li>❌ Unless you don't study, you will fail. (double negative)</li>
      </ul>

      <h4>(c) "Were to" (very formal, more hypothetical)</h4>
      <ul>
        <li>If I <b>were to</b> win the lottery, I <b>would</b> buy a house.</li>
      </ul>

      <h4>(d) "Should" in conditional (less likely future)</h4>
      <ul>
        <li>If you <b>should</b> see him, please tell him. (= in case you see him)</li>
      </ul>

      <h4>(e) Inverted forms (formal, replacing "if")</h4>
      <ul>
        <li>"Were I you, I would accept." (= If I were you...)</li>
        <li>"Had I known, I would have helped." (= If I had known...)</li>
        <li>"Should he come, please inform me." (= If he should come...)</li>
      </ul>

      <h3>3. Common SSC Patterns</h3>

      <h4>Pattern A: Sentence completion</h4>
      <p>If you ___ harder, you would have succeeded.</p>
      <p>Answer: had worked (Type 3).</p>

      <h4>Pattern B: Error spotting</h4>
      <p>"If he will come, I will tell him." — error in "if-clause".</p>
      <p>Fix: "If he <b>comes</b>, I will tell him." (Type 1)</p>

      <h3>🔥 Tricks</h3>
      <ul>
        <li>Type 1: Present + will (future real).</li>
        <li>Type 2: Past + would (present unreal).</li>
        <li>Type 3: Past Perfect + would have (past unreal).</li>
        <li>"If I were" — NEVER "if I was" in SSC.</li>
        <li>"Unless" is already negative — don't double-negate.</li>
        <li>NO "will" in if-clause for Type 1.</li>
        <li>NO "would" in if-clause for Type 2.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "If he will come, I will be happy."</p>
      <p><b>Solution:</b><br>Type 1: if-clause has present, not future.<br>Correct: "If he <b>comes</b>, I will be happy."</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "If I was rich, I would buy a car."</p>
      <p><b>Solution:</b><br>"If I were" — subjunctive.<br>Correct: "If I <b>were</b> rich..."</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "Unless you don't hurry, you'll miss the bus."</p>
      <p><b>Solution:</b><br>"Unless" already negative.<br>Correct: "Unless you <b>hurry</b>, you'll miss the bus."</p>

      <h4>Example 4</h4>
      <p><b>Spot the error</b>: "If I would have known, I would have helped."</p>
      <p><b>Solution:</b><br>Type 3: if-clause has past perfect (not "would have").<br>Correct: "If I <b>had known</b>, I would have helped."</p>

      <h4>Example 5</h4>
      <p><b>Choose</b>: "If she ___ here, she would have called us."</p>
      <p><b>Solution:</b><br>Type 3 — past perfect.<br>"If she <b>had been</b> here..."</p>

      <h4>Example 6</h4>
      <p><b>Choose</b>: "If you ___ harder, you would succeed."</p>
      <p><b>Solution:</b><br>Type 2 — past simple.<br>"If you <b>worked</b> harder..."</p>

      <h4>Example 7</h4>
      <p><b>Choose</b>: "I will help you if you ___ me."</p>
      <p><b>Solution:</b><br>Type 1 — present.<br>"...if you <b>ask</b> me."</p>

      <h4>Example 8</h4>
      <p><b>Spot the error</b>: "If you would have told me, I would have come."</p>
      <p><b>Solution:</b><br>Type 3: if-clause uses past perfect.<br>Correct: "If you <b>had told</b> me, I would have come."</p>

      <h4>Example 9</h4>
      <p><b>Choose</b>: "If I ___ a bird, I would fly."</p>
      <p><b>Solution:</b><br>Type 2 subjunctive.<br>"If I <b>were</b> a bird..."</p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "If it rains tomorrow, we will postpone the picnic."</p>
      <p><b>Solution:</b><br>Correct — Type 1.</p>

      <h4>Example 11 — Inverted</h4>
      <p><b>Choose</b>: "___ I you, I would not do that."</p>
      <p><b>Solution:</b><br>"Were I you" (inverted).<br>"<b>Were</b> I you..."</p>

      <h4>Example 12 — Mixed</h4>
      <p><b>Choose</b>: "If I had studied medicine, I ___ a doctor now."</p>
      <p><b>Solution:</b><br>Mixed: past condition, present result.<br>"...I <b>would be</b> a doctor now."</p>

      <h4>Example 13</h4>
      <p><b>Spot the error</b>: "Unless he doesn't pay the fee, he can't attend."</p>
      <p><b>Solution:</b><br>"Unless" + positive.<br>Correct: "Unless he <b>pays</b> the fee, he can't attend."</p>

      <h4>Example 14</h4>
      <p><b>Spot the error</b>: "If I will see him, I will tell him."</p>
      <p><b>Solution:</b><br>Type 1 — present in if-clause.<br>Correct: "If I <b>see</b> him..."</p>

      <h4>Example 15</h4>
      <p><b>Choose</b>: "Had he ___ earlier, he would have caught the train."</p>
      <p><b>Solution:</b><br>Inverted Type 3.<br>"Had he <b>started</b> / <b>come</b> earlier..."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>Type 1: <b>NO "will" in if-clause</b>. Use present.</li>
        <li>Type 2: <b>NO "would" in if-clause</b>. Use past.</li>
        <li>Type 3: <b>"had + V3" in if-clause</b>, "would have + V3" in main.</li>
        <li>"If I were" — always subjunctive, never "was".</li>
        <li>"Unless" + positive verb (no double negative).</li>
      </ul>
    `,
    mcq: [
      { q: "Spot the error: 'If he will come, I will tell him.'", opts: ["If he will come", "I will tell him", "No error", "(none)"], a: 0, ex: "Type 1: 'If he comes'." },
      { q: "Choose: 'If I ___ rich, I would buy a yacht.'", opts: ["am", "were", "had been", "would be"], a: 1, ex: "Type 2 subjunctive." },
      { q: "Spot the error: 'If he would have come, we would have left.'", opts: ["If he would have come", "we would have left", "No error", "(none)"], a: 0, ex: "Type 3: 'If he had come'." },
      { q: "Choose: 'If she ___ hard, she will succeed.'", opts: ["works", "would work", "had worked", "will work"], a: 0, ex: "Type 1 — present." },
      { q: "Spot the error: 'Unless you don't apologise, I won't talk.'", opts: ["Unless you", "don't apologise", "I won't talk", "No error"], a: 1, ex: "Unless = if not — no double negative." },
      { q: "Choose: 'If it ___ tomorrow, I'll stay in.'", opts: ["rain", "rains", "will rain", "would rain"], a: 1, ex: "Type 1." },
      { q: "Spot the error: 'If I was you, I would refuse.'", opts: ["If I was", "you", "I would refuse", "No error"], a: 0, ex: "Subjunctive: 'were'." },
      { q: "Choose: 'I would have come if I ___ time.'", opts: ["had", "would have had", "had had", "have had"], a: 2, ex: "Type 3 — past perfect 'had had'." },
      { q: "Spot the error: 'If he had studied, he will pass.'", opts: ["If he had studied", "he will pass", "No error", "(none)"], a: 1, ex: "Type 3 → would have passed." },
      { q: "Choose: 'If you heat ice, it ___.'", opts: ["will melt", "melts", "would melt", "had melted"], a: 1, ex: "Universal truth (Type 0)." },
      { q: "Spot the error: 'If I were a king, I will rule fairly.'", opts: ["If I were", "a king", "I will rule", "No error"], a: 2, ex: "Type 2 — would rule." },
      { q: "Choose: '___ I known, I would have called.'", opts: ["If", "Had", "Was", "Were"], a: 1, ex: "Inverted Type 3: 'Had I known'." },
      { q: "Spot the error: 'If they will agree, we'll proceed.'", opts: ["If they will agree", "we'll proceed", "No error", "(none)"], a: 0, ex: "Type 1 — 'If they agree'." },
      { q: "Choose: 'Unless he ___ the rules, he can't play.'", opts: ["doesn't follow", "follows", "would follow", "will follow"], a: 1, ex: "Unless + positive." },
      { q: "Spot the error: 'If she had been here, she will help.'", opts: ["If she had been here", "she will help", "No error", "(none)"], a: 1, ex: "Type 3 → 'would have helped'." },
      { q: "Choose: 'If I ___ a doctor, I would treat for free.'", opts: ["am", "were", "had been", "will be"], a: 1, ex: "Subjunctive present." },
      { q: "Spot the error: 'If you go, I will go too.'", opts: ["If you go", "I will go too", "No error", "(none)"], a: 2, ex: "Correct — Type 1." },
      { q: "Choose: 'Were I you, I ___ that.'", opts: ["will not do", "would not do", "have not done", "do not"], a: 1, ex: "Inverted Type 2 — would." },
      { q: "Spot the error: 'If she had asked me, I had told her.'", opts: ["If she had asked", "I had told her", "No error", "(none)"], a: 1, ex: "Main clause: 'would have told'." },
      { q: "Choose: 'If you should ___ him, please call me.'", opts: ["meet", "meets", "have met", "will meet"], a: 0, ex: "If you should meet — V1." },
      { q: "Spot the error: 'Unless he comes, I will not leave.'", opts: ["Unless he comes", "I will not leave", "No error", "(none)"], a: 2, ex: "Correct — Type 1 negative." },
      { q: "Choose: 'If I had a car, I ___ go by train.'", opts: ["will not", "wouldn't", "haven't", "didn't"], a: 1, ex: "Type 2." },
      { q: "Spot the error: 'Had he came earlier, he would have caught the train.'", opts: ["Had he came", "earlier", "would have caught", "No error"], a: 0, ex: "'Had he come' (V3)." },
      { q: "Choose: 'If you don't hurry, you ___ the bus.'", opts: ["miss", "will miss", "would miss", "missed"], a: 1, ex: "Type 1 — will + V1." },
      { q: "Spot the error: 'I wish I am rich.'", opts: ["I wish", "I am rich", "No error", "(none)"], a: 1, ex: "Wish + past: 'I were rich'." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 17. QUESTION TAG
  // ───────────────────────────────────────────────────────────────
  T["eng-question-tag"] = {
    body: `
      <h2>Question Tag</h2>
      <p>A short question added to the end of a statement, used to confirm/seek agreement. SSC asks 1 question on tags.</p>

      <h3>1. Basic Rule: Statement Polarity → Opposite Tag</h3>
      <ul>
        <li>Positive statement → Negative tag</li>
        <li>Negative statement → Positive tag</li>
      </ul>
      <ul>
        <li>✓ You are coming, <b>aren't you?</b></li>
        <li>✓ You aren't coming, <b>are you?</b></li>
        <li>✓ He has done it, <b>hasn't he?</b></li>
        <li>✓ He hasn't done it, <b>has he?</b></li>
      </ul>

      <h3>2. Auxiliary Choice</h3>
      <ul>
        <li>Use the <b>same auxiliary verb</b> from the main clause.</li>
        <li>If no auxiliary, use a form of "do" (do/does/did).</li>
        <li>✓ He plays well, <b>doesn't he?</b> (do-support)</li>
        <li>✓ They went home, <b>didn't they?</b></li>
      </ul>

      <h3>3. Subject in Tag</h3>
      <p>Always a pronoun (it / he / she / they / there / I / you / we), matching the main subject.</p>

      <h3>4. Special Cases</h3>

      <h4>(a) "I am" → Tag = "aren't I?"</h4>
      <ul>
        <li>✓ I am late, <b>aren't I?</b> (not "amn't I" — not used)</li>
      </ul>

      <h4>(b) "Let's" → Tag = "shall we?"</h4>
      <ul>
        <li>✓ Let's go, <b>shall we?</b></li>
      </ul>

      <h4>(c) Imperative → Tag = "will you / won't you / can you?"</h4>
      <ul>
        <li>✓ Open the door, <b>will you?</b></li>
        <li>✓ Don't smoke, <b>will you?</b></li>
        <li>✓ Help me, <b>won't you?</b></li>
      </ul>

      <h4>(d) "There" as subject — keep "there" in tag</h4>
      <ul>
        <li>✓ There is a book, <b>isn't there?</b></li>
        <li>✓ There are many, <b>aren't there?</b></li>
      </ul>

      <h4>(e) Words with Negative Meaning Treated as Negative</h4>
      <p>"Hardly, scarcely, barely, rarely, seldom, never, nothing, no one, nobody, none, few, little (without 'a')" — these make the sentence NEGATIVE, so use POSITIVE tag.</p>
      <ul>
        <li>✓ He hardly comes here, <b>does he?</b></li>
        <li>✓ Nobody knows, <b>do they?</b></li>
        <li>✓ Few people came, <b>did they?</b></li>
      </ul>

      <h4>(f) "Everyone, Everybody, Someone, Anyone, No one" → Tag uses "they"</h4>
      <ul>
        <li>✓ Everyone is happy, <b>aren't they?</b></li>
        <li>✓ Nobody came, <b>did they?</b></li>
      </ul>

      <h4>(g) "Nothing / Everything" → Tag uses "it"</h4>
      <ul>
        <li>✓ Nothing happened, <b>did it?</b></li>
        <li>✓ Everything is fine, <b>isn't it?</b></li>
      </ul>

      <h4>(h) Statement with "used to" → Tag = "didn't ... ?" or "did...?"</h4>
      <ul>
        <li>✓ He used to smoke, <b>didn't he?</b></li>
      </ul>

      <h4>(i) "Must" → context dependent</h4>
      <ul>
        <li>For obligation: "You must come, <b>mustn't you?</b>"</li>
        <li>For deduction: "He must be tired, <b>isn't he?</b>"</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li>Positive → negative tag; Negative → positive tag.</li>
        <li>Same auxiliary, no auxiliary → do/does/did.</li>
        <li>"I am" → "aren't I?"</li>
        <li>"Let's" → "shall we?"</li>
        <li>Imperative → "will you / won't you?"</li>
        <li>"Hardly/Nobody/Nothing/Few" → treat as negative (use positive tag).</li>
        <li>"Everyone/Nobody/Anyone" → use "they" in tag.</li>
        <li>"Nothing/Everything" → use "it".</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p>"You are tired, ___?"</p>
      <p><b>Solution:</b><br>Positive → negative tag.<br>"...<b>aren't you?</b>"</p>

      <h4>Example 2</h4>
      <p>"He hasn't come yet, ___?"</p>
      <p><b>Solution:</b><br>Negative → positive tag.<br>"...<b>has he?</b>"</p>

      <h4>Example 3</h4>
      <p>"They play cricket, ___?"</p>
      <p><b>Solution:</b><br>No auxiliary → do-support.<br>"...<b>don't they?</b>"</p>

      <h4>Example 4</h4>
      <p>"I am right, ___?"</p>
      <p><b>Solution:</b><br>Special case.<br>"...<b>aren't I?</b>"</p>

      <h4>Example 5</h4>
      <p>"Let's go to the park, ___?"</p>
      <p><b>Solution:</b><br>Let's → shall we.<br>"...<b>shall we?</b>"</p>

      <h4>Example 6</h4>
      <p>"Open the door, ___?"</p>
      <p><b>Solution:</b><br>Imperative.<br>"...<b>will you?</b>" / "<b>won't you?</b>"</p>

      <h4>Example 7</h4>
      <p>"Nobody saw him, ___?"</p>
      <p><b>Solution:</b><br>Negative meaning ('nobody') + "they".<br>"...<b>did they?</b>"</p>

      <h4>Example 8</h4>
      <p>"There are many books here, ___?"</p>
      <p><b>Solution:</b><br>Keep "there".<br>"...<b>aren't there?</b>"</p>

      <h4>Example 9</h4>
      <p>"Hardly anyone came, ___?"</p>
      <p><b>Solution:</b><br>Negative meaning + "they".<br>"...<b>did they?</b>"</p>

      <h4>Example 10</h4>
      <p>"He used to live here, ___?"</p>
      <p><b>Solution:</b><br>Used to → didn't.<br>"...<b>didn't he?</b>"</p>

      <h4>Example 11</h4>
      <p>"Everything is alright, ___?"</p>
      <p><b>Solution:</b><br>Everything → it.<br>"...<b>isn't it?</b>"</p>

      <h4>Example 12</h4>
      <p>"He must be tired, ___?"</p>
      <p><b>Solution:</b><br>Deduction (must = probably) → use "is".<br>"...<b>isn't he?</b>"</p>

      <h4>Example 13</h4>
      <p>"You will help me, ___?"</p>
      <p><b>Solution:</b><br>Positive future → negative tag.<br>"...<b>won't you?</b>"</p>

      <h4>Example 14</h4>
      <p>"Don't go there, ___?"</p>
      <p><b>Solution:</b><br>Negative imperative.<br>"...<b>will you?</b>"</p>

      <h4>Example 15</h4>
      <p>"Nothing is impossible, ___?"</p>
      <p><b>Solution:</b><br>Negative meaning + it.<br>"...<b>is it?</b>"</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>"I am" → "aren't I?" (never "amn't I").</li>
        <li>"Let's" → "shall we?" (NOT "won't we").</li>
        <li>Imperative (positive or negative) → "will you?".</li>
        <li>Hardly/Scarcely/Never/Nobody = negative — use positive tag.</li>
        <li>Everyone/Nobody → "they"; Nothing/Everything → "it".</li>
      </ul>
    `,
    mcq: [
      { q: "Tag: 'You are coming, ___?'", opts: ["are you", "aren't you", "do you", "don't you"], a: 1, ex: "Positive → negative." },
      { q: "Tag: 'I am right, ___?'", opts: ["aren't I", "am I not", "amn't I", "isn't it"], a: 0, ex: "Special: 'aren't I'." },
      { q: "Tag: 'Let's go, ___?'", opts: ["shall we", "will we", "shall you", "won't we"], a: 0, ex: "Let's → shall we." },
      { q: "Tag: 'He hasn't done, ___?'", opts: ["has he", "hasn't he", "did he", "doesn't he"], a: 0, ex: "Negative → positive (with same auxiliary)." },
      { q: "Tag: 'Don't shout, ___?'", opts: ["do you", "will you", "don't you", "won't you"], a: 1, ex: "Imperative → will you." },
      { q: "Tag: 'Nobody came, ___?'", opts: ["did he", "did they", "didn't they", "did anyone"], a: 1, ex: "Nobody (negative) + they." },
      { q: "Tag: 'Everyone is ready, ___?'", opts: ["isn't he", "aren't they", "are they", "isn't it"], a: 1, ex: "Everyone → they; positive → negative." },
      { q: "Tag: 'There is no time, ___?'", opts: ["is there", "isn't there", "is it", "isn't it"], a: 0, ex: "Negative ('no') → positive; there." },
      { q: "Tag: 'He plays cricket, ___?'", opts: ["doesn't he", "does he", "isn't he", "is he"], a: 0, ex: "Positive present → doesn't he." },
      { q: "Tag: 'You will come, ___?'", opts: ["will you", "won't you", "don't you", "do you"], a: 1, ex: "Positive → negative tag." },
      { q: "Tag: 'Hardly anyone helps, ___?'", opts: ["does he", "do they", "doesn't anyone", "don't they"], a: 1, ex: "Hardly = negative; anyone → they; positive tag." },
      { q: "Tag: 'Nothing happened, ___?'", opts: ["did it", "didn't it", "did anything", "didn't anything"], a: 0, ex: "Nothing (negative) + it; positive tag." },
      { q: "Tag: 'He used to come, ___?'", opts: ["didn't he", "doesn't he", "wouldn't he", "isn't he"], a: 0, ex: "Used to → didn't he." },
      { q: "Tag: 'Please help me, ___?'", opts: ["will you", "won't you", "do you", "Both A and B"], a: 3, ex: "Polite imperative — both work." },
      { q: "Tag: 'Open the window, ___?'", opts: ["will you", "won't you", "do you", "Both A and B"], a: 3, ex: "Imperative." },
      { q: "Tag: 'She doesn't like coffee, ___?'", opts: ["does she", "doesn't she", "is she", "isn't she"], a: 0, ex: "Negative → positive." },
      { q: "Tag: 'They have left, ___?'", opts: ["haven't they", "have they", "didn't they", "did they"], a: 0, ex: "Same auxiliary 'have'." },
      { q: "Tag: 'There is a problem, ___?'", opts: ["is there", "isn't there", "isn't it", "is it"], a: 1, ex: "Positive → negative; keep there." },
      { q: "Tag: 'Few attended the meeting, ___?'", opts: ["did they", "didn't they", "do they", "don't they"], a: 0, ex: "Few = negative; positive tag with 'they'." },
      { q: "Tag: 'You aren't tired, ___?'", opts: ["are you", "aren't you", "do you", "don't you"], a: 0, ex: "Negative → positive." },
      { q: "Tag: 'Let us go for a walk, ___?'", opts: ["shall we", "will we", "won't we", "shall us"], a: 0, ex: "Let us / Let's → shall we." },
      { q: "Tag: 'He must be the boss, ___?' (deduction)", opts: ["mustn't he", "isn't he", "is he", "wasn't he"], a: 1, ex: "Deduction → 'isn't he'." },
      { q: "Tag: 'I am going to fail, ___?'", opts: ["am I not", "aren't I", "won't I", "do I"], a: 1, ex: "I am → aren't I." },
      { q: "Tag: 'Everybody believes him, ___?'", opts: ["doesn't he", "don't they", "doesn't it", "doesn't everyone"], a: 1, ex: "Everybody → they." },
      { q: "Tag: 'Don't tell him, ___?'", opts: ["will you", "won't you", "do you", "don't you"], a: 0, ex: "Negative imperative → will you." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 18. MOOD
  // ───────────────────────────────────────────────────────────────
  T["eng-mood"] = {
    body: `
      <h2>Mood</h2>
      <p><b>Mood</b> indicates the manner in which the action is conceived. SSC occasionally asks 1 question; concept appears across other topics.</p>

      <h3>1. Three Moods</h3>

      <h4>(a) Indicative Mood — facts, statements, questions</h4>
      <ul>
        <li>He <b>writes</b> a letter. (fact)</li>
        <li>Does he <b>write</b>? (question)</li>
      </ul>

      <h4>(b) Imperative Mood — command, request, advice</h4>
      <ul>
        <li><b>Open</b> the door. (command)</li>
        <li>Please <b>help</b> me. (request)</li>
        <li><b>Be</b> careful. (advice)</li>
      </ul>

      <h4>(c) Subjunctive Mood — wish, doubt, hypothetical, suggestion</h4>
      <ul>
        <li>I wish I <b>were</b> rich. (hypothetical present)</li>
        <li>If I <b>were</b> you... (hypothetical)</li>
        <li>God <b>bless</b> you! (wish/blessing)</li>
        <li>He <b>should be</b> on time. (suggestion)</li>
      </ul>

      <h3>2. Subjunctive Mood — Detailed</h3>

      <h4>(a) Present Subjunctive — base form of verb (no -s)</h4>
      <p>Used in formal expressions of wish, command, suggestion:</p>
      <ul>
        <li>It is necessary that he <b>be</b> present. (NOT "is present")</li>
        <li>I suggest that she <b>come</b> early. (NOT "comes")</li>
        <li>The judge ordered that he <b>pay</b> the fine.</li>
      </ul>

      <h4>(b) Past Subjunctive — "were" for all subjects (when hypothetical)</h4>
      <ul>
        <li>I wish I <b>were</b> there. (not "was")</li>
        <li>If she <b>were</b> here, she would help.</li>
        <li>It is high time he <b>were</b> punished.</li>
      </ul>

      <h4>(c) After Verbs of "Mandative" Meaning (American style)</h4>
      <p>suggest, recommend, demand, insist, propose, request, urge, advise, order:</p>
      <ul>
        <li>I suggest that he <b>study</b> harder. (subjunctive base form)</li>
        <li>The committee proposed that the rule <b>be</b> changed.</li>
      </ul>
      <p>(British style often uses "should + V1": ...that he <b>should study</b> harder.)</p>

      <h3>3. Key Subjunctive Triggers</h3>
      <ul>
        <li><b>"I wish" / "If only"</b> + past subjunctive (were).</li>
        <li><b>"As if" / "As though"</b> + past subjunctive (were) for hypothetical.</li>
        <li><b>"It is (high/about) time"</b> + past subjunctive.</li>
        <li><b>"Suppose" / "Imagine"</b> + past for hypothetical.</li>
        <li><b>"Lest"</b> + should + V1 (or just V1 in formal).</li>
        <li><b>"May" / "Long live"</b> in wishes: "Long live the king!"</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li>"If I were" / "I wish I were" / "As if he were" — always WERE, never WAS in formal English.</li>
        <li>After "suggest, recommend, demand, insist, propose" + "that" → use bare verb (subjunctive).</li>
        <li>"It is high time" + past tense (subjunctive).</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "I wish I was younger."</p>
      <p><b>Solution:</b><br>Subjunctive — "were".<br>Correct: "I wish I <b>were</b> younger."</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "It is necessary that he is present."</p>
      <p><b>Solution:</b><br>Subjunctive after "necessary that".<br>Correct: "...that he <b>be</b> present."</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "She talks as if she knows everything."</p>
      <p><b>Solution:</b><br>As if + past subjunctive.<br>Correct: "...as if she <b>knew</b> everything."</p>

      <h4>Example 4</h4>
      <p><b>Spot the error</b>: "I suggest that he goes home."</p>
      <p><b>Solution:</b><br>Subjunctive after "suggest that".<br>Correct: "...that he <b>go</b> home." (American) / "should go" (British)</p>

      <h4>Example 5</h4>
      <p><b>Spot the error</b>: "It is high time we start working."</p>
      <p><b>Solution:</b><br>High time + past subjunctive.<br>Correct: "...we <b>started</b> working."</p>

      <h4>Example 6</h4>
      <p><b>Spot the error</b>: "The doctor recommended that she takes rest."</p>
      <p><b>Solution:</b><br>Subjunctive after "recommend that".<br>Correct: "...that she <b>take</b> rest."</p>

      <h4>Example 7</h4>
      <p><b>Spot the error</b>: "He looked as though he was tired."</p>
      <p><b>Solution:</b><br>"As though" + subjunctive — "were" for hypothetical, but "was" is increasingly accepted. SSC strict: were.<br>Correct: "...as though he <b>were</b> tired."</p>

      <h4>Example 8</h4>
      <p><b>Spot the error</b>: "If I was you, I would refuse."</p>
      <p><b>Solution:</b><br>Hypothetical → were.<br>Correct: "If I <b>were</b> you..."</p>

      <h4>Example 9</h4>
      <p><b>Spot the error</b>: "I demand that he leaves immediately."</p>
      <p><b>Solution:</b><br>Subjunctive after "demand that".<br>Correct: "...that he <b>leave</b> immediately."</p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "May God blesses you!"</p>
      <p><b>Solution:</b><br>Subjunctive after "May" (wish).<br>Correct: "May God <b>bless</b> you!"</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>"If I were" / "I wish I were" — always WERE.</li>
        <li>After "suggest, recommend, demand, insist, propose + that" → base form (he go, she be).</li>
        <li>"It is high time" / "It is about time" → past tense.</li>
        <li>"As if / as though" — hypothetical → past (were).</li>
      </ul>
    `,
    mcq: [
      { q: "Spot the error: 'I wish I was taller.'", opts: ["I wish", "I was taller", "No error", "wish"], a: 1, ex: "Subjunctive: 'were'." },
      { q: "Choose: 'If I ___ a king, I would help the poor.'", opts: ["am", "were", "was", "be"], a: 1, ex: "Subjunctive — were." },
      { q: "Spot the error: 'I suggest that she goes home.'", opts: ["I suggest", "she goes", "home", "No error"], a: 1, ex: "After suggest that → 'go' (subjunctive)." },
      { q: "Choose: 'It is high time we ___ working.'", opts: ["start", "started", "have started", "will start"], a: 1, ex: "Past subjunctive." },
      { q: "Spot the error: 'She acts as if she is the boss.'", opts: ["She acts", "as if she is", "the boss", "No error"], a: 1, ex: "Subjunctive — were." },
      { q: "Choose: 'I demand that he ___ at once.'", opts: ["leaves", "leave", "will leave", "is leaving"], a: 1, ex: "Subjunctive after demand." },
      { q: "Spot the error: 'It is necessary that he attends the meeting.'", opts: ["It is necessary", "he attends", "the meeting", "No error"], a: 1, ex: "...that he attend." },
      { q: "Choose: 'I wish I ___ in your shoes.'", opts: ["am", "was", "were", "be"], a: 2, ex: "Wish → were." },
      { q: "Spot the error: 'Long live the king!'", opts: ["Long live", "the king", "No error", "(none)"], a: 2, ex: "Correct — subjunctive wish." },
      { q: "Choose: 'God ___ you!' (blessing)", opts: ["bless", "blesses", "will bless", "blessed"], a: 0, ex: "Subjunctive — bare form." },
      { q: "Spot the error: 'The committee recommended that the rule is changed.'", opts: ["The committee", "recommended that", "the rule is", "No error"], a: 2, ex: "...the rule be changed." },
      { q: "Choose: 'I'd rather you ___ me earlier.'", opts: ["tell", "told", "had told", "have told"], a: 2, ex: "Past perfect subjunctive for past wish." },
      { q: "Spot the error: 'He talks as though he knew Russian.'", opts: ["He talks", "as though", "he knew Russian", "No error"], a: 3, ex: "Correct subjunctive." },
      { q: "Choose: 'It is essential that he ___ punctual.'", opts: ["is", "be", "was", "to be"], a: 1, ex: "Essential → subjunctive 'be'." },
      { q: "Spot the error: 'I wish I have more time.'", opts: ["I wish", "I have", "more time", "No error"], a: 1, ex: "Wish + past: 'I had more time'." },
      { q: "Choose: 'Suppose he ___ here, what would we do?'", opts: ["is", "was", "were", "be"], a: 2, ex: "Hypothetical — were." },
      { q: "Spot the error: 'Long lives the queen!'", opts: ["Long lives", "the queen", "No error", "Long"], a: 0, ex: "Subjunctive: 'Long live'." },
      { q: "Choose: 'It is requested that he ___ silent.'", opts: ["remains", "remain", "will remain", "remained"], a: 1, ex: "Subjunctive." },
      { q: "Spot the error: 'If she was younger, she would dance.'", opts: ["If she was", "younger", "she would dance", "No error"], a: 0, ex: "Subjunctive — were." },
      { q: "Choose: 'I propose that the meeting ___ adjourned.'", opts: ["is", "be", "was", "would be"], a: 1, ex: "Subjunctive." },
      { q: "Spot the error: 'He behaves as if he is a king.'", opts: ["He behaves", "as if he is", "a king", "No error"], a: 1, ex: "Were a king." },
      { q: "Choose: 'God ___ peace upon the world.'", opts: ["bring", "brings", "may bring", "Both A and C"], a: 3, ex: "Subjunctive blessing — both work." },
      { q: "Spot the error: 'I insist that he comes early.'", opts: ["I insist", "he comes", "early", "No error"], a: 1, ex: "...that he come early." },
      { q: "Choose: 'I wish you ___ more time to spend with me.'", opts: ["have", "had", "have had", "had had"], a: 1, ex: "Wish + past." },
      { q: "Spot the error: 'It is desirable that he is informed.'", opts: ["It is desirable", "he is informed", "informed", "No error"], a: 1, ex: "...that he be informed." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 19. INVERSION
  // ───────────────────────────────────────────────────────────────
  T["eng-inversion"] = {
    body: `
      <h2>Inversion</h2>
      <p>Inversion = reversing the normal subject-verb order, used in questions and after certain negative/restrictive expressions. SSC asks 1 question on inversion.</p>

      <h3>1. Standard Inversion (Questions)</h3>
      <p>Auxiliary + Subject + Main verb.</p>
      <ul>
        <li>"<b>Are</b> you ready?"</li>
        <li>"<b>Do</b> you know him?"</li>
        <li>"Where <b>is</b> she?"</li>
      </ul>

      <h3>2. Inversion After Negative / Restrictive Adverbs</h3>
      <p>When sentences begin with these <b>negative</b> or <b>restrictive</b> adverbs, the subject and auxiliary INVERT.</p>

      <table>
        <tr><th>Trigger Phrase</th><th>Example (Inverted)</th></tr>
        <tr><td>Hardly ... when</td><td><b>Hardly had I sat</b> when the bell rang.</td></tr>
        <tr><td>Scarcely ... when</td><td><b>Scarcely had he entered</b> when she left.</td></tr>
        <tr><td>No sooner ... than</td><td><b>No sooner had he arrived</b> than I left.</td></tr>
        <tr><td>Seldom / Rarely</td><td><b>Seldom does</b> he visit us.</td></tr>
        <tr><td>Never (before/in my life)</td><td><b>Never have I seen</b> such a sight.</td></tr>
        <tr><td>Not only ... but also</td><td><b>Not only is he smart</b>, but he is kind.</td></tr>
        <tr><td>Not until</td><td><b>Not until then did I realise</b>.</td></tr>
        <tr><td>Little</td><td><b>Little did I know</b> what was coming.</td></tr>
        <tr><td>Nowhere</td><td><b>Nowhere can you find</b> such beauty.</td></tr>
        <tr><td>Only after / when</td><td><b>Only after he left did</b> I notice the bag.</td></tr>
        <tr><td>So + adj/adv</td><td><b>So beautiful was the sunset</b> that we stopped.</td></tr>
        <tr><td>Such + noun</td><td><b>Such was his anger</b> that he broke the vase.</td></tr>
        <tr><td>Under no circumstances</td><td><b>Under no circumstances should you reveal</b> this.</td></tr>
      </table>

      <h3>3. Inversion in Conditionals (Formal)</h3>

      <h4>Type 2 inversion (drop "if")</h4>
      <ul>
        <li>If I were you → <b>Were I you</b>...</li>
        <li>If she had time → <b>Had she time</b>...</li>
      </ul>

      <h4>Type 3 inversion</h4>
      <ul>
        <li>If I had known → <b>Had I known</b>...</li>
        <li>If he had come → <b>Had he come</b>...</li>
      </ul>

      <h4>Future conditional</h4>
      <ul>
        <li>If you should see him → <b>Should you see him</b>...</li>
      </ul>

      <h3>4. Inversion After "So", "Neither", "Nor" (Agreement)</h3>
      <ul>
        <li>"I am tired." → "<b>So am I</b>." (agreement, positive)</li>
        <li>"I don't like it." → "<b>Neither do I.</b>" / "<b>Nor do I.</b>"</li>
      </ul>

      <h3>5. Inversion with Adverbs of Place (Stylistic)</h3>
      <ul>
        <li>"<b>Here comes the bus</b>." (instead of "The bus comes here.")</li>
        <li>"<b>In the corner stood an old man</b>."</li>
        <li>"<b>Down went the curtain</b>."</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li>When sentence starts with negative/restrictive adverb → INVERT auxiliary and subject.</li>
        <li>Pattern: Hardly + <b>had + S + V3 + when</b> + simple past.</li>
        <li>No sooner + <b>had + S + V3 + than</b> + simple past.</li>
        <li>Inversion in conditionals: drop "if", invert subject and auxiliary.</li>
        <li>"So/Such" at start → also inverts.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "Hardly I had reached when the train left."</p>
      <p><b>Solution:</b><br>Inversion required.<br>Correct: "Hardly <b>had I</b> reached when the train left."</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "Never I have seen such cruelty."</p>
      <p><b>Solution:</b><br>Negative adverb at start → inversion.<br>Correct: "Never <b>have I seen</b> such cruelty."</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "No sooner the bell rang than the students rushed out."</p>
      <p><b>Solution:</b><br>Inversion missing.<br>Correct: "No sooner <b>did the bell ring</b> than the students rushed out." Or with "had": "No sooner <b>had the bell rung</b>..."</p>

      <h4>Example 4 — Conditional inversion</h4>
      <p>"Had I known your address, I would have written to you."<br>This is correct inversion of "If I had known your address..."</p>

      <h4>Example 5</h4>
      <p><b>Spot the error</b>: "Seldom he goes out at night."</p>
      <p><b>Solution:</b><br>Inversion: Seldom + auxiliary + S + V.<br>Correct: "Seldom <b>does he go</b> out at night."</p>

      <h4>Example 6</h4>
      <p><b>Choose</b>: "___ I to fail this time, I would lose hope."</p>
      <p><b>Solution:</b><br>Were I (formal conditional).<br>"<b>Were</b> I to fail..."</p>

      <h4>Example 7</h4>
      <p><b>Spot the error</b>: "Only after the rain stopped, I went out."</p>
      <p><b>Solution:</b><br>"Only after" + inversion in main clause.<br>Correct: "Only after the rain stopped <b>did I go</b> out."</p>

      <h4>Example 8</h4>
      <p><b>Choose</b>: "So beautiful ___ the painting that everyone admired it."</p>
      <p><b>Solution:</b><br>So + adj + S + V (inverted): "So beautiful <b>was the painting</b>..."</p>

      <h4>Example 9</h4>
      <p><b>Spot the error</b>: "I have never seen such talent. So I have."</p>
      <p><b>Solution:</b><br>Agreement statement → "Neither/Nor have I" (negative). For affirmative: "So have I".<br>"I have never seen..." is negative → "Neither <b>have I</b>." / "Nor <b>have I</b>."</p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "Not only he is smart but also kind."</p>
      <p><b>Solution:</b><br>"Not only" at start → invert.<br>Correct: "Not only <b>is he</b> smart, but he is also kind."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>"Hardly... when" / "No sooner... than" — inversion required.</li>
        <li>"Never / Rarely / Seldom / Little" at start → invert.</li>
        <li>"Not only ... but also" at start → invert in first clause.</li>
        <li>"So + adj/adv" at start → invert.</li>
        <li>Conditional inversion: "If I were you" → "Were I you"; "If I had known" → "Had I known".</li>
        <li>"So am I" (positive agreement) / "Neither do I" (negative agreement).</li>
      </ul>
    `,
    mcq: [
      { q: "Spot the error: 'Hardly I had reached when it began to rain.'", opts: ["Hardly I had reached", "when", "rain", "No error"], a: 0, ex: "Inversion: 'Hardly had I reached'." },
      { q: "Choose: 'No sooner ___ than he left.'", opts: ["I came", "had I come", "did I come", "I had come"], a: 1, ex: "No sooner + had + S + V3 + than." },
      { q: "Spot the error: 'Never I have witnessed such bravery.'", opts: ["Never I have", "witnessed", "such bravery", "No error"], a: 0, ex: "'Never have I'." },
      { q: "Choose: 'Seldom ___ he visits us.'", opts: ["he visits", "visits he", "does he visit", "have he visited"], a: 2, ex: "Negative adverb → inversion." },
      { q: "Spot the error: 'No sooner the bell rang than students ran out.'", opts: ["No sooner the bell rang", "than", "ran out", "No error"], a: 0, ex: "Inversion required." },
      { q: "Choose: 'Only when the rain stopped ___ we go out.'", opts: ["did", "could", "we", "do"], a: 0, ex: "Only when → inversion." },
      { q: "Spot the error: 'Little did he knew about the truth.'", opts: ["Little", "did he knew", "the truth", "No error"], a: 1, ex: "After 'did' → V1: 'did he know'." },
      { q: "Choose: 'So beautiful ___ the sunset.'", opts: ["was", "is", "had been", "be"], a: 0, ex: "So + adj + was + S." },
      { q: "Spot the error: 'Had I knew, I would have come.'", opts: ["Had I knew", "I would have come", "No error", "(none)"], a: 0, ex: "Had I + V3: 'Had I known'." },
      { q: "Choose: '___ I you, I would refuse the offer.'", opts: ["Were", "If", "Was", "Had"], a: 0, ex: "Inverted conditional Type 2." },
      { q: "Spot the error: 'Not until he came I noticed his absence.'", opts: ["Not until he came", "I noticed", "his absence", "No error"], a: 1, ex: "Inversion in main: 'did I notice'." },
      { q: "Choose: 'I love reading. ___'", opts: ["So do I", "Neither do I", "So I do", "Same do I"], a: 0, ex: "Positive agreement." },
      { q: "Spot the error: 'I don't like coffee. So don't I.'", opts: ["I don't like", "So don't I", "coffee", "No error"], a: 1, ex: "Negative agreement: 'Neither do I'." },
      { q: "Choose: 'Hardly ___ when the lights went out.'", opts: ["I had sat", "had I sat", "I sat", "did I sit"], a: 1, ex: "Inversion." },
      { q: "Spot the error: 'Under no circumstances you should accept this.'", opts: ["Under no circumstances", "you should accept", "this", "No error"], a: 1, ex: "Inversion: 'should you accept'." },
      { q: "Choose: 'Rarely ___ such talent.'", opts: ["you see", "do you see", "you do see", "are you seeing"], a: 1, ex: "Rarely → inversion." },
      { q: "Spot the error: 'Such was his fame that he was invited everywhere.'", opts: ["Such was his fame", "that he was invited", "everywhere", "No error"], a: 3, ex: "Correct inversion." },
      { q: "Choose: 'Nowhere ___ such a magnificent view.'", opts: ["you will find", "will you find", "you find", "will find you"], a: 1, ex: "Nowhere → inversion." },
      { q: "Spot the error: 'No sooner had I arrived when the rain started.'", opts: ["No sooner had I arrived", "when", "the rain started", "No error"], a: 1, ex: "'than' (not 'when')." },
      { q: "Choose: 'Hardly ___ when the train started.'", opts: ["I had sat", "had I sat", "I sat", "did I sit"], a: 1, ex: "Inverted." },
      { q: "Spot the error: 'Not only he sings well, but also dances.'", opts: ["Not only he sings", "but also", "dances", "No error"], a: 0, ex: "Inversion: 'Not only does he sing'." },
      { q: "Choose: 'So tired ___ that I went to bed immediately.'", opts: ["I was", "was I", "I had been", "had I been"], a: 1, ex: "Inversion after 'So + adj'." },
      { q: "Spot the error: 'I'm hungry. So am I.'", opts: ["I'm hungry", "So am I", "No error", "(none)"], a: 2, ex: "Correct positive agreement." },
      { q: "Choose: 'Should ___ him, please call me.'", opts: ["you see", "you saw", "you have seen", "have you seen"], a: 0, ex: "Inverted conditional with should." },
      { q: "Spot the error: 'Scarcely had I sat than the phone rang.'", opts: ["Scarcely had I sat", "than", "the phone rang", "No error"], a: 1, ex: "Scarcely + when (not than)." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 20. PARALLELISM
  // ───────────────────────────────────────────────────────────────
  T["eng-parallelism"] = {
    body: `
      <h2>Parallelism</h2>
      <p><b>Parallelism</b> means using same grammatical structure for two or more items joined by conjunctions. SSC asks 1-2 questions on parallel structure.</p>

      <h3>1. Core Rule</h3>
      <p>When listing or contrasting items, they must be of the <b>same grammatical form</b> — all nouns, all verbs of same tense, all infinitives, all gerunds, etc.</p>
      <ul>
        <li>❌ She likes <b>swimming</b>, <b>hiking</b>, and <b>to ride</b> bikes.</li>
        <li>✓ She likes <b>swimming</b>, <b>hiking</b>, and <b>riding</b> bikes. (all gerunds)</li>
        <li>OR ✓ She likes <b>to swim</b>, <b>to hike</b>, and <b>to ride</b> bikes. (all infinitives)</li>
      </ul>

      <h3>2. Parallelism After Coordinating Conjunctions (and, or, but)</h3>
      <ul>
        <li>❌ He is intelligent and a hard worker. (adj + noun)</li>
        <li>✓ He is intelligent and hard-working. (both adj)</li>
        <li>OR ✓ He is an intelligent person and a hard worker. (both noun phrases)</li>
      </ul>

      <h3>3. Parallelism with Correlative Conjunctions</h3>
      <p>Items after each pair must be parallel:</p>
      <ul>
        <li><b>Not only ... but also</b>: She not only <b>sings</b> but also <b>dances</b>. (both verbs)</li>
        <li><b>Either ... or</b>: Either <b>tell</b> the truth or <b>leave</b>. (both verbs)</li>
        <li><b>Neither ... nor</b>: He is neither <b>rude</b> nor <b>rough</b>. (both adj)</li>
        <li><b>Both ... and</b>: She is both <b>kind</b> and <b>generous</b>.</li>
        <li><b>Whether ... or</b>: I don't know whether to <b>go</b> or to <b>stay</b>.</li>
      </ul>

      <h3>4. Parallelism in Comparisons</h3>
      <p>What you compare must be of the same type.</p>
      <ul>
        <li>❌ <b>To act</b> is better than <b>thinking</b>. (mixed)</li>
        <li>✓ <b>To act</b> is better than <b>to think</b>. / <b>Acting</b> is better than <b>thinking</b>.</li>
        <li>❌ His writing is better than <b>his brother</b>. (compares writing to brother)</li>
        <li>✓ His writing is better than <b>his brother's</b>. (writing vs brother's writing)</li>
      </ul>

      <h3>5. Parallelism in Lists / Series</h3>
      <ul>
        <li>❌ The job requires <b>creativity</b>, <b>energy</b>, and being able to <b>work hard</b>.</li>
        <li>✓ The job requires <b>creativity</b>, <b>energy</b>, and <b>hard work</b>. (all nouns)</li>
      </ul>

      <h3>6. Parallelism in Infinitives</h3>
      <ul>
        <li>When using a series of infinitives, can omit "to" after the first, but be consistent:</li>
        <li>✓ I want to swim, run, and jump. (omitted)</li>
        <li>✓ I want to swim, to run, and to jump. (all kept)</li>
        <li>❌ I want to swim, run, and to jump. (mixed)</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li>List items in a series → all same grammatical category.</li>
        <li>After correlatives (not only...but also, either...or, neither...nor) → parallel forms.</li>
        <li>"Like" compares nouns; "as" compares clauses/verbs.</li>
        <li>"Prefer X to Y" — X and Y must be parallel.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "She enjoys swimming, dancing, and to read."</p>
      <p><b>Solution:</b><br>Mix of gerunds and infinitive.<br>Correct: "swimming, dancing, and <b>reading</b>."</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "He is not only a singer but also dances well."</p>
      <p><b>Solution:</b><br>"Not only + noun" should pair with "but also + noun".<br>Correct: "He is not only <b>a singer</b> but also <b>a dancer</b>." / "He not only <b>sings</b> but also <b>dances</b> well."</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "His behaviour is better than his brother."</p>
      <p><b>Solution:</b><br>Compare behaviour to behaviour, not to brother.<br>Correct: "...than <b>his brother's</b>." / "than that of his brother."</p>

      <h4>Example 4</h4>
      <p><b>Spot the error</b>: "She would rather sing than to dance."</p>
      <p><b>Solution:</b><br>"Would rather + V1 + than + V1".<br>Correct: "...rather <b>sing</b> than <b>dance</b>."</p>

      <h4>Example 5</h4>
      <p><b>Spot the error</b>: "He likes neither tea nor he likes coffee."</p>
      <p><b>Solution:</b><br>After "neither" + after "nor" — parallel.<br>Correct: "He likes neither <b>tea</b> nor <b>coffee</b>."</p>

      <h4>Example 6</h4>
      <p><b>Spot the error</b>: "He is interested in playing chess and to read books."</p>
      <p><b>Solution:</b><br>"In + V-ing" — should be parallel.<br>Correct: "...playing chess and <b>reading</b> books."</p>

      <h4>Example 7</h4>
      <p><b>Spot the error</b>: "The teacher praised the student for being punctual and his diligence."</p>
      <p><b>Solution:</b><br>Need parallel forms.<br>Correct: "...for <b>his punctuality and diligence</b>." / "for <b>being punctual and diligent</b>."</p>

      <h4>Example 8</h4>
      <p><b>Spot the error</b>: "He prefers reading to write."</p>
      <p><b>Solution:</b><br>Prefer X to Y — parallel.<br>Correct: "He prefers <b>reading</b> to <b>writing</b>."</p>

      <h4>Example 9</h4>
      <p><b>Spot the error</b>: "She is not only beautiful but also kindness."</p>
      <p><b>Solution:</b><br>Adj + adj.<br>Correct: "not only <b>beautiful</b> but also <b>kind</b>."</p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "He told me to come early and that I should bring my book."</p>
      <p><b>Solution:</b><br>Same structure both clauses.<br>Correct: "He told me to come early and <b>to bring</b> my book." / "told me that I should come early and bring my book."</p>

      <h4>Example 11</h4>
      <p><b>Spot the error</b>: "The task was difficult and a challenge."</p>
      <p><b>Solution:</b><br>Adj and noun mixed.<br>Correct: "difficult and <b>challenging</b>." / "<b>a difficult task</b> and <b>a challenge</b>."</p>

      <h4>Example 12</h4>
      <p><b>Spot the error</b>: "He likes both painting and to sing."</p>
      <p><b>Solution:</b><br>Both + V-ing and + V-ing.<br>Correct: "both <b>painting and singing</b>."</p>

      <h4>Example 13</h4>
      <p><b>Spot the error</b>: "His way of speaking is different from how his sister speaks."</p>
      <p><b>Solution:</b><br>Parallel structure.<br>Correct: "His way of speaking is different from <b>his sister's</b>." / "different from how his sister speaks." (this is OK if structures match).</p>

      <h4>Example 14</h4>
      <p><b>Spot the error</b>: "Either you should pay the fine or face the punishment."</p>
      <p><b>Solution:</b><br>Either + V1, or + V1.<br>Correct: "Either <b>pay the fine</b> or <b>face the punishment</b>." / "Either you should pay the fine or <b>(you should) face</b>..."</p>

      <h4>Example 15</h4>
      <p><b>Spot the error</b>: "She is taller than her sister is intelligent."</p>
      <p><b>Solution:</b><br>Mixed comparison — compares height to intelligence.<br>Should compare comparable things: "She is taller than her sister."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>Items in a list → all same form (noun/V-ing/V1).</li>
        <li>After correlatives — match forms on both sides.</li>
        <li>"Prefer X to Y" / "Better than" — X and Y must be of same kind.</li>
        <li>"Not only ... but also" — what comes after each must be parallel.</li>
      </ul>
    `,
    mcq: [
      { q: "Spot the error: 'I like swimming, dancing and to read.'", opts: ["swimming", "dancing", "to read", "No error"], a: 2, ex: "Parallelism: 'reading'." },
      { q: "Spot the error: 'He is not only a great teacher but also teaches well.'", opts: ["not only a great teacher", "but also teaches well", "No error", "(none)"], a: 1, ex: "Should be 'but also a great teacher who teaches well' or restructure." },
      { q: "Choose: 'He prefers reading ___ writing.'", opts: ["than", "to", "over", "from"], a: 1, ex: "Prefer X to Y." },
      { q: "Spot the error: 'She loves cooking, painting, and to sing.'", opts: ["cooking", "painting", "to sing", "No error"], a: 2, ex: "'singing' for parallelism." },
      { q: "Spot the error: 'Either you eat or going to school.'", opts: ["Either", "eat", "going", "No error"], a: 2, ex: "Match form: 'go to school'." },
      { q: "Choose: 'Neither rude ___ aggressive.'", opts: ["nor", "or", "and", "but"], a: 0, ex: "Neither... nor." },
      { q: "Spot the error: 'His writing is better than his brother.'", opts: ["His writing", "is better than", "his brother", "No error"], a: 2, ex: "His brother's (writing)." },
      { q: "Spot the error: 'I want to swim, to run and play.'", opts: ["to swim", "to run", "play", "No error"], a: 2, ex: "Either all 'to' or none: 'to play' or 'swim, run and play'." },
      { q: "Spot the error: 'He is brave and a leader.'", opts: ["He is brave", "and a leader", "No error", "(none)"], a: 1, ex: "Mixed adj and noun." },
      { q: "Choose: 'She is both wise ___ kind.'", opts: ["or", "and", "but", "nor"], a: 1, ex: "Both ... and." },
      { q: "Spot the error: 'He likes either tea or to drink coffee.'", opts: ["either tea", "or to drink coffee", "No error", "either"], a: 1, ex: "Parallel: 'or coffee'." },
      { q: "Spot the error: 'She is taller than her brother is intelligent.'", opts: ["She is taller", "than her brother is intelligent", "No error", "(none)"], a: 1, ex: "Comparing different traits." },
      { q: "Choose: 'I love cooking and ___.'", opts: ["to eat", "eating", "ate", "eats"], a: 1, ex: "Parallelism with gerund." },
      { q: "Spot the error: 'She enjoys to swim and dancing.'", opts: ["to swim", "and dancing", "No error", "(none)"], a: 0, ex: "Mismatch: should be 'swimming'." },
      { q: "Choose: 'I would rather walk ___ run.'", opts: ["than to", "than", "but to", "but"], a: 1, ex: "Would rather + V1 than + V1." },
      { q: "Spot the error: 'He is interested not only in music but in dance also.'", opts: ["not only in music", "but in dance also", "No error", "(none)"], a: 1, ex: "But also in dance." },
      { q: "Choose: 'The exam was difficult, long, and ___.'", opts: ["had stress", "stressful", "stress", "to stress"], a: 1, ex: "All adjectives." },
      { q: "Spot the error: 'I told him to come early and that he should bring his book.'", opts: ["I told him", "to come early", "and that he should bring", "No error"], a: 2, ex: "Parallel: 'and to bring'." },
      { q: "Spot the error: 'He came to study, to write and rest.'", opts: ["to study", "to write", "and rest", "No error"], a: 2, ex: "'to rest' or omit all 'to'." },
      { q: "Choose: 'He is more intelligent than ___.'", opts: ["she", "her", "she is", "Both A and C"], a: 3, ex: "Either 'than she' or 'than she is'." },
      { q: "Spot the error: 'She is neither beautiful nor talent.'", opts: ["She is neither", "beautiful", "nor talent", "No error"], a: 2, ex: "Parallel: 'nor talented'." },
      { q: "Spot the error: 'My job involves typing, filing, and to greet visitors.'", opts: ["typing", "filing", "and to greet visitors", "No error"], a: 2, ex: "Should be 'greeting visitors'." },
      { q: "Choose: 'Better late ___ never.'", opts: ["then", "than", "but", "or"], a: 1, ex: "Standard idiom." },
      { q: "Spot the error: 'Her speech is more interesting than her teacher.'", opts: ["Her speech", "more interesting", "than her teacher", "No error"], a: 2, ex: "Should be 'than her teacher's'." },
      { q: "Choose: 'Either he comes ___ I go.'", opts: ["or", "nor", "and", "but"], a: 0, ex: "Either ... or." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 21. SUPERFLUOUS EXPRESSIONS (Redundancy / Pleonasm)
  // ───────────────────────────────────────────────────────────────
  T["eng-superfluous"] = {
    body: `
      <h2>Superfluous Expressions (Redundancy)</h2>
      <p>Superfluous = unnecessary words that mean the same thing as another word already used. SSC asks 1-2 questions on identifying redundant words.</p>

      <h3>1. The Concept</h3>
      <p>Each word should add meaning. If two words mean the same, one is redundant.</p>
      <p>Example: "Return back" — "return" already means "go back". So "back" is redundant.</p>

      <h3>2. Common Redundant Pairs (MEMORIZE!)</h3>
      <table>
        <tr><th>Redundant</th><th>Correct</th><th>Why?</th></tr>
        <tr><td>Return back</td><td>Return</td><td>Return = come back</td></tr>
        <tr><td>Repeat again</td><td>Repeat</td><td>Repeat = do again</td></tr>
        <tr><td>Revert back</td><td>Revert</td><td>Revert = go back</td></tr>
        <tr><td>Reply back</td><td>Reply</td><td>Reply = respond back</td></tr>
        <tr><td>Mutual cooperation</td><td>Cooperation</td><td>Cooperation already implies mutual</td></tr>
        <tr><td>Each and every</td><td>Each / Every</td><td>Both mean same</td></tr>
        <tr><td>End result</td><td>Result</td><td>Result is always at the end</td></tr>
        <tr><td>Free gift</td><td>Gift</td><td>Gift is always free</td></tr>
        <tr><td>Final outcome</td><td>Outcome</td><td>Outcome is always final</td></tr>
        <tr><td>New innovation</td><td>Innovation</td><td>Innovation is always new</td></tr>
        <tr><td>Past history</td><td>History</td><td>History is always past</td></tr>
        <tr><td>Past experience</td><td>Experience</td><td>Experience is from past</td></tr>
        <tr><td>True facts</td><td>Facts</td><td>Facts are always true</td></tr>
        <tr><td>Joint cooperation</td><td>Cooperation</td><td>Co- already means joint</td></tr>
        <tr><td>Sufficient enough</td><td>Sufficient / Enough</td><td>Same meaning</td></tr>
        <tr><td>Cancel out</td><td>Cancel</td><td>Out is redundant</td></tr>
        <tr><td>Postponed to later</td><td>Postponed</td><td>Postpone = to later</td></tr>
        <tr><td>Reason is because</td><td>Reason is that / Because</td><td>Either, not both</td></tr>
        <tr><td>Ask a question</td><td>Ask</td><td>Ask = put a question (in some contexts)</td></tr>
        <tr><td>Discuss about</td><td>Discuss</td><td>Discuss = talk about</td></tr>
        <tr><td>Comment about</td><td>Comment on</td><td>Use 'on'</td></tr>
        <tr><td>Approach to</td><td>Approach</td><td>Approach = come towards</td></tr>
        <tr><td>Climb up</td><td>Climb</td><td>Up is implied</td></tr>
        <tr><td>Descend down</td><td>Descend</td><td>Down is implied</td></tr>
        <tr><td>Cooperate together</td><td>Cooperate</td><td>Together is implied</td></tr>
        <tr><td>Two equal halves</td><td>Two halves / Equal halves</td><td>Halves are equal</td></tr>
        <tr><td>Hurry up quickly</td><td>Hurry</td><td>Hurry = move quickly</td></tr>
        <tr><td>Open up</td><td>Open</td><td>Up is redundant (in most cases)</td></tr>
        <tr><td>Continue on</td><td>Continue</td><td>On is redundant</td></tr>
        <tr><td>Connect up</td><td>Connect</td><td>Up is redundant</td></tr>
        <tr><td>Empty space</td><td>Space (or Empty)</td><td>Same idea</td></tr>
        <tr><td>Foreign import</td><td>Import</td><td>Import = from foreign</td></tr>
        <tr><td>Local resident</td><td>Resident</td><td>Resident = local</td></tr>
        <tr><td>Visible to the eye</td><td>Visible</td><td>Visible = seen by eye</td></tr>
        <tr><td>Audible to the ear</td><td>Audible</td><td>Heard by ear</td></tr>
      </table>

      <h3>3. Redundant Prepositions / Adverbs (Often Tested)</h3>
      <ul>
        <li>"Discuss <s>about</s>" → "Discuss"</li>
        <li>"Order <s>to</s> me" → "Order me"</li>
        <li>"Request <s>to</s> him" → "Request him"</li>
        <li>"Marry <s>with</s>" → "Marry"</li>
        <li>"Resemble <s>to</s>" → "Resemble"</li>
        <li>"Reach <s>at</s>" → "Reach"</li>
        <li>"Enter <s>into</s>" the room → "Enter the room" (but "enter into agreement" OK)</li>
        <li>"Investigate <s>into</s>" → "Investigate"</li>
        <li>"Emphasize <s>on</s>" → "Emphasize" (but "lay emphasis on" OK)</li>
      </ul>

      <h3>4. Redundant Adjectives</h3>
      <ul>
        <li>"Future plans" → "Plans" (plans are always for future)</li>
        <li>"Personal opinion" → "Opinion"</li>
        <li>"Honest truth" → "Truth"</li>
        <li>"Advance warning" → "Warning"</li>
        <li>"Necessary requirement" → "Requirement"</li>
        <li>"Brief summary" → "Summary"</li>
        <li>"Frozen ice" → "Ice"</li>
        <li>"Boiling hot" → "Hot" or "Boiling"</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li>If a verb already implies direction/manner, don't add it again (return back ❌).</li>
        <li>If a noun is inherently of a type, don't qualify (free gift ❌).</li>
        <li>"Each and every" — pick ONE.</li>
        <li>"Sufficient" = "enough" — don't use both.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Spot the error</b>: "Please return back the book by Friday."</p>
      <p><b>Solution:</b><br>"Return" already means "give back".<br>Correct: "Please <b>return</b> the book."</p>

      <h4>Example 2</h4>
      <p><b>Spot the error</b>: "We discussed about the matter."</p>
      <p><b>Solution:</b><br>"Discuss" takes no preposition.<br>Correct: "We <b>discussed</b> the matter."</p>

      <h4>Example 3</h4>
      <p><b>Spot the error</b>: "He repeated the question again."</p>
      <p><b>Solution:</b><br>"Repeat" = do again.<br>Correct: "He <b>repeated</b> the question."</p>

      <h4>Example 4</h4>
      <p><b>Spot the error</b>: "The end result was disappointing."</p>
      <p><b>Solution:</b><br>Result is always at end.<br>Correct: "The <b>result</b> was disappointing."</p>

      <h4>Example 5</h4>
      <p><b>Spot the error</b>: "She received a free gift."</p>
      <p><b>Solution:</b><br>Gift is always free.<br>Correct: "She received <b>a gift</b>."</p>

      <h4>Example 6</h4>
      <p><b>Spot the error</b>: "She married with a doctor."</p>
      <p><b>Solution:</b><br>Marry takes no preposition.<br>Correct: "She <b>married</b> a doctor."</p>

      <h4>Example 7</h4>
      <p><b>Spot the error</b>: "Each and every student must attend."</p>
      <p><b>Solution:</b><br>Pick one.<br>Correct: "<b>Each</b> student..." / "<b>Every</b> student..."</p>

      <h4>Example 8</h4>
      <p><b>Spot the error</b>: "It is the same identical book."</p>
      <p><b>Solution:</b><br>Same = identical.<br>Correct: "It is the <b>same</b> book."</p>

      <h4>Example 9</h4>
      <p><b>Spot the error</b>: "He has had past experience in this field."</p>
      <p><b>Solution:</b><br>Experience is from past.<br>Correct: "He has had <b>experience</b>."</p>

      <h4>Example 10</h4>
      <p><b>Spot the error</b>: "He requested to me to come."</p>
      <p><b>Solution:</b><br>Request takes no preposition.<br>Correct: "He <b>requested me</b>..."</p>

      <h4>Example 11</h4>
      <p><b>Spot the error</b>: "The bus was completely full."</p>
      <p><b>Solution:</b><br>"Full" is absolute.<br>Correct: "The bus was <b>full</b>."</p>

      <h4>Example 12</h4>
      <p><b>Spot the error</b>: "We are mutually cooperating."</p>
      <p><b>Solution:</b><br>Cooperation already mutual.<br>Correct: "We are <b>cooperating</b>."</p>

      <h4>Example 13</h4>
      <p><b>Spot the error</b>: "He climbed up the mountain."</p>
      <p><b>Solution:</b><br>Climb usually implies up.<br>Correct: "He <b>climbed</b> the mountain." (acceptable in some contexts to add "up" for emphasis)</p>

      <h4>Example 14</h4>
      <p><b>Spot the error</b>: "The reason for his failure is because he was lazy."</p>
      <p><b>Solution:</b><br>"Reason ... because" redundant.<br>Correct: "The reason for his failure is <b>that</b> he was lazy." / "He failed because he was lazy."</p>

      <h4>Example 15</h4>
      <p><b>Spot the error</b>: "Cancel out the booking."</p>
      <p><b>Solution:</b><br>"Out" is redundant.<br>Correct: "<b>Cancel</b> the booking."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>Verbs that imply direction: return, revert, repeat, reply — don't add "back/again".</li>
        <li>Nouns with inherent qualities: gift (free), result (end), history (past) — don't double-qualify.</li>
        <li>Verbs that take no preposition: discuss, marry, reach, resemble, request, order.</li>
        <li>Don't use "reason ... because" — pick one.</li>
        <li>"Each and every" — pick one.</li>
      </ul>
    `,
    mcq: [
      { q: "Spot the error: 'Please return back my book.'", opts: ["Please", "return back", "my book", "No error"], a: 1, ex: "Return = give back." },
      { q: "Spot the error: 'We discussed about the issue.'", opts: ["We", "discussed about", "the issue", "No error"], a: 1, ex: "Discuss takes no preposition." },
      { q: "Spot the error: 'She repeated the same thing again.'", opts: ["She repeated", "the same thing", "again", "No error"], a: 2, ex: "Repeat = do again." },
      { q: "Spot the error: 'The end result was excellent.'", opts: ["The end result", "was", "excellent", "No error"], a: 0, ex: "End result is redundant." },
      { q: "Spot the error: 'He received a free gift.'", opts: ["He received", "a free gift", "No error", "(none)"], a: 1, ex: "Gift is always free." },
      { q: "Spot the error: 'Each and every member must pay.'", opts: ["Each and every", "member must pay", "No error", "(none)"], a: 0, ex: "Pick one." },
      { q: "Spot the error: 'She is married with a doctor.'", opts: ["She is", "married with", "a doctor", "No error"], a: 1, ex: "Married to / no prep." },
      { q: "Spot the error: 'He reached at the station.'", opts: ["He reached", "at", "the station", "No error"], a: 1, ex: "Reach takes no preposition." },
      { q: "Spot the error: 'It is the same identical pen.'", opts: ["It is", "same identical", "pen", "No error"], a: 1, ex: "Same = identical." },
      { q: "Spot the error: 'He has past experience.'", opts: ["He has", "past experience", "No error", "(none)"], a: 1, ex: "Experience is from past." },
      { q: "Spot the error: 'Mutual cooperation is needed.'", opts: ["Mutual cooperation", "is needed", "No error", "(none)"], a: 0, ex: "Cooperation already mutual." },
      { q: "Spot the error: 'The reason of his absence is because he was sick.'", opts: ["The reason of his absence", "is because", "he was sick", "No error"], a: 1, ex: "Reason ... because redundant." },
      { q: "Spot the error: 'Please write down the answers.'", opts: ["Please", "write down", "the answers", "No error"], a: 3, ex: "'Write down' is OK." },
      { q: "Spot the error: 'Two equal halves of the cake.'", opts: ["Two equal halves", "of the cake", "No error", "(none)"], a: 0, ex: "Halves are equal." },
      { q: "Spot the error: 'Final outcome is awaited.'", opts: ["Final outcome", "is awaited", "No error", "(none)"], a: 0, ex: "Outcome = final result." },
      { q: "Spot the error: 'He climbed up the ladder.'", opts: ["He climbed", "up the ladder", "No error", "(none)"], a: 3, ex: "Acceptable; 'climbed up' often used for clarity." },
      { q: "Spot the error: 'New innovation amazed all.'", opts: ["New innovation", "amazed", "all", "No error"], a: 0, ex: "Innovation = new thing." },
      { q: "Spot the error: 'He cancelled out the meeting.'", opts: ["He cancelled", "out", "the meeting", "No error"], a: 1, ex: "'Out' is redundant after 'cancel'." },
      { q: "Spot the error: 'I'll revert back to you soon.'", opts: ["I'll revert", "back", "to you soon", "No error"], a: 1, ex: "Revert = go back." },
      { q: "Spot the error: 'He requested to me to come.'", opts: ["He requested", "to me", "to come", "No error"], a: 1, ex: "Request takes no preposition." },
      { q: "Spot the error: 'The temperature was boiling hot.'", opts: ["The temperature", "was boiling hot", "No error", "(none)"], a: 1, ex: "Boiling = very hot — redundant." },
      { q: "Spot the error: 'It is sufficient enough food.'", opts: ["It is", "sufficient enough", "food", "No error"], a: 1, ex: "Pick one: sufficient OR enough." },
      { q: "Spot the error: 'Please reply back soon.'", opts: ["Please", "reply back", "soon", "No error"], a: 1, ex: "Reply = answer back." },
      { q: "Spot the error: 'Foreign imports flooded the market.'", opts: ["Foreign imports", "flooded the market", "No error", "(none)"], a: 0, ex: "Imports are by definition foreign." },
      { q: "Spot the error: 'The advance warning saved many.'", opts: ["The advance warning", "saved many", "No error", "(none)"], a: 0, ex: "Warning is always in advance." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 22. ANALYSIS OF SENTENCES
  // ───────────────────────────────────────────────────────────────
  T["eng-analysis"] = {
    body: `
      <h2>Analysis of Sentences</h2>
      <p>Analysis = breaking a sentence into its parts (Subject, Predicate, Object, Complement, etc.) and identifying clauses. Foundation for understanding sentence transformation.</p>

      <h3>1. Two Basic Parts of a Sentence</h3>
      <ul>
        <li><b>Subject</b>: who/what is performing the action or being described. (often a noun/pronoun)</li>
        <li><b>Predicate</b>: what is said about the subject (everything except the subject).</li>
      </ul>
      <p>Example: "The boy / is playing in the garden."<br>
      Subject = The boy; Predicate = is playing in the garden.</p>

      <h3>2. Inside the Predicate</h3>
      <ul>
        <li><b>Verb</b>: the action or state.</li>
        <li><b>Object</b>: who/what receives the action.
          <ul>
            <li><b>Direct Object</b>: directly receives action (he gave <b>a book</b>).</li>
            <li><b>Indirect Object</b>: who receives the direct object (he gave <b>me</b> a book).</li>
          </ul>
        </li>
        <li><b>Complement</b>: completes the meaning, esp. with linking verbs.
          <ul>
            <li><b>Subject Complement</b>: describes subject (He is <b>a doctor</b>.).</li>
            <li><b>Object Complement</b>: describes object (We elected him <b>president</b>.).</li>
          </ul>
        </li>
        <li><b>Adverbial</b>: tells when, where, why, how (in the garden, slowly, yesterday).</li>
      </ul>

      <h3>3. Sentence Types (Structure)</h3>

      <h4>(a) Simple Sentence — One Clause</h4>
      <ul>
        <li>One subject + one finite verb.</li>
        <li>"The cat sat on the mat."</li>
      </ul>

      <h4>(b) Compound Sentence — Two or More Independent Clauses joined by FANBOYS</h4>
      <ul>
        <li>Each clause can stand alone.</li>
        <li>"I came, and he left." (two independent clauses joined by "and")</li>
        <li>"He ran fast, but he missed the bus."</li>
      </ul>

      <h4>(c) Complex Sentence — One Independent + One or More Dependent Clauses</h4>
      <ul>
        <li>Dependent clause introduced by subordinating conjunction (because, when, if, although, since, while, that, who, which...).</li>
        <li>"I went home <b>because I was tired</b>." (main + subordinate)</li>
        <li>"The boy <b>who is wearing red</b> is my brother." (main + relative)</li>
      </ul>

      <h4>(d) Compound-Complex — Two+ Independent + One+ Dependent</h4>
      <ul>
        <li>"I went home and slept <b>because I was tired</b>." (two independent + one dependent)</li>
      </ul>

      <h3>4. Types of Clauses</h3>

      <h4>(a) Independent (Main) Clause</h4>
      <p>Can stand alone as a sentence. "She is smart."</p>

      <h4>(b) Dependent (Subordinate) Clause</h4>
      <p>Cannot stand alone — depends on main clause. Three types:</p>
      <ul>
        <li><b>Noun Clause</b>: functions as a noun. Often starts with "that, what, who, why, how".<br>
          "<b>What he said</b> was interesting." (subject)<br>
          "I don't know <b>where he lives</b>." (object)</li>
        <li><b>Adjective (Relative) Clause</b>: modifies a noun. Starts with "who, whom, whose, which, that".<br>
          "The man <b>who came</b> is my uncle."</li>
        <li><b>Adverb Clause</b>: modifies the verb. Tells when/where/why/how/condition.<br>
          "I'll come <b>when I can</b>." (time)<br>
          "<b>If you ask</b>, I'll help." (condition)<br>
          "She left <b>because she was tired</b>." (reason)</li>
      </ul>

      <h3>5. Functions in a Sentence</h3>
      <table>
        <tr><th>Function</th><th>Example</th></tr>
        <tr><td>Subject</td><td><b>The boy</b> kicked the ball.</td></tr>
        <tr><td>Verb</td><td>The boy <b>kicked</b> the ball.</td></tr>
        <tr><td>Object</td><td>The boy kicked <b>the ball</b>.</td></tr>
        <tr><td>Indirect Object</td><td>He gave <b>me</b> a gift.</td></tr>
        <tr><td>Direct Object</td><td>He gave me <b>a gift</b>.</td></tr>
        <tr><td>Subject Complement</td><td>She is <b>a teacher</b>.</td></tr>
        <tr><td>Object Complement</td><td>They made him <b>captain</b>.</td></tr>
        <tr><td>Adverbial</td><td>He runs <b>fast</b>. / She came <b>yesterday</b>.</td></tr>
      </table>

      <h3>🔥 Tricks</h3>
      <ul>
        <li>Find the verb first. Subject is what does/is the action. Object is who/what receives it.</li>
        <li>Independent clause has subject + finite verb and makes complete sense.</li>
        <li>Dependent clause has subject + verb but doesn't make sense alone.</li>
        <li>Number of finite verbs (excluding helpers) ≈ number of clauses.</li>
        <li>Subordinator (because, if, when, that, who, which) → start of dependent clause.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Identify subject and predicate</b>: "The children are playing in the park."</p>
      <p><b>Solution:</b><br>Subject: "The children".<br>Predicate: "are playing in the park".</p>

      <h4>Example 2</h4>
      <p><b>Identify direct + indirect object</b>: "She gave him a book."</p>
      <p><b>Solution:</b><br>Direct object: "a book" (what was given).<br>Indirect object: "him" (to whom).</p>

      <h4>Example 3</h4>
      <p><b>What type of sentence?</b> "I went home and slept."</p>
      <p><b>Solution:</b><br>Two independent clauses joined by "and" → <b>Compound</b>.</p>

      <h4>Example 4</h4>
      <p><b>What type of sentence?</b> "Because it was raining, I stayed home."</p>
      <p><b>Solution:</b><br>One independent ("I stayed home") + one dependent ("Because it was raining") → <b>Complex</b>.</p>

      <h4>Example 5</h4>
      <p><b>Identify the clause type</b>: "I don't know <i>what he wants</i>."</p>
      <p><b>Solution:</b><br>"what he wants" — functions as object → <b>Noun clause</b>.</p>

      <h4>Example 6</h4>
      <p><b>Identify clause type</b>: "The man <i>who lives next door</i> is a doctor."</p>
      <p><b>Solution:</b><br>"who lives next door" describes "the man" → <b>Adjective (Relative) clause</b>.</p>

      <h4>Example 7</h4>
      <p><b>Identify clause type</b>: "I will come <i>when I am free</i>."</p>
      <p><b>Solution:</b><br>"when I am free" tells when → <b>Adverb clause of time</b>.</p>

      <h4>Example 8</h4>
      <p><b>Find object complement</b>: "They elected him <i>captain</i>."</p>
      <p><b>Solution:</b><br>"captain" completes the meaning of "him" → object complement.</p>

      <h4>Example 9</h4>
      <p><b>Find subject complement</b>: "The soup tastes <i>good</i>."</p>
      <p><b>Solution:</b><br>"good" describes the subject "soup" via linking verb "tastes".</p>

      <h4>Example 10</h4>
      <p><b>Sentence type</b>: "Although it was late, he kept working, and his sister joined him."</p>
      <p><b>Solution:</b><br>Two independent (he kept working / his sister joined) + one dependent (Although it was late) → <b>Compound-Complex</b>.</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>Direct object answers "what?"; Indirect object answers "to whom?".</li>
        <li>Number of subordinators ≈ number of dependent clauses.</li>
        <li>FANBOYS (for, and, nor, but, or, yet, so) join independent clauses → Compound.</li>
        <li>Subordinator at start (because, when, if, although...) → Complex.</li>
      </ul>
    `,
    mcq: [
      { q: "Identify subject: 'The girl with red hair sang beautifully.'", opts: ["The girl", "The girl with red hair", "sang", "beautifully"], a: 1, ex: "Complete subject includes modifiers." },
      { q: "Identify object: 'She wrote a long letter.'", opts: ["She", "wrote", "a long letter", "long"], a: 2, ex: "What did she write? Letter." },
      { q: "Type of sentence: 'I will go if you come.'", opts: ["Simple", "Compound", "Complex", "Compound-complex"], a: 2, ex: "Main + dependent (if)." },
      { q: "Type of sentence: 'He left, but she stayed.'", opts: ["Simple", "Compound", "Complex", "Compound-complex"], a: 1, ex: "Two independent + but." },
      { q: "Type of clause: 'I know <b>what he did</b>.'", opts: ["Noun", "Adjective", "Adverb", "Main"], a: 0, ex: "Acts as object → noun clause." },
      { q: "Type of clause: 'The book <b>that I bought</b> is interesting.'", opts: ["Noun", "Adjective", "Adverb", "Main"], a: 1, ex: "Modifies 'book' → adjective." },
      { q: "Type of clause: 'I'll come <b>when I'm ready</b>.'", opts: ["Noun", "Adjective", "Adverb", "Main"], a: 2, ex: "Tells when → adverb." },
      { q: "Subject of: 'Running is good exercise.'", opts: ["Running", "is", "good", "exercise"], a: 0, ex: "Gerund as subject." },
      { q: "Object of: 'He gave the children some sweets.'", opts: ["the children", "some sweets", "Both A and B", "gave"], a: 2, ex: "Children = indirect, sweets = direct." },
      { q: "Sentence type: 'He sings well.'", opts: ["Simple", "Compound", "Complex", "Compound-complex"], a: 0, ex: "One clause." },
      { q: "Identify predicate: 'Mary read a fascinating book.'", opts: ["Mary", "read a fascinating book", "a fascinating book", "fascinating"], a: 1, ex: "Everything after subject." },
      { q: "Sentence type: 'I will go to school and study.'", opts: ["Simple", "Compound", "Complex", "Compound-complex"], a: 0, ex: "Two verbs, one subject — simple." },
      { q: "Subject complement: 'She is a singer.'", opts: ["She", "is", "a singer", "singer"], a: 2, ex: "Renames subject." },
      { q: "Object complement: 'We made him the leader.'", opts: ["him", "the leader", "made", "We"], a: 1, ex: "Describes 'him' (the object)." },
      { q: "Sentence type: 'The book that I read was good, but the movie was bad.'", opts: ["Simple", "Compound", "Complex", "Compound-complex"], a: 3, ex: "2 independent + 1 dependent." },
      { q: "Type of clause: 'Whoever wins will be honoured.'", opts: ["Noun", "Adjective", "Adverb", "Independent"], a: 0, ex: "Subject = whoever wins; functions as noun." },
      { q: "Identify direct object: 'I told him a secret.'", opts: ["him", "a secret", "told", "I"], a: 1, ex: "Direct object = what was told." },
      { q: "Sentence type: 'Because I was tired, I slept.'", opts: ["Simple", "Compound", "Complex", "Compound-complex"], a: 2, ex: "Main + because-clause." },
      { q: "Type of clause: 'I asked her where she lives.'", opts: ["Noun", "Adjective", "Adverb", "Main"], a: 0, ex: "Object of 'asked'." },
      { q: "Subject of: 'In the garden was a beautiful fountain.'", opts: ["the garden", "a beautiful fountain", "was", "In"], a: 1, ex: "Subject (inverted sentence)." },
      { q: "Sentence type: 'She came, saw, and conquered.'", opts: ["Simple", "Compound", "Complex", "Compound-complex"], a: 0, ex: "Same subject, three verbs — still simple." },
      { q: "Type of clause: 'He is the boy who won.'", opts: ["Noun", "Adjective", "Adverb", "Main"], a: 1, ex: "Modifies 'boy'." },
      { q: "Indirect object: 'She baked her son a cake.'", opts: ["her son", "a cake", "baked", "She"], a: 0, ex: "To whom = her son." },
      { q: "Type of sentence: 'He went home; she stayed.'", opts: ["Simple", "Compound", "Complex", "Compound-complex"], a: 1, ex: "Two independent (joined by ;)." },
      { q: "Type of clause: 'Tell me what you want.'", opts: ["Noun", "Adjective", "Adverb", "Main"], a: 0, ex: "What you want = object." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 23. TRANSFORMATION OF SENTENCES
  // ───────────────────────────────────────────────────────────────
  T["eng-transformation"] = {
    body: `
      <h2>Transformation of Sentences</h2>
      <p>Transformation = converting a sentence from one form to another <b>without changing the meaning</b>. Common types tested in SSC.</p>

      <h3>Common Transformation Types</h3>

      <h3>1. Affirmative ↔ Negative</h3>
      <ul>
        <li>"Everyone must die." → "<b>No one can</b> escape death."</li>
        <li>"He is rich." → "He is <b>not poor</b>."</li>
        <li>"He is honest." → "He is <b>not dishonest</b>."</li>
        <li>"Only / Alone..." → use negative: "He alone can do it" → "<b>None but he</b> can do it."</li>
        <li>"As soon as..." → "<b>No sooner did... than</b>"</li>
        <li>Use opposite + "not": rich ↔ not poor; remember ↔ not forget</li>
      </ul>

      <h3>2. Assertive ↔ Interrogative (Rhetorical Questions)</h3>
      <p>A rhetorical question implies the opposite answer.</p>
      <ul>
        <li>"Everyone loves freedom." → "<b>Who doesn't love</b> freedom?"</li>
        <li>"No one wants to fail." → "<b>Who wants</b> to fail?"</li>
        <li>"It is useless to cry." → "<b>What is the use of</b> crying?" / "<b>Is it not useless to cry?</b>"</li>
        <li>Affirmative → Negative interrogative (and vice versa).</li>
      </ul>

      <h3>3. Exclamatory ↔ Assertive</h3>
      <ul>
        <li>"How beautiful the flower is!" → "The flower is <b>very beautiful</b>."</li>
        <li>"What a fool he is!" → "He is <b>a great fool</b>."</li>
        <li>"Hurrah! We won!" → "It is a matter of great joy that we won."</li>
        <li>"Alas! He is no more." → "It is sad that he is no more."</li>
      </ul>

      <h3>4. Degrees of Comparison</h3>

      <h4>(a) Positive → Comparative → Superlative</h4>
      <ul>
        <li>Positive: "No other city is as big as Mumbai."<br>
          Comparative: "Mumbai is <b>bigger than any other</b> city."<br>
          Superlative: "Mumbai is <b>the biggest</b> city."</li>
        <li>Positive: "Very few cities are as beautiful as Paris."<br>
          Comparative: "Paris is <b>more beautiful than most other</b> cities."<br>
          Superlative: "Paris is <b>one of the most beautiful</b> cities."</li>
      </ul>

      <h3>5. Active ↔ Passive Voice</h3>
      <ul>
        <li>"He wrote a letter." → "A letter <b>was written by him</b>."</li>
        <li>(See Voice topic for details.)</li>
      </ul>

      <h3>6. Direct ↔ Indirect Speech</h3>
      <ul>
        <li>He said, "I am happy." → He said that he <b>was happy</b>.</li>
        <li>(See Narration topic for details.)</li>
      </ul>

      <h3>7. Simple ↔ Complex ↔ Compound</h3>

      <h4>(a) Simple → Complex</h4>
      <ul>
        <li>Simple: "On reaching home, I called her."<br>
          Complex: "<b>When I reached home</b>, I called her."</li>
        <li>Simple: "He confessed his guilt."<br>
          Complex: "He confessed <b>that he was guilty</b>."</li>
      </ul>

      <h4>(b) Simple → Compound</h4>
      <ul>
        <li>Simple: "Despite being poor, he is honest."<br>
          Compound: "He is poor <b>but he is honest</b>."</li>
        <li>Simple: "Besides being intelligent, he is hardworking."<br>
          Compound: "He is intelligent <b>and hardworking</b>."</li>
      </ul>

      <h4>(c) Complex → Simple</h4>
      <ul>
        <li>Complex: "When the sun rose, we set out."<br>
          Simple: "<b>At sunrise</b>, we set out."</li>
        <li>Complex: "I know that he is honest."<br>
          Simple: "I know <b>about his honesty</b>." / "I know him to be honest."</li>
      </ul>

      <h4>(d) Compound → Complex</h4>
      <ul>
        <li>Compound: "He worked hard and (so) he succeeded."<br>
          Complex: "<b>Because</b> he worked hard, he succeeded." / "He succeeded <b>because</b> he worked hard."</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li><b>Universal affirmation → Negative rhetorical question</b>.</li>
        <li><b>"Only/Alone"</b> → "None but" / "Nothing but" for negative.</li>
        <li><b>Exclamatory → Assertive</b>: "How X!" / "What X!" → "very X".</li>
        <li><b>Positive comparison</b> with "as ... as": "No other X is so Y as Z" → Comparative "Z is more Y than any other X" → Superlative "Z is the most Y".</li>
        <li>Use synonyms with "not" to flip affirmative ↔ negative.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1 — Affirmative to Negative</h4>
      <p><b>Sentence</b>: "Everyone praises virtue."</p>
      <p><b>Negative</b>: "<b>No one fails to praise</b> virtue."</p>

      <h4>Example 2 — Assertive to Interrogative</h4>
      <p><b>Sentence</b>: "Nobody loves cruelty."</p>
      <p><b>Interrogative</b>: "<b>Who loves</b> cruelty?"</p>

      <h4>Example 3 — Exclamatory to Assertive</h4>
      <p><b>Sentence</b>: "How wonderful the view is!"</p>
      <p><b>Assertive</b>: "The view is <b>very wonderful</b>."</p>

      <h4>Example 4 — Positive to Superlative</h4>
      <p><b>Sentence</b>: "No other boy in the class is as tall as Ram."</p>
      <p><b>Superlative</b>: "Ram is <b>the tallest boy</b> in the class."</p>

      <h4>Example 5 — Comparative to Positive</h4>
      <p><b>Sentence</b>: "Iron is more useful than any other metal."</p>
      <p><b>Positive</b>: "<b>No other metal is as useful as iron</b>."</p>

      <h4>Example 6 — Simple to Complex</h4>
      <p><b>Sentence</b>: "On hearing the news, she fainted."</p>
      <p><b>Complex</b>: "<b>When she heard the news</b>, she fainted." / "As soon as she heard the news..."</p>

      <h4>Example 7 — Compound to Complex</h4>
      <p><b>Sentence</b>: "He is poor but he is honest."</p>
      <p><b>Complex</b>: "<b>Although</b> he is poor, he is honest."</p>

      <h4>Example 8 — Complex to Simple</h4>
      <p><b>Sentence</b>: "Because of his honesty, everybody loves him." / "Because he is honest, everybody loves him."</p>
      <p><b>Simple</b>: "<b>Being honest</b>, everybody loves him." / "Everybody loves him for his honesty."</p>

      <h4>Example 9 — Affirmative to Negative</h4>
      <p><b>Sentence</b>: "He is too weak to walk."</p>
      <p><b>Negative</b>: "He is <b>so weak that he cannot walk</b>."</p>

      <h4>Example 10 — Assertive to Exclamatory</h4>
      <p><b>Sentence</b>: "It is a very beautiful day."</p>
      <p><b>Exclamatory</b>: "<b>What a beautiful day it is!</b>"</p>

      <h4>Example 11 — Universal Affirmative to Question</h4>
      <p><b>Sentence</b>: "All know honesty is the best policy."</p>
      <p><b>Interrogative</b>: "<b>Who does not know</b> honesty is the best policy?"</p>

      <h4>Example 12 — Positive to Comparative</h4>
      <p><b>Sentence</b>: "Very few rivers are as long as the Ganges."</p>
      <p><b>Comparative</b>: "The Ganges is <b>longer than most other rivers</b>."</p>

      <h4>Example 13 — Compound to Simple</h4>
      <p><b>Sentence</b>: "He must work hard or he will fail."</p>
      <p><b>Simple</b>: "He must work hard <b>to avoid failure</b>." / "He must work hard <b>in order to succeed</b>."</p>

      <h4>Example 14 — Affirmative to Negative with "Too"</h4>
      <p><b>Sentence</b>: "He is too tired to walk."</p>
      <p><b>Negative</b>: "He is <b>so tired that he cannot walk</b>."</p>

      <h4>Example 15 — Exclamatory to Assertive (with "What")</h4>
      <p><b>Sentence</b>: "What a beautiful sight it is!"</p>
      <p><b>Assertive</b>: "It is <b>a very beautiful sight</b>."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>Affirmative → Negative: use antonym + "not".</li>
        <li>Universal "everyone/all" → "no one ... not" or "Who ... not?"</li>
        <li>"Only/Alone" → "None but" or "Nothing but" or "No one except".</li>
        <li>Exclamatory → Assertive: "How/What X!" → "very X" or "a great X".</li>
        <li>Compound (FANBOYS) → Complex: use because/although/when.</li>
      </ul>
    `,
    mcq: [
      { q: "Negative of 'Everyone hates lies.'", opts: ["No one likes lies.", "No one does not hate lies.", "Who hates lies?", "All love lies."], a: 1, ex: "No one ... not." },
      { q: "Assertive of 'How beautiful she is!'", opts: ["She is beautiful", "She is very beautiful", "Is she beautiful?", "Is she not beautiful?"], a: 1, ex: "How X! → very X." },
      { q: "Simple of 'When he came, he found me studying.'", opts: ["His coming found me studying", "On his coming, he found me studying", "He came to find me studying", "Both A and B"], a: 3, ex: "Use 'on coming' or 'his coming'." },
      { q: "Complex of 'He confessed his guilt.'", opts: ["He confessed about his guilt", "He confessed that he was guilty", "He was guilty", "He admitted guilt"], a: 1, ex: "Subordinate clause with 'that'." },
      { q: "Positive of 'Ram is the tallest in his class.'", opts: ["No other boy is as tall as Ram", "Ram is taller than any other", "Ram is tall", "Few are tall like Ram"], a: 0, ex: "Positive form." },
      { q: "Comparative of 'No one is as wise as Solomon.'", opts: ["Solomon is wiser than any other", "Solomon is the wisest", "Few are wise", "Solomon is wise"], a: 0, ex: "Comparative form." },
      { q: "Negative of 'He is too poor to buy a car.'", opts: ["He is so poor that he cannot buy a car", "He is not rich enough to buy a car", "He cannot buy a car because he is poor", "All correct"], a: 3, ex: "Multiple valid forms." },
      { q: "Compound of 'Despite being poor, he is honest.'", opts: ["He is poor but honest", "He is poor yet honest", "Both A and B", "He is honest because of poverty"], a: 2, ex: "Use 'but' or 'yet'." },
      { q: "Complex of 'I know him to be honest.'", opts: ["I know that he is honest", "I know about his honesty", "He is honest, I know", "Both A and C"], a: 0, ex: "Complex needs subordinate clause." },
      { q: "Simple of 'Because he was lazy, he failed.'", opts: ["He failed due to laziness", "He was lazy and failed", "Being lazy, he failed", "Both A and C"], a: 3, ex: "Simple forms." },
      { q: "Exclamatory of 'The mountain is very high.'", opts: ["How high the mountain is!", "What a high mountain!", "How is the mountain?", "Both A and B"], a: 3, ex: "Both work." },
      { q: "Interrogative of 'Honesty is the best policy.'", opts: ["Is honesty the best policy?", "What is honesty?", "Isn't honesty the best policy?", "How honest?"], a: 2, ex: "Rhetorical negative question." },
      { q: "Assertive of 'Who would not love freedom?'", opts: ["Everyone loves freedom", "No one loves freedom", "Some love freedom", "Who loves?"], a: 0, ex: "Rhetorical = everyone." },
      { q: "Simple of 'As soon as he reached, the bell rang.'", opts: ["On his reaching, the bell rang", "He reached at the bell rang time", "Just at his arrival, the bell rang", "Both A and C"], a: 3, ex: "Simple forms." },
      { q: "Comparative of 'Very few cities are as beautiful as Paris.'", opts: ["Paris is more beautiful than many other cities", "Paris is the most beautiful", "Paris is beautiful", "All correct"], a: 0, ex: "Comparative form." },
      { q: "Negative of 'Always tell the truth.'", opts: ["Never tell a lie", "Don't tell the truth", "Always lie", "Truth is good"], a: 0, ex: "Use 'never + opposite'." },
      { q: "Complex of 'Tell me the way to the station.'", opts: ["Tell me how I can reach the station", "Tell me where the station is", "Tell me about the station", "Both A and B"], a: 3, ex: "Complex needs subordinate clause." },
      { q: "Simple of 'When he heard the news, he was shocked.'", opts: ["On hearing the news, he was shocked", "He heard the news and was shocked", "Hearing the news, he was shocked", "Both A and C"], a: 3, ex: "Use participle." },
      { q: "Superlative of 'No other man is as wise as he.'", opts: ["He is the wisest", "He is wiser than others", "He is wise", "Many are wise"], a: 0, ex: "Superlative." },
      { q: "Affirmative of 'No one but God knows the truth.'", opts: ["Only God knows the truth", "All know the truth", "No one knows", "God doesn't know"], a: 0, ex: "Only = none but." },
      { q: "Compound of 'In spite of his poverty, he is happy.'", opts: ["He is poor but happy", "He is poor and happy", "He is happy because of poverty", "He is poor so happy"], a: 0, ex: "But/yet for contrast." },
      { q: "Complex of 'He came too late to find anyone.'", opts: ["He came so late that he found no one", "He came so late that he could not find anyone", "He came late and found no one", "Both A and B"], a: 3, ex: "Both forms." },
      { q: "Exclamatory of 'It is a very pleasant evening.'", opts: ["What a pleasant evening it is!", "How pleasant the evening is!", "Both A and B", "Pleasant evening!"], a: 2, ex: "Both work." },
      { q: "Assertive of 'Why waste time?'", opts: ["It is useless to waste time", "Don't waste time", "Time is precious", "All correct"], a: 0, ex: "Rhetorical → assertive." },
      { q: "Comparative of 'Iron is the most useful metal.'", opts: ["Iron is more useful than any other metal", "Iron is useful", "Iron is more useful", "No other metal is useful"], a: 0, ex: "Comparative form." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 24. SYNTHESIS OF SENTENCES
  // ───────────────────────────────────────────────────────────────
  T["eng-synthesis"] = {
    body: `
      <h2>Synthesis of Sentences</h2>
      <p><b>Synthesis</b> = combining two or more simple sentences into one compact sentence (without losing meaning).</p>

      <h3>Methods of Synthesis</h3>

      <h3>1. Using a Participle</h3>
      <ul>
        <li>"He took his pen. He started writing." → "<b>Taking</b> his pen, he started writing."</li>
        <li>"She heard the news. She was shocked." → "<b>Hearing</b> the news, she was shocked."</li>
        <li>Use Present Participle (V-ing) for simultaneous action, Past Participle (V3) for completed action.</li>
      </ul>

      <h3>2. Using a Noun or Phrase in Apposition</h3>
      <ul>
        <li>"Rajesh is my friend. He lives in Delhi." → "Rajesh, <b>my friend</b>, lives in Delhi."</li>
        <li>"Akbar was a great emperor. He built many monuments." → "Akbar, <b>a great emperor</b>, built many monuments."</li>
      </ul>

      <h3>3. Using a Preposition with a Noun or Gerund</h3>
      <ul>
        <li>"He worked hard. He passed the exam." → "<b>By</b> working hard, he passed the exam."</li>
        <li>"He bought a car. He spent a lot of money." → "He spent a lot of money <b>on</b> buying a car."</li>
      </ul>

      <h3>4. Using a Nominative Absolute</h3>
      <ul>
        <li>"The sun rose. We set out." → "<b>The sun having risen</b>, we set out."</li>
        <li>"The work was done. I left." → "<b>The work being done</b>, I left."</li>
      </ul>

      <h3>5. Using an Infinitive</h3>
      <ul>
        <li>"He has many books. He should read them." → "He has many books <b>to read</b>."</li>
        <li>"I have a duty. I must perform it." → "I have a duty <b>to perform</b>."</li>
      </ul>

      <h3>6. Using a Relative Clause (Adjective Clause)</h3>
      <ul>
        <li>"That is the man. He helped me." → "That is the man <b>who helped me</b>."</li>
        <li>"This is the book. I bought it yesterday." → "This is the book <b>which I bought yesterday</b>."</li>
      </ul>

      <h3>7. Using a Conjunction (Compound Sentence)</h3>
      <ul>
        <li>"He is rich. He is unhappy." → "He is rich <b>but</b> unhappy."</li>
        <li>"Work hard. You will succeed." → "Work hard <b>and</b> you will succeed."</li>
      </ul>

      <h3>8. Using a Subordinate Conjunction (Complex Sentence)</h3>
      <ul>
        <li>"He is poor. He is honest." → "<b>Although</b> he is poor, he is honest."</li>
        <li>"You work hard. You will succeed." → "<b>If</b> you work hard, you will succeed."</li>
      </ul>

      <h3>9. Using "Too ... to" / "So ... that"</h3>
      <ul>
        <li>"He is very weak. He cannot walk." → "He is <b>too weak to walk</b>." / "He is <b>so weak that</b> he cannot walk."</li>
      </ul>

      <h3>10. Using "Both ... and / Either ... or / Neither ... nor / Not only ... but also"</h3>
      <ul>
        <li>"Ram is intelligent. He is hardworking." → "Ram is <b>both</b> intelligent <b>and</b> hardworking."</li>
        <li>"He doesn't drink. He doesn't smoke." → "He <b>neither</b> drinks <b>nor</b> smokes."</li>
      </ul>

      <h3>🔥 Tricks</h3>
      <ul>
        <li>Use participle (V-ing / V3) for connecting two actions.</li>
        <li>Use relative pronoun (who/which/that) for noun + descriptive clause.</li>
        <li>Use "if/because/although/when" to connect with cause/condition/contrast/time.</li>
        <li>Use "too...to" / "so...that" for excessive degree.</li>
        <li>Use correlatives (both/and, either/or, neither/nor) for paired items.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p><b>Combine</b>: "He saw the danger. He ran away."</p>
      <p><b>Solution:</b><br>Using participle: "<b>Seeing</b> the danger, he ran away."<br>OR Using complex: "<b>When he saw</b> the danger, he ran away."</p>

      <h4>Example 2</h4>
      <p><b>Combine</b>: "He is poor. He is honest."</p>
      <p><b>Solution:</b><br>Using "although": "<b>Although</b> he is poor, he is honest."<br>OR using "but": "He is poor <b>but</b> honest."</p>

      <h4>Example 3</h4>
      <p><b>Combine</b>: "She finished her work. She went home."</p>
      <p><b>Solution:</b><br>"<b>Having finished</b> her work, she went home."<br>OR "<b>After finishing</b> her work, she went home."</p>

      <h4>Example 4</h4>
      <p><b>Combine</b>: "The boy is my brother. He is wearing red."</p>
      <p><b>Solution:</b><br>"The boy <b>who is wearing red</b> is my brother."</p>

      <h4>Example 5</h4>
      <p><b>Combine</b>: "Ravi is a doctor. Ravi lives next door."</p>
      <p><b>Solution:</b><br>"Ravi, <b>a doctor</b>, lives next door." (apposition)<br>OR "Ravi, <b>who is a doctor</b>, lives next door."</p>

      <h4>Example 6</h4>
      <p><b>Combine</b>: "He worked very hard. He fell ill."</p>
      <p><b>Solution:</b><br>"He worked <b>so</b> hard <b>that</b> he fell ill."<br>OR "<b>By</b> working too hard, he fell ill."</p>

      <h4>Example 7</h4>
      <p><b>Combine</b>: "He is rich. He has many cars."</p>
      <p><b>Solution:</b><br>"<b>Being</b> rich, he has many cars."<br>OR "<b>Because</b> he is rich, he has many cars."</p>

      <h4>Example 8</h4>
      <p><b>Combine</b>: "Open the book. Start reading."</p>
      <p><b>Solution:</b><br>"<b>Open</b> the book <b>and start reading</b>." (compound)</p>

      <h4>Example 9</h4>
      <p><b>Combine</b>: "He came in. He sat down."</p>
      <p><b>Solution:</b><br>"<b>Coming in</b>, he sat down."<br>OR "He came in <b>and sat down</b>."</p>

      <h4>Example 10</h4>
      <p><b>Combine</b>: "The sun rose. The fog cleared."</p>
      <p><b>Solution:</b><br>"<b>The sun having risen</b>, the fog cleared." (nominative absolute)<br>OR "<b>When the sun rose</b>, the fog cleared."</p>

      <h4>Example 11</h4>
      <p><b>Combine</b>: "He took out his wallet. He paid the bill."</p>
      <p><b>Solution:</b><br>"<b>Taking out</b> his wallet, he paid the bill."</p>

      <h4>Example 12</h4>
      <p><b>Combine</b>: "He is too weak. He cannot walk."</p>
      <p><b>Solution:</b><br>"He is <b>too weak to walk</b>."</p>

      <h4>Example 13</h4>
      <p><b>Combine</b>: "He passed the exam. He worked hard."</p>
      <p><b>Solution:</b><br>"<b>Because</b> he worked hard, he passed the exam."<br>OR "He worked hard <b>and</b> passed the exam."</p>

      <h4>Example 14</h4>
      <p><b>Combine</b>: "Ram is brave. Shyam is brave."</p>
      <p><b>Solution:</b><br>"<b>Both</b> Ram <b>and</b> Shyam are brave."</p>

      <h4>Example 15</h4>
      <p><b>Combine</b>: "He doesn't sing. He doesn't dance."</p>
      <p><b>Solution:</b><br>"He <b>neither sings nor dances</b>."</p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>Use participle (V-ing / having + V3) for connecting actions of the same subject.</li>
        <li>Use relative clauses for describing nouns.</li>
        <li>"Too ... to" = excessive negative; "So ... that ... not" = same meaning.</li>
        <li>Conjunction choice depends on the relationship: addition (and), contrast (but/although), cause (because/since), time (when/after), condition (if).</li>
      </ul>
    `,
    mcq: [
      { q: "Combine: 'He took a pen. He wrote a letter.'", opts: ["He took a pen and a letter", "Taking a pen, he wrote a letter", "He took to write", "Letter, he wrote"], a: 1, ex: "Participle for connected actions." },
      { q: "Combine: 'He is poor. He is honest.'", opts: ["He is poor and honest", "Although he is poor, he is honest", "Both A and B", "He is poor because honest"], a: 2, ex: "Both work." },
      { q: "Combine: 'He is my friend. He lives in Mumbai.'", opts: ["He is my friend who lives in Mumbai", "My friend, he lives in Mumbai", "He is my friend, my friend lives in Mumbai", "Both A and 'My friend lives in Mumbai'"], a: 3, ex: "Relative clause or apposition." },
      { q: "Combine: 'He is too tired. He cannot walk.'", opts: ["He is too tired to walk", "He is so tired he cannot walk", "He is tired walking", "Both A and B"], a: 3, ex: "Too...to / So...that." },
      { q: "Combine: 'Tell the truth. You will be respected.'", opts: ["Tell the truth and you will be respected", "If you tell the truth, you will be respected", "Both A and B", "Telling truth makes respected"], a: 2, ex: "Both work." },
      { q: "Combine: 'She likes coffee. She likes tea.'", opts: ["She likes both coffee and tea", "She likes coffee or tea", "Both A correct", "She likes coffee and also tea"], a: 0, ex: "Both...and." },
      { q: "Combine: 'He worked hard. He passed the exam.'", opts: ["By working hard, he passed", "He worked hard so passed", "Because he worked hard, he passed", "All correct"], a: 3, ex: "Multiple methods." },
      { q: "Combine: 'She heard the news. She fainted.'", opts: ["Hearing the news, she fainted", "On hearing the news, she fainted", "She heard the news and fainted", "All correct"], a: 3, ex: "Multiple options." },
      { q: "Combine: 'He doesn't read. He doesn't write.'", opts: ["He neither reads nor writes", "He doesn't read or write", "He neither read nor written", "Both A and B work"], a: 3, ex: "Both forms valid." },
      { q: "Combine: 'He came. He saw. He conquered.'", opts: ["He came saw and conquered", "He came, saw, and conquered", "After coming and seeing, he conquered", "All correct"], a: 3, ex: "Multiple methods." },
      { q: "Combine: 'The sun set. We went home.'", opts: ["The sun having set, we went home", "When the sun set, we went home", "Both correct", "After the sun setting we went"], a: 2, ex: "Both forms valid." },
      { q: "Combine: 'He is a doctor. He is competent.'", opts: ["He is a competent doctor", "He, a doctor, is competent", "He is a doctor and competent", "All correct"], a: 3, ex: "Multiple synthesis methods." },
      { q: "Combine: 'She has work. She must finish it.'", opts: ["She has work to finish", "She has work and must finish", "Both A and B", "She finishes work to her"], a: 2, ex: "Infinitive or compound." },
      { q: "Combine: 'I saw him. He was crying.'", opts: ["I saw him crying", "I saw he was crying", "Both A and B", "I and he were crying"], a: 2, ex: "Both work." },
      { q: "Combine: 'He is very intelligent. He is very dutiful.'", opts: ["He is very intelligent and dutiful", "He is both intelligent and dutiful", "He is intelligent as well as dutiful", "All correct"], a: 3, ex: "Multiple forms." },
      { q: "Combine: 'He confessed. He had done wrong.'", opts: ["He confessed he had done wrong", "He confessed that he had done wrong", "Confessing, he done wrong", "Both A and B"], a: 3, ex: "Both work." },
      { q: "Combine: 'I'll go. I'll meet him.'", opts: ["I'll go to meet him", "I'll go and meet him", "I will go meeting him", "Both A and B"], a: 3, ex: "Infinitive or compound." },
      { q: "Combine: 'It rained. The match was cancelled.'", opts: ["It rained and the match was cancelled", "Because it rained, the match was cancelled", "The match was cancelled because of rain", "All correct"], a: 3, ex: "Multiple forms." },
      { q: "Combine: 'The boy is sick. He is in the hospital.'", opts: ["The boy who is sick is in the hospital", "The sick boy is in the hospital", "Both A and B", "Boy sick hospital"], a: 2, ex: "Multiple forms." },
      { q: "Combine: 'He worked hard. He failed.'", opts: ["He worked hard but failed", "Although he worked hard, he failed", "Despite working hard, he failed", "All correct"], a: 3, ex: "Contrast — multiple methods." },
      { q: "Combine: 'He saw a snake. He killed it.'", opts: ["Seeing a snake, he killed it", "On seeing a snake, he killed it", "He saw a snake and killed it", "All correct"], a: 3, ex: "Multiple methods." },
      { q: "Combine: 'He is the man. I saw him yesterday.'", opts: ["He is the man whom I saw yesterday", "He is the man I saw yesterday", "Both A and B", "He, the man, saw yesterday"], a: 2, ex: "Relative clause." },
      { q: "Combine: 'The dog barked. The thief ran away.'", opts: ["When the dog barked, the thief ran away", "The dog barking, the thief ran away", "The dog barked and the thief ran away", "All correct"], a: 3, ex: "Multiple forms." },
      { q: "Combine: 'Children love sweets. Adults love sweets too.'", opts: ["Both children and adults love sweets", "Children, as well as adults, love sweets", "Not only children but also adults love sweets", "All correct"], a: 3, ex: "Correlative options." },
      { q: "Combine: 'He is rich. He is happy.'", opts: ["He is rich and happy", "He is both rich and happy", "Being rich, he is happy", "All correct"], a: 3, ex: "Multiple forms work." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 25. SENTENCE REARRANGEMENT (Para Jumbles)
  // ───────────────────────────────────────────────────────────────
  T["eng-rearrangement"] = {
    body: `
      <h2>Sentence Rearrangement (Para Jumbles)</h2>
      <p>SSC presents jumbled sentences (labelled S1, S2, S3... or P, Q, R, S) — you arrange them into a logical paragraph. <b>5-7 questions in CGL Tier 1.</b></p>

      <h3>Approach (THE 5-STEP METHOD)</h3>

      <h4>Step 1: Read All Sentences</h4>
      <p>Get the gist of the paragraph — what's the topic? Don't rearrange yet.</p>

      <h4>Step 2: Find the Opening Sentence</h4>
      <p>Opening sentence:</p>
      <ul>
        <li>Introduces a topic / character / event with full names or definite reference.</li>
        <li>Uses indefinite articles (a, an) for new things.</li>
        <li>Doesn't begin with pronouns (he, she, it, they) because there's no antecedent yet.</li>
        <li>Doesn't begin with linking words (however, therefore, so, but, thus, also).</li>
      </ul>

      <h4>Step 3: Find the Closing Sentence</h4>
      <p>Closing sentence:</p>
      <ul>
        <li>Often has a conclusion, summary, or consequence.</li>
        <li>Words like "thus", "therefore", "hence", "finally", "in conclusion", "as a result".</li>
        <li>May give the moral / final outcome.</li>
      </ul>

      <h4>Step 4: Connect Sentences Using Clues</h4>

      <h5>(a) Pronoun References</h5>
      <p>"He, she, it, they, this, these, those" refer to something mentioned BEFORE.</p>
      <ul>
        <li>"<b>The man</b> was tired. <b>He</b> went home."<br>(Sentence with "He" comes AFTER the one introducing "The man".)</li>
      </ul>

      <h5>(b) Articles</h5>
      <ul>
        <li><b>a/an</b> = introducing new noun → earlier sentence.</li>
        <li><b>the</b> = referring back to known noun → later sentence.</li>
        <li>"<b>A</b> boy entered the room. <b>The</b> boy was crying." (1st intro, 2nd refer back)</li>
      </ul>

      <h5>(c) Time / Sequence Markers</h5>
      <ul>
        <li>"First, then, next, after that, finally" — give clear order.</li>
        <li>"Earlier, later, before, after" — give relative order.</li>
        <li>"Yesterday, today, tomorrow" — chronological.</li>
      </ul>

      <h5>(d) Connecting Words / Conjunctions</h5>
      <table>
        <tr><th>Word</th><th>Function</th><th>What it tells you</th></tr>
        <tr><td>However, but, yet</td><td>Contrast</td><td>Previous statement is being opposed</td></tr>
        <tr><td>Therefore, hence, thus, so</td><td>Result</td><td>Previous gives the cause</td></tr>
        <tr><td>Moreover, furthermore, also</td><td>Addition</td><td>Adds to previous point</td></tr>
        <tr><td>For example, for instance</td><td>Illustration</td><td>Illustrates previous statement</td></tr>
        <tr><td>In contrast, on the other hand</td><td>Opposite view</td><td>Switching to other side</td></tr>
        <tr><td>In short, in conclusion, to sum up</td><td>Summary</td><td>Likely the LAST sentence</td></tr>
        <tr><td>Indeed, in fact</td><td>Emphasis / clarification</td><td>Reinforces previous point</td></tr>
      </table>

      <h5>(e) Repeated Words / Topic Continuity</h5>
      <p>If sentence A talks about "X" and sentence B continues "X", they're likely adjacent.</p>

      <h5>(f) Cause-Effect Chains</h5>
      <p>If P talks about cause and Q about effect → P before Q.</p>

      <h4>Step 5: Verify by Reading</h4>
      <p>Read your final order aloud — it should flow naturally without abrupt jumps.</p>

      <h3>🔥 Master Tricks</h3>
      <ul>
        <li><b>Identify pairs first</b>: which 2 sentences MUST go together? (e.g., one introduces X, another uses "he"/"the X")</li>
        <li><b>Eliminate options</b>: even if not sure of full order, eliminate wrong choices to narrow down.</li>
        <li><b>Acronyms / Full forms</b>: full form comes before acronym usage.</li>
        <li><b>Q-A logic</b>: question sentence comes before its answer/explanation.</li>
        <li>Beware of "But/However" — they connect contrasting ideas; check what goes before.</li>
      </ul>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p>Arrange P, Q, R, S:<br>
      P. He saw a beautiful garden.<br>
      Q. The boy went for a walk.<br>
      R. He decided to enter.<br>
      S. The garden was full of flowers.</p>
      <p><b>Solution:</b><br>Q introduces "the boy" → first.<br>"He saw..." (P) — refers to the boy → second.<br>"The garden was full of flowers" (S) — refers to garden in P → third.<br>"He decided to enter" (R) — concludes → fourth.<br><b>Order: Q-P-S-R</b></p>

      <h4>Example 2</h4>
      <p>Arrange P, Q, R, S:<br>
      P. It was a sunny day.<br>
      Q. So I decided to go to the beach.<br>
      R. I had been planning this for weeks.<br>
      S. The sand was warm and the water clear.</p>
      <p><b>Solution:</b><br>R sets context → first.<br>P (sunny day) → second.<br>Q ("So" = consequence) → third.<br>S (description of beach) → fourth.<br><b>Order: R-P-Q-S</b></p>

      <h4>Example 3</h4>
      <p>Arrange:<br>
      P. They first appeared in the early 1900s.<br>
      Q. Cars have transformed modern transportation.<br>
      R. Today, they are essential in daily life.<br>
      S. Initially, only the rich could afford them.</p>
      <p><b>Solution:</b><br>Q introduces topic "Cars".<br>P uses "They" (cars).<br>S (Initially) follows the historical narrative.<br>R (Today) is the conclusion.<br><b>Order: Q-P-S-R</b></p>

      <h4>Example 4</h4>
      <p>Arrange:<br>
      P. However, exercise is equally important.<br>
      Q. Diet is the most important factor.<br>
      R. A balanced lifestyle includes both.<br>
      S. Most people focus only on food.</p>
      <p><b>Solution:</b><br>S introduces the context (most people).<br>Q makes a claim (diet most important).<br>P contrasts ("However").<br>R concludes (lifestyle includes both).<br><b>Order: S-Q-P-R</b></p>

      <h4>Example 5</h4>
      <p>Arrange:<br>
      P. The teacher praised him.<br>
      Q. Ram was a hardworking student.<br>
      R. He topped the exam.<br>
      S. He studied for hours daily.</p>
      <p><b>Solution:</b><br>Q introduces Ram.<br>S describes his work.<br>R is the result.<br>P is the consequence.<br><b>Order: Q-S-R-P</b></p>

      <h4>Example 6</h4>
      <p>Arrange:<br>
      P. It hovered for a moment.<br>
      Q. A small bird flew into the room.<br>
      R. Then it flew out through the open window.<br>
      S. We were all surprised.</p>
      <p><b>Solution:</b><br>Q introduces (a small bird).<br>P uses "It".<br>R follows ("Then").<br>S concludes.<br><b>Order: Q-P-R-S</b></p>

      <h4>Example 7</h4>
      <p>Arrange:<br>
      P. In conclusion, success requires both.<br>
      Q. Hard work is essential.<br>
      R. But luck also plays a role.<br>
      S. Many believe talent is everything.</p>
      <p><b>Solution:</b><br>S introduces a view.<br>Q states main idea.<br>R contrasts ("But").<br>P concludes.<br><b>Order: S-Q-R-P</b></p>

      <h4>Example 8</h4>
      <p>Arrange:<br>
      P. He took a deep breath.<br>
      Q. The students entered the exam hall.<br>
      R. The clock struck nine.<br>
      S. Then the bell rang for them to begin.</p>
      <p><b>Solution:</b><br>R is opening time.<br>Q follows.<br>P after.<br>S concludes ("Then bell rang").<br><b>Order: R-Q-P-S</b></p>

      <h4>Example 9</h4>
      <p>Arrange:<br>
      P. Trees give us oxygen.<br>
      Q. We must therefore protect them.<br>
      R. They are vital for life.<br>
      S. Without them, life is impossible.</p>
      <p><b>Solution:</b><br>P introduces trees.<br>R adds ("They").<br>S elaborates.<br>Q concludes ("therefore").<br><b>Order: P-R-S-Q</b></p>

      <h4>Example 10</h4>
      <p>Arrange:<br>
      P. He decided to ask his father.<br>
      Q. He was confused about his career.<br>
      R. His father listened patiently.<br>
      S. Ravi had just finished college.</p>
      <p><b>Solution:</b><br>S introduces Ravi.<br>Q follows ("He").<br>P is decision.<br>R is response.<br><b>Order: S-Q-P-R</b></p>

      <h3>🎯 Common Traps</h3>
      <ul>
        <li>Pronouns can't appear without antecedent → check who/what they refer to.</li>
        <li>Connectors (however, therefore, but) need a clear previous idea.</li>
        <li>Articles: a/an introduces; the refers back.</li>
        <li>Time markers (first, then, finally) give explicit order.</li>
      </ul>
    `,
    mcq: [
      { q: "P: He took the bag. Q: The boy entered. R: He left. S: Then he opened it. Order?", opts: ["QPSR", "QPRS", "PQRS", "QPSR"], a: 0, ex: "Q intro, P action, S then, R end." },
      { q: "P: It was raining. Q: I took an umbrella. R: I went out. S: I returned wet. Order?", opts: ["PQRS", "PRQS", "RPQS", "QRPS"], a: 0, ex: "Weather → umbrella → went → wet." },
      { q: "P: But she refused. Q: They asked her to sing. R: A beautiful singer was at the party. S: The host insisted. Order?", opts: ["RQPS", "RQSP", "RPQS", "PQRS"], a: 0, ex: "R intro, Q request, P refusal, S insist." },
      { q: "P: He was a good leader. Q: Gandhi led the freedom movement. R: He inspired millions. S: His ideals are remembered today. Order?", opts: ["QPRS", "QRPS", "PQRS", "QPSR"], a: 0, ex: "Intro → trait → impact → legacy." },
      { q: "P: Trees give oxygen. Q: We need them. R: They are essential. S: Save trees. Order?", opts: ["PRQS", "PRSQ", "QPRS", "PQRS"], a: 0, ex: "Fact → essential → need → action." },
      { q: "P: The phone rang. Q: It was urgent. R: He picked it up. S: He listened carefully. Order?", opts: ["PRQS", "PRSQ", "PQRS", "PSRQ"], a: 0, ex: "Ring → pick → urgent → listen." },
      { q: "P: They built houses. Q: Early humans lived in caves. R: Then they learned farming. S: Civilization grew. Order?", opts: ["QRPS", "QPRS", "QRSP", "PQRS"], a: 0, ex: "Caves → farming → houses → civilization." },
      { q: "P: She arrived early. Q: But the train was late. R: Mary had a meeting. S: So she had to wait. Order?", opts: ["RPQS", "RPSQ", "RQPS", "PQRS"], a: 0, ex: "Mary → arrived → train late → wait." },
      { q: "P: Therefore practice is key. Q: Skills need practice. R: Mastery takes years. S: Without it, no growth. Order?", opts: ["QRSP", "QSRP", "QRPS", "RPQS"], a: 0, ex: "Skills → years → without → therefore." },
      { q: "P: He felt happy. Q: His hard work paid off. R: He topped the class. S: He had studied for months. Order?", opts: ["SRPQ", "SRQP", "RSPQ", "PSQR"], a: 0, ex: "Studied → topped → happy → paid off." },
      { q: "P: He bought a ticket. Q: He boarded the train. R: He reached the station. S: He arrived home. Order?", opts: ["RPQS", "PRQS", "RPSQ", "PQRS"], a: 0, ex: "Station → ticket → board → home." },
      { q: "P: Books are companions. Q: They never leave us. R: They teach us. S: We must read more. Order?", opts: ["PRQS", "PQRS", "PRSQ", "RPQS"], a: 0, ex: "Companions → teach → never leave → read." },
      { q: "P: A man entered. Q: He was wearing black. R: Everyone stared at him. S: The room fell silent. Order?", opts: ["PQRS", "PQSR", "SPQR", "PRQS"], a: 0, ex: "Man → wearing → stared → silent." },
      { q: "P: They went out. Q: It was raining. R: They got wet. S: They forgot umbrellas. Order?", opts: ["QPSR", "QPRS", "QSPR", "PQRS"], a: 2, ex: "Rain → forgot → went → wet." },
      { q: "P: She studies hard. Q: She wants to become a doctor. R: It is her dream. S: She helps people. Order?", opts: ["QRPS", "QPRS", "RQPS", "PQRS"], a: 0, ex: "Wants → dream → studies → helps." },
      { q: "P: Music soothes. Q: It can heal pain. R: It brings joy. S: Music is therapy. Order?", opts: ["SPRQ", "SPQR", "PSRQ", "PQRS"], a: 0, ex: "Music therapy → soothes → joy → heal." },
      { q: "P: The fire spread. Q: A spark fell. R: Trees burned. S: Forest was destroyed. Order?", opts: ["QPRS", "QPSR", "QRPS", "PQRS"], a: 0, ex: "Spark → spread → burned → destroyed." },
      { q: "P: I called for help. Q: Help arrived soon. R: I was relieved. S: I was in trouble. Order?", opts: ["SPQR", "SPRQ", "PSQR", "PSRQ"], a: 0, ex: "Trouble → called → arrived → relieved." },
      { q: "P: He is rich. Q: But he is unhappy. R: Money cannot buy happiness. S: He has everything. Order?", opts: ["PSQR", "SPQR", "PQRS", "PSRQ"], a: 0, ex: "Rich → has everything → unhappy → money can't." },
      { q: "P: We celebrated. Q: We won the match. R: Our team practised hard. S: The trophy was ours. Order?", opts: ["RQSP", "RQPS", "QRPS", "RSQP"], a: 0, ex: "Practised → won → trophy → celebrated." },
      { q: "P: She prepared dinner. Q: Guests were arriving. R: She set the table. S: She greeted them warmly. Order?", opts: ["QPRS", "QPRS", "PQRS", "QPRS"], a: 0, ex: "Guests coming → prepared → set → greeted." },
      { q: "P: The bell rang. Q: Students rushed out. R: The school day ended. S: It was 3 PM. Order?", opts: ["SPRQ", "SPQR", "SRPQ", "PSRQ"], a: 0, ex: "3PM → bell → ended → rushed." },
      { q: "P: She passed with honours. Q: Her parents were proud. R: She worked tirelessly. S: She prepared for the exam. Order?", opts: ["SRPQ", "SRQP", "RSPQ", "SPQR"], a: 0, ex: "Prepared → tirelessly → passed → proud." },
      { q: "P: Pollution harms health. Q: Many people are falling sick. R: We must act. S: Air pollution is rising. Order?", opts: ["SPQR", "SPRQ", "PSQR", "SQPR"], a: 0, ex: "Rising → harms → sick → act." },
      { q: "P: The mango is ripe. Q: It is sweet. R: I picked it. S: I ate it. Order?", opts: ["PRQS", "PRSQ", "PQRS", "RPQS"], a: 1, ex: "Ripe → picked → ate → sweet." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 26. ERROR DETECTION (Spotting Errors)
  // ───────────────────────────────────────────────────────────────
  T["eng-error-detection"] = {
    body: `
      <h2>Error Detection (Spotting Errors)</h2>
      <p>Sentence is divided into 3-4 parts. You identify the part with an error. <b>SSC asks 4-5 questions of this type</b>. This is a SUMMARY of all grammar rules.</p>

      <h3>Top 30 Error Patterns in SSC (HIGH FREQUENCY)</h3>

      <h3>1. Subject-Verb Agreement (SVA)</h3>
      <ul>
        <li>Each, every, none + singular: "Each of the boys <b>is</b> here" not "are".</li>
        <li>Either/Neither + singular: "Neither of them <b>has</b> come".</li>
        <li>"A number of" + plural; "The number of" + singular.</li>
        <li>Collective nouns: team, family, jury — usually singular.</li>
        <li>Two subjects joined by "and" → plural. Joined by "or/nor" → verb agrees with nearer.</li>
        <li>"News, mathematics, physics, politics" — singular despite -s.</li>
      </ul>

      <h3>2. Pronoun Errors</h3>
      <ul>
        <li>Wrong case: "Between you and <b>me</b>" (not I); "Let <b>him</b> go" (not he).</li>
        <li>Reflexive misuse: "He hurt <b>himself</b>" not "his self".</li>
        <li>"One should keep <b>one's</b> word" (not his).</li>
        <li>"Whose" (poss) vs "who's" (who is).</li>
        <li>Wrong pronoun number: each/every/-body/-one → singular pronoun (his/her, his).</li>
      </ul>

      <h3>3. Article Errors</h3>
      <ul>
        <li>"A" before consonant sound; "an" before vowel sound.</li>
        <li>"A university" (you-niversity), "an hour" (silent h).</li>
        <li>"The" with superlatives, unique things, ordinals.</li>
        <li>No article with abstract / uncountable / proper nouns.</li>
        <li>"Play the piano" (the with instruments), "play football" (no the with sports).</li>
      </ul>

      <h3>4. Preposition Errors</h3>
      <ul>
        <li>"Different from" not "different than".</li>
        <li>"Married to" not "married with".</li>
        <li>"Discuss" no preposition; "investigate" no preposition; "reach" no preposition.</li>
        <li>"On" Sunday, "in" January, "at" 5 PM.</li>
        <li>"In" 2024, "on" 21st June, "at" night.</li>
        <li>"Suffer from" disease; "Compare with" / "Compare to".</li>
      </ul>

      <h3>5. Tense Errors</h3>
      <ul>
        <li>"Since" + Perfect tense (Have/Has/Had).</li>
        <li>"For" + duration.</li>
        <li>"Yesterday, ago, last week" + Simple Past.</li>
        <li>"Already, ever, never, just" + Present Perfect.</li>
        <li>Reported speech: shift tense back.</li>
      </ul>

      <h3>6. Adjective/Adverb Errors</h3>
      <ul>
        <li>"Fast, hard, late" — same form for adj and adv.</li>
        <li>"Hardly/scarcely" mean "almost not".</li>
        <li>Comparative for 2; Superlative for 3+.</li>
        <li>"Less" for uncountable; "fewer" for countable.</li>
        <li>"Much" for uncountable; "many" for countable.</li>
      </ul>

      <h3>7. Conjunction Errors</h3>
      <ul>
        <li>"Either ... or" / "Neither ... nor" — paired correctly.</li>
        <li>"No sooner ... than" (not "no sooner ... when").</li>
        <li>"Scarcely ... when" / "Hardly ... when".</li>
        <li>"Not only ... but also" — parallel structure.</li>
        <li>"Although/though" cannot pair with "but".</li>
        <li>"Lest" + should + V1 (negative purpose).</li>
      </ul>

      <h3>8. Confused Words (Frequent)</h3>
      <table>
        <tr><th>Word 1</th><th>Word 2</th><th>Difference</th></tr>
        <tr><td>Affect (verb)</td><td>Effect (noun)</td><td>To influence vs result</td></tr>
        <tr><td>Among</td><td>Between</td><td>Many vs two</td></tr>
        <tr><td>Less</td><td>Fewer</td><td>Uncountable vs countable</td></tr>
        <tr><td>Beside</td><td>Besides</td><td>Next to vs in addition</td></tr>
        <tr><td>Farther</td><td>Further</td><td>Distance vs extent</td></tr>
        <tr><td>Lay</td><td>Lie</td><td>Place vs recline</td></tr>
        <tr><td>Borrow</td><td>Lend</td><td>Take vs give</td></tr>
        <tr><td>Bring</td><td>Take</td><td>Towards speaker vs away</td></tr>
        <tr><td>Each other</td><td>One another</td><td>Two vs more than two</td></tr>
        <tr><td>Practice (n)</td><td>Practise (v)</td><td>British spelling</td></tr>
      </table>

      <h3>9. Order of Adjectives</h3>
      <p>OSASCOMP: Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose.</p>

      <h3>10. Redundancy</h3>
      <p>Return back ❌, repeat again ❌, free gift ❌, each and every ❌.</p>

      <h3>🔥 Spotting Approach</h3>
      <ol>
        <li>Read whole sentence first to get meaning.</li>
        <li>Check verb-subject agreement (singular/plural).</li>
        <li>Check tense consistency.</li>
        <li>Check articles (a/an/the).</li>
        <li>Check prepositions.</li>
        <li>Check pronoun case and reference.</li>
        <li>Check word choice (affect/effect etc).</li>
      </ol>

      <h3>Solved Examples</h3>

      <h4>Example 1</h4>
      <p>"<u>Each of the boys</u> (a) <u>are present</u> (b) <u>in class</u> (c) <u>today</u> (d). No error (e)."</p>
      <p><b>Solution:</b><br>"Each + singular verb".<br>Error in (b): should be "<b>is</b> present".</p>

      <h4>Example 2</h4>
      <p>"<u>She is</u> (a) <u>more better</u> (b) <u>than her sister</u> (c) <u>in maths</u> (d)."</p>
      <p><b>Solution:</b><br>"Better" already comparative.<br>Error in (b): "<b>better</b>" (remove "more").</p>

      <h4>Example 3</h4>
      <p>"<u>He has</u> (a) <u>been working</u> (b) <u>since</u> (c) <u>three hours</u> (d)."</p>
      <p><b>Solution:</b><br>"Since" + point of time; "for" + duration.<br>Error in (d): "<b>for three hours</b>".</p>

      <h4>Example 4</h4>
      <p>"<u>The Ramayana</u> (a) <u>is</u> (b) <u>great epic</u> (c) <u>of India</u> (d)."</p>
      <p><b>Solution:</b><br>Missing "a".<br>Error in (c): "<b>a great epic</b>".</p>

      <h4>Example 5</h4>
      <p>"<u>One should</u> (a) <u>respect</u> (b) <u>his parents</u> (c) <u>always</u> (d)."</p>
      <p><b>Solution:</b><br>"One" → "one's", not "his".<br>Error in (c): "<b>one's parents</b>".</p>

      <h4>Example 6</h4>
      <p>"<u>The jury</u> (a) <u>were divided</u> (b) <u>in their opinion</u> (c) <u>about the case</u> (d)."</p>
      <p><b>Solution:</b><br>When jury is divided, treat as plural — "were" is correct. NO ERROR.</p>

      <h4>Example 7</h4>
      <p>"<u>He is</u> (a) <u>junior than</u> (b) <u>me</u> (c) <u>by two years</u> (d)."</p>
      <p><b>Solution:</b><br>"Junior to" not "junior than".<br>Error in (b): "<b>junior to</b>".</p>

      <h4>Example 8</h4>
      <p>"<u>I have been</u> (a) <u>knowing him</u> (b) <u>since 2010</u> (c) <u>and we are friends</u> (d)."</p>
      <p><b>Solution:</b><br>"Know" is stative — no continuous.<br>Error in (b): "<b>known him</b>".</p>

      <h4>Example 9</h4>
      <p>"<u>If I was</u> (a) <u>rich</u> (b) <u>I would buy</u> (c) <u>a car</u> (d)."</p>
      <p><b>Solution:</b><br>Type 2 conditional → "If I <b>were</b>".<br>Error in (a): "<b>If I were</b>".</p>

      <h4>Example 10</h4>
      <p>"<u>Neither he</u> (a) <u>nor his friends</u> (b) <u>has come</u> (c) <u>to the party</u> (d)."</p>
      <p><b>Solution:</b><br>Verb agrees with nearer subject "friends" → plural.<br>Error in (c): "<b>have come</b>".</p>

      <h4>Example 11</h4>
      <p>"<u>The number</u> (a) <u>of students</u> (b) <u>are</u> (c) <u>increasing</u> (d)."</p>
      <p><b>Solution:</b><br>"The number" → singular.<br>Error in (c): "<b>is</b>".</p>

      <h4>Example 12</h4>
      <p>"<u>He returned back</u> (a) <u>from office</u> (b) <u>and slept</u> (c) <u>immediately</u> (d)."</p>
      <p><b>Solution:</b><br>"Return back" is redundant.<br>Error in (a): "<b>He returned</b>".</p>

      <h4>Example 13</h4>
      <p>"<u>He is</u> (a) <u>one of</u> (b) <u>the boys</u> (c) <u>who has come</u> (d)."</p>
      <p><b>Solution:</b><br>"One of the boys who" → plural verb (who refers to boys).<br>Error in (d): "<b>who have come</b>".</p>

      <h4>Example 14</h4>
      <p>"<u>He scarcely</u> (a) <u>finished</u> (b) <u>writing</u> (c) <u>than the bell rang</u> (d)."</p>
      <p><b>Solution:</b><br>"Scarcely ... when" pair.<br>Error in (d): "<b>when the bell rang</b>".</p>

      <h4>Example 15</h4>
      <p>"<u>She is taller</u> (a) <u>than</u> (b) <u>any girl</u> (c) <u>in her class</u> (d)."</p>
      <p><b>Solution:</b><br>"Than any other" — must exclude herself.<br>Error in (c): "<b>any other girl</b>".</p>

      <h3>🎯 Top Tips</h3>
      <ul>
        <li>Memorize verb forms: borrow-lent-lent, lie-lay-lain, lay-laid-laid.</li>
        <li>Check the sentence grammatically AS A WHOLE before marking error.</li>
        <li>If unsure, look for the MOST OBVIOUS error.</li>
        <li>"No error" is sometimes the answer — don't force.</li>
      </ul>
    `,
    mcq: [
      { q: "'(a) Each of the students (b) have submitted (c) their assignments (d) on time. No error (e)'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 1, ex: "Each + has." },
      { q: "'(a) He is (b) more taller (c) than his brother (d). No error (e)'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 1, ex: "More + comparative is wrong." },
      { q: "'(a) I have known (b) him (c) for ten years (d). No error (e)'", opts: ["(a)", "(b)", "(c)", "(d)", "No error"], a: 4, ex: "Sentence is correct." },
      { q: "'(a) She is one (b) of the girls (c) who has come (d) early.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 2, ex: "Who have come." },
      { q: "'(a) Neither Ram (b) nor his friends (c) was present (d) at the party.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 2, ex: "Were (nearer subject plural)." },
      { q: "'(a) I am suffering (b) with fever (c) since (d) yesterday.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 1, ex: "Suffering from fever." },
      { q: "'(a) The number (b) of books (c) are increasing (d) daily.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 2, ex: "Is increasing." },
      { q: "'(a) He is (b) senior than (c) me (d) by 5 years.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 1, ex: "Senior to." },
      { q: "'(a) Each of the four boys (b) have got (c) a medal (d) yesterday.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 1, ex: "Each + has got." },
      { q: "'(a) Returning back from school, (b) the boy was tired (c) and slept (d) immediately.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 0, ex: "Return back redundant." },
      { q: "'(a) She is most (b) intelligent than (c) any of her sisters (d).'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 0, ex: "More intelligent." },
      { q: "'(a) If I was rich, (b) I would (c) buy a car (d) for my father.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 0, ex: "Were (subjunctive)." },
      { q: "'(a) No sooner did he reach (b) the station (c) when the train (d) left.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 2, ex: "Than the train left." },
      { q: "'(a) He as well as (b) his brothers (c) are coming (d) tomorrow.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 2, ex: "Is coming (verb agrees with He)." },
      { q: "'(a) Hardly had I (b) finished my work (c) than the (d) bell rang.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 2, ex: "When the bell rang." },
      { q: "'(a) She has been (b) working hard (c) since five hours (d).'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 2, ex: "For five hours." },
      { q: "'(a) Each one of (b) the boys (c) were present (d) today.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 2, ex: "Was present." },
      { q: "'(a) I prefer (b) tea (c) than coffee (d) any day.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 2, ex: "Prefer X to Y." },
      { q: "'(a) Between you and (b) I, (c) this matter is (d) confidential.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 1, ex: "Between you and me." },
      { q: "'(a) The cattle (b) is grazing (c) in the (d) field.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 1, ex: "Cattle are." },
      { q: "'(a) One should (b) keep his (c) word (d) always.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 1, ex: "One's word." },
      { q: "'(a) She is (b) junior than (c) me (d) in office.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 1, ex: "Junior to." },
      { q: "'(a) He went (b) to the (c) abroad (d) last year.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 1, ex: "No 'the' with abroad." },
      { q: "'(a) The jury (b) was divided (c) in their opinions (d).'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 1, ex: "When divided → 'were'." },
      { q: "'(a) Ten miles (b) are (c) a long (d) distance.'", opts: ["(a)", "(b)", "(c)", "(d)"], a: 1, ex: "'Is' (distance is single concept)." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 27. CLOZE TEST
  // ───────────────────────────────────────────────────────────────
  T["eng-cloze"] = {
    body: `
      <h2>Cloze Test</h2>
      <p>A passage with blanks. You select the best word for each blank from 4 options. <b>SSC asks 5 cloze blanks (one passage)</b>.</p>

      <h3>Approach</h3>

      <h4>Step 1: Read the Whole Passage First</h4>
      <p>Understand the topic, tone (formal/informal), and overall message. Don't just look at blanks.</p>

      <h4>Step 2: For Each Blank, Identify What Part of Speech is Needed</h4>
      <ul>
        <li>Before noun → article / adjective.</li>
        <li>After "to" → verb (V1) or noun.</li>
        <li>After "the" → noun or adjective.</li>
        <li>Between subject and object → verb.</li>
        <li>Between two clauses → conjunction.</li>
      </ul>

      <h4>Step 3: Check Collocations / Common Pairings</h4>
      <p>Some words go together naturally:</p>
      <ul>
        <li>Make / do / take / give / pay → which verb fits?</li>
        <li>"<b>Take</b> a decision", "<b>Make</b> a difference", "<b>Pay</b> attention", "<b>Do</b> homework".</li>
        <li>"Heavy rain", "strong tea", "fast asleep".</li>
      </ul>

      <h4>Step 4: Look at Context Clues</h4>
      <ul>
        <li>Words after blanks: prepositions can hint at the verb (e.g., "rely <b>on</b>", "consist <b>of</b>").</li>
        <li>Words before: articles + adjectives hint at noun coming up.</li>
        <li>Connecting words: but/however hint at contrast; therefore/so hint at result.</li>
      </ul>

      <h4>Step 5: Eliminate Wrong Options</h4>
      <ul>
        <li>Cross out options that don't fit grammatically.</li>
        <li>Cross out options that don't fit the meaning/tone.</li>
        <li>From remaining, choose the most natural-sounding word.</li>
      </ul>

      <h3>🔥 Common Cloze Categories</h3>

      <h4>(a) Prepositions</h4>
      <p>"depends <b>on</b>, rely <b>on</b>, suffer <b>from</b>, consist <b>of</b>, refer <b>to</b>, succeed <b>in</b>"</p>

      <h4>(b) Articles</h4>
      <p>"a/an/the" — based on countable/uncountable, definite/indefinite</p>

      <h4>(c) Tense / Verb Forms</h4>
      <p>Past, present, future, passive — based on context</p>

      <h4>(d) Conjunctions / Linkers</h4>
      <p>"although, however, therefore, moreover, because, since, when"</p>

      <h4>(e) Synonyms in Context</h4>
      <p>Choose the synonym that fits the sentence best</p>

      <h4>(f) Idioms / Phrasal Verbs</h4>
      <p>"give up, look after, put off, take care of"</p>

      <h3>Solved Examples</h3>

      <h4>Example Passage 1</h4>
      <p>Education plays a vital role in (1)__ society. It is not just (2)__ acquiring knowledge but also about developing personality. Children who attend school regularly tend to (3)__ better in life. Parents should (4)__ their children to study sincerely. (5)__, education is the foundation of success.</p>

      <p><b>(1)</b> a) shaped b) shaping c) shape d) shapes<br>
      <b>Solution:</b><br>After "in" → use V-ing form.<br>Answer: <b>(b) shaping</b></p>

      <p><b>(2)</b> a) for b) about c) of d) with<br>
      <b>Solution:</b><br>"about acquiring knowledge" — about is the natural choice.<br>Answer: <b>(b) about</b></p>

      <p><b>(3)</b> a) do b) does c) doing d) did<br>
      <b>Solution:</b><br>After "tend to" → base form V1.<br>Answer: <b>(a) do</b></p>

      <p><b>(4)</b> a) make b) encourage c) tell d) ask<br>
      <b>Solution:</b><br>"Encourage their children to study" — most natural.<br>Answer: <b>(b) encourage</b></p>

      <p><b>(5)</b> a) Therefore b) However c) Although d) But<br>
      <b>Solution:</b><br>Concluding statement → use "Therefore".<br>Answer: <b>(a) Therefore</b></p>

      <h4>Example Passage 2</h4>
      <p>Reading books is (1)__ valuable habit. It helps in (2)__ vocabulary and improving comprehension skills. Moreover, books are excellent (3)__ of knowledge. They (4)__ us about history, culture, and science. (5)__, everyone should cultivate the habit of reading.</p>

      <p><b>(1) Answer:</b> <b>a</b> (consonant sound 'v')</p>
      <p><b>(2) Answer:</b> <b>building</b> (after "in")</p>
      <p><b>(3) Answer:</b> <b>sources</b> (plural after "are excellent")</p>
      <p><b>(4) Answer:</b> <b>tell</b> (tell us about)</p>
      <p><b>(5) Answer:</b> <b>Therefore</b> (conclusion)</p>

      <h3>🎯 Strategy Tips</h3>
      <ul>
        <li>Read full passage first — understanding context beats guessing.</li>
        <li>Make a mental list of common collocations.</li>
        <li>Check options against grammar (POS, tense, agreement).</li>
        <li>If 2 options seem possible, choose the one matching the tone.</li>
        <li>Re-read with your answer filled — does it flow?</li>
      </ul>
    `,
    mcq: [
      { q: "Reading is a __ habit. Choose:", opts: ["good", "well", "best", "better"], a: 0, ex: "Adjective 'good'." },
      { q: "He depends __ his parents. Choose:", opts: ["of", "on", "in", "at"], a: 1, ex: "Depends on." },
      { q: "We must take __ of nature. Choose:", opts: ["care", "caring", "cared", "carer"], a: 0, ex: "Take care of." },
      { q: "The children went __ school. Choose:", opts: ["at", "to", "in", "for"], a: 1, ex: "Went to school." },
      { q: "She is interested __ painting. Choose:", opts: ["of", "with", "in", "for"], a: 2, ex: "Interested in." },
      { q: "It has been raining __ morning. Choose:", opts: ["from", "for", "since", "in"], a: 2, ex: "Since morning (point of time)." },
      { q: "He is good __ mathematics. Choose:", opts: ["in", "at", "for", "with"], a: 1, ex: "Good at." },
      { q: "I'll be there __ a few minutes. Choose:", opts: ["at", "for", "in", "on"], a: 2, ex: "In (future time)." },
      { q: "The price has gone __ recently. Choose:", opts: ["up", "down", "off", "on"], a: 0, ex: "Gone up = increased." },
      { q: "He __ in playing chess. Choose:", opts: ["excels", "excel", "excelling", "excelled"], a: 0, ex: "Present simple." },
      { q: "She wrote a __ letter. Choose:", opts: ["beautifully", "beauty", "beautiful", "beautify"], a: 2, ex: "Adjective + noun." },
      { q: "He works hard __ pass the exam. Choose:", opts: ["to", "for", "by", "with"], a: 0, ex: "Infinitive of purpose." },
      { q: "We must __ honesty. Choose:", opts: ["practice", "practise", "practised", "practising"], a: 1, ex: "Practise (verb, BrE)." },
      { q: "Despite __ tired, he worked. Choose:", opts: ["been", "be", "being", "to be"], a: 2, ex: "Despite + V-ing." },
      { q: "Either he __ his sister will come. Choose:", opts: ["or", "and", "nor", "but"], a: 0, ex: "Either ... or." },
      { q: "Neither rain __ snow will stop us. Choose:", opts: ["or", "nor", "and", "but"], a: 1, ex: "Neither ... nor." },
      { q: "He runs __ than his brother. Choose:", opts: ["faster", "fast", "fastly", "fastest"], a: 0, ex: "Comparative." },
      { q: "She is __ intelligent girl. Choose:", opts: ["a", "an", "the", "no article"], a: 1, ex: "An (vowel sound)." },
      { q: "We were going __ home when it rained. Choose:", opts: ["to", "for", "no preposition", "at"], a: 2, ex: "'Home' takes no prep." },
      { q: "I am tired __ waiting. Choose:", opts: ["of", "for", "by", "with"], a: 0, ex: "Tired of." },
      { q: "The book was written __ Shakespeare. Choose:", opts: ["from", "of", "by", "with"], a: 2, ex: "Passive + by." },
      { q: "She insisted __ paying the bill. Choose:", opts: ["on", "for", "to", "with"], a: 0, ex: "Insist on." },
      { q: "He is fond __ chocolate. Choose:", opts: ["with", "of", "for", "about"], a: 1, ex: "Fond of." },
      { q: "We must __ this matter seriously. Choose:", opts: ["take", "have", "make", "do"], a: 0, ex: "Take seriously." },
      { q: "He arrived __ the airport at 9. Choose:", opts: ["in", "at", "on", "to"], a: 1, ex: "At (place point)." }
    ]
  };

  // ───────────────────────────────────────────────────────────────
  // 28. READING COMPREHENSION
  // ───────────────────────────────────────────────────────────────
  T["eng-comprehension"] = {
    body: `
      <h2>Reading Comprehension</h2>
      <p>A passage is given, followed by 5 questions. You read the passage and answer based on what's given. <b>SSC asks 5 comprehension questions</b>.</p>

      <h3>Approach</h3>

      <h4>Step 1: Skim the Passage</h4>
      <p>Read quickly to get the gist. Don't worry about details. What is the main topic? What's the author's tone?</p>

      <h4>Step 2: Read the Questions</h4>
      <p>Before re-reading, glance at the questions. This tells you what to look for in the passage.</p>

      <h4>Step 3: Re-read the Passage Carefully</h4>
      <p>Now read carefully, marking phrases/keywords related to the questions.</p>

      <h4>Step 4: Answer Each Question</h4>
      <p>For each question, locate the relevant part of the passage. Don't bring in outside information — base your answer ONLY on the passage.</p>

      <h3>Types of Comprehension Questions</h3>

      <h4>1. Direct/Factual Questions</h4>
      <p>Information explicitly stated in passage. Look for keywords from question in passage.</p>

      <h4>2. Vocabulary in Context</h4>
      <p>"What does the word X mean in the passage?" Read the surrounding context to figure out meaning.</p>

      <h4>3. Inference Questions</h4>
      <p>Answer is NOT directly stated but implied. Use logic.</p>

      <h4>4. Main Idea / Theme</h4>
      <p>What is the passage about? Look at the topic sentence (usually first or last sentence of paragraphs).</p>

      <h4>5. Author's Tone / Attitude</h4>
      <p>How does the author feel about the topic? Positive, negative, neutral, critical, sympathetic, sarcastic?</p>

      <h4>6. Title Selection</h4>
      <p>Best title captures the main idea — not too narrow, not too broad.</p>

      <h3>🔥 Master Tricks</h3>
      <ul>
        <li>Don't bring outside knowledge — answer ONLY from the passage.</li>
        <li>For factual questions, find the exact line that contains the answer.</li>
        <li>For inference, the answer is supported by but not stated in the passage.</li>
        <li>Eliminate extreme options (always, never, completely) unless passage supports them.</li>
        <li>Watch for trap options: factually true but irrelevant to passage.</li>
      </ul>

      <h3>Sample Passage & Solved Questions</h3>

      <p><b>Passage</b>: "The honeybee is one of nature's most fascinating creatures. A single bee can produce only about one-twelfth of a teaspoon of honey in its lifetime, yet a hive of bees produces several pounds annually. Bees work tirelessly, collecting nectar from flowers and converting it into honey through enzymes in their saliva. This honey serves as food for the colony during winter. Beyond honey production, bees play a critical role in pollinating plants. Without bees, many of our crops would fail. Sadly, bee populations are declining worldwide due to pesticides, habitat loss, and climate change. Scientists are urgently working to find solutions."</p>

      <h4>Q1: How much honey does a single bee produce in its lifetime?</h4>
      <p><b>Solution:</b><br>Direct factual question. Look for "single bee" + "honey".<br>Answer: <b>About one-twelfth of a teaspoon</b>.</p>

      <h4>Q2: What does "tirelessly" mean in the passage?</h4>
      <p><b>Solution:</b><br>Without getting tired; continuously.<br>Answer: <b>Continuously/Without rest</b>.</p>

      <h4>Q3: Why is the decline of bees a concern beyond losing honey?</h4>
      <p><b>Solution:</b><br>Inference from "bees play a critical role in pollinating plants" + "many of our crops would fail".<br>Answer: <b>They are essential for pollination, without which crops would fail</b>.</p>

      <h4>Q4: What is the main idea of the passage?</h4>
      <p><b>Solution:</b><br>The passage talks about bees, their importance, and the threat they face.<br>Answer: <b>The importance of bees and the threat to their populations</b>.</p>

      <h4>Q5: What is the author's tone?</h4>
      <p><b>Solution:</b><br>Words like "fascinating", "sadly", "urgently" indicate appreciation + concern.<br>Answer: <b>Informative and concerned</b>.</p>

      <h3>Another Sample Passage</h3>

      <p><b>Passage</b>: "Reading habits among the youth have declined significantly in the digital age. Smartphones, social media, and instant entertainment compete for attention. Yet, reading remains essential for cognitive development, vocabulary growth, and critical thinking. Studies show that children who read regularly perform better academically. Libraries are reinventing themselves with digital resources and community programs. Parents and educators must encourage reading from an early age, not as a chore, but as an enjoyable activity. Only then can we preserve this vital habit."</p>

      <h4>Q1: What has caused the decline in reading?</h4>
      <p><b>Answer:</b> Smartphones, social media, instant entertainment.</p>

      <h4>Q2: What benefits does reading provide? (3 listed)</h4>
      <p><b>Answer:</b> Cognitive development, vocabulary growth, critical thinking.</p>

      <h4>Q3: How are libraries adapting?</h4>
      <p><b>Answer:</b> Digital resources and community programs.</p>

      <h4>Q4: What does the author want parents and teachers to do?</h4>
      <p><b>Answer:</b> Encourage reading as enjoyable, not as a chore.</p>

      <h4>Q5: A suitable title for the passage:</h4>
      <p><b>Answer:</b> "Reviving the Reading Habit in the Digital Age".</p>

      <h3>🎯 Strategy Tips</h3>
      <ul>
        <li>Time management: ~5 min for one passage (1 min skim, 4 min questions).</li>
        <li>Mark / underline key sentences as you read.</li>
        <li>For "according to passage" — answer must be findable in text.</li>
        <li>Look for paraphrasing: option may say the same thing in different words.</li>
        <li>Beware of extreme options (always, never, all, none) unless passage supports.</li>
      </ul>
    `,
    mcq: [
      { q: "Best title for: 'Yoga improves health and reduces stress, suitable for all ages.'", opts: ["Yoga: A Universal Health Practice", "Yoga in India", "Stress in Modern Life", "Ages and Exercise"], a: 0, ex: "Captures both points." },
      { q: "If passage says 'Many believe that..' — what is implied?", opts: ["Author agrees", "Author disagrees", "It's a common belief, not necessarily true", "Definitively true"], a: 2, ex: "Distancing language." },
      { q: "'The river meanders through the valley.' Meaning of meanders?", opts: ["Flows fast", "Flows in winding path", "Floods", "Dries up"], a: 1, ex: "Meander = wind." },
      { q: "Passage on global warming: best tone?", opts: ["Joyful", "Concerned", "Sarcastic", "Indifferent"], a: 1, ex: "Concerned tone for serious issue." },
      { q: "'Few people are aware.' This means:", opts: ["Many people know", "Most don't know", "All know", "None know"], a: 1, ex: "Few = not many." },
      { q: "Passage mentions 'flora and fauna' — refers to:", opts: ["Plants and animals", "Cities", "Foods", "Drinks"], a: 0, ex: "Standard biology terms." },
      { q: "'The book was a bestseller.' Implies:", opts: ["It was a bad book", "Many copies sold", "It was free", "It was hidden"], a: 1, ex: "Sold well." },
      { q: "Author writes 'Unfortunately...' — tone is:", opts: ["Happy", "Regretful", "Excited", "Neutral"], a: 1, ex: "Regretful." },
      { q: "Reading helps in: (per passage saying 'improves vocabulary')", opts: ["Vocabulary growth", "Weight loss", "Muscle gain", "Driving"], a: 0, ex: "Direct from passage." },
      { q: "'Children should not be deprived of education.' Means:", opts: ["Children must get education", "Education is harmful", "Avoid education", "Education is private"], a: 0, ex: "Deprived = denied; not denied = should get." },
      { q: "Inference type question requires:", opts: ["Direct quote", "Logical deduction from text", "Outside knowledge", "Random guessing"], a: 1, ex: "Inference = logic from passage." },
      { q: "'Their efforts proved futile.' Futile means:", opts: ["Successful", "Useless", "Quick", "Slow"], a: 1, ex: "Futile = in vain." },
      { q: "Best practice for RC: read what FIRST?", opts: ["Questions", "Answers", "Passage", "Title"], a: 2, ex: "Read passage first for gist." },
      { q: "'The river is the lifeline of the village.' Lifeline means:", opts: ["Source of life", "Boundary", "Highway", "Danger"], a: 0, ex: "Lifeline = essential support." },
      { q: "Author says 'one cannot deny that...' Tone:", opts: ["Skeptical", "Affirmative/Strong claim", "Hesitant", "Sarcastic"], a: 1, ex: "Strong affirmative." },
      { q: "Word meaning: 'The proposal was rejected outright.' Outright?", opts: ["Slowly", "Completely", "Possibly", "Reluctantly"], a: 1, ex: "Outright = completely." },
      { q: "When passage says 'numerous benefits':", opts: ["Few", "Many", "Some", "None"], a: 1, ex: "Numerous = many." },
      { q: "If passage discusses pros AND cons, the author is:", opts: ["Biased", "Balanced", "Negative", "Positive"], a: 1, ex: "Both sides → balanced." },
      { q: "'In conclusion' signals:", opts: ["Beginning", "Middle", "Summary/End", "Diversion"], a: 2, ex: "Concluding signal." },
      { q: "'Bees pollinate crops.' Crops depend on bees for:", opts: ["Honey", "Pollination", "Light", "Water"], a: 1, ex: "Direct claim." },
      { q: "If author uses many statistics, tone is:", opts: ["Emotional", "Objective/factual", "Sarcastic", "Hesitant"], a: 1, ex: "Statistics = objective." },
      { q: "'The decline is alarming.' Alarming suggests:", opts: ["Good news", "Cause for concern", "Slow change", "No change"], a: 1, ex: "Alarming = worrying." },
      { q: "Best title rule: not too narrow, not too:", opts: ["Specific", "Broad", "Long", "Catchy"], a: 1, ex: "Broad/narrow balance." },
      { q: "Vocabulary in context: read what to figure out meaning?", opts: ["Dictionary", "Surrounding sentences", "Word itself only", "Title"], a: 1, ex: "Use context clues." },
      { q: "'Author is sympathetic' means:", opts: ["Critical", "Showing compassion", "Indifferent", "Hostile"], a: 1, ex: "Sympathetic = caring." }
    ]
  };

})();
