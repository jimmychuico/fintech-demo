/**
 * Backend de FinTech Demo
 * ------------------------
 * Capa intermedia (API REST) desarrollada con Express.js.
 * Se conecta a la base de datos MySQL y expone endpoints accesibles desde el frontend.
 */

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware para permitir solicitudes desde el frontend
app.use(cors());
app.use(express.json());

// Configuración de conexión MySQL usando variables de entorno
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Ruta GET: devuelve todas las cuentas financieras
app.get('/api/cuentas', (req, res) => {
  db.query('SELECT * FROM cuentas', (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      res.json(results);
    }
  });
});

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`);
});
