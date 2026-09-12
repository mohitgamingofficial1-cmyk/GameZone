/* =========================
   SCROLL TO GAMES
========================= */


function openGame(gamePage) {
    window.location.href = "games/" + gamePage;
}


function scrollToGames() {

    document.getElementById("games").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   START GAME
========================= */

function startGame(gameName) {

    const popup = document.getElementById("gamePopup");

    const popupTitle = document.getElementById("popupTitle");

    const popupMessage = document.getElementById("popupMessage");

    popupTitle.innerText = gameName;

    popupMessage.innerText =
        gameName + " is coming soon! We are currently building this game.";

    popup.classList.add("show");

}


/* =========================
   CLOSE POPUP
========================= */

function closePopup() {

    const popup = document.getElementById("gamePopup");

    popup.classList.remove("show");

}


/* =========================
   RANDOM GAME
========================= */

function showRandomGame() {

    const games = [
        "Snake",
        "Tic Tac Toe",
        "Memory Cards",
        "Brick Breaker",
        "Rock Paper Scissors",
        "2048",
        "Car Dodge",
        "Number Guess",
        "Flappy Bird",
        "Ping Pong"
    ];

    const randomIndex =
        Math.floor(Math.random() * games.length);

    const randomGame =
        games[randomIndex];

    startGame(randomGame);

}


/* =========================
   CATEGORY FILTER
========================= */

function filterGames(category, clickedButton) {

    const cards =
        document.querySelectorAll(".game-card");

    const buttons =
        document.querySelectorAll(".filter-btn");

    const noResults =
        document.getElementById("noResults");

    let visibleGames = 0;


    /* Remove active from all buttons */

    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    /* Add active to clicked button */

    clickedButton.classList.add("active");


    /* Filter cards */

    cards.forEach(function(card) {

        const cardCategory =
            card.getAttribute("data-category");

        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "block";

            visibleGames++;

        } else {

            card.style.display = "none";

        }

    });


    /* Show no result */

    if (visibleGames === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


/* =========================
   SEARCH GAMES
========================= */

function searchGames() {

    const searchInput =
        document.getElementById("searchInput");

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const cards =
        document.querySelectorAll(".game-card");

    const noResults =
        document.getElementById("noResults");

    let visibleGames = 0;


    cards.forEach(function(card) {

        const gameName =
            card.getAttribute("data-name").toLowerCase();

        const gameText =
            card.innerText.toLowerCase();


        if (
            gameName.includes(searchValue) ||
            gameText.includes(searchValue)
        ) {

            card.style.display = "block";

            visibleGames++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleGames === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


/* =========================
   CLOSE POPUP WHEN
   CLICKING OUTSIDE
========================= */

window.addEventListener("click", function(event) {

    const popup =
        document.getElementById("gamePopup");

    if (event.target === popup) {

        closePopup();

    }

});


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePopup();

    }

   

});