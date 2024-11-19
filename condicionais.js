console.log("Trabalhando com condicionais")

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

// if (idadePessoa >= 20) {
//     const destino = listaDeDestinos.splice(2, 1)[0]
//     console.log(`Parabens ${nomePessoa}, o destino escolhido foi ${destino}`)
//     console.log(`Restou somente as cidades: ${listaDeDestinos}`)
// } else {
//     if(estaAcompanhada) {
//         const destino = listaDeDestinos.splice(2, 1)[0]
//         console.log(`Parabens ${nomePessoa}, o destino escolhido foi ${destino}`)
//         console.log(`Restou somente as cidades: ${listaDeDestinos}`)
//     } else {
//         console.log("Não é possível vender para menor de idade desacompanhado")
//     }
// }


if (idadePessoa >= 20 || estaAcompanhada) {
    const destino = listaDeDestinos.splice(2, 1)[0]
    console.log(`Parabens ${nomePessoa}, o destino escolhido foi ${destino}`)
    console.log(`Dados da compra: ${nomePessoa}, ${idadePessoa} anos, ${estaAcompanhada}`)
} else {
    console.log("Não é possível vender para menor de idade desacompanhado")
}