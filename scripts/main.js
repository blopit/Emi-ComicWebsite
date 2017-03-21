var currentIndex = -1;
var limit = false;


$(document).ready(function() {

});

$( document ).ready(function() {
    getOutput();
});


$("#show-nav").click(function () {
    $('.nav').toggle();
});

function createElementsFromJSON(json, parent) {
    for (var i in json) {
        var object = json[i];
        console.log(object);

        var container = document.getElementById('');

            var post = "<div class='post shadow'><h1 class='post-title'>"
                    + object["title"]
                    + "</h1>"
                    + object["content"]
                    + "</div>";

        parent.append(post);
    }
}

function getOutput() {
    currentIndex++;
    $.ajax({
        url: 'scripts/get.php?page=' + currentIndex,
        complete: function (response) {
            console.log(response.responseText);
            if (response.responseText !== '0 results') {

                var json = JSON.parse(response.responseText);
                createElementsFromJSON(json, $("#post-container"));
                checkShouldLoad()
            } else {
                limit = true;
            }
        },
        error: function () {
            $('#output').html('Bummer: there was an error!');
        }
    });
    return false;
}

function checkShouldLoad() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100 && !limit) {
        getOutput()
    }
}

$(window).scroll(function() {
    checkShouldLoad()
});



