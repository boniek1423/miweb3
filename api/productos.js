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