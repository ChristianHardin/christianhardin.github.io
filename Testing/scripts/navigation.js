// Navigation Bar
$(document).ready(function() {
    console.log("JQuery Loaded");
    $.fn.navigationTextOn(false);

    $("#sideNavigationLinks").hover(function() {
        // On mouseOn
        $(this).css("width", "10rem");
        $.fn.navigationTextOn(true);
    }, function() {
        // On mouseOff
        $(this).css("width", "3rem");
        $.fn.navigationTextOn(false);
    });
});

// Function To handle side bar navigation
$.fn.navigationTextOn = function(text){ 
    const pathname = String(location.pathname.split("/").pop());
    $.getJSON("./data/navigation.json", function(data) {
        const navigationObject = data;
        let htmlString = "<ul>";

        for (let i = 0; i < navigationObject.length; i++) {
            if (!text) {
                htmlString += '<li><a href="' + navigationObject[i].url + '"><img src="'+ navigationObject[i].icon +'" alt="'+navigationObject[i].iconAlt +'" width=45 height=45></a></li>';
            } else {
                htmlString += '<li><a href="' + navigationObject[i].url + '"><img src="'+ navigationObject[i].icon +'" alt="'+navigationObject[i].iconAlt +'" width=45 height=45>' + navigationObject[i].text + '</a></li>';
            }
        }
        htmlString += "</ul>";
        $('#sideNavigationLinks').html(htmlString);
    });
}




