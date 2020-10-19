const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`Money Box $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);
//Hasta aqui, retorna $5 y luego $10, no guarda el valor anterior



const Box = (coins) => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`Money Box $${saveCoins}`);
  }
  return countCoins;
};

let myMoneyBox = Box();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);


function crearContador() {
  let contador = 0;

  return function incrementar() {
    contador += 1;
    return contador;
  };

}

const counter = crearContador();