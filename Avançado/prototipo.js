/*
const pessoa = {
    genero: 'masculino'
}

const henrique = {
    nome: 'Henrique',
    idade: 19,
    __proto__: pessoa
}

console.log(henrique.genero)
*/

// Função construtora

/*
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

const henrique = new Pessoa('Henrique', 19)

console.log(henrique)

// Outra maneira de acessar
Pessoa.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome}`)
}

henrique.falar()
*/

/*
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
*/

// Operador "new" recebe uma função construtora que 
// invoca outra função e o resultado sempre será o 
// escopo atribuida a ela.

/*
const pessoa = {
    idade: 19
}

const henrique = {
    nome: 'henrique',
    // idade: 19,
    __proto__: pessoa
}

console.log(henrique.idade)

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}
*/

// Forma mais simples

/*
const pessoa = {
    genero: 'masculino'
}

const henrique = {
    nome: 'Henrique',
    __proto__: pessoa
}
*/

// Objetos instânciados é necessário utilizar '__proto__'

/*
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}

const henrique = {
    genero: 'masculino'
}

Pessoa.call(henrique, 'nome', 19)

console.log(henrique)
*/