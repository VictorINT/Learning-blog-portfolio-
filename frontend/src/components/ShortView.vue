<!-- /public/images/me.jpeg -->

<template>
    <div class="short-view">
      <div class="text-container">
        <h1>Florescu Victor-Stefan</h1>
        <p>Student at faculty of automatics and computer engineering, Politehnica university of Bucharest.</p>
        <p>Passionate about robotics, computer engineering and science in general, I love working on personal projects.</p>
        <button class="card-button">Read More</button>
    </div>
      <div class="image-container">
        <img src="/public/images/me.jpeg" alt="Profil" />
      </div>
    </div>
  </template>
  
  <style scoped>
  .short-view {
    width: 100%;
    height: 70vh; /* Ocupe 70% din înălțimea ecranului */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 20px;
  }
  
  .text-container {
    flex: 1;
    max-width: 50%;
    text-align: left;
  }

  .text-container h2 {
    font-size: 2rem; /* Titlul mai mare */
    margin-bottom: 10px;
  }

  .text-container p {
    font-size: 1.2rem; /* Text mai mare */
    line-height: 1.6; /* Spațiere mai bună */
    /* font-weight: 500; */
  }

  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image-container img {
    width: 40vh; /* Dimensiune mai mică */
    height: 40vh;
    object-fit: cover;
    border-radius: 50%; /* Face poza rotundă */
    border: 3px solid #ccc; /* Un mic contur opțional */
  }
  .card-button {
  background-color: #42b983;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.card-button:hover {
  background-color: #36996f;
}
  </style>
  