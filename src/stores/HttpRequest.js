import { request } from "assets/api";
import { defineStore } from 'pinia'
import { tools } from "assets/tool";
import { deepParseJson } from "deep-parse-json";
import qs from "qs";
// import { ref, computed } from 'vue'

export const useHttpRequestStore = defineStore('HttpRequest', () => {
  function request_GET({ url_first, url_second, data }) {
    return new Promise((resolve, reject) => {
      // console.log('request_GET', url_first, url_second, data);
      request
        .addFORMAuth(url_first)
        .get(`/${url_second}`, {
          params: data,
          // paramsSerializer: (params) => {
          //   return qs.stringify(params);
          // },
        })
        .then((res) => {
          const data = res.data
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  function request_POST({ url_first, url_second, data }) {
    return new Promise((resolve, reject) => {
      // console.log('request_POST', url_first, url_second, data);
      request
        .addFORMAuth(url_first)
        .post(`/${url_second}`, tools.ObjToFrom(data))
        .then((res) => {
          const data = res.data
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  function request_PUT({ url_first, url_second, data }) {
    return new Promise((resolve, reject) => {
      // console.log('request_POST', url_first, url_second, data);
      request
        .addFORMAuth(url_first)
        .put(`/${url_second}`, tools.ObjToFrom(data))
        .then((res) => {
          const data = res.data
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  function request_DELETE({ url_first, url_second, PayloadTypes, data }) {
    return new Promise((resolve, reject) => {
      // console.log('request_DELETE', PayloadTypes, url_first, url_second, data);
      request
        .addFORMAuth(url_first)
        .delete(PayloadTypes === 'params' ? `/${url_second}?${data}` : '', PayloadTypes === 'form' ? { data } : '')
        .then((res) => {
          const data = res.data
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  return {
    request_GET,
    request_POST,
    request_PUT,
    request_DELETE,
  }
})
