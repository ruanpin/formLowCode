<template>
  <q-page class="flex flex-center">
    <Constructor></Constructor>
    <Form></Form>
  </q-page>
</template>

<script setup>
import Constructor from './Constructor/index.vue'
import Form from './Form/index.vue'

defineOptions({
  name: 'IndexPage'
});
</script>
