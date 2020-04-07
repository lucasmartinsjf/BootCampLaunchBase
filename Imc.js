// Desafio para medir massa IMC
// Cadastrar OBjeto(pessoa) Nome, Idade , peso e Sexo
const Pessoa1 = {
    nome: "Lucas",
    idade: 35,
    peso: 80,
    altura: 1.67,

}

const Pessoa2 = {
    nome: "Leticia",
    idade: 38,
    peso: 92,
    altura: 1.75

}

const IMC = Pessoa1.peso / (Pessoa1.altura * Pessoa1.altura)


if (IMC >= 30) {
    console.log(`${Pessoa1.nome} Você está acima do peso`)

} else {
    console.log(`Parabéns ${Pessoa1.nome}, você não está acima do peso`)
}