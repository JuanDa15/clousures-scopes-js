// const moneyBox = (coins) => {
//   let savedCoins = 0;
//   savedCoins += coins;
//   console.log(savedCoins);
// }

// moneyBox(5);
// moneyBox(10);


const moneyBox = () => {
  debugger
  let savedCoins = 0;
  const countCoints = (coins) => {
    debugger
    savedCoins += coins;
    console.log(savedCoins);
  }
  return countCoints;
}

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);