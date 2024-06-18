//this keyword: used to access and excute object in a piece of code/current piece of code

// const student = {
//   name: "shamshir",
//   age: 23,
//   eng: 95,
//   math: 90,
//   phy: 97,
//   getAvg() {
//     let avg = (eng + math + phy)/3;
//     console.log(avg);
//   },
// };

// console.log(student.getAvg()); //error

// const student = {
//   name: "shamshir",
//   age: 23,
//   eng: 95,
//   math: 90,
//   phy: 97,
//   getAvg() {
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(avg);
//   },
// };

// console.log(student.getAvg()); //94

// function getAvg() {
//   console.log(this);
// }

// getAvg(); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//try and catch :
//try: allows to define block of code to be tested for a errors while executed.
//catch: allows to define block of code to be executed if error occurs in the try block.

// console.log("hello"); //hello
// console.log("hello"); //hello
// console.log(a); // error
// console.log("hii");
// console.log("hii");

//if we use try and catch
// console.log("hello"); //hello
// console.log("hello"); //hello
// try {
//   console.log(a);
// } catch {
//   console.log("check the error");
// } //check the error
// console.log("hii"); //hii
// console.log("hii"); //hii

// if variable declares
// console.log("hello"); //hello
// console.log("hello"); //hello
// let a = 5;
// try {
//   console.log(a); //5
// } catch {
//   console.log("check the error");
// }
// console.log("hii"); //hii
// console.log("hii"); //hii

//arrow functions

// const sum = (a, b) => {
//   console.log(a + b);
// };

// sum(2, 3); //5

// const cube = (n) => {
//   return n * n * n;
// };

// console.log(cube(2)); //8

// const power = (a, b) => {
//   return Math.pow(a, b);
// };
// console.log(power(2, 3));

// const power = (a, b) => {
//   return a ** b;
// };
// console.log(power(2, 3));

//implicit return

// const mul = (a, b) => a * b;
// mul(2, 3);//6

//setTimeout

// console.log("hi there!");

// setTimeout(() => {
//   console.log("shamshir");
// }, 4000);

// console.log("Myself");

//setInterval
// this code continously executive infinite times.
// setInterval(() => {
//   console.log("hii");
// }, 2000);

// to stop
// let id = setInterval(() => {
//   console.log("hello");
// }, 2000);
// console.log(id);
// clearInterval(id);

// const student = {
//   name: "shamshir",
//   age: 23,
//   marks: 90,
//   prop: this,
//   getName: function () {
//     console.log(this);
//     return this.name;
//   },

//   getMarks: () => {
//     console.log(this);
//     return this.marks;
//   },

//   getInfo: function () {
//     setTimeout(() => {
//       console.log(this);
//     }, 2000);
//   },

//   getInfo2: function () {
//     setTimeout(function () {
//       console.log(this);
//     }, 2000);
//   },
// };

// student.getName(); //student
// console.log(student.getName()); //shamshir

// student.getMarks(); //window
// console.log(student.getMarks()); //window

// student.getInfo();//student
// student.getInfo2();//window

//arrow function that returns square of number

// let square = (n) => {
//   return n ** 2;
// };

//write function that prints "hello world" 5times at intervals of 2s

// let id = setInterval(() => {
//   console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//   clearInterval(id);
// }, 10000);

//QS: Write an arrow function named arrayAverage that aacepts an array of numbers and returns the average of those numbers

// let arr = [1, 2, 3, 4, 5, 6];

// arrayAverage = (arr) => {
//   let total = 0;

//   for (let number of arr) {
//     total += number;
//   }
//   return total / arr.length;
// };

// console.log(arrayAverage(arr)); //3.5

//QS:Write an arrow function named isEven() that takes a single number as argument and return if it is even or not.

// let n = 2;

// let isEven = (n) => {
//   if (n % 2 == 0) {
//     return `${n} is even`;
//   } else {
//     return `${n} is odd`;
//   }
// };

// console.log(isEven(n));

// //method :2
// const evenIs = (n) => n % 2 == 0;

// console.log(evenIs(n));

//QS:3 what is the output of the following code:

// const object = {
//   meesage: "Hello, World!",

//   logMessage() {
//     console.log(this.message);
//   },
// };

// setTimeout(object.logMessage, 1000); //undefined coz we are calling setTimeout, actually it is not defined, it acts as global so as per this it executes "window object" in other way of "undefined"

//QS: what is the output of following code:

// let length = 4;
// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   },
// };

// object.method(callback, 1, 2);

//above code wont work coz of errors in calling and accessing
