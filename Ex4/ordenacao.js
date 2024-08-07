const prompt = require('prompt-sync')();

let lista = []

let tamanho = parseFloat(prompt('Digite o tamanho da lista: '));

if(tamanho < 0 || isNaN(tamanho)){
    console.log('Digite um tamanho de lista válido');
}
else{
    for (let i = 0; i < tamanho; i++){
        lista.push(parseFloat(prompt('Digite um número: ')));
    }
    console.log(lista);
}
