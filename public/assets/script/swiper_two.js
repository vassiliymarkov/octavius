document.addEventListener("DOMContentLoaded", function() {
  const aboutSwiper = new Swiper('.swiper', {
      speed: 100,
      centeredSlides: false,
      /* slidesPerView: 3,
      spaceBetween: 50, */

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 100
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 5
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 7,
          spaceBetween: 20
        },
        1920: {
          slidesPerView: 5,
          spaceBetween: 20
        }
      },

      autoplay: {
          delay: 3000,
      },
      loop: true,
  });
});