# etapa de compilación
FROM node:10.20.1-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

# etapa de producción
FROM nginx:1.13.12-alpine as production-stage
COPY --from=build-stage /app/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
