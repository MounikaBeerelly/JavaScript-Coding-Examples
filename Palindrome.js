// Built-in methods
const palindrome = (str) => {
    return str === str.split('').reverse().join('');
}

console.log(palindrome('madam'));
console.log(palindrome('hello'));

// using for loop

const palindromeStr = (str) => {
    let reverse = '';
    for(let i=str.length-1; i>=0; i--) {
        reverse += str[i];
    }
    return reverse === str;
}
console.log(palindromeStr('madam'));
console.log(palindromeStr('hello'));
