import { pool } from "../utils/postgres.js";

export const getListas = async (_req, res) => {
    pool.query('SELECT * FROM playing_with_neon', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}