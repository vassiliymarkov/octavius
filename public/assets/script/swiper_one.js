document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        speed: 100,
        spaceBetween: 50,
        centeredSlides: true,
        slidesPerView: 5,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        
    });
});
