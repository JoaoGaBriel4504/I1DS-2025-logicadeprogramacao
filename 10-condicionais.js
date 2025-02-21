//condicional simples com IF
var anoNascimento = 2003;
if (anoNascimento > 2003) {
  console.log("a pessoa nasceu depois de 2003");
}

if (anoNascimento < 2003) {
  console.log("a pessoa nasceu antes de 2003.");
}

if (anoNascimento == 2003) console.log("a pessoa nasceu em 2003.");

// condições simples com IF-else
var anoNascimento = 2005;
if (anoNascimento > 2000) {
  console.log("a pessoa nasceu depois de 2000");
} else {
  console.log("a pessoa nasceu em 2000 ou antes");
}

// condições compostas co IF
const login = "admin";
const senha = "12345";

var loginUser = "12345";
var senhaUser = "aaaaaaa";

if (loginUser == login && senhaUser == senha) {
  console.log("acesso permitido");
} else {
  console.log("acesso negado!");
}

//desvio condicional aninhado - IF-ELSEIF-ELSE
var semaforo = "vermelho";

if (semaforo == "verde") {
  console.log("siga!");
} else if (semaforo == "amarelo") {
} else {
  console.log("pare!");
}

// desvio condicional IF com bloco de comandos
var idade = 18;
if (idade <= 18) {
  console.log("entrei no if...");
  idade++;
  console.log("incrementei a idade...");
  console.log("a nova idade é", idade);
  console.log("agora estou saindo do bloco if");
}
console.log("terminei");

//criando variaveis locais com "LET" (só existe dentro do bloco onde foram criadas)
var mes = "agosto";
var dia = 15;

if (dia == 15 && mes == "agosto") {
  let mensagem = "hoje é dia 15 de agosto";
  console.log(mensagem);
}
console.log("tentando acessar a variavel local fora do bloco, vai dar erro!");
// console.log(mensagem);

// criando uma função com desvio condicional IF
const desconto = (valorCompra) => {
  let desconto = 0;
  if (valorCompra >= 1000) {
    desconto = (valorCompra * 12) / 100;
  }
  return desconto;
};

var totalCompra = 950;
console.log(
  "valor total da compra: R$",
  totalCompra,
  "::: desconto: R$",
  desconto(totalCompra)
);
totalCompra = 1800;
console.log(
  "valor total da compra: R$",
  totalCompra,
  "::: desconto: R$",
  desconto(totalCompra)
);

//desvio condicional IF inline (ternario)
//condição ? expressao_se_verdadeiro : expressao_se_falso
var preco = 500;
var resultado = preco <= 100 ? "ta barato!" : "vish ta muito caro!";
console.log("preço: R$", preco, "-", resultado);

//IF ternario com somente uma expressão
// condição && expressão
var logado = true;
logado && console.log("usuario esta logado");

//desvio condicional - Switch Case
console.log("------------------switch case--------------------");
switch (0) {
  case 1:
    console.log("o usuario digitou o numero 1!");
    break;

  default:
    console.log("o usuario informou um numero diferente de 1");
    break;
}
console.log("------------------switch case--------------------");
//menu de seleção
var menuSelecionado = "home";

switch (menuSelecionado) {
  case "home":
    console.log("voce clicou no link 'home'!");
    break;

  case "quem somos":
    console.log("voce clicou no lnk 'quem somos'");

  case "contato":
    console.log("voce clicou no lnk 'contato'");

  default:
    console.log("opção invalida de menu");
    break;
}

//varias opções com mesmo case - switch case
var mes = 11;

switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log("primeiro trimestre!");
    break;

  case 4:
  case 5:
  case 6:
    console.log("segundo trimestre!");
    break;

  case 7:
  case 8:
  case 9:
    console.log("terceiro trimestre!");
    break;

  case 10:
  case 11:
  case 12:
    console.log("quarto trimestre!");
    break;

  default:
    console.log("mes invalido");
    break;
}
