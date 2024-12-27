import { request } from "assets/api";
// import { tools } from "src/assets/tool";
// import { deepParseJson } from "deep-parse-json";

export function 通用02上傳檔案(state, { data }) {
  return new Promise((resolve, reject) => {
      request.addFORMAuth('Upload')
      .post('', data)
      .then(
        (res) => {
          resolve(deepParseJson(res));
        },
        (err) => {
          reject(err);
        }
      )
      .catch((e) => {});
  });
}
