<template>
    <div class="menu-container">
      <!-- Burger Icon (dispare când meniul e deschis) -->
      <button v-if="!isOpen" class="burger-menu" @click="toggleMenu">
        ☰
      </button>
  
      <!-- Sidebar Menu -->
      <div class="menu" :class="{ open: isOpen }">
        <button class="close-btn" @click="toggleMenu">✖</button>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Daily posts</a></li>
          <li><a href="#">Learn</a></li>
          <li><a href="#">Me, my contact</a></li>
        </ul>
      </div>
  
      <!-- Overlay -->
      <div class="overlay" v-if="isOpen" @click="toggleMenu"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Menu",
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Menu Container */
  .menu-container {
    position: relative;
  }
  
  /* Burger Menu Icon */
  .burger-menu {
    position: fixed;
    top: 2vh;
    left: 1vw;
    font-size: 2.3rem;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 100;
  }
  
  /* Sidebar Menu */
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 60vw;
    max-width: 300px;
    height: 100vh;
    background: #333;
    color: white;
    padding: 2rem;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }
  
  /* Open state */
  .menu.open {
    transform: translateX(0);
  }
  
  /* Menu Items */
  .menu ul {
    list-style: none;
    padding: 0;
    margin-top: 3vh;
  }
  
  .menu ul li {
    padding: 1.5vh 0;
  }
  
  .menu ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
  }
  
  .menu ul li a:hover {
    text-decoration: underline;
  }
  
  /* Close Button */
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  /* Overlay */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 50;
  }
  </style>
  