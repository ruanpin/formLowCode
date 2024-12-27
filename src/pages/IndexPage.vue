<template>
  <q-page class="flex flex-center background">
    <Constructor></Constructor>
    <Form></Form>
  </q-page>
</template>

<script setup>
import Constructor from './Constructor/index.vue'
import Form from './form/index.vue'

defineOptions({
  name: 'IndexPage'
});

// const store = useCounterStore()
// console.log(store, '55');
</script>

<style lang="scss" scoped>
  .background {
    // background-color: #d9dbb1;
  }
</style>
