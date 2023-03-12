// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));


import './styles/style.css'

import object from "./template/renderObject.hbs";
import objectArray from "./template/renderObjectArray.hbs";
import array from "./template/renderArray.hbs";
import arrayObject from "./template/renderArrayObject.hbs";

import { base, list, frameworks, libs } from "./data/hbsData.js";


const markupObject = object(base); 

const root = document.querySelector('#root')
root.insertAdjacentHTML("beforeend", markupObject);

const markupObjectArray = objectArray(list)
// console.log(markupArray)
root.insertAdjacentHTML("beforeend", markupObjectArray);

const markupArray = array(frameworks);
root.insertAdjacentHTML("beforeend", markupArray);

const markupArrayObject = arrayObject(libs);
root.insertAdjacentHTML("beforeend", markupArrayObject);


// Вводимо текст в поле і вони додаються в список по натисканню Add на екран


// і зберігалось в локал сторедж?
