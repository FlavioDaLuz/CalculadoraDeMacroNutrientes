import { Component } from '@angular/core';
import { userDbService } from '../../../../../services/userServices/userDbService,';

@Component({
  selector: 'app-activity-body',
  templateUrl: './activity-body.component.html',
  styleUrl: './activity-body.component.css'
})
export class ActivityBodyComponent {

  constructor(private userDbService:userDbService){}
  selecionado:string |null = null
  chanceToBlue(event: MouseEvent) {
    const elementSelected = event.target as HTMLElement;
    if(elementSelected.classList.contains('select')){
    elementSelected.style.border = 'solid 2px blue';
    elementSelected.style.color = 'blue';
  }
   
  }

  tagSelected(event:MouseEvent){
    const elementosOpcao = document.querySelectorAll('.select') as NodeListOf<HTMLElement>;
    elementosOpcao.forEach(elemento => elemento.style.border = 'none');
    elementosOpcao.forEach(elemento => elemento.style.color = 'black');
      this.chanceToBlue(event)
  }

  getText(event:MouseEvent){
    const elementSelected = event.target as HTMLElement
    if(elementSelected.classList.contains('select')){
      const textElement = elementSelected.textContent
      this.selecionado = textElement
    }
    // const textElement = elementSelected.textContent
    // console.log(textElement)
  }
  usuario = {

  }
  onSubmit(){
    const usuario ={
      atividade: this.selecionado

    }
    this.userDbService.updateNivelDeAtividadeFisica(usuario.atividade)
    const usuarioCompleto =this.userDbService.getUsuarioCompleto()
    console.log(usuarioCompleto)
  }


}
