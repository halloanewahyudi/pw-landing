<script lang="ts" setup>
const route = useRoute()

useSeoMeta({
  title: 'Layanan odoo',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const home = useHome()
const what_we_do = home.value[0].what_we_do
const service = useServices()
const odoo = service.value[0].odoo

</script>

<template>
    <section class="px-6 py-20">
            <div class="max-w-screen-lg mx-auto ">
                <div class="relative flex flex-col items-center group">
                    <p class="font-semibold tracking-wider">Services</p>
          
                    <div class="flex gap-4 items-center justify-center">
                        <div v-for="(item, index) in what_we_do.services" :key="index">
                            <NuxtLink :to="`${item.link}`"> {{ item.name }} </NuxtLink>
                        </div>
                    </div>
                        <div class="service-content">
                            <inview class="flex flex-col items-center group">
                                <h1  class="big-title text-neutral-200 lg:text-[140px] mb-0 relative group-hover:scale-95 duration-300 delay-150 origin-center">
                                    {{ odoo.title }}
                                </h1>
                            </inview>
                            <div class="relative flex flex-col gap-5 ">
                                <div v-html="odoo.content"></div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
</template>
