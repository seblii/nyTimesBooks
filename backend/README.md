## NY Times Bestsellers browser

This backend simplifies NY Times API to use with specifically designed frontend app.
This application is experimental project and doesn't have real world use case.

## Starting the app in container

```bash
docker build -t bestsellers-backend .
docker run --name bestsellers-backend -p 3000:3000 -e PORT=3000 -e NYT_API_KEY=[your_api_key] bestsellers-backend
```

## Initial Setup

Before you begin, ensure you have set the necessary environment variables in the `.env` file. You will need the following variables:

- `PORT`: The port number where the application's API will be exposed.
- `NYTIMES_API_KEY`: Your personal key for accessing the New York Times API.
- `NODE_ENV`: dev or prod

## Starting the app

To start the application in development mode, use the following command:

```bash
npm run start-dev
```

To start the application in production mode, use the following command:

```bash
npm run start
```

## Generating TypeScript Client

You can generate a TypeScript client for the API using the following command:

```bash
npm run generateTypeScriptClient
```

This action creates a TypeScript-based client that you can use in frontend. Check configuration in ./config/swaggerConfig.js

## Running tests

```bash
npm run test
```

## Generate NY Times API

This command generates client for NY Times Books API. Generation is based on OpenApi spec published by NY Times.
This client is used by this backend application. Use following command if you need to update the client:

```
bash
npm run generateNyTimesClient
```
