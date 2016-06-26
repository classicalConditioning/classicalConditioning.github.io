import {inject} from 'aurelia-framework';

@inject(Element)
export class AllowExpendMultipleCustomAttribute {
  constructor(element) {
    this.element = element;
    this.element.AllowExpendMultiple = true;
  }

  valueChanged(newValue, oldValue) {

  }
}