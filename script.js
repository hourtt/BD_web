document.addEventListener('DOMContentLoaded', function() {
    const landingPage = document.getElementById('landing-page');
    const celebrationPage = document.getElementById('celebration-page');
    const celebrationButton = document.getElementById('celebration-button');
    const confetti = document.getElementById("confetti");
    const decorativeImages = document.getElementById("decorative-images");

    celebrationButton.addEventListener('click', function() {
        // Hide landing page and show celebration page
        landingPage.classList.add('hidden');
        celebrationPage.classList.remove('hidden');
        confetti.classList.remove('hidden');
        decorativeImages.classList.remove('hidden');

        // Fade-in animation for celebration page
        celebrationPage.style.opacity = '0';
        setTimeout(() => {
            celebrationPage.style.opacity = '1';
            celebrationPage.style.transition = 'opacity 1s ease-in-out';
        }, 100);
    });
});

    document.addEventListener('DOMContentLoaded', () => {
        const decorationsContainer = document.getElementById('decorations');
        const draggables = document.querySelectorAll('.draggable');

        draggables.forEach((item) => {
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.src);
            });
        });

        decorationsContainer.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        decorationsContainer.addEventListener('drop', (e) => {
            e.preventDefault();
            const src = e.dataTransfer.getData('text/plain');
            const img = document.createElement('img');
            img.src = src;
            img.style.left = `${e.offsetX}px`;
            img.style.top = `${e.offsetY}px`;
            img.classList.add('absolute');
            decorationsContainer.appendChild(img);
        });
    });