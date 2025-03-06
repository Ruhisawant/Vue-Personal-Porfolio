<script setup>
import { ref } from 'vue'

const name = ref('');
const email = ref('');
const message = ref('');
</script>

<template>
  <section class="contact">
    <div>Contact</div>
    <form>
      <label>Name:</label>
      <input v-model="name" type="text" />

      <label>Email:</label>
      <input v-model="email" type="email" />

      <label>Message:</label>
      <textarea v-model="message"></textarea>

      <button type="submit">Submit</button>
    </form>
  </section>
</template>

<style scoped>
.contact{
    padding: 0;
    margin: 0;
    height: 100vh;
    background-color: green;
    font-size: 30px;
    color: white;
}
</style>