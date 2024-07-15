

import mysql from 'mysql2/promise'
import { Idbconfig } from '../models/IdbConfig'





async function dbConnection(config:Idbconfig):Promise<any>{
    let connection
    try{
        connection = await mysql.createConnection(config)
    }
    catch(error){
        console.error('Erro ao conectar com a DataBase', error)
    } finally{
        if(connection){
            await connection.end()
            return await mysql.createConnection(config)
        }
    }
}

export{dbConnection}