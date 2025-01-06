<template>
  <div class="q-py-sm">
    <div class="f700 q-mb-xs fz14">{{ renderObject.label }}<span v-show="renderObject.required" style="color: #CC0100">*</span></div>
    <div class="flex-ac wrap">
      <q-checkbox
        v-for="(item, index) in renderObject.options" :key="index"
        class=""
        size="sm"
        style="height: 20px; transform: translateX(-10px)"
        v-model="renderObject.value"
        :val="item.value"
      >
          <span class="checkboxLabel">{{ item.label }}</span>
      </q-checkbox>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'CheckboxComponent'
})
defineProps({
  renderObject: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
  .checkboxLabel {
    position: relative;
    left: -4px;
  }
</style>
