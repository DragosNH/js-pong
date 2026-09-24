let scores = document.querySelector(".player-score");

let scorePlayerOne = document.querySelector("#player-one-score");
let scorePlayerTwo = document.querySelector("#player-two-score");


let speed = 10;

let yPlayerOne = 0;
let yPlayerTwo = 0;

scorePlayerOne.textContent = yPlayerOne;
scorePlayerTwo.textContent = yPlayerTwo;


const playerOne = document.querySelector("#player-one");
const playerTwo = document.querySelector("#player-two");
const ball = document.querySelector("#ball");
const gameContainer = document.querySelector(".game-conatiner");
const keys = {};

gameContainer.height = innerHeight;

scorePlayerOne = 0;
scorePlayerTwo = 0;


document.addEventListener("keydown", e => {
    keys[e.key] = true;
    e.preventDefault()
});

document.addEventListener("keyup", e => {
    keys[e.key] = false;
});

function update() {
    // Player one
    if (keys["s"]) yPlayerOne += speed;
    if (keys["z"]) yPlayerOne -= speed;


    // Player Two
    if (keys["ArrowDown"]) yPlayerTwo += speed;
    if (keys["ArrowUp"]) yPlayerTwo -= speed;


    playerOne.style.transform = `translateY(${yPlayerOne}px)`;
    playerTwo.style.transform = `translateY(${yPlayerTwo}px)`;

    requestAnimationFrame(update);
}

requestAnimationFrame(update)
