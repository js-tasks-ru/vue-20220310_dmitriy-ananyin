import { createApp } from './vendor/vue.esm-browser.js';

createApp({
  data() {
    return {
      numA: 0,
      numB: 0,
      operator: 'sum',
    };
  },
  computed: {
    handleResult() {
      let result;
      switch (this.operator) {
        case 'sum':
          result = this.numA + this.numB;
          break;
        case 'subtract':
          result = this.numA - this.numB;
          break;
        case 'multiply':
          result = this.numA * this.numB;
          break;
        case 'divide':
          result = this.numA / this.numB;
          break;
      }
      return result;
    },
  },
}).mount('#app');
