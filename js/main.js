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
        dotsClass: 'dots-style',
        responsive: [{
            breakpoint: 1025,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            }
         }, {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }]
      });
      $('ul.menu a[href^="#"').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
           scrollTop: $(target).offset().top
        }, 500);
        $('ul.menu a[href^="#"').css({
           'color': '#212121'
        });
        $(this).css({
           'color': '#004bee'
        });
        return false;
     });
     
     $('.menu-icon').click(function () {
        $('nav').slideToggle(500);
        $('ul.menu').css({
           'display': 'flex',
           'flex-direction': 'column'
        });
        if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
           $(this).html('<i class="fas fa-times"></i>');
        } else {
           $(this).html('<i class="fas fa-bars"></i>');
        }
     }); 

     $('#toTop').click(function () {
        $('body,html').animate({
           scrollTop: 0
        }, 800);
     });
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $('#about').offset().top)
       $('#toTop').fadeIn();
    else
       $('#toTop').fadeOut();
 });
