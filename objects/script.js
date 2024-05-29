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
