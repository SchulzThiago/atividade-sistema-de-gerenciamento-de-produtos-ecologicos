import { produtoEcologico } from "./produtoEcologico";

export class produtoLimpezaBiodegradavel implements produtoEcologico{
    nome:String
    preco:number
    volume:number

    constructor(nome:String, preco:number, volume:number){
        this.nome = nome
        this.preco = preco
        this.volume = volume
    }

    exibir(){
        return`nome: ${this.nome} preco${this.preco} volume: ${this.volume}`
    }

    cadastrar(){
        return"Cadastrado com sucesso"
    }
}

const omo = new produtoLimpezaBiodegradavel("Omo", 12.00, 200)
    console.log(omo.exibir())
    console.log(omo.cadastrar())
