<template>
  <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--color-dark)]/80 border-b border-[var(--color-dark-secondary)]">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-bold">
        <span class="text-[var(--color-neon)]">R</span>aditya
      </NuxtLink>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="item in navItems" :key="item.id">
          <button
            v-if="item.type === 'anchor'"
            @click="scrollToSection(item.id)"
            class="relative group"
            :class="[
              'transition-colors duration-300',
              activeSection === item.id
                ? 'text-[var(--color-neon)]'
                : 'text-[var(--color-gray)] hover:text-[var(--color-neon)]'
            ]"
          >
            {{ item.name }}
            <span
              class="absolute -bottom-1 left-0 h-0.5 bg-[var(--color-neon)] transition-all duration-300"
              :class="activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'"
            ></span>
          </button>
          <NuxtLink
            v-else
            :to="item.path"
            class="text-[var(--color-gray)] hover:text-[var(--color-neon)] transition-colors duration-300 relative group"
          >
            {{ item.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-neon)] group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile Menu Toggle -->
      <button @click="isOpen = !isOpen" class="md:hidden text-[var(--color-neon)]">
        <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div v-if="isOpen" class="md:hidden bg-[var(--color-dark-secondary)] border-t border-[var(--color-dark)]">
        <ul class="px-6 py-4 space-y-3">
          <li v-for="item in navItems" :key="item.id">
            <button
              v-if="item.type === 'anchor'"
              @click="scrollToSection(item.id); isOpen = false"
              class="block w-full text-left text-[var(--color-gray)] hover:text-[var(--color-neon)] transition-colors py-2"
            >
              {{ item.name }}
            </button>
            <NuxtLink
              v-else
              :to="item.path"
              @click="isOpen = false"
              class="block text-[var(--color-gray)] hover:text-[var(--color-neon)] transition-colors py-2"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<<script setup>
import { useScrollSpy } from '~/composables/useScrollSpy';

const isOpen = ref(false);
const route = useRoute();

const navItems = [
  { id: 'home', name: 'Home', type: 'anchor' },
  { id: 'about', name: 'About', type: 'anchor' },
  { id: 'skills', name: 'Skills', type: 'anchor' },
  { id: 'projects', name: 'Projects', type: 'page', path: '/projects' },
  { id: 'contact', name: 'Contact', type: 'page', path: '/contact' },
];

const sectionIds = ['home', 'about', 'skills'];
const { activeSection } = useScrollSpy(sectionIds);


const scrollToSection = (id) => {
  if (route.path !== '/') {
    navigateTo('/#' + id);
  } else {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>