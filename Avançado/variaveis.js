// Javascript é fracamente tipado e muito sensitivo.

/*
var var1 = 10;

var1 = 'texto';

var var2 = '20';

console.log(var1 + var2);

console.log(var1 - var2);
*/

/*
teste();

function teste() {
    console.log('teste');
}
*/

// Diferença entre var, let e const

// O var vaza escopos por conta do hosting, exceto escopo de função

/*
var var1 = 'teste';

if (true) {
    var var1 = 10;
}

console.log(var1);
*/

// O let é igual uma variável mas ele se restringe a qualquer tipo de bloco

/*
if (true) {
    let var1 = 10;
}

console.log(var1);
*/

// O const se comporta igual ao let mas ele é constante

/*
const x = 10;
x = 11;

console.log(x);
*/