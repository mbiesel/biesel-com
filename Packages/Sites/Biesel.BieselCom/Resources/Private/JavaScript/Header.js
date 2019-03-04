(function Header() {
    var header = $('header').first();

    $(document).scroll(function(){
        var distanceTop = $(document).scrollTop();

        if(distanceTop > 300) {
            $(header).addClass('scrolled');
        } else {
            $(header).removeClass('scrolled');
        }
    });
})();