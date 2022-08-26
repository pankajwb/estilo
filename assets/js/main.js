$(document).ready(function(){
    $('.center').slick({
        centerMode: true,
        centerPadding: '30px',
        autoplay: true,
        autoplaySpeed: 2000,
          
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    });
});