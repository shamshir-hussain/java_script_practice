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

//slice : copies portion of array

// let primary = ["red", "yellow", "green", "white"];
// console.log(primary.slice()); // (4)['red','yellow','green','white']
// console.log(primary.slice(2)); //(2)['green','white']
// console.log(primary.slice(-3)); //(3)['yellow','green','white']

// splice: removes/replace/add elements
// splice(start,deletecount,item0...itemN)

// let places = ["hyderabad", "banglore", "ooty", "kerala"];

// console.log(places.splice(3)); //['kerala']
// console.log(places); //(3) ['hyderabad', 'banglore', 'ooty']
// console.log(places.splice(0, 1)); //['hyderabad']
// console.log(places); //(2) ['banglore'ooty']
// console.log(places.splice(0, 1, "jammu", "delhi")); //['banglore']
// console.log(places); //(3) ['jammu','delhi','ooty']
// console.log(places.splice(1, 2, "goa", "chennai")); //['delhi','ooty']
// console.log(places); //(3) ['jammu','goa','chennai']
// console.log(places.splice(0, 0, "America", "Egypt")); //[]
// console.log(places); //(5) ['America','Egypt','jammu','goa','chennai']
// console.log(places.splice(1, 0, "china")); //[]
// console.log(places); //(6) ['America','china','Egypt','jammu','goa','chennai']
// console.log(places.splice(2, 1, "Bangladesh"));
// // ['Egypt']
// console.log(places); //(6)[("America", "china", "Bangladesh", "jammu", "goa", "chennai")];:replaced

// sort : sorts an array from ascending to descending or viceversa. performed for strings.

// let days = ["monday", "wednesday", "sunday", "tuesday"];
// console.log(days.sort()); //(4) ['monday', 'sunday', 'tuesday', 'wednesday']

// let squares = [25, 96, 36, 78, 56, 100];
// console.log(squares.sort()); //(5) [100,25,36,56,78,96]

//QS: For the given start state of an aray, change it to final form using splice:
//start: ['january','july','march','august']
//final: ['july','june','march','august']

// let months = ["january", "july", "march", "august"];

// console.log(months.splice(0, 1)); //['january']
// console.log(months); //['july', 'march', 'august']
// console.log(months.splice(1, 0, "june")); //[]
// console.log(months); //(4) ['july', 'june', 'march', 'august']

//or
// console.log(months.splice(0, 2, "july", "june"), months); //['july', 'june'] , (4) ['july', 'june', 'march', 'august']

//QS: Return the index of the "javascript" from the given array,if it was reversed.

// ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];

// let programs = [
//   "c",
//   "c++",
//   "html",
//   "javascript",
//   "python",
//   "java",
//   "c#",
//   "sql",
// ];

// console.log(programs.reverse(), programs.indexOf("javascript")); //["sql","c#","java","python","javascript","html","c++","c"],[4]
// //or
// console.log(programs.reverse().indexOf("javascript")); //4

//Nested arrays: arrya in arrays

// let nums = [
//   [2, 4],
//   [3, 6],
//   [4, 8],
// ];
// console.log(nums); //(3) [Array(2), Array(2), Array(2)] // 0: (2) [2, 4] 1: (2) [3, 6] 2: (2) [4, 8] length:3 [[Prototype]]: Array(0)

//QS: Create a nested array to show the following tic-tac-toe game state

// let game = [
//   ["x", null, "o"],
//   [null, "x", null],
//   ["o", null, "x"],
// ];

// console.log(game); //(3) [Array(3), Array(3), Array(3)]
