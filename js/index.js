// swipers

// main hero slider

const swiperHero = new Swiper('.swiper__hero', {
    direction: 'horizontal',
    loop: true,
    speed: 500,
    slidesPerView: 3,
    initialSlide: 1,
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

// main categories slider

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

// main price slider

const swiperPrice = new Swiper('.swiper__price', {
    direction: 'horizontal',
    loop: true,
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

// main video slider

const swiperVideo = new Swiper('.swiper__video', {
    direction: 'horizontal',
    loop: false,
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
            slidesPerView: 3,
        }
    }
});

// main reviews screenshots slider

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

// main reviews text slider

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

const reviewsElems = document.querySelectorAll('.swiper__reviews-item');
reviewsElems.forEach(element => {
    if (element.innerText.length > 142) {
        let review = element.innerText.substring(0, 142);
        review += "&#8230;";
        element.innerHTML = review;
    }
})

// stones slider

const swiperStones = new Swiper('.swiper__stones', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 100,
    speed: 500,
    loop: true,
    navigation: {
        nextEl: '.stones__right-next',
        prevEl: '.stones__right-prev',
    },
});

// stock hero slider

const swiperStock = new Swiper('.swiper__stock', {
    direction: 'vertical',
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper__stock-pagination',
        clickable: true,
    }
});

// stock hero slider

const swiperCarousel = new Swiper('.swiper__carousel', {
    direction: 'vertical',
    slidesPerView: 'auto',
    loop: true,
});

// product card slider

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

// pricelist

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

document.querySelectorAll('.swiper__video-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        document.querySelectorAll('.examples__background').forEach(function (tab) {
            tab.classList.remove('examples__background--active')
        });

        document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tab) {
            tab.classList.add('examples__background--active');
        })
    });
});

// catalog filters

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

// portfolio filters

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

// feedback list 

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

// b2b card

document.querySelectorAll('.b2bspecial-card__tabs-item').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
        const src = e.currentTarget.src;
        const srcContent = document.querySelector('.b2bspecial-card__tabs-content').src;
        e.currentTarget.src = srcContent;
        document.querySelector('.b2bspecial-card__tabs-content').src = src;
    })
})

// product card

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


