//check if all numbers in array are multiples of 10 or not.

// let num = [10, 20, 30, 40];

// let ans = num.every((el) => el % 10 === 0);
// console.log(ans);

// let num = [10, 20, 30, 40, 15];

// let ans = num.every((el) => el % 10 === 0);
// console.log(ans); //false

//create a function to find the minimum number in array

// let num = [1, 2, 3, 4, 5];

// let min = num.reduce((min, el) => {
//   if (min < el) {
//     return min;
//   } else {
//     return el;
//   }
// });

// console.log(min);

// let num = [1, 2, 3, 4, 5];

// function getMin(num) {
//   let min = num.reduce((min, el) => {
//     if (min < el) {
//       return min;
//     } else {
//       return el;
//     }
//   });
//   return min;
// }

// console.log(getMin(num));

//QS:Square and sum the array elements using the arrow function and then find the average of the array.

// let array = [2, 4, 6, 8];
// let square = array.map((el) => el * el);

// console.log(square); //[4,16,36,64]

// let sum = square.reduce((sum, el) => sum + el);

// console.log(sum); //120

// let avg = sum / array.length;

// console.log(avg); //30

// let array = [2,4,6,8];

// function squareSumAvg(array) {
//   const square = array.map((el) => el * el);
//   const sum = square.reduce((sum, el) => sum + el);
//   const avg = sum / array.length;
//   return avg;
// }

// console.log(squareSumAvg(array));

//QS:. Create a new array using the map function whose each element is equal to the original element plus 5.

// let arr = [1, 2, 3, 4, 5];

// let newArray = arr.map((el) => el + 5);

// console.log(newArray); //(5) [6, 7, 8, 9, 10]

//QS:Create a new array whose elements are in uppercase of words present in the original array.

// let words = ["John", "peter", "Steve"];

// let newArray = words.map((el) => el.toUpperCase());

// console.log(newArray); //(3) ['JOHN', 'PETER', 'STEVE']

//QS:Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

// let array = [2, 4, 6, 8];
// let arr = [[25, 30], 4, 8, 12, 16];

// function doubleAndReturnArgs() {
//   console.log(array.map((el) => el * 2));
//   console.log(arr.map((el) => el * 2));
// }

// console.log(doubleAndReturnArgs(array, arr)); //(4) [4, 8, 12, 16] //(4) [8, 16, 24, 32]
//without doubling nested
// let arr = [[25, 30], 4, 8, 12, 16];
// const doubleAndReturnArgs = (array, ...arr) => [
//   ...array,
//   ...arr.map((v) => v * 2),
// ];

// console.log(doubleAndReturnArgs(...arr)); //(6) [25, 30, 8, 16, 24, 32]

//doubling nested
// let arr = [[25, 30], 4, 8, 12, 16];
// const doubleAndReturnArgs = (array, ...arr) => [
//   ...array.map((v) => v * 2),
//   ...arr.map((v) => v * 2),
// ];

// console.log(doubleAndReturnArgs(...arr)); //(6) [50, 60, 8, 16, 24, 32]

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// let obj1 = { a: 1, b: 2, c: 3 };
// let obj2 = { d: 4, e: 5 };

// const mergeObject = (obj1, obj2) => ({ ...obj1, ...obj2 });

// console.log(mergeObject(obj1, obj2));//{a: 1, b: 2, c: 3, d: 4, e: 5}
