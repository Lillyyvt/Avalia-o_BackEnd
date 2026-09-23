// Objetivo: Revisar variáveis, operações matemáticas e saída de dados.
// Uma máquina de embalagem produz uma quantidade fixa de caixas por hora. Crie um programa que calcule quantas caixas serão produzidas durante um dia de trabalho.
// O programa deve:
// Criar uma variável para a quantidade de caixas produzidas por hora.
// Criar uma variável para a quantidade de horas trabalhadas no dia.
// Calcular a produção total.
// Teste mínimo	Use 75 caixas/hora e 8 horas. O total deverá ser 600 caixas.

const entrada = require('readline-sync')

const caixaProduzida = entrada.questionInt("Qual a quantidade de caixas produzidas por hora?");

const horaTrabalhada = entrada.questionInt("Qual a quantidade de hora trabalhada?")

const total = caixaProduzida * horaTrabalhada

console.log("-------=Relatorio=de=Produção==-------");
console.log(`A quantidade de caixa produzida por hora: ${caixaProduzida} `);
console.log(`Quantidade de horas trabalhadas: ${horaTrabalhada}`);
console.log(`Total: ${total}`);
console.log("-".repeat(15));