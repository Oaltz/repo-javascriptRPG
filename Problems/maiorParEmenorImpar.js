// Um programa que recebe 'n' qtd de números 
// e seus respectivos valores, e imprima o 
// maior número par e o menor número ímpar.

const { gets, print } = require('./funcoes-auxiliares-parImpar')

const n = gets();
let numeroMaiorPar = 0;
let numeroMenorImpar = 0;

for (let i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        if (numero > numeroMaiorPar) {
            numeroMaiorPar = numero;
        }
    } else {
        if (numeroMenorImpar === 0) {
            numeroMenorImpar = numero;
        } else if (numero < numeroMenorImpar){
            numeroMenorImpar = numero;
        }
    }
}

print ('O maior número par é ' + numeroMaiorPar);
print ('O menor número ímpar é ' + numeroMenorImpar);