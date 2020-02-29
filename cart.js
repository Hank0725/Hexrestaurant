$(document).ready(function () {
    $('.showmenu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
});


$('.fa-heart').click(function (event) {
    event.preventDefault();
    $(this).addClass('fas');
    $(this).removeClass('far');
});
