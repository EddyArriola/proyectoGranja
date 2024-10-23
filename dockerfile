# Etapa de construcción
FROM node:18 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Generar Prisma Client
RUN npx prisma generate

# Compilar el proyecto
RUN npm run build

# Etapa de producción
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el código compilado desde la etapa de construcción
COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY prisma ./prisma

# Instalar solo las dependencias de producción
RUN npm ci --only=production

# Exponer el puerto en el que la aplicación escucha (3000 por defecto)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:prod"]