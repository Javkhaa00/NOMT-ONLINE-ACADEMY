FROM node:latest

WORKDIR /app

COPY ./ ./

RUN yarn install

RUN npm rebuild node-sass --force

# RUN npm rebuild node-sass

EXPOSE 3000

CMD yarn run start