export class Conta{
    constructor(cliente,agencia,numeroConta,saldoInicial){
        this._cliente = cliente;
        this._titular = cliente._nome;
        this._cpf = cliente._cpf
        this._agencia = agencia;
        this._numeroConta = numeroConta;
        this._saldo = saldoInicial;

    }

    set cliente(cliente){
        if(cliente instanceof Cliente){
            this._cliente = cliente;
        }else{
            console.log("O paramentro não é do tipo Cliente!!");
        }
    }


    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;

    }

    set nome(nomeRecebido){
        this._titular = nomeRecebido;

    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            console.log(`Sacado o valor: ${valor.toFixed(2)} da conta: ${this._titular}`);
            
        }else{
            console.log(`Não foi possível sacar R$ ${valor.toFixed(2)}`);
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log(`Depósito de R$ ${valor.toFixed(2)} efetuado para ${this._titular}.`);
        }else{
            console.log("Não foi possível efetuar o depósito");
        }
    }

    transferir(valor, conta){
        if(this._saldo >= valor){
            this.sacar(valor);
            conta.depositar(valor);
        }
    }

    

   


}