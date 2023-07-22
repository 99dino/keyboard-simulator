// // Key Pressing Sound Effect
// // to handle key events
// const rows = [
//   [
//     "Escape",
//     "F1",
//     "F2",
//     "F3",
//     "F4",
//     "F6",
//     "F7",
//     "F8",
//     "F9",
//     "F10",
//     "F11",
//     "F12",
//   ],
//   [
//     "Backquote",
//     "Digit1",
//     "Digit2",
//     "Digit3",
//     "Digit4",
//     "Digit5",
//     "Digit6",
//     "Digit7",
//     "Digit8",
//     "Digit9",
//     "Digit0",
//     "Minus",
//     "Equal",
//     "Insert",
//     "Numpad7",
//     "PageUp",
//   ],
//   [
//     "Tab",
//     "KeyQ",
//     "KeyW",
//     "KeyE",
//     "KeyR",
//     "KeyT",
//     "KeyY",
//     "KeyU",
//     "KeyI",
//     "KeyO",
//     "KeyP",
//     "BracketLeft",
//     "BracketRight",
//     "Backslash",
//     "Delete",
//     "End",
//     "PageDown",
//   ],
//   [
//     "CapsLock",
//     "KeyA",
//     "KeyS",
//     "KeyD",
//     "KeyF",
//     "KeyG",
//     "KeyH",
//     "KeyJ",
//     "KeyK",
//     "KeyL",
//     "Semicolon",
//     "Quote",
//   ],
//   [
//     "ShiftLeft",
//     "KeyZ",
//     "KeyX",
//     "KeyC",
//     "KeyV",
//     "KeyB",
//     "KeyN",
//     "KeyM",
//     "Comma",
//     "Period",
//     "Slash",
//     "ShiftRight",
//     "ArrowUp",
//   ],
//   [
//     "ControlLeft",
//     "AltLeft",
//     "AltRight",
//     "ControlRight",
//     "ArrowLeft",
//     "ArrowDown",
//     "ArrowRight",
//   ],
// ];

// // On Key Down visual and audio effect
// document.addEventListener("keydown", (e) => {
//   if (!e.repeat) {
//     if (e.code === "Escape") {
//       finishGame();
//     }
//     const btn = document.querySelector(`.${e.code}-`);
//     if (btn) {
//       btn.classList.add("active-class");
//       for (let i = 0; i < 6; ++i) {
//         if (rows[i].includes(e.code)) {
//           const audio = document.querySelector(`audio[data-key="row${i}"]`);
//           audio.play();
//           return;
//         }
//       }
//       const audio = document.querySelector(`audio[data-key="${e.code}"]`);
//       if (audio) {
//         audio.play();
//       }
//     }
//   }
// });

// // on Key Up visual and audio effect
// document.addEventListener("keyup", (e) => {
//   const btn = document.querySelector(`.${e.code}-`);
//   if (btn) {
//     btn.classList.remove("active-class");

//     for (let i = 0; i < 6; ++i) {
//       if (rows[i].includes(e.code)) {
//         const audio = document.querySelector(`audio[data-key="rowR"]`);
//         audio.play();
//         return;
//       }
//     }
//     const audio = document.querySelector(`audio[data-key="${e.code}R"]`);
//     if (audio) {
//       audio.play();
//     }
//   }
// });

// // On Mouse Click visual and audio effect
// document.querySelectorAll(".btn-in").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const audio = document.querySelector(
//       `audio[data-key="${btn.classList[0]}"]`
//     );
//     audio.play();
//   });
// });

