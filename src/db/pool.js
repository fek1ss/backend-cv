import mysql from "mysql2/promise";

// pool.js будет использовать полную строку подключения (URL)
const pool = mysql.createPool(process.env.MYSQL_URL || {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT, 
  waitForConnections: true,
  connectionLimit: 10,
  // Мы убрали SSL, чтобы устранить ошибки сертификатов:
  // ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : undefined 
});

export default pool;