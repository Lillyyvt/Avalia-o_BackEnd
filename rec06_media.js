// Objetivo: Combinar repetição, entrada de dados e acumulador.
// Uma equipe registrou o tempo, em minutos, de seis atendimentos técnicos e deseja calcular a média.
// O programa deve:
// Criar um acumulador iniciado em zero.
// Usar um laço para solicitar exatamente 6 tempos.
// Somar cada valor ao acumulador.
// Calcular a média ao final.
// Exibir a soma dos tempos e a média.

const entrada = require('readline-sync');

let soma = 0;
const quantidade = 6;

console.log(`Digite o tempo de ${quantidade} atendimento (em minutos): `);

for (let i = 1; i<= quantidade; i++)
{
    const tempo = 
Number(entrada.question(`Atendimento ${i}: `));
    soma += tempo;
}
const media = soma / quantidade;

console.log("------==Relatorio=de=Orçamento==------");
console.log('Soma dos tempos: '+soma+' minutos');
console.log('Media dos tempos: ' +media.toFixed(1)+' minutos');
console.log("-".repeat(20));