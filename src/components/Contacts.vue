<script setup>
  import { ref } from 'vue'
  
  const name = ref('');
  const email = ref('');
  const message = ref('');
</script>

<template>
    <section class="contact">
      <h1>Contact</h1>
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
  .contact {
    margin: 0;
    height: 80vh;
    background-color: #f9998f;
    color: white;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  h1 {
    font-size: 100px;
    font-weight: bold;
    margin-bottom: 50px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  input, textarea {
    padding: 12px;
    margin: 15px 0;
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 600px;
  }
  
  button {
    background-color: #16a085;
    color: white;
    font-size: 20px;
    margin: 30px 0;
    padding: 12px 15px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #1abc9c;
  }
</style>  