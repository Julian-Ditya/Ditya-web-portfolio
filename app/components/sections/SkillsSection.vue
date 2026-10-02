<template>
  <section id="skills" class="min-h-screen py-20 px-6 relative">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1 text-sm rounded-full bg-[var(--color-neon)]/10 text-[var(--color-neon)] border border-[var(--color-neon)]/20 mb-4">
          Skills & Tech
        </span>
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          My <span class="text-[var(--color-neon)]">Tech Stack</span>
        </h2>
        <p class="text-[var(--color-gray)] text-lg max-w-2xl mx-auto">
          Bahasa pemrograman dan tools yang saya gunakan
        </p>
      </div>

      <!-- Programming Languages -->
      <section class="mb-16">
        <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
          <span class="w-8 h-1 bg-[var(--color-neon)]"></span>
          Programming Languages
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div
            v-for="lang in languages"
            :key="lang.name"
            class="p-6 rounded-xl bg-[var(--color-dark-secondary)] border border-transparent hover:border-[var(--color-neon)]/30 transition-all duration-300 hover:-translate-y-1 text-center group"
          >
            <Icon :name="lang.icon" class="w-12 h-12 mx-auto mb-3 text-[var(--color-neon)]" />
            <p class="text-sm font-medium">{{ lang.name }}</p>
            <p class="text-xs text-[var(--color-gray)] mt-1">{{ lang.level }}</p>
          </div>
        </div>
      </section>

      <!-- Frameworks -->
      <section class="mb-16">
        <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
          <span class="w-8 h-1 bg-[var(--color-neon)]"></span>
          Frameworks & Libraries
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div
            v-for="fw in frameworks"
            :key="fw.name"
            class="p-6 rounded-xl bg-[var(--color-dark-secondary)] border border-transparent hover:border-[var(--color-neon)]/30 transition-all duration-300 hover:-translate-y-1 text-center group"
          >
            <Icon :name="fw.icon" class="w-12 h-12 mx-auto mb-3 text-[var(--color-neon)]" />
            <p class="text-sm font-medium">{{ fw.name }}</p>
            <p class="text-xs text-[var(--color-gray)] mt-1">{{ fw.level }}</p>
          </div>
        </div>
      </section>

      <!-- Tools -->
      <section class="mb-16">
        <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
          <span class="w-8 h-1 bg-[var(--color-neon)]"></span>
          Tools & Platforms
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            v-for="tool in tools"
            :key="tool.name"
            class="p-6 rounded-xl bg-[var(--color-dark-secondary)] border border-transparent hover:border-[var(--color-neon)]/30 transition-all duration-300 hover:-translate-y-1 text-center group"
          >
            <Icon :name="tool.icon" class="w-12 h-12 mx-auto mb-3 text-[var(--color-neon)]" />
            <p class="text-sm font-medium">{{ tool.name }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="text-center mt-16">
        <NuxtLink
          to="/projects"
          class="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-neon)] text-[var(--color-dark)] font-semibold rounded-lg hover:shadow-[0_0_20px_var(--color-neon)] transition-all duration-300 hover:-translate-y-1"
        >
          Lihat Project Saya
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const languages = [
  { name: "HTML5", icon: "vscode-icons:file-type-html", level: "Advanced" },
  { name: "CSS3", icon: "vscode-icons:file-type-css", level: "Advanced" },
  { name: "JavaScript", icon: "vscode-icons:file-type-js-official", level: "Intermediate" },
  { name: "TypeScript", icon: "vscode-icons:file-type-typescript-official", level: "Learning" },
];

const frameworks = [
  { name: "React", icon: "vscode-icons:file-type-reactjs", level: "Intermediate" },
  { name: "Next.js", icon: "vscode-icons:file-type-next", level: "Intermediate" },
  { name: "Vue", icon: "vscode-icons:file-type-vue", level: "Intermediate" },
  { name: "Nuxt.js", icon: "vscode-icons:file-type-nuxt", level: "Intermediate" },
  { name: "Tailwind CSS", icon: "vscode-icons:file-type-tailwind", level: "Advanced" },
];

const tools = [
  { name: "VS Code", icon: "vscode-icons:file-type-vscode" },
  { name: "Git", icon: "vscode-icons:file-type-git" },
  { name: "GitHub", icon: "simple-icons:github" },
  { name: "Vite", icon: "vscode-icons:file-type-vite" },
  { name: "Vercel", icon: "simple-icons:vercel" },
  { name: "Figma", icon: "simple-icons:figma" },
  { name: "npm", icon: "simple-icons:npm" },
  { name: "pnpm", icon: "simple-icons:pnpm" },
];
</script>