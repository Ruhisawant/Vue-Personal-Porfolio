<script setup>
import { ref } from 'vue';
import { useWebInfo } from './stores/useWebInfo';
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import Contacts from './components/Contacts.vue';
import Footer from './components/Footer.vue';

const webInfo = useWebInfo();

const links = ref([
  { name: 'Home', target: 'home' },
  { name: 'Projects', target: 'projects' },
  { name: 'Contact', target: 'contact' }
]);

const handleNavigate = (id) => {
  console.log(`Navigating to ${id}`);
};
</script>

<template>
  <n-layout>
    <Header :title="'My Portfolio'" :links="links" @navigate="handleNavigate" />
    <n-layout-content>
      <Home />
      <Projects />
      <Contacts />
    </n-layout-content>
    <Footer />
  </n-layout>
</template>