## NY Times Bestesellers browser

This backend simplifies NY Times API to use with specifically designed frontend app.
This application is experimental project and doesn't have real world use case.

## Initial Setup

Before you begin, ensure you have set the necessary environment variables in the `.env` file. You will need the following variables:

- `PORT`: The port number where the application's API will be exposed.
- `NYTIMES_API_KEY`: Your personal key for accessing the New York Times API.

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

This action creates a TypeScript-based client that you can use to integrate with your application's API. Check configuration in ./config/swaggerConfig.js

## Running tests

```bash
npm run test
```