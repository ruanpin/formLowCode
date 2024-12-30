// function 從OBJ取出value ({ objarr, 關鍵字 }) {
//   console.log(objarr, 關鍵字, '從OBJ取出－初始');
//   if (!Array.isArray(objarr)) return
//   const result = {}
//   for (const key_first in objarr) {
//     // container.push(`${objarr[key_first].field}=${objarr[key_first].value}`)
//     if ((objarr[key_first].type == 'input' || objarr[key_first].type == 'date' || objarr[key_first].type == 'radio' || objarr[key_first].type == 'toggle' || objarr[key_first].type == 'textarea' || objarr[key_first].type == 'uploadhead') && objarr[key_first].value) result[objarr[key_first].field] = objarr[key_first].value
//     if (objarr[key_first].type == 'inputs' && Array.isArray(objarr[key_first].object) && objarr[key_first].object.length) {
//       for (const key_second in objarr[key_first].object) {
//         // container.push(`${objarr[key_first].object[key_second].field}=${objarr[key_first].object[key_second].value}`)
//         result[objarr[key_first].object[key_second].field] = objarr[key_first].object[key_second].value
//       }
//     }
//     // container.push(`${objarr[key_first].field}=${objarr[key_first].value.value}`)
//     if (objarr[key_first].type == 'select' && objarr[key_first].value && Object.keys(objarr[key_first].value).length) result[objarr[key_first].field] = objarr[key_first].value.value
//     if (objarr[key_first].type == 'selects' && Array.isArray(objarr[key_first].object) && objarr[key_first].object.length) {
//       for (const key in objarr[key_first].object) {
//         // container.push(`${objarr[key_first].object[key].field}=${objarr[key_first].object[key].value.value}`)
//         if (objarr[key_first].object[key].value.value) result[objarr[key_first].object[key].field] = objarr[key_first].object[key].value.value
//       }
//     }
//     if (objarr[key_first].type == 'daterange' && Array.isArray(objarr[key_first].object) && objarr[key_first].object.length) {
//       for (const key in objarr[key_first].object) {
//         // container.push(`起始日期=${objarr[key_first].object[key].value}`)
//         if (objarr[key_first].object[key].label == '輸入起始日期') result['起始日期'] = objarr[key_first].object[key].value
//         // container.push(`結束日期=${objarr[key_first].object[key].value}`)
//         if (objarr[key_first].object[key].label == '輸入結束日期') result['結束日期'] = objarr[key_first].object[key].value
//       }
//     }
//     if (objarr[key_first].type == 'checkbox' && Array.isArray(objarr[key_first].options) && objarr[key_first].options.length) {
//       for (const key in objarr[key_first].options) {
//         if (objarr[key_first].options[key].value && objarr[key_first].options[key].inputlabel) {
//           // container.push(`${objarr[key_first].options[key].inputfield}=${objarr[key_first].options[key].label}${objarr[key_first].options[key].inputvalue}`)
//           // container.push(`${objarr[key_first].field}=${objarr[key_first].options[key].label}`)
//           result[objarr[key_first].options[key].inputfield] = objarr[key_first].options[key].label + objarr[key_first].options[key].inputvalue
//           result[objarr[key_first].field] = objarr[key_first].options[key].label
//         } else if (objarr[key_first].options[key].value) {
//           // container.push(`${objarr[key_first].field}=${objarr[key_first].options[key].label}`)
//           result[objarr[key_first].field] = objarr[key_first].options[key].label
//         }
//       }
//     }
//   }
//   console.log(result, '從OBJ取出value－result');
//   return result
// }
const getValueFunctionMapping = {
  input: getInputValue,
}
function getInputValue (eachObj, container) {
  if (eachObj.value) container[eachObj.field] = eachObj.value
}

const checkRequiredFieldsMapping = {
  input: checkInput,
}
function checkInput (eachObj, container) {
  if (eachObj.required && !eachObj.value) {
    container.push({
      label: eachObj.label
    })
  }
}

export const mainExtract = {
  main: (renderObj) => {
    if (!Array.isArray(renderObj)) return
    const valueContainer = {}
    const incompleteRequiredFieldsContainer = []

    for (const key in renderObj) {
      const eachObj = renderObj[key]
      getValueFunctionMapping[eachObj.type]?.(eachObj, valueContainer)
      checkRequiredFieldsMapping[eachObj.type]?.(eachObj, incompleteRequiredFieldsContainer)
    }
    console.log(valueContainer, 'valueContainer');
    console.log(incompleteRequiredFieldsContainer, 'incompleteRequiredFieldsContainer');
    return { valueContainer, incompleteRequiredFieldsContainer }
  }
}
