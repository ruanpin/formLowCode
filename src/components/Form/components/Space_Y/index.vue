<template>
  <div :class="rootClass"></div>
</template>

<script setup>
import { computed } from 'vue'
defineOptions({
  name: 'Space_YComponent'
})
const props = defineProps({
  renderObject: {
    type: Object,
    required: true
  }
})
const rootClass = computed(() => {
  const BASIC_CLASS = "space"
  return [
    `${BASIC_CLASS}-${props.renderObject.class?.paddingY ?? ""}`
  ]
})
</script>
<style lang="scss" scoped>
  $name: '.space';
  $padding_Y: (
    xs: 5px,
    sm: 10px,
    md: 20px,
    lg: 30px,
    xl: 40px
  );

  #{$name} {
    &- {
      padding: 20px 0;
    }
    @each $sizeName, $value in $padding_Y {
      &-#{$sizeName} {
        padding: $value 0;
      }
    };
  }
</style>
