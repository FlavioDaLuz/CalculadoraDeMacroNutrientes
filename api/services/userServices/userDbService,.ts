import { Injectable } from "@angular/core";
import { enviromentUser } from "../enviroment";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "./usuario";


@Injectable({
    providedIn:'root'
})

export class userDbService{
    private url = enviromentUser.api
    public usuario:Usuario | null = null
  


    constructor(private httpClient:HttpClient){}

    getDataBase(){
        return this.httpClient.get(this.url)
    }

    getUsuario():Usuario | null {
        return this.usuario
    }

    updateNome(nome:string):void {
        if(!this.usuario){
            this.usuario = new Usuario('','','','','','','','')
        }
        this.usuario.nome = nome
    }

    updateObjetivo(objectivo:string|null):void {
        if(!this.usuario){
            this.usuario = new Usuario('','','','','','','','')
        }
        this.usuario.objetivo = objectivo
    }
    updateNivelDeAtividadeFisica(nivelDeArividadeFisica:string | null):void {
        if(!this.usuario){
            this.usuario = new Usuario('','','','','','','','')
        }
        this.usuario.nivelDeAtividadeFisica = nivelDeArividadeFisica
    }
    updateSexo(sexo:string):void {
        if(!this.usuario){
            this.usuario = new Usuario('','','','','','','','')
        }
        this.usuario.sexo = sexo
    }

    updateIdade(idade:string):void {
        if(!this.usuario){
            this.usuario = new Usuario('','','','','','','','')
        }
        this.usuario.idade = idade
    }
    updateAltura(altura:string):void {
        if(!this.usuario){
            this.usuario = new Usuario('','','','','','','','')
        }
        this.usuario.altura = altura
    }
    updatePeso(peso:string):void {
        if(!this.usuario){
            this.usuario = new Usuario('','','','','','','','')
        }
        this.usuario.peso = peso
    }
    updateMetaPeso(metaPeso:string):void {
        if(!this.usuario){
            this.usuario = new Usuario('','','','','','','','')
        }
        this.usuario.metaPeso = metaPeso
    }

    getUsuarioCompleto():Usuario|null {
        return this.usuario
    }
    getUsuarioTesteCompleto():Usuario|null {
        return this.usuarioTeste
    }

usuarioTeste ={
    nome:'flavio',
    objetivo:'perda de peso',
    nivelDeAtividadeFisica:'moderado',
    sexo:'masc',
    idade:'30',
    altura:'160',
    peso:'110',
    metaPeso:'100'
}

    createNewUser(user:Usuario|null){
        return this.httpClient.post(this.url, user)
    }


}