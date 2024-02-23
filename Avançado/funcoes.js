// First Class Functions
// Higher Order Functions

/*
function falarMeuNome() {
    console.log('Meu nome é Henrique')
}

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('Bernardo Brito')
    return falarMeuNome
}

falarMeuNomeCompleto(falarMeuNome)()
*/

/*
function funcao1() {
    console.log(this)
}

const funcao2 = () => {
    console.log(this)
}

const henrique = {
    nome: 'Henrique',
    funcao1,
    funcao2
}

henrique.funcao1()
henrique.funcao2()
*/

/*
function soma(x) {
    return function(y) {
        return x + y;
    }
}

const somaParcial = soma(10);

console.log(somaParcial(20));
console.log(somaParcial(30));
console.log(somaParcial(40));
*/

/*
const pessoa = {
    nome: 'Henrique',
    idade: 19
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa, ['AAAAAAAAAAAH'])
*/

/*
function adicao(x, y) {
    return x + y
}

function calculadora(x, operacao, y) {
    console.log(operacao(x,y))
}

calculadora(10, adicao, 20)
*/

/*
document.getElementById('btn1').addEventListener('click', () => {
    console.log('Clicou!')
})
*/