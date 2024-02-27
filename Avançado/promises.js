// O nome é intuitivo, ou seja, é uma promessa

// Simular comportamento assíncrono

/*
const promessaRandomNumber = new Promise((resolve, reject) => {
    //const number = parseInt(Math.random() * 100)
    //resolve(number)

    setTimeout(() =>{
        const number = parseInt(Math.random() * 100)
        resolve(number)
    }, 1000)
})

console.log('Vai filhão!')

promessaRandomNumber
    .then((value) => {
        console.log(value)
        return value + 10
    })
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('Finalizou!')
    })
*/

/*
const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

// const promesaDaLeituraArquivo = fs.promises.readFile(filePath)

/*
promesaDaLeituraArquivo.then((arquivo) => {
    console.log(arquivo.toString('utf8'))
}).catch((error) => {
    console.log('Deu ruim!', error)
})
*/

// Forma diferente e reduzida de lidar com uma promessa

// No js podemos utilizar functions assíncronas como se elas fossem síncronas

/*
async function buscarArquivo() {
    try {
    const arquivo = await fs.promises.readFile(filePath)
    const textoArquivo = arquivo.toString('utf8')
    console.log(textoArquivo)
    } catch(error) {
        console.log(error)
    } finally {
        console.log('Finalizou!')
    }
}

buscarArquivo()
*/