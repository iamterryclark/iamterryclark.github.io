$(document).ready(function () {

    //Reference: http://www.coalmarch.com/blog/how-to-execute-javascript-based-on-screen-size-using-jquery
    //Open and close Menu
    $(".hamburger").click(function () {
        $(".nav").toggleClass("open-nav");
    });

    //Change active class
    //Reference: http://stackoverflow.com/questions/6459581/toggle-active-class-in-nav-bar-with-jquery
    $(".nav a").click(function () {
        $(".nav").removeClass("open-nav");
        $("#nav-icon").removeClass("open");
    });

    //Smooth Scrolling
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') ==
                this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname) {
                var target = $(this.hash);
                var windHeight = $(window).height();
                target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, 'swing');
                    return false;
                }
            }
        });
    });

    $(".navWrap").click(function () {
        $("#nav-icon").toggleClass("open");
        $(".nav").toggleClass("open-nav");
    });

    $(function () {
        $('.revealScroll').bind('inview', function (event, visible, visiblePartY) {
            if (visible) {
                // element is now visible in the viewport
                $(this).addClass('animated ' + $(this).data('animation'));
//                if ($('.revealScoll .animated') && visiblePartY == 'top') {
//                    $(this).removeClass('animated fadeInLeft fadeInRight fadeIn');
//                }
            }

        });
    });
});