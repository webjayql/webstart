$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        modalClose = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal-visible');
    });
    modalClose.on('click', function () {
        modal.removeClass('modal-visible');
    });
});