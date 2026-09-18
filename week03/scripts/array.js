const planets = ['Mercury', 'Venus', 'Earth'];
planets.push('Mars');
console.log(planets); // Output: ["Mercury", "Venus", "Earth", "Mars"]

const fruits = ['apple', 'banana', 'cherry'];
const removedFruit = fruits.pop();
console.log(removedFruit); // Output: "cherry"
console.log(fruits);

const cars = ['BMW', 'Mercedes', 'Audi'];
const shiftedCar = cars.shift();
console.log(shiftedCar); // Output: "BMW"

const animals = ['lion', 'tiger', 'leopard'];
const newLength = animals.unshift('cheetah', 'panther');
console.log(newLength); // Output: 5
console.log(animals);

const fruits1 = ['apple', 'banana'];
const fruits2 = ['cherry', 'orange'];
const allFruits = fruits1.concat(fruits2);
console.log(allFruits); // Output: ["apple", "banana", "cherry", "orange"]

const pizzaToppings = ['pepperoni', 'mushrooms', 'onions', 'sausage', 'green peppers'];
const vegetarianSlice = pizzaToppings.slice(1, 4);
console.log(vegetarianSlice); // Output: ["mushrooms", "onions", "sausage"]


// In this example, we're removing one element at index 2 (bass) and adding two new elements (catfish and perch) in its place.
const fish = ['trout', 'salmon', 'bass', 'pike'];
const removedFish = fish.splice(2, 1, 'catfish', 'perch');
console.log(removedFish); // Output: ["bass"]
console.log(fish); // Output: ["trout", "salmon", "catfish", "perch", "pike"]

const ingredients = ['flour', 'sugar', 'eggs', 'butter'];
const recipe = ingredients.join(', ');
console.log(recipe); // Output: "flour, sugar, eggs, butter"
console.log(ingredients)

const fruits = ['apple', 'banana', 'cherry', 'banana'];
const bananaIndex = fruits.indexOf('banana');
console.log(bananaIndex); // Output: 1

const fruits = ['apple', 'banana', 'cherry', 'banana'];
const lastBananaIndex = fruits.lastIndexOf('banana');
console.log(lastBananaIndex); // Output: 3