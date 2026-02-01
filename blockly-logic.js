// Inicializace Blockly s lepším nastavením pro spojování
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    grid: {
        spacing: 25,
        length: 3,
        colour: '#334155',
        snap: true // Toto přitáhne blok k mřížce
    },
    move: {
        scrollbars: true,
        drag: true,
        wheel: true
    },
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0
    },
    trashcan: true,
    theme: Blockly.Themes.Dark,
    renderer: 'zelos' // 'zelos' je styl, který vypadá přesně jako Scratch!
});

// Funkce pro generování kódu
function updateCode() {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('codePreview').textContent = code || "// Přetáhni bloky pro kódování...";
}

workspace.addChangeListener(updateCode);

// Spuštění kódu
document.getElementById('runCodeBtn').addEventListener('click', () => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    try {
        eval(code);
    } catch (e) {
        alert("Chyba v kódu: " + e.message);
    }
});
