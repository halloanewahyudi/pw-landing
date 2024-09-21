<script  setup>
const prop = defineProps({
    title:{
        type:String,
        default:'Sebuah title'
    },
    sub_title:{
         type:String,
        default:'Sebuah sub title'
    }
})
</script>

<template>
    <div class="flex flex-col gap-2">
        <h2>{{ prop.title }}</h2>
        <p class="mt-0">{{ prop.sub_title }}</p>
    </div>

</template>
