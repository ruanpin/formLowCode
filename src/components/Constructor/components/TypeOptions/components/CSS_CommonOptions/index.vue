<template>
  <div class="q-mt-xs">
    <div class="options-title">元素佈局(class > layoutFlex)(標題與欄位)</div>
    <q-select
      dense
      outlined
      :options="layoutFlex_List"
      v-model="formObj.class.layoutFlex"
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
  name: 'CSS_CommonOptionsComponent'
});
const props = defineProps({
  formObj: Object
})

const layoutFlex_List = [
  { label: 'column - 堆疊排列', value: 'column' },
  { label: 'row - 同一行', value: 'row' },
]
</script>
<style lang="scss" scoped>

</style>
