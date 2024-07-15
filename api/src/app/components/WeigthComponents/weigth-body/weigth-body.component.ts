import { Component } from '@angular/core';
import { userDbService } from '../../../../../services/userServices/userDbService,';
import { createNewUserService } from '../../../../../services/userServices/createNewUserService';

@Component({
  selector: 'app-weigth-body',
  templateUrl: './weigth-body.component.html',
  styleUrl: './weigth-body.component.css'
})
export class WeigthBodyComponent {

  postUser(usuario:any){
    this.userDbService.createNewUser(usuario).subscribe(()=> this.userDbService.getDataBase())
  }
constructor(private userDbService:userDbService){}

  usuario = {
    sexo:'',
    idade:'',
    altura:'',
    peso:'',
    pesoMeta:''
  }

  onSubmit(){
    const usuario = {
      sexo:this.usuario.sexo,
      idade: this.usuario.idade,
      altura:this.usuario.altura,
      peso:this.usuario.peso,
      pesoMeta:this.usuario.pesoMeta
    }
    this.userDbService.updateSexo(this.usuario.sexo)
    this.userDbService.updateIdade(this.usuario.idade)
    this.userDbService.updateAltura(this.usuario.altura)
    this.userDbService.updatePeso(this.usuario.peso)
    this.userDbService.updateMetaPeso(this.usuario.pesoMeta)

    const usuarioCompleto = this.userDbService.getUsuarioCompleto()
    console.log(usuarioCompleto)
    this.postUser(usuarioCompleto)
   
  }

}
