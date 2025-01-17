<template>
  <div>
    <div class="options-title">條件渲染觸發值(cr_trigger)</div>
    <div class="text-grey-8">觸發條件：父元素的值必須包含此處所選擇的值，缺一不可</div>
    <q-scroll-area style="height: 120px; max-width: 100%;">
      <div class="flex-ac warp q-pt-md">
        <div
          class="elementBox"
          :class="{
            selectedShadow: isSelected(item),
          }"
          v-for="(item, index) in formObjOfFather.options"
          :key="index"
          @click="handlerSelecting(item)"
        >
          <q-btn v-show="isSelected(item)" unelevated color="orange-8" size="xs" round class="checked">
            <q-icon name="check" size="sm"></q-icon>
          </q-btn>
          <div class="q-ml-md q-mr-sm">
            <q-avatar font-size="14px" size="md" :color="isSelected(item) ? 'orange-8' : 'grey-5'" text-color="white" class="f700">{{ index + 1 }}</q-avatar>
          </div>
          <div class="ellipsis q-pr-md">
            <div class="f700 ellipsis">{{ item.label }}</div>
            <div class="text-grey-8 ellipsis">{{ item.value }}</div>
          </div>
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
defineOptions({
  name: 'MultipleValuesInArrayComponent'
})
const props = defineProps({
  formObj: {
    type: Object,
    required: true
  },
  formObjOfFather: {
    type: Object
  }
})
const alert = inject('alert')

function handlerSelecting (item) {
  if (!item.value && item.value !== 0) return alert.warning('此選項未設置value值，建議回父元素重新設置')
  const index = props.formObj.cr_trigger.indexOf(item.value);
  if (index === -1) {
    props.formObj.cr_trigger.push(item.value);
  } else {
    props.formObj.cr_trigger.splice(index, 1);
  }
}
function isSelected(item) {
  if (!props.formObj?.cr_trigger || !Array.isArray(props.formObj?.cr_trigger)) return
  return props.formObj.cr_trigger.includes(item.value);
}

</script>
<style lang="scss" scoped>
  .elementBox {
    background-color: white;
    width: 180px;
    height: 80px;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.25);
    transition: all 0.1s ease;
    .checked {
      position: absolute;
      top: -10px;
      right: -10px;
      background-color: orange;
    }
  }
  .selectedShadow {
    // box-shadow: 0px 0px 10px rgba(124, 179, 66, 0.35);
    box-shadow: 0px 0px 10px rgba(245, 124, 1, 0.35);
  }
</style>
