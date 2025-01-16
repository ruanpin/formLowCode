<template>
  <q-scroll-area style="height: 120px; max-width: 100%;">
    <div class="flex-ac warp q-pt-md">
      <div
        class="elementBox"
        :class="{
          selectedShadow: isSelected(item),
        }"
        v-for="(item, index) in options"
        :key="index"
        @click="handlerSelecting(item)"
      >
        <q-btn v-show="isSelected(item)" unelevated color="orange-8" size="xs" round class="checked">
          <q-icon name="check" size="sm"></q-icon>
        </q-btn>
        <div class="q-ml-md q-mr-sm">
          <q-avatar font-size="14px" size="md" :color="isSelected(item) ? 'orange-8' : 'grey-5'" text-color="white" class="f700">{{ index + 1 }}</q-avatar>
        </div>
        <div class="ellipsis q-pr-md">
          <div class="f700 ellipsis">{{ item.label }}</div>
          <div class="text-grey-8 ellipsis">{{ item.value }}</div>
        </div>
      </div>
    </div>
  </q-scroll-area>
</template>

<script setup>
defineOptions({
  name: 'OptionsSingleSelection_ScrollAreaComponent'
})
const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  target: {}
})
const emits = defineEmits(['update:select'])
function handlerSelecting (item) {
  emits('update:select', item)
}
function isSelected(item) {
  if (props.target === "") return
  return props.target === item.value;
}


</script>
<style lang="scss" scoped>
  .elementBox {
    background-color: white;
    width: 180px;
    height: 80px;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.25);
    transition: all 0.1s ease;
    .checked {
      position: absolute;
      top: -10px;
      right: -10px;
      background-color: orange;
    }
  }
  .selectedShadow {
    // box-shadow: 0px 0px 10px rgba(124, 179, 66, 0.35);
    box-shadow: 0px 0px 10px rgba(245, 124, 1, 0.35);
  }
</style>
