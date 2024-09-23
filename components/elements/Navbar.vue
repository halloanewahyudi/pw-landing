<script setup>
const menuOpen = ref(false)
const bgmenu = ref(null)
const openBgmenu = () =>{
  menuOpen =! menuOpen
}


</script>

<template>
    <div>
        <div class="fixed top-0 left-0 w-full min-h-[60px] py-3 z-50">
            <div class="container">
                <div class="flex justify-between items-center">
                    <div class="relative z-50">
                        <router-link to="/">
                            <img src="/logo.svg" alt="">
                        </router-link>
                    </div>
                    <div class="flex items-center justify-center relative ">
                        <button @click="menuOpen = !menuOpen" class="relative z-50">
                            <IconsMenu class=" text-light" />
                        </button>
                        <div ref="bgmenu" :class="{ 'active-menu': menuOpen }"
                            class="bg-menu absolute  w-12 h-12 rounded-full bg-dark flex items-center justify-center duration-700">
                        </div>
                    </div>
                </div>
            </div>

           <!--  mulai open menu -->
           <div v-if="menuOpen">
            <div v-motion :initial="{
                opacity: 0,
            }" :enter="{
                opacity: 1,
            }" :leave="{
                opacity: 0,
            }" :duration="300" 
            :delay="200"
            class="fixed z-40 top-0 left-0 w-full h-full" >
                <div class="relative  min-h-screen flex flex-col justify-center items-center  px-6 ">
                    <div class="max-w-screen-lg w-full mx-auto">
                        <div class="grid grid-cols-1 lg:grid-cols-2 ">
                            <div>
                                <ul class="menu group">
                                    <li>
                                        <NuxtLink to="" @click="menuOpen = false">Project</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/about" @click="menuOpen = false"> Tentang Kami</NuxtLink>

                                    </li>
                                    <li>
                                        <NuxtLink to="/services/website" @click="menuOpen = false">Layanan</NuxtLink>

                                    </li>
                                    <li>
                                        <NuxtLink to="" @click="menuOpen = false">Kontak</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </div>
</template>
<style scoped>
.menu {
    @apply flex flex-col gap-4;
}

.menu li a {
    @apply text-6xl font-bold text-neutral-300 hover:text-light duration-300 block;
}
.menu:hover li a{
    @apply text-neutral-800 ;
}
.menu li a:hover {
    @apply text-6xl font-bold text-light duration-300;
}
.active-menu{
    @apply scale-[100] ;
}
</style>