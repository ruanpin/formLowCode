<template>
  <div class="q-py-sm">
    TextareaComponent
    <div class="f700 q-mb-xs fz14">{{ renderObject.label }}<span v-show="renderObject.required">*</span></div>
    <div class="col">
      <q-input
        v-model="renderObject.value"
        class=""
        :placeholder="renderObject.placeholder"
        outlined
        type="textarea"
        dense
      />
      <div class="flex-re">
        <div class="text-grey-9" v-show="renderObject.wordsLimit">字數上限 {{ renderObject?.value.length || 0 }} / {{ renderObject.wordsLimit }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'TextareaComponent'
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