// defining the timing option
let TIME_LIMIT = [15, 30, 60, 120, 180];
// defining the difficulty option
let diff = ["Easy", "Medium", "Hard"];
// array containing easy words
const easy = [
  "Where",
  "is",
  "the",
  "Life",
  "we",
  "have",
  "lost",
  "in",
  "living?",
  "wisdom",
  "I",
  "was",
  "thrown",
  "out",
  "of",
  "college",
  "for",
  "cheating",
  "on",
  "exam;",
  "looked",
  "into",
  "soul",
  "boy",
  "sitting",
  "next",
  "to",
  "me.",
  "If",
  "you",
  "accept",
  "others,",
  "negative",
  "ones,",
  "then",
  "never",
  "will",
  "change",
  "outcome.",
  "The",
  "calmed",
  "say",
  "that",
  "what",
  "best;",
  "second,",
  "one",
  "should",
  "right,",
  "not",
  "third,",
  "what's",
  "pleasing,",
  "fourth,",
  "true,",
  "false.",
  "Should",
  "a",
  "person",
  "do",
  "good,",
  "let",
  "him",
  "it",
  "again",
  "and",
  "again.",
  "Let",
  "find",
  "pleasure",
  "therein,",
  "blissful",
  "good.",
  "Radiate",
  "love",
  "towards",
  "entire",
  "world",
  "—",
  "above,",
  "below,",
  "across",
  "without",
  "ill",
  "will,",
  "enmity.",
  "Character",
  "like",
  "tree",
  "reputation",
  "shadow.",
  "shadow",
  "think",
  "it;",
  "real",
  "thing.",
  "As",
  "our",
  "must",
  "forget",
  "highest",
  "utter",
  "words,",
  "but",
  "live",
  "by",
  "them.",
  "had",
  "no",
  "winter,",
  "spring",
  "would",
  "be",
  "so",
  "pleasant;",
  "if",
  "did",
  "sometimes",
  "taste",
  "adversity,",
  "welcome.",
  "You",
  "are",
  "given",
  "wish",
  "also",
  "being",
  "power",
  "make",
  "come",
  "true.",
  "may",
  "work",
  "it,",
  "however.",
  "become",
  "good",
  "trying",
  "finding",
  "goodness",
  "already",
  "within",
  "you.",
  "don't",
  "turn",
  "greeting",
  "cards",
  "advice,",
  "they",
  "fine",
  "reflection",
  "general",
  "drift",
  "culture.",
  "am",
  "falling",
  "star",
  "who",
  "has",
  "finally",
  "found",
  "her",
  "place",
  "another",
  "lovely",
  "where",
  "sparkle",
  "heavens",
  "forever.",
  "In",
  "romance,",
  "feel",
  "need",
  "zoom",
  "expound",
  "foibles",
  "intimate",
  "detail;",
  "tend",
  "opposite,",
  "avoiding",
  "through",
  "fear,",
  "lethargy",
  "or",
  "both.",
  "All",
  "difficulty",
  "things",
  "their",
  "origin",
  "which",
  "easy,",
  "great",
  "small.",
  "A",
  "lot",
  "times",
  "people",
  "look",
  "at",
  "side",
  "can't",
  "do.",
  "always",
  "positive",
  "can",
  "single",
  "man",
  "plant",
  "himself",
  "his",
  "instincts,",
  "there",
  "abide,",
  "huge",
  "round",
  "him.",
  "makes",
  "success",
  "living",
  "see",
  "goal",
  "steadily",
  "aims",
  "unswervingly.",
  "That",
  "dedication.",
  "Back",
  "Base",
  "Behaviour",
  "Belief",
  "Birth",
  "Answer",
  "Approval",
  "Bread",
  "Breath",
  "Brother",
  "Building",
  "Burn",
  "Business",
  "Butter",
  "Current",
  "Damage",
  "Danger",
  "Daughter",
  "Day",
  "Death",
  "Decision",
  "Detail",
  "Development",
  "Direction",
  "Comparison",
  "Competition",
  "Connection",
  "Cook",
  "Country",
  "Cover",
  "Credit",
  "Cry",
  "Care",
  "Cause",
  "Chance",
  "Change",
  "Cloth",
  "Colour",
  "Comfort",
  "Company",
  "Art",
  "Attack",
  "Attention",
  "Blood",
  "Blow",
  "Body",
  "Account",
  "Air",
  "Amount",
  "Animal",
];
// array containing medium words
const medium = [
  "especially",
  "expectations",
  "knowledge?",
  "knowledge",
  "information?",
  "metaphysics",
  "well-spoken",
  "unrighteous;",
  "displeasing;",
  "accumulation",
  "boundless",
  "unhindered,",
  "express",
  "gratitude,",
  "appreciation",
  "prosperity",
  "constellation,",
  "partner's",
  "friendship,",
  "indomitably",
  "absence",
  "accommodate",
  "accommodation",
  "achieve",
  "across",
  "aggressive",
  "apparently",
  "appearance",
  "argument",
  "assassination",
  "basically",
  "beginning",
  "believe",
  "business",
  "calendar",
  "Caribbean",
  "category",
  "colleague",
  "coming",
  "committee",
  "completely",
  "conscience",
  "conscious",
  "copyright",
  "curiosity",
  "definitely",
  "disappear",
  "disappoint",
  "ecstasy",
  "embarrass",
  "environment",
  "existence",
  "familiar",
  "finally",
  "fluorescent",
  "foreign",
  "forty",
  "forward",
  "friend",
  "further",
  "glamorous",
  "government",
  "grammar",
  "gauge",
  "grateful",
  "guard",
  "happened",
  "harass",
  "harassment",
  "honorary",
  "humorous",
  "immediately",
  "incidentallyindependent",
  "interrupt",
  "irresistible",
  "lightning",
  "medicine",
  "millennium",
  "millennia",
  "misspell",
  "necessary",
  "noticeable",
  "occasion",
  "occurred",
  "occurring",
  "occurrence",
  "parallel",
  "preferred",
  "preferring",
  "privilege",
  "pronunciation",
  "publicly",
  "really",
  "receive",
  "referred",
  "referring",
  "religious",
  "remember",
  "resistance",
  "sense",
  "separate",
  "successful",
  "surprise",
  "tendency",
  "tongue",
  "truly",
  "unforeseen",
  "unfortunately",
  "until",
  "vicious",
  "weird",
  "wherever",
  "weather",
  "whether",
  "which",
];
// array containing hard words
const hard = [
  "Abnegation",
  "Aggrandize",
  "Alacrity",
  "Anachronistic",
  "Archetypal",
  "Ascetic",
  "Beguile",
  "Blandishment",
  "Cajole",
  "Callous",
  "Camaraderie",
  "Circumlocution",
  "Clamour",
  "Cognizant",
  "Construe",
  "Convivial",
  "Demagogue",
  "Denigrate",
  "Didactic",
  "Disparate",
  "Eclectic",
  "Egregious",
  "Embezzlement",
  "Enervate",
  "Ephemeral",
  "Equanimity",
  "Fatuous",
  "Gratuitous",
  "Iconoclast",
  "Idiosyncratic",
  "Incumbent",
  "Inveterate",
  "Libertarian",
  "Licentious",
  "Largess",
  "Multifarious",
  "Obdurate",
  "Ostracism",
  "Pejorative",
  "Pertinacious",
  "Phlegmatic",
  "Promulgate",
  "Quotidian",
  "Recalcitrant",
  "Sanctimonious",
  "Solipsism",
  "Travesty",
  "Ubiquitous",
  "Vicissitude",
  "Vociferous",
  "Abject",
  "Abscond",
  "Bereft",
  "Capitulate",
  "Umbrage",
  "Emollient",
  "Dirge",
  "Dispel",
  "Epistolary",
  "Epistolary",
  "Exacerbate",
  "Forbearance",
  "Gourmand",
  "Heterogeneous",
  "Impecunious",
  "Pellucid",
  "Philanthropic",
  "Protean",
  "Spurious",
  "Milieu",
  "Smaragdine",
  "Soubrette",
  "Albumen",
  "Eudaemonic",
  "Chiaroscurist",
  "Autochthonous",
  "Insouciant",
  "Staphylococci",
  "Foulard",
  "Conscientious",
  "Mlechchha",
  "Woebegoneness",
  "Milquetoast",
  "Eudaemonic",
  "Chauffeur",
  "Staphylococci",
  "Cymotrichous",
  "Paraphernalia",
  "Crystallographer",
  "Pince-nez",
  "Crustaceology",
  "Odontalgia",
  "Surveillance",
  "Idiosyncrasy",
  "Acquiesce",
  "Feldenkrais",
  "Neutercane",
  "Xenarthra",
  "Wednesday",
  "Bologna",
  "Playwright",
  "Minuscule",
  "Sacrilegious",
  "Psoriasis",
  "Narcissistic",
  "Entrepreneur",
  "Lightning",
  "Handkerchief",
];

