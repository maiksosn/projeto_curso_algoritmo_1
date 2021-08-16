function acaobotao() {
    var valor1, valor2, resultado, operacao
    valor1 = prompt("Digite Primeiro valor: ")
    operacao = prompt("Digite a operação ex: +, -, *, /")
    valor2 = prompt("Digite segundo valor")
switch (operacao) {
        case " + ":
            resultado = parseInt(valor1) + parseInt(valor2)
            break;
        case " - ":
            resultado = parseInt(valor1) - parseInt(valor2)
            break;
        case " * ":
            resultado = parseInt(valor1) * parseInt(valor2)
            break;
        case " / ":
            resultado = parseInt(valor1) / parseInt(valor2)
            break;
    }
    document.getElementById('paragrafo').innerText = resultado;
}