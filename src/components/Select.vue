<template>
  <q-select
    dense
    outlined
    :options="optionsList"
    v-model="selectVMContainer"
    emit-value
    map-options
    @update:model-value="updateValue"
  >
    <template v-slot:option="scope">
      <q-item
        v-bind="scope.itemProps"
        class="q_item_hover"
        style="
          background-color: #95a654;
          color: white;
          font-weight: 700;
        "
      >
        <q-item-section>
          <q-item-label>{{ scope.opt?.label ? scope.opt.label : scope.opt }}</q-item-label>
          <!-- <q-item-label>{{ scope.opt?.inactive ? scope.opt.label : scope.opt }}</q-item-label> -->
        </q-item-section>
      </q-item>
    </template>
  </q-select>
  <!-- 使用如下 -->
  <!-- <Select
    targetKey="method"
    defaultValue="POST"
    :optionsList="HTTPMethodsList"
    @update:value="updateValue"
  ></Select> -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
defineOptions({
  name: 'SelectComponent'
})
const selectVMContainer = ref("")
const props = defineProps(["optionsList", "targetKey", "defaultValue"])
const emit = defineEmits(['update:value'])
function updateValue (value) {
  emit('update:value', {key: props.targetKey, value})
}
onMounted(() => {
  selectVMContainer.value = props.defaultValue
})
</script>
