document.getElementById("openTabLink").addEventListener("click", function(event) {
    event.preventDefault();
    var gameStats = document.getElementById("gameStats");
    if (gameStats.classList.contains("hidden")) {
        gameStats.classList.remove("hidden");
    } else {
        gameStats.classList.add("hidden");
    }
});
