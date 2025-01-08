<template>
  <q-dialog v-model="dialog.JSONStringResult.isShow" >
    <q-card style="max-width: 1200px; width: 650px;">
      <q-card-section>
        <div class="text-h6 flex-sb">
          <div>JSON String Result</div>
          <q-btn icon="close" flat round dense v-close-popup />
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ formSettings }}
      </q-card-section>

      <div class="operaterContainer row q-px-md q-pt-md">
        <div class="col-md-2 col-sm-12 col-xs-12 row q-mb-sm">
          <q-btn class="col" unelevated color="primary" @click="clickToCopy" :disable="disable.copy">
            <q-icon name="content_copy" class="q-mr-xs"></q-icon>copy
          </q-btn>
        </div>
        <div class="col-md col-sm-12 col-xs-12 row q-mb-sm btnGutterPC">
          <q-btn class="col" unelevated color="light-green-7" @click="sentToCompiler" :loading="loading.sendToCompiler">
            <q-icon name="send" class="q-mr-xs"></q-icon>傳送至編譯器預覽
          </q-btn>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, inject } from 'vue'
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
const alert = inject('alert')
const loading = ref({
  sendToCompiler: false,
})
const disable = ref({
  copy: false
})

function sentToCompiler () {
  loading.value.sendToCompiler = true
  store.setTarget(JSON.parse(JSON.stringify(props.formSettings)))
    .then(res => {
      alert.success("傳送成功")
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
  disable.value.copy = true
  navigator.clipboard.writeText(text)
    .then(res => {
      alert.success("複製成功")
    })
    .catch(err => {

    })
    .finally(()=> {
      setTimeout(() => {
        disable.value.copy = false
      }, 1000)
    })
}

</script>

<style lang="scss" scoped>
  .btnGutterPC {
    @media (min-width: 1024px) {
      padding-left: 6px;
    }
  }
</style>
