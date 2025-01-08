<template>
  <div class="q-gutter-md">
    <div>
      <div class="options-title">欄位必填(required)？</div>
      <q-checkbox class="" dense v-model="formObj.required">必填</q-checkbox>
    </div>
    <div>
      <div class="options-title">物件名稱(name)</div>
      <q-input class="" dense rounded outlined v-model="formObj.name" ></q-input>
    </div>
    <div>
      <div class="options-title">表單顯示名稱(label)</div>
      <q-input class="" dense rounded outlined v-model="formObj.label" ></q-input>
    </div>
    <div>
      <div class="options-title">API對應key(field)</div>
      <q-input class="" dense rounded outlined v-model="formObj.field" ></q-input>
    </div>
    <div>
      <div class="options-title flex-ac">
        <div>可選選項(options)</div>
        <div class="flex-ac q-ml-xs q-gutter-sm">
          <q-btn unelevated color="grey-2" size="sm" round @click="updateOptions(true, formObj.options)">
            <q-icon name="add" color="grey-9"></q-icon>
          </q-btn>
          <q-btn unelevated color="grey-2" size="sm" round @click="updateOptions(false, formObj.options)" :disable="formObj.options.length <= 1">
            <q-icon name="remove" color="grey-9"></q-icon>
          </q-btn>
        </div>
      </div>
      <div class="flex-sb wrap">
        <q-card flat bordered class="my-card q-pa-md q-my-xs bg-grey-4" v-for="(item, index) in formObj.options" :key="index">
          <q-card-section class="q-gutter-md q-pa-none">
            <div>
              <div class="options-subtitle">選項顯示名稱(label)</div>
              <q-input class="" dense rounded outlined v-model="item.label" ></q-input>
            </div>
            <div>
              <div class="options-subtitle">選項值(value)</div>
              <q-input class="" dense rounded outlined v-model="item.value" ></q-input>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import { updateOptions } from 'src/utils/optionsArrayTools.js'
defineOptions({
  name: 'RadioOptionsComponent'
});
const props = defineProps({
  formObj: Object,
})
</script>

<style scoped lang="scss">
  .my-card {
    width: 49%;
    min-width: 49%;
    border-radius: 15px;
  }

</style>
