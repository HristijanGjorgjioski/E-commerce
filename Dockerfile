# syntax=docker/dockerfile:1.4
FROM node:16.15 as build1

WORKDIR /apps/ecommerce

COPY /client .

RUN npm i

RUN npm run build

FROM httpd:2.4.53-bullseye

WORKDIR /usr/local/apache2/htdocs

COPY --from=build1 /apps/ecommerce/build .

CMD [ "npx", "serve", "build" ]
