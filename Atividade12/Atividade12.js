// Exercício 1
function Retangulo(b, h) {
    this.base = b;
    this.altura = h;
    var area = b * h;

    var returnArea = function () {
        return area;

    }
    this.resp = function () {
        return returnArea;
    }
}

n1 = prompt("Digite a base do Retangulo: ");
n2 = prompt("Digite a altura do Retangulo: ");

var retangulo1 = new Retangulo(n1, n2);
var areaRetMethod = retangulo1.resp();
var areaRet = areaRetMethod();
alert(areaRet);

// Exercício 2
function Contas (){
    let nomeCorrentista, banco, numeroConta, saldo;

    this.setNomeCorrentista = function(value){
        nomeCorrentista = value;
    };

    this.setBanco = function(value){
        banco = value;
    };

    this.setNumeroConta = function(value){
        numeroConta = value;
    };

    this.setSaldo = function(value){
        saldo = value;
    };

    this.getNomeCorrentista = function(){
        return nomeCorrentista;
    };

    this.getBanco = function(){
        return banco;
    };

    this.getNumeroConta = function(){
        return numeroConta;
    };

    this.getSaldo = function(){
        return saldo;
    };
}

function ContaCorrente(){
    let saldoEspecial;

    this.setSaldoEspecial = function(value){
        saldoEspecial = value;
    };

    this.getSaldoEspecial = function(){
        return saldoEspecial;
    };
}

function ContaPoupanca(){
    let juros, dtVencimento;

    this.setJuros = function(value){
        juros = value;
    };

    this.getJuros = function(){
        return juros;

    }
    this.setDataVencimento = function(value){
        dtVencimento = value;
    };

    this.getDataVencimento = function(){
        return dtVencimento;
    }
}

ContaCorrente.prototype = new Contas();
ContaPoupanca.prototype = new Contas();

let nContaCorrente = new ContaCorrente();
let nContaPoupanca = new ContaPoupanca();

nContaCorrente.setNomeCorrentista(prompt("Digite o nome do Correntista: "));
nContaCorrente.setBanco(prompt("Digite o Nome do Banco:"));
nContaCorrente.setNumeroConta(prompt("Digite o Número da Conta:"));
nContaCorrente.setSaldo(prompt("Digite o Saldo:"));
nContaCorrente.setSaldoEspecial(prompt("Digite o Saldo Especial:"));
nContaPoupanca.setJuros(prompt("Digite o valor do Juros"));
nContaPoupanca.setDataVencimento(prompt("Digite a data de Vencimento"));

alert(`
    Nome correntista: ${nContaCorrente.getNomeCorrentista()} \n
    Banco: ${nContaCorrente.getBanco()} \n
    Número da conta: ${nContaCorrente.getNumeroConta()} \n
    Saldo: ${nContaCorrente.getSaldo()} \n
    Saldo especial: ${nContaCorrente.getSaldoEspecial()} \n  
    Valor do Juros: ${nContaPoupanca.getJuros()} \n     
    Data de Vencimento: ${nContaPoupanca.getDataVencimento()} \n
    Saldo menos Juros: ${nContaCorrente.getSaldo() - nContaPoupanca.getJuros()}
`);
