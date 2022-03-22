import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrente = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(cliente1, 1001, 50);
const contaSalario = new ContaSalario(cliente1);

contaCorrente.depositar(500);
contaCorrente.sacar(100);
contaPoupanca.sacar(10)
contaSalario.depositar(100);
contaSalario.sacar(10);



console.log(contaCorrente);
console.log(contaPoupanca);
console.log(contaSalario);



