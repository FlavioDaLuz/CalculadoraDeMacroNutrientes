import { Router } from "express"
import { getDataBaseService } from "../services/getDataBaseService"
import { createNewRegister } from "../services/createNewRegister"


const dbRoutes = Router()



dbRoutes.get('/', async(req, res)=> {
    try{
        const results = await getDataBaseService()
        res.json(results)
    } catch(error) {
        res.status(500).send({error: 'Erro ao buscar dados'})
    }
})

dbRoutes.post('/', async(req, res)=> {
    const register = req.body
    
    try{
        let hasEmptyField = false
        for(const property in register ){
            if(register[property]=== ''){
                hasEmptyField = true
                break
            }
        }
        if(hasEmptyField){
            console.log('Has emty field')
        } else{
        const result = await createNewRegister(register)
        res.json(result)}
    } catch(error){
        console.error('erro', error)
    }
})



export {dbRoutes}