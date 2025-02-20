//******************************************************************************************************************
//                                      exexrcicios vetor matriz
//****************************************************************************************************************** 
// crie um vetor que recebera dados de um usuario


var dados = [];
console.log("Favor informar seu nome");
dados.push("Joao Gabriel");

console.table(dados);

console.log("Informe seu CPF");
dados.push("123.456.789-10");

console.table(dados);

//Mostre ao usuário os dados e de um bom dia!
console.log("Bom dia", dados[0], "seu cPF é:", dados[1]);