<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Handle hash navigation saat pindah route
onMounted(() => {
  const route = useRoute();
  if (route.hash) {
    setTimeout(() => {
      const element = document.querySelector(route.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
});

// Watch route changes untuk handle hash
watch(() => useRoute().hash, (newHash) => {
  if (newHash) {
    setTimeout(() => {
      const element = document.querySelector(newHash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
});
</script>

<style>
/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Layout Transitions */
.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s ease;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}

/* Smooth scroll for anchor links */
html {
  scroll-behavior: smooth;
}
</style>