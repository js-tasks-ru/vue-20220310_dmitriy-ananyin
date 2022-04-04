<template>
  <div class="toasts">
    <ui-toast-list  v-for="message in messages" key="message.id">
      <ui-toast :class-name="message.class" :icon="message.icon" :text="message.text"/>
    </ui-toast-list>
  </div>
</template>

<script>
import UiToastList from './UIToastList';
import UiToast from './UIToast';

export default {
  name: 'TheToaster',

  components: { UiToastList, UiToast },

  data() {
    return {
      messages: []
    }
  },

  methods: {
    success(str) {
      this.messages.push({
        id: Date.now(), 
        icon: 'check-circle', 
        class: 'toast_success', 
        text: str
      })
      this.hideMessagesTimer()
    },
    
    error(str) {
      this.messages.push({
        id: Date.now(), 
        icon: 'alert-circle', 
        class: 'toast_error', 
        text: str
      })
      this.hideMessagesTimer()
    },

    hideMessagesTimer(delay = 5000) {
      let vm = this
      setTimeout(() => {
        vm.messages.splice(0, 1)
      }, delay);
    }
  }

};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
