import {mainBlock, rightBlock } from "./layout.js";

function renderBlock(layout, containerId) {
    const container = document.getElementById(containerId);
    layout.forEach(rowCodes => {
    // Creates one <div class='row'> 
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row')

    rowCodes.forEach(code => {
        // Create one <div class="key"> per key

        const keyDiv  = document.createElement('div');
        keyDiv.classList.add('key');

        // <div data-code="KeyA">
        keyDiv.dataset.code = code; 

        keyDiv.textContent = prettify(code);

        // Add key to its Row
        rowDiv.appendChild(keyDiv);
    })

    // Add Rows to KeyBoard
    container.append(rowDiv);
})
}

renderBlock(mainBlock, "main-block")
renderBlock(rightBlock, "num-pad")

window.addEventListener('keydown', (e) => {
    e.preventDefault()
    const el = document.querySelector(`.key[data-code="${e.code}"]`)
    if(el) el.classList.add('pressed')
})

function prettify(code) {
    const arrows = {
        ArrowUp: "↑",
        ArrowDown: "↓",
        ArrowLeft: "←",
        ArrowRight: "→",
    }
    if(arrows[code]) return arrows[code];

    const map = {
        Backquote: "`", Minus: "-", Equal: "=", Backspace: "←",
        BracketLeft: "[", BracketRight: "]", Backslash: "\\",
        Semicolon: ";", Quote: "'", Comma: ",", Period: ".", Slash: "/",
        Tab: "↹", Enter: "⏎", CapsLock: "Caps", Space: "␣",
        ShiftLeft: "Shift", ShiftRight: "Shift",
        ControlLeft: "Ctrl", ControlRight: "Ctrl",
        AltLeft: "Alt", AltRight: "Alt",
        NumLock: "Num"
    };
    if (map[code]) return map[code];
    
    

    return code
    .replace(/^Key/, "")
    .replace(/^Digit/, "")
    .replace(/^Numpad/, "")
    .replace(/^WinLeft/, "Win")
    .replace(/^Numpad/, "")
    .replace("Decimal", ".")
    .replace("Divide", "/")
    .replace("Multiply", "*")
    .replace("Subtract", "-")
    .replace("Add", "+"); 
}