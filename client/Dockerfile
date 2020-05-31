FROM node:latest

WORKDIR /app

COPY ./ ./

# RUN mkdir -p node_modules/node-sass/vendor/linux-x64-51
# RUN curl -L https://github.com/sass/node-sass/releases/download/v4.5.0/linux-x64-51_binding.node -o node_modules/node-sass/vendor/linux-x64-51/binding.node

# RUN npm install

# RUN yarn --pure-lockfile

RUN yarn install

# RUN ls

EXPOSE 3000

CMD yarn start