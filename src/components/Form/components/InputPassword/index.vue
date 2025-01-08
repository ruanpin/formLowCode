<template>
  <div class="q-py-sm">
    <div class="f700 q-mb-xs fz14">{{ renderObject.label }}<span v-show="renderObject.required" style="color: #CC0100"> *</span></div>
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
defineOptions({
  name: 'InputComponent'
})
defineProps({
  renderObject: {
    type: Object,
    required: true
  }
})
const isPwd = ref(true)
</script>

<style lang="scss" scoped>

</style>
