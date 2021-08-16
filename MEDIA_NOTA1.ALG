Algoritmo "Media_Nota1"


Var

  nome: caractere
  nota1, nota2, media: real

Inicio
   // escopo
   escreval("Digite seu nome: ")
   leia(Nome)
   escreval("Digite 1°: ")
   leia(Nota1)
   escreval("Digite 2°: ")
   leia(nota2)
   media <- (nota1+nota2)/2
   // media
   se (media >= 7) entao
     escreval("Aprovado")
   senao
     escreval("Reprovado")
   fimse
   escreval("O nome digitado foi: ", nome)
   escreval("A média foi: ", media)

Fimalgoritmo