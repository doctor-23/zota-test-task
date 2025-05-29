<template>
  <div class="phone-field">
    <input
      :id="id"
      type="tel"
      v-imask="maskOptions"
      v-model="inputValue"
      :placeholder="placeholder"
      :class="[filedStyles.commonInput, {[filedStyles.error]: error}]"
      @blur="handleBlur"
      maxlength="18"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import filedStyles from './fields.module.scss'

const props = defineProps({
  modelValue: String,
  id: String,
  error: Boolean,
  placeholder: String,
  onBlur: Function
})
const emit = defineEmits(['update:modelValue'])

const inputValue = ref(props.modelValue || '')
const maskOptions = { mask: '+7 (000) 000-00-00' }

watch(() => props.modelValue, (val) => {
  if (val !== inputValue.value) inputValue.value = val || ''
})
watch(inputValue, (val) => {
  if (val !== props.modelValue) emit('update:modelValue', val)
})

function handleBlur(event: FocusEvent) {
  if (props.onBlur) props.onBlur(event)
}
</script>

<style scoped lang="scss"></style>
