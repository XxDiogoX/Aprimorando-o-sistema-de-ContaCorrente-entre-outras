export class Cliente{
    get cliente(){
        return this._cliente;
    }

    constructor(nome, cpf){
        this._nome = nome;
        this._cpf = cpf;

    }
}