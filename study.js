const deckData = [
    { front: "What is the optimal spatial complexity of an in-place QuickSort partition?", back: "O(log n) auxiliary stack space for pivot indexing." },
    { front: "Define low-poly art optimization.", back: "Reducing polygon mesh counts while preserving geometric silhouette definition." },
    { front: "What is the time complexity matrix for standard matrix multiplication?", back: "O(n^3) using standard iterative triple loops." }
];

let currentIndex = 0;
let isFlipped = false;

const flashcardEl = document.getElementById('flashcard');
const contentEl = document.getElementById('card-content');
const indicatorEl = document.getElementById('card-side-indicator');
const progressEl = document.getElementById('card-progress');

flashcardEl.addEventListener('click', () => {
    isFlipped = !isFlipped;
    if (isFlipped) {
        flashcardEl.classList.add('mesh-flipped');
        indicatorEl.innerText = "VERTEX: BACK (RESOLUTION)";
        contentEl.innerText = deckData[currentIndex].back;
    } else {
        flashcardEl.classList.remove('mesh-flipped');
        indicatorEl.innerText = "VERTEX: FRONT (PREMISE)";
        contentEl.innerText = deckData[currentIndex].front;
    }
});

function handleResponse(responseType) {
    console.log("Logged feedback vector:", responseType);
    currentIndex = (currentIndex + 1) % deckData.length;
    isFlipped = false;
    flashcardEl.classList.remove('mesh-flipped');
    indicatorEl.innerText = "VERTEX: FRONT (PREMISE)";
    contentEl.innerText = deckData[currentIndex].front;
    progressEl.innerText = `Card ${currentIndex + 1} of ${deckData.length}`;
}
