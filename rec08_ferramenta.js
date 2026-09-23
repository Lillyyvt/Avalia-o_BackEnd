// Objetivo: Integrar objetos, arrays, repetição e condição.
// Um almoxarifado precisa cadastrar quatro ferramentas. Cada ferramenta possui nome, quantidade disponível e quantidade mínima.
// O programa deve:
// ☐ Criar um array vazio para armazenar as ferramentas.
// ☐ Cadastrar 4 ferramentas usando um laço.
// ☐ Criar um objeto para cada ferramenta com nome, quantidade e minimo.
// ☐ Adicionar cada objeto ao array com push().
// ☐ Percorrer o array após o cadastro.
// ☐ Quando quantidade < minimo, exibir "REPOR".
// ☐ Caso contrário, exibir "ESTOQUE SUFICIENTE".
// ☐ Apresentar nome, quantidade, mínimo e situação de cada ferramenta.

const entrada = require('readline-sync');

const objetos = [];

for (let i = 0; i < 4; i++){
    console.log(`Cadastro de ferramenta ${i+1}`);

    const nome = entrada.question("Nome:");
    const quantidade = entrada.questionInt("Quantidade em estoque:");
    const minimo = entrada.questionInt("Estoque Minimo:");


        const objeto = {
            nome,
            quantidade,
            minimo
        };
        objetos.push(objeto);
}

console.log("------==Relatorio=de=Estoque==------");

for (let i = 0; i < objetos.length; i++) {
    const item = objetos[i];
     console.log(`\nComponente: ${item.nome}`);
    console.log(`Quantidade: ${item.quantidade}`);
    console.log(`Estoque mínimo: ${item.minimo}`);

    if (item.quantidade < item.estoqueMinimo) {
        console.log("Situação: REPOR");
    } else {
        console.log("Situação: ESTOQUE SUFICIENTE");
    }
}
