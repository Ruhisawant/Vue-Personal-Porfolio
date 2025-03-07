<script setup>
import { ref, watch } from 'vue'

const welcome = ref(true);
const counter = ref(0);
const showMessage = ref(false);
const inputValue = ref('');

const increment = () => {
  counter.value++;
}

watch(inputValue, (newValue, oldValue) => {
  console.log(`Input value changed from ${oldValue} to ${newValue}`);
});
</script>

<template>
  <section class="home">
    <div>Home</div>
    
    <h1 v-if="welcome">Welcome!</h1>
    <h1 v-else>Hello</h1>

    <button @click="welcome = !welcome">Toggle</button>

    <button @click="increment">Visitor Counter</button>

    <button @click="showMessage = !showMessage">Toggle Message</button>
    <p v-show="showMessage">Counter: {{ counter }}</p>

    <input type="text" v-model="inputValue" placeholder="Enter something">
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
