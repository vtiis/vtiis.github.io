function showModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'flex';

    setTimeout(function() {
        modal.style.display = 'none';
        startGame();
    }, 3000);
}

function startGame() {
    window.location.href = 'game/index.html';
}