import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

/*const cliente1 = new Cliente("Ricardo", 11122233309);

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
console.log(contaSalario);*/

const cliente = new Cliente("Lais", 78945612379, "456")

const gerente =  new Gerente("Ricardo",  5000, 12378945601);
gerente.cadastrarSenha("123")

const diretor =  new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789")


const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");

console.log(clienteEstaLogado,gerenteEstaLogado, diretorEstaLogado);
