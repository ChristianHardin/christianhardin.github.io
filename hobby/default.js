$(document).ready(function() {
    document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
    document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);

    $('#about').hide();
    $('#best').hide();
    $('#places').hide();
    $('#how').hide();
    $('#why').hide();

    $('#homeLink').click(function() {
        $('#home').show();
        $('#about').hide();
        $('#best').hide();
        $('#places').hide();
        $('#how').hide();
        $('#why').hide();
    });

    $('#aboutLink').click(function() {
        $('#home').hide();
        $('#about').show();
        $('#best').hide();
        $('#places').hide();
        $('#how').hide();
        $('#why').hide();
    });

    $('#bestLink').click(function() {
        $('#home').hide();
        $('#about').hide();
        $('#best').show();
        $('#places').hide();
        $('#how').hide();
        $('#why').hide();
    });

    $('#placesLink').click(function() {
        $('#home').hide();
        $('#about').hide();
        $('#best').hide();
        $('#places').show();
        $('#how').hide();
        $('#why').hide();
    });

    $('#scheduleLink').click(function() {
        $('#home').hide();
        $('#about').hide();
        $('#best').hide();
        $('#places').hide();
        $('#how').show();
        $('#why').hide();
    });

    $('#whyLink').click(function() {
        $('#home').hide();
        $('#about').hide();
        $('#best').hide();
        $('#places').hide();
        $('#how').hide();
        $('#why').show();
    });
});