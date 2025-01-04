<template>
  <q-chip outline square size="md" color="primary" text-color="white" icon="radio_button_checked" class="q-ma-none q-my-sm">
    選擇表單元素
  </q-chip>
  <q-select
    dense
    outlined
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
    <q-chip
      v-show="formObj.type"
      outline
      square
      size="md"
      color="deep-orange"
      text-color="white"
      icon="format_list_bulleted  "
      class="q-ma-none q-mt-md q-mb-xs"
    >
      表單元素設定
    </q-chip>
    <component
      :is="ComponentsMapping[formObj.type]"
      :formObj="formObj"
    >
      <!-- slot:擴充選項 -->
      <component
        :is="ExtendsComponentsMapping[formObj.type]"
        :formObj="formObj"
      />
    </component>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const ComponentsMapping = {
  input: defineAsyncComponent(()=> import('./components/InputOptions/index.vue')),
  input_password: defineAsyncComponent(()=> import('./components/InputOptions/index.vue')),
  input_date: defineAsyncComponent(()=> import('./components/InputOptions/index.vue')),
  radio: defineAsyncComponent(() => import('./components/RadioOptions/index.vue')),
  toggle: defineAsyncComponent(() => import('./components/ToggleOptions/index.vue')),
  select: defineAsyncComponent(()=> import('./components/SelectOptions/index.vue')),
}
const ExtendsComponentsMapping = {
  input_password: defineAsyncComponent(()=> import('./components/InputExtends/Password/index.vue')),
  input_date: defineAsyncComponent(()=> import('./components/InputExtends/Date/index.vue')),
}
defineOptions({
  name: 'TypeOptionsComponent'
});
const props = defineProps({
  constructorList: Object,
  formObj: Object,
  formIndex: Number,
})
const emit = defineEmits(['update:formObj'])
</script>
