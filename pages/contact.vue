<template>
    <div class="bg-dark min-h-[calc(100vh-250px)] pt-24">
        <div class="max-w-screen-lg mx-auto">
            <h2 class="mb-6 text-neutral-500">Proweb Indonesia</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                <div class="flex flex-col gap-12">
                    <form action="">
                        <div class="flex flex-col gap-6 lg:gap-10">
                            <input type="text" class="input" placeholder="Name">
                            <input type="tel" class="input" placeholder="Phone">
                            <input type="email" class="input" placeholder="Email">
                            <button class="bg-text_color py-3 px-6 rounded-full text-yellow max-w-max hover:bg-dark duration-200 border border-text_color "> Jadwalkan Meeting </button>
                        </div>
                    </form>

                </div>
                <div class=" flex flex-col gap-6 lg:gap-10">
                    <ElementsCardContact title="Novia" sub_title="Sales info" avatar="/ava.jpg"/>
                    <ElementsCardContact title="Rahmat" sub_title="Support" avatar="/ava.jpg" />
                    <ElementsCardContact title="Wahyudi" sub_title="Support" avatar="/ava.jpg" />
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
</script>
<style lang="postcss" scoped>
.input{
    @apply bg-transparent  border-b border-neutral-500 p-2 text-neutral-500 focus:border-text_color focus:text-light  outline-none relative;
}
.input:after{
    content: '';
   @apply absolute bottom-0  left-0 border-b block h-2 w-full bg-yellow;
}

</style>
