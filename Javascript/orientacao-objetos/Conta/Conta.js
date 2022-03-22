//Classe Abstrata
export class Conta {
    constructor(cliente, agencia, saldoInicial) {
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente")
        }
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoInicial;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        } 
    }

    get cliente(){
        this._cliente;
    }

    get saldo(){
        this._saldo;
    }

    //Método abstrato
    sacar(valor) {
        throw new Error("O método sacar da conta é abstrato")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}