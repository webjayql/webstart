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
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      })
      var next = $('.swiper-button-next');
      var prev = $('.swiper-button-prev');
      var bullets = $('.swiper-pagination');

      next.css('left', prev.width() + 10 + bullets.width() +10 )
      bullets.css('left', prev.width() + 10 )
});