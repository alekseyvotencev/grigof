// INDEX.HTML

// header dropdown menu 

const headerDropdownMenu = document.querySelector('.header__dropdown-menu');
const headerBtn = document.querySelector('.header__right-btn');

headerBtn.addEventListener('click', function () {
    headerBtn.classList.toggle('header__right-nav-link--active');
    headerDropdownMenu.classList.toggle('header__dropdown-menu--active');
    document.addEventListener('click', function (event) {
        if (event.target != headerBtn && event.target != headerDropdownMenu && !headerDropdownMenu.contains(event.target)) {
            headerDropdownMenu.classList.remove('header__dropdown-menu--active');
            headerBtn.classList.remove('header__right-nav-link--active');
        }
    })
})

// mobile menu

const burger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.header__mobile-menu');

burger.addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('header__burger--active');
    mobileMenu.classList.toggle('header__mobile-menu--active');
})

// mobile menu accordion
jQuery(document).ready(function ($) {
    $("#header__mobile-menu__accordion").accordionjs({
        activeIndex: false,
        slideSpeed: 350,
    });
});

// hero slider

if (document.querySelector('.swiper__hero')) {
    const swiperHero = new Swiper('.swiper__hero', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
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
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            769: {
                slidesPerView: 3,
            }
        }

    });
}

let angle = 0;
const heroPolygon = document.querySelector('.hero__polygon-img');
const heroNextBtn = document.querySelector('.swiper__hero-next');
const heroPrevBtn = document.querySelector('.swiper__hero-prev');
heroNextBtn?.addEventListener('click', () => {
    angle += 90;
    heroPolygon.style.transform = `translateX(-50%) rotate(${angle}deg)`;
})
heroPrevBtn?.addEventListener('click', () => {
    angle -= 90;
    heroPolygon.style.transform = `translateX(-50%) rotate(${angle}deg)`;
})

// categories slider

if (document.querySelector('.swiper__categories')) {
    const swiperCategories = new Swiper('.swiper__categories', {
        direction: 'horizontal',
        loop: true,
        speed: 400,
        centeredSlides: true,
        pagination: {
            clickable: true,
            el: '.swiper__categories-pagination',
        },
        navigation: {
            nextEl: '.swiper__categories-next',
            prevEl: '.swiper__categories-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto',
            },
            769: {
                slidesPerView: 3,
            }
        }
    });
}

// price slider

if (document.querySelector('.swiper__price')) {
    const swiperPrice = new Swiper('.swiper__price', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        slidesPerView: 'auto',
        pagination: {
            clickable: true,
            el: '.swiper__price-pagination',
        },
        navigation: {
            nextEl: '.swiper__price-next',
            prevEl: '.swiper__price-prev',
        },
    });
}

// video slider
if (document.querySelector('.swiper__video')) {
    const swiperVideo = new Swiper('.swiper__video', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper__video-next',
            prevEl: '.swiper__video-prev',
        },
        pagination: {
            el: '.swiper__video-pagination',
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto',
            },
            769: {
                slidesPerView: 'auto',
            }
        }
    });
}

// video
const videoExample = document.querySelector('.video-player');
if (videoExample) {
    document.querySelectorAll('.swiper__video-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelector('.modal-video').classList.add('modal-video--active');
            document.body.classList.add('overflow');
        })
    })
    document.querySelector('.modal-video__item__close').addEventListener('click', function () {
        document.querySelector('.modal-video').classList.remove('modal-video--active');
        document.body.classList.remove('overflow');
    })
}

// reviews screenshots slider
if (document.querySelector('.swiper__screenshots') && document.querySelector('.swiper__reviews')) {
    const swiperScreenshots = new Swiper('.swiper__screenshots', {
        direction: 'horizontal',
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                spaceBetween: 50,
            },
            769: {
                slidesPerView: 3,
            }
        }
    });
    // reviews text slider
    const swiperReviews = new Swiper('.swiper__reviews', {
        direction: 'vertical',
        loop: true,
        spaceBetween: 50,
        thumbs: {
            swiper: swiperScreenshots,
        },
        navigation: {
            nextEl: '.swiper__reviews-next',
            prevEl: '.swiper__reviews-prev',
        },
        pagination: {
            el: '.swiper__reviews-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto',
            },
        }
    });
}

