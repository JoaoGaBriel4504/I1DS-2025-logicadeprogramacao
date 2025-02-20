// operadores de incremento e decremento / pré e pós incremento
var idade = 16;
console.log(idade);

idade++;
console.log(idade);
idade--;
console.log(idade);
console.log("-------------------------------------");

var novaIdade = idade++;
console.log("Idade:", idade, "| nova Idade:", novaIdade);

novaIdade = ++idade;
console.log("Idade:", idade, "| nova Idade:", novaIdade);

//OPERADORES DE ATRIBUIÇÃO ARITMETRICAS
console.log("-------------------------------------");
var x = 10;
var y = 5;
console.log("x =", x, "| y =", y);

x += y;
console.log("x =", x, "| y =", y);
x -= y;
console.log("x =", x, "| y =", y);

x *= y;
console.log("x =", x, "| y =", y);
x /= y;
console.log("x =", x, "| y =", y);

x **= y;
console.log("x =", x, "| y =", y);

x %= y;
console.log("x =", x, "| y =", y);

x = 13;
x %= y;
console.log("x =", x, "| y =", y);
