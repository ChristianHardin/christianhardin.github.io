$(document).ready(function(){
    $.getJSON( "./facultyList.json", function ( data ) {
        data = data.facultymembers
        let items = '';
        for (let i = 0; i < 3; i++) {
            items += '<img src="'+ data[i].image +'" alt="'+ data[i].bio +'"></img>' + 
                     '<h2>'+ data[i].full_name +'</h2>' +
                     '<h3>'+ data[i].department +'</h3>' +
                     '<p>'+ data[i].bio +'</p>';
        }
        $("#faculty").append(items)
    });
});