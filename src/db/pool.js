import mysql from "mysql2/promise";
// import dotenv from "dotenv"; // УДАЛЕНО

// dotenv.config(); // УДАЛЕНО

// Изменяем pool, чтобы он принимал URL или, если URL нет, использовал старые параметры
const pool = mysql.createPool(process.env.DATABASE_URL || {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT, 
  waitForConnections: true,
  connectionLimit: 10,
  // Отключаем строгую проверку SSL (для безопасности, если это нужно)
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : undefined 
});

export default pool;