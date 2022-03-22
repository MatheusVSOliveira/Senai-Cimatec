export class ContaCorrente {
    
    static numeroDeContas = 0;
   
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

    constructor(cliente, agencia){
        this._cliente = cliente;
        this.agencia = agencia;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
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