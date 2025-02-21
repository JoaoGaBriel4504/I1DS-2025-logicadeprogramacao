/*********************************************************************************************
                                  lista de exercicios 07
*********************************************************************************************/
/*
dada a matriz abaixo, faça um programa em javascript que exiba ao usuario os elementos da sua diagonal principal.

| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
*/

var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++)
    linha == coluna &&
      console.log(`matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}`);
}

/*dada a matriz abaixo, faça um programa em javascript que mutiplique seus elementos por um valor x e exiba ao usuario
a matriz antes e após a multiplicação
| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
*/

var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
var x = 0;
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    matriz[linha][coluna] *= x;
  }
}
console.table(matriz);

//faça um loop FOR onde apresente os números impares de 0 a 100;

console.log("numeros impares:");
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

console.log("numeros pares:");
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}
