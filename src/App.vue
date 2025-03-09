<script setup>
import { ref } from 'vue';
import { NLayout, NLayoutContent, NMessageProvider, NCard } from 'naive-ui';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

// Store navigation message
const navMessage = ref('');

const updateNavMessage = (message) => {
  navMessage.value = message;
};
</script>

<template>
  <n-message-provider>
    <n-layout>
      <Header @navigation-clicked="updateNavMessage" />

      <n-layout-content content-style="padding: 20px;">
        <n-card title="Navigation Message" size="large" embedded>
          <p>{{ navMessage || 'Click a button in the header' }}</p>
        </n-card>
      </n-layout-content>

      <Footer />
    </n-layout>
  </n-message-provider>
</template>