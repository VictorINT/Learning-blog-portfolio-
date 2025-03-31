<template>
    <div>
      <NavBar />
      <h1>
        Pagina de proiecte
      </h1>
    </div>
  </template>
  
  <script>
  import NavBar from '../components/NavBar.vue';
  
  export default {
    name: 'Projects',
    components: {
      NavBar,
    },
  };
  </script>
  
  <style scoped>
  /* Stiluri suplimentare pentru pagina principală dacă este necesar */
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }
  </style>
  