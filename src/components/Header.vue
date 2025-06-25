<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useWebInfo } from '../stores/useWebInfo';

const router = useRouter();
const route = useRoute();
const webInfo = useWebInfo();

const isActiveLink = computed(() => (target) => {
  return route.path === target || webInfo.activeLink === target;
});

const handleClick = (target) => {
  webInfo.setActiveLink(target);
  router.push({ path: target });
};
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <img src="../assets/logo.png" alt="Logo" class="rounded-xl shadow-lg max-w-full max-h-full object-cover" />

        <!-- Nav Links -->
        <nav class="hidden md:flex space-x-8">
          <button
            v-for="link in webInfo.links"
            :key="link.target"
            @click="handleClick(link.target)"
            :class="[
              'px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105',
              isActiveLink(link.target) 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent hover:border-cyan-400/30'
            ]"
          >
            {{ link.name }}
          </button>
        </nav>
      </div>
    </div>

    <!-- Animated background elements for header -->
    <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div class="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -top-20 -left-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    </div>
  </header>
</template>