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
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <Header :title="'My Portfolio'" :links="links" />
    <main class="relative">
      <router-view />
    </main>
    <Footer />
  </div>
</template>