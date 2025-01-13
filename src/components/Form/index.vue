<template>
  <div class="q-pa-md container">
    <div class="flex-jc q-mb-sm">
      <q-chip outline square size="18px" icon="preview" color="grey-9">
        編譯器(compiler)元件
      </q-chip>
    </div>
    <template v-for="renderObj in formSettings.render" :key="renderObj.index">
      <div class="row items-center">
        <div class="col">
          <component
            :is="componentsRenderingMap[renderObj.type]"
            :renderObject="renderObj"
            :formSettingsRenderList="formSettings.render"
            @updateCrObjectToRenderList="updateCrObjectToRenderList"
          />
        </div>
      </div>
    </template>
    <div class="q-mt-sm flex-ac">
      <q-btn
        flat
        unelevated
        rounded
        class="col"
        style="
          background: white;
        "
        size="md"
        :loading="loading.submit"
        @click="submitForm(formSettings.submit_APISettings)"
      >
        <span>submit</span>
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent, watch, inject } from 'vue'
import { useJSONSharingStore } from 'stores/JSONSharing.js'
import { useHttpRequestStore } from 'stores/HttpRequest.js'
import { mainService } from 'src/utils/ObjectProcessService.js'

defineOptions({
  name: 'FormComponent'
})
const componentsRenderingMap = {
  separator: defineAsyncComponent(()=> import('./components/Separator/index.vue')),
  input: defineAsyncComponent(()=> import('./components/Input/index.vue')),
  input_password: defineAsyncComponent(()=> import('./components/InputPassword/index.vue')),
  input_date: defineAsyncComponent(()=> import('./components/InputDate/index.vue')),
  radio: defineAsyncComponent(()=> import('./components/Radio/index.vue')),
  toggle: defineAsyncComponent(()=> import('./components/Toggle/index.vue')),
  textarea: defineAsyncComponent(()=> import('./components/Textarea/index.vue')),
  checkbox: defineAsyncComponent(()=> import('./components/Checkbox/index.vue')),
  select: defineAsyncComponent(()=> import('./components/Select/index.vue')),
  uploadImg: defineAsyncComponent(()=> import('./components/UploadImg/index.vue')),
  mutiInputsColumn: defineAsyncComponent(()=> import('./components/MutiInputsColumn/index.vue')),
  mutiSelectsColumn: defineAsyncComponent(()=> import('./components/MutiSelectsColumn/index.vue')),
  dateRange: defineAsyncComponent(()=> import('./components/DateRange/index.vue')),
}

const alert = inject('alert')
const storeJSONSharing = useJSONSharingStore()
const storeHttpRequest = useHttpRequestStore()
const loading = ref({
  submit: false
})

