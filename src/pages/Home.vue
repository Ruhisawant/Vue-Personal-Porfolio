<script setup>
import { ref, onMounted, computed } from 'vue';

// Interactive state
const typedText = ref('');
const currentIndex = ref(0);
const isTyping = ref(true);
const showCursor = ref(true);
const skillIndex = ref(0);
const projectCount = ref(0);
const experienceYears = ref(0);
const clientsServed = ref(0);
const isVisible = ref(false);

// Text to type
const texts = [
  'Full Stack Developer',
  'UI/UX Designer',
  'Problem Solver',
  'Creative Thinker'
];

const skills = [
  { name: 'Vue.js', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'Python', level: 85 },
  { name: 'Node.js', level: 82 }
];

// Typing animation
const typeText = () => {
  const currentText = texts[currentIndex.value];
  
  if (isTyping.value) {
    if (typedText.value.length < currentText.length) {
      typedText.value = currentText.substring(0, typedText.value.length + 1);
      setTimeout(typeText, 100);
    } else {
      setTimeout(() => {
        isTyping.value = false;
        typeText();
      }, 2000);
    }
  } else {
    if (typedText.value.length > 0) {
      typedText.value = typedText.value.substring(0, typedText.value.length - 1);
      setTimeout(typeText, 50);
    } else {
      currentIndex.value = (currentIndex.value + 1) % texts.length;
      isTyping.value = true;
      setTimeout(typeText, 500);
    }
  }
};

// Cursor blinking
const blinkCursor = () => {
  showCursor.value = !showCursor.value;
  setTimeout(blinkCursor, 500);
};

// Counter animations
const animateCounters = () => {
  const duration = 2000;
  const start = Date.now();
  
  const animate = () => {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    
    projectCount.value = Math.floor(progress * 25);
    experienceYears.value = Math.floor(progress * 3);
    clientsServed.value = Math.floor(progress * 15);
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  
  animate();
};

// Skill bar animation
const animateSkills = () => {
  skillIndex.value = 0;
  const animateNext = () => {
    if (skillIndex.value < skills.length) {
      skillIndex.value++;
      setTimeout(animateNext, 200);
    }
  };
  setTimeout(animateNext, 1000);
};

// Scroll to section
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Initialize animations
onMounted(() => {
  isVisible.value = true;
  setTimeout(() => {
    typeText();
    blinkCursor();
    animateCounters();
    animateSkills();
  }, 500);
});

// Computed properties
const displayText = computed(() => {
  return typedText.value + (showCursor.value ? '|' : ' ');
});
</script>

<template>
  <div class="min-h-screen text-white">
    <!-- Hero Section -->
    <section id="hero" class="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 4s;"></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ease-out" :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }">
        <div class="mb-6">
          <h1 class="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
            Hello, I'm Ruhi Sawant
          </h1>
          <div class="text-2xl md:text-3xl text-purple-300 h-12 flex items-center justify-center">
            <span class="font-mono">{{ displayText }}</span>
          </div>
        </div>
        
        <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating beautiful, functional web experiences that make a difference. 
          Let's build something amazing together.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            @click="scrollToSection('projects')"
            class="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            View My Work
          </button>
          <button 
            @click="scrollToSection('contact')"
            class="px-8 py-4 border-2 border-purple-400 hover:bg-purple-400 hover:text-purple-900 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
        
        <!-- Stats -->
        <div class="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div class="text-center">
            <div class="text-3xl font-bold text-purple-400">{{ projectCount }}+</div>
            <div class="text-sm text-gray-400">Projects</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-indigo-400">{{ experienceYears }}+</div>
            <div class="text-sm text-gray-400">Years</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-400">{{ clientsServed }}+</div>
            <div class="text-sm text-gray-400">Clients</div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-6 border-2 border-white/50 rounded-full flex items-center justify-center">
          <div class="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
    
    <!-- Skills Section -->
    <section id="skills" class="py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div 
            v-for="(skill, index) in skills" 
            :key="skill.name"
            class="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            :class="{ 'opacity-0 translate-x-8': index >= skillIndex, 'opacity-100 translate-x-0': index < skillIndex }"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <div class="flex justify-between items-center mb-3">
              <span class="font-semibold text-lg">{{ skill.name }}</span>
              <span class="text-purple-400">{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-3">
              <div 
                class="bg-gradient-to-r from-purple-500 to-indigo-500 h-3 rounded-full transition-all duration-1000 ease-out"
                :style="{ width: index < skillIndex ? `${skill.level}%` : '0%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>