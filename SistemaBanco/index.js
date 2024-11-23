import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
cliente1.rg = 123456789

const contaCorrenteRicardo = new ContaCorrente(1001, 32323);
contaCorrenteRicardo._cliente = cliente1

contaCorrenteRicardo.sacar(20)

console.log(`\nO valor sacado da conta de ${cliente1.nome} foi de R$20,00. O saldo atual é de R$${contaCorrenteRicardo.saldo}`)
contaCorrenteRicardo.depositar(200)
console.log(`O valor depositado na conta de ${cliente1.nome} foi de R$200,00. O saldo atual é de R$${contaCorrenteRicardo.saldo}`)


const cliente2 = new Cliente("Alice", 88822233309);
cliente2.rg = 123456789

const contaCorrenteAlice = new ContaCorrente(231, 32323);
contaCorrenteAlice._cliente = cliente2

contaCorrenteAlice.sacar(50)

console.log(`\n\nO valor sacado da conta de ${cliente2.nome} foi de R$50,00. O saldo atual é de R$${contaCorrenteAlice.saldo}`)
contaCorrenteAlice.depositar(120)
console.log(`O valor depositado na conta de ${cliente2.nome} foi de R$120,00. O saldo atual é de R$${contaCorrenteAlice.saldo}`)

contaCorrenteAlice.transferir(10, contaCorrenteRicardo)

console.log(`\n\nO valor transferido da conta de ${cliente2.nome} para a conta de ${cliente1.nome} foi de R$10,00. O saldo atual da conta de ${cliente2.nome} é de R$${contaCorrenteAlice.saldo} e o saldo atual da conta de ${cliente1.nome} é de R$${contaCorrenteRicardo.saldo}`)


contaCorrenteRicardo.transferir(10, contaCorrenteAlice)

console.log(`O valor transferir da conta de ${cliente1.nome} para a conta de ${cliente2.nome} foi de R$10,00. O saldo atual da conta de ${cliente1.nome} é de R$${contaCorrenteRicardo.saldo} e o saldo atual da conta de ${cliente2.nome} é de R$${contaCorrenteAlice.saldo}`)


const cliente3 = new Cliente("Marcos", 204839042)
cliente3.rg = 123456789
const contaCorrenteMarcos = new ContaCorrente(cliente3, 102)

console.log(contaCorrenteMarcos)

console.log(`\n\nO número de contas criadas é de ${ContaCorrente.numeroContas}`)