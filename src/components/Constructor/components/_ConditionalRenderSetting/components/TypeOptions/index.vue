<template>
  <q-chip outline square size="md" color="primary" text-color="white" icon="radio_button_checked" class="q-ma-none q-my-sm">
    表單元素
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
      color="primary"
      text-color="white"
      icon="format_list_bulleted  "
      class="q-ma-none q-mt-md q-mb-xs"
    >
      基本設定
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

    <!-- 條件渲染 條件設定 -->
    <CRSettingsComponent
      v-show="formObj.type"
      :formObj="formObj"
      :formObjOfFather="formObjOfFather"
    />
    <div class="row q-mt-lg" v-show="formObj.type && isButtonShow_ConditionalRenderMapping[formObj.type]">
      <q-btn unelevated color="orange-8" class="col" @click="dialog.ConditionalRenderSetting.isShow = true">
        <q-icon class="q-mr-xs" name="settings"></q-icon>條件渲染設定
      </q-btn>
    </div>
    <Popup_ConditionalRenderSetting
      :dialog="dialog"
      :formObjOfFather="formObj"
    />
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'
const ComponentsMapping = {
  input: defineAsyncComponent(()=> import('../../../TypeOptions/components/InputOptions/index.vue')),
  input_password: defineAsyncComponent(()=> import('../../../TypeOptions/components/InputOptions/index.vue')),
  input_date: defineAsyncComponent(()=> import('../../../TypeOptions/components/InputOptions/index.vue')),
  radio: defineAsyncComponent(() => import('../../../TypeOptions/components/RadioOptions/index.vue')),
  toggle: defineAsyncComponent(() => import('../../../TypeOptions/components/ToggleOptions/index.vue')),
  textarea: defineAsyncComponent(() => import('../../../TypeOptions/components/TextareaOptions/index.vue')),
  checkbox: defineAsyncComponent(() => import('../../../TypeOptions/components/CheckboxOptions/index.vue')),
  select: defineAsyncComponent(()=> import('../../../TypeOptions/components/SelectOptions/index.vue')),
  uploadImg: defineAsyncComponent(()=> import('../../../TypeOptions/components/UploadImgOptions/index.vue')),
}
const ExtendsComponentsMapping = {
  input_password: defineAsyncComponent(()=> import('../../../TypeOptions/components/InputExtends/Password/index.vue')),
  input_date: defineAsyncComponent(()=> import('../../../TypeOptions/components/InputExtends/Date/index.vue')),
}
const CRSettingsComponent = defineAsyncComponent(()=> import('./components/_CRSettings/index.vue'))
const Popup_ConditionalRenderSetting = defineAsyncComponent(()=> import('../../index.vue'))
const isButtonShow_ConditionalRenderMapping = {
  input: true,
  input_password: false,
  input_date: true,
  radio: true,
  toggle: true,
  textarea: false,
  checkbox: true,
  select: true,
  uploadImg: false,
}

defineOptions({
  name: 'TypeOptionsComponent'
});
const props = defineProps({
  constructorList: Object,
  formObj: Object,
  formIndex: Number,
  formObjOfFather: Object,
})
const emit = defineEmits(['update:formObj'])

const dialog = ref({
  ConditionalRenderSetting: {
    isShow: false
  }
})
</script>
