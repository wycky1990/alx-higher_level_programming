#!/usr/bin/node

// Import the 'request' module for making HTTP requests
const request = require('request');

// Get the Movie ID from the command-line arguments
const movieId = process.argv[2];

// Define the URL for fetching movie details from the Star Wars API
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

// Make a GET request to the specified API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    // Print any error that occurs during the request
    console.error(error);
    return;
  }

  try {
    // Parse the response body as JSON
    const movie = JSON.parse(body);

    // Check if the movie data contains characters
    if (movie.characters) {
      // Loop through each character URL in the movie data
      movie.characters.forEach(characterUrl => {
        // Make a GET request to each character URL
        request(characterUrl, (charError, charResponse, charBody) => {
          if (charError) {
            // Print any error that occurs during the character request
            console.error(charError);
            return;
          }

          try {
            // Parse the character response body as JSON
            const character = JSON.parse(charBody);

            // Print the character name
            console.log(character.name);
          } catch (charParseError) {
            // Print any error that occurs while parsing the character JSON
            console.error('Error parsing character JSON:', charParseError);
          }
        });
      });
    }
  } catch (parseError) {
    // Print any error that occurs while parsing the movie JSON
    console.error('Error parsing movie JSON:', parseError);
  }
});
