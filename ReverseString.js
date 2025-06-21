// Built-in methods
const ReverseString = (str) => {
    return str.split('').reverse().join('');
}

console.log(ReverseString('Hello World'));

// using for loop
const ReverseStr = (str) => {
    let reversed = '';
    for(let i=str.length - 1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log(ReverseStr('hello developers!'));