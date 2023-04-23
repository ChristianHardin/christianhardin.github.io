$(document).ready(function(){
    // https://www.flickr.com/services/feeds/docs/photos_public/
    // https://stackoverflow.com/questions/46431656/xmlhttprequest-flickr-cross-origin-header
    const flikrUrl = "https://www.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&tags=vectacorpbuilding&format=json&jsoncallback=?";
    $.getJSON(flikrUrl, function(data) {
        console.log(data);
        let htmlString = ''
        $.each(data.items, function(i, item){
            htmlString += '<a href="' + item.media.m + '" ' +
                          'title="' + item.title + '"' + 
                          'data-lightbox="building">'+
                          '<img src="' + item.media.m + '"></a>'
        });
        $('#new_building').append(htmlString);
    });
});