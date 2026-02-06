const qtdPessoas = parseInt(prompt('Quantas pessoas vão ir a sua festa?'))
const pessoasAdultas = parseInt(prompt('Dessas pessoas, quantas são adultas?'))
const duracao = parseFloat(prompt('Quantas horas a festa vai durar?'))

 const salgadinhosGeral = (qtdPessoas * 18) / 100 //18 é a quantidade de salgadinho // 100 é o cento
 const precoSalgadinho = salgadinhosGeral * 48.90 //48.90 é o preço do cento

const docinhosGeral = (qtdPessoas * 6) / 20 //6 é a quantidade de salgadinho por pessoa // 20 é a unidade vendida
const precoDocinhos = docinhosGeral * 42.90 // 42.90 é o preço por 20 unidades

const refriGeral = qtdPessoas / 2 // divide por dois pois é o litro do refri 
const precoRefri = refriGeral * 8.99

const copos = (qtdPessoas * 5) / 100 
const precoCopos = copos * 12.99

const pratos = (qtdPessoas * 2) / 10
const precoPrato = pratos * 4.99

const garfoFaca = (qtdPessoas * 2) / 10
const precoGarfoFaca = garfoFaca * 7.99

const mesaCadeira = qtdPessoas / 4
const precoMesaCadeira = qtdPessoas * 17.99

const karaoke = duracao / 2
const precoKaraoke = karaoke * 27.99

const aluguelEspaco = duracao * 239.99

//divisão dos itens comunitários

const valorPessoa = (precoMesaCadeira + karaoke + aluguelEspaco) / pessoasAdultas

alert(`O valor que cada um pagará por pessoa é R$${valorPessoa.toFixed(2)} `)

// o que você terá que pagar 

const valorAnfitriao = (precoSalgadinho + precoDocinhos + precoRefri + precoCopos + precoPrato + precoGarfoFaca)
alert(`Esse será o valor que o você irá pagar R$${valorAnfitriao.toFixed(2)}`)

