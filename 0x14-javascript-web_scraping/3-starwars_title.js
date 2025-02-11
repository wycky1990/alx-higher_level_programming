#!/usr/bin/node

// Import the 'request' module for making HTTP requests
const request = require('request');

// Get the movie ID from the command-line arguments
const movieId = process.argv[2];

// Construct the URL for the API request
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

// Make a GET request to the Star Wars API
request(url, (error, response, body) => {
  if (error) {
    // Print any error that occurs during the request
    console.error(error);
    return;
  }

  try {
    // Parse the response body as JSON
    const data = JSON.parse(body);

    // Print the title of the movie
    console.log(data.title);
  } catch (parseError) {
    // Print any error that occurs while parsing the JSON
    console.error('Error parsing JSON:', parseError);
  }
});
