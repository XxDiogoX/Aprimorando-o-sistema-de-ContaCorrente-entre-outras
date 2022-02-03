export class Conta{
    constructor(nome,cpf,agencia,numeroConta,saldoInicial){
        this._nome = nome;
        this._cpf = cpf;
        this._agencia = agencia;
        this._numeroConta = numeroConta;
        this._saldo = saldoInicial;

    }


    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;

    }

    set nome(nomeRecebido){
        this._nome = nomeRecebido;

    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            console.log(`Sacado o valor: ${valor.toFixed(2)} da conta: ${this._nome}`);
            
        }else{
            console.log(`Não foi possível sacar R$ ${valor.toFixed(2)}`);
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log(`Depósito de R$ ${valor.toFixed(2)} efetuado para ${this._nome}.`);
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