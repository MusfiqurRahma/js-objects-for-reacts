const numbers = [10, 20, 30, 40, 50];
const student = {
    name: 'Solil khan',
    age: 32,
    movies:['Dhakar Mastan','King Khan']
}
// template string
const about = `My name is ${student.name} and My age is ${student.age} has a number ${numbers[2]} and liked movies ${student.movies[1]} `;
console.log(about);
// function arrow
const getFiftyFive = () => 55;
const addSixtyFive = Number => number + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
// spread operator
const newNumbers = [...numbers];
numbers.push(12);
console.log(newNumbers);
console.log(numbers);
// create a new array from an older array and add a element
const currentNumbers = [...numbers, 100];
console.log(currentNumbers);