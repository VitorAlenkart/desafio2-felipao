function calcularSaldoVitorias(vitorias, derrotas){

let calculo = vitorias - derrotas

return calculo
}

let vitorias = 70
let derrotas = 10
let nivel

let saldoVitorias = calcularSaldoVitorias(vitorias, derrotas)

if (saldoVitorias < 10) {
    nivel = "Ferro"
}else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
    nivel = "Bronze"
}else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata"
}else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Ouro"
}else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante"
}else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendário"
}else if (saldoVitorias > 100) {
    nivel = "Imortal"
}

console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)