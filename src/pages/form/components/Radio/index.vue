<template>
  <div class="q-py-sm">
    RadioComponent
    <div class="f700 q-mb-xs fz14">{{ renderObject.label }}<span v-show="renderObject.required">*</span></div>
    <q-option-group
      v-model="renderObject.value"
      :options=renderObject.options
      class=""
      type="radio"
      inline
      dense
      size="xs"
    />
  </div>
</template>

<script setup>
defineOptions({
  name: 'RadioComponent'
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
