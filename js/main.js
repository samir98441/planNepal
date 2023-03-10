$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $("header").addClass("navSticky");
        $(".slideUp").addClass("arrow");
    }
    else {
        $("header").removeClass("navSticky");
        $(".slideUp").removeClass("arrow");
    }
})