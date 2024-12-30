let noticeVue = null;
let dialogVue = null;

export const alert = {
  setNoticeVue: (q) => {
    noticeVue = q;
  },
  setDialogVue: (q) => {
    dialogVue = q;
  },
  prompt: (title, message) => {
    return new Promise((resolve, reject) => {
      dialogVue
        .create({
          title,
          message,
          prompt: {
            model: "",
            type: "text", // optional
          },
          ok: {
            label: "確認",
            push: false,
          },
          cancel: true,
          persistent: true,
        })
        .onOk((data) => {
          resolve(data);
        })
        .onCancel(() => {
          reject();
        })
        .onDismiss(() => {
          reject();
        });
    });
  },
  ask: (title, message, message2) => {
    return new Promise((resolve, reject) => {
      dialogVue
        .create({
          title,
          message,
          html: true,
          ok: {
            label: "確認",
            push: false,
          },
          cancel: {
            label: "取消",
            push: false,
            color: "white",
            textColor: "primary",
            flat: true,
          },
          persistent: true,
        })
        .onOk(() => {
          resolve();
        })
        .onCancel(() => {
          reject();
        })
        .onDismiss(() => {
          reject();
        });
    });
  },
  successLogin: (content, icon = "person") => {
    noticeVue.create({
      progress: true,
      message: content,
      icon,
      color: "green",
      textColor: "white",
      timeout: 900,
      position: "bottom-right",
    });
  },
  success: (content, icon = "check_circle") => {
    noticeVue.create({
      progress: true,
      message: content,
      icon,
      color: "light-green-7",
      textColor: "white",
      timeout: 500,
      position: "center",
    })
  },
  rulewarning: (content, icon = "warning") => {
    noticeVue.create({
      progress: true,
      message: content,
      icon,
      color: "orange",
      textColor: "black",
      timeout: 3000,
      position: "bottom-left",
    });
  },
};
