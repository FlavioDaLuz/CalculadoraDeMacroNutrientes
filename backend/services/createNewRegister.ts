import { dbConnection } from "../database/dbConnection";
import { IcreateNewRegister } from "../models/IcreateNewRegister";
import { dbconfig } from "../models/IdbConfig";





async function createNewRegister(register:IcreateNewRegister| any){
    let connection
    try{
        connection = await dbConnection(dbconfig)
        const email = register.email
        const senha = register.senha
        const endereco= register.endereco
        const estado = register.estado
        const cidade = register.cidade
        const [row] = await connection.execute(`insert into register 
            (email, senha, endereco, estado, cidade) 
            values ('${email}', '${senha}', '${endereco}', '${estado}', '${cidade}')`)
            return row
    } catch(error){
        console.error('Erro ao executar o novo registro', error)
    } finally {
        if(connection){
            await connection.end()
        }
    }
}

export{createNewRegister}