// если много текста в отзыве в слайдере - ставится многоточие
if (document.querySelector('.swiper__reviews-item')) {
    const reviewsElems = document.querySelectorAll('.swiper__reviews-item');
    reviewsElems.forEach(element => {
        if (element.innerText.length > 142) {
            let review = element.innerText.substring(0, 142);
            review += "&#8230;";
            element.innerHTML = review;
        }
    })
}

// validation feedback form

if (document.querySelector('.feedback__form')) {
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
}


// STONE.HTML

// stones slider

if (document.querySelector('.swiper__stones')) {
    const swiperStones = new Swiper('.swiper__stones', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 100,
        speed: 500,
        loop: true,
        navigation: {
            nextEl: '.swiper__stones-next',
            prevEl: '.swiper__stones-prev',
        },
        pagination: {
            el: '.swiper__stones-pagination',
        },
    });
}


// STOCK.HTML

// stock hero slider
if (document.querySelector('.swiper__stock')) {
    const swiperStock = new Swiper('.swiper__stock', {
        direction: 'vertical',
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper__stock-pagination',
            clickable: true,
        },
    });
}


// stock hero slider
if (document.querySelector('.swiper__carousel')) {
    const swiperCarousel1 = new Swiper('.swiper__carousel1', {
        slidesPerView: 'auto',
        loop: true,
        navigation: {
            nextEl: '.swiper__carousel-next',
            prevEl: '.swiper__carousel-prev',
        },
        pagination: {
            el: '.swiper__carousel-pagination',
        },
        breakpoints: {
            320: {
                direction: 'horizontal',
            },
            769: {
                direction: 'vertical',
            }
        }
    });

    const swiperCarousel2 = new Swiper('.swiper__carousel2', {
        slidesPerView: 'auto',
        loop: true,
        breakpoints: {
            769: {
                direction: 'vertical',
            }
        }
    });


}

// price slider

if (document.getElementById("slider-1")) {
    window.onload = function () {
        slideOne();
        slideTwo();
    }
    let sliderOne = document.getElementById("slider-1");
    let sliderTwo = document.getElementById("slider-2");
    let displayValOne = document.getElementById("range1");
    let displayValTwo = document.getElementById("range2");
    let minGap = 0;
    let sliderTrack = document.querySelectorAll(".catalog__values-track");
    let sliderMaxValue = document.getElementById("slider-1").max;
    function slideOne() {
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderOne.value = parseInt(sliderTwo.value) - minGap;
        }
        displayValOne.textContent = sliderOne.value;
        fillColor();
    }
    function slideTwo() {
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderTwo.value = parseInt(sliderOne.value) + minGap;
        }
        displayValTwo.textContent = sliderTwo.value;
        fillColor();
    }
    function fillColor() {
        percent1 = (sliderOne.value / sliderMaxValue) * 100;
        percent2 = (sliderTwo.value / sliderMaxValue) * 100;
        sliderTrack.forEach(track => {
            track.style.background = `linear-gradient(to right, #838383 ${percent1}% , #FFFFFF ${percent1}% , #FFFFFF ${percent2}%, #838383 ${percent2}%)`;
        });
    }
}

// PRODUCTCARD.HTML
// product card slider
if (document.querySelector('.swiper__productcard')) {
    const swiperProductCard = new Swiper('.swiper__productcard', {
        direction: 'horizontal',
        speed: 500,
        spaceBetween: 50,
        loop: false,
        navigation: {
            nextEl: '.productcard-hero__next',
            prevEl: '.productcard-hero__prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                pagination: {
                    el: '.productcard-hero__pagination',
                }
            },
            769: {
                slidesPerView: 1,
            }
        }
    });
}

// ABOUT.HTML
if (document.querySelector('.swiper__about')) {
    const swiperAbout = new Swiper('.swiper__about', {
        direction: 'horizontal',
        speed: 500,
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 1,
        pagination: {
            el: '.swiper__about-pagination',
        },
        navigation: {
            nextEl: '.swiper__about-next',
            prevEl: '.swiper__about-prev',
        },
    });
}

// tabs
if (document.querySelector('.services__tabs-btn')) {
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
}

if (document.querySelector('.stages__tabs-btn')) {
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
}


// pricelist

if (document.querySelector('.pricelist__tab-btn')) {
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
}

// catalog filters

