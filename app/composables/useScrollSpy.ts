export function useScrollSpy(sectionIds: string[]) {
  const activeSection = ref<string>('');

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
          }
        });
      },
      {
        rootMargin: '-40% 0px -60% 0px',
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    onUnmounted(() => {
      observer.disconnect();
    });
  });

  return { activeSection };
}