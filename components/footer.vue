<template>
    <div class="bg-dark text-neutral-400 py-16">
        <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-3">
                <div class="flex flex-col gap-6">
                    <NuxtLink to="/">
                        <img src="/logo.svg" alt="">
                    </NuxtLink>
                    <address class="text-neutral-400 max-w-[300px]">
                        PT. Proweb Indonesia <br>
                        The City Tower, <br>
                        Level 12 Unit 1-N, <br>
                        Jl. MH Thamrin No.81 <br>
                        Jakarta Pusat, 10310
                    </address>
                    
                </div>
                <div class="flex flex-col gap-4">
                    <p>Hubungi</p>
                    <div class="flex items-center gap-3">
                        <IconsMobile class="text-xl" />
                        0896 52337134
                    </div>
                    <div class="flex items-center gap-3">
                        <IconsMail class="text-xl" />
                        @info@proweb.co.id
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <p class="text-xl font-bold text-light">Customize web <br>
                        for your business </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>