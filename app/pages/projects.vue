<template>
  <div class="min-h-screen pt-24 pb-20 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold mb-4">
          My <span class="text-[var(--color-neon)]">Projects</span>
        </h1>
        <p class="text-[var(--color-gray)] text-lg max-w-2xl mx-auto">
          Kumpulan project yang sudah saya kerjakan
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: "Larut Project",
    description: "Landing page brand teh botolan dengan konsep seduh interaktif. Project tempat aku belajar kalau 'works di localhost' belum tentu works di production.",
    image: "/images/larut-ss.png",
    url: "https://larut-project.vercel.app/",
    tech: ["Nuxt.js", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Mendaki Project",
    description: "Website open trip pendakian lengkap dengan galeri, itinerary, dan paket harga. Project yang ngajarin aku pentingnya struktur konten yang jelas biar pengunjung langsung paham (dan pengin ikut trip).",
    image: "/images/mendaki-ss.png",
    url: "https://mendaki-project-pied.vercel.app/",
    tech: ["Next.js", "JavaScript", "Responsive Design"],
  },
];
</script>