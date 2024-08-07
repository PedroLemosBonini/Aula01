const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite a primeiro nota: "));
let num2 = parseFloat(prompt("Digite a segundo nota: "));
let num3 = parseFloat(prompt("Digite a terceiro nota: "));

let media = (num1+num2+num3)/3;

if(media < 4 && media >= 0){
    console.log('Aluno Reprovado, média: '+media+'');
}
else if(media >= 4 && media < 6){
    console.log('Aluno em Recuperação, média: '+media+'');
}
else if(media >= 6 && media <= 10){
    console.log('Aluno aprovado, média: '+media+'');
}
else{
    console.log('Digite uma nota válida')
}