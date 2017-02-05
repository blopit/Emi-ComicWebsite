

$( "#show-nav" ).click(function() {
  $('.nav' ).toggle();
    getOutput()
});


function getOutput() {
     $.ajax({
         url: 'scripts/get.php',
         complete: function (response) {
             console.log(response.responseText);
         },
         error: function () {
             $('#output').html('Bummer: there was an error!');
         }
     });
     return false;
}
