

import express from 'express'
import { dbRoutes } from './routes/dbRoutes'
import { userRoutes } from './routes/userRoutes/userRoutes'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()



const allowedOrigins = '*'
const options: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
}

app.use(bodyParser.json())
app.use(cors(options))
//alo
const porta = 3131
app.use('/dbRoutes',dbRoutes)
app.use('/userRoutes', userRoutes)

app.listen(porta, ()=> {
    'servidor rodando na porta: ' + porta
})

app.get('/', (req, res) => {
    res.send('teste')
})


