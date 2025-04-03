let numero:number = 10
console.log(numero)

let nome:string = "Thiago"
console.log(nome)

const pi:number = 3.14
console.log(pi)

function saudacao(nome:string, idade:number){
    console.log(`ola meu nome é ${nome} e tenho ${idade} anos`);
}
const nomeUsuario:string = "Thiago"
const idade:number = 17

saudacao(nomeUsuario, idade);

//OBJETO
const pessoa = {
    nome:"Thiago",
    idade:15,
    cidade:"Ibirama",
    apresentar: function():string{
        return `Olá meu nome é ${this.nome}, e eu tenho ${this.idade} e moro na cidade de ${this.cidade}`
    }
}

console.log(pessoa.apresentar());

function soma(numeroA:number, numeroB:number): number {
    return numeroA + numeroB
}

function divisao(numeroC:number, numeroD:number): number{
    return numeroC / numeroD
}

function media(numeroE:number, numeroF:number, numeroG:number): number{
    return (numeroE + numeroF + numeroG)/3
}

function multiplicacao(numeroH:number, numeroI:number): number{
    return numeroH * numeroI
}