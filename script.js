;(function($) {

    var $window = $(window),
        initialScrollPostion = $window.scrollTop(),
        $scrollDirection = $(".js-scrollDirection").find("span"),
        $header = $(".Header"),
        $footer = $(".Footer");

    $window.on("scroll", function() {
        var currentScrollPosition = $(this).scrollTop();

        if (initialScrollPostion < currentScrollPosition) {
            $scrollDirection.text("Down... (" + currentScrollPosition + ")" );
            $header.addClass("Header--visible");
            $footer.removeClass("Footer--visible");
        } else {
            $scrollDirection.text("Up... (" + currentScrollPosition + ")" );
            $header.removeClass("Header--visible");
            $footer.addClass("Footer--visible");
        }

        initialScrollPostion = currentScrollPosition;
    });
    
}(jQuery));