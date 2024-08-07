const prompt = require('prompt-sync')();

let temp = parseFloat(prompt('Digite a temperatura em celsius: '));

console.log('A temperatura em fahrenheit é: ',(temp * 9/5) + 32)