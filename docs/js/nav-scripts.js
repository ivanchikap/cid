(function () {
    let nav = $('.nav');

    // .nav__btn - кнопка меню
    $('.nav__btn').click(function () {
        let curHeight = nav.height();
        let autoHeight = nav.css('height', 'auto').height();
        if (nav.hasClass('nav--active')) {
            nav.removeClass('nav--active');
            nav.height(curHeight).animate({height: 0}, 0)
        } else {
            nav.addClass('nav--active');
            nav.height(curHeight).animate({height: autoHeight}, 0)
        }
    });
    $("#pricing-tabs").tabs(        {
            show: { effect: "blind", duration: 900 }
        }
    );
})();
