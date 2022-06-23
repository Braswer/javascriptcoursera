// Add your JS here
$(window).on('load', function() {

    "use-strict";
    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();

    const totalWidth = (imageCount * imageWidth) + "px";
    let leftposition = 0;
    let counter = 0;

    $('slider ul').css('width', totalWidth)

    let timer = setInterval( slider, 2000)

    function slider() {
        counter++;

        if (counter === imageCount) {

            $('#slider ul').clone().appendTo('#slider')
            $('#slider ul').last().css('left', imageWidth + "px")

            leftposition = `-${totalWidth}`

            $('#slider ul').last().animate({left: 0}, 700, 'easeInQuad')
            $('#slider ul').first().animate({left: leftposition}, 700, 'easeInQuad', function() {
                $('#slider ul').first().remove()
            })
            counter = 0;
        }

        else {
            leftposition = `-${counter * imageWidth}px`;
            $('#slider ul').animate({left: leftposition}, 700, "easeInQuad")
        }
    }

    $('#slider').mouseover(function(){ clearInterval(timer)})




})


/* $(window).on('load', function() {

    "use-strict";
    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();

    const totalWidth = (imageCount * imageWidth) + "px";
    let leftposition = 0;
    let counter = 0;

    $('slider ul').css('width', totalWidth)

    $('#next').click(function() {
        counter++;

        if (counter == imageCount) {
            counter = 0;
        }

        leftposition = `-${counter * imageWidth}px`;
        $('#slider ul').animate({left: leftposition}, 700, "easeInQuad")
    })

    $('#previous').click(function() {
        counter--;

        if (counter < 0) {
            counter = imageCount -1;
        }

        leftposition = `-${counter * imageWidth}px`;
        $('#slider ul').animate({left: leftposition}, 700, "easeInQuad")
    })

})
 */


