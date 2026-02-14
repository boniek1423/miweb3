// api/productos.js
import { db } from '@vercel/postgres';

export default async function handler(request, response) {
  const client = await db.connect();

  try {
    // En SQL, las tablas suelen ser minúsculas. 
    // Asegúrate de que coincida con la tabla que crees en el dashboard de Vercel.
    const { rows } = await client.sql`SELECT * FROM productos;`;
    
    return response.status(200).json({ productos: rows });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}

// /api/productos.js

const { db } = require('@vercel/postgres');

module.exports = async (req, res) => {
  try {
    // Esto crea la tabla si no existe (solo para probar)
    // await sql`CREATE TABLE IF NOT EXISTS productos ( nombre VARCHAR(255), precio DECIMAL )`;

    // Consulta para traer los productos
    const { rows } = await sql`SELECT * FROM productos`;
    
    return res.status(200).json({ productos: rows });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};