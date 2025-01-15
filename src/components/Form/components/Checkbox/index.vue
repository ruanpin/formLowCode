<template>
  <div class="q-py-sm">
    <div class="f700 q-mb-xs fz14">{{ renderObject.label }}<span v-show="renderObject.required" style="color: #CC0100">*</span></div>
    <div class="flex-ac wrap">
      <q-checkbox
        v-for="(item, index) in renderObject.options" :key="index"
        class=""
        size="sm"
        style="height: 20px; transform: translateX(-10px)"
        v-model="renderObject.value"
        :val="item.value"
        @update:model-value="value => { updateHandler(value) }"
      >
          <span class="checkboxLabel">{{ item.label }}</span>
      </q-checkbox>
    </div>
  </div>
</template>

<script setup>
import { updateCrObjectToRenderList } from 'src/utils/ConditionalRender.js'
defineOptions({
  name: 'CheckboxComponent'
})
const props = defineProps({
  renderObject: {
    type: Object,
    required: true
  }
})
const emits = defineEmits(['updateCrObjectToRenderList'])

function updateHandler (newValue) {
  updateCrObjectToRenderList ({
    CRList: props.renderObject.cr_List,
    renderObject: props.renderObject,
    emits,
    newValue
  })
}
</script>

<style lang="scss" scoped>
  .checkboxLabel {
    position: relative;
    left: -4px;
  }
</style>
