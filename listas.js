console.log("Trabalhando com listas")

// const salvador =  'Salvador'
// const saoPaulo = 'São Paulo'
// const RioDeJaneiro = 'Rio de Janeiro' 
// console.log("Destinos possíveis:")
// ctrl + K + C - comenta todas as linhas selecionadas

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba'
);

listaDeDestinos.push('Mato Grosso'); // Adiciona um item na lista

console.log(listaDeDestinos)

listaDeDestinos.splice(2, 1); // Remove um item da lista

console.log(listaDeDestinos)

listaDeDestinos.pop(); // Remove o último item da lista
console.log(listaDeDestinos)

console.log(listaDeDestinos[1]) // Acessa um item da lista