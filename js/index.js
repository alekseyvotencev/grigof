const swiper = new Swiper('.swiper__exclusive-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 50,

    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
        renderFraction: function (currentClass) {
            return `<span class="' + ${currentClass} + '"></span>`;
        }
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const swiper2 = new Swiper('.swiper__price-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 50,
});

const swiper3 = new Swiper('.swiper__hero-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 150,
});


const swiperExamples = new Swiper('.swiper__examples', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper__examples-pagination',
        type: "fraction",
        renderFraction: function (currentClass, totalClass, index, total) {
            return `<span class="${currentClass}"></span>`;
        }
    },
});

const swiperVideo = new Swiper('.swiper__video', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper__video-next',
        prevEl: '.swiper__video-prev',
    },
    pagination: {
        el: '.swiper__video-pagination',
    },
});

const swiperReviews = new Swiper('.swiper__reviews', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 50,
    // navigation: {
    //     nextEl: '.swiper__video-next',
    //     prevEl: '.swiper__video-prev',
    // },
    // pagination: {
    //     el: '.swiper__video-pagination',
    // },
});