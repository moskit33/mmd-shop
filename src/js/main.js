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
    
    //Slideout-menu
    var slideout = new Slideout({
        'panel': document.getElementById('main'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
    });
    
    document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
        slideout.open();
    });
    
    function close(eve) {
        eve.preventDefault();
        slideout.close();
    }
    
    slideout
    .on('beforeopen', function() {
        this.panel.classList.add('panel-open');
    })
    .on('open', function() {
        this.panel.addEventListener('click', close);
    })
    .on('beforeclose', function() {
        this.panel.classList.remove('panel-open');
        this.panel.removeEventListener('click', close);
    });
    //
});