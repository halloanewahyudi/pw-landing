<script lang="ts" setup>

import { useRuntimeConfig } from '#app'

definePageMeta({
    layout: 'home'
})

const home = useHome()
const cover = home.value[0].cover
const porto = home.value[0].potfolio
const about = home.value[0].about
const what_we_do = home.value[0].what_we_do


const router = useRouter()

//mengambil data dari wp
const { pageData, acfData, loading, error } = useDataHome()

//ambil image
const { images, isLoading, error: errorImage } = useMarqueeImages();

</script>

<template>
    <div>
        <main >
        <!--  seciton cover -->
        <section class="bg-dark text-light min-h-screen flex flex-col justify-center py-20">
            <div class="flex flex-col lg:flex-row justify-between items-center">
                <div class="content">
                    <div v-if="acfData && acfData.cover">
                        <div class="lg:w-[700px] w-full p-6 shrink-0 relative lg:-right-32 z-10 ">
                            <img src="/aksen.svg" alt="" class="absolute top-5 right-24">
                            <span class="text-yellow font-semibold tracking-widest ">{{ cover.sub_title }}</span>
                            <h1 class="big-title">{{ acfData.cover.title }}</h1>

                            <p> {{ acfData.cover.description }}</p>
                            <ElementsButtonLight @click="router.push(acfData.cover.buton_link.url)"
                                :btnText="acfData.cover.buton_link.title" class="mt-7" />
                        </div>
                    </div>
                </div>

                <div class="w-full overflow-hidden">
                    <div class="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-[1000]"
                        v-if="isLoading">
                        <div>
                           <logo class="animate-bounce" />
                        </div>
                    </div>
                    <div v-else-if="error">Error: {{ error.message }}</div>
                    <div v-else>
                        <Vue3Marquee :clone="true" :duration="5" :gradient="true" :gradientColor="['22', '20', '20']">
                            <div class="porto-marque grid grid-cols-4 grid-rows-2 gap-4">
                                <img :src="images.image1_media" alt="" class="col-span-1 row-span-1">
                                <img :src="images.image2_media" alt="" class="row-span-2 col-span-1">
                                <img :src="images.image3_media" alt="" class="col-span-1 row-span-1">
                                <img :src="images.image4_media" alt="" class="col-span-1 row-span-1">
                                <img :src="images.image5_media" alt="" class="col-span-1 row-span-1">
                                <img :src="images.image6_media" alt="" class="col-span-2 row-span-1">
                            </div>
                        </Vue3Marquee>
                    </div>

                </div>
            </div>
        </section>
        <!--  // end seciton cover -->

        <div>
            <!--  seciton portofolio -->

            <section class="my-20" v-motion :initial="{ y: 100 }" :visible="{ y: 0 }" :duration="5000">
                <div  class="max-w-screen-lg mx-auto px-6 ">
                    <div v-if="acfData && acfData.project_section">
                        <ElementsSectionTitle :title="acfData.project_section.title" :sub_title="acfData.project_section.sub_title" class="mb-20" />
                    </div>
                   
                    <portofolio></portofolio>
                </div>
            </section>
            <!--  // end seciton portofolio -->

            <!--  seciton whoi we are -->
            <section v-motion :initial="{ opacity: 0, scaleX: 0 }" :visible="{ opacity: 1, scaleX: 1 }" :duration="300"
                :delay="100" class="bg-red text-light py-20 lg:py-40 mt-40 w-full origin-left">
                <div v-if="acfData && acfData.who_we_are" class="max-w-screen-lg mx-auto px-6 ">
                    <p class="tracking-widest font-semibold text-yellow">{{ acfData.who_we_are.title }}</p>
                    <inview>
                        <h2 class="leading-normal mb-0 opacity-80">{{ acfData.who_we_are.content }}</h2>
                    </inview>
                </div>
            </section>
            <!--  // end seciton whoi we are -->

          

            <!--  seciton what We do -->
            <section class="px-6 py-20">
                <div class="max-w-screen-lg mx-auto ">
                    <div class="relative flex flex-col items-center group">
                        <div v-if="acfData && acfData.services_section">
                        <p class="font-semibold tracking-wider">{{ acfData.services_section.title }}</p>
                        </div>
                        <services></services>
                    </div>
                </div>
            </section>
            <!--  // end seciton what we do -->
        </div> <!-- end data scroll container -->
    </main>
    </div>
   
</template>
<style lang="postcss" scoped>
.porto-marque {
    img {
        @apply grayscale-[20] opacity-40 hover:grayscale-0 hover:opacity-100 duration-200;
    }
}

section {
    @apply min-h-screen;
}
</style>