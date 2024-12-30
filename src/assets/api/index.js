import axios from "axios";
import { Service } from "axios-middleware";
import { appsetting } from "../appsetting";
import { useLoginStatusStore } from 'stores/LoginStatus.js'

let isInit = false;
// const token = "loginStatus/get_token"; Vuex版
const storeLoginStatus = useLoginStatusStore() // pinia版 241229

let app = null;
export function setApp(app_instance) {
  app = app_instance;
  app.config.globalProperties.$appsetting = appsetting;
}

function AXIOS() {
  // console.log(isInit);
  if (!isInit) {
    const service = new Service(axios);
    service.register({
      onRequest(config) {
        // console.log("onRequest");
        // 請求攔截
        return config;
      },
      onSync(promise) {
        // console.log("onSync");
        // 同步處理
        return promise;
      },
      onResponse(response) {
        // 回應攔截
        const data = JSON.parse(response.data);
        // if (data.code != 200) {
        //   // console.log("錯誤");
        //   app.config.globalProperties.$alert.warning(
        //     data.code + " " + data.message
        //   );
        //   return;
        // }
        // console.log("onResponse", data);
        // app.config.globalProperties.$alert.success(data.code + " " + data.message);
        return data;
      },
    });
    isInit = true;
  }
  return axios;
}

export const request = {
  getBaseURL: (controller) => {
    const obj = {
      baseURL: `${app.config.globalProperties.$appsetting.AppUrl}/api/${controller}/`,
    };
    return JSON.parse(JSON.stringify(obj));
  },
  request: (ct) => {
    return AXIOS().create(request.getBaseURL(ct));
  },
  // single
  addAuth: (ct) => {
    const copy = request.getBaseURL(ct);
    // Vuex版 copy.headers = { Authorization: `Bearer ${app.config.globalProperties.$store.getters[token]}` };
    copy.headers = {
      Authorization: `Bearer ${storeLoginStatus.get_token}`,
    };
    return AXIOS().create(copy);
  },
  addJSON: (ct) => {
    const copy = request.getBaseURL(ct);
    copy.headers = { "Content-Type": "application/json" };
    return AXIOS().create(copy);
  },
  addFORM: (ct) => {
    const copy = request.getBaseURL(ct);
    copy.headers = { "Content-Type": "multipartf/orm-data" };
    return AXIOS().create(copy);
  },
  // muti
  addJSONAuth: (ct) => {
    const copy = request.getBaseURL(ct);
    copy.headers = {
      // Vuex版 copy.headers = { Authorization: `Bearer ${app.config.globalProperties.$store.getters[token]}` };
      Authorization: `Bearer ${storeLoginStatus.get_token}`,
      "Content-Type": "application/json",
    };
    return AXIOS().create(copy);
  },
  addFORMAuth: (ct) => {
    const copy = request.getBaseURL(ct);
    copy.headers = {
      // Vuex版 copy.headers = { Authorization: `Bearer ${app.config.globalProperties.$store.getters[token]}` };
      Authorization: `Bearer ${storeLoginStatus.get_token}`,
      "Content-Type": "multipart/form-data",
    };
    return AXIOS().create(copy);
  },
};
