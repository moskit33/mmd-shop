$(document).ready(function() {
    $( "#region-btn" ).on( "click", function() {
        $( "#region-popup" ).toggleClass( "show" );
        $( "#region-btn" ).toggleClass( "show" );
    });

    $('.main-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        appendDots:$(".slider-dots-wrap"),
    });
    //
    $( "#sidebar" ).simplerSidebar( {
        align: "left",
        selectors: {
            trigger: ".toggle-sidebar",
            quitter: ".close-sidebar"
        }
    } );
});