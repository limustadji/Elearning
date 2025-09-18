import { Client } from "pg";

const client = new Client({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  port: 5432,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export { client, connectDB };
