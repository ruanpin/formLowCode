<template>
  <div>
    <div class="q-mb-sm">current object: {{ formSettings.submit_APISettings }}</div>
    <div class="q-gutter-md q-mt-xs">
      <div>
        <div class="options-title">HTTP方法(method)</div>
        <q-select
          dense
          outlined
          :options="HTTPMethodsList"
          v-model="formSettings.submit_APISettings.method"
          emit-value
          map-options
          @update:model-value="updateMethod"
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
      </div>
      <div>
        <div class="options-title">payload類別(payload type)</div>
        <q-select
          dense
          outlined
          :options="PayloadTypesMapping?.[formSettings.submit_APISettings.method] || emptyList"
          v-model="formSettings.submit_APISettings.PayloadTypes"
          emit-value
          map-options
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
      </div>
      <div class="options-title flex-ac">
        <div>URL設定(API URL)</div>
        <div class="flex-ac q-ml-xs q-gutter-sm">
          <q-btn unelevated color="grey-2" size="sm" round @click="updateUrlArray(true, formSettings.submit_APISettings.urlsArr)">
            <q-icon name="add" color="grey-9"></q-icon>
          </q-btn>
          <q-btn unelevated color="grey-2" size="sm" round @click="updateUrlArray(false, formSettings.submit_APISettings.urlsArr)" :disable="formSettings.submit_APISettings.urlsArr.length <= 1">
            <q-icon name="remove" color="grey-9"></q-icon>
          </q-btn>
        </div>
      </div>
      <div class="q-mt-none">
        <div class="f700 fz16">Target API URL:</div>
        <div>{{ targetAPIURL_Current }}</div>
      </div>
      <q-input
        v-for="(item, index) in formSettings.submit_APISettings.urlsArr"
        :key="index"
        class="q-mt-sm"
        dense
        outlined
        v-model="formSettings.submit_APISettings.urlsArr[index].url"
      />
      <!-- <div>
        <div class="options-title">送出前詢問(askUser)？</div>
        <q-checkbox class="" dense v-model="formSettings.submit_APISettings.askUser">是</q-checkbox>
      </div> -->
    </div>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue'

import { appsetting } from 'assets/appsetting.js'
defineOptions({
  name: 'HTTPRequsetSettingsComponent'
})
const props = defineProps({
  formSettings: {
    type: Object,
  }
})
const targetAPIURL_Current = computed(() => {
  return appsetting.AppUrl + '/api/' + props.formSettings.submit_APISettings.urlsArr.map(e => e.url).join('/')
})
const HTTPMethodsList = ref([
  { label: 'GET', value: 'GET' },
  { label: 'POST', value: 'POST' },
  { label: 'PUT', value: 'PUT' },
  { label: 'DELETE', value: 'DELETE' },
])
const PayloadTypesMapping = ref({
  GET: [
    { label: 'params', value: 'params' },
  ],
  POST: [
    { label: 'form-data', value: 'form' },
  ],
  PUT: [
    { label: 'form-data', value: 'form' },
  ],
  DELETE: [
    { label: 'form-data', value: 'form' },
    { label: 'params', value: 'params' },
  ]
})
const emptyList = ref(["請先選擇HTTP Request方法"])

function updateMethod (value) {
  props.formSettings.submit_APISettings.PayloadTypes = PayloadTypesMapping.value[value]?.[0]?.value || ""
}

function updateUrlArray (operate, target) {
  try {
    if (!Array.isArray(target)) throw new Error('The target you want to be updated is not Array.')
    if (operate) {
      target.push({
        url: ""
      })
    } else if (!operate && target.length > 1) {
      target.pop()
    }
  } catch {
    console.log('error, see above');
  }
}

</script>
