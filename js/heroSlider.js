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