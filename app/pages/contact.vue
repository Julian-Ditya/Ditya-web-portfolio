<template>
  <div class="min-h-screen pt-24 pb-20 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold mb-4">
          Let's <span class="text-[var(--color-neon)]">Connect</span>
        </h1>
        <p class="text-[var(--color-gray)] text-lg">
          Punya project menarik? Yuk ngobrol!
        </p>
      </div>

      <!-- Social Links -->
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          class="p-6 rounded-xl bg-[var(--color-dark-secondary)] border border-transparent hover:border-[var(--color-neon)]/50 transition-all duration-300 hover:-translate-y-1 text-center group"
        >
          <Icon :name="social.icon" class="w-10 h-10 mx-auto mb-3 text-[var(--color-neon)] group-hover:scale-110 transition-transform" />
          <p class="font-medium">{{ social.name }}</p>
          <p class="text-sm text-[var(--color-gray)] mt-1">{{ social.handle }}</p>
        </a>
      </div>

      <!-- Contact Form -->
      <div class="p-8 rounded-2xl bg-[var(--color-dark-secondary)] border border-[var(--color-dark)]">
        <form class="space-y-6">
          <div>
            <label class="block text-sm font-medium mb-2">Nama</label>
            <input
              type="text"
              class="w-full px-4 py-3 rounded-lg bg-[var(--color-dark)] border border-[var(--color-dark)] focus:border-[var(--color-neon)] outline-none transition-colors"
              placeholder="Nama kamu"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              class="w-full px-4 py-3 rounded-lg bg-[var(--color-dark)] border border-[var(--color-dark)] focus:border-[var(--color-neon)] outline-none transition-colors"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Pesan</label>
            <textarea
              rows="5"
              class="w-full px-4 py-3 rounded-lg bg-[var(--color-dark)] border border-[var(--color-dark)] focus:border-[var(--color-neon)] outline-none transition-colors resize-none"
              placeholder="Tulis pesan kamu di sini..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full py-3 bg-[var(--color-neon)] text-[var(--color-dark)] font-semibold rounded-lg hover:shadow-[0_0_20px_var(--color-neon)] transition-all duration-300"
          >
            Kirim Pesan →
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const socials = [
  { name: "GitHub", handle: "julian-ditya", icon: "simple-icons:github", url: "https://github.com/Julian-Ditya" },
  { name: "LinkedIn", handle: "julian-ditya", icon: "simple-icons:linkedin", url: "https://www.linkedin.com/in/julian-ditya/" },
  { name: "Email", handle: "julianditya007@gmail.com", icon: "simple-icons:gmail", url: "mailto:julianditya007@gmail.com" },
];
</script>