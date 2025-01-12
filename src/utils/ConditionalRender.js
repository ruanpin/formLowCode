const compareTypeMapping = {
  pureValue: ({ cr_trigger, newValue }) => {
    return cr_trigger === newValue
  },
}

export function updateCrObjectToRenderList ({reversedCRList, renderObject, emits, newValue}) {
  for (const key in reversedCRList) {
    const objectInCrList = reversedCRList[key]
    const targetIndexWhenAdding = Number(renderObject.index) + 1 // 尚未新增時預設自己的後一位
    const targetIndexWhenDeleting = Number(objectInCrList.index) // 由於新增進render Array後index會重置，依重置後index為主，才能抓到正確位置
    // pureValue only
    emits('updateCrObjectToRenderList', {
      execute: compareTypeMapping[objectInCrList.cr_type]?.({
        cr_trigger: objectInCrList.cr_trigger,
        newValue
      }),
      // execute: objectInCrList.cr_trigger == newValue,
      targetIndex: objectInCrList.cr_trigger == newValue ? targetIndexWhenAdding : targetIndexWhenDeleting,
      objectInCrList
    })
  }
}