const formSettings = ref({
  render: [
    {
      index: 0,
      name: "姓名",
      type: "input",
      label: "姓名",
      field: "fName",
      value: "",
      required: false,
      originValue: "",
      cr_List: [
        {
          name: "綽號第一層",
          type: "input",
          label: "綽號第一層",
          field: "fNickName",
          value: "",
          color: "teal-4",
          required: false,
          originValue: "",
          cr_type: "pureValue",
          cr_trigger: "123",
          cr_List: [
            {
              name: "綽號第二層",
              type: "input",
              label: "綽號第二層",
              field: "fNickName",
              value: "",
              color: "teal-4",
              required: false,
              originValue: "",
              cr_type: "pureValue",
              cr_trigger: "123",
              cr_List: [
                {
                  name: "綽號第三層",
                  type: "input",
                  label: "綽號第三層",
                  field: "fNickName",
                  value: "",
                  color: "teal-4",
                  required: false,
                  originValue: "",
                  cr_type: "pureValue",
                  cr_trigger: "123",
                  cr_List: [
                    {
                      name: "綽號第四層",
                      type: "input",
                      label: "綽號第四層",
                      field: "fNickName",
                      value: "",
                      color: "teal-4",
                      required: false,
                      originValue: "",
                      cr_List: [],
                      cr_type: "pureValue",
                      cr_trigger: "123"
                    },
                  ]
                },
              ],
            },
          ],
        },
        {
          name: "FFF第一層",
          type: "input",
          label: "FFF第一層",
          field: "fNickName",
          value: "",
          color: "teal-4",
          required: false,
          originValue: "",
          cr_type: "pureValue",
          cr_trigger: "123",
          cr_List: [
            {
              name: "FFF第二層",
              type: "input",
              label: "FFF第二層",
              field: "fNickName",
              value: "",
              color: "teal-4",
              required: false,
              originValue: "",
              cr_type: "pureValue",
              cr_trigger: "123",
              cr_List: [
                {
                  name: "FFF第三層",
                  type: "input",
                  label: "FFF第三層",
                  field: "fNickName",
                  value: "",
                  color: "teal-4",
                  required: false,
                  originValue: "",
                  cr_type: "pureValue",
                  cr_trigger: "123",
                  cr_List: [
                    {
                      name: "FFF第四層",
                      type: "input",
                      label: "FFF第四層",
                      field: "fNickName",
                      value: "",
                      color: "teal-4",
                      required: false,
                      originValue: "",
                      cr_List: [],
                      cr_type: "pureValue",
                      cr_trigger: "123"
                    },
                  ]
                },
              ],
            },
          ],
        }
      ],
    },
    {
      index: 1,
      name: "生效日期",
      type: "input_date",
      label: "生效日期",
      field: "fIssueDate",
      value: "",
      required: false,
      originValue: "",
      cr_List: []
    },
    {
      index: 2,
      name: "過期日期",
      type: "radio",
      label: "過期日期",
      field: "fExpiredDate",
      value: "",
      options: [
        {
          label: "已過期",
          type: "inner_checkbox",
          value: "1",
        },
        {
          label: "未過期",
          type: "inner_checkbox",
          value: "0",
        },
      ],
      required: false,
      originValue: "",
      cr_List: []
    },
    {
      index: 3,
      name: "重設密碼",
      type: "toggle",
      label: "重設密碼",
      field: "fResetPWD",
      value: "",
      falsevalue: false,
      truevalue: true,
      required: false,
      originValue: "",
      cr_List: []
    },
    {
      index: 4,
      name: "備註",
      type: "textarea",
      label: "備註",
      field: "fNote",
      value: "",
      placeholder: "備註",
      limitWordsAmount: "500",
      required: false,
      originValue: "",
      cr_List: []
    },
    {
      index: 5,
      name: "系統權限設定",
      type: "checkbox",
      field: "fSystemAuth",
      label: "系統權限設定",
      value: [],
      options: [
        {
          label: "人資部門",
          value: "HR",
        },
        {
          label: "資訊部門",
          value: "IT",
        },
        {
          label: "行銷部門",
          value: "MK",
        },
      ],
      required: false,
      originValue: [],
      cr_List: [
        {
          name: "綽號第一層",
          type: "input",
          label: "綽號第一層",
          field: "fNickName",
          value: "",
          color: "teal-4",
          required: false,
          originValue: "",
          cr_type: "multipleValuesInArray",
          cr_trigger: ["IT"],
          cr_List: [
            {
              name: "綽號第二層",
              type: "checkbox",
              field: "fnickname2",
              label: "綽號第二層",
              value: [],
              options: [
                {
                  label: "人資部門",
                  value: "HR",
                },
                {
                  label: "資訊部門",
                  value: "IT",
                },
                {
                  label: "行銷部門",
                  value: "MK",
                },
              ],
              required: false,
              originValue: [],
              cr_type: "pureValue",
              cr_trigger: "123",
              cr_List: [
                {
                  name: "綽號第三層",
                  type: "input",
                  label: "綽號第三層",
                  field: "fNickName",
                  value: "",
                  color: "teal-4",
                  required: false,
                  originValue: "",
                  cr_type: "multipleValuesInArray",
                  cr_trigger: ["HR"],
                  cr_List: [
                    {
                      name: "綽號第四層",
                      type: "input",
                      label: "綽號第四層",
                      field: "fNickName",
                      value: "",
                      color: "teal-4",
                      required: false,
                      originValue: "",
                      cr_List: [],
                      cr_type: "pureValue",
                      cr_trigger: "123"
                    },
                  ]
                },
              ],
            },
          ],
        },
        {
          name: "FFF第一層",
          type: "input",
          label: "FFF第一層",
          field: "fNickName",
          value: "",
          color: "teal-4",
          required: false,
          originValue: [],
          cr_type: "multipleValuesInArray",
          cr_trigger: ["IT", "MK"],
          cr_List: [
            {
              name: "FFF第二層",
              type: "input",
              label: "FFF第二層",
              field: "fNickName",
              value: "",
              color: "teal-4",
              required: false,
              originValue: "",
              cr_type: "pureValue",
              cr_trigger: "123",
              cr_List: [
                {
                  name: "FFF第三層",
                  type: "input",
                  label: "FFF第三層",
                  field: "fNickName",
                  value: "",
                  color: "teal-4",
                  required: false,
                  originValue: "",
                  cr_type: "pureValue",
                  cr_trigger: "123",
                  cr_List: [
                    {
                      name: "FFF第四層",
                      type: "input",
                      label: "FFF第四層",
                      field: "fNickName",
                      value: "",
                      color: "teal-4",
                      required: false,
                      originValue: "",
                      cr_List: [],
                      cr_type: "pureValue",
                      cr_trigger: "123"
                    },
                  ]
                },
              ],
            },
          ],
        }
      ]
    },
    {
      index: 6,
      name: "居住地",
      type: "select",
      field: "fResidence",
      label: "居住地",
      value: "",
      options: [
        {
          label: "台北市",
          value: "台北市",
        },
        {
          label: "新北市",
          value: "新北市",
        },
        {
          label: "基隆市",
          value: "基隆市",
        },
      ],
      required: false,
      originValue: "",
      cr_List: []
    },
    {
      index: 7,
      name: "上傳大頭貼",
      type: "uploadImg",
      field: "fImage",
      label: "上傳大頭貼",
      value: null,
      previewImgURL: "",
      required: false,
      originValue: null,
      cr_List: []
    },
    // {
    //   index: 8,
    //   name: "多重輸入框",
    //   type: "mutiInputsColumn",
    // },
    // {
    //   index: 9,
    //   type: "mutiSelectsColumn",
    //   name: "語言程度",
    //   label: "語言程度",
    //   object: [
    //     {
    //       label: "英語",
    //       field: "fEnglishLevel",
    //       value: "",
    //       options: [
    //         { label: "精通", value: "精通" },
    //         { label: "普通", value: "普通" },
    //         { label: "略懂", value: "略懂" },
    //       ],
    //     },
    //     {
    //       label: "西語",
    //       field: "fEspañolLevel",
    //       value: "",
    //       options: [
    //         { label: "精通", value: "精通" },
    //         { label: "普通", value: "普通" },
    //         { label: "略懂", value: "略懂" },
    //       ],
    //     },
    //     {
    //       label: "德語",
    //       field: "fGermanLevel",
    //       value: "",
    //       options: [
    //         { label: "精通", value: "精通" },
    //         { label: "普通", value: "普通" },
    //         { label: "略懂", value: "略懂" },
    //       ],
    //     },
    //   ],
    //   required: false,
    // },
    // {
    //   index: 10,
    //   name: "日期起訖",
    //   type: "dateRange",
    //   label: "日期起訖",
    //   object: [
    //     {
    //       label: "輸入起始日期",
    //       field: "f起始日期",
    //       value: ""
    //     },
    //     {
    //       label: "輸入結束日期",
    //       field: "f結束日期",
    //       value: ""
    //     }
    //   ],
    //   required: false
    // },
    // {
    //   name: "創建時間",
    //   type: "checkbox",
    //   field: "fCreateDate",
    //   label: "",
    //   options: [
    //     {
    //       label: "三個月內",
    //       type: "inner_checkbox",
    //       value: false,
    //       inputlabel: "",
    //       inputfield: "",
    //       inputvalue: "",
    //     },
    //     {
    //       label: "一個月內",
    //       type: "inner_checkbox",
    //       value: false,
    //       inputlabel: "",
    //       inputfield: "",
    //       inputvalue: "",
    //     },
    //     {
    //       label: "一週內",
    //       type: "inner_checkbox",
    //       value: false,
    //       inputlabel: "",
    //       inputfield: "",
    //       inputvalue: "",
    //     },
    //     {
    //       label: "＿天內",
    //       type: "inner_checkbox",
    //       value: false,
    //       inputlabel: "",
    //       inputfield: "",
    //       inputvalue: "",
    //     },
    //     {
    //       label: "自選時間區間",
    //       type: "inner_checkbox",
    //       value: false,
    //       inputlabel: "",
    //       inputfield: "",
    //       inputvalue: "",
    //     },
    //   ],
    //   required: false,
    // },
    {
      index: 11,
      type: "separator",
    },
  ],
  submit_APISettings: {
    method: "POST",
    urlsArr: [
      { url: "firstUrl_test" },
    ],
    askUser: false,
    PayloadTypes: "params",
  }
})

