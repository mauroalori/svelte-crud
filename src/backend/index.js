import connectToDB from './utils/postgres.js'
import app from './app.js'

import { PORT } from './config.js';

// Cuando se ejecuta la IIFE, se realiza la conexion a la base de datos y la app empieza a correr en el puerto 3000
(async function () {
    await connectToDB()
    app.listen(PORT)
    console.log('Server en puerto 3000 OK')
}());