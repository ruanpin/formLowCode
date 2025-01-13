const compareTypeMapping = {
  pureValue: ({ cr_trigger, newValue }) => {
    return cr_trigger === newValue
  },
  multipleValuesInArray: ({ cr_trigger, newValue }) => {
    if (!Array.isArray(cr_trigger) || !Array.isArray(newValue) || !cr_trigger.length || !newValue.length) {
      return false
    }
    return cr_trigger.every(value => newValue.includes(value))
  },
}

function determineIfRenderingConditionsAreMet ({ objectInCrList, newValue }) {
  return compareTypeMapping[objectInCrList.cr_type]?.({
    cr_trigger: objectInCrList.cr_trigger,
    newValue
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
