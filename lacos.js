console.log("Trabalhando com condicionais e laços de repetição")

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba'
);


console.log("Destinos possíveis:")
console.log(listaDeDestinos)

const idadePessoa = 18
const estaAcompanhada = true
const nomePessoa = "Luis Felipe"

let temPassagemComprada = false
const destinoExiste = "Curitiba"

console.log("Utilizando de um laço de for")

for (let i = 0; i < listaDeDestinos.length; i++) {
    if (listaDeDestinos[i] == destinoExiste) {
        temPassagemComprada = true
    }
}

console.log(`O destino ${destinoExiste} existe`)

console.log("Utilizando de um laço de while")

let contador = 0;

while (contador < listaDeDestinos.length) {
    if (listaDeDestinos[contador] == destinoExiste) {
        temPassagemComprada = true
    }
    contador++
}

console.log(`O destino ${destinoExiste} existe`)

