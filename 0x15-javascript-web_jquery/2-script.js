// Wait for the document to be fully loaded
$(document).ready(function() {
  // Set up a click event handler on the <div> with id "red_header"
  $('#red_header').click(function() {
    // Change the text color of the <header> element to red
    $('header').css('color', '#FF0000');
  });
});
