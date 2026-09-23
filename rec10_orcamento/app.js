// Objetivo: Trabalhar com entrada de dados e cálculos numéricos.
// Uma equipe de manutenção precisa calcular o custo de um lote de peças de reposição.
// O programa deve:
// ☐ Importar a biblioteca readline-sync.
// ☐ Solicitar o nome da peça.
// ☐ Solicitar a quantidade comprada.
// ☐ Solicitar o preço unitário.
// ☐ Calcular o valor total da compra.
// ☐ Exibir um resumo contendo nome, quantidade, preço unitário e total.

const entrada = require('readline-sync')

const {
    calcularMaodeObra,
    calcularTotal,
    verificarDesconto
} = require("./funcoesOrcamento")

const nome = entrada.question("Nome da peça:");
const quantidade = entrada.questionInt("Quantidade de peça:");
const valor = entrada.questionFloat("Preço unitário da peça: R$");

const total = calcularTotal(quantidade, valor)
const Desconto = verificarDesconto(total)

console.log("------==Relatorio=de=Orçamento==------");
console.log(`Nome da peça: ${nome}`);
console.log(`Quantidade de peça: ${quantidade}`);
console.log(`Preco Unitario: ${valor.toFixed(2)}`);
console.log(`Total: ${total.toFixed(2)}`);
console.log(`Desconto: ${Desconto}`)
console.log("-".repeat(20));