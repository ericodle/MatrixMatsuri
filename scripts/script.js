// Constants for elements
const words = document.querySelectorAll('.word');
const sentenceArea = document.getElementById('sentence-area');
const usedWords = new Set(); // To keep track of used words

// Initialize game on button click
document.getElementById('start-button').addEventListener('click', startGame);

// Add event listeners to the words
words.forEach(word => {
    word.addEventListener('dragstart', dragStart);
});

// Start Game Function
function startGame() {
    document.getElementById('splash-screen').style.display = 'none'; // Hide splash screen
    document.getElementById('game-container').style.display = 'block'; // Show game
}

// Drag Start Function
function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.innerText);
}

// Allow Drop Function
function allowDrop(event) {
    event.preventDefault();
}

// Drop Function for adding words to the sentence area
function drop(event) {
    event.preventDefault();
    const word = event.dataTransfer.getData('text/plain');

    // Check if the word is already used
    if (usedWords.has(word)) {
        return; // Prevent adding the word again
    }

    const newWord = createWordElement(word);
    
    // Mark the word as used
    usedWords.add(word);

    // Insert the word at the drop location
    const target = event.target;
    if (target.classList.contains('word')) {
        sentenceArea.insertBefore(newWord, target.nextSibling);
    } else {
        sentenceArea.appendChild(newWord);
    }
}

// Create a new word element
function createWordElement(wordText) {
    const newWord = document.createElement('div');
    newWord.innerText = wordText;
    newWord.classList.add('word');
    newWord.style.backgroundColor = 'lightgreen'; // Change color for visual feedback

    // Add drag functionality to the new word
    newWord.setAttribute('draggable', true);
    newWord.addEventListener('dragstart', dragStart);
    newWord.addEventListener('dragover', allowDrop);
    newWord.addEventListener('drop', handleWordDrop); // Enable repositioning of words

    return newWord;
}

// Handle Word Drop for rearranging
function handleWordDrop(event) {
    event.preventDefault();
    const draggedWordText = event.dataTransfer.getData('text/plain');

    // Remove the dragged word from its current position
    const draggedWord = Array.from(sentenceArea.children).find(child => child.innerText === draggedWordText);
    const newWord = this; // The word being dropped on

    // Move the dragged word to the new position
    if (draggedWord && newWord !== draggedWord) {
        const newWordText = newWord.innerText;
        newWord.innerText = draggedWord.innerText;
        draggedWord.innerText = newWordText;
    }
}

// Allow dragging new words from the sentence area
sentenceArea.addEventListener('dragover', allowDrop);
sentenceArea.addEventListener('drop', drop);
