const prompt = require('prompt-sync')();

let numbers = parseFloat(prompt("Digite um valor: "));

if ( numbers % 2 === 0){
    console.log('O número '+numbers+' é par');
}
else if(isNaN(numbers)){
    console.log('Digite um número válido.')
}
else{
    console.log('O número '+numbers+' é ímpar');
}