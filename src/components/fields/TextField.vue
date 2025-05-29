<template>
  <div>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :class="[filedStyles.commonInput, { [filedStyles.error]: error }]"
      @blur="handleBlur"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
import filedStyles from './fields.module.scss'
const props = defineProps({
  modelValue: String,
  id: String,
  type: { type: String, default: 'text' },
  error: Boolean,
  placeholder: String,
  onBlur: Function
})
function handleBlur(event: FocusEvent) {
  if (props.onBlur) props.onBlur(event)
}
</script>

<style scoped lang="scss"></style>
