<script setup>
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<template>
  <n-layout-header class="header">
    <n-space justify="center">
      <n-button strong secondary @click="scrollToSection('home')"> Home </n-button>
      <n-button strong secondary @click="scrollToSection('projects')"> Projects </n-button>
      <n-button strong secondary @click="scrollToSection('contacts')"> Contact </n-button>
    </n-space>
  </n-layout-header>
</template>

<style scoped>
.header {
  background-color: #2c3e50;
  padding: 15px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}
</style>
