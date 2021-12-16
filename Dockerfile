FROM node:14-alpine

WORKDIR /usr/src/app

COPY index.html .
COPY package.json .
COPY server.js .
COPY dist .
COPY node_modules .

EXPOSE 8080:8080
CMD ["npm", "run", "start-express"]