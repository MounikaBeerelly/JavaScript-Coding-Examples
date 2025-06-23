function capitalized(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalized('hi, mounika beerelly!'));

// Another way
function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(capitalizeWords('hello world from javascript')); // Hello World From Javascript

// Count the words in a string
function CountWords(str) {
    return str
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .length;
}
console.log(CountWords("hi, these are some of the javascript coding examples"));

// another way
function countWords(str) {
    const match = str.trim().match(/\S+/g);
    return match ? match.length : 0;
}
console.log(countWords("hi, here these are some of the javascript coding examples"));
