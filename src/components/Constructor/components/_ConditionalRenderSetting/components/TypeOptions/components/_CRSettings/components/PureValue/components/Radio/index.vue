<template>
  <div class="q-mb-md">
    <div class="options-title">條件渲染運算(cr_operation)</div>
    <q-select
      emit-value
      map-options
      dense
      outlined
      v-model="formObj.cr_operation"
      :options="cr_operationList"
    />
  </div>
  <div>
    <div class="options-title">條件渲染觸發值(cr_trigger)</div>
    <div class="text-grey-8">觸發條件：父元素的值必須為此處所選擇的值</div>
    <OptionsSingleSelection
      :options="formObjOfFather.options"
      :target="props.formObj.cr_trigger"
      @update:select="updateSelecting"
    />
  </div>
</template>

<script setup>
import OptionsSingleSelection from 'src/components/OptionsSingleSelection.vue'
defineOptions({
  name: 'PureValueRadioComponent'
})
const props = defineProps({
  formObj: {
    type: Object,
    required: true
  },
  formObjOfFather: {
    type: Object,
  },
  cr_operationList: {
    type: Array,
    default: () => []
  }
})
function updateSelecting (item) {
  if (!item.value && item.value !== 0) return alert.warning('此選項未設置value值，建議回父元件重新設置')
  props.formObj.cr_trigger = item.value;
}

</script>
