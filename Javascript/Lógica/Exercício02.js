var prompt = require('prompt-sync')();
let frase = prompt("Digite uma frase: ")
//let frase = "Jogos não são apenas diversão — são portais para mundos onde tudo é possível."
 let maio = frase
 .split(" ")
 .reduce(function(maior, atualMaior) {
    if (atualMaior.length > maior.length){
        return atualMaior
    } else {
        return maior
    }
 }, "")
console.log(maio);
