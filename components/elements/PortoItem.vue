<script setup>
import { ref } from 'vue'
import { useParallax } from '@vueuse/core'

const target = ref(null) // Referensi elemen target
const { tilt, roll, source } = useParallax(target) // Menggunakan useParallax untuk mengakses nilai tilt dan roll

const prop = defineProps({
    image: {
        type: String,
        default: 'https://images.pexels.com/photos/27759067/pexels-photo-27759067/free-photo-of-daun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    title: {
        type: String,
        default: 'Judul',
    },
    description: String,
    link: String
})
</script>

<template>
    <div ref="target" class="porto-item relative">
        <div class=" h-full duration-300" :style="{
            transform: `rotateX(${roll * 20}deg) rotateY(${tilt * 20}deg)`,
            transformOrigin:'left top'
        }">
            <img :src="prop.image" alt="" srcset="" class="h-[620px] w-full object-cover" >
        </div>
        <div class="absolute -right-2 bottom-10">
            <h3>{{ prop.title }}</h3>
            <p class="mt-0">{{ description }}</p>
        </div>
    
    </div>
</template>
