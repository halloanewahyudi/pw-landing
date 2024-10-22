import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#app'
export const useMarqueeImages = () => {
  const images = ref(null);
  const isLoading = ref(true);
  const error = ref(null);
  const { public: { baseUrl } } = useRuntimeConfig();

  onMounted(async () => {
    try {
      const response = await fetch(`${baseUrl}/ssmarquee/v1/options`); // Gabungkan base URL
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      images.value = await response.json();
      isLoading.value = false;
    } catch (err) {
      error.value = err;
      isLoading.value = false;
    }
  });

  return { images, isLoading, error };
};
