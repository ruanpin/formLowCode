<template>
  <div>
    <div class="options-title">條件渲染觸發值(cr_trigger)</div>
    <!-- <q-input class="" dense rounded outlined v-model="formObj.cr_trigger" ></q-input> -->
    MultipleValuesInArray
  </div>
</template>

<script setup>
defineOptions({
  name: 'MultipleValuesInArray'
})
const props = defineProps({
  formObj: {
    type: Object,
    required: true
  }
})

</script>
