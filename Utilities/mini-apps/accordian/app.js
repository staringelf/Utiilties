const accordianApp = {
  init (accordianSelector) {
    this.accordian = document.querySelector(accordianSelector);
    if (!this.accordian) return;
    this.accordianItems = this.accordian.querySelectorAll('.accordian__item');
    this.accordianHeaders = this.accordian.querySelectorAll('.accordian__header');
    this.accordianPanels = this.accordian.querySelectorAll('.accordian__panel');
    
    this.setupEventListeners();
  },
  
  setupEventListeners() {
    this.accordianHeaders.forEach(header => header.onclick = this.handleAccordianHeaderClick.bind(this));
  },
  
  handleAccordianHeaderClick ({ target }) {
    const accordianItem = target.closest('.accordian__item');
    if ( accordianItem.classList.contains('accordian__item--active')){
      accordianItem.classList.remove('accordian__item--active');
      const panel = accordianItem.querySelector('.accordian__panel');
      const panelHeight = 0;
      panel.style.height = '0px';
      panel.style.padding = '0 10px 0 20px';
      return;
    };
    accordianItem.classList.add('accordian__item--active');
    const panel = accordianItem.querySelector('.accordian__panel');
    const panelHeight = panel.scrollHeight * 2;
    panel.style.height = `${panelHeight}px`;
    panel.style.padding = `10px 10px 10px 20px`;
  }
}
  
accordianApp.init('.accordian');