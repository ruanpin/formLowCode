<template>
  <div class="q-mt-xs">
    <div class="options-title">空白大小(class > paddingY)</div>
    <q-select
      dense
      outlined
      :options="paddingY_List"
      v-model="formObj.class.paddingY"
      emit-value
      map-options
    >
      <template v-slot:option="scope">
        <q-item
          v-bind="scope.itemProps"
          class="q_item_hover"
          style="
            background-color: #95a654;
            color: white;
            font-weight: 700;
          "
        >
          <q-item-section>
            <q-item-label>{{ scope.opt?.label ? scope.opt.label : scope.opt }}</q-item-label>
            <!-- <q-item-label>{{ scope.opt?.inactive ? scope.opt.label : scope.opt }}</q-item-label> -->
          </q-item-section>
        </q-item>
      </template>
    </q-select>
    <slot></slot>
  </div>
</template>

<script setup>
defineOptions({
  name: 'InputOptionsComponent'
});
const props = defineProps({
  formObj: Object
})

const paddingY_List = [
  { label: 'xs - 10px', value: 'xs' },
  { label: 'sm - 20px', value: 'sm' },
  { label: 'md - 40px', value: 'md' },
  { label: 'lg - 60px', value: 'lg' },
  { label: 'xl - 80px', value: 'xl' },
]
</script>
<style lang="scss" scoped>

</style>
