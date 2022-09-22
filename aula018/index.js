const Mario = document.querySelector(".Mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");

startButton = document.querySelector("#start");

let score = 0;
let pipePositionScore = pipe.offsetLeft;

const jump = () => {
    Mario.classList.add("jump");
    setTimeout(() => {
        Mario.classList.remove("jump");
    }, 500);
}

function start() {
    pipe.classList.add("pipeStarted");
    clouds.classList.add("cloudsStarted");
    startButton.setAttribute("hidden","hidden");
}

const loop = setInterval(() => {
    const cloudsPosition = clouds.offsetLeft;
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(Mario).bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        Mario.style.animation = "none";
        Mario.style.bottom = `${marioPosition}px`;
        Mario.src = "./images/game-over.png";
        Mario.style.width = "60px";
        Mario.style.marginLeft = "40px";

        clouds.style.left = `${cloudsPosition}px`;
        clouds.style.animation = "none";

        document.getElementById("restart").removeAttribute("hidden");
        clearInterval(loop);
    } else if ( pipePosition <= 64 &&  pipePositionScore != pipePosition){
        pipePositionScore = pipePosition;
        score += 100;
        document.getElementById("score").innerHTML = score;
    }
}, 10);

document.addEventListener("keydown", jump);