<template>
  <div class="q-py-sm">
    <div class="f700 q-mb-xs fz14">{{ renderObject.label }}<span v-show="renderObject.required" style="color: #CC0100">*</span></div>
    <q-input
      class="col"
      outlined
      dense
      v-model="renderObject.value"
      mask="date"
      @update:model-value="value => { updateHandler(value) }"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date
              minimal
              v-model="renderObject.value"
              @update:model-value="value => { updateHandler(value) }"
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script setup>
import { updateCrObjectToRenderList } from 'src/utils/ConditionalRender.js'
defineOptions({
  name: 'DateComponent'
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

</style>
