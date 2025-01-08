<template>
  <q-page class="flex q-py-md flex-jc">
    <div class="col-lg col-md col-sm-12 col-xs-12 q-mx-md">
      <Constructor></Constructor>
    </div>
    <div class="col-lg col-md col-sm-12 col-xs-12 q-mx-md">
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
