// // truthy = 'almas',5,true,[],{}
// // falsy = 0,false,undefined,null..
// // check truthy
let myVar = 5;
// // check truthy
if (myVar) {
    myVar=myVar*200
} else {
    myVar = 0;
}
// // check falsy
let myMoney = 50;
// // truthy wii be falsy if u give a negative sign
if (!myMoney) {
    
}
const money = 80;
let food;
if (money > 100) {
    food ='kacchi khabo...'
} else {
    food='cha-biscuit khabo'
}
console.log(food);
// ternary
const moneyy = 200;
let food1 = moneyy > 100 ? 'biriani khamu' : 'cha-biscuit khamu'
console.log(food1);

let drink = (moneyy > 100 && money > 100) ? 'coke' : 'filter Water';
console.log(drink);
// number to string conversion
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);
// string to number
const input = '550';
console.log(input);
const strNum = +input;
console.log(strNum);

const isActive = true;
const showUser = () => console.log('display-user');
const hideUser = () => console.log('hide-user');
// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();
// toogle boolean
isActive = !isActive;