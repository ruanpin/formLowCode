<template>
  <div class="q-mb-md">
    <div class="options-title">條件渲染運算(cr_operation)</div>
    <q-select
      emit-value
      map-options
      dense
      outlined
      v-model="formObj.cr_operation"
      :options="cr_operationList"
    />
  </div>
  <div>
    <div class="options-title">條件渲染觸發值(cr_trigger)</div>
    <q-input class="" dense rounded outlined v-model="formObj.cr_trigger" ></q-input>
  </div>
</template>

<script setup>
defineOptions({
  name: 'PureValueInputComponent'
})
const props = defineProps({
  formObj: {
    type: Object,
    required: true
  },
  cr_operationList: {
    type: Array,
    default: () => []
  }
})

</script>
