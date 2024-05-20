// //for loop using post-increment

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// } //1,2,3,4,5

//for loop using pre-increment

// for (let i = 1; i <= 5; ++i) {
//   console.log(i);
// } //1,2,3,4,5

//for loop to print reverse order

// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// } //5,4,3,2,1

//print all odd numbers (1 to 15)

// for (i = 1; i <= 15; i += 2) {
//   console.log(i);
// } // 1,3,5,7,9,11,13,15 (we use +2 for printing odd numbers)

//print all odd numbers (1 to 15) in reverse

// for (let i = 15; i >= 1; i -= 2) {
//   console.log(i);
// } //15,13,11,9,7,5,3,1

// print all even numbers (2 to 10)

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// } //2,4,6,8,10

// for (let i = 10; i >= 2; i -= 2) {
//   console.log(i);
// } // 10,8,6,4,2

//infinite loop:It runs without ending condition
// for (i = 1; i >= 0; i++) {
//   console.log(i);
// } //1,2,3...infinity

// for (i = 1; ; i++) {
//   console.log(i);
// } //1,2,3...infinity

//print the multiplication table for 5

// for (i = 5; i <= 50; i += 5) {
//   console.log(i);
// } //5,10,15,20,.....,50

// to print user condition

// let n = prompt("Enter number");
// n = parseInt(n);
// // or n = Number(n);

// for (let i = n; i <= n*10; i += n) {
//   console.log(i);
// }

//Nested loop

// for (let i = 1; i <= 3; i++) {
//   // console.log(`outer loop ${i} `);
//   for (let j = 1; j <= 3; j++) {
//     console.log(j);
//   }
// }

//while loop

// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let j = 5;

// while (j >= 1) {
//   console.log(j);
//   j--;
// }

// let i = 0;

// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// let i = 0;

// while (i <= 20) {
//   console.log(i);
//   i += 2;
// }

//guess fav movie

// const favMovie = "avatar";

// let guess = prompt('guess my fav movie or type "quit" ');

// while (guess != favMovie && guess != "quit") {
//   // console.log("Wrong guess");
//   guess = prompt("Wrong guess,Please try again");
// }

// if (guess == favMovie) {
//   console.log("Congrats!!");
// } else {
//   console.log("you quit");
// }

//break

// let i = 1;

// while (i <= 5) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
//   i++;
// }
// console.log("we break at 3");

// guess movie using break

// const favMovie = "avatar";

// let guess = prompt('guess my fav movie or type "quit" ');

// while (guess != favMovie) {
//   if (guess == "quit") {
//     console.log("you quit");
//     break;
//   }
//   guess = prompt("Wrong guess,Please try again");
// }

// if (guess == favMovie) {
//   console.log("Congrats!!");
// }

//loop  with arrays

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

//for even
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for (let i = 0; i < fruits.length; i += 2) {
//   console.log(i, fruits[i]);
// }

//for odd
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for (let i = 1; i < fruits.length; i += 2) {
//   console.log(i, fruits[i]);
// }

//in reverse

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(i, fruits[i]);
// }

//nested loops with nested arrays

// let heores = [
//   ["ironman", "spiderman", "thor"],
//   ["superman", "wonder women", "flash"],
// ];

// for (let i = 0; i < heores.length; i++) {
//   console.log(`i=${i}, ${heores[i]}`); //outer array
//   for (let j = 0; j < heores[i].length; j++) { //inner array
//     console.log(`j=${j}, ${heores[i][j]} `);
//   }
// }

// let student = [
//   ["shamshir", 90],
//   ["samatha", 95],
//   ["munna", 90],
// ];

// for (let i = 0; i < student.length; i++) {
//   for (let j = 0; j < student[i].length; j++) {
//     console.log(student[i][j]);
//   }
// }
