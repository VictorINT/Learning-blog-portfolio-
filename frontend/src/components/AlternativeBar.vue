<template>
    <nav class="navbar">
      <div class="container">
        <div class="nav-left">
          <i class="fas fa-arrow-left" @click="goBack"></i>
        </div>
        <div class="nav-right">
          {{ title }}
        </div>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: "AltBar",
    props: {
      title: {
        type: String,
        default: '',
      },
    },
    setup() {
      const router = useRouter();
  
      const goBack = () => {
        router.back();
      };
  
      return {
        goBack,
      };
    }
  });
  </script>
  
  <style scoped>
  /* Navbar styling */
  .navbar {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(10px);
    padding: 20px 0; /* Am mărit padding-ul vertical */
    z-index: 1000;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
  
  .container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
  
  .nav-left {
    cursor: pointer;
    color: white;
    font-size: 26px;
  }
  
  .nav-right {
    color: white;
    font-size: 26px;
    font-weight: bold;
    margin-right: 10px;
  }
  </style>