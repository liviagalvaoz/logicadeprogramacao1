



LOGPRO IF ELSE

let respostacorreta = 0
let respostaincorreta = 0

// Pergunta 1
console.log("Em que ano o Corinthians conquistou seu primeiro título mundial?")
console.log("A - 2000")
console.log("B - 2012")
console.log("C - 1998")
console.log("D - 1999")
let pergunta1 = prompt("Insira a resposta: ")
if (pergunta1 == "A" || pergunta1 == "2000" || pergunta1 == "a") {
  console.log("Alternativa correta")
  respostacorreta++
} else {
  console.log("Resposta Errada")
  respostaincorreta++
}

// Pergunta 2
console.log("Quem foi o principal líder e idealizador da Democracia Corinthiana?")
console.log("A - Casagrande")
console.log("B - Basílio")
console.log("C - Sócrates")
console.log("D - Zé Maria")
let pergunta2 = prompt("Insira a resposta: ")
if (pergunta2 == "C" || pergunta2 == "Sócrates" || pergunta2 == "c") {
  console.log("Alternativa correta")
  respostacorreta++
} else {
  console.log("Resposta Errada")
  respostaincorreta++
}

// Pergunta 3
console.log("Em que ano o Corinthians foi fundado?")
console.log("A - 1914")
console.log("B - 1920")
console.log("C - 1910")
console.log("D - 1918")
let pergunta3 = prompt("Insira a resposta: ")
if (pergunta3 == "C" || pergunta3 == "1910" || pergunta3 == "c") {
  console.log("Alternativa correta")
  respostacorreta++
} else {
  console.log("Resposta Errada")
  respostaincorreta++
}

// Pergunta 4
console.log("Qual o nome do antigo estádio do Corinthians?")
console.log("A - Fazendinha")
console.log("B - Itaquerão")
console.log("C - Arena Corinthians")
console.log("D - Corinthians-Itaquera")
let pergunta4 = prompt("Insira a resposta: ")
if (pergunta4 == "A" || pergunta4 == "Fazendinha" || pergunta4 == "a") {
  console.log("Alternativa correta")
  respostacorreta++
} else {
  console.log("Resposta Errada")
  respostaincorreta++
}

// Pergunta 5
console.log("Em qual bairro o Corinthians foi fundado?")
console.log("A - Itaquera")
console.log("B - Mooca")
console.log("C - Tatuapé")
console.log("D - Bom Retiro")
let pergunta5 = prompt("Insira a resposta: ")
if (pergunta5 == "D" || pergunta5 == "Bom Retiro" || pergunta5 == "d") {
  console.log("Alternativa correta")
  respostacorreta++
} else {
  console.log("Resposta Errada")
  respostaincorreta++
}

// Pergunta 6
console.log("Qual título importante foi conquistado pelo Corinthians em 1977?")
console.log("A - Brasileirão")
console.log("B - Libertadores")
console.log("C - Copa do Brasil")
console.log("D - Paulistão")
let pergunta6 = prompt("Insira a resposta: ")
if (pergunta6 == "D" || pergunta6 == "Paulistão" || pergunta6 == "d") {
  console.log("Alternativa correta")
  respostacorreta++
} else {
  console.log("Resposta Errada")
  respostaincorreta++
}

// Pergunta 7
console.log("Em quais anos o Corinthians foi Bi-Campeão Brasileiro?")
console.log("A - 2000-2012")
console.log("B - 1998-1999")
console.log("C - 1980-1981")
console.log("D - 2000-2001")
let pergunta7 = prompt("Insira a resposta: ")
if (pergunta7 == "B" || pergunta7 == "1998-1999" || pergunta7 == "b") {
  console.log("Alternativa correta")
  respostacorreta++
} else {
  console.log("Resposta Errada")
  respostaincorreta++
}

// Pergunta 8
console.log("Quem foi o camisa 10 do Corinthians em 1990?")
console.log("A - Dinei")
console.log("B - Marcelinho Carioca")
console.log("C - Sócrates")
console.log("D - Craque Neto")
let pergunta8 = prompt("Insira a resposta: ")
if (pergunta8 == "D" || pergunta8 == "Craque Neto" || pergunta8 == "d") {
  console.log("Alternativa correta")
  respostacorreta++
} else {
  console.log("Resposta Errada")
  respostaincorreta++
}

// Pergunta 9
console.log("Qual jogador foi conhecido como 'O Doutor' no Corinthians?")
console.log("A - Biro-Biro")
console.log("B - Wladimir")
console.log("C - Sócrates")
console.log("D - Gamarra")
let pergunta9 = prompt("Insira a resposta: ")
if (pergunta9 == "C" || pergunta9 == "Sócrates" || pergunta9 == "c") {
  console.log("Alternativa correta")
  respostacorreta++
} else {
  console.log("Resposta Errada")
  respostaincorreta++
}

// Pergunta 10
console.log("Quem marcou o gol do título do Mundial de 2012?")
console.log("A - Emerson Sheik")
console.log("B - Paolo Guerrero")
console.log("C - Danilo")
console.log("D - Paulinho")
let pergunta10 = prompt("Insira a resposta: ")
if (pergunta10 == "B" || pergunta10 == "Paolo Guerrero" || pergunta10 == "b") {
  console.log("Alternativa correta")
  respostacorreta++
} else {
  console.log("Resposta Errada")
  respostaincorreta++
}

// Exibir o resultado
console.log("\nResumo final")
console.log("Respostas corretas: " + respostacorreta)
console.log("Respostas incorretas: " + respostaincorreta)
