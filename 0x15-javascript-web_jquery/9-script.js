// Wait for the document to be fully loaded
$(document).ready(function() {
  // Perform an AJAX GET request to fetch data from the URL
  $.get('https://hellosalut.stefanbohacek.dev/?lang=fr', function(data) {
    // Extract the "hello" value from the response
    const helloTranslation = data.hello;
    // Display the translation in the <div> with id "hello"
    $('#hello').text(helloTranslation);
  });
});
