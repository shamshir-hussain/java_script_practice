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
