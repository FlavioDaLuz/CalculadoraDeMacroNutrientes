import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { userDbService } from '../../../../../services/userServices/userDbService,';
import { Formulas } from '../../../../../services/userServices/formulas';

@Component({
  selector: 'app-results-body',
  templateUrl: './results-body.component.html',
  styleUrl: './results-body.component.css'
})
export class ResultsBodyComponent implements OnInit{
  constructor(public userDbService:userDbService){}
  buttonPress:boolean = false
  user = {
    nome:'',
    sexo:'',
    idade:'',
    altura:'',
    peso:'',
    objetivo:'',
    nivelDeAtividadeFisica:'',
    imc:<any>'0',
    caloriasDoUsuario:<any>'0',
    caloriasTotal:<any>'0',
    caloriasBasal:<any>'0',
    caloriasNaoAtivo:<any>'0',
    caloriasLementeAtivo:<any>'0',
    caloriasAtivo:<any>'0',
    caloriasBastanteAtivo:<any>'0',
    macrosDoUsuario:<any>'0',
    caloriasParaObjetivo:<any>'0',
    proteinas:<any>'0',
    carboidratos:<any>'0',
    gorduras:<any>'0',

  }


  calc(){
    this.buttonPress = true
  }

 
  getUserDb(){
    const usuarioCompleto:any = this.userDbService.getUsuarioCompleto()
    console.log(usuarioCompleto)
    this.user.nome = usuarioCompleto.nome
    this.user.idade = usuarioCompleto.idade
    this.user.sexo = usuarioCompleto.sexo
    this.user.altura = usuarioCompleto.altura
    this.user.peso = usuarioCompleto.peso 
    this.user.nivelDeAtividadeFisica = usuarioCompleto.nivelDeAtividadeFisica
    this.user.objetivo = usuarioCompleto.objetivo
  }
  ngOnInit(): void {
    this.getUserDb()
    const formulas = new Formulas()
   
    this.user.caloriasDoUsuario =  formulas.MifflinFormula(
      {sexo: this.user.sexo,
        peso: Number(this.user.peso),
        altura: Number(this.user.altura),
        idade: Number(this.user.idade),
        nivelDeAtividadeFisica: this.user.nivelDeAtividadeFisica
      })
      this.user.caloriasTotal = this.user.caloriasDoUsuario.caloriasTotal.toFixed(0)
      this.user.caloriasBasal = this.user.caloriasDoUsuario.taxaMetabolicaBasal.toFixed(0)
      this.user.caloriasNaoAtivo = this.user.caloriasDoUsuario.caloriasNaoAtivo.toFixed(0)
      this.user.caloriasLementeAtivo = this.user.caloriasDoUsuario.caloriasLevementeAtivo.toFixed(0)
      this.user.caloriasAtivo = this.user.caloriasDoUsuario.caloriasAtivo.toFixed(0)
      this.user.caloriasBastanteAtivo = this.user.caloriasDoUsuario.caloriasBastanteAtivo.toFixed(0)
   
     
      this.user.imc = formulas.IMCformula({
        peso: Number(this.user.peso),
        altura: Number(this.user.altura)}).toFixed(1)

        this.user.macrosDoUsuario = formulas.MacrosFormulas(this.user.objetivo, this.user.caloriasTotal)
        this.user.carboidratos = this.user.macrosDoUsuario.macrosCarbo.toFixed(0)
        this.user.proteinas = this.user.macrosDoUsuario.macrosProteina.toFixed(0)
        this.user.gorduras = this.user.macrosDoUsuario.macrosGorduras.toFixed(0)
        this.user.caloriasParaObjetivo = this.user.macrosDoUsuario.caloriasParaSerConsumidasTotal

  }
}



// 580 580 576