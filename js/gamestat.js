document.querySelectorAll('.openTabLink').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const tabId = this.getAttribute('data-tab');
        const gameStats = document.getElementById(tabId);
        if (gameStats.classList.contains('visible')) {
            gameStats.classList.remove('visible');
            gameStats.classList.add('hidden');
        } else {
            gameStats.classList.remove('hidden');
            gameStats.classList.add('visible');
        }
    });
});
