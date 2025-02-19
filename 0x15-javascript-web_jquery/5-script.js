// Wait for the document to be fully loaded
$(document).ready(function() {
  // Set up a click event handler on the <div> with id "add_item"
  $('#add_item').click(function() {
    // Create a new <li> element with the text "Item"
    const newItem = $('<li>Item</li>');
    // Append the new <li> element to the <ul> with class "my_list"
    $('ul.my_list').append(newItem);
  });
});
