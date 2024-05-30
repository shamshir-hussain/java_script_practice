//QS:. Write a JavaScript program to get the first n elements of an array. [n can be anypositive number].For example: for array [7, 9, 0, -2] and n=3 Print, [7, 9, 0]

// let arr = [7, 9, 0, -2];
// console.log(arr.slice(0, 3)); //(3) [7, 9, 0]

// Write a JavaScript program to get the last n elements of an array. [n can be any positive number]. For example: for array [7, 9, 0, -2] and n=3 Print, [9, 0, -2]

// let arr = [7, 9, 0, -2];
// console.log(arr.slice(1, 4)); //(3) [9, 0, -2]
// console.log(arr.slice(-3)); //(3) [9, 0, -2]

// QS:Write a JavaScript program to check whether a string is blank or not.

// let str = prompt("please enter a sting");
// if (str.length == 0) {
//   console.log("blank");
// } else {
//   console.log("Not blank");
// }

// QS: Write a JavaScript program to test whether the character at the given (character) index is lower case.

// let str = prompt("Please enter a string");
// let idx = prompt("enter a number from 0 to n");

// if (str[idx] === str[idx].toLowerCase()) {
//   console.log("character is lowercase");
// } else {
//   console.log("character is not lowercase");
// }

// QS:Write a JavaScript program to strip leading and trailing spaces from a string.

// let str = prompt("Please enter a string");
// console.log(str.trim());

// QS:Write a JavaScript program to check if an element exists in an array or not.

// method:1

// let arr = ["hello", 96, 10, "shamshir"];
// let item = prompt("Enter a value");

// if (arr.includes(item)) {
//   console.log("Element exists");
// } else {
//   console.log("Element doesn't exists");
// }

//method:2
// let arr = ["hello", 96, 10, "shamshir"];
// let item = 6;

// if (arr.indexOf(item) != -1) {
//   console.log("Element exists");
// } else {
//   console.log("Element does not exists");
// }

// let arr1 = ["hello", 96, 10, "shamshir"];
// let item1 = 6;

// if (arr1.indexOf(item1) !== -1) {
//   console.log("Element exists in the array.");
// } else {
//   console.log("Element does not exist in the array.");
// }

//QS: write a js program to delete all occurances of element "num" in a given array. Ex: if arr = [1,2,2,3,4,5,6,3] & num = 2

// let arr = [1, 2, 2, 3, 4, 5, 6, 3];
// let num = 2;
// // method: 1; in this we get wrong answer coz updating the increment miss the value once . using of splice the array is updated.
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == num) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr); //(6) [1, 3, 4, 5, 6, 3]

// method :2
// console.log(arr.length);
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] == num) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

//method:3

// while (arr.includes(num)) {
//   arr.splice(arr.indexOf(num), 1);
// }
// console.log(arr);

//QS:. Write a JS program to find the sum of digits in a number. Example : if number = 287152, sum = 25

// let number = 287152;
// let str = number.toString();
// let sum = 0;

// for (i = 0; i < str.length; i++) {
//   sum += parseInt(str[i]);
// }
// console.log(sum);

// let num = 287152;
// let sum = 0;

// while (num > 0) {
//   digit = num % 10;
//   sum = sum + digit;
//   num = Math.floor(num / 10);
// }
// console.log(sum);

//QS:. Write a JS program to find the no of digits in a number. Example : if number = 287152, count = 6

// let number = 287152;
// let count = 0;

// let copy = number;

// while (copy > 0) {
//   count++;
//   copy = math.floor(copy / 10);
// }
// console.log(count);

// let num = 287152;
// let count = 0;

// while (num > 0) {
//   num = Math.floor(num / 10);
// //   console.log(num);
//   count++;
// }
// console.log(count);//6

// let num = 287152;
// let str = String(num);
// let count = 0;

// for (i = 0; i < str.length; i++) {
//   count++;
// //   console.log(str[i]);
// }
// console.log(count);//6

//Qs4. Print the factorial of a number n.[Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer. ] Example : 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040 5! (factorial of 5) = 1x2x3x4x5 = 120 3! (factorial of 3) = 1x2x3 = 6 0! Is always 1

// let n = 7;
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//   factorial = factorial * i;
// }
// console.log(`factorial of ${n} is ${factorial}`);

//QS:Find the largest number in an array with only positive numbers.

// let array = [22, 36, 89, 74];
// let largest = 0;

// for (let i = 0; i <= array.length; i++) {
//   if (largest < array[i]) {
//     largest = array[i];
//   }
// }
// console.log(largest);

//QS:Create a program that generates a random number representing a dice roll.[The number should be between 1 and 6].

// let dice = Math.floor(Math.random() * 6 + 1);
// console.log(dice);

//QS:Create an object representing a car that stores the following properties for the car: name, model, color. Print the car’s name.

// const cars = {
//   name: "BMW",
//   model: "X-Series",
//   color: "Black",
// };

// console.log(cars.name); //BMW

//QS:Create an object Person with their name, age and city. Edit their city’s original value to change it to “New York”.Add a new property country and set it to the United States.

// const person = {
//   name: "Shamshir",
//   age: 23,
//   city: "Nandyal",
// };

// person.city = "New York";
// person.country = "United States";
// console.log(person);
