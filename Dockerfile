FROM node

RUN apt install bash

WORKDIR /home/node/app

USER node

RUN npm install

CMD ["npm", "run", "start:prod"]
