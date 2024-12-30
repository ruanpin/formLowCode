<template>
  <div>
    <div class="sep"></div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'SeparatorComponent'
})
defineProps({
  renderObject: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
  .sep {
    height: 2px;
    width: 100%;
    background-color: #9F9F9F;
  }
</style>
