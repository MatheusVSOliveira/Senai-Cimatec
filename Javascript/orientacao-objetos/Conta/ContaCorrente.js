import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(cliente, agencia, 0);
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(taxa, valor);
    }

}