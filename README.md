# POW
A very simple proof of work implementation for nodejs

### How to use
It is very simple and straight forward. Please check the `index.js` file to find how to call the pow child process.
You can also call `npm start` from the terminal to test it first.

**Note:** POW is an expensive computational task. This is why we have to to call it as a child process to prevent event loop break.
