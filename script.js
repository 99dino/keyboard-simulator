// Key Pressing Sound Effect
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
// On Key Down visual and audio effect
document.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    const btn = document.querySelector(`.${e.code}-`);
    if (btn) {
      btn.classList.add("active-class");
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
});

// on Key Up visual and audio effect
document.addEventListener("keyup", (e) => {
  const btn = document.querySelector(`.${e.code}-`);
  btn.classList.remove("active-class");

  for (let i = 0; i < 6; ++i) {
    if (rows[i].includes(e.code)) {
      const audio = document.querySelector(`audio[data-key="rowR"]`);
      audio.play();
      return;
    }
  }
  const audio = document.querySelector(`audio[data-key="${e.code}R"]`);
  audio.play();
});
