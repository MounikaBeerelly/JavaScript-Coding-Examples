// Find a value 10 in an array. array = [1, [2, 3, [4, 5, [6, 7]]], [8, 9, [10]]];

 const array = [1, [2, 3, [4, 5, [6, 7]]], [8, 9, [10]]];
 const flattened = array.flat(Infinity);
 console.log(flattened.includes(10)); // true

 // other way
 function recursion(arr,value) {
    for(element of arr) {
        if(Array.isArray(element)){
            if(recursion(element,value)){
                return true;
            }
        }
        else if(element === value) {
            return true;
        }
    }
    return false;
 }

 console.log(recursion([1, [2, 3, [4, 5, [6, 7]]], [8, 9, [10]]], 10));