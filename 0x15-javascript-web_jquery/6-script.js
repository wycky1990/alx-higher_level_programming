// Wait for the document to be fully loaded
$(document).ready(function() {
  // Set up a click event handler on the <div> with id "update_header"
  $('#update_header').click(function() {
    // Change the text of the <header> element to "New Header!!!"
    $('header').text('New Header!!!');
  });
});
