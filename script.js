// Key Pressing Sound Effect
// to handle key events
const rows = [
  [
    "Escape",
    "F1",
    "F2",
    "F3",
    "F4",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
  ],
  [
    "Backquote",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Minus",
    "Equal",
    "Insert",
    "Numpad7",
    "PageUp",
  ],
  [
    "Tab",
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BracketLeft",
    "BracketRight",
    "Backslash",
    "Delete",
    "End",
    "PageDown",
  ],
  [
    "CapsLock",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "Semicolon",
    "Quote",
  ],
  [
    "ShiftLeft",
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    "ShiftRight",
    "ArrowUp",
  ],
  [
    "ControlLeft",
    "AltLeft",
    "AltRight",
    "ControlRight",
    "ArrowLeft",
    "ArrowDown",
    "ArrowRight",
  ],
];

const switches = document.querySelector(".switch");
let curr = "NovelKeys-Creams";

switches.addEventListener("change", () => {
  const audiotype = document.querySelectorAll("audio");
  switches.blur();
  input_area.focus();

  audiotype.forEach((btn) => {
    btn.src = btn.src.replace(`${curr}`, switches.value);
  });
  curr = switches.value;
});

let currl = "WKL_TKL_9009outer";
const layouts = document.querySelector(".layout");
const keyboardlayouts = {
  WKL_TKL_9009outer:
    '<div class="WKL_TKL_9009outer center"> <div class="WKL_TKL_9009inner middle"> <div class="row row-0"> <div class="btn-out var0out"> <div class="row0 btn-in var0in Escape-"> <p style="color:white">Esc</p> </div> </div> <div class="btn-out var2out" style="margin-left: 54px"> <div class="row0 btn-in var2in F1-"> <p>F1</p> </div> </div> <div class="btn-out var2out"> <div class="row0 btn-in var2in F2-"> <p>F2</p> </div> </div> <div class="btn-out var2out"> <div class="row0 btn-in var2in F3-"> <p>F3</p> </div> </div> <div class="btn-out var2out"> <div class="row0 btn-in var2in F4-"> <p>F4</p> </div> </div> <div class="btn-out var2out" style="margin-left: 36px"> <div class="row0 btn-in var2in F5-"> <p>F5</p> </div> </div> <div class="btn-out var2out"> <div class="row0 btn-in var2in F6-"> <p>F6</p> </div> </div> <div class="btn-out var2out"> <div class="row0 btn-in var2in F7-"> <p>F7</p> </div> </div> <div class="btn-out var2out"> <div class="row0 btn-in var2in F8-"> <p>F8</p> </div> </div> <div class="btn-out var2out" style="margin-left: 36px"> <div class="row0 btn-in var2in F9-"> <p>F9</p> </div> </div> <div class="btn-out var2out"> <div class="row0 btn-in var2in F10-"> <p>F10</p> </div> </div> <div class="btn-out var2out"> <div class="row0 btn-in var2in F11-"> <p>F11</p> </div> </div> <div class="btn-out var2out"> <div class="row0 btn-in var2in F12-"> <p>F12</p> </div> </div> <div class="btn-out var0out" style="margin-left: 10px"> <div class="row0 btn-in var0in"> <p style="color:white">PrtSc</p> </div> </div> <div class="btn-out var0out"> <div class="row0 btn-in var0in"> <p style="text-align: center;color:white">Scroll Lock</p> </div> </div> <div class="btn-out var0out"> <div class="row0 btn-in var0in"> <p style="color:white">Pause</p> <p style="color:white">Break</p> </div> </div> </div> <br /> <div class="row row-1"> <div class="btn-out var1out"> <div class="row1 btn-in var1in Backquote-"> <p>~</p> <p>`</p> </div> </div> <div class="btn-out var2out"> <div class="row1 btn-in var2in Digit1-"> <p>!</p> <p>1</p> </div> </div> <div class="btn-out var2out"> <div class="row1 btn-in var2in Digit2-"> <p>@</p> <p>2</p> </div> </div> <div class="btn-out var2out"> <div class="row1 btn-in var2in Digit3-"> <p>#</p> <p>3</p> </div> </div> <div class="btn-out var2out"> <div class="row1 btn-in var2in Digit4-"> <p>$</p> <p>4</p> </div> </div> <div class="btn-out var2out"> <div class="row1 btn-in var2in Digit5-"> <p>%</p> <p>5</p> </div> </div> <div class="btn-out var2out"> <div class="row1 btn-in var2in Digit6-"> <p>^</p> <p>6</p> </div> </div> <div class="btn-out var2out"> <div class="row1 btn-in var2in Digit7-"> <p>&</p> <p>7</p> </div> </div> <div class="btn-out var2out"> <div class="row1 btn-in var2in Digit8-"> <p>*</p> <p>8</p> </div> </div> <div class="btn-out var2out"> <div class="row1 btn-in var2in Digit9-"> <p>(</p> <p>9</p> </div> </div> <div class="btn-out var2out"> <div class="row1 btn-in var2in Digit0-"> <p>)</p> <p>0</p> </div> </div> <div class="btn-out var2out"> <div class="row1 btn-in var2in Minus-"> <p>_</p> <p>-</p> </div> </div> <div class="btn-out var2out"> <div class="row1 btn-in var2in Equal-"> <p>+</p> <p>=</p> </div> </div> <div class="btn-out var1out" style="flex-grow: 1"> <div class="Backspace btn-in var1in Backspace-"> <p>Backspace</p> </div> </div> <div class="btn-out var2out" style="margin-left: 10px"> <div class="row1 btn-in var2in Insert-"> <p>Insert</p> </div> </div> <div class="btn-out var2out"> <div class="row1 btn-in var2in Numpad7-"> <p>Home</p> </div> </div> <div class="btn-out var2out"> <div class="row1 btn-in var2in PageUp-"> <p>PgUp</p> </div> </div> </div> <div class="row row-2"> <div class="btn-out var1out" style="flex-grow: 0.8"> <div class="row2 btn-in var1in Tab-"> <p>Tab</p> </div> </div> <div class="btn-out var2out"> <div class="row2 btn-in var2in KeyQ-"> <p>Q</p> </div> </div> <div class="btn-out var2out"> <div class="row2 btn-in var2in KeyW-"> <p>W</p> </div> </div> <div class="btn-out var2out"> <div class="row2 btn-in var2in KeyE-"> <p>E</p> </div> </div> <div class="btn-out var2out"> <div class="row2 btn-in var2in KeyR-"> <p>R</p> </div> </div> <div class="btn-out var2out"> <div class="row2 btn-in var2in KeyT-"> <p>T</p> </div> </div> <div class="btn-out var2out"> <div class="row2 btn-in var2in KeyY-"> <p>Y</p> </div> </div> <div class="btn-out var2out"> <div class="row2 btn-in var2in KeyU-"> <p>U</p> </div> </div> <div class="btn-out var2out"> <div class="row2 btn-in var2in KeyI-"> <p>I</p> </div> </div> <div class="btn-out var2out"> <div class="row2 btn-in var2in KeyO-"> <p>O</p> </div> </div> <div class="btn-out var2out"> <div class="row2 btn-in var2in KeyP-"> <p>P</p> </div> </div> <div class="btn-out var2out"> <div class="row2 btn-in var2in BracketLeft-"> <p>{</p> <p>[</p> </div> </div> <div class="btn-out var2out"> <div class="row2 btn-in var2in BracketRight-"> <p>}</p> <p>]</p> </div> </div> <div class="btn-out var2out" style="flex-grow: 1"> <div class="row2 btn-in var2in Backslash-"> <p>|</p> <p>\\</p> </div> </div> <div class="btn-out var2out" style="margin-left: 10px"> <div class="row2 btn-in var2in Delete-"> <p>Delete</p> </div> </div> <div class="btn-out var2out"> <div class="row2 btn-in var2in End-"> <p>End</p> </div> </div> <div class="btn-out var2out"> <div class="row2 btn-in var2in PageDown-"> <p>PgDn</p> </div> </div> </div> <div class="row row-3"> <div class="btn-out var0out" style="flex-grow: 0.5"> <div class="row3 btn-in var0in CapsLock-"> <p style="color:white">Caps Lock</p> </div> </div> <div class="btn-out var2out"> <div class="row3 btn-in var2in KeyA-"> <p>A</p> </div> </div> <div class="btn-out var2out"> <div class="row3 btn-in var2in KeyS-"> <p>S</p> </div> </div> <div class="btn-out var2out"> <div class="row3 btn-in var2in KeyD-"> <p>D</p> </div> </div> <div class="btn-out var2out"> <div class="row3 btn-in var2in KeyF-"> <p>F</p> </div> </div> <div class="btn-out var2out"> <div class="row3 btn-in var2in KeyG-"> <p>G</p> </div> </div> <div class="btn-out var2out"> <div class="row3 btn-in var2in KeyH-"> <p>H</p> </div> </div> <div class="btn-out var2out"> <div class="row3 btn-in var2in KeyJ-"> <p>J</p> </div> </div> <div class="btn-out var2out"> <div class="row3 btn-in var2in KeyK-"> <p>K</p> </div> </div> <div class="btn-out var2out"> <div class="row3 btn-in var2in KeyL-"> <p>L</p> </div> </div> <div class="btn-out var2out"> <div class="row3 btn-in var2in Semicolon-"> <p>:</p> <p>;</p> </div> </div> <div class="btn-out var2out"> <div class="row3 btn-in var2in Quote-"> <p>"</p> <p>\'</p> </div> </div> <div class="btn-out var0out" style="flex-grow: 1; margin-right: 172px" > <div class="Enter btn-in var0in Enter-"> <p style="color:white">Enter</p> </div> </div> </div> <div class="row row-4"> <div class="btn-out var1out" style="flex-grow: 1"> <div class="row4 btn-in var1in ShiftLeft-"> <p>Shift</p> </div> </div> <div class="btn-out var2out"> <div class="row4 btn-in var2in KeyZ-"> <p>Z</p> </div> </div> <div class="btn-out var2out"> <div class="row4 btn-in var2in KeyX-"> <p>Z</p> </div> </div> <div class="btn-out var2out"> <div class="row4 btn-in var2in KeyC-"> <p>C</p> </div> </div> <div class="btn-out var2out"> <div class="row4 btn-in var2in KeyV-"> <p>V</p> </div> </div> <div class="btn-out var2out"> <div class="row4 btn-in var2in KeyB-"> <p>B</p> </div> </div> <div class="btn-out var2out"> <div class="row4 btn-in var2in KeyN-"> <p>N</p> </div> </div> <div class="btn-out var2out"> <div class="row4 btn-in var2in KeyM-"> <p>M</p> </div> </div> <div class="btn-out var2out"> <div class="row4 btn-in var2in Comma-"> <p><</p> <p>,</p> </div> </div> <div class="btn-out var2out"> <div class="row4 btn-in var2in Period-"> <p>></p> <p>.</p> </div> </div> <div class="btn-out var2out"> <div class="row4 btn-in var2in Slash-"> <p>?</p> <p>/</p> </div> </div> <div class="btn-out var1out" style="flex-grow: 1.6"> <div class="row4 btn-in var1in ShiftRight-"> <p>Shift</p> </div> </div> <div class="btn-out var1out" style="margin: 0 54px 0 64px"> <div class="row4 btn-in var1in ArrowUp-"> <p>↑</p> </div> </div> </div> <div class="row row-5"> <div class="btn-out var1out" style="flex-grow: 0.1"> <div class="row5 btn-in var1in ControlLeft-"> <p>Ctrl</p> </div> </div> <div class="btn-out var1out" style="margin-left: 54px; flex-grow: 0.1" > <div class="row5 btn-in var1in AltLeft-"> <p>Alt</p> </div> </div> <div class="btn-out var0out" style="flex-grow: 1"> <div class="Space btn-in var0in Space-"> <p style="color:white">spacebar</p> </div> </div> <div class="btn-out var1out" style="flex-grow: 0.1"> <div class="row5 btn-in var1in AltRight-"> <p>Alt</p> </div> </div> <div class="btn-out var1out" style="margin-left: 54px; flex-grow: 0.1" > <div class="row5 btn-in var1in ControlRight-"> <p>Ctrl</p> </div> </div> <div class="btn-out var1out" style="margin-left: 10px"> <div class="row5 btn-in var1in ArrowLeft-"> <p>←</p> </div> </div> <div class="btn-out var1out"> <div class="row5 btn-in var1in ArrowDown-"> <p>↓</p> </div> </div> <div class="btn-out var1out"> <div class="row5 btn-in var1in ArrowRight-"> <p>→</p> </div> </div> </div> </div> </div>',
  MoDo_WKL_TKLouter:
    '<div class="MoDo_WKL_TKLouter center "> <div class="Modo_WKL_TKLinner middle"> <div class="row row-0"> <div class="btn-out var5out"> <div class="row0 btn-in var5in Escape-"> <p>Esc</p> </div> </div> <div class="btn-out var4out" style="margin-left: 54px"> <div class="row0 btn-in var4in F1-"> <p>F1</p> </div> </div> <div class="btn-out var4out"> <div class="row0 btn-in var4in F2-"> <p>F2</p> </div> </div> <div class="btn-out var4out"> <div class="row0 btn-in var4in F3-"> <p>F3</p> </div> </div> <div class="btn-out var4out"> <div class="row0 btn-in var4in F4-"> <p>F4</p> </div> </div> <div class="btn-out var3out" style="margin-left: 36px"> <div class="row0 btn-in var3in F5-"> <p>F5</p> </div> </div> <div class="btn-out var3out"> <div class="row0 btn-in var3in F6-"> <p>F6</p> </div> </div> <div class="btn-out var3out"> <div class="row0 btn-in var3in F7-"> <p>F7</p> </div> </div> <div class="btn-out var3out"> <div class="row0 btn-in var3in F8-"> <p>F8</p> </div> </div> <div class="btn-out var4out" style="margin-left: 36px"> <div class="row0 btn-in var4in F9-"> <p>F9</p> </div> </div> <div class="btn-out var4out"> <div class="row0 btn-in var4in F10-"> <p>F10</p> </div> </div> <div class="btn-out var4out"> <div class="row0 btn-in var4in F11-"> <p>F11</p> </div> </div> <div class="btn-out var4out"> <div class="row0 btn-in var4in F12-"> <p>F12</p> </div> </div> <div class="btn-out var3out" style="margin-left: 10px"> <div class="row0 btn-in var3in"> <p>PrtSc</p> </div> </div> <div class="btn-out var3out"> <div class="row0 btn-in var3in"> <p style="text-align: center">Scroll Lock</p> </div> </div> <div class="btn-out var3out"> <div class="row0 btn-in var3in"> <p>Pause</p> <p>Break</p> </div> </div> </div> <br /> <div class="row row-1"> <div class="btn-out var4out"> <div class="row1 btn-in var4in Backquote-"> <p>~</p> <p>`</p> </div> </div> <div class="btn-out var4out"> <div class="row1 btn-in var4in Digit1-"> <p>!</p> <p>1</p> </div> </div> <div class="btn-out var4out"> <div class="row1 btn-in var4in Digit2-"> <p>@</p> <p>2</p> </div> </div> <div class="btn-out var4out"> <div class="row1 btn-in var4in Digit3-"> <p>#</p> <p>3</p> </div> </div> <div class="btn-out var4out"> <div class="row1 btn-in var4in Digit4-"> <p>$</p> <p>4</p> </div> </div> <div class="btn-out var4out"> <div class="row1 btn-in var4in Digit5-"> <p>%</p> <p>5</p> </div> </div> <div class="btn-out var4out"> <div class="row1 btn-in var4in Digit6-"> <p>^</p> <p>6</p> </div> </div> <div class="btn-out var4out"> <div class="row1 btn-in var4in Digit7-"> <p>&</p> <p>7</p> </div> </div> <div class="btn-out var4out"> <div class="row1 btn-in var4in Digit8-"> <p>*</p> <p>8</p> </div> </div> <div class="btn-out var4out"> <div class="row1 btn-in var4in Digit9-"> <p>(</p> <p>9</p> </div> </div> <div class="btn-out var4out"> <div class="row1 btn-in var4in Digit0-"> <p>)</p> <p>0</p> </div> </div> <div class="btn-out var4out"> <div class="row1 btn-in var4in Minus-"> <p>_</p> <p>-</p> </div> </div> <div class="btn-out var4out"> <div class="row1 btn-in var4in Equal-"> <p>+</p> <p>=</p> </div> </div> <div class="btn-out var3out" style="flex-grow: 1"> <div class="Backspace btn-in var3in Backspace-"> <p>Backspace</p> </div> </div> <div class="btn-out var3out" style="margin-left: 10px"> <div class="row1 btn-in var3in Insert-"> <p>Insert</p> </div> </div> <div class="btn-out var3out"> <div class="row1 btn-in var3in Numpad7-"> <p>Home</p> </div> </div> <div class="btn-out var3out"> <div class="row1 btn-in var3in PageUp-"> <p>PgUp</p> </div> </div> </div> <div class="row row-2"> <div class="btn-out var3out" style="flex-grow: 0.8"> <div class="row2 btn-in var3in Tab-"> <p>Tab</p> </div> </div> <div class="btn-out var4out"> <div class="row2 btn-in var4in KeyQ-"> <p>Q</p> </div> </div> <div class="btn-out var4out"> <div class="row2 btn-in var4in KeyW-"> <p>W</p> </div> </div> <div class="btn-out var4out"> <div class="row2 btn-in var4in KeyE-"> <p>E</p> </div> </div> <div class="btn-out var4out"> <div class="row2 btn-in var4in KeyR-"> <p>R</p> </div> </div> <div class="btn-out var4out"> <div class="row2 btn-in var4in KeyT-"> <p>T</p> </div> </div> <div class="btn-out var4out"> <div class="row2 btn-in var4in KeyY-"> <p>Y</p> </div> </div> <div class="btn-out var4out"> <div class="row2 btn-in var4in KeyU-"> <p>U</p> </div> </div> <div class="btn-out var4out"> <div class="row2 btn-in var4in KeyI-"> <p>I</p> </div> </div> <div class="btn-out var4out"> <div class="row2 btn-in var4in KeyO-"> <p>O</p> </div> </div> <div class="btn-out var4out"> <div class="row2 btn-in var4in KeyP-"> <p>P</p> </div> </div> <div class="btn-out var4out"> <div class="row2 btn-in var4in BracketLeft-"> <p>{</p> <p>[</p> </div> </div> <div class="btn-out var4out"> <div class="row2 btn-in var4in BracketRight-"> <p>}</p> <p>]</p> </div> </div> <div class="btn-out var4out" style="flex-grow: 1"> <div class="row2 btn-in var4in Backslash-"> <p>|</p> <p>\\</p> </div> </div> <div class="btn-out var3out" style="margin-left: 10px"> <div class="row2 btn-in var3in Delete-"> <p>Delete</p> </div> </div> <div class="btn-out var3out"> <div class="row2 btn-in var3in End-"> <p>End</p> </div> </div> <div class="btn-out var3out"> <div class="row2 btn-in var3in PageDown-"> <p>PgDn</p> </div> </div> </div> <div class="row row-3"> <div class="btn-out var3out" style="flex-grow: 0.5"> <div class="row3 btn-in var3in CapsLock-"> <p>Caps Lock</p> </div> </div> <div class="btn-out var4out"> <div class="row3 btn-in var4in KeyA-"> <p>A</p> </div> </div> <div class="btn-out var4out"> <div class="row3 btn-in var4in KeyS-"> <p>S</p> </div> </div> <div class="btn-out var4out"> <div class="row3 btn-in var4in KeyD-"> <p>D</p> </div> </div> <div class="btn-out var4out"> <div class="row3 btn-in var4in KeyF-"> <p>F</p> </div> </div> <div class="btn-out var4out"> <div class="row3 btn-in var4in KeyG-"> <p>G</p> </div> </div> <div class="btn-out var4out"> <div class="row3 btn-in var4in KeyH-"> <p>H</p> </div> </div> <div class="btn-out var4out"> <div class="row3 btn-in var4in KeyJ-"> <p>J</p> </div> </div> <div class="btn-out var4out"> <div class="row3 btn-in var4in KeyK-"> <p>K</p> </div> </div> <div class="btn-out var4out"> <div class="row3 btn-in var4in KeyL-"> <p>L</p> </div> </div> <div class="btn-out var4out"> <div class="row3 btn-in var4in Semicolon-"> <p>:</p> <p>;</p> </div> </div> <div class="btn-out var4out"> <div class="row3 btn-in var4in Quote-"> <p>"</p> <p>\'</p> </div> </div> <div class="btn-out var5out" style="flex-grow: 1; margin-right: 172px" > <div class="Enter btn-in var5in Enter-"> <p>Enter</p> </div> </div> </div> <div class="row row-4"> <div class="btn-out var3out" style="flex-grow: 1"> <div class="row4 btn-in var3in ShiftLeft-"> <p>Shift</p> </div> </div> <div class="btn-out var4out"> <div class="row4 btn-in var4in KeyZ-"> <p>Z</p> </div> </div> <div class="btn-out var4out"> <div class="row4 btn-in var4in KeyX-"> <p>Z</p> </div> </div> <div class="btn-out var4out"> <div class="row4 btn-in var4in KeyC-"> <p>C</p> </div> </div> <div class="btn-out var4out"> <div class="row4 btn-in var4in KeyV-"> <p>V</p> </div> </div> <div class="btn-out var4out"> <div class="row4 btn-in var4in KeyB-"> <p>B</p> </div> </div> <div class="btn-out var4out"> <div class="row4 btn-in var4in KeyN-"> <p>N</p> </div> </div> <div class="btn-out var4out"> <div class="row4 btn-in var4in KeyM-"> <p>M</p> </div> </div> <div class="btn-out var4out"> <div class="row4 btn-in var4in Comma-"> <p><</p> <p>,</p> </div> </div> <div class="btn-out var4out"> <div class="row4 btn-in var4in Period-"> <p>></p> <p>.</p> </div> </div> <div class="btn-out var4out"> <div class="row4 btn-in var4in Slash-"> <p>?</p> <p>/</p> </div> </div> <div class="btn-out var3out" style="flex-grow: 1.6"> <div class="row4 btn-in var3in ShiftRight-"> <p>Shift</p> </div> </div> <div class="btn-out var3out" style="margin: 0 54px 0 64px"> <div class="row4 btn-in var3in ArrowUp-"> <p>↑</p> </div> </div> </div> <div class="row row-5"> <div class="btn-out var3out" style="flex-grow: 0.1"> <div class="row5 btn-in var3in ControlLeft-"> <p>Ctrl</p> </div> </div> <div class="btn-out var3out" style="margin-left: 54px; flex-grow: 0.1" > <div class="row5 btn-in var3in AltLeft-"> <p>Alt</p> </div> </div> <div class="btn-out var5out" style="flex-grow: 1"> <div class="Space btn-in var5in Space-"> <p>spacebar</p> </div> </div> <div class="btn-out var3out" style="flex-grow: 0.1"> <div class="row5 btn-in var3in AltRight-"> <p>Alt</p> </div> </div> <div class="btn-out var3out" style="margin-left: 54px; flex-grow: 0.1" > <div class="row5 btn-in var3in ControlRight-"> <p>Ctrl</p> </div> </div> <div class="btn-out var3out" style="margin-left: 10px"> <div class="row5 btn-in var3in ArrowLeft-"> <p>←</p> </div> </div> <div class="btn-out var3out"> <div class="row5 btn-in var3in ArrowDown-"> <p>↓</p> </div> </div> <div class="btn-out var3out"> <div class="row5 btn-in var3in ArrowRight-"> <p>→</p> </div> </div> </div> </div> </div>',
  Dracula_TKLouter:
    '<div class="Dracula_TKLouter center"> <div class="Dracula_TKLinner middle"> <div class="row row-0"> <div class="btn-out vard1out"> <div class="row0 btn-in vard1in Escape-"> <p style="color: black">Esc</p> </div> </div> <div class="btn-out vard2out" style="margin-left: 54px"> <div class="row0 btn-in vard2in F1-"> <p>F1</p> </div> </div> <div class="btn-out vard2out"> <div class="row0 btn-in vard2in F2-"> <p>F2</p> </div> </div> <div class="btn-out vard2out"> <div class="row0 btn-in vard2in F3-"> <p>F3</p> </div> </div> <div class="btn-out vard2out"> <div class="row0 btn-in vard2in F4-"> <p>F4</p> </div> </div> <div class="btn-out vard3out" style="margin-left: 36px"> <div class="row0 btn-in vard3in F5-"> <p>F5</p> </div> </div> <div class="btn-out vard3out"> <div class="row0 btn-in vard3in F6-"> <p>F6</p> </div> </div> <div class="btn-out vard3out"> <div class="row0 btn-in vard3in F7-"> <p>F7</p> </div> </div> <div class="btn-out vard3out"> <div class="row0 btn-in vard3in F8-"> <p>F8</p> </div> </div> <div class="btn-out vard2out" style="margin-left: 36px"> <div class="row0 btn-in vard2in F9-"> <p>F9</p> </div> </div> <div class="btn-out vard2out"> <div class="row0 btn-in vard2in F10-"> <p>F10</p> </div> </div> <div class="btn-out vard2out"> <div class="row0 btn-in vard2in F11-"> <p>F11</p> </div> </div> <div class="btn-out vard2out"> <div class="row0 btn-in vard2in F12-"> <p>F12</p> </div> </div> <div class="btn-out vard3out" style="margin-left: 10px"> <div class="row0 btn-in vard3in"> <p>PrtSc</p> </div> </div> <div class="btn-out vard3out"> <div class="row0 btn-in vard3in"> <p style="text-align: center">Scroll Lock</p> </div> </div> <div class="btn-out vard3out"> <div class="row0 btn-in vard3in"> <p>Pause</p> <p>Break</p> </div> </div> </div> <br /> <div class="row row-1"> <div class="btn-out vard3out"> <div class="row1 btn-in vard3in Backquote-"> <p>~</p> <p>`</p> </div> </div> <div class="btn-out vard2out"> <div class="row1 btn-in vard2in Digit1-"> <p>!</p> <p>1</p> </div> </div> <div class="btn-out vard2out"> <div class="row1 btn-in vard2in Digit2-"> <p>@</p> <p>2</p> </div> </div> <div class="btn-out vard2out"> <div class="row1 btn-in vard2in Digit3-"> <p>#</p> <p>3</p> </div> </div> <div class="btn-out vard2out"> <div class="row1 btn-in vard2in Digit4-"> <p>$</p> <p>4</p> </div> </div> <div class="btn-out vard2out"> <div class="row1 btn-in vard2in Digit5-"> <p>%</p> <p>5</p> </div> </div> <div class="btn-out vard2out"> <div class="row1 btn-in vard2in Digit6-"> <p>^</p> <p>6</p> </div> </div> <div class="btn-out vard2out"> <div class="row1 btn-in vard2in Digit7-"> <p>&</p> <p>7</p> </div> </div> <div class="btn-out vard2out"> <div class="row1 btn-in vard2in Digit8-"> <p>*</p> <p>8</p> </div> </div> <div class="btn-out vard2out"> <div class="row1 btn-in vard2in Digit9-"> <p>(</p> <p>9</p> </div> </div> <div class="btn-out vard2out"> <div class="row1 btn-in vard2in Digit0-"> <p>)</p> <p>0</p> </div> </div> <div class="btn-out vard2out"> <div class="row1 btn-in vard2in Minus-"> <p>_</p> <p>-</p> </div> </div> <div class="btn-out vard2out"> <div class="row1 btn-in vard2in Equal-"> <p>+</p> <p>=</p> </div> </div> <div class="btn-out vard3out" style="flex-grow: 1"> <div class="Backspace btn-in vard3in Backspace-"> <p style="color: #ff79c6">Backspace</p> </div> </div> <div class="btn-out vard3out" style="margin-left: 10px"> <div class="row1 btn-in vard3in Insert-"> <p>Insert</p> </div> </div> <div class="btn-out vard3out"> <div class="row1 btn-in vard3in Numpad7-"> <p>Home</p> </div> </div> <div class="btn-out vard3out"> <div class="row1 btn-in vard3in PageUp-"> <p>PgUp</p> </div> </div> </div> <div class="row row-2"> <div class="btn-out vard3out" style="flex-grow: 0.8"> <div class="row2 btn-in vard3in Tab-"> <p style="color: #ff79c6">Tab</p> </div> </div> <div class="btn-out vard2out"> <div class="row2 btn-in vard2in KeyQ-"> <p>Q</p> </div> </div> <div class="btn-out vard2out"> <div class="row2 btn-in vard2in KeyW-"> <p>W</p> </div> </div> <div class="btn-out vard2out"> <div class="row2 btn-in vard2in KeyE-"> <p>E</p> </div> </div> <div class="btn-out vard2out"> <div class="row2 btn-in vard2in KeyR-"> <p>R</p> </div> </div> <div class="btn-out vard2out"> <div class="row2 btn-in vard2in KeyT-"> <p>T</p> </div> </div> <div class="btn-out vard2out"> <div class="row2 btn-in vard2in KeyY-"> <p>Y</p> </div> </div> <div class="btn-out vard2out"> <div class="row2 btn-in vard2in KeyU-"> <p>U</p> </div> </div> <div class="btn-out vard2out"> <div class="row2 btn-in vard2in KeyI-"> <p>I</p> </div> </div> <div class="btn-out vard2out"> <div class="row2 btn-in vard2in KeyO-"> <p>O</p> </div> </div> <div class="btn-out vard2out"> <div class="row2 btn-in vard2in KeyP-"> <p>P</p> </div> </div> <div class="btn-out vard2out"> <div class="row2 btn-in vard2in BracketLeft-"> <p>{</p> <p>[</p> </div> </div> <div class="btn-out vard2out"> <div class="row2 btn-in vard2in BracketRight-"> <p>}</p> <p>]</p> </div> </div> <div class="btn-out vard3out" style="flex-grow: 1"> <div class="row2 btn-in vard3in Backslash-"> <p>|</p> <p>\\</p> </div> </div> <div class="btn-out vard3out" style="margin-left: 10px"> <div class="row2 btn-in vard3in Delete-"> <p>Delete</p> </div> </div> <div class="btn-out vard3out"> <div class="row2 btn-in vard3in End-"> <p>End</p> </div> </div> <div class="btn-out vard3out"> <div class="row2 btn-in vard3in PageDown-"> <p>PgDn</p> </div> </div> </div> <div class="row row-3"> <div class="btn-out vard3out" style="flex-grow: 0.5"> <div class="row3 btn-in vard3in CapsLock-"> <p style="color: #bd93f9">Caps Lock</p> </div> </div> <div class="btn-out vard2out"> <div class="row3 btn-in vard2in KeyA-"> <p>A</p> </div> </div> <div class="btn-out vard2out"> <div class="row3 btn-in vard2in KeyS-"> <p>S</p> </div> </div> <div class="btn-out vard2out"> <div class="row3 btn-in vard2in KeyD-"> <p>D</p> </div> </div> <div class="btn-out vard2out"> <div class="row3 btn-in vard2in KeyF-"> <p>F</p> </div> </div> <div class="btn-out vard2out"> <div class="row3 btn-in vard2in KeyG-"> <p>G</p> </div> </div> <div class="btn-out vard2out"> <div class="row3 btn-in vard2in KeyH-"> <p>H</p> </div> </div> <div class="btn-out vard2out"> <div class="row3 btn-in vard2in KeyJ-"> <p>J</p> </div> </div> <div class="btn-out vard2out"> <div class="row3 btn-in vard2in KeyK-"> <p>K</p> </div> </div> <div class="btn-out vard2out"> <div class="row3 btn-in vard2in KeyL-"> <p>L</p> </div> </div> <div class="btn-out vard2out"> <div class="row3 btn-in vard2in Semicolon-"> <p>:</p> <p>;</p> </div> </div> <div class="btn-out vard2out"> <div class="row3 btn-in vard2in Quote-"> <p>"</p> <p>\'</p> </div> </div> <div class="btn-out vard1out" style="flex-grow: 1; margin-right: 172px" > <div class="Enter btn-in vard1in Enter-"> <p style="color: black">Enter</p> </div> </div> </div> <div class="row row-4"> <div class="btn-out vard3out" style="flex-grow: 1"> <div class="row4 btn-in vard3in ShiftLeft-"> <p style="color: #8be9fd">Shift</p> </div> </div> <div class="btn-out vard2out"> <div class="row4 btn-in vard2in KeyZ-"> <p>Z</p> </div> </div> <div class="btn-out vard2out"> <div class="row4 btn-in vard2in KeyX-"> <p>Z</p> </div> </div> <div class="btn-out vard2out"> <div class="row4 btn-in vard2in KeyC-"> <p>C</p> </div> </div> <div class="btn-out vard2out"> <div class="row4 btn-in vard2in KeyV-"> <p>V</p> </div> </div> <div class="btn-out vard2out"> <div class="row4 btn-in vard2in KeyB-"> <p>B</p> </div> </div> <div class="btn-out vard2out"> <div class="row4 btn-in vard2in KeyN-"> <p>N</p> </div> </div> <div class="btn-out vard2out"> <div class="row4 btn-in vard2in KeyM-"> <p>M</p> </div> </div> <div class="btn-out vard2out"> <div class="row4 btn-in vard2in Comma-"> <p><</p> <p>,</p> </div> </div> <div class="btn-out vard2out"> <div class="row4 btn-in vard2in Period-"> <p>></p> <p>.</p> </div> </div> <div class="btn-out vard2out"> <div class="row4 btn-in vard2in Slash-"> <p>?</p> <p>/</p> </div> </div> <div class="btn-out vard3out" style="flex-grow: 1.6"> <div class="row4 btn-in vard3in ShiftRight-"> <p style="color: #8be9fd">Shift</p> </div> </div> <div class="btn-out vard5out" style="margin: 0 54px 0 64px"> <div class="row4 btn-in vard5in ArrowUp-"> <p style="color: black">↑</p> </div> </div> </div> <div class="row row-5"> <div class="btn-out vard3out" style="flex-grow: 0.1"> <div class="row5 btn-in vard3in ControlLeft-"> <p style="color: #f1fa8c">Ctrl</p> </div> </div> <div class="btn-out vard3out"> <div class="row5 btn-in vard3in ControlLeft-"> <p style="color: #ff79c6">Win</p> </div> </div> <div class="btn-out vard3out" style="flex-grow: 0.1"> <div class="row5 btn-in vard3in AltLeft-"> <p style="color: #bd93f9">Alt</p> </div> </div> <div class="btn-out vard1out" style="flex-grow: 1"> <div class="Space btn-in vard1in Space-"> <p style="color: black">spacebar</p> </div> </div> <div class="btn-out vard3out" style="flex-grow: 0.1"> <div class="row5 btn-in vard3in AltRight-"> <p style="color: #bd93f9">Alt</p> </div> </div> <div class="btn-out vard3out"> <div class="row5 btn-in vard3in ControlLeft-"> <p style="color: #ff79c6">Win</p> </div> </div> <div class="btn-out vard3out" style="flex-grow: 0.1"> <div class="row5 btn-in vard3in ControlRight-"> <p style="color: #f1fa8c">Ctrl</p> </div> </div> <div class="btn-out vard4out" style="margin-left: 10px"> <div class="row5 btn-in vard4in ArrowLeft-"> <p style="color: black">←</p> </div> </div> <div class="btn-out vard1out"> <div class="row5 btn-in vard1in ArrowDown-"> <p style="color: black">↓</p> </div> </div> <div class="btn-out vard6out"> <div class="row5 btn-in vard6in ArrowRight-"> <p style="color: black">→</p> </div> </div> </div> </div> </div>',
  Laser_75outer:
    '<div class="Laser_75outer center"> <div class="Laser_75inner middle"> <div class="row row-0"> <div class="btn-out varl1out"> <div class="row0 btn-in varl1in Escape-"> <p>Esc</p> </div> </div> <div class="btn-out varl2out"> <div class="row0 btn-in varl2in F1-"> <p>F1</p> </div> </div> <div class="btn-out varl2out"> <div class="row0 btn-in varl2in F2-"> <p>F2</p> </div> </div> <div class="btn-out varl2out"> <div class="row0 btn-in varl2in F3-"> <p>F3</p> </div> </div> <div class="btn-out varl2out"> <div class="row0 btn-in varl2in F4-"> <p>F4</p> </div> </div> <div class="btn-out varl3out"> <div class="row0 btn-in varl3in F5-"> <p style="color: #ff7ece">F5</p> </div> </div> <div class="btn-out varl3out"> <div class="row0 btn-in varl3in F6-"> <p style="color: #ff7ece">F6</p> </div> </div> <div class="btn-out varl3out"> <div class="row0 btn-in varl3in F7-"> <p style="color: #ff7ece">F7</p> </div> </div> <div class="btn-out varl3out"> <div class="row0 btn-in varl3in F8-"> <p style="color: #ff7ece">F8</p> </div> </div> <div class="btn-out varl2out"> <div class="row0 btn-in varl2in F9-"> <p>F9</p> </div> </div> <div class="btn-out varl2out"> <div class="row0 btn-in varl2in F10-"> <p>F10</p> </div> </div> <div class="btn-out varl2out"> <div class="row0 btn-in varl2in F11-"> <p>F11</p> </div> </div> <div class="btn-out varl2out"> <div class="row0 btn-in varl2in F12-"> <p>F12</p> </div> </div> <div class="btn-out varl3out"> <div class="row0 btn-in varl3in"> <p style="color: #ff7ece">PrtSc</p> <p style="color: #ff7ece">NumLk</p> </div> </div> <div class="btn-out varl3out"> <div class="row0 btn-in varl3in"> <p style="color: #ff7ece">Pause</p> <p style="color: #ff7ece">ScrLk</p> </div> </div> <div class="btn-out varl3out"> <div class="row0 btn-in varl3in"> <p style="color: #ff7ece">Delete</p> <p style="color: #ff7ece">Insert</p> </div> </div> </div> <div class="row row-1"> <div class="btn-out varl3out"> <div class="row1 btn-in varl3in Backquote-"> <p style="color: #ff7ece">~</p> <p style="color: #ff7ece">`</p> </div> </div> <div class="btn-out varl2out"> <div class="row1 btn-in varl2in Digit1-"> <p>!</p> <p>1</p> </div> </div> <div class="btn-out varl2out"> <div class="row1 btn-in varl2in Digit2-"> <p>@</p> <p>2</p> </div> </div> <div class="btn-out varl2out"> <div class="row1 btn-in varl2in Digit3-"> <p>#</p> <p>3</p> </div> </div> <div class="btn-out varl2out"> <div class="row1 btn-in varl2in Digit4-"> <p>$</p> <p>4</p> </div> </div> <div class="btn-out varl2out"> <div class="row1 btn-in varl2in Digit5-"> <p>%</p> <p>5</p> </div> </div> <div class="btn-out varl2out"> <div class="row1 btn-in varl2in Digit6-"> <p>^</p> <p>6</p> </div> </div> <div class="btn-out varl2out"> <div class="row1 btn-in varl2in Digit7-"> <p>&</p> <p>7</p> </div> </div> <div class="btn-out varl2out"> <div class="row1 btn-in varl2in Digit8-"> <p>*</p> <p>8</p> </div> </div> <div class="btn-out varl2out"> <div class="row1 btn-in varl2in Digit9-"> <p>(</p> <p>9</p> </div> </div> <div class="btn-out varl2out"> <div class="row1 btn-in varl2in Digit0-"> <p>)</p> <p>0</p> </div> </div> <div class="btn-out varl2out"> <div class="row1 btn-in varl2in Minus-"> <p>_</p> <p>-</p> </div> </div> <div class="btn-out varl2out"> <div class="row1 btn-in varl2in Equal-"> <p>+</p> <p>=</p> </div> </div> <div class="btn-out varl3out" style="flex-grow: 2"> <div class="Backspace btn-in varl3in Backspace-"> <p style="color: #ff79c6">Backspace</p> </div> </div> <div class="btn-out varl3out"> <div class="row1 btn-in varl3in Numpad7-"> <p style="color: #ff7ece">Home</p> </div> </div> </div> <div class="row row-2"> <div class="btn-out varl3out" style="flex-grow: 0.8"> <div class="row2 btn-in varl3in Tab-"> <p style="color: #ff79c6">Tab</p> </div> </div> <div class="btn-out varl2out"> <div class="row2 btn-in varl2in KeyQ-"> <p>Q</p> </div> </div> <div class="btn-out varl2out"> <div class="row2 btn-in varl2in KeyW-"> <p>W</p> </div> </div> <div class="btn-out varl2out"> <div class="row2 btn-in varl2in KeyE-"> <p>E</p> </div> </div> <div class="btn-out varl2out"> <div class="row2 btn-in varl2in KeyR-"> <p>R</p> </div> </div> <div class="btn-out varl2out"> <div class="row2 btn-in varl2in KeyT-"> <p>T</p> </div> </div> <div class="btn-out varl2out"> <div class="row2 btn-in varl2in KeyY-"> <p>Y</p> </div> </div> <div class="btn-out varl2out"> <div class="row2 btn-in varl2in KeyU-"> <p>U</p> </div> </div> <div class="btn-out varl2out"> <div class="row2 btn-in varl2in KeyI-"> <p>I</p> </div> </div> <div class="btn-out varl2out"> <div class="row2 btn-in varl2in KeyO-"> <p>O</p> </div> </div> <div class="btn-out varl2out"> <div class="row2 btn-in varl2in KeyP-"> <p>P</p> </div> </div> <div class="btn-out varl2out"> <div class="row2 btn-in varl2in BracketLeft-"> <p>{</p> <p>[</p> </div> </div> <div class="btn-out varl2out"> <div class="row2 btn-in varl2in BracketRight-"> <p>}</p> <p>]</p> </div> </div> <div class="btn-out varl2out" style="flex-grow: 1"> <div class="row2 btn-in varl2in Backslash-"> <p>|</p> <p>\\</p> </div> </div> <div class="btn-out varl3out"> <div class="row2 btn-in varl3in PageUp-"> <p style="color: #ff7ece">PgUp</p> </div> </div> </div> <div class="row row-3"> <div class="btn-out varl3out" style="flex-grow: 0.5"> <div class="row3 btn-in varl3in CapsLock-"> <p style="color: #ff7ece">Caps Lock</p> </div> </div> <div class="btn-out varl2out"> <div class="row3 btn-in varl2in KeyA-"> <p>A</p> </div> </div> <div class="btn-out varl2out"> <div class="row3 btn-in varl2in KeyS-"> <p>S</p> </div> </div> <div class="btn-out varl2out"> <div class="row3 btn-in varl2in KeyD-"> <p>D</p> </div> </div> <div class="btn-out varl2out"> <div class="row3 btn-in varl2in KeyF-"> <p>F</p> </div> </div> <div class="btn-out varl2out"> <div class="row3 btn-in varl2in KeyG-"> <p>G</p> </div> </div> <div class="btn-out varl2out"> <div class="row3 btn-in varl2in KeyH-"> <p>H</p> </div> </div> <div class="btn-out varl2out"> <div class="row3 btn-in varl2in KeyJ-"> <p>J</p> </div> </div> <div class="btn-out varl2out"> <div class="row3 btn-in varl2in KeyK-"> <p>K</p> </div> </div> <div class="btn-out varl2out"> <div class="row3 btn-in varl2in KeyL-"> <p>L</p> </div> </div> <div class="btn-out varl2out"> <div class="row3 btn-in varl2in Semicolon-"> <p>:</p> <p>;</p> </div> </div> <div class="btn-out varl2out"> <div class="row3 btn-in varl2in Quote-"> <p>"</p> <p>\'</p> </div> </div> <div class="btn-out varl3out" style="flex-grow: 1"> <div class="Enter btn-in varl3in Enter-"> <p style="color: #ff7ece">Enter</p> </div> </div> <div class="btn-out varl3out"> <div class="row3 btn-in varl3in PageDown-"> <p style="color: #ff7ece">PgDn</p> </div> </div> </div> <div class="row row-4"> <div class="btn-out varl3out" style="flex-grow: 1"> <div class="row4 btn-in varl3in ShiftLeft-"> <p style="color: #ff7ece">Shift</p> </div> </div> <div class="btn-out varl2out"> <div class="row4 btn-in varl2in KeyZ-"> <p>Z</p> </div> </div> <div class="btn-out varl2out"> <div class="row4 btn-in varl2in KeyX-"> <p>Z</p> </div> </div> <div class="btn-out varl2out"> <div class="row4 btn-in varl2in KeyC-"> <p>C</p> </div> </div> <div class="btn-out varl2out"> <div class="row4 btn-in varl2in KeyV-"> <p>V</p> </div> </div> <div class="btn-out varl2out"> <div class="row4 btn-in varl2in KeyB-"> <p>B</p> </div> </div> <div class="btn-out varl2out"> <div class="row4 btn-in varl2in KeyN-"> <p>N</p> </div> </div> <div class="btn-out varl2out"> <div class="row4 btn-in varl2in KeyM-"> <p>M</p> </div> </div> <div class="btn-out varl2out"> <div class="row4 btn-in varl2in Comma-"> <p><</p> <p>,</p> </div> </div> <div class="btn-out varl2out"> <div class="row4 btn-in varl2in Period-"> <p>></p> <p>.</p> </div> </div> <div class="btn-out varl2out"> <div class="row4 btn-in varl2in Slash-"> <p>?</p> <p>/</p> </div> </div> <div class="btn-out varl3out" style="flex-grow: 0.8"> <div class="row4 btn-in varl3in ShiftRight-"> <p style="color: #ff7ece">Shift</p> </div> </div> <div class="btn-out varl1out"> <div class="row4 btn-in varl1in ArrowUp-"> <p>↑</p> </div> </div> <div class="btn-out varl3out"> <div class="row4 btn-in varl3in End-"> <p style="color: #ff7ece">End</p> </div> </div> </div> <div class="row row-5"> <div class="btn-out varl3out" style="flex-grow: 0.1"> <div class="row5 btn-in varl3in ControlLeft-"> <p style="color: #ff7ece">Ctrl</p> </div> </div> <div class="btn-out varl3out"> <div class="row5 btn-in varl3in"> <p style="color: #ff79c6">Win</p> </div> </div> <div class="btn-out varl3out" style="flex-grow: 0.1"> <div class="row5 btn-in varl3in AltLeft-"> <p style="color: #ff7ece">Alt</p> </div> </div> <div class="btn-out varl1out" style="flex-grow: 1"> <div class="Space btn-in varl1in Space-"> <p>spacebar</p> </div> </div> <div class="btn-out varl3out" style="flex-grow: 0.1"> <div class="row5 btn-in varl3in AltRight-"> <p style="color: #ff7ece">Alt</p> </div> </div> <div class="btn-out varl3out"> <div class="row5 btn-in varl3in"> <p style="color: #ff79c6">Fn</p> </div> </div> <div class="btn-out varl3out" style="flex-grow: 0.1"> <div class="row5 btn-in varl3in ControlRight-"> <p style="color: #ff7ece">Ctrl</p> </div> </div> <div class="btn-out varl1out"> <div class="row5 btn-in varl1in ArrowLeft-"> <p>←</p> </div> </div> <div class="btn-out varl1out"> <div class="row5 btn-in varl1in ArrowDown-"> <p>↓</p> </div> </div> <div class="btn-out varl1out"> <div class="row5 btn-in varl1in ArrowRight-"> <p>→</p> </div> </div> </div> </div> </div>',
  Olivia_WKL_75outer:
    ' <div class="Olivia_WKL_75outer center"> <div class="Olivia_WKL_75inner middle"> <div class="row row-0"> <div class="btn-out varo1out"> <div class="row0 btn-in varo1in Escape-"> <p>Esc</p> </div> </div> <div class="btn-out varo2out" style="margin-left: 27px"> <div class="row0 btn-in varo2in F1-"> <p>F1</p> </div> </div> <div class="btn-out varo2out"> <div class="row0 btn-in varo2in F2-"> <p>F2</p> </div> </div> <div class="btn-out varo2out"> <div class="row0 btn-in varo2in F3-"> <p>F3</p> </div> </div> <div class="btn-out varo2out"> <div class="row0 btn-in varo2in F4-"> <p>F4</p> </div> </div> <div class="btn-out varo3out" style="margin-left: 27px"> <div class="row0 btn-in varo3in F5-"> <p style="color: #f1beb0">F5</p> </div> </div> <div class="btn-out varo3out"> <div class="row0 btn-in varo3in F6-"> <p style="color: #f1beb0">F6</p> </div> </div> <div class="btn-out varo3out"> <div class="row0 btn-in varo3in F7-"> <p style="color: #f1beb0">F7</p> </div> </div> <div class="btn-out varo3out"> <div class="row0 btn-in varo3in F8-"> <p style="color: #f1beb0">F8</p> </div> </div> <div class="btn-out varo2out" style="margin-left: 27px"> <div class="row0 btn-in varo2in F9-"> <p>F9</p> </div> </div> <div class="btn-out varo2out"> <div class="row0 btn-in varo2in F10-"> <p>F10</p> </div> </div> <div class="btn-out varo2out"> <div class="row0 btn-in varo2in F11-"> <p>F11</p> </div> </div> <div class="btn-out varo2out"> <div class="row0 btn-in varo2in F12-"> <p>F12</p> </div> </div> <div class="btn-out varo3out" style="margin-left: 27px"> <div class="row0 btn-in varo3in"> <p style="color: #f1beb0">Delete</p> </div> </div> </div> <br /> <div class="row row-1"> <div class="btn-out varo3out"> <div class="row1 btn-in varo3in Backquote-"> <p style="color: #f1beb0">~</p> <p style="color: #f1beb0">`</p> </div> </div> <div class="btn-out varo2out"> <div class="row1 btn-in varo2in Digit1-"> <p>!</p> <p>1</p> </div> </div> <div class="btn-out varo2out"> <div class="row1 btn-in varo2in Digit2-"> <p>@</p> <p>2</p> </div> </div> <div class="btn-out varo2out"> <div class="row1 btn-in varo2in Digit3-"> <p>#</p> <p>3</p> </div> </div> <div class="btn-out varo2out"> <div class="row1 btn-in varo2in Digit4-"> <p>$</p> <p>4</p> </div> </div> <div class="btn-out varo2out"> <div class="row1 btn-in varo2in Digit5-"> <p>%</p> <p>5</p> </div> </div> <div class="btn-out varo2out"> <div class="row1 btn-in varo2in Digit6-"> <p>^</p> <p>6</p> </div> </div> <div class="btn-out varo2out"> <div class="row1 btn-in varo2in Digit7-"> <p>&</p> <p>7</p> </div> </div> <div class="btn-out varo2out"> <div class="row1 btn-in varo2in Digit8-"> <p>*</p> <p>8</p> </div> </div> <div class="btn-out varo2out"> <div class="row1 btn-in varo2in Digit9-"> <p>(</p> <p>9</p> </div> </div> <div class="btn-out varo2out"> <div class="row1 btn-in varo2in Digit0-"> <p>)</p> <p>0</p> </div> </div> <div class="btn-out varo2out"> <div class="row1 btn-in varo2in Minus-"> <p>_</p> <p>-</p> </div> </div> <div class="btn-out varo2out"> <div class="row1 btn-in varo2in Equal-"> <p>+</p> <p>=</p> </div> </div> <div class="btn-out varo3out" style="flex-grow: 2"> <div class="Backspace btn-in varo3in Backspace-"> <p style="color: #f1beb0">Backspace</p> </div> </div> <div class="btn-out varo3out"> <div class="row1 btn-in varo3in Numpad7-"> <p style="color: #f1beb0">Home</p> </div> </div> </div> <div class="row row-2"> <div class="btn-out varo3out" style="flex-grow: 0.8"> <div class="row2 btn-in varo3in Tab-"> <p style="color: #f1beb0">Tab</p> </div> </div> <div class="btn-out varo2out"> <div class="row2 btn-in varo2in KeyQ-"> <p>Q</p> </div> </div> <div class="btn-out varo2out"> <div class="row2 btn-in varo2in KeyW-"> <p>W</p> </div> </div> <div class="btn-out varo2out"> <div class="row2 btn-in varo2in KeyE-"> <p>E</p> </div> </div> <div class="btn-out varo2out"> <div class="row2 btn-in varo2in KeyR-"> <p>R</p> </div> </div> <div class="btn-out varo2out"> <div class="row2 btn-in varo2in KeyT-"> <p>T</p> </div> </div> <div class="btn-out varo2out"> <div class="row2 btn-in varo2in KeyY-"> <p>Y</p> </div> </div> <div class="btn-out varo2out"> <div class="row2 btn-in varo2in KeyU-"> <p>U</p> </div> </div> <div class="btn-out varo2out"> <div class="row2 btn-in varo2in KeyI-"> <p>I</p> </div> </div> <div class="btn-out varo2out"> <div class="row2 btn-in varo2in KeyO-"> <p>O</p> </div> </div> <div class="btn-out varo2out"> <div class="row2 btn-in varo2in KeyP-"> <p>P</p> </div> </div> <div class="btn-out varo2out"> <div class="row2 btn-in varo2in BracketLeft-"> <p>{</p> <p>[</p> </div> </div> <div class="btn-out varo2out"> <div class="row2 btn-in varo2in BracketRight-"> <p>}</p> <p>]</p> </div> </div> <div class="btn-out varo2out" style="flex-grow: 1"> <div class="row2 btn-in varo2in Backslash-"> <p>|</p> <p>\\</p> </div> </div> <div class="btn-out varo3out"> <div class="row2 btn-in varo3in PageUp-"> <p style="color: #f1beb0">PgUp</p> </div> </div> </div> <div class="row row-3"> <div class="btn-out varo3out" style="flex-grow: 0.5"> <div class="row3 btn-in varo3in CapsLock-"> <p style="color: #f1beb0">Caps Lock</p> </div> </div> <div class="btn-out varo2out"> <div class="row3 btn-in varo2in KeyA-"> <p>A</p> </div> </div> <div class="btn-out varo2out"> <div class="row3 btn-in varo2in KeyS-"> <p>S</p> </div> </div> <div class="btn-out varo2out"> <div class="row3 btn-in varo2in KeyD-"> <p>D</p> </div> </div> <div class="btn-out varo2out"> <div class="row3 btn-in varo2in KeyF-"> <p>F</p> </div> </div> <div class="btn-out varo2out"> <div class="row3 btn-in varo2in KeyG-"> <p>G</p> </div> </div> <div class="btn-out varo2out"> <div class="row3 btn-in varo2in KeyH-"> <p>H</p> </div> </div> <div class="btn-out varo2out"> <div class="row3 btn-in varo2in KeyJ-"> <p>J</p> </div> </div> <div class="btn-out varo2out"> <div class="row3 btn-in varo2in KeyK-"> <p>K</p> </div> </div> <div class="btn-out varo2out"> <div class="row3 btn-in varo2in KeyL-"> <p>L</p> </div> </div> <div class="btn-out varo2out"> <div class="row3 btn-in varo2in Semicolon-"> <p>:</p> <p>;</p> </div> </div> <div class="btn-out varo2out"> <div class="row3 btn-in varo2in Quote-"> <p>"</p> <p>\'</p> </div> </div> <div class="btn-out varo3out" style="flex-grow: 1"> <div class="Enter btn-in varo3in Enter-"> <p style="color: #f1beb0">Enter</p> </div> </div> <div class="btn-out varo3out"> <div class="row3 btn-in varo3in PageDown-"> <p style="color: #f1beb0">PgDn</p> </div> </div> </div> <div class="row row-4"> <div class="btn-out varo3out" style="flex-grow: 1"> <div class="row4 btn-in varo3in ShiftLeft-"> <p style="color: #f1beb0">Shift</p> </div> </div> <div class="btn-out varo2out"> <div class="row4 btn-in varo2in KeyZ-"> <p>Z</p> </div> </div> <div class="btn-out varo2out"> <div class="row4 btn-in varo2in KeyX-"> <p>Z</p> </div> </div> <div class="btn-out varo2out"> <div class="row4 btn-in varo2in KeyC-"> <p>C</p> </div> </div> <div class="btn-out varo2out"> <div class="row4 btn-in varo2in KeyV-"> <p>V</p> </div> </div> <div class="btn-out varo2out"> <div class="row4 btn-in varo2in KeyB-"> <p>B</p> </div> </div> <div class="btn-out varo2out"> <div class="row4 btn-in varo2in KeyN-"> <p>N</p> </div> </div> <div class="btn-out varo2out"> <div class="row4 btn-in varo2in KeyM-"> <p>M</p> </div> </div> <div class="btn-out varo2out"> <div class="row4 btn-in varo2in Comma-"> <p><</p> <p>,</p> </div> </div> <div class="btn-out varo2out"> <div class="row4 btn-in varo2in Period-"> <p>></p> <p>.</p> </div> </div> <div class="btn-out varo2out"> <div class="row4 btn-in varo2in Slash-"> <p>?</p> <p>/</p> </div> </div> <div class="btn-out varo3out" style="flex-grow: 0.8"> <div class="row4 btn-in varo3in ShiftRight-"> <p style="color: #f1beb0">Shift</p> </div> </div> <div class="btn-out varo1out"> <div class="row4 btn-in varo1in ArrowUp-"> <p>↑</p> </div> </div> <div class="btn-out varo3out"> <div class="row4 btn-in varo3in End-"> <p style="color: #f1beb0">End</p> </div> </div> </div> <div class="row row-5"> <div class="btn-out varo3out" style="flex-grow: 0.1"> <div class="row5 btn-in varo3in ControlLeft-"> <p style="color: #f1beb0">Ctrl</p> </div> </div> <div class="btn-out varo3out" style="flex-grow: 0.1; margin-left: 50px" > <div class="row5 btn-in varo3in AltLeft-"> <p style="color: #f1beb0">Alt</p> </div> </div> <div class="btn-out varo1out" style="flex-grow: 1.5"> <div class="Space btn-in varo1in Space-"> <p>spacebar</p> </div> </div> <div class="btn-out varo3out" style="flex-grow: 0.1; margin-right: 48px" > <div class="row5 btn-in varo3in AltRight-"> <p style="color: #f1beb0">Win</p> </div> </div> <div class="btn-out varo1out"> <div class="row5 btn-in varo1in ArrowLeft-"> <p>←</p> </div> </div> <div class="btn-out varo1out"> <div class="row5 btn-in varo1in ArrowDown-"> <p>↓</p> </div> </div> <div class="btn-out varo1out"> <div class="row5 btn-in varo1in ArrowRight-"> <p>→</p> </div> </div> </div> </div> </div>',
};

