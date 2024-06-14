/* slide */

setInterval(function(){
    $('.slide ul').animate({left:-800}, 1000, function(){
        $('.slide ul li').eq(0).appendTo($('.slide ul'));
        $('.slide ul').css({left:0})
    });
}, 2000)


/* popup */
$('.notice li').eq(0).click(function(){
    $('.popup').show(500)
})

$('.popup a').click(function(){
    $('.popup').hide(500)
})