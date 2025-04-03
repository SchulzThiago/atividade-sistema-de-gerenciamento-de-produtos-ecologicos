import { produtoEcologico } from "./produtoEcologico";

export class alimentoOrganico implements produtoEcologico{
    nome:String
    preco:number
    dataValidade:Date
    ingredientes:String[]

    constructor(nome:String, preco:number, dataValidade:Date, ingredientes:String[]){
        this.nome = nome
        this.preco = preco
        this.dataValidade = dataValidade
        this.ingredientes = ingredientes
    }

    exibir(){
        return`nome: ${this.nome} preco: ${this.preco} dataValidade: ${this.dataValidade} ingredientes: ${this.ingredientes}`
    }

    cadastrar(){
        return "Cadastrado com sucesso"
    }
}

const banana = new alimentoOrganico("banana", 1.0,new Date("2025-04-30"), ["banana","banana^2"])
    console.log(banana.exibir())   
    console.log(banana.cadastrar())

