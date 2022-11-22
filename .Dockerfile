FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

RUN npm run build

# Bundle app source
COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]