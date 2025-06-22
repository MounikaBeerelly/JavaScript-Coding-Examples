function arraySum(arr) {
    return arr.reduce((acc,curr) => acc + curr, 0);
}
console.log(arraySum([3,7,2,5,3]));

// for of loop

function sumArr(arr) {
    let sum = 0;
    for(let num of arr) {
        sum += num;
    }
    return sum;
}
console.log(sumArr([3,7,2,5,3,5]));
