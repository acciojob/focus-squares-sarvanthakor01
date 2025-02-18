// Get all square elements
const squares = document.querySelectorAll('.square');

// Function to change colors
function changeColors(activeSquare) {
    squares.forEach(square => {
        if (square !== activeSquare) {
            square.style.backgroundColor = '#6F4E37'; // Coffee color
        } else {
            square.style.backgroundColor = '#E6E6FA'; // Lavender color
        }
    });
}

// Function to reset colors
function resetColors() {
    squares.forEach(square => {
        square.style.backgroundColor = '#E6E6FA'; // Reset to lavender color
    });
}

// Add event listeners to each square
squares.forEach(square => {
    square.addEventListener('mouseenter', () => changeColors(square));
    square.addEventListener('mouseleave', resetColors);
});