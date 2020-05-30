FROM node:latest

WORKDIR /app

COPY backend ./backend

COPY client ./client

RUN ls 

RUN cd client/ && npm install

# CMD yarn --cwd ./client/ start && node backend/server.js

CMD cd ./client && yarn run start

# CMD [ '/bin/ls/client' , yarn start]