<template>
  <div class="group relative overflow-hidden rounded-2xl border border-[var(--color-dark-secondary)] bg-[var(--color-dark-secondary)]/50 hover:border-[var(--color-neon)]/50 transition-all duration-500 hover:-translate-y-2">
    <!-- Image -->
    <div class="aspect-video overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
    </div>

    <!-- Content -->
    <div class="p-6 space-y-4">
      <h3 class="text-xl font-bold group-hover:text-[var(--color-neon)] transition-colors">
        {{ project.title }}
      </h3>
      <p class="text-[var(--color-gray)] text-sm line-clamp-2">
        {{ project.description }}
      </p>

      <!-- Tech Tags -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="px-3 py-1 text-xs rounded-full bg-[var(--color-neon)]/10 text-[var(--color-neon)] border border-[var(--color-neon)]/20"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex gap-4 pt-2">
        <a
          :href="project.url"
          target="_blank"
          class="inline-flex items-center gap-2 text-sm text-[var(--color-neon)] hover:underline"
        >
          Live Demo
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>