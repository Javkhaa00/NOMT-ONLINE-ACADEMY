FROM node:latest

WORKDIR /app

COPY ./ ./

RUN yarn install --force

EXPOSE 5000

CMD node server.js