FROM node:18.0.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . ./
RUN npm run build
CMD cp -r build result_build
