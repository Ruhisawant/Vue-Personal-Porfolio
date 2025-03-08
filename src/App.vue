<script setup>
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

  <Home id="home" />
  <Projects id="projects" />
  <Contacts id="contact" />
</template>

<style scoped>
  body {
    padding: 0;
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #ecf0f1;
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
</style>