// open filters
const catalogFiltersOpenBtn = document.querySelector('.catalog__filters-open');
const catalogFilters = document.querySelector('.catalog__filters')
catalogFiltersOpenBtn?.addEventListener('click', function () {
    catalogFilters.classList.add('catalog__filters--active')
})

// close filters
const catalogFiltersCloseBtn = document.querySelector('.catalog__filters-top__close-btn');
catalogFiltersCloseBtn?.addEventListener('click', function () {
    catalogFilters.classList.remove('catalog__filters--active')
})

// close filters after applying
const catalogFiltersApplyBtn = document.querySelector('.catalog__filters-apply');
catalogFiltersApplyBtn?.addEventListener('click', function () {
    // catalogFilters.classList.remove('catalog__filters--active')
})

if (document.querySelector('.catalog__filters-tab-item')) {
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
}

// portfolio filters

// open filters
const portfolioFilters = document.querySelector('.portfolio-catalog__filters');
const portfolioFiltersOpenBtn = document.querySelector('.portfolio-catalog__filters-open');
portfolioFiltersOpenBtn?.addEventListener('click', function () {
    portfolioFilters.classList.add('portfolio-catalog__filters--active')
})

// close filters
const portfolioFiltersCloseBtn = document.querySelector('.portfolio-catalog__filters-top__close-btn');
portfolioFiltersCloseBtn?.addEventListener('click', function () {
    portfolioFilters.classList.remove('portfolio-catalog__filters--active')
})

// close filters after applying
const portfolioFiltersApplyBtn = document.querySelector('.portfolio-catalog__filters-apply');
portfolioFiltersApplyBtn?.addEventListener('click', function () {
    // portfolioFilters.classList.remove('portfolio-catalog__filters--active')
})

if (document.querySelector('.portfolio-catalog__filters-tab-item')) {
    document.querySelectorAll('.portfolio-catalog__filters-tab-item').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (e) {
            const path = e.currentTarget.dataset.path;

            document.querySelectorAll('.portfolio-catalog__filters-tab-item').forEach(function (btn) {
                btn.classList.remove('portfolio-catalog__filters-tab-item--active')
            });

            e.currentTarget.classList.add('portfolio-catalog__filters-tab-item--active');

            document.querySelectorAll('.portfolio-catalog__products').forEach(function (tab) {
                tab.classList.remove('portfolio-catalog__products--active')
            });

            document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tab) {
                tab.classList.add('portfolio-catalog__products--active');
            })
        });
    });

}

// feedback list 

if (document.querySelector('.feedback-reviews__type-item')) {
    document.querySelectorAll('.feedback-reviews__type-item').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (e) {
            const path = e.currentTarget.dataset.path;

            document.querySelectorAll('.feedback-reviews__type-item').forEach(function (btn) {
                btn.classList.remove('feedback-reviews__type-item--active')
            });

            e.currentTarget.classList.add('feedback-reviews__type-item--active');

            document.querySelectorAll('.feedback-reviews__list').forEach(function (tab) {
                tab.classList.remove('feedback-reviews__list--active')
            });

            document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tab) {
                tab.classList.add('feedback-reviews__list--active');
            })
        });
    });
}


// b2b card
if (document.querySelector('.b2bspecial-card__tabs-item')) {
    document.querySelectorAll('.b2bspecial-card__tabs-item').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (e) {
            const src = e.currentTarget.src;
            const srcContent = document.querySelector('.b2bspecial-card__tabs-content').src;
            e.currentTarget.src = srcContent;
            document.querySelector('.b2bspecial-card__tabs-content').src = src;
        })
    })
}

// product card
if (document.querySelector('.swiper__productcard-img-small')) {
    document.querySelectorAll('.swiper__productcard-img-small').forEach(function (tabImg) {
        tabImg.addEventListener('click', function (e) {
            const src = e.currentTarget.src;
            console.log(src)
            const srcContent = document.querySelector('.swiper__productcard-img-big').src;
            console.log(srcContent)
            e.currentTarget.src = srcContent;
            document.querySelector('.swiper__productcard-img-big').src = src;
        })
    })

}

// gemstones filters

