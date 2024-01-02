import pkg from 'pg';
const { Pool } = pkg;

import { DATABASE_URL } from '../config.js';

export const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: {
        require: true,
    },
});

export default async function connectToDB(){    
    try {
        await pool.connect();
        console.log('Conectado a Neon')
    } catch (err) {
        console.log('Error de conexion a la base de datos', err)
    }
}
