<h1 align="center">Start Dev Faster
<p align="center"><img src="/images/Logo.png"/></p></h1>

# Start Dev Faster Boilerplates Project Structure

- Full Stack
  <img src="/images/fullstack.png"/>

- Backend

<img src="/images/backend.png"/>

- Frontend

<img src="/images/frontend.png"/>

# Highlights

- Full Stack Boilerplate like a pro
- All important scripts will be written for you to use quickly
- Express Server setup
- Connect to Mongodb with mongoose setup
- 404 & Error middlewares all setup
- .env config and initial values is setup
- React app Boilerplate exactly from npx create-react-app command.

# Usage

Just Type in your terminal

```shell
$ npx start-dev-faster <project name>
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

- Runs both backend server & frontend app with concurrently in the same terminal process(Full Stack) or the Server only if it's(backend).\
  - Open [http://localhost:3000](http://localhost:3000) to view Frontend react app in the browser.
  - Open [http://localhost:5000](http://localhost:5000) to view Backend express server in the browser.

### `npm run client`

- Runs the Frontend react app in the development mode.\
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run server`

- Runs the Backend express server in the development mode.\
  Open [http://localhost:5000/api](http://localhost:5000/api) to ensure that the api is running.

### `npm run db`

- Runs Mongodb server to start connecting it with express server.\
  Modify the 'MONGO_URI' environment variable in .env to the right path to mongod.exe and data folder path.
- You must edit the npm run db script to the right path to your mongod.exe and mongodb-data folder

### `npm run start`

Runs the Backend express server in the production mode
