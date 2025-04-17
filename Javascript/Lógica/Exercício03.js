var prompt = require('prompt-sync')();
let frase = prompt("Digite uma frase: ");
let letra = prompt("Digite uma letra: ").toLowerCase();
var palavras = frase.split(" ")
var letraselecionada = palavras.filter(palavra => palavra.toLowerCase().startsWith(letra));

console.log(`Numero de palavras que começam com a letra "${letra}" : ${letraselecionada.length}`)