/***********************************************************************************/
//                                lista de exexrcicios 05
//************************************************************************************//
// 1. crie uma funcao que receba como parâmetro o ano de nascimento de uma pessoa a retorne sua idade.
// 2. crie uma função que receba a quntidade de combustivel de um carro e retorne quantos Kms ele pode visitar com esse combustivel. considere que o veiculo faz uma media de 12 Kms.

console.log("------------------atividade 01--------------------");

function nascimento(nome, ano) {
  var idade = 2025 - ano;
  console.log("A/O", nome, "nasceu no ano", ano, "e tem", idade, "anos");
}
nascimento("joao gabriel", "2007");

console.log("------------------atividade 02--------------------");

function combustivel(litro) {
  return litro * 12;
}
var litro = 24;
console.log(
  "eu abasteci meu carro com 24 litros, e agora consigo viajar",
  combustivel(24),"km"
);
