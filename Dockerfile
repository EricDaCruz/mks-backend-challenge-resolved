FROM node

RUN apt install bash

WORKDIR /home/node/app

USER node

CMD [".docker/start.sh"]
