<script setup>
import { ref, computed, onMounted } from 'vue';
import { NButton, NCard, NIcon, NInput, NModal, NSpace } from 'naive-ui';
import { storeToRefs } from 'pinia';
import { useProjectInfo } from '../stores/useProjectInfo';
import { TrashOutline, AddOutline, EyeOutline, EyeOffOutline, CodeOutline, LinkOutline } from '@vicons/ionicons5';

const projectInfo = useProjectInfo();
const { projects } = storeToRefs(projectInfo);

const showProjects = ref(false);
const showAddModal = ref(false);
const newProjectName = ref('');
const newProjectDescription = ref('');
const newProjectTech = ref('');
const newProjectLink = ref('');
const isVisible = ref(false);
const animatedProjects = ref(0);

const projectCount = computed(() => projects.value.length);

const deleteProject = (id) => {
  projectInfo.removeProject(id);
};

const addProject = () => {
  if (!newProjectName.value.trim()) return;
  
  projectInfo.addProject({
    name: newProjectName.value.trim(),
    description: newProjectDescription.value.trim() || 'No description provided',
    tech: newProjectTech.value.trim() || 'Various Technologies',
    link: newProjectLink.value.trim() || '#'
  });
  
  // Reset form
  newProjectName.value = '';
  newProjectDescription.value = '';
  newProjectTech.value = '';
  newProjectLink.value = '';
  showAddModal.value = false;
  
  // Animate new project
  setTimeout(() => {
    animateProjects();
  }, 100);
};

const toggleProjectCount = () => {
  showProjects.value = !showProjects.value;
};

const openAddModal = () => {
  showAddModal.value = true;
};

const closeAddModal = () => {
  showAddModal.value = false;
  newProjectName.value = '';
  newProjectDescription.value = '';
  newProjectTech.value = '';
  newProjectLink.value = '';
};

const animateProjects = () => {
  animatedProjects.value = 0;
  const animate = () => {
    if (animatedProjects.value < projects.value.length) {
      animatedProjects.value++;
      setTimeout(animate, 150);
    }
  };
  setTimeout(animate, 300);
};

const openProjectLink = (link) => {
  if (link && link !== '#') {
    window.open(link, '_blank');
  }
};

onMounted(() => {
  isVisible.value = true;
  animateProjects();
});
</script>

