$(document).ready(function() {
  // Function to fetch and display the translation
  function fetchTranslation() {
    const languageCode = $('#language_code').val();
    $.get(`https://www.fourtonfish.com/hellosalut/hello/?lang=${languageCode}`, function(data) {
      $('#hello').text(data.hello);
    });
  }

  // Click event handler for the translate button
  $('#btn_translate').click(fetchTranslation);

  // Keypress event handler for the input field
  $('#language_code').keypress(function(event) {
    if (event.which === 13) { // Check if the Enter key (key code 13) is pressed
      fetchTranslation();
    }
  });
});
