<template>
  <div :class="styles.formGroup">
    <label v-if="label" :for="forId" :class="styles.label">{{ label }}</label>
    <slot />
    <button
      v-if="error && onClear"
      type="button"
      :class="styles.errorButton"
      @click="handleClear"
      aria-label="Очистить поле"
    >
      <IconClose/>
    </button>
    <span :class="styles.errorMessage" v-if="error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import styles from './fields.module.scss'
import IconClose from "@/components/icons/IconClose.vue";

const props = defineProps<{
  label?: string
  forId?: string
  error?: string
  onClear?: (event: MouseEvent) => void
}>()

function handleClear(event: MouseEvent) {
  if (props.onClear) props.onClear(event)
}
</script>
