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
    <div class="q-mt-lg flex-ac q-mb-sm">
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
import { ref, defineAsyncComponent, watch, inject, nextTick } from 'vue'
import { useJSONSharingStore } from 'stores/JSONSharing.js'
import { useHttpRequestStore } from 'stores/HttpRequest.js'
import { mainService } from 'src/utils/ObjectProcessService.js'

defineOptions({
  name: 'FormComponent'
})
const componentsRenderingMap = {
  space_Y: defineAsyncComponent(()=> import('./components/Space_Y/index.vue')),
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
// const result =
const formSettings = ref({
  render: [
    {
      name: "姓名",
      label: "姓名",
      field: "fName",
      value: "",
      required: true,
      originValue: "",
      class: {
        layoutFlex: "column"
      },
      cr_List: [],
      type: "input",
      index: 0
    },
    {
      name: "密碼",
      label: "密碼",
      field: "fPWD",
      value: "",
      required: true,
      originValue: "",
      class: {
        layoutFlex: "column"
      },
      cr_List: [],
      type: "input_password",
      limitWordsAmount: "",
      index: 1
    },
    {
      name: "生日",
      label: "生日",
      field: "fBirthday",
      value: "",
      required: true,
      originValue: "",
      class: {
        layoutFlex: "column"
      },
      cr_List: [
        {
          name: "未滿20歲需提供法定代理人姓名",
          label: "未滿20歲需提供法定代理人姓名",
          field: "under20Representative",
          value: "",
          required: true,
          originValue: "",
          class: {
            layoutFlex: "column"
          },
          cr_List: [],
          type: "input",
          cr_type: "age",
          cr_trigger: 19,
          cr_operation: "lessThanOrEqual"
        }
      ],
      type: "input_date",
      index: 2
    },
    {
      name: "身份",
      label: "身份",
      field: "citizen",
      value: "",
      options: [
        {
          label: "本國公民",
          value: "citizen"
        },
        {
          label: "外國人士",
          value: "expat"
        }
      ],
      required: true,
      originValue: "",
      class: {
        layoutFlex: "column"
      },
      cr_List: [
        {
          name: "身分證號碼",
          label: "請輸入身分證號碼",
          field: "NationalIDNumber",
          value: "",
          required: true,
          originValue: "",
          class: {
            layoutFlex: "column"
          },
          cr_List: [],
          type: "input",
          cr_type: "pureValue",
          cr_trigger: "citizen",
          cr_operation: "equalTo"
        },
        {
          name: "護照號碼",
          label: "請輸入護照號碼",
          field: "passportID",
          value: "",
          required: true,
          originValue: "",
          class: {
            layoutFlex: "column"
          },
          cr_List: [],
          type: "input",
          cr_type: "pureValue",
          cr_trigger: "expat",
          cr_operation: "equalTo"
        }
      ],
      type: "radio",
      index: 3
    },
    {
      name: "是否擁有相關經驗",
      label: "是否擁有相關經驗",
      field: "fRelativeExp",
      value: "",
      truevalue: "1",
      falsevalue: "0",
      required: true,
      originValue: "",
      class: {
        layoutFlex: "column"
      },
      cr_List: [
        {
          name: "相關經驗",
          label: "相關經驗(年)",
          field: "haveExpYear",
          value: "",
          required: true,
          originValue: "",
          class: {
            layoutFlex: "column"
          },
          cr_List: [],
          type: "input",
          cr_type: "pureValue",
          cr_trigger: "1",
          cr_operation: "equalTo"
        }
      ],
      type: "toggle",
      index: 4
    },
    {
      name: "擁有駕照",
      label: "擁有駕照",
      field: "driveLicence",
      value: [],
      options: [
        {
          label: "普通重型機車駕駛執照",
          value: "motor150"
        },
        {
          label: "小型車駕駛執照",
          value: "normalCar"
        },
        {
          label: "大貨車駕駛執照",
          value: "truck"
        },
        {
          label: "聯結車車駕駛執照",
          value: " tractorTrailer"
        }
      ],
      required: false,
      originValue: [],
      class: {
        layoutFlex: "column"
      },
      cr_List: [
        {
          name: "擁有機車",
          label: "擁有機車",
          field: "pMotor",
          value: "",
          truevalue: "1",
          falsevalue: "0",
          required: false,
          originValue: "",
          class: {
            layoutFlex: "column"
          },
          cr_List: [],
          type: "toggle",
          cr_type: "multipleValuesInArray",
          cr_trigger: [
            "motor150"
          ],
          cr_operation: ""
        },
        {
          name: "擁有自小客車",
          label: "擁有自小客車",
          field: "pC",
          value: "",
          truevalue: "1",
          falsevalue: "0",
          required: false,
          originValue: "",
          class: {
            layoutFlex: "column"
          },
          cr_List: [],
          type: "toggle",
          cr_type: "multipleValuesInArray",
          cr_trigger: [
            "normalCar"
          ],
          cr_operation: ""
        },
        {
          name: "擁有大貨車",
          label: "擁有大貨車",
          field: "pTruck",
          value: "",
          truevalue: "1",
          falsevalue: "0",
          required: false,
          originValue: "",
          class: {
            layoutFlex: "column"
          },
          cr_List: [],
          type: "toggle",
          cr_type: "multipleValuesInArray",
          cr_trigger: [
            "truck"
          ],
          cr_operation: ""
        },
        {
          name: "擁有聯結車",
          label: "擁有聯結車",
          field: "ptractor",
          value: "",
          truevalue: "1",
          falsevalue: "0",
          required: false,
          originValue: "",
          class: {
            layoutFlex: "column"
          },
          cr_List: [],
          type: "toggle",
          cr_type: "multipleValuesInArray",
          cr_trigger: [
            " tractorTrailer"
          ],
          cr_operation: ""
        }
      ],
      type: "checkbox",
      index: 5
    },
    {
      name: "英語能力",
      label: "英語能力",
      field: "fEnglishLevel",
      value: "",
      options: [
        {
          label: "精通",
          value: "native"
        },
        {
          label: "中高級",
          value: "mid-high"
        },
        {
          label: "中級",
          value: "mid"
        },
        {
          label: "初級",
          value: "entry-level"
        },
        {
          label: "無",
          value: "none"
        }
      ],
      required: false,
      originValue: "",
      class: {
        layoutFlex: "column"
      },
      cr_List: [],
      type: "select",
      index: 6
    },
    {
      name: "上傳大頭照",
      label: "上傳大頭照",
      field: "pic",
      value: null,
      previewImgURL: "",
      required: true,
      originValue: null,
      class: {
        layoutFlex: "column"
      },
      cr_List: [],
      type: "uploadImg",
      index: 7
    },
    {
      name: "備註",
      label: "備註",
      field: "fNote",
      value: "",
      required: false,
      originValue: "",
      class: {
        layoutFlex: "column"
      },
      cr_List: [],
      type: "textarea",
      limitWordsAmount: "500",
      placeholdet: "",
      placeholder: "請輸入備註",
      index: 8
    },
    {
      type: "space_Y",
      class: {
        paddingY: "sm"
      },
      index: 9
    },
    {
      type: "separator",
      index: 10
    }
  ],
  submit_APISettings: {
    method: "POST",
    urlsArr: [
      {
        url: "firstUrl_test"
      }
    ],
    askUser: false,
    PayloadTypes: "form"
  }
})

watch(() => storeJSONSharing.JSON_form, (newValue) => {
  formSettings.value = []
  nextTick(() => {
    formSettings.value = newValue
  })
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
<style lang="scss">
  .layoutFlex {
    &-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      .form-title {
        width: 12%;
        margin-bottom: 0px;
      }
    }
    &-column {
      display: flex;
      flex-direction: column;
    }
  }
</style>
