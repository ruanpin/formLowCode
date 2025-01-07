<template>
  <div class="container q-pa-md q-mr-xl height">
    <div class="flex-jc">
      <q-chip outline square size="18px" icon="integration_instructions" color="grey-9">
        表單JSON String產生器
      </q-chip>
    </div>
    <div class="q-mb-md">
      <Bar class="q-my-sm" title="HTTP Request設定 (Submit)"/>
      <HTTPRequsetSettingsComponent
        :formSettings="formSettings"
        @update:value="updateAPISettings"
      />
    </div>
    <div class="">
      <Bar class="q-my-sm" title="表單元素選擇"/>
      <div class="q-mb-md" v-for="(formObj, index) in formSettings.render" :key="index">
        <q-avatar font-size="14px" size="sm" color="blue-9" text-color="white">{{ index + 1 }}</q-avatar>
        <div class="syncShowObject">current object: {{ formObj }}</div>
        <TypeOptionsComponent
          :constructorList="constructorList"
          :formObj="formObj"
          :formIndex="index"
          @update:formObj="updateFormObj"
        ></TypeOptionsComponent>
        <div class="separator"></div>
      </div>
      <div class="flex-re q-mb-md">
        <div class="flex-ac q-gutter-md">
          <q-btn unelevated color="DAA520" @click="updateElement(true, formSettings.render)">
            <q-icon name="add"></q-icon>
          </q-btn>
          <q-btn unelevated color="DAA520" @click="updateElement(false, formSettings.render)" :disable="formSettings.render.length <= 1">
            <q-icon name="remove"></q-icon>
          </q-btn>
        </div>
      </div>
      <div class="flex">
        <q-btn unelevated color="primary" class="col" @click="dialog.JSONStringResult.isShow = true">
          <q-icon name="send"></q-icon>
        </q-btn>
      </div>
    </div>
  </div>
  <Popup_JSONString :dialog="dialog" :formSettings="formSettings"/>
</template>

<script setup>
import { ref } from 'vue'
import {
  Separator,
  Input,
  Input_password,
  Input_date,
  Radio,
  Toggle,
  Textarea,
  Checkbox,
  Select,
  UploadImg,
} from 'src/formElementConstructors/Construsctors.js'

import Popup_JSONString from 'components/Popup_JSONString.vue'
import Bar from 'components/Bar.vue'

import TypeOptionsComponent from './components/TypeOptions/index.vue'
import HTTPRequsetSettingsComponent from './components/HTTPRequsetSettings/index.vue'

defineOptions({
  name: 'ConstructorComponent'
});
const dialog = ref({
  JSONStringResult: {
    isShow: false
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
const formSettings = ref({
  render: [{}],
  submit_APISettings: {
    method: "POST",
    urlsArr: [
      { url: "firstUrl_test" },
    ],
    askUser: false,
    PayloadTypes: "form",
  }
})
const classMapping = {
  separator: Separator,
  input: Input,
  input_password: Input_password,
  input_date: Input_date,
  radio: Radio,
  toggle: Toggle,
  textarea: Textarea,
  checkbox: Checkbox,
  select: Select,
  uploadImg: UploadImg
}
function updateFormObj ({ formIndex, value }) {
  try {
    if (!classMapping.hasOwnProperty(value))
      throw new Error('there is no such class you chose in mapping object, please check again.')
    formSettings.value.render[formIndex] = new classMapping[value]({})
  } catch {
    formSettings.value.render[formIndex] = Object.assign({}, { type: value })
  }
}
function updateElement (operate, target) {
  try {
    if (!Array.isArray(target)) throw new Error('The target you want to be updated is not Array.')
    if (operate) {
      target.push({})
    } else if (!operate && target.length > 1) {
      target.pop()
    }
  } catch {
    console.log('error, see above');
  }
}
function updateAPISettings ({ key, value }) {
  formSettings.value.submit_APISettings[key] = value
}
</script>

<style lang="scss" scoped>
  .container {
    background-color: #decb99 ;
    border-radius: 24px;
    box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.25);
    width: 500px;
    .height {
      min-height: 570px;
    }
    .separator {
      margin: 12px 0px;
      height: 1px;
      width: 100%;
      background-color: #aba3a3;
    }
    .main-title {
      font-weight: 700;
      font-size: 20px;
    }
    .syncShowObject {
      word-wrap: break-word
    }
  }
</style>
