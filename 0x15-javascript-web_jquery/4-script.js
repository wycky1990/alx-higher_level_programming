// Wait for the document to be fully loaded
$(document).ready(function() {
  // Set up a click event handler on the <div> with id "toggle_header"
  $('#toggle_header').click(function() {
    // Check the current class of the <header> element
    if ($('header').hasClass('red')) {
      // If the class is 'red', remove it and add 'green'
      $('header').removeClass('red').addClass('green');
    } else {
      // If the class is not 'red' (i.e., it is 'green' or no class), remove 'green' and add 'red'
      $('header').removeClass('green').addClass('red');
    }
  });
});
