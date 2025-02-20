//******************************************************************************************************************
//                                      lista de exercicios 04
//******************************************************************************************************************
//1. crie e imprima um vetor com 5 elementos numericos.

//2. imprima na tela o 3° elemento do vetor.

//3. faca uma copia do vetor original.

//4. altere o conteudo do vetor copia para que seus valores sejam o dobro dos valores do vetor original.

//5. crie uma matriz 3x3.

//6. imprima os valores da diagonal principal.

var numeros = [1, 2, 3, 4, 5];
console.table(numeros);

console.log(numeros[2]);

var copia = numeros.slice();
console.table(copia);

copia[0] = numeros[0] * 2;
copia[1] = numeros[1] * 2;
copia[2] = numeros[2] * 2;
copia[3] = numeros[3] * 2;
copia[4] = numeros[4] * 2;
console.table(copia);

var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
];
console.table(matriz);

console.log(matriz[0][0], "|", matriz[1][1], "|", matriz[2][2]);