// selecting required elements
let timer_text = document.querySelector(".curr_time");
let accuracy_text = document.querySelector(".curr_accuracy");
let error_text = document.querySelector(".curr_errors");
let cpm_text = document.querySelector(".curr_cpm");
let wpm_text = document.querySelector(".curr_wpm");
let typing_text = document.querySelector(".typing_area");
let input_area = document.querySelector(".input_area");
let start_btn = document.querySelector(".start");
let cpm_group = document.querySelector(".cpm");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");
let end = document.querySelector(".end");
let diff_text = document.querySelector(".diff_text");

let timeoption = 0;
let timeLeft = TIME_LIMIT[timeoption % 5];
let diffopt = 0;
let difficulty = diff[diffopt % 3];
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_para = "";
let timer = null;
let running = 0;

document.querySelector(".start").addEventListener("click", () => {
  document.querySelector(".typing_area").classList.remove("modal");
  document.querySelector(".start").classList.add("hidden");
  resetValues();
});

const display = () => {
  current_para.split("").forEach((char) => {
    const charSpan = document.createElement("span");
    charSpan.style.fontSize = "24px";
    charSpan.style.fontWeight = "400";
    charSpan.style.fontFamily = "'Lexend Deca', sans-serif";
    charSpan.classList.add("no");
    charSpan.classList.add("current");
    charSpan.innerText = char;
    typing_text.appendChild(charSpan);
  });
};

