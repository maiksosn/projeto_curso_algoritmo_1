function acaobotao() {
    var valor1, valor2, resultado, operacao
    valor1 = parseInt(prompt("Digite Primeiro valor: "))
    operacao = parseInt(prompt("Digite a operação ex: +, -, *, /"))
    valor2 = parseInt(prompt("Digite segundo valor"))

    if ( operacao == " + ") {
        resultado = valor1 + valor2
    }
    else if(operacao == " - ") {
        resultado = valor1 - valor2
    }
    else if(operacao == " * ") {
        resultado = valor1 * valor2
    }
    else if(operacao == " / ") {
        resultado = valor1 / valor2
    }

    document.getElementById("paragrafo").innerText = resultado

}