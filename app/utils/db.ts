import { Pool } from 'pg';

let pool: Pool | undefined;

if (!pool) {
    console.log("Creating a new pool with the following database credentials:", process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_PORT)
  pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
  });
}

export async function executeQuery({ query, values = [] }: {query: string, values: never[]}) {
  try {
    console.log("Trying to access the database")
    const result = pool && await pool.query(query, values);
    console.log("Retrieved the result from the database:", result)
    return result;
  } catch (error) {
    console.error(error);
    return { error };
  }
}