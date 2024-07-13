// //visualizing of call stack

// function one() {
//   return 1;
// }

// function two() {
//   return one() + one();
// }

// function three() {
//   let ans = two() + one();
//   return ans;
// }

// three();

// setTimeout(() => {
//   console.log("JS learner");
// }, 2000);
// setTimeout(() => {
//   console.log("webdeveloper");
// }, 2000);

// console.log("Frontend Developer");

// h2 = document.querySelector("h2");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h2.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("green", 1000, () => {
//     changeColor("pink", 1000, () => {
//       changeColor("blue", 1000);
//     });
//   });
// });

//setting up promises

// function saveToDb(data, success, faliure) {
//   console.log(data);
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internetSpeed > 4) {
//     success();
//   } else {
//     faliure();
//   }
// }

// saveToDb(
//   "Web-Developer",
//   () => {
//     console.log("Success 1:data1 saved");
//     saveToDb(
//       "FrontEnd Developer",
//       () => {
//         console.log("Success 2:data2 saved");
//         saveToDb(
//           "Programmer",
//           () => {
//             console.log("Success 3:data3 saved");
//           },
//           () => {
//             console.log("Failure:3 Weak Connection..!!");
//           }
//         );
//       },
//       () => {
//         console.log("Failure:2 Weak Connection..!!");
//       }
//     );
//   },
//   () => {
//     console.log("Failure:1 Weak Connection..!!");
//   }
// );

//Drafting to promises

// function saveToDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve(`data was saved: ${data}`);
//     } else {
//       reject(`data is not saved: ${data}`);
//     }
//   });
// }

// let request = saveToDb("Web Developer");

// request
//   .then(() => {
//     console.log("Promise was resloved");
//   })
//   .catch(() => {
//     console.log("Promise was not resloved");
//   });

//OR

// saveToDb("Web Developer")
//   .then(() => {
//     console.log("Promise was resloved");
//   })
//   .catch(() => {
//     console.log("Promise was not resloved");
//   });

// saveToDb("webdev")
//   .then(() => {
//     console.log("Data:1 saved. promise was sloved");
//     return saveToDb("programmer");
//   })
//   .then(() => {
//     console.log("data2 saved . promise was sloved");
//     return saveToDb("data3 saved. promise was sloved");
//   })
//   .then(() => {
//     console.log("data3 saved. promise solved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

//error promises

// saveToDb("webdev")
//   .then((result) => {
//     console.log("Data:1 saved. promise was sloved");
//     console.log("result:", result);
//     return saveToDb("programmer");
//   })
//   .then((result) => {
//     console.log("data2 saved . promise was sloved");
//     console.log("result:", result);
//     return saveToDb("learner");
//   })
//   .then((result) => {
//     console.log("data3 saved. promise solved");
//     console.log("result:", result);
//   })
//   .catch((error) => {
//     console.log("promise was rejected");
//     console.log("error: ", error);
//   });

// h2 = document.querySelector("h2");

// function changeColor(color, delay = 1000) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h2.style.color = color;
//       resolve("color was changed");
//     }, delay);
//   });
// }

// changeColor("red")
//   .then((result) => {
//     console.log("promise was sloved");
//     console.log("result=", result);
//     return changeColor("blue");
//   })
//   .then((result) => {
//     console.log("promise was sloved");
//     console.log("result=", result);
//     return changeColor("green");
//   })
//   .then((result) => {
//     console.log("promise was sloved");
//     console.log("result=", result);
//     return changeColor("pink");
//   })
//   .then((result) => {
//     console.log("promise was sloved");
//     console.log("result=", result);
//     return changeColor("violet");
//   });
