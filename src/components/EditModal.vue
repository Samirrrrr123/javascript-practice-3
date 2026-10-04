<script setup>
import { ref, onMounted } from 'vue'
import UiButton from './UiButton.vue'

const props = defineProps({ text: String })
const emit = defineEmits(['save', 'close'])
const draft = ref(props.text)
const dialog = ref(null)

onMounted(() => dialog.value.showModal())
</script>

<template>
  <dialog ref="dialog" class="edit-modal" aria-label="Изменить пост" @cancel.prevent="emit('close')">
    <form @submit.prevent="emit('save', draft)">
      <textarea v-model="draft" aria-label="Текст поста" required autofocus></textarea>
      <div class="modal-actions">
        <UiButton type="submit" :disabled="!draft.trim()">Подтвердить</UiButton>
        <UiButton pink @click="emit('close')">Закрыть</UiButton>
      </div>
    </form>
  </dialog>
</template>
