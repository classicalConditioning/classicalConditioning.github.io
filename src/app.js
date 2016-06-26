export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['','aurelia-accordion'], name: 'aurelia-accordion', moduleId: './views/aurelia-accordion/aurelia-accordion', nav: false, title:'Aurelia Accordion Sample' }
    ]);

    this.router = router;
  }
}