const keyboardcontainer = document.querySelector(".keyboardcontainer");
keyboardcontainer.innerHTML = keyboardlayouts[currl];
layouts.addEventListener("change", () => {
  layouts.blur();
  input_area.focus();
  currl = layouts.value;
  keyboardcontainer.innerHTML = keyboardlayouts[currl];
  // document.querySelector(`.${currl}`).classList.add("hidden");
  // document.querySelector(`.${currl}`).classList.remove("hidden");
});

// On Key Down visual and audio effect
document.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    if (e.code === "Escape") {
      finishGame();
    }
    const btn = document
      .querySelector(`.${currl}`)
      .querySelector(`.${e.code}-`);
    if (btn) {
      btn.classList.add("active-class");
      if (!mute) {
        for (let i = 0; i < 6; ++i) {
          if (rows[i].includes(e.code)) {
            const audio = document.querySelector(`audio[data-key="row${i}"]`);
            audio.play();
            return;
          }
        }
        const audio = document.querySelector(`audio[data-key="${e.code}"]`);
        if (audio) {
          audio.play();
        }
      }
    }
  }
});

// on Key Up visual and audio effect
document.addEventListener("keyup", (e) => {
  const btn = document.querySelector(`.${currl}`).querySelector(`.${e.code}-`);
  if (btn) {
    btn.classList.remove("active-class");
    if (!mute) {
      for (let i = 0; i < 6; ++i) {
        if (rows[i].includes(e.code)) {
          const audio = document.querySelector(`audio[data-key="rowR"]`);
          audio.play();
          return;
        }
      }
      const audio = document.querySelector(`audio[data-key="${e.code}R"]`);
      if (audio) {
        audio.play();
      }
    }
  }
});

