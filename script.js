;(function($) {

    var $window = $(window),
        initialScrollPostion = $window.scrollTop(),
        $scrollDirection = $(".js-scrollDirection").find("span"),
        $header = $(".Header"),
        $footer = $(".Footer");

    $window.on("scroll", function() {
        var currntScrollPosition = $(this).scrollTop();

        if (initialScrollPostion < currntScrollPosition) {
            $scrollDirection.text("Down... (" + currntScrollPosition + ")" );
            $header.addClass("Header--visible");
            $footer.removeClass("Footer--visible");
        } else {
            $scrollDirection.text("Up... (" + currntScrollPosition + ")" );
            $header.removeClass("Header--visible");
            $footer.addClass("Footer--visible");
        }

        initialScrollPostion = currntScrollPosition;
    });
    
}(jQuery));