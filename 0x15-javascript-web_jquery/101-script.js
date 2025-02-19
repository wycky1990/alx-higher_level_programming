// Wait for the document to be fully loaded
$(document).ready(function() {
  // Add a new item to the list when #add_item is clicked
  $('#add_item').click(function() {
    $('.my_list').append('<li>Item</li>');
  });

  // Remove the last item from the list when #remove_item is clicked
  $('#remove_item').click(function() {
    $('.my_list li').last().remove();
  });

  // Clear all items from the list when #clear_list is clicked
  $('#clear_list').click(function() {
    $('.my_list').empty();
  });
});
