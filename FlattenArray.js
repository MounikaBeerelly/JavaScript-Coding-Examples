function flattenArr(arr) {
    return arr.flat(Infinity);
}

console.log(flattenArr([1, [2, 3], [4, [5, 6]]]));

function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

// Example:
console.log(flatten([1, [2, 3], [4, [5, 6]]])); // Output: [1,2,3,4,5,6]
