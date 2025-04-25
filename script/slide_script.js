new Swiper(".swiper", {
  direction: "horizontal",
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  pagination: {
    type: "bullets",
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  autoplay: {
    daley: 3000,
  },
});
