export class ContaCorrente {
    agencia;
    _cliente;
    _saldo = 0;

    set _cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        } 
    }

    get _cliente(){
        this._cliente;
    }

    get _saldo(){
        this._saldo;
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