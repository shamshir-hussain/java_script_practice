// QS:1 To display traffic lights:
//let color = "yellow";

// //Traffic lights
// if (color === "red") {
//   console.log("stop");
// }
// if (color === "yellow") {
//   console.log("Slow Down");
// }
// if (color === "green") {
//   console.log("Go");
// }

// QS:2 To create a system to calculate popcorn price:
// let size = "xl";

// if (size === "XL") {
//   console.log("price is Rs.250");
// } else if (size === "L") {
//   console.log("price is Rs.200");
// } else if (size === "M") {
//   console.log("price is Rs.150");
// } else {
//   console.log("price is Rs.50");
// }

// QS:3 A "good string" is a string that should starts with the letter 'a' and has a length>3. Write a programe to find if a string is good or not.

// let str = "ande";

// if (str[0] === "a" && str.length > 3) {
//   console.log("It is Good String");
// } else {
//   console.log("It is Not a Good String");
// }
// ANS: It is Good String

// QS:4 Predict the output of following code:

// let num = 12;
// if((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))){
//   console.log("Safe");
// } // true && true : true
// else{
//   console.log("Not Safe");
// } //safe

// switch

// let color = "green";

// switch (color) {
//   case "red":
//     console.log("Stop");
//     break;
//   case "yellow":
//     console.log("Slow down");
//     break;
//   case "green":
//     console.log("GO");
//     break;
//   default:
//     console.log("Broken light");
// }

// QS:5 Use Switch statement to print the day of the week using a number variable "day" with values 1 to 7:

// let day = 4;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Wrong Day");
//     break;
// }

// let firstName = prompt("enter first name");
// let lastName = prompt("enter last name");
// console.log(`Welcome ${firstName + lastName}!`);

// QS: Create a number variable num with some value.Now, print "good" if the number is divisible by 10 and print "bad" if it is not.

// let num = 100;
// if (num % 10 == 0) {
//   console.log("Good");
// } else {
//   console.log("Bad");
// }

//Take the user's name & age as input using prompts. Then return back the following statement to the user as an alert (by substituting their name & age): name is age years old. [Use template Literals to print this sentence]

// let userName = prompt("enter username");
// let age = prompt("enter age");

// alert(`${userName} is ${age} years old.`);

// QS:Write a switch statement to print the months in a quarter.
// Months in Quarter 1: January, February, March
// Months in Quarter 2: April, May, June
// Months in Quarter 3: July, August, September
// Months in Quarter 4: October, November, December
// [Use the number as the case value in switch]

// let Quarter = 3;
// switch (Quarter) {
//   case 1:
//     console.log("January, February, March");
//     break;
//   case 2:
//     console.log("April, May, June");
//     break;
//   case 3:
//     console.log("July, August, September");
//     break;
//   case 4:
//     console.log("October, November, December");
//     break;
//   default:
//     console.log("Not valid");
//     break;
// }

// QS: A string is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5. For a given string print if it is golden or not.

// let str = "America";

// if ((str[0] === "A" || str[0] === "a") && str.length > 5) {
//   console.log("Golden String");
// } else {
//   console.log("Not Gloden String");
// }

// QS:Write a program to find the largest of 3 numbers.
// case1:
// let num1 = prompt("num1");
// let num2 = prompt("num2");
// let num3 = prompt("num3");

// if (num1 > num2 && num1 > num3) {
//   console.log(num1, "is largest");
// } else if (num2 > num1 && num2 > num3) {
//   console.log(num2, "is largest");
// } else if (num3 > num1 && num3 > num2) {
//   console.log(num3, "is largest");
// } else {
//   console.log("Nothing is largest");
// }

// case2: if (num1 > num2) {
//   if (num1 > num3) {
//     console.log(num1, "is largest");
//   } else {
//     console.log(num3, "is largest");
//   }
// } else {
//   if (num2 > num3) {
//     console.log(num2, "is largest");
//   } else {
//     console.log(num3, "largest");
//   }
// }

// for four numbers
// let a=14;
// let b=15;
// let c=91;
// let d=131;

// if(a>b){
//     if(a>c){
//         if(a>d){
//             console.log("a is greater")
//         }else{
//             console.log("d is greater")
//         }
//     }

// }
// else if(b>c){
//     if(b>d){
//         console.log("b is greater")
//         }else{
//             console.log("d is greater")
//         }
// }else{
//     if(c>d){
//         console.log("c is greater")
//     }else{
//         console.log("d is greater")
//     }
// }

// QS:Write a program to check if 2 numbers have the same last digit.
// Eg: 32 and 47852 have the same last digit i.e. 2

// let num1 = prompt("enter num1");
// let num2 = prompt("enter num2");

// if (num1 % 10 == num2 % 10) {
//   console.log("Numbers have the same last digit");
// } else {
//   console.log("Numbers don't have same last digit");
// }
