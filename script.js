const container = document.querySelector('.container');
const newGridButton = document.querySelector('#new-grid');

function getRandomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    container.innerHTML = '';
    container.style.setProperty('--grid-size', size);
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomRgb();
        });
    });
}

newGridButton.addEventListener('click', () => {
    const size = prompt('Enter the number of squares per side (maximum 100):');
    if (size !== null && size !== '') {
        const parsedSize = parseInt(size);
        if (!isNaN(parsedSize) && parsedSize > 0 && parsedSize <= 100) {
            createGrid(parsedSize);
        } else {
            alert('Please enter a valid number between 1 and 100.');
        }
    }
});

createGrid(16);