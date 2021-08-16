Algoritmo "estrutura-se-senao"

Var
// Seção de Declarações das variáveis 
   numero1, numero2, resultado: real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreva("Ecreva um número: ")
   leia(numero1)
   escreva("Escreva outro número: ")
   leia(numero2)
   
   resultado <- (numero1 + numero2)/2
   se(resultado >= 55.0) entao
     escreva("Aprovado")
   senao
     escreva("Reprovado")
   fimse
   
Fimalgoritmo