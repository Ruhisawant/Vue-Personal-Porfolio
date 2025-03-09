<script setup>
  import { defineEmits } from 'vue';
  
  const emit = defineEmits(['navigation-clicked']);
  
  const sendClickEvent = (message) => {
    emit('navigation-clicked', message);
  };
</script>

<template>
  <n-layout-header class="header">
    <n-space justify="center">
      <n-button strong secondary @click="sendClickEvent('Home clicked')">
        Home
      </n-button>
      <n-button strong secondary @click="sendClickEvent('Projects clicked')">
        Projects
      </n-button>
      <n-button strong secondary @click="sendClickEvent('Contact clicked')">
        Contact
      </n-button>
    </n-space>
  </n-layout-header>
</template>
  
<style scoped>
  .header {
    background-color: #2c3e50;
    padding: 15px;
  }

  n-button {
    color: white;
  }
</style>  