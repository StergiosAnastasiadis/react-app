FROM node:lts-alpine as build

WORKDIR /app

COPY --chown=node:node package*.json ./
RUN npm install --omit=dev

COPY --chown=node:node . .
RUN npm run build

# USER node

FROM nginx:latest
 
COPY --from=build app/build /usr/share/nginx/html
 
EXPOSE 80