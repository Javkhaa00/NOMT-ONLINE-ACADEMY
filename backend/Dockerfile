FROM node:12.17.0

WORKDIR /app

COPY ./ ./

RUN yarn install

EXPOSE 5000

CMD node server.js