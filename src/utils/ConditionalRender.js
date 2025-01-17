function calculateAgeNow(birthDateString) {
  const birthDate = new Date(birthDateString).getTime()
  const today = new Date().getTime()

  const ageInMilliseconds = today - birthDate
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365;

  let age = ageInMilliseconds / millisecondsInYear;
  return Math.floor(age)
}

const RenderingTypesOptions = {
  inputRenderingTypes: [
    { label: '純值', value: 'pureValue' },
  ],
  checkboxRenderingTypes: [
    { label: '選項包含', value: 'multipleValuesInArray' },
  ]
}

export const formElementsAndRenderingTypesMapping = {
  input: RenderingTypesOptions.inputRenderingTypes,
  // input_password: false,
  // input_date: true,
  radio: RenderingTypesOptions.inputRenderingTypes,
  toggle: RenderingTypesOptions.inputRenderingTypes,
  // textarea: false,
  checkbox: RenderingTypesOptions.checkboxRenderingTypes,
  select: RenderingTypesOptions.inputRenderingTypes,
  // uploadImg: false,
}

export const cr_operationTypeMapping = {
  input: [
    { label: '相等', value: 'equalTo' },
  ],
  radio: [
    { label: '相等', value: 'equalTo' },
  ],
  toggle: [
    { label: '相等', value: 'equalTo' },
  ],
  select: [
    { label: '相等', value: 'equalTo' },
  ]
}

function equalTo ({ cr_trigger, newValue }) {
  return cr_trigger === newValue
}
function anyInput ({ newValue }) {
  return !!newValue
}
function greaterThanOrEqualTo ({ cr_trigger, newValue }) {
  const cr_trigger_num = Number(cr_trigger)
  const newValue_num = Number(newValue)
  return newValue_num >= cr_trigger_num
}
function lessThanOrEqual ({ cr_trigger, newValue }) {
  const cr_trigger_num = Number(cr_trigger)
  const newValue_num = Number(newValue)
  return newValue_num <= cr_trigger_num
}
function withinTheRange ({ cr_trigger = {}, newValue }) {
  if (typeof cr_trigger !== 'object' || !cr_trigger.min || !cr_trigger.max) return false
  const min_num = Number(cr_trigger.min)
  const max_num = Number(cr_trigger.max)
  return newValue >= min_num && newValue <= max_num
}

const compareTypeMapping = {
  pureValue: ({ cr_trigger, cr_operation, newValue }) => {
    switch(cr_operation) {
      case 'equalTo':
        return equalTo({ cr_trigger, newValue });
      case 'anyInput':
        return anyInput({ newValue });
      case 'greaterThanOrEqualTo':
        return greaterThanOrEqualTo({ cr_trigger, newValue });
      case 'lessThanOrEqual':
        return lessThanOrEqual({ cr_trigger, newValue });
      case 'withinTheRange':
        return withinTheRange({ cr_trigger, newValue })
    }
  },
  multipleValuesInArray: ({ cr_trigger, newValue }) => {
    if (!Array.isArray(cr_trigger) || !Array.isArray(newValue) || !cr_trigger.length || !newValue.length) {
      return false
    }
    return cr_trigger.every(value => newValue.includes(value))
  },
  age: ({ cr_trigger, cr_operation, newValue }) => {
    const newValueToAge = calculateAgeNow(newValue)
    switch(cr_operation) {
      case 'equalTo':
        return equalTo({ cr_trigger, newValue: newValueToAge });
      case 'greaterThanOrEqualTo':
        return greaterThanOrEqualTo({ cr_trigger, newValue: newValueToAge });
      case 'lessThanOrEqual':
        return lessThanOrEqual({ cr_trigger, newValue: newValueToAge });
    }
  },
}

function determineIfRenderingConditionsAreMet ({ objectInCrList, newValue }) {
  return compareTypeMapping[objectInCrList.cr_type]?.({
    cr_trigger: objectInCrList.cr_trigger,
    cr_operation: objectInCrList.cr_operation,
    newValue,
  })
}

export function updateCrObjectToRenderList ({ CRList, renderObject, emits, newValue }) {
  for (const key in CRList) {
    const objectInCrList = CRList[key]
    const targetIndexWhenAdding = Number(renderObject.index) + 1 // 尚未新增時預設自己的後一位
    const targetIndexWhenDeleting = Number(objectInCrList.index) // 由於新增進render Array後index會重置，依重置後index為主，才能抓到正確位置
    emits('updateCrObjectToRenderList', {
      execute: determineIfRenderingConditionsAreMet({ objectInCrList, newValue }),
      targetIndex: determineIfRenderingConditionsAreMet({ objectInCrList, newValue }) ? targetIndexWhenAdding : targetIndexWhenDeleting,
      objectInCrList
    })
  }
}
