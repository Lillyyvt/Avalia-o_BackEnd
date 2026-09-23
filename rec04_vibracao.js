// Objetivo: Utilizar if, else if e else em uma regra de negócio.
// Um sensor mede o nível de vibração de um equipamento em mm/s.
// O programa deve:
// ☐ Até 3 mm/s: situação ESTÁVEL.
// ☐ Acima de 3 até 6 mm/s: situação ATENÇÃO.
// ☐ Acima de 6 mm/s: situação CRÍTICA.
// ☐ Solicitar o valor da vibração pelo terminal.
// ☐ Exibir o valor informado e a classificação.

const entrada = require('readline-sync');

const sensor = entrada.questionFloat("Digite o nível de vibração do equipamento (em mm/s):")

if (sensor <=3){
    console.log(`A vibração de ${sensor} está ESTÁVEL.`);
} else if (sensor <=6){
    console.log(`A vibração de ${sensor} está em ATENÇÂO.`)
} else {
    console.log(`A vibração de ${sensor} está CRÍTICA`)
}