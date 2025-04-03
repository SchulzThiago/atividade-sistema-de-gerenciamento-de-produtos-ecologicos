import { produtoEcologico } from "./produtoEcologico"

export class itemDecoracaoSustentavel implements produtoEcologico{
    nome:String
    preco:number
    materiais:String
    dimensoes:{
        largura:number
        altura:number
        profundidade:number
    }

    constructor(nome:String, preco:number, materiais:String, dimensoes:{largura:number, altura:number, profundidade:number}){
        this.nome = nome
        this.preco = preco
        this.materiais = materiais
        this.dimensoes = dimensoes
    }

    exibir(){
        return`nome: ${this.nome} preco${this.preco} materiais ${this.materiais} dimensoes ${this.dimensoes}`
    }

    cadastrar(){
        return"Cadastrado com sucesso"
    }
}

const cartaz = new itemDecoracaoSustentavel("Cartaz", 5.00, "papel", {largura:50, altura:20, profundidade:10})
console.log(cartaz.exibir())
console.log(cartaz.cadastrar());
