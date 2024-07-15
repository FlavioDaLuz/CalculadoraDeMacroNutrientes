import { Component, viewChild } from '@angular/core';
import { IcreateNewRegister } from '../../../../../../backend/models/IcreateNewRegister'
import { AppComponent } from '../../../app.component';


@Component({
  selector: 'app-register-body',
  templateUrl: './register-body.component.html',
  styleUrl: './register-body.component.css'
})
export class RegisterBodyComponent extends AppComponent {

  existEmail?: boolean;
  boolean = false
  postRegister(usuario: IcreateNewRegister) {
    this.dbService.createNewRegister(usuario).subscribe(() => this.getRegisterUsers())
  }

  usuario = { email: '', senha: '', endereco: '', estado: '', cidade: ''}
  onSubmit() {
    const usuario = {
      email: this.usuario.email,
      senha: this.usuario.senha,
      endereco: this.usuario.endereco,
      estado: this.usuario.estado,
      cidade: this.usuario.cidade
    };
     
      this.verifyIfEmailAlreadyExists(usuario.email)
      this.postRegister(usuario)
      this.sendUserToLoginPage()
  }

  verifyTheFields(usuario:any){
    if (usuario.email == '' || usuario.senha == '' || usuario.endereco == '' || usuario.estado == '' || usuario.cidade == '') {
     return this.boolean = true;
  } else {
   return this.boolean = false
  }
  }
  verifyIfEmailAlreadyExists(email: any) {
    this.registers.subscribe(
      (dados) => {
        for (const register of dados) {
          if ( register.email === `${email}`) {
            console.log('email existente')
            this.existEmail = true
            break
          } else {
            console.log('email não existente')
           this.existEmail = false
          }
        }
      },
      (error) => {
        console.error('Erro:', error);
      },
    )
  }

  sendUserToLoginPage(){
    if(this.verifyTheFields(this.usuario) === false && this.existEmail === false){
      this.goToLoginPage()
    }
  }
}

// this.goToWellcomePage()