import {bindable} from 'aurelia-framework';

export class Accordion {
  @bindable panels;
  @bindable allowExpendMultiple;
  @bindable vm;
  @bindable styles; 

  bind() {
    if (!this.allowExpendMultiple) {
      this.allowExpendMultiple = false;
    }

    if (this.panels) {
      this.panels.forEach((panel) => {
        panel.active = false;
      });
    } else {
      throw new Error("Panels are not bound!");
    }
  }

  toggle(index) {
    this.panels[index].active = !this.panels[index].active;
    if (!this.allowExpendMultiple) {
      for (let counter = 0; counter < this.panels.length; counter++) {
        if (counter !== index) {
          this.panels[counter].active = false;
        }
      }
    }
  }
}