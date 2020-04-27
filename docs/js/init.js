(function () {
    // .header-nav навигация
    let nav = $('.menu__list');

    // .menu-btn - кнопка меню
    $('.menu__btn').click(function() {
        if(nav.hasClass('menu__list--active')) {
            nav.removeClass('menu__list--active');
        }
        else {
            nav.addClass('menu__list--active');
        }
    });

    // mobile sidebar start
    let sidebar = $('.main__left');
    let close = $('.main__left-close');

    $('.sort-search__mobile-btn').click(function() {
        if(sidebar.hasClass('main__left--active')) {
            sidebar.removeClass('main__left--active');
        }
        else {
            sidebar.addClass('main__left--active');
        }
    });
    $(close).click(function() {
        sidebar.removeClass('main__left--active');
    });
    // mobile sidebar end

    $("#prod-tabs").tabs();

    $( "#products-release__tabs" ).tabs();

    $( "#trending-products__carousel" ).owlCarousel({
        dots:true,
        margin: 30,
        responsive:{
            0: {
                items: 1
            },
            720: {
                items: 2
            },
            1200: {
                items: 3
            },
            1440: {
                items: 4
            },
        }
    });

    if ($("section").is('.modal')) {
        $("#modal").iziModal({
            width: 730,
            radius: 0
        });
    }

    $(document).on('click', '.header__btn--trigger', function (event) {
        event.preventDefault();
        $('#modal').iziModal('open');
    });
    $(document).on('click', '.login__close', function (event) {
        event.preventDefault();
        $('#modal').iziModal('close');
    });


    if ($("section").is('.upload-product')) {
        $('.upload-form select').styler();
        $('.upload-form__type-file').styler();
        $('.upload-form__text-input').styler();
    }

    if ($("section").is('.price')) {
        $(".js-range-slider").ionRangeSlider({
            type: "double",
            prefix: '$',
            min: 0,
            max: 1000,
            from: 0,
            to: 600,
            hide_min_max: true,
            skin: "round"
        });
    }
}());