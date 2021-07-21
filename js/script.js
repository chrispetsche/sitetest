$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/bar script
    $('.menu-btn').click(function(){
        $('#side-profile').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.side-profile-btn').click(function(){
        if($(window).width() < 870){
            $('#side-profile').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        }
    });

    // typing animation script
    var typed = new Typed(".typing-1", {
        strings: ["Artist", "Designer", "Developer"],
        typedSpeed: 0,
        backSpeed: 100,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Gaming", "Architecture", "Sustainability", "Technology", "Post Modernism"],
        typedSpeed: 0,
        backSpeed: 100,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
                0:{
                    items: 1,
                    nav: false
                },

                1300:{
                    items: 1,
                    nav: false
                },

                1301:{
                    items: 2,
                    nav: false
                }
            }
        });

        
});