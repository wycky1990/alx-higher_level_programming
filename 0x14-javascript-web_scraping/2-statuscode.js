#!/usr/bin/node

// Import the 'request' module for making HTTP requests
const request = require('request');

// Get the URL from the command-line arguments
const url = process.argv[2];

// Make a GET request to the specified URL
request(url, (error, response) => {
  if (error) {
    // Print any error that occurs during the request
    console.error(error);
    return;
  }
  // Print the status code of the response
  console.log(`code: ${response.statusCode}`);
});
