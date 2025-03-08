<script setup>
import { ref, computed } from 'vue'

const projects = ref(['1', '2', '3']);
const showProjects = ref(false);
const projectCount = computed(() => projects.value.length);
</script>

<template>
  <section class="projects">
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project">{{ project }}</li>
    </ul>
    <button @click="showProjects = !showProjects">Toggle Message</button>
    <p v-if="projects.length === 0">No projects available</p>
    <p v-else v-show="showProjects" class="project-count">Number of projects: {{ projectCount }}</p>
  </section>
</template>

<style scoped>
.projects {
  padding: 40px;
  margin: 0;
  height: 80vh;
  background: #f4c270;
  color: white;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

h1 {
  font-size: 100px;
  font-weight: bold;
  margin-bottom: 50px;
}

ul {
  list-style-position: inside;
  text-align: left;
  padding-left: 20px;
  font-size: 40px;
}

button {
  background-color: #16a085;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 30px;
}

button:hover {
  background-color: #1abc9c;
}

.project-count {
  animation: slideUp 1s ease-out;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
