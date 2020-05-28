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
    var mySwiper = new Swiper('.swiper-container', {
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

    next.css('left', prev.width() + 10 + bullets.width() + 10)
    bullets.css('left', prev.width() + 10)

    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlenght: 5
            },
            // compound rule
            userEmail: {
                required: true,
                email: true
            },
            userPhone: {
                required: true,

            },
        },
        messages: {

            userName: {
                required: "Имя обязательно",
                minlength: "Минимум 5 символов"

            },
            userPhone: "Телефон обязателен!",
            userEmail: {
                required: "Укажите обязательно ваш email",
                email: "Give us your email in format mail@mail.com"
            },

        }
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    console.log('Все получилось!');
                    alert('Форма отправлена!, мы с вами свяжемся!');
                    $(form)[0].reset();
                    modal.removeClass('modal-visible');
                }
            });
        }

    });

});
// маска для телефона
$('[type=tel]').mask('+7 (000) 000-00-00', {
placeholder: "+7 (___)___-__-__"
});
});