watch(() => storeJSONSharing.JSON_form, (newValue) => {
  formSettings.value = newValue
})

function resetValue (elementObject) {
  if (typeof elementObject.value === 'object' && elementObject.value !== null) {
    elementObject.value = JSON.parse(JSON.stringify(elementObject.originValue))
  } else {
    elementObject.value = elementObject.originValue
  }
}
function resetIndex (renderArr) {
  renderArr.forEach((e, i) => {
    e.index = i
  })
}
function deleteCrListRecursion (objectInCrList) {
  // 條件判斷(CR)刪除深層Cr_List: 當父元素的值不符合自身CR(conditional rendering)條件時，遞迴將所有深層的CR(conditional rendering)元素刪除
  for (const childObj of objectInCrList.cr_List) {
    if (!childObj.index && childObj.index !== 0) continue
    resetValue(childObj)
    // childObj.value = ""
    formSettings.value.render.splice(childObj.index, 1)
    delete childObj.index
    resetIndex(formSettings.value.render)
    if (Array.isArray(childObj.cr_List) && childObj.cr_List.length) deleteCrListRecursion(childObj)
  }
}
function handlerDeleteRelativeElements (objectInCrList) {
  resetValue(objectInCrList)
  // objectInCrList.value = ""
  delete objectInCrList.index
  if (Array.isArray(objectInCrList.cr_List)) {
    deleteCrListRecursion(objectInCrList)
  }
}
function updateCrObjectToRenderList ({ execute, targetIndex, objectInCrList }) {
  if (execute) {
    if (objectInCrList.index) return // 若檢測到index有值表已經放到頁面上(在render Array裡)了: 針對cr_type為multipleValuesInArray設定(如checkbox)
    formSettings.value.render.splice(targetIndex, 0, objectInCrList)
    resetIndex(formSettings.value.render)
  } else {
    if (formSettings.value.render[targetIndex] === objectInCrList) {
      formSettings.value.render.splice(targetIndex, 1)
      resetIndex(formSettings.value.render)
      handlerDeleteRelativeElements(objectInCrList)
    }
  }
}

function submitForm (APISettings) {
  const {
    method,
    urlsArr,
    askUser,
    PayloadTypes
  } = APISettings

  const result = mainService.main(formSettings.value.render)
  if (result.reminderArr.length) {
    for (const key in result.reminderArr) {
      const obj = result.reminderArr[key]
      alert[obj.alertType]?.(`${obj.msg}`)
    }
    return
  }

  loading.value.submit = true
  storeHttpRequest[`request_${method}`]({ urlsArr, PayloadTypes, data: result.valueContainer })
    .then(res => {
      console.log('進入then', res);
    })
    .catch(err => {
      console.log('進入catch', err);
    })
    .finally(() => {
      loading.value.submit = false
    })
}
</script>

<style lang="scss" scoped>
  .container {
    background-color: transparent ;
    min-width: 300px;
    width: 100%;
    border-radius: 24px;
    box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.25);
    border: 2px solid rgba(255, 255, 255, .5);
    backdrop-filter: blur(20px);
  }
</style>
