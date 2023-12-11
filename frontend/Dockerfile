# Build Stage: Build the app
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build

# Production stage: Create a new stage with a smaller base image
FROM nginx:stable-alpine as production-stage
ENV NODE_ENV=prod
COPY --from=build-stage /app/dist /usr/share/nginx/html/
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

