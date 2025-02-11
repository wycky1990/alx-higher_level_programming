#!/usr/bin/node

// Import the 'request' module for making HTTP requests
const request = require('request');

// Get the API URL from the command-line arguments
const apiUrl = process.argv[2];

// Make a GET request to the specified API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    // Print any error that occurs during the request
    console.error(error);
    return;
  }

  try {
    // Parse the response body as JSON
    const todos = JSON.parse(body);

    // Create an object to keep track of completed tasks by user ID
    const completedTasksCount = {};

    // Loop through each todo item in the API response
    todos.forEach(todo => {
      // Check if the task is completed
      if (todo.completed) {
        // Increment the count of completed tasks for the user ID
        if (!completedTasksCount[todo.userId]) {
          completedTasksCount[todo.userId] = 0;
        }
        completedTasksCount[todo.userId]++;
      }
    });

    // Print the number of completed tasks for each user ID
    console.log(completedTasksCount);
  } catch (parseError) {
    // Print any error that occurs while parsing the JSON
    console.error('Error parsing JSON:', parseError);
  }
});
