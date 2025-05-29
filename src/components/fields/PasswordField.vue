<template>
  <div :class="filedStyles.passwordInput">
    <input
      :id="id"
      :type="show ? 'text' : 'password'"
      :value="modelValue"
      :placeholder="placeholder"
      :class="[filedStyles.commonInput, { [filedStyles.error]: error }, 'password-input']"
      @blur="onBlur && onBlur($event)"
      @input="handleInput"
    />
    <button type="button" class="toggle-password" @click="show = !show">
      <slot name="icon-eye" v-if="!show" />
      <slot name="icon-eye-off" v-else />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import filedStyles from './fields.module.scss'
const show = ref(false)

defineProps<{
  modelValue?: string
  id?: string
  error?: boolean
  placeholder?: string
  onBlur?: (event: FocusEvent) => void
}>()
const emit = defineEmits(['update:modelValue'])

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement | null
  emit('update:modelValue', target?.value || '')
}
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
