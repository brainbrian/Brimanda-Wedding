/*

    Brimanda - brimanda.com
    VERSION 1.0
    AUTHOR brian@brainbrian.com

    DEPENDENCIES:
    - jQuery v1.11.0
    - Modernizr 2.6.2
    - FitVids 1.0

*/

var BRIMANDA = BRIMANDA || {};

BRIMANDA.main = {
    config: {
        menuState: 'closed'
    },
    init: function () {
        var self = this;
        // photo carousel
        $("#slideshow").owlCarousel({
            items: 1,
            dots: true,
            lazyLoad: true,
            autoplay: false,
            loop: true,
            responsive: true
        });
        $("#slideshow .video").fitVids();
        // nav scroll
        $('#header nav ul li a').click(function (e) {
            e.preventDefault();
            var url = $(this).attr('href');
            self.utilities.pageScroll(url);
        });
        // responsive videos
        $("#more .video").fitVids();
        // waypoints
        $('#when').waypoint(function(direction) {
            if (direction == "down") {
                $('#header nav a').removeClass('active');
                $('#header nav .when a').addClass('active');
            } else {
                $('#header nav a').removeClass('active');
            }
        }, {offset: 5});
        $('#where').waypoint(function(direction) {
            if (direction == "down") {
                $('#header nav a').removeClass('active');
                $('#header nav .where a').addClass('active');
            } else {
                $('#header nav a').removeClass('active');
                $('#header nav .when a').addClass('active');
            }
        }, {offset: 5});
        $('#stay').waypoint(function(direction) {
            if (direction == "down") {
                $('#header nav a').removeClass('active');
                $('#header nav .stay a').addClass('active');
            } else {
                $('#header nav a').removeClass('active');
                $('#header nav .where a').addClass('active');
            }
        }, {offset: 5});
        $('#gifts').waypoint(function(direction) {
            if (direction == "down") {
                $('#header nav a').removeClass('active');
                $('#header nav .gifts a').addClass('active');
            } else {
                $('#header nav a').removeClass('active');
                $('#header nav .stay a').addClass('active');
            }
        }, {offset: 5});
        $('#rsvp').waypoint(function(direction) {
            if (direction == "down") {
                $('#header nav a').removeClass('active');
                $('#header nav .rsvp a').addClass('active');
            } else {
                $('#header nav a').removeClass('active');
                $('#header nav .gifts a').addClass('active');
            }
        }, {offset: 5});
        $('#more').waypoint(function(direction) {
            if (direction == "down") {
                $('#header nav a').removeClass('active');
                $('#header nav .more a').addClass('active');
            } else {
                $('#header nav a').removeClass('active');
                $('#header nav .rsvp a').addClass('active');
            }
        }, {offset: 5});
    },
    utilities: {
        cookie: {
            getCookie: function (name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for (var i=0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') c = c.substring(1,c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
                }
                return null;
            },
            setCookie: function (name, value, days) {
                var date, expires;
                if (days) {
                    date = new Date();
                    date.setTime(date.getTime()+(days*24*60*60*1000));
                    expires = "; expires="+date.toGMTString();
                } else {
                    expires = "";
                }
                document.cookie = name + "=" + value + expires + "; path=/";
            }
        },
        pageScroll: function (hash) {
            // Smooth Page Scrolling, update hash on complete of animation
            $('html,body').animate({scrollTop: $(hash).offset().top},'slow', function () { window.location = hash; });
        }
    }
};