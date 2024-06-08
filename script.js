// Example interaction (hover effect)
const animalCards = document.querySelectorAll('.animal-card');

animalCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)'; // Zoom in on hover
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)'; // Reset on mouse out
    });
});


const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('selected');
    });
});

// second session of Image

const images = document.querySelectorAll('.image');

images.forEach((image) => {
    image.addEventListener('mouseover', () => {
        image.classList.add('hide');
        image.style.borderColor = 'indigo';
        image.style.opacity = '0.5'; /* make the image semi-transparent */
    });

    image.addEventListener('mouseout', () => {
        image.classList.remove('hide');
        image.style.borderColor = '#ccc';
        image.style.opacity = '1'; /* restore the image opacity */
    });
});

/* session to make image transparent */
