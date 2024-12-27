<template>
  <div>
    <div class="options-title">限制字數</div>
    <q-input class="" dense rounded outlined v-model="formObj.limitWordAmount" ></q-input>
  </div>
</template>

<script setup>
defineOptions({
  name: 'InputExtendsComponent_Password'
});
const props = defineProps({
  formObj: Object
})
</script>
