<script setup>
import { NLayout, NLayoutContent, NMessageProvider } from 'naive-ui';
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import Contacts from './components/Contacts.vue';
import Footer from './components/Footer.vue';
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