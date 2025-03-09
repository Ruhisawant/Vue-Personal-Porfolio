<script setup>
import { ref, computed } from 'vue';
import { NButton, NCard } from 'naive-ui';
import { storeToRefs } from 'pinia';
import { useProjectInfo } from '../stores/useProjectInfo';

const projectInfo = useProjectInfo();
const { projects } = storeToRefs(projectInfo);

const showProjects = ref(false);
const projectCount = computed(() => projects.value.length);

const deleteProject = (id) => {
  projects.value = projects.value.filter(project => project.id !== id);
};

const addProject = () => {
  projects.value.push({
    id: projects.value.length + 1,
    name: 'New Project',
    description: 'A new project added!'
  });
};
</script>

<template>
  <section id="projects">
    <n-card class="project-card">
      <h2>My Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project.id" class="project-item">
          <strong>{{ project.name }}</strong>: {{ project.description }}
          <n-button type="error" size="small" class="delete-btn" @click="deleteProject(project.id)">
            Delete Project
          </n-button>
        </li>
      </ul>

      <n-button type="primary" strong secondary @click="addProject">
        Add Project
      </n-button>

      <n-button type="primary" strong secondary @click="showProjects = !showProjects">
        Show Project #
      </n-button>

      <p v-if="projects.length === 0">No projects available</p>
      <p v-else v-show="showProjects" class="project-count">
        Number of projects: {{ projectCount }}
      </p>
    </n-card>
  </section>
</template>

<style scoped>
section {
  padding: 100px;
  background: #a2d1f0;
  color: white;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.project-card {
  max-width: 1500px;
  min-height: 600px;
  background-color: #85b5d1;
  color: white;
  font-size: 30px;
  padding: 0 20px;
}

h2 {
  font-size: 90px;
  font-weight: bold;
  margin: 40px 0;
  color: white;
}

ul {
  list-style-position: inside;
  text-align: left;
  padding-left: 100px;
  font-size: 30px;
}

.project-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.delete-btn {
  margin-left: 20px;
  background-color: #e74c3c;
  color: white;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
}

.delete-btn:hover {
  background-color: #c0392b;
}

.n-button {
  background-color: #16a085;
  color: white;
  margin-top: 30px;
  font-size: 25px;
  padding: 25px;
  border-radius: 10px;
}

.n-button:hover,
.n-button:active {
  color: white;
  background-color: #1abc9c;
}

.project-count {
  animation: slideUp 1s ease-out;
  margin-top: 15px;
  font-size: 20px;
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