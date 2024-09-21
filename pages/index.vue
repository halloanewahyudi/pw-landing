<script lang="ts" setup>
const home = useHome()
const cover = home.value[0].cover
const porto = home.value[0].potfolio
</script>

<template>
    <main>
        <!--  seciton cover -->
        <section class="bg-dark text-light min-h-screen flex flex-col justify-center">
            <div class="flex flex-col lg:flex-row justify-between items-center">
                <div class="content">
                    <div class="lg:w-[700px] w-full p-6 shrink-0 relative lg:-right-32 z-10 ">
                        <img src="/aksen.svg" alt="" class="absolute top-5 right-24">
                        <span class="text-yellow font-semibold tracking-widest ">{{ cover.sub_title }}</span>
                        <h1 class="big-title">{{ cover.title }}</h1>
                        <p> {{ cover.description }}</p>
                        <ElementsButtonLight btnText="Selanjutnya" class="mt-7" />
                    </div>
                </div>
                <div class="w-full overflow-hidden">
                    <Vue3Marquee :clone="true" :duration="5" :gradient="true" :gradientColor="['22', '20', '20']">
                        <div class="porto-marque grid grid-cols-4 grid-rows-2 gap-4">
                            <img src="/marque/image.png" alt="" class="col-span-1 row-span-1">
                            <img src="/marque/image-5.png" alt="" class="row-span-2 col-span-1">
                            <img src="/marque/image-1.png" alt="" class="col-span-1 row-span-1">
                            <img src="/marque/image-2.png" alt="" class="col-span-1 row-span-1">
                            <img src="/marque/image-4.png" alt="" class="col-span-1 row-span-1">
                            <img src="/marque/image-3.png" alt="" class="col-span-2 row-span-1">
                        </div>
                    </Vue3Marquee>
                </div>
            </div>
        </section>
        <!--  // end seciton cover -->

        <!--  seciton portofolio -->
          <section>
        <div class="max-w-screen-lg mx-auto px-6 mt-20">
            <ElementsSectionTitle :title="porto.title" :sub_title="porto.sub_title" class="mb-20" />
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
                <div v-for="(item, index) in porto.items" :key="index" ref="items">
                    <div>
                        <ElementsPortoItem :title="item.name" :description="item.deacription" :image="item.image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
        <!--  // end seciton portofolio -->

        <!--  seciton whoi we are -->
          <section>
            <div class="max-w-screen-lg mx-auto px-6 mt-20">
            </div>
          </section>
       
        <!--  // end seciton whoi we are -->

        <!--  seciton what We do -->
        <section>
            <div class="max-w-screen-lg mx-auto px-6 mt-20">
            </div>
          </section>
       
        <!--  // end seciton what we do -->
    </main>
</template>
<style lang="postcss" scoped>
.porto-marque {
    img {
        @apply grayscale-[20] opacity-40 hover:grayscale-0 hover:opacity-100 duration-200;
    }
}
</style>