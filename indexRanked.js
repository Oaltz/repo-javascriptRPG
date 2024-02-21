let vitorias
let derrotas
let nomeHeroi

nomeHeroi = "Henrique"
vitorias = 105
derrotas = 10

function partidasJogadas (vitorias , derrotas) {
    resultado = vitorias + derrotas;
    return resultado;
  };

const msgRetorno = "O Herói " + nomeHeroi + " jogou " + partidasJogadas(vitorias, derrotas) + " partidas e ganhou " + vitorias + " ficando no rank: "

if (vitorias < 10) {
    console.log(msgRetorno + "Ferro")
} else if (vitorias >= 11 && vitorias <= 20) {
    console.log(msgRetorno + "Bronze")
} else if (vitorias >= 21 && vitorias <= 50) {
    console.log(msgRetorno + "Prata")
} else if (vitorias >= 51 && vitorias <= 80) {
    console.log(msgRetorno + "Ouro")
} else if (vitorias >= 81 && vitorias <= 90) {
    console.log(msgRetorno + "Diamante")
} else if (vitorias >= 91 && vitorias <= 100) {
    console.log(msgRetorno + "Lendário")
} else if (vitorias >= 101) {
    console.log(msgRetorno + "Imortal")
} else {
    console.log("Erro")
}