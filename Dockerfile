FROM node:17.2.0-alpine3.12

WORKDIR /Liran

COPY package*.json ./

RUN npm install

EXPOSE 3000

COPY . .

CMD [ "node", "index.js" ]