/***************************************************** 
                Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/
("--------------------------------------------------------------------------------------------------------------------------------------");

var nome = "Pablo";
console.log("nome", nome);
var banco = "Banco Bradesco";
console.log(banco);
var agencia = "8822";
console.log("numero da agencia", agencia);
var numeroDaConta = "0100 35000000";
console.log("numero da conta", numeroDaConta);
var saldo = 5000;
console.log("saldo", saldo);
console.log("agencia:", agencia, "| saldo", saldo);
console.log("   +deposito:140");
saldo = saldo + 140;
console.log("   +deposito:120");
saldo = saldo + 120;
console.log("   -saque:100");
saldo = saldo - 100;
console.log("   +deposito:50");
saldo = saldo + 50;
console.log("   -saque:350");
saldo = saldo - 350;
console.log("*****************", banco, "*****************");
console.log("Cliente:", nome);
console.log("Agência:", agencia, "| Conta:", numeroDaConta);
console.log("Seu saldo é de R$", saldo);