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

})();
