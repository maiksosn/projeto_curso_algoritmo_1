Algoritmo "estrutura-se-senao"

Var
// Se��o de Declara��es das vari�veis 
   numero1, numero2, resultado: real


Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreva("Ecreva um n�mero: ")
   leia(numero1)
   escreva("Escreva outro n�mero: ")
   leia(numero2)
   
   resultado <- (numero1 + numero2)/2
   se(resultado >= 55.0) entao
     escreva("Aprovado")
   senao
     escreva("Reprovado")
   fimse
   
Fimalgoritmo