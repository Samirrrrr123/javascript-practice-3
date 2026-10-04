<script setup>
defineProps({
  modelValue: String,
  placeholder: String,
  label: String,
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    class="ui-input"
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    :aria-label="label"
    required
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>
