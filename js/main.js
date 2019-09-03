$(document).ready(function(){
    $(".button").click(function () {
        if ($(this).attr("filter") && $(this).attr("filter") !== "all") {
            $(".filter > div*[filter !='" + $(this).attr('filter') + "']").fadeOut(350);
            $(".filter > div*[filter ='" + $(this).attr('filter') + "']").fadeIn(350);
            $('.button').removeClass('active');
            $(this).addClass("active");
        } else {
            $(".filter > div").fadeIn(350);
            $('.button').removeClass('active');
            $(this).addClass("active");
        }
        
    });
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows : false,
        dots: true,
        dotsClass: 'dots-style'
      });
})