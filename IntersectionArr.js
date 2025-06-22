function IntersectionArr(arr1, arr2) {
    let result = arr1.filter((el) => arr2.includes(el));
    return result;
}

console.log(IntersectionArr([2,5,1,4,7,9], [6,2,4,6,9,1]));

// unique common elements
function uniqueCommonVal(arr1, arr2) {
    let result = [...new Set(arr1.filter((el) => arr2.includes(el)))];
    return result;
}

console.log(uniqueCommonVal([2,5,1,2,4,7,9], [6,2,4,6,9,9,1]));