// generating random paragraph of 30 words
const updaterandompara = () => {
  // considering diffculty level and generating paragraph by taking random words from respective diffulty array
  difficulty = diff[diffopt % 3];
  current_para = "";
  for (let i = 0; i < 30; ++i) {
    if (difficulty === "Easy") {
      current_para += easy[Math.trunc(Math.random() * easy.length)] + " ";
    } else if (difficulty === "Medium") {
      current_para += medium[Math.trunc(Math.random() * medium.length)] + " ";
    } else {
      current_para += hard[Math.trunc(Math.random() * hard.length)] + " ";
    }
  }
  //Fetch contents from url
  //   const response = await fetch(quoteApiUrl);
  //   //Store response
  //   let data = await response.json();
  //   //Access quote
  //   current_para = data.content;
  //   console.log(...current_para.split(" "));

  //   words.push(...current_para.split(" "));
  //   console.log(words);
  if (difficulty === "Easy") {
    current_para = current_para.toLowerCase();
  }
  // emptying the old content
  // and appending new random words
  // separate each character and make an element
  // out of each of them to individually style them
  typing_text.textContent = null;
  display();
  typing_text.style.wordSpacing = "10px";
};

function processCurrentText() {
  if (!running) {
    startGame();
  }
  // get current input text and split it
  curr_input = input_area.value;
  curr_input_array = curr_input.split("");
  // increment total characters typed
  characterTyped++;
  errors = 0;
  let paragraph = typing_text.querySelectorAll(".current");
  paragraph.forEach((char, index) => {
    let typedChar = curr_input_array[index];
    // character not currently typed
    if (typedChar == null) {
      // errors++;
      char.classList.add("no");
      char.classList.remove("correct_char");
      char.classList.remove("incorrect_char");
    }
    // correct character
    else if (typedChar === char.innerText) {
      char.classList.add("correct_char");
      char.classList.remove("incorrect_char");
      char.classList.remove("no");
    }
    // incorrect character
    else {
      if (char.innerText === " ") {
        total_errors++;
        input_area.value = input_area.value.slice(0, -1);
      }
      char.classList.remove("no");
      char.classList.add("incorrect_char");
      char.classList.remove("correct_char");
      // increment number of errors
      errors++;
    }
  });

  // display the number of errors
  //   error_text.textContent = total_errors + errors;
  // update accuracy text
  let correctCharacters = Math.max(characterTyped - (total_errors + errors), 0);
  let accuracyVal = (correctCharacters / characterTyped) * 100;
  //   accuracy_text.textContent = accuracyVal.toFixed(2);
  // if current text is completely typed
  // irrespective of errors
  if (curr_input.length == current_para.length) {
    updaterandompara();
    // update total errors
    total_errors += errors;
    // clear the input area
    if (characterTyped > 10) {
      input_area.value = "";
    }
  }
}

