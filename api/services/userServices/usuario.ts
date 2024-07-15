

export class Usuario {
    nome:string;
   objetivo:string | null;
   nivelDeAtividadeFisica:string | null;
   sexo:string;
   idade:string;
   altura:string;
   peso:string;
   metaPeso:string

    constructor(nome:string, objetivo:string, nivelDeArividadeFisica:string, sexo:string, idade:string, altura:string, peso:string, metaPeso:string){
        this.nome = nome;
        this.objetivo = objetivo;
        this.nivelDeAtividadeFisica = nivelDeArividadeFisica;
        this.sexo = sexo;
        this.idade = idade;
        this.altura = altura
        this.peso = peso
        this.metaPeso = metaPeso
      
    }
}