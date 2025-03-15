<script setup>
import { ref } from 'vue';
import { useWebInfo } from './stores/useWebInfo';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const webInfo = useWebInfo();

const links = ref([
  { name: 'Home', target: '/' },
  { name: 'Projects', target: '/projects' },
  { name: 'Contact', target: '/contact' }
]);
</script>

<template>
  <n-layout>
    <Header :title="'My Portfolio'" :links="links" />
    <n-layout-content>
      <router-view />
    </n-layout-content>
    <Footer />
  </n-layout>
</template>