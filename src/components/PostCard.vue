<script setup>
import { ref } from 'vue'
import { usePostsStore } from '../stores/posts'
import UiButton from './UiButton.vue'
import UiInput from './UiInput.vue'
import EditModal from './EditModal.vue'

const props = defineProps({ post: Object })
const store = usePostsStore()
const isShow = ref(props.post.id === 2)
const isEditing = ref(false)
const commentText = ref('')

function addComment() {
  store.addComment(props.post.id, commentText.value)
  commentText.value = ''
}

function savePost(text) {
  store.editPost(props.post.id, text)
  isEditing.value = false
}
</script>

<template>
  <article class="post-card">
    <p class="post-text">{{ post.title }}</p>

    <div v-if="!isShow" class="post-actions">
      <UiButton @click="isShow = true">Комментарии</UiButton>
      <span class="comment-count">Количество комментариев - {{ post.comments.length }}</span>
      <UiButton @click="isEditing = true">Изменить</UiButton>
      <UiButton pink @click="store.deletePost(post.id)">Удалить</UiButton>
    </div>

    <div v-else class="comments">
      <form class="comment-form" @submit.prevent="addComment">
        <UiInput v-model="commentText" placeholder="Новый комментарий ..." label="Новый комментарий" />
        <UiButton type="submit" :disabled="!commentText.trim()">Добавить</UiButton>
      </form>

      <ul class="comment-list">
        <li v-for="comment in post.comments" :key="comment.id" class="comment-row">
          <p class="comment-text">{{ comment.text }}</p>
          <UiButton pink @click="store.deleteComment(post.id, comment.id)">Удалить</UiButton>
        </li>
      </ul>

      <UiButton @click="isShow = false">Спрятать</UiButton>
    </div>

    <EditModal v-if="isEditing" :text="post.title" @save="savePost" @close="isEditing = false" />
  </article>
</template>
