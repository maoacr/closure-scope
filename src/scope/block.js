const fruits = () => {
  if (true) {
    var fruits1 = "apple";
    let fruits2 = "banana";
    const fruits3 = "kiwi";

  }
  console.log(fruits1);
  console.log(fruits2);
  console.log(fruits3);
}

//This func return only var
fruits();


const anotherFunction = () => {
  for(var i = 0; i < 10; i ++) {
    setTimeout(() => {
      console.log(i)
    }, 1000);
  }
};
//Con var se imprimira 10 veces el 10
anotherFunction();

//con let se impre la secuencia de 0-9 por el flujo del EventLoop