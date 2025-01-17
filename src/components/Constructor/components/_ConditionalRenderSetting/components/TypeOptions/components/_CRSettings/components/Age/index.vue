<template>
  <div>
    <!-- :formObjOfFather="formObjOfFather" -->
    <component
      :is="ElementTypesMapping[formObjOfFather.type]"
      :formObj="formObj"
      :cr_operationList="cr_operationTypeMapping[formObjOfFather.type]"
    />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { cr_operationTypeMapping } from 'src/utils/ConditionalRender.js'

defineOptions({
  name: 'AgeComponent'
})
const ElementTypesMapping = {
  input_date: defineAsyncComponent(() => import('./components/Input_date/index.vue')),
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
