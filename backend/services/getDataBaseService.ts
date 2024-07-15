

import { dbConnection } from '../database/dbConnection'
import { dbconfig } from '../models/IdbConfig'


async function getDataBaseService(){
    let connection
    try{
        connection = await dbConnection(dbconfig)
        const [rows] = await connection.execute('SELECT * FROM sys.register')
        return rows
    } catch(error) {
        console.error('Erro ao executar a query', error)
        throw error
    } finally {
        if(connection) {
            await connection.end()
        }
    }
}
export {getDataBaseService}