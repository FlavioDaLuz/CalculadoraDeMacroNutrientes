import { Component, booleanAttribute } from '@angular/core';
import { userDbService } from '../../../../../services/userServices/userDbService,';

@Component({
  selector: 'app-objective-body',
  templateUrl: './objective-body.component.html',
  styleUrl: './objective-body.component.css'
})
export class ObjectiveBodyComponent {

  constructor(private userDbService:userDbService){}
  perdaDePeso:string = 'Perda de peso'
  manterPeso:string = 'Manter meu peso'
  ganhoPeso:string = 'Ganho de peso'
  selecionado: string | null = null


  onSubmit(){
    const usuario ={
      objetivo: this.selecionado
    }
    // console.log(usuario)
    this.userDbService.updateObjetivo(usuario.objetivo)
    const usuarioCompleto =this.userDbService.getUsuarioCompleto()
    console.log(usuarioCompleto)

  }
  

 chanceToBlue(event: MouseEvent) {
    const elementSelected = event.target as HTMLElement;
    elementSelected.style.border = 'solid 2px blue';
    // console.log(elementSelected.textContent)   
    this.selecionado = elementSelected.textContent
  }

  tagSelected(event:MouseEvent){
    const elementosOpcao = document.querySelectorAll('.select') as NodeListOf<HTMLElement>;
    elementosOpcao.forEach(elemento => elemento.style.border = 'none');
      this.chanceToBlue(event)

  }

 
}
