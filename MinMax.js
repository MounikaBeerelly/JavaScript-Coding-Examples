// Built-in methods

function LargestNumber(arr) {
    return Math.max(...arr);
}

console.log(LargestNumber([3,7,5,1,9,2]));

function SmallestNumber(arr) {
    return Math.min(...arr);
}
console.log(SmallestNumber([3,7,5,1,9,2]));

// Using for loop 

function MaxNumber(arr) {
    let max = arr[0];
    for(let i=1; i<=arr.length; i++) {
        if(arr[i] > max ) {
            max = arr[i];
        }
    }
    return max;
}
console.log(MaxNumber([2,6,4,3,8,1]));

function MinNumber(arr) {
    let min = arr[0];
    for(let i=1; i<=arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(MinNumber([2,6,4,3,8,1]));

// reduce method

function maximumNum(arr) {
    return arr.reduce((a,b) => a>b ? a: b);
}

console.log(maximumNum([4,2,7,0,3]));

function minimumNum(arr) {
    return arr.reduce((a,b) => a<b ? a : b);
}
console.log(minimumNum([4,2,7,0,3]));
