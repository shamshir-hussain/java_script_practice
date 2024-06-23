//forEach:

// let arr = [1, 2, 3, 4, 5];

// function print(el) {
//   console.log(el);
// }

// arr.forEach(print)
//or
// arr.forEach(function (el) {
//   console.log(el);
// });
//or
// arr.forEach((el) => {
//   console.log(el);
// });

//objects
// let arr = [
//   {
//     name: "shamshir",
//     marks: 90,
//   },
//   {
//     name: "samatha",
//     marks: 95.5,
//   },
//   {
//     name: "reddy",
//     marks: 92,
//   },
// ];

// arr.forEach((student) => {
//   console.log(student);
// }); //{name: 'shamshir', marks: 90};{name: 'samatha', marks: 95.5};{name: 'reddy', marks: 92};

// arr.forEach((student) => {
//   console.log(student.marks);
// }); //90,95.5,92

//map:

// let num = [1, 2, 3, 4, 5, 6];

// let newNum = num.map((el) => {
//   return el * 2;
// });

// console.log(newNum); //(6) [2, 4, 6, 8, 10, 12]

// let students = [
//   {
//     name: "shamshir",
//     marks: 90,
//   },
//   {
//     name: "samatha",
//     marks: 95.5,
//   },
//   {
//     name: "reddy",
//     marks: 92,
//   },
// ];

// let gpa = students.map((el) => {
//   return el.marks / 10;
// });

// console.log(gpa); //(3) [9, 9.55, 9.2]

// let nums = [2, 4, 7, 1, 5, 6, 4, 3, 9];

// let even = nums.map((el) => {
//   return el % 2 == 0;
// });

// console.log(even); //(9) [true, true, false, false, false, true, true, false, false]

//filter:

// let nums = [2, 4, 7, 1, 5, 6, 4, 3, 9];

// let even = nums.filter((el) => {
//   return el % 2 == 0;
// });

// console.log(even); //(4) [2, 4, 6, 4]

//every

// let arr = [1, 2, 3, 4, 6, 7];

// let print = arr.every((el) => {
//   return el % 2 == 0;
// });

// console.log(print); //false

// let even = [2, 4, 6, 8];

// let num = even.every((el) => {
//   return el % 2 == 0;
// });

// console.log(num);

//some:

// let odd = [2, 4, 6, 8, 7, 1, 3];

// let print = odd.some((el) => el % 2 != 0);

// console.log(print);//true

// let odd = [2, 4, 6, 8];

// let print = odd.some((el) => el % 2 != 0);

// console.log(print);//false

//reduce:

// let num = [1, 2, 3, 4, 5];

// let finalVal = num.reduce((res, el) => res + el);

// console.log(finalVal); //15

//maximun using reduce

// let num = [2, 4, 8, 9, 11, 6, 12];

// let max = num.reduce((max, el) => {
//   if (max < el) {
//     return el;
//   } else {
//     return max;
//   }
// });

// console.log(max); //12

//default parameters

// function func(a, b = 2) {
//   return a + b;
// }

// console.log(func(4));//6

//spread:

// let num = [2, 4, 7, 8, 9];

// console.log(Math.min(...num)); //2

// console.log(..."shamshir");//s h a m s h i r

//spread with array literals:

// let num = [1, 2, 3, 4, 5];

// let nums = [...num];
// console.log(nums);//[1, 2, 3, 4, 5]

// let str = "hello";

// let strs = [...str];
// console.log(strs);//(5) ['h', 'e', 'l', 'l', 'o']

// let odd = [1, 3, 5, 7];
// let even = [2, 4, 6, 8];

// let evenOdd = [...even, ...odd];
// console.log(evenOdd);//(8) [2, 4, 6, 8, 1, 3, 5, 7]

//spread using object literals

// let data = {
//   userName: "ironman@gmail.com",
//   password: "abcd",
// };

// let dataCopy = { ...data, id: 123 };

// console.log(dataCopy); //{userName: 'ironman@gmail.com', password: 'abcd', id: 123}

// let arr = [1, 2, 3, 4, 5];
// let str = "hello";
// let obj = { ...arr };
// let obj1 = { ...str };
// console.log(obj); //{0: 1, 1: 2, 2: 3, 3: 4}
// console.log(obj1); //{0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}

//rest:

// function sum(...args) {
//   return args.reduce((sum, el) => sum + el);
// }

// console.log(sum(200, 8, 20)); //228

// function min(msg, ...args) {
//   console.log(msg);
//   return args.reduce((min, el) => {
//     if (min > el) {
//       return el;
//     } else {
//       return min;
//     }
//   });
// }

// console.log(min("hii", 25, 9, 10)); //hii 9

// function sum() {
//   console.log(arguments);
//   console.log(arguments.length);
//   console.log(arguments.push(1));
// }

// console.log(sum(1, 2, 3)); //Arguments(3) [1, 2, 3] //3 //error

// function min(a, b, c, d) {
//   console.log(arguments);
// }

// console.log(min(1, 2, 3, 4)); ////Arguments(4) [1, 2, 3,4]

//destructuring

// let names = ["tony", "peter", "steve", "john"];

// // let [winner, runnerUp] = names;

// // console.log(winner); //tony
// // console.log(runnerUp); //peter

// let [winner, runnerUp, ...others] = names;

// // console.log(winner); //tony
// // console.log(runnerUp); //peter
// console.log(others); // (2) ['steve', 'john']

//desturcturing : objects

// let student = {
//   name: "shamshir",
//   age: 23,
//   class: "B.Tech",
//   subjects: ["python", "Java", "JavaScript"],
//   username: "shammu123",
//   password: 1234,
// };

// let { username, password, age } = student;

// console.log(username); //shammu123
// console.log(password); //1234
// console.log(age); //23

// let { username: user, password: pass, city="Hyderabad" } = student;

// console.log(username); //error
// console.log(user); //shammu123
// console.log(password); //error
// console.log(pass); //1234
// console.log(city); //Hyderabad

// let student = {
//   name: "shamshir",
//   age: 23,
//   class: "B.Tech",
//   subjects: ["python", "Java", "JavaScript"],
//   username: "shammu123",
//   password: 1234,
//   city: "Vizag",
// };

// let { username: user, password: pass, city = "Hyderabad" } = student;

// console.log(city);//Vizag

// let { username: user, password: pass, city: place = "Hyderabad" } = student;

// console.log(city); //error
// console.log(place);//vizag

// let student = {
//   name: "shamshir",
//   age: 23,
//   class: "B.Tech",
//   subjects: ["python", "Java", "JavaScript"],
//   username: "shammu123",
//   password: 1234,
// };

// let { username: user, password: pass, city: place = "Hyderabad" } = student;

// console.log(place); //Hyderabad
