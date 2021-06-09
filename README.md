# Getting Started with Start Dev Faster Boilerplate

This project was bootstrapped with [Start Dev Faster](https://github.com/YassinEldeeb/start-dev-faster).

# Highlights

- Full Stack Boilerplate like a pro
- All important scripts will be writting for you to use quickly
- Express Server setup
- Connect to Mongodb setup
- 404 & Error middlewares all setup
- .env config and initial values is setup
- React app Boilerplate exactly from npx create-react-app command.

# Usage

- Just Type in your terminal

```shell
npx start-dev-faster <project name>
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs both backend server & frontend app with concurrently in the same terminal process.\
Open [http://localhost:3000](http://localhost:3000) to view Frontend react app in the browser.
Open [http://localhost:5000](http://localhost:5000) to view Backend express server in the browser.

### `npm run client`

Runs the Frontend react app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run server`

Runs the Backend express server in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `npm run db`

Runs Mongodb server to start connecting it with express server.\
Modify the 'MONGO_URI' environment variable in .env to the right path to mongod.exe and data folder path.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
