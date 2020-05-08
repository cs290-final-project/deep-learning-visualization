# DO THIS BEFORE STARTING NERDS

To avoid styling differences in how we all code read this article and setup VSCode with prettier so that we all adhere
to the same coding standard! Note: Just read up to the section where VSCode is setup, ESLint is a "Bonus"

[How to make VS Code work with ESLint, TypeScript, and Prettier](https://medium.com/app-sapiens/how-to-make-vs-code-work-with-eslint-typescript-and-prettier-3deca7a28cb8)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Note: All React files have been moved to /client.

## Running the backend

start backend for development.
###    `npm run server` 

You should get a message that says 'Connected to Database' in the console if your computer correctly connected to MongoDB Atlas. I have whitelisted your IPs so it should automatically authenticate from the provided key in config/key.js when you run the server.

## Modify Objects Structure stored in DB
To modify the structure of the objects that will be stored in the database go to /models/item.js. This file represents the structure of the JSON objects that are posted. After changing the structure here, you should change it in the API itself that sends, deletes, and receives JSON files at /routes/api/items.js.

## Interacting with backend:
The api stored in /routes/api/items.js allows for the following functionality:

### GET localhost:5000/api/item 
will return all the visualizations in the array (currently just returns id, name, date)

### POST localhost:5000/api/item 
will store the json object in the database. 

### DELETE localhost:5000/api/item/:id
id number will specify which visualization to delete and it will be removed.


## React

NOTE: currently React is not connected to the backend so to directly interact with React run in the project directory /client as you would with any normal react app. 

### `npm start`



Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
