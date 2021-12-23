
console.log('This is not a closure:');
const moneyBoxWrong = (coins) => {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
};
moneyBoxWrong(5);
moneyBoxWrong(10);

console.log('This is a closure:');
const moneyBoxCorrect = () => {
    let saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBoxCorrect();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

console.log('This is a better closure:');
const moneyBoxBetter= () => {
    let saveCoins = 0;
    return (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    };
};

let myOtherMoneyBox = moneyBoxBetter();
myOtherMoneyBox(4);
myOtherMoneyBox(6);
myOtherMoneyBox(10);