// On Mouse Click visual and audio effect
document.querySelectorAll(".btn-in").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!mute) {
      const audio = document.querySelector(
        `audio[data-key="${btn.classList[0]}"]`
      );
      audio.play();
    }
  });
});

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
  "Abnegation,",
  "Aggr'andize",
  "Alacr;ity",
  "Anachronistic",
  "Arche;typal",
  "Ascetic",
  "Beguile",
  "Blandi'shment",
  "Cajole",
  "Callous",
  "Camaraderie",
  "Cir[cum]locution",
  "Clamour",
  "Cognizant",
  "Cons@true",
  "Convivial",
  "Demagogue",
  "Deni&grate",
  "Didactic",
  "Disparate",
  "Eclectic,",
  "Egregious",
  "Embezzlement",
  "Enervate",
  "Ephemeral",
  "Equanimity",
  "Fat'uous",
  "Gratuitous",
  "Icon:oclast",
  "Idiosyn 1023 cratic",
  "Incumbent;",
  "Inveterate",
  "Libertarian",
  "Licentious",
  "Largess",
  "Multifarious",
  "Obdurate",
  "Ost!1racism!",
  "Pejorative",
  "Pertina 534 cious",
  "Phlegma;tic",
  "Promulg'ate",
  "Quotidian",
  "Recal{citrant}",
  "Sancti(mon)ious",
  "Solipsism",
  "Travest;y",
  "Ubiquit'ous.",
  "Vicissitude,",
  "Voci 9845 ferous'",
  "Abject/12",
  "Abscond3",
  "Bereft53",
  "Capitu 545 late",
  "Umbr:age",
  "Emollient",
  "Dirge",
  "Dispel",
  "Epistolary",
  "Epistolary",
  "Exacerbate",
  "Forbearance,",
  "Gourmand",
  "Heterogeneous",
  "Impecunious",
  "Pellucid",
  "Philanthropic",
  "Protean",
  "Spurious",
  "Milieu",
  "Smaragdine.",
  "Soubrette",
  "Albumen",
  "Eudaemonic",
  "Chiaroscurist",
  "Autochthonous",
  "Insouciant",
  "Staphy,lococci",
  "Foulard",
  "Conscientious",
  "Mlechchha",
  "Woebegoneness",
  "Milquetoast",
  "Eudae 7892 monic",
  "Chauffeur",
  "Staphylococci.",
  "Cymotrichous",
  "Para:phernalia",
  "Crystallographer",
  "Pince-nez",
  "Crustace'ology",
  "Odontalgia.",
  "Surveillance",
  "Idiosync;rasy",
  "Acquiesce",
  "Feldenkrais",
  "Neuter 7657 cane",
  "Xenarthra",
  "Wednesday",
  "Bologna.",
  "Playw 982 right",
  "Minuscule",
  "Sacrile#@$gious",
  "Psoriasis",
  "Narcis'sistic",
  "En-tre-pre-neur",
  "Light432ning",
  "Hand,kerchief",
];

