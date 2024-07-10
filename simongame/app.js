let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "green", "purple", "red"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    // console.log("Game Started");
    levelup();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 100);
}

//game
function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randBtn);
  btnFlash(randBtn);
  gameSeq.push(randColor);
  // console.log(gameSeq);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game over!! your score <b>${level}</b> Press any key to start`;

    document.querySelector("body").style.backgroundColor = "red";

    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

//user
function btnPress() {
  // console.log(this);
  let btn = this;
  btnFlash(btn);

  userColor = btn.getAttribute("id");
  // console.log(userColor);
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
