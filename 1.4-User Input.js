const prompt = require('prompt-sync')();

console.log('1.4 - User Input');
let age = prompt('What year were you born? ');
console.log('You entered ' + age);
console.log('You are likely ' + (2024 - age) + ' years old');

let name = prompt('What is your name? ');
console.log('Hi, ' + name + '. You were born in ' + age + ' and are ' + (2024 - age) + " years old");
console.log('Your name is ' name.length + ' letters long.');