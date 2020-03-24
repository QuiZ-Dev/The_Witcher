const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
      },
    breakpoints: {
      
      // when window width is >= 640px
      541: {
        slidesPerView: 2,
      }
    }
}), 
      mySwiperTwo = new Swiper('.swiper-container-2', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.arrow-2',
          },
        breakpoints: {
          // when window width is >= 640px
          541: {
            slidesPerView: 2,
          }
        }
        
});

// header-active from modile
const menuButton = document.querySelector('.menu-button'),
menu = document.querySelector('.header');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
});