function isAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    } else {
        return str1.split('').sort().join('') === str2.split('').sort().join('');
    }
}

console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));

//

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq = {};

  for (let char of str1) freq[char] = (freq[char] || 0) + 1;
  for (let char of str2) {
    if (!freq[char]) return false;
    freq[char]--;
  }

  return true;
}

console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));
