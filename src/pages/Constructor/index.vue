<template>
  <div class="container q-pa-md q-mr-xl height">
    <div class="flex-jc">
      <q-chip outline square size="18px" icon="integration_instructions" color="grey-9">
        表單JSON String產生器
      </q-chip>
    </div>
    <div class="">
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
          <q-btn unelevated color="DAA520" @click="updateElement(true)">
            <q-icon name="add"></q-icon>
          </q-btn>
          <q-btn unelevated color="DAA520" @click="updateElement(false)" :disable="formSettings.render.length <= 1">
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
} from 'src/formElementConstructors/Construsctors.js'

import Popup_JSONString from 'components/Popup_JSONString.vue'

import TypeOptionsComponent from './components/TypeOptions/index.vue'

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
  { label: 'select', value: 'select' },
])
const formSettings = ref({
  render: [{}],
  submit_APISettings: {

  }
})
const classMapping = {
  separator: Separator,
  input: Input,
  input_password: Input_password,
  input_date: Input_date
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
function updateElement (operate) {
  if (operate) {
    formSettings.value.render.push({})
  } else if (!operate && formSettings.value.render.length > 1) {
    formSettings.value.render.pop()
  }
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
