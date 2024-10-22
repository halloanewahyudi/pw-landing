import { ref, computed } from 'vue'
import { useRuntimeConfig } from '#app'

export default function useDataHome() {
  const { public: { baseUrl } } = useRuntimeConfig()
  const pageData = ref(null) 
  const loading = ref(true)
  const error = ref(null)

  const fetchPageData = async () => {
    try {
      loading.value = true
      const response = await fetch(`${baseUrl}/wp/v2/pages?slug=home-page&_embed`)
      if (!response.ok) {
        throw new Error(`Error fetching page data: ${response.status} ${response.statusText}`)
      }
      const data = await response.json()
      
      // Assuming the API returns an array, and you want the first item
      pageData.value = data[0] 
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  fetchPageData()

  // Access ACF fields
  const acfData = computed(() => {
    return pageData.value ? pageData.value.acf : null 
  })

  return {
    pageData,
    acfData, 
    loading,
    error
  }
}
