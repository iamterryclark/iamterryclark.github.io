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
        $('.revealScroll').bind('inview', function (event, visible) {
            if (visible) {
                // element is now visible in the viewport
                $(this).addClass('animated ' + $(this).data('animation'));
            } else {
                // element has gone out of viewport
                $(this).removeClass('animated fadeInLeft fadeInRight fadeIn')
            }
        });
    });

    //    // RevealonScroll
    //    //Reference: http://codepen.io/benske/full/yJoqz
    //    $(function () {
    //        var $window = $('body'),
    //            win_height_padded = $window.height() * 1.1,
    //            isTouch = Modernizr.touch;
    //        if (isTouch) {
    //            $('.revealOnScroll').addClass('animated');
    //        }
    //
    //        $window.on('scroll', revealOnScroll);
    //
    //        function revealOnScroll() {
    //            var scrolled = $window.scrollTop(),
    //                win_height_padded = $window.height() * 1.1;
    //
    //            // Showed...
    //            $(".revealOnScroll:not(.animated)").each(function () {
    //                var $this = $(this),
    //                    offsetTop = $this.offset().top;
    //                if (scrolled + win_height_padded > offsetTop) {
    //                    if ($this.data('timeout')) {
    //                        window.setTimeout(function () {
    //                            
    //                        }, parseInt($this.data('timeout'), 10));
    //                    } else {
    //                        
    //                    }
    //                }
    //            });
    //
    //            // Hidden...
    //            $(".revealOnScroll.animated").each(function (index) {
    //                var $this = $(this),
    //                    offsetTop = $this.offset().top;
    //
    //                if (scrolled + win_height_padded < offsetTop) {
    //                    
    //                }
    //            });
    //        }
    //        revealOnScroll();
    //    });
});