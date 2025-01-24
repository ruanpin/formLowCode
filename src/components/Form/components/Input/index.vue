<template>
  <div class="q-py-sm" :class="rootClass">
    <div class="f700 q-mb-xs fz14 wordBreakAll" :class="titleClass">{{ renderObject.label }}<span v-show="renderObject.required" style="color: #CC0100"> *</span></div>
    <q-input
      color="primary"
      class="col"
      dense
      outlined
      :placeholder="renderObject.placeholder"
      v-model="renderObject.value"
      stack-label
      @update:model-value="value => { updateHandler(value) }"
    >
      <template v-slot:append>
        <q-btn dense round size="sm" unelevated>
          <q-icon class="cursor-pointer" name="close" size="xs" @click="renderObject.value = ''"></q-icon>
        </q-btn>
      </template>
    </q-input>
  </div>
</template>

<script setup>
import { updateCrObjectToRenderList } from 'src/utils/ConditionalRender.js'

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
const emits = defineEmits(['updateCrObjectToRenderList'])

function updateHandler (newValue) {
  updateCrObjectToRenderList ({
    CRList: props.renderObject.cr_List,
    renderObject: props.renderObject,
    emits,
    newValue
  })
}

const {
  rootClass,
  titleClass,
} = useElementLayout({ renderObject: props.renderObject })

// const rootClass = computed(() => {
//   const BASIC_CLASS = 'atomic-button';
//   return [
//     `${BASIC_CLASS}--${props.variant}`,
//     `${BASIC_CLASS}--${props.color}`,
//     `${BASIC_CLASS}--${props.shape}`,
//     `${BASIC_CLASS}--${props.size}`,
//   ];
// });
</script>

<style lang="scss" scoped>
// $name: '.atomic-button';
// $color-map: (
//   primary: #1976D2,
//   success: #72BF24,
// );

// #{$name} {
//   &--contained {
//     color: white;
//     @each $color, $value in $color-map {
//       &#{$name}--#{$color} {
//         background-color: rgba($value, 1);

//         &:not(:disabled):is(:hover, :focus) {
//           background-color: rgba($value, 0.8);
//         }

//         &:not(:disabled):active {
//           background-color: rgba($value, 0.6);
//         }
//       }
//     }
//   }
// }
</style>
