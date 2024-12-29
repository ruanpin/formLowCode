import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// export const useJSONSharingStore = defineStore('JSONSharing', {
//   state: () => ({
//     target: null,
//   }),
//   getters: {
//     JSON_form: (state) => state.target
//   },
//   actions: {
//     setTarget(value) {
//       this.target = value
//     },
//   },
// })
export const useJSONSharingStore = defineStore('JSONSharing', () => {
  const target = ref(null)
  const JSON_form = computed(() => target.value)
  function setTarget (value) {
    return new Promise((resolve, reject) => {
      try {
        target.value = value
        resolve()
      } catch {
        reject()
      }
    })
  }

  return {
    JSON_form,
    setTarget
  }
})
