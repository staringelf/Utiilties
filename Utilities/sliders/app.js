const slideshow = new Splide( '.slideshow', {
  width : '100vw',
  height: '92vh',
  arrows: false,
  type: 'fade',
  rewind: true,
  speed: 800,
  drag: true,
  easing: 'cubic-bezier(0.25, 1, 0.5, 1)',

});

slideshow.mount();



const mainSlider  = new Splide ('#main-slider', {
  height: '60vh',
  width: '70vw',
  type: 'fade',
  speed: 800,
  rewind: true,
  drag: true
})

const thumbnailSlider = new Splide( '#thumbnail-slider', {
  fixedWidth: 100,
  height: 100,
  gap       : 20,
  rewind    : true,
  pagination: false,
  arrows: false,
  speed: 800,
  isNavigation: true,
  
} );

mainSlider.sync( thumbnailSlider );
mainSlider.mount();
thumbnailSlider.mount();



const infiniteSlider  = new Splide ('#infinite-slider', {
  type: 'loop',
  speed: 800,
  drag: true,
  perPage : 3,
  perMove: 1,
  cover   : true,
  height  : '10rem',
  lazyLoad: 'nearby',
  focus  : 'center',
  gap: 20,
  flickPower: 100,
  flickMaxPages: 1,
})

infiniteSlider.mount();

const testimonialQuotesSlider = new Splide ('#testimonial-quotes-slider', {
  type: 'fade',
  rewind: true,
  drag: true,
  arrows: false,
  pagination: false,
  speed: 800,
  autoplay: true,
  interval: 1500,
  fixedHeight: '200px'
});

const testimonialLogosSlider = new Splide ('#testimonial-logos-slider', {
  perPage : 4,
  perMove: 1,
  cover   : true,
  height  : '5rem',
  gap: 10,
  fixedWidth: '5rem',
  arrows: false,
  pagination: false,
  isNavigation: true,
} );

testimonialQuotesSlider.sync( testimonialLogosSlider );
testimonialQuotesSlider.mount();

testimonialLogosSlider.mount();
