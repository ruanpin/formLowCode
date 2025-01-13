<template>
  <div class="q-py-sm">
    <div class="f700 q-mb-xs fz14">{{ renderObject.label }}<span v-show="renderObject.required" style="color: #CC0100"> *</span></div>
    <q-select
      emit-value
      map-options
      dense
      outlined
      v-model="renderObject.value"
      :options="renderObject.options"
      @update:model-value="value => { updateHandler(value) }"
    />
  </div>
</template>

<script setup>
import { updateCrObjectToRenderList } from 'src/utils/ConditionalRender.js'
defineOptions({
  name: 'SelectComponent'
})
const props = defineProps({
  renderObject: {
    type: Object,
    required: true
  }
})
const emits = defineEmits(['updateCrObjectToRenderList'])

function updateHandler (newValue) {
  console.log(newValue);
  updateCrObjectToRenderList ({
    CRList: props.renderObject.cr_List,
    renderObject: props.renderObject,
    emits,
    newValue
  })
}
</script>

<style lang="scss" scoped>

</style>
