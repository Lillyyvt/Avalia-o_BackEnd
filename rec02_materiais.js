// Objetivo: Trabalhar com entrada de dados e cálculos numéricos.
// Uma equipe de manutenção precisa calcular o custo de um lote de peças de reposição.
// O programa deve:
// ☐ Importar a biblioteca readline-sync.
// ☐ Solicitar o nome da peça.
// ☐ Solicitar a quantidade comprada.
// ☐ Solicitar o preço unitário.
// ☐ Calcular o valor total da compra.
// ☐ Exibir um resumo contendo nome, quantidade, preço unitário e total
const entrada = require('readline-sync')

const nome = entrada.question("Digite o nome da peça:")
const quantidade = entrada.questionInt("Digite a quantidade comprada:")
const precoUn = entrada.questionFloat("Digite o preço unitário da peça:")

const total = quantidade * precoUn

console.log("------==Relatorio=de=Materiais==------");
console.log(`Nome da peça: ${nome}`);
console.log(`Quantidade de peça: ${quantidade}`);
console.log(`Preco Unitario: ${precoUn}`);
console.log(`Total: ${total}`);
console.log("-".repeat(20));