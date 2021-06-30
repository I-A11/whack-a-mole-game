const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let timerId = null;
let currentTime = timeLeft.textContent;
const randomSquare = () => {
  square.forEach((className) => {
    className.classList.remove("mole");
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  hitPosition = randomPosition.id;
};

square.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

const moveMole = () => {
  timerId = setInterval(randomSquare, 1000);
};

moveMole();

const countDown = () => {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert(`Game over your score is ${result}`);
    score.innerHTML = 0;
  }
};
let countDownTimerId = setInterval(countDown, 1000);
