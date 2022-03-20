import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: ['count'],
  emits: ['update'],

  template: `<button type="button" @click="$emit('update', 1)">{{ count }}</button>`,
});
