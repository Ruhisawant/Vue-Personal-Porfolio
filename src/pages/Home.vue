<script setup>
import { ref, watch, onMounted } from 'vue';

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

watch(inputValue, (newValue) => {
  localStorage.setItem(localStorageKey, newValue);
});
</script>

<template>
  <section id="home" class="section">
    <h1 v-if="welcome" class="welcome-message">Welcome!</h1>
    <h1 v-else class="welcome-message">Hi! I'm Ruhi</h1>

    <button @click="welcome = !welcome">Toggle Message</button>
    <button @click="increment">Visitor Counter</button>
    <button @click="showMessage = !showMessage">Show Counter</button>

    <p v-show="showMessage" class="counter">Counter: {{ counter }}</p>
  </section>
</template>

<style scoped>
section {
  margin: 0;
  min-height: 94vh;
  background-color: #a2d1f0;
  color: white;
  font-size: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

h1 {
  margin-top: 150px;
  font-size: 3.2em;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 12px 20px;
  font-size: 1em;
  font-weight: 500;
  background-color: #16a085;
  cursor: pointer;
  margin: 10px 0;
  transition: border-color 0.25s;
}

button:hover {
  background-color: #1abc9c;
}

.counter {
  animation: slideUp 1s ease-out;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>