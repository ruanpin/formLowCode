<template>
  <div class="q-py-sm">
    <div class="f700 q-mb-xs fz14">{{ renderObject.label }}<span v-show="renderObject.required" style="color: #CC0100"> *</span></div>
    <q-select
      emit-value
      map-options
      dense
      outlined
      v-model="renderObject.value"
      :options="renderObject.options"
    />
  </div>
</template>

<script setup>
defineOptions({
  name: 'SelectComponent'
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
