FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]