// arrray distructuring
const numbers = [45, 50];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x,y);
const [x, y] = [45, 50];
// console.log(x,y);
const [b, c] = [45, 50];
// console.log(b,c);
function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
// console.log(boxify(50,60));
const nums = [num1, num2] = [50, 60];
// console.log(nums);
// const nums = [num1, num2] = boxify(90,34);
// console.log(nums);
// object distructuring
const { name, age } = { name: 'alu', age: 14 };
// const { name, age } = { name: 'potol', age: 12, salary: 2000 }

const employe = {
    textEditor:'VS Code',
    designation: 'web developer',
    machin: 'i mac',
    languages: ['java,js,python'],
    specification: {
        height: 5.7,
        weight: 65,
        address: 'kumarkhali',
        drink:'water'
    }
}
const res = { designation, languages } = employe;
console.log(res);
const { weight, hobby } = employe.specification?.watch;