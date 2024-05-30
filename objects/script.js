// const student = {
//   name: "shamshir",
//   age: 23,
//   marks: 92,
// };

// const item = {
//   name: "vivo v29",
//   color: ["red", "blue"],
//   price: 32000,
//   discount: 2000,
// };

// const post = {
//   username: "@shamshir",
//   content: "This is my post",
//   likes: 150,
//   reposts: 20,
//   tags: ["@sammu", "@shammu"],
// };
// console.log(post);

//get values:

// const post = {
//   username: "@shamshir",
//   content: "This is my post",
//   likes: 150,
//   reposts: 20,
//   tags: ["@sammu", "@shammu"],
// };
// console.log(post);

//two ways:

// console.log(post["username"]); //@shamshir
// console.log(post.tags[1], post.likes); //@shammu 150

//to access using variables:

// let prop = "content";

// console.log(post[prop]); //This is my post
// console.log(post.prop); //undefined

//conversion in Get values

// const obj = {
//   1: "a",
//   2: "b",
//   true: "c",
//   null: "d",
//   undefined: "e",
// };

// console.log(obj.true, obj[1], obj.2); //c, a, unexpected error

//add/update/delete:

// const student = {
//   name: "shamshir",
//   age: 23,
//   marks: 92,
//   city: "Nandyal",
// };

// console.log((student.marks = "A")); //updated to A
// console.log((student.city = "Hyderabad")); // updated to hyderabad
// console.log((student.gender = "Male")); //added gender
// console.log(student); //{name: 'shamshir', age: 23, marks: 'A', city: 'Hyderabad', gender: 'Male'}
// console.log(delete student.gender); //it returns "true" if deleted.
// console.log(student); //{name: 'shamshir', age: 23, marks: 'A', city: 'Hyderabad'}

//nested objects

// const classInfo = {
//   shamshir: {
//     grade: "A+",
//     city: "Nandyal",
//   },
//   munawar: {
//     grade: "A",
//     city: "Kurnool",
//   },
//   samatha: {
//     grade: "O",
//     city: "Bhadrachalam",
//   },
// };
// console.log(classInfo); //{shamshir: {…}, munawar: {…}, samatha: {…}}
// console.log(classInfo.shamshir); //{grade: 'A+', city: 'Nandyal'}
// console.log(classInfo.shamshir.grade); //A+

//Array of objects

// const classInfo = [
//   {
//     name: "shamshir",
//     grade: "A+",
//     city: "Nandyal",
//   },
//   {
//     name: "samatha",
//     grade: "O",
//     city: "Bhadrachalam",
//   },
//   {
//     name: "Munawar",
//     grade: "A",
//     city: "Kurnool",
//   },
// ];
// console.log(classInfo); //(3) [{…}, {…}, {…}]
// console.log(classInfo[0]); //{name: 'shamshir', grade: 'A+', city: 'Nandyal'}
// console.log(classInfo[1]); //{name: 'samatha', grade: 'O', city: 'Bhadrachalam'}
// console.log(classInfo[0].city); //Nandyal
// console.log((classInfo[0].city = "Hyderabad")); //Hyderabad

//Random Integers from 1 to 10

// let step1 = Math.random();
// console.log(step1); // generates random => 0.3737437891402273
// let step2 = step1 * 10;
// console.log(step2); //generates 0 to 10 => 3.737437891402273
// let step3 = step2 + 1;
// console.log(step3); // generates 1 to 10 => 4.737437891402273
// let step4 = Math.floor(step3);
// console.log(step4); // round to nearest and smallest value => 4

// let random = Math.floor(Math.random() * 10 + 1);
// console.log(random);

//practice QS:

//QS: generate a random number from 1 and 100

// let random = Math.floor(Math.random() * 100 + 1);

// console.log(random);

// generate from 21 to 25
// let random = Math.floor(Math.random() * (25 - 21 + 1)) + 21;
// console.log(random);
//or
// let random = Math.floor(Math.random() * 5 + 21);
// console.log(random);

// Guessing game using random numbers:

// const max = prompt("Enter your max number");

// const random = Math.floor(Math.random() * max + 1);

// let guess = prompt("Guess the number");

// while (true) {
//   if (guess == "quit") {
//     console.log("You quit the game");
//     break;
//   }

//   if (guess == random) {
//     console.log(`Your guess was right! Congrats!! random number ${random}`);
//     break;
//   } else if (guess < random) {
//     guess = prompt(
//       `hint :Your guess was too small... Guessed number ${guess}!! Try again`
//     );
//   } else {
//     guess = prompt(
//       `hint :Your guess was too large... Guessed number ${guess}!! Try again`
//     );
//   }
// }
