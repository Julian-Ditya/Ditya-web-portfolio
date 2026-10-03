export function useEmailLink(email: string) {
  const isMobile = ref(false);

  onMounted(() => {
    isMobile.value = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(
      navigator.userAgent
    );
  });

  const emailHref = computed(() => {
    // HP: pakai mailto biar langsung buka app Gmail
    if (isMobile.value) {
      return `mailto:${email}?subject=${encodeURIComponent("Halo Radit, aku mau ngobrol!")}`;
    }
    // Laptop: buka Gmail web compose langsung
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&subject=${encodeURIComponent("Kirim Pesan ke Julian Ditya")}`;
  });

  return { emailHref, isMobile };
}