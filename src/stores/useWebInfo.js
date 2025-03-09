import { defineStore } from 'pinia';

export const useWebInfo = defineStore('webInfo', {
  state: () => ({
    title: 'My Portfolio',
    links: [
      { name: 'Home', target: 'home' },
      { name: 'Projects', target: 'projects' },
      { name: 'Contact', target: 'contact' }
    ]
  }),
  persist: true
});