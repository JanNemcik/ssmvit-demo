# build stage
FROM node:lts-alpine as build

ADD ./ /app
WORKDIR /app

# angular build process
RUN npm i -D @angular/cli
RUN npm i --production
RUN node_modules/.bin/ng build --prod

# serving web app
FROM nginx

# copying built app into default nginx folder
COPY --from=build /app/dist/ssmvit-demo /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
