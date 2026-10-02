<template>
  <div
    class="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-[var(--color-dark-secondary)] transition-all duration-300 cursor-default"
  >
    <div
      class="w-16 h-16 rounded-xl bg-[var(--color-dark-secondary)] border border-transparent group-hover:border-[var(--color-neon)]/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_var(--color-neon)/20]"
    >
      <Icon :name="icon" class="w-8 h-8 text-[var(--color-gray)] group-hover:text-[var(--color-neon)] transition-colors duration-300" />
    </div>
    <span class="text-xs text-[var(--color-gray)] group-hover:text-[var(--color-white)] transition-colors text-center">
      {{ name }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>