// selecting required elements
let timer_text = document.querySelector(".curr_time");
let accuracy_text = document.querySelector(".curr_accuracy");
let error_text = document.querySelector(".curr_errors");
let correct_text = document.querySelector(".curr_corrects");
let cpm_text = document.querySelector(".cpm_value");
let wpm_text = document.querySelector(".wpm_value");
let typing_text = document.querySelector(".typing_area");
let input_area = document.querySelector(".input_area");
let start_btn = document.querySelector(".start");
let cpm_group = document.querySelector(".cpm");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".keystrokes");
let accuracy_group = document.querySelector(".accuracy");
let end = document.querySelector(".end");
let diff_text = document.querySelector(".difficulty_value");

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
let mute = 0;

// const fontSize = [12, 18, 24, 30];
// let fontno = 1;

document.querySelector(".start").addEventListener("click", () => {
  document.querySelector(".typing_area").classList.remove("blur");
  document.querySelector(".start").classList.add("hidden");
  resetValues();
});

const display = () => {
  current_para.split("").forEach((char) => {
    const charSpan = document.createElement("span");
    charSpan.style.fontSize = `inherit`;
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
  for (let i = 0; i < 20; ++i) {
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
  // update accuracy text
  // if current text is completely typed
  // irrespective of errors
  if (curr_input.length == current_para.length) {
    // update total errors
    total_errors += errors;
    // clear the input area
    input_area.value = "";
    updaterandompara();
  }
}

// game starting point
function startGame() {
  document.querySelector(".typing_area").classList.remove("blur");
  document.querySelector(".start").classList.add("hidden");
  // once start typing end button appears to stop the typing tests
  end.style.display = "block";
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
  timer_text.textContent = timeLeft + "s";
  error_text.textContent = 0;
  correct_text.textContent = 0;
  // these info will be hidden at the begining
  error_group.style.display = "none";
  accuracy_group.style.display = "none";
  end.style.display = "none";
  cpm_group.style.display = "none";
  wpm_group.style.display = "none";
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
    timer_text.textContent = timeLeft + "s";
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
  timer_text.textContent = `${TIME_LIMIT[timeoption % 5] - timeLeft}`;
  // calculate cpm and wpm
  cpm = Math.round(
    ((characterTyped - total_errors - errors) / timeElapsed) * 60
  );
  wpm = Math.round(
    ((characterTyped - total_errors - errors) / 5 / timeElapsed) * 60
  );
  // update cpm and wpm text
  cpm = Number.isFinite(cpm) && cpm > 0 ? cpm : 0;
  wpm = Number.isFinite(wpm) && wpm > 0 ? wpm : 0;

  cpm_text.textContent = cpm;
  wpm_text.textContent = wpm;

  let correctCharacters = Math.max(characterTyped - (total_errors + errors), 0);
  error_text.textContent = total_errors + errors;
  correct_text.textContent = correctCharacters;
  let accuracyVal = (correctCharacters / characterTyped) * 100;
  accuracy_text.textContent = accuracyVal.toFixed(2);

  // display the error, accuracy cpm and wpm
  end.style.display = "none";
  error_group.style.display = "block";
  accuracy_group.style.display = "block";
  cpm_group.style.display = "block";
  wpm_group.style.display = "block";
  document.querySelector(".typing_area").classList.add("blur");
  document.querySelector(".start").classList.remove("hidden");
}

// selecting the timing option
document.querySelector(".timer").addEventListener("click", () => {
  if (!running) {
    timeoption++;
    timer_text.textContent = `${TIME_LIMIT[timeoption % 5]}s`;
    resetValues();
  }
});

// selecting the difficulty option
document.querySelector(".difficulty").addEventListener("click", () => {
  if (!running) {
    diffopt++;
    diff_text.textContent = `${diff[diffopt % 3]}`;
    // updaterandompara();
    resetValues();
  }
});

resetValues();

document.querySelector(".mute").addEventListener("click", () => {
  mute = (mute + 1) % 2;
  input_area.focus();

  if (mute) {
    document.querySelector(".mute").classList.add("muted");
    document.querySelector(".mute").textContent = "Unmute";
  } else {
    document.querySelector(".mute").textContent = "Mute";
    document.querySelector(".mute").classList.remove("muted");
  }
});

document.querySelector(".icon").addEventListener("click", () => {
  window.location.reload();
});
