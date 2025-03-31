<template>
  <NavBar />
  <div v-if="!selectedPost">
    <input type="text" v-model="searchQuery" placeholder="Search..." />
    <div class="card-container">
      <Card
        v-for="post in filteredPosts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :description="post.content"
        @openPost="loadPost"
      />
    </div>
  </div>

  <div v-else class="post-content">
    <button class="back-button" @click="selectedPost = null">⬅ Back</button>
    <div v-html="selectedPostContent"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import Card from '../components/Card.vue';
import axios from 'axios';
import NavBar from '../components/NavBar.vue';

interface Post {
  id: number;
  title: string;
  content: string;
}

export default defineComponent({
  components: {
    Card,
    NavBar,
  },
  setup() {
    const searchQuery = ref('');
    const posts = ref<Post[]>([]);
    const selectedPost = ref<number | null>(null);
    const selectedPostContent = ref<string>('');

    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://192.168.1.159:8080/posts');
        posts.value = response.data;
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    onMounted(fetchPosts);

    const filteredPosts = computed(() => {
      return posts.value.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const loadPost = async (postId: number) => {
      try {
        const response = await axios.get(`http://192.168.1.159:8080/posts/htmlfile/${postId}`);
        selectedPostContent.value = response.data;
        selectedPost.value = postId;
      } catch (error) {
        console.error('Error loading post:', error);
      }
    };

    return {
      searchQuery,
      posts,
      filteredPosts,
      selectedPost,
      selectedPostContent,
      loadPost,
    };
  },
});
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Adăugarea unui gap între carduri */
}

input[type='text'] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px; /* Padding între input și carduri */
}

/* .post-content {
  padding: 20px;
  background: white;
  border-radius: 8px;
} */

.back-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 10px;
}
</style>
