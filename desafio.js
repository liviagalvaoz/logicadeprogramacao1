
// 1. Saudações por idioma
let idioma = prompt("Digite seu idioma:")
switch (idioma) {
  case "Português":
  case "portugues":
  case "Portugues":
  case "pt":
  case "PT":
  case "Portuguese":
  case "portuguese":
    console.log("Olá!")
    break
  case "Inglês":
  case "ingles":
  case "inglês":
  case "english":
  case "English":
    console.log("Hello!")
    break
  case "Espanhol":
  case "espanhol":
  case "Spanish":
  case "spanish":
  case "ES":
  case "es":
  case "Español":
  case "español":
    console.log("¡Hola!")
    break
  case "Francês":
  case "frances":
  case "Frances":
  case "Français":
  case "français":
  case "French":
  case "french":
  case "fr":
  case "FR":
    console.log("Bonjour!")
    break
  default:
    console.log("Idioma não reconhecido.")
}

// 2. Dias da semana por número
let dia = prompt("Digite um número de 1 a 7:")
switch (dia) {
  case "1":
    console.log("Domingo")
    break
  case "2":
    console.log("Segunda-feira")
    break
  case "3":
    console.log("Terça-feira")
    break
  case "4":
    console.log("Quarta-feira")
    break
  case "5":
    console.log("Quinta-feira")
    break
  case "6":
    console.log("Sexta-feira")
    break
  case "7":
    console.log("Sábado")
    break
  default:
    console.log("Número inválido.")
}

// 3. Tipo de transporte
let transporte = prompt("Digite um número de 1 a 4 para o tipo de transporte:")
switch (transporte) {
  case "1":
    console.log("Carro")
    break
  case "2":
    console.log("Bicicleta")
    break
  case "3":
    console.log("Ônibus")
    break
  case "4":
    console.log("Metrô")
    break
  default:
    console.log("Transporte não encontrado.")
}

// 4. Nível de urgência
let urgencia = prompt("Digite o nível de urgência (1, 2 ou 3):")
switch (urgencia) {
  case "1":
    console.log("Urgência baixa")
    break
  case "2":
    console.log("Urgência média")
    break
  case "3":
    console.log("Urgência alta")
    break
  default:
    console.log("Nível inválido.")
}

// 5. Tipo de veículo por categoria
let categoriaVeiculo = prompt("Informe a categoria do veículo (Compacto, SUV, Caminhão):")
switch (categoriaVeiculo) {
  case "compacto":
  case "Compacto":
    console.log("Veículo tipo compacto")
    break
  case "SUV":
  case "suv":
    console.log("Veículo tipo SUV")
    break
  case "caminhão":
  case "Caminhão":
  case "caminhao":
  case "Caminhao":
    console.log("Veículo tipo caminhão")
    break
  default:
    console.log("Categoria não reconhecida.")
}

// 6. Gênero musical
let genero = prompt("Informe o gênero musical (Samba, MPB, Rock, Pop, Jazz, Blues):")
switch (genero) {
  case "rock":
  case "Rock":
    console.log("Bateria")
    break
  case "samba":
  case "Samba":
    console.log("Pandeiro")
    break
  case "classico":
    console.log("Violino")
    break
  case "Pop":
  case "pop":
  case "POP":
    console.log("Sintetizador")
    break
  case "MPB":
  case "mpb":
    console.log("Violão")
    break
  case "jazz":
  case "Jazz":
    console.log("Saxofone")
    break
  case "Blues":
  case "blues":
    console.log("Harmônica")
    break
  default:
    console.log("Gênero não reconhecido.")
}

// 7. Tarifas de estacionamento
let tempo = prompt("Informe o tempo estacionado em horas (1, 2 ou 3):")
switch (tempo) {
  case "1":
    console.log("Tarifa: R$ 5,00")
    break
  case "2":
    console.log("Tarifa: R$ 8,00")
    break
  case "3":
    console.log("Tarifa: R$ 12,00")
    break
  default:
    console.log("Tempo inválido.")
}

// 8. Dificuldade em jogos
let dificuldade = prompt("Escolha o nível de dificuldade (1, 2 ou 3):")
switch (dificuldade) {
  case "1":
    console.log("Nível fácil")
    break
  case "2":
    console.log("Nível médio")
    break
  case "3":
    console.log("Nível difícil")
    break
  default:
    console.log("Nível inválido.")
}

// 9. Serviços de academia
let servico = prompt("Informe o serviço (yoga, musculacao, personal):")
switch (servico) {
  case "yoga":
    console.log("Aula de yoga")
    break
  case "musculacao":
    console.log("Musculação")
    break
  case "personal":
    console.log("Personal Trainer")
    break
  default:
    console.log("Serviço não disponível.")
}

// 10. Preço de ingresso
let ingresso = prompt("Informe a categoria (estudante, meia, inteira):")
switch (ingresso) {
  case "estudante":
    console.log("Preço: R$ 10,00")
    break
  case "meia":
    console.log("Preço: R$ 15,00")
    break
  case "inteira":
    console.log("Preço: R$ 30,00")
    break
  default:
    console.log("Categoria inválida.")
}

// 11. Dificuldade por faixa etária
let idade = prompt("Informe a faixa etária (crianca, adulto, idoso):")
switch (idade) {
  case "crianca":
  case "criança":
  case "Crianca":
  case "Criança":
    console.log("Exercícios leves")
    break
  case "adulto":
  case "Adulto":
    console.log("Exercícios moderados")
    break
  case "idoso":
  case "Idoso":
    console.log("Exercícios adaptados")
    break
  default:
    console.log("Faixa etária inválida.")
}

// 12. Cursos de tecnologia
let area = prompt("Informe a área (front-end, back-end, mobile):")
switch (area) {
  case "front-end":
  case "Front-End":
  case "Front-end":
  case "Frontend":
  case "FrontEnd":
  case "frontend":
    console.log("Curso de HTML, CSS e JavaScript")
    break
  case "back-end":
  case "Back-End":
  case "backend":
  case "BackEnd":
  case "back-End":
  case "Back-end":
    console.log("Curso de Node.js e bancos de dados")
    break
  case "mobile":
  case "Mobile":
    console.log("Curso de desenvolvimento Android/iOS")
    break
  default:
    console.log("Área não encontrada.")
}

// 13. Habilidade esportiva por idade
let faixa = prompt("Informe a idade do atleta (infantil, juvenil, adulto):")
switch (faixa) {
  case "infantil":
  case "Infantil":
    console.log("Habilidade: Iniciante")
    break
  case "juvenil":
  case "Juvenil":
    console.log("Habilidade: Intermediário")
    break
  case "adulto":
  case "Adulto":
    console.log("Habilidade: Avançado")
    break
  default:
    console.log("Faixa não identificada.")
}

// 14. Dificuldade em desafios matemáticos
let categoriaDesafio = prompt("Informe a categoria (básico, intermediário, avançado):")
switch (categoriaDesafio) {
  case "basico":
  case "básico":
  case "Basico":
  case "Básico":
    console.log("Desafios com operações simples")
    break
  case "intermediario":
  case "intermediário":
  case "Intermediário":
  case "Intermediario":
    console.log("Desafios com equações e frações")
    break
  case "avancado":
  case "avançado":
  case "Avancado":
  case "Avançado":
    console.log("Desafios com lógica e álgebra")
    break
  default:
    console.log("Categoria inválida.")
}
