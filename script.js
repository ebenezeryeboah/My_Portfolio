const readMoreText = document.querySelector('.read-more-text');

const readMoreButton = document.querySelector('.read-more-button');

readMoreButton.addEventListener('click', () => {
    if (readMoreText.classList.contains('read-more-text')) {
        readMoreText.classList.remove('read-more-text');

    } else {
        readMoreText.classList.add('read-more-text');
    }
})
