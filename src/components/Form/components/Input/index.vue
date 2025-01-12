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
