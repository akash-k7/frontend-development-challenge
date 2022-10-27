$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<img src='stock/previous.png'>","<img src='stock/next.png'>"],
        items:1,
        smartSpeed: 1000,
        responsive:{
            0:{
                nav:false,
                smartSpeed:300,
            },
            600:{
                nav:true
            }
        }
    });
});
