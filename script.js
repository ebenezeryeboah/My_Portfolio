const readMoreText = document.querySelector('.read-more-text');

const readMoreButton = document.querySelector('.read-more-button');
let isRevealed = false

readMoreText.classList.add('reveal');

readMoreButton.addEventListener(
    'click', () => {
        if (isRevealed) {
            readMoreText.classList.add('reveal');
            readMoreButton.textContent = '| READ MORE |';
        } else {
            readMoreText.classList.remove('reveal');
            readMoreButton.textContent = '| READ LESS |';

        }
        isRevealed = !isRevealed

    }
)