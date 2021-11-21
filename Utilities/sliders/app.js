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
  flickPower: 200,
  flickMaxPages: 1
})

infiniteSlider.mount();