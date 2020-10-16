const fruits = () => {
  var fruit = "apple";
  console.log(fruit);
}
//This func return "apple"
fruits();

//this console return "Error" because fruit in not defined in global scope
console.log(fruit);

const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  let y = 2;
  console.log(x);
  console.log(y);
}

anotherFunction();