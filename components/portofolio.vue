<script setup>
import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#app'
const porto = ref([]);
const { public: { baseUrl } } = useRuntimeConfig()

onMounted(async () => {
  try {
    const response = await fetch(`${baseUrl}/wp/v2/portotolio?_embed`); // Assuming your API endpoint is /api/portofolio
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    porto.value = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately, e.g., display an error message to the user
  }
});

</script>
<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
        <div v-for="(item, index) in porto" :key="index" ref="items">
            <ElementsPortoItem :title="item.title.rendered" :description="item.acf.description" :image="item._embedded['wp:featuredmedia'][0].source_url" />
        </div>
    </div>
</template>