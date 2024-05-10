// Eg:1 linear collection of things:

// let students = ["shamshir", "samatha", "hussain", "reddy"];

/// creating arrays:

// let marks = [99, 100, 25, 45];
// let names = ["shamshir", "samatha", "hussain", "reddy"];
// let info = ["shamshir", 99, 9.9];

// let empArr = [];

/// Arrays are Mutable:

// let fruits = ["Mango", "Apple", "Litchi"];
// console.log(fruits); //"Mango", "Apple", "Litchi"
// console.log((fruits[1] = "banana")); //changes to banana
// console.log(fruits); //new values updated
// console.log((fruits[10] = "pineapple")); //storing in more than its index value or length
// console.log(fruits); //"Mango", "Apple", "Litchi",emptyarray*7,"pineapple":length=11

/// visualizing array:

// let nums = [2, 4, 6, 8];
// console.log(nums[1]); //4

/// Array Methods:(push:add to end,pop:delete at end and & returns,unShift:add to start,shift:delete at start and returns)

// let cars = ["Audi", "BMW", "Swift", "Toyota"];
// console.log(cars); //(4)["Audi", "BMW", "Swift", "Toyota"];
// console.log(cars.push("volvo")); //(5)["Audi", "BMW", "Swift", "Toyota","volvo"];
// console.log(cars.pop()); //(3)["Audi", "BMW", "Swift"];
// console.log(cars.unshift("Volvo")); //(5)["Volvo","Audi", "BMW", "Swift", "Toyota"];
// console.log(cars.shift());
// (3)[("BMW", "Swift", "Toyota")];

// eg: Folowers:
// let followers = ["a", "b", "c"];
// let blocked = followers.shift();

// QS:For the given start state of an Array, change it to final from using methods:
// let start = ["january", "july", "march", "august"];
// console.log(
//   start.shift(),
//   start.shift(),
//   start.unshift("june"),
//   start.unshift("july"),
//   start
// ); //["july","june", "march", "august"];

//array methods:
//slice:Copies a portions of array:
// let cars = ["Audi", "BMW", "Swift", "Toyota"];
// console.log(cars.slice()); // it results whole array
// console.log(cars.slice(2, 4)); //results from 2 to 3:['Swift','Toyota']
// console.log(cars.slice(-2)); //length-num : 4-2 =>['Swift','Toyota']

// indexOf: returns index of something

// let primary = ["red", "yellow", "white", "black"];
// console.log(primary.indexOf("yellow")); //1
// console.log(primary.indexOf("black")); //3
// console.log(primary.indexOf("Yellow")); //-1

//includes:search for value . Returns value in form of boolean
// let primary = ["red", "yellow", "white", "black"];
// console.log(primary.includes("yellow")); //true
// console.log(primary.includes("black")); //true
// console.log(primary.includes("Yellow")); //false

//concat:merge 2 arrays

// let marks = [99, 100, 60, 90];
// let marks1 = [99, 100, 60, 90];
// let info = ["shamshir", "samatha", "sammu", "shammu"];
// console.log(marks.concat(info)); //(8) [99, 100, 60, 90,'shamshir', 'samatha', 'sammu', 'shammu']
// console.log(marks.concat(info, marks1)); //(12) [99, 100, 60, 90,'shamshir', 'samatha', 'sammu', 'shammu',99, 100, 60, 90]

//reverse : reverse the sequence of array.In this original array will also modified.

// let marks = [99, 100, 60, 90];
// console.log(marks.reverse()); //[90,60,100,99]
