//laço de repetição - FOR

//o professor te colocou de castigo e te pediu para escrever mil vezes a frase "Eu vou prestar atenção às aulas."

for (let i = 0; i < 1000; i++) {
  console.log("Eu vou prestar atenção às aulas.");
}

//escreva todos os numeros de 1 a 20 com loop for

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//mostre no console do sistema os números pares entre 1 a 20

for (let i = 1; i <= 20; i++) {
  i % 2 == 0 && console.log(i);
}

//Dado um vetor, calcule e exiba o somatorio de seus elementos
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log(numeros.length);
var soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("a soma dos elementos é:", soma);

//dado um vetor, calcule e exiba a quantidade de pares e de impares
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var pares = 0;
var impares = 0;
for (let i = 0; i < numeros.length; i++) {
  numeros[i] % 2 == 0 ? pares++ : impares++;
}
console.log("total de pares:", pares);
console.log("total de impares:", impares);

//dado um vetor, multiplique todos os seus elementos por 3 com o laço FOR
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.table(numeros);
for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 3;
}
console.log("vetor multiplicando por 3");
console.table(numeros);

// dada uma matriz 2X3, mostre ao usuario todos seus elementos com respectivas posições.
var matriz = [
  [8, 4, 2],
  [3, 7, 8],
];

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++)
    console.log(`matriz[${linha}][${coluna}] =${matriz[linha][coluna]}`);
}

//------------------------laço de repetição - while / do while---------------------------
//while testa a condição antes de entrar no laço de repetição
//se a condição for inicialmente falsa, o laço não é executado nenhuma vez

var t = 10;

while (t > 10) {
  console.log("entrei no laço while...");
  t = 0;
}
console.log("terminei");

//exemplo de while com escrita de 1000 linhas

var i = 0;
while (i <= 100) {
  console.log(`escrita de linha ${i}`);
  i++;
}

//laço repetição WHILE
//WHILE (condição){
//fragmentos e código
//fragmentos e código
//fragmentos e código
//fragmentos e código
//fragmentos e código
//contador++ | nesta parte o contador é a variavel de controle de acesso
//}
// exemplo que funciona somente no navegador
// var senhaCorreta = "1234";
// var tentativa = "";

// while (tentativa !== senhaCorreta) {
//   tentativa = prompt("digita a senha");
// }

//do-while testa a condição somente no final do laço de repetição.
//sendo assim, qualquer que seja a condição, o laço é executado pelo menos uma vez.

var x = 10;

do {
  console.log("entrei no laço do-while...");
  x = 0;
} while (x > 10);

console.log("terminei");
