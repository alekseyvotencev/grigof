// swipers
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

const swiperCategories = new Swiper('.swiper__categories', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 150,
    centeredSlides: true,
    initialSlide: 1,
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
    effect: 'fade',
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

const swiperStones = new Swiper('.swiper__stones', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper__stones-next',
        prevEl: '.swiper__stones-prev',
    },
});

const swiperStock = new Swiper('.swiper__stock', {
    direction: 'vertical',
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper__stock-pagination',
        clickable: true,
    }
});

const swiperCarousel = new Swiper('.swiper__carousel', {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 50,
    loop: true,
});

const swiperB2B = new Swiper('.swiper__b2b', {
    direction: 'horizontal',
    slidesPerView: '3',
    spaceBetween: 20,
    loop: true,
});

// tabs

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

document.querySelectorAll('.pricelist__tab-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        document.querySelectorAll('.pricelist__tab-btn').forEach(function (btn) {
            btn.classList.remove('pricelist__tab-btn--active')
        });

        e.currentTarget.classList.add('pricelist__tab-btn--active');

        document.querySelectorAll('.pricelist__content').forEach(function (tab) {
            tab.classList.remove('pricelist__content--active')
        });

        document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tab) {
            tab.classList.add('pricelist__content--active');
        })
    });
});

document.querySelectorAll('.catalog__filters-tab-item').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        document.querySelectorAll('.catalog__filters-tab-item').forEach(function (btn) {
            btn.classList.remove('catalog__filters-tab-item--active')
        });

        e.currentTarget.classList.add('catalog__filters-tab-item--active');

        document.querySelectorAll('.catalog__products').forEach(function (tab) {
            tab.classList.remove('catalog__products--active')
        });

        document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tab) {
            tab.classList.add('catalog__products--active');
        })
    });
});

document.querySelectorAll('.b2bspecial-card__tabs-item').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
        const src = e.currentTarget.src;
        const srcContent = document.querySelector('.b2bspecial-card__tabs-content').src;
        e.currentTarget.src = srcContent;
        document.querySelector('.b2bspecial-card__tabs-content').src = src;
    })
})

document.querySelectorAll('.swiper__stones-small-img1').forEach(function (tabsImg) {
    tabsImg.addEventListener('click', function (e) {
        const src = e.currentTarget.src;
        const srcContent = document.querySelector('.swiper__stones-center-img1').src;
        e.currentTarget.src = srcContent;
        document.querySelector('.swiper__stones-center-img1').src = src;
    })
})

document.querySelectorAll('.swiper__stones-small-img2').forEach(function (tabsImg) {
    tabsImg.addEventListener('click', function (e) {
        const src = e.currentTarget.src;
        const srcContent = document.querySelector('.swiper__stones-center-img2').src;
        e.currentTarget.src = srcContent;
        document.querySelector('.swiper__stones-center-img2').src = src;
    })
})

document.querySelectorAll('.swiper__stones-small-img3').forEach(function (tabsImg) {
    tabsImg.addEventListener('click', function (e) {
        const src = e.currentTarget.src;
        const srcContent = document.querySelector('.swiper__stones-center-img3').src;
        e.currentTarget.src = srcContent;
        document.querySelector('.swiper__stones-center-img3').src = src;
    })
})

// select

const element = document.querySelectorAll('.gemstones-catalog__filters-select');
element.forEach((item) => {
    new Choices(item, {
        shouldSort: false,
    })
})

// inputmask

const phoneField = document.querySelectorAll("[type=\"tel\"");

const template = new Inputmask("+7 (999) 999-99-99");
phoneField.forEach(field => {
    template.mask(field);
})

// validation

const validation = new JustValidate('.feedback__form');
validation
    .addField('#name', [
        {
            rule: 'required',
            errorMessage: 'Введите имя'
        },
        {
            rule: 'customRegexp',
            value: '^((?=.*[А-Я])||(?=.*[а-я]).{2,30})$',
            errorMessage: 'Недопустимый формат'
        },
    ])
    .addField('#message', [
        {
            rule: 'required',
            errorMessage: 'Введите сообщение'
        }
    ])
    .addField('#phone', [
        {
            rule: 'required',
            errorMessage: 'Введите номер телефона'
        }
    ])
    .addField('#phone', [
        {
            validator: (value) => {
                let phone;
                phoneField.forEach(field => {
                    phone = field.inputmask.unmaskedvalue();
                })
                return Number(phone) && phone.length === 10
            },
            errorMessage: 'Введите номер телефона'
        }
    ])
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Введите e-mail'
        }
    ])
    .onSuccess((event) => {
        console.log("Отправка запроса");
        event.preventDefault();
    });
