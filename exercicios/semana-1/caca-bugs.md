Trecho A - Validação de email

Qual é o bug: Não há um bug específico, mas o código de validação de email é muito simples e pode aceitar entradas inválidas, como "@@@@" ou "usuario@".

Por que está errado: O código atual apenas verifica se o email contém um "@" e não valida o formato completo do email, o que pode levar a resultados incorretos.

Como corrigir (explicação + código corrigido): Para corrigir isso, podemos usar uma expressão regular (regex) para validar o formato do email de maneira mais robusta. A regex pode verificar se o email tem um formato válido, incluindo caracteres antes e depois do "@" e um domínio com um ponto.

```javascript
// Código original
function validarEmail(email) {
  if (email.includes("@")) {
    return true;
  }
  return false;
}
// Testes
console.log(validarEmail("usuario@email.com")); // true
console.log(validarEmail("@@@@")); // true← Deveria ser false
console.log(validarEmail("usuario@")); // true← Deveria ser false
console.log(validarEmail("sem-arroba.com")); // false

// Código corrigido
function validarEmail(email) {
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return regex.test(email);
}
// Testes
console.log(validarEmail("usuario@email.com")); // true
console.log(validarEmail("@@@@")); // false ← Corrigido para false
console.log(validarEmail("usuario@")); // false ← Corrigido para false
console.log(validarEmail("sem-arroba.com")); // false
```

Trecho B - buscar item em array

Qual é o bug: O código original tem um erro de condicional que faz com que o loop não funcione corretamente, resultando em um retorno nulo mesmo quando o produto existe na lista. Os operadores de comparação também estão usando `==` em vez de `===`, o que pode levar a problemas de coerção de tipo.

Por que está errado: O loop está usando `i <= produtos.length` em vez de `i < produtos.length`, o que faz com que o código tente acessar um índice fora dos limites do array. Isso pode causar um erro ou retornar `undefined`, e o produto não será encontrado mesmo que exista na lista. Além disso, o uso de `==` pode levar a comparações imprecisas, embora neste caso específico não cause um problema imediato, é uma boa prática usar `===` para evitar possíveis erros de coerção de tipo no futuro.

Como corrigir (explicação + código corrigido): Para corrigir isso, basta alterar a condição do loop para `i < produtos.length`, garantindo que o código acesse apenas índices válidos do array. Além disso, é recomendado usar `===` para a comparação de strings, embora neste caso específico não cause um problema imediato, é uma boa prática para evitar possíveis erros de coerção de tipo no futuro.

```javascript
// Código original
function buscarProduto(produtos, nome) {
  for (let i = 0; i <= produtos.length; i++) {
    if (produtos[i].nome == nome) {
      return produtos[i];
    }
  }
  return null;
}

const lista = [
  { nome: "Camiseta", preco: 49.9 },
  { nome: "Calça", preco: 89.9 },
  { nome: "Tênis", preco: 199.9 },
];
console.log(buscarProduto(lista, "Calça"));
console.log(buscarProduto(lista, "Boné"));

// Código corrigido
function buscarProduto(produtos, nome) {
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].nome === nome) {
      return produtos[i];
    }
  }
  return null;
}

const lista = [
  { nome: "Camiseta", preco: 49.9 },
  { nome: "Calça", preco: 89.9 },
  { nome: "Tênis", preco: 199.9 },
];
console.log(buscarProduto(lista, "Calça"));
console.log(buscarProduto(lista, "Boné"));
```

Trecho C - Calcular desconto

Qual é o bug: O código original não valida os valores de desconto, o que pode levar a resultados incorretos, como preços negativos ou aumentados. Além disso, o cálculo do desconto está incorreto, pois subtrai o valor do desconto diretamente do preço, em vez de calcular o valor do desconto com base em uma porcentagem.

