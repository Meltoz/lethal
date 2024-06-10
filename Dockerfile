# Use an official Node.js runtime as a parent image
FROM node:latest as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm ci --silent
RUN npm install react-scripts@5.0.1 -g --silent
COPY ./ .
RUN npm run build

# production environment
FROM nginx:latest
RUN mkdir /app
COPY --from=build /app/build /usr/share/nginx/html