<template>
  <div class="q-py-sm" :class="rootClass">
    <div class="f700 q-mb-xs fz14 wordBreakAll" :class="titleClass">{{ renderObject.label }}<span v-show="renderObject.required" style="color: #CC0100">*</span></div>
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
import {
  useElementLayout,
} from '../../composables/elementCSS.js'

defineOptions({
  name: 'TextareaComponent'
})
const props = defineProps({
  renderObject: {
    type: Object,
    required: true
  }
})
const {
  rootClass,
  titleClass,
} = useElementLayout({ renderObject: props.renderObject })
</script>

<style lang="scss" scoped>

</style>
