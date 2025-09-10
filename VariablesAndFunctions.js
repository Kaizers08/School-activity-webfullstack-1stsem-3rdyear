//Variables(let, const, var)
let name = 'Node.js';
const version = 'version20';

//Function declaration
function greet(user){
    return `Hello, ${user}!`;//Template literals (ES6)
}

//Arrow function (ES6+)
const add = (a,b) => a+b;

console.log(greet('Developer'));//Hello, Developer!
console.log(add(5,3));//8