$(document).ready(function() {
    //region-btn
    $( "#region-btn" ).on( "click", function() {
        $( "#region-popup" ).toggleClass( "show" );
        $( "#region-btn" ).toggleClass( "show" );
    });

    //main-slider
    $('.main-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        appendDots:$(".slider-dots-wrap"),
    });


    //sidebar
    $( "#sidebar" ).simplerSidebar( {
        align: "left",
        selectors: {
            trigger: ".toggle-sidebar",
            quitter: ".close-sidebar"
        }
    } );


    //header animation in scrolling
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
        if (window.matchMedia("(min-width: 1400px)").matches) {
            if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
            } else {
            document.getElementById("header").style.top = "-230px";
            }
        } else if (window.matchMedia("(min-width: 576px)").matches) {
            if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
            } else {
            document.getElementById("header").style.top = "-128px";
            }
        } else {
            if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
            } else {
            document.getElementById("header").style.top = "-95px";
            }
        }
        prevScrollpos = currentScrollPos;
    }
});