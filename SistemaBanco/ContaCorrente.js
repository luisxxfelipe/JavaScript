export class ContaCorrente {
    static numeroContas = 0;
    constructor(cliente, agencia, saldo = 0) {
        this._cliente = cliente;
        this.agencia = agencia;
        this._saldo = saldo; 
        ContaCorrente.numeroContas += 1
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
        console.log("Saldo insuficiente para saque.");
        return 0;
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        if (valorSacado > 0) {
            conta.depositar(valorSacado);
        }
    }
}
