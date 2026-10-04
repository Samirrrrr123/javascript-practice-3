<script setup>
defineProps({
  pink: Boolean,
  large: Boolean,
  type: { type: String, default: 'button' },
})
</script>

<template>
  <button :type="type" class="ui-button" :class="{ pink, large }">
    <slot />
  </button>
</template>
