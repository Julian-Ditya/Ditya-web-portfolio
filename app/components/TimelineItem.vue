<template>
  <div class="relative pl-8 group">
    <!-- Line -->
    <div class="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-dark-secondary)]">
      <div class="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[var(--color-neon)] bg-[var(--color-dark)] group-hover:bg-[var(--color-neon)] transition-colors duration-300 group-hover:shadow-[0_0_10px_var(--color-neon)]"></div>
    </div>

    <!-- Content -->
    <div class="pb-6">
      <span class="inline-block px-3 py-1 text-xs rounded-full bg-[var(--color-neon)]/10 text-[var(--color-neon)] border border-[var(--color-neon)]/20 mb-2">
        {{ item.year }}
      </span>
      <h3 class="font-semibold text-lg flex items-center gap-2 mb-1">
        <Icon :name="item.icon" class="w-5 h-5 text-[var(--color-neon)]" />
        {{ item.title }}
      </h3>
      <p class="text-sm text-[var(--color-gray)]">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>