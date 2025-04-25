let swiperSlide = document.querySelectorAll(".swiper-slide");
let swiperWrapper = document.querySelector(".swiper-wrapper");
let footer = document.querySelector(".footer");
let chatImgCon = document.querySelector(".chat_img_con");
let chatBtns = document.querySelectorAll(".chat_btn");

let bkColor = ["#5ab2db", "#ff6e89", "#8083d4", "#98cd69"];
const io = new IntersectionObserver(
  (entries, options) => {
    entries.forEach((el) => {
      // document.querySelector(".swiper-wrapper>swiper-slide:nth-child(1)")
      if (el.isIntersecting) {
        console.log(el.target.dataset.swiperSlideIndex);
        footer.setAttribute(
          "style",
          `background: ${bkColor[el.target.dataset.swiperSlideIndex]}`
        );
        chatImgCon.setAttribute(
          "style",
          `background: ${bkColor[el.target.dataset.swiperSlideIndex]}`
        );
        chatBtns.forEach((item) => {
          item.setAttribute(
            "style",
            `background: ${bkColor[el.target.dataset.swiperSlideIndex]}`
          );
        });
      }
    });
  },
  {
    threshold: 0.1,
  }
);

swiperSlide.forEach((el) => {
  io.observe(el);
});
