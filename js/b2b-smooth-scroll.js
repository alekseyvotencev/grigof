document.querySelector('.b2b-hero__btn').addEventListener('click', () => {
    const scrollTarget = document.querySelector('.b2b-catalog__heading');
    const topOffset = 0; // если не нужен отступ сверху 
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
})

