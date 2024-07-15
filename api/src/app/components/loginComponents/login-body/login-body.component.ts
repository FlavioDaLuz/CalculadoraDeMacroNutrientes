import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styleUrl: './login-body.component.css'
})
export class LoginBodyComponent extends AppComponent {
  
  usuario = { email: '', senha: ''}
  incompatibleEmailOrPassword?: boolean;
  emptyFields = false
  userDoNotExists?: boolean

onSubmit(){
    const usuario = {
      email: this.usuario.email,
      senha: this.usuario.senha
    }
    this.verifyTheFields(usuario)
   this.verifyEmailAndPassword(usuario.email, usuario.senha)
  }


  verifyEmailAndPassword(email?: any, passoword?:any){
    this.registers.subscribe(
      (dados:any) => {
        const array = []
        for (const register of dados) {
          array.push(register)
        }
        const [user]:any = array.filter((user)=> user.email === email)
        if(!user){
          console.log('usuario nao existe')
          this.userDoNotExists = true
        }
        else if(user.email === email && user.senha === passoword){
          console.log('compativel email e senha')
          this.goToWellcomePage()
        } else {
          console.log('email ou senha nao compativeis')
          this.incompatibleEmailOrPassword = true
        }
        
      },
      (error) => {
        console.error('Erro:', error);
      },
    )
  }

  verifyTheFields(usuario:any):boolean{
    if (usuario.email == '' || usuario.senha == ''){
      this.emptyFields = true;
     return(true)
  } else {
    this.emptyFields = false
    return (false)
  }
  }


  goToWellcomePage1(){
    window.location.assign('/wellcome')
  }
  // verifyPassword(){
  //   if(this.verifyTheFields(this.usuario) === false && this.noEmailRegister === false){
  //     this.registers.subscribe(
  //       (dados:any) =>{
  //         for(const register of dados){
  //           console.log(register)
  //         }
  //       }
  //     )
  //   }
  // }


}

