import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { dbService } from '../../../../../services/dbService';
import { ActivatedRoute } from '@angular/router';
import { IcreateNewRegister } from '../../../../../../backend/models/IcreateNewRegister';
import { userDbService } from '../../../../../services/userServices/userDbService,';

@Component({
  selector: 'app-wellcome-body',
  templateUrl: './wellcome-body.component.html',
  styleUrl: './wellcome-body.component.css'
})
export class WellcomeBodyComponent {

teste = new Observable<IcreateNewRegister[]>()
constructor(private dbService:dbService, private userDbService:userDbService){
  this.getDados()
}

usuario = {
  nome :''
}
  onSubmit(){
    const usuario = {
      nome : this.usuario.nome

    }
    this.userDbService.updateNome(this.usuario.nome)
    console.log(usuario)
    const usuarioCompleto = this.userDbService.getUsuarioCompleto()
    console.log(usuarioCompleto)
  }
  
  getDados(){
    this.teste = this.dbService.getDataBase()
    // console.log(this.teste)
  }
}


