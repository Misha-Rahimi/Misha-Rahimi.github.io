$(window).scroll(function () {
    /* Check the location of each desired element */
    $('.fade').each(function (i) {
        console.log(i)

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object) {

            $(this).animate({
                'opacity': '1'
            }, 2000);

        }

    });

});