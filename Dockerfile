FROM node

RUN apt install bash

WORKDIR /home/node/app

USER node

CMD ["npm install", "npm run start:prod"]
