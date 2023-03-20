const photos = [
    'frog01.jpg',
    'frog02.jpg',
    'frog03.jpg',
    'frog04.jpg',
    'frog05.jpg',
    'frog06.jpg'
]

$( document ).ready(function() {
    $('#currentImage')
    .attr("src", "./images/slideshow/" + photos[0]);
    $('#slideShowWrapper').children().first()
        .css("background-color", "#6a6a6a");
    
    $(".selectorButton").click(function() {
        let num = $(this).attr("value");
        changePicture(num);
    });

    $(".pictureButton").click(function() {
        let num = $(this).attr("value");
        changePicture(num);
    });
});



let currentPhoto = 0;
function changePicture(num) {
    $('#slideShowWrapper').children().eq(currentPhoto)
        .css("background-color", "aliceblue")

    currentPhoto = num;
    $('#slideShowWrapper').children().eq(currentPhoto)
        .css("background-color", "#6a6a6a")

    $('#currentImage')
        .attr("src", "./images/slideshow/" + photos[num]);
}