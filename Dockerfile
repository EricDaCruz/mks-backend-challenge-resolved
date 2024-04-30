FROM node

RUN apt install bash

WORKDIR /home/node/app

USER node

RUN "/bin/sh -c npm install"

CMD ["npm", "run", "start:prod"]
