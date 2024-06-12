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

//scope

//function scope

// function calSum(a, b) {
//   let sum = a + b; // function scope
//   console.log(sum);
// }

// calSum(1, 2); //3

// highest priority function scope
// let sum = 54; //global scope

// function calSum(a, b) {
//   let sum = a + b; // function scope
//   console.log(sum);
// }

// calSum(1, 2); //3

// let sum = 54; //global scope

// function calSum(a, b) {
//   console.log(sum);
// }

// calSum(1, 2); //54

//block scope

// for (let i = 1; i <= 5; i++) {
//   console.log(i); //block scope //1,2,3,4,5
// }
// console.log(i); //error

// let age = 23;
// if (age >= 18) {
//   let str = "adult";
//   console.log(str);
// }
// console.log(str); //error

//lexical scope

// function outerFunc() {
//   let x = 8;
//   let y = 10;
//   function innerFunc() {
//     console.log(x);
//     console.log(y);
//   }
//   innerFunc();
// }

//not possible:when we access varible outside the function

// function outerFunc() {
//   let x = 8;
//   let y = 10;
//   function innerFunc() {
//     let str = "a";
//     console.log(x);
//     console.log(y);
//     console.log(str); //psbl if inside
//   }
//   innerFunc();
//   console.log(str); //error
// }
// outerFunc(); //8,10

//QS: what will be the output

// let greet = "hello";//global scope

// function changeGreet() {
//   let greet = "namaste";//function scope
//   console.log(greet);
//   function innerGreet() { //lexical scope
//     console.log(greet);
//   }
// }

// console.log(greet); //hello
// changeGreet(); //namaste

//function expressions: it is name less function

// let sum = function (a, b) {
//   return a + b;
// };

// sum = function () {
//   return "hello";
// };

//higher order functions

// function multipleGreet(func, count) {
//   for (let i = 1; i <= count; i++) {
//     func();
//   }
// }

// let greet = function () {
//   console.log("hello");
// };

// multipleGreet(greet, 10); //10 hello
// //or
// multipleGreet(
//   (gt = function () {
//     console.log("hii");
//   }),
//   10
// ); //10 hii

// function oddEvenTest(request) {
//   if (request == "odd") {
//     return function (n) {
//       console.log(!(n % 2 == 0));
//     };
//   } else if (request == "even") {
//     return function (n) {
//       console.log(n % 2 == 0);
//     };
//   } else {
//     console.log("Wrong request");
//   }
// }

//To test odd
// let oddTest = oddEvenTest("odd");
// oddTest(1); //true
// oddTest(2); //false

// //To test even
// let evenTest = oddEvenTest("even");
// evenTest(2); //true
// evenTest(1); //false

//To test wrong request
// oddEvenTest("wrong"); //wrong request

//To find by giving parameters
// function oddEvenTest(request, n) {
//   if (request == "odd") {
//     console.log(!(n % 2 == 0));
//   } else if (request == "even") {
//     console.log(n % 2 == 0);
//   } else {
//     console.log("Wrong request");
//   }
// }

// oddEvenTest("odd", 7); // Output: true
// oddEvenTest("even", 8); // Output: true

// const calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   sub: function (a, b) {
//     return a - b;
//   },
//   mul: function (a, b) {
//     return a * b;
//   },
// };

// calculator.add(5,3) //8

//shorthand
// const calculators = {
//   add(a, b) {
//     return a + b;
//   },
//   sub(a, b) {
//     return a - b;
//   },
//   mul(a, b) {
//     return a * b;
//   },
// };

// calculators.sub(5, 3); //2

//QS:Write a JavaScript function that returns array elements larger than a number.

// let arr = [8, 9, 11, 6, 10, 1, 3, 2];
// let num = 5;

// function getElements(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       console.log(arr[i]);
//     }
//   }
// }

// getElements(arr, num);

//QS: Write a JavaScript function to extract unique characters from a string.Example: str = “abcdabcdefgggh” ans = “abcdefgh”

// let str = "abcdabcdefgggh";

// function getUnique(str) {
//   let ans = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (ans.indexOf(char) == -1) {
//       ans = ans + char;
//     }
//   }
//   return ans;
// }

// console.log(getUnique(str)); //abcdefgh

//QS:Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output. Example : country = ["Australia", "Germany", "United States of America"] output :"United States of America"

// let country = ["Australia", "Germany", "United States of America"];

// function longestCountry(country) {
//   let ansIdx = 0;
//   for (let i = 0; i < country.length; i++) {
//     let ansLen = country[ansIdx].length;
//     let currLen = country[i].length;
//     if (currLen > ansLen) {
//       ansIdx = country[i];
//     }
//   }
//   return ansIdx;
// }

// console.log(longestCountry(country)); //United States of America

//QS: Write a JavaScript function to count the number of vowels in a String argument.

// let str = "shamshirhussain";

// function vowel(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str.charAt(i) == "a" ||
//       str.charAt(i) == "e" ||
//       str.charAt(i) == "i" ||
//       str.charAt(i) == "o" ||
//       str.charAt(i) == "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vowel(str));//5

// let str = "shamshirhussain";

// function vowel(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vowel(str));//5

//QS:Write a JavaScript function to generate a random number within a range (start, end).

// let start = 100;
// let end = 200;

// function randomNumber(start, end) {
//   let num = Math.floor(Math.random() * (end - start + 1)) + start;
//   return num;
// }

// console.log(randomNumber(start, end));
