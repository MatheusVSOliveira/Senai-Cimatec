export class Cliente {
    get cpf(){
        this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }

    sacar(valor) {
        if(this._saldo >= valor)
        {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) 
        {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor,conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
