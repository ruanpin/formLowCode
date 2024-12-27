export const tools = {
  ObjToFrom: function (obj) {
    const form_Data = new FormData()
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        for (let i = 0; i < obj[key].length; i++) {
          form_Data.append(key, obj[key][i])
        }
      } else {
        form_Data.append(key, obj[key])
      }
    }
    return form_Data
  }
}
