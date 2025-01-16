<template>
  <q-dialog v-model="dialog.ConditionalRenderSetting.isShow">
    <q-card style="max-width: 1200px; width: 650px;">
      <q-card-section>
        <div class="text-h6 flex-sb">
          <div>條件渲染設定</div>
          <q-btn icon="close" flat round dense v-close-popup />
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none q-pb-none">
        <div class="q-mb-sm">
          <div class="q-mb-md">
            <div class="f700 fz17">父元素</div>
            <div class="text-grey-8"><span class="f700 text-black">Type: </span>{{ formObjOfFather.type }}</div>
            <div class="text-grey-8"><span class="f700 text-black">Name: </span>{{ formObjOfFather.name || '未設定' }}</div>
            <div class="text-grey-8"><span class="f700 text-black">Label: </span>{{ formObjOfFather.label || '未設定' }}</div>
            <div class="text-grey-8"><span class="f700 text-black">Field: </span>{{ formObjOfFather.field || '未設定' }}</div>
            <div class="text-grey-8" v-if="formObjOfFather.hasOwnProperty('options')">
              <span class="f700 text-black">Options: </span>
              <span v-for="(item, index) in formObjOfFather.options" :key="index">
                {{ item }},
              </span>
            </div>
            <div class="text-grey-8" v-show="formObjOfFather.hasOwnProperty('truevalue')">
              <span class="f700 text-black">True value: </span>{{ formObjOfFather.truevalue || '未設定' }}
            </div>
            <div class="text-grey-8" v-show="formObjOfFather.hasOwnProperty('falsevalue')">
              <span class="f700 text-black">False value: </span>{{ formObjOfFather.falsevalue || '未設定' }}
            </div>
          </div>
          <div class="q-mb-md">
            <div class="f700 fz17">選擇條件渲染元素</div>
            <div class="text-grey-8">這裡選擇的元素會依據條件是否與<span class="f700 text-black">父元素的值</span>匹配來決定是否出現在畫面中</div>
          </div>
          <Bar class="q-my-sm" title="表單元素選擇"/>
          <div class="q-mb-md" v-for="(formObj, index) in formObjOfFather.cr_List" :key="index">
            <q-avatar font-size="14px" size="sm" color="blue-9" text-color="white">{{ index + 1 }}</q-avatar>
            <div class="syncShowObject">current object: {{ formObj }}</div>
            <TypeOptionsComponent
              :constructorList="constructorList"
              :formObj="formObj"
              :formIndex="index"
              :formObjOfFather="formObjOfFather"
              @update:formObj="updateFormObj"
            ></TypeOptionsComponent>
          </div>
          <div class="flex-re q-mb-md">
            <div class="flex-ac q-gutter-md">
              <q-btn unelevated color="DAA520" @click="updateElement(true, formObjOfFather.cr_List)">
                <q-icon name="add"></q-icon>
              </q-btn>
              <q-btn unelevated color="DAA520" @click="updateElement(false, formObjOfFather.cr_List)" :disable="Array.isArray(formObjOfFather.cr_List) && formObjOfFather.cr_List.length <= 0">
                <q-icon name="remove"></q-icon>
              </q-btn>
            </div>
          </div>
        </div>
      </q-card-section>

      <div class="row q-pa-md">
        <div class="col row">
          <q-btn class="col" unelevated outline color="primary" @click="dialog.ConditionalRenderSetting.isShow = false">
            close
          </q-btn>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
import {
  Separator_CR,
  Input_CR,
  Input_password_CR,
  Input_date_CR,
  Radio_CR,
  Toggle_CR,
  Textarea_CR,
  Checkbox_CR,
  Select_CR,
  UploadImg_CR,
} from 'src/formElementConstructors/_CRConstructors.js'
import Bar from 'components/Bar.vue'

import TypeOptionsComponent from './components/TypeOptions/index.vue'
defineOptions({
  name: 'Popup_ConditionalRenderSetting'
})
const props = defineProps({
  dialog: {
    type: Object,
    required: true
  },
  formObjOfFather: {
    type: Object,
  }
})
const constructorList = ref([
  { label: 'separator', value: 'separator' },
  { label: 'input', value: 'input' },
  { label: 'input(密碼型)', value: 'input_password' },
  { label: 'input(日期)', value: 'input_date' },
  { label: 'radio', value: 'radio' },
  { label: 'toggle', value: 'toggle' },
  { label: 'textarea', value: 'textarea' },
  { label: 'checkbox', value: 'checkbox' },
  { label: 'select', value: 'select' },
  { label: 'uploadImg-上傳照片', value: 'uploadImg' },
])
const classMapping = {
  separator: Separator_CR,
  input: Input_CR,
  input_password: Input_password_CR,
  input_date: Input_date_CR,
  radio: Radio_CR,
  toggle: Toggle_CR,
  textarea: Textarea_CR,
  checkbox: Checkbox_CR,
  select: Select_CR,
  uploadImg: UploadImg_CR
}

function updateFormObj ({ formIndex, value }) {
  try {
    if (!classMapping.hasOwnProperty(value))
      throw new Error('there is no such class you chose in mapping object, please check again.')
    const params = {
      cr_trigger: "" // default
    }
    if (props.formObjOfFather.type === 'checkbox') {
      params.cr_trigger = []
    }
    props.formObjOfFather.cr_List[formIndex] = new classMapping[value](params)
  } catch(e) {
    console.log(e);
    props.formObjOfFather.cr_List[formIndex] = Object.assign({}, { type: value })
  }
}
function updateElement (operate, target) {
  try {
    if (!Array.isArray(target)) throw new Error('The target you want to be updated is not Array.')
    if (operate) {
      target.push({})
    } else if (!operate && target.length > 0) {
      target.pop()
    }
  } catch(e) {
    console.log('error, see above', e);
  }
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
    box-shadow: 0px 0px 10px rgba(124, 179, 66, 0.35);
  }
  .forbiddenItself {
    cursor: not-allowed;
  }
</style>
