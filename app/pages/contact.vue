<template>
  <div class="min-h-screen pt-24 pb-20 px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1 text-sm rounded-full bg-[var(--color-neon)]/10 text-[var(--color-neon)] border border-[var(--color-neon)]/20 mb-4">
          Contact
        </span>
        <h1 class="text-5xl font-bold mb-4">
          Let's <span class="text-[var(--color-neon)]">Connect</span>
        </h1>
        <p class="text-[var(--color-gray)] text-lg">
          Lagi butuh teman bikin website, atau sekadar mau tukar pikiran soal frontend? Pintu chat-ku terbuka.
        </p>
      </div>

      <!-- Social Cards -->
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <a
          v-for="social in externalSocials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="p-6 rounded-xl bg-[var(--color-dark-secondary)] border border-transparent hover:border-[var(--color-neon)]/50 transition-all duration-300 hover:-translate-y-1 text-center group"
        >
          <Icon :name="social.icon" class="w-10 h-10 mx-auto mb-3 text-[var(--color-neon)] group-hover:scale-110 transition-transform" />
          <p class="font-medium">{{ social.name }}</p>
          <p class="text-sm text-[var(--color-gray)] mt-1">{{ social.handle }}</p>
        </a>

        <!-- Email card: HP → app Gmail, Laptop → Gmail web -->
        <a
          :href="emailHref"
          target="_blank"
          rel="noopener noreferrer"
          class="p-6 rounded-xl bg-[var(--color-dark-secondary)] border border-transparent hover:border-[var(--color-neon)]/50 transition-all duration-300 hover:-translate-y-1 text-center group"
        >
          <Icon name="simple-icons:gmail" class="w-10 h-10 mx-auto mb-3 text-[var(--color-neon)] group-hover:scale-110 transition-transform" />
          <p class="font-medium">Email</p>
          <p class="text-sm text-[var(--color-gray)] mt-1">{{ myEmail }}</p>
          <p class="text-xs mt-2 text-[var(--color-neon)]">Klik untuk kirim pesan via Gmail</p>
        </a>
      </div>

      <!-- Contact Form -->
      <div class="p-8 rounded-2xl bg-[var(--color-dark-secondary)] border border-[var(--color-dark)]">
        <form class="space-y-6" @submit.prevent="sendMessage">
          <div>
            <label class="block text-sm font-medium mb-2">Nama</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 rounded-lg bg-[var(--color-dark)] border border-[var(--color-dark)] focus:border-[var(--color-neon)] outline-none transition-colors"
              placeholder="Nama kamu"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 rounded-lg bg-[var(--color-dark)] border border-[var(--color-dark)] focus:border-[var(--color-neon)] outline-none transition-colors"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Pesan</label>
            <textarea
              v-model="form.message"
              rows="5"
              required
              class="w-full px-4 py-3 rounded-lg bg-[var(--color-dark)] border border-[var(--color-dark)] focus:border-[var(--color-neon)] outline-none transition-colors resize-none"
              placeholder="Tulis pesan kamu di sini..."
            ></textarea>
          </div>
          <button
            type="submit"
            :disabled="status === 'sending'"
            class="w-full py-3 bg-[var(--color-neon)] text-[var(--color-dark)] font-semibold rounded-lg hover:shadow-[0_0_20px_var(--color-neon)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {{ status === "sending" ? "Mengirim..." : "Kirim Pesan →" }}
          </button>

          <p v-if="status === 'success'" class="text-center text-sm text-[var(--color-neon)]">
            Pesan terkirim! Aku akan balas secepatnya. 🙌
          </p>
          <p v-if="status === 'error'" class="text-center text-sm text-red-400">
            Ups, gagal mengirim. Coba lagi, atau klik card Email di atas untuk hubungi manual.
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useEmailLink } from "~/composables/useEmailLink";

const myEmail = "julianditya007@gmail.com";
const { emailHref } = useEmailLink(myEmail);

const externalSocials = [
  { name: "GitHub", handle: "julian-ditya", icon: "simple-icons:github", url: "https://github.com/Julian-Ditya" },
  { name: "LinkedIn", handle: "julian-ditya", icon: "simple-icons:linkedin", url: "https://www.linkedin.com/in/julian-ditya/" },
];

const form = reactive({ name: "", email: "", message: "" });
const status = ref("");

// Kirim pesan via FormSubmit → masuk ke Gmail kamu + notif
const sendMessage = async () => {
  status.value = "sending";
  try {
    const res = await fetch("https://formsubmit.co/ajax/" + myEmail, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: "Pesan baru dari portfolio: " + form.name,
        _captcha: "false",
        _template: "table",
        Nama: form.name,
        Email: form.email,
        Pesan: form.message,
      }),
    });

    if (res.ok) {
      status.value = "success";
      form.name = "";
      form.email = "";
      form.message = "";
    } else {
      status.value = "error";
    }
  } catch {
    status.value = "error";
  }
};
</script>