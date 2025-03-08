<script setup>
import { ref } from 'vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Contacts from './components/Contacts.vue'

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <nav>
    <button @click="scrollToSection('home')">Home</button>
    <button @click="scrollToSection('projects')">Projects</button>
    <button @click="scrollToSection('contact')">Contact</button>
  </nav>

  <transition name="fade" mode="out-in">
    <Home id="home" />
  </transition>
  <transition name="fade" mode="out-in">
    <Projects id="projects" />
  </transition>
  <transition name="fade" mode="out-in">
    <Contacts id="contact" />
  </transition>
</template>

<style scoped>
body {
  padding: 0;
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #ecf0f1;
  color: #34495e;
}

nav {
  display: flex;
  justify-content: space-around;
  background-color: #2c3e50;
  padding: 15px 0;
}

button {
  background-color: #16a085;
  color: white;
  padding: 12px 20px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #1abc9c;
}

button:focus {
  outline: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
