

interface IMifflinFormula {
  sexo: string,
  peso: number,
  altura: number,
  idade: number,
  nivelDeAtividadeFisica: string
}
interface IImcFormula{
  peso: number,
  altura: number
}

export class Formulas {

  MifflinFormula({sexo, peso, altura, idade, nivelDeAtividadeFisica}: IMifflinFormula):Object{
    if(sexo === 'masculino'){
      const taxaMetabolicaBasal = (10* peso + 6.25 * altura - 5 * idade + 5)
      const caloriasNaoAtivo =  taxaMetabolicaBasal * 1.2
      const caloriasLevementeAtivo = taxaMetabolicaBasal * 1.375
      const caloriasAtivo = taxaMetabolicaBasal * 1.55
      const caloriasBastanteAtivo =  taxaMetabolicaBasal * 1.725
     

      if(nivelDeAtividadeFisica === 'Não muito ativo Passa a maior parte do dia sentado (Ex: trabalho de escritório)'){
        const caloriasTotal = taxaMetabolicaBasal * 1.2
        const caloriasAMais = caloriasTotal - taxaMetabolicaBasal
        
        return({taxaMetabolicaBasal, caloriasTotal, caloriasAMais, caloriasNaoAtivo, caloriasLevementeAtivo, caloriasAtivo, caloriasBastanteAtivo})
      } if(nivelDeAtividadeFisica === 'Levemente Ativo Passa parte do dia em pé (Ex: professor)'){
        const caloriasTotal = taxaMetabolicaBasal * 1.375
        const caloriasAMais = caloriasTotal - taxaMetabolicaBasal
        return({taxaMetabolicaBasal, caloriasTotal, caloriasAMais, caloriasNaoAtivo, caloriasLevementeAtivo, caloriasAtivo, caloriasBastanteAtivo})
      } if(nivelDeAtividadeFisica === 'Ativo Passa boa parte do dia fazendo alguma atividade fisica (Ex: garçom)'){
        const caloriasTotal = taxaMetabolicaBasal * 1.55
        const caloriasAMais = caloriasTotal - taxaMetabolicaBasal
        return({taxaMetabolicaBasal, caloriasTotal, caloriasAMais, caloriasNaoAtivo, caloriasLevementeAtivo, caloriasAtivo, caloriasBastanteAtivo})
      } if(nivelDeAtividadeFisica === 'Bastante ativo Passa a maior parte do dia fazendo atividade fisica pesada (Ex: carpinteiro)'){
        const caloriasTotal = taxaMetabolicaBasal * 1.725
        const caloriasAMais = caloriasTotal - taxaMetabolicaBasal
        return({taxaMetabolicaBasal, caloriasTotal, caloriasAMais, caloriasNaoAtivo, caloriasLevementeAtivo, caloriasAtivo, caloriasBastanteAtivo})
      }
    }
    
    if(sexo === 'feminino'){
      const taxaMetabolicaBasal = (10* peso + 6.25 * altura - 5 * idade + 5)
      const caloriasNaoAtivo =  taxaMetabolicaBasal * 1.2
      const caloriasLevementeAtivo = taxaMetabolicaBasal * 1.375
      const caloriasAtivo = taxaMetabolicaBasal * 1.55
      const caloriasBastanteAtivo =  taxaMetabolicaBasal * 1.725
      
      if(nivelDeAtividadeFisica === 'Não muito ativo Passa a maior parte do dia sentado (Ex: trabalho de escritório)'){
        const caloriasTotal = taxaMetabolicaBasal * 1.2
        const caloriasAMais = caloriasTotal - taxaMetabolicaBasal
        return({taxaMetabolicaBasal, caloriasTotal, caloriasAMais, caloriasNaoAtivo, caloriasLevementeAtivo, caloriasAtivo, caloriasBastanteAtivo})
      } if(nivelDeAtividadeFisica === 'Levemente Ativo Passa parte do dia em pé (Ex: professor)'){
        const caloriasTotal = taxaMetabolicaBasal * 1.375
        const caloriasAMais = caloriasTotal - taxaMetabolicaBasal
        return({taxaMetabolicaBasal, caloriasTotal, caloriasAMais, caloriasNaoAtivo, caloriasLevementeAtivo, caloriasAtivo, caloriasBastanteAtivo})
      } if(nivelDeAtividadeFisica === 'Ativo Passa boa parte do dia fazendo alguma atividade fisica (Ex: garçom)'){
        const caloriasTotal = taxaMetabolicaBasal * 1.55
        const caloriasAMais = caloriasTotal - taxaMetabolicaBasal
        return({taxaMetabolicaBasal, caloriasTotal, caloriasAMais, caloriasNaoAtivo, caloriasLevementeAtivo, caloriasAtivo, caloriasBastanteAtivo})
      } if(nivelDeAtividadeFisica === 'Bastante ativo Passa a maior parte do dia fazendo atividade fisica pesada (Ex: carpinteiro)'){
        const caloriasTotal = taxaMetabolicaBasal * 1.725
        const caloriasAMais = caloriasTotal - taxaMetabolicaBasal
        return({taxaMetabolicaBasal, caloriasTotal, caloriasAMais, caloriasNaoAtivo, caloriasLevementeAtivo, caloriasAtivo, caloriasBastanteAtivo})
      }
    }
    return(0)
  }

