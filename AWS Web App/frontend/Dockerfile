FROM node:18-alpine

WORKDIR /app

# Instala as dependências
COPY package*.json ./
RUN npm install

# Copia o código e compila a aplicação
COPY . .
RUN npm run build

# Expõe a porta 8080 e inicia o Next.js
EXPOSE 8080
ENV PORT 8080
CMD ["npm", "start"]