const observerApp = {

  init() {
    this.slideInLefts = document.querySelectorAll('.slide-in-left');
    this.slideInRights = document.querySelectorAll('.slide-in-right');
    this.fadeInUps = document.querySelectorAll('.fade-in-up');

    this.elements = [...this.slideInLefts, ...this.slideInRights, ...this.fadeInUps];

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          console.log('in the view', entry);
          
          entry.target.classList.add('observed');
  
          this.observer.unobserve(entry.target);
        } else {
          console.log('out of view');
        }
      });
    });

    window.onload = this.setupDelays.bind(this);
    this.setupDelays();
    this.setupObserver();
  },

  setupDelays() {

    const register = {};

    this.fadeInUps.forEach(el => {
      const { offsetTop } = el;
      if (! register[offsetTop] ){
        register[offsetTop] = [];
      }
      register[offsetTop].push(el);
    });
    
    for (const entry in register) {
    
      register[entry].forEach((el, index) => {
        el.dataset.delay = index*0.18;
        el.style.transitionDelay = `${index*0.18}s`;
      })
      
      // if (entry < window.screen.height ){
      //   this.data[property].forEach((node) => {
      //     node.classList.add('observed');
      // 	})
      // }
      
      }
  },

  setupObserver() {
    this.elements.forEach(el => {
      this.observer.observe(el);
    });
  }
}

observerApp.init();