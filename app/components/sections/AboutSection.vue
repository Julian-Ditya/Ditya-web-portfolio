<template>
  <section id="about" class="min-h-screen py-20 px-6 relative">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1 text-sm rounded-full bg-[var(--color-neon)]/10 text-[var(--color-neon)] border border-[var(--color-neon)]/20 mb-4">
          About Me
        </span>
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Kenalan <span class="text-[var(--color-neon)]">Lebih Dekat</span>
        </h2>
        <p class="text-[var(--color-gray)] text-lg max-w-2xl mx-auto">
          Sedikit cerita tentang siapa saya dan perjalanan saya di dunia programming
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid md:grid-cols-5 gap-12">        <!-- Photo -->
        <div class="md:col-span-2">
          <div class="md:sticky md:top-28">
            <div class="relative group">
              <div class="w-full aspect-square rounded-2xl overflow-hidden border border-[var(--color-dark-secondary)] group-hover:border-[var(--color-neon)]/30 transition-all duration-500">
                <img
                  src="/images/profile.jpg"
                  alt="Raditya Julian Primasakti"
                  class="w-full h-full object-cover scale-150 object-[center_30%] group-hover:scale-[1.6] transition-transform duration-700"
                />
              </div>
              <!-- Decorative -->
              <div class="absolute -bottom-4 -right-4 w-full h-full border-2 border-[var(--color-neon)]/20 rounded-2xl -z-10 group-hover:-bottom-6 group-hover:-right-6 transition-all duration-500"></div>
            </div>

            <!-- Quick Info Cards -->
            <div class="mt-8 space-y-3">
              <div class="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-dark-secondary)]">
                <Icon name="mdi:location" class="w-5 h-5 text-[var(--color-neon)]" />
                <span class="text-sm text-[var(--color-gray)]">Indonesia</span>
              </div>
              <div class="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-dark-secondary)]">
                <Icon name="mdi:briefcase-outline" class="w-5 h-5 text-[var(--color-neon)]" />
                <span class="text-sm text-[var(--color-gray)]">Frontend Developer</span>
              </div>
              <div class="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-dark-secondary)]">
                <Icon name="mdi:school-outline" class="w-5 h-5 text-[var(--color-neon)]" />
                <span class="text-sm text-[var(--color-gray)]">Self-Taught Developer</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="md:col-span-3 space-y-8">
          <!-- Intro -->
          <section class="space-y-4">
            <h3 class="text-2xl font-bold flex items-center gap-3">
              <span class="w-8 h-1 bg-[var(--color-neon)]"></span>
              Siapa Saya?
            </h3>
            <p class="text-[var(--color-gray)] leading-relaxed">
              Halo! Saya <span class="text-[var(--color-white)] font-semibold">Ditya</span>, 
              seorang self-taught frontend developer yang passionate dengan teknologi web modern. 
              Saya menikmati proses membangun antarmuka yang tidak hanya terlihat bagus, tapi juga memberikan 
              pengalaman pengguna yang seamless dan accessible.
            </p>
            <p class="text-[var(--color-gray)] leading-relaxed">
              Perjalanan saya di dunia programming dimulai dari rasa penasaran bagaimana website-website keren 
              bisa dibuat? Dari situlah saya mulai belajar HTML, CSS, JavaScript, dan terus berkembang hingga 
              framework modern seperti React dan Vue.
            </p>
          </section>

          <!-- Journey / Timeline -->
          <section class="space-y-4">
            <h3 class="text-2xl font-bold flex items-center gap-3">
              <span class="w-8 h-1 bg-[var(--color-neon)]"></span>
              Perjalanan Saya
            </h3>
            <div class="space-y-4">
              <TimelineItem
                v-for="item in journey"
                :key="item.title"
                :item="item"
              />
            </div>
          </section>

          <!-- What I Do -->
          <section class="space-y-4">
            <h3 class="text-2xl font-bold flex items-center gap-3">
              <span class="w-8 h-1 bg-[var(--color-neon)]"></span>
              Apa yang Saya Lakukan
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="service in services"
                :key="service.title"
                class="p-5 rounded-xl bg-[var(--color-dark-secondary)] border border-transparent hover:border-[var(--color-neon)]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon :name="service.icon" class="w-8 h-8 text-[var(--color-neon)] mb-3" />
                <h4 class="font-semibold mb-2">{{ service.title }}</h4>
                <p class="text-sm text-[var(--color-gray)]">{{ service.description }}</p>
              </div>
            </div>
          </section>

          <!-- Fun Facts -->
          <section class="p-6 rounded-2xl bg-gradient-to-br from-[var(--color-neon)]/5 to-transparent border border-[var(--color-neon)]/10">
            <h4 class="font-bold mb-4 flex items-center gap-2">
              <Icon name="mdi:lightbulb-on" class="w-5 h-5 text-[var(--color-neon)]" />
              Fun Facts
            </h4>
            <ul class="space-y-2 text-sm text-[var(--color-gray)]">
              <li class="flex items-start gap-2">
                <span class="text-[var(--color-neon)]">▹</span>
                Suka ngoding sambil dengerin musik lawas tahun 1980an
              </li>
              <li class="flex items-start gap-2">
                <span class="text-[var(--color-neon)]">▹</span>
                Belajar dari YouTube, dokumentasi, dan project sendiri
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TimelineItem from '~/components/TimelineItem.vue';

const journey = [
  {
    year: "2023",
    title: "Mulai Belajar Web Development",
    description: "Mempelajari HTML dan CSS secara otodidak melalui Youtube dan Kampus.",
    icon: "mdi:rocket-launch",
  },
  {
    year: "2024",
    title: "Belajar Javascript",
    description: "Baca dokumentasi resmi javascript jadi kebiasaan baru.",
    icon: "mdi:book-open-variant",
  },
  {
    year: "2025",
    title: "Ekspansi ke Framework Modern",
    description: "Mempelajari React, Next.js, Vue, dan Nuxt.js secara otodidak melalui dokumentasi resmi dan langsung dipraktikkan ke project nyata.",
    icon: "mdi:trending-up",
  },
];

const services = [
  {
    title: "Web Development",
    description: "Membangun website modern dan responsif menggunakan framework terkini.",
    icon: "mdi:web",
  },
  {
    title: "Responsive Design",
    description: "Memastikan tampilan website rapi dan nyaman di semua perangkat.",
    icon: "mdi:cellphone",
  },
  {
    title: "Landing Page",
    description: "Membuat landing page yang menarik, cepat, dan enak dilihat.",
    icon: "mdi:monitor-dashboard",
  },
  {
    title: "Git & Version Control",
    description: "Semua kode tersimpan rapi di GitHub jadi gampang dilacak, di-review, dan dikembangkan lagi",
    icon: "mdi:source-branch",
  },
];
</script>