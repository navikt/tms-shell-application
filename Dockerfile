FROM node:16-alpine

WORKDIR /usr/src/app

COPY dist ./dist
COPY node_modules ./node_modules
COPY server.js .
COPY package.json .
COPY index.html .

EXPOSE 8080:8080
CMD ["npm", "run", "start-express"]