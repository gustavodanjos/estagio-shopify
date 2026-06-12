// Trecho A - Validação de Email
function validarEmail(email) {
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return regex.test(email);
}
// Testes
console.log(validarEmail("usuario@email.com")); // true
console.log(validarEmail("@@@@")); // false ← Corrigido para false
console.log(validarEmail("usuario@")); // false ← Corrigido para false
console.log(validarEmail("sem-arroba.com")); // false


// Trecho B - Buscar item em array
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

// Trecho C - Calcular Desconto
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


// Trecho D - Formatação de Preço
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