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

})();
