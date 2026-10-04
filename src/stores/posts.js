import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([
    {
      id: 1,
      title: 'Сегодня было замечательное предложение пойти поужинать этим вечером. Главное, чтобы погода была преимущественно теплой.',
      comments: [
        { id: 1, text: 'Самый яркий комментарий в этом посте' },
        { id: 2, text: 'Один из бессмысленных комментариев в этом посте' },
      ],
    },
    {
      id: 2,
      title: 'Краткосрочное вымышленное преломление может выполнять особую роль в пространстве главной роли игрока.',
      comments: [
        { id: 1, text: 'Очень научно и непонятно' },
      ],
    },
  ])

  let postId = 3
  let commentId = 3

  function addPost(title) {
    if (!title.trim()) return
    posts.value.push({ id: postId++, title: title.trim(), comments: [] })
  }

  function deletePost(id) {
    posts.value = posts.value.filter(post => post.id !== id)
  }

  function editPost(id, title) {
    const post = posts.value.find(post => post.id === id)
    if (post && title.trim()) post.title = title.trim()
  }

  function addComment(postId, text) {
    const post = posts.value.find(post => post.id === postId)
    if (post && text.trim()) {
      post.comments.push({ id: commentId++, text: text.trim() })
    }
  }

  function deleteComment(postId, commentId) {
    const post = posts.value.find(post => post.id === postId)
    if (post) {
      post.comments = post.comments.filter(comment => comment.id !== commentId)
    }
  }

  return { posts, addPost, deletePost, editPost, addComment, deleteComment }
})
