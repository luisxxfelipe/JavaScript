class Clientes {
  constructor(nome, cpf, rg) {
    this.nome = nome
    this.cpf = cpf
    this.rg = rg
  }
}

class ContaCorrente{
    constructor(cliente, agencia, saldo){
        this.cliente = cliente
        this.agencia = agencia
        this.saldo = saldo
    }
    
    sacar(valor){
        if(this.saldo >= valor){
        this.saldo -= valor
        return valor
        }
    }
    
    depositar(valor){
        if(valor > 0){
        this.saldo += valor
        }
    }
}

const cliente1 = new Clientes();

cliente1.nome = 'Ricardo'
cliente1.cpf = 11122233309
cliente1.rg = 123456789

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.saldo = 100
contaCorrenteRicardo.agencia = 101

contaCorrenteRicardo.sacar(20)

console.log(`O valor sacado da conta de ${cliente1.nome} foi de R$20,00. O saldo atual é de R$${contaCorrenteRicardo.saldo}`)

contaCorrenteRicardo.depositar(200)

console.log(`O valor depositado na conta de ${cliente1.nome} foi de R$200,00. O saldo atual é de R$${contaCorrenteRicardo.saldo}`)


const cliente2 = new Clientes();

cliente2.nome = 'Alice'
cliente2.cpf = 88822233309
cliente2.rg = 123456789

const contaCorrenteAlice = new ContaCorrente();

contaCorrenteAlice.saldo = 100
contaCorrenteAlice.agencia = 101

contaCorrenteAlice.sacar(50)

console.log(`O valor sacado da conta de ${cliente2.nome} foi de R$50,00. O saldo atual é de R$${contaCorrenteAlice.saldo}`)

contaCorrenteAlice.depositar(120)

console.log(`O valor depositado na conta de ${cliente2.nome} foi de R$120,00. O saldo atual é de R$${contaCorrenteAlice.saldo}`)


