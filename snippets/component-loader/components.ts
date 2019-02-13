
import Dummy from './components/dummy';

export default class Components {
  components: { };
  componentsCollection: {};
  loadedComponentElements: any;


  constructor() {
    this.components = {
      'dummy': Dummy
    };
    this.componentsCollection = {};
    this.loadedComponentElements = [];
  }

  findComponents() {
    const elements = document.querySelectorAll<HTMLElement>('[data-js-component]');

    for (let i = 0; i < elements.length; i += 1) {
      const name = elements[i].dataset.jsComponent;
      this.initComponent(name, elements[i]);
    }
  }

  initComponent(componentName, el) {
    if (this.components[componentName]) {
      if (this.loadedComponentElements.indexOf(el) < 0) {
        this.loadedComponentElements.push(el);
        if (this.componentsCollection[componentName]) {
          this.componentsCollection[componentName]
            .push(new this.components[componentName](el));
        } else {
          this.componentsCollection[componentName] = [new this.components[componentName](el)];
        }
      }
    } else {
      console.log(`The component: ${componentName} is not declared`);
    }
  }

  getComponents() {
    return this.componentsCollection;
  }
}