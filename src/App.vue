<script setup>
import { ref } from 'vue'
import { usePostsStore } from './stores/posts'
import UiButton from './components/UiButton.vue'
import UiInput from './components/UiInput.vue'
import PostCard from './components/PostCard.vue'

const store = usePostsStore()
const newPost = ref('')

function addPost() {
  store.addPost(newPost.value)
  newPost.value = ''
}
</script>

<template>
  <main class="diary" aria-label="Дневник">
    <form class="post-form" @submit.prevent="addPost">
      <UiInput v-model="newPost" placeholder="Новый пост ..." label="Новый пост" />
      <UiButton type="submit" large :disabled="!newPost.trim()">Добавить</UiButton>
    </form>

    <div class="post-list">
      <PostCard v-for="post in store.posts" :key="post.id" :post="post" />
    </div>
  </main>
</template>
