<template>
  <div class="password-input">
    <input
      :id="id"
      :type="show ? 'text' : 'password'"
      :value="modelValue"
      :placeholder="placeholder"
      :class="[filedStyles.commonInput, { [filedStyles.error]: error }]"
      @blur="onBlur"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button type="button" :class="['toggle-password', {'error' : error}]" @click="show = !show">
      <slot name="icon-eye" v-if="!show" />
      <slot name="icon-eye-off" v-else />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import filedStyles from './fields.module.scss'
const show = ref(false)

defineProps({
  modelValue: String,
  id: String,
  error: Boolean,
  placeholder: String,
  onBlur: Function
})
</script>

<style scoped lang="scss">

.password-input {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  transform: translateY(-50%);

  &.error {
    margin-right: 15px;
  }
}

</style>
