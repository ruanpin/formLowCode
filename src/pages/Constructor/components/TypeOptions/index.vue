<template>
  <q-select
    dense
    borderless
    :options="constructorList"
    v-model="formObj.type"
    emit-value
    map-options
    @update:model-value="(value => emit('update:formObj', {formIndex, value}))"
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
  <div>
    <component :is="ComponentsMapping[formObj.type]"></component>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const ComponentsMapping = {
  input: defineAsyncComponent(()=> import('./components/InputOptions/index.vue')),
  select: defineAsyncComponent(()=> import('./components/SelectOptions/index.vue'))
}
defineOptions({
  name: 'TypeOptionsComponent'
});
const props = defineProps({
  constructorList: Object,
  formObj: Object,
  formIndex: String
})
const emit = defineEmits(['update:formObj'])
</script>
