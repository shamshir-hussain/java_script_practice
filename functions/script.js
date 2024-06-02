// //Functions: it is a block of code used to execute code multiple times, help to rewrite code everytime if it is same code need to execute some were else.

// function hello() {
//   console.log("hello!!");
// }

// hello(); //hello!!

// function print() {
//   for (let i = 0; i <= 5; i++) {
//     console.log(i);
//   }
// }

// print(); //1,2,3,4,5

// function isAdult() {
//   let age = 18;
//   if (age >= 18) {
//     console.log("Adult");
//   } else {
//     console.log("Not Adult");
//   }
// }

// isAdult(); //Adult

//create a function that prints a poem

// function poem() {
//   console.log("Twinkle Twinkle little star");
//   console.log("How i wonder what you are ");
//   console.log("Up above the world so high,");
//   console.log("Like a diamond in the sky.");
//   console.log("When the blazing sun is gone,");
//   console.log("When he nothing shines upon,");
//   console.log("Then you show your little light,");
//   console.log("Twinkle, twinkle, all the night.");
//   console.log("Then the traveller in the dark,");
//   console.log("Thanks you for your tiny spark,");
//   console.log("He could not see which way to go,");
//   console.log("If you did not twinkle so.");
//   console.log("In the dark blue sky you keep,");
//   console.log("And often through my curtains peep,");
//   console.log("For you never shut your eye,");
//   console.log("‘Till the sun is in the sky.");
//   console.log("As your bright and tiny spark,");
//   console.log("Lights the traveller in the dark");
//   console.log("Though I know not what you are,");
//   console.log("Twinkle, twinkle, little star.");
// }

// poem();

//create a function to roll a dice & always display the value of the the dice(1 to 6)

// function rollDice() {
//   let rand = Math.floor(Math.random() * 6 + 1);
//   console.log(rand);
// }

// rollDice();

//functions with arguments

// function printName(name) {
//   console.log(name);
// }

// printName("Shamshir"); //Shamshir

// function printInfo(name, age) {
//   console.log(`${name}'s age is ${age}.`);
// }

// printInfo("shamshir", 23); //shamshir's age is 23.

// printInfo("Samatha"); //Samatha's age is undefined.

// //create a function that gives us the average of 3 numbers

// function calcAvg(a, b, c) {
//   let avg = (a + b + c) / 3;
//   console.log(avg);
// }

// calcAvg(2, 4, 6); //4

//create a function that prints the multiplication table of a number

// function number(num) {
//   for (let i = 1; i <= 10; i++) {
//     let mul = num * i;
//     console.log(`${num}*${i}=${mul}`);
//   }
// }

// number(13);

// function printTable(n) {
//   for (let i = n; i <= n * 10; i += n) {
//     console.log(i);
//   }
// }

// printTable(13);

//return

// function sum(a, b) {
//   return a + b;
// }

// function isAdult(age) {
//   if (age >= 18) {
//     return "adult";
//   } else {
//     return "not adult";
//   }
//   console.log("hello!!"); //unrechable code
// }

// //Create a function that returns the sum of numbers from 1 to n

// function getSum(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// create a function that returns the concatenation of all strings in an array.

// let str = ["hi", "i", "am", "shamshir"];

// function concate(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     // result += str[i];
//     result = result + " " + str[i];
//   }
//   return result.trim();
// }
