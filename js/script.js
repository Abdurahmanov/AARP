$(function() {
    $('.header__burger').click(function () {
        $('.page').addClass('menu_active')
    })

    $('.header__close').click(function () {
        $('.page').removeClass('menu_active')
    })
});