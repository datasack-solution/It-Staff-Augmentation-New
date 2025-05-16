ARG NODE_VERSION=18.0.0
FROM node:${NODE_VERSION}-alpine


# create app directory
WORKDIR /usr/src/app/itstaffaugmentation

COPY package*.json ./

RUN npm install

RUN npm build

COPY src/ ./src/

EXPOSE 8081

CMD [ "node", "next start" ]