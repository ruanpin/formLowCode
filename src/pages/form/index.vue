<template>
  <div class="q-pa-md container">
    <!-- <div class="q-mb-sm"></div> -->
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
      >
        submit
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'

defineOptions({
  name: 'FormComponent'
})
const componentsRenderingMap = {
  separator: defineAsyncComponent(()=> import('./components/Separator/index.vue')),
  input: defineAsyncComponent(()=> import('./components/Input/index.vue')),
  date: defineAsyncComponent(()=> import('./components/Date/index.vue')),
  radio: defineAsyncComponent(()=> import('./components/Radio/index.vue')),
  toggle: defineAsyncComponent(()=> import('./components/Toggle/index.vue')),
  textarea: defineAsyncComponent(()=> import('./components/Textarea/index.vue')),
  uploadImg: defineAsyncComponent(()=> import('./components/UploadImg/index.vue')),
  mutiInputsColumn: defineAsyncComponent(()=> import('./components/MutiInputsColumn/index.vue')),
  mutiSelectsColumn: defineAsyncComponent(()=> import('./components/MutiSelectsColumn/index.vue')),
  dateRange: defineAsyncComponent(()=> import('./components/DateRange/index.vue')),
  checkbox: defineAsyncComponent(()=> import('./components/Checkbox/index.vue')),
}

// 每個type定義一個專屬的class，要用時再new一個出來（備注：待實作）
const formSettings = ref({
  render: [
    {
      type: "separator",
    },
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
      type: "date",
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
      value: "保留目前密碼",
      falsevalue: "保留目前密碼",
      truevalue: "重設密碼",
      required: false,
    },
    {
      name: "備註",
      type: "textarea",
      label: "備註",
      field: "fNote",
      value: "",
      placeholder: "備註",
      wordsLimit: "500",
      required: false,
    },
    {
      name: "上傳大頭貼",
      type: "uploadImg",
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
    {
      name: "創建時間",
      type: "checkbox",
      field: "fCreateDate",
      label: "",
      options: [
        {
          label: "三個月內",
          type: "inner_checkbox",
          value: false,
          inputlabel: "",
          inputfield: "",
          inputvalue: "",
        },
        {
          label: "一個月內",
          type: "inner_checkbox",
          value: false,
          inputlabel: "",
          inputfield: "",
          inputvalue: "",
        },
        {
          label: "一週內",
          type: "inner_checkbox",
          value: false,
          inputlabel: "",
          inputfield: "",
          inputvalue: "",
        },
        {
          label: "＿天內",
          type: "inner_checkbox",
          value: false,
          inputlabel: "",
          inputfield: "",
          inputvalue: "",
        },
        {
          label: "自選時間區間",
          type: "inner_checkbox",
          value: false,
          inputlabel: "",
          inputfield: "",
          inputvalue: "",
        },
      ],
      required: false,
    },
    {
      name: "系統身分",
      type: "checkbox",
      field: "fIdentity",
      label: "",
      options: [
        {
          label: "主管",
          type: "inner_checkbox",
          value: false,
          inputlabel: "",
          inputfield: "",
          inputvalue: "",
        },
        {
          label: "員工",
          type: "inner_checkbox",
          value: false,
          inputlabel: "",
          inputfield: "",
          inputvalue: "",
        },
      ],
      required: false,
    },
  ],
  APISettings: {
    method: "POST",
    url_first: "AJAX_test",
    url_second: "News45",
    askUser: false,
    PayloadTypes: "form",
  }
})
</script>

<style lang="scss" scoped>
  .container {
    background-color: #d9dbb1 ;
    border-radius: 24px;
    box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.25);
  }
</style>
