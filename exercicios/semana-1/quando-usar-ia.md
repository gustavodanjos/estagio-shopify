# Quando Uso e Quando Não Uso Copilot

## Semana 1

- Nas últimas duas semanas, percebi que o Copilot funciona melhor como acelerador de produtividade do que como substituto do raciocínio técnico:
- Na primeira semana, ao comparar a implementação de uma função com e sem IA, o código sugerido foi correto de primeira, mas idêntico ao que eu mesmo havia escrito sem assistência, evidenciando que o real ganho foi de tempo (de 40 minutos para 1 minuto) e não de qualidade ou aprendizado, inclusive aprendi mais resolvendo o problema manualmente, pois precisei buscar e entender conceitos que não lembrava.

## Semana 2

- Na segunda semana, durante o desenvolvimento de sections e snippets em Liquid, o Copilot foi útil para digitar rapidamente estruturas repetitivas e dar sugestões de código, mas em momentos de revisão de código, ele não é tão eficaz, e também, ao identificar bugs de lógica e problemas de performance em arquivos Liquid, ou ao debugar erros de cálculo de desconto, entre outros. O entendimento profundo do problema só veio da análise manual, sem depender de sugestões automáticas.
- Um exemplo concreto de limitação foi quando o Copilot criou código com bug em uma validação de condicional em que que se um produto estivesse **Esgotado** só que o preço dele é promocional então o produto vai mostrar "**Em promoção**", e "**Esgotado**" nunca vai ser executado como deveria:
- Código sugerido pelo Copilot:
  ```liquid
  {% if esta_em_promocao %}
  Em promoção
  {% elsif produto.available == false %}
  Esgotado
  ```


  mostrando que ele nem sempre identifica problemas de lógica exigindo correção manual e entendimento.

## Conclusão

- Por isso, pretendo continuar usando o Copilot principalmente para acelerar a produtividade, e desligar ele quando o problema exige entendimento profundo, criatividade ou quando ele começa a alucinar e perde o contexto do projeto. Acredito que o equilíbrio entre usar essa IA para produtividade e confiar no próprio julgamento é essencial para obter os melhores resultados. O Copilot é uma baita ferramenta que é muito útil, mas não substitui o raciocínio crítico e a análise cuidadosa, especialmente quando qualidade do código é crucial.

