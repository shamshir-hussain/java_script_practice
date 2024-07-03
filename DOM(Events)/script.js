// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//   console.log("button was clicked!!");
// };

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//   //   btn.onclick = sayHello;
//   btn.onclick = function () {
//     console.log("clicked");
//   };
// }

// function sayHello() {
//   console.log("clicked");
// }

//onMouseenter

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//   btn.onclick = sayHello;
//   btn.onmouseenter = function () {
//     console.log("hovered");
//   };
// }

// function sayHello() {
//   alert("clicked");
// }

//addEventListener

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
// //   btn.addEventListener("click", sayHello);
// //   btn.addEventListener("click", sayName);
//     // btn.addEventListener("dblclick", sayHello);
// }

// function sayHello() {
//   console.log("Hello");
// }
// function sayName() {
//   alert("WEB Development");
// }

//Activity

// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let h3 = document.querySelector("h3");
//   let random = getRandomColor();
//   h3.innerText = random;

//   let div = document.querySelector("div");
//   div.style.backgroundColor = random;

//   console.log("color updated");
// });

// function getRandomColor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let color = `rgb(${red}, ${green}, ${blue})`;
//   return color;
// }

//multiple events

// let div = document.querySelector("div");
// let h3 = document.querySelector("h3");
// let btn = document.querySelector("button");

// function changeColor() {
//   console.log(this.innerText);
//   this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// div.addEventListener("click", changeColor);

//keyboard events

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//   console.log("code = ", event.code);

//   if (event.code == "KeyW") {
//     console.log("player moved forward");
//   } else if (event.code == "KeyS") {
//     console.log("player moved backward");
//   } else if (event.code == "KeyD") {
//     console.log("player moved right");
//   } else if (event == "KeyA") {
//     console.log("player moved left");
//   }
// });

//form events

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   alert("clicked");
// });

//extracting data

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let user = document.querySelector("#user");
//   let pass = document.querySelector("#pass");

//   console.log(user.value);
//   console.log(pass.value);

//   alert(`Hi ur username:${user.value}, and pass:${pass.value}`);
// });
//another way

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.dir(form);

//   let user = this.elements[0];
//   let pass = this.elements[1];

//   console.log(user.value);
//   console.log(pass.value);

//   alert(`Hi ur username:${user.value}, and pass:${pass.value}`);
// });

//change

// let inp = document.querySelector("#user");

// inp.addEventListener("change", function () {
//   console.log("input has changed");
//   console.log("final value :", this.value);
// });

// inp.addEventListener("input", function () {
//   console.log("input has changed");
//   console.log("input value :", this.value);
// });

//text editor

// let inp = document.querySelector("input");
// let p = document.querySelector("p");

// inp.addEventListener("input", function () {
//   p.innerText = this.value;
//   console.log(inp.value);
// });

// inp.addEventListener("change", function () {
//   p.innerText = this.value;
//   console.log("final output:", inp.value);
// });
