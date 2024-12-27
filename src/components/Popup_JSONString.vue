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
        <q-btn flat label="close" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useQuasar } from 'quasar'
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
const $q = useQuasar()
function clickToCopy () {
  const text = JSON.stringify(props.formSettings)

  navigator.clipboard.writeText(text)
    .then(res => {
      console.log('create');
      $q.notify({
      progress: true,
      message: '複製成功',
      icon: 'check_circle',
      color: "light-green-7",
      textColor: "white",
      timeout: 500,
      position: "center",
    });
    console.log('create');
    })
    .catch(err => {

    })
}
</script>
