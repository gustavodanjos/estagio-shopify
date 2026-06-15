// Tempo de início: __23_:_01__ (anote aqui)
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
// Exemplo: [10, 10, 10] → 10
// d) removerDuplicatas(array)
// Recebe um array e retorna um novo array sem valores duplicados.
// Exemplo: [1, 2, 2, 3, 3, 4] → [1, 2, 3, 4]
// Exemplo: ["a", "b", "a", "c"] → ["a", "b", "c"]
// Tempo de fim: __23_:_40__ (anote aqui)
// Tempo total SEM IA: _40__ minutos


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



const resultado1 = inverterString("progamacao");
const resultado2 = contarVogais("progamacao");
const resultado3 = encontrarMaior([1, 8, 10, 5, 9]);
const resultado4 = removerDuplicatas([2, 3 , 2 , 8, 3, 8]);


console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)

