<template>
  <div>
    <NavBar />
  </div>
  <section id="contact">
    <h1 class="section-header">Contact</h1>
    <div class="contact-wrapper">
      <!-- Mesaj de contact -->
      <div class="contact-info">
        <p>You can contact me through any of the links available. Feel free to do so.</p>
        <a href="../../public/Victor-Stefan Florescu.pdf" download class="download-cv">Download CV</a>
      </div>
      
      <!-- Detalii contact -->
      <div class="direct-contact-container">
        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"></i><span class="contact-text place">Bucharest, Romania</span></li>
          <li class="list-item"><i class="fa fa-envelope fa-2x"></i><span class="contact-text gmail"><a href="mailto:victor.s.florescu@gmail.com">victor.s.florescu@gmail.com</a></span></li>
        </ul>
        <hr>
        <ul class="social-media-list">
          <li><a href="https://github.com/VictorINT" target="_blank" class="contact-icon"><i class="fab fa-github"></i></a></li>
          <li><a href="https://www.youtube.com/@mathbites456" target="_blank" class="contact-icon"><i class="fab fa-youtube"></i></a></li>
          <li><a href="https://www.linkedin.com/in/victor-florescu-a94261217/" target="_blank" class="contact-icon"><i class="fab fa-linkedin"></i></a></li>
        </ul>
        <hr>
        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../components/NavBar.vue';

export default defineComponent({
  name: 'Contact',
  components: { NavBar }
});
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #000;
  color: white;
  font-family: 'Lato', sans-serif;
  padding-bottom: 100px;
}

#contact {
  width: 100%;
  text-align: center;
  padding: 40px 20px;
}

.section-header {
  font-size: 50px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 30px;
}

.contact-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 900px;
  margin: auto;
  align-items: center;
}

.contact-info {
  max-width: 400px;
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
}

.download-cv {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 20px;
  background: #ff4500;
  color: white;
  text-decoration: none;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.3s;
}

.download-cv:hover {
  background: #e03e00;
}

.direct-contact-container {
  max-width: 400px;
  text-align: left;
}

.contact-list {
  list-style-type: none;
  padding: 0;
}

.contact-list li {
  margin-bottom: 15px;
  font-size: 18px;
  display: flex;
  align-items: center;
}

.contact-list i {
  margin-right: 10px;
  font-size: 22px;
}

.social-media-list {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.social-media-list li {
  list-style: none;
  margin: 0 10px;
}

.social-media-list a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #222;
  transition: 0.3s;
}

.social-media-list a i {
  color: white;
  font-size: 22px;
}

.social-media-list a:hover {
  background: #ff4500;
}

@media (max-width: 850px) {
  .contact-wrapper {
    flex-direction: column;
    align-items: center;
  }
}
</style>
