<script setup>
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Contacts from './components/Contacts.vue'
</script>

<template>
  <nav>
    <button @click="scrollToSection('home')">Home</button>
    <button @click="scrollToSection('projects')">Projects</button>
    <button @click="scrollToSection('contact')">Contact</button>
  </nav>

  <Home id="home" />
  <Projects id="projects" />
  <Contacts id="contact" />
</template>

<style scoped>
.read-the-docs {
  padding: 0;
  margin: 0;
  color: #888;
}
</style>
