/*****************************************************************************************************
                                         lista de exercicios 03
/*****************************************************************************************************/
// 1. crie um array de frutas com os seguintes elementos: banana, maçã, pera, uva, morango.
// 2. adicione tangerina no final.
// 3. adicione goiaba no inicio.
// 4. exiba o conteudo do indice 5.
// 5. exclua o elemento uva.
// 6. crie uma copia do array apenas com os elementos com indices 2, 3 e 4.

//atividade1
var frutas = ["banana", "maçã", "pera", "uva", "morango"];
console.table(frutas);

//atividade2
frutas.push("tangerine");
console.table(frutas);

//atividade3
frutas.unshift("goiaba");
console.table(frutas);

//atividade4
console.log(frutas[5]);

//atividade5
var posicao = frutas.indexOf("uva");
frutas.splice(posicao, 1);
console.table(frutas);

//atividade6
var copia = frutas.slice(2, 5);
console.table(copia);
