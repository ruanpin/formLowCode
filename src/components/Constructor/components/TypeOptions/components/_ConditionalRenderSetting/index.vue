<template>
  <q-dialog v-model="dialog.ConditionalRenderSetting.isShow">
    <q-card style="max-width: 1200px; width: 650px;">
      <q-card-section>
        <div class="text-h6 flex-sb">
          <div>條件渲染設定</div>
          <q-btn icon="close" flat round dense v-close-popup />
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none q-pb-sm">
        <div class="q-mb-md">
          <div class="q-mb-md">
            <div class="f700 fz17">選擇目標元素</div>
            <div class="text-grey-8">下方會條列出所有已創建元素<span class="f700 text-black">(已選擇type)</span>，從中挑選一個作為此欄位條件渲染的參考目標</div>
          </div>
          <q-scroll-area style="height: 120px; max-width: 100%;">
            <div class="flex-ac warp q-pt-md">
              <div
                class="elementBox"
                :class="{
                  selectedShadow: selectedElement.index === index,
                  forbiddenItself: item === formObj
                }"
                v-for="(item, index) in selectableRenderList"
                :key="index"
                @click="handlerSelecting(item === formObj, index)"
              >
                <q-btn unelevated color="light-green-7" size="xs" round class="checked" v-show="selectedElement.index === index">
                  <q-icon name="check" size="sm"></q-icon>
                </q-btn>
                <div class="q-ml-md q-mr-sm">
                  <q-avatar font-size="14px" size="md" :color="item !== formObj ? 'blue-9' : 'grey-6'" text-color="white" class="f700">{{ index + 1 }}</q-avatar>
                </div>
                <div class="ellipsis q-pr-md">
                  <div class="f700 ellipsis">{{ item.name }}</div>
                  <div class="text-grey-8 ellipsis">{{ item.type }}</div>
                </div>
              </div>
            </div>
          </q-scroll-area>
        </div>
        <div >
          <div class="q-mb-md">
            <div class="f700 fz17">目標值類別</div>
            <!-- <div class="text-grey-8">下方會條列出所有已創建元素，從中挑選一個作為此欄位條件渲染的參考目標</div> -->
          </div>
          <!-- <component :is="componentId" /> -->
        </div>
      </q-card-section>

      <div class="row q-pa-md">
        <div class="col row">
          <q-btn class="col" unelevated color="light-green-7" @click="handlerComfirm">
            確定
          </q-btn>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch, inject, computed } from 'vue'
defineOptions({
  name: 'Popup_ConditionalRenderSetting'
})
const props = defineProps({
  dialog: {
    type: Object,
    required: true
  },
  formSettings: {
    type: Object,
  },
  formObj: {
    type: Object,
  }
})
const alert = inject('alert')
const valueInspectionTypeMapping = {
  // input: Input,
  // input_password: Input_password,
  // input_date: Input_date,
  // radio: Radio,
  // toggle: Toggle,
  // textarea: Textarea,
  // checkbox: Checkbox,
  // select: Select,
  // uploadImg: UploadImg
}
const selectableRenderList = computed(() => props.formSettings.render.filter(e => e.type))
const selectedElement = ref({
  index: null,
})

watch(() => props.dialog.ConditionalRenderSetting.isShow, (newValue) => {
  if (!newValue) selectedElement.value.index = null
})

function handlerSelecting (isItself, index) {
  if (isItself) return alert.warning('不可選擇自己')
  selectedElement.value.index = index
}

function handlerComfirm () {

}
</script>

<style lang="scss" scoped>
  .elementBox {
    background-color: white;
    width: 180px;
    height: 80px;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.25);
    transition: all 0.1s ease;
    .checked {
      position: absolute;
      top: -10px;
      right: -10px;
      background-color: orange;
    }
  }
  .selectedShadow {
    box-shadow: 0px 0px 10px rgba(124, 179, 66, 0.35);
  }
  .forbiddenItself {
    cursor: not-allowed;
  }
</style>
