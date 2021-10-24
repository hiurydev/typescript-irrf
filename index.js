var Empregado = /** @class */ (function () {
    function Empregado() {
        this.empregado = {};
        this.empregado.nome = "";
        this.empregado.salarioBruto = 0;
        this.empregado.quantidadelHorasExtras = 0;
        this.empregado.valorTotalHorasExtras = 0;
        this.empregado.faixaDescontoINSS = 0;
        this.empregado.valorDescontadoINSS = 0;
        this.empregado.faixaDescontoIR = 0;
        this.empregado.valorDescontadoIR = 0;
        this.empregado.valorSalarioLiquido = 0;
    }
    Empregado.prototype.setNome = function (nome) {
        this.empregado.nome = nome;
    };
    Empregado.prototype.getNome = function () {
        return this.empregado.nome;
    };
    Empregado.prototype.setSalarioBruto = function (salarioBruto) {
        this.empregado.salarioBruto = salarioBruto;
    };
    Empregado.prototype.getSalarioBruto = function () {
        return this.empregado.salarioBruto;
    };
    Empregado.prototype.setValorTotalHorasExtras = function (valorTotalHorasExtras) {
        this.empregado.valorTotalHorasExtras = valorTotalHorasExtras;
    };
    Empregado.prototype.getValorTotalHorasExtras = function () {
        return this.empregado.valorTotalHorasExtras;
    };
    Empregado.prototype.setQuantidadelHorasExtras = function (quantidadelHorasExtras) {
        this.empregado.quantidadelHorasExtras = quantidadelHorasExtras;
    };
    Empregado.prototype.getQuantidadelHorasExtras = function () {
        return this.empregado.quantidadelHorasExtras;
    };
    Empregado.prototype.setFaixaDescontoINSS = function (faixaDescontoINSS) {
        this.empregado.faixaDescontoINSS = faixaDescontoINSS;
    };
    Empregado.prototype.getFaixaDescontoINSS = function () {
        return this.empregado.faixaDescontoINSS;
    };
    Empregado.prototype.setValorDescontadoINSS = function (valorDescontadoINSS) {
        this.empregado.valorDescontadoINSS = valorDescontadoINSS;
    };
    Empregado.prototype.getValorDescontadoINSS = function () {
        return this.empregado.valorDescontadoINSS;
    };
    Empregado.prototype.setFaixaDescontoIR = function (faixaDescontoIR) {
        this.empregado.faixaDescontoIR = faixaDescontoIR;
    };
    Empregado.prototype.getFaixaDescontoIR = function () {
        return this.empregado.faixaDescontoIR;
    };
    Empregado.prototype.setValorDescontadoIR = function (valorDescontadoIR) {
        this.empregado.valorDescontadoIR = valorDescontadoIR;
    };
    Empregado.prototype.getValorDescontadoIR = function () {
        return this.empregado.valorDescontadoIR;
    };
    Empregado.prototype.setValorSalarioLiquido = function (valorSalarioLiquido) {
        this.empregado.valorSalarioLiquido = valorSalarioLiquido;
    };
    Empregado.prototype.getValorSalarioLiquido = function () {
        return this.empregado.valorSalarioLiquido;
    };
    return Empregado;
}());
var empregado = new Empregado();
function calculaHorasExtras() {
    var horasExtras = 0, salario = empregado.getSalarioBruto(), quantidadelHorasExtras = empregado.getQuantidadelHorasExtras();
    horasExtras = ((salario / 200) * 1.5) * quantidadelHorasExtras;
    salario = salario + horasExtras;
    empregado.setValorTotalHorasExtras(horasExtras);
    //Salário Líquido (salário bruto + horas extras)
    empregado.setValorSalarioLiquido(salario);
    console.log('Calculando horas extras');
    console.log('Valor das horas calculadas: ' + horasExtras);
    console.log('Salário + Horas Extras: ' + salario + '\n');
}
function calcularDescontoINSS() {
    console.log('Calculando descontos do INSS');
    var aliquota = 0, valorComDescontoINSS = 0, salario = empregado.getValorSalarioLiquido();
    switch (true) {
        case (salario <= 1100):
            aliquota = 7.5;
            break;
        case (salario > 1100.01 && salario <= 2203.48):
            aliquota = 9;
            break;
        case (salario > 2203.48 && salario <= 3305.22):
            aliquota = 12;
            break;
        case (salario > 3305.22):
            aliquota = 14;
            break;
    }
    valorComDescontoINSS = salario * (aliquota / 100);
    if (valorComDescontoINSS >= 713.09) {
        valorComDescontoINSS = 713.09;
    }
    salario = salario - valorComDescontoINSS;
    empregado.setFaixaDescontoINSS(aliquota);
    empregado.setValorDescontadoINSS(valorComDescontoINSS);
    //Salário Líquido (salário bruto + horas extras - INSS)
    empregado.setValorSalarioLiquido(salario);
    console.log('Valor descontado de INSS: ' + valorComDescontoINSS + '\n');
    console.log('Salário - Desconto INSS: ' + salario + '\n');
}
function calcularDescontoIRRF() {
    var aliquota = 0, valorComDescontoIRRF = 0, salario = empregado.getValorSalarioLiquido();
    console.log('Calculando descontos do IRRF');
    switch (true) {
        case (salario <= 1903.98):
            aliquota = 0;
            break;
        case (salario >= 1903.99 && salario <= 2826.65):
            aliquota = 7.5;
            break;
        case (salario >= 2826.66 && salario <= 3751.05):
            aliquota = 15;
            break;
        case (salario >= 3751.06 && salario <= 4664.68):
            aliquota = 22.5;
            break;
        case (salario > 4664.68):
            aliquota = 27.5;
            break;
    }
    valorComDescontoIRRF = salario * (aliquota / 100);
    salario = salario - valorComDescontoIRRF;
    empregado.setFaixaDescontoIR(aliquota);
    empregado.setValorDescontadoIR(valorComDescontoIRRF);
    //Salário Líquido (salário bruto - desconto INSS - desconto IR + horas extras)
    empregado.setValorSalarioLiquido(salario);
    console.log('Valor descontado de INSS: ' + valorComDescontoIRRF + '\n');
    console.log('Salário - Desconto IRRF: ' + salario + '\n');
}
function calculaSalario(nome, salario, quantidadelHorasExtras) {
    console.log('SALÁRIO: ' + salario + '\n');
    console.log(nome);
    console.log(salario);
    console.log(quantidadelHorasExtras);
    empregado.setNome(nome);
    empregado.setSalarioBruto(parseFloat(salario));
    empregado.setQuantidadelHorasExtras(parseFloat(quantidadelHorasExtras));
    calculaHorasExtras();
    calcularDescontoINSS();
    calcularDescontoIRRF();
    console.log(empregado);
}
calculaSalario(process.argv[2], process.argv[3], process.argv[4]);
// calculaSalario("Nome", 2500, 20)
