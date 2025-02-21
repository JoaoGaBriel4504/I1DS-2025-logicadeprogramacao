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
    console.table(matriz);
  console.log(matriz[0][0], "|", matriz[1][1], "|", matriz[2][2]);
}
