// Objetivo: Cadastrar e percorrer dados armazenados em um array.
// Crie um programa para cadastrar seis setores de uma fábrica e, ao final, listar todos os setores numerados.
// O programa deve:
// ☐ Criar um array vazio.
// ☐ Usar um laço para solicitar 6 nomes de setores.
// ☐ Adicionar cada nome ao array usando push().
// ☐ Percorrer o array novamente após o cadastro.
// ☐ Exibir no formato "1 - Montagem", "2 - Qualidade" etc.
// ☐ Usar a propriedade length em pelo menos um dos laços.

const entrada = require('readline-sync');

const cadastro = [];

for (let i = 0; i < 6; i++) {
const nome = entrada.question(`Digite o nome do setor ${i + 1}:`);
cadastro.push(nome);
}

console.log("------==Relatorio=de=Cadastrados==------");
for (let i =0; i < cadastro.length; i++){
    console.log(`${i+1} - ${cadastro[i]}`);
}