<template>
  <section id="projects" class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 3s;"></div>
    </div>
    
    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16" :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }">
        <h2 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover the innovative solutions I've crafted with passion and precision
        </p>
      </div>

      <!-- Empty State -->
      <div v-if="projects.length === 0" class="text-center py-20" :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }">
        <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 max-w-2xl mx-auto">
          <div class="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <n-icon size="40" class="text-white">
              <CodeOutline />
            </n-icon>
          </div>
          <h3 class="text-2xl font-bold text-white mb-4">No projects yet</h3>
          <p class="text-gray-300 mb-8 text-lg">Ready to showcase your amazing work? Add your first project!</p>
          <button 
            @click="openAddModal"
            class="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <n-icon class="mr-2"><AddOutline /></n-icon>
            Add Your First Project
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div v-else class="space-y-8">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div 
            v-for="(project, index) in projects" 
            :key="project.id" 
            class="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            :class="{ 
              'opacity-0 translate-y-8': index >= animatedProjects, 
              'opacity-100 translate-y-0': index < animatedProjects 
            }"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <!-- Project Header -->
            <div class="flex items-start justify-between mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {{ project.name }}
                </h3>
                <div class="flex items-center text-sm text-purple-400 mb-3">
                  <n-icon class="mr-2"><CodeOutline /></n-icon>
                  {{ project.tech || 'Various Technologies' }}
                </div>
              </div>
              <button 
                @click="deleteProject(project.id)"
                class="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-300 transform hover:scale-110"
                :title="`Delete ${project.name}`"
              >
                <n-icon size="18"><TrashOutline /></n-icon>
              </button>
            </div>
            
            <!-- Project Description -->
            <p class="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
              {{ project.description }}
            </p>
            
            <!-- Project Footer -->
            <div class="flex items-center justify-between">
              <button 
                v-if="project.link && project.link !== '#'"
                @click="openProjectLink(project.link)"
                class="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/50 to-indigo-600/50 hover:from-purple-600 hover:to-indigo-600 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105"
              >
                <n-icon class="mr-2" size="16"><LinkOutline /></n-icon>
                View Project
              </button>
              <div v-else class="px-4 py-2 bg-gray-600/30 rounded-lg text-gray-400 text-sm">
                Coming Soon
              </div>
              
              <div class="text-xs text-gray-500">
                Project #{{ index + 1 }}
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <button 
            @click="openAddModal"
            class="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <n-icon class="mr-2"><AddOutline /></n-icon>
            Add New Project
          </button>

          <button 
            @click="toggleProjectCount"
            class="px-8 py-4 border-2 border-purple-400 hover:bg-purple-400 hover:text-purple-900 rounded-full font-semibold text-purple-300 transition-all duration-300 transform hover:scale-105"
          >
            <n-icon class="mr-2">
              <EyeOutline v-if="!showProjects" />
              <EyeOffOutline v-else />
            </n-icon>
            {{ showProjects ? 'Hide' : 'Show' }} Statistics
          </button>
        </div>

        <!-- Project Statistics -->
        <transition
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 transform scale-95 translate-y-4"
          enter-to-class="opacity-100 transform scale-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 transform scale-100 translate-y-0"
          leave-to-class="opacity-0 transform scale-95 -translate-y-4"
        >
          <div v-show="showProjects" class="mt-8">
            <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
              <h3 class="text-2xl font-bold text-center text-white mb-6">Project Statistics</h3>
              <div class="grid grid-cols-3 gap-6 text-center">
                <div class="bg-purple-500/20 rounded-xl p-4">
                  <div class="text-3xl font-bold text-purple-400 mb-2">{{ projectCount }}</div>
                  <div class="text-sm text-gray-400">Total Projects</div>
                </div>
                <div class="bg-indigo-500/20 rounded-xl p-4">
                  <div class="text-3xl font-bold text-indigo-400 mb-2">{{ Math.ceil(projectCount / 2) }}</div>
                  <div class="text-sm text-gray-400">Completed</div>
                </div>
                <div class="bg-blue-500/20 rounded-xl p-4">
                  <div class="text-3xl font-bold text-blue-400 mb-2">{{ projectCount * 2 }}h</div>
                  <div class="text-sm text-gray-400">Time Invested</div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Add Project Modal -->
    <n-modal 
      v-model:show="showAddModal" 
      preset="dialog"
      title="Add New Project"
      positive-text="Add Project"
      negative-text="Cancel"
      @positive-click="addProject"
      @negative-click="closeAddModal"
      class="max-w-2xl"
    >
      <div class="space-y-6">
        <div>
          <label class="block text-sm font-semibold mb-2 text-gray-700">Project Name *</label>
          <n-input 
            v-model:value="newProjectName" 
            placeholder="Enter an awesome project name..."
            maxlength="50"
            show-count
            size="large"
          />
        </div>
        
        <div>
          <label class="block text-sm font-semibold mb-2 text-gray-700">Technologies Used</label>
          <n-input 
            v-model:value="newProjectTech" 
            placeholder="e.g., Vue.js, Node.js, MongoDB..."
            maxlength="100"
            show-count
            size="large"
          />
        </div>
        
        <div>
          <label class="block text-sm font-semibold mb-2 text-gray-700">Project Link</label>
          <n-input 
            v-model:value="newProjectLink" 
            placeholder="https://github.com/username/project or live demo URL..."
            maxlength="200"
            size="large"
          />
        </div>
        
        <div>
          <label class="block text-sm font-semibold mb-2 text-gray-700">Description</label>
          <n-input 
            v-model:value="newProjectDescription" 
            type="textarea" 
            placeholder="Describe what makes this project special..."
            maxlength="300"
            show-count
            :rows="4"
            size="large"
          />
        </div>
      </div>
    </n-modal>
  </section>
</template>
