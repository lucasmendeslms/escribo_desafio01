export default function sumValues(number) {

  let sumValidValues = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sumValidValues += i;
  }

  return sumValidValues;
}


/*

  Esse problema poderia ser resolvido de outras formas, contudo acredito que desta maneira apresentada acima temos um menor custo de processamento.
  
  Também havia pensado em uma outra forma que deixei logo abaixo, porém essa outra forma pode ter um custo maior, pois nela há a necessidade de 
  adicionar elementos em um array e a operação reduce, que não sabemos quanto tempo leva, considerando que não temos acesso a forma como ela é implementada
  pelo JS. Todavia, com essa segunda forma podemos recuperar quais são os valores divisíveis por 3 e 5, caso fosse de nosso interesse apresentá-los ao usuário.

  const sumValues = (number) => {

  const sumValidValues = [0];

  while (number > 0) {
    number--;
    if (number % 3 === 0 || number % 5 === 0) sumValidValues.push(number);
  }

  return sumValidValues.reduce((sum, currentValue) => sum + currentValue);

*/