<template>
  <q-page class="flex flex-jc background">
    <div class="col-lg col-md col-sm-12 col-xs-12 q-ma-md">
      <Constructor></Constructor>
    </div>
    <div class="col-lg col-md col-sm-12 col-xs-12 q-ma-md ">
      <Form></Form>
    </div>
  </q-page>
</template>

<script setup>
import Constructor from 'components/Constructor/index.vue'
import Form from 'components/Form/index.vue'

defineOptions({
  name: 'IndexPage'
});
</script>

<style lang="scss" scoped>
  .background {
    background: url('../assets/105314.jpg');
    background-size: cover;
    background-position: center;
  }
</style>
