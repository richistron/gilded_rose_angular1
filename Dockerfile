FROM node:10.9.0

WORKDIR /app

COPY . /app

RUN ls

RUN npm install

RUN npm run webpack

CMD npm start
