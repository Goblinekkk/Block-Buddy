// Initialize Blockly Workspace
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    grid: {
        spacing: 20,
        length: 3,
        colour: '#334155',
        snap: true
    },
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
    },
    trashcan: true,
    theme: Blockly.Themes.Dark
});

// Real-time code generation
function updateCode(event) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    const preview = document.getElementById('codePreview');
    preview.textContent = code || "// Drag blocks to generate code...";
}

workspace.addChangeListener(updateCode);

// Execute the generated code
document.getElementById('runCodeBtn').addEventListener('click', () => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    try {
        // This runs the code in the browser
        eval(code); 
    } catch (e) {
        alert("Execution Error: " + e.message);
    }
});

// Auto-resize workspace when window changes
window.addEventListener('resize', () => Blockly.svgResize(workspace));
