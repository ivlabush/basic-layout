$(document).ready(function () {
    $('.main-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1
    })

    $('.section2-mixed-lower').slick()

    $('.modal-open').on("click", function () {
        $('.modal').fadeIn()
    })

    $('.modal-close').on("click", function () {
        $('.modal').fadeOut()
    })
})