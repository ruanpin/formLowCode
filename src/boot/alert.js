import { boot } from 'quasar/wrappers';
import { alert } from 'assets/fireDialog.js';
import { Notify, Dialog } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  alert.setNoticeVue(Notify);
  alert.setDialogVue(Dialog);
  app.config.globalProperties.$alert = alert;
  // setup()中無法以this.alert方式使用，因此以provide/inject引入組件
  app.provide('alert', app.config.globalProperties.$alert)
});
