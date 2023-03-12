// Navigation Bar
$(document).ready(function() {
    console.log("JQuery Loaded");
    $.fn.navigationTextOn(false);

    let isMouseHovering = false
    $("#sideNavigationLinks").hover(function() {
        // On mouseOn
        if (!isMouseHovering) {
            $.fn.navigationTextOn(true);
            $(this).css("width", "10rem");
            // console.log("NAVIGATION: hovered");
        }
        isMouseHovering = true;
    }, function() {
        // On mouseOff
        $.fn.navigationTextOn(false);
        $(this).css("width", "3rem");
        isMouseHovering = false;
        // console.log("NAVIGATION: un-hovered");
    });
});

// Function To handle side bar navigation
$.fn.navigationTextOn = function(textBool){
    const pathname = String(location.pathname.split("/").pop());
    $.getJSON("./data/navigation.json", function(data) {
        const navigationObject = data;
        let htmlString = "<ul>";

        for (let i = 0; i < navigationObject.length; i++) {
            if (!textBool) {
                htmlString += '<li><a href="' + navigationObject[i].url + '"><img src="'+ navigationObject[i].icon +'" alt="'+navigationObject[i].iconAlt +'" width=45 height=45></a></li>';
            } else {
                htmlString += '<li><a href="' + navigationObject[i].url + '"><img src="'+ navigationObject[i].icon +'" alt="'+navigationObject[i].iconAlt +'" width=45 height=45><span id="iconText">' + navigationObject[i].text + '</span></a></li>';
            }
        }
        htmlString += "</ul>";
        $('#sideNavigationLinks').html(htmlString);
    });
}




