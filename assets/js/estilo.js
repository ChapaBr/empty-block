$(document).ready(function(){

    setTimeout(function(){
        $('.empty-preloader').fadeOut();
    },3200);

    //fim load

    $('[data-toggle="tooltip"]').tooltip();

    $('.projetos-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

    $('#equipe-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

        function menurolagem(){
            var navmenu = $('.navbar');
            if ($(window).scrollTop() > 350 ) {
                $('.navbar').removeClass('ativacao-nav'); 
                $('.nav-link').removeClass('menu-cor-rolagem');
            }
            else {
                $('.navbar').addClass('ativacao-nav');
                $('.nav-link').addClass('menu-cor-rolagem');
            }
        }

        menurolagem();
        $(window).on('scroll', function(){
            menurolagem();
        });

        //Click Para realizar a rolagem

        $('.scrolling a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 100
        }, 700);
    });

});