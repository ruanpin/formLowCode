import { request } from "assets/api";
import { defineStore } from 'pinia'
import { tools } from "assets/tool";
import { deepParseJson } from "deep-parse-json";
import qs from "qs";
// import { ref, computed } from 'vue'

export const useHttpRequestStore = defineStore('HttpRequest', () => {
  function request_GET({ urlsArr, data }) {
    return new Promise((resolve, reject) => {
      // console.log('request_GET', urlsArr, data);
      request
        .addFORMAuth()
        .get(`/${urlsArr.map(e => e.url).join('/')}`, {
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

  function request_POST({ urlsArr, data }) {
    return new Promise((resolve, reject) => {
      // console.log('request_POST', urlsArr, data);
      request
        .addFORMAuth()
        .post(`/${urlsArr.map(e => e.url).join('/')}`, tools.ObjToFrom(data))
        .then((res) => {
          const data = res.data
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  function request_PUT({ urlsArr, data }) {
    return new Promise((resolve, reject) => {
      // console.log('request_POST', urlsArr, data);
      request
        .addFORMAuth()
        .put(`/${urlsArr.map(e => e.url).join('/')}`, tools.ObjToFrom(data))
        .then((res) => {
          const data = res.data
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  function request_DELETE({ urlsArr, PayloadTypes, data }) {
    return new Promise((resolve, reject) => {
      // console.log('request_DELETE', PayloadTypes, urlsArr, data);
      request
        .addFORMAuth()
        .delete(`/${urlsArr.map(e => e.url).join('/')}`, PayloadTypes === 'params' ? { params: data } : { data })
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
