// Built-in method
function ReverseArr(arr) {
    let reverse = arr.reverse();
    return reverse;
}
console.log(ReverseArr([2,5,7,1,6,3]));

// Manual way

function reverseArray(arr) {
    let reverse = [];
    for(let i=arr.length-1; i>=0; i--) {
        reverse.push(arr[i]);
    }
    return reverse;
}
console.log(reverseArray([2,5,7,1,6,3]));
