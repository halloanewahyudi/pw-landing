<script  setup>

 const props = defineProps({
    btnText:{
        type:String,
        default:'Button'
    }
 })
</script>

<template>
    <button  class="h-12 px-6 max-w-max flex items-center gap-3 relative group">
        <span class="w-12 h-12 group-hover:w-full duration-300  bg-light bg-opacity-20 rounded-full absolute left-0"></span>
        <span class="font-semibold" >{{ props.btnText }} </span>
        <IconsIconBigArrow />
    </button>
</template>
