document.querySelectorAll(".openTabLink").forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        var tabId = button.getAttribute("data-tab");
        var gameStats = document.getElementById(tabId);
        if (gameStats.classList.contains("visible")) {
            gameStats.classList.remove("visible");
            gameStats.classList.add("hidden");
        } else {
            gameStats.classList.remove("hidden");
            gameStats.classList.add("visible");
        }
    });
});
