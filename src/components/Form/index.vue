<template>
  <div class="q-pa-md container">
    <div class="flex-jc q-mb-sm">
      <q-chip outline square size="18px" icon="preview" color="grey-9">
        編譯器(compiler)元件
      </q-chip>
    </div>
    <template v-for="(renderObj, index) in formSettings.render" :key="index">
      <div class="row items-center">
        <div class="col">
          <component
            :is="componentsRenderingMap[renderObj.type]"
            :renderObject="renderObj"
          />
        </div>
      </div>
    </template>
    <div class="q-mt-sm flex-ac flex-re">
      <q-btn
        flat
        unelevated
        style="
          background: goldenrod;
          color: white
        "
        size="md"
        :loading="loading.submit"
        @click="submitForm(formSettings.submit_APISettings)"
      >
        submit
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
      name: "姓名",
      type: "input",
      label: "姓名",
      field: "fName",
      value: "",
      color: "teal-4",
      required: false,
    },
    {
      name: "生效日期",
      type: "input_date",
      label: "生效日期",
      field: "fIssueDate",
      value: "",
      required: false,
    },
    {
      name: "過期日期",
      type: "radio",
      label: "過期日期",
      field: "fExpiredDate",
      color: "teal-4",
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
    },
    {
      name: "重設密碼",
      type: "toggle",
      label: "重設密碼",
      field: "fResetPWD",
      value: "",
      falsevalue: false,
      truevalue: true,
      required: false,
    },
    {
      name: "備註",
      type: "textarea",
      label: "備註",
      field: "fNote",
      value: "",
      placeholder: "備註",
      limitWordsAmount: "500",
      required: false,
    },
    {
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
    },
    {
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
    },
    {
      name: "上傳大頭貼",
      type: "uploadImg",
      field: "fImage",
      label: "上傳大頭貼",
      value: null,
      previewImgURL: "",
      required: false
    },
    {
      name: "多重輸入框",
      type: "mutiInputsColumn",
    },
    {
      type: "mutiSelectsColumn",
      name: "語言程度",
      label: "語言程度",
      object: [
        {
          label: "英語",
          field: "fEnglishLevel",
          value: "",
          options: [
            { label: "精通", value: "精通" },
            { label: "普通", value: "普通" },
            { label: "略懂", value: "略懂" },
          ],
        },
        {
          label: "西語",
          field: "fEspañolLevel",
          value: "",
          options: [
            { label: "精通", value: "精通" },
            { label: "普通", value: "普通" },
            { label: "略懂", value: "略懂" },
          ],
        },
        {
          label: "德語",
          field: "fGermanLevel",
          value: "",
          options: [
            { label: "精通", value: "精通" },
            { label: "普通", value: "普通" },
            { label: "略懂", value: "略懂" },
          ],
        },
      ],
      required: false,
    },
    {
      name: "日期起訖",
      type: "dateRange",
      label: "日期起訖",
      object: [
        {
          label: "輸入起始日期",
          field: "f起始日期",
          value: ""
        },
        {
          label: "輸入結束日期",
          field: "f結束日期",
          value: ""
        }
      ],
      required: false
    },
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
    background-color: #d9dbb1 ;
    border-radius: 24px;
    box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.25);
    min-width: 300px;
    width: 100%;
  }
</style>
