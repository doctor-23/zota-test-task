<template>
  <div>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :class="[filedStyles.commonInput, { [filedStyles.error]: error }]"
      @blur="handleBlur"
      @input="handleInput"
    />
  </div>
</template>

<script setup lang="ts">
import filedStyles from './fields.module.scss'
const props = defineProps<{
  modelValue?: string
  id?: string
  type?: string
  error?: boolean
  placeholder?: string
  onBlur?: (event: FocusEvent) => void
}>()
const emit = defineEmits(['update:modelValue'])

function handleBlur(event: FocusEvent) {
  if (props.onBlur) props.onBlur(event)
}
function handleInput(event: Event) {
  const target = event.target as HTMLInputElement | null
  emit('update:modelValue', target?.value || '')
}
</script>

<style scoped lang="scss"></style>
