<script setup>

const props = defineProps({
  text:{
    type:String,
    default:'Button'
  }
})
</script>
<template>
    <button class="group h-12 flex gap-2 items-center relative mt-5 px-5 rounded-full   "> 
      <span class="absolute left-0 w-12  h-12 bg-light bg-opacity-10 rounded-full group-hover:w-full  duration-300 "></span>
       <span class="relative tracking-wider"> {{ props.text }} <IconsBigArrow /> </span>
        </button>
</template>

<style  scoped>

</style>