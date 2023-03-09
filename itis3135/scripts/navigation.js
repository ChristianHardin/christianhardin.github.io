// Navigation Bar
$(document).ready(function() {
    console.log("JQuery Loaded");
    const pathname = String(location.pathname.split("/").pop());
    $.getJSON("../data/navigationLinks.json", function(data) {
        const navigationObject = data;
        let htmlString = "<ul>";

        for (let i = 0; i < navigationObject.length; i++) {
            htmlString += '<li><a href="' + navigationObject[i].url + '">' + navigationObject[i].text + '</a></li>';
        }
        htmlString += "</ul>";
        console.log(htmlString)

        $('#navigationLinks').html(htmlString);
    });

    // $('quizContent').html('<p> suck </p>');
});