import { dbConnection } from "../database/dbConnection"
import { dbconfig } from "../models/IdbConfig"





async function createNewUserService(user:any){
    let connection
    try{
        connection = await dbConnection(dbconfig)
        const nome = user.nome
        const objetivo = user.objetivo
        const nivelDeAtividadeFisica = user.nivelDeAtividadeFisica
        const sexo = user.sexo
        const idade = user.idade
        const altura = user.altura
        const peso = user.peso
        const metaPeso = user.metaPeso
        const [row] = await connection.execute(`insert into user
            (nome, objetivo, nivelDeAtividadeFisica, sexo, idade, altura, peso, metaPeso)
            values(
            '${nome}','${objetivo}','${nivelDeAtividadeFisica}','${sexo}','${idade}',
            '${altura}','${peso}','${metaPeso}'
            )`)
            return row
    } catch(error){
        console.error('Erro ao executar o novo User', error)
    }finally{
        if(connection){
            await connection.end()
        }
    }
}
export{createNewUserService}

// insert into user
// (nome , objetivo, nivelDeAtividadeFisica, sexo, idade, altura, peso, metaPeso)
// values
// ('flavio', 'perda de peso','pouco ativo', 'masc', '21', '183cm', '91', '80')