<template>
  <div class="q-py-sm">
    <div class="f700 q-mb-xs fz14">{{ renderObject.label }}<span v-show="renderObject.required" style="color: #CC0100"> *</span></div>
    <div>
      <q-file
        ref="imgContainer"
        v-show="false"
        v-model="renderObject.value"
        label="Standard"
        class="imgContainer"
        accept=".jpg, .png, .jepg, image/*"
        @update:model-value="value => { handleUpload_image(value) }"
      />
      <q-img
        v-if="renderObject.previewImgURL"
        :src="renderObject.previewImgURL"
        class="previewImgContainer"
      >
        <div class="q-ma-xs operatorContainer">
          <q-btn
            dense
            flat
            @click="uploadImgFromImgContainer()"
          >
            <q-icon
              name="change_circle"
              size="xs"
              color="grey-3"
            ></q-icon>
          </q-btn>
          <q-btn
            dense
            flat
            @click="clearImgFile()"
          >
            <q-icon
              name="delete"
              size="xs"
              color="grey-3"
            ></q-icon>
          </q-btn>
        </div>
      </q-img>
      <q-avatar
        v-else
        rounded
        color="grey-5"
        text-color="white"
        icon="add"
        size="120px"
        class="cursor-pointer"
        @click="uploadImgFromImgContainer()"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
defineOptions({
  name: 'UploadImgComponent'
})
const props = defineProps({
  renderObject: {
    type: Object,
    required: true
  }
})
const imgContainer = ref(null)
function handleUpload_image(ImgBlobFile) {
  if (ImgBlobFile) {
    props.renderObject.previewImgURL = URL.createObjectURL(ImgBlobFile);
  }
}
function uploadImgFromImgContainer() {
  imgContainer.value.pickFiles();
}
function clearImgFile() {
  props.renderObject.value = null;
  props.renderObject.previewImgURL = "";
}
</script>

<style lang="scss" scoped>
  .imgContainer {
    position: absolute;
  }
  .previewImgContainer {
    height: 120px;
    max-width: 120px;
    border-radius: 5px;
    object-fit: contain;
    .operatorContainer {
      right: 0;
      padding: 0 !important;
      border-radius: 5px;
    }
  }
</style>