// game starting point
function startGame() {
  // once start typing end button appears to stop the typing tests
  //   end.style.display = "block";
  // clear old timer
  clearInterval(timer);
  // and start a new timer
  timer = setInterval(updateTimer, 1000);
  // this flag will guide rest of them if game is playing or not
  running = 1;
}

// initialization
function resetValues() {
  // random paragraph generation
  updaterandompara();
  running = 0;
  timeElapsed = 0;
  errors = 0;
  total_errors = 0;
  accuracy = 0;
  characterTyped = 0;
  document.querySelector(".input_area").value = "";
  //   accuracy_text.textContent = 100;
  // user choice of time duration and difficulty
  timeLeft = TIME_LIMIT[timeoption % 5];
  //   timer_text.textContent = timeLeft + "s";
  //   error_text.textContent = 0;
  // these info will be hidden at the begining
  // error_group.style.display = "none";
  // accuracy_group.style.display = "none";
  //   end.style.display = "none";
  //   restart_btn.style.display = "none";
  //   cpm_group.style.display = "none";
  //   wpm_group.style.display = "none";
  // making input area enable and autofocusing it
  // so that when someone starts typing then only timer starts
  input_area.disabled = false;
  input_area.focus();
}

// funtion to update the timer at each second
function updateTimer() {
  if (timeLeft > 0) {
    // decrease the current time left
    timeLeft--;
    // increase the time elapsed
    timeElapsed++;
    // update the timer text
    // timer_text.textContent = timeLeft + "s";
  } else {
    // finish the game
    finishGame();
  }
}

function finishGame() {
  // stop the timer
  clearInterval(timer);
  // disable the input area
  input_area.disabled = true;
  // time spent typing
  // same as selected and different when someone ends it manually
  //   timer_text.textContent = `${TIME_LIMIT[timeoption % 5] - timeLeft}`;

  // display restart button
  //   restart_btn.style.display = "block";

  // calculate cpm and wpm
  cpm = Math.round(
    ((characterTyped - total_errors - errors) / timeElapsed) * 60
  );
  wpm = Math.round(
    ((characterTyped - total_errors - errors) / 5 / timeElapsed) * 60
  );

  // update cpm and wpm text
  //   cpm_text.textContent = cpm;
  //   wpm_text.textContent = wpm;

  // display the error, accuracy cpm and wpm
  //   end.style.display = "none";
  //   error_group.style.display = "block";
  //   accuracy_group.style.display = "block";
  //   cpm_group.style.display = "block";
  //   wpm_group.style.display = "block";
  document.querySelector(".typing_area").classList.add("modal");
  document.querySelector(".start").classList.remove("hidden");
}

resetValues();
