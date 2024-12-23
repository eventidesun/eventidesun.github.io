const buttonEl = document.getElementById("roll");

const diceEl = document.getElementById("dice");

const rollHistoryEl = document.getElementById("roll-history");

const resetButtonEl = document.getElementById("reset");

const darkModeToggle = document.getElementById("dark-mode-button");

let historyList = [];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory() {
    rollHistoryEl.innerHTML = "";
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
        rollHistoryEl.appendChild(listItem);
    }
}

function getDiceFace(rollResult) {
    switch(rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

// Going to be triggered when I click on the roll die button
buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice();
        }, 700)
});

resetButtonEl.addEventListener("click", () => {
    historyList = [];
    rollHistoryEl.innerHTML = "";
    updateRollHistory();
});

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "Light Mode";
    } else {
        document.body.classList.remove("dark-mode");
        darkModeToggle.textContent = "Dark Mode";
    }
});