$(document).ready(function() {
    console.log("JQuery Loaded.")
    onPageLoad();

    $('#sideNavigation').on('click', '#categoryMain', function() {
        testFunction("schoolWorkMenu");
    });

    $('#sideNavigation').on('click', '#categorySub', function() {
        testFunction('miscWorkMenu');
    });
});

function onPageLoad() {
    $.getJSON("./data/navigation-category.json", function(data) {
        const dataObj = data;
        let htmlString = '<div id="categoryWrapper"><div id="logo"><img src="https://placehold.jp/41x40.png" alt="bleh"></div><div class="line01"></div>';

        for (let i = 0; i < dataObj.length; i++) {
            if (dataObj[i].id == "homeLink") {
                htmlString += '<div class="category" id="' + dataObj[i].id + '"><a href="' + dataObj[i].url + '"><img src="' + dataObj[i].icon + '" + alt="' + dataObj[i].iconAlt + '"></a></div>';
            } else {
                htmlString += '<div class="category" id="' + dataObj[i].id + '"><a href="javascript:void(0)"><img src="' + dataObj[i].icon + '" + alt="' + dataObj[i].iconAlt + '"></a></div>';
            }
        }
        htmlString += '</div><div id="schoolWorkMenu"></div><div id="miscWorkMenu"></div>';
        $('#sideNavigation').html(htmlString);
        testFunction("schoolWorkMenu");
    });
}

let currentMenu = "null";
function testFunction(menuName) {
    if (menuName == currentMenu) {
        destroyMenu(menuName);
    } else {
        destroyMenu(currentMenu);
        fillMenu(menuName);
    }
}

function fillMenu(menuName) {
    $.getJSON("./data/navigation-" + menuName +".json", function(data) {
        const dataObj = data;
        let htmlString = "<div id='menuTitle'><h1>" + dataObj[0].title + "</h1></div><div class='line01'></div><div id='linkWrapper'>";
        for (let i = 1; i < dataObj.length; i++) {
            htmlString += "<a class='menuLink' id='" + dataObj[i].id + "' href='" + dataObj[i].url + "'><img class='menuLinkIcon' src='" + dataObj[i].icon + "'><p class='menuLinkText'>" + dataObj[i].text + "</p></a>"
        }
        htmlString += '</div>'
        $('#sideNavigation').children().each(function() {
            if ($(this).attr('id') == menuName) {
                $(this).css("width", "12rem");
                $(this).html(htmlString);
            }
        });
    });
    currentMenu = menuName;
} 

function destroyMenu(menuName) {
    let htmlString = '';
    $('#sideNavigation').children().each(function() {
            if ($(this).attr('id') == menuName) {
                $(this).css("width", "0rem")
                       .html(htmlString);
            }
    });
    currentMenu = null;
}