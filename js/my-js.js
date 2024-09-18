$(".procucts-list").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
