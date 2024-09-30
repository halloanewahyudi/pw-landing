<template>
    <div class="ct-item flex gap-4 p-2 rounded-full">
        <div class="avatar">
         <img :src="props.avatar" alt="" srcset="" class="rounded-full w-[60px] h-[60px]">
        </div>
        <div >
            <h4>{{ props.title }}</h4>
            <span>{{ props.sub_title }}</span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    avatar:String,
    title:String,
    sub_title:String
})
</script>

<style lang="postcss" scoped>
.ct-item{
    @apply bg-[#272626] border border-[#3E3C3C] text-[#B9B9B9] hover:bg-neutral-700 duration-200
}
</style>