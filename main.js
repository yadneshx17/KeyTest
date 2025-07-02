import {mainBlock, rightBlock, mainBlockMac, rightBlockMac} from "./layout.js";


// function macLayout() {
//     document.getElementById("main-block").innerHTML = ""
//     document.getElementById("num-pad").innerHTML = ""
//     renderBlock(mainBlockMac, "main-block")
//     renderBlock(rightBlockMac, "num-pad")

// }

// function windowLayout() {
//     document.getElementById("main-block").innerHTML = ""
//     document.getElementById("num-pad").innerHTML = ""
//     renderBlock(mainBlock, "main-block")
//     renderBlock(rightBlock, "num-pad")
// }

document.getElementById("nor-layout").addEventListener("click", () => {
    document.getElementById("main-block").innerHTML = ""
    document.getElementById("num-pad").innerHTML = ""
    renderBlock(mainBlock, "main-block")
    renderBlock(rightBlock, "num-pad")
    document.body.dataset.layout = "win";
})

document.getElementById("mac-layout").addEventListener("click", () => {
    document.getElementById("main-block").innerHTML = ""
    document.getElementById("num-pad").innerHTML = ""
    renderBlock(mainBlockMac, "main-block")
    renderBlock(rightBlockMac, "num-pad")
    document.body.dataset.layout = "mac";

})


function renderBlock(layout, containerId) {
    const container = document.getElementById(containerId);
    layout.forEach(rowCodes => {
    // Creates one <div class='row'> 
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row')

    rowCodes.forEach(code => {

        // if(code === 'NumpadEnter') {
        //     const keyDiv  = document.createElement('div');
        //     keyDiv.classList.add('key');
        //     keyDiv.dataset.code = code
        //     keyDiv.textContent = prettify(code);
        //     rowDiv.appendChild(keyDiv)
        //     return
        // }



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

// renderBlock(mainBlock, "main-block")
// renderBlock(rightBlock, "num-pad")

window.addEventListener('keydown', (e) => {
    e.preventDefault()
    let code = e.code

    if(e.key === 'Meta' || e.key === 'OS') {
        code = e.code === 'MetaLeft' ? 'MetaLeft' : 'MetaRight'
    }
    // if ( e.key == 'Escape') {
    //     const el = document.querySelector(`.key[data-code="${code}"]`)
    //     if(el) el.classList.add('pressed')
    // }

    const el = document.querySelector(`.key[data-code="${code}"]`)
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

function onLoad() {
    document.getElementById("main-block").innerHTML = ""
    document.getElementById("num-pad").innerHTML = ""
    renderBlock(mainBlock, "main-block")
    renderBlock(rightBlock, "num-pad")
}
onLoad()