// open filters
const gemstonesFilters = document.querySelector('.gemstones-catalog__filters');
const gemstonesFiltersOpenBtn = document.querySelector('.gemstones-catalog__filters-open');
gemstonesFiltersOpenBtn?.addEventListener('click', function () {
    gemstonesFilters.classList.add('gemstones-catalog__filters--active')
})

// close filters
const gemstonesFiltersCloseBtn = document.querySelector('.gemstones-catalog__filters-top__close-btn');
gemstonesFiltersCloseBtn?.addEventListener('click', function () {
    gemstonesFilters.classList.remove('gemstones-catalog__filters--active')
})

// close filter after applying
const gemstonesFiltersApplyBtn = document.querySelector('.gemstones-catalog__filters-apply');
gemstonesFiltersApplyBtn?.addEventListener('click', function () {
    gemstonesFilters.classList.remove('gemstones-catalog__filters--active')
})


// gemstonesFilters accordion

jQuery(document).ready(function ($) {
    $("#gemstones-accordion").accordionjs({
        activeIndex: false,
        slideSpeed: 250,
    });
});

// q&a

jQuery(document).ready(function ($) {
    $("#certificate-accordion").accordionjs({
        activeIndex: false,
        slideSpeed: 250,
    });
});



// gemstones select
if (document.querySelector('.gemstones-catalog__filters-select')) {
    const element = document.querySelectorAll('.gemstones-catalog__filters-select');
    element.forEach((item) => {
        new Choices(item, {
            shouldSort: false,
        })
    })
}


// inputmask

const phoneField = document.querySelectorAll("[type=\"tel\"");

const template = new Inputmask("+9 (999) 999-99-99");
phoneField.forEach(field => {
    template.mask(field);
})

// smooth scroll

document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.scrollto').offsetHeight;
        const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// b2b smooth scroll

const b2bHeroBtn = document.querySelector('.b2b-hero__btn');
b2bHeroBtn?.addEventListener('click', () => {
    const scrollTarget = document.querySelector('.b2b-catalog__heading');
    const topOffset = 0; // если не нужен отступ сверху 
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
})


// modal application

const modalApplication = document.querySelector('.application');

if (modalApplication) {
    document.querySelectorAll('.application__btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.classList.add('overflow');
            modalApplication.classList.add('modal--active');
        })
    })


    const modalApplicationCloseBtn = document.querySelector('.modal__close-btn');
    modalApplicationCloseBtn?.addEventListener('click', () => {
        modalApplication.querySelector('.modal__form').reset();
        document.body.classList.remove('overflow');
        modalApplication.classList.remove('modal--active');
    })

    const validationModalApp = new JustValidate('.modal__form');
    validationModalApp
        .addField('#modal-name', [
            {
                rule: 'required',
                errorMessage: 'Введите имя'
            }
        ])
        .addField('#modal-message', [
            {
                rule: 'required',
                errorMessage: 'Введите сообщение'
            }
        ])
        .addField('#modal-tel', [
            {
                rule: 'required',
                errorMessage: 'Введите номер телефона'
            }
        ])
        .addField('#modal-email', [
            {
                rule: 'required',
                errorMessage: 'Введите e-mail'
            }
        ])
}

// modal calculate

const modalCalculate = document.querySelector('.calculate-price');
if (modalCalculate) {
    const modalCalculateOpenBtn = document.querySelector('.calculate-price__btn');
    modalCalculateOpenBtn?.addEventListener('click', () => {
        document.body.classList.add('overflow');
        modalCalculate.classList.add('modal--active');
    })

    const modalCalculateCloseBtn = document.querySelector('.modal__close-btn');
    modalCalculateCloseBtn?.addEventListener('click', () => {
        modalCalculate.querySelector('.modal__form').reset();
        document.body.classList.remove('overflow');
        modalCalculate.classList.remove('modal--active');
    })

    const validationModalCalculate = new JustValidate('.modal__form');
    validationModalCalculate
        .addField('#modal-name', [
            {
                rule: 'required',
                errorMessage: 'Введите имя'
            }
        ])
        .addField('#modal-message', [
            {
                rule: 'required',
                errorMessage: 'Введите сообщение'
            }
        ])
        .addField('#modal-tel', [
            {
                rule: 'required',
                errorMessage: 'Номер указан некорректно'
            }
        ])
        .addField('#modal-email', [
            {
                rule: 'required',
                errorMessage: 'Введите e-mail'
            }
        ])

}