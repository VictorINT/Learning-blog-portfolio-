<template>
    <div>
      <NavBar />
      <div class="container">
        <header id="hello">
          <h1 class="title">HI and welcome!</h1>
          <div class="content">
            <p>Scroll for more</p>
          </div>
        </header>
      </div>
      <div id="cards-section" class="app-container">
        <div class="card-container">
          <ShortView />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ShortView from '../components/ShortView.vue';
  import NavBar from '../components/NavBar.vue';
  
  export default defineComponent({
    name: 'MainPage',
    components: {
      ShortView,
      NavBar
    },
    data() {
      return {
        hasScrolledDown: false,
      };
    },
    mounted() {
      window.addEventListener("wheel", this.handleScroll, { passive: false });
    },
    beforeUnmount() {
      window.removeEventListener("wheel", this.handleScroll);
    },
    methods: {
      handleScroll(event: WheelEvent) {
        const cardsSection = document.getElementById("cards-section");
        const helloSection = document.getElementById("hello");
        
        if (cardsSection && helloSection) {
          if (!this.hasScrolledDown && event.deltaY > 0) {
            cardsSection.scrollIntoView({ behavior: "smooth", block: "center" });
            this.hasScrolledDown = true;
            event.preventDefault();
          } else if (this.hasScrolledDown && event.deltaY < 0) {
            helloSection.scrollIntoView({ behavior: "smooth", block: "center" });
            this.hasScrolledDown = false;
            event.preventDefault();
          }
        }
      }
    }
  });
  </script>
  
  <style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .title {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
  }
  
  .app-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
  }
  </style>
  