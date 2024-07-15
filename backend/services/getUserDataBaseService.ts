import { dbConnection } from "../database/dbConnection";
import { dbconfig } from "../models/IdbConfig";


async function getUserDataBaseService(){
    let connection
    try{
        connection = await dbConnection(dbconfig)
        const [rows] = await connection.execute('SELECT * FROM sys.user')
        return rows
    } catch(error){
        console.error('Erro ao executar a query da tabela user', error)
        throw error
    } finally{
        if(connection){
            await connection.end()
        }
    }
}

export{getUserDataBaseService}