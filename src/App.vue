<script setup>
import { ref } from 'vue';
import { NLayout, NLayoutContent, NCard, NMessageProvider } from 'naive-ui';
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import Contacts from './components/Contacts.vue';
import Footer from './components/Footer.vue';

const navMessage = ref('');

</script>

<template>
  <n-message-provider>
    <n-layout>
      <Header />

      <n-layout-content>
        <Home />
        <Projects />
        <Contacts />
      </n-layout-content>

      <Footer />
    </n-layout>
  </n-message-provider>
</template>

<style scoped>
main {
  padding: 40px;
  background-color: #ecf0f1;
}
</style>