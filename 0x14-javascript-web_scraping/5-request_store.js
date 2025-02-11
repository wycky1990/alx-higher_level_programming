#!/usr/bin/node

// Import the 'request' module for making HTTP requests
const request = require('request');
// Import the 'fs' module for file system operations
const fs = require('fs');

// Get the URL and file path from the command-line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    // Print any error that occurs during the request
    console.error(error);
    return;
  }

  // Write the response body to the specified file
  fs.writeFile(filePath, body, 'utf8', (err) => {
    if (err) {
      // Print any error that occurs while writing the file
      console.error(err);
    }
  });
});
