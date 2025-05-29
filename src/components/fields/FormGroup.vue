<template>
  <div :class="styles.formGroup">
    <label v-if="label" :for="forId" :class="styles.label">{{ label }}</label>
    <slot />
    <button
      v-if="error && onClear"
      type="button"
      :class="styles.errorButton"
      @click="onClear"
      aria-label="Очистить поле"
    >✕</button>
    <span :class="styles.errorMessage" v-if="error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import styles from './fields.module.scss'

defineProps({
  label: String,
  forId: String,
  error: String,
  onClear: Function
})
</script>
