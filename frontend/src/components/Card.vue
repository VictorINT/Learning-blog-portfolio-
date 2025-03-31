<template>
  <div class="card" @click="goToContent">
    <div class="content">
      <h3>{{ title }}</h3>
      <p class="description">{{ truncatedDescription }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const goToContent = () => {
      emit('openPost', props.id); // Emitere eveniment pentru a deschide postarea
    };

    const truncatedDescription = computed(() => {
      const maxLength = 40;
      return props.description.length > maxLength
        ? props.description.substring(0, maxLength) + "..."
        : props.description;
    });

    return {
      goToContent,
      truncatedDescription,
    };
  },
});
</script>

<style scoped>
.card {
  background-color: #282828;
  border-radius: 8px;
  padding: 20px;
  width: 250px;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 15px; /* Padding între elementele din card */
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.content {
  text-align: center;
}

h3 {
  margin: 0;
  padding-bottom: 10px; /* Adaugă un spațiu între titlu și descriere */
}

.description {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: 100px;
}
</style>
