let nomeHeroi
let nivelHeroi

nomeHeroi = "Henrique"
nivelHeroi = 900

const msgRetorno = "O herói " + nomeHeroi + " está com " + nivelHeroi + " pontos e no nível: "

if (nivelHeroi < 1000) {
    console.log(msgRetorno + "Ferro")
} else if (nivelHeroi >= 1000 && nivelHeroi <= 2000) {
    console.log(msgRetorno + "Bronze")
} else if (nivelHeroi >= 2001 && nivelHeroi <= 3000) {
    console.log(msgRetorno + "Prata")
} else if (nivelHeroi >= 3001 && nivelHeroi <= 4000) {
    console.log(msgRetorno + "Ouro")
} else if (nivelHeroi >= 4001 && nivelHeroi <= 5000) {
    console.log(msgRetorno + "Platina")
} else if (nivelHeroi >= 5001 && nivelHeroi <= 6000) {
    console.log(msgRetorno + "Esmeralda")
} else if (nivelHeroi >= 6001 && nivelHeroi <= 7000) {
    console.log(msgRetorno + "Diamante")
} else if (nivelHeroi >= 7001 && nivelHeroi <= 8000) {
    console.log(msgRetorno + "Mestre")
} else if (nivelHeroi >= 8001 && nivelHeroi <= 9000) {
    console.log(msgRetorno + "Ascendente")
} else if (nivelHeroi >= 9001 && nivelHeroi <= 10000) {
    console.log(msgRetorno + "Imortal")
} else if (nivelHeroi >= 10001) {
    console.log(msgRetorno + "Radiante")
} else {
    console.log ("Erro")
}