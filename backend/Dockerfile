# Imagen base oficial de Node.js
FROM node:20

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Comando para iniciar el backend
CMD ["npm", "start"]

# Este Dockerfile sigue buenas prácticas: separación de pasos, caché de dependencias y claridad en los comandos.