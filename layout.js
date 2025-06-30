// // layout.js
// export const layout = [
//   // Row 1
//   ["Escape","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12"],

//   // Row 2
//   ["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6",
//    "Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],

//   // Row 3
//   ["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI",
//    "KeyO","KeyP","BracketLeft","BracketRight","Backslash"],

//   // Row 4
//   ["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ",
//    "KeyK","KeyL","Semicolon","Quote","Enter"],

//   // Row 5
//   ["ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM",
//    "Comma","Period","Slash","ShiftRight"],

//   // Row 6
//   ["ControlLeft","MetaLeft","AltLeft","Space","AltRight","MetaRight",
//    "ContextMenu","ControlRight"]
// ];

// export const layout = [
//   // Row 1: Function keys
//   ["Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "PrintScreen", "ScrollLock", "Pause", "Home", "End"],

//   // Row 2: Number row
//   ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "NumLock", "NumpadDivide", "NumpadMultiply", "NumpadSubtract"],

//   // Row 3: QWERTY row
//   ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"],

//   // Row 4: Home row
//   ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],

//   // Row 5: Bottom row
//   ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight"],

//   // Row 6: Ctrl row (Modified)
//   ["ControlLeft", "WinLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowUp"],

//   // Row 7: Navigation cluster (top)
//   ["Insert", "PageUp"],

//   // Row 8: Navigation cluster (bottom)
//   ["Delete", "End", "PageDown"],

//   // Row 9: Arrow keys
//   ["ArrowLeft", "ArrowDown", "ArrowRight"],

//   // Row 11: Numpad mid
//   ["Numpad7", "Numpad8", "Numpad9", "NumpadAdd"],
//   ["Numpad4", "Numpad5", "Numpad6"],
//   ["Numpad1", "Numpad2", "Numpad3", "NumpadEnter"],
//   ["Numpad0", "NumpadDecimal"]
// ];


export const mainBlock = [
  ["Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"],
  ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
  ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"],
  ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],
  ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight"],
  ["ControlLeft", "WinLeft", "AltLeft", "Space", "AltRight", "ControlRight"]
];

export const rightBlock = [
  // Navigation top
  ["PrintScreen", "ScrollLock", "Pause"],
  ["Insert", "Home", "PageUp"],
  ["Delete", "End", "PageDown"],

  // Arrow keys
  ["", "ArrowUp", ""],
  ["ArrowLeft", "ArrowDown", "ArrowRight"],

  // Numpad
  ["NumLock", "NumpadDivide", "NumpadMultiply", "NumpadSubtract"],
  ["Numpad7", "Numpad8", "Numpad9", "NumpadAdd"],
  ["Numpad4", "Numpad5", "Numpad6"],
  ["Numpad1", "Numpad2", "Numpad3", "NumpadEnter"],
  ["Numpad0", "NumpadDecimal"]
];
