import { ref, computed } from 'vue'
import { useRuntimeConfig } from '#app'

export default function useDataHome() {
  const { public: { baseUrl } } = useRuntimeConfig()
  const porto = ref(null) 
  const loading = ref(true)
  const error = ref(null)

  const fetchporto = async () => {
    try {
      loading.value = true
      const response = await fetch(`${baseUrl}/wp/v2/portotolio?_embed`)
      if (!response.ok) {
        throw new Error(`Error fetching page data: ${response.status} ${response.statusText}`)
      }
      const data = await response.json()
      
      // Assuming the API returns an array, and you want the first item
      porto.value = data[0] 
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  fetchporto()

  // Access ACF fields
  const acfData = computed(() => {
    return porto.value ? porto.value.acf : null 
  })

  return {
    porto,
    acfData, 
    loading,
    error
  }
}
