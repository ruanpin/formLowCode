<template>
  <div>
    <q-chip
      outline
      square
      size="md"
      color="deep-orange"
      text-color="white"
      icon="toggle_on"
      class="q-ma-none q-mt-md q-mb-xs"
    >
      條件渲染設定
    </q-chip>
    <div class="q-gutter-md">
      <div>
        <div class="options-title">條件渲染類型(cr_type)</div>
        <q-select
          emit-value
          map-options
          dense
          outlined
          v-model="formObj.cr_type"
          :options="formElementsAndRenderingTypesMapping[formObjOfFather.type]"
        />
      </div>
      <component
        :is="cr_triggerMapping[formObj.cr_type]"
        :formObj="formObj"
      />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { formElementsAndRenderingTypesMapping } from 'src/utils/ConditionalRender.js'
defineOptions({
  name: 'CRSettingsComponent'
})
const props = defineProps({
  formObj: {
    type: Object,
    required: true
  },
  formObjOfFather: {
    type: Object,
    required: true
  }
})
const cr_triggerMapping = {
  pureValue: defineAsyncComponent(()=> import('./components/PureValue/index.vue')),
  multipleValuesInArray: defineAsyncComponent(()=> import('./components/PureValue/index.vue')),
}
</script>
