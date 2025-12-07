-- Creación de la base de datos y tabla principal
-- Este script se ejecuta automáticamente al levantar el contenedor MySQL gracias al montaje /docker-entrypoint-initdb.d/init.sql.
CREATE DATABASE IF NOT EXISTS fintechdb;
USE fintechdb;

CREATE TABLE IF NOT EXISTS cuentas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  saldo DECIMAL(10,2)
);

-- Datos iniciales para mostrar en el frontend
INSERT INTO cuentas (nombre, saldo)
VALUES ('Cuenta Ahorros', 1200.50),
       ('Cuenta Corriente', 845.75),
       ('Inversión', 5000.00);
