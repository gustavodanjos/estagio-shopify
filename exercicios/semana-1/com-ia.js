// Tempo de início: 23:50 (anote aqui)
// a) inverterString(str)
// Recebe uma string e retorna ela invertida.
// Exemplo: "hello" → "olleh"
// Exemplo: "Shopify" → "yfipohS"
// b) contarVogais(str)
// Recebe uma string e retorna a quantidade de vogais (a, e, i, o, u).
// Deve funcionar com maiúsculas e minúsculas.
// Exemplo: "programacao" → 5
// Exemplo: "Shopify" → 2
// c) encontrarMaior(numeros)
// Recebe um array de números e retorna o maior valor.
// Exemplo: [3, 7, 2, 9, 1] → 9
// Exemplo: [10, 10, 10] → 10// d) removerDuplicatas(array)
// Recebe um array e retorna um novo array sem valores duplicados.
// Exemplo: [1, 2, 2, 3, 3, 4] → [1, 2, 3, 4]
// Exemplo: ["a", "b", "a", "c"] → ["a", "b", "c"]
// Testes cada função com os exemplos fornecidos para garantir o funcionamento correto.
// Tempo de fim: 23:51 (anote aqui)
// Tempo total Com IA: 1 minuto

function inverterString(texto){
    return texto.split('').reverse().join('');
}

function contarVogais(texto){
    const vogais = ['a','e','i', 'o', 'u'];
    let contador = 0;
    for (const caracter of texto.toLowerCase()){
        if (vogais.includes(caracter)){
            contador += 1;
    }
}
    return contador;
}

function encontrarMaior(numeros){
    let maior = -999999;
    if (numeros.length === 0){
        return 0;
    }
    for (const numero of numeros){
        if (numero > maior){
            maior = numero;
        }
    }
    return maior
}

function removerDuplicatas(lista){

    const listaUnica = lista.reduce((acumulador, item) => {
    if (!acumulador.includes(item)) {
        acumulador.push(item);
    }
    return acumulador;
}, []);

    return listaUnica;
}


// Testes cada função com os exemplos fornecidos para garantir o funcionamento correto.
console.log(inverterString("hello")); 
console.log(inverterString("Shopify")); 

console.log(contarVogais("programacao")); 
console.log(contarVogais("Shopify")); 

console.log(encontrarMaior([3, 7, 2, 9, 1])); 
console.log(encontrarMaior([10, 10, 10])); 

console.log(removerDuplicatas([1, 2, 2, 3, 3, 4])); 
console.log(removerDuplicatas(["a", "b", "a", "c"])); 

