# Frankuxstein

## Getting started


### Setup the environemt

Copy the file `.env.example` and rename the new file `.env.local`, from this file you can customize the environment variables.
For instance, if you need to run the `json-server` in a different port, you can set the `JSON_SERVER_PORT` to a different value, for example:

```
JSON_SERVER_PORT=3001
REACT_APP_API_URL=http://localhost:3001
```

### Run the application

To launch the application and the json server together, run the command:

```bash
npm run dev
```

It runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

> The page will reload if you make edits. You will also see any lint errors in the console.

## Testing

### `npm run test`

Launches the tests

### `npm run test:watch`

Launches the tests in watch mode

### `npm run test:coverage`

Launches the tests and show the current coverage

## Build

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Deploy

> TODO
