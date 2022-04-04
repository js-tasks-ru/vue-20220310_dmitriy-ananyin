<template>
  <transition name="ui-toast-list">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'UIToastList',
}
</script>

<style scoped>
.ui-toast-list-enter-from {
  opacity: 0;
}
.ui-toast-list-enter-to {
  opacity: 1;
}
.ui-toast-list-enter-active {
  transition: all .6s ease;
}
.ui-toast-list-leave-from {
  opacity: 1;
}
.ui-toast-list-leave-to {
  opacity: 0;
}
.ui-toast-list-leave-active {
  transition: all .5s ease;
}
</style>