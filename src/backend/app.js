import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

// Importacion de rutas de colegios
import todosRoutes from './routes/todos.routes.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) 

app.use(todosRoutes)

export default app
