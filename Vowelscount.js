function CountVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for(let char of str) {
        if(vowels.includes(char)) {
            count ++;
        }
    }
    return count;
}

console.log(CountVowels('Mounika'));

// match 

function VowelCount(str) {
    const match = str.match(/[aeiou]/gi);// g = global, i = case-insensitive
    return match ? match.length : 0;
}
console.log(VowelCount('Avyay Reddy'));
