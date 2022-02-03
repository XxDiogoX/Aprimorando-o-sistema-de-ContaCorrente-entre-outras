import {Conta} from "./Conta.js"
export class ContaCorrente extends Conta{
    static numerosDeConta = 0;
    constructor(cliente,agencia,numeroConta){
        super(cliente,agencia,numeroConta, 0);
        ContaCorrente.numerosDeConta += 1;
    }

    sacar(valor){
        const valorSacado = valor + (valor * 5 / 100)
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            console.log(`Valor Sacado: R$ ${valor.toFixed(2)}\nSaldo: ${this._saldo.toFixed(2)}`);

        }else{
            console.log(`Não foi possível sacar R$ ${valor.toFixed(2)}`);
        }
        
    }

    
}