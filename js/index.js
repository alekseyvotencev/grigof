
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

let angle = 0;
const heroPolygon = document.querySelector('.hero__polygon-img');
const heroNextBtn = document.querySelector('.swiper__hero-next');
const heroPrevBtn = document.querySelector('.swiper__hero-prev');
heroNextBtn.addEventListener('click', () => {
    angle += 90;
    heroPolygon.style.transform = `translateX(-50%) rotate(${angle}deg)`;
})
heroPrevBtn.addEventListener('click', () => {
    angle -= 90;
    heroPolygon.style.transform = `translateX(-50%) rotate(${angle}deg)`;
})

const swiperExclusive = new Swiper('.swiper__exclusive', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3.25,
    spaceBetween: 50,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper__exclusive-next',
        prevEl: '.swiper__exclusive-prev',
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
    direction: 'vertocal',
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper__stock-pagination',
        clickable: true,
    }
});

const swiperCarousel = new Swiper('.swiper__carousel', {
    direction: 'vertocal',
    slidesPerView: 'auto',
    spaceBetween: 50,
    loop: true,
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

// price slider

window.onload = function () {
    slideOne();
    slideTwo();
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".catalog__values-track");
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
    sliderTrack.style.background = `linear-gradient(to right, #838383 ${percent1}% , #FFFFFF ${percent1}% , #FFFFFF ${percent2}%, #838383 ${percent2}%)`;
}

const element = document.querySelectorAll('.gemstones-catalog__filters-select');
element.forEach((item) => {
    new Choices(item)
})