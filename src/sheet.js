export const input = {
  name: "姓名",
  type: "input",
  field: "f姓名",
  color: "teal-4",
  value: "",
  required: false,
}

export const date = {
  name: "入職日期",
  type: "date",
  label: "入職日期",
  field: "f入職日期",
  value: "",
  required: false
}

export const radio = {
  name: "各類規則套用設定",
  type: "radio",
  field: "f各類規則套用設定",
  label: "",
  color: "teal-4",
  options: [
    {
      label: "已完全設定",
      type: "inner_checkbox",
      value: "1",
    },
    {
      label: "未完全設定",
      type: "inner_checkbox",
      value: "0",
    },
  ],
  required: false,
}

export const toggle = {
  type: "toggle",
  name: "重新設定密碼",
  field: "f重新設定密碼",
  falsevalue: "保留目前密碼",
  truevalue: "重新設定密碼",
  value: "保留目前密碼",
  required: false,
}

export const textarea = {
  type: "textarea",
  name: "備註",
  field: "f備註",
  label: "",
  wordsLimit: "500",
  placeholder: "備註",
  value: "",
  required: false
}

export const uploadImg = {}

export const mutiInputsColumn = {}

// 單一select移除，直接用mutiSelectsColumn，object裡放一個即可（待實作）
export const mutiSelectsColumn = {
  type: "selects_column",
  name: "員工篩選",
  object: [
    {
      label: "公司機構",
      field: "f公司機構",
      value: "",
      options: [
        { label: "精通", value: "精通" },
        { label: "普通", value: "普通" },
        { label: "略懂", value: "略懂" },
      ],
    },
    {
      label: "單位",
      field: "f單位",
      value: "",
      options: [
        { label: "精通", value: "精通" },
        { label: "普通", value: "普通" },
        { label: "略懂", value: "略懂" },
      ],
    },
    {
      label: "姓名",
      field: "f姓名",
      value: "",
      options: [
        { label: "精通", value: "精通" },
        { label: "普通", value: "普通" },
        { label: "略懂", value: "略懂" },
      ],
    },
  ],
  required: false,
}

export const dateRange = {}

// 建議有input的跟沒input的要分開（待實作）
export const checkbox = {
  name: "系統身分",
  type: "checkbox",
  field: "f帳號狀態",
  label: "",
  options: [
    {
      label: "人資",
      type: "inner_checkbox",
      checkboxfield: "f人資",
      value: false,
      inputlabel: "",
      inputfield: "",
      inputvalue: "",
    },
    {
      label: "主管",
      type: "inner_checkbox",
      checkboxfield: "f人資",
      value: false,
      inputlabel: "",
      inputfield: "",
      inputvalue: "",
    },
    {
      label: "員工",
      type: "inner_checkbox",
      checkboxfield: "f人資",
      value: false,
      inputlabel: "",
      inputfield: "",
      inputvalue: "",
    },
  ],
  required: false,
}
