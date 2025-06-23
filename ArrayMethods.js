// push - add elements to the end of the array
let array = ['banana', 'apple'];
array.push('guava');
console.log(array); // [ 'banana', 'apple', 'guava' ]

// unshift - add elements to the beginning of the array
array.unshift('orange');
console.log(array); // [ 'orange', 'banana', 'apple', 'guava' ]

// pop - remove the last element from the array
array.pop();
console.log(array); // [ 'orange', 'banana', 'apple' ]

// shift - remove the first element from the array
array.shift();
console.log(array); // [ 'banana', 'apple' ]

// Looping/Transformations

// map : transform array values, and returns new array
const numbers = [2,4,3,6,9];
const doubled = numbers.map(n => n*2);
console.log(doubled); // [ 4, 8, 6, 12, 18 ]

// filter - filter values based on a condition
const even = numbers.filter(n => n%2 === 0);
console.log(even); // [ 2, 4, 6 ]

// forEach - runs a function for each item
const res = numbers.forEach(n => console.log(n));

// reduce - reduces array into single value
const result = numbers.reduce((acc,curr) => acc+curr, 0);
console.log(result); // 24

// Searching and Finding

// find - find the first matching value
console.log(numbers.find(n => n > 5)); // 6

// findIndex - find the index of the first value
console.log(numbers.findIndex(n => n>6)); // 4

// includes -  find the number present or not
console.log(numbers.includes(5)); // false

// indexOf - find the index of first number
const nums = [3,5,3,4,2,6,6,9];
console.log(nums.indexOf(3));

// sort - sort the arrays
console.log(nums.sort((a,b) => a-b));

// slice -  returns a shallow copy
console.log(nums.slice(2, 6));

// splice - adds/removes/replaces items of an array
console.log(nums.splice(1,2,7));

// reverse - reverse the order of elements
console.log(nums.reverse());

// join - join all the elements into a string with seperator
console.log(nums.join(','));

// flat - flatten nested arrays into specified path
const arr = [2,5,[6,3], [4,[1]]];
console.log(arr.flat(2)); //[ 2, 5, 6, 3, 4, 1 ]

// Utility/Conversion

// Array.from() - create a new array from array-like or iterable object
const str = 'mounika';
console.log(Array.from(str));

// Array.isArray - check if a value is an array
console.log(Array.isArray([3,1.5]));
console.log(Array.isArray('text'));

// to-string : converts an array into comma-seperated string
console.log(nums.toString());

// toLocaleString string - returns a localized string representing each array element 
const price = [1234.653];
console.log(price.toLocaleString('en-IN'));