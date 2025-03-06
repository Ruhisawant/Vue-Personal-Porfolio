<script setup>
import { ref } from 'vue'

const welcome = ref(true);
</script>

<template>
  <section class="home">
    <div>Home</div>
    <h1 v-if="welcome">Welcome!</h1>
  </section>
    
</template>

<style scoped>
.home{
  padding: 0;
  margin: 0;
  height: 100vh;
  background-color: blue;
  font-size: 30px;
  color: white;
}
</style>