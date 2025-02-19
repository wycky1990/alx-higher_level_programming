// Wait for the document to be fully loaded
$(document).ready(function() {
  // Attach a click event handler to the translate button
  $('#btn_translate').click(function() {
    // Get the value from the input field
    const languageCode = $('#language_code').val();
    // Perform an AJAX request to fetch the translation
    $.get(`https://www.fourtonfish.com/hellosalut/hello/?lang=${languageCode}`, function(data) {
      // Update the #hello div with the translated text
      $('#hello').text(data.hello);
    });
  });
});
