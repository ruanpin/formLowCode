import { request } from "assets/api";
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useLoginStatusStore = defineStore('LoginStatus', () => {
  function LoginRequest({ data }) {
    return new Promise((resolve, reject) => {
      request
        .addFORMAuth('/System')
        .post(`/Login`, data)
        .then((res) => {
          const data = res.data
          resolve(data)
          token.value = data
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  const token = ref("")
  const get_token = computed(() => token.value)

  return {
    LoginRequest,
    get_token
  }
})
