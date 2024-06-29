//getElementByClassName
// let smallImages = document.getElementsByClassName("newImg");
// to select images by using loop
// for (let i = 0; i < smallImages.length; i++) {
//   console.dir(smallImages[i]);
// }

//to change images by loop

// for (let i = 0; i < smallImages.length; i++) {
//   smallImages[i].src = "./images/coat.png";
//   console.log(`value of image no:${i} is changed`);
// }

//getElementsByTagName:

// let tagName = document.getElementsByTagName("li");

// console.dir(tagName);//HTMLCollection(9)
// console.dir(tagName[1].innerText);//Men's Fashion
// console.dir((tagName[1].innerText = "Fashion"));//Fashion

//queryselector():

// console.dir(document.querySelector("p")); //select single element
// console.dir(document.querySelector(".head_div1 div:last-child"));//descendent selector
// console.dir(document.querySelectorAll(".newImg"));//nodeList(6) //to select more than one with same name

//using properties and methods

// let para = document.querySelector("p");
// console.log(para.innerText); //shows visible text
// console.log(para.innerHTML); //shows full markup
// console.log(para.textContent); //shows all text even it is hidden
// para.innerHTML = `<u>${para.innerText}</u>`

//manipulate attributes

// let img = document.querySelector(".banner_div2 img");
// console.dir(img);//object
// console.log(img.getAttribute("src"));//./images/iphone.png
// console.log(img.setAttribute("class", "phoneImage"));
// console.log(img.getAttribute("class"));//phoneImage

//manipulating styles

// let list = document.querySelectorAll(".banner_div1 ul li");

// //using different loops
// list.forEach((element) => {
//   element.style.color = "purple";
// });

// for (let i = 0; i < list.length; i++) {
//   list[i].style.fontSize = "1.25em";
// }

// for (newList of list) {
//   newList.style.textDecoration = "underline";
// }

//classList

// let heading = document.querySelector("h2");

// console.log(heading.classList); //value:"" not assigned
// console.log(heading.classList.add("green"));
// console.log(heading.classList.add("underline"));
// console.log(heading.classList); //DOMTokenList(2) ['green', 'underline', value: 'green underline']
// console.log(heading.classList.remove("green"));
// console.log(heading.classList); //DOMTokenList ['underline', value: 'underline']
// console.log(heading.classList.contains("underline")); //true
// console.log(heading.classList.toggle("green")); //true
// console.log(heading.classList); //DOMTokenList(2) ['underline', 'green', value: 'underline green']
// console.log(heading.classList.toggle("underline")); //true
// console.log(heading.classList); //DOMTokenList ['green', value: 'green']

//navigation

// let div = document.querySelector(".sec_1");

// //children
// console.log(div.children); //HTMLCollection(4) [p#home, p#contact, p#about, p, home: p#home, contact: p#contact, about: p#about]

// //childElementCount
// console.log(div.childElementCount); //4
// //previous and next element sibling
// console.log(div.children[1]); //p#contact
// console.log(div.children[1].previousElementSibling); //p#home
// console.log(div.children[2].nextElementSibling); //p#signup
// //parentElement
// let h2 = document.querySelector("h2");
// console.log(h2.parentElement); //div

// //styling
// let styles = document.querySelector(".sec_1");
// console.log((styles.previousElementSibling.style.color = "green")); //green

//adding elements

// let para1 = document.createElement("p");

// para1.innerText = "Todays Flash Sales is On...";

// let div = document.querySelector("#deals_sec");

// let btn = document.createElement("button");

// btn.innerText = "Click on this!!";

// let ins = div.children[0];

// console.log(div.children[2].appendChild(para1)); //as child
// console.log(div.append(para1)); //added end
// console.log(para1.append("Click to access")); //to add text
// console.log(div.prepend(para1)); //added at start
// console.log(div.insertAdjacentElement("beforebegin", btn));//before start
// console.log(div.insertAdjacentElement("afterbegin", btn));//as a child
// console.log(div.insertAdjacentElement("beforeend",btn));//as a child in the last
// console.log(div.insertAdjacentElement("afterend", btn));//after

//remove

// console.log(div.children[2].removeChild(para1));//remove as child
// console.log(div.remove(para1)); //removed

//practice

// let para = document.createElement("p");

// para.innerText = "Hey I'm red!";

// document.querySelector("body").append(para);

// para.classList.add("red");

// let heading = document.createElement("h3");

// heading.innerText = "Hey I'm a blue!";

// document.querySelector("body").append(heading);

// heading.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = "I'm a div";
// para2.innerText = "Me Too!";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");

// document.querySelector("body").append(div);

//assignment

//QS:Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me'...

// let newInput = document.createElement("input");
// let button = document.createElement("button");

// button.innerText = "Click me...";

// document.querySelector("body").append(newInput);
// document.querySelector("body").append(button);

//QS:. Add following attributes to the element : Change placeholder value of input to "username" , Change the id of button to "btn'

// newInput.setAttribute("placeholder", "username");
// button.setAttribute("id", "btn");

//QS:Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.

// let btn = document.querySelector("#btn");

// btn.classList.add("btnStyle");

//QS:Create an hl element on the page and set its text to "DOM Practice" underlined.Change its color to purple.

// let heading = document.createElement("h1");

// heading.innerText = "DOM Practice";

// heading.classList.add("head");

// document.querySelector("body").append(heading);

//QS: Create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is bold

// let para = document.createElement("p");

// para.innerHTML = "Apna College <b>Delta</b> Practice";

// document.querySelector("body").append(para);
