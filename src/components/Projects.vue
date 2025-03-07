<script setup>
import { ref, computed } from 'vue'

const projects = ref(['1','2','3']);
const showProjects = ref(true)
const projectCount = computed(() => projects.value.length);
</script>

<template>
    <section class="projects">
        <div>Projects</div>
        <ul>
            <li v-for="project in projects">{{ project }}</li>
        </ul>

        <button @click="showProjects = !showProjects">Toggle Message</button>
        <p v-if="projects.length === 0">No projects available</p>
        <p v-else v-show="showProjects">Number of projects: {{ projectCount }}</p>
    </section>
</template>

<style scoped>
.projects{
    padding: 0;
    margin: 0;
    height: 100vh;
    background-color: pink;
    font-size: 30px;
    color: white;
}
</style>
