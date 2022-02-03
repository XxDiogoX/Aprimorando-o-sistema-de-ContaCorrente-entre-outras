import {Conta} from "./Conta.js"
export class ContaCorrente extends Conta{
    static numerosDeConta = 0;
    constructor(cliente,agencia,numeroConta){
        super(cliente,agencia,numeroConta, 0);
        ContaCorrente.numerosDeConta += 1;
    }

    sacar(valor){
        var taxa = 5;
        this._sacar(valor,taxa);
        
    }

    
}