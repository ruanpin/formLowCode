<template>
  <div class="q-py-sm" v-show="conditionalRender">
    <div class="f700 q-mb-xs fz14">{{ renderObject.label }}<span v-show="renderObject.required" style="color: #CC0100"> *</span></div>
    <q-input
      color="primary"
      class="col"
      dense
      outlined
      :placeholder="renderObject.placeholder"
      v-model="renderObject.value"
      stack-label
      @update:model-value="value => { updateCrReferenced(value) }"
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
import { computed } from 'vue'
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
const conditionalRender = computed(() => {
  return !props.renderObject.cr || (props.renderObject.cr && props.renderObject.cr_show)
})
const cr_referencedObjArr = computed(() => {
  return props.renderObject.cr_referenced?.map(e => props.formSettingsRenderList[e.referIndex])
})
function updateCrReferenced (newValue) {
  for (const key in cr_referencedObjArr.value) {
    const target = cr_referencedObjArr.value[key]
    // pureValue only
    if (target.cr_targetTrigger == newValue) target.cr_show = true
    else target.cr_show = false
  }
}
</script>

<style lang="scss" scoped>

</style>
