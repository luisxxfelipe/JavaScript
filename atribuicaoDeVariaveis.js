console.log("Atribuição de Variáveis")

const idade = 20
let nome = "Luis Felipe"
const sobrenome = "Sousa"

console.log("nome: " + nome + " " + sobrenome)
console.log("idade: " + idade)

console.log(nome, sobrenome, idade)
console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`)	// Interpolação de strings

nome = nome + sobrenome
console.log(nome)