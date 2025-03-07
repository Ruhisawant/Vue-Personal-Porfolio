<script setup>
import { ref, watch, onMounted } from 'vue'

const welcome = ref(true);
const counter = ref(0);
const showMessage = ref(false);
const inputValue = ref('');

const increment = () => {
  counter.value++;
}

const localStorageKey = 'homeInputValue';

onMounted(() => {
  if (localStorage.getItem(localStorageKey)) {
    inputValue.value = localStorage.getItem(localStorageKey);
  }
});

watch(inputValue, (newValue, oldValue) => {
  console.log(`Input value changed from ${oldValue} to ${newValue}`);
  localStorage.setItem(localStorageKey, newValue);
});
</script>

<template>
  <section class="home">
    <div>Home</div>
    
    <h1 v-if="welcome" class="welcome-message">Welcome!</h1>
    <h1 v-else class="welcome-message">Hello</h1>

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
  animation: fadeIn 1s ease-in-out;
}

.welcome-message {
  transition: opacity 0.5s ease-in-out;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
