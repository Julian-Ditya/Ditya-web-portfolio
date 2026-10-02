<template>
  <footer class="border-t border-[var(--color-dark-secondary)] bg-[var(--color-dark)]">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <NuxtLink to="/" class="text-2xl font-bold">
            <span class="text-[var(--color-neon)]">R</span>aditya
          </NuxtLink>
          <p class="text-[var(--color-gray)] text-sm mt-3 max-w-xs">
            Frontend Developer yang membangun web modern dan accessible.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold mb-4 text-[var(--color-white)]">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="item in links" :key="item.path">
              <NuxtLink
                :to="item.path"
                class="text-[var(--color-gray)] hover:text-[var(--color-neon)] transition-colors text-sm"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h3 class="font-semibold mb-4 text-[var(--color-white)]">Connect</h3>
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="w-10 h-10 rounded-lg bg-[var(--color-dark-secondary)] flex items-center justify-center text-[var(--color-gray)] hover:text-[var(--color-neon)] hover:border-[var(--color-neon)]/50 border border-transparent transition-all duration-300"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-[var(--color-dark-secondary)] flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-[var(--color-gray)] text-sm">
          © {{ new Date().getFullYear() }} Raditya Julian Primasakti. All rights reserved.
        </p>
        <p class="text-[var(--color-gray)] text-sm flex items-center gap-1">
          Built with
          <span class="text-[var(--color-neon)]">♥</span>
          using Nuxt & Tailwind
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const socials = [
  { name: "GitHub", icon: "simple-icons:github", url: "https://github.com/radityajulian" },
  { name: "LinkedIn", icon: "simple-icons:linkedin", url: "https://linkedin.com/in/radityajulian" },
  { name: "Email", icon: "simple-icons:gmail", url: "mailto:hello@raditya.dev" },
];
</script>