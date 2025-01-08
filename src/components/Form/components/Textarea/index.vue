<template>
  <div class="q-py-sm">
    <div class="f700 q-mb-xs fz14">{{ renderObject.label }}<span v-show="renderObject.required" style="color: #CC0100">*</span></div>
    <div class="col">
      <q-input
        v-model="renderObject.value"
        class=""
        :placeholder="renderObject.placeholder"
        outlined
        type="textarea"
        dense
        :maxlength="Number(renderObject.limitWordsAmount)"
      />
      <div class="flex-re">
        <div class="text-grey-9" v-show="renderObject.limitWordsAmount">字數上限 {{ renderObject?.value.length || 0 }} / {{ renderObject.limitWordsAmount }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'TextareaComponent'
})
const props = defineProps({
  renderObject: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>

</style>
