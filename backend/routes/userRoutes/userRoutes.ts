import { Router } from "express";
import { getDataBaseService } from "../../services/getDataBaseService";
import { getUserDataBaseService } from "../../services/getUserDataBaseService";
import { createNewUserService } from "../../services/createNewUser";
const userRoutes = Router()


userRoutes.get('/', async(req, res)=>{
    try{
        const results = await getUserDataBaseService()
        res.json(results)
    } catch(error){
        res.status(500).send({error: 'Erro ao buscar dados de User'})
    }
})

const teste = {
    nome:'teste',
    objetivo:'ganho de peso',
    nivelDeAtividadeFisica:'moderado',
    sexo:'masc',
    idade:'22',
    altura:'150cm',
    peso:'88',
    metaPeso:'90'
}

userRoutes.post('/', async(req, res)=> {
    const user = req.body
    try{
        const result = await createNewUserService(user)
        // console.log(user)
        res.json(result)
    } catch(error){
        console.error('erro', error)
    }
})










export {userRoutes}