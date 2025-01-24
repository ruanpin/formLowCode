<template>
  <div class="q-py-sm" :class="rootClass">
    <div class="f700 q-mb-xs fz14 wordBreakAll" :class="titleClass">{{ renderObject.label }}<span v-show="renderObject.required" style="color: #CC0100"> *</span></div>
    <q-input
      color="primary"
      class="col"
      dense
      outlined
      stack-label
      v-model="renderObject.value"
      :type="isPwd ? 'password' : 'text'"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import {
  useElementLayout,
} from '../../composables/elementCSS.js'

defineOptions({
  name: 'InputComponent'
})
const props = defineProps({
  renderObject: {
    type: Object,
    required: true
  }
})
const isPwd = ref(true)

const {
  rootClass,
  titleClass,
} = useElementLayout({ renderObject: props.renderObject })
</script>

<style lang="scss" scoped>

</style>
