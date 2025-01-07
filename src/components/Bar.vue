<template>
  <q-bar>
    <div class="col text-center text-weight-bold">
      {{ title }}
    </div>
  </q-bar>
</template>

<script setup>
defineOptions({
  name: 'BarCustom'
})
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

</script>
