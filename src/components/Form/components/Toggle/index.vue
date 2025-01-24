<template>
  <div class="q-py-sm" :class="rootClass">
    <div class="f700 q-mb-xs fz14 wordBreakAll" :class="titleClass">{{ renderObject.label }}<span v-show="renderObject.required" style="color: #CC0100">*</span></div>
    <q-toggle
      v-model="renderObject.value"
      :label="renderObject.label"
      class=""
      dense
      :false-value="renderObject.falsevalue"
      :true-value="renderObject.truevalue"
      @update:model-value="value => { updateHandler(value) }"
    />
  </div>
</template>

<script setup>
import { updateCrObjectToRenderList } from 'src/utils/ConditionalRender.js'

import {
  useElementLayout,
} from '../../composables/elementCSS.js'

defineOptions({
  name: 'ToggleComponent'
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

const {
  rootClass,
  titleClass,
} = useElementLayout({ renderObject: props.renderObject })
</script>

<style lang="scss" scoped>

</style>
