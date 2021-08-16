var nome, nota1, nota2, media;
nome = prompt("Digite o nome do aluno:")
nota1 = parseInt(prompt("Nota 1:"))
nota2 = parseInt(prompt("Nota 2:"))

media = (nota1 + nota2) /2;


if (media >= 50){
    alert(" Aprovado! " + nome)
}
else{
    alert("Reprovado! " + nome)
}
