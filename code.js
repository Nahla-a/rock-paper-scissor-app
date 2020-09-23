// Matrix:
//    User     Computer    Result/Player
//     0        0            -      -
//     0        1            1      c
//     0        2            0      u
//     1        0            1      u
//     1        1            -      -
//     1        2            1      u
//     2        0            o      c
//     2        1            2      u
//     2        2            -      -



let scoreMatrix = [
    ["", "c", "u"],
    ["u", "", "c"],
    ["c", "u", ""]
]

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorButton = document.getElementById("scissor");

let totalPlayerScore = 0;
let totalComputerScore = 0;

let table = document.getElementById("theTable");
let scoreRow = table.insertRow();
scoreRow.style.border = "2pt solid blue";
let computer = scoreRow.insertCell();
computer.style.border = "2pt dotted pink";
computer.style.margin = "20px";

let user = scoreRow.insertCell();
user.style.border = "2pt dotted pink";
computer.innerHTML = "COMPUTER";
user.innerHTML = "USER";

// Insert a row in the table to show the score om it:
let totalScore = table.insertRow();

let compScore = totalScore.insertCell();
compScore.style.border = "2pt dotted pink";

let playerScore = totalScore.insertCell();
playerScore.style.border = "2pt dotted pink";

rockButton.addEventListener("click", function () {
    computeScore(0);
})

paperButton.addEventListener("click", function () {
    computeScore(1);

})

scissorButton.addEventListener("click", function () {
    computeScore(2);

})


function computeScore(userSelectedOption) {

    let randomSelectedOption = randomSelection();
    let score = scoreMatrix[userSelectedOption][randomSelectedOption]
    if (score == "") {
        alert("No body won")
    } else if (score == "u") {
        alert("You won!!");
        playerScore.innerHTML = ++totalPlayerScore;
        console.log(totalPlayerScore);

    } else if (score == "c") {
        alert("computer won");
        compScore.innerHTML = ++totalComputerScore;
    }
}

function randomSelection() {
    return Math.floor(Math.random() * 3);

}





