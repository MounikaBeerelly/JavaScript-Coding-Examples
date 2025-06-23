function myFunc(str,char) {
    let count = 0;
    for(let i=0; i<=str.length; i++) {
        if(str[i] === char) {
            count ++;
        }
    }
    return count;
}

console.log(myFunc("Mounika nnnn", 'n'));

// Using split method

function charOccurance(str,char) {
    return str.split(char).length - 1;
}

console.log(charOccurance('hellooooo', 'l'));

//Print Letters Count
function printLetterCounts(str) {
  const freq = {};

  // Count frequency
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Print each letter and its count
  for (let char in freq) {
    console.log(`${char}: ${freq[char]}`);
  }
}

// Example:
printLetterCounts('hello world');

// Output:
// h: 1
// e: 1
// l: 3
// o: 2
//  : 1
// w: 1
// r: 1
// d: 1

// Find the first non-repeating character in a string
function firstNonRepeatingChar(str) {
  const freq = {};

  // Count each character
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find the first character with a count of 1
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null; // if there's no non-repeating character
}

// Example:
console.log(firstNonRepeatingChar('swiss')); // Output: "w"


// Another way
function firstUniqueChar(str) {
    for(let char of str) {
        if(str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}

console.log(firstUniqueChar('madam'));

// Count character occurrences
function charFrequency(str) {
  return str.split('').reduce((freq, char) => {
    freq[char] = (freq[char] || 0) + 1;
    return freq;
  }, {});
}
console.log(charFrequency('banana')); // { b:1, a:3, n:2 }
