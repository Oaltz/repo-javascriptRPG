/*
    Tipos primitivos imutáveis:
    - boolean
    - null
    - undefined
    - number
    - string
    - synbol
*/

// object

/*
let x =10;
x = 20;

let y = { numero: 10 }
y.numero = 20

true, false

new Boolean(true)
*/

/*
console.log(10 + '10');
console.log(10 == '10'); // Desconsidera o tipo
console.log(10 === '10'); // Considera o tipo
*/

// true false

/*
const nome = ' ';

if (nome) {
    console.log('preenchido')
}

console.log(!'')

if (10 > 11) {

}
*/

// Null: Inexistência de valor
// Undefined: Variável não declarada

/*
const x = null;
let y;

console.log(x);
*/

// Todos tipos são 'Number':
// +Infinity -Infinity e NaN
// Double Precision 64-bit binary format IEEE 754

/*
const x = { nome: null };

console.log(JSON.stringify(x));
*/

/*
const id = 20;

console.log(`
    <div id="${id}">
        teste
    </div>
`);
*/

// o Symbol gera um valor imutável e único

/*
const x = Symbol('10');

const y = Symbol('10');

console.log(x === y);
*/

// Objeto literal (Coleção dinâmica de chave-valores)

/*
const x = {
    nome: "Henrique",
    idade: 19,
    "ano": 2024
}

x.sobrenome = 'Bernardo Brito'

x.falar = function() {
console.log(`Olá mundo! Eu sou o ${this.nome}`)
}

console.log(x);
console.log(x.nome);
x.falar()
*/

/*
if (true) {
    var passouPorAqui = 'SIM';
}

console.log(passouPorAqui)

let x=10;
x = 'teste';
console.log(x)
*/