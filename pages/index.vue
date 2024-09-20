<template>
    <section class="cover overflow-x-hidden">
        <div class="flex flex-col justify-center items-center lg:flex-row lg:justify-between min-h-screen">
            <div class="p-10 max-w-[700px] shrink-0 relative lg:-right-24 z-10">
                <div class="max-w-max relative">
                    <img src="/aksen.svg" alt="" class="absolute right-24 top-6">
                    <span class="tracking-widest text-sm text-yellow font-semibold  MB-5">PROWEB INDONESIA</span>
                    <h2 class="big-title">
                        A digital agency focused on web <span
                            class="w-3 h-3 rounded-full bg-yellow inline-block"></span>
                    </h2>
                    <p>
                        We are a creative team of designers, developers, strategists, and producers building elevated
                        websites in the heart of Silicon Valley.
                    </p>
                    <BtnArrow />
                </div>
            </div>
            <div class="overflow-hidden">
            <PortoCover />
            </div>
        </div>
    </section>
</template>

<script setup>
import BtnArrow from '~/assets/components/buttons/BtnArrow.vue';
import MarquePorto from '~/assets/components/MarquePorto.vue';
import PortoCover from '~/assets/components/PortoCover.vue';

useSeoMeta({
    title: 'jasa website profesional',
    description: 'Loremipsum',
    author: 'proweb indonesia'
})
</script>

<style scoped>
.cover {
    @apply bg-dark text-neutral-100;
}
</style>
