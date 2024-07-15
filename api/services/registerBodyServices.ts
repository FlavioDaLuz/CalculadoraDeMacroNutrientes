import { AppModule } from "../src/app/app.module";
import { Component} from '@angular/core';
import { IcreateNewRegister } from '../../backend/models/IcreateNewRegister'
import { AppComponent } from "../src/app/app.component";


export class registerBodyService extends AppComponent{

    
    postRegister(usuario:IcreateNewRegister){
        this.dbService.createNewRegister(usuario).subscribe(()=> this.getRegisterUsers())
      }
      usuario = {
        email:'',
        senha:'',
        endereco:'',
        estado:'',
        cidade:''
      }
      boolean = false
      onSubmit(){
        const usuario = {
          email: this.usuario.email,
          senha:this.usuario.senha,
          endereco:this.usuario.endereco,
          estado:this.usuario.estado,
          cidade:this.usuario.cidade
        };
        if(usuario.email == '' || usuario.senha == '' || usuario.endereco == '' || usuario.estado == '' || usuario.cidade == ''){
         this.boolean= true
        
         return;
        
        }else{
    this.boolean =false
        this.postRegister(usuario)}
      }
    
      
}


