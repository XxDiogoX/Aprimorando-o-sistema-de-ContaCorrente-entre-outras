import {Conta} from "./Conta.js"
export class ContaPoupanca extends Conta{
    static numerosDeConta = 0;
    constructor(cliente,agencia,numeroConta,saldoInicial){
        super(cliente,agencia,numeroConta,saldoInicial);
        ContaPoupanca.numerosDeConta += 1;
        
    }
}