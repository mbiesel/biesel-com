(function Navigation() {
    $(document).ready(function(){

        var body = $('body');
        var btn = body.find('[data-attr="menu-btn"]').first();
        var menu = body.find('[data-attr="main-menu"]').first();

        $(btn).click(function(){
            $(menu).toggleClass('open');
        });
    });
})();