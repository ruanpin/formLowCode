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
      <div class="options-title">開啟值(trueValue)</div>
      <q-input class="" dense rounded outlined v-model="formObj.truevalue" ></q-input>
    </div>
    <div>
      <div class="options-title">關閉值(falseValue)</div>
      <q-input class="" dense rounded outlined v-model="formObj.falsevalue" ></q-input>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
defineOptions({
  name: 'ToggleOptionsComponent'
});
const props = defineProps({
  formObj: Object,
})
</script>
