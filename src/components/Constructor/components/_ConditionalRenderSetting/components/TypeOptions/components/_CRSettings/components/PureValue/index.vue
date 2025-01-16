<template>
  <div>
    <component
      :is="ElementTypesMapping[formObjOfFather.type]"
      :formObj="formObj"
      :formObjOfFather="formObjOfFather"
      :cr_operationList="cr_operationTypeMapping[formObjOfFather.type]"
    />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { cr_operationTypeMapping } from 'src/utils/ConditionalRender.js'

defineOptions({
  name: 'PureValueComponent'
})
const ElementTypesMapping = {
  input: defineAsyncComponent(() => import('./components/Input/index.vue')),
  radio: defineAsyncComponent(() => import('./components/Radio/index.vue')),
  toggle: defineAsyncComponent(() => import('./components/Toggle/index.vue')),
  select: defineAsyncComponent(() => import('./components/Select/index.vue')),
}
const props = defineProps({
  formObj: {
    type: Object,
    required: true
  },
  formObjOfFather: {
    type: Object,
  }
})

</script>
