export class Funcionario{
    constructor(nome, cpf,salario){
        if(this.constructor == Funcionario){
            throw new Error("Essa classe é uma classe abstrata, não pode ser instanciada!!");
        }
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario; 
        this._bonificacao = 1;
    }
}