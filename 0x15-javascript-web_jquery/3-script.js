// Wait for the document to be fully loaded
$(document).ready(function() {
  // Set up a click event handler on the <div> with id "red_header"
  $('#red_header').click(function() {
    // Add the class "red" to the <header> element
    $('header').addClass('red');
  });
});
