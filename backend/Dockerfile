# 1. Usar una imagen oficial liviana de Node.js
FROM node:20-alpine

# 2. Definir el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar los archivos de dependencias e instalar
COPY package*.json ./
RUN npm install --only=production

# 4. Copiar el resto del código fuente del backend
COPY . .

# 5. Exponer el puerto en el que corre la app
EXPOSE 3000

# 6. Comando para arrancar el servidor
CMD ["npm", "start"]