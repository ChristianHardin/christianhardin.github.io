// Navigation Bar
$(document).ready(function() {
    console.log("JQuery Loaded");
    const pathname = String(location.pathname.split("/").pop());
    $.getJSON("./data/navigation.json", function(data) {
        const navigationObject = data;
        // let htmlString = "";
        let htmlString = "<ul>";

        for (let i = 0; i < navigationObject.length; i++) {
            htmlString += '<li><a href="' + navigationObject[i].url + '"><img src="'+ navigationObject[i].icon +'" alt="'+navigationObject[i].iconAlt +'"></a></li>';
        }
        htmlString += "</ul>";
        console.log(htmlString)

        $('#sideNavigationLinks').html(htmlString);
    });
});