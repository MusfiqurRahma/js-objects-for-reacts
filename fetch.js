const student = {
    name: 'Solil khan',
    age: 32,
    movies:['Dhakar Mastan','King Khan']
}
const studentJson = JSON.stringify(student);
// console.log(student);
// console.log(studentJson);
const studentObj = JSON.parse(studentJson);
// -console.log(studentObj);
// fetch
fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    // keys,values
const keys = Object.keys(student);
const values = Object.values(student);
// console.log(values);
// console.log(keys);
// for
const numbers = [10, 20, 30, 40, 50, 60, 70];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of an array like an object
// loop on an object using for in
const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 3000, brand: 'apple', color: 'black' },
    { name: 'watch', price: 2800, brand: 'samsung', color: 'golden' },
    { name: 'sunglass', price: 1500, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 7000, brand: 'nikkon', color: 'black' }
];

const newProduct = { name: 'webCam', price: 5000, brand: 'syle', color: 'gray' };
// copy products array and add a new prodcut
const newProducts = [...products, newProduct];
console.log(newProducts);
// create a new array with a new spesific item
// remove phone means create a new arrayb without the phone
const remaining =products.filter(product =>product.name !=='phone')