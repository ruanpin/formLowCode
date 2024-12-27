<template>
  <div class="flex-ac q-pa-sm">
    InputComponent
    <div class="f700 q-mr-md fz14">{{ renderObject.label }}<span v-show="renderObject.required">*</span></div>
    <q-input
      color="primary"
      class="col"
      dense
      outlined
      :placeholder="renderObject.placeholder"
      v-model="renderObject.value"
      stack-label
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
defineOptions({
  name: 'InputComponent'
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
