import { computed } from 'vue'

export function useElementLayout({ renderObject }) {
  const rootClass = computed(() => {
    const BASIC_CLASS = 'layoutFlex'
    return [
      `${BASIC_CLASS}-${renderObject.class?.layoutFlex}`
    ]
  })
  const titleClass = computed(() => {
    const classMap = {
      row: "form-title",
      column: ""
    }
    return [
      classMap[renderObject.class?.layoutFlex]
    ]
  })

  return {
    rootClass,
    titleClass,
  }
}
