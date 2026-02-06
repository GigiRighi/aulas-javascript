const qtdPessoas = parseInt(prompt('Quantas pessoas vão ir a sua festa?'))
const pessoasAdultas = parseInt(prompt('Dessas pessoas, quantas são adultas?'))
const duracao = parseFloat(prompt('Quantas horas a festa vai durar?'))

 const salgadinhosGeral = (qtdPessoas * 18) / 100 //18 é a quantidade de salgadinho // 100 é o cento
 const precoSalgadinho = salgadinhosGeral * 48.90 //48.90 é o preço do cento

 alert (`o preço salgadinho ${precoSalgadinho}`)

