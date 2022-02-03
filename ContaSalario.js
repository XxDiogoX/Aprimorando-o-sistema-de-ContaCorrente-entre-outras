import {Conta} from "./Conta.js"
export class ContaSalario extends Conta{
    constructor(cliente,agencia,numeroConta){
        super(cliente,agencia,numeroConta, 200);
    }

    sacar(valor){
        var taxa = 1.5;
        this._sacar(valor,taxa);
    }

    

}