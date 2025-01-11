<template>
  <div class="q-py-sm">
    <div class="f700 q-mb-xs fz14">{{ renderObject.label }}<span v-show="renderObject.required" style="color: #CC0100"> *</span></div>
    <q-input
      color="primary"
      class="col"
      dense
      outlined
      :placeholder="renderObject.placeholder"
      v-model="renderObject.value"
      stack-label
      @update:model-value="value => { updateHandler(value) }"
    >
      <template v-slot:append>
        <q-btn dense round size="sm" unelevated>
          <q-icon class="cursor-pointer" name="close" size="xs" @click="renderObject.value = ''"></q-icon>
        </q-btn>
      </template>
    </q-input>
  </div>
</template>

<script setup>
import { updateCrObjectToRenderList } from 'src/utils/ConditionalRender.js'
defineOptions({
  name: 'InputComponent'
})
const props = defineProps({
  renderObject: {
    type: Object,
    required: true
  },
  formSettingsRenderList: {
    type: Array,
  }
})
const emits = defineEmits(['updateCrObjectToRenderList'])
const reversedCRList = props.renderObject.cr_List.reverse()
// function updateCrObjectToRenderList (newValue) {
//   for (const key in reversedCRList) {
//     const objectInCrList = reversedCRList[key]
//     const targetIndexWhenAdding = Number(props.renderObject.index) + 1 // 尚未新增時預設自己的後一位
//     const targetIndexWhenDeleting = Number(objectInCrList.index) // 由於新增進render Array後index會重置，依重置後index為主，才能抓到正確位置
//     // pureValue only
//     emits('updateCrObjectToRenderList', {
//       execute: objectInCrList.cr_trigger == newValue,
//       targetIndex: objectInCrList.cr_trigger == newValue ? targetIndexWhenAdding : targetIndexWhenDeleting,
//       objectInCrList
//     })
//   }
// }
function updateHandler (newValue) {
  updateCrObjectToRenderList ({
    reversedCRList,
    renderObject: props.renderObject,
    emits,
    newValue
  })
}

</script>

<style lang="scss" scoped>

</style>
