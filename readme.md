# React App Boilerplate

This is a bare-bones starter app with some basic functionality set up to make starting your app easier. I've gone ahead and set up a dual client/server workflow where the client proxies requests to the server for ease of use.

## Setup

```bash
npm i
cd client && npm i
```

## Running (dev mode)

Client:
```bash
npm run client
```

Server:
```bash
npm run server
```

## Functionality out of-the-box:
* GraphQL back-end for Node
* React-Apollo front-end
* Socket.IO communication between server and client
* React hooks for Socket.IO
