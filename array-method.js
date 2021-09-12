const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 3000, brand: 'apple', color: 'black' },
    { name: 'watch', price: 2800, brand: 'samsung', color: 'golden' },
    { name: 'sunglass', price: 1500, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 7000, brand: 'nikkon', color: 'black' }
];
// map
const brands = products.map(product => product.brand);
const prices = products.map(product => product.price);
// console.log(prices);
// console.log(brands);
// for each
products.forEach(product=>console.log(product.price))
products.forEach(product=>console.log(product.color))
products.forEach(product => {
    // যা ইচছা তাই লেখা যাবে এই লুপের মধ্যে।
})
// filter
const cheap = products.filter(product => product.price <= 3000);
// console.log(cheap);
const specificName = products.filter(product => product.name.includes('m'));
console.log(specificName);

// find
const special = products.find(product => product.name.includes('n'));
console.log(special);
