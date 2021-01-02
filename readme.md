# React App Boilerplate

This is a boilerplate setup for a React app with a Node.js back-end with a pre-configured GraphQL API with Websocket subscriptions set up.

## Features

* React development server
* Express back-end
* Apollo GraphQL server with an example schema set up
* GraphQL subscriptions set up and working out-of-the-box
* [dotenv-flow](https://www.npmjs.com/package/dotenv-flow) for both server and client
* Script to run back-end with `nodemon` and front-end with `react-scripts` for hot-reloading on both sides
* One simple script to compile a production client build and serve it from express

## Development

First, clone this repo and `cd` into the directory. I use the [asdf Version Manager](https://asdf-vm.com/) to manage my runtime environments. Once in the directory, just run `asdf install` to ensure that you have the right runtimes. If you don't use asdf, just check out `.tool-versions` for the runtimes that this project uses.

Then, run `npm run setup` to install dependencies (this is just `npm i` in both dirs, but I added a script to make it easier).

**(Optional):** Once you have the right runtimes, copy `.env.development` in both the project root and in `client` to a `.env.development.local` for each and put any environment variables you wish to override in the new files.

To run the development stack, run `npm run server` in one tab/pane/terminal and `npm run client` in another. Both will hot-reload whenever you change any files, so no need to restart them unless you change the environment variables.

## Production

Make sure you have configured your production environment in both `.env.production.local` and `client/.env.production.local` (you will have to create these), then just run `npm run production` to compile a production build and run the full stack. Note that you won't have to run the React dev server anymore since the static bundle built by the React stack will be served statically from the same express server that runs the GraphQL endpoint.
