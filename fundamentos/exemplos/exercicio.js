const qtdpessoas = parseInt(prompt("Quantas pessoas vão comer salgadinhos?"))
const salgado1 = prompt("Qual o primeiro salgado?")
const salgado2 = prompt("Qual o segundo salgado")
const valorSalgado1 = parseFloat(prompt(`Qual o valor do ${salgado1}`))
const valorSalgado2 = parseFloat(prompt(`Qual o valor do ${salgado2}`))
const bebida1 = prompt("Qual vai ser a primeira bebia?")
const bebida2 = prompt("Qual vai ser a segunda bebida?")
const valorBebida1 = parseFloat(prompt(`Qual o valor da ${bebida1}`))
const valorBebida2 = parseFloat(prompt(`Qual o valor da ${bebida2}`))
const taxa = parseFloat(prompt(`Qual o valor da taxa?`))


const total = valorSalgado1 + valorSalgado2 + valorBebida1 + valorBebida2 + taxa
const totalPessoa = total / qtdpessoas
alert(`O total a pagar por pessoa foi de R$${totalPessoa.toFixed(2)} e o total do pedido de R$${total.toFixed(2)}.
    `)
