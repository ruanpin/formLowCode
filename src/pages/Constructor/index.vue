<template>
  <div class="container q-pa-md q-mr-xl height">
    <div class="">表單JSON String產生器</div>
    <div class="">
      <div class="" v-for="(formObj, index) in formSettings" :key="index">
        <TypeOptionsComponent
          :constructorList="constructorList"
          :formObj="formObj"
          :formIndex="index"
          @update:formObj="updateFormObj"
        ></TypeOptionsComponent>
      </div>
      <div class="separator"></div>
      <div class="flex-re">
        <div class="flex-ac q-gutter-md">
          <q-btn push color="DAA520" square @click="updateElement(true)">
            <q-icon name="add"></q-icon>
          </q-btn>
          <q-btn push color="DAA520" square @click="updateElement(false)" :disable="formSettings.length <= 1">
            <q-icon name="remove"></q-icon>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Input
} from 'src/formElementConstructors/Construsctors.js'
import TypeOptionsComponent from './components/TypeOptions/index.vue'

defineOptions({
  name: 'ConstructorComponent'
});
const constructorList = ref([
  { label: 'input', value: 'input' },
  { label: 'select', value: 'select' },
])
const formSettings = ref([
  {}
])
const classMapping = {
  input: Input
}
function updateFormObj ({ formIndex, value }) {
  if (!classMapping.hasOwnProperty(value))
    throw new Error('there is no such class you chose in mapping object, please check again.')
  formSettings.value[formIndex] = new classMapping[value]({})
}
function updateElement (operate) {
  if (operate) {
    formSettings.value.push({})
  } else if (!operate && formSettings.value.length > 1) {
    formSettings.value.pop()
  }
}
</script>

<style lang="scss" scoped>
  .container {
    background-color: #decb99 ;
    border-radius: 24px;
    box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.25);
    min-width: 500px;
    .height {
      min-height: 570px;
    }
    .separator {
      margin: 12px 0px;
      height: 1px;
      width: 100%;
      background-color: #aba3a3;
    }
  }
</style>
