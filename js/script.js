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
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');
                //$('html, body').css('height', 'auto');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1200);
                    return false;
                } 
            }
        });
    });

    $(".navWrap").click(function () {
        $("#nav-icon").toggleClass("open");
        $(".nav").toggleClass("open-nav");
    });

    // RevealonScroll
    //Reference: http://codepen.io/benske/full/yJoqz
    $(function () {
        var $window = $('body'),
            win_height_padded = $window.height() * 1.1,
            isTouch = Modernizr.touch;
        if (isTouch) {
            $('.revealOnScroll').addClass('animated');
        }

        $window.on('scroll', revealOnScroll);

        function revealOnScroll() {
            var scrolled = $window.scrollTop(),
                win_height_padded = $window.height() * 1.1;

            // Showed...
            $(".revealOnScroll:not(.animated)").each(function () {
                var $this = $(this),
                    offsetTop = $this.offset().top;
                if (scrolled + win_height_padded > offsetTop) {
                    if ($this.data('timeout')) {
                        window.setTimeout(function () {
                            $this.addClass('animated ' + $this.data('animation'));
                        }, parseInt($this.data('timeout'), 10));
                    } else {
                        $this.addClass('animated ' + $this.data('animation'));
                    }
                }
            });

            // Hidden...
            $(".revealOnScroll.animated").each(function (index) {
                var $this = $(this),
                    offsetTop = $this.offset().top;

                if (scrolled + win_height_padded < offsetTop) {
                    $(this).removeClass('animated fadeInLeft fadeInRight fadeIn')
                }
            });
        }
        revealOnScroll();
    });

    //    $('.accordion-section-title').click(function (e) {
    //        // Grab current anchor value
    //        var currentAttrValue = $(this).attr('href');
    //
    //        if ($(e.target).is('.active')) {
    //            close_accordion_section();
    //        } else {
    //            close_accordion_section();
    //
    //            // Add active class to section title
    //            $(this).addClass('active');
    //            // Open up the hidden content panel
    //            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
    //        }
    //
    //        e.preventDefault();
    //    });
    //
    //    function close_accordion_section() {
    //        $('.accordion .accordion-section-title').removeClass('active');
    //        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    //    }
    //
    //    
});