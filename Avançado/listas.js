
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
lista.forEach((value, i, listRef) => {
    console.log(value + i)
    // console.log(value, i, listRef)
})

const cb((value, i, listRef) => {
    console.log(value + i)
})

lista.forEach(cb)

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    cb(element, i, lista)
}

lista.forEach((value) => {
    console.log(value)
})
*/

// 'foreach' percorre - 'filter' cria uma nova lista

/*
const listaPares = lista.filter((element) => {
    return (element % 2 === 0)
})

console.log(lista)
console.log(listaPares)
*/

/*
class Pessoa {
    constructor(nome) {
        this.name = nome
    }
}

const listaPeople = [new Pessoa('Henrique'), new Pessoa('João'), new Pessoa('Maria'), new Pessoa('Ana')]

/*
const listaNomes = listaPeople.map((element, i) => {
    return `${i} - ${element.name}`
})
*/

// Em HTML

/*
const listaNomes = listaPeople.map((element, i) => {
    return `
        <li>
            ${element.name}
        </li>    
    `
})

console.log(listaNomes)
*/

/*
const somaDeTodosOsNumeros = lista.reduce((previous, current) => {
    console.log(previous, current)
    return previous + current
}, 0) // Passar valor inicial

console.log(somaDeTodosOsNumeros)
*/

const listaReduzida = [{nome: 'Heitor'}, {nome: 'Henrique'}, {nome: 'João'}, {nome: 'Maria'}]

// console.log(listaReduzida.map((e) => e.nome).join(`-`))

/*
console.log(
    listaReduzida.map(e => e.nome)
        .filter((e) => e.startsWith('H'))
        .join(', ')
)
*/

// console.log(listaReduzida.join('-'))

/*
const elementosEmHTML = listaReduzida
    .filter((e) => e.nome.startsWith('H'))
    .map(e => `<li>${e.nome}</li>`)
    .join(' ')

console.log(elementosEmHTML)
*/
