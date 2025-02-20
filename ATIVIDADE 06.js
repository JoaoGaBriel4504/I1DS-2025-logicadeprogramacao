//***********************************************************************************************************/
//                                     lista de exercicios                                                 //
//*********************************************************************************************************/
/*
criar uma função que receba o nome e a idade de uma pessoa e retorne uma mensagem informando se ela pode voltar no brasil.

regras para votação no brasil:
menores de 16 anos: nao podem votar.
entre 16 e 17 anos ou acima de 70 anos: o voto é facultativo.
entre 18 e 70 anos: o voto é obrigatorio.
*/

const podeVotar = (idade) => {
  //isso é uma função
  if (idade > 16) {
    return "voce não pode votar!";
  } else if (idade >= 18 && idade < 70) {
    return "voce pode votar!";
  } else {
    return "seu voto facultativo!";
  }
};
var nome = ["ygona", "lucas", "batata", "fernanda", "cristinne"];
console.log("ola,", nome[0], "voce tem 16 anos", podeVotar(16));
console.log("ola,", nome[1], "voce tem 22 anos", podeVotar(22));
console.log("ola,", nome[2], "voce tem 70 anos", podeVotar(70));
console.log("ola,", nome[3], "voce tem 12 anos", podeVotar(12));
console.log("ola,", nome[4], "voce tem 67 anos", podeVotar(67));
