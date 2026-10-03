<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
    <!-- Background Glow Effect -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-neon)]/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[var(--color-neon)]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
      <!-- Left Content -->
      <div class="space-y-6">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-neon)]/30 bg-[var(--color-dark-secondary)]">
          <span class="w-2 h-2 rounded-full bg-[var(--color-neon)] animate-pulse"></span>
          <span class="text-sm text-[var(--color-gray)]">Available for work</span>
        </div>

        <h1 class="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm
          <span class="text-[var(--color-neon)] block">Raditya Julian</span>
          Primasakti
        </h1>

        <p class="text-xl text-[var(--color-gray)] max-w-lg">
          Frontend Developer yang passionate membangun pengalaman web yang modern, responsif, dan accessible.
        </p>

        <div class="flex flex-wrap gap-4 pt-4">
          <button
            @click="scrollTo('about')"
            class="px-8 py-3 bg-[var(--color-neon)] text-[var(--color-dark)] font-semibold rounded-lg hover:shadow-[0_0_20px_var(--color-neon)] transition-all duration-300 hover:-translate-y-1"
          >
            Tentang Saya →
          </button>
          <NuxtLink
            to="/contact"
            class="px-8 py-3 border border-[var(--color-neon)]/50 text-[var(--color-neon)] rounded-lg hover:bg-[var(--color-neon)]/10 transition-all duration-300"
          >
            Hubungi Saya
          </NuxtLink>
        </div>

        <!-- Quick Stats -->
        <div class="flex gap-8 pt-8">
          <div>
            <div class="text-3xl font-bold text-[var(--color-neon)]">2+</div>
            <div class="text-sm text-[var(--color-gray)]">Projects</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-[var(--color-neon)]">4+</div>
            <div class="text-sm text-[var(--color-gray)]">Tech Stack</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-[var(--color-neon)]">∞</div>
            <div class="text-sm text-[var(--color-gray)]">Passion</div>
          </div>
        </div>
      </div>

      <!-- Right Content - Profile Image -->
      <div class="flex justify-center">
        <div class="relative">
          <div class="w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-[var(--color-neon)]/30 animate-float overflow-hidden">
            <img
              src="/assets/images/profile.jpg"
              alt="Julian Ditya"
              class="w-full h-full object-cover scale-140 object-[center_30%]"
            />
          </div>
          <!-- Decorative Elements -->
          <div class="absolute -top-4 -right-4 w-20 h-20 border border-[var(--color-neon)]/50 rounded-lg rotate-12"></div>
          <div class="absolute -bottom-4 -left-4 w-16 h-16 border border-[var(--color-neon)]/30 rounded-full"></div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span class="text-xs text-[var(--color-gray)]">Scroll Down</span>
      <svg class="w-5 h-5 text-[var(--color-neon)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>