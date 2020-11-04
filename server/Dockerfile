# build stage
FROM node:lts-alpine as build

ADD . /app
WORKDIR /app
RUN npm i --production

# application runtime
FROM node:lts-alpine

COPY --from=build /app /app

WORKDIR /app

EXPOSE 3000

ENTRYPOINT ["node", "index.js"]