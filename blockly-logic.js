const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    scrollbars: true,
    trashcan: true,
    theme: 'dark' // Aby to ladilo k tvému designu
});

function updateCode() {
    // Převod bloků do JavaScriptu
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('codePreview').textContent = code || "// Drag blocks to generate code...";
}

// Sleduj změny na ploše
workspace.addChangeListener(updateCode);

// Tlačítko pro spuštění kódu
document.getElementById('runCodeBtn').addEventListener('click', () => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    try {
        eval(code); // Spustí to, co jsi poskládal z bloků!
    } catch (e) {
        alert("Error in blocks: " + e);
    }
});
