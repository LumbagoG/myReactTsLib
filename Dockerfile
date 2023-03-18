FROM node:18-alpine3.17 as build

WORKDIR /app
COPY .. /app

RUN npm i
RUN npm run storybook-build

FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /app/storybook-static /var/www/html/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
