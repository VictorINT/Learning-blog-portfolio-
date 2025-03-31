<template>
    <nav class="navbar">
      <div class="container">
        <a class="logo">MyPortfolio</a>
        <button @click="toggleMenu" class="menu-button">
          <span :class="{ open: isMenuOpen }"></span>
          <span :class="{ open: isMenuOpen }"></span>
          <span :class="{ open: isMenuOpen }"></span>
        </button>
        <ul :class="{ 'nav-links': true, 'open': isMenuOpen }">
          <li><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/learn" @click="closeMenu">Learn</router-link></li>
          <li><router-link to="/projects" @click="closeMenu">Projects</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: "NavBar",
    setup() {
      const isMenuOpen = ref<boolean>(false);
  
      const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
      };
  
      const closeMenu = () => {
        isMenuOpen.value = false;
      };
  
      return {
        isMenuOpen,
        toggleMenu,
        closeMenu
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
    padding: 10px 0;
    z-index: 1000;
    transition: all 0.3s ease-in-out;
    
    /* Adding elevation with box-shadow */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
  
  .container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px; /* Micșorat padding-ul lateral */
  }
  
  .logo {
    color: white;
    font-size: 26px; /* Ușor micșorat */
    font-weight: bold;
    text-decoration: none;
    margin-left: 10px; /* Apropiat de margine */
  }
  
  /* Menu button (hamburger) */
  .menu-button {
    display: none;
    flex-direction: column;
    cursor: pointer;
    background: transparent;
    border: none;
    margin-right: 10px; /* Apropiat de margine */
  }
  
  .menu-button span {
    width: 25px;
    height: 3px;
    background: white;
    margin: 4px 0;
    transition: 0.3s;
  }
  
  /* Navigation links */
  .nav-links {
    display: flex;
    gap: 15px; /* Micșorat spațiul dintre link-uri */
    margin-right: 10px; /* Apropiat de margine */
  }
  
  .nav-links li {
    list-style: none;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    position: relative;
    transition: color 0.3s ease-in-out;
  }
  
  /* Underline effect on hover */
  .nav-links a::after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background: white;
    transition: width 0.3s;
    position: absolute;
    left: 0;
    bottom: -5px;
  }
  
  .nav-links a:hover::after {
    width: 100%;
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    .menu-button {
      display: flex;
    }
  
    .nav-links {
      position: absolute;
      top: 50px; /* Puțin mai mic */
      left: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.2);
      /* Adding elevation with box-shadow */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.08);
      backdrop-filter: blur(10px);
      flex-direction: column;
      align-items: center;
      padding: 15px 0;
      display: none;
    }
  
    .nav-links.open {
      display: flex;
    }
  
    .nav-links li {
      margin: 8px 0;
    }
  }
  </style>
  