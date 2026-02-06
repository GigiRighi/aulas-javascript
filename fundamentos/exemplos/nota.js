const aluno = prompt("Qual o nome do aluno?")
const nota1 = parseFloat(prompt("Qual a priemira nota?"))
const nota2 = parseFloat(prompt("Qual a segunda nota?"))

const media = (nota1 + nota2) / 2

alert(`A media das notas ${nota1} e ${nota2} é ${media}`)
