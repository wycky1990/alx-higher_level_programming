// Wait for the document to be fully loaded
$(document).ready(function() {
  // Perform an AJAX GET request to fetch data from the URL
  $.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
    // Extract the character name from the response
    const characterName = data.name;
    // Display the character name in the <div> with id "character"
    $('#character').text(characterName);
  });
});
