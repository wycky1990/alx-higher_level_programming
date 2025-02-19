// Wait for the document to be fully loaded
$(document).ready(function() {
  // Perform an AJAX GET request to fetch data from the URL
  $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
    // Get the list of movies from the response
    const movies = data.results;
    // Iterate through the movies and append each title to the <ul> with id "list_movies"
    movies.forEach(function(movie) {
      $('#list_movies').append(`<li>${movie.title}</li>`);
    });
  });
});
