// Objetivo: Aplicar uma estrutura condicional simples.
// O nível de óleo de uma máquina deve permanecer entre 40% e 80%, inclusive. Fora desse intervalo, a máquina precisa de inspeção.
// O programa deve:
// ☐ Solicitar o nível de óleo em porcentagem.
// ☐ Usar if/else para verificar se o nível está dentro do intervalo.
// ☐ Exibir "NÍVEL NORMAL" quando estiver entre 40 e 80.
// ☐ Exibir "INSPEÇÃO NECESSÁRIA" nos demais casos.
// ☐ Exibir também o valor informado.

const entrada = require('readline-sync')

const nivelOl = entrada.questionInt("Digite o nivel de oleo (em porcentagem):")

let inspecao;

if (nivelOl >= 40 && nivelOl <=80 ) {
    inspecao = "NIVEL NORMAL!"
} else {
    inspecao= "INSPECAO NECESSARIA!"
}
console.log("------==Relatorio=de=Oleo==------");
console.log(`O nivel de oleo esta em ${nivelOl}% em um intervalo de ${inspecao}`);
console.log("-".repeat(25));