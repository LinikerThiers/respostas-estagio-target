// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: 
// • O menor valor de faturamento ocorrido em um dia do mês; 
// • O maior valor de faturamento ocorrido em um dia do mês; 
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. 
// IMPORTANTE: 
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal; 
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const fs = require('fs');

const lerFaturamento = (caminhoArquivo) => {
    try {
        const data = fs.readFileSync(caminhoArquivo, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Erro ao ler o arquivo JSON:", err);
        return [];
    }
};


const menorFaturamento = (dados) => {
    return dados
        .filter(item => item.valor > 0)
        .reduce((menor, item) => (item.valor < menor ? item.valor : menor), Infinity);
};


const maiorFaturamento = (dados) => {
    return dados
        .filter(item => item.valor > 0)
        .reduce((maior, item) => (item.valor > maior ? item.valor : maior), -Infinity);
};


const diasAcimaDaMedia = (dados) => {
    const faturamentos = dados.filter(item => item.valor > 0);
    const soma = faturamentos.reduce((acc, item) => acc + item.valor, 0);
    const media = soma / faturamentos.length;
    return faturamentos.filter(item => item.valor > media).length;
};


const main = () => {
    const dados = lerFaturamento('C:/Users/linik/Projetos/perguntas-estagio-target/Pergunta30/faturamento.json'); 
    
    const menor = menorFaturamento(dados);
    const maior = maiorFaturamento(dados);
    const diasAcima = diasAcimaDaMedia(dados);

    console.log(`Menor valor de faturamento: ${menor}`);
    console.log(`Maior valor de faturamento: ${maior}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcima}`);
};

main();
