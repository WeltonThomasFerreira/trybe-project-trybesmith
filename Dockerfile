FROM node:16-alpine AS backend

WORKDIR /app

COPY package.json .

RUN ["npm", "install"]

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]