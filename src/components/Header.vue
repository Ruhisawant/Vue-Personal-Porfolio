<script setup>
import { ref } from 'vue';
import { NButton, NSpace } from 'naive-ui';

const links = ref([
  { name: 'Home', target: 'home' },
  { name: 'Projects', target: 'projects' },
  { name: 'Contact', target: 'contact' }
]);

const activeLink = ref('home');

const handleClick = (target) => {
  activeLink.value = target;
  const section = document.getElementById(target);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<template>
  <n-layout-header class="header">
    <n-space>
      <n-button
        v-for="(link, index) in links"
        :key="index"
        strong
        secondary
        :class="{ active: activeLink === link.target }"
        @click="handleClick(link.target)"
      >
        {{ link.name }}
      </n-button>
    </n-space>
  </n-layout-header>
</template>

<style scoped>
.header {
  background-color: #2c3e50;
  padding: 15px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

.n-space {
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 50px;
}

.n-button {
  color: white;
  font-size: 30px;
  font-weight: 500;
}

.n-button.active,
.n-button:hover {
  color: #16a085;
}
</style>