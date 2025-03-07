<script setup>
import { ref, computed } from 'vue'
const projects = ref(['1','2','3']);

const projectCount = computed(() => projects.value.length);
</script>

<template>
    <section class="projects">
        <div>Projects</div>
        <ul>
            <li v-for="project in projects">{{ project }}</li>
        </ul>
        <p>Number of projects: {{ projectCount }}</p>
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
