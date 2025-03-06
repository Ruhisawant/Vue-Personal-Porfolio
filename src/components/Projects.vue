<script setup>
import { ref } from 'vue'
const projects = ['1','2','3'];
</script>

<template>
    <section class="projects">
        <div>Projects</div>
        <ul>
            <li v-for="project in projects">{{ project }}</li>
        </ul>
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