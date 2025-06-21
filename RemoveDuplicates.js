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