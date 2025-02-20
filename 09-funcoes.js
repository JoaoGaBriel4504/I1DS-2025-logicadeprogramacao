function somar2Mais2() {
  return 2 + 2;
}
console.log(somar2Mais2());

// criando uma função que soma dois valores e retorna o resultado
function somar(val1, val2) {
  return val1 + val2;
}
console.log("5 + 3 =", somar(5, 3));
console.log("12 + 8=", somar(12, 8));
console.log("6,5 + 2,12 =", somar(6.5, 2.12));

var v1 = 9;
var v2 = 6;
console.log("v1 +v2 =", somar(v1, v2));

// criando uma função que escreve "bom dia!"
function bomDia(nome) {
  console.log("ola", nome, "\nbom dia pra você!");
}
bomDia("joao gabriel");

//criando uma funcao que calcula e retorna o desconto em uma venda
function desconto(valor) {
  return valor * 0.05;
}
// console.log("o desconto do produto no valor de r$100 é r$", desconto(100));
var totalPedido = 300;
var totalDesconto = desconto(totalPedido);
var valorFinal = totalPedido - totalDesconto;

console.log("--------------------------------------");
console.log("total do pedido: r$", totalPedido);
console.log("total do desconto: r$", totalDesconto);
console.log("valor liquido: r$", valorFinal);
console.log("--------------------------------------");

//criando uma funcao que apresenta pessoas! com arrow function
const apresentaPessoas = (nomePessoa, idade, cidade) => {
  //"apresento" a voces: Nome_Pessoas, que tem XX anos e mora em "cidade"
  console.log(
    "apresento a voces:",
    nomePessoa,
    "que tem",
    idade,
    "anos e mora em",
    cidade
  );
};

apresentaPessoas("zuleika", 19, "brotas");
apresentaPessoas("pafuncio", 21, "jau");
apresentaPessoas("epaminondas", 16, "barra bonita");
