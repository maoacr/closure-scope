//Podemos re-asignar un valor a var pero es mala práctica
var hello = "Hello";
var hello = "Nuevo valor"
//No podemos re-asignar valor
let world = "Hello world";
const helloWorld = "Hello world !"

const anotherFunctions = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}
anotherFunctions();

//Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.
const myFunc = () => {
  myVar = "variable global"
}

myFunc();
console.log(myVar);

//La doble asignación de una variable también es una mala práctica.
const secondFunction = () => {
  var localVar = myVar = "I am global"
}

secondFunction();
console.log(myVar);