# build stage
FROM node:lts-alpine as build

ADD . /app
WORKDIR /app
RUN npm i --production

# application runtime
FROM node:lts-alpine

COPY --from=build /app /app

WORKDIR /app

ENTRYPOINT ["node", "index.js"]