  IMCformula({peso, altura}: IImcFormula):number{
    return(peso / (altura/100 * altura/100))
  }

  MacrosFormulas(objetivo:string, caloriastotal:number):any{
    if(objetivo ===  'Perda de peso'){
      const caloriasParaSerConsumidasTotal = caloriastotal * 0.8
      const caloriasCarbo = caloriasParaSerConsumidasTotal / 3
      const macrosCarbo = caloriasCarbo / 4

      const caloriasProteina = caloriasParaSerConsumidasTotal / 3
      const macrosProteina = caloriasProteina / 4

      const caloriasGorduras = caloriasParaSerConsumidasTotal / 3
      const macrosGorduras = caloriasGorduras / 9

      return({macrosCarbo, macrosProteina, macrosGorduras, caloriasParaSerConsumidasTotal})
     
    }
    else if(objetivo === 'Manter meu peso'){
      const caloriasParaSerConsumidasTotal = caloriastotal
      const caloriasCarbo = caloriasParaSerConsumidasTotal / 3
      const macrosCarbo = caloriasCarbo / 4

      const caloriasProteina = caloriasParaSerConsumidasTotal / 3
      const macrosProteina = caloriasProteina / 4

      const caloriasGorduras = caloriasParaSerConsumidasTotal / 3
      const macrosGorduras = caloriasGorduras / 9

      return({macrosCarbo, macrosProteina, macrosGorduras, caloriasParaSerConsumidasTotal})

    } else if(objetivo === 'Ganho de peso'){
      const caloriasParaSerConsumidasTotal = caloriastotal * 1.2
      const caloriasCarbo = caloriasParaSerConsumidasTotal / 3
      const macrosCarbo = caloriasCarbo / 4

      const caloriasProteina = caloriasParaSerConsumidasTotal / 3
      const macrosProteina = caloriasProteina / 4

      const caloriasGorduras = caloriasParaSerConsumidasTotal / 3
      const macrosGorduras = caloriasGorduras / 9

      return({macrosCarbo, macrosProteina, macrosGorduras, caloriasParaSerConsumidasTotal})



    }
  }
}



//TMB (homens) = 10 X peso (kg) + 6.25 X altura (cm) - 5 x idade (anos) + 5;
//TMB (mulheres) = 10 X peso (kg) + 6.25 X altura (cm) - 5 X idade (anos) - 161.
//imc = peso / (altura * altura)
// Não muito ativo Passa a maior parte do dia sentado (Ex: trabalho de escritório)
// Levemente Ativo Passa parte do dia em pé (Ex: professor)
//Ativo Passa boa parte do dia fazendo alguma atividade fisica (Ex: garçom)
// Bastante ativo Passa a maior parte do dia fazendo atividade fisica pesada (Ex: carpinteiro)

// x * 4 = caloriasparaserconsumida /3
// x = caloriasparaserconsumidas / 3/4 512 594