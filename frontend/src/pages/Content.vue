<template>
    <div class="content">
      <AltBar :title="getTitle" />
      <div class="content-body">
        <h1>{{ getTitle }}</h1>
        <p>{{ route.params.description }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import AltBar from '../components/AlternativeBar.vue';
  
  export default defineComponent({
    components: {
      AltBar,
    },
    setup() {
      const route = useRoute();
  
      const getTitle = computed(() => {
        if (typeof route.params.title === 'string') {
          return route.params.title;
        } else if (Array.isArray(route.params.title) && route.params.title.length > 0) {
          return route.params.title[0];
        } else {
          return '';
        }
      });
  
      return {
        route,
        getTitle,
      };
    },
  });
  </script>
  
  <style scoped>
  .content {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .content-body {
    padding: 20px;
    flex-grow: 1;
  }
  </style>