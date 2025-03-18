const readMoreText = document.querySelector('.read-more-text');

const readMoreButton = document.querySelector('.read-more-button');

readMoreButton.addEventListener('click', () => {
    if (readMoreText.classList.contains('reveal')) {
        readMoreText.classList.remove('reveal');
        readMoreButton.textContent = "| READ MORE |";

    }
    else {
        readMoreText.classList.add('reveal');
        readMoreButton.textContent = "| READ LESS |"
    }
})
