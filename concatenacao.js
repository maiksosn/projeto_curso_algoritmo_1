/*nome: caractere
idade: inteiro


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreva("Escreva um Nome: ")
   leia(nome)
   escreva("Digite sua idade: ")
   leia(idade)
   
   escreval(nome, " tem a idade de ", idade, " anos.")
Fimalgoritmo
*/

var nome, idade

nome = prompt("Digite o seu nome: ")
idade = prompt("Digite sua idade: ")

document.getElementById("paragrafo").innerText = nome + " tem a idade de " + idade + " Anos"