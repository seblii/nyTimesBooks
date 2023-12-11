## NY Times Bestsellers browser

You can browser bestseller lists and books using NY Times Books API.
This app contains backend and frontend app. See details in sub-folders.
This is experimental project and doesn't have real world use case.

## Initial Setup

Before you begin, ensure you have set the necessary environment variables in the `.env` file.
You will need the following variables:

- `NYT_API_KEY`: Your personal key for accessing the New York Times API.

## Starting the app in containers with docker-compose

Make sure you've set NYT_API_KEY in your .env -file in the "Initial setup" phase.
Then use following command:

```bash
docker-compose up --build
```
