// built-in methods
function RemoveDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(RemoveDuplicates([3,1,5,6,3,2,5]));

// using filter, indexOf

function removeDup(arr) {
    const unique = arr.filter((item,index) => arr.indexOf(item) === index);
    return unique;
}

console.log(removeDup([3,2,4,6,2,3,4,2,7,5]));

// Using reduce method

function RemoveDup(arr) {
    const unique = arr.reduce((acc,curr) => {
        if(!acc.includes(curr)) {
            acc.push(curr)
        }
        return acc;
    }, []);
    return unique;
}

console.log(RemoveDup([2,6,2,5,6,7,1,2,4]));

// Combine two arrays

const arr1 = [2,4,5,6,3];
const arr2 = [1,6,3,5,9];
console.log(arr1.concat(arr2));
console.log([...arr1, ...arr2]);
arr1.push(...arr2);
console.log(arr1);

// Check if two arrays are equal
const array1 = [1,2,3,4,5];
const array2 = [1,2,3,4,5];

console.log(JSON.stringify(array1) === JSON.stringify(array2));
console.log(array1 === array2);

// Move all zeros to the end of the array

const arr = [2,0,4,5,1,0,0,43,7,9,0,21];
const zeros = arr.filter(x => x === 0);
const nonZeros = arr.filter(x => x !== 0);

console.log(zeros);
console.log(nonZeros);
console.log([...nonZeros, ...zeros]);