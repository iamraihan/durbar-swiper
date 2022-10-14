var arr = ["f1", "f2", "f3", "f4"];

/* 
use swiper event to get the state.
the state has the index. Use the index as a array arr[index].
get the array value and put the value to the react state() to change the div#change_it html value.
*/
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 2,
  slidesPerColumn: 1,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetweenSlides: 10,
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      spaceBetweenSlides: 20,
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetweenSlides: 30,
    },
  },
});

document.querySelector("#change_it").textContent = arr[swiper.activeIndex];

swiper.on("transitionEnd", function () {
  document.querySelector("#change_it").textContent = arr[swiper.activeIndex];
});
