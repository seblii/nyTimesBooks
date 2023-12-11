# Use an official Node runtime as a parent image
FROM node:21 AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Run the build script
RUN npm run build

# Production stage: Create a new stage with a smaller base image
FROM node:21-alpine

# Set default environment variables
ENV NODE_ENV=prod

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install

# Copy the built application from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run your app
CMD [ "node", "./dist/src/index.js" ]
