document.getElementById("openTabLink").addEventListener("click", function(event) {
    event.preventDefault();
    var gameStats = document.getElementById("gameStats");
    if (gameStats.classList.contains("visible")) {
        gameStats.classList.remove("visible");
    } else {
        gameStats.classList.add("visible");
    }
});
