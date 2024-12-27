<template>
  <div>
    <div class="options-title">$test-日期擴充</div>
    <q-input class="" dense rounded outlined v-model="formObj.test" ></q-input>
  </div>
</template>

<script setup>
defineOptions({
  name: 'InputExtendsComponent_Date'
});
const props = defineProps({
  formObj: Object
})
</script>
