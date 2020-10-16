const helloWorld = () => {
  const hello = "Hello World";
  console.log(hello);
}

helloWorld();

/*este console falla porque la variable 
tiene un scope local dentro de la función*/
console.log(hello);


var scope = "i am a global variable";

const functionScope = () => {
   var scope = "I am just local";
   const func = () => {
     return scope
   }
   console.log(func());
}

//this function returb "I am just local"
functionScope();

//This console return "i am a global varaible"
console.log(scope);