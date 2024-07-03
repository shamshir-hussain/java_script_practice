//QS:Create a button on the page using JavaScript. Add an event listener to the button that changes the button’s color to green when it is clicked.

// let btn = document.createElement("button");
// btn.innerText = "click me";

// let body = document.querySelector("body");

// body.append(btn);

// btn.addEventListener("click", function () {
//   btn.style.backgroundColor = "green";
// });

//QS:Create an input element on the page with a placeholder ”enter your name” and an H2 heading on the page inside HTML. The purpose of this input element is to enter a user’s name so it should only input letters from a-z, A-Z and space (all other characters should not be detected). Whenever the user inputs their name, their input should be dynamically visible inside the heading. [Please note that no other character apart from the allowed characters should be visible in the heading]

// let inp = document.querySelector("input");

// let h2 = document.querySelector("h2");

// inp.addEventListener("input", function (event) {
//   let nameRegex = /^[a-zA-Z\s]+$/;
//   let inputValue = inp.value.trim();

//   if (nameRegex.test(inputValue)) {
//     h2.innerText = inputValue;
//   } else {
//     //If the input contains invalid characters, update the input value to only include valid characters
//     inp.value = inputValue.replace(/[^a-zA-Z\s]/, "");
//     h2.innerText = inp.value;
//   }
// });
