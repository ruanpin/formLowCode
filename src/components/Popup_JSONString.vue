<template>
  <q-dialog v-model="dialog.JSONStringResult.isShow" >
    <q-card style="max-width: 1200px; width: 650px;">
      <q-card-section>
        <div class="text-h6">
          JSON String Result
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ formSettings }}
      </q-card-section>

      <q-card-actions align="right">
        <q-btn unelevated color="primary" @click="clickToCopy">
          <q-icon name="content_copy" class="q-mr-xs"></q-icon>copy
        </q-btn>
        <q-btn unelevated color="light-green-7" @click="sentToCompiler" :loading="loading.sendToCompiler">
          <q-icon name="send" class="q-mr-xs"></q-icon>傳送至編譯器預覽
        </q-btn>
        <q-btn flat label="close" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useJSONSharingStore } from 'stores/JSONSharing.js'
defineOptions({
  name: 'EssentialLink'
})
const props = defineProps({
  dialog: {
    type: Object,
    required: true
  },
  formSettings: {
    type: Object,
  }
})
const store = useJSONSharingStore()
const $q = useQuasar()
const loading = ref({
  sendToCompiler: false
})

function sentToCompiler () {
  loading.value.sendToCompiler = true
  store.setTarget(JSON.parse(JSON.stringify(props.formSettings)))
    .then(res => {
      $q.notify({
        progress: true,
        message: '傳送成功',
        icon: 'check_circle',
        color: "light-green-7",
        textColor: "white",
        timeout: 500,
        position: "center",
      });
      setTimeout(() => {
        props.dialog.JSONStringResult.isShow = false
      }, 50)
    })
    .catch(err => {

    })
    .finally(() => {
      loading.value.sendToCompiler = false
    })
}

function clickToCopy () {
  const text = JSON.stringify(props.formSettings)

  navigator.clipboard.writeText(text)
    .then(res => {
      $q.notify({
        progress: true,
        message: '複製成功',
        icon: 'check_circle',
        color: "light-green-7",
        textColor: "white",
        timeout: 500,
        position: "center",
      });
    })
    .catch(err => {

    })
}

</script>
