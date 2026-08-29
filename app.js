// Main entry point for StudyPlax low-poly client initialization
document.addEventListener("DOMContentLoaded", () => {
    console.log("StudyPlax Low-Poly Client Core initialized successfully.");
});

function saveSettings() {
    const limit = document.getElementById('limit-input').value;
    const algo = document.getElementById('algo-select').value;
    alert(`Configuration Committed!\nLimit: ${limit}\nAlgorithm: ${algo}`);
}
