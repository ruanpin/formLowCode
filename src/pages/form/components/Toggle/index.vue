<template>
  <div class="q-py-sm">
    ToggleComponent
    <div class="f700 q-mb-xs fz14">{{ renderObject.label }}<span v-show="renderObject.required" style="color: #CC0100">*</span></div>
    <q-toggle
      v-model="renderObject.value"
      :label="renderObject.label"
      class=""
      dense
      :false-value="renderObject.falsevalue"
      :true-value="renderObject.truevalue"
    />
  </div>
</template>

<script setup>
defineOptions({
  name: 'ToggleComponent'
})
defineProps({
  renderObject: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>

</style>
