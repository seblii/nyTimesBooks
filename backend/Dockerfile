FROM node:21 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage: Create a new stage with a smaller base image
FROM node:21-alpine
ENV NODE_ENV=prod
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY --from=builder /usr/src/app/dist ./dist
EXPOSE 3000
CMD [ "node", "./dist/src/index.js" ]
