import { Funcionario } from "./Funcionario.js";
export class Gerente extends Funcionario{
    construtor(nome,cpf,salario){
        super(nome,cpf,salario);
        this._bonificacao = 1.1;

        
    }
}