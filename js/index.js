
const swiperHero = new Swiper('.swiper__hero', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    allowTouchMove: false,
    pagination: {
        el: '.swiper__hero-pagination',
    },
    navigation: {
        nextEl: '.swiper__hero-next',
        prevEl: '.swiper__hero-prev',
    },
});

const swiperExclusive = new Swiper('.swiper__exclusive', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3.25,
    spaceBetween: 50,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const swiperPrice = new Swiper('.swiper__price-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 50,
});



const swiperExamples = new Swiper('.swiper__examples', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
    },
    speed: 800,
    allowTouchMove: false,
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

const swiperScreenshots = new Swiper('.swiper__screenshots', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
});

const swiperReviews = new Swiper('.swiper__reviews', {
    direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    thumbs: {
        swiper: swiperScreenshots,
    },
    navigation: {
        nextEl: '.swiper__reviews-next',
        prevEl: '.swiper__reviews-prev',
    },
    pagination: {
        el: '.swiper__reviews-pagintaion',
        clickable: true,
    }
});

document.querySelectorAll('.services__tabs-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        document.querySelectorAll('.services__tabs-btn').forEach(function (btn) {
            btn.classList.remove('services__tabs-btn--active')
        });

        e.currentTarget.classList.add('services__tabs-btn--active');

        document.querySelectorAll('.services__content').forEach(function (tab) {
            tab.classList.remove('services__content--active')
        });

        document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tab) {
            tab.classList.add('services__content--active');
        })
    });
});

document.querySelectorAll('.stages__tabs-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        document.querySelectorAll('.stages__tabs-btn').forEach(function (btn) {
            btn.classList.remove('stages__tabs-btn--active')
        });

        e.currentTarget.classList.add('stages__tabs-btn--active');

        document.querySelectorAll('.stages__tab-item').forEach(function (tab) {
            tab.classList.remove('stages__tab-item--active')
        });

        document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tab) {
            tab.classList.add('stages__tab-item--active');
        })
    });
});