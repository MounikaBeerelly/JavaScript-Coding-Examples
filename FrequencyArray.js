function frequency(arr) {
    let freq = {};
    for(let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}

console.log(frequency([2,5,1,9,3,5,2,3,7,4,4]));

// reduce method

const arr = ['apple', 'banana', 'apple', 'apple', 'banana', 'mango'];

const freq = arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(freq); // Output: { apple: 3, banana: 2, mango: 1 }
