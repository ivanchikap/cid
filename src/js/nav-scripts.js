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

    $('.tariffs__item').click(function(e) {
        let front = $(this).find(".tariffs__item-front");
        let back = $(this).find(".tariffs__item-back");
        if(e.target.classList[0] === 'tariffs__item-btn') {
            front.css({ 'transform': 'rotateY(180deg)'});
            back.css({ 'transform': 'rotateY(360deg)'});
        }
        if(e.target.classList[0] === 'tariffs__close') {
            front.css({ 'transform': 'rotateY(0)'});
            back.css({ 'transform': 'rotateY(180deg)'});

        }
    });
})();
