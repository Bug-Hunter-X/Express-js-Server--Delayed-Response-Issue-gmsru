# Express.js Server - Delayed Response

This repository demonstrates a common issue in Node.js Express.js applications: delayed responses due to asynchronous operations. The initial request to the server takes 5 seconds to respond due to a `setTimeout` function in the request handler.  This can lead to poor user experience.

## Bug

The `server.js` file contains the buggy code.  The server takes 5 seconds to respond to requests to the root path ('/').

## Solution

The `server-solution.js` file provides a solution by making the response immediate if an asynchronous operation requires additional time. 