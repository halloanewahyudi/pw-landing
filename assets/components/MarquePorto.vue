<template>
    <div class="w-full overflow-hidden">
        <Vue3Marquee  :clone="true" :duration="5" :gradient="true" :gradientColor="['22','20','20']">
            <div class="marque grid grid-cols-4 grid-rows-2 gap-4">
                <img src="/marque/image.png" alt="" class="col-span-1 row-span-1">
                <img src="/marque/image-5.png" alt="" class="row-span-2 col-span-1">
                <img src="/marque/image-1.png" alt="" class="col-span-1 row-span-1">
                <img src="/marque/image-2.png" alt="" class="col-span-1 row-span-1">
                <img src="/marque/image-4.png" alt="" class="col-span-1 row-span-1">
                <img src="/marque/image-3.png" alt="" class="col-span-2 row-span-1" >
            </div>
        </Vue3Marquee>
    </div>

</template>

<style scoped>
.marque img{
    opacity: .5;
    filter: grayscale(7);
    transition: all .25s ease-in;
}
.marque img:hover{
    opacity: 1;
    filter: grayscale(0);
}
</style>