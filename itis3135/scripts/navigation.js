$(document).ready(function() {
    console.log("JQuery Loaded.")
    onPageLoad();

    $('#sideNavigation').on('click', '#categoryMain', function() {
        menuManager("schoolWorkMenu");
    });

    $('#sideNavigation').on('click', '#categorySub', function() {
        menuManager('miscWorkMenu');
    });
});

let dataObj = "schoolWorkMenu";
function onPageLoad() {
    $.getJSON("./data/navigation-category.json", function(data) {
        dataObj = data;
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
        menuManager("schoolWorkMenu");
    });
}

let currentMenu = "null";
function menuManager(menuName) {
    if (menuName == currentMenu) {
        destroyMenu(menuName);
    } else {
        destroyMenu(currentMenu);
        fillMenu(menuName);
    }
}


function fillMenu(menuName) {
    $.getJSON("./data/navigation-" + menuName +".json", function(data) {
        dataObj = data;
        let htmlString = "<div id='menuTitle'><h1>" + dataObj[0].title + "</h1></div><div class='line01'></div><div id='linkWrapper'>";
        for (let i = 1; i < dataObj.length; i++) {
            htmlString += "<a class='menuLink' id='" + dataObj[i].id + "' href='" + dataObj[i].url + "'><img class='menuLinkIcon' src='" + dataObj[i].icon + "'><p class='menuLinkText'>" + dataObj[i].text + "</p></a>"
        }
        htmlString += '</div>'
        $('#sideNavigation').children().each(function() {
            let object = $(this)
            setTimeout(function() {
                if (object.attr('id') == menuName) {
                    object.animate({"width": "12rem"}, 100)
                            .html(htmlString);
                }
              }, 100);
        });
    });
    currentMenu = menuName;
}

function destroyMenu(menuName) {
    let htmlString = '';
    $('#sideNavigation').children().each(function() {
            if ($(this).attr('id') == menuName) {
                $(this).animate({"width": "0"}, 100)
                       .html(htmlString);
            }
    });
    currentMenu = null;
}