Por que está errado: O código atual subtrai o valor do desconto diretamente do preço, fazendo uma simples operação de subtração, o que não é correto, pois o desconto geralmente é uma porcentagem do preço. Além disso, o código não valida se o desconto é negativo ou maior que o preço, o que pode levar a resultados ilógicos, como preços negativos ou aumentados.

Como corrigir (explicação + código corrigido): Para corrigir isso, precisamos validar os valores de desconto para garantir que eles sejam lógicos (não negativos e não maiores que o preço). Além disso, devemos calcular o valor do desconto como uma porcentagem do preço, em vez de subtrair diretamente. O código corrigido inclui essas validações e o cálculo correto do desconto.

```javascript
// Código original
function aplicarDesconto(preco, desconto) {
  const precoFinal = preco - desconto;
  return precoFinal;
}
// Espera-se: 10% de desconto em R$100 = R$90
console.log(aplicarDesconto(100, 10)); // 90 ← Ok, mas...
console.log(aplicarDesconto(100, 110)); // -10 ← Preço negativo?!
console.log(aplicarDesconto(100, -20)); // 120 ← Desconto negativo aumenta o preço?

// Código corrigido

function aplicarDesconto(preco, desconto) {
  if (desconto < 0) {
    console.error("Desconto não pode ser negativo.");
    return preco;
  }
  if (desconto > preco) {
    console.error("Desconto não pode ser maior que o preço.");
    return preco;
  }
  const descontoValor = (preco * desconto) / 100;

  const precoFinal = preco - descontoValor;
  return precoFinal;
}
// Espera-se: 10% de desconto em R$100 = R$90
console.log(aplicarDesconto(100, 10)); // 90 ← Ok, mas...
console.log(aplicarDesconto(100, 110)); // -10 ← Preço negativo entre no if e retorna o preço original
console.log(aplicarDesconto(100, -20)); // 120 ← Desconto negativo entra no if e retorna o preço original
```

Trecho D - Formatação de Preço

Qual é o bug: O código original não valida o tipo de entrada para o valor do preço, o que pode levar a erros ou resultados inesperados quando a função é chamada com um valor que não é um número, como uma string ou null. Além disso, o código não lida com casos em que o valor é NaN (Not a Number), o que também pode causar problemas.

Por que está errado: O código atual assume que a entrada para o valor do preço será sempre um número, o que não é garantido. Se a função for chamada com uma string ou null, ela tentará usar o método `toFixed` em um tipo de dado que não suporta esse método, resultando em um erro. Além disso, se o valor for NaN, o resultado da formatação será "R$NaN", o que não é desejável.

Como corrigir (explicação + código corrigido): Para corrigir isso, precisamos adicionar validações para garantir que a entrada seja um número válido antes de tentar formatá-lo. Podemos verificar se o tipo da entrada é "number" e se o valor não é NaN. Se a validação falhar, podemos exibir uma mensagem de erro e retornar null ou um valor padrão.

```javascript
// Código original
function formatarPreco(valor) {
  return "R$" + valor.toFixed(2);
}

console.log(formatarPreco(49.9)); // R$49.90
console.log(formatarPreco(100)); // R$100.00
console.log(formatarPreco("abc")); // ??? ← O que acontece?
console.log(formatarPreco(null)); // ??? ← E agora?

// Código corrigido
function formatarPreco(valor) {
  if (typeof valor !== "number") {
    console.error(
      "Valor inválido para formatação de preço. Por favor, forneça um número.",
    );
    return null;
  }
  if (isNaN(valor)) {
    console.error("Valor é NaN. Por favor, forneça um número válido.");
    return null;
  }
  return "R$" + valor.toFixed(2);
}
console.log(formatarPreco(49.9)); // R$49.90
console.log(formatarPreco(100)); // R$100.00
console.log(formatarPreco("abc")); // Valor inválido para formatação de preço. Por favor, forneça um número. ← Corrigido para exibir mensagem de erro
console.log(formatarPreco(null)); // Valor inválido para formatação de preço. Por favor, forneça um número. ← Corrigido para exibir mensagem de erro
```
