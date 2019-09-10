export const initClients = () => {
  const client_show = window.jQuery('.wd-clients-carousel').data('clientshow');

  window.jQuery('.wd-clients-carousel').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: client_show,
    slidesToScroll: client_show / 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
};
