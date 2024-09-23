<template>
    <div class="text-center mt-20 my-10">
        <h1
            class="big-title text-neutral-200 lg:text-[140px] mb-0 relative group-hover:scale-95 duration-300 delay-150 origin-center" v-html="props.title">
        </h1>
        <p class="mt-0" v-html="props.sub_title" ></p>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    sub_title: String
})
</script>

<style lang="scss" scoped></style>