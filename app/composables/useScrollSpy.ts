export function useScrollSpy(sectionIds: string[]) {
  const activeSection = ref("");
  const route = useRoute();

  const update = () => {
    // Kalau bukan di homepage, tidak ada section yang aktif
    if (route.path !== "/") {
      activeSection.value = "";
      return;
    }

    // Garis imajiner di 40% layar = penentu section aktif
    const marker = window.scrollY + window.innerHeight * 0.4;
    let current = sectionIds[0] || "";

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = id;
      }
    }

    activeSection.value = current;
  };

  onMounted(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
  });

  // Setiap pindah halaman, hitung ulang
  watch(
    () => route.path,
    () => {
      setTimeout(update, 50);
    }
  );

  onUnmounted(() => {
    window.removeEventListener("scroll", update);
  });

  return { activeSection };
}