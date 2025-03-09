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
    <n-space>
      <n-button strong secondary @click="scrollToSection('home')"> Home </n-button>
      <n-button strong secondary @click="scrollToSection('projects')"> Projects </n-button>
      <n-button strong secondary @click="scrollToSection('contact')"> Contact </n-button>
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
  left: 0;
  z-index: 1;
}

n-space {
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 50px;
}

n-button {
  color: white;
  font-size: 30px;
  font-weight: 500;
}
</style>
