#!/usr/bin/node

// Import the 'request' module for making HTTP requests
const request = require('request');

// Get the API URL from the command-line arguments
const apiUrl = process.argv[2];

// Define the character ID for "Wedge Antilles"
const wedgeAntillesId = 18;

// Make a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    // Print any error that occurs during the request
    console.error(error);
    return;
  }

  try {
    // Parse the response body as JSON
    const data = JSON.parse(body);

    // Initialize a count for movies containing "Wedge Antilles"
    let count = 0;

    // Loop through each film in the API response
    data.results.forEach(film => {
      // Check if the character ID is in the film's list of characters
      if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeAntillesId}/`)) {
        count++;
      }
    });

    // Print the number of films containing "Wedge Antilles"
    console.log(count);
  } catch (parseError) {
    // Print any error that occurs while parsing the JSON
    console.error('Error parsing JSON:', parseError);
  }
});
